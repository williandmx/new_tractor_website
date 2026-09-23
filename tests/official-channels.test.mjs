import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { pages, renderPage, site } from "../src/site.mjs";
import { renderSitemaps } from "../src/discovery.mjs";

const route = "/canais-oficiais/";
const channels = pages.find(page => page.route === route);

test("aviso institucional é HTML visível e permanece dentro da superfície do menu", () => {
  for (const page of pages) {
    const html = renderPage(page);
    assert.match(html, /<main id="conteudo" tabindex="-1">\s*<aside class="official-notice"/);
    assert.match(html, /Não trabalhamos com aluguel de máquinas/);
    assert.match(html, /Não fazemos cadastro de clientes pelo site nem possuímos grupos de WhatsApp/);
    assert.match(html, /<a href="\/canais-oficiais\/">Confira os canais oficiais/);
    assert.match(html, /<a href="\/canais-oficiais\/">Canais oficiais<\/a>/);
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, page.route);
    assert.doesNotMatch(html, /\b(?:ponzi|pirâmide|golpista|fraudulento)\b|100%\s*(?:LGPD|seguro)|certificad[oa]\s+(?:pela\s+)?(?:LGPD|ANPD)/i);
  }
});

test("canais oficiais usam apenas contatos reais e não adicionam cadastro ou grupo", () => {
  assert.ok(channels);
  const html = renderPage(channels);
  for (const href of [site.whatsapp, site.phoneHref, `mailto:${site.email}`, `${site.origin}/`]) assert.ok(html.includes(`href="${href}"`), href);
  assert.match(channels.body, /atendimento individual/);
  assert.match(channels.body, /Não temos vínculo com essas iniciativas/);
  assert.match(channels.body, /Não comercializamos produtos ou serviços por plataformas de investimento/);
  assert.match(channels.body, /como condição de atendimento por este site/);
  assert.match(channels.body, /imediatamente com sua instituição bancária/);
  assert.match(channels.body, /preserve os registros originais/);
  assert.doesNotMatch(channels.body, /associação criminosa|podem configurar|não possui.{0,50}responsabilidade|Esta empresa observa a Lei/);
  assert.doesNotMatch(html, /<form\b|<input\b|chat\.whatsapp\.com|<iframe\b/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/newtractor.com.br\/canais-oficiais\/">/);
  assert.match(channels.body, /análise de navegação é opcional/);
});

test("privacidade mantém consentimento, esclarece limites e oferece contato sobre dados", () => {
  const privacy = pages.find(page => page.route === "/privacidade/");
  assert.match(privacy.body, /Sem cadastro de clientes pelo site/);
  assert.match(privacy.body, /ausência de cadastro não significa ausência de todo tratamento de dados/);
  assert.match(privacy.body, /só é carregado após a sua aceitação/);
  assert.match(privacy.body, /data-reset-consent/);
  assert.match(privacy.body, /pedidos de acesso ou correção/);
  assert.match(privacy.body, /mailto:comercial2@newtractor.com.br\?subject=Privacidade/);
  assert.match(privacy.body, /políticas de cada provedor/);
});

test("sitemap e llms incluem comunicado, com datas editoriais corretas", async () => {
  const routes = [route, "/contato/", "/privacidade/"];
  for (const expected of routes) {
    const page = pages.find(item => item.route === expected);
    assert.equal(page.lastModified, "2026-09-23", expected);
    const graph = JSON.parse(renderPage(page).match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])["@graph"];
    assert.equal(graph.find(item => item["@type"] === "WebPage").dateModified, "2026-09-23");
  }
  assert.deepEqual(pages.filter(page => page.lastModified === "2026-09-23").map(page => page.route).sort(), routes.sort());
  const sitemap = renderSitemaps(pages, site).find(file => file.file === "sitemap-grupo.xml").content;
  assert.match(sitemap, /<loc>https:\/\/newtractor.com.br\/canais-oficiais\/<\/loc>\s*<lastmod>2026-09-23<\/lastmod>/);
  const llms = await readFile(new URL("../dist/llms.txt", import.meta.url), "utf8");
  assert.ok(llms.includes(`](${site.origin}${route})`));
  assert.ok(llms.includes(channels.description));
});
