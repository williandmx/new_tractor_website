// Catálogo comercial: cada entrada aponta para uma página canônica já publicada.
// Fontes de escopo: docs/source-ledger.md e confirmações do proprietário até 10/09/2026.
const offers = [
  {
    label: "Material rodante", route: "/servicos/manutencao-material-rodante/", brand: "NEW TRACTOR RODANTES",
    text: "Avaliação, recuperação e acompanhamento de correntes, sapatas, roletes, rodas-guia e conjuntos de esteiras para planejar a manutenção.",
    photo: { name: "material-rodante", widths: [640, 1200], width: 1200, height: 675, alt: "Conjuntos de esteiras de material rodante no pátio da New Tractor" },
    links: [["Avaliar rodantes", "/servicos/manutencao-material-rodante/"]],
  },
  {
    label: "Cilindros hidráulicos", route: "/hidrautractor/", brand: "HIDRAUTRACTOR",
    text: "Recuperação de cilindros em uso e fabricação de novos conjuntos para máquinas pesadas, conforme a aplicação e a condição da peça.",
    photo: { name: "hidrau-recuperacao", widths: [640, 1280], width: 1280, height: 720, alt: "Operador e componente cilíndrico em máquina do acervo industrial" },
    links: [["Solicitar recuperação", "/hidrautractor/recuperacao-cilindros-hidraulicos/"], ["Solicitar fabricação", "/hidrautractor/fabricacao-cilindros-hidraulicos/"]],
  },
  {
    label: "Caldeiraria de linha amarela", route: "/calderaria/", brand: "NEW TRACTOR CALDERARIA",
    text: "Recuperação estrutural de caçambas, conchas e componentes pesados conforme desgaste, geometria e aplicação.",
    photo: { name: "concha-patio", widths: [640, 1200], width: 1200, height: 612, alt: "Caçamba de máquina pesada no pátio da New Tractor" },
    links: [["Solicitar recuperação estrutural", "/servicos/reforma-cacambas-conchas/"]],
  },
  {
    label: "Usinagem de componentes", route: "/servicos/usinagem-componentes-maquinas-pesadas/", brand: "NEW TRACTOR USINAGEM",
    text: "Recuperação dimensional com torno, mandrilhamento e centro de usinagem para devolver função a componentes de máquinas.",
    photo: { name: "hidrau-fabricacao", widths: [640, 1280], width: 1280, height: 720, alt: "Peça cilíndrica presa em torno, com ferramenta e fluido de corte" },
    links: [["Solicitar recuperação por usinagem", "/servicos/usinagem-componentes-maquinas-pesadas/"]],
  },
  {
    label: "Peças sob demanda", route: "/parts/", brand: "NEW TRACTOR PARTS",
    text: "Fabricação sob demanda de peças para máquinas pesadas a partir de código, desenho, amostra ou especificação.",
    photo: { name: "hidrau-fabricacao", widths: [640, 1280], width: 1280, height: 720, alt: "Peça cilíndrica presa em torno, com ferramenta e fluido de corte" },
    links: [["Solicitar fabricação de peça", "/parts/"]],
  },
  {
    label: "Serviço de campo", route: "/services/", brand: "NEW TRACTOR SERVICES",
    text: "Técnicos especializados avaliam desgaste e executam manutenção em equipamentos de linha amarela, em campo ou nas unidades industriais.",
    photo: { name: "medicao-rolete", widths: [640], width: 640, height: 427, alt: "Instrumento de medição aplicado a um rolete de material rodante" },
    links: [["Solicitar visita técnica", "/services/"]],
  },
  {
    label: "Monitoramento de rodantes", route: "/servicos/monitoramento-material-rodante/", brand: "NEW TRACTOR RODANTES",
    text: "Medições de desgaste e histórico de aplicação para apoiar a manutenção no momento certo.",
    photo: { name: "medicao-rolete", widths: [640], width: 640, height: 427, alt: "Instrumento de medição aplicado a um rolete de material rodante" },
    links: [["Planejar acompanhamento", "/servicos/monitoramento-material-rodante/"]],
  },
];

export const serviceOfferLinks = offers.map(({ label, route }) => [label, route]);

export function serviceOfferCards({ picture, icon }) {
  return `<div class="service-grid service-grid--catalog">${offers.map((offer, index) => `<article class="service-card">
    <a class="service-card__media" href="${offer.route}" aria-label="${offer.links[0][0]}: ${offer.label}">${picture({ ...offer.photo, sizes: "(max-width: 760px) 100vw, (max-width: 1100px) 45vw, 33vw" })}</a>
    <div class="service-card__content"><span class="service-card__number">${String(index + 1).padStart(2, "0")} / ${offer.brand}</span><h3><a href="${offer.route}">${offer.label}</a></h3><p>${offer.text}</p><div class="service-card__links">${offer.links.map(([label, route]) => `<a class="text-link" href="${route}">${label} ${icon("arrow")}</a>`).join("")}</div></div>
  </article>`).join("")}</div>`;
}

export const serviceOfferListSchema = (site) => ({
  "@type": "ItemList",
  "@id": `${site.origin}/servicos/#catalogo`,
  name: "Serviços para máquinas de linha amarela",
  itemListElement: serviceOfferLinks.map(([name, route], index) => ({
    "@type": "ListItem", position: index + 1, name, url: `${site.origin}${route}`,
  })),
});
