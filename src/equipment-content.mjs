// Referências técnicas consultadas em 2026-09-08:
// - Caterpillar, cilindros de lança, braço e caçamba de escavadeiras:
//   https://parts.cat.com/en/catcorp/product/373-1111
//   https://parts.cat.com/en/catcorp/product/397-6986
//   https://parts.cat.com/en/catcorp/product/645-4504
// - John Deere, 792 Excavator:
//   https://www.deere.com/assets/pdfs/common/products/excavators/excavator-mid-size-792.pdf
// - Komatsu, D31/D37-22 Crawler Dozer, seção Hydraulic System:
//   https://www.komatsu.com/content/dam/komatsu/websites/middle-east/en-ae/documents/brochure-pdf/D37EX_PX_22_CEN00334_02.pdf
// - Caterpillar, 995 Large Wheel Loader:
//   https://www.cat.com/en_US/products/new/equipment/wheel-loaders/large-wheel-loaders/118720.html
// - Caterpillar, indicadores de manutenção de cilindro de lança:
//   https://www.cat.com/en_US/support/maintenance/self-service-options/boom-cylinder.html
// Os documentos sustentam função, vocabulário e dependência de modelo/configuração.
// Não estabelecem oferta, processo, capacidade, compatibilidade, teste ou prazo
// do Grupo New Tractor.

const section = (id, title, content, tone = "light") =>
  `<section class="section section--${tone}" aria-labelledby="${id}"><div class="shell editorial-grid"><div><h2 id="${id}">${title}</h2></div><div class="rich-text">${content}</div></div></section>`;

const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

const faqSection = (id, items) =>
  section(
    id,
    "Perguntas antes da consulta",
    `<div class="faq-list">${items
      .map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`)
      .join("")}</div>`,
  );

const referencesSection = (id, references) =>
  section(
    id,
    "Referências técnicas",
    `<p>As fontes abaixo ajudam a nomear funções e dados de identificação. Cada fabricante documenta seus próprios equipamentos; use o manual e o catálogo aplicáveis à máquina apresentada.</p>${list(
      references.map(([label, href, note]) => `<a href="${href}">${label}</a>: ${note}`),
    )}`,
  );

const articleSchema = (site, entry) => ({
  "@type": "Article",
  "@id": `${site.origin}${entry.route}#article`,
  headline: entry.title,
  description: entry.description,
  datePublished: "2026-09-08",
  dateModified: entry.lastModified ?? "2026-09-08",
  inLanguage: "pt-BR",
  mainEntityOfPage: { "@id": `${site.origin}${entry.route}#webpage` },
  author: { "@type": "Organization", name: "Grupo New Tractor", url: `${site.origin}/empresa/` },
  publisher: { "@id": `${site.origin}/#organization` },
  image: `${site.origin}/assets/images/${entry.image}-${entry.width}.webp`,
});

export const equipmentLinks = [
  ["Equipamentos", "/equipamentos/"],
  ["Escavadeiras", "/equipamentos/escavadeiras/"],
  ["Tratores de esteira", "/equipamentos/tratores-de-esteira/"],
  ["Pás carregadeiras", "/equipamentos/pas-carregadeiras/"],
];

