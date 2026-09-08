// Catálogo comercial: cada entrada aponta para uma página canônica já publicada.
// Fontes de escopo: docs/source-ledger.md e confirmação hidráulica de 08/09/2026.
const offers = [
  {
    label: "Material rodante", route: "/servicos/manutencao-material-rodante/", brand: "NEW TRACTOR RODANTES",
    text: "Avaliação e recuperação de correntes, sapatas, roletes, rodas-guia e conjuntos de esteiras. A condição do componente orienta o reparo.",
    photo: { name: "material-rodante", widths: [640, 1200], width: 1200, height: 675, alt: "Conjuntos de esteiras de material rodante no pátio da New Tractor" },
    links: [["Conhecer a recuperação", "/servicos/manutencao-material-rodante/"]],
  },
  {
    label: "Cilindros hidráulicos", route: "/hidrautractor/", brand: "HIDRAUTRACTOR",
    text: "Recuperação de um cilindro em uso ou fabricação de um novo conjunto. Camisa, haste, vedações, montagem e testes definidos pela aplicação.",
    photo: { name: "hidrau-recuperacao", widths: [640, 1280], width: 1280, height: 720, alt: "Operador e componente cilíndrico em máquina do acervo industrial" },
    links: [["Recuperação", "/hidrautractor/recuperacao-cilindros-hidraulicos/"], ["Fabricação", "/hidrautractor/fabricacao-cilindros-hidraulicos/"]],
  },
  {
    label: "Caldeiraria de linha amarela", route: "/calderaria/", brand: "NEW TRACTOR CALDERARIA",
    text: "Recuperação estrutural de caçambas de escavadeiras, conchas de carregadeiras e componentes pesados, conforme desgaste, geometria e aplicação.",
    photo: { name: "concha-patio", widths: [640, 1200], width: 1200, height: 612, alt: "Caçamba de máquina pesada no pátio da New Tractor" },
    links: [["Reforma de caçambas e conchas", "/servicos/reforma-cacambas-conchas/"]],
  },
  {
    label: "Usinagem de componentes", route: "/servicos/usinagem-componentes-maquinas-pesadas/", brand: "NEW TRACTOR USINAGEM",
    text: "Recuperação dimensional com torno, mandrilhamento e centro de usinagem. Peça, desenho e medidas orientam a sequência de trabalho.",
    photo: { name: "hidrau-fabricacao", widths: [640, 1280], width: 1280, height: 720, alt: "Peça cilíndrica presa em torno, com ferramenta e fluido de corte" },
    links: [["Conhecer a usinagem", "/servicos/usinagem-componentes-maquinas-pesadas/"]],
  },
  {
    label: "Monitoramento de rodantes", route: "/servicos/monitoramento-material-rodante/", brand: "NEW TRACTOR RODANTES",
    text: "Medições de desgaste e histórico de aplicação, em conjunto com a manutenção do cliente, para apoiar o planejamento das intervenções.",
    photo: { name: "medicao-rolete", widths: [640], width: 640, height: 427, alt: "Instrumento de medição aplicado a um rolete de material rodante" },
    links: [["Acompanhar o desgaste", "/servicos/monitoramento-material-rodante/"]],
  },
  {
    label: "Medição e avaliação em campo", route: "/services/", brand: "NEW TRACTOR SERVICES",
    text: "Apresente máquina, componente, local e objetivo da medição. A Services organiza a demanda com escopo, mobilização e logística avaliados por operação.",
    photo: { name: "equipe", widths: [640, 1200], width: 1200, height: 675, alt: "Escavadeira e veículos de apoio na base da New Tractor em Belo Horizonte" },
    links: [["Planejar a avaliação", "/services/"]],
  },
];

export const serviceOfferLinks = offers.map(({ label, route }) => [label, route]);

export function serviceOfferCards({ picture, icon }) {
  return `<div class="service-grid service-grid--catalog">${offers.map((offer, index) => `<article class="service-card">
    <a class="service-card__media" href="${offer.route}" aria-label="Conhecer ${offer.label.toLocaleLowerCase("pt-BR")}">${picture({ ...offer.photo, sizes: "(max-width: 760px) 100vw, (max-width: 1100px) 45vw, 33vw" })}</a>
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
