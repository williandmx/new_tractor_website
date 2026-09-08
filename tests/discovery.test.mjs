import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { pages, site } from "../src/site.mjs";

const publicPages = pages.filter(page => page.indexable !== false);
const documents = new Map(await Promise.all(publicPages.map(async page => [
  page.route, await readFile(new URL(`../dist/${page.output}`, import.meta.url), "utf8"),
])));

test("todas as páginas indexáveis são alcançáveis por links HTML a partir da home", () => {
  const visited = new Set();
  const queue = ["/"];
  while (queue.length) {
    const route = queue.shift();
    if (visited.has(route)) continue;
    visited.add(route);
    for (const [, href] of documents.get(route).matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      const url = new URL(href.replaceAll("&amp;", "&"), site.origin + route);
      if (url.origin === site.origin && documents.has(url.pathname) && !visited.has(url.pathname)) queue.push(url.pathname);
    }
  }
  assert.deepEqual([...visited].sort(), [...documents.keys()].sort(), "uma página órfã não pode depender apenas do sitemap");
});

test("links de fragmento chegam a IDs únicos em páginas existentes", () => {
  const identifiers = new Map();
  for (const [route, html] of documents) {
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${route}: IDs duplicados tornam a navegação ambígua`);
    identifiers.set(route, new Set(ids));
  }
  for (const [route, html] of documents) {
    for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      const url = new URL(href.replaceAll("&amp;", "&"), site.origin + route);
      if (url.origin !== site.origin || !url.hash || !documents.has(url.pathname)) continue;
      assert.ok(identifiers.get(url.pathname).has(decodeURIComponent(url.hash.slice(1))), `${route} → ${href}: destino do fragmento ausente`);
    }
  }
});
