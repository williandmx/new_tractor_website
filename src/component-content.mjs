// Referências funcionais consultadas em 2026-09-08:
// - Minusa, “Rodas-guia”: https://www.minusa.com.br/produto/rodas-guia
//   descreve a roda-guia como parte do alinhamento da esteira em máquinas de esteira.
// - Minusa, “Roletes para tratores de esteira”: https://www.minusa.com.br/roletes-para-tratores-de-esteira
//   diferencia a função de roletes superiores e inferiores no conjunto.
// - ITR South America, “Kit de medição de material rodante”: https://www.itrsa.com.br/site/kit-de-medicao-de-material-rodante-itr/
//   relaciona pontos de medição de elos, buchas, roletes, sapatas e rodas-guia.
// - ITR South America, “Sapatas de esteira”: https://www.itrsa.com.br/site/sapatas-de-esteira/
//   explica a relação das sapatas com elos, pinos, buchas e os demais componentes.
// As fontes orientam a explicação funcional; não são prova de oferta, capacidade,
// compatibilidade ou prazo do Grupo New Tractor.

const section = (id, title, content) =>
  `<section class="section section--light" aria-labelledby="${id}"><div class="shell editorial-grid"><div><h2 id="${id}">${title}</h2></div><div class="rich-text">${content}</div></div></section>`;

const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

const mailCta = (site, subject, label) => {
  if (!site?.email) return `<a class="text-link" href="/contato/">${label}</a>`;
  return `<a class="text-link" href="mailto:${site.email}?subject=${encodeURIComponent(subject)}">${label}</a>`;
};

export const componentLinks = [
  ["Componentes de material rodante", "/componentes/"],
  ["Rodas-guia", "/componentes/rodas-guia/"],
  ["Roletes de esteira", "/componentes/roletes-de-esteira/"],
  ["Correntes e sapatas de esteiras", "/componentes/correntes-sapatas-esteiras/"],
  ["Folgas, pinos, buchas e alojamentos", "/guias/folgas-pinos-buchas-alojamentos/"],
];

const componentHubLinks = list([
  `<a href="${componentLinks[1][1]}">${componentLinks[1][0]}</a>: leitura do alinhamento, do contato e do conjunto que conduz a esteira.`,
  `<a href="${componentLinks[2][1]}">${componentLinks[2][0]}</a>: posição, função e sinais observados em roletes superiores e inferiores.`,
  `<a href="${componentLinks[3][1]}">${componentLinks[3][0]}</a>: relação entre elos, pinos, buchas e sapatas na aplicação da máquina.`,
  `<a href="${componentLinks[4][1]}">${componentLinks[4][0]}</a>: roteiro para separar folga percebida, componente articulado e alojamento.`,
]);

const articleSchema = (site, entry) => ({
  "@type": "Article",
  "@id": `${site.origin}${entry.route}#article`,
  headline: entry.title,
  description: entry.description,
  datePublished: entry.lastModified,
  dateModified: entry.lastModified,
  inLanguage: "pt-BR",
  mainEntityOfPage: { "@id": `${site.origin}${entry.route}#webpage` },
  author: { "@type": "Organization", name: "Grupo New Tractor", url: `${site.origin}/empresa/` },
  publisher: { "@id": `${site.origin}/#organization` },
  image: `${site.origin}/assets/images/${entry.image}-${entry.width}.webp`,
});

