// Páginas de oferta técnica. Não acrescentam capacidade, prazo, estoque,
// garantia ou processo industrial não documentado no source-ledger.
const section = (id, title, content) =>
  `<section class="section section--light" aria-labelledby="${id}"><div class="shell editorial-grid"><div><h2 id="${id}">${title}</h2></div><div class="rich-text">${content}</div></div></section>`;
const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

export const serviceOfferLinks = [
  ["Cilindros hidráulicos", "/servicos/cilindros-hidraulicos/"],
  ["Inspeção e manutenção em campo", "/servicos/inspecao-manutencao-campo/"],
  ["Caldeiraria de linha amarela", "/servicos/caldeiraria-linha-amarela/"],
];
