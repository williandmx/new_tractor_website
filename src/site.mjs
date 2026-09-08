import { companies, companyLinks, groupIndex, createCompanyPages } from "./group.mjs";
import { createTechnicalPages } from "./technical-content.mjs";
import { createSectorPages, sectorLinks } from "./sector-content.mjs";
import { createComponentPages } from "./component-content.mjs";
import { createEquipmentPages, equipmentLinks } from "./equipment-content.mjs";
import { createTerritoryPages } from "./territory-content.mjs";

export const site = {
  name: "Grupo New Tractor",
  shortName: "New Tractor",
  origin: "https://newtractor.com.br",
  locale: "pt_BR",
  lastModified: "2026-09-07",
  cssFile: "site.20260907-group.css",
  jsFile: "site.20260908-measurement.js",
  email: "solucao@newtractor.com.br",
  phoneDisplay: "(31) 3493-1476",
  phoneHref: "tel:+553134931476",
  whatsappDisplay: "(31) 99312-0054",
  whatsapp:
    "https://wa.me/5531993120054?text=Ol%C3%A1%2C%20New%20Tractor.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  address: "Rua Santos Anjos, 380 — São Gabriel, Belo Horizonte — MG",
  map:
    "https://www.google.com/maps/place/New+Tractor+-+Material+Rodante/data=!4m2!3m1!1s0xa69b3d77ceabe5:0xf73237839e7dbddb",
  social: {
    instagram: "https://www.instagram.com/newtractor_rodante/",
    facebook: "https://www.facebook.com/100068190941426/",
    linkedin: "https://www.linkedin.com/company/new-tractor",
  },
};

const exposibram = {
  route: "/noticias/new-tractor-na-exposibram-2026/",
  whatsapp:
    "https://wa.me/5531993120054?text=Ol%C3%A1%2C%20New%20Tractor.%20Vi%20o%20conte%C3%BAdo%20sobre%20a%20EXPOSIBRAM%202026%20e%20gostaria%20de%20conversar%20sobre%20uma%20necessidade%20da%20minha%20opera%C3%A7%C3%A3o.",
  officialUrl: "https://exposibram2026.ibram.org.br/",
  exhibitionUrl: "https://exposibram2026.ibram.org.br/sobre-a-exposicao/",
};

