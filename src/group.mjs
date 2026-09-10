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
    lastModified: "2026-09-08",
    label: "Rodantes",
    name: "New Tractor Rodantes",
    specialty: "Material rodante",
    summary: "Avaliação, recuperação e acompanhamento de material rodante de escavadeiras e tratores de esteira: rosários, sapatas, roletes, rodas-guia e trucks.",
    title: "Material rodante de escavadeira e trator | New Tractor Rodantes",
    description: "Manutenção e recuperação de material rodante de escavadeiras e tratores de esteira, com avaliação de componentes e condição por demanda.",
    headline: "A base da máquina orienta a próxima decisão.",
    intro: "Rosários, sapatas, roletes, rodas-guia e trucks formam o material rodante de escavadeiras e tratores de esteira. A New Tractor Rodantes transforma a leitura da condição em informação para manutenção e planejamento.",
    caption: "Material rodante · acervo real da New Tractor",
    sectionTitle: "Material rodante de escavadeiras e tratores de esteira.",
    context: "Terreno, aplicação e rotina de trabalho dão contexto ao desgaste do conjunto de esteiras. A leitura técnica reúne esses dados para diferenciar componente, condição e escopo de cada demanda.",
    pillars: [
      ["Avaliação", "Identifique equipamento, fabricante, modelo e condição observada. Fotos, medições e histórico ajudam a formar o quadro técnico."],
      ["Recuperação", "Manutenção e recondicionamento de rosários, sapatas, roletes, rodas-guia, trucks e conjuntos de escavadeiras e tratores de esteira fazem parte da frente Rodantes."],
      ["Acompanhamento", "Medições de desgaste organizadas com a equipe de manutenção ajudam a comparar a condição dos componentes e planejar a intervenção."],
    ],
    questionsTitle: "O que a manutenção precisa saber antes de avaliar?",
    questionsIntro: "Compras, PCM e manutenção ganham clareza quando o conjunto, o desgaste e a prioridade aparecem no mesmo registro.",
    questions: [
      ["Componente e lado", "Informe se a demanda envolve rosário, sapata, rolete, roda-guia, truck ou conjunto completo. Registre o lado da máquina e a quantidade."],
      ["Sinal de desgaste", "Descreva desgaste irregular, folga, trinca, deformação ou outra condição observada. Fotos de contexto e de detalhe ajudam a localizar o ponto."],
      ["Rotina da operação", "Inclua fabricante, modelo, aplicação, terreno, horímetro disponível e histórico de troca, reparo ou medição do componente."],
      ["Prioridade da intervenção", "Diga se a máquina está parada, opera com restrição ou tem uma parada programada. Cidade e logística entram na avaliação."],
    ],
    decisionTitle: "Da inspeção ao encaminhamento",
    decisionIntro: "A condição do conjunto orienta a conversa sobre manutenção, recuperação ou acompanhamento, sempre com escopo definido para a demanda.",
    decisionSteps: [
      ["01 · Identificar", "Relacione equipamento, fabricante, modelo, lado e componente para que a medida ou a foto não perca sua referência."],
      ["02 · Ler a condição", "Combine desgaste observado, medições disponíveis, aplicação e histórico. Uma imagem isolada não define o estado do conjunto."],
      ["03 · Encaminhar", "A avaliação indica o caminho entre recuperação, manutenção e monitoramento; capacidade, prazo e compatibilidade são tratados por demanda."],
    ],
    faq: [
      ["Quais componentes entram na conversa sobre material rodante?", "A frente Rodantes apresenta rosários, sapatas, roletes, rodas-guia, trucks e conjuntos de escavadeiras e tratores de esteira para avaliação, manutenção, recuperação e acompanhamento."],
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
    requestTitle: "Sua operação precisa avaliar o material rodante?",
    requestIntro: "Envie os dados do conjunto para iniciar uma conversa comercial orientada por informação técnica.",
    checklist: ["Equipamento, fabricante e modelo", "Componente, quantidade e condição observada", "Fotos, medições e histórico disponível", "Cidade da operação e prioridade"],
    action: "Solicitar avaliação",
  },
  {
    slug: "hidrautractor",
    lastModified: "2026-09-08",
    label: "HidrauTractor",
    name: "HidrauTractor",
    specialty: "Hidráulica",
    summary: "Recuperação e fabricação de cilindros hidráulicos para máquinas pesadas, com escopo técnico e comercial definido por aplicação.",
    title: "Recuperação e fabricação de cilindros hidráulicos | HidrauTractor",
    description: "Recuperação e fabricação de cilindros hidráulicos para máquinas pesadas, com avaliação da aplicação, identificação e requisitos em Belo Horizonte e Minas Gerais.",
    headline: "Recuperar o que existe. Fabricar o que a operação precisa.",
    intro: "Em Belo Horizonte, a HidrauTractor recupera e fabrica cilindros hidráulicos para máquinas pesadas. Do diagnóstico ao teste final, a condição do conjunto e a aplicação orientam cada etapa do trabalho.",
    caption: "HidrauTractor · componente e aplicação em contexto industrial",
    sectionTitle: "Recuperação e fabricação de cilindros hidráulicos para máquinas pesadas.",
    context: "A condição do cilindro e os requisitos da aplicação orientam a escolha entre recuperar um conjunto existente e fabricar um novo. A análise técnica e comercial organiza o escopo de cada demanda.",
    pillars: [
      ["Recuperação", "Para um cilindro em uso, a avaliação considera camisa, haste, pistão, guias, vedações e fixações conforme a condição encontrada."],
      ["Fabricação", "Para um novo conjunto, reúna aplicação, dimensões, fixações, conexões e desenho ou amostra para definir o escopo do projeto."],
      ["Aplicação", "Escavadeiras, tratores de esteira e pás carregadeiras têm movimentos e configurações próprios; a máquina dá referência ao cilindro."],
    ],
    questionsTitle: "O que informar para recuperar ou fabricar um cilindro?",
    questionsIntro: "Identifique o equipamento, o componente, a aplicação e a condição observada. Esses dados ajudam a comparar a recuperação de um conjunto existente com a fabricação de um novo.",
    questions: [
      ["Recuperar ou fabricar", "Diga se há um cilindro para avaliar ou se a consulta é por um conjunto novo. A decisão depende da condição, da identificação e da aplicação."],
      ["Máquina e aplicação", "Informe equipamento, fabricante, modelo, função ou movimento do cilindro, cidade da operação e prioridade da demanda."],
      ["Código, desenho e medidas", "Envie código ou plaqueta, desenho, amostra e medidas disponíveis. Fotos de conexões e fixações ajudam a caracterizar o conjunto."],
      ["Condição e histórico", "Relate vazamento, deriva, perda de força, dano aparente e intervenções conhecidas, separando o sintoma do diagnóstico técnico."],
    ],
    decisionTitle: "Da aplicação ao escopo hidráulico",
    decisionIntro: "A identificação evita aproximar componentes diferentes e dá base para separar a recuperação de um cilindro existente da fabricação de um novo conjunto.",
    decisionSteps: [
      ["01 · Identificar", "Relacione máquina, função, componente e identificação disponível antes de escolher o encaminhamento."],
      ["02 · Comparar", "Cruze condição, aplicação, documentação, medidas e histórico para separar recuperação e fabricação."],
      ["03 · Definir", "A conversa técnica e comercial organiza o escopo possível para aquela demanda e a logística da peça."],
    ],
    faq: [
      ["Quando recuperar e quando fabricar um cilindro novo?", "A recuperação parte de um cilindro existente e da condição de camisa, haste, pistão, guias, vedações e fixações. A fabricação parte dos requisitos da máquina e do conjunto. A avaliação técnica e comercial compara os dois caminhos."],
      ["Quais etapas entram na recuperação?", "Identificação, desmontagem, limpeza, avaliação dimensional e estrutural, definição dos componentes e processos, montagem e verificações conforme o escopo combinado. O kit de vedação é escolhido conforme a geometria, o fluido e a aplicação."],
      ["O que preciso apresentar para fabricar?", "Informe máquina, função, aplicação, fabricante e modelo, código ou desenho ou amostra, medidas conhecidas, fixações, conexões, quantidade e cidade. Esses dados organizam a análise do projeto e da proposta."],
      ["A HidrauTractor atende demandas em Minas Gerais?", "A frente tem base em Belo Horizonte e recebe demandas em Minas Gerais e em outras localidades. Mobilização, transporte e escopo são definidos por demanda, conforme o equipamento e a logística da operação."],
    ],
    links: [["Recuperação de cilindros hidráulicos", "/hidrautractor/recuperacao-cilindros-hidraulicos/"], ["Fabricação de cilindros hidráulicos", "/hidrautractor/fabricacao-cilindros-hidraulicos/"], ["Cilindros de escavadeiras", "/equipamentos/escavadeiras/"], ["Cilindros de tratores de esteira", "/equipamentos/tratores-de-esteira/"], ["Cilindros de pás carregadeiras", "/equipamentos/pas-carregadeiras/"], ["Avaliação de cilindros hidráulicos", "/guias/avaliacao-cilindros-hidraulicos/"], ["Setores e aplicações", "/setores/"]],
    requestTitle: "Solicite um orçamento para seu cilindro hidráulico",
    requestIntro: "Informe se a demanda envolve recuperação ou fabricação e compartilhe os dados do equipamento e do componente.",
    checklist: ["Recuperar ou fabricar", "Máquina e aplicação", "Código, desenho ou amostra", "Fotos do cilindro e cidade"],
    action: "Solicitar orçamento",
  },
  {
    slug: "usinagem",
    lastModified: "2026-09-08",
    label: "Usinagem",
    name: "New Tractor Usinagem",
    specialty: "Serviços de recuperação",
    summary: "Usinagem pesada para recuperação dimensional de componentes em torno, mandrilhadora e centro de usinagem, a partir da peça ou do desenho.",
    title: "Usinagem pesada e mandrilhamento de componentes | New Tractor",
    description: "Usinagem pesada para recuperar a geometria de componentes de máquinas a partir da peça, do desenho, do código ou das medições disponíveis.",
    headline: "A medida certa devolve função ao componente.",
    intro: "A New Tractor Usinagem trabalha com recuperação dimensional de componentes pesados. Torno, mandrilhamento em mandrilhadora e centro de usinagem integram o processo conforme a peça, o material e a aplicação.",
    caption: "Usinagem · recuperação de componentes no ambiente industrial",
    sectionTitle: "Usinagem pesada e mandrilhamento para recuperação dimensional.",
    context: "A recuperação dimensional começa na leitura do desgaste, do material e da função do componente. Esses dados orientam a sequência de usinagem e os critérios de conferência da entrega; mandrilhamento e mandrilamento são termos usados para a mesma família de operação.",
    pillars: [
      ["Leitura da peça", "Envie peça, desenho, código ou medições disponíveis. Fotos e identificação do equipamento completam o contexto."],
      ["Recuperação dimensional", "A sequência de torno, mandrilhamento (também chamado mandrilamento) ou centro de usinagem é definida conforme o componente e o escopo técnico."],
      ["Conferência", "Dimensões e condições de entrega são registradas no escopo combinado para cada peça."],
    ],
    questionsTitle: "O que muda a avaliação de uma peça desgastada?",
    questionsIntro: "Para usinagem, a equipe precisa relacionar a geometria da peça à função que ela exerce e à máquina onde trabalha.",
    questions: [
      ["Condição e função", "Descreva qual superfície, alojamento ou região perdeu medida e qual função o componente cumpre no conjunto. Fotos de detalhe e de posição ajudam."],
      ["Referência dimensional", "Envie desenho e revisão, código, amostra ou medições disponíveis. Identifique o que é referência do fabricante e o que é medida preliminar."],
      ["Material e histórico", "Informe o material conhecido, intervenções anteriores e o motivo da retirada. Esses dados ajudam a discutir a sequência adequada para a peça."],
      ["Quantidade e transporte", "Registre quantidade, dimensões, peso, cidade de origem e restrições de envio. A logística faz parte da avaliação comercial."],
    ],
    decisionTitle: "Da peça à recuperação dimensional",
    decisionIntro: "A usinagem não começa por uma medida isolada: começa por entender o componente, sua aplicação e o resultado que precisa ser conferido.",
    decisionSteps: [
      ["01 · Ler", "Identifique a peça, a função, o desgaste e as referências disponíveis no desenho, código, amostra ou medição."],
      ["02 · Definir a sequência", "Torno, mandrilhamento em mandrilhadora e centro de usinagem entram conforme a geometria, o material e o escopo técnico da peça."],
      ["03 · Conferir", "As dimensões e as condições de entrega são combinadas para cada componente. Consulte tolerância, capacidade, material e prazo na avaliação da peça."],
    ],
    faq: [
      ["Quais processos de usinagem estão divulgados?", "A frente apresenta torno, mandrilhamento em mandrilhadora e centro de usinagem para recuperação dimensional de componentes pesados, com sequência definida por peça e escopo."],
      ["Preciso ter um desenho para iniciar a conversa?", "Não necessariamente. Peça, código, amostra ou medições disponíveis podem iniciar a avaliação, acompanhados de fotos, equipamento e aplicação. A falta de referência pode limitar a definição do escopo."],
      ["Recuperar uma peça é o mesmo que pedir uma peça nova?", "Não. A Usinagem avalia a recuperação dimensional da peça existente. Para consultar uma peça nova, encaminhe código, desenho ou especificação à frente Parts."],
    ],
    links: [["Usinagem de componentes pesados", "/servicos/usinagem-componentes-maquinas-pesadas/"], ["Parts — avaliação de peças novas", "/parts/"], ["Calderaria", "/calderaria/"], ["Dados para cotação de peças", "/guias/cotacao-pecas-maquinas-pesadas/"], ["Setores e aplicações", "/setores/"]],
    requestTitle: "Um componente precisa recuperar a medida?",
    requestIntro: "Envie desenho, fotos e identificação da peça para iniciar a avaliação da usinagem.",
    checklist: ["Peça, equipamento e aplicação", "Desenho, código ou amostra", "Quantidade e prioridade", "Cidade e restrições de transporte"],
    action: "Conversar sobre usinagem",
  },
  {
    slug: "calderaria",
    lastModified: "2026-09-08",
    label: "Calderaria",
    name: "New Tractor Calderaria",
    specialty: "Serviços de recuperação",
    summary: "Caldeiraria pesada para recuperação de caçambas de escavadeira, conchas de carregadeira e estruturas de máquinas, por caldeiraria e solda.",
    title: "Caldeiraria pesada de máquinas em BH | New Tractor Calderaria",
    description: "Caldeiraria pesada em Belo Horizonte para organizar a recuperação de caçambas de escavadeira, conchas de carregadeira e componentes de máquinas.",
    headline: "Metal, geometria e solda no mesmo plano.",
    intro: "A New Tractor Calderaria reúne corte, preparação, solda e recuperação estrutural de caçambas de escavadeira, conchas de carregadeira e componentes pesados de máquinas. A condição da peça orienta cada etapa.",
    caption: "Caldeiraria · recuperação estrutural no ambiente industrial",
    sectionTitle: "Caldeiraria pesada de máquinas em Belo Horizonte.",
    context: "Trinca, desgaste, deformação, material e aplicação orientam a recuperação de caçambas, conchas e componentes pesados. A base industrial em Belo Horizonte e a logística da peça entram na definição do escopo.",
    pillars: [
      ["Leitura da condição", "Registre trinca, desgaste ou deformação e envie fotos com identificação do componente."],
      ["Recuperação estrutural", "Corte, preparação e solda são organizados conforme material, geometria e função da peça."],
      ["Integração de processos", "Quando a demanda envolve usinagem ou material rodante, as frentes correspondentes do grupo participam da avaliação."],
    ],
    questionsTitle: "O que registrar antes de recuperar uma caçamba ou concha?",
    questionsIntro: "Compras, PCM e manutenção precisam mostrar a condição de caçambas de escavadeira e conchas de carregadeira, sua função e as restrições de retirada ou transporte.",
    questions: [
      ["Trinca, desgaste ou deformação", "Descreva onde a condição aparece, sua extensão aproximada e se evoluiu. Fotos de contexto e detalhe ajudam a localizar a região."],
      ["Componente e aplicação", "Identifique caçamba, concha, estrutura ou outro componente, além do equipamento, fabricante, modelo e trabalho executado."],
      ["Material e intervenções", "Informe material ou especificação conhecida, soldas e reparos anteriores, sem presumir que uma aparência semelhante tenha a mesma solução."],
      ["Retirada e prioridade", "Diga onde a peça está, se pode ser enviada, quais limitações de transporte existem e qual impacto a condição traz para a operação."],
    ],
    decisionTitle: "Da condição da peça ao escopo de recuperação",
    decisionIntro: "A recuperação estrutural combina leitura da geometria, material, aplicação e condição observada antes de definir as etapas de trabalho.",
    decisionSteps: [
      ["01 · Documentar", "Registre a peça no equipamento, a área afetada e os sinais de trinca, desgaste ou deformação."],
      ["02 · Relacionar", "Cruze material, geometria, função e histórico de intervenção para separar a necessidade estrutural de uma recuperação dimensional."],
      ["03 · Encaminhar", "Corte, preparação e solda são discutidos conforme a condição e o escopo; procedimento, material, capacidade, tolerância e prazo são definidos por demanda."],
    ],
    faq: [
      ["Como avaliar uma caçamba de escavadeira ou concha de carregadeira?", "Identifique o equipamento e o implemento, registre trinca, desgaste ou deformação e envie fotos de contexto e detalhe. A frente Calderaria orienta a recuperação por caldeiraria e solda conforme a condição observada."],
      ["A New Tractor Calderaria fabrica uma caçamba nova?", "A frente está apresentada para recuperação de estruturas e componentes. Uma demanda por peça nova deve ser descrita separadamente para que seu escopo seja avaliado."],
      ["Uma trinca autoriza a máquina a continuar trabalhando?", "Não. O registro e a consulta ajudam a encaminhar a avaliação, mas a decisão de segurança e liberação da máquina cabe aos responsáveis pela operação e manutenção."],
    ],
    links: [["Reforma de caçambas e conchas", "/servicos/reforma-cacambas-conchas/"], ["Avaliação de caçambas e conchas", "/guias/avaliacao-cacambas-conchas/"], ["Usinagem", "/usinagem/"], ["Services", "/services/"], ["Setores e aplicações", "/setores/"]],
    requestTitle: "Sua estrutura precisa de recuperação?",
    requestIntro: "Envie fotos, identificação e aplicação do componente para iniciar a análise.",
    checklist: ["Componente e equipamento", "Condição observada e fotos", "Material ou especificação, se houver", "Local e prioridade"],
    action: "Conversar sobre caldeiraria",
  },
  {
    slug: "parts",
    label: "Parts",
    name: "New Tractor Parts",
    lastModified: "2026-09-08",
    specialty: "Consulta de peças novas",
    summary: "Consulta de peças novas para máquinas pesadas, a partir de código, desenho ou especificação técnica.",
    title: "Peças para máquinas de linha amarela | New Tractor Parts",
    description: "A New Tractor Parts avalia demandas de peças novas para máquinas pesadas a partir do código, desenho, especificação e aplicação.",
    headline: "A peça nova começa com a informação certa.",
    intro: "A New Tractor Parts aproxima a necessidade da operação do desenho e da especificação da peça. Código, aplicação e requisitos técnicos orientam a avaliação de cada demanda.",
    caption: "New Tractor Parts · consulta de peças novas",
    sectionTitle: "Do desenho à peça que a operação precisa.",
    context: "Código, fabricante, modelo, desenho e aplicação formam a referência para analisar compatibilidade e escopo. Em pinos, buchas e alojamentos, é importante separar a consulta de uma peça nova da recuperação do componente existente.",
    pillars: [
      ["Identificação", "Informe código, fabricante e modelo. Na ausência de código, fotos, desenho ou especificação ajudam a caracterizar a peça."],
      ["Avaliação", "Peças, conjuntos e componentes são analisados a partir de código, desenho, especificação, requisitos e quantidade."],
      ["Proposta", "A definição comercial reúne compatibilidade, disponibilidade e prazo de cada solicitação."],
    ],
    questionsTitle: "O que suprimentos e manutenção precisam definir?",
    questionsIntro: "Uma consulta de peça nova fica mais objetiva quando diferencia identificação, aplicação, requisito técnico e destino.",
    questions: [
      ["Código e aplicação", "Informe código, fabricante, modelo e posição da peça no equipamento. Um conjunto e um componente podem ter referências diferentes."],
      ["Requisito técnico", "Envie desenho e revisão, especificação, fotos, amostra e medidas disponíveis. Em pinos, buchas e alojamentos, identifique se a necessidade é peça nova ou recuperação do alojamento. Diga o que ainda precisa ser conferido."],
      ["Nova ou recuperação", "Esclareça se a operação precisa de uma peça nova ou se existe um componente para recuperar. Essa distinção encaminha a conversa para Parts ou para uma frente de recuperação."],
      ["Quantidade e destino", "Registre quantidade, cidade de destino, prioridade e documentos exigidos pela compra. Disponibilidade e prazo entram na avaliação da solicitação."],
    ],
    decisionTitle: "Da identificação à consulta de peça nova",
    decisionIntro: "A decisão comercial começa separando a referência da peça, o uso previsto e os requisitos que precisam aparecer na proposta.",
    decisionSteps: [
      ["01 · Identificar", "Relacione código, fabricante, modelo, desenho ou amostra à máquina e à posição do componente."],
      ["02 · Comparar", "Confira aplicação, revisão do desenho, requisitos, quantidade e condição solicitada para não comparar peças diferentes."],
      ["03 · Avaliar", "A Parts recebe a consulta e verifica o escopo comercial de cada caso. Consulte estoque, fabricação específica, compatibilidade e prazo na proposta."],
    ],
    faq: [
      ["A New Tractor Parts mantém estoque de peças?", "A Parts recebe consultas de peças novas por código, desenho ou especificação. Estoque, disponibilidade e prazo são confirmados em cada solicitação."],
      ["Posso consultar sem o código da peça?", "Sim. Envie desenho, fotos, amostra ou especificação junto do fabricante, modelo, aplicação e medidas disponíveis. Esses dados iniciam a identificação, mas não substituem a conferência técnica."],
      ["Quando devo procurar Parts ou uma frente de recuperação?", "Use Parts para apresentar a necessidade de uma peça nova. Para um componente desgastado, a avaliação pode seguir para Usinagem, Calderaria ou Rodantes conforme a condição e o conjunto."],
    ],
    links: [["Dados para cotação de peças", "/guias/cotacao-pecas-maquinas-pesadas/"], ["Folgas de pinos, buchas e alojamentos", "/guias/folgas-pinos-buchas-alojamentos/"], ["Usinagem", "/usinagem/"], ["Calderaria", "/calderaria/"], ["Equipamentos e aplicações", "/equipamentos/"], ["Setores e aplicações", "/setores/"]],
    requestTitle: "Sua equipe precisa de uma peça nova?",
    requestIntro: "Envie código, desenho ou especificação para que a demanda seja avaliada com contexto.",
    checklist: ["Código, descrição ou desenho da peça", "Equipamento e aplicação previstos", "Quantidade e requisitos técnicos", "Cidade de destino e necessidade de prazo"],
    action: "Consultar peça por código ou desenho",
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
    specialty: "Consulta por componente",
    summary: "Consulta de serviço de manutenção por componente, com medição e registro de condição quando esse escopo fizer sentido.",
    title: "Consulta de manutenção por componente | New Tractor Services",
    description: "A New Tractor Services recebe consultas de manutenção por componente e organiza medições conforme equipamento, condição e logística.",
    headline: "A manutenção começa pelo componente certo.",
    intro: "A New Tractor Services funciona como frente integradora para consultas de manutenção por componente. Quando a demanda pede medição no ambiente de operação, equipamento, condição e logística orientam o escopo possível.",
    caption: "Medição do diâmetro de rolete · Acervo New Tractor",
    sectionTitle: "Serviço de manutenção por componente e medição de campo.",
    context: "Equipamento, local, componente e objetivo da medição orientam o registro. A informação reunida pode apoiar decisões sobre material rodante, usinagem, caldeiraria ou peças, conforme o escopo confirmado.",
    pillars: [
      ["Componente", "Descreva se a consulta envolve material rodante, estrutura, peça usinada ou outro componente identificado. O componente define o caminho inicial."],
      ["Medição", "Descreva equipamento, local e ponto observado. Instrumento utilizado, fotos e data da coleta completam o registro quando a medição fizer parte do escopo."],
      ["Encaminhamento", "A leitura organiza a conversa com manutenção; local, logística, mobilização e prazo são definidos de acordo com a demanda apresentada."],
    ],
    questionsTitle: "Qual componente precisa entrar na manutenção?",
    questionsIntro: "A consulta ganha valor quando a equipe identifica o componente, o ponto observado e a decisão que o serviço deve apoiar.",
    questions: [
      ["Objetivo do serviço", "Explique se a necessidade é avaliar uma condição, acompanhar desgaste, preparar uma intervenção ou organizar uma manutenção por componente."],
      ["Máquina e contexto", "Informe equipamento, fabricante, modelo, identificação da frota, local, aplicação, horímetro e condições de acesso conhecidas."],
      ["Histórico e referência", "Anexe registros anteriores, fotos, data, instrumento e unidade da medida. Separe referência técnica de estimativa preliminar."],
      ["Logística e prioridade", "Diga se a máquina está operando, parada ou em janela programada. Local, mobilização, restrições e prazo desejado são avaliados na demanda."],
    ],
    decisionTitle: "Da condição do componente ao serviço possível",
    decisionIntro: "A Services organiza a consulta a partir do componente e conecta o registro às frentes que podem avaliar a demanda.",
    decisionSteps: [
      ["01 · Definir", "Identifique a máquina, o componente, o ponto e a decisão de manutenção que precisa de informação."],
      ["02 · Registrar", "Reúna medida, unidade, instrumento, data, fotos, aplicação e histórico para que o dado possa ser comparado."],
      ["03 · Encaminhar", "A demanda é avaliada quanto a escopo, logística e mobilização. O registro pode orientar Rodantes, Usinagem, Calderaria ou Parts conforme o componente."],
    ],
    faq: [
      ["Como encaminhar uma necessidade de manutenção para a Services?", "Informe qual máquina está envolvida, o componente e a condição observada. A Services recebe a demanda e organiza o encaminhamento para a especialidade compatível, com escopo, modalidade de atendimento e logística avaliados para a operação."],
      ["A Services agenda automaticamente uma medição em campo?", "Não. A consulta informa equipamento, componente, local e objetivo; escopo, mobilização, logística e prazo são avaliados para cada demanda."],
      ["Uma medição autoriza a máquina a continuar operando?", "Não. O registro apoia a análise, mas a decisão de segurança e liberação da máquina cabe aos responsáveis pela operação e manutenção."],
      ["Que resultado a equipe deve trazer para a conversa?", "Traga o ponto a medir, a unidade ou referência disponível, histórico, fotos, instrumento conhecido, local e a decisão que a medição precisa apoiar."],
    ],
    links: [["Como preparar a demanda da operação", "/guias/avaliacao-maquinas-linha-amarela/"], ["Manutenção de material rodante", "/servicos/manutencao-material-rodante/"], ["Consultar as soluções técnicas", "/servicos/"], ["Atuação nacional", "/atuacao/"], ["Inspeção de material rodante", "/guias/inspecao-material-rodante/"]],
    requestTitle: "O que sua operação precisa medir?",
    requestIntro: "Envie equipamento, local e objetivo da medição para iniciar a conversa com a Services.",
    checklist: ["Equipamento e componentes envolvidos", "Problema observado e histórico disponível", "Fotos, escopo preliminar e requisitos de contratação", "Local, restrições logísticas e prioridade"],
    action: "Conversar com a Services",
  },
  {
    slug: "techtractor",
    lastModified: "2026-09-08",
    label: "TechTractor",
    name: "TechTractor",
    specialty: "Inspeção e histórico de desgaste",
    summary: "Frente tecnológica em evolução para registrar inspeções, acompanhar desgaste de componentes e apoiar a gestão da manutenção.",
    title: "Inspeção e histórico de desgaste | TechTractor",
    description: "Conheça o TechTractor, frente tecnológica em evolução para registrar inspeções, acompanhar desgaste de componentes e apoiar a gestão da manutenção.",
    headline: "Do desgaste observado ao histórico de manutenção.",
    intro: "O TechTractor reúne a direção tecnológica do grupo para transformar registros de inspeção, identificação do equipamento e medições de desgaste em um histórico útil para a gestão da manutenção.",
    caption: "TechTractor · registros de campo, medição e manutenção",
    sectionTitle: "Inspeção e histórico de desgaste de máquinas pesadas.",
    context: "A iniciativa aproxima informação de campo, histórico e planejamento para acompanhar a condição de componentes ao longo do tempo e dar contexto às decisões de manutenção.",
    pillars: [
      ["Inspecionar", "Estruturar inspeções, identificação do equipamento, aplicação e data de coleta em um histórico de manutenção."],
      ["Acompanhar desgaste", "Relacionar medições de material rodante e outros componentes ao longo do tempo para visualizar a evolução da condição."],
      ["Gerir manutenção", "Dar contexto técnico aos registros para apoiar priorização, programação de parada e consulta de recuperação ou peça."],
    ],
    questionsTitle: "Que informação a gestão de manutenção precisa reencontrar?",
    questionsIntro: "A conversa sobre tecnologia começa na rotina de inspeção: o que é registrado, em qual componente e como a equipe compara o histórico.",
    questions: [
      ["Registro atual", "Descreva onde ficam as inspeções, fotos e medições hoje e quais campos a equipe precisa reencontrar para entender uma ocorrência."],
      ["Componente e frequência", "Relacione equipamento, componente, aplicação, data, horímetro e periodicidade disponível. No material rodante, identifique lado e ponto medido."],
      ["Comparação ao longo do tempo", "Explique quais medidas ou condições precisam ser comparadas e que mudanças de componente, método ou referência devem ficar registradas."],
      ["Objetivo de manutenção", "Diga se o histórico deve apoiar priorização, programação de parada, recuperação ou consulta de peças. A decisão continua com a equipe responsável."],
    ],
    decisionTitle: "Da inspeção ao planejamento da manutenção",
    decisionIntro: "O TechTractor está em evolução; sua direção parte de dados de campo organizados para tornar a gestão da manutenção mais contextualizada.",
    decisionSteps: [
      ["01 · Mapear", "Liste equipamento, componente, aplicação, data, medida e origem do registro para que cada dado tenha referência."],
      ["02 · Acompanhar", "Compare observações e medições ao longo do tempo, registrando trocas, intervenções e alterações de método."],
      ["03 · Conversar", "Compartilhe o fluxo atual e a decisão que precisa de apoio para discutir a evolução da frente, sem presumir uma plataforma pronta."],
    ],
    faq: [
      ["O que é o TechTractor hoje?", "É a frente tecnológica do Grupo New Tractor em evolução para registrar inspeções, acompanhar desgaste e dar contexto ao histórico de manutenção."],
      ["O TechTractor já é uma plataforma disponível para uso?", "A frente está em evolução; disponibilidade, funcionalidades e formas de acesso devem ser discutidas com o grupo."],
      ["O registro faz diagnóstico automático da máquina?", "Não. O registro organiza identificação, medições e histórico para apoiar a conversa; a interpretação e a decisão permanecem com os responsáveis pela manutenção."],
    ],
    links: [["Registro de inspeção de material rodante", "/guias/inspecao-material-rodante/"], ["Monitoramento de material rodante", "/servicos/monitoramento-material-rodante/"], ["Componentes de material rodante", "/componentes/"], ["Rodantes", "/rodantes/"]],
    requestTitle: "Como sua operação acompanha a condição das máquinas?",
    requestIntro: "Compartilhe sua rotina de inspeção e monitoramento para conversar sobre os caminhos do TechTractor.",
    checklist: ["Equipamentos e componentes acompanhados", "Rotina atual de inspeção e medição", "Dificuldades para consultar o histórico", "Objetivos da manutenção e do planejamento"],
    action: "Conversar sobre o TechTractor",
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
            <div><span class="eyebrow">DÚVIDAS FREQUENTES</span><h2 id="${company.slug}-faq-title">Antes de iniciar a conversa</h2></div>
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
        <div><span class="eyebrow eyebrow--light">AS FRENTES DO GRUPO</span><h2 id="empresas-title">Sete especialidades para acompanhar o ciclo da máquina.</h2></div>
        <p>O Grupo New Tractor reúne frentes de avaliação, recuperação, medição e tecnologia para máquinas pesadas. Conheça cada especialidade.</p>
      </div>
      <div class="company-grid">${companies.map((company, index) => `
        <a class="company-card" href="/${company.slug}/" data-analytics="empresa_${company.slug}">
          ${companyImageTag(company)}
          <div class="company-card__body">
            <span class="company-card__number" aria-hidden="true">0${index + 1}</span>
            <h3>${company.label}</h3>
            <span class="company-card__specialty">${company.specialty}</span>
            <p>${company.summary}</p>
            <span class="company-card__link">Conheça ${icon("arrow")}</span>
          </div>
        </a>`).join("")}
      </div>
    </div>
  </section>`;

export function createCompanyPages({ site, picture, icon, breadcrumbSchema }) {
  return companies.map((company, index) => {
    const route = `/${company.slug}/`;
    const subject = `${company.slug === "techtractor" ? "Conversa" : "RFQ"} | ${company.name}`;
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
        breadcrumbSchema([{ name: "Empresas do grupo", route: "/#empresas" }, { name: company.name, route }]),
        ...(company.faq?.length ? [companyFaqSchema(company.faq)] : []),
      ],
      body: `
        <section class="company-hero">
          <div class="shell">
            <nav class="breadcrumbs" aria-label="Navegação estrutural"><ol><li><a href="/">Início</a></li><li><a href="/#empresas">Empresas do grupo</a></li><li><span aria-current="page">${company.label}</span></li></ol></nav>
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
            <div><span class="eyebrow eyebrow--light">CONVERSE COM ${company.slug === "techtractor" ? "O GRUPO" : "A " + company.label.toLocaleUpperCase("pt-BR")}</span><h2 id="rfq-title">${company.requestTitle}</h2><p>${company.requestIntro}</p><a class="button button--primary" href="${emailLink}" data-analytics="email_${company.slug}_rfq">${company.action} ${icon("mail")}</a><p class="company-request__email">Ou escreva para <a href="mailto:${site.email}" data-analytics="email_${company.slug}_alternativo">${site.email}</a>.</p></div>
            <div class="company-checklist"><h3>O que incluir na conversa</h3><ul>${company.checklist.map((item) => `<li>${icon("check")}<span>${item}</span></li>`).join("")}</ul><p>O botão abre seu aplicativo de e-mail; inclua os anexos antes de enviar. Atendimento em todo o Brasil, sujeito a avaliação técnica, comercial e logística por demanda.</p></div>
          </div>
        </section>
        <section class="company-siblings"><div class="shell"><h2>Conheça as outras empresas</h2><nav aria-label="Outras empresas do Grupo New Tractor"><ul>${companyLinks(company.slug)}</ul></nav><a class="text-link" href="/#empresas">Voltar à visão do grupo ${icon("arrow")}</a></div></section>`,
    };
  });
}
