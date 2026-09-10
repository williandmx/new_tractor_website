import { hydraulicLandingSections } from "./hydraulic-content.mjs";

// Industrial brand architecture declared by the owner; not a legal-entity registry.
// Offer boundaries and pending evidence are recorded in docs/source-ledger.md.
// Primary technical references consulted on 2026-09-08:
// https://www.cat.com/en_US/articles/for-owners/dozer-undercarriage-maintenance.html
// https://www.cat.com/en_US/products/new/parts/undercarriage/undercarriage-track-loaders.html
// They support the component vocabulary and the relation between application, ground
// conditions and wear; they do not transfer OEM products, warranties or capabilities.
export const companies = [
  {
    slug: "rodantes",
    lastModified: "2026-09-10",
    label: "Rodantes",
    name: "New Tractor Rodantes",
    specialty: "Material rodante",
    summary: "Avaliação, recuperação e acompanhamento de material rodante para manter escavadeiras e tratores de esteira no ritmo da operação.",
    title: "Material rodante de escavadeira e trator | New Tractor Rodantes",
    description: "Avaliação, recuperação e acompanhamento de material rodante para escavadeiras e tratores de esteira, com foco em desgaste, manutenção e planejamento.",
    headline: "O rodante certo sustenta o ritmo da operação.",
    intro: "Rosários, sapatas, roletes, rodas-guia e trucks sustentam o trabalho de escavadeiras e tratores de esteira. A New Tractor Rodantes avalia o desgaste, recupera componentes e acompanha a condição do conjunto para ajudar a planejar a manutenção.",
    caption: "Material rodante · acervo real da New Tractor",
    sectionTitle: "Material rodante de escavadeiras e tratores de esteira.",
    context: "Terreno, aplicação e rotina de trabalho explicam muito do desgaste do conjunto de esteiras. Com esses dados em mãos, a manutenção ganha uma base mais clara para decidir o que fazer e quando programar a intervenção.",
    pillars: [
      ["Avaliação de desgaste", "Equipamento, modelo, condição, fotos, medições e histórico dão à equipe a referência para entender o conjunto."],
      ["Recuperação", "A New Tractor Rodantes atua na manutenção e no recondicionamento de rosários, sapatas, roletes, rodas-guia, trucks e conjuntos de esteiras."],
      ["Acompanhamento", "Medições organizadas com a manutenção ajudam a enxergar a evolução do desgaste e a programar as intervenções."],
    ],
    questionsTitle: "O que a manutenção precisa saber antes de avaliar?",
    questionsIntro: "Compras, PCM e manutenção trabalham melhor quando o conjunto, o desgaste e a prioridade chegam no mesmo registro.",
    questions: [
      ["Componente e lado", "Informe se a demanda envolve rosário, sapata, rolete, roda-guia, truck ou conjunto completo. Registre o lado da máquina e a quantidade."],
      ["Sinal de desgaste", "Descreva desgaste irregular, folga, trinca, deformação ou outra condição observada. Fotos de contexto e de detalhe ajudam a localizar o ponto."],
      ["Rotina da operação", "Inclua fabricante, modelo, aplicação, terreno, horímetro disponível e histórico de troca, reparo ou medição do componente."],
      ["Prioridade da intervenção", "Diga se a máquina está parada, opera com restrição ou tem uma parada programada. Cidade e logística entram na avaliação."],
    ],
    decisionTitle: "Da inspeção ao encaminhamento",
    decisionIntro: "A condição do conjunto mostra se o próximo passo é acompanhar, recuperar ou programar a manutenção.",
    decisionSteps: [
      ["01 · Identificar", "Relacione equipamento, fabricante, modelo, lado e componente para que a medida ou a foto não perca sua referência."],
      ["02 · Ler a condição", "Combine desgaste observado, medições disponíveis, aplicação e histórico. Uma imagem isolada não define o estado do conjunto."],
      ["03 · Planejar", "A avaliação direciona a recuperação, a manutenção ou o acompanhamento e ajuda a programar o próximo passo da operação."],
    ],
    faq: [
      ["Quais componentes entram na avaliação de material rodante?", "A New Tractor Rodantes trabalha com rosários, sapatas, roletes, rodas-guia, trucks e conjuntos de escavadeiras e tratores de esteira para avaliação, manutenção, recuperação e acompanhamento."],
      ["Uma foto basta para definir o desgaste?", "Não. A foto dá contexto, mas a leitura depende da identificação do componente, de medições disponíveis, da aplicação e do histórico de manutenção."],
      ["O monitoramento substitui a manutenção da equipe?", "Não. O acompanhamento organiza medições e contexto para atuar junto da manutenção do cliente e apoiar o planejamento da intervenção."],
    ],
    links: [
      ["Manutenção de material rodante", "/servicos/manutencao-material-rodante/"],
      ["Monitoramento de desgaste", "/servicos/monitoramento-material-rodante/"],
      ["Componentes de material rodante", "/componentes/"],
      ["Rodas-guia", "/componentes/rodas-guia/"],
      ["Roletes de esteira", "/componentes/roletes-de-esteira/"],
      ["Correntes e sapatas", "/componentes/correntes-sapatas-esteiras/"],
      ["Como organizar os registros de inspeção", "/guias/inspecao-material-rodante/"],
    ],
    requestTitle: "Seu rodante precisa de avaliação ou recuperação?",
    requestIntro: "Envie os dados do conjunto para a equipe entender o desgaste e indicar o melhor caminho de manutenção.",
    checklist: ["Equipamento, fabricante e modelo", "Componente, quantidade e condição observada", "Fotos, medições e histórico disponível", "Cidade da operação e prioridade"],
    action: "Solicitar avaliação de rodantes",
    cardCta: "Avaliar rodantes",
  },
  {
    slug: "hidrautractor",
    lastModified: "2026-09-10",
    label: "HidrauTractor",
    name: "HidrauTractor",
    specialty: "Hidráulica",
    summary: "Recuperação e fabricação de cilindros hidráulicos para colocar a força da máquina de volta em movimento.",
    title: "Recuperação e fabricação de cilindros hidráulicos | HidrauTractor",
    description: "Recuperação e fabricação de cilindros hidráulicos para máquinas pesadas, com trabalho definido pela aplicação e pela condição do conjunto.",
    headline: "Força hidráulica para a máquina voltar ao trabalho.",
    intro: "A HidrauTractor recupera e fabrica cilindros hidráulicos para máquinas pesadas. A condição do conjunto, a aplicação e a identificação da peça orientam o trabalho do início ao fim.",
    caption: "HidrauTractor · componente e aplicação em contexto industrial",
    sectionTitle: "Recuperação e fabricação de cilindros hidráulicos para máquinas pesadas.",
    context: "A condição do cilindro e a aplicação mostram se o melhor caminho é recuperar um conjunto existente ou fabricar um novo. A análise organiza o trabalho e a proposta para cada máquina.",
    pillars: [
      ["Recuperação", "Para um cilindro em uso, a equipe avalia camisa, haste, pistão, guias, vedações e fixações conforme a condição encontrada."],
      ["Fabricação", "Para um novo conjunto, aplicação, dimensões, fixações, conexões, desenho ou amostra orientam a fabricação."],
      ["Aplicação", "Escavadeiras, tratores de esteira e pás carregadeiras têm movimentos e configurações próprios. A máquina é a referência para o cilindro."],
    ],
    questionsTitle: "O que informar para recuperar ou fabricar um cilindro?",
    questionsIntro: "Equipamento, aplicação e condição observada ajudam a equipe a comparar a recuperação de um conjunto existente com a fabricação de um novo.",
    questions: [
      ["Recuperar ou fabricar", "Diga se há um cilindro para avaliar ou se a necessidade é um conjunto novo. A decisão depende da condição, da identificação e da aplicação."],
      ["Máquina e aplicação", "Informe equipamento, fabricante, modelo, função ou movimento do cilindro, cidade da operação e prioridade da demanda."],
      ["Código, desenho e medidas", "Envie código ou plaqueta, desenho, amostra e medidas disponíveis. Fotos de conexões e fixações ajudam a caracterizar o conjunto."],
      ["Condição e histórico", "Relate vazamento, deriva, perda de força, dano aparente e intervenções conhecidas, separando o sintoma do diagnóstico técnico."],
    ],
    decisionTitle: "Da aplicação ao escopo hidráulico",
    decisionIntro: "A identificação da máquina e do componente evita desencontro de informações e dá base para escolher entre recuperação e fabricação.",
    decisionSteps: [
      ["01 · Identificar", "Relacione máquina, função, componente e identificação disponível antes de escolher o encaminhamento."],
      ["02 · Comparar", "Cruze condição, aplicação, documentação, medidas e histórico para separar recuperação e fabricação."],
      ["03 · Programar", "A proposta organiza o trabalho, a peça e a logística de acordo com a necessidade da operação."],
    ],
    faq: [
      ["Quando recuperar e quando fabricar um cilindro novo?", "A recuperação parte de um cilindro existente e da condição de camisa, haste, pistão, guias, vedações e fixações. A fabricação parte dos requisitos da máquina e do conjunto. A equipe compara os dois caminhos para orientar a proposta."],
      ["Quais etapas entram na recuperação?", "Identificação, desmontagem, limpeza, avaliação dimensional e estrutural, definição dos componentes e processos, montagem e verificações conforme o escopo combinado. O kit de vedação é escolhido conforme a geometria, o fluido e a aplicação."],
      ["O que preciso apresentar para fabricar?", "Informe máquina, função, aplicação, fabricante e modelo, código ou desenho ou amostra, medidas conhecidas, fixações, conexões, quantidade e cidade. Esses dados organizam a análise do projeto e da proposta."],
      ["A HidrauTractor atende demandas em Minas Gerais?", "A HidrauTractor tem base em Belo Horizonte e recebe demandas em Minas Gerais e em outras localidades. Mobilização, transporte e escopo são definidos por demanda, conforme o equipamento e a logística da operação."],
    ],
    links: [["Recuperação de cilindros hidráulicos", "/hidrautractor/recuperacao-cilindros-hidraulicos/"], ["Fabricação de cilindros hidráulicos", "/hidrautractor/fabricacao-cilindros-hidraulicos/"], ["Cilindros de escavadeiras", "/equipamentos/escavadeiras/"], ["Cilindros de tratores de esteira", "/equipamentos/tratores-de-esteira/"], ["Cilindros de pás carregadeiras", "/equipamentos/pas-carregadeiras/"], ["Avaliação de cilindros hidráulicos", "/guias/avaliacao-cilindros-hidraulicos/"], ["Setores e aplicações", "/setores/"]],
    requestTitle: "Seu cilindro precisa de recuperação ou fabricação?",
    requestIntro: "Compartilhe os dados do equipamento e do componente para a equipe preparar a cotação.",
    checklist: ["Recuperar ou fabricar", "Máquina e aplicação", "Código, desenho ou amostra", "Fotos do cilindro e cidade"],
    action: "Solicitar cotação de cilindro",
    cardCta: "Recuperar ou fabricar cilindro",
  },
  {
    slug: "usinagem",
    lastModified: "2026-09-10",
    label: "Usinagem",
    name: "New Tractor Usinagem",
    specialty: "Usinagem pesada",
    summary: "Usinagem pesada para recuperar medidas e função de componentes de máquinas.",
    title: "Usinagem pesada e mandrilhamento de componentes | New Tractor",
    description: "Usinagem pesada para recuperar medidas e função de componentes de máquinas, com torno, mandrilhamento e centro de usinagem.",
    headline: "Recuperar a medida é recuperar a função da peça.",
    intro: "A New Tractor Usinagem recupera medidas e função de componentes pesados. Torno, mandrilhamento em mandrilhadora e centro de usinagem entram no trabalho de acordo com a peça e sua aplicação.",
    caption: "Usinagem · recuperação de componentes no ambiente industrial",
    sectionTitle: "Usinagem pesada e mandrilhamento para recuperação dimensional.",
    context: "A recuperação dimensional começa pela leitura do desgaste e da função do componente. Esses dados orientam a sequência de usinagem e a conferência do trabalho; mandrilhamento e mandrilamento nomeiam a mesma família de operação.",
    pillars: [
      ["Leitura da peça", "Peça, desenho, código ou medições disponíveis ajudam a entender o desgaste. Fotos e identificação do equipamento completam o contexto."],
      ["Recuperação dimensional", "Torno, mandrilhamento — também chamado mandrilamento — e centro de usinagem entram de acordo com o componente."],
      ["Conferência", "As medidas e condições de entrega entram no trabalho combinado para cada peça."],
    ],
    questionsTitle: "O que muda a avaliação de uma peça desgastada?",
    questionsIntro: "Para usinar bem uma peça, a equipe precisa ligar sua geometria à função que ela exerce na máquina.",
    questions: [
      ["Condição e função", "Descreva qual superfície, alojamento ou região perdeu medida e qual função o componente cumpre no conjunto. Fotos de detalhe e de posição ajudam."],
      ["Referência dimensional", "Envie desenho e revisão, código, amostra ou medições disponíveis. Identifique o que é referência do fabricante e o que é medida preliminar."],
      ["Material e histórico", "Informe o material conhecido, intervenções anteriores e o motivo da retirada. Esses dados ajudam a discutir a sequência adequada para a peça."],
      ["Quantidade e transporte", "Registre quantidade, dimensões, peso, cidade de origem e restrições de envio. A logística faz parte da avaliação comercial."],
    ],
    decisionTitle: "Da peça à recuperação dimensional",
    decisionIntro: "A usinagem começa entendendo o componente, sua aplicação e a medida que precisa ser recuperada.",
    decisionSteps: [
      ["01 · Ler", "Identifique a peça, a função, o desgaste e as referências disponíveis no desenho, código, amostra ou medição."],
      ["02 · Definir a sequência", "Torno, mandrilhamento em mandrilhadora e centro de usinagem entram conforme a geometria, o material e o escopo técnico da peça."],
      ["03 · Conferir", "As medidas e as condições de entrega são combinadas para cada componente antes da conclusão do trabalho."],
    ],
    faq: [
      ["Quais processos de usinagem estão divulgados?", "A New Tractor Usinagem trabalha com torno, mandrilhamento em mandrilhadora e centro de usinagem para recuperação dimensional de componentes pesados, com sequência definida por peça e escopo."],
      ["Preciso ter um desenho para iniciar a avaliação?", "Não necessariamente. Peça, código, amostra ou medições disponíveis podem iniciar a avaliação, acompanhados de fotos, equipamento e aplicação. A falta de referência pode limitar a definição do escopo."],
      ["Recuperar uma peça é o mesmo que fabricar uma peça nova?", "Não. A Usinagem atua na recuperação dimensional da peça existente. Para fabricar uma peça nova sob demanda, envie código, desenho ou especificação à New Tractor Parts."],
    ],
    links: [["Usinagem de componentes pesados", "/servicos/usinagem-componentes-maquinas-pesadas/"], ["Parts — peças sob demanda", "/parts/"], ["Calderaria", "/calderaria/"], ["Dados para cotação de peças", "/guias/cotacao-pecas-maquinas-pesadas/"], ["Setores e aplicações", "/setores/"]],
    requestTitle: "Seu componente precisa recuperar a medida?",
    requestIntro: "Envie desenho, fotos e identificação da peça para a equipe preparar a avaliação de usinagem.",
    checklist: ["Peça, equipamento e aplicação", "Desenho, código ou amostra", "Quantidade e prioridade", "Cidade e restrições de transporte"],
    action: "Solicitar avaliação de usinagem",
    cardCta: "Recuperar componente",
  },
  {
    slug: "calderaria",
    lastModified: "2026-09-10",
    label: "Calderaria",
    name: "New Tractor Calderaria",
    specialty: "Caldeiraria pesada",
    summary: "Caçambas, conchas e estruturas recuperadas para a máquina voltar ao trabalho.",
    title: "Caldeiraria pesada de máquinas em BH | New Tractor Calderaria",
    description: "Caldeiraria pesada em Belo Horizonte para recuperar caçambas de escavadeira, conchas de carregadeira e estruturas de máquinas.",
    headline: "Caçambas, conchas e estruturas para a máquina voltar ao trabalho.",
    intro: "A New Tractor Calderaria recupera caçambas de escavadeira, conchas de carregadeira e componentes pesados de máquinas. Corte, preparação e solda são definidos pela condição da peça, sua geometria e sua função.",
    caption: "Caldeiraria · recuperação estrutural no ambiente industrial",
    sectionTitle: "Caldeiraria pesada de máquinas em Belo Horizonte.",
    context: "Trinca, desgaste, deformação e aplicação mostram o caminho para recuperar caçambas, conchas e componentes pesados. A equipe considera a peça por inteiro antes de preparar o trabalho.",
    pillars: [
      ["Leitura da estrutura", "Fotos, identificação e condição observada ajudam a localizar trinca, desgaste ou deformação."],
      ["Recuperação estrutural", "Corte, preparação e solda entram no trabalho de acordo com a geometria e a função da peça."],
      ["Especialidades conectadas", "Quando a demanda também pede usinagem, rodantes ou serviço de campo, o Grupo reúne as especialidades necessárias no planejamento."],
    ],
    questionsTitle: "O que registrar antes de recuperar uma caçamba ou concha?",
    questionsIntro: "Compras, PCM e manutenção ajudam a acelerar a avaliação quando mostram a condição da peça, sua função e as restrições de retirada ou transporte.",
    questions: [
      ["Trinca, desgaste ou deformação", "Descreva onde a condição aparece, sua extensão aproximada e se evoluiu. Fotos de contexto e detalhe ajudam a localizar a região."],
      ["Componente e aplicação", "Identifique caçamba, concha, estrutura ou outro componente, além do equipamento, fabricante, modelo e trabalho executado."],
      ["Material e intervenções", "Informe material ou especificação conhecida, soldas e reparos anteriores, sem presumir que uma aparência semelhante tenha a mesma solução."],
      ["Retirada e prioridade", "Diga onde a peça está, se pode ser enviada, quais limitações de transporte existem e qual impacto a condição traz para a operação."],
    ],
    decisionTitle: "Da condição da peça ao escopo de recuperação",
    decisionIntro: "A recuperação estrutural começa entendendo a geometria, a aplicação e a condição observada antes de definir o trabalho.",
    decisionSteps: [
      ["01 · Documentar", "Registre a peça no equipamento, a área afetada e os sinais de trinca, desgaste ou deformação."],
      ["02 · Relacionar", "Cruze material, geometria, função e histórico de intervenção para separar a necessidade estrutural de uma recuperação dimensional."],
      ["03 · Recuperar", "Corte, preparação e solda entram na sequência de acordo com a condição e a função da peça."],
    ],
    faq: [
      ["Como avaliar uma caçamba de escavadeira ou concha de carregadeira?", "Identifique o equipamento e o implemento, registre trinca, desgaste ou deformação e envie fotos de contexto e detalhe. A Calderaria avalia a recuperação por caldeiraria e solda conforme a condição observada."],
      ["A New Tractor Calderaria fabrica uma caçamba nova?", "A Calderaria atua na recuperação de estruturas e componentes. Para fabricar uma peça nova sob demanda, a New Tractor Parts recebe código, desenho, amostra ou especificação."],
      ["Uma trinca autoriza a máquina a continuar trabalhando?", "Não. O registro e a avaliação ajudam a encaminhar o reparo, mas a decisão de segurança e liberação da máquina cabe aos responsáveis pela operação e manutenção."],
    ],
    links: [["Reforma de caçambas e conchas", "/servicos/reforma-cacambas-conchas/"], ["Avaliação de caçambas e conchas", "/guias/avaliacao-cacambas-conchas/"], ["Usinagem", "/usinagem/"], ["Serviço de campo", "/services/"], ["Setores e aplicações", "/setores/"]],
    requestTitle: "Sua estrutura precisa de recuperação?",
    requestIntro: "Envie fotos, identificação e aplicação do componente para a equipe avaliar a recuperação.",
    checklist: ["Componente e equipamento", "Condição observada e fotos", "Material ou especificação, se houver", "Local e prioridade"],
    action: "Solicitar recuperação estrutural",
    cardCta: "Recuperar estrutura",
  },
  {
    slug: "parts",
    label: "Parts",
    name: "New Tractor Parts",
    lastModified: "2026-09-10",
    specialty: "Peças sob demanda",
    summary: "Fabricação sob demanda de peças para máquinas pesadas, a partir de código, desenho, amostra ou especificação.",
    title: "Fabricação de peças sob demanda em Belo Horizonte | New Tractor Parts",
    description: "A New Tractor Parts fabrica peças sob demanda em Belo Horizonte para máquinas pesadas, a partir da identificação da peça, da aplicação e dos requisitos técnicos.",
    headline: "Peças fabricadas para a necessidade da sua máquina.",
    intro: "A New Tractor Parts fabrica peças sob demanda para máquinas pesadas. Código, desenho, amostra ou especificação ligam a necessidade da operação à peça que será produzida.",
    caption: "New Tractor Parts · fabricação de peças sob demanda",
    sectionTitle: "Fabricação de peças sob demanda para máquinas pesadas.",
    context: "Código, fabricante, modelo, desenho e aplicação formam a referência para orientar a fabricação da peça para a máquina. Em contratos que incluem esse atendimento, o Grupo New Tractor também fornece sobressalentes durante a reparação da máquina.",
    pillars: [
      ["Identificação da peça", "Código, fabricante, modelo, fotos, desenho, amostra ou especificação ajudam a caracterizar o que precisa ser fabricado."],
      ["Fabricação sob demanda", "A Parts organiza a fabricação de peças e componentes a partir da aplicação, dos requisitos técnicos e da quantidade necessária."],
      ["Sobressalentes em contrato", "Nos contratos que incluem esse atendimento, o Grupo New Tractor fornece sobressalentes inclusive durante a reparação da máquina."],
    ],
    questionsTitle: "O que enviar para fabricar uma peça?",
    questionsIntro: "Identificação, aplicação e requisitos técnicos ajudam a equipe a entender a necessidade e preparar uma cotação mais precisa.",
    questions: [
      ["Código, desenho ou amostra", "Informe código, fabricante e modelo. Na ausência de código, envie desenho, fotos, amostra, especificação e medidas disponíveis."],
      ["Máquina e aplicação", "Mostre onde a peça trabalha: equipamento, modelo, posição, função e condição de uso. Um conjunto e um componente podem ter referências diferentes."],
      ["Requisitos e quantidade", "Registre desenho e revisão, requisitos técnicos, quantidade e documentos exigidos pela compra. Diga também o que ainda precisa ser conferido."],
      ["Destino e programação", "Informe cidade de destino, prioridade e necessidade de entrega para que a cotação considere a operação por inteiro."],
    ],
    decisionTitle: "Da especificação à peça sob demanda",
    decisionIntro: "A fabricação começa pela referência da peça, pelo uso previsto e pelos requisitos que precisam aparecer na cotação.",
    decisionSteps: [
      ["01 · Identificar", "Relacione código, fabricante, modelo, desenho ou amostra à máquina e à posição do componente."],
      ["02 · Definir a fabricação", "A equipe confere aplicação, revisão do desenho, requisitos e quantidade para preparar a peça sob demanda."],
      ["03 · Programar o fornecimento", "A cotação organiza a fabricação, a quantidade e o envio de acordo com a necessidade da operação."],
    ],
    faq: [
      ["A New Tractor Parts fabrica peças sob demanda?", "Sim. A Parts fabrica peças para máquinas pesadas a partir de código, desenho, amostra ou especificação, sempre ligados à aplicação e aos requisitos da máquina."],
      ["Posso pedir cotação sem o código da peça?", "Sim. Envie desenho, fotos, amostra ou especificação junto do fabricante, modelo, aplicação e medidas disponíveis. Esses dados ajudam a iniciar a identificação da peça."],
      ["Como funcionam os sobressalentes em contrato?", "Nos contratos que incluem esse atendimento, o Grupo New Tractor fornece sobressalentes inclusive durante a reparação da máquina."],
      ["Parts ou serviço de recuperação?", "Procure a Parts quando a necessidade for fabricar uma peça nova sob demanda. Para recuperar um componente desgastado, a equipe direciona a demanda para Usinagem, Calderaria ou Rodantes conforme a condição e o conjunto."],
    ],
    links: [["Dados para cotação de peças", "/guias/cotacao-pecas-maquinas-pesadas/"], ["Folgas de pinos, buchas e alojamentos", "/guias/folgas-pinos-buchas-alojamentos/"], ["Usinagem", "/usinagem/"], ["Calderaria", "/calderaria/"], ["Serviço de campo", "/services/"], ["Equipamentos e aplicações", "/equipamentos/"], ["Setores e aplicações", "/setores/"]],
    requestTitle: "Precisa fabricar uma peça para sua máquina?",
    requestIntro: "Envie código, desenho, amostra ou especificação para a equipe preparar a cotação de fabricação.",
    checklist: ["Código, desenho, amostra ou especificação", "Equipamento e aplicação da peça", "Quantidade e requisitos técnicos", "Cidade de destino e programação desejada"],
    action: "Solicitar fabricação de peça",
    cardCta: "Fabricar peça sob demanda",
  },
  {
    slug: "services",
    lastModified: "2026-09-10",
    photo: {
      name: "medicao-rolete",
      widths: [640],
      width: 640,
      height: 427,
      alt: "Paquímetro posicionado para medir o diâmetro externo de um rolete de esteira",
    },
    label: "Services",
    name: "New Tractor Services",
    specialty: "Serviço de campo",
    summary: "Técnicos especializados avaliam desgaste e executam manutenção em equipamentos de linha amarela, em campo ou nas unidades industriais.",
    title: "Serviço de campo para linha amarela em MG | New Tractor Services",
    description: "Serviço de campo com técnicos especializados em linha amarela. Avaliação de desgaste e manutenção programada, com base em Belo Horizonte.",
    headline: "Cuidado em campo para reduzir as paradas da máquina.",
    intro: "A New Tractor Services atende todos os equipamentos de linha amarela com técnicos especializados em campo. A equipe avalia desgaste, executa manutenção conforme a agenda da operação e, quando o reparo pede estrutura industrial, programa a manutenção nas unidades industriais do Grupo New Tractor.",
    caption: "Medição do diâmetro de rolete · Acervo New Tractor",
    sectionTitle: "Serviço de campo e manutenção para equipamentos de linha amarela.",
    context: "Cada visita reúne avaliação de desgaste, planejamento de manutenção e a escolha do melhor local para o reparo. Agilidade e tecnologia orientam esse cuidado para ajudar a reduzir o tempo de máquina parada e dar mais tranquilidade à operação.",
    pillars: [
      ["Avaliação de desgaste", "Os técnicos avaliam a condição da máquina e dos componentes no local de trabalho para orientar a manutenção."],
      ["Manutenção conforme agenda", "A equipe pode executar a manutenção em campo de acordo com a programação da operação."],
      ["Reparo e sobressalentes", "Quando o reparo segue para a unidade industrial, a Services programa a manutenção. Em contratos que incluem esse atendimento, o Grupo fornece sobressalentes durante a reparação da máquina."],
    ],
    questionsTitle: "O que a equipe precisa saber para programar o serviço de campo?",
    questionsIntro: "Máquina, local, condição observada e janela de manutenção ajudam a organizar uma visita técnica útil para a operação.",
    questions: [
      ["Necessidade da operação", "Explique se a máquina precisa de avaliação de desgaste, manutenção programada ou reparo em unidade industrial."],
      ["Máquina e local", "Informe equipamento, fabricante, modelo, identificação da frota, local, aplicação, horímetro e condições de acesso conhecidas."],
      ["Condição e histórico", "Envie fotos, registros anteriores, data, medições disponíveis e intervenções já realizadas. Isso ajuda a equipe a chegar preparada."],
      ["Janela de manutenção", "Diga se a máquina está operando, parada ou tem uma janela programada. Inclua restrições de acesso e logística que afetem a visita."],
    ],
    decisionTitle: "Do campo à manutenção programada",
    decisionIntro: "O serviço começa entendendo a máquina e a rotina da operação para definir a melhor forma de cuidar dela.",
    decisionSteps: [
      ["01 · Planejar a visita", "A equipe recebe a identificação da máquina, o local, a condição observada e a janela disponível para manutenção."],
      ["02 · Avaliar em campo", "Os técnicos analisam o desgaste e a necessidade de manutenção com a máquina e sua operação como referência."],
      ["03 · Executar ou programar", "A manutenção pode ser executada conforme a agenda da operação ou programada nas unidades industriais do Grupo New Tractor."],
    ],
    faq: [
      ["Quais equipamentos a Services atende?", "A New Tractor Services atende todos os equipamentos de linha amarela com técnicos especializados em serviço de campo."],
      ["A Services executa manutenção em campo?", "Sim. A equipe pode avaliar o desgaste e executar a manutenção conforme a agenda definida com a operação."],
      ["Quando o reparo segue para a unidade industrial?", "Quando a manutenção pede estrutura industrial, a Services programa o reparo nas unidades industriais do Grupo New Tractor."],
      ["Como funcionam os sobressalentes em contrato?", "Nos contratos que incluem esse atendimento, o Grupo New Tractor fornece sobressalentes inclusive durante a reparação da máquina."],
      ["A avaliação de desgaste libera a máquina para continuar operando?", "A avaliação apoia o planejamento da manutenção. A decisão de segurança e liberação da máquina continua com os responsáveis pela operação e manutenção."],
    ],
    links: [["Como preparar a manutenção da operação", "/guias/avaliacao-maquinas-linha-amarela/"], ["Manutenção de material rodante", "/servicos/manutencao-material-rodante/"], ["Peças sob demanda", "/parts/"], ["Soluções técnicas", "/servicos/"], ["Atuação nacional", "/atuacao/"], ["Inspeção de material rodante", "/guias/inspecao-material-rodante/"]],
    requestTitle: "Sua máquina precisa de avaliação ou manutenção em campo?",
    requestIntro: "Envie equipamento, local e janela de manutenção para a equipe planejar uma visita técnica.",
    checklist: ["Equipamento e componentes envolvidos", "Condição observada e histórico disponível", "Fotos e necessidade de manutenção", "Local, restrições de acesso e janela desejada"],
    action: "Solicitar visita técnica",
    cardCta: "Planejar manutenção",
  },
  {
    slug: "techtractor",
    lastModified: "2026-09-10",
    label: "TechTractor",
    name: "TechTractor",
    specialty: "Inspeção e histórico de desgaste",
    summary: "Tecnologia em evolução para transformar inspeções e desgaste em histórico útil para a manutenção.",
    title: "Inspeção e histórico de desgaste | TechTractor",
    description: "TechTractor é uma tecnologia em evolução para organizar inspeções, acompanhar desgaste de componentes e apoiar a gestão da manutenção.",
    headline: "Tecnologia que dá contexto ao desgaste.",
    intro: "O TechTractor está em evolução para transformar registros de inspeção, identificação do equipamento e medições de desgaste em um histórico útil para a gestão da manutenção.",
    caption: "TechTractor · registros de campo, medição e manutenção",
    sectionTitle: "Inspeção e histórico de desgaste de máquinas pesadas.",
    context: "A iniciativa aproxima informação de campo, histórico e planejamento para que a equipe acompanhe a condição dos componentes ao longo do tempo e decida com mais contexto.",
    pillars: [
      ["Inspecionar", "Organizar identificação do equipamento, aplicação, data e registros de inspeção em um histórico de manutenção."],
      ["Acompanhar desgaste", "Relacionar medições de material rodante e outros componentes ao longo do tempo para enxergar a evolução da condição."],
      ["Planejar manutenção", "Dar contexto aos registros para apoiar prioridades, programação de parada, recuperação ou fabricação de peças."],
    ],
    questionsTitle: "Que informação a gestão de manutenção precisa reencontrar?",
    questionsIntro: "A evolução da tecnologia começa pela rotina de inspeção: o que é registrado, em qual componente e como a equipe compara o histórico.",
    questions: [
      ["Registro atual", "Descreva onde ficam as inspeções, fotos e medições hoje e quais campos a equipe precisa reencontrar para entender uma ocorrência."],
      ["Componente e frequência", "Relacione equipamento, componente, aplicação, data, horímetro e periodicidade disponível. No material rodante, identifique lado e ponto medido."],
      ["Comparação ao longo do tempo", "Explique quais medidas ou condições precisam ser comparadas e que mudanças de componente, método ou referência devem ficar registradas."],
      ["Objetivo de manutenção", "Diga se o histórico deve apoiar priorização, programação de parada, recuperação ou fabricação de peças. A decisão continua com a equipe responsável."],
    ],
    decisionTitle: "Da inspeção ao planejamento da manutenção",
    decisionIntro: "O TechTractor evolui a partir de dados de campo organizados para deixar a gestão da manutenção mais clara.",
    decisionSteps: [
      ["01 · Mapear", "Liste equipamento, componente, aplicação, data, medida e origem do registro para que cada dado tenha referência."],
      ["02 · Acompanhar", "Compare observações e medições ao longo do tempo, registrando trocas, intervenções e alterações de método."],
      ["03 · Evoluir", "Compartilhe o fluxo atual e a decisão que precisa de apoio para orientar a evolução da tecnologia."],
    ],
    faq: [
      ["O que é o TechTractor hoje?", "É a tecnologia em evolução do Grupo New Tractor para registrar inspeções, acompanhar desgaste e dar contexto ao histórico de manutenção."],
      ["O TechTractor já está disponível como plataforma?", "O TechTractor está em evolução. A iniciativa parte da rotina de inspeção e do histórico de manutenção que cada operação precisa organizar."],
      ["O registro faz diagnóstico automático da máquina?", "Não. O registro organiza identificação, medições e histórico para apoiar a análise; a interpretação e a decisão permanecem com os responsáveis pela manutenção."],
    ],
    links: [["Registro de inspeção de material rodante", "/guias/inspecao-material-rodante/"], ["Monitoramento de material rodante", "/servicos/monitoramento-material-rodante/"], ["Componentes de material rodante", "/componentes/"], ["Rodantes", "/rodantes/"]],
    requestTitle: "Como sua operação acompanha a condição das máquinas?",
    requestIntro: "Compartilhe sua rotina de inspeção e monitoramento para orientar a evolução do TechTractor.",
    checklist: ["Equipamentos e componentes acompanhados", "Rotina atual de inspeção e medição", "Dificuldades para consultar o histórico", "Objetivos da manutenção e do planejamento"],
    action: "Compartilhar rotina de inspeção",
    cardCta: "Organizar inspeções",
  },
];