const icon = (name) => {
  const paths = {
    arrow:
      '<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    check:
      '<path d="m5 12 4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    wrench:
      '<path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4 4 0 0 0 5 5l-7.8 7.8a2.1 2.1 0 1 0 3 3l7.8-7.8a4 4 0 0 0 5-5L18 10l-2.4-2.4 2.3-2.3a4 4 0 0 0-3.2 1Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    measure:
      '<path d="M4 18 18 4l2 2L6 20H4v-2Zm4-3 2 2m1-5 2 2m1-5 2 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    bucket:
      '<path d="M4 7h16l-2 11H6L4 7Zm3 0V4h10v3M8 11h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    phone:
      '<path d="M8.5 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3.5l-4-1-1 2.5a13 13 0 0 1-9-9L9.5 7l-1-4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    map:
      '<path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    mail:
      '<path d="M3 6h18v12H3V6Zm1 1 8 6 8-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    clock:
      '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    factory:
      '<path d="M3 21V9l6 3V8l6 4V5h6v16H3Zm4-3h2m3 0h2m3 0h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none">${paths[name]}</svg>`;
};

const picture = ({
  name,
  widths,
  width,
  height,
  alt,
  sizes = "(max-width: 760px) 100vw, 50vw",
  eager = false,
  className = "",
}) => {
  const srcset = widths.map((item) => `/assets/images/${name}-${item}.webp ${item}w`).join(", ");
  const fallback = widths[widths.length - 1];
  return `<img class="${className}" src="/assets/images/${name}-${fallback}.webp" srcset="${srcset}" sizes="${sizes}" width="${width}" height="${height}" alt="${alt}" loading="${eager ? "eager" : "lazy"}" decoding="async"${eager ? ' fetchpriority="high"' : ""}>`;
};

const clientLogos = [
  { name: "Armac", file: "armac.webp" },
  { name: "Fagundes", file: "fagundes.webp" },
  { name: "TSL Transportes", file: "tsl-transportes.webp" },
  { name: "VIX", file: "vix.webp" },
  { name: "FLAPA Engenharia e Mineração", file: "flapa.webp" },
  { name: "SADA", file: "sada.webp" },
  { name: "ICAL", file: "ical.webp" },
  { name: "EMPA", file: "empa.webp" },
  { name: "Terrabel", file: "terrabel.webp" },
  { name: "InfraBrasil", file: "infrabrasil.webp" },
  { name: "Tracbel Group", file: "tracbel.webp" },
  { name: "Transamigos", file: "transamigos.webp" },
  { name: "Vertical Green do Brasil", file: "vertical-green.webp" },
  { name: "Queiroz Galvão", file: "queiroz-galvao.webp" },
  { name: "Skava Minas", file: "skava-minas.webp" },
];

const clientLogoGrid = () => `
  <ul class="client-logo-grid" aria-label="Empresas divulgadas na carteira institucional da New Tractor">
    ${clientLogos
      .map(
        ({ name, file }) => `<li>
          <img src="/assets/images/clientes/${file}" width="400" height="180" alt="Logo da ${name}" loading="lazy" decoding="async">
          <span>${name}</span>
        </li>`,
      )
      .join("")}
  </ul>`;

const serviceCards = () => `
  <div class="service-grid">
    <article class="service-card">
      <a class="service-card__media" href="/servicos/manutencao-material-rodante/" aria-label="Conhecer a manutenção de material rodante">
        ${picture({ name: "material-rodante", widths: [640, 1200], width: 1200, height: 675, alt: "Conjuntos de esteiras de material rodante no pátio da New Tractor", sizes: "(max-width: 760px) 100vw, 33vw" })}
      </a>
      <div class="service-card__content">
        <span class="service-card__number">01</span>
        <div class="service-card__icon">${icon("wrench")}</div>
        <h3>Material rodante</h3>
        <p>Avaliação e recuperação de rosários, sapatas, roletes, rodas-guia, trucks e conjuntos.</p>
        <a class="text-link" href="/servicos/manutencao-material-rodante/">Conhecer o escopo ${icon("arrow")}</a>
      </div>
    </article>
    <article class="service-card">
      <a class="service-card__media" href="/servicos/reforma-cacambas-conchas/" aria-label="Conhecer a reforma de caçambas e conchas">
        ${picture({ name: "concha-patio", widths: [640, 1200], width: 1200, height: 612, alt: "Caçamba preta recuperada no pátio da New Tractor", sizes: "(max-width: 760px) 100vw, 33vw" })}
      </a>
      <div class="service-card__content">
        <span class="service-card__number">02</span>
        <div class="service-card__icon">${icon("bucket")}</div>
        <h3>Reforma de caçambas e conchas</h3>
        <p>Reparos estruturais orientados pela condição, pelo perfil e pela aplicação do componente.</p>
        <a class="text-link" href="/servicos/reforma-cacambas-conchas/">Conhecer a reforma ${icon("arrow")}</a>
      </div>
    </article>
    <article class="service-card">
      <a class="service-card__media" href="/servicos/monitoramento-material-rodante/" aria-label="Conhecer o monitoramento de material rodante">
        ${picture({ name: "monitoramento", widths: [640, 1024], width: 1024, height: 683, alt: "Componentes que integram o sistema de material rodante", sizes: "(max-width: 760px) 100vw, 33vw" })}
      </a>
      <div class="service-card__content">
        <span class="service-card__number">03</span>
        <div class="service-card__icon">${icon("measure")}</div>
        <h3>Monitoramento de material rodante</h3>
        <p>Medições de desgaste e contexto de aplicação para apoiar o planejamento da manutenção.</p>
        <a class="text-link" href="/servicos/monitoramento-material-rodante/">Conhecer o monitoramento ${icon("arrow")}</a>
      </div>
    </article>
  </div>`;

const contactBand = (title = "Vamos conversar sobre sua operação?") => `
  <section class="contact-band" aria-labelledby="contact-band-title"><div class="shell contact-band__inner"><div><span class="eyebrow eyebrow--dark">FALE COM O GRUPO</span><h2 id="contact-band-title">${title}</h2><p>Apresente sua empresa, compartilhe uma necessidade ou conheça nossas especialidades.</p></div><div class="contact-band__actions"><a class="button button--dark" href="/contato/" data-analytics="contato_rodape">Entre em contato ${icon("arrow")}</a><a class="contact-band__phone" href="${site.phoneHref}" data-analytics="telefone_faixa_contato">${site.phoneDisplay}</a></div></div></section>`;

const pageHero = ({ eyebrow, title, intro, breadcrumb, image, imageAlt, imageWidths, imageWidth, imageHeight }) => `
  <section class="page-hero">
    <div class="shell page-hero__grid">
      <div class="page-hero__copy">
        <nav class="breadcrumbs" aria-label="Navegação estrutural">
          <ol><li><a href="/">Início</a></li>${breadcrumb.map((item, index) => `<li>${index === breadcrumb.length - 1 ? `<span aria-current="page">${item.label}</span>` : `<a href="${item.href}">${item.label}</a>`}</li>`).join("")}</ol>
        </nav>
        <span class="eyebrow">${eyebrow}</span>
        <h1>${title}</h1>
        <p class="page-hero__intro">${intro}</p>
      </div>
      <div class="page-hero__media">
        ${picture({ name: image, widths: imageWidths, width: imageWidth, height: imageHeight, alt: imageAlt, sizes: "(max-width: 860px) 100vw, 48vw", eager: true })}
      </div>
    </div>
  </section>`;

const homeBody = `
  <section class="hero hero--film" data-hero-film>
    <div class="hero__media">
      ${picture({ name: "group-opening", widths: [640, 1280], width: 1280, height: 720, alt: "", sizes: "100vw", eager: true, className: "hero__poster" })}
      <video id="hero-film" class="hero__video" muted loop playsinline preload="none" width="1280" height="720" aria-hidden="true" tabindex="-1" data-desktop="/assets/videos/group-opening-desktop.mp4" data-mobile="/assets/videos/group-opening-mobile.mp4"></video>
    </div>
    <div class="hero__overlay"></div>
    <div class="shell hero__content">
      <div class="hero__copy">
        <span class="eyebrow eyebrow--light">GRUPO NEW TRACTOR</span>
        <h1>Conhecimento industrial.<br><span>Força em conjunto.</span></h1>
        <p>Material rodante, hidráulica, usinagem, caldeiraria e peças para máquinas de linha amarela. Especialidades conectadas, com base em Belo Horizonte, para apoiar a manutenção da sua operação.</p>
        <div class="button-row">
          <a class="button button--primary" href="/empresa/">Conheça o grupo ${icon("arrow")}</a>
          <a class="button button--ghost" href="/pessoas/#filme-institucional"><span class="play-symbol" aria-hidden="true">▷</span> Nosso filme</a>
        </div>
      </div>
      <div class="hero__bottom"><a href="#essencia">Um grupo. Múltiplas forças. <span aria-hidden="true">↓</span></a><button class="film-toggle" type="button" aria-controls="hero-film" data-film-toggle hidden>Reproduzir vídeo</button></div>
    </div>
  </section>

  <section class="section group-intro" id="essencia" aria-labelledby="essencia-title">
    <div class="shell">
      <div class="intro-layout"><span class="eyebrow">ESSÊNCIA NEW TRACTOR</span><div><h2 id="essencia-title">A força da indústria está<br>em suas conexões.</h2><div class="intro-layout__text"><p>Somos um grupo industrial com base em Belo Horizonte e uma trajetória construída no universo das máquinas pesadas desde 2010.</p><p>Da recuperação de componentes à consulta de peças novas, reunimos especialidades que se complementam. Conhecimento técnico, proximidade e visão de conjunto orientam a nossa atuação.</p></div><a class="text-link" href="/empresa/">Nossa história e estrutura ${icon("arrow")}</a></div></div>
      <dl class="group-facts__grid" aria-label="O grupo em números"><div><dt>2010</dt><dd>o início da nossa trajetória</dd></div><div><dt>07</dt><dd>especialidades que se conectam</dd></div><div><dt>4.000<span> m²+</span></dt><dd>de área industrial combinada</dd></div><div><dt>03</dt><dd>galpões na estrutura do grupo</dd></div></dl>
    </div>
  </section>

  ${groupIndex(icon)}

  <section class="section industry-section" aria-labelledby="industria-title"><div class="shell">
    <div class="section-heading section-heading--split"><div><span class="eyebrow">ONDE ESTAMOS PRESENTES</span><h2 id="industria-title">Ao lado de quem<br>move grandes operações.</h2></div><div><p>As máquinas conectam a nossa experiência a diferentes setores da economia.</p><a class="text-link" href="/setores/">Encontre o contexto da sua operação ${icon("arrow")}</a></div></div>
    <div class="sector-list">${sectorLinks.map(([label, href], i) => `<article><span>0${i + 1}</span><h3><a href="${href}">${label}</a></h3><p>${[
      "Regime de trabalho, condição do componente e janela de parada na operação mineral.",
      "Identificação da máquina e do conjunto na colheita, no carregamento e no apoio florestal.",
      "Equipamentos de esteira e apoio pesado, com planejamento por aplicação e período de uso.",
      "Componentes de escavadeiras e tratores em obras, movimentação e terraplenagem.",
      "Histórico por equipamento na entrega, na devolução e entre contratos de locação."
    ][i]}</p></article>`).join("")}</div>
  </div></section>

  <section class="people-story" aria-labelledby="pessoas-home-title"><div class="people-story__image">${picture({ name: "hero-film-people", widths: [640, 1280], width: 1280, height: 720, alt: "Profissional da New Tractor com óculos de proteção durante o trabalho", sizes: "(max-width: 860px) 100vw, 58vw" })}</div><div class="people-story__copy"><span class="eyebrow eyebrow--light">PESSOAS QUE MOVEM A NEW</span><h2 id="pessoas-home-title">O nosso maior valor<br>é quem faz.</h2><p>Por trás de cada medida, de cada peça e de cada decisão, existem pessoas. É a experiência compartilhada entre equipe, clientes e fornecedores que dá sentido ao nosso trabalho.</p><a class="text-link text-link--light" href="/pessoas/">Conheça esse olhar ${icon("arrow")}</a></div></section>

  <section class="section partnership-feature" aria-labelledby="parceiros-home-title"><div class="shell editorial-grid"><div><span class="eyebrow">CONEXÕES PARA O FUTURO</span><h2 id="parceiros-home-title">Grandes possibilidades<br>começam com uma conversa.</h2></div><div class="rich-text"><p>Queremos estar próximos de quem compartilha o compromisso com o desenvolvimento industrial.</p><p>Clientes, fornecedores e parceiros encontram na New Tractor um ponto de encontro entre necessidades, conhecimento e novas oportunidades.</p><a class="button button--dark" href="/parcerias/">Conecte-se ao grupo ${icon("arrow")}</a></div></div></section>

  <section class="section client-portfolio" aria-labelledby="clientes-title"><div class="shell"><div class="section-heading section-heading--split"><div><span class="eyebrow">NOSSA TRAJETÓRIA</span><h2 id="clientes-title">Relações que fazem<br>parte da nossa história.</h2></div><p>Referências históricas divulgadas pela New Tractor ao longo de sua trajetória.</p></div>${clientLogoGrid()}<p class="client-portfolio__note">Marcas de seus respectivos titulares. Referências históricas, sem indicação de contratos atuais.</p></div></section>
  ${contactBand("Vamos construir o próximo passo?")}`;

const empresaBody = `
  ${pageHero({ eyebrow: "O GRUPO", title: "Especialidades distintas. Uma visão em comum.", intro: "O Grupo New Tractor reúne conhecimento técnico, estrutura industrial e pessoas em torno das operações com máquinas pesadas.", breadcrumb: [{ label: "O grupo", href: "/empresa/" }], image: "hero-film-people", imageAlt: "Profissional da New Tractor durante o trabalho industrial", imageWidths: [640, 1280], imageWidth: 1280, imageHeight: 720 })}
  <section class="section section--light" aria-labelledby="historia-title"><div class="shell editorial-grid"><div><span class="eyebrow">NOSSA TRAJETÓRIA</span><h2 id="historia-title">Raízes no conhecimento.<br>Olhar para o futuro.</h2></div><div class="rich-text"><p>Desde 2010, construímos nossa trajetória junto às máquinas pesadas e às pessoas que fazem essas operações acontecerem. A experiência em material rodante é parte dessa história.</p><p>Hoje, a New Tractor se apresenta como um grupo industrial. Recuperação, avaliação de peças novas, serviços de campo e tecnologia se conectam em uma visão mais ampla das necessidades da indústria.</p><p>Com base em Belo Horizonte, atuamos junto aos setores de mineração, construção, infraestrutura e agronegócio. Cada especialidade contribui com seu conhecimento para essa atuação.</p><a class="text-link" href="/#empresas">Explore as empresas do grupo ${icon("arrow")}</a></div></div></section>
  <section class="section section--dark" aria-labelledby="direcao-title"><div class="shell"><div class="section-heading"><span class="eyebrow eyebrow--light">O QUE NOS ORIENTA</span><h2 id="direcao-title">Um jeito de pensar.<br>Muitas formas de contribuir.</h2></div><div class="principles-grid"><article><span>01 / CONHECIMENTO</span><h3>Experiência aplicada.</h3><p>Entender a máquina, a aplicação e a realidade de cada operação é o ponto de partida do nosso trabalho.</p></article><article><span>02 / PROXIMIDADE</span><h3>Relações de confiança.</h3><p>Escutar, compartilhar informações e manter o diálogo com quem está em campo e com quem planeja.</p></article><article><span>03 / INTEGRAÇÃO</span><h3>Forças que se somam.</h3><p>Conectar especialidades para olhar o componente e compreender o conjunto em que ele trabalha.</p></article></div></div></section>
  <section class="section section--sand" aria-labelledby="estrutura-title"><div class="shell structure-layout"><div><span class="eyebrow">NOSSA ESTRUTURA</span><h2 id="estrutura-title">Espaço para fazer.<br>Conhecimento para evoluir.</h2><p>Mais de 4.000 m² de área industrial combinada em três galpões, com base operacional no bairro São Gabriel, em Belo Horizonte.</p><dl class="structure-facts"><div><dt>4.000 m²+</dt><dd>área industrial combinada</dd></div><div><dt>3 galpões</dt><dd>estrutura do grupo</dd></div></dl><a class="text-link" href="/atuacao/">De Belo Horizonte para o Brasil ${icon("arrow")}</a></div><figure>${picture({ name: "equipe", widths: [640, 1200], width: 1200, height: 675, alt: "Base operacional da New Tractor em Belo Horizonte, com equipamentos e veículos de apoio" })}<figcaption>Base operacional · Belo Horizonte, Minas Gerais</figcaption></figure></div></section>
  <section class="section section--light" aria-labelledby="fotos-title"><div class="shell"><div class="section-heading section-heading--split"><div><span class="eyebrow">NOSSO UNIVERSO</span><h2 id="fotos-title">A indústria, de perto.</h2></div><p>Componentes, processos e pessoas fazem parte da mesma história.</p></div><div class="photo-grid"><figure>${picture({ name: "material-rodante", widths: [640, 1200], width: 1200, height: 675, alt: "Conjuntos de material rodante no pátio da New Tractor" })}<figcaption>Material rodante</figcaption></figure><figure>${picture({ name: "componentes-industriais", widths: [640, 1200], width: 1200, height: 802, alt: "Roletes e componentes preparados pela New Tractor" })}<figcaption>Componentes industriais</figcaption></figure><figure>${picture({ name: "hero-film-people", widths: [640, 1280], width: 1280, height: 720, alt: "Profissional da New Tractor em atividade" })}<figcaption>Pessoas e conhecimento</figcaption></figure></div></div></section>
  ${contactBand("Faça parte das nossas próximas conexões.")}`;

const parceriasBody = `
  ${pageHero({ eyebrow: "PARCERIAS", title: "Conexões que fazem a indústria avançar.", intro: "Um espaço de diálogo para clientes, fornecedores e parceiros que querem conhecer o Grupo New Tractor e construir novas oportunidades.", breadcrumb: [{ label: "Parcerias", href: "/parcerias/" }], image: "componentes-industriais", imageAlt: "Componentes industriais no acervo da New Tractor", imageWidths: [640, 1200, 1600], imageWidth: 1600, imageHeight: 1070 })}
  <section class="section section--light" aria-labelledby="conexao-title"><div class="shell editorial-grid"><div><span class="eyebrow">UM GRUPO, MUITAS CONEXÕES</span><h2 id="conexao-title">Conhecimento que encontra<br>novas possibilidades.</h2></div><div class="rich-text"><p>Reunimos material rodante, hidráulica, usinagem, caldeiraria, avaliação de peças novas, serviços de campo e tecnologia. Essa diversidade aproxima o grupo de diferentes necessidades da indústria.</p><p>Acreditamos no diálogo entre quem produz, quem fornece e quem opera. Apresente sua empresa e compartilhe o que podemos construir juntos.</p><a class="text-link" href="/empresa/">Conheça nossa trajetória ${icon("arrow")}</a></div></div></section>
  <section class="section section--sand" aria-labelledby="caminhos-title"><div class="shell"><div class="section-heading"><span class="eyebrow">COMO PODEMOS NOS CONECTAR</span><h2 id="caminhos-title">A próxima conversa<br>pode começar aqui.</h2></div><div class="partnership-grid"><article><span>01 / CLIENTES</span><h3>Sua operação.<br>Nosso conhecimento.</h3><p>Converse sobre componentes, peças novas, recuperação e acompanhamento de máquinas pesadas. Nossa equipe ajuda a identificar a especialidade mais adequada à sua necessidade.</p><a class="text-link" href="/contato/" data-analytics="contato_parcerias">Fale com nossa equipe ${icon("arrow")}</a></article><article><span>02 / FORNECEDORES</span><h3>Novos recursos.<br>Possibilidades em comum.</h3><p>Apresente produtos, materiais e serviços relacionados às especialidades do grupo. Envie o perfil da sua empresa, portfólio e contato responsável.</p><a class="text-link" href="mailto:${site.email}?subject=Apresenta%C3%A7%C3%A3o%20de%20fornecedor%20%7C%20Grupo%20New%20Tractor" data-analytics="email_fornecedor">Apresente sua empresa ${icon("arrow")}</a></article><article><span>03 / PARCEIROS</span><h3>Experiências que se somam.</h3><p>Compartilhe uma oportunidade de colaboração industrial, uma proposta de desenvolvimento ou uma conexão que aproxime nossas áreas de atuação.</p><a class="text-link" href="mailto:${site.email}?subject=Parceria%20institucional%20%7C%20Grupo%20New%20Tractor" data-analytics="email_parceria">Inicie uma conversa ${icon("arrow")}</a></article></div></div></section>
  <section class="section section--dark"><div class="shell editorial-grid"><div><span class="eyebrow eyebrow--light">RELACIONAMENTO INSTITUCIONAL</span><h2>Conheça o grupo.<br>Compartilhe sua visão.</h2></div><div class="rich-text"><p>Nossa apresentação começa pelas pessoas e pelo trabalho que realizamos. Explore as empresas, conheça a estrutura e assista ao filme institucional.</p><div class="button-row"><a class="button button--primary" href="/#empresas">Empresas do grupo ${icon("arrow")}</a><a class="button button--ghost" href="/pessoas/#filme-institucional">Assista ao filme</a></div></div></div></section>
  ${contactBand("Toda parceria começa com proximidade.")}`;

const pessoasBody = `
  <section class="people-intro">
    <div class="shell">
      <nav class="breadcrumbs" aria-label="Navegação estrutural"><ol><li><a href="/">Início</a></li><li><span aria-current="page">Pessoas</span></li></ol></nav>
      <span class="eyebrow eyebrow--light">PESSOAS · GRUPO NEW TRACTOR</span>
      <h1>Pessoas que<br>movem a New Tractor.</h1>
      <p>Máquinas pesadas fazem parte do nosso trabalho. Pessoas dão sentido a ele. É na troca entre equipe, clientes e fornecedores que uma necessidade começa a encontrar seu próximo passo.</p>
      <a class="text-link text-link--light" href="#filme-institucional">Um olhar sobre a New ${icon("arrow")}</a>
    </div>
  </section>
  <section class="section section--dark film-section" id="filme-institucional" aria-labelledby="filme-title">
    <div class="shell">
      <div class="section-heading section-heading--split"><div><span class="eyebrow eyebrow--light">NOSSO AMBIENTE, DE PERTO</span><h2 id="filme-title">Um olhar sobre a New Tractor</h2></div><p>Quatro atos — pessoas, processos, máquinas internas e pátio. Imagens reais da New Tractor, sem áudio, com cerca de dois minutos.</p></div>
      <figure class="institutional-film">
        <video controls playsinline preload="none" poster="/assets/images/hero-film-1280.webp" width="1280" height="720" aria-label="Filme institucional da New Tractor" aria-describedby="film-description">
          <source src="/assets/videos/hero-film-full-mobile.mp4" type="video/mp4" media="(max-width: 760px)">
          <source src="/assets/videos/hero-film-full-desktop.mp4" type="video/mp4">
          <p><a href="/assets/videos/hero-film-full-desktop.mp4">Abrir o filme em MP4</a></p>
        </video>
        <figcaption id="film-description">Filme sem falas ou trilha sonora. Percorre equipe, processos industriais, máquinas internas e o pátio da New Tractor. A sequência conecta o ambiente de trabalho às pessoas que participam da operação.</figcaption>
      </figure>
    </div>
  </section>
  <section class="section section--light" aria-labelledby="conexoes-title">
    <div class="shell">
      <div class="section-heading"><span class="eyebrow">TRABALHO QUE CONECTA</span><h2 id="conexoes-title">Três perspectivas.<br>O mesmo cuidado com a operação.</h2></div>
      <div class="people-pillars">
        <article><span class="people-pillars__number">01 / EQUIPE</span><h3>Quem faz acontecer.</h3><p>Conhecimento industrial é atenção aos detalhes: observar um desgaste, preparar um componente, conferir uma medida. Pessoas transformam informação em trabalho.</p><a class="text-link" href="/empresa/">Conheça a nossa história ${icon("arrow")}</a></article>
        <article><span class="people-pillars__number">02 / CLIENTES</span><h3>Quem vive a operação.</h3><p>Manutenção, engenharia, PCM e suprimentos trazem perspectivas diferentes sobre a mesma máquina. Ouvir a condição de campo e a prioridade ajuda a definir um escopo coerente.</p><a class="text-link" href="/servicos/monitoramento-material-rodante/">Medição e acompanhamento ${icon("arrow")}</a></article>
        <article><span class="people-pillars__number">03 / FORNECEDORES</span><h3>Quem soma conhecimento.</h3><p>A escolha de um material ou componente começa por sua aplicação. Especificações claras e diálogo técnico ajudam a alinhar o que a operação precisa ao que será avaliado.</p><a class="text-link" href="/contato/">Converse com a New ${icon("arrow")}</a></article>
      </div>
    </div>
  </section>
  <section class="section section--sand">
    <div class="shell editorial-grid"><div><span class="eyebrow">DA CONVERSA AO ESCOPO</span><h2>Comece pela realidade da sua máquina.</h2></div><div class="rich-text"><p>Conte qual é o equipamento, a aplicação e a condição observada. Fotos, desenhos e especificações ajudam nossa equipe a entender a demanda.</p><p>O atendimento é nacional, com viabilidade técnica, condições comerciais e logística avaliadas para cada necessidade.</p><a class="button button--dark" href="/contato/">Fale com nossa equipe ${icon("arrow")}</a></div></div>
  </section>`;

const servicosBody = `
  ${pageHero({
    eyebrow: "SERVIÇOS",
    title: "Serviços para máquinas de linha amarela em Minas Gerais",
    intro: "Material rodante, recuperação dimensional e reforma de caçambas e conchas, com base em Belo Horizonte. Encontre a especialidade pelo componente e pela condição da sua máquina.",
    breadcrumb: [{ label: "Serviços", href: "/servicos/" }],
    image: "material-rodante",
    imageAlt: "Esteiras e componentes de material rodante preparados pela New Tractor",
    imageWidths: [640, 1200],
    imageWidth: 1200,
    imageHeight: 675,
  })}
  <section class="section section--light" aria-labelledby="portfolio-title">
    <div class="shell">
      <div class="section-heading section-heading--split"><div><span class="eyebrow">PORTFÓLIO TÉCNICO</span><h2 id="portfolio-title">Soluções conectadas ao ciclo do componente</h2></div><p>Monitorar ajuda a planejar. Avaliar e recuperar exige escopo compatível com o desgaste, a aplicação e o conjunto.</p></div>
      ${serviceCards()}
      <nav class="company-resources" aria-label="Mais recursos técnicos"><a class="text-link" href="/servicos/usinagem-componentes-maquinas-pesadas/">Usinagem de componentes pesados ${icon("arrow")}</a><a class="text-link" href="/guias/">Guias para manutenção e suprimentos ${icon("arrow")}</a></nav>
    </div>
  </section>
  <section class="section section--sand" aria-labelledby="necessidade-title"><div class="shell">
    <div class="section-heading"><span class="eyebrow">DA MÁQUINA AO COMPONENTE</span><h2 id="necessidade-title">Qual necessidade trouxe você até aqui?</h2><p>Um pedido de manutenção pode começar pelo sintoma, pelo nome da peça ou pelo serviço. Identificar o conjunto ajuda a encaminhar a avaliação técnica e preparar uma proposta comparável.</p></div>
    <div class="people-pillars">
      <article><h3>Desgaste na esteira da escavadeira ou do trator</h3><p>Informe se a condição envolve roletes, roda-guia, corrente, sapatas ou o conjunto. A <a href="/rodantes/">New Tractor Rodantes</a> reúne recuperação e acompanhamento de material rodante; a inspeção define a viabilidade para cada componente.</p><a class="text-link" href="/componentes/">Identificar componentes de material rodante</a></article>
      <article><h3>Folga em pinos, buchas ou alojamentos</h3><p>Descreva o ponto de articulação, a condição observada e as medidas disponíveis. O pedido pode envolver consulta de peça em <a href="/parts/">Parts</a> ou <a href="/servicos/usinagem-componentes-maquinas-pesadas/">recuperação dimensional por usinagem e mandrilhamento</a>.</p><a class="text-link" href="/guias/folgas-pinos-buchas-alojamentos/">Preparar uma avaliação de folgas</a></article>
      <article><h3>Trincas ou deformação em caçambas e conchas</h3><p>Identifique o implemento da escavadeira ou carregadeira, a aplicação e o histórico de reparos. A <a href="/calderaria/">New Tractor Calderaria</a> conecta a avaliação estrutural ao escopo de reforma.</p><a class="text-link" href="/servicos/reforma-cacambas-conchas/">Consultar reforma de caçambas e conchas</a></article>
      <article><h3>Vazamento ou outra condição no cilindro hidráulico</h3><p>Informe a função do cilindro, a identificação da máquina e o que foi observado. A <a href="/hidrautractor/">HidrauTractor</a> recebe a consulta para avaliar compatibilidade e escopo; o sintoma isolado não determina o reparo.</p><a class="text-link" href="/guias/avaliacao-cilindros-hidraulicos/">Dados para consultar um cilindro hidráulico</a></article>
      <article><h3>Peça para escavadeira ou trator de esteira</h3><p>Para cotar, reúna código, modelo, aplicação, quantidade e destino. Diferencie a procura por peça nova da recuperação de um componente existente. Condição, compatibilidade e disponibilidade são confirmadas na proposta.</p><a class="text-link" href="/parts/">Consultar peças com a New Tractor Parts</a></article>
      <article><h3>Medição de desgaste no pátio e histórico da frota</h3><p>A <a href="/services/">Services</a> recebe o objetivo da medição, a relação de máquinas, a cidade e os requisitos de acesso para avaliar a demanda. A <a href="/techtractor/">TechTractor</a> é a frente em evolução dedicada a inspeções, registros e histórico.</p><a class="text-link" href="/servicos/monitoramento-material-rodante/">Entender o monitoramento de material rodante</a></article>
    </div>
  </div></section>
  <section class="section section--light" aria-labelledby="servicos-mg-title"><div class="shell editorial-grid"><div><span class="eyebrow">OPERAÇÕES EM MINAS GERAIS</span><h2 id="servicos-mg-title">Prepare a demanda antes da parada da máquina</h2></div><div class="rich-text"><p>A base do grupo está em Belo Horizonte. Para avaliar uma necessidade em outra cidade mineira, informe o componente, a localização da máquina, as condições de acesso e se a peça pode ser removida e transportada. Mobilização, logística e prazo são definidos na análise técnica e comercial.</p><p>Mineração, operações florestais, locadoras e obras têm rotinas próprias. Os <a href="/setores/">guias por setor e operação</a> ajudam compradores, PCM, gestores de manutenção e mecânicos a reunir informações para a mesma solicitação. O objetivo é apoiar o planejamento da intervenção e reduzir incertezas sobre o que precisa ser avaliado.</p></div></div></section>
  <section class="section section--sand" aria-labelledby="faq-title">
    <div class="shell faq-layout">
      <div><span class="eyebrow">DÚVIDAS FREQUENTES</span><h2 id="faq-title">Antes de solicitar um orçamento</h2></div>
      <div class="faq-list">
        <details><summary>Quais equipamentos podem ser atendidos?</summary><p>Atendemos tratores de esteira, escavadeiras, máquinas perfuratrizes e colheitadeiras, além de componentes associados ao material rodante.</p></details>
        <details><summary>Como iniciar uma avaliação?</summary><p>Entre em contato pelo WhatsApp, telefone ou e-mail e informe o tipo de equipamento, componente, condição observada e local da operação.</p></details>
        <details><summary>O monitoramento substitui a inspeção da manutenção?</summary><p>Não. A proposta é atuar em conjunto com a manutenção do cliente, usando medições de desgaste e contexto de aplicação para apoiar decisões.</p></details>
        <details><summary>A New Tractor fornece peças?</summary><p>A empresa recebe consultas de peças e conjuntos recondicionados. Condição e disponibilidade são confirmadas na cotação.</p></details>
        <details><summary>A New Tractor atende fora de Minas Gerais?</summary><p>Sim. A empresa informa atendimento para operações em todo o Brasil. Mobilização, logística, capacidade e prazo são avaliados para cada demanda.</p></details>
      </div>
    </div>
  </section>
  ${contactBand()}`;

const manutencaoBody = `
  ${pageHero({
    eyebrow: "MANUTENÇÃO",
    title: "Manutenção de material rodante",
    intro: "Avaliação e recuperação de componentes para tratores de esteira, escavadeiras, perfuratrizes e colheitadeiras.",
    breadcrumb: [{ label: "Serviços", href: "/servicos/" }, { label: "Manutenção", href: "/servicos/manutencao-material-rodante/" }],
    image: "material-rodante",
    imageAlt: "Conjuntos de material rodante no pátio da New Tractor",
    imageWidths: [640, 1200],
    imageWidth: 1200,
    imageHeight: 675,
  })}
  <section class="section section--light" aria-labelledby="componentes-title">
    <div class="shell">
      <div class="section-heading section-heading--split"><div><span class="eyebrow">PROCESSOS ESPECIALIZADOS</span><h2 id="componentes-title">Componentes recuperados com atenção a medidas e montagem</h2></div><p>Cada peça exige inspeção, preparação e processo compatível com o desgaste observado.</p></div>
      <div class="component-grid">
        <article>${picture({ name: "rosario", widths: [640], width: 640, height: 427, alt: "Conjunto de corrente e elos conhecido como rosário" })}<div><span>01</span><h3>Reforma de rosário</h3><p>Troca ou giro de pino e bucha com lavagem, desmontagem, inspeção, preparação e montagem cuidadosa dos componentes.</p></div></article>
        <article>${picture({ name: "sapata", widths: [640], width: 640, height: 427, alt: "Sapatas e garras de material rodante" })}<div><span>02</span><h3>Recuperação de sapatas</h3><p>Avaliação de empeno, trincas e dimensão da talisca, seguida de preparação e aplicação da nova garra.</p></div></article>
        <article>${picture({ name: "roletes", widths: [640], width: 640, height: 427, alt: "Roletes superiores e inferiores de material rodante" })}<div><span>03</span><h3>Recuperação de roletes</h3><p>Preparação, enchimento por processo compatível e usinagem conforme a avaliação e as medidas aplicáveis.</p></div></article>
        <article>${picture({ name: "roda-guia", widths: [640], width: 640, height: 427, alt: "Rodas-guia para sistema de esteiras" })}<div><span>04</span><h3>Recuperação de roda-guia</h3><p>Recuperação da pista desgastada por soldagem e usinagem até a medida de referência.</p></div></article>
        <article>${picture({ name: "truck", widths: [640], width: 640, height: 427, alt: "Estrutura de truck com material rodante" })}<div><span>05</span><h3>Reforma de truck</h3><p>Tratamento de trincas, torções, alojamentos, régua dos roletes e base da roda-guia, com acabamento final.</p></div></article>
        <article>${picture({ name: "componentes-industriais", widths: [640], width: 640, height: 428, alt: "Roletes e componentes amarelos e pretos organizados" })}<div><span>06</span><h3>Peças e conjuntos</h3><p>Consulta de peças e conjuntos recondicionados, com condição e disponibilidade confirmadas na cotação.</p></div></article>
      </div>
    </div>
  </section>
  <section class="section section--dark" aria-labelledby="aplicacoes-title">
    <div class="shell service-summary">
      <div><span class="eyebrow eyebrow--light">APLICAÇÕES</span><h2 id="aplicacoes-title">Onde a manutenção faz diferença</h2></div>
      <ul class="check-list"><li>${icon("check")} Tratores de esteira</li><li>${icon("check")} Escavadeiras</li><li>${icon("check")} Máquinas perfuratrizes</li><li>${icon("check")} Colheitadeiras</li></ul>
    </div>
  </section>
  <section class="section section--light" aria-labelledby="rodantes-referencias-title">
    <div class="shell editorial-grid">
      <div><span class="eyebrow">NA IMPRENSA</span><h2 id="rodantes-referencias-title">New Tractor na Revista M&amp;T</h2></div>
      <div class="rich-text"><p>A reportagem <cite>Vida útil plena para esteiras</cite>, da edição de abril de 2025, reúne perspectivas sobre conservação, medição e viabilidade de recuperação do material rodante, com participação da New Tractor.</p><p><a class="text-link" href="https://revistamt.com.br/Materias/Exibir/manutencao">Ler a reportagem na Revista M&amp;T ${icon("arrow")}</a></p></div>
    </div>
    <div class="shell"><nav class="company-resources" aria-label="Serviços e orientações relacionados ao material rodante"><a class="text-link" href="/servicos/monitoramento-material-rodante/">Monitoramento de desgaste ${icon("arrow")}</a><a class="text-link" href="/guias/inspecao-material-rodante/">Como organizar os registros de inspeção ${icon("arrow")}</a><a class="text-link" href="/servicos/reforma-cacambas-conchas/">Reforma de caçambas e conchas ${icon("arrow")}</a><a class="text-link" href="/componentes/">Rodas-guia, roletes, correntes e sapatas ${icon("arrow")}</a><a class="text-link" href="/servicos/">Todas as soluções ${icon("arrow")}</a></nav></div>
  </section>
  <section class="section section--sand" aria-labelledby="rodantes-decisao-title"><div class="shell editorial-grid"><div><h2 id="rodantes-decisao-title">Recuperar o componente ou consultar outra peça?</h2></div><div class="rich-text"><p>Na consulta de uma roda-guia, rolete, sapata ou corrente de esteira, identifique o conjunto e a condição encontrada. Informe se a necessidade envolve uma peça isolada, um lado da máquina ou o conjunto completo. Fotos e medidas disponíveis ajudam a preparar a avaliação; os limites de recuperação dependem da inspeção e da referência aplicável.</p><p>Para recuperar componentes, comece pela <a href="/rodantes/">New Tractor Rodantes</a>. Se a demanda é por uma peça nova, envie código, modelo e quantidade para <a href="/parts/">Parts</a>. Essa distinção permite comparar propostas com o mesmo objeto, incluindo condição da peça, transporte e documentação.</p></div></div></section>
  ${contactBand("Precisa avaliar um componente de material rodante?")}`;

const reformaBody = `
  ${pageHero({
    eyebrow: "REFORMA",
    title: "Reforma de caçambas e conchas para máquinas pesadas",
    intro: "Reforma de caçambas e conchas com escopo definido após avaliação da condição, da geometria e da aplicação.",
    breadcrumb: [{ label: "Serviços", href: "/servicos/" }, { label: "Reforma de caçambas e conchas", href: "/servicos/reforma-cacambas-conchas/" }],
    image: "concha-patio",
    imageAlt: "Caçamba preta recuperada no pátio da New Tractor",
    imageWidths: [640, 1200],
    imageWidth: 1200,
    imageHeight: 612,
  })}
  <section class="section section--light" aria-labelledby="reforma-processo-title">
    <div class="shell editorial-grid">
      <div><span class="eyebrow">AVALIAÇÃO E ESCOPO</span><h2 id="reforma-processo-title">Reparar com critério técnico</h2></div>
      <div class="rich-text"><p>A condição observada, o perfil do componente e a aplicação orientam a avaliação inicial.</p><p>O escopo pode considerar deformações, trincas, desgaste, intervenções anteriores e alterações geométricas. Processo, prazo e viabilidade são confirmados na proposta de cada demanda.</p></div>
    </div>
  </section>
  <section class="section section--sand" aria-labelledby="escopo-title">
    <div class="shell image-copy">
      <div class="image-copy__media">${picture({ name: "concha-patio", widths: [640, 1200], width: 1200, height: 612, alt: "Caçamba preta em área externa da New Tractor" })}</div>
      <div><span class="eyebrow">ESCOPO DA REFORMA</span><h2 id="escopo-title">Estrutura, perfil e acabamento</h2><ul class="check-list check-list--dark"><li>${icon("check")} Avaliação da condição e do perfil do componente</li><li>${icon("check")} Correção de deformações e problemas estruturais</li><li>${icon("check")} Reconstrução orientada ao perfil de trabalho</li><li>${icon("check")} Soldagem, acabamento e inspeção final</li></ul></div>
    </div>
  </section>
  <section class="section section--light" aria-labelledby="cacambas-aplicacao-title"><div class="shell editorial-grid"><div><h2 id="cacambas-aplicacao-title">Caçamba de escavadeira e concha de carregadeira</h2></div><div class="rich-text"><p>Identifique a máquina e o implemento logo no primeiro contato. A caçamba de uma escavadeira e a concha de uma pá carregadeira têm configurações e aplicações próprias. Informe o material movimentado, o tipo de trabalho, o sistema de fixação e as dimensões conhecidas.</p><p>Descreva onde aparecem desgaste, trincas ou deformações: fundo, laterais, borda, pontos de articulação ou outra região identificada. Registre intervenções anteriores e forneça fotos do conjunto e do detalhe. A denominação “caçamba” também é usada para implementos rodoviários e recipientes de resíduos; indicar a máquina evita uma cotação para o objeto errado.</p></div></div></section>
  <section class="section section--sand" aria-labelledby="cacambas-cotacao-title"><div class="shell editorial-grid"><div><h2 id="cacambas-cotacao-title">Defina o escopo antes de comparar o orçamento</h2></div><div class="rich-text"><p>Informe se o componente está disponível para avaliação, a cidade de origem, peso e dimensões conhecidos e a janela desejada. Materiais, procedimento de soldagem, inspeções, acabamento e prazo são definidos conforme a peça e os requisitos da operação.</p><p>Quando a condição envolve alojamentos ou superfícies dimensionais, a análise pode se conectar à <a href="/usinagem/">Usinagem</a>. A <a href="/calderaria/">New Tractor Calderaria</a> reúne a frente de recuperação estrutural. Consulte o <a href="/guias/avaliacao-cacambas-conchas/">guia de avaliação de caçambas e conchas</a> para preparar a solicitação.</p></div></div></section>
  ${contactBand("Sua caçamba ou concha precisa de reforma?")}`;

const monitoramentoBody = `
  ${pageHero({
    eyebrow: "MONITORAMENTO",
    title: "Monitoramento de material rodante",
    intro: "Medições de desgaste em conjunto com a manutenção do cliente para acompanhar condição e apoiar o planejamento de intervenções.",
    breadcrumb: [{ label: "Serviços", href: "/servicos/" }, { label: "Monitoramento", href: "/servicos/monitoramento-material-rodante/" }],
    image: "monitoramento",
    imageAlt: "Representação dos componentes de um sistema de material rodante",
    imageWidths: [640, 1024],
    imageWidth: 1024,
    imageHeight: 683,
  })}
  <section class="section section--light" aria-labelledby="medicao-title">
    <div class="shell image-copy image-copy--reverse">
      <div class="image-copy__media">${picture({ name: "medicao-rolete", widths: [640], width: 640, height: 427, alt: "Medição dimensional realizada em rolete de material rodante" })}</div>
      <div><span class="eyebrow">MEDIÇÃO DE DESGASTE</span><h2 id="medicao-title">Informação técnica para apoiar a decisão</h2><p>O monitoramento é realizado em conjunto com o setor de manutenção do cliente. As medições registram a condição dos componentes e apoiam a análise do momento de intervenção.</p><ul class="check-list check-list--dark"><li>${icon("check")} Acompanhamento de desgaste</li><li>${icon("check")} Apoio ao planejamento de manutenção</li><li>${icon("check")} Histórico de condição dos componentes</li><li>${icon("check")} Decisão baseada em medição e contexto de uso</li></ul></div>
    </div>
  </section>
  <section class="section section--dark" aria-labelledby="beneficios-title">
    <div class="shell benefit-grid"><div><span class="eyebrow eyebrow--light">OBJETIVO</span><h2 id="beneficios-title">Transformar observação em histórico útil</h2></div><article><strong>01</strong><h3>Observar</h3><p>Registrar sinais e medidas da condição encontrada.</p></article><article><strong>02</strong><h3>Comparar</h3><p>Acompanhar a evolução do desgaste no contexto da aplicação.</p></article><article><strong>03</strong><h3>Planejar</h3><p>Apoiar a organização de manutenção e recursos, em conjunto com a equipe do cliente.</p></article></div>
  </section>
  <section class="section section--light" aria-labelledby="monitoramento-historico-title"><div class="shell editorial-grid"><div><h2 id="monitoramento-historico-title">O que torna as medições comparáveis</h2></div><div class="rich-text"><p>Associe cada registro à máquina, ao lado e ao componente: corrente, sapata, rolete ou roda-guia. Data, horímetro disponível, ponto medido, unidade, referência e condição de uso precisam acompanhar a medida. Trocas de peça e alterações no método devem permanecer identificadas no histórico.</p><p>O acompanhamento serve ao planejamento da manutenção. Uma medição isolada ou uma fotografia não determina, por si só, vida útil restante, data de falha ou liberação para operar. A interpretação depende da referência aplicável e da avaliação dos responsáveis pela manutenção.</p></div></div></section>
  <section class="section section--sand" aria-labelledby="monitoramento-campo-title"><div class="shell editorial-grid"><div><h2 id="monitoramento-campo-title">Da demanda de medição ao planejamento da intervenção</h2></div><div class="rich-text"><p>Para avaliar uma medição na operação, informe localização, quantidade e identificação das máquinas, disponibilidade dos equipamentos e requisitos de acesso. A <a href="/services/">Services</a> organiza essa conversa; modalidade, mobilização e logística são confirmadas para cada demanda.</p><p>O <a href="/guias/inspecao-material-rodante/">guia de registro de inspeção</a> ajuda a estruturar os dados. A <a href="/techtractor/">TechTractor</a> apresenta a frente tecnológica em evolução para organizar inspeções e histórico. Quando a necessidade é recuperar o componente, consulte a <a href="/servicos/manutencao-material-rodante/">manutenção de material rodante</a>.</p></div></div></section>
  ${contactBand("Quer acompanhar o desgaste do seu material rodante?")}`;

const equipamentosBody = `
  ${pageHero({
    eyebrow: "EQUIPAMENTOS E APLICAÇÕES",
    title: "Conhecimento aplicado a máquinas pesadas.",
    intro: "Tratores de esteira, escavadeiras, perfuratrizes e colheitadeiras: nossas especialidades acompanham diferentes máquinas e aplicações.",
    breadcrumb: [{ label: "Equipamentos", href: "/equipamentos/" }],
    image: "componentes-industriais",
    imageAlt: "Roletes e componentes amarelos e pretos para máquinas pesadas",
    imageWidths: [640, 1200, 1600],
    imageWidth: 1600,
    imageHeight: 1070,
  })}
  <section class="section section--light" aria-labelledby="maquinas-title">
    <div class="shell">
      <div class="section-heading section-heading--split"><div><span class="eyebrow">MÁQUINAS E APLICAÇÕES</span><h2 id="maquinas-title">Diferentes máquinas. Conhecimento em comum.</h2></div><p>Marca, modelo, configuração, aplicação e condição são necessários para avaliar compatibilidade e viabilidade.</p></div>
      <div class="equipment-grid">
        <article><span>01</span><h3>Tratores de esteira</h3><p>Material rodante, lâmina e cilindros de elevação, inclinação ou angulação, conforme a configuração.</p><a class="text-link" href="/equipamentos/tratores-de-esteira/">Cilindros e componentes de tratores de esteira</a></article>
        <article><span>02</span><h3>Escavadeiras</h3><p>Cilindros de lança, braço e caçamba, articulações e material rodante: identifique o conjunto envolvido na demanda.</p><a class="text-link" href="/equipamentos/escavadeiras/">Cilindros e componentes de escavadeiras</a></article>
        <article><span>03</span><h3>Perfuratrizes</h3><p>Componentes de deslocamento avaliados conforme modelo, ambiente e condição observada.</p></article>
        <article><span>04</span><h3>Colheitadeiras</h3><p>Sistemas de esteira e componentes associados a operações agrícolas e janelas sazonais.</p></article>
        <article><span>05</span><h3>Pás carregadeiras</h3><p>Elevação, inclinação e direção têm funções distintas. Relacione cilindro, implemento e condição da caçamba.</p><a class="text-link" href="/equipamentos/pas-carregadeiras/">Cilindros e componentes de pás carregadeiras</a></article>
      </div>
    </div>
  </section>
  <section class="section section--sand" aria-labelledby="sistemas-title">
    <div class="shell">
      <div class="section-heading section-heading--split"><div><span class="eyebrow">COMPONENTES</span><h2 id="sistemas-title">O que pode entrar na avaliação inicial</h2></div><p>Conheça os principais componentes. Nossa equipe avalia a aplicação, a condição e os requisitos de cada demanda.</p></div>
      <div class="component-grid component-grid--catalog">
        <article>${picture({ name: "rosario", widths: [640], width: 640, height: 427, alt: "Correntes e elos de material rodante" })}<div><span>01</span><h3>Rosários</h3><p>Pinos, buchas, elos, montagem e condição do conjunto.</p></div></article>
        <article>${picture({ name: "sapata", widths: [640], width: 640, height: 427, alt: "Sapatas de material rodante" })}<div><span>02</span><h3>Sapatas</h3><p>Garras, taliscas, empeno, trincas e fixação.</p></div></article>
        <article>${picture({ name: "roletes", widths: [640], width: 640, height: 427, alt: "Roletes de material rodante" })}<div><span>03</span><h3>Roletes</h3><p>Superiores, inferiores e superfícies de contato.</p></div></article>
        <article>${picture({ name: "roda-guia", widths: [640], width: 640, height: 427, alt: "Rodas-guia de sistema de esteiras" })}<div><span>04</span><h3>Rodas-guia</h3><p>Pista, desgaste e condição dimensional.</p></div></article>
        <article>${picture({ name: "truck", widths: [640], width: 640, height: 427, alt: "Estrutura de truck de equipamento pesado" })}<div><span>05</span><h3>Trucks</h3><p>Estrutura, alojamentos, régua e base da roda-guia.</p></div></article>
        <article>${picture({ name: "concha-patio", widths: [640, 1200], width: 1200, height: 612, alt: "Caçamba preta recuperada em área externa" })}<div><span>06</span><h3>Caçambas e conchas</h3><p>Estrutura, perfil, deformações, trincas e desgaste.</p></div></article>
      </div>
    </div>
  </section>
  <section class="section section--dark" aria-labelledby="dados-equipamento-title">
    <div class="shell service-summary">
      <div><span class="eyebrow eyebrow--light">PARA COMEÇAR</span><h2 id="dados-equipamento-title">Envie dados que tornem a avaliação objetiva</h2></div>
      <ul class="check-list"><li>${icon("check")} Fabricante, modelo e número de série, quando aplicável</li><li>${icon("check")} Aplicação, horímetro e condição observada</li><li>${icon("check")} Componente, quantidade, fotos e medidas disponíveis</li><li>${icon("check")} Cidade da operação, prazo desejado e prioridade</li></ul>
    </div>
  </section>
  <section class="section section--light" aria-labelledby="equipamentos-mg-title"><div class="shell editorial-grid"><div><h2 id="equipamentos-mg-title">Máquina, componente e cidade da operação</h2></div><div class="rich-text"><p>A prioridade de uma escavadeira na mineração pode ser diferente da de um trator em preparação de terreno ou de uma carregadeira em um pátio. Informe a tarefa e a condição de operação para encaminhar sua consulta.</p><p>Conheça os <a href="/atuacao/minas-gerais/">contextos de manutenção em Minas Gerais</a> e os dados para avaliar a logística a partir da base em Belo Horizonte.</p></div></div></section>
  ${contactBand("Qual máquina e componente você precisa avaliar?")}`;

const atuacaoBody = `
  ${pageHero({
    eyebrow: "ATUAÇÃO",
    title: "Base em Belo Horizonte. Atendimento para todo o Brasil.",
    intro: "A partir da nossa base em Minas Gerais, conectamos nossas especialidades às necessidades de operações em todo o país.",
    breadcrumb: [{ label: "Atuação", href: "/atuacao/" }],
    image: "equipe",
    imageAlt: "Equipamento pesado e veículos de apoio na base da New Tractor em Belo Horizonte",
    imageWidths: [640, 1200],
    imageWidth: 1200,
    imageHeight: 675,
  })}
  <section class="section section--light" aria-labelledby="brasil-title">
    <div class="shell editorial-grid">
      <div><span class="eyebrow">COBERTURA NACIONAL</span><h2 id="brasil-title">A cidade da operação entra no escopo desde o primeiro contato</h2></div>
      <div class="rich-text"><p>Atendemos operações em todo o Brasil a partir da nossa base em Belo Horizonte.</p><p>Localização, tipo de componente, peso, dimensão, prioridade e modalidade de transporte influenciam a avaliação. Coleta, entrega, mobilização e prazo são confirmados na proposta.</p></div>
    </div>
  </section>
  <section class="section section--dark" aria-labelledby="regioes-title">
    <div class="shell">
      <div class="section-heading section-heading--split"><div><span class="eyebrow eyebrow--light">CORREDORES PRIORITÁRIOS</span><h2 id="regioes-title">Sudeste, Bahia e Goiás</h2></div><p class="section-copy-light">Áreas que aproximam nossas especialidades dos principais polos industriais, de infraestrutura e do agronegócio.</p></div>
      <div class="coverage-grid">
        <article><span>SUDESTE</span><h3>Mineração, infraestrutura e frota</h3><p>RMBH e Quadrilátero Ferrífero, Vale do Aço, eixo MG–ES, Triângulo/Alto Paranaíba e conexões com São Paulo, Rio de Janeiro e Espírito Santo.</p></article>
        <article><span>BAHIA</span><h3>Eixos industriais e agro</h3><p>Corredores BR-116, BR-242, BR-324 e BR-101, com demandas avaliadas a partir da cidade, do componente e da logística.</p></article>
        <article><span>GOIÁS</span><h3>Infraestrutura, mineração e agro</h3><p>Eixos BR-040, BR-060, BR-050 e BR-153, conectando os principais polos operacionais do estado.</p></article>
      </div>
    </div>
  </section>
  <section class="section section--light" aria-labelledby="logistica-title">
    <div class="shell feature-points">
      <div><span class="eyebrow">O QUE CONFIRMAMOS NA PROPOSTA</span><h2 id="logistica-title">Cada deslocamento começa com uma avaliação</h2></div>
      <ul><li><strong>Origem</strong><span>cidade da operação, retirada ou entrega</span></li><li><strong>Componente</strong><span>tipo, quantidade, peso e dimensão disponíveis</span></li><li><strong>Prioridade</strong><span>janela desejada e impacto operacional informado</span></li><li><strong>Modalidade</strong><span>viabilidade de envio, coleta ou mobilização</span></li></ul>
    </div>
  </section>
  <section class="section section--sand" aria-labelledby="contexto-operacao-title"><div class="shell editorial-grid"><div><h2 id="contexto-operacao-title">O contexto da operação orienta a avaliação</h2></div><div class="rich-text"><p>Mineração, florestal, agronegócio, construção civil e locação de máquinas têm rotinas distintas. Informe equipamento, componente, condição, local e janela desejada para a análise do escopo.</p><p>Veja a página de <a href="/atuacao/minas-gerais/">máquinas pesadas e componentes em Minas Gerais</a>, com os contextos da Região Metropolitana de Belo Horizonte, polos minerais, florestais e do Triângulo Mineiro.</p><p>Consulte as <a href="/setores/">orientações por setor e operação</a> e o <a href="/guias/avaliacao-maquinas-linha-amarela/">guia de avaliação de máquinas de linha amarela</a> para reunir os dados da demanda. O atendimento depende da análise técnica, comercial e logística da demanda.</p></div></div></section>
  ${contactBand("Informe a cidade e o contexto da sua demanda")}`;

const contatoBody = `
  ${pageHero({
    eyebrow: "CONTATO",
    title: "Boas conexões começam com uma conversa.",
    intro: "Fale com a equipe do Grupo New Tractor sobre sua operação, uma oportunidade de parceria ou uma nova conexão.",
    breadcrumb: [{ label: "Contato", href: "/contato/" }],
    image: "equipe",
    imageAlt: "Pátio da New Tractor com equipamentos pesados e veículos de apoio",
    imageWidths: [640, 1200],
    imageWidth: 1200,
    imageHeight: 675,
  })}
  <section class="section section--light" aria-labelledby="canais-title">
    <div class="shell contact-layout">
      <div><span class="eyebrow">CANAIS COMERCIAIS</span><h2 id="canais-title">Estamos à sua disposição.</h2><p>Para agilizar a conversa, informe equipamento, componente, condição observada, quantidade e cidade da operação.</p></div>
      <div class="contact-cards">
        <a href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_contato"><span>${icon("phone")}</span><small>WhatsApp</small><strong>${site.whatsappDisplay}</strong><em>Iniciar conversa ${icon("arrow")}</em></a>
        <a href="${site.phoneHref}" data-analytics="telefone_contato"><span>${icon("phone")}</span><small>Telefone</small><strong>${site.phoneDisplay}</strong><em>Ligar agora ${icon("arrow")}</em></a>
        <a href="mailto:${site.email}" data-analytics="email_contato"><span>${icon("mail")}</span><small>E-mail comercial</small><strong>${site.email}</strong><em>Enviar e-mail ${icon("arrow")}</em></a>
      </div>
    </div>
  </section>
  <section class="section section--dark" aria-labelledby="rfq-title">
    <div class="shell procurement-grid">
      <div>
        <span class="eyebrow eyebrow--light">SUPRIMENTOS E ENGENHARIA</span>
        <h2 id="rfq-title">Solicite uma proposta técnica</h2>
        <p>Para processos de cotação formal, use o e-mail comercial. Você poderá anexar desenhos, especificações, fotos e documentos diretamente na mensagem.</p>
        <a class="button button--primary" href="mailto:${site.email}?subject=RFQ%20%7C%20Material%20rodante%20%7C%20New%20Tractor&body=Empresa%20solicitante%3A%0ACNPJ%20do%20solicitante%3A%0AEquipamento%20e%20modelo%3A%0AComponente%3A%0AQuantidade%3A%0APrazo%20necess%C3%A1rio%3A%0ACidade%20de%20entrega%3A%0A%0AFavor%20anexar%20desenhos%2C%20especifica%C3%A7%C3%B5es%20e%20fotos%20dispon%C3%ADveis." data-analytics="email_rfq_contato">Solicitar proposta por e-mail ${icon("mail")}</a>
        <p class="procurement-grid__email"><strong>${site.email}</strong></p>
      </div>
      <div class="procurement-checklist">
        <span>INFORMAÇÕES RECOMENDADAS</span>
        <ul>
          <li>${icon("check")} Empresa solicitante e contato responsável</li>
          <li>${icon("check")} Equipamento, modelo e componente</li>
          <li>${icon("check")} Quantidade e prazo necessário</li>
          <li>${icon("check")} Cidade de entrega ou operação</li>
          <li>${icon("check")} Desenho, especificação e fotos em anexo</li>
        </ul>
        <p><strong>Demanda prioritária?</strong> Informe a janela desejada no assunto. Prazo, logística e capacidade são confirmados após avaliação técnica e comercial.</p>
      </div>
      <aside class="supplier-docs">
        <span>HOMOLOGAÇÃO DE FORNECEDOR</span>
        <h3>Documentos cadastrais e de conformidade</h3>
        <p>Solicite ao comercial a ficha cadastral vigente, dados da empresa e a documentação correspondente aos requisitos da sua contratação.</p>
        <a href="mailto:${site.email}?subject=Documentos%20para%20homologa%C3%A7%C3%A3o%20de%20fornecedor" data-analytics="email_homologacao">Solicitar documentação ${icon("arrow")}</a>
      </aside>
    </div>
  </section>
  <section class="section section--sand" aria-labelledby="localizacao-title">
    <div class="shell location-panel">
      <div><span>${icon("map")}</span><small>LOCALIZAÇÃO</small><h2 id="localizacao-title">${site.address}</h2><p>CEP 31980-180</p><a class="button button--dark" href="${site.map}" target="_blank" rel="noopener noreferrer" data-analytics="mapa_contato">Abrir no Google Maps ${icon("arrow")}</a></div>
      <div class="location-panel__note"><span>${icon("factory")}</span><h3>Atendimento técnico e comercial</h3><p>Confirme por telefone ou WhatsApp os detalhes da entrega, retirada ou visita antes do deslocamento.</p></div>
    </div>
  </section>
  <section class="section section--dark" aria-labelledby="social-title"><div class="shell social-section"><div><span class="eyebrow eyebrow--light">REDES OFICIAIS</span><h2 id="social-title">Acompanhe a New Tractor</h2></div><div><a href="${site.social.instagram}" target="_blank" rel="noopener noreferrer">Instagram ${icon("arrow")}</a><a href="${site.social.facebook}" target="_blank" rel="noopener noreferrer">Facebook ${icon("arrow")}</a><a href="${site.social.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ${icon("arrow")}</a></div></div></section>`;

const exposibramBody = `
  <article class="event-article">
    <header class="event-hero">
      <div class="shell">
        <nav class="breadcrumbs" aria-label="Navegação estrutural">
          <ol><li><a href="/">Início</a></li><li><span>Notícias</span></li><li><span aria-current="page">EXPOSIBRAM 2026</span></li></ol>
        </nav>
        <div class="event-hero__grid">
          <div class="event-hero__copy">
            <span class="eyebrow eyebrow--light">CONTEÚDO PÓS-EVENTO · BELO HORIZONTE</span>
            <h1>EXPOSIBRAM 2026: decisões de manutenção que seguem em pauta</h1>
            <p class="event-hero__lead">Antes da edição realizada de 24 a 27 de agosto, a New Tractor anunciou sua participação e convidou o setor a conversar sobre desgaste, disponibilidade e recuperação de componentes.</p>
            <div class="event-hero__meta" aria-label="Informações do artigo">
              <span>Publicado em <time datetime="2026-08-15">15 de agosto de 2026</time></span>
              <span>Atualizado em <time datetime="2026-09-01">1º de setembro de 2026</time></span>
            </div>
            <div class="button-row">
              <a class="button button--primary" href="/servicos/">Conhecer as soluções ${icon("arrow")}</a>
              <a class="button button--ghost" href="mailto:${site.email}?subject=RFQ%20p%C3%B3s-EXPOSIBRAM%202026" data-analytics="email_exposibram_hero">Fale com nossa equipe</a>
            </div>
          </div>
          <div class="event-hero__visual">
            ${picture({ name: "material-rodante", widths: [640, 1200], width: 1200, height: 675, alt: "Conjuntos de material rodante preparados pela New Tractor", sizes: "(max-width: 860px) 100vw, 46vw", eager: true })}
            <div class="event-date-card"><strong>24—27</strong><span>AGOSTO · 2026</span><small>EVENTO CONCLUÍDO</small></div>
          </div>
        </div>
      </div>
    </header>

    <section class="section section--light" aria-labelledby="porque-title">
      <div class="shell editorial-grid event-intro">
        <div><span class="eyebrow">MINERAÇÃO EM MOVIMENTO</span><h2 id="porque-title">O evento acabou. As decisões operacionais continuam.</h2></div>
        <div class="rich-text">
          <p>A EXPOSIBRAM 2026 reuniu a cadeia mineral em Belo Horizonte. Para quem cuida de máquinas pesadas, os temas de desgaste, disponibilidade, planejamento e documentação seguem presentes depois da feira.</p>
          <p>O anúncio institucional da New Tractor colocou esses temas em pauta antes da feira. A conversa continua com quem busca conhecimento para o dia a dia da operação.</p>
          <p>O próximo passo útil é levar o contexto real do equipamento para uma avaliação técnica e comercial.</p>
        </div>
      </div>
    </section>

    <section class="section section--dark" aria-labelledby="conversas-title">
      <div class="shell">
        <div class="section-heading section-heading--split">
          <div><span class="eyebrow eyebrow--light">AGENDA TÉCNICA</span><h2 id="conversas-title">Três conversas que permanecem relevantes</h2></div>
          <p class="event-dark-copy">Leve equipamento, aplicação, condição e prioridade para transformar um tema amplo em uma demanda avaliável.</p>
        </div>
        <div class="event-topic-grid">
          <article><span>01</span><h3>Desgaste do material rodante</h3><p>Como condição, aplicação e intervenção anterior entram na avaliação de tratores, escavadeiras e perfuratrizes.</p><a href="/servicos/manutencao-material-rodante/">Conhecer a manutenção ${icon("arrow")}</a></article>
          <article><span>02</span><h3>Medição e planejamento</h3><p>Como um histórico de medidas ajuda manutenção e PCM a acompanhar a evolução do desgaste.</p><a href="/servicos/monitoramento-material-rodante/">Conhecer o monitoramento ${icon("arrow")}</a></article>
          <article><span>03</span><h3>Caçambas e conchas</h3><p>Quando avaliar estrutura, perfil e recuperação de componentes submetidos a ciclos severos de trabalho.</p><a href="/servicos/reforma-cacambas-conchas/">Conhecer as reformas ${icon("arrow")}</a></article>
        </div>
      </div>
    </section>

    <section class="section section--sand" aria-labelledby="checklist-title">
      <div class="shell service-summary">
        <div><span class="eyebrow">CONTINUE A CONVERSA</span><h2 id="checklist-title">O que enviar para a New Tractor</h2></div>
        <ul class="check-list check-list--dark">
          <li>${icon("check")} Modelo e aplicação do equipamento</li>
          <li>${icon("check")} Componente e condição observada</li>
          <li>${icon("check")} Fotos e medições disponíveis</li>
          <li>${icon("check")} Cidade da operação e prioridade</li>
        </ul>
      </div>
    </section>

    <footer class="event-article__footer">
      <div class="shell event-source-note">
        <p><strong>Registro editorial:</strong> datas e local foram consultados no site oficial da EXPOSIBRAM. O evento foi realizado de 24 a 27 de agosto de 2026, no Expominas BH.</p>
        <a href="${exposibram.officialUrl}" target="_blank" rel="noopener noreferrer">Consultar o site oficial ${icon("arrow")}</a>
      </div>
    </footer>
  </article>
  ${contactBand("A conversa pode continuar depois da EXPOSIBRAM")}`;

const privacidadeBody = `
  ${pageHero({
    eyebrow: "PRIVACIDADE",
    title: "Privacidade e uso de dados",
    intro: "Informações objetivas sobre analytics, preferências locais e os canais externos acessados a partir deste site.",
    breadcrumb: [{ label: "Privacidade", href: "/privacidade/" }],
    image: "equipe",
    imageAlt: "Equipamento pesado e fachada da New Tractor",
    imageWidths: [640, 1200],
    imageWidth: 1200,
    imageHeight: 675,
  })}
  <section class="section section--light" aria-labelledby="politica-title"><div class="shell policy"><span class="eyebrow">VERSÃO DE 08/09/2026</span><h2 id="politica-title">Como este site funciona</h2><h3>Dados essenciais</h3><p>O site pode armazenar no navegador a sua escolha sobre analytics. Essa preferência é necessária para respeitar a decisão informada e não contém nome, telefone, e-mail ou conteúdo da sua conversa.</p><h3>Analytics opcional</h3><p>O Google Tag Manager identificado como <strong>GTM-T3RNZ98</strong> só é carregado após a sua aceitação. Os cliques medidos identificam o canal, o botão e a página; não incluem o conteúdo da conversa. Você pode rever sua escolha abaixo. Ao mudar para “Só essenciais”, a página será recarregada para aplicar sua escolha. Quando o armazenamento local estiver indisponível, a escolha vale apenas nesta página. A configuração dos serviços acionados pelo contêiner deve ser revisada periodicamente pelo responsável da New Tractor.</p><h3>WhatsApp, Google Maps e redes sociais</h3><p>Links para WhatsApp, Google Maps, Instagram, Facebook e LinkedIn abrem serviços de terceiros. Ao acessá-los, aplicam-se os termos e políticas de cada provedor.</p><h3>Contato</h3><p>Para dúvidas sobre os canais digitais da New Tractor, escreva para <a href="mailto:${site.email}">${site.email}</a>.</p><button class="button button--dark" type="button" data-reset-consent>Revisar preferência de analytics</button></div></section>`;

const notFoundBody = `
  <section class="not-found"><div class="shell"><span class="not-found__code">404</span><span class="eyebrow eyebrow--light">PÁGINA NÃO ENCONTRADA</span><h1>Este endereço não leva a uma página ativa.</h1><p>Use a navegação principal ou volte ao início para encontrar informações sobre a New Tractor.</p><a class="button button--primary" href="/">Voltar ao início ${icon("arrow")}</a></div></section>`;

const baseOrganization = {
  "@type": "Organization",
  "@id": `${site.origin}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  brand: companies.map(company => ({
    "@type": "Brand",
    "@id": `${site.origin}/${company.slug}/#brand`,
    name: company.name,
    url: `${site.origin}/${company.slug}/`,
    description: company.summary,
  })),
  url: `${site.origin}/`,
  logo: `${site.origin}/assets/images/logo-new-tractor.png`,
  image: `${site.origin}/assets/images/equipe-1200.webp`,
  description:
    "Grupo industrial com base em Belo Horizonte, reunindo recuperação, avaliação de peças novas, serviços de campo e tecnologia para máquinas pesadas.",
  email: site.email,
  telephone: "+55 31 3493-1476",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Santos Anjos, 380",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    postalCode: "31980-180",
    addressCountry: "BR",
  },
  sameAs: [site.social.instagram, site.social.facebook, site.social.linkedin],
  areaServed: { "@type": "Country", name: "Brasil" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "commercial",
    telephone: "+55 31 3493-1476",
    email: site.email,
    availableLanguage: ["pt-BR"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços para máquinas pesadas",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manutenção de material rodante" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reforma de caçambas e conchas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monitoramento de material rodante" } },
    ],
  },
};

