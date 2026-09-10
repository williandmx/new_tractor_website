import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../src/main.js", import.meta.url), "utf8");
const consentKey = "newtractor-analytics-consent-v1";
const gtmId = "GTM-T3RNZ98";

const makeClassList = () => {
  const names = new Set();
  return {
    add: (...items) => items.forEach((item) => names.add(item)),
    remove: (...items) => items.forEach((item) => names.delete(item)),
    toggle: (item, force) => {
      const next = force === undefined ? !names.has(item) : force;
      if (next) names.add(item);
      else names.delete(item);
      return next;
    },
    contains: (item) => names.has(item),
  };
};

const makeElement = (dataset = {}) => {
  const attributes = new Map();
  return Object.assign(new EventTarget(), {
    dataset,
    classList: makeClassList(),
    setAttribute(name, value) {
      attributes.set(name, String(value));
    },
    removeAttribute(name) {
      attributes.delete(name);
    },
    getAttribute(name) {
      return attributes.get(name);
    },
    hasAttribute(name) {
      return attributes.has(name);
    },
    querySelector: () => null,
    focus() {},
  });
};

const makeStorage = (initialValue) => {
  let value = initialValue;
  return {
    getItem(key) {
      return key === consentKey ? value : null;
    },
    setItem(key, next) {
      if (key === consentKey) value = String(next);
    },
    removeItem(key) {
      if (key === consentKey) value = null;
    },
    value: () => value,
  };
};

function setup({ origin, storedConsent = null, pathname = "/contato/" } = {}) {
  const storage = makeStorage(storedConsent);
  const header = makeElement();
  const navToggle = makeElement();
  const navLink = makeElement();
  const banner = makeElement();
  const reset = makeElement();
  const accepted = makeElement({ consent: "accepted" });
  const essential = makeElement({ consent: "essential" });
  const cta = makeElement({ analytics: "whatsapp_contato" });
  const surfaces = [".company-nav", "main", ".site-footer", ".whatsapp-float", ".consent"]
    .map(() => makeElement());
  const scripts = [];
  let reloads = 0;
  banner.querySelector = (selector) => (selector === "button" ? accepted : null);

  const selectors = new Map([
    ["[data-header]", header],
    ["[data-nav-toggle]", navToggle],
    ["[data-consent-banner]", banner],
    ["[data-reset-consent]", reset],
    ["#site-nav a", navLink],
    [".company-nav", surfaces[0]],
    ["main", surfaces[1]],
    [".site-footer", surfaces[2]],
    [".whatsapp-float", surfaces[3]],
    [".consent", surfaces[4]],
  ]);
  const document = Object.assign(new EventTarget(), {
    documentElement: makeElement(),
    body: makeElement(),
    head: {
      append(script) {
        scripts.push(script);
      },
    },
    createElement: () => makeElement(),
    querySelector(selector) {
      if (selector === `script[data-gtm="${gtmId}"]`) {
        return scripts.find((script) => script.dataset.gtm === gtmId) ?? null;
      }
      return selectors.get(selector) ?? null;
    },
    querySelectorAll(selector) {
      if (selector === "#site-nav a") return [navLink];
      if (selector === "[data-current-year]") return [];
      if (selector === "[data-consent]") return [accepted, essential];
      if (selector === "[data-analytics]") return [cta];
      return [];
    },
  });
  const breakpoint = new EventTarget();
  const window = Object.assign(new EventTarget(), {
    scrollY: 0,
    requestAnimationFrame: (callback) => callback(),
    matchMedia: () => breakpoint,
    localStorage: storage,
    location: {
      origin,
      pathname,
      reload() {
        reloads += 1;
      },
    },
  });

  vm.runInNewContext(source, { document, window, Date });
  return {
    accepted,
    essential,
    reset,
    cta,
    banner,
    window,
    storage,
    scripts,
    reloads: () => reloads,
  };
}

const entries = (ui) => ui.window.dataLayer ?? [];
const asArray = (entry) => (entry && typeof entry.length === "number" ? Array.from(entry) : []);
const consentCommands = (ui) => entries(ui).map(asArray).filter((entry) => entry[0] === "consent");
const siteEvents = (ui) => entries(ui).filter((entry) => entry?.event === "site_cta_click");

test("somente as origens HTTPS canônicas podem carregar o GTM ou emitir eventos", () => {
  const cases = [
    ["https://newtractor.com.br", true],
    ["https://www.newtractor.com.br", true],
    ["http://newtractor.com.br", false],
    ["https://newtractor.com.br.evil.example", false],
    ["https://preview.newtractor.pages.dev", false],
    ["http://localhost:8788", false],
  ];

  for (const [origin, allowed] of cases) {
    const ui = setup({ origin, storedConsent: "accepted" });
    ui.cta.dispatchEvent(new Event("click"));
    assert.equal(ui.scripts.length, allowed ? 1 : 0, `${origin}: carregamento do GTM`);
    assert.equal(siteEvents(ui).length, allowed ? 1 : 0, `${origin}: evento de CTA`);
    if (allowed) assert.equal(consentCommands(ui).length, 2, `${origin}: consentimento inicial`);
    else assert.equal("dataLayer" in ui.window, false, `${origin}: não cria dataLayer`);
  }
});

test("sem aceite explícito a origem de produção não carrega tag nem mede clique", () => {
  const ui = setup({ origin: "https://newtractor.com.br" });
  assert.equal(ui.banner.hasAttribute("hidden"), false, "banner visível antes da escolha");
  ui.cta.dispatchEvent(new Event("click"));
  assert.equal(ui.scripts.length, 0);
  assert.equal("dataLayer" in ui.window, false);
  assert.equal(siteEvents(ui).length, 0);

  ui.accepted.dispatchEvent(new Event("click"));
  assert.equal(ui.scripts.length, 1, "aceite explícito carrega uma tag");
  assert.equal(consentCommands(ui).at(-1)[2].analytics_storage, "granted");
  ui.cta.dispatchEvent(new Event("click"));
  assert.equal(siteEvents(ui).length, 1);
});

test("a interface de consentimento continua operando no preview sem criar telemetria", () => {
  const ui = setup({ origin: "https://preview.newtractor.pages.dev" });
  assert.equal(ui.banner.hasAttribute("hidden"), false, "banner visível no preview");

  ui.accepted.dispatchEvent(new Event("click"));
  assert.equal(ui.banner.hasAttribute("hidden"), true, "aceite fecha o banner");
  assert.equal(ui.scripts.length, 0);
  assert.equal("dataLayer" in ui.window, false);

  ui.reset.dispatchEvent(new Event("click"));
  assert.equal(ui.banner.hasAttribute("hidden"), false, "revisar reabre o banner");
  ui.essential.dispatchEvent(new Event("click"));
  assert.equal(ui.banner.hasAttribute("hidden"), true, "só essenciais fecha o banner");
  assert.equal(ui.reloads(), 0, "preview não recarrega por uma tag inexistente");
  assert.equal(ui.storage.value(), "essential");
});
