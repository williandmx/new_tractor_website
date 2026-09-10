// Escopo comercial declarado pelo proprietário em 08/09/2026.
// Parâmetros de projeto, aceitação e logística são definidos por aplicação.
export const hydraulicRoutes = {
  recovery: "/hidrautractor/recuperacao-cilindros-hidraulicos/",
  manufacture: "/hidrautractor/fabricacao-cilindros-hidraulicos/",
};

const photos = {
  recovery: { name: "hidrau-recuperacao", widths: [640, 1280], width: 1280, height: 720, alt: "Operador e componente cilíndrico em máquina do acervo industrial", caption: "Operador e componente cilíndrico · acervo do grupo" },
  manufacture: { name: "hidrau-fabricacao", widths: [640, 1280], width: 1280, height: 720, alt: "Peça cilíndrica presa em torno, com ferramenta e fluido de corte", caption: "Peça cilíndrica em torno · acervo do grupo" },
};

const mail = (site, subject, fields) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}&amp;body=${encodeURIComponent("Olá, HidrauTractor.\r\n\r\n" + fields.map(field => field + ": ").join("\r\n") + "\r\n\r\nNome e empresa: \r\nTelefone para retorno: ")}`;
const cta = (site, mode) => mail(site, mode === "recovery" ? "Orçamento de recuperação de cilindro hidráulico" : "Orçamento de fabricação de cilindro hidráulico", mode === "recovery" ? ["Máquina, modelo e aplicação", "Cilindro e posição", "Condição observada", "Fotos, código ou desenho disponíveis", "Cidade e prioridade"] : ["Máquina e aplicação", "Desenho, amostra ou especificação", "Pressão de trabalho e carga", "Curso e fixação", "Quantidade", "Cidade e prioridade"]);
const arrow = '<span aria-hidden="true">↗</span>';

const process = (steps, label) => `<ol class="hydraulic-flow" role="list" aria-label="${label}">${steps.map(([title, text], index) => `<li><span class="hydraulic-flow__number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><div><h3>${title}</h3><p>${text}</p></div></li>`).join("")}</ol>`;

const recoverySteps = [
  ["Receber e diagnosticar", "Identificação do cilindro, histórico da falha e avaliação das condições para inspeção e ensaio inicial."],
  ["Desmontar e medir", "Desmontagem controlada, limpeza e inspeção de camisa, haste, pistão, guia, fixações e vedações."],
  ["Definir o reparo", "A condição estrutural e as medidas orientam o que recuperar, substituir e conferir na entrega."],
  ["Recuperar os componentes", "Usinagem, brunimento, recuperação da haste e revestimentos conforme o plano de reparo."],
  ["Montar com novas vedações", "Kit compatível com a geometria, o fluido e a aplicação; limpeza, alinhamento e montagem do conjunto."],
  ["Testar e preparar a entrega", "Ensaios definidos para o cilindro, conferência dos registros, proteção e preparação para transporte."],
];
const manufactureSteps = [
  ["Especificar a aplicação", "Carga, pressão, curso, montagem, fluido, ambiente e configuração formam a entrada do projeto."],
  ["Definir projeto e materiais", "Dimensionamento do conjunto e definição dos materiais, vedações, desenhos e critérios de aceitação."],
  ["Fabricar os componentes", "Usinagem da camisa, haste, pistão, guia, tampas e fixações conforme os desenhos."],
  ["Acabar e conferir", "Acabamento interno, revestimento da haste e soldagem quando prevista, com controle dimensional."],
  ["Limpar e montar", "Preparação das peças, instalação das vedações e montagem com os alinhamentos e torques especificados."],
  ["Ensaiar e identificar", "Testes de aceitação e funcionamento, registros finais, identificação e proteção para expedição."],
];

const equipmentCards = () => `<div class="hydraulic-applications">
  <a href="/equipamentos/escavadeiras/"><span>ESCAVADEIRAS</span><strong>Lança, braço e caçamba</strong>${arrow}</a>
  <a href="/equipamentos/tratores-de-esteira/"><span>TRATORES DE ESTEIRA</span><strong>Lâmina e ripper</strong>${arrow}</a>
  <a href="/equipamentos/pas-carregadeiras/"><span>PÁS CARREGADEIRAS</span><strong>Elevação, inclinação e direção</strong>${arrow}</a>
