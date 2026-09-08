// Cada URL tem uma frente editorial responsável. Páginas compartilhadas ficam
// no grupo; segmentar o índice permite auditar cobertura, sem duplicar URLs.
const fronts = [
  ["rodantes", "Rodantes", ["/rodantes/", "/servicos/manutencao-material-rodante/", "/servicos/monitoramento-material-rodante/", "/componentes/rodas-guia/", "/componentes/roletes-de-esteira/", "/componentes/correntes-sapatas-esteiras/"]],
  ["hidrautractor", "HidrauTractor", ["/hidrautractor/", "/hidrautractor/recuperacao-cilindros-hidraulicos/", "/hidrautractor/fabricacao-cilindros-hidraulicos/", "/guias/avaliacao-cilindros-hidraulicos/"]],
  ["usinagem", "Usinagem", ["/usinagem/", "/servicos/usinagem-componentes-maquinas-pesadas/", "/guias/folgas-pinos-buchas-alojamentos/"]],
  ["calderaria", "Calderaria", ["/calderaria/", "/servicos/reforma-cacambas-conchas/", "/guias/avaliacao-cacambas-conchas/"]],
  ["parts", "Parts", ["/parts/", "/guias/cotacao-pecas-maquinas-pesadas/"]],
  ["services", "Services", ["/services/", "/guias/avaliacao-maquinas-linha-amarela/"]],
  ["techtractor", "TechTractor", ["/techtractor/", "/guias/inspecao-material-rodante/"]],
  ["equipamentos", "Equipamentos e aplicações", ["/equipamentos/", "/equipamentos/escavadeiras/", "/equipamentos/tratores-de-esteira/", "/equipamentos/pas-carregadeiras/"]],
  ["atuacao", "Atuação e Minas Gerais", ["/atuacao/", "/atuacao/minas-gerais/"]],
];

export function discoveryGroups(pages) {
  const indexable = pages.filter(page => page.indexable !== false);
  const assigned = new Set();
  const groups = fronts.map(([slug, label, routes]) => {
    for (const route of routes) {
      if (assigned.has(route)) throw new Error(`URL duplicada entre sitemaps: ${route}`);
      if (!indexable.some(page => page.route === route)) throw new Error(`URL sem página indexável: ${route}`);
      assigned.add(route);
    }
    return { slug, label, file: `sitemap-${slug}.xml`, pages: indexable.filter(page => routes.includes(page.route)) };
  });
  groups.push({ slug: "grupo", label: "Grupo, componentes e setores", file: "sitemap-grupo.xml", pages: indexable.filter(page => !assigned.has(page.route)) });
  return groups;
}

const xml = value => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
export function renderSitemaps(pages, site) {
  const groups = discoveryGroups(pages);
  const files = groups.map(group => ({
    file: group.file,
    content: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${group.pages.map(page => `  <url>\n    <loc>${xml(site.origin + page.route)}</loc>\n    <lastmod>${page.lastModified ?? site.lastModified}</lastmod>\n  </url>`).join("\n")}\n</urlset>\n`,
  }));
  files.push({ file: "sitemap.xml", content: `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${groups.map(group => `  <sitemap><loc>${xml(site.origin + "/" + group.file)}</loc></sitemap>`).join("\n")}\n</sitemapindex>\n` });
  return files;
}
