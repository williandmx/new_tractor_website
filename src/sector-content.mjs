// Contexto setorial para conversas de compras e manutenção.
const section = (id, title, content) => `<section class="section section--light" aria-labelledby="${id}"><div class="shell editorial-grid"><div><h2 id="${id}">${title}</h2></div><div class="rich-text">${content}</div></div></section>`;
const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

export const sectorLinks = [
  ["Mineração", "/setores/mineracao/"],
  ["Florestal", "/setores/florestal/"],
  ["Agronegócio", "/setores/agronegocio/"],
  ["Construção e terraplenagem", "/setores/construcao-terraplenagem/"],
  ["Locadoras de máquinas", "/setores/locadoras/"],
];

const specialtyLinks = `<a href="/rodantes/">Rodantes</a>, <a href="/hidrautractor/">HidrauTractor</a>, <a href="/usinagem/">Usinagem</a>, <a href="/calderaria/">Calderaria</a>, <a href="/parts/">Parts</a>, <a href="/services/">Services</a> e <a href="/techtractor/">TechTractor</a>`;

const sectorPages = [
  {
    route: "/setores/",
    title: "Máquinas de linha amarela por setor | New Tractor",
    heading: "Cada operação pede uma leitura própria da máquina.",
    description: "Contextos de mineração, florestal, agronegócio, construção e locação para organizar a avaliação de máquinas e componentes pesados.",
    intro: "O equipamento, a fase da operação e a logística mudam a forma de reunir uma demanda. Use os setores como ponto de partida para uma conversa técnica e comercial.",
    image: "material-rodante", widths: [640, 1200], width: 1200, height: 675,
    imageAlt: "Conjuntos de material rodante para máquinas pesadas",
    content: section("setores-lista", "Escolha o contexto da operação", list(sectorLinks.map(([label, route]) => {
      const copy = {
        "/setores/mineracao/": "Extração, carregamento, apoio e movimentação em operações minerais.",
        "/setores/florestal/": "Manejo, corte, carregamento e apoio em operações florestais.",
        "/setores/agronegocio/": "Preparo, plantio, colheita e transporte no agronegócio.",
        "/setores/construcao-terraplenagem/": "Preparação de terreno, escavação, infraestrutura e apoio de obra.",
        "/setores/locadoras/": "Frotas compartilhadas, devolução, manutenção e disponibilidade contratada.",
      }[route];
      return `<a href="${route}">${label}</a>: ${copy}`;
    }))) + section("perguntas-setor", "O contexto ajuda a preparar a avaliação", `<p>Antes de enviar uma solicitação, relacione o equipamento de linha amarela à fase da operação, ao componente envolvido e ao que foi observado. Informe máquina, fabricante, modelo, identificação da frota, cidade e prioridade quando esses dados estiverem disponíveis.</p><p>Sinais descritos por texto ou foto orientam o primeiro contato, mas não fecham diagnóstico à distância. A compatibilidade, a condição e o escopo precisam ser avaliados conforme o componente e os documentos disponíveis.</p>`) + section("especialidades-setor", "Conecte o setor à especialidade", `<p>O Grupo New Tractor reúne ${specialtyLinks}. Consulte também os <a href="/guias/avaliacao-maquinas-linha-amarela/">guias para avaliação</a>, o <a href="/guias/inspecao-material-rodante/">registro de material rodante</a> e a <a href="/guias/cotacao-pecas-maquinas-pesadas/">preparação de cotação de peças</a>.</p><p>A base informada fica em Belo Horizonte. Informe cidade, acesso, componente e janela desejada para que a necessidade seja avaliada técnica, comercial e logisticamente.</p>`),
  },
  {
    route: "/setores/mineracao/",
    title: "Manutenção de máquinas pesadas para mineração | New Tractor",
    heading: "Mineração: equipamento, fase e condição no mesmo registro",
    description: "Organize demandas de tratores de esteira, escavadeiras, perfuratrizes e componentes para operações de mineração.",
    intro: "Em mineração, uma solicitação precisa conectar o componente à frente de trabalho, ao regime de uso e à janela de manutenção considerada.",
    image: "material-rodante", widths: [640, 1200], width: 1200, height: 675,
    imageAlt: "Material rodante de máquina pesada em ambiente industrial",
    content: section("fase-mineracao", "Equipamentos e fases da operação", `<p>Os equipamentos de linha amarela podem aparecer na preparação de área, no apoio à extração, no carregamento, na movimentação de material e na manutenção das vias internas. Tratores de esteira, escavadeiras e perfuratrizes têm funções e componentes diferentes; identifique a máquina antes de relacionar a necessidade à especialidade.</p><p>Informe se a demanda surgiu em uma frente de lavra, pilha, pátio de manutenção ou etapa de apoio. O contexto ajuda a ordenar a análise, sem substituir a avaliação do componente.</p>`)+section("sinais-mineracao", "Sinais que merecem registro", list([
      "Desgaste percebido em esteiras, roletes, sapatas, rodas-guia ou demais itens do material rodante.",
      "Alteração de movimento, vazamento observado ou perda de desempenho relatada em um conjunto hidráulico, sem concluir a causa por fotografia.",
      "Trinca, deformação, desgaste de borda ou alteração de encaixe em caçambas, conchas e estruturas.",
      "Horímetro, condição de carga, material movimentado, data, local e fotos de contexto e detalhe.",
    ]))+section("fluxo-mineracao", "Compras, manutenção e mecânica precisam falar a mesma língua", `<p>Compras pode reunir código, desenho, quantidade e destino; manutenção acrescenta histórico, prioridade e condição; a equipe mecânica registra a aplicação e as restrições de segurança. Componentes de esteira podem seguir para <a href="/rodantes/">Rodantes</a>; conjuntos hidráulicos, para avaliação da <a href="/hidrautractor/">HidrauTractor</a>; caçambas e estruturas, para <a href="/calderaria/">Calderaria</a>; peças com demanda dimensional, para <a href="/usinagem/">Usinagem</a>.</p><p>Para inspeções e histórico, veja o <a href="/guias/inspecao-material-rodante/">guia de material rodante</a>. Para cilindros, consulte o <a href="/guias/avaliacao-cilindros-hidraulicos/">roteiro de avaliação hidráulica</a>. A definição de fornecimento, recuperação ou mobilização depende da consulta.</p>`)+section("logistica-mineracao", "Minas Gerais e logística por demanda", `<p>A estrutura do Grupo tem base em Belo Horizonte. Em uma operação mineral, indique município, acesso, requisitos de entrada, componente disponível para envio e janela pretendida. Transporte, coleta, mobilização e prazo são analisados para cada demanda. Diga também se o componente pode ser enviado ou se a consulta depende de acesso ao equipamento.</p>`),
  },
  {
    route: "/setores/florestal/",
    title: "Máquinas pesadas para operações florestais | New Tractor",
    heading: "Florestal: a aplicação muda o contexto da manutenção",
    description: "Organize avaliações de máquinas de linha amarela, material rodante e componentes pesados usados no apoio florestal.",
    intro: "Operações florestais reúnem máquinas de linha amarela e componentes pesados em etapas diferentes. Registrar a aplicação e o local de uso dá contexto para compras e manutenção avaliarem o próximo passo.",
    image: "equipe", widths: [640, 1200], width: 1200, height: 675,
    imageAlt: "Equipe e equipamentos pesados em ambiente industrial",
    content: section("fase-florestal", "Equipamentos e fases do manejo", `<p>Tratores de esteira e escavadeiras, equipamentos de linha amarela de apoio, podem participar da abertura e manutenção de acessos, carregamento, transporte interno e outras etapas do manejo. Colheitadeiras florestais entram como contexto da operação; identifique fabricante, modelo, implemento e função antes de relacionar uma demanda a um componente pesado.</p><p>Descreva se a demanda apareceu durante o manejo, no carregamento, em deslocamento ou em parada programada. A fase orienta as perguntas sem provar, sozinha, a causa do desgaste.</p>`)+section("sinais-florestal", "O que vale documentar", list([
      "Componente, lado da máquina, condição observada e momento em que o sinal foi percebido.",
      "Fotos gerais e de detalhe de esteiras, roletes, sapatas, caçambas, conchas, estruturas ou conexões.",
      "Horímetro disponível, tipo de solo, carga, inclinação, umidade e histórico de trocas quando conhecidos.",
      "Restrições de acesso, retirada do componente, transporte e segurança da área de trabalho.",
    ]))+section("fluxo-florestal", "Do registro ao encaminhamento", `<p>A manutenção organiza o histórico e a prioridade; o mecânico descreve a aplicação e a condição; compras confere códigos, desenho, quantidade e destino. Componentes de esteira podem seguir para <a href="/rodantes/">Rodantes</a>; caçambas, conchas e estruturas, para <a href="/calderaria/">Calderaria</a>; conjuntos hidráulicos, para avaliação da <a href="/hidrautractor/">HidrauTractor</a>.</p><p>Consulte o <a href="/guias/inspecao-material-rodante/">guia de registro de material rodante</a> e o <a href="/guias/avaliacao-cacambas-conchas/">guia de caçambas e conchas</a>. O <a href="/techtractor/">TechTractor</a> apresenta uma frente tecnológica em evolução para inspeções e histórico.</p>`)+section("logistica-florestal", "Base em Belo Horizonte, análise de mobilização", `<p>Informe município da operação, condições de acesso, ponto de coleta ou envio e a janela de manutenção. A base em Belo Horizonte orienta a conversa inicial; informe se a máquina permanece no local ou se o componente pode ser enviado para que transporte e mobilização sejam avaliados.</p>`),
  },
  {
    route: "/setores/agronegocio/",
    title: "Máquinas de linha amarela no agronegócio | New Tractor",
    heading: "Agronegócio: planejar a parada começa pela aplicação",
    description: "Contexto para organizar demandas de linha amarela de apoio e componentes pesados no agronegócio.",
    intro: "Entre preparo do solo e colheita, a identificação da máquina de linha amarela e do componente pesado ajuda a equipe a preparar uma consulta objetiva.",
    image: "componentes-industriais", widths: [640, 1200, 1600], width: 1600, height: 1070,
    imageAlt: "Componentes industriais organizados para avaliação",
    content: section("fase-agro", "Equipamentos e fases do ciclo", `<p>Na linha amarela de apoio, tratores de esteira e escavadeiras podem atuar na abertura de acessos, preparo de áreas, movimentação de materiais e manutenção da estrutura da operação agrícola. Tratores agrícolas e colheitadeiras ajudam a localizar a etapa do ciclo; para uma consulta ao Grupo, identifique primeiro a máquina pesada e o componente que precisam de avaliação.</p><p>Registre se o sinal apareceu no preparo, durante a colheita, na manutenção entre safras ou em uma parada corretiva. A fase ajuda a estabelecer prioridade e logística, mas não confirma diagnóstico.</p>`)+section("sinais-agro", "Sinais e contexto para a avaliação", list([
      "Código, modelo, série disponível e componente afetado, com fotos de contexto e detalhe.",
      "Ruído, folga, vazamento observado, deformação ou desgaste descritos com data e condição de uso.",
      "Horímetro, horas de uso estimadas, histórico de manutenção e peças já substituídas, quando documentados.",
      "Cidade, acesso, disponibilidade do componente para envio e período desejado para análise.",
    ]))+section("fluxo-agro", "Alinhe compras, manutenção e mecânica", `<p>Compras pode começar pela identificação, quantidade e destino. Manutenção complementa histórico e prioridade; o mecânico informa aplicação, montagem e restrições observadas. Para componentes de esteira, consulte <a href="/rodantes/">Rodantes</a>; para um conjunto hidráulico, apresente os dados à <a href="/hidrautractor/">HidrauTractor</a>; para peça nova ou consulta por código, use <a href="/parts/">Parts</a>.</p><p>Quando a dúvida envolve cilindro, use o <a href="/guias/avaliacao-cilindros-hidraulicos/">guia de avaliação de cilindros hidráulicos</a>. Para peça nova ou recuperação, organize os dados no <a href="/guias/cotacao-pecas-maquinas-pesadas/">guia de cotação</a>.</p>`)+section("logistica-agro", "Uma base, diferentes distâncias", `<p>O Grupo informa base em Belo Horizonte. Para uma operação agrícola em outra cidade, informe localização, acesso, componente disponível para envio e janela desejada; transporte, coleta e mobilização entram na avaliação comercial e logística.</p>`),
  },
  {
    route: "/setores/construcao-terraplenagem/",
    title: "Máquinas de construção e terraplenagem | New Tractor",
    heading: "Construção e terraplenagem: peça, obra e acesso",
    description: "Prepare consultas de escavadeiras, tratores, perfuratrizes e componentes para construção civil e terraplenagem.",
    intro: "Em uma obra, a fase do serviço, o acesso ao equipamento e a disponibilidade do componente influenciam a avaliação técnica e logística.",
    image: "concha-patio", widths: [640, 1200], width: 1200, height: 612,
    imageAlt: "Caçamba de máquina pesada em pátio industrial",
    content: section("fase-construcao", "Equipamentos e fases da obra", `<p>Escavadeiras, tratores de esteira, pás carregadeiras, perfuratrizes e caminhões de apoio aparecem em preparação de terreno, escavação, drenagem, fundação, infraestrutura e acabamento de acessos. Identifique a máquina, o implemento e a tarefa em que o componente trabalha.</p><p>Informe se a demanda surgiu em obra ativa, mobilização, deslocamento, devolução ou manutenção programada. A fase pode definir prioridade e acesso ao equipamento sem substituir a inspeção.</p>`)+section("sinais-construcao", "Registre o que a equipe observou", list([
      "Condição de caçamba, concha, dentes, adaptadores, pinos, estrutura, esteiras ou componentes hidráulicos.",
      "Fotos do equipamento inteiro e do detalhe, com identificação do lado, posição e conjunto.",
      "Folga, trinca, deformação, vazamento ou perda de movimento relatados sem concluir a causa remotamente.",
      "Medidas preliminares, desenho, código, peso, dimensões de transporte e restrições de acesso à obra.",
    ]))+section("fluxo-construcao", "Compras e manutenção com o mesmo escopo", `<p>Compras reúne código, desenho, quantidade e destino; manutenção acrescenta histórico e janela de parada; o mecânico descreve aplicação e condição. Para caçambas e estruturas, consulte <a href="/calderaria/">Calderaria</a>; para recuperação dimensional, <a href="/usinagem/">Usinagem</a>; para peça identificada, <a href="/parts/">Parts</a>.</p><p>Para diferenciar escavadeira, carregadeira e caçamba de caminhão, consulte o <a href="/guias/avaliacao-cacambas-conchas/">guia de caçambas e conchas</a>. A <a href="/servicos/reforma-cacambas-conchas/">reforma de caçambas e conchas</a> é uma rota existente; cada escopo depende da condição encontrada.</p>`)+section("logistica-construcao", "Belo Horizonte como base de consulta", `<p>Apresente cidade da obra, acesso, componente disponível e janela de parada. A base do grupo fica em Belo Horizonte; informe se o componente pode ser enviado ou se o equipamento precisa permanecer acessível para que transporte e mobilização sejam avaliados.</p>`),
  },
  {
    route: "/setores/locadoras/",
    title: "Manutenção de frotas de locadoras de máquinas | New Tractor",
    heading: "Locadoras: histórico de frota e condição na devolução",
    description: "Organize avaliações de máquinas de locação com patrimônio, aplicação, devolução, manutenção e logística por componente.",
    intro: "Frotas compartilhadas precisam manter o contexto de cada ativo. Um registro claro reduz ambiguidades entre devolução, contrato seguinte e manutenção programada.",
    image: "monitoramento", widths: [640, 1024], width: 1024, height: 683,
    imageAlt: "Componentes de material rodante para acompanhamento de frota",
    content: section("fase-locadoras", "Equipamentos e momentos da frota", `<p>Locadoras podem operar frotas com escavadeiras, pás carregadeiras, tratores de esteira, perfuratrizes e equipamentos de apoio em contratos diferentes. Registre retirada, uso, devolução, transferência e manutenção de cada ativo; a mesma frota pode mudar de aplicação e local.</p><p>Associe o componente ao patrimônio e ao contrato ou período de uso pertinente. Essa organização facilita a conversa entre operação, manutenção, suprimentos e mecânica.</p>`)+section("sinais-locadoras", "Sinais que merecem histórico", list([
      "Condição do material rodante, caçambas, conchas, estruturas e conjuntos hidráulicos na entrada e na devolução.",
      "Fotos, horímetro, identificação da máquina, local e data, preservando o histórico entre contratos.",
      "Folgas, ruídos, vazamentos observados, deformações ou desgaste descritos sem atribuir causa por foto.",
      "Prioridade, disponibilidade do ativo, possibilidade de retirar o componente e restrições de transporte.",
    ]))+section("fluxo-locadoras", "Um fluxo que compras consegue conferir", `<p>Operação e mecânica registram o evento; manutenção consolida a condição e a prioridade; compras confere código, quantidade, desenho e destino. Componentes de esteira podem seguir para <a href="/rodantes/">Rodantes</a>; caçambas e estruturas, para <a href="/calderaria/">Calderaria</a>; peças identificadas, para <a href="/parts/">Parts</a>. A <a href="/services/">Services</a> organiza conversas conforme a demanda.</p><p>O <a href="/guias/inspecao-material-rodante/">guia de inspeção</a> ajuda a manter a identificação entre registros. Para peças, veja a <a href="/guias/cotacao-pecas-maquinas-pesadas/">preparação de cotação</a>.</p>`)+section("logistica-locadoras", "Frota distribuída, logística avaliada por ativo", `<p>Informe a cidade do ativo, o pátio, a condição de acesso e se o componente pode ser enviado. A base do Grupo em Belo Horizonte é o ponto institucional de referência; transporte, coleta, mobilização e prazo dependem de análise técnica, comercial e logística para cada solicitação.</p>`),
  },
];

export function createSectorPages({ pageHero, contactBand, breadcrumbSchema }) {
  return sectorPages.map((entry) => {
    const parent = { name: "Setores", route: "/setores/" };
    const crumbs = entry.route === "/setores/" ? [parent] : [parent, { name: entry.heading, route: entry.route }];
    return {
      route: entry.route,
      output: `${entry.route.slice(1)}index.html`,
      title: entry.title,
      description: entry.description,
      active: "atuacao",
      lastModified: "2026-09-08",
      schema: [breadcrumbSchema(crumbs)],
      body: pageHero({
        eyebrow: "CONTEXTOS DE OPERAÇÃO",
        title: entry.heading,
        intro: entry.intro,
        breadcrumb: crumbs.map((item) => ({ label: item.name, href: item.route })),
        image: entry.image,
        imageAlt: entry.imageAlt,
        imageWidths: entry.widths,
        imageWidth: entry.width,
        imageHeight: entry.height,
      }) + entry.content + contactBand("Apresente o contexto da sua operação"),
    };
  });
}
