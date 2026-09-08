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

const makeStorage = (initialValue, { getThrows = false, setThrows = false, removeThrows = false } = {}) => {
  let value = initialValue;
  return {
    getItem(key) {
      if (getThrows) throw new Error("localStorage indisponível");
      return key === consentKey ? value : null;
    },
    setItem(key, next) {
      if (setThrows) throw new Error("localStorage indisponível");
      if (key === consentKey) value = String(next);
    },
    removeItem(key) {
      if (removeThrows) throw new Error("localStorage indisponível");
      if (key === consentKey) value = null;
    },
    value() {
      return value;
    },
  };
};

function setup({ storedConsent = null, storageOptions = {}, pathname = "/contato/", ctaNames = ["whatsapp_contato"] } = {}) {
  const storage = makeStorage(storedConsent, storageOptions);
  const header = makeElement();
  const navToggle = makeElement();
  const navLink = makeElement();
  const banner = makeElement();
  const reset = makeElement();
  const accepted = makeElement({ consent: "accepted" });
  const essential = makeElement({ consent: "essential" });
  const ctas = ctaNames.map((name) => makeElement({ analytics: name }));
  const surfaces = [".company-nav", "main", ".site-footer", ".whatsapp-float", ".consent"]
    .map(() => makeElement());
  const scripts = [];
  let reloads = 0;
  banner.querySelector = (selector) => (selector === "button" ? accepted : null);

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
      if (selectors.has(selector)) return selectors.get(selector);
      if (selector === `script[data-gtm="${gtmId}"]`) {
        return scripts.find((script) => script.dataset.gtm === gtmId) ?? null;
      }
      return null;
    },
    querySelectorAll(selector) {
      if (selector === "#site-nav a") return [navLink];
      if (selector === "[data-current-year]") return [];
      if (selector === "[data-consent]") return [accepted, essential];
      if (selector === "[data-analytics]") return ctas;
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
    cta: ctas[0],
    ctas,
    banner,
    document,
    window,
    storage,
    scripts,
    reloads: () => reloads,
    breakpoint,
  };
}

const entries = (ui) => ui.window.dataLayer ?? [];
const asArray = (entry) => (entry && typeof entry.length === "number" ? Array.from(entry) : []);
const consentCommands = (ui) => entries(ui).map(asArray).filter((entry) => entry[0] === "consent");
const siteEvents = (ui) => entries(ui).filter((entry) => entry?.event === "site_cta_click");
const gtmEvents = (ui) => entries(ui).filter((entry) => entry?.event === "gtm.js");

const storageEvent = (key, newValue) => {
  const event = new Event("storage");
  Object.defineProperties(event, {
    key: { value: key },
    newValue: { value: newValue },
  });
  return event;
};

const assertConsentFields = (command, expectedStorage) => {
  assert.equal(command[0], "consent");
  assert.equal(command[2].analytics_storage, expectedStorage);
  assert.equal(command[2].ad_storage, "denied");
  assert.equal(command[2].ad_user_data, "denied");
  assert.equal(command[2].ad_personalization, "denied");
};

test("sem aceite ou só essenciais, não carrega GTM nem registra clique", () => {
  for (const storedConsent of [null, "essential"]) {
    const ui = setup({ storedConsent });
    ui.cta.dispatchEvent(new Event("click"));
    assert.equal(ui.scripts.length, 0, `${storedConsent ?? "sem escolha"}: sem script GTM`);
    assert.equal(siteEvents(ui).length, 0, `${storedConsent ?? "sem escolha"}: sem site_cta_click`);
    assert.equal(consentCommands(ui).some((command) => command[1] === "update" && command[2].analytics_storage === "granted"), false);
  }
});

test("aceite com localStorage bloqueado mantém o estado em memória e registra uma vez", () => {
  const ui = setup({ storageOptions: { getThrows: true, setThrows: true, removeThrows: true } });
  ui.accepted.dispatchEvent(new Event("click"));
  ui.cta.dispatchEvent(new Event("click"));

  assert.equal(ui.scripts.length, 1, "um único script GTM");
  assert.equal(gtmEvents(ui).length, 1, "um único evento de inicialização");
  const commands = consentCommands(ui);
  assert.equal(commands.length, 2, "default e update de consentimento");
  assert.equal(commands[0][1], "default");
  assertConsentFields(commands[0], "denied");
  assert.equal(commands[1][1], "update");
  assertConsentFields(commands[1], "granted");
  const grantedIndex = entries(ui).findIndex((entry) => entry?.[0] === "consent" && entry?.[1] === "update" && entry?.[2]?.analytics_storage === "granted");
  const gtmIndex = entries(ui).findIndex((entry) => entry?.event === "gtm.js");
  assert.ok(grantedIndex >= 0, "update de consentimento presente no dataLayer original");
  assert.ok(gtmIndex >= 0, "gtm.js presente no dataLayer original");
  assert.ok(grantedIndex < gtmIndex, "update precede gtm.js");

  const [siteEvent] = siteEvents(ui);
  assert.equal(siteEvent.event, "site_cta_click");
  assert.equal(siteEvent.cta_name, "whatsapp_contato");
  assert.equal(siteEvent.cta_channel, "whatsapp");
  assert.equal(siteEvent.page_path, "/contato/");
  assert.deepEqual(Object.keys(siteEvent).sort(), ["cta_channel", "cta_name", "event", "page_path"]);
  for (const key of ["href", "url", "link_url", "query"]) assert.equal(key in siteEvent, false, `${key} não é enviado`);
});

