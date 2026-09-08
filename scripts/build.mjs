import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pages, renderPage, site } from "../src/site.mjs";

const root = process.cwd();
const output = join(root, "dist");

await rm(output, { recursive: true, force: true });
await mkdir(join(output, "assets", "css"), { recursive: true });
await mkdir(join(output, "assets", "js"), { recursive: true });
await cp(join(root, "public", "assets"), join(output, "assets"), { recursive: true });

await writeFile(
  join(output, "assets", "css", site.cssFile),
  await BunlessRead(join(root, "src", "styles.css")),
);
await writeFile(
  join(output, "assets", "js", site.jsFile),
  await BunlessRead(join(root, "src", "main.js")),
);
await cp(join(root, "src", "hero-video.js"), join(output, "assets", "js", "hero-video.20260905.js"));

for (const page of pages) {
  const destination = join(output, page.output);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, renderPage(page), "utf8");
}

const staticFiles = ["_headers", "_redirects", "robots.txt", "site.webmanifest"];
for (const file of staticFiles) {
  await cp(join(root, "public", file), join(output, file));
}

const sitemapEntries = pages
  .filter((page) => page.indexable !== false)
  .map(
    (page) => `  <url>\n    <loc>${site.origin}${page.route}</loc>\n    <lastmod>${page.lastModified ?? site.lastModified}</lastmod>\n  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;
await writeFile(join(output, "sitemap.xml"), sitemap, "utf8");

const discoveryPages = pages.filter((page) => page.indexable !== false);
const discoveryGroups = [
  ["Rodantes", ["/rodantes/", "/servicos/manutencao-material-rodante/", "/servicos/monitoramento-material-rodante/"]],
  ["HidrauTractor", ["/hidrautractor/"]],
  ["Usinagem", ["/usinagem/", "/servicos/usinagem-componentes-maquinas-pesadas/"]],
  ["Calderaria", ["/calderaria/", "/servicos/reforma-cacambas-conchas/"]],
  ["Parts", ["/parts/"]],
  ["Services", ["/services/"]],
  ["TechTractor", ["/techtractor/"]],
  ["Setores e atuação", discoveryPages.filter(page => page.route.startsWith("/setores/") || page.route === "/atuacao/").map(page => page.route)],
  ["Guias de avaliação e manutenção", discoveryPages.filter(page => page.route.startsWith("/guias/")).map(page => page.route)],
];
const groupedRoutes = new Set(discoveryGroups.flatMap(([, routes]) => routes));
discoveryGroups.push(["Grupo e informações institucionais", discoveryPages.filter(page => !groupedRoutes.has(page.route)).map(page => page.route)]);
const discoveryMarkdown = discoveryGroups.map(([label, routes]) => `## ${label}\n\n${discoveryPages.filter(page => routes.includes(page.route)).map(page => `- [${page.title}](${site.origin}${page.route}): ${page.description}`).join("\n")}`).join("\n\n");
const llms = `# ${site.name}\n\n> Especialidades industriais para máquinas pesadas, com base em Belo Horizonte, Minas Gerais.\n\nManutenção, recondicionamento e monitoramento de material rodante; reforma de caçambas e conchas; recuperação dimensional de componentes. Atendimento sujeito a avaliação técnica, comercial e logística por demanda.\n\nHidrauTractor, Parts e Services recebem demandas conforme identificação, aplicação e escopo. TechTractor é uma frente tecnológica em evolução. As frentes são uma arquitetura de marca; não representam sete estabelecimentos ou pessoas jurídicas confirmadas.\n\n${discoveryMarkdown}\n\n## Contato\n\n- E-mail: ${site.email}\n- Telefone: ${site.phoneDisplay}\n- [Condições para avaliação e canais oficiais](${site.origin}/contato/)\n`;
await writeFile(join(output, "llms.txt"), llms, "utf8");

console.log(`Built ${pages.length} HTML pages in dist/`);

async function BunlessRead(path) {
  const { readFile } = await import("node:fs/promises");
  return readFile(path, "utf8");
}