const baseLocalBusiness = {
  "@type": "LocalBusiness",
  "@id": `${site.origin}/#localbusiness`,
  name: "New Tractor — Belo Horizonte",
  url: `${site.origin}/`,
  image: `${site.origin}/assets/images/equipe-1200.webp`,
  logo: `${site.origin}/assets/images/logo-new-tractor.png`,
  sameAs: [site.map],
  parentOrganization: { "@id": `${site.origin}/#organization` },
  email: site.email,
  telephone: "+55 31 3493-1476",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Santos Anjos, 380",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    postalCode: "31980-180",
    addressCountry: "BR",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${site.origin}/#website`,
  url: `${site.origin}/`,
  name: site.name,
  inLanguage: "pt-BR",
  publisher: { "@id": `${site.origin}/#organization` },
};

const breadcrumbSchema = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${site.origin}/` },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.name,
      item: `${site.origin}${item.route}`,
    })),
  ],
});

const serviceSchema = (name, description, route) => ({
  "@type": "Service",
  "@id": `${site.origin}${route}#service`,
  name,
  description,
  url: `${site.origin}${route}`,
  provider: { "@id": `${site.origin}/#organization` },
  serviceType: name,
  areaServed: { "@type": "Country", name: "Brasil" },
});

const exposibramArticleSchema = {
  "@type": "Article",
  "@id": `${site.origin}${exposibram.route}#article`,
  headline: "EXPOSIBRAM 2026: decisões de manutenção que seguem em pauta",
  description:
    "Registro do anúncio institucional da New Tractor para a EXPOSIBRAM 2026 e temas técnicos que permanecem relevantes após o evento.",
  datePublished: "2026-08-15",
  dateModified: "2026-09-01",
  inLanguage: "pt-BR",
  mainEntityOfPage: { "@id": `${site.origin}${exposibram.route}#webpage` },
  author: { "@id": `${site.origin}/#organization` },
  publisher: { "@id": `${site.origin}/#organization` },
  image: `${site.origin}/assets/images/material-rodante-1200.webp`,
};