</div>`;

export function hydraulicLandingSections({ site, picture }) {
  return `<section class="section section--light hydraulic-overview" aria-labelledby="hidraulica-servicos-title"><div class="shell">
    <div class="section-heading section-heading--split"><div><span class="eyebrow">RECUPERAR OU FABRICAR</span><h2 id="hidraulica-servicos-title">Duas soluções.<br>Uma leitura completa do cilindro.</h2></div><p>Da avaliação de um conjunto usado ao projeto de um novo cilindro. Encontre o serviço para o momento da sua operação.</p></div>
    <div class="hydraulic-service-grid">
      <article class="hydraulic-service-card"><a class="hydraulic-service-card__image" href="${hydraulicRoutes.recovery}" aria-label="Conhecer a recuperação de cilindros hidráulicos">${picture({ ...photos.recovery, sizes: "(max-width: 760px) 100vw, 50vw" })}</a><div><span class="eyebrow">01 / CILINDRO EM USO</span><h3>Recuperação de cilindros hidráulicos</h3><p>Diagnóstico, metrologia, recuperação de camisa e haste, novas vedações, montagem e testes. O plano de reparo parte da condição encontrada.</p><a class="text-link" href="${hydraulicRoutes.recovery}">Conhecer a recuperação ${arrow}</a></div></article>
      <article class="hydraulic-service-card"><a class="hydraulic-service-card__image" href="${hydraulicRoutes.manufacture}" aria-label="Conhecer a fabricação de cilindros hidráulicos">${picture({ ...photos.manufacture, sizes: "(max-width: 760px) 100vw, 50vw" })}</a><div><span class="eyebrow">02 / NOVO CILINDRO</span><h3>Fabricação de cilindros hidráulicos</h3><p>Projeto, seleção de materiais, usinagem, acabamento, montagem e ensaios. Geometria e especificação definidas para a aplicação.</p><a class="text-link" href="${hydraulicRoutes.manufacture}">Conhecer a fabricação ${arrow}</a></div></article>
    </div>
  </div></section>
  <section class="section section--dark" aria-labelledby="hidraulica-decisao-title"><div class="shell hydraulic-decision-grid"><div><span class="eyebrow eyebrow--light">A DECISÃO COMEÇA NA CONDIÇÃO</span><h2 id="hidraulica-decisao-title">Vazamento, perda de força ou uma nova aplicação?</h2></div><div class="rich-text"><p>Na manutenção, relate o movimento afetado e o histórico do cilindro. Para um conjunto novo, apresente a carga, o curso, a fixação e as condições de trabalho. A análise define o caminho entre recuperar componentes e fabricar um novo conjunto.</p><p>Com base em Belo Horizonte, atendemos demandas de Minas Gerais e de todo o Brasil, com logística definida por operação.</p><a class="button button--primary" href="${mail(site, "Demanda de cilindro hidráulico — HidrauTractor", ["Recuperação ou fabricação", "Máquina e aplicação", "Condição ou requisito do cilindro", "Desenho, código, amostra ou fotos", "Cidade e prioridade"])}" data-analytics="email_hidrau_decisao">Apresentar minha demanda ${arrow}</a></div></div></section>
  <section class="section section--sand" aria-labelledby="hidraulica-aplicacoes-title"><div class="shell"><div class="section-heading"><span class="eyebrow">CILINDRO E MÁQUINA</span><h2 id="hidraulica-aplicacoes-title">O movimento ajuda a identificar a peça.</h2></div>${equipmentCards()}<p class="section-note">Para outros equipamentos e aplicações, envie modelo, identificação e documentação do componente. <a class="text-link" href="/atuacao/minas-gerais/">Operações em Minas Gerais ${arrow}</a></p></div></section>`;
}

const detailPanels = (panels) => `<div class="hydraulic-details">${panels.map(([title, text]) => `<details><summary>${title}</summary><div class="rich-text">${text}</div></details>`).join("")}</div>`;

// Referências de aplicação verificadas em catálogos oficiais; não representam
// certificação da empresa nem substituem o texto da norma adotada no projeto.
const standards = () => `<details class="hydraulic-standards"><summary>Normas e critérios técnicos de referência</summary><div class="rich-text"><p>O projeto identifica a norma, a edição e os critérios de aceitação aplicáveis ao cilindro. Pressões de ensaio, tempos, materiais, tolerâncias e acabamentos acompanham essa especificação.</p><ul>
  <li><strong><a href="https://www.iso.org/standard/75271.html">ISO 10100</a>:</strong> ensaios de aceitação e funcionamento de cilindros hidráulicos.</li>
  <li><strong><a href="https://www.iso.org/standard/40298.html">ISO 6020-1</a>, <a href="https://www.iso.org/standard/61339.html">ISO 6020-2</a> e <a href="https://www.iso.org/standard/36109.html">ISO 6022</a>:</strong> dimensões de montagem de séries de cilindros; a parte e a configuração são conferidas no projeto.</li>
  <li><strong><a href="https://www.iso.org/standard/44781.html">ISO 4413</a> e <a href="https://www.iso.org/standard/79716.html">ISO 4406</a>:</strong> requisitos de segurança de sistemas hidráulicos e código de contaminação por partículas do fluido.</li>
  <li><strong><a href="https://www.dinmedia.de/en/standard/din-en-10305-4/251709296">DIN EN 10305-4</a>:</strong> tubos de precisão sem costura para sistemas hidráulicos e pneumáticos, quando essa parte corresponder ao produto especificado.</li>
  </ul><p>A referência a uma norma descreve sua aplicação técnica; a documentação e os requisitos contratuais são definidos no escopo.</p></div></details>`;

const entries = [
  {
    mode: "recovery", route: hydraulicRoutes.recovery,
    title: "Recuperação de cilindros hidráulicos em MG | HidrauTractor",
    heading: "Recuperação de cilindros hidráulicos",
    description: "Recuperação de cilindros hidráulicos com diagnóstico, usinagem, brunimento, recuperação de hastes, montagem e testes. HidrauTractor em Belo Horizonte.",
    intro: "Da condição encontrada ao conjunto testado. Recuperamos cilindros hidráulicos com avaliação de camisa, haste, pistão e vedações para definir a intervenção necessária.",
    eyebrow: "HIDRAUTRACTOR / RECUPERAÇÃO", steps: recoverySteps,
    flowTitle: "Da chegada do cilindro à preparação da entrega.",
    flowIntro: "Cada etapa deixa informação para a próxima. As medidas e a condição estrutural orientam a seleção dos processos e dos componentes a substituir.",
    panels: [
      ["Diagnóstico e metrologia", "<p>Inspeção visual, avaliação das condições para ensaio inicial, desmontagem controlada e limpeza. Conferimos diâmetros, ovalização, retilineidade, superfícies de vedação, folgas, roscas, guias e fixações.</p><p>O relato do operador e o histórico complementam as medições. Vazamento, deriva ou perda de força são sinais que orientam a avaliação do cilindro e do circuito.</p>"],
      ["Recuperação de camisa e brunimento", "<p>O acabamento interno precisa ser compatível com a geometria e com as vedações do conjunto. Usinagem interna e brunimento podem integrar o reparo, conforme a condição da camisa e os limites definidos para a peça.</p><p>Quando a camisa exige substituição, a definição considera material, dimensões, fixações e configuração do cilindro. A solução preserva a coerência entre tubo, pistão e elementos de vedação.</p>"],
      ["Recuperação de haste e revestimento", "<p>Verificamos retilineidade, diâmetro, estado do revestimento e superfícies de trabalho. O plano pode envolver endireitamento, usinagem, recuperação do revestimento, cromagem, polimento ou substituição da haste.</p><p>O revestimento e o acabamento são selecionados conforme o material, a região da peça e as condições de trabalho do cilindro.</p>"],
      ["Vedações, montagem e testes", "<p>A recuperação inclui novas vedações e conferência de guias, anéis de desgaste e componentes internos. O kit deve corresponder às dimensões finais, ao fluido e às condições de uso.</p><p>Após limpeza e montagem, os ensaios verificam os critérios definidos para o conjunto: estanqueidade, funcionamento, curso e demais requisitos aplicáveis. Pressão, ciclos e registros de aceitação fazem parte da especificação do serviço.</p>"],
    ],
    fields: [["Máquina e cilindro", "Fabricante, modelo, série, posição e código ou plaqueta."], ["Condição observada", "Vazamento, deriva, lentidão, dano aparente e histórico de intervenção."], ["Documentos e fotos", "Conjunto instalado, identificação, conexões e medidas já disponíveis."], ["Operação e logística", "Cidade, peça instalada ou removida, peso conhecido e prioridade."]],
    faq: [
      ["A recuperação é apenas a troca das vedações?", "A HidrauTractor avalia o conjunto. Camisa, haste, pistão, guia, fixações e vedações entram na inspeção; o plano define as peças e os processos necessários para a condição encontrada."],
      ["Quando fabricar um cilindro novo?", "Quando a integridade, a geometria, a disponibilidade de componentes ou os requisitos da aplicação inviabilizam a recuperação. A avaliação técnica e comercial permite comparar os caminhos."],
      ["Como encaminhar um cilindro de escavadeira ou trator?", "Informe a máquina, a função do cilindro e a cidade. Fotos, código, desenho e histórico ajudam a preparar a avaliação e a logística a partir da base em Belo Horizonte."],
    ],
  },
  {
    mode: "manufacture", route: hydraulicRoutes.manufacture,
    title: "Fabricação de cilindros hidráulicos em MG | HidrauTractor",
    heading: "Fabricação de cilindros hidráulicos",
    description: "Fabricação de cilindros hidráulicos por projeto e aplicação: materiais, usinagem, montagem e ensaios. Solicite orçamento à HidrauTractor em Belo Horizonte.",
    intro: "Um novo cilindro começa pelo trabalho que ele precisa executar. Fabricamos conjuntos com projeto, materiais, geometria e critérios de aceitação definidos para a aplicação.",
    eyebrow: "HIDRAUTRACTOR / FABRICAÇÃO", steps: manufactureSteps,
    flowTitle: "Da especificação ao cilindro identificado.",
    flowIntro: "Carga, pressão, curso e montagem orientam o projeto. O desenho acompanha fabricação, inspeção, montagem e testes até a preparação para entrega.",
    panels: [
      ["Projeto e especificação da aplicação", "<p>O dimensionamento considera força, pressão de trabalho, curso, fixação, fluido, temperatura, ambiente e configuração da máquina. Desenho, amostra e informações da operação ajudam a definir os requisitos.</p><p>Olhais, garfos, flanges, munhões, amortecimento e conexões são especificados para o conjunto. As referências dimensionais aplicáveis são identificadas no projeto.</p>"],
      ["Camisa, haste e seleção de materiais", "<p>Os materiais são selecionados conforme solicitações mecânicas, pressão, ambiente e requisitos do projeto. A fabricação pode partir de tubo com acabamento interno preparado ou incluir a usinagem e o acabamento previstos para a camisa.</p><p>A haste recebe usinagem, tratamentos e revestimento conforme a especificação. Diâmetro, retilineidade, acabamento e espessura de revestimento são critérios definidos por peça.</p>"],
      ["Pistão, guia, tampas e fixações", "<p>Usinamos os componentes conforme desenho: alojamentos de vedações, roscas, faces, portas e fixações. Nas configurações soldadas, o procedimento e a sequência consideram material, geometria e alinhamento.</p><p>Inspeção dimensional e limpeza preparam as peças para a instalação de vedações, guias e raspadores e para a montagem do conjunto.</p>"],
      ["Montagem, ensaios e identificação", "<p>A montagem segue a configuração e os requisitos de alinhamento, lubrificação e torque especificados. O plano de testes define verificação de funcionamento, estanqueidade e demais critérios de aceitação.</p><p>Concluídas as verificações, o cilindro recebe identificação e proteção para expedição. Os dados técnicos e registros de entrega são definidos no escopo contratado.</p>"],
    ],
    fields: [["Trabalho a executar", "Máquina, função, carga, frequência de ciclos e ambiente."], ["Dados do cilindro", "Pressão de trabalho, curso, fixação, conexões e configuração desejada."], ["Referência técnica", "Desenho, amostra ou especificação, fluido e temperatura de operação."], ["Condições do pedido", "Quantidade, requisitos de aceitação, cidade e prioridade."]],
    faq: [
      ["A HidrauTractor fabrica cilindros conforme a aplicação?", "Sim. A fabricação parte do projeto e dos requisitos informados para o cilindro, incluindo carga, pressão, curso, fixação, fluido e condições de trabalho."],
      ["Preciso ter um desenho para pedir orçamento?", "Um desenho ajuda a definir o conjunto. Se ele não estiver disponível, apresente a aplicação, os dados técnicos existentes e uma amostra ou identificação de referência para organizar a análise do projeto."],
      ["Existe uma pressão de teste igual para todos os cilindros?", "A pressão e os demais critérios de ensaio são definidos conforme o projeto, a norma e a especificação aplicáveis. A proposta identifica os requisitos de aceitação do conjunto."],
    ],
  },
];

export function createHydraulicPages({ site, picture, breadcrumbSchema, serviceSchema }) {
  return entries.map(entry => {
    const photo = photos[entry.mode];
    const other = entry.mode === "recovery" ? [hydraulicRoutes.manufacture, "Conhecer a fabricação de um novo cilindro"] : [hydraulicRoutes.recovery, "Conhecer a recuperação de cilindros"];
    const faq = { "@type": "FAQPage", mainEntity: entry.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
    return {
      route: entry.route, output: `${entry.route.slice(1)}index.html`, title: entry.title, description: entry.description,
      active: "hidrautractor", lastModified: "2026-09-08",
      ogImage: `/assets/images/${photo.name}-${photo.width}.webp`, ogImageWidth: photo.width, ogImageHeight: photo.height, ogImageAlt: photo.alt,
      schema: [breadcrumbSchema([{ name: "HidrauTractor", route: "/hidrautractor/" }, { name: entry.heading, route: entry.route }]), { ...serviceSchema(entry.heading, entry.description, entry.route), brand: { "@id": `${site.origin}/hidrautractor/#brand` }, areaServed: [{ "@type": "State", name: "Minas Gerais" }, { "@type": "Country", name: "Brasil" }] }, faq],
      body: `<section class="hydraulic-hero"><div class="shell"><nav class="breadcrumbs" aria-label="Navegação estrutural"><ol><li><a href="/">Início</a></li><li><a href="/hidrautractor/">HidrauTractor</a></li><li><span aria-current="page">${entry.mode === "recovery" ? "Recuperação" : "Fabricação"}</span></li></ol></nav><div class="hydraulic-hero__grid"><div class="hydraulic-hero__copy"><span class="eyebrow eyebrow--light">${entry.eyebrow}</span><h1>${entry.heading}</h1><p>${entry.intro}</p><div class="button-row"><a class="button button--primary" href="${cta(site, entry.mode)}" data-analytics="email_hidrau_${entry.mode}_hero">Solicitar orçamento ${arrow}</a><a class="text-link text-link--light" href="#processo">Ver o processo <span aria-hidden="true">↓</span></a></div><p class="hydraulic-location">Belo Horizonte, Minas Gerais · logística por demanda</p></div><figure class="hydraulic-hero__visual">${picture({ ...photo, eager: true, sizes: "(max-width: 860px) 100vw, 50vw" })}<figcaption>${photo.caption}</figcaption></figure></div></div></section>
      <nav class="hydraulic-section-nav" aria-label="Nesta página"><div class="shell"><a href="#processo">Fluxograma</a><a href="#componentes">Processos e componentes</a><a href="#aplicacoes">Aplicações</a><a href="#orcamento">Orçamento</a></div></nav>
      <section id="processo" class="section section--light" aria-labelledby="fluxo-title"><div class="shell"><div class="section-heading section-heading--split"><div><span class="eyebrow">PROCESSO / ${entry.mode === "recovery" ? "RECUPERAÇÃO" : "FABRICAÇÃO"}</span><h2 id="fluxo-title">${entry.flowTitle}</h2></div><p>${entry.flowIntro}</p></div>${process(entry.steps, `Fluxograma de ${entry.heading.toLowerCase()}`)}${entry.mode === "recovery" ? `<aside class="hydraulic-decision"><span aria-hidden="true">◇</span><div><h3>A recuperação é viável?</h3><p>A integridade e as medidas do conjunto orientam essa decisão. Se a condição ou a nova aplicação exigir outro caminho, avaliamos a fabricação de um novo cilindro.</p></div><a class="text-link" href="${hydraulicRoutes.manufacture}">Ver fabricação ${arrow}</a></aside>` : ""}</div></section>
      <section id="componentes" class="section section--sand" aria-labelledby="detalhes-title"><div class="shell hydraulic-detail-grid"><div><span class="eyebrow">DO COMPONENTE AO CONJUNTO</span><h2 id="detalhes-title">Conheça o que entra em cada etapa.</h2><p>Abra o tema que corresponde à sua necessidade.</p></div>${detailPanels(entry.panels)}</div></section>
      <section id="aplicacoes" class="section section--light" aria-labelledby="aplicacoes-title"><div class="shell"><div class="section-heading"><span class="eyebrow">APLICAÇÃO E CONFIGURAÇÃO</span><h2 id="aplicacoes-title">Qual movimento o cilindro executa?</h2></div>${equipmentCards()}<div class="hydraulic-related"><p>Para cilindros industriais, outros equipamentos e configurações, apresente a aplicação e a documentação disponível. Veja também o <a href="/guias/avaliacao-cilindros-hidraulicos/">guia para identificar o cilindro</a> e os contextos de <a href="/atuacao/minas-gerais/">atuação em Minas Gerais</a>.</p><a class="text-link" href="${other[0]}">${other[1]} ${arrow}</a></div>${standards()}</div></section>
      <section class="section section--sand" aria-labelledby="duvidas-title"><div class="shell faq-layout"><div><span class="eyebrow">DÚVIDAS FREQUENTES</span><h2 id="duvidas-title">Antes de solicitar o orçamento.</h2></div><div class="faq-list">${entry.faq.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div></div></section>
      <section id="orcamento" class="section hydraulic-rfq" aria-labelledby="orcamento-title"><div class="shell"><div class="section-heading section-heading--split"><div><span class="eyebrow eyebrow--dark">FALE COM A HIDRAUTRACTOR</span><h2 id="orcamento-title">Vamos definir o próximo passo do seu cilindro.</h2></div><p>Reúna as informações disponíveis. Nossa equipe avalia o escopo técnico, os requisitos do conjunto e a logística do atendimento.</p></div><dl class="hydraulic-rfq__fields">${entry.fields.map(([title, text]) => `<div><dt>${title}</dt><dd>${text}</dd></div>`).join("")}</dl><div class="button-row"><a class="button button--dark" href="${cta(site, entry.mode)}" data-analytics="email_hidrau_${entry.mode}_rfq">Enviar dados para orçamento ${arrow}</a><a class="button button--outline-dark" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_hidrau_${entry.mode}">Conversar pelo WhatsApp ${arrow}</a><a class="hydraulic-rfq__phone" href="${site.phoneHref}" data-analytics="telefone_hidraulica">${site.phoneDisplay}</a></div><p class="hydraulic-rfq__note">O e-mail abre com um roteiro do pedido. Acrescente fotos ou desenhos antes de enviar. ${site.address}.</p></div></section>`,
    };
  });
}
