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
    title: "Manutenção de linha amarela por setor | New Tractor",
    heading: "Manutenção para o ritmo de cada operação.",
    description: "Serviço de campo, manutenção industrial e peças sob demanda para máquinas de mineração, florestal, agronegócio, construção e locação.",
    intro: "Da mineração à locação, a disponibilidade da máquina faz diferença na produção. Integramos avaliação de desgaste, manutenção planejada e fabricação de peças para cuidar da frota junto à sua equipe.",
    image: "material-rodante", widths: [640, 1200], width: 1200, height: 675,
    imageAlt: "Conjuntos de material rodante para máquinas pesadas",
    content: section("setores-lista", "Encontre o seu setor", list(sectorLinks.map(([label, route]) => {
      const copy = {
        "/setores/mineracao/": "Extração, carregamento, apoio e movimentação em operações minerais.",
        "/setores/florestal/": "Manejo, corte, carregamento e apoio em operações florestais.",
        "/setores/agronegocio/": "Preparo, plantio, colheita e transporte no agronegócio.",
        "/setores/construcao-terraplenagem/": "Preparação de terreno, escavação, infraestrutura e apoio de obra.",
        "/setores/locadoras/": "Frotas compartilhadas, devolução, manutenção e disponibilidade contratada.",
      }[route];
      return `<a href="${route}">${label}</a>: ${copy}`;
    }))) + section("perguntas-setor", "Planeje o atendimento da sua frota", `<p>Antes de enviar uma solicitação, relacione o equipamento de linha amarela à fase da operação, ao componente envolvido e ao que foi observado. Informe máquina, fabricante, modelo, identificação da frota, cidade e prioridade quando esses dados estiverem disponíveis.</p><p>Sinais descritos por texto ou foto orientam o primeiro contato, mas não fecham diagnóstico à distância. A compatibilidade, a condição e o escopo precisam ser avaliados conforme o componente e os documentos disponíveis.</p>`) + section("especialidades-setor", "Conte com as especialidades do grupo", `<p>O Grupo New Tractor reúne ${specialtyLinks}. Consulte também os <a href="/guias/avaliacao-maquinas-linha-amarela/">guias para avaliação</a>, o <a href="/guias/inspecao-material-rodante/">registro de material rodante</a> e a <a href="/guias/cotacao-pecas-maquinas-pesadas/">preparação de cotação de peças</a>.</p><p>Com base em Belo Horizonte, levamos técnicos especializados ao campo e programamos as intervenções nas unidades industriais. Informe a cidade e a agenda da frota para planejarmos o atendimento.</p>`),
  },
  {
    route: "/setores/mineracao/",
    title: "Manutenção de máquinas pesadas para mineração | New Tractor",
    heading: "Manutenção de máquinas para acompanhar a produção mineral",
    description: "Avaliação de desgaste, manutenção de campo e recuperação de componentes de tratores, escavadeiras e perfuratrizes para operações de mineração.",
    intro: "Na mineração, uma parada interfere na sequência da operação. Nossos técnicos avaliam o desgaste em campo e planejam com sua equipe a manutenção das máquinas e a recuperação dos componentes.",
    image: "material-rodante", widths: [640, 1200], width: 1200, height: 675,
    imageAlt: "Material rodante de máquina pesada em ambiente industrial",
    content: section("fase-mineracao", "Equipamentos e fases da operação", `<p>Os equipamentos de linha amarela podem aparecer na preparação de área, no apoio à extração, no carregamento, na movimentação de material e na manutenção das vias internas. Tratores de esteira, escavadeiras e perfuratrizes têm funções e componentes diferentes; identifique a máquina antes de relacionar a necessidade à especialidade.</p><p>Informe se a demanda surgiu em uma frente de lavra, pilha, pátio de manutenção ou etapa de apoio. O contexto ajuda a ordenar a análise, sem substituir a avaliação do componente.</p>`)+section("sinais-mineracao", "Sinais que merecem registro", list([
      "Desgaste percebido em esteiras, roletes, sapatas, rodas-guia ou demais itens do material rodante.",
      "Alteração de movimento, vazamento observado ou perda de desempenho relatada em um conjunto hidráulico, sem concluir a causa por fotografia.",
      "Trinca, deformação, desgaste de borda ou alteração de encaixe em caçambas, conchas e estruturas.",
      "Horímetro, condição de carga, material movimentado, data, local e fotos de contexto e detalhe.",
    ]))+section("fluxo-mineracao", "Compras, manutenção e mecânica precisam falar a mesma língua", `<p>Compras pode reunir código, desenho, quantidade e destino; manutenção acrescenta histórico, prioridade e condição; a equipe mecânica registra a aplicação e as restrições de segurança. Componentes de esteira podem seguir para <a href="/rodantes/">Rodantes</a>; cilindros hidráulicos, para <a href="/hidrautractor/recuperacao-cilindros-hidraulicos/">recuperação pela HidrauTractor</a> ou <a href="/hidrautractor/fabricacao-cilindros-hidraulicos/">fabricação conforme a aplicação</a>; caçambas e estruturas, para <a href="/calderaria/">Calderaria</a>; peças com demanda dimensional, para <a href="/usinagem/">Usinagem</a>.</p><p>Para inspeções e histórico, veja o <a href="/guias/inspecao-material-rodante/">guia de material rodante</a>. Para cilindros, consulte o <a href="/guias/avaliacao-cilindros-hidraulicos/">roteiro de avaliação hidráulica</a>. A <a href="/services/">Services</a> realiza a avaliação em campo e programa a manutenção. Para peças novas, a <a href="/parts/">Parts</a> executa fabricação sob demanda.</p>`)+section("logistica-mineracao", "Minas Gerais e logística por demanda", `<p>A estrutura do Grupo tem base em Belo Horizonte. Em uma operação mineral, indique município, acesso, requisitos de entrada, componente disponível para envio e janela pretendida. Transporte, coleta, mobilização e prazo são analisados para cada demanda. Diga também se o componente pode ser enviado ou se a consulta depende de acesso ao equipamento.</p>`),
  },
  {
    route: "/setores/florestal/",
    title: "Manutenção de máquinas para operações florestais | New Tractor",
    heading: "Cuidado com as máquinas da operação florestal",
    description: "Manutenção de máquinas de linha amarela para operações florestais: avaliação de desgaste, recuperação de rodantes e componentes e peças sob demanda.",
    intro: "Da colheita ao carregamento e ao apoio florestal, acompanhamos o desgaste das máquinas de linha amarela e planejamos as intervenções com a manutenção do cliente. Campo e estrutura industrial trabalham juntos para reduzir o tempo de parada.",
    image: "equipe", widths: [640, 1200], width: 1200, height: 675,
    imageAlt: "Equipe e equipamentos pesados em ambiente industrial",
    content: section("fase-florestal", "Equipamentos e fases do manejo", `<p>Tratores de esteira e escavadeiras, equipamentos de linha amarela de apoio, podem participar da abertura e manutenção de acessos, carregamento, transporte interno e outras etapas do manejo. Colheitadeiras florestais entram como contexto da operação; identifique fabricante, modelo, implemento e função antes de relacionar uma demanda a um componente pesado.</p><p>Descreva se a demanda apareceu durante o manejo, no carregamento, em deslocamento ou em parada programada. A fase orienta as perguntas sem provar, sozinha, a causa do desgaste.</p>`)+section("sinais-florestal", "O que vale documentar", list([
      "Componente, lado da máquina, condição observada e momento em que o sinal foi percebido.",
      "Fotos gerais e de detalhe de esteiras, roletes, sapatas, caçambas, conchas, estruturas ou conexões.",
      "Horímetro disponível, tipo de solo, carga, inclinação, umidade e histórico de trocas quando conhecidos.",
      "Restrições de acesso, retirada do componente, transporte e segurança da área de trabalho.",
    ]))+section("fluxo-florestal", "Da inspeção à manutenção", `<p>A manutenção organiza o histórico e a prioridade; o mecânico descreve a aplicação e a condição; compras confere códigos, desenho, quantidade e destino. Componentes de esteira podem seguir para <a href="/rodantes/">Rodantes</a>; caçambas, conchas e estruturas, para <a href="/calderaria/">Calderaria</a>; cilindros hidráulicos, para <a href="/hidrautractor/recuperacao-cilindros-hidraulicos/">recuperação pela HidrauTractor</a> ou <a href="/hidrautractor/fabricacao-cilindros-hidraulicos/">fabricação conforme a aplicação</a>.</p><p>Consulte o <a href="/guias/inspecao-material-rodante/">guia de registro de material rodante</a> e o <a href="/guias/avaliacao-cacambas-conchas/">guia de caçambas e conchas</a>. A <a href="/services/">Services</a> realiza a avaliação de desgaste no campo e programa a manutenção; a <a href="/parts/">Parts</a> fabrica peças sob demanda. A <a href="/techtractor/">TechTractor</a> desenvolve tecnologia para acompanhar inspeções e histórico.</p>`)+section("logistica-florestal", "Base em Belo Horizonte, análise de mobilização", `<p>Informe município da operação, condições de acesso, ponto de coleta ou envio e a janela de manutenção. A base em Belo Horizonte orienta a conversa inicial; informe se a máquina permanece no local ou se o componente pode ser enviado para que transporte e mobilização sejam avaliados.</p>`),
  },
  {
    route: "/setores/agronegocio/",
    title: "Manutenção de linha amarela no agronegócio | New Tractor",
    heading: "Manutenção de máquinas de apoio ao agronegócio",
    description: "Serviço de campo e manutenção de máquinas de linha amarela no apoio ao agronegócio, com recuperação de componentes e fabricação de peças sob demanda.",
    intro: "Planejar as intervenções ajuda a aproveitar as janelas entre etapas do ciclo agrícola. Cuidamos das máquinas de linha amarela de apoio com avaliação de desgaste, recuperação de componentes e fabricação de peças sob demanda.",
    image: "componentes-industriais", widths: [640, 1200, 1600], width: 1600, height: 1070,
    imageAlt: "Componentes industriais organizados para avaliação",
    content: section("fase-agro", "Equipamentos e fases do ciclo", `<p>Na linha amarela de apoio, tratores de esteira e escavadeiras podem atuar na abertura de acessos, preparo de áreas, movimentação de materiais e manutenção da estrutura da operação agrícola. Tratores agrícolas e colheitadeiras ajudam a localizar a etapa do ciclo; para uma consulta ao Grupo, identifique primeiro a máquina pesada e o componente que precisam de avaliação.</p><p>Registre se o sinal apareceu no preparo, durante a colheita, na manutenção entre safras ou em uma parada corretiva. A fase ajuda a estabelecer prioridade e logística, mas não confirma diagnóstico.</p>`)+section("sinais-agro", "Sinais e contexto para a avaliação", list([
      "Código, modelo, série disponível e componente afetado, com fotos de contexto e detalhe.",
      "Ruído, folga, vazamento observado, deformação ou desgaste descritos com data e condição de uso.",
      "Horímetro, horas de uso estimadas, histórico de manutenção e peças já substituídas, quando documentados.",
      "Cidade, acesso, disponibilidade do componente para envio e período desejado para análise.",
    ]))+section("fluxo-agro", "Alinhe compras, manutenção e mecânica", `<p>Compras pode começar pela identificação, quantidade e destino. Manutenção complementa histórico e prioridade; o mecânico informa aplicação, montagem e restrições observadas. Para componentes de esteira, consulte <a href="/rodantes/">Rodantes</a>; para um cilindro hidráulico, conheça a <a href="/hidrautractor/recuperacao-cilindros-hidraulicos/">recuperação</a> e a <a href="/hidrautractor/fabricacao-cilindros-hidraulicos/">fabricação pela HidrauTractor</a>; para fabricação de peças sob demanda, conte com a <a href="/parts/">Parts</a>.</p><p>Quando a dúvida envolve cilindro, use o <a href="/guias/avaliacao-cilindros-hidraulicos/">guia de avaliação de cilindros hidráulicos</a>. Para peça nova ou recuperação, organize os dados no <a href="/guias/cotacao-pecas-maquinas-pesadas/">guia de cotação</a>.</p>`)+section("logistica-agro", "Uma base, diferentes distâncias", `<p>O Grupo informa base em Belo Horizonte. Para uma operação agrícola em outra cidade, informe localização, acesso, componente disponível para envio e janela desejada; transporte, coleta e mobilização entram na avaliação comercial e logística.</p>`),
  },
  {
    route: "/setores/construcao-terraplenagem/",
    title: "Manutenção para construção e terraplenagem | New Tractor",
    heading: "Manutenção para manter o ritmo da obra",
    description: "Serviço de campo, recuperação de caçambas, rodantes e cilindros e fabricação de peças para máquinas de construção e terraplenagem.",
    intro: "Escavadeiras, tratores e carregadeiras precisam acompanhar o cronograma da obra. Avaliamos desgastes no local e planejamos a manutenção em campo ou nas unidades industriais, conforme a intervenção e a agenda.",
    image: "concha-patio", widths: [640, 1200], width: 1200, height: 612,
    imageAlt: "Caçamba de máquina pesada em pátio industrial",
    content: section("fase-construcao", "Equipamentos e fases da obra", `<p>Escavadeiras, tratores de esteira, pás carregadeiras, perfuratrizes e caminhões de apoio aparecem em preparação de terreno, escavação, drenagem, fundação, infraestrutura e acabamento de acessos. Identifique a máquina, o implemento e a tarefa em que o componente trabalha.</p><p>Informe se a demanda surgiu em obra ativa, mobilização, deslocamento, devolução ou manutenção programada. A fase pode definir prioridade e acesso ao equipamento sem substituir a inspeção.</p>`)+section("sinais-construcao", "Registre o que a equipe observou", list([
      "Condição de caçamba, concha, dentes, adaptadores, pinos, estrutura, esteiras ou componentes hidráulicos.",
      "Fotos do equipamento inteiro e do detalhe, com identificação do lado, posição e conjunto.",
      "Folga, trinca, deformação, vazamento ou perda de movimento relatados sem concluir a causa remotamente.",
      "Medidas preliminares, desenho, código, peso, dimensões de transporte e restrições de acesso à obra.",
    ]))+section("fluxo-construcao", "Compras e manutenção com o mesmo escopo", `<p>Compras reúne código, desenho, quantidade e destino; manutenção acrescenta histórico e janela de parada; o mecânico descreve aplicação e condição. Para caçambas e estruturas, consulte <a href="/calderaria/">Calderaria</a>; para recuperação dimensional, <a href="/usinagem/">Usinagem</a>; para fabricação sob demanda, <a href="/parts/">Parts</a>. A <a href="/services/">Services</a> avalia desgastes no campo e programa a manutenção conforme a agenda da obra.</p><p>Para diferenciar escavadeira, carregadeira e caçamba de caminhão, consulte o <a href="/guias/avaliacao-cacambas-conchas/">guia de caçambas e conchas</a>. A <a href="/servicos/reforma-cacambas-conchas/">reforma de caçambas e conchas</a> é uma rota existente; cada escopo depende da condição encontrada.</p>`)+section("logistica-construcao", "Atendimento à obra a partir de Belo Horizonte", `<p>Apresente cidade da obra, acesso, componente disponível e janela de parada. A base do grupo fica em Belo Horizonte; informe se o componente pode ser enviado ou se o equipamento precisa permanecer acessível para que transporte e mobilização sejam avaliados.</p>`),
  },
  {
    route: "/setores/locadoras/",
    title: "Manutenção de frotas de locadoras de máquinas | New Tractor",
    heading: "Frota preparada para o próximo contrato de locação",
    description: "Inspeção de desgaste e manutenção de frotas de locadoras, com serviço de campo, recuperação de componentes e peças sob demanda.",
    intro: "Entre a devolução e o próximo contrato, avaliamos desgastes e planejamos a manutenção para preparar a máquina. Sob contrato, o grupo oferece sobressalentes inclusive durante a reparação, apoiando a disponibilidade da frota.",
    image: "monitoramento", widths: [640, 1024], width: 1024, height: 683,
    imageAlt: "Componentes de material rodante para acompanhamento de frota",
    content: section("fase-locadoras", "Equipamentos e momentos da frota", `<p>Locadoras podem operar frotas com escavadeiras, pás carregadeiras, tratores de esteira, perfuratrizes e equipamentos de apoio em contratos diferentes. Registre retirada, uso, devolução, transferência e manutenção de cada ativo; a mesma frota pode mudar de aplicação e local.</p><p>Associe o componente ao patrimônio e ao contrato ou período de uso pertinente. Essa organização facilita a conversa entre operação, manutenção, suprimentos e mecânica.</p>`)+section("sinais-locadoras", "Sinais que merecem histórico", list([
      "Condição do material rodante, caçambas, conchas, estruturas e conjuntos hidráulicos na entrada e na devolução.",
      "Fotos, horímetro, identificação da máquina, local e data, preservando o histórico entre contratos.",
      "Folgas, ruídos, vazamentos observados, deformações ou desgaste descritos sem atribuir causa por foto.",
      "Prioridade, disponibilidade do ativo, possibilidade de retirar o componente e restrições de transporte.",
    ]))+section("fluxo-locadoras", "Operação, manutenção e compras no mesmo plano", `<p>Operação e mecânica registram o evento; manutenção consolida a condição e a prioridade; compras confere código, quantidade, desenho e destino. Componentes de esteira podem seguir para <a href="/rodantes/">Rodantes</a>; caçambas e estruturas, para <a href="/calderaria/">Calderaria</a>; peças identificadas, para <a href="/parts/">Parts</a>. A <a href="/services/">Services</a> avalia o desgaste no campo e programa as intervenções com a manutenção da locadora.</p><p>O <a href="/guias/inspecao-material-rodante/">guia de inspeção</a> ajuda a manter a identificação entre registros. Para peças, veja a <a href="/guias/cotacao-pecas-maquinas-pesadas/">preparação de cotação</a>.</p>`)+section("logistica-locadoras", "Frota distribuída, logística avaliada por ativo", `<p>Informe a cidade do ativo, o pátio, a condição de acesso e se o componente pode ser enviado. A base do Grupo em Belo Horizonte é o ponto institucional de referência; transporte, coleta, mobilização e prazo dependem de análise técnica, comercial e logística para cada solicitação.</p>`),
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
      lastModified: "2026-09-10",
      schema: [breadcrumbSchema(crumbs)],
      body: pageHero({
        eyebrow: "SOLUÇÕES POR SETOR",
        title: entry.heading,
        intro: entry.intro,
        breadcrumb: crumbs.map((item) => ({ label: item.name, href: item.route })),
        image: entry.image,
        imageAlt: entry.imageAlt,
        imageWidths: entry.widths,
        imageWidth: entry.width,
        imageHeight: entry.height,
      }) + entry.content + contactBand("Planeje a manutenção da sua frota"),
    };
  });
}