const entries = [
  {
    route: "/componentes/",
    title: "Componentes de material rodante para máquinas pesadas | New Tractor",
    heading: "O componente certo começa pela leitura do conjunto",
    description:
      "Organize a avaliação de rodas-guia, roletes, correntes, sapatas, pinos, buchas e alojamentos de máquinas de esteira.",
    intro:
      "Em escavadeiras e tratores de esteira, cada componente participa de um conjunto. A identificação da máquina, do uso e do sinal observado dá contexto para decidir entre avaliar, recuperar ou consultar uma peça nova.",
    image: "material-rodante",
    widths: [640, 1200],
    width: 1200,
    height: 675,
    imageAlt: "Conjuntos de material rodante na base da New Tractor",
    about: "Componentes de material rodante",
    active: "servicos",
    eyebrow: "COMPONENTES DE MATERIAL RODANTE",
    contactTitle: "Apresente o componente e a aplicação",
    content: (site) =>
      section(
        "mapa-componentes",
        "Um conjunto, várias decisões",
        `<p>Correntes, elos, pinos, buchas, sapatas, roletes, rodas-guia e demais itens trabalham relacionados na esteira. O componente visível nem sempre explica sozinho a condição do conjunto: a máquina, a posição, o solo, a carga e o histórico também importam.</p><p>As páginas abaixo ajudam a nomear o que foi observado e a preparar uma conversa objetiva. Elas não substituem o critério do fabricante da máquina nem uma avaliação técnica.</p>${componentHubLinks}`,
      ) +
      section(
        "caminhos-componentes",
        "A pergunta muda o encaminhamento",
        `<p>Quando a dúvida é sobre condição e recondicionamento do conjunto, comece pela <a href="/servicos/manutencao-material-rodante/">manutenção de material rodante</a>. Para acompanhar medições e histórico, veja o <a href="/servicos/monitoramento-material-rodante/">monitoramento de material rodante</a>. Se a necessidade é uma peça nova identificada por código, desenho ou especificação, encaminhe a consulta para <a href="/parts/">Parts</a>.</p><p>Uma peça existente com demanda de geometria ou dimensão pode ser avaliada pela <a href="/usinagem/">Usinagem</a>, para análise da peça e definição do processo em torno, mandrilhadora ou centro de usinagem na estrutura industrial em Belo Horizonte.</p><p>Para uma visão do escopo industrial, conheça também <a href="/rodantes/">New Tractor Rodantes</a> e os <a href="/guias/inspecao-material-rodante/">registros de inspeção</a>.</p>`,
      ) +
      section(
        "dados-componentes",
        "O que reunir antes da conversa",
        list([
          "Fabricante, modelo, número de série disponível e identificação da frota da escavadeira ou do trator de esteira.",
          "Componente, lado, posição e quantidade; descreva se está instalado, removido ou separado para avaliação.",
          "Fotos de contexto e detalhe, além de medidas preliminares com unidade, ponto medido e instrumento utilizado.",
          "Aplicação, tipo de solo, carga, inclinação, horímetro disponível e histórico de troca ou intervenção, quando documentados.",
          "Cidade, acesso, possibilidade de envio do componente e prioridade operacional para orientar a avaliação logística.",
        ]),
      ) +
      section(
        "proximo-passo-componentes",
        "Uma consulta começa com dados verificáveis",
        `<p>Compare a observação com a documentação aplicável ao equipamento e registre as referências disponíveis. A decisão de recuperar ou trocar depende da condição, da medida de referência e do escopo aprovado.</p><p>${mailCta(site, "Avaliação de componente de material rodante", "Enviar dados do componente para avaliação")}</p>`,
      ),
  },
  {
    route: "/componentes/rodas-guia/",
    title: "Recuperação de rodas-guia para máquinas de esteira | New Tractor",
    heading: "Roda-guia: alinhamento começa no conjunto",
    description:
      "Organize sinais, aplicação e dados para avaliar rodas-guia de escavadeiras e tratores de esteira.",
    intro:
      "A roda-guia participa do alinhamento da esteira durante o deslocamento. Para entender a condição, é preciso relacionar o componente ao lado da máquina, à tensão observada e aos itens que trabalham ao seu redor.",
    image: "roda-guia",
    widths: [640],
    width: 640,
    height: 427,
    imageAlt: "Rodas-guia para sistema de esteiras na New Tractor",
    about: "Rodas-guia de máquinas de esteira",
    active: "servicos",
    eyebrow: "RODAS-GUIA",
    contactTitle: "Converse sobre a condição da roda-guia",
    content: (site) =>
      section(
        "funcao-roda-guia",
        "O papel da roda-guia no deslocamento",
        `<p>Em uma máquina de esteira, a roda-guia ajuda a manter o conjunto alinhado e participa da distribuição da tensão da corrente. A leitura precisa considerar o conjunto completo: corrente e elos, sapatas, roletes, roda motriz e o ajuste observado no equipamento.</p><p>Em escavadeiras e tratores de esteira usados na mineração, no setor florestal e em obras, informe o terreno, a tarefa e a condição de trabalho para contextualizar a avaliação.</p>`,
      ) +
      section(
        "sinais-roda-guia",
        "Sinais para registrar sem fechar diagnóstico",
        list([
          "A esteira tende a sair do alinhamento, puxa para um lado ou deixa marcas laterais diferentes entre os lados.",
          "Há contato irregular, marca de impacto, desgaste visível ou alteração na posição da roda-guia em relação ao conjunto.",
          "A tensão percebida mudou, ou o comportamento apareceu depois de uma intervenção, troca ou mudança de aplicação.",
          "Ruído, vibração ou aquecimento foram observados; anote quando aparecem, em qual movimento e em que condição de carga.",
        ]),
      ) +
      section(
        "avaliar-roda-guia",
        "Roda-guia isolada ou conjunto em avaliação?",
        `<p>Na recuperação de roda-guia, a New Tractor avalia a pista desgastada para definir soldagem e usinagem conforme a medida de referência. A decisão depende também da condição dos componentes próximos. Registre corrente, pinos, buchas, sapatas, roletes e roda motriz que possam influenciar a leitura, sem atribuir a causa à distância.</p><p>Para manutenção e recondicionamento do conjunto, consulte <a href="/servicos/manutencao-material-rodante/">manutenção de material rodante</a>. Para reunir medições e histórico, veja o <a href="/servicos/monitoramento-material-rodante/">monitoramento</a>. Se a demanda é uma roda-guia nova identificada por código ou desenho, use <a href="/parts/">Parts</a>; se existe uma peça para recuperação dimensional, apresente-a à <a href="/usinagem/">Usinagem</a>. A compatibilidade e o escopo são avaliados por demanda.</p>`,
      ) +
      section(
        "dados-roda-guia",
        "Dados que evitam uma identificação incompleta",
        list([
          "Escavadeira ou trator de esteira, fabricante, modelo, série disponível, lado e posição no conjunto.",
          "Fotos gerais da esteira e fotos de detalhe da roda-guia, dos pontos de contato e dos componentes adjacentes.",
          "Medidas preliminares identificadas por ponto, unidade e instrumento; não use um valor isolado como limite de troca.",
          "Tipo de solo, inclinação, carga, horímetro, histórico de troca e comportamento observado durante o trabalho.",
          "Cidade, acesso ao equipamento, possibilidade de retirar e enviar a peça e prioridade da operação.",
        ]),
      ) +
      section(
        "contato-roda-guia",
        "Encaminhe a informação disponível",
        `<p>O Grupo New Tractor tem base em Belo Horizonte e avalia atendimento, transporte, mobilização, capacidade e prazo conforme a demanda.</p><p>${mailCta(site, "Avaliação de roda-guia", "Enviar identificação e fotos da roda-guia")}</p><p>Veja também os demais <a href="/componentes/">componentes de material rodante</a> e o <a href="/guias/folgas-pinos-buchas-alojamentos/">guia sobre folgas, pinos, buchas e alojamentos</a>.</p>`,
      ),
  },
  {
    route: "/componentes/roletes-de-esteira/",
    title: "Recuperação de roletes de esteira | New Tractor",
    heading: "Roletes de esteira: suporte, guia e condição",
    description:
      "Prepare a avaliação de roletes superiores e inferiores de escavadeiras e tratores de esteira com dados de posição e aplicação.",
    intro:
      "Roletes ocupam posições diferentes no material rodante e a posição muda a leitura da condição. Identificar o tipo, o lado e os componentes vizinhos ajuda a separar um sinal localizado de uma questão do conjunto.",
    image: "medicao-rolete",
    widths: [640],
    width: 640,
    height: 427,
    imageAlt: "Medição dimensional em rolete de material rodante",
    about: "Roletes de esteira de máquinas pesadas",
    active: "servicos",
    eyebrow: "ROLETES DE ESTEIRA",
    contactTitle: "Apresente a posição e a condição do rolete",
    content: (site) =>
      section(
        "tipos-roletes",
        "Superior e inferior não são a mesma pergunta",
        `<p>O rolete superior apoia o trecho da esteira entre a roda-guia e a roda motriz. Os roletes inferiores recebem o peso do conjunto e ajudam a guiar o movimento da corrente. A quantidade, a posição e a configuração variam conforme a máquina; o modelo e a identificação do componente são indispensáveis.</p><p>Em uma escavadeira ou em um trator de esteira, registre se o rolete é superior ou inferior, em qual lado está e qual é sua posição contando a partir de um ponto reconhecível. Compare a identificação com o catálogo ou desenho aplicável à máquina.</p>`,
      ) +
      section(
        "sinais-roletes",
        "Do ruído observado à informação útil",
        list([
          "Ruído, vibração, aquecimento, vazamento visível ou alteração de movimento: descreva o momento e a condição em que aparecem.",
          "Marca irregular de contato, desgaste diferente entre posições ou diferença percebida entre os lados da máquina.",
          "Mudança depois de uma troca, intervenção, ajuste ou alteração de terreno e carga.",
          "Componente solto, removido ou ainda montado; informe o que foi observado sem concluir a causa por uma fotografia.",
        ]),
      ) +
      section(
        "conjunto-roletes",
        "A condição do rolete dialoga com a esteira",
        `<p>Ao encaminhar um rolete, inclua a condição da corrente, das sapatas, da roda-guia e da roda motriz quando esses dados estiverem disponíveis. A comparação entre posições pode ajudar a equipe a organizar a prioridade, mas não substitui a referência do fabricante nem a análise do conjunto.</p><p>A <a href="/servicos/manutencao-material-rodante/">recuperação de roletes</a> pode envolver preparação, enchimento por processo compatível e usinagem conforme a avaliação e as medidas aplicáveis. A condição observada orienta o que será recuperado e conferido na entrega. O <a href="/servicos/monitoramento-material-rodante/">monitoramento</a> ajuda a estruturar medições e histórico. Para um rolete novo, consulte <a href="/parts/">Parts</a>; para uma peça existente com necessidade dimensional, conheça a <a href="/usinagem/">Usinagem</a>. O processo aplicável depende do componente.</p>`,
      ) +
      section(
        "dados-roletes",
        "O registro que compras e manutenção conseguem conferir",
        list([
          "Fabricante, modelo, série disponível, lado, posição, tipo de rolete e quantidade envolvida.",
          "Fotos de conjunto e detalhe, com marcações legíveis e referência visual da posição na esteira.",
          "Pontos medidos, unidade, instrumento, data e condição de operação; preserve a referência usada na comparação.",
          "Aplicação em escavadeira ou trator de esteira, solo, inclinação, carga, horímetro e histórico conhecido.",
          "Código, desenho ou especificação quando a consulta for por peça nova; cidade, acesso e prioridade para a logística.",
        ]),
      ) +
      section(
        "contato-roletes",
        "Comece com a posição correta",
        `<p>Com base em Belo Horizonte, o Grupo avalia cada demanda técnica, comercial e logística conforme o equipamento e o componente apresentados.</p><p>${mailCta(site, "Avaliação de rolete de esteira", "Enviar dados do rolete")}</p><p>Para uma leitura mais ampla, retorne a <a href="/componentes/">visão dos componentes</a> ou consulte o <a href="/guias/inspecao-material-rodante/">guia de registro de inspeção</a>.</p>`,
      ),
  },
  {
    route: "/componentes/correntes-sapatas-esteiras/",
    title: "Correntes, rosários e sapatas de esteiras | New Tractor",
    heading: "Corrente de esteira, rosário e sapata: avalie o conjunto",
    description:
      "Organize a avaliação de correntes, elos, pinos, buchas e sapatas de escavadeiras e tratores de esteira.",
    intro:
      "A corrente conduz a relação entre os elos e os demais componentes, enquanto a sapata faz o contato com o solo. Aplicação, terreno e condição de cada item precisam aparecer juntos na consulta.",
    image: "rosario",
    widths: [640],
    width: 640,
    height: 427,
    imageAlt: "Conjunto de corrente e elos conhecido como rosário",
    about: "Correntes e sapatas de esteiras",
    active: "servicos",
    eyebrow: "CORRENTES E SAPATAS",
    contactTitle: "Converse sobre corrente, sapata e aplicação",
    content: (site) =>
      section(
        "relacao-corrente-sapata",
        "A articulação e o contato com o solo",
        `<p>As sapatas são fixadas aos elos da corrente e fazem o contato com o terreno, distribuindo o peso e contribuindo para a tração. Pinos, buchas, roletes, rodas-guia e roda motriz completam a relação mecânica do conjunto. Largura, formato e condição devem ser lidos na aplicação da máquina.</p><p>O registro é diferente para uma escavadeira que trabalha em uma frente de escavação e para um trator de esteira usado em preparação de terreno ou apoio. Informe tarefa, solo, inclinação, carga e condição observada; não trate uma medida ou formato como universal.</p>`,
      ) +
      section(
        "sinais-correntes-sapatas",
        "O que registrar antes de decidir",
        list([
          "Desgaste desigual entre os lados, entre posições ou entre sapatas; fotografe o conjunto e o detalhe comparável.",
          "Sapata ausente, quebrada, deformada ou com fixação que merece avaliação pela equipe responsável.",
          "Folga, ruído, alteração de tensão ou comportamento diferente da esteira durante um movimento específico.",
          "Elo, pino, bucha, rolete, roda-guia ou roda motriz que também apresenta condição observável.",
          "Momento do sinal, horímetro, aplicação atual e intervenções anteriores documentadas.",
        ]),
      ) +
      section(
        "nova-recuperacao-correntes",
        "Peça nova ou conjunto em recuperação?",
        `<p>O conjunto de corrente, elos, pinos e buchas também é conhecido como rosário. Na <a href="/servicos/manutencao-material-rodante/">manutenção de material rodante</a>, a avaliação do rosário orienta a troca ou giro de pinos e buchas, com desmontagem, limpeza, inspeção e montagem. Para sapatas, são avaliados empeno, trincas e a dimensão da talisca antes de definir a preparação e a aplicação de nova garra.</p><p>Se a necessidade é consultar peça nova, encaminhe código, desenho, especificação, aplicação e quantidade para <a href="/parts/">Parts</a>. Se existe componente para recuperação dimensional, a <a href="/usinagem/">Usinagem</a> pode avaliar a peça e definir o processo em torno, mandrilhadora ou centro de usinagem. Informe se precisa de peça avulsa, um lado da máquina ou conjunto completo para comparar escopos equivalentes.</p>`,
      ) +
      section(
        "dados-correntes-sapatas",
        "Escavadeira, trator de esteira e histórico",
        list([
          "Máquina, fabricante, modelo, série disponível, patrimônio, lado e quantidade de sapatas ou componentes envolvidos.",
          "Código, desenho ou identificação legível; quando não houver, fotos de contexto, detalhes e posição no conjunto.",
          "Aplicação: escavação, terraplenagem, abertura de acesso, carregamento ou outra tarefa descrita pela operação.",
          "Tipo de terreno, carga, inclinação, deslocamento, horímetro e histórico de troca ou recondicionamento.",
          "Cidade, acesso, possibilidade de envio, dimensões e peso conhecidos, além da prioridade da parada.",
        ]),
      ) +
      section(
        "contato-correntes-sapatas",
        "Encaminhe o conjunto que você consegue identificar",
        `<p>A base do Grupo fica em Belo Horizonte. Transporte, coleta, mobilização, capacidade e prazo são avaliados técnica e comercialmente para cada solicitação.</p><p>${mailCta(site, "Avaliação de correntes e sapatas de esteira", "Enviar identificação da corrente ou sapata")}</p><p>Veja também as páginas de <a href="/componentes/rodas-guia/">rodas-guia</a> e <a href="/componentes/roletes-de-esteira/">roletes de esteira</a> para completar o registro do conjunto.</p>`,
      ),
  },
  {
    route: "/guias/folgas-pinos-buchas-alojamentos/",
    title: "Folgas em pinos, buchas e alojamentos | Guia New Tractor",
    heading: "Folga articulada pede identificação antes da decisão",
    description:
      "Guia para diferenciar folga percebida, pino, bucha e alojamento em componentes de máquinas pesadas antes de consultar manutenção ou peça nova.",
    intro:
      "Uma folga articulada não aponta, sozinha, para uma bucha. Identifique onde o movimento aparece, qual componente participa e quais dados a equipe consegue documentar antes de decidir o próximo passo.",
    image: "medicao-rolete",
    widths: [640],
    width: 640,
    height: 427,
    imageAlt: "Medição de componente de máquina pesada para registro técnico",
    about: "Avaliação de folgas, pinos, buchas e alojamentos",
    active: "guias",
    eyebrow: "GUIA DE AVALIAÇÃO",
    article: true,
    lastModified: "2026-09-08",
    contactTitle: "Envie o contexto da folga observada",
    content: (site) =>
      section(
        "folga-nao-diagnostico",
        "Folga percebida não é diagnóstico",
        `<p>Em uma articulação ou conexão, o movimento percebido pode estar relacionado ao pino, à bucha, ao alojamento, à fixação ou a outra parte do conjunto. A mesma sensação de folga pode aparecer em posições diferentes e sob condições distintas.</p><p>Registre onde o movimento foi percebido, em qual sentido, com a máquina parada ou em operação conforme o procedimento da equipe, e quando o sinal surgiu. A descrição organiza a conversa; não substitui inspeção, documentação do fabricante ou critério OEM.</p>`,
      ) +
      section(
        "separar-pino-bucha-alojamento",
        "Separe as referências antes de pedir uma peça",
        `<p><strong>Pino</strong> é o elemento que participa da união e do movimento entre partes. <strong>Bucha</strong> é o elemento de interface que pode trabalhar ao redor do pino. <strong>Alojamento</strong> é a sede na peça que recebe ou posiciona esse conjunto. Use essas palavras para indicar o local da observação, sem presumir qual deles precisa ser substituído ou recuperado.</p><p>Fotografe a montagem completa e identifique lado, posição e componente. Quando houver desenho, código ou referência OEM, associe o documento à máquina correta e indique o que ainda não foi confirmado.</p>`,
      ) +
      section(
        "dados-folga",
        "Dados que ajudam a separar sinal e causa",
        list([
          "Fabricante, modelo, número de série disponível, patrimônio e posição da articulação ou do componente.",
          "Condição em que a folga aparece: parado, carregado, descarregado, em movimento ou após uma intervenção documentada.",
          "Fotos de contexto e detalhe, sentido do movimento, ruído, impacto, vazamento ou desgaste observados.",
          "Medidas preliminares com unidade, ponto e instrumento; compare com a referência técnica aplicável à máquina.",
          "Histórico de pino, bucha, alojamento ou conjunto, aplicação, solo, carga, horímetro e prioridade da operação.",
        ]),
      ) +
      section(
        "encaminhar-folga",
        "Avaliar, recuperar ou consultar peça nova",
        `<p>Para uma avaliação do conjunto de material rodante, consulte a <a href="/servicos/manutencao-material-rodante/">manutenção de material rodante</a>. Para registrar medidas e histórico entre inspeções, veja o <a href="/servicos/monitoramento-material-rodante/">monitoramento</a>. Uma peça nova identificada por código, desenho ou especificação pode ser encaminhada para <a href="/parts/">Parts</a>; uma peça existente com demanda de geometria pode ser apresentada à <a href="/usinagem/">Usinagem</a>, conforme análise dimensional da peça.</p><p>Os caminhos não significam que toda folga tenha um processo definido. Compatibilidade, escopo, capacidade, transporte e prazo precisam ser confirmados a partir do componente e da operação.</p><p>${mailCta(site, "Guia para avaliação de folga, pino e bucha", "Enviar o registro da folga para orientação inicial")}</p>`,
      ) +
      section(
        "seguranca-folga",
        "Segurança antes de observar ou medir",
        `<p>Não entre em área de articulação, sob carga suspensa ou junto a componente apoiado de forma insegura para produzir fotos ou medidas. Não desmonte uma peça carregada ou pressurizada para a consulta. Isole o equipamento e siga o procedimento do fabricante e da operação, com profissionais habilitados.</p><p>Para completar a identificação, consulte as páginas de <a href="/componentes/rodas-guia/">rodas-guia</a>, <a href="/componentes/roletes-de-esteira/">roletes de esteira</a> e <a href="/componentes/correntes-sapatas-esteiras/">correntes e sapatas</a>.</p>`,
      ),
  },
];

