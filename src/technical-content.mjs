// Editorial guidance for intake and planning. It does not add unverified offers.
// Business facts and research rationale: docs/source-ledger.md and docs/seo/.
const section = (id, title, content) => `<section class="section section--light" aria-labelledby="${id}"><div class="shell editorial-grid"><div><h2 id="${id}">${title}</h2></div><div class="rich-text">${content}</div></div></section>`;
const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

export const guideLinks = [
  ["Avaliação de máquinas de linha amarela", "/guias/avaliacao-maquinas-linha-amarela/"],
  ["Registro de inspeção de material rodante", "/guias/inspecao-material-rodante/"],
  ["Dados para cotação de peças", "/guias/cotacao-pecas-maquinas-pesadas/"],
];

export function createTechnicalPages({ pageHero, contactBand, breadcrumbSchema, serviceSchema }) {
  const definitions = [
    {
      route: "/guias/",
      title: "Guias de manutenção para máquinas de linha amarela | New Tractor",
      heading: "Informação útil antes da próxima manutenção.",
      description: "Guias para reunir dados de máquinas de linha amarela, registrar a condição do material rodante e preparar solicitações de peças e serviços.",
      intro: "Orientações para manutenção, planejamento e suprimentos organizarem a demanda de tratores de esteira, escavadeiras e componentes pesados.",
      image: "material-rodante", widths: [640, 1200], width: 1200, height: 675,
      imageAlt: "Conjuntos de material rodante na base da New Tractor",
      content: section("escolher-guia", "Comece pela decisão que sua equipe precisa tomar", list([
        `<a href="${guideLinks[0][1]}">${guideLinks[0][0]}</a>: equipamento, aplicação, condição, setor e logística no primeiro contato.`,
        `<a href="${guideLinks[1][1]}">${guideLinks[1][0]}</a>: identificação, fotos e medições que podem ser comparadas ao longo do tempo.`,
        `<a href="${guideLinks[2][1]}">${guideLinks[2][0]}</a>: código, desenho, aplicação e requisitos para avaliar uma peça.`,
      ])) + section("servicos-relacionados", "Do registro à avaliação técnica", `<p>As informações reunidas ajudam a encaminhar a demanda para <a href="/rodantes/">Rodantes</a>, <a href="/hidrautractor/">HidrauTractor</a>, <a href="/usinagem/">Usinagem</a>, <a href="/calderaria/">Calderaria</a>, <a href="/parts/">Parts</a>, <a href="/services/">Services</a> conforme o componente e o escopo. A <a href="/techtractor/">TechTractor</a> apresenta a direção tecnológica do grupo, ainda em evolução. A definição de serviço, capacidade e prazo depende do escopo de cada consulta.</p>`),
    },
    {
      route: "/guias/avaliacao-maquinas-linha-amarela/",
      title: "Avaliação de máquinas de linha amarela: dados úteis | New Tractor",
      heading: "Como solicitar avaliação de máquinas de linha amarela",
      description: "Organize equipamento, componente, condição e local para avaliar demandas de máquinas pesadas na mineração, florestal, agro, construção e locação.",
      intro: "Quando a máquina apresenta desgaste ou uma peça precisa ser avaliada, o primeiro passo é reunir informação que permita entender a demanda e seu impacto na operação.",
      image: "equipe", widths: [640, 1200], width: 1200, height: 675,
      imageAlt: "Equipamentos e veículos de apoio na base da New Tractor em Belo Horizonte",
      content: section("identificacao", "Máquina, componente e condição no mesmo registro", list([
        "Informe tipo de equipamento, fabricante, modelo, número de série disponível e identificação da frota.",
        "Identifique o componente: conjunto de esteiras, rolete, sapata, roda-guia, caçamba, estrutura ou outra peça a avaliar.",
        "Descreva o que foi observado, quando apareceu e se a condição mudou. Inclua fotos de contexto e de detalhe, sem expor pessoas ou informações desnecessárias.",
        "Informe horímetro e intervenções anteriores, quando conhecidos. Diferencie registro disponível de informação ainda não confirmada.",
      ])) + section("contexto-setorial", "O setor ajuda a explicar como a máquina trabalha", `<p>O nome do setor não substitui os dados da máquina. Para uma consulta de manutenção, acrescente o contexto que se aplica à sua operação:</p>
        <h3>Mineração</h3><p>Informe frente de trabalho, material movimentado, regime de uso e condições de acesso. Relacione a demanda à janela de parada pretendida e aos requisitos de entrada na operação.</p>
        <h3>Florestal</h3><p>Identifique a máquina e o componente envolvidos, o uso em manejo, carregamento ou apoio e o local da operação. A aplicação florestal, por si só, não confirma compatibilidade de peças ou de atendimento.</p>
        <h3>Agronegócio</h3><p>Diferencie trator de esteira, trator agrícola, colheitadeira e equipamento de apoio. Informe aplicação e período desejado para intervenção; cada configuração exige identificação própria.</p>
        <h3>Construção civil e terraplenagem</h3><p>Registre a tarefa executada, a condição do componente e a localização da obra. Explique restrições de transporte, acesso e horário que precisam entrar na avaliação.</p>
        <h3>Locadoras de máquinas</h3><p>Associe o registro ao patrimônio, ao equipamento e ao período de uso. Informe se a demanda surgiu na devolução, entre contratos ou durante a operação, preservando o histórico de cada máquina.</p>
        <p>Esses contextos orientam a consulta. O atendimento de cada equipamento e componente é confirmado pela análise técnica, comercial e logística.</p>`) + section("encaminhamento", "Escolha a especialidade pelo componente", `<p>Para conjuntos de esteiras, consulte <a href="/servicos/manutencao-material-rodante/">manutenção de material rodante</a>. Para trincas, deformações e desgaste em caçambas, veja <a href="/servicos/reforma-cacambas-conchas/">reforma de caçambas e conchas</a>. Para uma peça que exige recuperação de geometria, conheça <a href="/servicos/usinagem-componentes-maquinas-pesadas/">usinagem de componentes pesados</a>.</p><p>Demandas hidráulicas podem ser encaminhadas para avaliação da <a href="/hidrautractor/">HidrauTractor</a> com identificação e condição do componente. Solicitações de peças seguem para <a href="/parts/">Parts</a> com código, desenho ou especificação. Quando a consulta envolve medições na operação, informe local e objetivo para a <a href="/services/">Services</a>.</p>`) + section("prioridade-logistica", "Máquina parada: informe a prioridade com precisão", `<p>Explique se a máquina está parada, operando com restrição ou aguardando uma intervenção programada. Informe cidade, componente disponível para envio, dimensões e peso conhecidos, além da data desejada.</p><p>A base da New Tractor fica em Belo Horizonte. Coleta, transporte, mobilização e prazo são avaliados por demanda; o contato inicial não confirma deslocamento ou reparo no pátio. A decisão sobre segurança e liberação da máquina cabe aos responsáveis pela operação e manutenção.</p>`),
    },
    {
      route: "/guias/inspecao-material-rodante/",
      title: "Inspeção de material rodante: como organizar registros | New Tractor",
      heading: "Um registro útil para a inspeção de material rodante",
      description: "Veja quais dados organizar no registro de material rodante: equipamento, lado, componente, fotos, medições, referência e histórico de manutenção.",
      intro: "Uma medição isolada perde contexto quando não se sabe a qual máquina, componente ou ponto ela pertence. O registro organizado ajuda a equipe de manutenção a comparar a condição ao longo do tempo.",
      image: "medicao-rolete", widths: [640], width: 640, height: 427,
      imageAlt: "Medição dimensional em rolete de material rodante",
      content: section("registro-minimo", "O que identificar em cada inspeção", list([
        "Equipamento, fabricante, modelo, número de série disponível e identificação da frota.",
        "Data, horímetro disponível, local e responsável pelo registro.",
        "Lado da máquina e identificação do componente: rosário, sapata, rolete, roda-guia ou truck.",
        "Ponto medido, unidade, instrumento utilizado e referência técnica aplicável, quando houver medição.",
        "Fotos de localização e detalhe, condição observada e intervenções anteriores conhecidas.",
      ])) + section("comparacao", "Como preparar o histórico para comparação", `<p>Mantenha a identificação do componente e do ponto de medição entre os registros. Guarde a unidade, a referência e o contexto de uso junto das medidas. Quando houver troca de componente ou alteração do método, registre o evento para que a comparação não misture condições diferentes.</p><p>Não atribua um percentual universal de desgaste nem uma vida útil restante apenas a partir de uma foto. Limites, referências dimensionais e interpretação dependem do conjunto e da documentação aplicável. A inspeção deve seguir os procedimentos de segurança e as orientações do fabricante.</p>`) + section("decisao", "Registro, acompanhamento e manutenção têm papéis distintos", `<p>O <a href="/servicos/monitoramento-material-rodante/">monitoramento de material rodante</a> reúne medições e contexto com a manutenção do cliente. A <a href="/servicos/manutencao-material-rodante/">avaliação para recuperação</a> define o escopo compatível com a condição encontrada. O registro não é, sozinho, uma liberação para continuar operando.</p><p>Demandas de medição em campo podem ser encaminhadas para avaliação da <a href="/services/">Services</a>, conforme escopo e logística de cada operação. O <a href="/techtractor/">TechTractor</a> é a frente tecnológica em evolução para organizar inspeções e histórico; sua apresentação não implica disponibilidade de uma plataforma comercial.</p>`),
    },
    {
      route: "/guias/cotacao-pecas-maquinas-pesadas/",
      title: "Cotação de peças para máquinas pesadas: dados úteis | New Tractor",
      heading: "Como preparar a cotação de uma peça para máquina pesada",
      description: "Reúna código, desenho, modelo, aplicação e quantidade para consultar peças de máquinas pesadas e diferenciar peça nova de recuperação de componente.",
      intro: "Código e aplicação ajudam a reduzir ambiguidades entre peças visualmente parecidas. Uma solicitação clara aproxima suprimentos, manutenção e avaliação técnica.",
      image: "componentes-industriais", widths: [640, 1200, 1600], width: 1600, height: 1070,
      imageAlt: "Componentes industriais organizados no acervo da New Tractor",
      content: section("dados-peca", "Código, desenho e aplicação", list([
        "Descrição da peça e código legível, quando disponível; não confundir o código do conjunto com o de um componente individual.",
        "Fabricante, modelo, série disponível e aplicação da máquina: trator de esteira, escavadeira ou outro equipamento identificado.",
        "Desenho e revisão, especificação, fotos e amostra disponível. Indique o que é documento de referência e o que é medida preliminar.",
        "Quantidade, condição solicitada, material e requisitos documentais conhecidos.",
        "Destino, contato para dúvidas técnicas e prazo desejado para avaliação comercial.",
      ])) + section("nova-ou-recuperacao", "Peça nova ou recuperação da peça existente?", `<p>Se a necessidade é uma peça nova, encaminhe a identificação e os requisitos para <a href="/parts/">New Tractor Parts</a>. Compatibilidade, possibilidade de fabricação ou fornecimento, disponibilidade e prazo precisam ser confirmados para a solicitação.</p><p>Se existe uma peça desgastada a recuperar, apresente a condição para <a href="/servicos/usinagem-componentes-maquinas-pesadas/">Usinagem</a>, <a href="/calderaria/">Calderaria</a> ou <a href="/rodantes/">Rodantes</a>, conforme o componente. Recuperar uma geometria e fabricar uma peça nova são escopos distintos.</p>`) + section("sem-codigo", "O que enviar quando não há código?", `<p>Envie fotos do conjunto e da peça, sua posição na máquina, modelo do equipamento e medidas disponíveis identificadas como preliminares. Informe se existe amostra ou desenho. Esses dados iniciam a conversa; uma fotografia não confirma material, tolerância ou compatibilidade.</p><p>Na comparação de propostas, verifique se quantidade, condição da peça, documentação, transporte e escopo são equivalentes. Não trate o prazo desejado na consulta como prazo confirmado de entrega.</p>`),
    },
    {
      route: "/servicos/usinagem-componentes-maquinas-pesadas/",
      title: "Usinagem de componentes de máquinas pesadas em BH | New Tractor",
      heading: "Usinagem para recuperação de componentes de máquinas pesadas",
      description: "Recuperação dimensional de componentes pesados em Belo Horizonte, com torno, mandrilhadora e centro de usinagem conforme peça, material e aplicação.",
      intro: "A recuperação dimensional parte da condição da peça e da função que ela precisa cumprir no conjunto. A New Tractor Usinagem avalia componente, material, geometria e aplicação antes de definir o processo.",
      image: "componentes-industriais", widths: [640, 1200, 1600], width: 1600, height: 1070,
      imageAlt: "Componentes pesados no acervo industrial da New Tractor",
      service: true,
      content: section("processos", "Torno, mandrilhadora e centro de usinagem", `<p>Os processos divulgados pela New Tractor incluem torno, mandrilhadora e centro de usinagem para recuperação dimensional de componentes pesados. A sequência é definida a partir da peça ou do desenho, do material e do escopo técnico.</p><p>Desgaste e condição dos alojamentos, superfícies e dimensões precisam ser descritos com a função do componente. Capacidade, tolerância, dimensões, materiais e prazo são validados por peça; não há uma capacidade universal aplicável a toda máquina de linha amarela.</p>`) + section("avaliacao-usinagem", "Dados que tornam a avaliação objetiva", list([
        "Identificação da peça, equipamento, aplicação e condição observada.",
        "Desenho, código, revisão ou amostra disponível, com requisitos dimensionais conhecidos.",
        "Material informado e histórico de intervenções, quando documentados.",
        "Quantidade, dimensões e peso disponíveis, cidade de origem e restrições de transporte.",
      ])) + section("recuperacao-integrada", "Quando a demanda envolve outros processos", `<p>Se o componente apresenta trincas, deformação ou demanda de solda, a avaliação pode envolver a <a href="/calderaria/">Calderaria</a>. Para rosários, sapatas, roletes, rodas-guia e trucks, o caminho começa pela <a href="/servicos/manutencao-material-rodante/">manutenção de material rodante</a>.</p><p>A necessidade de uma peça nova deve ser identificada separadamente e encaminhada para <a href="/parts/">Parts</a>. O <a href="/guias/cotacao-pecas-maquinas-pesadas/">guia de cotação de peças</a> ajuda a organizar código, desenho e requisitos.</p>`) + section("base-usinagem", "Base em Belo Horizonte, logística avaliada por demanda", `<p>A estrutura industrial da New Tractor fica em Belo Horizonte, Minas Gerais. Para operações em outras localidades, envio, coleta, mobilização e prazo são avaliados na proposta técnica e comercial. Informe a cidade desde o primeiro contato.</p><p>Conheça a <a href="/usinagem/">New Tractor Usinagem</a> e envie os dados da peça para avaliar o próximo passo.</p>`),
    },
  ];
  return definitions.map((entry) => {
    const parent = entry.service ? { name: "Serviços", route: "/servicos/" } : { name: "Guias", route: "/guias/" };
    const crumbs = entry.route === "/guias/" ? [parent] : [parent, { name: entry.heading, route: entry.route }];
    return {
      route: entry.route,
      output: `${entry.route.slice(1)}index.html`,
      title: entry.title, description: entry.description,
      active: entry.service ? "servicos" : "guias", lastModified: "2026-09-07",
      schema: [breadcrumbSchema(crumbs), ...(entry.service ? [serviceSchema(entry.heading, entry.description, entry.route)] : [])],
      body: pageHero({ eyebrow: entry.service ? "USINAGEM" : "GUIAS PARA MANUTENÇÃO", title: entry.heading, intro: entry.intro,
        breadcrumb: crumbs.map((item) => ({ label: item.name, href: item.route })), image: entry.image, imageAlt: entry.imageAlt,
        imageWidths: entry.widths, imageWidth: entry.width, imageHeight: entry.height }) + entry.content + contactBand("Envie o contexto da máquina e do componente"),
    };
  });
}
