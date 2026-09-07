import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../src/main.js", import.meta.url), "utf8");

function setup() {
  let focused;
  const element = () => {
    const attributes = new Map();
    const classes = new Set();
    return Object.assign(new EventTarget(), {
      classList: {
        add: (name) => classes.add(name),
        remove: (name) => classes.delete(name),
        toggle: (name, force) => force ? classes.add(name) : classes.delete(name),
        contains: (name) => classes.has(name),
      },
      setAttribute: (name, value) => attributes.set(name, value),
      removeAttribute: (name) => attributes.delete(name),
      getAttribute: (name) => attributes.get(name),
      hasAttribute: (name) => attributes.has(name),
      querySelector: () => ({textContent: ""}),
      focus() { focused = this; },
    });
  };
  const header = element();
  const toggle = element();
  const link = element();
  const surfaces = new Map(["main", ".site-footer", ".whatsapp-float", ".consent", ".company-nav"].map(name => [name, element()]));
  const elements = new Map([...surfaces, ["[data-header]", header], ["[data-nav-toggle]", toggle], ["#site-nav a", link]]);
  const document = Object.assign(new EventTarget(), {
    documentElement: element(), body: element(),
    querySelector: (selector) => elements.get(selector) ?? null,
    querySelectorAll: (selector) => selector === "#site-nav a" ? [link] : [],
  });
  const breakpoint = new EventTarget();
  const window = Object.assign(new EventTarget(), {
    scrollY: 0,
    requestAnimationFrame: (callback) => callback(),
    matchMedia: (query) => { assert.equal(query, "(max-width: 860px)"); return breakpoint; },
    localStorage: { getItem: () => "essential" },
  });
  vm.runInNewContext(source, { document, window, Date });
  return {document, header, toggle, link, surfaces, breakpoint, focused: () => focused};
}

test("menu móvel bloqueia superfícies externas e Escape devolve foco", () => {
  const ui = setup();
  ui.toggle.dispatchEvent(new Event("click"));
  assert.equal(ui.toggle.getAttribute("aria-expanded"), "true");
  assert.equal(ui.focused(), ui.link);
  for (const [name, surface] of ui.surfaces) assert.ok(surface.hasAttribute("inert"), name);
  ui.document.dispatchEvent(Object.assign(new Event("keydown"), {key: "Escape"}));
  assert.equal(ui.toggle.getAttribute("aria-expanded"), "false");
  assert.equal(ui.focused(), ui.toggle);
  for (const surface of ui.surfaces.values()) assert.ok(!surface.hasAttribute("inert"));
});

test("sair do breakpoint móvel fecha menu e restaura interação e rolagem", () => {
  const ui = setup();
  ui.toggle.dispatchEvent(new Event("click"));
  ui.breakpoint.dispatchEvent(Object.assign(new Event("change"), {matches: false}));
  assert.equal(ui.toggle.getAttribute("aria-expanded"), "false");
  assert.ok(!ui.header.classList.contains("nav-expanded"));
  assert.ok(!ui.document.body.classList.contains("nav-open"));
  for (const surface of ui.surfaces.values()) assert.ok(!surface.hasAttribute("inert"));
});
