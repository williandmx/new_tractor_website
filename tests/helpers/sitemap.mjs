import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

export async function readSitemapUrls() {
  const read = file => readFile(new URL(`../../dist/${file}`, import.meta.url), "utf8");
  const root = await read("sitemap.xml");
  assert.match(root, /<sitemapindex xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/);
  const children = [...root.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]));
  assert.equal(children.length, 10, "sete frentes, equipamentos, atuação e grupo");
  assert.equal(new Set(children.map(url => url.href)).size, 10);
  const urls = [];
  for (const child of children) {
    assert.equal(child.origin, "https://newtractor.com.br");
    assert.match(child.pathname, /^\/sitemap-(rodantes|hidrautractor|usinagem|calderaria|parts|services|techtractor|equipamentos|atuacao|grupo)\.xml$/);
    const content = await read(child.pathname.slice(1));
    assert.match(content, /<urlset xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/);
    const entries = [...content.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>\s*<\/url>/g)];
    assert.ok(entries.length, `${child.pathname}: sitemap não vazio`);
    assert.equal(entries.length, [...content.matchAll(/<url>/g)].length, "entrada completa e lastmod em ISO");
    urls.push(...entries.map(match => match[1]));
  }
  return urls;
}