const entries = [
  {
    route: "/equipamentos/escavadeiras/",
    title: "Manutenção de cilindros de escavadeiras em MG | HidrauTractor",
    heading: "Cilindros de escavadeiras: identifique o movimento",
    description:
      "Recuperação e fabricação de cilindros de escavadeiras em Minas Gerais. Identifique lança, braço e caçamba para solicitar orçamento à HidrauTractor.",
    intro:
      "Lança, braço e caçamba trabalham em posições diferentes. Registre a função, o comportamento observado e o contexto da operação antes de encaminhar uma consulta técnica.",
    image: "equipe",
    widths: [640, 1200],
    width: 1200,
    height: 675,
    imageAlt: "Escavadeira e veículos de apoio no pátio da New Tractor",
    about: "Cilindros hidráulicos de escavadeiras",
    contactTitle: "Apresente a escavadeira e o cilindro",
    content: (site) =>
      section(
        "mapa-cilindros-escavadeira",
        "A função dá nome ao cilindro",
        `<p>Uma escavadeira costuma reunir cilindros associados à lança, ao braço e à caçamba. A posição, a ligação mecânica e o código podem mudar conforme fabricante, modelo, série, alcance, implemento e configuração.</p><h3>Lança ou boom</h3><p>O cilindro da lança participa da elevação e do posicionamento do conjunto principal. A página de peça da Caterpillar descreve esse componente como um atuador que converte energia hidráulica em movimento da lança e identifica barril, pistão e haste no conjunto.</p><h3>Braço ou stick</h3><p>O cilindro do braço altera a extensão e a retração do braço entre a lança e a caçamba. O nome “stick” aparece em catálogos de fabricantes; registre também a função em português e a posição na máquina.</p><h3>Caçamba</h3><p>O cilindro associado à caçamba movimenta a ligação do implemento para escavar, carregar ou descarregar. Uma troca de caçamba ou acessório pode alterar a leitura do componente, por isso fotos e identificação devem mostrar a configuração em uso.</p>`,
      ) +
      section(
        "sintomas-cilindro-escavadeira",
        "Ligue o sinal ao movimento observado",
        `<p>Para uma conversa de manutenção, descreva o que acontece e em qual função, sem concluir à distância que o cilindro é a causa:</p>${list([
          "vazamento visível, marca de óleo ou alteração perto da haste, conexão ou corpo; indique a localização observada",
          "deriva ou dificuldade para manter a posição da lança, do braço ou da caçamba",
          "movimento mais lento, ciclo mais demorado, ruído, vibração ou diferença entre movimentos",
          "risco, amassado ou curvatura aparente na haste, dano no conjunto ou vedação visível",
          "condição com carga ou sem carga, a frio ou a quente, frequência e momento em que o sinal começou",
        ])}<p>Uma alteração de velocidade, força ou retenção também pode envolver válvulas, mangueiras, comando ou outros componentes do circuito. O relato ajuda a definir a avaliação; não substitui inspeção qualificada nem procedimento do fabricante.</p>`,
      ) +
      section(
        "identificacao-escavadeira",
        "Código e configuração antes da peça",
        list([
          "fabricante, modelo, número de série disponível, frota e tipo de escavadeira",
          "função e posição: lança, braço, caçamba ou outro implemento; informe lado ou localização quando fizer sentido",
          "código da peça, plaqueta, marcações e página do catálogo; uma medida isolada não confirma compatibilidade",
          "comprimento recolhido e estendido, curso aparente, diâmetros preliminares, olhais, pinos, fixações, portas e conexões",
          "fotos do conjunto montado, da identificação e das extremidades; se removido, informe peso e dimensões para logística",
          "aplicação, material trabalhado, horímetro disponível, histórico de fluido ou intervenção e prioridade da operação",
        ]),
      ) +
      section(
        "encaminhamento-escavadeira",
        "Uma demanda pode envolver mais de um componente",
        `<p>A HidrauTractor executa <a href="/hidrautractor/recuperacao-cilindros-hidraulicos/">recuperação de cilindros hidráulicos</a> e <a href="/hidrautractor/fabricacao-cilindros-hidraulicos/">fabricação de novos conjuntos</a>. A identificação e a aplicação orientam o plano de reparo ou o projeto. Para peça nova, código, desenho, especificação e quantidade ajudam a <a href="/parts/">Parts</a> a organizar a consulta. Uma peça existente com questão geométrica pode ser apresentada à <a href="/usinagem/">Usinagem</a>, conforme análise da peça.</p><p>Se o relato também incluir corrente, roletes, sapatas ou rodas-guia, separe essa parte para a frente <a href="/rodantes/">Rodantes</a>. Trinca ou deformação na estrutura de um implemento pertence a uma conversa de <a href="/calderaria/">Calderaria</a>. A separação evita tratar a escavadeira inteira como um único item.</p><p><a class="text-link" href="/contato/">Enviar uma consulta com esses dados</a></p>`,
      ) +
      section(
        "minas-escavadeira",
        "Minas Gerais, operação e logística",
        `<p>A base do Grupo fica em Belo Horizonte. Informe o município da escavadeira, as condições de acesso, se o cilindro está instalado ou pode ser enviado, peso e dimensões conhecidos e a janela de parada. A localização orienta a conversa logística; atendimento, mobilização, capacidade e prazo são avaliados para cada demanda.</p><p>Veja o contexto de <a href="/atuacao/minas-gerais/">atuação em Minas Gerais</a> e mantenha a identificação da máquina junto das fotos e documentos.</p>`,
      ) +
      faqSection("faq-escavadeira", [
        [
          "O cilindro da lança é igual ao do braço?",
          "Não. Eles participam de ligações e movimentos diferentes. O fabricante, o modelo, a série, a configuração e o código devem confirmar qual componente está sendo consultado.",
        ],
        [
          "Uma foto identifica o cilindro da escavadeira?",
          "A foto ajuda a localizar o conjunto e registrar a condição, mas normalmente precisa ser acompanhada de identificação da máquina, código ou plaqueta, função, conexões e medidas disponíveis.",
        ],
        [
          "Um vazamento confirma que o cilindro precisa ser recuperado?",
          "Não. O vazamento é um sinal a registrar. A origem, o componente envolvido e o encaminhamento dependem de inspeção e da documentação da máquina.",
        ],
      ]) +
      referencesSection("referencias-escavadeira", [
        ["Caterpillar — cilindro de lança 373-1111", "https://parts.cat.com/en/catcorp/product/373-1111", "exemplo de função, partes básicas e aplicação específica por modelo"],
        ["Caterpillar — cilindro do braço 397-6986", "https://parts.cat.com/en/catcorp/product/397-6986", "exemplo de movimento do braço e alerta de configuração"],
        ["Caterpillar — cilindro da caçamba 645-4504", "https://parts.cat.com/en/catcorp/product/645-4504", "exemplo de posição e movimento da caçamba"],
        ["John Deere — 792 Excavator", "https://www.deere.com/assets/pdfs/common/products/excavators/excavator-mid-size-792.pdf", "exemplo de documentação própria para cilindros de lança, braço e caçamba"],
      ]),
  },
  {
    route: "/equipamentos/tratores-de-esteira/",
    title: "Manutenção de cilindros de tratores em MG | HidrauTractor",
    heading: "Cilindros de trator de esteira: lâmina e ripper",
    description:
      "Recuperação e fabricação de cilindros de tratores de esteira em MG. Identifique lâmina e ripper para solicitar orçamento à HidrauTractor.",
    intro:
      "No trator de esteira, a lâmina e os acessórios podem usar movimentos e circuitos diferentes. Identifique a configuração e o movimento afetado antes de discutir uma demanda hidráulica.",
    image: "material-rodante",
    widths: [640, 1200],
    width: 1200,
    height: 675,
    imageAlt: "Conjuntos de esteiras no acervo da New Tractor",
    about: "Cilindros hidráulicos de tratores de esteira",
    contactTitle: "Apresente o trator de esteira e o circuito",
    content: (site) =>
      section(
        "mapa-cilindros-trator",
        "Lâmina não é um único movimento",
        `<p>Um trator de esteira pode usar cilindros para elevar a lâmina, inclinar o conjunto e alterar seu ângulo. A configuração do implemento e do comando define quais movimentos existem e como eles são identificados.</p><h3>Elevação da lâmina</h3><p>Registre se o movimento observado é levantar, baixar, sustentar ou flutuar a lâmina. O catálogo Komatsu D31/D37-22 documenta posições próprias para esse circuito; essa referência é específica da configuração apresentada.</p><h3>Inclinação e angulação</h3><p>“Tilt” e “ângulo” descrevem movimentos diferentes no catálogo Komatsu. Informe o sentido e a função em linguagem de operação, além do nome usado pela equipe, para não confundir cilindro, válvula e ligação da lâmina.</p><h3>Ripper e outros acessórios</h3><p>O mesmo catálogo prevê válvula adicional para o ripper. Isso mostra por que a presença do acessório, o modelo e a versão da lâmina devem entrar na consulta; nem todo trator de esteira possui a mesma configuração.</p>`,
      ) +
      section(
        "sintomas-cilindro-trator",
        "Observe o ciclo da lâmina sem fechar diagnóstico",
        `<p>Registre o comportamento no trabalho que estava sendo executado:</p>${list([
          "lâmina demora mais para subir, baixar, inclinar ou angular; indique o movimento e a posição em que ocorre",
          "a lâmina deriva, não mantém a posição esperada ou muda de comportamento sob carga",
          "ruído, vibração, vazamento, haste marcada ou dano aparente no cilindro e nas fixações",
          "diferença entre lados, entre movimentos ou depois de trocar implemento, ajustar o conjunto ou mudar de terreno",
          "temperatura, carga, inclinação, frequência, horímetro e histórico de intervenções ou fluido, quando conhecidos",
        ])}<p>Um sinal hidráulico pode estar relacionado ao cilindro, ao comando, às linhas ou à articulação da lâmina. O registro organiza a conversa e não substitui o manual do equipamento ou uma avaliação no componente.</p>`,
      ) +
      section(
        "identificacao-trator",
        "Modelo, lâmina e acessório fazem parte do código",
        list([
          "fabricante, modelo, número de série disponível, frota e identificação do trator de esteira",
          "tipo de lâmina e acessórios instalados, incluindo ripper quando houver; fotografe a configuração real",
          "movimento afetado, sentido, posição do cilindro, código, plaqueta, desenho e página de catálogo disponíveis",
          "comprimentos recolhido e estendido, curso aparente, diâmetros preliminares, olhais, pinos, suportes, portas e conexões",
          "fotos do conjunto e do ponto de fixação, com o equipamento isolado de forma segura; não remova componente pressurizado para fotografar",
          "aplicação, solo, inclinação, carga, prioridade, cidade, acesso e possibilidade de transportar o componente",
        ]),
      ) +
      section(
        "encaminhamento-trator",
        "Separe hidráulica, lâmina e material rodante",
        `<p>A HidrauTractor executa <a href="/hidrautractor/recuperacao-cilindros-hidraulicos/">recuperação de cilindros hidráulicos</a> e <a href="/hidrautractor/fabricacao-cilindros-hidraulicos/">fabricação de novos conjuntos</a>. A identificação e a aplicação orientam o plano de reparo ou o projeto. Quando a necessidade for peça nova, informe código, desenho, aplicação e quantidade à <a href="/parts/">Parts</a>. Uma peça com demanda de geometria pode seguir para a <a href="/usinagem/">Usinagem</a>, conforme análise dimensional.</p><p>Se a lâmina, o ripper ou outra estrutura apresentar trinca, deformação ou desgaste estrutural, a demanda pode ser relacionada à <a href="/calderaria/">Calderaria</a>. Correntes, sapatas, roletes, rodas-guia e trucks pertencem ao escopo de <a href="/rodantes/">Rodantes</a> e devem ser descritos separadamente.</p><p><a class="text-link" href="/contato/">Enviar a identificação do trator para conversa</a></p>`,
      ) +
      section(
        "minas-trator",
        "Operação em Minas Gerais e acesso ao equipamento",
        `<p>Para uma operação em Minas Gerais, informe município, distância e condição de acesso, além da janela de parada e de onde o cilindro está localizado. A base institucional do Grupo fica em Belo Horizonte; atendimento, transporte, mobilização, capacidade e prazo são definidos conforme a demanda concreta.</p><p>Consulte a página de <a href="/atuacao/minas-gerais/">atuação em Minas Gerais</a> e mantenha o manual ou catálogo do trator junto do pedido.</p>`,
      ) +
      faqSection("faq-trator", [
        [
          "Este conteúdo vale para qualquer trator?",
          "Ele trata de tratores de esteira. Tratores agrícolas e outras máquinas têm aplicações e configurações próprias e precisam ser identificados separadamente.",
        ],
        [
          "Todo trator de esteira tem cilindro de ripper?",
          "Não é seguro presumir isso. O ripper e seu comando dependem da configuração da máquina; informe se o acessório está instalado e confira o catálogo aplicável.",
        ],
        [
          "A lâmina lenta prova falha no cilindro?",
          "Não. Velocidade, deriva ou perda de força são sinais para registrar. Válvulas, linhas, articulações e outras partes do circuito também podem participar do comportamento.",
        ],
      ]) +
      referencesSection("referencias-trator", [
        ["Komatsu — D31/D37-22 Crawler Dozer", "https://www.komatsu.com/content/dam/komatsu/websites/middle-east/en-ae/documents/brochure-pdf/D37EX_PX_22_CEN00334_02.pdf", "exemplo de circuitos e posições da lâmina e de válvula adicional para ripper"],
        ["Caterpillar — D9 Large Dozer", "https://www.cat.com/en_US/products/new/equipment/dozers/large-dozers/104260.html", "referência OEM adicional para movimentos e configuração de lâmina"],
        ["Caterpillar — indicadores de cilindro hidráulico", "https://www.cat.com/en_US/support/maintenance/self-service-options/boom-cylinder.html", "sinais gerais a registrar, sem transferir processo ou diagnóstico para o Grupo"],
      ]),
  },
  {
    route: "/equipamentos/pas-carregadeiras/",
    title: "Manutenção de cilindros de carregadeiras em MG | HidrauTractor",
    heading: "Cilindros de pá carregadeira: elevação, inclinação e direção",
    description:
      "Recuperação e fabricação de cilindros de pás carregadeiras em MG. Identifique elevação, inclinação e direção para solicitar orçamento à HidrauTractor.",
    intro:
      "Na pá carregadeira, o conjunto de implementos e o sistema de direção têm papéis diferentes. Nomeie o movimento afetado, a configuração da caçamba e os dados da máquina antes da consulta.",
    image: "concha-patio",
    widths: [640, 1200],
    width: 1200,
    height: 612,
    imageAlt: "Caçamba de máquina pesada no pátio da New Tractor",
    about: "Cilindros hidráulicos de pás carregadeiras",
    contactTitle: "Apresente a pá carregadeira e o movimento",
    content: (site) =>
      section(
        "mapa-cilindros-carregadeira",
        "Dois sistemas, perguntas diferentes",
        `<p>Uma pá carregadeira articula a máquina e movimenta seu implemento por circuitos que não devem ser misturados na primeira descrição. Na ficha técnica da Cat 995, os cilindros de elevação e inclinação aparecem no sistema de implementos, enquanto a direção é apresentada em seção hidráulica própria.</p><h3>Elevação</h3><p>O cilindro de elevação participa do levantamento do braço e da caçamba. Registre a posição e o movimento que mudaram, além do implemento instalado e do ciclo em que o comportamento aparece.</p><h3>Inclinação da caçamba</h3><p>O cilindro de inclinação altera a posição da caçamba no carregamento e na descarga. A geometria da articulação, a caçamba e os acessórios fazem parte da identificação; não compare apenas o diâmetro aparente entre máquinas.</p><h3>Direção</h3><p>Uma queixa de direção pertence a outro circuito da máquina e precisa ser nomeada como tal. Não use o relato de uma articulação lenta para concluir que o cilindro de elevação ou inclinação é o componente responsável.</p>`,
      ) +
      section(
        "sintomas-cilindro-carregadeira",
        "Descreva a função e a condição de carga",
        `<p>O relato de operação fica mais útil quando responde a quatro perguntas: qual movimento, em que condição, com qual frequência e desde quando?</p>${list([
          "vazamento, marca de óleo, dano ou alteração visível na haste, conexão, corpo ou fixação",
          "elevação ou inclinação mais lenta, ciclo mais demorado, ruído ou movimento irregular",
          "dificuldade para manter a caçamba na posição, deriva ou diferença entre levantar e inclinar",
          "comportamento com caçamba vazia ou carregada, a frio ou a quente, em piso ou inclinação específicos",
          "mudança depois de troca de implemento, intervenção, manutenção do fluido ou alteração da aplicação",
        ])}<p>Esses sinais não isolam uma causa. Mangueiras, válvulas, articulação e carga também influenciam o comportamento. A avaliação deve seguir a documentação do fabricante e as regras de segurança do local.</p>`,
      ) +
      section(
        "identificacao-carregadeira",
        "Caçamba, articulação e código no mesmo registro",
        list([
          "fabricante, modelo, número de série disponível, frota e tipo de pá carregadeira",
          "movimento: elevação, inclinação, direção ou outro circuito identificado; indique qual comando e qual lado, quando aplicável",
          "caçamba, garfo ou outro implemento, configuração da articulação, tarefa e material movimentado",
          "código, plaqueta, desenho, conexões e medidas preliminares de comprimento, curso, tubo, haste, olhais e fixações",
          "fotos do equipamento inteiro, do cilindro e das conexões; se a peça estiver removida, informe peso, dimensões e condição de envio",
          "carga, frequência dos ciclos, terreno, horímetro, intervenções anteriores, cidade, acesso e prioridade",
        ]),
      ) +
      section(
        "encaminhamento-carregadeira",
        "Cilindro e caçamba podem seguir por caminhos distintos",
        `<p>A HidrauTractor executa <a href="/hidrautractor/recuperacao-cilindros-hidraulicos/">recuperação de cilindros hidráulicos</a> e <a href="/hidrautractor/fabricacao-cilindros-hidraulicos/">fabricação de novos conjuntos</a>. Apresente identificação, movimento e condição para definir o plano de reparo ou o projeto. Para uma peça nova, use código, desenho, aplicação e quantidade na consulta à <a href="/parts/">Parts</a>. Uma peça que demande avaliação geométrica pode ser apresentada à <a href="/usinagem/">Usinagem</a>.</p><p>Se o problema estiver na estrutura, nas soldas, no perfil ou nos pontos de fixação da caçamba, veja a <a href="/calderaria/">Calderaria</a> e a <a href="/servicos/reforma-cacambas-conchas/">reforma de caçambas e conchas</a>. Não misture um dano estrutural com a identificação de um cilindro. Em uma versão de máquina sobre esteiras, os itens do material rodante podem ser separados para <a href="/rodantes/">Rodantes</a>.</p><p><a class="text-link" href="/contato/">Enviar uma consulta com fotos e identificação</a></p>`,
      ) +
      section(
        "minas-carregadeira",
        "Minas Gerais, acesso e transporte",
        `<p>Informe o município de operação, o tipo de acesso, a possibilidade de remover ou enviar o cilindro e a janela de parada. A base do Grupo fica em Belo Horizonte, mas cada atendimento é avaliado conforme componente, documentação, transporte, mobilização, capacidade e prazo.</p><p>Veja a referência de <a href="/atuacao/minas-gerais/">atuação em Minas Gerais</a> e envie o histórico da máquina junto da demanda.</p>`,
      ) +
      faqSection("faq-carregadeira", [
        [
          "O cilindro de elevação é o mesmo da inclinação?",
          "Não se deve presumir isso. São movimentos diferentes e a máquina pode usar componentes, montagens e códigos próprios para cada função.",
        ],
        [
          "Uma caçamba pesada explica sozinha um movimento lento?",
          "Não. A carga é um dado importante do relato, mas o comportamento também pode envolver circuito, comando, mangueiras, articulação ou cilindro. Registre as condições sem fechar diagnóstico.",
        ],
        [
          "Quando a caçamba deve ser encaminhada à Calderaria?",
          "Quando a conversa envolve estrutura, solda, trinca, deformação, perfil ou fixação da caçamba. A identificação de um cilindro segue uma consulta própria e pode exigir documentação da máquina.",
        ],
      ]) +
      referencesSection("referencias-carregadeira", [
        ["Caterpillar — 995 Large Wheel Loader", "https://www.cat.com/en_US/products/new/equipment/wheel-loaders/large-wheel-loaders/118720.html", "exemplo de separação entre cilindros de elevação/inclinação e sistema de direção"],
        ["Caterpillar — cilindro de lança e sinais de manutenção", "https://www.cat.com/en_US/support/maintenance/self-service-options/boom-cylinder.html", "referência para registrar vazamento, deriva, ciclo e condição da haste"],
        ["Parker — Mobile Cylinder Products", "https://discover.parker.com/MobileCylinderProducts", "vocabulário de cilindros hidráulicos móveis, sem estabelecer oferta do Grupo"],
      ]),
  },
];

