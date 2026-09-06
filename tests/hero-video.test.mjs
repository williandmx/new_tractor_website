import test from "node:test";
import assert from "node:assert/strict";
import { mountHeroFilm } from "../src/hero-video.js";

const flush = () => new Promise((resolve) => setImmediate(resolve));
function setup({ reduced = false, saveData = false, mobile = false, reject = false, deferred = false } = {}) {
  const attrs = new Map();
  const video = Object.assign(new EventTarget(), {
    paused: true, playCalls: 0, muted: false,
    dataset: { mobile: "mobile.mp4", desktop: "desktop.mp4" },
    getAttribute: (key) => attrs.get(key),
    pause() { this.paused = true; this.dispatchEvent(new Event("pause")); },
    play() {
      this.playCalls++;
      if (reject) return Promise.reject(new Error("autoplay denied"));
      this.paused = false;
      this.dispatchEvent(new Event("playing"));
      return deferred ? new Promise((resolve) => { this.resolvePlay = resolve; }) : Promise.resolve();
    },
  });
  Object.defineProperty(video, "src", { set: (value) => attrs.set("src", value), get: () => attrs.get("src") });
  const toggle = Object.assign(new EventTarget(), { hidden: true, textContent: "Reproduzir vídeo" });
  const classes = new Set();
  const container = { querySelector: (selector) => selector === "video" ? video : toggle, classList: { add: (value) => classes.add(value), remove: (value) => classes.delete(value) } };
  const motion = Object.assign(new EventTarget(), { matches: reduced });
  const connection = Object.assign(new EventTarget(), { saveData });
  const doc = Object.assign(new EventTarget(), { hidden: false });
  let intersect;
  const env = {
    document: doc, navigator: { connection },
    matchMedia: (query) => query.includes("reduced-motion") ? motion : { matches: mobile },
    IntersectionObserver: class { constructor(callback) { intersect = callback; } observe() {} },
  };
  mountHeroFilm(container, env);
  return { video, toggle, doc, motion, connection, classes, visible: (value) => intersect([{ isIntersecting: value }]), click: () => toggle.dispatchEvent(new Event("click")) };
}

for (const preference of [{ reduced: true }, { saveData: true }]) {
  test(`preferência ${JSON.stringify(preference)} evita download até play explícito`, async () => {
    const app = setup(preference);
    app.visible(true);
    assert.equal(app.video.src, undefined);
    assert.equal(app.video.playCalls, 0);
    app.click();
    await flush();
    assert.equal(app.video.src, "desktop.mp4");
    assert.equal(app.video.paused, false);
  });
}

test("seleciona versão móvel, só toca visível e mantém pausa manual", async () => {
  const app = setup({ mobile: true });
  assert.equal(app.video.src, undefined);
  app.visible(true);
  await flush();
  assert.equal(app.video.src, "mobile.mp4");
  assert.equal(app.video.muted, true);
  assert.equal(app.toggle.textContent, "Pausar vídeo");
  app.click();
  app.visible(false);
  app.visible(true);
  await flush();
  assert.equal(app.video.paused, true);
  assert.equal(app.video.playCalls, 1);
});

test("pausa em aba oculta e retoma quando visível", async () => {
  const app = setup();
  app.visible(true);
  await flush();
  app.doc.hidden = true;
  app.doc.dispatchEvent(new Event("visibilitychange"));
  assert.equal(app.video.paused, true);
  app.doc.hidden = false;
  app.doc.dispatchEvent(new Event("visibilitychange"));
  await flush();
  assert.equal(app.video.paused, false);
  app.motion.matches = true;
  app.motion.dispatchEvent(new Event("change"));
  assert.equal(app.video.paused, true);
});

test("erro mantém poster e autoplay rejeitado oferece tentativa manual", async () => {
  const app = setup({ reject: true });
  app.visible(true);
  await flush();
  assert.equal(app.toggle.hidden, false);
  assert.equal(app.toggle.textContent, "Reproduzir vídeo");
  app.click();
  await flush();
  assert.equal(app.video.playCalls, 2);
  app.video.dispatchEvent(new Event("error"));
  assert.equal(app.toggle.hidden, true);
  assert.equal(app.classes.has("has-video"), false);
});

test("play pendente não desfaz pausa explícita do usuário", async () => {
  const app = setup({ deferred: true });
  app.visible(true);
  app.click();
  app.video.resolvePlay();
  await flush();
  assert.equal(app.video.paused, true);
  app.visible(false);
  app.visible(true);
  assert.equal(app.video.playCalls, 1);
});