export const pages = [
  {
    route: "/",
    output: "index.html",
    title: "Grupo New Tractor | Máquinas de linha amarela em Minas Gerais",
    description: "Material rodante, hidráulica, usinagem, caldeiraria e consulta de peças para máquinas de linha amarela. Grupo New Tractor, com base em Belo Horizonte, MG.",
    body: homeBody,
    active: "inicio",
    preload: true,
    lastModified: "2026-09-08",
    schema: [{
      "@type": "ItemList",
      "@id": `${site.origin}/#empresas`,
      name: "Empresas do Grupo New Tractor",
      itemListElement: companies.map((company, index) => ({
        "@type": "ListItem", position: index + 1, name: company.name,
        url: `${site.origin}/${company.slug}/`,
      })),
    }],
  },
  ...createCompanyPages({ site, picture, icon, breadcrumbSchema }),
  ...createTechnicalPages({ site, pageHero, contactBand, breadcrumbSchema, serviceSchema }),
  ...createSectorPages({ site, pageHero, contactBand, breadcrumbSchema }),
  ...createComponentPages({ site, pageHero, contactBand, breadcrumbSchema }),
  ...createEquipmentPages({ site, pageHero, contactBand, breadcrumbSchema }),
  ...createTerritoryPages({ site, pageHero, contactBand, breadcrumbSchema }),
  {
    route: "/empresa/",
    output: "empresa/index.html",
    title: "Grupo New Tractor | Estrutura para máquinas pesadas desde 2010",
    description: "Conheça o Grupo New Tractor: trajetória desde 2010, sete especialidades e estrutura industrial de mais de 4.000 m² em Belo Horizonte.",
    body: empresaBody,
    active: "empresa",
    lastModified: "2026-09-08",
    schema: [breadcrumbSchema([{ name: "Empresa", route: "/empresa/" }])],
  },
  {
    route: "/parcerias/", output: "parcerias/index.html",
    title: "Parcerias e conexões industriais | Grupo New Tractor",
    description: "Conheça o Grupo New Tractor e apresente sua empresa. Um espaço de diálogo para clientes, fornecedores e parceiros da indústria de máquinas pesadas.",
    body: parceriasBody, active: "parcerias", lastModified: "2026-09-08",
    schema: [breadcrumbSchema([{ name: "Parcerias", route: "/parcerias/" }])],
  },
  {
    route: "/pessoas/",
    output: "pessoas/index.html",
    title: "Pessoas que movem a New Tractor | Equipe e operação",
    description: "Um olhar sobre as pessoas, a indústria e o trabalho da New Tractor. Conheça a visão que conecta equipe, clientes e fornecedores em máquinas pesadas.",
    body: pessoasBody,
    active: "pessoas",
    lastModified: "2026-09-05",
    schema: [breadcrumbSchema([{ name: "Pessoas", route: "/pessoas/" }])],
  },
  {
    route: "/servicos/",
    output: "servicos/index.html",
    title: "Serviços para máquinas de linha amarela em MG | New Tractor",
    description: "Encontre a especialidade por componente: material rodante, usinagem, caçambas, consultas de cilindros e peças. Base em Belo Horizonte e demandas em Minas Gerais.",
    lastModified: "2026-09-08",
    body: servicosBody,
    active: "servicos",
    schema: [
      breadcrumbSchema([{ name: "Serviços", route: "/servicos/" }]),
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Quais equipamentos podem ser atendidos?", acceptedAnswer: { "@type": "Answer", text: "Atendemos tratores de esteira, escavadeiras, máquinas perfuratrizes e colheitadeiras, além de componentes associados ao material rodante." } },
          { "@type": "Question", name: "Como iniciar uma avaliação?", acceptedAnswer: { "@type": "Answer", text: "Entre em contato pelo WhatsApp, telefone ou e-mail e informe o tipo de equipamento, componente, condição observada e local da operação." } },
          { "@type": "Question", name: "O monitoramento substitui a inspeção da manutenção?", acceptedAnswer: { "@type": "Answer", text: "Não. A proposta é atuar em conjunto com a manutenção do cliente, usando medições de desgaste e contexto de aplicação para apoiar decisões." } },
          { "@type": "Question", name: "A New Tractor fornece peças?", acceptedAnswer: { "@type": "Answer", text: "A empresa recebe consultas de peças e conjuntos recondicionados. Condição e disponibilidade são confirmadas na cotação." } },
          { "@type": "Question", name: "A New Tractor atende fora de Minas Gerais?", acceptedAnswer: { "@type": "Answer", text: "Sim. A empresa informa atendimento para operações em todo o Brasil. Mobilização, logística, capacidade e prazo são avaliados para cada demanda." } },
        ],
      },
    ],
  },
  {
    route: "/servicos/manutencao-material-rodante/",
    output: "servicos/manutencao-material-rodante/index.html",
    title: "Manutenção de material rodante | New Tractor",
    description: "Avaliação e recuperação de rosários, sapatas, roletes, rodas-guia, trucks e conjuntos de material rodante para equipamentos pesados.",
    body: manutencaoBody,
    lastModified: "2026-09-08",
    active: "servicos",
    schema: [
      breadcrumbSchema([{ name: "Serviços", route: "/servicos/" }, { name: "Manutenção de material rodante", route: "/servicos/manutencao-material-rodante/" }]),
      serviceSchema("Manutenção de material rodante", "Recuperação de componentes de material rodante para tratores de esteira, escavadeiras, perfuratrizes e colheitadeiras.", "/servicos/manutencao-material-rodante/"),
    ],
  },
  {
    route: "/servicos/reforma-cacambas-conchas/",
    output: "servicos/reforma-cacambas-conchas/index.html",
    title: "Reforma de caçambas e conchas | New Tractor",
    description: "Reforma de caçambas e conchas com avaliação de estrutura, perfil, deformações, trincas e aplicação antes da definição do escopo.",
    body: reformaBody,
    lastModified: "2026-09-08",
    active: "servicos",
    schema: [
      breadcrumbSchema([{ name: "Serviços", route: "/servicos/" }, { name: "Reforma de caçambas e conchas", route: "/servicos/reforma-cacambas-conchas/" }]),
      serviceSchema("Reforma de caçambas e conchas", "Reparos estruturais e geométricos orientados por projetos e engenharia.", "/servicos/reforma-cacambas-conchas/"),
    ],
  },
  {
    route: "/servicos/monitoramento-material-rodante/",
    output: "servicos/monitoramento-material-rodante/index.html",
    title: "Monitoramento de material rodante | New Tractor",
    description: "Medições de desgaste e histórico de condição para apoiar o planejamento da manutenção de material rodante em máquinas pesadas.",
    body: monitoramentoBody,
    lastModified: "2026-09-08",
    active: "servicos",
    schema: [
      breadcrumbSchema([{ name: "Serviços", route: "/servicos/" }, { name: "Monitoramento de material rodante", route: "/servicos/monitoramento-material-rodante/" }]),
      serviceSchema("Monitoramento de material rodante", "Medições de desgaste e histórico de condição realizados em conjunto com a manutenção do cliente.", "/servicos/monitoramento-material-rodante/"),
    ],
  },
  {
    route: "/equipamentos/",
    output: "equipamentos/index.html",
    title: "Equipamentos e componentes para avaliação | New Tractor",
    description: "Identifique cilindros e componentes de escavadeiras, tratores de esteira e pás carregadeiras para consultar as especialidades da New Tractor.",
    body: equipamentosBody,
    lastModified: "2026-09-08",
    active: "equipamentos",
    ogImage: "/assets/images/componentes-industriais-1600.webp",
    ogImageWidth: 1600,
    ogImageHeight: 1070,
    ogImageAlt: "Roletes e componentes para máquinas pesadas",
    schema: [
      breadcrumbSchema([{ name: "Equipamentos", route: "/equipamentos/" }]),
      {
        "@type": "ItemList",
        name: "Equipamentos e aplicações da New Tractor",
        itemListElement: equipmentLinks.slice(1).map(([name, route], index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
          url: `${site.origin}${route}`,
        })),
      },
    ],
  },
  {
    route: "/atuacao/",
    output: "atuacao/index.html",
    title: "Atendimento nacional em máquinas pesadas | New Tractor",
    description: "Base em Belo Horizonte e atendimento a operações em todo o Brasil, com prioridade no Sudeste, Bahia e Goiás e logística por demanda.",
    body: atuacaoBody,
    lastModified: "2026-09-08",
    active: "atuacao",
    schema: [breadcrumbSchema([{ name: "Atuação", route: "/atuacao/" }])],
  },
  {
    route: "/contato/",
    output: "contato/index.html",
    title: "Fale com o Grupo New Tractor | Contato e relacionamento",
    description: "Entre em contato com o Grupo New Tractor por e-mail, telefone ou WhatsApp. Converse sobre sua operação, uma cotação ou uma parceria industrial.",
    body: contatoBody,
    active: "contato",
    lastModified: "2026-09-08",
    schema: [breadcrumbSchema([{ name: "Contato", route: "/contato/" }])],
  },
  {
    route: exposibram.route,
    output: "noticias/new-tractor-na-exposibram-2026/index.html",
    title: "EXPOSIBRAM 2026 e manutenção pesada | New Tractor",
    description: "Registro pós-evento do anúncio da New Tractor para a EXPOSIBRAM 2026 e temas de material rodante que seguem relevantes para a mineração.",
    body: exposibramBody,
    active: "exposibram",
    ogType: "article",
    ogImage: "/assets/images/material-rodante-1200.webp",
    ogImageWidth: 1200,
    ogImageHeight: 675,
    ogImageAlt: "Conjuntos de material rodante preparados pela New Tractor",
    articleMeta: { published: "2026-08-15", modified: "2026-09-01" },
    schema: [
      breadcrumbSchema([
        { name: "New Tractor na EXPOSIBRAM 2026", route: exposibram.route },
      ]),
      exposibramArticleSchema,
    ],
  },
  {
    route: "/privacidade/",
    output: "privacidade/index.html",
    title: "Privacidade | New Tractor",
    description: "Entenda como o site da New Tractor usa preferências locais, analytics opcional e links para serviços de terceiros.",
    body: privacidadeBody,
    lastModified: "2026-09-08",
    active: "",
    schema: [breadcrumbSchema([{ name: "Privacidade", route: "/privacidade/" }])],
  },
  {
    route: "/404.html",
    output: "404.html",
    title: "Página não encontrada | New Tractor",
    description: "O endereço informado não corresponde a uma página ativa no site da New Tractor.",
    body: notFoundBody,
    active: "",
    indexable: false,
  },
];