export function createComponentPages({ pageHero, contactBand, breadcrumbSchema, site }) {
  return entries.map((entry) => {
    const parent = entry.route.startsWith("/guias/")
      ? { name: "Guias", route: "/guias/" }
      : { name: "Componentes", route: "/componentes/" };
    const crumbs = entry.route === parent.route ? [parent] : [parent, { name: entry.heading, route: entry.route }];
    const schema = [breadcrumbSchema(crumbs)];
    if (entry.article) schema.push(articleSchema(site, entry));
    return {
      route: entry.route,
      output: `${entry.route.slice(1)}index.html`,
      title: entry.title,
      description: entry.description,
      active: entry.active,
      about: { "@type": "Thing", name: entry.about },
      lastModified: entry.lastModified ?? "2026-09-08",
      schema,
      body:
        pageHero({
          eyebrow: entry.eyebrow,
          title: entry.heading,
          intro: entry.intro,
          breadcrumb: crumbs.map((item) => ({ label: item.name, href: item.route })),
          image: entry.image,
          imageAlt: entry.imageAlt,
          imageWidths: entry.widths,
          imageWidth: entry.width,
          imageHeight: entry.height,
        }) +
        (entry.article
          ? `<div class="shell article-credit"><p>Conteúdo editorial do Grupo New Tractor · Atualizado em 8 de setembro de 2026</p></div>`
          : "") +
        entry.content(site) +
        contactBand(entry.contactTitle),
    };
  });
}
