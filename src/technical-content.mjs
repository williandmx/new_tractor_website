// Editorial guidance for intake and planning. It does not add unverified offers.
// Business facts and research rationale: docs/source-ledger.md and docs/seo/.
const section = (id, title, content) => `<section class="section section--light" aria-labelledby="${id}"><div class="shell editorial-grid"><div><h2 id="${id}">${title}</h2></div><div class="rich-text">${content}</div></div></section>`;
const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

export const guideLinks = [
  ["Avaliação de máquinas de linha amarela", "/guias/avaliacao-maquinas-linha-amarela/"],
  ["Registro de inspeção de material rodante", "/guias/inspecao-material-rodante/"],
  ["Dados para cotação de peças", "/guias/cotacao-pecas-maquinas-pesadas/"],
  ["Avaliação de cilindros hidráulicos", "/guias/avaliacao-cilindros-hidraulicos/"],
  ["Avaliação de caçambas e conchas", "/guias/avaliacao-cacambas-conchas/"],
];

export function createTechnicalPages({ pageHero, contactBand, breadcrumbSchema, serviceSchema, site }) {
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
        `<a href="${guideLinks[3][1]}">${guideLinks[3][0]}</a>: identificação, sintomas, aplicação e perguntas para organizar a conversa sobre o cilindro.`,
        `<a href="${guideLinks[4][1]}">${guideLinks[4][0]}</a>: tipo de equipamento, condição, peça, documentação e logística da caçamba ou concha.`,
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
      route: "/guias/avaliacao-cilindros-hidraulicos/",
      title: "Avaliação de cilindros hidráulicos para máquinas pesadas | New Tractor",
      heading: "Como preparar a avaliação de um cilindro hidráulico",
      description: "Organize identificação, sintomas, aplicação, fotos e logística para avaliar um cilindro hidráulico de máquina pesada.",
      intro: "A avaliação começa com a identificação do conjunto e do comportamento observado. Dados de operação ajudam a separar uma dúvida de componente de uma decisão de manutenção.",
      image: "componentes-industriais", widths: [640, 1200, 1600], width: 1600, height: 1070,
      imageAlt: "Componentes hidráulicos e industriais no acervo da New Tractor",
      article: true, lastModified: "2026-09-08",
      content: section("identificar-cilindro", "Comece pela identificação do conjunto", list([
        "Informe máquina, fabricante, modelo, número de série disponível e identificação da frota.",
        "Indique a função e a posição do cilindro, como elevação, braço, caçamba, direção ou outro circuito identificado.",
        "Registre código, placa e marcações legíveis; envie fotos do conjunto instalado e da identificação, sem desmontar para a consulta.",
        "Anote dimensões, conexões, curso aparente, condição de haste, tubo e pontos de fixação como observações preliminares.",
      ])) + section("sinais-cilindro", "Registre o sintoma sem fechar um diagnóstico", `<p>Descreva vazamento percebido, risco ou corrosão na haste, movimento lento, perda de força, folga, ruído ou dificuldade para manter a posição. Informe se o sinal aparece a frio ou a quente, com carga ou sem carga, em qual movimento e desde quando.</p><p>Fotos ajudam a dar contexto, mas não substituem a inspeção e os testes apropriados. Histórico de troca, intervenção, fluido e condição de uso deve ser identificado como informação disponível ou ainda não confirmada.</p>`) + section("aplicacao-cilindro", "A aplicação muda o contexto da avaliação", `<p>Na mineração, relacione o cilindro à escavadeira, trator ou perfuratriz e à frente de trabalho. No setor florestal, informe se está em equipamento de manejo, carregamento ou apoio. No agronegócio, diferencie trator, colheitadeira e implemento. Em construção e terraplenagem, registre obra, tarefa e acesso. Em locadoras, associe o componente ao patrimônio e ao momento de devolução ou manutenção.</p><p>Esses contextos organizam a conversa; não confirmam compatibilidade, causa ou escopo de recuperação.</p>`) + section("peca-ou-conjunto", "Peça isolada ou cilindro completo?", `<p>Esclareça se a consulta é sobre o cilindro completo ou sobre haste, tubo, tampa, êmbolo, olhais, conexões e elementos de vedação. Envie código, desenho, amostra ou fotos que diferenciem o conjunto e suas partes.</p><p>A avaliação pode ser encaminhada para a <a href="/hidrautractor/">HidrauTractor</a> quando a demanda for compatível com a frente divulgada. Para peça nova, consulte <a href="/parts/">Parts</a>; outros componentes podem seguir para <a href="/usinagem/">Usinagem</a> ou <a href="/calderaria/">Calderaria</a>. Fabricação, recuperação, testes e disponibilidade precisam ser confirmados em cada consulta.</p>`) + section("perguntas-recuperacao", "Perguntas para avaliar uma recuperação", list([
        "O cilindro está instalado ou foi removido? Qual máquina e aplicação ele atende?",
        "Quais sintomas foram observados, em que condições e com que frequência?",
        "Há fotos, código, desenho, medidas preliminares e histórico de intervenções?",
        "A demanda considera recuperação do conjunto, avaliação de uma peça ou consulta de peça nova?",
        "Onde está o componente, qual é o peso e a dimensão conhecida, e qual é a prioridade da operação?",
      ])) + section("seguranca-cilindro", "Segurança antes de qualquer avaliação", `<p>Não apoie uma carga em um cilindro, entre em área de articulação ou desconecte componente pressurizado para produzir fotos ou medidas. Isole e sustente o equipamento conforme o procedimento do fabricante e da operação, e envolva profissional qualificado. Na dúvida, interrompa a atividade e siga as regras de segurança do local.</p>`),
    },
    {
      route: "/guias/avaliacao-cacambas-conchas/",
      title: "Avaliação de caçambas e conchas de máquinas pesadas | New Tractor",
      heading: "Como preparar a avaliação de uma caçamba ou concha",
      description: "Separe escavadeira, carregadeira e caçamba de caminhão para organizar condição, peça, documentação e logística da avaliação.",
      intro: "O nome do implemento muda conforme o equipamento e a aplicação. Identificação, fotos e contexto ajudam a encaminhar uma caçamba ou concha sem misturar escopos.",
      image: "concha-patio", widths: [640, 1200], width: 1200, height: 612,
      imageAlt: "Caçamba de máquina pesada em pátio industrial",
      article: true, lastModified: "2026-09-08",
      content: section("separar-equipamentos", "Separe o tipo de equipamento", `<p>Esclareça se o componente pertence a uma <strong>escavadeira</strong>, a uma <strong>pá carregadeira</strong> ou a uma <strong>caçamba de caminhão</strong>. Informe fabricante, modelo, largura, capacidade declarada pelo fabricante quando disponível, tipo de fixação, implemento e tarefa. Uma caçamba de caminhão e uma concha de escavadeira podem ter nomes parecidos, mas exigem avaliação e logística diferentes.</p>`) + section("identificacao-cacamba", "Identificação e condição do componente", list([
        "Envie fotos do conjunto inteiro e de piso, laterais, bordas, dentes, adaptadores, pinos, soldas e pontos de fixação.",
        "Indique folga, trinca, deformação, desgaste ou alteração de encaixe como observação, sem concluir a causa por foto.",
        "Informe código, desenho, dimensões preliminares, material conhecido, amostra e histórico de reparos, quando existirem.",
        "Diferencie o que está instalado do que foi removido e identifique lado, posição e equipamento correspondente.",
      ])) + section("aplicacao-cacamba", "A aplicação orienta as perguntas", `<p>Relacione o componente à fase da operação: escavação e carregamento em mineração ou terraplenagem, apoio e abertura de acessos no setor florestal, movimentação de insumos no agronegócio ou uso contratado em uma locadora. Material movimentado, solo, abrasão, carga, frequência e janela de parada são contexto para a análise, não um diagnóstico remoto.</p>`) + section("documentacao-logistica-cacamba", "Documentação e logística", list([
        "Máquina, fabricante, modelo, série disponível, patrimônio e cidade da operação.",
        "Fotos com contexto, código ou desenho, quantidade e objetivo: avaliar, recuperar ou consultar peça.",
        "Peso e dimensões conhecidos, ponto de coleta ou envio, acesso ao equipamento e restrições de transporte.",
        "Prioridade, contato para dúvidas técnicas e histórico de intervenções que possa ser documentado.",
      ])) + section("encaminhar-cacamba", "Encaminhe pelo escopo confirmado", `<p>A <a href="/servicos/reforma-cacambas-conchas/">reforma de caçambas e conchas</a> é uma rota existente para iniciar a conversa sobre condição e escopo. Conforme a peça e a necessidade, a consulta pode envolver <a href="/calderaria/">Calderaria</a>, <a href="/usinagem/">Usinagem</a>, <a href="/parts/">Parts</a> ou <a href="/services/">Services</a>. Possibilidade de recuperação, fabricação, transporte e prazo depende da avaliação de cada componente.</p><p>A base do Grupo fica em Belo Horizonte. Para outras localidades, logística e mobilização são analisadas por demanda; a rota não afirma filial, equipe residente ou prazo local.</p>`) + section("seguranca-cacamba", "Segurança durante a preparação", `<p>Não permaneça sob implemento elevado nem na área de articulação, queda ou movimento inesperado. Não remova pinos, dentes ou componentes sem bloqueio, apoio e procedimento aplicável. A preparação de fotos e medidas deve ser feita por equipe habilitada, seguindo as orientações do fabricante e as regras de segurança da operação.</p>`),
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
      active: entry.service ? "servicos" : "guias", lastModified: entry.lastModified ?? (entry.service ? "2026-09-07" : "2026-09-08"),
      schema: [breadcrumbSchema(crumbs), ...(entry.service ? [serviceSchema(entry.heading, entry.description, entry.route)] : []), ...(!entry.service && entry.route !== "/guias/" && site?.origin ? [{
        "@type": "Article",
        "@id": `${site.origin}${entry.route}#article`,
        headline: entry.title,
        description: entry.description,
        dateModified: entry.lastModified ?? "2026-09-08",
        inLanguage: "pt-BR",
        mainEntityOfPage: { "@id": `${site.origin}${entry.route}#webpage` },
        author: { "@type": "Organization", name: "Grupo New Tractor", url: `${site.origin}/empresa/` },
        publisher: { "@id": `${site.origin}/#organization` },
        image: `${site.origin}/assets/images/${entry.image}-${entry.width}.webp`,
      }] : [])],
      body: pageHero({ eyebrow: entry.service ? "USINAGEM" : "GUIAS PARA MANUTENÇÃO", title: entry.heading, intro: entry.intro,
        breadcrumb: crumbs.map((item) => ({ label: item.name, href: item.route })), image: entry.image, imageAlt: entry.imageAlt,
        imageWidths: entry.widths, imageWidth: entry.width, imageHeight: entry.height }) + (!entry.service && entry.route !== "/guias/" ? `<div class="shell article-credit"><p>Conteúdo editorial do Grupo New Tractor · Atualizado em 8 de setembro de 2026</p></div>` : "") + entry.content + contactBand("Envie o contexto da máquina e do componente"),
    };
  });
}