const navLink = (page, key, href, label) =>
  `<li><a href="${href}"${page.active === key ? ' aria-current="page"' : ""}>${label}</a></li>`;

const header = (page) => `
  <header class="site-header" data-header><div class="shell site-header__inner">
    <a class="brand" href="/" aria-label="Grupo New Tractor — página inicial"><span>GRUPO</span><img src="/assets/images/logo-new-tractor.png" width="480" height="148" alt="New Tractor"></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle><span></span><span></span><span></span><span class="sr-only">Abrir menu</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Navegação principal"><ul class="nav-list">${navLink(page, "empresa", "/empresa/", "O grupo")}<li><a href="/#empresas">Empresas</a></li>${navLink(page, "pessoas", "/pessoas/", "Pessoas")}${navLink(page, "atuacao", "/atuacao/", "Atuação")}${navLink(page, "parcerias", "/parcerias/", "Parcerias")}<li class="nav-rfq"><a href="/contato/">Fale com o grupo ${icon("arrow")}</a></li></ul></nav>
    <a class="header-cta" href="/contato/">Fale com o grupo ${icon("arrow")}</a>
  </div>${companies.some(company => company.slug === page.active) ? `<nav class="company-nav" aria-label="Empresas do Grupo New Tractor"><div class="shell company-nav__inner"><a href="/#empresas">Empresas do grupo</a><ul>${companyLinks(page.active)}</ul></div></nav>` : ""}</header>`;

