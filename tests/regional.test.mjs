import test from "node:test";
import assert from "node:assert/strict";
import { minasCities, minasSources } from "../src/minas-cities.mjs";
import { regionalSpecialties } from "../src/regional-specialties.mjs";
import {
  cityRoute,
  cityServiceRoute,
  createRegionalPages,
  regionalSectors,
  sectorServiceRoute,
} from "../src/regional-pages.mjs";
import { pages, renderPage, site } from "../src/site.mjs";
import { discoveryGroups, renderSitemaps } from "../src/discovery.mjs";

const cityDirectory = "/atuacao/minas-gerais/cidades/";
const industrialHub = "/setores/industrial/";
const sectorKeys = ["mineracao", "florestal", "agro", "industrial"];
const expectedSpecialties = [
  "rodantes",
  "hidrautractor",
  "usinagem",
  "calderaria",
  "parts",
  "services",
  "techtractor",
];

const pageHero = ({ title, intro }) => `<section class="page-hero"><h1>${title}</h1><p>${intro}</p></section>`;
const contactBand = title => `<section class="contact-band"><h2>${title}</h2></section>`;
const breadcrumbSchema = items => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${site.origin}${item.route}`,
  })),
});
const generationContext = { site, pageHero, contactBand, breadcrumbSchema };

const generated = createRegionalPages(generationContext);
const integrated = pages.filter(page => page.regionalKind);
const allRoutes = new Set(pages.map(page => page.route));

function bodyFor(page) {
  return page ? page.body : "";
}

function htmlGraph(html) {
  const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(json, "JSON-LD deve estar presente");
  return JSON.parse(json)["@graph"];
}

function internalHrefs(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref="([^\"]+)"/g)]
    .map(match => match[1])
    .filter(href => href.startsWith("/") && !href.startsWith("//"))
    .map(href => new URL(href, site.origin).pathname);
}

test("dataset mineiro é determinístico, identificável e tem recorte populacional comprovável", () => {
  assert.ok(minasCities.length > 0);
  assert.equal(new Set(minasCities.map(city => city.slug)).size, minasCities.length);
  assert.equal(new Set(minasCities.map(city => city.ibge)).size, minasCities.length);
  assert.ok(minasCities.every(city => /^31\d{5}$/.test(String(city.ibge))), "todo município deve usar código IBGE de MG");
  assert.ok(minasCities.every(city => /^[-a-z0-9]+$/.test(city.slug)));
  assert.ok(minasCities.every(city => Number.isInteger(city.population) && city.population > 0));
  assert.ok(minasCities.every(city => city.populationYear === 2025));
  assert.equal(minasSources.ibgePop2025.year, 2025, "o corte populacional deve ser a estimativa IBGE 2025");
  assert.match(minasSources.ibgePop2025.url, /^https:\/\//);

  for (const city of minasCities) {
    assert.ok(city.name && city.region && city.context && city.procurementNote);
    assert.ok(Array.isArray(city.inclusion) && city.inclusion.length > 0);
    assert.ok(Array.isArray(city.sectors));
    assert.ok(city.sectors.every(key => sectorKeys.includes(key)), `${city.name}: setor desconhecido`);
    assert.ok(Array.isArray(city.sourceKeys) && city.sourceKeys.length >= 2);
    assert.ok(city.sourceKeys.some(key => !["ibgePop2025", "ibgeMunicipiosMG"].includes(key)), `${city.name}: contexto local exige fonte própria, além da população`);
    assert.doesNotMatch(city.context + ' ' + city.procurementNote, /filtro de prospecção|macroregião operacional|inclusão é um recorte populacional/i, `${city.name}: remover linguagem interna de pesquisa`);
    for (const key of city.sourceKeys) {
      const source = minasSources[key];
      assert.ok(source, `${city.name}: fonte ${key} não existe`);
      assert.ok(source.title && /^https:\/\//.test(source.url), `${city.name}: fonte ${key} sem título/URL HTTPS`);
    }

    if (city.population > 100_000) {
      assert.ok(city.inclusion.includes("population"), `${city.name}: acima do corte sem inclusão populacional`);
    } else {
      assert.ok(!city.inclusion.includes("population"), `${city.name}: polo extra não pode se passar por corte populacional`);
      assert.ok(city.sectors.length > 0, `${city.name}: polo extra precisa de setor fundamentado`);
      assert.ok(city.sourceKeys.some(key => !["ibgePop2025", "ibgeMunicipiosMG"].includes(key)), `${city.name}: polo extra sem fonte de contexto`);
      assert.ok(city.inclusion.some(key => ["mining", "forestry", "agro", "industry"].includes(key)), `${city.name}: polo extra sem justificativa setorial`);
    }
  }
});

test("gerador regional é determinístico e respeita a fórmula de rotas", () => {
  assert.deepEqual(
    generated.map(page => ({ route: page.route, output: page.output, title: page.title, description: page.description, body: page.body, schema: page.schema })),
    createRegionalPages(generationContext).map(page => ({ route: page.route, output: page.output, title: page.title, description: page.description, body: page.body, schema: page.schema })),
  );
  assert.equal(regionalSpecialties.length, 7);
  assert.deepEqual(regionalSpecialties.map(specialty => specialty.id), expectedSpecialties);
  assert.deepEqual(regionalSectors.map(sector => sector.key), sectorKeys);
  assert.equal(generated.length, 1 + 8 * minasCities.length + 28 + 1);
  assert.equal(generated.filter(page => page.regionalKind === "directory").length, 1);
  assert.equal(generated.filter(page => page.regionalKind === "industrial-hub").length, 1);
  assert.equal(generated.filter(page => page.regionalKind === "city").length, minasCities.length);
  assert.equal(generated.filter(page => page.regionalKind === "city-service").length, 7 * minasCities.length);
  assert.equal(generated.filter(page => page.regionalKind === "sector-service").length, 28);
  assert.equal(new Set(generated.map(page => page.route)).size, generated.length);
});

test("cada cidade e combinação de serviço/setor possui rota e metadados únicos", () => {
  const titles = new Set();
  const descriptions = new Set();
  const regionalRoutes = new Set(generated.map(page => page.route));

  for (const city of minasCities) {
    assert.ok(regionalRoutes.has(cityRoute(city)));
    for (const specialty of regionalSpecialties) {
      assert.ok(regionalRoutes.has(cityServiceRoute(city, specialty)));
      assert.ok(generated.some(page => page.route === cityServiceRoute(city, specialty) && page.municipality === city.slug && page.specialty === specialty.id));
    }
  }
  for (const specialty of regionalSpecialties) {
    for (const sector of regionalSectors) {
      const route = sectorServiceRoute(specialty, sector.key);
      assert.ok(regionalRoutes.has(route));
      assert.ok(generated.some(page => page.route === route && page.specialty === specialty.id && page.sector === sector.key));
    }
  }

  for (const page of generated) {
    assert.ok(page.title && page.description);
    assert.ok(!titles.has(page.title), `title duplicado: ${page.title}`);
    assert.ok(!descriptions.has(page.description), `description duplicada: ${page.description}`);
    titles.add(page.title);
    descriptions.add(page.description);
    assert.equal(page.indexable, undefined, `${page.route}: página regional não deve nascer noindex`);
  }
});

test("HTML regional tem um H1, canonical, JSON-LD e apenas o LocalBusiness histórico de Belo Horizonte", () => {
  assert.equal(integrated.length, generated.length, "site deve integrar todas as páginas regionais");
  for (const page of integrated) {
    const html = renderPage(page);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${page.route}: H1 único`);
    assert.match(html, new RegExp(`<link rel="canonical" href="${site.origin.replaceAll(".", "\\.")}${page.route.replaceAll("/", "\\/")}">`));
    assert.match(html, /<meta name="robots" content="index, follow/);
    const graph = htmlGraph(html);
    assert.ok(graph.some(item => item["@type"] === "WebPage"));
    assert.ok(graph.some(item => item["@type"] === "BreadcrumbList"));
    const services = graph.filter(item => item["@type"] === "Service");
    if (page.specialty === "techtractor") {
      assert.equal(services.length, 0, `${page.route}: TechTractor não é produto comercial pronto`);
      assert.match(page.body, /em desenvolvimento|em evolução/);
      assert.doesNotMatch(page.body, /Preparar e-mail de cotação/);
    } else if (page.specialty) {
      assert.equal(services.length, 1, `${page.route}: uma especialidade real por consulta`);
      assert.equal(services[0].provider["@id"], `${site.origin}/#organization`);
      assert.match(services[0].termsOfService, /avaliação técnica, comercial e logística/);
    }
    assert.doesNotMatch(page.body, /assets\/images\/film-(?:usinagem|parts|techtractor)/, `${page.route}: reutilizar somente acervo documental selecionado`);
    const localBusinesses = graph.filter(item => item["@type"] === "LocalBusiness");
    assert.ok(localBusinesses.every(item => item["@id"] === `${site.origin}/#localbusiness`), `${page.route}: estabelecimento local inventado`);
    const city = minasCities.find(item => item.slug === page.municipality);
    if (city && city.slug !== "belo-horizonte") {
      assert.ok(!localBusinesses.some(item => item.name?.includes(city.name)), `${page.route}: nome local indevido no schema`);
    }
  }
});