export const companyLinks = (current = "") => companies.map((company) =>
  `<li><a href="/${company.slug}/"${current === company.slug ? ' aria-current="page"' : ""}>${company.label}</a></li>`,
).join("");

const companyFaqSchema = (faq) => ({
  "@type": "FAQPage",
  mainEntity: faq.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
});

const companyDetailSections = (company) => {
  if (company.slug === "hidrautractor") {
    return `
        <section class="section section--light" aria-labelledby="${company.slug}-faq-title">
          <div class="shell faq-layout">
            <div><span class="eyebrow">DÚVIDAS FREQUENTES</span><h2 id="${company.slug}-faq-title">Antes de solicitar o orçamento</h2></div>
            <div class="faq-list">${company.faq.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div>
          </div>
        </section>`;
  }
  return `
        <section class="section section--sand" aria-labelledby="${company.slug}-questions-title">
          <div class="shell feature-points">
            <div><span class="eyebrow">PARA COMEÇAR</span><h2 id="${company.slug}-questions-title">${company.questionsTitle}</h2><p>${company.questionsIntro}</p></div>
            <ul>${company.questions.map(([title, text]) => `<li><strong>${title}</strong><span>${text}</span></li>`).join("")}</ul>
          </div>
        </section>
        <section class="section section--light" aria-labelledby="${company.slug}-decision-title">
          <div class="shell feature-points">
            <div><span class="eyebrow">COMO ENCAMINHAR</span><h2 id="${company.slug}-decision-title">${company.decisionTitle}</h2><p>${company.decisionIntro}</p></div>
            <ul>${company.decisionSteps.map(([title, text]) => `<li><strong>${title}</strong><span>${text}</span></li>`).join("")}</ul>
          </div>
        </section>
        <section class="section section--light" aria-labelledby="${company.slug}-faq-title">
          <div class="shell faq-layout">
            <div><span class="eyebrow">DÚVIDAS FREQUENTES</span><h2 id="${company.slug}-faq-title">Antes de definir o próximo passo</h2></div>
            <div class="faq-list">${company.faq.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div>
          </div>
        </section>`;
};