const footer = () => `
  <footer class="site-footer"><div class="shell footer-lead"><span>CONHECIMENTO INDUSTRIAL.<br><strong>FORÇA EM CONJUNTO.</strong></span><a href="/contato/" aria-label="Fale com o Grupo New Tractor">${icon("arrow")}</a></div>
    <div class="shell footer-grid"><div class="footer-brand"><span class="eyebrow eyebrow--light">GRUPO</span><img src="/assets/images/logo-new-tractor.png" width="480" height="148" alt="New Tractor"><p>Especialidades que se conectam para movimentar a indústria.</p><div class="footer-social"><a href="${site.social.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a><a href="${site.social.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div><div><h2>Empresas</h2><ul>${companyLinks()}</ul></div><div><h2>Institucional</h2><ul><li><a href="/empresa/">O grupo</a></li><li><a href="/pessoas/">Pessoas</a></li><li><a href="/parcerias/">Parcerias</a></li><li><a href="/servicos/">Soluções técnicas</a></li><li><a href="/componentes/">Componentes de esteiras</a></li><li><a href="/guias/">Guias de manutenção</a></li><li><a href="/equipamentos/">Equipamentos</a></li><li><a href="/atuacao/">Atuação</a></li><li><a href="/setores/">Setores e operações</a></li><li><a href="${exposibram.route}">Notícias</a></li></ul></div><div><h2>Vamos conversar</h2><address><a href="${site.phoneHref}" data-analytics="telefone_rodape">${site.phoneDisplay}</a><a href="mailto:${site.email}" data-analytics="email_rodape">${site.email}</a><a href="${site.map}" data-analytics="mapa_rodape" target="_blank" rel="noopener noreferrer">${site.address}</a></address><a class="text-link text-link--light" href="/contato/">Todos os contatos ${icon("arrow")}</a></div></div>
    <div class="shell footer-bottom"><p>© <span data-current-year>2026</span> Grupo New Tractor</p><a href="/privacidade/">Privacidade</a><a href="/contato/">Contato</a></div>
  </footer>
  <a class="whatsapp-float" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Conversar com a New Tractor pelo WhatsApp" data-analytics="whatsapp_flutuante">${icon("phone")}<span>Vamos conversar</span></a>
  <aside class="consent" role="region" aria-live="polite" aria-labelledby="consent-title" aria-describedby="consent-copy" data-consent-banner hidden><div><strong id="consent-title">Sua privacidade importa.</strong><p id="consent-copy">Podemos usar cookies de análise para melhorar sua experiência? <a href="/privacidade/">Saiba mais</a>.</p></div><div><button type="button" class="button button--primary button--small" data-consent="accepted">Aceitar</button><button type="button" class="button button--ghost button--small" data-consent="essential">Só essenciais</button></div></aside>`;

