export const site = {
  name: "Grupo New Tractor",
  shortName: "New Tractor",
  origin: "https://newtractor.com.br",
  locale: "pt_BR",
  lastModified: "2026-09-01",
  cssFile: "site.20260901-2.css",
  jsFile: "site.20260901.js",
  email: "solucao@newtractor.com.br",
  phoneDisplay: "(31) 3493-1476",
  phoneHref: "tel:+553134931476",
  whatsappDisplay: "(31) 99312-0054",
  whatsapp:
    "https://wa.me/5531993120054?text=Ol%C3%A1%2C%20New%20Tractor.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  address: "Rua Santos Anjos, 380 — São Gabriel, Belo Horizonte — MG",
  map:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Santos%20Anjos%2C%20380%2C%20S%C3%A3o%20Gabriel%2C%20Belo%20Horizonte%2C%20MG",
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

const contactBand = (title = "Sua operação tem uma demanda para avaliar?") => `
  <section class="contact-band" aria-labelledby="contact-band-title">
    <div class="shell contact-band__inner">
      <div>
        <span class="eyebrow eyebrow--dark">ATENDIMENTO COMERCIAL</span>
        <h2 id="contact-band-title">${title}</h2>
        <p>Informe equipamento, componente, condição, quantidade, cidade e prioridade. Fotos, desenhos e especificações podem seguir por e-mail.</p>
      </div>
      <div class="contact-band__actions">
        <a class="button button--dark" href="mailto:${site.email}?subject=RFQ%20%7C%20New%20Tractor" data-analytics="email_rfq_rodape">Enviar RFQ por e-mail ${icon("mail")}</a>
        <a class="button button--outline-dark" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_orcamento">Falar no WhatsApp ${icon("arrow")}</a>
        <a class="contact-band__phone" href="${site.phoneHref}" data-analytics="telefone_comercial"><span>${icon("phone")}</span><small>Ligue para</small><strong>${site.phoneDisplay}</strong></a>
      </div>
    </div>
  </section>`;

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
  <section class="hero">
    <div class="hero__media" aria-hidden="true">
      ${picture({ name: "equipe", widths: [640, 1200], width: 1200, height: 675, alt: "", sizes: "100vw", eager: true })}
    </div>
    <div class="hero__overlay"></div>
    <div class="shell hero__content">
      <div class="hero__copy">
        <span class="eyebrow eyebrow--light">GRUPO NEW TRACTOR · MÁQUINAS PESADAS</span>
        <h1>Engenharia para manter máquinas pesadas produzindo.</h1>
        <p>Avaliação, recuperação e acompanhamento de componentes críticos para operações de mineração, infraestrutura e agronegócio.</p>
        <div class="button-row">
          <a class="button button--primary" href="mailto:${site.email}?subject=RFQ%20%7C%20New%20Tractor" data-analytics="email_rfq_hero">Enviar RFQ ${icon("mail")}</a>
          <a class="button button--ghost" href="/servicos/">Conhecer soluções</a>
        </div>
      </div>
      <dl class="hero__facts" aria-label="Estrutura declarada pelo Grupo New Tractor">
        <div><dt>4.000 m²+</dt><dd>de área industrial combinada</dd></div>
        <div><dt>3 galpões</dt><dd>na estrutura do grupo</dd></div>
        <div><dt>Desde 2010</dt><dd>experiência em máquinas pesadas</dd></div>
      </dl>
    </div>
    <a class="hero__scroll" href="#solucoes"><span>Explore</span><i aria-hidden="true"></i></a>
  </section>

  <section class="machine-strip" aria-label="Equipamentos e aplicações">
    <div class="shell machine-strip__inner">
      <span>Equipamentos</span>
      <ul><li>Tratores de esteira</li><li>Escavadeiras</li><li>Perfuratrizes</li><li>Colheitadeiras</li></ul>
      <a href="/equipamentos/">Ver aplicações ${icon("arrow")}</a>
    </div>
  </section>

  <section class="section section--light" aria-labelledby="decisao-title">
    <div class="shell editorial-grid">
      <div><span class="eyebrow">DECISÃO TÉCNICA</span><h2 id="decisao-title">Quando o componente exige decisão, a operação não pode depender de suposição.</h2></div>
      <div class="rich-text">
        <p>Condição, aplicação, desgaste e prioridade precisam aparecer antes do orçamento.</p>
        <p>A conversa da New Tractor começa pelo equipamento e pelo contexto da operação. A avaliação orienta o escopo técnico e comercial, sem transformar diagnóstico em promessa genérica.</p>
        <a class="text-link" href="/contato/">Ver o checklist de RFQ ${icon("arrow")}</a>
      </div>
    </div>
  </section>

  <section class="section section--sand" id="solucoes" aria-labelledby="solucoes-title">
    <div class="shell">
      <div class="section-heading section-heading--split">
        <div><span class="eyebrow">SOLUÇÕES COMPROVADAS</span><h2 id="solucoes-title">Do desgaste observado ao escopo de intervenção</h2></div>
        <p>Três frentes publicamente documentadas, apresentadas com limites claros e avaliação por demanda.</p>
      </div>
      ${serviceCards()}
    </div>
  </section>

  <section class="section section--dark" aria-labelledby="estrutura-home-title">
    <div class="shell split-feature split-feature--reverse">
      <div class="split-feature__media">
        ${picture({ name: "componentes-industriais", widths: [640, 1200, 1600], width: 1600, height: 1070, alt: "Roletes e componentes amarelos e pretos organizados na New Tractor", sizes: "(max-width: 860px) 100vw, 52vw" })}
        <span class="image-label">Componentes reais · New Tractor</span>
      </div>
      <div class="split-feature__copy">
        <span class="eyebrow eyebrow--light">ESTRUTURA INDUSTRIAL</span>
        <h2 id="estrutura-home-title">Pessoas, oficina e processo como prova</h2>
        <p>Mais de 4.000 m² de área industrial combinada em três galpões, conforme informações atuais da empresa, com base operacional em Belo Horizonte.</p>
        <ul class="check-list">
          <li>${icon("check")} Inspeção e preparação do componente</li>
          <li>${icon("check")} Processos definidos conforme o escopo contratado</li>
          <li>${icon("check")} Medição e acompanhamento da condição</li>
          <li>${icon("check")} Atendimento técnico e comercial para todo o Brasil</li>
        </ul>
        <a class="text-link text-link--light" href="/empresa/">Conhecer a estrutura ${icon("arrow")}</a>
      </div>
    </div>
  </section>

  <section class="section section--light" aria-labelledby="processo-title">
    <div class="shell">
      <div class="section-heading section-heading--split">
        <div><span class="eyebrow">COMO A DEMANDA AVANÇA</span><h2 id="processo-title">Um caminho objetivo para manutenção e suprimentos</h2></div>
        <p>O prazo, a mobilização e a capacidade são confirmados depois que o contexto técnico e comercial é conhecido.</p>
      </div>
      <ol class="process-list">
        <li><span>01</span><div><h3>Contexto</h3><p>Equipamento, aplicação, componente, condição, quantidade, cidade e prioridade.</p></div></li>
        <li><span>02</span><div><h3>Avaliação</h3><p>Análise técnica e comercial para definir viabilidade, documentos e próximos passos.</p></div></li>
        <li><span>03</span><div><h3>Escopo</h3><p>Proposta alinhada ao processo necessário e às condições da contratação.</p></div></li>
        <li><span>04</span><div><h3>Execução</h3><p>Serviço realizado conforme escopo, com comunicação pelo canal combinado.</p></div></li>
      </ol>
    </div>
  </section>

  <section class="section section--sand coverage-callout" aria-labelledby="cobertura-home-title">
    <div class="shell coverage-callout__grid">
      <div><span class="eyebrow">ATUAÇÃO NACIONAL</span><h2 id="cobertura-home-title">Base em Belo Horizonte. Atendimento para operações em todo o Brasil.</h2></div>
      <div><p>O Sudeste, a Bahia e Goiás formam os corredores comerciais prioritários. Mobilização, coleta, entrega e prazo são avaliados para cada demanda.</p><a class="button button--dark" href="/atuacao/">Conhecer a atuação ${icon("arrow")}</a></div>
    </div>
  </section>

  <section class="section section--light client-portfolio" aria-labelledby="clientes-title">
    <div class="shell">
      <div class="section-heading section-heading--split client-portfolio__heading">
        <div><span class="eyebrow">REFERÊNCIAS HISTÓRICAS DIVULGADAS</span><h2 id="clientes-title">Marcas apresentadas na trajetória institucional</h2></div>
        <p>A grade preserva referências já publicadas pela New Tractor. Ela não afirma contrato vigente, resultado específico ou depoimento.</p>
      </div>
      ${clientLogoGrid()}
      <p class="client-portfolio__note">As marcas pertencem aos seus respectivos titulares. Relacionamentos e autorizações devem ser confirmados periodicamente.</p>
    </div>
  </section>
  ${contactBand()}`;

const empresaBody = `
  ${pageHero({
    eyebrow: "GRUPO NEW TRACTOR",
    title: "Pessoas, processos e estrutura voltados à continuidade da operação.",
    intro: "Uma trajetória iniciada em 2010, construída a partir do conhecimento de oficina e da realidade de máquinas pesadas.",
    breadcrumb: [{ label: "Empresa", href: "/empresa/" }],
    image: "equipe",
    imageAlt: "Estrutura operacional da New Tractor em Belo Horizonte",
    imageWidths: [640, 1200],
    imageWidth: 1200,
    imageHeight: 675,
  })}
  <section class="section section--light" aria-labelledby="historia-title">
    <div class="shell editorial-grid">
      <div><span class="eyebrow">NOSSA TRAJETÓRIA</span><h2 id="historia-title">Conhecimento que vem das pessoas e da prática</h2></div>
      <div class="rich-text">
        <p>A New Tractor atua com máquinas pesadas desde 2010, com base operacional em Belo Horizonte.</p>
        <p>Somos especialistas em manutenção, recondicionamento e monitoramento de material rodante em equipamentos pesados dos setores agrícola, de construção civil e de mineração.</p>
        <p>A marca evolui para o Grupo New Tractor como endosso institucional de uma visão integrada. No site, o foco permanece nas soluções que já possuem escopo público documentado.</p>
      </div>
    </div>
  </section>
  <section class="section section--dark" aria-labelledby="direcao-title">
    <div class="shell values-grid">
      <div class="section-heading"><span class="eyebrow eyebrow--light">NOSSA FORMA DE TRABALHAR</span><h2 id="direcao-title">Clareza antes da promessa</h2></div>
      <article><span>CRITÉRIO</span><h3>Entender condição, aplicação e prioridade antes de definir o escopo.</h3></article>
      <article><span>RESPONSABILIDADE</span><h3>Confirmar capacidade, prazo e documentos para cada contratação.</h3></article>
    </div>
  </section>
  <section class="section section--sand" aria-labelledby="estrutura-title">
    <div class="shell feature-points">
      <div><span class="eyebrow">ESTRUTURA DECLARADA</span><h2 id="estrutura-title">Três galpões e mais de 4.000 m² de área industrial combinada</h2><p class="section-note">Metragem e configuração informadas pela empresa na atualização institucional de setembro de 2026.</p></div>
      <ul>
        <li><strong>Base em BH</strong><span>Rua Santos Anjos, 380, bairro São Gabriel</span></li>
        <li><strong>Material rodante</strong><span>componentes e conjuntos para equipamentos pesados</span></li>
        <li><strong>Reformas</strong><span>caçambas, conchas e escopos estruturais sob avaliação</span></li>
        <li><strong>Monitoramento</strong><span>medição de desgaste em conjunto com a manutenção</span></li>
      </ul>
    </div>
  </section>
  <section class="section section--light" aria-labelledby="fotos-title">
    <div class="shell">
      <div class="section-heading section-heading--split"><div><span class="eyebrow">ESTRUTURA REAL</span><h2 id="fotos-title">Máquinas e componentes no centro da narrativa</h2></div><p>As imagens são derivadas da presença institucional já publicada pela New Tractor. Novas captações devem registrar autoria e autorização.</p></div>
      <div class="photo-grid">
        <figure>${picture({ name: "equipe", widths: [640, 1200], width: 1200, height: 675, alt: "Equipamento pesado, veículos de apoio e fachada da New Tractor em Belo Horizonte" })}<figcaption>Base operacional · Belo Horizonte</figcaption></figure>
        <figure>${picture({ name: "material-rodante", widths: [640, 1200], width: 1200, height: 675, alt: "Conjuntos amarelos de esteiras no pátio da New Tractor" })}<figcaption>Conjuntos de material rodante</figcaption></figure>
        <figure>${picture({ name: "componentes-industriais", widths: [640, 1200], width: 1200, height: 802, alt: "Roletes e componentes organizados na New Tractor" })}<figcaption>Componentes preparados</figcaption></figure>
      </div>
    </div>
  </section>
  ${contactBand("Vamos avaliar a necessidade da sua operação?")}`;

const servicosBody = `
  ${pageHero({
    eyebrow: "SERVIÇOS",
    title: "Soluções para decidir, recuperar e acompanhar componentes críticos.",
    intro: "Escopos organizados pela necessidade da operação, com avaliação técnica e comercial antes da proposta.",
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
    </div>
  </section>
  <section class="section section--sand" aria-labelledby="faq-title">
    <div class="shell faq-layout">
      <div><span class="eyebrow">DÚVIDAS FREQUENTES</span><h2 id="faq-title">Antes de solicitar um orçamento</h2></div>
      <div class="faq-list">
        <details><summary>Quais equipamentos podem ser atendidos?</summary><p>A empresa divulga atendimento a tratores de esteira, escavadeiras, máquinas perfuratrizes e colheitadeiras, além de componentes associados ao material rodante.</p></details>
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
  ${contactBand("Precisa avaliar um componente de material rodante?")}`;

const reformaBody = `
  ${pageHero({
    eyebrow: "REFORMA",
    title: "Recuperação estrutural orientada ao perfil de trabalho.",
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
    <div class="shell benefit-grid"><div><span class="eyebrow eyebrow--light">OBJETIVO</span><h2 id="beneficios-title">Transformar observação em histórico útil</h2></div><article><strong>01</strong><h3>Observar</h3><p>Registrar sinais e medidas da condição encontrada.</p></article><article><strong>02</strong><h3>Comparar</h3><p>Acompanhar a evolução do desgaste no contexto da aplicação.</p></article><article><strong>03</strong><h3>Planejar</h3><p>Apoiar a organização de manutenção e recursos, sem garantia de resultado isolado.</p></article></div>
  </section>
  ${contactBand("Quer acompanhar o desgaste do seu material rodante?")}`;

const equipamentosBody = `
  ${pageHero({
    eyebrow: "EQUIPAMENTOS E APLICAÇÕES",
    title: "Máquinas pesadas pedem contexto antes da intervenção.",
    intro: "A New Tractor divulga atendimento a tratores de esteira, escavadeiras, perfuratrizes e colheitadeiras, com escopo definido para cada componente e aplicação.",
    breadcrumb: [{ label: "Equipamentos", href: "/equipamentos/" }],
    image: "componentes-industriais",
    imageAlt: "Roletes e componentes amarelos e pretos para máquinas pesadas",
    imageWidths: [640, 1200, 1600],
    imageWidth: 1600,
    imageHeight: 1070,
  })}
  <section class="section section--light" aria-labelledby="maquinas-title">
    <div class="shell">
      <div class="section-heading section-heading--split"><div><span class="eyebrow">MÁQUINAS DIVULGADAS</span><h2 id="maquinas-title">Quatro famílias presentes no escopo público</h2></div><p>Marca, modelo, configuração, aplicação e condição são necessários para avaliar compatibilidade e viabilidade.</p></div>
      <div class="equipment-grid">
        <article><span>01</span><h3>Tratores de esteira</h3><p>Conjuntos sujeitos a abrasão, impacto e esforço de tração em terraplenagem, mineração e abertura de áreas.</p></article>
        <article><span>02</span><h3>Escavadeiras</h3><p>Material rodante, caçambas e conchas aplicados a escavação, carga, infraestrutura e mineração.</p></article>
        <article><span>03</span><h3>Perfuratrizes</h3><p>Componentes de deslocamento avaliados conforme modelo, ambiente e condição observada.</p></article>
        <article><span>04</span><h3>Colheitadeiras</h3><p>Sistemas de esteira e componentes associados a operações agrícolas e janelas sazonais.</p></article>
      </div>
    </div>
  </section>
  <section class="section section--sand" aria-labelledby="sistemas-title">
    <div class="shell">
      <div class="section-heading section-heading--split"><div><span class="eyebrow">COMPONENTES</span><h2 id="sistemas-title">O que pode entrar na avaliação inicial</h2></div><p>A lista orienta a RFQ; não representa capacidade automática para toda marca, dimensão, peso ou condição.</p></div>
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
  ${contactBand("Qual máquina e componente você precisa avaliar?")}`;

const atuacaoBody = `
  ${pageHero({
    eyebrow: "ATUAÇÃO",
    title: "Base em Belo Horizonte. Atendimento para todo o Brasil.",
    intro: "A viabilidade técnica, comercial e logística é analisada para cada demanda, sem sugerir filiais ou prazos locais onde não existem.",
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
      <div class="rich-text"><p>A New Tractor informa atendimento técnico e comercial a operações em todo o Brasil.</p><p>Localização, tipo de componente, peso, dimensão, prioridade e modalidade de transporte influenciam a avaliação. Coleta, entrega, mobilização e prazo são confirmados na proposta — nunca presumidos a partir do CEP.</p></div>
    </div>
  </section>
  <section class="section section--dark" aria-labelledby="regioes-title">
    <div class="shell">
      <div class="section-heading section-heading--split"><div><span class="eyebrow eyebrow--light">CORREDORES PRIORITÁRIOS</span><h2 id="regioes-title">Sudeste, Bahia e Goiás</h2></div><p class="section-copy-light">A prioridade comercial não representa filial, equipe residente ou prazo garantido.</p></div>
      <div class="coverage-grid">
        <article><span>SUDESTE</span><h3>Mineração, infraestrutura e frota</h3><p>RMBH e Quadrilátero Ferrífero, Vale do Aço, eixo MG–ES, Triângulo/Alto Paranaíba e conexões com São Paulo, Rio de Janeiro e Espírito Santo.</p></article>
        <article><span>BAHIA</span><h3>Eixos industriais e agro</h3><p>Corredores BR-116, BR-242, BR-324 e BR-101, com demandas avaliadas a partir da cidade, do componente e da logística.</p></article>
        <article><span>GOIÁS</span><h3>Infraestrutura, mineração e agro</h3><p>Eixos BR-040, BR-060, BR-050 e BR-153, conectando os principais polos operacionais do estado.</p></article>
      </div>
    </div>
  </section>
  <section class="section section--sand" aria-labelledby="seo-cidades-title">
    <div class="shell coverage-policy">
      <div><span class="eyebrow">PRESENÇA COM RESPONSABILIDADE</span><h2 id="seo-cidades-title">Uma cobertura real vale mais que centenas de páginas repetidas</h2></div>
      <div><p>O planejamento comercial considera 330 municípios com mais de 50 mil habitantes no Sudeste, na Bahia e em Goiás, segundo a estimativa municipal de 2025 do IBGE. O site não cria páginas artificiais para cada cidade.</p><p>Uma localidade só ganha conteúdo próprio quando houver operação, logística, evidência e informação realmente diferentes.</p></div>
    </div>
  </section>
  <section class="section section--light" aria-labelledby="logistica-title">
    <div class="shell feature-points">
      <div><span class="eyebrow">O QUE CONFIRMAMOS NA PROPOSTA</span><h2 id="logistica-title">Cada deslocamento começa com uma avaliação</h2></div>
      <ul><li><strong>Origem</strong><span>cidade da operação, retirada ou entrega</span></li><li><strong>Componente</strong><span>tipo, quantidade, peso e dimensão disponíveis</span></li><li><strong>Prioridade</strong><span>janela desejada e impacto operacional informado</span></li><li><strong>Modalidade</strong><span>viabilidade de envio, coleta ou mobilização</span></li></ul>
    </div>
  </section>
  ${contactBand("Informe a cidade e o contexto da sua demanda")}`;

const contatoBody = `
  ${pageHero({
    eyebrow: "CONTATO",
    title: "Envie sua RFQ com o contexto técnico da demanda.",
    intro: "E-mail para desenhos e especificações; WhatsApp e telefone para a conversa inicial.",
    breadcrumb: [{ label: "Contato", href: "/contato/" }],
    image: "equipe",
    imageAlt: "Pátio da New Tractor com equipamentos pesados e veículos de apoio",
    imageWidths: [640, 1200],
    imageWidth: 1200,
    imageHeight: 675,
  })}
  <section class="section section--light" aria-labelledby="canais-title">
    <div class="shell contact-layout">
      <div><span class="eyebrow">CANAIS COMERCIAIS</span><h2 id="canais-title">Escolha o canal adequado</h2><p>Para agilizar a conversa, informe equipamento, componente, condição observada, quantidade e cidade da operação.</p></div>
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
        <h2 id="rfq-title">Envie sua RFQ com contexto técnico</h2>
        <p>Para processos de cotação formal, use o e-mail comercial. Você poderá anexar desenhos, especificações, fotos e documentos diretamente na mensagem.</p>
        <a class="button button--primary" href="mailto:${site.email}?subject=RFQ%20%7C%20Material%20rodante%20%7C%20New%20Tractor&body=Empresa%20solicitante%3A%0ACNPJ%20do%20solicitante%3A%0AEquipamento%20e%20modelo%3A%0AComponente%3A%0AQuantidade%3A%0APrazo%20necess%C3%A1rio%3A%0ACidade%20de%20entrega%3A%0A%0AFavor%20anexar%20desenhos%2C%20especifica%C3%A7%C3%B5es%20e%20fotos%20dispon%C3%ADveis." data-analytics="email_rfq_contato">Abrir RFQ por e-mail ${icon("mail")}</a>
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
        <p>Solicite ao comercial a ficha cadastral vigente, CNPJ/razão social aplicáveis e os documentos do escopo. Certificações, ARTs e requisitos de segurança devem ser confirmados para cada serviço.</p>
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
              <a class="button button--ghost" href="mailto:${site.email}?subject=RFQ%20p%C3%B3s-EXPOSIBRAM%202026" data-analytics="email_exposibram_hero">Enviar RFQ</a>
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
          <p>A New Tractor mantém este conteúdo como registro do anúncio institucional feito antes do evento. Sem fotografias ou relatório pós-evento autorizados, a página não afirma reunião, estande, case ou resultado realizado.</p>
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
        <div><span class="eyebrow">TRANSFORME O TEMA EM RFQ</span><h2 id="checklist-title">O que enviar para a New Tractor</h2></div>
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
  <section class="section section--light" aria-labelledby="politica-title"><div class="shell policy"><span class="eyebrow">VERSÃO DE 01/09/2026</span><h2 id="politica-title">Como este site funciona</h2><h3>Dados essenciais</h3><p>O site pode armazenar no navegador a sua escolha sobre analytics. Essa preferência é necessária para respeitar a decisão informada e não contém nome, telefone, e-mail ou conteúdo da sua conversa.</p><h3>Analytics opcional</h3><p>O Google Tag Manager identificado como <strong>GTM-T3RNZ98</strong> só é carregado após a sua aceitação. A configuração dos serviços acionados pelo contêiner deve ser revisada periodicamente pelo responsável da New Tractor.</p><h3>WhatsApp, Google Maps e redes sociais</h3><p>Links para WhatsApp, Google Maps, Instagram, Facebook e LinkedIn abrem serviços de terceiros. Ao acessá-los, aplicam-se os termos e políticas de cada provedor.</p><h3>Contato</h3><p>Para dúvidas sobre os canais digitais da New Tractor, escreva para <a href="mailto:${site.email}">${site.email}</a>.</p><button class="button button--dark" type="button" data-reset-consent>Revisar preferência de analytics</button></div></section>`;

const notFoundBody = `
  <section class="not-found"><div class="shell"><span class="not-found__code">404</span><span class="eyebrow eyebrow--light">PÁGINA NÃO ENCONTRADA</span><h1>Este endereço não leva a uma página ativa.</h1><p>Use a navegação principal ou volte ao início para encontrar informações sobre a New Tractor.</p><a class="button button--primary" href="/">Voltar ao início ${icon("arrow")}</a></div></section>`;

const baseOrganization = {
  "@type": "Organization",
  "@id": `${site.origin}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  url: `${site.origin}/`,
  logo: `${site.origin}/assets/images/logo-new-tractor.png`,
  image: `${site.origin}/assets/images/equipe-1200.webp`,
  description:
    "Grupo brasileiro com base em Belo Horizonte, especializado em avaliação, recuperação e monitoramento de componentes de máquinas pesadas.",
  foundingDate: "2010",
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

const exposibramEventSchema = {
  "@type": "Event",
  "@id": "https://exposibram2026.ibram.org.br/#event",
  name: "EXPOSIBRAM 2026",
  description:
    "Expo & Congresso Brasileiro de Mineração promovido pelo Instituto Brasileiro de Mineração em Belo Horizonte.",
  startDate: "2026-08-24",
  endDate: "2026-08-27",
  eventStatus: "https://schema.org/EventCompleted",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  url: exposibram.officialUrl,
  organizer: {
    "@type": "Organization",
    name: "Instituto Brasileiro de Mineração",
    url: "https://ibram.org.br/",
  },
  location: {
    "@type": "Place",
    name: "Expominas BH",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Amazonas, 6200, Gameleira",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      postalCode: "30510-000",
      addressCountry: "BR",
    },
  },
};

export const pages = [
  {
    route: "/",
    output: "index.html",
    title: "Manutenção de material rodante e máquinas pesadas | New Tractor",
    description: "Avaliação, recuperação e monitoramento de componentes para máquinas pesadas, com base em Belo Horizonte e atendimento em todo o Brasil.",
    body: homeBody,
    active: "inicio",
    preload: true,
  },
  {
    route: "/empresa/",
    output: "empresa/index.html",
    title: "Grupo New Tractor | Estrutura para máquinas pesadas desde 2010",
    description: "Conheça a trajetória, a base em Belo Horizonte e a estrutura declarada de três galpões e mais de 4.000 m² do Grupo New Tractor.",
    body: empresaBody,
    active: "empresa",
    schema: [breadcrumbSchema([{ name: "Empresa", route: "/empresa/" }])],
  },
  {
    route: "/servicos/",
    output: "servicos/index.html",
    title: "Soluções para material rodante e máquinas pesadas | New Tractor",
    description: "Conheça manutenção e monitoramento de material rodante e reforma de caçambas e conchas, com escopo avaliado para cada demanda.",
    body: servicosBody,
    active: "servicos",
    schema: [
      breadcrumbSchema([{ name: "Serviços", route: "/servicos/" }]),
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Quais equipamentos podem ser atendidos?", acceptedAnswer: { "@type": "Answer", text: "A empresa divulga atendimento a tratores de esteira, escavadeiras, máquinas perfuratrizes e colheitadeiras, além de componentes associados ao material rodante." } },
          { "@type": "Question", name: "Como iniciar uma avaliação?", acceptedAnswer: { "@type": "Answer", text: "Entre em contato pelo WhatsApp, telefone ou e-mail e informe o tipo de equipamento, componente, condição observada e local da operação." } },
          { "@type": "Question", name: "O monitoramento substitui a inspeção da manutenção?", acceptedAnswer: { "@type": "Answer", text: "Não. A proposta é atuar em conjunto com a manutenção do cliente, usando medições de desgaste e contexto de aplicação para apoiar decisões." } },
          { "@type": "Question", name: "A New Tractor fornece peças?", acceptedAnswer: { "@type": "Answer", text: "A empresa recebe consultas de peças e conjuntos recondicionados. Condição e disponibilidade são confirmadas na cotação." } },
          { "@type": "Question", name: "A New Tractor atende fora de Minas Gerais?", acceptedAnswer: { "@type": "Answer", text: "Sim. A empresa informa atendimento em todo o Brasil, com mobilização, logística, capacidade e prazo avaliados por demanda." } },
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
    description: "Escopo divulgado para tratores de esteira, escavadeiras, perfuratrizes e colheitadeiras, com componentes avaliados por aplicação.",
    body: equipamentosBody,
    active: "equipamentos",
    ogImage: "/assets/images/componentes-industriais-1600.webp",
    ogImageWidth: 1600,
    ogImageHeight: 1070,
    ogImageAlt: "Roletes e componentes para máquinas pesadas",
    schema: [
      breadcrumbSchema([{ name: "Equipamentos", route: "/equipamentos/" }]),
      {
        "@type": "ItemList",
        name: "Equipamentos divulgados pela New Tractor",
        itemListElement: ["Tratores de esteira", "Escavadeiras", "Perfuratrizes", "Colheitadeiras"].map((name, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
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
    active: "atuacao",
    schema: [breadcrumbSchema([{ name: "Atuação", route: "/atuacao/" }])],
  },
  {
    route: "/contato/",
    output: "contato/index.html",
    title: "Contato, orçamento e RFQ | New Tractor",
    description: "Envie sua RFQ por e-mail com fotos, desenhos e especificações ou fale com a New Tractor por WhatsApp e telefone.",
    body: contatoBody,
    active: "contato",
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
      exposibramEventSchema,
    ],
  },
  {
    route: "/privacidade/",
    output: "privacidade/index.html",
    title: "Privacidade | New Tractor",
    description: "Entenda como o site da New Tractor usa preferências locais, analytics opcional e links para serviços de terceiros.",
    body: privacidadeBody,
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
  <header class="site-header" data-header>
    <div class="shell site-header__inner">
      <a class="brand" href="/" aria-label="Grupo New Tractor — página inicial">
        <img src="/assets/images/logo-new-tractor.png" width="480" height="148" alt="New Tractor">
        <span>Grupo</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle><span></span><span></span><span></span><span class="sr-only">Abrir menu</span></button>
      <nav class="site-nav" id="site-nav" aria-label="Navegação principal">
        <ul class="nav-list">
          ${navLink(page, "inicio", "/", "Início")}
          ${navLink(page, "empresa", "/empresa/", "Empresa")}
          ${navLink(page, "servicos", "/servicos/", "Soluções")}
          ${navLink(page, "equipamentos", "/equipamentos/", "Equipamentos")}
          ${navLink(page, "atuacao", "/atuacao/", "Atuação")}
          ${navLink(page, "contato", "/contato/", "Contato")}
          <li class="nav-rfq"><a href="mailto:${site.email}?subject=RFQ%20%7C%20New%20Tractor" data-analytics="email_rfq_menu">Enviar RFQ</a></li>
        </ul>
      </nav>
      <a class="header-cta" href="mailto:${site.email}?subject=RFQ%20%7C%20New%20Tractor" data-analytics="email_rfq_header">Enviar RFQ ${icon("mail")}</a>
    </div>
  </header>`;

const footer = () => `
  <footer class="site-footer">
    <div class="shell footer-grid">
      <div class="footer-brand"><img src="/assets/images/logo-new-tractor.png" width="480" height="148" alt=""><p>Engenharia para avaliar, recuperar e acompanhar componentes críticos de máquinas pesadas.</p></div>
      <div><h2>Soluções</h2><ul><li><a href="/servicos/manutencao-material-rodante/">Material rodante</a></li><li><a href="/servicos/reforma-cacambas-conchas/">Caçambas e conchas</a></li><li><a href="/servicos/monitoramento-material-rodante/">Monitoramento de desgaste</a></li><li><a href="/equipamentos/">Equipamentos e componentes</a></li></ul></div>
      <div><h2>Contato</h2><address><a href="${site.phoneHref}">${site.phoneDisplay}</a><a href="mailto:${site.email}">${site.email}</a><a href="${site.map}" target="_blank" rel="noopener noreferrer">${site.address}</a></address></div>
      <div><h2>Institucional</h2><ul><li><a href="/empresa/">Empresa</a></li><li><a href="/atuacao/">Atuação nacional</a></li><li><a href="${exposibram.route}">EXPOSIBRAM 2026</a></li><li><a href="${site.social.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li></ul></div>
    </div>
    <div class="shell footer-bottom"><p>© <span data-current-year>2026</span> Grupo New Tractor. Todos os direitos reservados.</p><a href="/privacidade/">Privacidade</a><a href="/sitemap.xml">Sitemap</a><a href="/llms.txt">llms.txt</a><a href="/agents.txt">agents.txt</a></div>
  </footer>
  <a class="whatsapp-float" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Solicitar orçamento pelo WhatsApp" data-analytics="whatsapp_flutuante">${icon("phone")}<span>WhatsApp</span></a>
  <aside class="consent" role="region" aria-live="polite" aria-labelledby="consent-title" aria-describedby="consent-copy" data-consent-banner hidden><div><strong id="consent-title">Analytics sob sua escolha</strong><p id="consent-copy">Usamos analytics opcional para entender o desempenho do site. Nenhum script de medição é carregado antes da sua decisão. <a href="/privacidade/">Saiba mais</a>.</p></div><div><button type="button" class="button button--primary button--small" data-consent="accepted">Aceitar analytics</button><button type="button" class="button button--ghost button--small" data-consent="essential">Somente necessário</button></div></aside>`;

export function renderPage(page) {
  const canonical = `${site.origin}${page.route === "/404.html" ? "/404.html" : page.route}`;
  const pageSchema = {
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: page.title,
    description: page.description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.origin}/#website` },
    about: { "@id": `${site.origin}/#organization` },
  };
  const graph = [baseOrganization, baseLocalBusiness, websiteSchema, pageSchema, ...(page.schema ?? [])];
  const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c");
  const preload = page.preload
    ? '<link rel="preload" as="image" href="/assets/images/equipe-1200.webp" imagesrcset="/assets/images/equipe-640.webp 640w, /assets/images/equipe-1200.webp 1200w" imagesizes="100vw" fetchpriority="high">'
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
</head>
<body>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  ${header(page)}
  <main id="conteudo">${page.body}</main>
  ${footer()}
</body>
</html>
`;
}
