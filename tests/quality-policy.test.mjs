import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { pages, renderPage, site } from "../src/site.mjs";
import { renderSitemaps } from "../src/discovery.mjs";

const policy = "Buscar satisfação dos clientes, com aperfeiçoamento contínuo do sistema de gestão da qualidade, promovendo nossa evolução.";
const company = pages.find(page => page.route === "/empresa/");

test("Política da Qualidade reproduz a placa em HTML acessível sem afirmar certificação", () => {
  const html = renderPage(company);
  const section = html.match(/<section id="politica-da-qualidade"[\s\S]*?<\/section>/)?.[0];
  assert.ok(section, "seção institucional presente no HTML inicial");
  assert.match(section, /aria-labelledby="qualidade-title"/);
  assert.match(section, /<h2 id="qualidade-title">Política da Qualidade<\/h2>/);
  assert.ok(section.includes(`<blockquote class="quality-policy__quote"><p>${policy}</p></blockquote>`));
  assert.doesNotMatch(section, /ISO|certifica|NR-\d|política de segurança|<img/i);
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1);
  assert.match(html, /<link rel="canonical" href="https:\/\/newtractor.com.br\/empresa\/">/);
});

test("rodapé mantém um link HTML direto para a política em todas as páginas", () => {
  for (const page of pages) {
    const footer = renderPage(page).match(/<footer class="site-footer">[\s\S]*?<\/footer>/)?.[0];
    assert.ok(footer?.includes('<a href="/empresa/#politica-da-qualidade">Política da Qualidade</a>'), page.route);
  }
});

test("alteração editorial da empresa aparece no sitemap, schema e descrição de descoberta", async () => {
  assert.equal(company.lastModified, "2026-09-17");
  assert.deepEqual(pages.filter(page => page.lastModified === "2026-09-17").map(page => page.route), ["/empresa/"]);
  const sitemap = renderSitemaps(pages, site).find(item => item.file === "sitemap-grupo.xml").content;
  assert.match(sitemap, /<loc>https:\/\/newtractor.com.br\/empresa\/<\/loc>\s*<lastmod>2026-09-17<\/lastmod>/);
  assert.doesNotMatch(sitemap, /#politica-da-qualidade/);
  const html = renderPage(company);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(schema["@graph"].find(item => item["@type"] === "WebPage").dateModified, "2026-09-17");
  const llms = await readFile(new URL("../dist/llms.txt", import.meta.url), "utf8");
  assert.ok(llms.includes(company.description));
  assert.match(company.description, /Política da Qualidade/);
});