export function renderPage(page) {
  const canonical = `${site.origin}${page.route === "/404.html" ? "/404.html" : page.route}`;
  const company = companies.find(entry => page.route === `/${entry.slug}/`);
  const pageSchema = {
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: page.title,
    description: page.description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.origin}/#website` },
    about: page.about ?? { "@id": company ? `${canonical}#brand` : `${site.origin}/#organization` },
    dateModified: page.lastModified ?? site.lastModified,
  };
  const graph = [baseOrganization, baseLocalBusiness, websiteSchema, pageSchema, ...(page.schema ?? [])];
  const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c");
  const preload = page.preload
    ? '<link rel="preload" as="image" href="/assets/images/group-opening-1280.webp" imagesrcset="/assets/images/group-opening-640.webp 640w, /assets/images/group-opening-1280.webp 1280w" imagesizes="100vw" fetchpriority="high">'
    : "";
  const robots = page.indexable === false ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1";
  const canonicalTag = page.indexable === false ? "" : `<link rel="canonical" href="${canonical}">`;
  const ogImage = page.ogImage ?? "/assets/images/equipe-1200.webp";
  const ogImageWidth = page.ogImageWidth ?? 1200;
  const ogImageHeight = page.ogImageHeight ?? 675;
  const ogImageAlt = page.ogImageAlt ?? "Equipamento pesado na base da New Tractor em Belo Horizonte";
  const articleMeta = page.articleMeta
    ? `<meta property="article:published_time" content="${page.articleMeta.published}">\n  <meta property="article:modified_time" content="${page.articleMeta.modified}">`
    : "";
  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>document.documentElement.classList.add("js")</script>
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="robots" content="${robots}">
  ${canonicalTag}
  <meta name="theme-color" content="#0b0d0e">
  <meta property="og:type" content="${page.ogType ?? "website"}">
  <meta property="og:locale" content="${site.locale}">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site.origin}${ogImage}">
  <meta property="og:image:width" content="${ogImageWidth}">
  <meta property="og:image:height" content="${ogImageHeight}">
  <meta property="og:image:alt" content="${ogImageAlt}">
  ${articleMeta}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="${site.origin}${ogImage}">
  <meta name="twitter:image:alt" content="${ogImageAlt}">
  <link rel="icon" href="/assets/icons/favicon-32.png" sizes="32x32" type="image/png">
  <link rel="apple-touch-icon" href="/assets/icons/favicon-192.png">
  <link rel="manifest" href="/site.webmanifest">
  ${preload}
  <link rel="stylesheet" href="/assets/css/${site.cssFile}">
  <script type="application/ld+json">${jsonLd}</script>
  <script src="/assets/js/${site.jsFile}" defer></script>
  ${page.preload || page.film ? '<script type="module" src="/assets/js/hero-video.20260905.js"></script>' : ""}
</head>
<body>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  ${header(page)}
  <main id="conteudo" tabindex="-1">${page.body}</main>
  ${footer()}
</body>
</html>
`;
}