test("aceite explícito funciona em storage somente leitura, mas aceite antigo não é reutilizado", () => {
  const storageOptions = { setThrows: true, removeThrows: true };
  const ui = setup({ storedConsent: "accepted", storageOptions });
  assert.equal(ui.scripts.length, 0, "aceite antigo não passa pela verificação de escrita");
  assert.equal(siteEvents(ui).length, 0);

  ui.accepted.dispatchEvent(new Event("click"));
  assert.equal(ui.scripts.length, 1, "aceite explícito vale na memória da página");
  ui.reset.dispatchEvent(new Event("click"));
  ui.essential.dispatchEvent(new Event("click"));
  assert.equal(ui.reloads(), 1, "revogação explícita recarrega");
  assertConsentFields(consentCommands(ui).at(-1), "denied");
  assert.equal(ui.storage.value(), "accepted", "storage antigo permanece por ser somente leitura");

  const fresh = setup({ storedConsent: ui.storage.value(), storageOptions });
  assert.equal(fresh.scripts.length, 0, "nova página não reativa aceite não revogável");
});

test("revisar e escolher só essenciais envia negação e recarrega a página", () => {
  const ui = setup({ storedConsent: "accepted" });
  assert.equal(ui.scripts.length, 1, "aceite persistido carrega GTM");
  ui.reset.dispatchEvent(new Event("click"));
  assert.equal(ui.reloads(), 0, "revisar sozinho não recarrega");
  assert.equal(ui.banner.hasAttribute("hidden"), false, "banner reaberto");

  ui.essential.dispatchEvent(new Event("click"));
  assert.equal(ui.reloads(), 1, "negação após GTM carregado recarrega");
  const commands = consentCommands(ui);
  assertConsentFields(commands.at(-1), "denied");
  assert.equal(ui.storage.value(), "essential");
  ui.cta.dispatchEvent(new Event("click"));
  assert.equal(siteEvents(ui).length, 0, "clique após negação não é emitido");
});

test("escolha aceita repetida não duplica script, comandos ou listeners", () => {
  const ui = setup();
  ui.accepted.dispatchEvent(new Event("click"));
  ui.accepted.dispatchEvent(new Event("click"));
  assert.equal(ui.scripts.length, 1);
  assert.equal(consentCommands(ui).length, 2, "uma sequência default/update");
  assert.equal(gtmEvents(ui).length, 1);

  ui.cta.dispatchEvent(new Event("click"));
  ui.cta.dispatchEvent(new Event("click"));
  assert.equal(siteEvents(ui).length, 2, "um evento por clique real");
});

test("site_cta_click classifica canais sem transportar URL ou query", () => {
  const ui = setup({
    storedConsent: "accepted",
    ctaNames: ["email_contato", "telefone_contato", "mapa_contato", "empresa_rodantes", "contato_rodape"],
  });
  ui.ctas.forEach((cta) => cta.dispatchEvent(new Event("click")));
  assert.deepEqual(
    Array.from(siteEvents(ui), (event) => [event.cta_name, event.cta_channel]),
    [["email_contato", "email"], ["telefone_contato", "phone"], ["mapa_contato", "map"], ["empresa_rodantes", "site"], ["contato_rodape", "site"]],
  );
  for (const event of siteEvents(ui)) {
    assert.equal("url" in event, false);
    assert.equal("query" in event, false);
  }
});

test("revogação recebida por storage entre abas nega analytics e não duplica a reação", () => {
  const ui = setup({ storedConsent: "accepted" });
  ui.storage.setItem(consentKey, "essential");
  ui.window.dispatchEvent(storageEvent(consentKey, "essential"));
  assert.equal(ui.reloads(), 1, "revogação entre abas recarrega");
  assertConsentFields(consentCommands(ui).at(-1), "denied");

  ui.window.dispatchEvent(storageEvent(consentKey, "essential"));
  assert.equal(ui.reloads(), 1, "mesma escolha não repete reação");
  ui.storage.setItem("outra-chave", "valor");
  ui.window.dispatchEvent(storageEvent("outra-chave", "valor"));
  assert.equal(ui.reloads(), 1, "chave não relacionada é ignorada");
});
