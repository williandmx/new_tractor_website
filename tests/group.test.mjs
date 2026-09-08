import { readSitemapUrls } from "./helpers/sitemap.mjs";
import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import { site, pages } from "../src/site.mjs";
import { companies } from "../src/group.mjs";

const read = (file) => readFile(new URL(`../dist/${file}`, import.meta.url), "utf8");
const schema = (html) => JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])["@graph"];

test("o grupo tem sete frentes distintas, com conteúdo próprio em páginas reais", async () => {
  assert.equal(companies.length, 7);
  assert.equal(new Set(companies.map((company) => company.slug)).size, companies.length, "slugs distintos");
  assert.equal(new Set(companies.map((company) => company.name)).size, companies.length, "nomes distintos");
  assert.deepEqual(companies.map((company) => company.slug), ["rodantes", "hidrautractor", "usinagem", "calderaria", "parts", "services", "techtractor"]);
  const bodies = new Set();
  for (const company of companies) {
    const page = pages.find((candidate) => candidate.route === `/${company.slug}/`);
    assert.ok(page, `rota ${company.slug}`);
    assert.ok(!bodies.has(page.body), "conteúdo próprio por empresa");
    bodies.add(page.body);
    const html = await read(page.output);
    assert.ok(html.includes(`<h1>${company.name}</h1>`));
    assert.ok(html.includes(`<link rel="canonical" href="${site.origin}/${company.slug}/">`));
    const nav = html.match(/<nav class="company-nav"[\s\S]*?<\/nav>/)[0];
    assert.equal((nav.match(/aria-current="page"/g) || []).length, 1);
    assert.ok(nav.includes(`href="/${company.slug}/" aria-current="page"`));
    for (const sibling of companies) assert.ok(nav.includes(`href="/${sibling.slug}/"`));
    assert.doesNotMatch(nav, /role="tab|onclick=/, "navegação HTML sem dependência de JS");
    const graph = schema(html);
    assert.equal(graph.filter((item) => item["@type"] === "Organization").length, 1, "somente a identidade compartilhada");
    assert.equal(graph.filter((item) => item["@type"] === "LocalBusiness").length, 1, "sem filiais fictícias");
    assert.equal(graph.find((item) => item["@type"] === "BreadcrumbList").itemListElement.at(-1).item, `${site.origin}/${company.slug}/`);
  }
});

test("a home apresenta as sete frentes, a rota de parcerias e a descoberta canônica", async () => {
  const home = await read("index.html");
  assert.match(home, /<h1>[\s\S]*?<\/h1>/);
  assert.match(home, /Conhecimento industrial|Força em conjunto|grupo industrial/i);
  const index = home.match(/<section class="section group-companies"[\s\S]*?<\/section>/)[0];
  const sitemap = await readSitemapUrls();
  const parcerias = await read("parcerias/index.html");
  assert.equal((index.match(/class="company-card"/g) || []).length, companies.length);
  assert.equal((index.match(/class="company-card__image"/g) || []).length, companies.length);
  assert.equal((index.match(/class="company-card__body"/g) || []).length, companies.length);
  assert.doesNotMatch(index, /company-card__group/);
  assert.match(home, /href="\/parcerias\/"/);
  assert.match(parcerias, /<h1>[\s\S]*?<\/h1>/);
  for (const company of companies) {
    assert.ok(index.includes(`href="/${company.slug}/"`));
    assert.ok(index.includes(`/assets/images/film-${company.slug}-640.webp`));
    assert.ok(sitemap.includes(`${site.origin}/${company.slug}/`));
  }
  assert.ok(sitemap.includes(`${site.origin}/parcerias/`));
  const list = schema(home).find((entry) => entry["@type"] === "ItemList");
  assert.equal(list.itemListElement.length, 7);
  assert.equal(new Set(list.itemListElement.map((item) => item.url)).size, 7);
  assert.deepEqual(list.itemListElement.map((item) => item.url), companies.map((company) => `${site.origin}/${company.slug}/`));
});

test("as conversas das frentes usam o e-mail real e contexto específico", async () => {
  for (const company of companies) {
    const html = await read(`${company.slug}/index.html`);
    const rawHref = html.match(new RegExp(`href="([^"]+)" data-analytics="email_${company.slug}_hero"`))?.[1];
    assert.ok(rawHref, `${company.slug}: CTA contextual`);
    const href = new URL(rawHref.replaceAll("&amp;", "&"));
    assert.equal(href.protocol, "mailto:");
    assert.equal(href.pathname, site.email);
    assert.ok(href.searchParams.get("subject").includes(company.name));
    for (const item of company.checklist) assert.ok(href.searchParams.get("body").includes(item));
    assert.ok(html.includes(site.email), `${company.slug}: e-mail publicado`);
    assert.match(html, /O que incluir na conversa/);
    assert.doesNotMatch(html, /<form\b|RFQ enviada|SoftwareApplication|Product"|aggregateRating|certificada ISO/);
  }
});

test("Services mantém intenção distinta de Serviços e TechTractor preserva a direção tecnológica", async () => {
  const services = await read("services/index.html");
  const technical = await read("servicos/index.html");
  const tech = await read("techtractor/index.html");
  assert.match(services, /<h1>New Tractor Services<\/h1>/);
  assert.match(services, /href="\/servicos\/">Consultar as soluções técnicas/);
  assert.notEqual(services.match(/<title>([^<]+)/)[1], technical.match(/<title>([^<]+)/)[1]);
  assert.match(tech, /TechTractor/);
  assert.match(tech, /tecnologia|monitoramento|inspeção|desgaste/i);
  const techText = tech.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<[^>]*>/g, " ");
  assert.doesNotMatch(techText, /Assine agora|Acessar plataforma|Comprar|Teste grátis|software pronto|\bSaaS\b|\bAPI\b|automação de agentes/i);
  assert.doesNotMatch(tech, /<form\b/i);
  for (const company of companies) {
    const html = await read(`${company.slug}/index.html`);
    assert.match(html, new RegExp(`data-desktop="/assets/videos/company-${company.slug}-desktop\\.mp4"`));
    assert.match(html, new RegExp(`data-mobile="/assets/videos/company-${company.slug}-mobile\\.mp4"`));
    const video = await stat(new URL(`../dist/assets/videos/company-${company.slug}-desktop.mp4`, import.meta.url));
    assert.ok(video.size > 10000 && video.size <= 8 * 1024 * 1024, `${company.slug}: orçamento do filme`);
    await access(new URL(`../dist/assets/images/film-${company.slug}-1280.webp`, import.meta.url));
  }
  const redirects = await read("_redirects");
  assert.doesNotMatch(redirects, /^\/services\/?\s+\/servicos\/|^\/servicos\/?\s+\/services\//m);
});

test("links com fragmentos apontam para destinos reais", async () => {
  for (const page of pages) {
    const html = await read(page.output);
    for (const [, href] of html.matchAll(/href="((?:\/[^"?#]*)?#[^"]+)"/g)) {
      const url = new URL(href, `${site.origin}${page.route}`);
      const target = pages.find((candidate) => candidate.route === url.pathname);
      assert.ok(target, `${page.route}: destino ${href}`);
      const targetHtml = target === page ? html : await read(target.output);
      assert.ok(targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${page.route}: âncora ${href}`);
    }
  }
});
