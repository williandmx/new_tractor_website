import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { site, pages } from "../src/site.mjs";

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
const forbiddenPublicLanguage = /\b(?:IA|inteligência artificial|LLM|agents?|agentes?|SEO|oficina)\b/i;

function mp4Atoms(buffer, start = 0, end = buffer.length) {
  const atoms = [];
  for (let offset = start; offset + 8 <= end;) {
    const size = buffer.readUInt32BE(offset);
    assert.ok(size >= 8 && offset + size <= end, "MP4: box completo e válido");
    atoms.push({ type: buffer.toString("ascii", offset + 4, offset + 8), offset, start: offset + 8, end: offset + size });
    offset += size;
  }
  return atoms;
}

test("o build contém todas as rotas e arquivos de descoberta", async () => {
  const required = [
    "index.html",
    "rodantes/index.html",
    "hidrautractor/index.html",
    "usinagem/index.html",
    "calderaria/index.html",
    "parts/index.html",
    "services/index.html",
    "techtractor/index.html",
    "empresa/index.html",
    "parcerias/index.html",
    "pessoas/index.html",
    "servicos/index.html",
    "servicos/manutencao-material-rodante/index.html",
    "servicos/reforma-cacambas-conchas/index.html",
    "servicos/monitoramento-material-rodante/index.html",
    "servicos/usinagem-componentes-maquinas-pesadas/index.html",
    "guias/index.html",
    "guias/avaliacao-maquinas-linha-amarela/index.html",
    "guias/inspecao-material-rodante/index.html",
    "guias/cotacao-pecas-maquinas-pesadas/index.html",
    "equipamentos/index.html",
    "atuacao/index.html",
    "contato/index.html",
    "noticias/new-tractor-na-exposibram-2026/index.html",
    "privacidade/index.html",
    "404.html",
    "robots.txt",
    "sitemap.xml",
    "llms.txt",
    "site.webmanifest",
    "_headers",
    "_redirects",
  ];
  await Promise.all(required.map((path) => access(join(dist, path))));
  await assert.rejects(access(join(dist, "agents.txt")), (error) => error?.code === "ENOENT");
});