export function createEquipmentPages({ pageHero, contactBand, breadcrumbSchema, site }) {
  return entries.map((entry) => {
    const parent = { name: "Equipamentos", route: "/equipamentos/" };
    const crumbs = [parent, { name: entry.heading, route: entry.route }];
    const schema = [breadcrumbSchema(crumbs)];
    if (entry.article !== false) schema.push(articleSchema(site, entry));
    return {
      route: entry.route,
      output: `${entry.route.slice(1)}index.html`,
      title: entry.title,
      description: entry.description,
      active: "equipamentos",
      about: { "@type": "Thing", name: entry.about },
      lastModified: entry.lastModified ?? "2026-09-08",
      ogImage: `/assets/images/${entry.image}-${entry.width}.webp`,
      ogImageWidth: entry.width,
      ogImageHeight: entry.height,
      ogImageAlt: entry.imageAlt,
      schema,
      body:
        pageHero({
          eyebrow: "APLICAÇÕES EM MÁQUINAS PESADAS",
          title: entry.heading,
          intro: entry.intro,
          breadcrumb: crumbs.map((item) => ({ label: item.name, href: item.route })),
          image: entry.image,
          imageAlt: entry.imageAlt,
          imageWidths: entry.widths,
          imageWidth: entry.width,
          imageHeight: entry.height,
        }) +
        `<div class="shell article-credit"><p>Conteúdo editorial do Grupo New Tractor · Atualizado em 8 de setembro de 2026</p></div><nav class="shell company-resources" aria-label="Serviços para cilindros hidráulicos"><a class="text-link" href="/hidrautractor/recuperacao-cilindros-hidraulicos/">Recuperar um cilindro</a><a class="text-link" href="/hidrautractor/fabricacao-cilindros-hidraulicos/">Fabricar um novo cilindro</a></nav>` +
        entry.content(site) +
        section("consulta-equipamentos", "Complete a identificação da sua demanda", `<p>O <a href="/guias/avaliacao-cilindros-hidraulicos/">guia de avaliação de cilindros hidráulicos</a> ajuda a separar o cilindro completo, o pistão ou êmbolo, a haste e os elementos de vedação. Use fotos e medidas já disponíveis com segurança; não movimente ou desmonte um conjunto para produzir dados da consulta.</p><p>Consulte também ${equipmentLinks.filter(([, route]) => route !== entry.route).map(([label, route]) => `<a href="${route}">${label.toLocaleLowerCase("pt-BR")}</a>`).join(", ")}.</p>`, "sand") +
        contactBand(entry.contactTitle),
    };
  });
}