test("contexto municipal, limites logísticos e RFQ usam conteúdo real e não formulário falso", () => {
  for (const city of minasCities) {
    const cityPages = integrated.filter(page => page.municipality === city.slug);
    assert.equal(cityPages.length, 8);
    for (const page of cityPages) {
      assert.match(bodyFor(page), new RegExp(city.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
      assert.match(bodyFor(page), new RegExp(city.context.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
      assert.match(bodyFor(page), /Belo Horizonte|logística|demanda|sob consulta/i);
      assert.doesNotMatch(bodyFor(page), /<form\b/i);
      if (page.regionalKind === "city-service") {
        assert.match(bodyFor(page), new RegExp(`mailto:${site.email.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
        assert.match(bodyFor(page), /email_consulta_regional/);
        assert.match(bodyFor(page), /identifica|informe|desenho|fotos|logística/i);
      }
    }
  }
});

test("links regionais são rastreáveis e o hub industrial não é órfão", () => {
  assert.ok(allRoutes.has(cityDirectory));
  assert.ok(allRoutes.has(industrialHub));
  const incomingIndustrial = [];
  for (const page of pages) {
    const html = renderPage(page);
    for (const href of internalHrefs(html)) {
      assert.ok(allRoutes.has(href) || href.startsWith("/assets/"), `${page.route} aponta para rota inexistente ${href}`);
      if (href === industrialHub) incomingIndustrial.push(page.route);
    }
  }
  assert.ok(incomingIndustrial.length > 0, "hub industrial precisa de link interno de entrada");
  const industrial = integrated.find(page => page.route === industrialHub);
  assert.ok(industrial);
  for (const specialty of regionalSpecialties) {
    assert.match(industrial.body, new RegExp(sectorServiceRoute(specialty, "industrial").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("índice e filhos de sitemap cobrem cada URL regional uma única vez", () => {
  const groups = discoveryGroups(pages);
  const files = renderSitemaps(pages, site);
  const locations = files.flatMap(file => [...file.content.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]));
  const regionalLocations = generated.map(page => site.origin + page.route);
  assert.equal(new Set(groups.flatMap(group => group.pages.map(page => page.route))).size, pages.filter(page => page.indexable !== false).length);
  assert.equal(locations.filter(url => regionalLocations.includes(url)).length, regionalLocations.length);
  assert.equal(new Set(locations.filter(url => regionalLocations.includes(url))).size, regionalLocations.length);
  assert.ok(locations.includes(site.origin + cityDirectory));
  assert.ok(locations.includes(site.origin + industrialHub));
});
