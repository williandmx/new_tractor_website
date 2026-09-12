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

test("o corte de 65 caracteres é estrito e não depende de truncamento", () => {
  assert.equal(MAX_TITLE_LENGTH, 65);
  assert.equal(Math.max(...pages.map((page) => page.title.length)), 65);
  assert.equal(pages.filter((page) => page.title.length > MAX_TITLE_LENGTH).length, 0);
  assert.ok(pages.some((page) => page.title.length === MAX_TITLE_LENGTH));
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

test("frentes de guias, serviços e equipamentos preservam o label da empresa", () => {
  for (const route of [
    "/servicos/manutencao-material-rodante/",
    "/servicos/reforma-cacambas-conchas/",
    "/servicos/monitoramento-material-rodante/",
    "/servicos/usinagem-componentes-maquinas-pesadas/",
    "/guias/avaliacao-cilindros-hidraulicos/",
    "/guias/avaliacao-cacambas-conchas/",
    "/guias/inspecao-material-rodante/",
    "/guias/cotacao-pecas-maquinas-pesadas/",
    "/guias/folgas-pinos-buchas-alojamentos/",
    "/equipamentos/escavadeiras/",
    "/equipamentos/tratores-de-esteira/",
    "/equipamentos/pas-carregadeiras/",
  ]) {
    const page = pages.find((candidate) => candidate.route === route);
    assert.match(page.title, /^Grupo New Tractor — [^|]+ \| /, route);
  }
});

test("concisão preserva serviço de campo e os temas técnicos dos guias", () => {
  for (const page of pages.filter((page) => page.regionalKind === "sector-service" && page.specialty === "services")) {
    assert.match(page.title, /\| Serviço de campo/, page.route);
  }
  assert.match(pages.find((page) => page.route === "/guias/").title, /linha amarela/);
  assert.match(pages.find((page) => page.route === "/guias/cotacao-pecas-maquinas-pesadas/").title, /máquinas pesadas/);
});

test("rotas regionais preservam cidade completa, serviço e contexto setorial", () => {
  for (const page of pages) {
    if (page.regionalKind === "city-service") {
      const theme = REGIONAL_THEMES[page.specialty];
      const city = cities.get(page.municipality);
      assert.ok(city, `${page.route}: município deve existir no dataset`);
      assert.match(page.title, /^Grupo New Tractor \| /);
      assert.ok(!page.title.includes(" — "), `${page.route}: rótulo de frente indevido`);
      const subject = subjectFromTitle(page.title);
      assert.ok([
        `${theme.full} em ${city.name}`,
        `${theme.full}: ${city.name}`,
        `${theme.short} em ${city.name}`,
        `${theme.short}: ${city.name}`,
      ].includes(subject), `${page.route}: tema ou município não corresponde ao dataset`);
      assert.ok(subject.endsWith(city.name), `${page.route}: nome do município foi abreviado`);
    }
    if (page.regionalKind === "sector-service") {
      assert.match(page.title, new RegExp(`^Grupo New Tractor — ${escapeRegex(FRONT_LABELS[page.specialty])} \\| `));
      const sectorTerms = { mineracao: "mineração", florestal: "florestal", agro: "agronegócio", industrial: "indústria" };
      assert.match(page.title.toLocaleLowerCase("pt-BR"), new RegExp(sectorTerms[page.sector]), `${page.route}: setor ausente`);
    }
  }
});

test("a função altera somente título e data editorial quando há mudança", () => {
  const original = { route: "/rodantes/", title: "Material rodante para máquinas pesadas | New Tractor", description: "Descrição", body: "<h1>H1</h1>", schema: [{ name: "oferta" }], lastModified: "2026-09-10", custom: { untouched: true } };
  const result = applySeoMetadata(original);
  assert.notEqual(result, original);
  assert.equal(result.title, "Grupo New Tractor — Rodantes | Material rodante e manutenção");
  assert.equal(result.lastModified, "2026-09-11");
  const withoutTitleMetadata = ({ title, lastModified, ...page }) => page;
  assert.deepEqual(withoutTitleMetadata(result), withoutTitleMetadata(original));
});

test("aplicação idempotente preserva fontes já revisadas", () => {
  const home = pages.find((page) => page.route === "/");
  assert.strictEqual(applySeoMetadata(home), home);
  assert.equal(home.title, "Grupo New Tractor | Soluções industriais para sua frota");
  assert.equal(home.lastModified, "2026-09-10");

  const reviewed = {
    route: "/fonte-revisada/",
    title: "Grupo New Tractor | Assunto já revisado",
    lastModified: "2026-08-01",
    body: "<h1>Assunto já revisado</h1>",
  };
  assert.strictEqual(applySeoMetadata(reviewed), reviewed);
});

test("rotas revisadas usam a data exata e as demais datas públicas ficam estáveis", () => {
  const reviewed = pages.filter((page) => page.lastModified === "2026-09-11");
  assert.equal(reviewed.length, 484);
  assert.equal(reviewed.filter((page) => page.regionalKind === "city-service").length, 455);
  assert.equal(reviewed.filter((page) => page.regionalKind === "sector-service").length, 16);
  assert.equal(reviewed.filter((page) => page.regionalKind !== "city-service" && page.regionalKind !== "sector-service").length, 13);
  assert.equal(pages.find((page) => page.route === "/").lastModified, "2026-09-10");
  assert.equal(pages.find((page) => page.route === "/empresa/").lastModified, "2026-09-10");
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
