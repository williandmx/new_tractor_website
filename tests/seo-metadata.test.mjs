import assert from "node:assert/strict";
import test from "node:test";
import { pages, renderPage } from "../src/site.mjs";
import { minasCities } from "../src/minas-cities.mjs";
import {
  MAX_TITLE_LENGTH,
  FRONT_LABELS,
  REGIONAL_THEMES,
  applySeoMetadata,
  subjectFromTitle,
} from "../src/seo-metadata.mjs";

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const cities = new Map(minasCities.map((city) => [city.slug, city]));

test("todas as 595 rotas têm títulos brand-first, únicos e dentro do guardrail", () => {
  assert.equal(pages.length, 595);
  const titles = pages.map((page) => page.title);
  assert.equal(new Set(titles).size, titles.length, "títulos duplicados");
  for (const page of pages) {
    assert.match(page.title, /^Grupo New Tractor(?: — [^|]+)? \| .+$/);
    assert.ok(page.title.length <= MAX_TITLE_LENGTH, `${page.route}: ${page.title.length} caracteres`);
    assert.equal((page.title.match(/Grupo New Tractor/g) || []).length, 1, `${page.route}: marca repetida`);
    assert.equal(applySeoMetadata(page), page, `${page.route}: aplicação deve ser idempotente`);
  }
});

test("home, empresa e pessoas preservam a intenção institucional", () => {
  assert.equal(pages.find((page) => page.route === "/").title, "Grupo New Tractor | Soluções industriais para sua frota");
  assert.equal(pages.find((page) => page.route === "/empresa/").title, "Grupo New Tractor | Estrutura para máquinas pesadas desde 2010");
  assert.equal(pages.find((page) => page.route === "/pessoas/").title, "Grupo New Tractor | Pessoas que movem a operação");
  assert.ok(!pages.find((page) => page.route === "/").title.includes("Rodantes"));
});

test("a home alinha a mensagem aprovada e o nome institucional do site", () => {
  const home = pages.find((page) => page.route === "/");
  const message = "Conectamos técnicos, estrutura industrial e tecnologia para cuidar da sua frota.";
  assert.ok(home.description.startsWith(message));
  assert.ok(home.body.includes(`<p>${message}`));
  assert.match(home.body, /<h1>Soluções industriais\.<br><span>Cuidado com a sua frota\.<\/span><\/h1>/);
  const html = renderPage(home);
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])["@graph"];
  const websites = graph.filter((item) => item["@type"] === "WebSite");
  assert.equal(websites.length, 1);
  assert.equal(websites[0].name, "Grupo New Tractor");
  assert.equal(websites[0].alternateName, "New Tractor");
  assert.match(html, /<meta property="og:site_name" content="Grupo New Tractor">/);
});

test("frentes institucionais não se confundem com serviços e guias", () => {
  const title = (route) => pages.find((page) => page.route === route).title;
  assert.notEqual(title("/rodantes/"), title("/servicos/manutencao-material-rodante/"));
  assert.notEqual(title("/usinagem/"), title("/servicos/usinagem-componentes-maquinas-pesadas/"));
  assert.notEqual(title("/hidrautractor/"), title("/hidrautractor/recuperacao-cilindros-hidraulicos/"));
  assert.match(title("/servicos/monitoramento-material-rodante/"), /^Grupo New Tractor — Rodantes \| Monitoramento/);
  assert.match(title("/equipamentos/escavadeiras/"), /^Grupo New Tractor — HidrauTractor \| Cilindros/);
  assert.match(title("/servicos/"), /^Grupo New Tractor \| /);
});

test("rotas de frente usam o label correto e regionais preservam cidade ou setor", () => {
  for (const page of pages) {
    if (page.regionalKind === "city-service") {
      const label = FRONT_LABELS[page.specialty];
      const theme = REGIONAL_THEMES[page.specialty];
      const city = cities.get(page.municipality);
      assert.ok(city, `${page.route}: município deve existir no dataset`);
      assert.match(page.title, new RegExp(`^Grupo New Tractor — ${escapeRegex(label)} \\| `));
      const subject = subjectFromTitle(page.title);
      assert.ok(subject === `${theme.full} em ${city.name}` || subject === `${theme.short} em ${city.name}`, `${page.route}: tema ou município não corresponde ao dataset`);
    }
    if (page.regionalKind === "sector-service") {
      assert.match(page.title, new RegExp(`^Grupo New Tractor — ${escapeRegex(FRONT_LABELS[page.specialty])} \\| `));
      const sectorTerms = { mineracao: "mineração", florestal: "florestal", agro: "agronegócio", industrial: "indústria" };
      assert.match(page.title.toLocaleLowerCase("pt-BR"), new RegExp(sectorTerms[page.sector]), `${page.route}: setor ausente`);
    }
  }
});

test("a função altera somente título e data editorial quando há mudança", () => {
  const original = { route: "/teste/", title: "Assunto útil | New Tractor", description: "Descrição", body: "<h1>H1</h1>", schema: [{ name: "oferta" }], lastModified: "2026-09-08" };
  const result = applySeoMetadata(original);
  assert.notEqual(result, original);
  assert.equal(result.title, "Grupo New Tractor | Assunto útil");
  assert.equal(result.lastModified, "2026-09-10");
  assert.equal(result.description, original.description);
  assert.equal(result.body, original.body);
  assert.equal(result.schema, original.schema);
});

test("HTML usa o mesmo título em title, Open Graph, Twitter e WebPage", () => {
  for (const page of pages) {
    const html = renderPage(page);
    const title = escapeRegex(page.title);
    assert.match(html, new RegExp(`<title>${title}<\\/title>`), page.route);
    assert.match(html, new RegExp(`<meta property="og:title" content="${title}">`), page.route);
    assert.match(html, new RegExp(`<meta name="twitter:title" content="${title}">`), page.route);
    const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    assert.ok(json, `${page.route}: JSON-LD ausente`);
    const graph = JSON.parse(json)["@graph"];
    assert.equal(graph.find((item) => item["@type"] === "WebPage")?.name, page.title, `${page.route}: WebPage divergente`);
  }
});