const companyScopeSection = (company, { site, picture, icon }) => {
  if (company.slug === "hidrautractor") return hydraulicLandingSections({ site, picture });
  return `
        <section class="section section--light" aria-labelledby="escopo-title">
          <div class="shell">
            <div class="section-heading section-heading--split"><div><span class="eyebrow">${company.specialty.toLocaleUpperCase("pt-BR")}</span><h2 id="escopo-title">${company.sectionTitle}</h2></div><p>${company.context}</p></div>
            <div class="company-pillars">${company.pillars.map(([title, text], number) => `<article><span class="company-pillars__number" aria-hidden="true">0${number + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
            <nav class="company-resources" aria-label="Conteúdo relacionado a ${company.label}">${company.links.map(([label, href]) => `<a class="text-link" href="${href}">${label} ${icon("arrow")}</a>`).join("")}<a class="text-link" href="/atuacao/minas-gerais/">Operações em Minas Gerais ${icon("arrow")}</a></nav>
          </div>
        </section>`;
};

const companyImage = (company) => company.photo ?? {
  name: `film-${company.slug}`, widths: [640, 1280], width: 1280, height: 720, alt: "",
};

const companyImageTag = (company, hero = false) => {
  const photo = companyImage(company);
  const source = `/assets/images/${photo.name}-${hero ? photo.widths.at(-1) : photo.widths[0]}.webp`;
  const srcset = photo.widths.map((width) => `/assets/images/${photo.name}-${width}.webp ${width}w`).join(", ");
  return `<img class="${hero ? "hero__poster" : "company-card__image"}"${company.photo ? " data-static-photo" : ""} src="${source}" srcset="${srcset}" sizes="${hero ? "(max-width: 860px) 100vw, 46vw" : "(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"}" width="${photo.width}" height="${photo.height}" alt="${photo.alt}" loading="${hero ? "eager" : "lazy"}" decoding="async">`;
};

export const groupIndex = (icon) => `
  <section class="section group-companies" id="empresas" aria-labelledby="empresas-title">
    <div class="shell">
      <div class="section-heading section-heading--split">
        <div><span class="eyebrow eyebrow--light">AS ESPECIALIDADES DO GRUPO</span><h2 id="empresas-title">Mais cuidado com a máquina. Menos paradas no caminho.</h2></div>
        <p>O Grupo New Tractor conecta serviço de campo, manutenção, recuperação, fabricação de peças sob demanda e tecnologia de inspeção para máquinas pesadas. Agilidade e tecnologia orientam cada etapa, da avaliação ao reparo e aos sobressalentes previstos em contrato.</p>
      </div>
      <div class="company-grid">${companies.map((company, index) => `
        <a class="company-card" href="/${company.slug}/" data-analytics="empresa_${company.slug}">
          ${companyImageTag(company)}
          <div class="company-card__body">
            <span class="company-card__number" aria-hidden="true">0${index + 1}</span>
            <h3>${company.label}</h3>
            <span class="company-card__specialty">${company.specialty}</span>
            <p>${company.summary}</p>
            <span class="company-card__link">${company.cardCta} ${icon("arrow")}</span>
          </div>
        </a>`).join("")}
      </div>
    </div>
  </section>`;

export function createCompanyPages({ site, picture, icon, breadcrumbSchema, serviceSchema }) {
  return companies.map((company, index) => {
    const route = `/${company.slug}/`;
    const subjectByCompany = {
      services: "Visita técnica",
      parts: "Fabricação de peças",
      techtractor: "Inspeção",
    };
    const subject = `${subjectByCompany[company.slug] ?? "Orçamento"} | ${company.name}`;
    const mailBody = `Olá, ${company.name}.\r\n\r\n${company.checklist.map((item) => `${item}: `).join("\r\n")}\r\n\r\nNome e empresa: \r\nTelefone para retorno: `;
    const emailLink = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&amp;body=${encodeURIComponent(mailBody)}`;
    const photo = companyImage(company);
    const visual = `<figure class="company-hero__visual company-hero__visual--${company.photo ? "photo" : "film"}"${company.photo ? "" : " data-hero-film"}>
      ${companyImageTag(company, true)}
      ${company.photo ? "" : `<video id="film-${company.slug}" class="hero__video" muted loop playsinline preload="none" width="1280" height="720" aria-hidden="true" tabindex="-1" data-desktop="/assets/videos/company-${company.slug}-desktop.mp4" data-mobile="/assets/videos/company-${company.slug}-mobile.mp4"></video>
      <button class="film-toggle" type="button" aria-controls="film-${company.slug}" data-film-toggle hidden>Reproduzir vídeo</button>`}
      <figcaption>${company.caption}</figcaption>
    </figure>`;
    return {
      route,
      output: `${company.slug}/index.html`,
      title: company.title,
      description: company.description,
      active: company.slug,
      film: !company.photo,
      lastModified: company.lastModified ?? "2026-09-07",
      ogImage: `/assets/images/${photo.name}-${photo.widths.at(-1)}.webp`,
      ogImageWidth: photo.width,
      ogImageHeight: photo.height,
      ogImageAlt: photo.alt || company.caption,
      schema: [
        breadcrumbSchema([{ name: "Especialidades do Grupo", route: "/#empresas" }, { name: company.name, route }]),
        ...(company.slug === "techtractor" ? [] : [serviceSchema(company.sectionTitle.replace(/\.$/, ""), company.description, route)]),
        ...(company.faq?.length ? [companyFaqSchema(company.faq)] : []),
      ],
      body: `
        <section class="company-hero">
          <div class="shell">
            <nav class="breadcrumbs" aria-label="Navegação estrutural"><ol><li><a href="/">Início</a></li><li><a href="/#empresas">Especialidades do Grupo</a></li><li><span aria-current="page">${company.label}</span></li></ol></nav>
            <div class="company-hero__grid">
              <div class="company-hero__copy">
                <span class="eyebrow eyebrow--light">GRUPO NEW TRACTOR <span aria-hidden="true">/ 0${index + 1}</span></span>
                <h1>${company.name}</h1>
                <p class="company-hero__headline">${company.headline}</p>
                <p class="company-hero__intro">${company.intro}</p>
                <a class="button button--primary" href="${emailLink}" data-analytics="email_${company.slug}_hero">${company.action} ${icon("arrow")}</a>
              </div>
              ${visual}
            </div>
          </div>
        </section>
        ${companyScopeSection(company, { site, picture, icon })}
        ${companyDetailSections(company)}
        <section class="section company-request" aria-labelledby="rfq-title">
          <div class="shell company-request__grid">
            <div><span class="eyebrow eyebrow--light">ENVIE SUA SOLICITAÇÃO PARA ${company.slug === "techtractor" ? "O GRUPO" : "A " + company.label.toLocaleUpperCase("pt-BR")}</span><h2 id="rfq-title">${company.requestTitle}</h2><p>${company.requestIntro}</p><a class="button button--primary" href="${emailLink}" data-analytics="email_${company.slug}_rfq">${company.action} ${icon("mail")}</a><p class="company-request__email">Ou escreva para <a href="mailto:${site.email}" data-analytics="email_${company.slug}_alternativo">${site.email}</a>.</p></div>
            <div class="company-checklist"><h3>O que enviar no pedido</h3><ul>${company.checklist.map((item) => `<li>${icon("check")}<span>${item}</span></li>`).join("")}</ul><p>O botão abre seu aplicativo de e-mail; inclua os anexos antes de enviar. Atendimento em todo o Brasil, sujeito a avaliação técnica, comercial e logística por demanda.</p></div>
          </div>
        </section>
        <section class="company-siblings"><div class="shell"><h2>Outras especialidades do Grupo New Tractor</h2><nav aria-label="Outras especialidades do Grupo New Tractor"><ul>${companyLinks(company.slug)}</ul></nav><a class="text-link" href="/#empresas">Ver todas as especialidades ${icon("arrow")}</a></div></section>`,
    };
  });
}
