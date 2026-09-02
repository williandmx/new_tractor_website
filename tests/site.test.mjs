import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

async function walk(directory) {
  const entries = await readdir(directory);
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry);
    if ((await stat(path)).isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}

const read = (path) => readFile(join(dist, path), "utf8");

test("o build contém todas as rotas e arquivos de descoberta", async () => {
  const required = [
    "index.html",
    "empresa/index.html",
    "servicos/index.html",
    "servicos/manutencao-material-rodante/index.html",
    "servicos/reforma-cacambas-conchas/index.html",
    "servicos/monitoramento-material-rodante/index.html",
    "equipamentos/index.html",
    "atuacao/index.html",
    "contato/index.html",
    "noticias/new-tractor-na-exposibram-2026/index.html",
    "privacidade/index.html",
    "404.html",
    "robots.txt",
    "sitemap.xml",
    "llms.txt",
    "agents.txt",
    "site.webmanifest",
    "_headers",
    "_redirects",
  ];
  await Promise.all(required.map((path) => access(join(dist, path))));
});

test("cada página tem HTML semântico, metadados e um único H1", async () => {
  const htmlFiles = (await walk(dist)).filter((path) => path.endsWith(".html"));
  assert.equal(htmlFiles.length, 12);
  const titles = new Set();
  const descriptions = new Set();

  for (const path of htmlFiles) {
    const html = await readFile(path, "utf8");
    const relative = path.slice(dist.length + 1);
    assert.match(html, /^<!doctype html>/i, relative);
    assert.match(html, /<html lang="pt-BR">/, relative);
    assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/, relative);
    assert.match(html, /<main id="conteudo">/, relative);
    assert.match(html, /<header class="site-header"/, relative);
    assert.match(html, /<footer class="site-footer">/, relative);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${relative}: H1 único`);

    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1];
    assert.ok(title && title.length >= 20 && title.length <= 75, `${relative}: title útil`);
    assert.ok(description && description.length >= 70 && description.length <= 170, `${relative}: description útil`);
    assert.ok(!titles.has(title), `${relative}: title único`);
    assert.ok(!descriptions.has(description), `${relative}: description única`);
    titles.add(title);
    descriptions.add(description);

    if (relative === "404.html") {
      assert.match(html, /<meta name="robots" content="noindex, nofollow">/);
    } else {
      assert.match(html, /<link rel="canonical" href="https:\/\/newtractor\.com\.br\//, relative);
      assert.match(html, /<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">/, relative);
    }

    assert.doesNotMatch(html, /http:\/\//, `${relative}: não deve conter conteúdo misto`);
    assert.doesNotMatch(html, /href=("#"|""|'#'|'')/, `${relative}: sem links vazios`);
    assert.doesNotMatch(html, /wp-content|wp-admin|wordpress/i, `${relative}: sem dependência do WordPress`);

    for (const tag of html.match(/<img\b[^>]*>/g) || []) {
      assert.match(tag, /\salt="[^"]*"/, `${relative}: imagem com alt`);
      assert.match(tag, /\swidth="\d+"/, `${relative}: imagem com width`);
      assert.match(tag, /\sheight="\d+"/, `${relative}: imagem com height`);
    }

    for (const tag of html.match(/<a\b[^>]*target="_blank"[^>]*>/g) || []) {
      assert.match(tag, /rel="[^"]*noopener[^"]*noreferrer[^"]*"/, `${relative}: link externo protegido`);
    }

    const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    assert.ok(jsonLd, `${relative}: JSON-LD presente`);
    const parsed = JSON.parse(jsonLd);
    assert.equal(parsed["@context"], "https://schema.org");
    assert.ok(Array.isArray(parsed["@graph"]));
  }
});

test("todos os links internos apontam para saídas existentes", async () => {
  const htmlFiles = (await walk(dist)).filter((path) => path.endsWith(".html"));
  for (const path of htmlFiles) {
    const html = await readFile(path, "utf8");
    const hrefs = [...html.matchAll(/href="(\/[^"?#]*)/g)].map((match) => match[1]);
    for (const href of hrefs) {
      if (href.startsWith("/assets/")) {
        await access(join(dist, href));
        continue;
      }
      const target = href === "/" ? "index.html" : href.endsWith("/") ? `${href.slice(1)}index.html` : href.slice(1);
      await access(join(dist, target));
    }
  }
});

test("robots, sitemap e llms descrevem somente URLs canônicas", async () => {
  const robots = await read("robots.txt");
  assert.match(robots, /^User-agent: \*\nAllow: \/$/m);
  assert.match(robots, /Sitemap: https:\/\/newtractor\.com\.br\/sitemap\.xml/);

  const sitemap = await read("sitemap.xml");
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.equal(locations.length, 11);
  assert.equal(new Set(locations).size, locations.length);
  assert.ok(locations.every((url) => url.startsWith("https://newtractor.com.br/")));
  assert.ok(!locations.some((url) => url.includes("404")));

  const llms = await read("llms.txt");
  assert.match(llms, /^# Grupo New Tractor/m);
  assert.match(llms, /\[Soluções\]\(https:\/\/newtractor\.com\.br\/servicos\/\)/);
  assert.match(llms, /\[Equipamentos e componentes\]\(https:\/\/newtractor\.com\.br\/equipamentos\/\)/);
  assert.match(llms, /\[Atuação nacional\]\(https:\/\/newtractor\.com\.br\/atuacao\/\)/);
  assert.match(llms, /\[EXPOSIBRAM 2026: decisões de manutenção que seguem em pauta\]\(https:\/\/newtractor\.com\.br\/noticias\/new-tractor-na-exposibram-2026\/\)/);
  assert.match(llms, /solucao@newtractor\.com\.br/);

  const agents = await read("agents.txt");
  assert.match(agents, /documento informativo; não representa um padrão universal, API, MCP ou/);
  assert.match(agents, /Canonical: https:\/\/newtractor\.com\.br\//);
  assert.match(agents, /Não inferir preço, prazo, garantia, capacidade, certificação/);
});

test("a página da EXPOSIBRAM está atualizada como registro pós-evento", async () => {
  const html = await read("noticias/new-tractor-na-exposibram-2026/index.html");
  assert.match(html, /<article class="event-article">/);
  assert.match(html, /<time datetime="2026-09-01">1º de setembro de 2026<\/time>/);
  assert.match(html, /https:\/\/exposibram2026\.ibram\.org\.br\//);
  assert.match(html, /data-analytics="email_exposibram_hero"/);
  assert.match(html, /EVENTO CONCLUÍDO/);
  assert.doesNotMatch(html, /Agendar uma conversa|Planeje sua visita|estaremos no Expominas/i);
  assert.match(html, /<meta property="og:type" content="article">/);
  assert.match(html, /<meta property="article:published_time" content="2026-08-15">/);
  assert.match(html, /<meta property="article:modified_time" content="2026-09-01">/);

  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  const graph = JSON.parse(jsonLd)["@graph"];
  assert.ok(graph.some((item) => item["@type"] === "Article"));
  assert.ok(graph.some((item) => item["@type"] === "Event" && item.eventStatus === "https://schema.org/EventCompleted"));
});

test("headers e redirects preservam segurança e URLs antigas úteis", async () => {
  const headers = await read("_headers");
  assert.match(headers, /X-Content-Type-Options: nosniff/);
  assert.match(headers, /Referrer-Policy: strict-origin-when-cross-origin/);
  assert.match(headers, /Permissions-Policy:/);
  assert.match(headers, /https:\/\/newtractor-site\.pages\.dev\/\*\n  X-Robots-Tag: noindex, nofollow/);
  assert.match(headers, /https:\/\/:version\.newtractor-site\.pages\.dev\/\*\n  X-Robots-Tag: noindex, nofollow/);

  const redirects = await read("_redirects");
  assert.match(redirects, /\/fale-conosco \/contato\/ 301/);
  assert.match(redirects, /\/servicos \/servicos\/ 301/);
  assert.match(redirects, /\/equipamentos \/equipamentos\/ 301/);
  assert.match(redirects, /\/atuacao \/atuacao\/ 301/);
  assert.match(redirects, /\/exposibram-2026 \/noticias\/new-tractor-na-exposibram-2026\/ 301/);
});

test("a jornada de suprimentos oferece referências e RFQ por e-mail", async () => {
  const home = await read("index.html");
  const contact = await read("contato/index.html");
  const clients = [
    ["Armac", "armac.webp"],
    ["Fagundes", "fagundes.webp"],
    ["TSL Transportes", "tsl-transportes.webp"],
    ["VIX", "vix.webp"],
    ["FLAPA Engenharia e Mineração", "flapa.webp"],
    ["SADA", "sada.webp"],
    ["ICAL", "ical.webp"],
    ["EMPA", "empa.webp"],
    ["Terrabel", "terrabel.webp"],
    ["InfraBrasil", "infrabrasil.webp"],
    ["Tracbel Group", "tracbel.webp"],
    ["Transamigos", "transamigos.webp"],
    ["Vertical Green do Brasil", "vertical-green.webp"],
    ["Queiroz Galvão", "queiroz-galvao.webp"],
    ["Skava Minas", "skava-minas.webp"],
  ];
  for (const [client, file] of clients) {
    assert.match(home, new RegExp(`alt="Logo da ${client}"`));
    await access(join(dist, `assets/images/clientes/${file}`));
  }
  assert.match(contact, /Envie sua RFQ com contexto técnico/);
  assert.match(contact, /mailto:solucao@newtractor\.com\.br\?subject=RFQ/);
  assert.match(contact, /Desenho, especificação e fotos em anexo/);
  assert.match(contact, /Prazo, logística e capacidade são confirmados após avaliação técnica e comercial/);
});

test("FAQ visível e dados estruturados permanecem equivalentes", async () => {
  const html = await read("servicos/index.html");
  const visibleQuestions = [...html.matchAll(/<details><summary>([^<]+)<\/summary>/g)].map((match) => match[1]);
  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  const graph = JSON.parse(jsonLd)["@graph"];
  const faq = graph.find((item) => item["@type"] === "FAQPage");
  assert.ok(faq);
  assert.deepEqual(faq.mainEntity.map((item) => item.name), visibleQuestions);
});

test("CSS inclui os componentes responsivos e proteções móveis do novo site", async () => {
  const css = await read("assets/css/site.20260901-2.css");
  assert.match(css, /\.machine-strip/);
  assert.match(css, /\.equipment-grid/);
  assert.match(css, /\.coverage-grid/);
  assert.match(css, /\.photo-grid/);
  assert.match(css, /@media \(max-width: 600px\)[\s\S]*\.hero__facts\s*\{\s*grid-template-columns: 1fr;/);
  assert.match(css, /env\(safe-area-inset-bottom\)/);
});

test("a documentação preserva as cinco regras de migração por query string", async () => {
  const deployment = await readFile(join(root, "docs/DEPLOYMENT.md"), "utf8");
  const urlMap = await readFile(join(root, "docs/url-map.md"), "utf8");
  const mappings = [
    ["p=470", "/empresa/"],
    ["p=13", "/servicos/"],
    ["p=288", "/servicos/reforma-cacambas-conchas/"],
    ["p=286", "/servicos/monitoramento-material-rodante/"],
    ["p=477", "/contato/"],
  ];

  assert.match(deployment, /criar cinco \*\*Single Redirect Rules\*\*/);
  for (const [query, destination] of mappings) {
    assert.ok(deployment.includes(`query eq "${query}"`), `${query}: regra Cloudflare documentada`);
    assert.ok(deployment.includes(`https://newtractor.com.br${destination}`), `${query}: destino Cloudflare documentado`);
    assert.ok(urlMap.includes(`\`/?${query}\` | \`${destination}\``), `${query}: mapa de URLs coerente`);
  }
});
