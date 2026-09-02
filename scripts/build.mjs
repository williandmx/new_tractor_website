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

for (const page of pages) {
  const destination = join(output, page.output);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, renderPage(page), "utf8");
}

const staticFiles = ["_headers", "_redirects", "robots.txt", "llms.txt", "agents.txt", "site.webmanifest"];
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

console.log(`Built ${pages.length} HTML pages in dist/`);

async function BunlessRead(path) {
  const { readFile } = await import("node:fs/promises");
  return readFile(path, "utf8");
}