test("cada página tem HTML semântico, metadados e um único H1", async () => {
  const htmlFiles = (await walk(dist)).filter((path) => path.endsWith(".html"));
  assert.equal(htmlFiles.length, pages.length);
  const titles = new Set();
  const descriptions = new Set();

  for (const path of htmlFiles) {
    const html = await readFile(path, "utf8");
    const relative = path.slice(dist.length + 1);
    assert.match(html, /^<!doctype html>/i, relative);
    assert.match(html, /<html lang="pt-BR">/, relative);
    assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/, relative);
    assert.match(html, /<main id="conteudo" tabindex="-1">/, `${relative}: destino do atalho aceita foco de teclado`);
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
    assert.doesNotMatch(html, forbiddenPublicLanguage, `${relative}: sem bastidores ou linguagem de IA/SEO`);

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

test("robots, sitemap e llms mantêm as mesmas URLs canônicas indexáveis", async () => {
  const robots = await read("robots.txt");
  assert.match(robots, /^User-agent: \*\nAllow: \/$/m);
  assert.match(robots, /Sitemap: https:\/\/newtractor\.com\.br\/sitemap\.xml/);

  const sitemap = await read("sitemap.xml");
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.equal(locations.length, pages.filter((page) => page.indexable !== false).length);
  assert.equal(new Set(locations).size, locations.length);
  assert.ok(locations.every((url) => url.startsWith("https://newtractor.com.br/")));
  assert.ok(!locations.some((url) => url.includes("404")));
  assert.ok(locations.includes(`${site.origin}/parcerias/`));
  const llms = await read("llms.txt");
  const discoveryLinks = [...llms.matchAll(/\]\((https:\/\/[^)]+)\)/g)].map((match) => match[1]);
  assert.deepEqual(new Set(discoveryLinks), new Set(locations), "llms sem rotas ausentes, externas ou não indexáveis");
  assert.doesNotMatch(llms, /pages\.dev|localhost|127\.0\.0\.1/);
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
  assert.ok(!graph.some((item) => item["@type"] === "Event"), "registro histórico usa Article");
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
  assert.match(contact, /Boas conexões começam com uma conversa|Solicite uma proposta técnica/);
  assert.match(contact, /mailto:solucao@newtractor\.com\.br\?subject=RFQ/);
  assert.match(contact, /Empresa solicitante/);
  assert.match(contact, /Equipamento, modelo e componente/);
  assert.match(contact, /Desenho, especificação e fotos em anexo/);
  assert.match(contact, /solucao@newtractor\.com\.br/);
  assert.match(contact, /\(31\) 3493-1476/);
  assert.match(contact, /\(31\) 99312-0054/);
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

test("a home usa vídeo de hero com fallback estático", async () => {
  const html = await read("index.html");
  const video = html.match(/<video\b[^>]*>/)?.[0];
  assert.ok(video);
  assert.match(video, /class="hero__video"/);
  assert.match(video, /preload="none"/);
  assert.doesNotMatch(video, /\sautoplay|\ssrc=/);
  assert.match(video, /data-desktop="\/assets\/videos\/group-opening-desktop\.mp4"/);
  assert.match(video, /data-mobile="\/assets\/videos\/group-opening-mobile\.mp4"/);
  assert.match(html, /class="hero__poster"/);
  assert.match(html, /group-opening-640\.webp/);
  assert.match(html, /group-opening-1280\.webp/);
  assert.match(html, /aria-controls="hero-film" data-film-toggle hidden/);
  assert.match(html, /hero-video\.20260905\.js/);
  for (const [name, budget] of [["desktop", 4], ["mobile", 2]]) {
    const path = join(dist, `assets/videos/group-opening-${name}.mp4`);
    const asset = await stat(path);
    assert.ok(asset.size > 10000 && asset.size <= budget * 1024 * 1024, `${name}: orçamento do vídeo`);
    const buffer = await readFile(path);
    const atoms = mp4Atoms(buffer);
    const moov = atoms.find((atom) => atom.type === "moov");
    const mdat = atoms.find((atom) => atom.type === "mdat");
    assert.ok(moov && mdat && moov.offset < mdat.offset, `${name}: faststart e export completo`);
    const mvhd = mp4Atoms(buffer, moov.start, moov.end).find((atom) => atom.type === "mvhd");
    assert.ok(mvhd, `${name}: cabeçalho de duração`);
    const version = buffer[mvhd.start];
    const timescale = buffer.readUInt32BE(mvhd.start + (version === 1 ? 20 : 12));
    const units = version === 1 ? Number(buffer.readBigUInt64BE(mvhd.start + 24)) : buffer.readUInt32BE(mvhd.start + 16);
    const duration = units / timescale;
    assert.ok(Math.abs(duration - 12) <= 0.1, `${name}: duração esperada de 12 s; recebido ${duration}`);
  }
  for (const size of [640, 1280]) {
    await access(join(dist, `assets/images/group-opening-${size}.webp`));
    await access(join(dist, `assets/images/hero-film-people-${size}.webp`));
  }
});

test("CSS inclui os componentes responsivos e proteções móveis do novo site", async () => {
  const css = await read(`assets/css/${site.cssFile}`);
  assert.match(css, /\.machine-strip/);
  assert.match(css, /\.equipment-grid/);
  assert.match(css, /\.coverage-grid/);
  assert.match(css, /\.photo-grid/);
  assert.match(css, /\.intro-layout/);
  assert.match(css, /\.company-card__image/);
  assert.match(css, /\.company-card__body/);
  assert.match(css, /\.partnership-feature/);
  assert.match(css, /env\(safe-area-inset-bottom\)/);
});

test("Pessoas tem filme sob demanda, texto equivalente e descoberta", async () => {
  const people = await read("pessoas/index.html");
  assert.match(people, /<video controls playsinline preload="none"/);
  assert.match(people, /aria-describedby="film-description"/);
  assert.match(people, /id="film-description"/);
  assert.match(people, /hero-film-full-desktop\.mp4/);
  assert.match(people, /hero-film-full-mobile\.mp4/);
  assert.doesNotMatch(people, /certificada ISO|Minusa|Tokyo|Hardox|<blockquote|aggregateRating/);
  const fullFilm = await stat(join(dist, "assets/videos/hero-film-full-desktop.mp4"));
  assert.ok(fullFilm.size > 10 * 1024 * 1024, "filme institucional completo presente");
  const graph = JSON.parse(people.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])["@graph"];
  assert.ok(graph.some((entry) => entry["@type"] === "BreadcrumbList"));
  assert.ok(graph.some((entry) => entry["@type"] === "LocalBusiness"));
  assert.match(await read("sitemap.xml"), /https:\/\/newtractor\.com\.br\/pessoas\//);
});

test("o pacote de migração preserva os cinco destinos canônicos e permanece desativado", async () => {
  const deployment = await readFile(join(root, "docs/DEPLOYMENT.md"), "utf8");
  const urlMap = await readFile(join(root, "docs/url-map.md"), "utf8");
  const ruleset = JSON.parse(await readFile(join(root, "docs/migration/wordpress-single-redirects.json"), "utf8"));
  const mappings = [
    ["p=470", "/empresa/"],
    ["p=13", "/servicos/manutencao-material-rodante/"],
    ["p=288", "/servicos/reforma-cacambas-conchas/"],
    ["p=286", "/servicos/monitoramento-material-rodante/"],
    ["p=477", "/contato/"],
  ];

  assert.match(deployment, /migration\/wordpress-single-redirects\.json/);
  assert.equal(ruleset.kind, "zone");
  assert.equal(ruleset.phase, "http_request_dynamic_redirect");
  assert.equal(ruleset.rules.length, mappings.length);
  assert.equal(new Set(ruleset.rules.map((rule) => rule.ref)).size, mappings.length);
  for (const [query, destination] of mappings) {
    const rule = ruleset.rules.find((entry) => entry.ref === `wordpress-${query.slice(2)}`);
    assert.ok(rule, `${query}: regra identificada`);
    assert.equal(rule.enabled, false, `${query}: pacote não ativa redirects antes do corte`);
    assert.equal(rule.action, "redirect");
    assert.equal(rule.action_parameters.from_value.status_code, 301);
    assert.equal(rule.action_parameters.from_value.preserve_query_string, false);
    const canonical = `https://newtractor.com.br${destination}`;
    assert.equal(rule.action_parameters.from_value.target_url.value, canonical);
    assert.ok((await read("sitemap.xml")).includes(`<loc>${canonical}</loc>`), `${query}: destino indexável no sitemap`);
    await access(join(dist, destination.slice(1), "index.html"));
    assert.ok(urlMap.includes(`\`/?${query}\` | \`${destination}\``), `${query}: mapa de URLs coerente`);
  }
});
