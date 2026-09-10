// Dataset editorial factual de Minas Gerais para priorização local.
// População: IBGE, referência em 1º de julho de 2025; não representa atendimento realizado.

export const minasSources = Object.freeze({
  timoteoIbge: { title: 'IBGE — Timóteo, população estimada de 2025', url: 'https://www.ibge.gov.br/cidades-e-estados/mg/timoteo.html', year: 2025 },
  aperamTimoteo: { title: 'Aperam — usinas e unidade integrada de Timóteo', url: 'https://www.aperam.com/pt-br/quem-somos/usinas/' },
  araguariAgro: { title: 'Prefeitura de Araguari — PPA 2026–2029 e agronegócio', url: 'https://araguari.mg.gov.br/assets/uploads/correio/898c66f6743ef401b13d69eef3ade735.pdf', year: 2026 },
  araxaEconomia: { title: 'Prefeitura de Araxá — cadeias mineral e agrícola nas exportações de 2025', url: 'https://araxa.mg.gov.br/noticia/8626/araxa-impulsiona-recorde-de-exportacoes-de-minas-em-2025-e-consolida-importancia-no-cenario-economico-global', year: 2026 },
  barbacenaAgro: { title: 'Prefeitura de Barbacena — Exposição Agropecuária de 2026', url: 'https://www1.barbacena.mg.gov.br/portal/noticias/0/3/3333/abertura-da-exposicao-agropecuaria-consolida-barbacena-como-polo-produtivo-em-minas-gerais', year: 2026 },
  betimIndustria: { title: 'Prefeitura de Betim — perfil do município', url: 'https://www.betim.mg.gov.br/portal/servicos/1001/o-municipio/' },
  lafaieteIndustria: { title: 'Prefeitura de Conselheiro Lafaiete — diagnóstico econômico do Plano Diretor', url: 'https://conselheirolafaiete.mg.gov.br/v2/wp-content/uploads/2022/05/Relatorio-preliminar-Desenvolvimento-Economico_PD-Lafaiete-final.pdf', year: 2022 },
  fabricianoIndustria: { title: 'Prefeitura de Coronel Fabriciano — dados municipais e distrito industrial', url: 'https://www.fabriciano.mg.gov.br/pagina/dados-do-municipio' },
  divinopolisConfeccao: { title: 'Prefeitura de Divinópolis — indústria da confecção em 2025', url: 'https://www.divinopolis.mg.gov.br/portal/noticias/0/3/25697/divinopolis-reafirma-protagonismo-como-capital-mineira-da-moda', year: 2025 },
  itaunaIndustria: { title: 'Prefeitura de Itaúna — informações do município', url: 'https://www.itauna.mg.gov.br/portal/servicos/1007/' },
  ituiutabaZoneamento: { title: 'Câmara de Ituiutaba — legislação municipal de zoneamento de 2025', url: 'https://www.ituiutaba.mg.leg.br/leis/lei-municipal/leis-ordinarias/ano-2025', year: 2025 },
  lavrasCafe: { title: 'Agência Minas — agroindústria-piloto de café da EPAMIG em Lavras', url: 'https://www.agenciaminas.mg.gov.br/noticia/epamig-inaugura-agroindustria-piloto-de-extracao-de-oleo-cafe', year: 2026 },
  novaSerranaCalcados: { title: 'Agência Minas — polo calçadista de Nova Serrana', url: 'https://www.agenciaminas.mg.gov.br/noticia/governo-de-minas-impulsiona-pequenos-negocios-do-polo-calcadista-de-nova-serrana-e-e-destaque-em-evento-do-setor-no-municipio-123271', year: 2024 },
  paraMinasAgro: { title: 'Agência Minas — reconhecimento do APL de frango e suíno de Pará de Minas', url: 'https://agenciaminas.mg.gov.br/noticia/governo-do-estado-reconhece-apl-de-frango-e-suino-em-para-de-minas', year: 2023 },
  passosEconomia: { title: 'Prefeitura de Passos — dados gerais e economia municipal', url: 'https://www.passos.mg.gov.br/dados-gerais-do-municipio' },
  teofiloGemas: { title: 'Prefeitura de Teófilo Otoni — Encontro de Garimpeiros e tradição mineral', url: 'https://teofilootoni.mg.gov.br/noticias/a-prefeitura-abre-oficialmente-o-36o-encontro-de-garimpeiros-e-fortalece-tradicao-mineral-de-teofilo-otoni', year: 2026 },
  "ibgePop2025": {
    "title": "IBGE — Estimativas da população residente nos municípios, referência 1º de julho de 2025 (revisão 28/08/2026)",
    "url": "https://ftp.ibge.gov.br/Estimativas_de_Populacao/Estimativas_2025/POP2025_20260828.xls",
    "year": 2025
  },
  "ibgeMunicipiosMG": {
    "title": "IBGE Cidades e Estados — Minas Gerais",
    "url": "https://www.ibge.gov.br/cidades-e-estados/mg.html",
    "year": 2025
  },
  "semadMinasRio": {
    "title": "SEMAD/MG — Complexo Minas-Rio, Anglo American",
    "url": "https://meioambiente.mg.gov.br/w/28/06/2017-anglo-american-minerio-de-ferro-brasil-s.a.-complexo-minas-rio",
    "year": 2017
  },
  "csnCasaPedra": {
    "title": "CSN — Mineração e mina Casa de Pedra em Congonhas",
    "url": "https://www.csn.com.br/mineracao/"
  },
  "igamMiningStructures": {
    "title": "IGAM/MG — Lista de barragens em nível de emergência",
    "url": "https://igam.mg.gov.br/documents/117662/7067928/lista_de_barragens_-_nivel_de_emergencia_mg/b7d4ce75-8c44-ecbe-ca68-fb337185860f?t=1723515132707&version=1.0",
    "year": 2024
  },
  "valeItabirito": {
    "title": "Vale — Atuação e operações em Itabirito",
    "url": "https://vale.com/pt/itabirito",
    "year": 2026
  },
  "valeBaraoCocais": {
    "title": "Vale — Atuação da Mina Brucutu em Barão de Cocais",
    "url": "https://vale.com/pt/baraodecocais",
    "year": 2026
  },
  "samarcoGermano": {
    "title": "Samarco — Processo produtivo e Complexo de Germano",
    "url": "https://www.samarco.com/processo-produtivo/"
  },
  "sgbSaoGoncalo": {
    "title": "Serviço Geológico do Brasil — Geologia e recursos minerais das folhas Florália e São Gonçalo do Rio Abaixo",
    "url": "https://rigeo.sgb.gov.br/items/e7c0e548-4bf0-45f2-9181-6b079f8d8272",
    "year": 2025
  },
  "mosaicTapira": {
    "title": "Mosaic — RIMA do Complexo de Mineração de Tapira",
    "url": "https://mosaicco.com.br/ckfinder/userfiles/files/RIMA%20CMT%20PDM-2%20-%20Rev%282%29.pdf"
  },
  "nexaVazante": {
    "title": "Nexa Resources — Operação Vazante",
    "url": "https://ri.nexaresources.com/operations/vazante/",
    "year": 2025
  },
  "sedeValeLitio": {
    "title": "Governo de Minas / SEDE — Projeto Estratégico Vale do Lítio",
    "url": "https://desenvolvimento.mg.gov.br/index.php/inicio/projetos/projeto/1170",
    "year": 2025
  },
  "aperamBioEnergiaForests": {
    "title": "Aperam BioEnergia — História e áreas florestais",
    "url": "https://aperambioenergia.com.br/institucional/empresa/historia/"
  },
  "projetoJaiba": {
    "title": "Prefeitura de Jaíba — história e Projeto Jaíba",
    "url": "https://www.jaiba.mg.gov.br/cidade/historia"
  },
  "saogotardoAgro": {
    "title": "Prefeitura de São Gotardo — Decreto de emergência econômica no setor agropecuário",
    "url": "https://www.saogotardo.mg.gov.br/midia_publicacao.php?codmidia=397",
    "year": 2026
  },
  "arcelorMonlevade": {
    "title": "ArcelorMittal Brasil — Unidades e Unidade Monlevade",
    "url": "https://brasil.arcelormittal.com/sala-imprensa/noticias/brasil/arcelormittal-brasil-divulga-relatorio-de-sustentabilidade-2025-com-destaque-para-transicao-energetica-e-inovacao",
    "year": 2025
  },
  "gerdauOuroBranco": {
    "title": "Gerdau RI — Histórico e perfil corporativo, usina Açominas em Ouro Branco",
    "url": "https://ri.gerdau.com/a-gerdau/historico-e-perfil-corporativo/"
  },
  "amifPlantios": {
    "title": "AMIF — Levantamento territorial de florestas plantadas em Minas Gerais",
    "url": "https://amif.org.br/pt/levantamento-completo/"
  },
  "suzanoCurveloOperators": {
    "title": "Suzano — Formação de operadores de máquinas florestais em Curvelo e entorno",
    "url": "https://www.suzano.com.br/noticia/suzano-forma-novos-operadores-de-maquinas-florestais-em-minas-gerais",
    "year": 2024
  },
  "bracellJoaoPinheiro": {
    "title": "Bracell — Vagas para operadores de máquinas florestais em João Pinheiro",
    "url": "https://www.bracell.com/noticias/bracell-abre-vagas-em-joao-pinheiro-mg/",
    "year": 2023
  },
  "nexaTresMarias": {
    "title": "Nexa Resources — Unidade metalúrgica de Três Marias",
    "url": "https://ri.nexaresources.com/operations_smelting/tres-marias/",
    "year": 2025
  },
  "kinrossParacatu": {
    "title": "Kinross — Mina Morro do Ouro e operação em Paracatu",
    "url": "https://kinross.com.br/a-kinross/conheca/",
    "year": 2026
  },
  "prefeituraUnaiAgro": {
    "title": "Prefeitura de Unaí — Secretaria de Agricultura e Serviços Rurais",
    "url": "https://prefeituraunai.mg.gov.br/pmu2/index.php/secretarias/agricultura/a-secretaria-agricultura.html",
    "year": 2026
  },
  "patrocinioAgro": {
    "title": "Prefeitura de Patrocínio — Agricultura e apoio ao produtor rural",
    "url": "https://pmp.patrocinio.mg.gov.br/portal/governo-municipal-fortalece-a-agricultura-e-amplia-acoes-de-apoio-ao-produtor-rural-em-patrocinio/",
    "year": 2026
  },
  "muriaeEconomy": {
    "title": "Prefeitura de Muriaé — História e economia local",
    "url": "https://muriae.mg.gov.br/nossa-historia/"
  },
  "fjpGovernadorValadares": {
    "title": "SEDE/MG — Perfil econômico da Região Geográfica Intermediária de Governador Valadares",
    "url": "https://desenvolvimento.mg.gov.br/assets/projetos/1081/4679990e6d5bbf15e677ca9823c921b0.pdf"
  },
  "gvEconomicContext": {
    "title": "Prefeitura de Governador Valadares — briefing econômico e territorial municipal",
    "url": "https://www.valadares.mg.gov.br/abrir_arquivo.aspx/Concorrencia_5_2022_EDITAL?arquivo=%7B70EB7DA0-5CA0-7CBC-6CE2-B70A4AEDCCEC%7D.pdf&cdLicitacaoArquivo=133041&cdLocal=3",
    "year": 2022
  },
  "ibiriteIFMG": {
    "title": "IFMG Campus Ibirité — formação técnica e institucional",
    "url": "https://www.ifmg.edu.br/ibirite/institucional/sobre-o-ifmg"
  },
  "ribeiraoPpaEconomy": {
    "title": "Prefeitura de Ribeirão das Neves — PPA 2026–2029, desenvolvimento econômico",
    "url": "https://ribeiraodasneves.mg.gov.br/src/pages/transparencia.html",
    "year": 2026
  },
  "bhEconomicDevelopment": {
    "title": "PBH — Empreender em Belo Horizonte e desenvolvimento econômico",
    "url": "https://prefeitura.pbh.gov.br/empreendedor/empreender-em-bh"
  },
  "contagemIndustrial": {
    "title": "Prefeitura de Contagem — Distritos e polos industriais",
    "url": "https://portal.contagem.mg.gov.br/superintendencia-de-gestao-de-distritos-e-polos-sedecon/",
    "year": 2026
  },
  "ipatingaEconomy": {
    "title": "Câmara de Ipatinga — PPA 2026–2029 e perfil econômico municipal",
    "url": "https://camaraipatinga.mg.gov.br/normas-juridicas/20101?slug=aprova-o-plano-plurianual-do-municipio-de-ipatinga-para-o-periodo-de-2026-a-2029",
    "year": 2026
  },
  "valeItabira": {
    "title": "Vale — Usina Modelo e produção de minério de ferro em Itabira",
    "url": "https://www.vale.com/pt/w/vale-inaugura-usina-modelo-em-itabira-com-ia-aplicada-a-operacao",
    "year": 2026
  },
  "jfEconomicDevelopment": {
    "title": "Prefeitura de Juiz de Fora — competências de desenvolvimento econômico e inovação",
    "url": "https://www.camarajf.mg.gov.br/sal/textop.php?idt=272187"
  },
  "montesClarosIndustrial": {
    "title": "Prefeitura de Montes Claros — polo industrial e localização estratégica",
    "url": "https://portal.montesclaros.mg.gov.br/noticia/aceleracao-economica/polo-industrial-incentivos-transporte-e-localizacao-estrategica-fortalecem-industrializacao-em-montes-claros",
    "year": 2026
  },
  "valeNovaLima": {
    "title": "Vale — Operação e desenvolvimento local em Nova Lima",
    "url": "https://www.vale.com/pt/novalima",
    "year": 2026
  },
  "patosAgro": {
    "title": "Prefeitura de Patos de Minas — Secretaria de Agricultura e Pecuária",
    "url": "https://www.patosdeminas.mg.gov.br/portal/secretarias/26/secretaria-municipal-de-agricultura-pecuaria-e-desenvolvimento-sustentavel",
    "year": 2026
  },
  "pocosIndustrial": {
    "title": "Prefeitura de Poços de Caldas — balanço de desenvolvimento econômico de 2025",
    "url": "https://pocosdecaldas.mg.gov.br/noticias/balanco-de-2025-destaca-avancos-no-desenvolvimento-economico-de-pocos-de-caldas/",
    "year": 2025
  },
  "pousoIndustrial": {
    "title": "Prefeitura de Pouso Alegre — estudo ambiental de acesso ao Distrito Industrial",
    "url": "https://pousoalegre.mg.gov.br/licitacoes/11%20-%20ESTUDO%20AMBIENTAL%20-%20ACESSO%20AO%20DISTRITO%20INDUSTRIAL.pdf"
  },
  "sabaraEconomicPlan": {
    "title": "Prefeitura de Sabará — Plano Diretor e diretrizes para exploração mineral",
    "url": "https://site.sabara.mg.gov.br/wp-content/uploads/2024/11/plano-diretor.pdf",
    "year": 2024
  },
  "santaLuziaIndustrial": {
    "title": "Prefeitura de Santa Luzia — Secretaria de Desenvolvimento Econômico",
    "url": "https://www.santaluzia.mg.gov.br/secretaria-de-desenvolvimento-economico/",
    "year": 2026
  },
  "gerdauSeteLagoas": {
    "title": "Gerdau RI — Unidade de Sete Lagoas",
    "url": "https://ri.gerdau.com/a-gerdau/historico-e-perfil-corporativo/"
  },
  "ubaFurnitureIndustry": {
    "title": "Prefeitura de Ubá — Plano de Contingência e polo moveleiro",
    "url": "https://www.uba.mg.gov.br/abrir_arquivo.aspx/Plano_de_Contingencia_2021_2022?arquivo=%7B5E1ACD7C-A7D8-BC18-8BDB-7AB611683B7B%7D.pdf&cdLocal=2",
    "year": 2021
  },
  "uberabaAgroEconomy": {
    "title": "Prefeitura de Uberaba — desenvolvimento econômico e agronegócio",
    "url": "https://portal.uberaba.mg.gov.br/res/doc/desenvolvimento/index.html",
    "year": 2026
  },
  "uberlandiaLogistics": {
    "title": "Prefeitura de Uberlândia — investimento em logística",
    "url": "https://www.uberlandia.mg.gov.br/2025/04/28/uberlandia-recebe-r-150-milhoes-em-investimentos-no-setor-de-logistica/",
    "year": 2025
  },
  "varginhaEconomicDevelopment": {
    "title": "Prefeitura de Varginha — Secretaria Municipal de Desenvolvimento Econômico",
    "url": "https://www.varginha.mg.gov.br/portal/secretarias/1/secretaria-municipal-de-desenvolvimento-economico--sedec"
  },
  "vespasianoIndustrial": {
    "title": "Prefeitura de Vespasiano — Secretaria de Indústria e Desenvolvimento Econômico",
    "url": "https://vespasiano.mg.gov.br/prefeitura/secretarias/industria-desenvolvimento-economico/",
    "year": 2026
  }
});

const populationRows = [
  [
    "Araguari",
    "araguari",
    "3103504",
    123432,
    "Triângulo Mineiro"
  ],
  [
    "Araxá",
    "araxa",
    "3104007",
    118786,
    "Alto Paranaíba"
  ],
  [
    "Barbacena",
    "barbacena",
    "3105608",
    129695,
    "Campo das Vertentes"
  ],
  [
    "Belo Horizonte",
    "belo-horizonte",
    "3106200",
    2415872,
    "RMBH"
  ],
  [
    "Betim",
    "betim",
    "3106705",
    431433,
    "RMBH"
  ],
  [
    "Conselheiro Lafaiete",
    "conselheiro-lafaiete",
    "3118304",
    138946,
    "Campo das Vertentes"
  ],
  [
    "Contagem",
    "contagem",
    "3118601",
    651718,
    "RMBH"
  ],
  [
    "Coronel Fabriciano",
    "coronel-fabriciano",
    "3119401",
    108708,
    "Vale do Aço"
  ],
  [
    "Divinópolis",
    "divinopolis",
    "3122306",
    243583,
    "Centro-Oeste"
  ],
  [
    "Governador Valadares",
    "governador-valadares",
    "3127701",
    266561,
    "Vale do Rio Doce"
  ],
  [
    "Ibirité",
    "ibirite",
    "3129806",
    179582,
    "RMBH"
  ],
  [
    "Ipatinga",
    "ipatinga",
    "3131307",
    235311,
    "Vale do Aço"
  ],
  [
    "Itabira",
    "itabira",
    "3131703",
    118053,
    "Quadrilátero Ferrífero"
  ],
  [
    "Itaúna",
    "itauna",
    "3133808",
    103272,
    "Centro-Oeste"
  ],
  [
    "Ituiutaba",
    "ituiutaba",
    "3134202",
    106775,
    "Triângulo Mineiro"
  ],
  [
    "Juiz de Fora",
    "juiz-de-fora",
    "3136702",
    567730,
    "Zona da Mata"
  ],
  [
    "Lavras",
    "lavras",
    "3138203",
    110682,
    "Sul de Minas"
  ],
  [
    "Montes Claros",
    "montes-claros",
    "3143302",
    437601,
    "Norte de Minas"
  ],
  [
    "Muriaé",
    "muriae",
    "3143906",
    108447,
    "Zona da Mata"
  ],
  [
    "Nova Lima",
    "nova-lima",
    "3144805",
    120959,
    "RMBH / Quadrilátero Ferrífero"
  ],
  [
    "Nova Serrana",
    "nova-serrana",
    "3145208",
    114791,
    "Centro-Oeste"
  ],
  [
    "Pará de Minas",
    "para-de-minas",
    "3147105",
    102844,
    "Centro-Oeste"
  ],
  [
    "Passos",
    "passos",
    "3147907",
    116951,
    "Sul de Minas"
  ],
  [
    "Patos de Minas",
    "patos-de-minas",
    "3148004",
    169173,
    "Alto Paranaíba"
  ],
  [
    "Poços de Caldas",
    "pocos-de-caldas",
    "3151800",
    172339,
    "Sul de Minas"
  ],
  [
    "Pouso Alegre",
    "pouso-alegre",
    "3152501",
    162133,
    "Sul de Minas"
  ],
  [
    "Ribeirão das Neves",
    "ribeirao-das-neves",
    "3154606",
    346971,
    "RMBH"
  ],
  [
    "Sabará",
    "sabara",
    "3156700",
    134576,
    "RMBH"
  ],
  [
    "Santa Luzia",
    "santa-luzia",
    "3157807",
    230382,
    "RMBH"
  ],
  [
    "Sete Lagoas",
    "sete-lagoas",
    "3167202",
    238909,
    "Região Central"
  ],
  [
    "Teófilo Otoni",
    "teofilo-otoni",
    "3168606",
    142851,
    "Vale do Mucuri"
  ],
  [
    "Ubá",
    "uba",
    "3169901",
    107423,
    "Zona da Mata"
  ],
  [
    "Uberaba",
    "uberaba",
    "3170107",
    356781,
    "Triângulo Mineiro"
  ],
  [
    "Uberlândia",
    "uberlandia",
    "3170206",
    761835,
    "Triângulo Mineiro"
  ],
  [
    "Varginha",
    "varginha",
    "3170701",
    143676,
    "Sul de Minas"
  ],
  [
    "Vespasiano",
    "vespasiano",
    "3171204",
    138583,
    "RMBH"
  ]
];

// Setores são filtros editoriais de prospecção; não significam cliente,
// contrato, filial ou prova de que a New Tractor já atende a cidade.
const populationSectorMap = {
  araguari: ['agro'],
  araxa: ['mineracao'],
  barbacena: ['agro'],
  'belo-horizonte': [],
  betim: ['industrial'],
  'conselheiro-lafaiete': ['mineracao', 'industrial'],
  contagem: ['industrial'],
  'coronel-fabriciano': ['industrial'],
  divinopolis: ['industrial'],
  'governador-valadares': [],
  ibirite: [],
  ipatinga: ['industrial'],
  itabira: ['mineracao'],
  itauna: ['industrial'],
  ituiutaba: [],
  'juiz-de-fora': [],
  lavras: ['agro'],
  'montes-claros': ['industrial'],
  muriae: ['industrial'],
  'nova-lima': ['mineracao'],
  'nova-serrana': ['industrial'],
  'para-de-minas': ['agro', 'industrial'],
  passos: ['agro', 'industrial'],
  'patos-de-minas': ['agro'],
  'pocos-de-caldas': ['industrial'],
  'pouso-alegre': ['industrial'],
  'ribeirao-das-neves': [],
  sabara: [],
  'santa-luzia': [],
  'sete-lagoas': ['industrial'],
  'teofilo-otoni': ['mineracao'],
  uba: ['industrial'],
  uberaba: ['agro', 'industrial'],
  uberlandia: [],
  varginha: [],
  vespasiano: [],
};

const populationContextOverrides = {
  araguari: 'O planejamento municipal 2026–2029 destaca o agronegócio, o café e a conexão logística de Araguari no eixo São Paulo–Brasília. A referência ajuda a distinguir uma demanda de apoio rural, beneficiamento ou movimentação de cargas.',
  araxa: 'A Prefeitura relaciona a participação de Araxá nas exportações mineiras de 2025 às cadeias mineral, com destaque para o nióbio, e agrícola. Na consulta de manutenção, é importante identificar se o ativo trabalha na extração, no beneficiamento ou em outra aplicação.',
  barbacena: 'A Exposição Agropecuária de Barbacena de 2026 reuniu produtores e empresas e destacou a atividade rural do município. Equipamentos de apoio à produção devem ser identificados pela função; um implemento agrícola e uma máquina de esteiras não têm o mesmo conjunto de componentes.',
  betim: 'O perfil municipal de Betim destaca a indústria automotiva e petroquímica, além de metalurgia, mecânica e logística. Demandas de pátio, movimentação e componentes da planta precisam separar o equipamento móvel do processo industrial fixo.',
  'conselheiro-lafaiete': 'O diagnóstico econômico do Plano Diretor de Conselheiro Lafaiete, publicado em 2022 com dados históricos, descreve atividades industriais e extração de minerais metálicos e não metálicos. O local efetivo da operação e a aplicação do componente devem acompanhar o pedido.',
  'coronel-fabriciano': 'Coronel Fabriciano integra o Vale do Aço e sua prefeitura descreve um distrito industrial urbano próximo à BR-381. Essa localização é um ponto de partida para informar origem, acesso e transporte, sem presumir que toda demanda seja siderúrgica.',
  divinopolis: 'A Prefeitura de Divinópolis destacou em 2025 a cadeia de confecção e moda na economia municipal. A presença industrial não indica, por si só, uso de linha amarela: a avaliação começa pela máquina, função e componente efetivamente envolvidos.',
  itauna: 'O perfil municipal de Itaúna destaca atividades metalúrgicas, siderúrgicas e metalomecânicas. Para componentes dessas aplicações, informe a função na instalação, o material conhecido, a referência dimensional e os documentos disponíveis.',
  ituiutaba: 'A legislação de zoneamento de Ituiutaba de 2025 contempla distritos industriais e áreas destinadas a atividades agropecuárias. Zoneamento é planejamento territorial; a consulta precisa identificar a operação que existe no endereço e sua necessidade real.',
  lavras: 'Em 2026, a EPAMIG inaugurou em Lavras uma agroindústria-piloto de extração de óleo de café e laboratórios ligados à pesquisa do setor. O contexto permite distinguir cultivo, beneficiamento e pesquisa ao descrever a função de um ativo.',
  'nova-serrana': 'O Governo de Minas descreveu em 2024 o polo calçadista de Nova Serrana e sua importância para o emprego local. Uma necessidade de componente industrial depende de desenho e aplicação; não se presume compatibilidade com máquinas de calçados ou oferta para toda a linha de produção.',
  'para-de-minas': 'O Estado reconheceu em 2023 o arranjo produtivo de frango e suíno em Pará de Minas. Granja, movimentação de insumos e processamento têm equipamentos e requisitos de acesso distintos; a função real do ativo orienta a consulta.',
  passos: 'O perfil municipal de Passos relaciona agroindústrias de açúcar, álcool, levedura e laticínios, além de cana, café e pecuária. Na manutenção, é útil distinguir máquinas móveis de apoio, implementos e componentes de processo.',
  'teofilo-otoni': 'A Prefeitura de Teófilo Otoni destacou a tradição mineral e de gemas durante o Encontro de Garimpeiros de 2026. Extração, beneficiamento e comércio não usam necessariamente os mesmos ativos: identifique a operação e a função do componente solicitado.',
  'belo-horizonte': 'A PBH apresenta o programa Empreender em BH como iniciativa de apoio ao empreendedorismo e ao desenvolvimento econômico. Isso identifica um contexto de negócios e serviços da capital, não uma operação setorial específica ou atendimento local da New Tractor.',
  contagem: 'A Sedecon de Contagem mantém informações sobre distritos e polos industriais e uma administração regional industrial. A fonte sustenta um contexto industrial e logístico, sem provar demanda específica, cliente ou operação local da New Tractor.',
  'governador-valadares': 'Briefing municipal descreve Governador Valadares como entroncamento rodoviário e ferroviário e afirma que a economia local se ancora no comércio e no setor de serviços. O registro sustenta contexto comercial e de serviços, não uma vocação setorial específica ou atendimento da New Tractor.',
  ibirite: 'O IFMG Campus Ibirité registra formação técnica e institucional ligada ao campus no município. Essa evidência local não comprova polo industrial, demanda de equipamentos, cliente ou atendimento da New Tractor.',
  ipatinga: 'Materiais do PPA municipal 2026–2029 apresentam o perfil econômico de Ipatinga e mencionam a siderurgia e produtos da metalurgia. O dado sustenta contexto industrial, sem identificar cliente, contrato ou disponibilidade local da New Tractor.',
  itabira: 'A Vale mantém referência pública à Usina Modelo e à produção de minério de ferro em Itabira. O registro sustenta contexto de operação mineral, sem afirmar relação comercial ou presença da New Tractor.',
  'juiz-de-fora': 'Publicação legislativa municipal atribui à administração de Juiz de Fora competências de desenvolvimento econômico e inovação. Isso é contexto institucional de um centro regional, não prova de vocação setorial específica ou operação da New Tractor.',
  'montes-claros': 'A Prefeitura de Montes Claros relata investimentos farmacêuticos e a atuação do corredor industrial com acesso rodoviário regional. O fato sustenta contexto industrial, sem afirmar cliente, demanda ou execução local da New Tractor.',
  'nova-lima': 'A Vale informa complexos mineradores de Vargem Grande e Paraopeba e uma usina de pelotização em Nova Lima. A fonte sustenta contexto de mineração, sem afirmar cliente, contrato ou atendimento local da New Tractor.',
  'patos-de-minas': 'O portal municipal mantém a Secretaria de Agricultura, Pecuária e Desenvolvimento Sustentável de Patos de Minas. Isso confirma contexto administrativo agropecuário, não volume de produção, cliente ou serviço local da New Tractor.',
  'pocos-de-caldas': 'A Prefeitura de Poços de Caldas informa três investimentos industriais lançados em 2025 e a expansão do parque industrial. O registro sustenta contexto industrial, mas anúncios de investimento não comprovam demanda atual ou operação local da New Tractor.',
  'pouso-alegre': 'Estudo ambiental municipal para o acesso ao Distrito Industrial descreve a atração de indústrias e o papel econômico regional de Pouso Alegre. A fonte sustenta contexto industrial e logístico, sem garantir serviço, prazo ou presença da New Tractor.',
  sabara: 'O Plano Diretor de Sabará inclui diretrizes para exploração mineral e turismo no ordenamento municipal. O documento sustenta contexto de política mineral territorial, não prova operação ativa, cliente ou serviço da New Tractor.',
  'santa-luzia': 'A Secretaria de Desenvolvimento Econômico de Santa Luzia declara como objetivo promover crescimento sustentável e modernização industrial. Trata-se de política pública municipal, não prova de comprador específico ou presença da New Tractor.',
  'sete-lagoas': 'O perfil corporativo da Gerdau lista Sete Lagoas entre suas unidades em Minas Gerais. A referência sustenta contexto industrial, sem identificar cliente, contrato ou disponibilidade local da New Tractor.',
  uba: 'O Plano de Contingência municipal identifica o polo moveleiro e registra indústria e comércio entre as atividades locais de Ubá. Isso sustenta contexto industrial moveleiro, não uma demanda específica ou atendimento da New Tractor.',
  uberaba: 'O portal de desenvolvimento de Uberaba descreve agronegócio, produção agrícola e iniciativas de agroindústria e inovação. Os fatos sustentam contexto agropecuário, sem afirmar cliente, frota ou atendimento da New Tractor.',
  uberlandia: 'A Prefeitura de Uberlândia anuncia investimento em galpão logístico e apresenta a cidade como referência de logística regional. O fato sustenta contexto logístico, não uma classificação nos quatro setores nem oferta local da New Tractor.',
  varginha: 'A Secretaria de Desenvolvimento Econômico de Varginha informa competências para atrair empresas e dimensionar infraestrutura da indústria e do comércio locais. Isso é contexto institucional econômico, não classificação setorial ou prova de atendimento da New Tractor.',
  vespasiano: 'A Secretaria de Indústria e Desenvolvimento Econômico de Vespasiano declara que fomenta a atividade industrial e o desenvolvimento econômico municipal. A fonte sustenta contexto industrial no Vetor Norte, sem afirmar cliente ou presença da New Tractor.',
  muriae: 'A Prefeitura de Muriaé identifica a indústria da moda e a confecção como atividades de destaque na economia local. A fonte municipal sustenta contexto industrial têxtil, mas não afirma cliente, demanda ou atendimento da New Tractor.',
  'ribeirao-das-neves': 'O PPA municipal 2026–2029 registra objetivos de fomento à indústria, ao comércio, aos serviços e à atração de empresas. O documento descreve planejamento público, não um polo operacional, demanda, cliente ou atendimento da New Tractor.',
};

const populationContextSourceKeys = {
  araguari: ['araguariAgro'], araxa: ['araxaEconomia'], barbacena: ['barbacenaAgro'],
  betim: ['betimIndustria'], 'conselheiro-lafaiete': ['lafaieteIndustria'],
  'coronel-fabriciano': ['fabricianoIndustria'], divinopolis: ['divinopolisConfeccao'],
  itauna: ['itaunaIndustria'], ituiutaba: ['ituiutabaZoneamento'], lavras: ['lavrasCafe'],
  'nova-serrana': ['novaSerranaCalcados'], 'para-de-minas': ['paraMinasAgro'],
  passos: ['passosEconomia'], 'teofilo-otoni': ['teofiloGemas'],
  'belo-horizonte': ['bhEconomicDevelopment'],
  contagem: ['contagemIndustrial'],
  'governador-valadares': ['gvEconomicContext'],
  ibirite: ['ibiriteIFMG'],
  ipatinga: ['ipatingaEconomy'],
  itabira: ['valeItabira'],
  'juiz-de-fora': ['jfEconomicDevelopment'],
  'montes-claros': ['montesClarosIndustrial'],
  'nova-lima': ['valeNovaLima'],
  'patos-de-minas': ['patosAgro'],
  'pocos-de-caldas': ['pocosIndustrial'],
  'pouso-alegre': ['pousoIndustrial'],
  sabara: ['sabaraEconomicPlan'],
  'santa-luzia': ['santaLuziaIndustrial'],
  'sete-lagoas': ['gerdauSeteLagoas'],
  uba: ['ubaFurnitureIndustry'],
  uberaba: ['uberabaAgroEconomy'],
  uberlandia: ['uberlandiaLogistics'],
  varginha: ['varginhaEconomicDevelopment'],
  vespasiano: ['vespasianoIndustrial'],
  muriae: ['muriaeEconomy'],
  'ribeirao-das-neves': ['ribeiraoPpaEconomy'],
};

const populationCities = populationRows.map(([name, slug, ibge, population, region]) => ({
  name,
  slug,
  ibge,
  population,
  populationYear: 2025,
  inclusion: ['population'],
  sectors: populationSectorMap[slug],
  region,
  context: populationContextOverrides[slug],
  procurementNote: 'Ao consultar a New Tractor, informe o endereço efetivo da operação em ' + name + ', fabricante e modelo, componente, aplicação e se a peça está instalada ou disponível para transporte. Fotos, desenho e registros existentes ajudam a definir a próxima avaliação.',
  sourceKeys: ['ibgePop2025', 'ibgeMunicipiosMG', ...(populationContextSourceKeys[slug] || [])],
}));

const sectorPoles = [
  ['Timóteo', 'timoteo', '3168705', 84172, ['industry'], ['industrial'], 'Vale do Aço',
    'A Aperam informa que sua usina integrada de Timóteo produz aços inoxidáveis, elétricos e carbono. Esse contexto industrial pede distinguir máquinas móveis de apoio, componentes do processo e requisitos de acesso à planta.',
    ['ibgePop2025', 'timoteoIbge', 'aperamTimoteo']],
  [
    "Conceição do Mato Dentro",
    "conceicao-do-mato-dentro",
    "3117504",
    24559,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Serra do Cipó / Jequitinhonha",
    "O complexo Minas-Rio possui mina, tratamento de minério e infraestrutura licenciada no município. O mineroduto conecta a operação mineira ao Porto do Açu; a seleção registra contexto mineral, não atendimento ou presença da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "semadMinasRio"
    ]
  ],
  [
    "Congonhas",
    "congonhas",
    "3118007",
    55272,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Quadrilátero Ferrífero",
    "A CSN Mineração identifica a mina Casa de Pedra, em Congonhas, como um de seus principais ativos de minério de ferro. A referência comprova contexto de mineração no município, sem declarar relação comercial com a New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "csnCasaPedra"
    ]
  ],
  [
    "Itabirito",
    "itabirito",
    "3131901",
    56369,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Quadrilátero Ferrífero",
    "A página territorial da Vale registra atuação da empresa em Itabirito e descreve atividades de mineração, monitoramento e desenvolvimento local. A referência comprova contexto operacional minerário, mas não identifica cliente, contrato ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "valeItabirito"
    ]
  ],
  [
    "Mariana",
    "mariana",
    "3140001",
    64506,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Quadrilátero Ferrífero",
    "A Samarco descreve o Complexo de Germano como uma unidade de extração e beneficiamento localizada em Mariana e Ouro Preto. A fonte empresarial é usada apenas para justificar o contexto mineral territorial, não como prova de cliente da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "samarcoGermano"
    ]
  ],
  [
    "Ouro Preto",
    "ouro-preto",
    "3146107",
    77914,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Quadrilátero Ferrífero",
    "O Complexo de Germano da Samarco abrange atividades de extração e beneficiamento em Mariana e Ouro Preto. A seleção é territorial e setorial; não afirma filial, atendimento realizado ou disponibilidade da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "samarcoGermano"
    ]
  ],
  [
    "São Gonçalo do Rio Abaixo",
    "sao-goncalo-do-rio-abaixo",
    "3161908",
    12475,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Quadrilátero Ferrífero",
    "Relatório técnico do Serviço Geológico do Brasil destaca a Mina de Brucutu e outras atividades minerais e de agregados no município. O relatório sustenta a seleção como polo mineral, sem sugerir atendimento ou vínculo comercial da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "sgbSaoGoncalo"
    ]
  ],
  [
    "Barão de Cocais",
    "barao-de-cocais",
    "3105400",
    32264,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Quadrilátero Ferrífero",
    "A página territorial da Vale identifica a Mina Brucutu e sua operação em Barão de Cocais, incluindo atualizações de produção e segurança. A fonte comprova contexto operacional minerário, não uma contratação ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "valeBaraoCocais"
    ]
  ],
  [
    "Tapira",
    "tapira",
    "3168101",
    4215,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Alto Paranaíba",
    "O RIMA do Complexo de Mineração de Tapira descreve lavra, beneficiamento e expedição de concentrado fosfático no município. A referência comprova contexto de mineração e fertilizantes, sem afirmar disponibilidade ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "mosaicTapira"
    ]
  ],
  [
    "Vazante",
    "vazante",
    "3171006",
    20459,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Noroeste de Minas",
    "A Nexa identifica a Mina de Vazante como operação polimetálica de zinco, chumbo e prata em Minas Gerais. O dado justifica o polo mineral e não declara cliente, filial ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "nexaVazante"
    ]
  ],
  [
    "Araçuaí",
    "aracuai",
    "3103405",
    35185,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Vale do Jequitinhonha",
    "O Governo de Minas inclui Araçuaí no projeto estratégico Vale do Lítio e na cadeia territorial de minerais estratégicos. A seleção registra prioridade setorial pública, não operação da New Tractor no município.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "sedeValeLitio"
    ]
  ],
  [
    "Coronel Murta",
    "coronel-murta",
    "3119500",
    8237,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Vale do Jequitinhonha",
    "Coronel Murta aparece na delimitação estadual do Vale do Lítio, voltada à cadeia produtiva e ao desenvolvimento regional. Essa evidência sustenta o recorte mineral, sem afirmar mina específica, cliente ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "sedeValeLitio"
    ]
  ],
  [
    "Itinga",
    "itinga",
    "3134004",
    13954,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Vale do Jequitinhonha",
    "Itinga integra a lista oficial do projeto Vale do Lítio do Governo de Minas. A referência é uma justificativa territorial para minerais estratégicos, não uma afirmação de operação ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "sedeValeLitio"
    ]
  ],
  [
    "Salinas",
    "salinas",
    "3157005",
    41736,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Norte de Minas",
    "Salinas integra o Vale do Lítio segundo a Secretaria de Desenvolvimento Econômico de Minas Gerais, com foco em desenvolvimento da cadeia mineral. A inclusão é de prioridade setorial e não significa filial, disponibilidade ou contratação da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "sedeValeLitio"
    ]
  ],
  [
    "Capelinha",
    "capelinha",
    "3112307",
    41858,
    [
      "forestry"
    ],
    [
      "florestal"
    ],
    "Vale do Jequitinhonha",
    "A Aperam BioEnergia informa áreas de florestas de eucalipto nos municípios de Capelinha, Itamarandiba, Veredinha, Turmalina e Minas Novas. O plano público de manejo florestal confirma o recorte territorial, sem declarar atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "aperamBioEnergiaForests"
    ]
  ],
  [
    "Itamarandiba",
    "itamarandiba",
    "3132503",
    34210,
    [
      "forestry"
    ],
    [
      "florestal"
    ],
    "Vale do Jequitinhonha",
    "A Aperam BioEnergia identifica florestas de eucalipto e atividades de manejo em Itamarandiba. A fonte empresarial é evidência pública de contexto florestal e não prova cliente, filial ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "aperamBioEnergiaForests"
    ]
  ],
  [
    "Minas Novas",
    "minas-novas",
    "3141804",
    23843,
    [
      "forestry"
    ],
    [
      "florestal"
    ],
    "Vale do Jequitinhonha",
    "A Aperam BioEnergia inclui Minas Novas entre os municípios de suas áreas florestais de eucalipto. O documento de manejo é usado para justificar o setor florestal, sem inferir atendimento ou relação comercial da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "aperamBioEnergiaForests"
    ]
  ],
  [
    "Turmalina",
    "turmalina",
    "3169706",
    20769,
    [
      "forestry"
    ],
    [
      "florestal"
    ],
    "Vale do Jequitinhonha",
    "Aperam BioEnergia registra áreas florestais em Turmalina e ações de manejo de eucalipto na região. A seleção é uma sinalização setorial baseada em fonte empresarial pública, não uma promessa de atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "aperamBioEnergiaForests"
    ]
  ],
  [
    "Veredinha",
    "veredinha",
    "3171030",
    5240,
    [
      "forestry"
    ],
    [
      "florestal"
    ],
    "Vale do Jequitinhonha",
    "Aperam BioEnergia lista Veredinha entre os municípios abrangidos por suas florestas renováveis de eucalipto. O registro sustenta o contexto florestal territorial, sem afirmar disponibilidade, filial ou contrato da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "aperamBioEnergiaForests"
    ]
  ],
  [
    "Jaíba",
    "jaiba",
    "3135050",
    39639,
    [
      "agro"
    ],
    [
      "agro"
    ],
    "Norte de Minas",
    "A Prefeitura de Jaíba descreve o Projeto Jaíba como um grande perímetro de agricultura irrigada, associado à fruticultura e à produção agrícola no Norte do estado. A referência justifica o polo agropecuário, sem afirmar atendimento, prazo ou estrutura da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "projetoJaiba"
    ]
  ],
  [
    "São Gotardo",
    "sao-gotardo",
    "3162104",
    43851,
    [
      "agro"
    ],
    [
      "agro"
    ],
    "Alto Paranaíba",
    "A Prefeitura de São Gotardo reconhece a centralidade econômica do setor agropecuário e cita soja, milho, feijão, trigo, sorgo, alho, cebola, batata, cenoura e outras hortaliças. A fonte municipal comprova contexto produtivo, sem prometer atendimento ou disponibilidade da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "saogotardoAgro"
    ]
  ],
  [
    "João Monlevade",
    "joao-monlevade",
    "3136207",
    83791,
    [
      "industry"
    ],
    [
      "industrial"
    ],
    "Vale do Aço / Rio Piracicaba",
    "A ArcelorMittal lista a Unidade Monlevade entre suas unidades e documentos operacionais no Brasil. A evidência justifica o polo industrial e siderúrgico, sem declarar relação comercial ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "arcelorMonlevade"
    ]
  ],
  [
    "Ouro Branco",
    "ouro-branco",
    "3145901",
    40638,
    [
      "industry"
    ],
    [
      "industrial"
    ],
    "Alto Paraopeba",
    "A Gerdau identifica a usina Açominas, atual unidade de Ouro Branco, em seu histórico corporativo. A fonte sustenta o contexto siderúrgico-industrial local, sem inferir cliente, filial ou disponibilidade da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "gerdauOuroBranco"
    ]
  ],
  [
    "Curvelo",
    "curvelo",
    "3120904",
    84297,
    [
      "forestry"
    ],
    [
      "florestal"
    ],
    "Centro-Norte",
    "A AMIF lista Curvelo entre as microrregiões mineiras com maiores plantios, e a Suzano publicou em 2024 formação de operadores de máquinas florestais para moradores de Curvelo e entorno. As fontes justificam o filtro florestal territorial, mas não comprovam compra, cliente, filial ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "amifPlantios",
      "suzanoCurveloOperators"
    ]
  ],
  [
    "João Pinheiro",
    "joao-pinheiro",
    "3136306",
    48725,
    [
      "forestry"
    ],
    [
      "florestal"
    ],
    "Noroeste de Minas",
    "A Bracell publicou em 2023 cinquenta vagas para operadores de máquinas florestais em João Pinheiro, incluindo Harvester e Forwarder e formação específica. É evidência histórica de atividade florestal divulgada pela empresa, não confirmação de operação atual, contratação ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "amifPlantios",
      "bracellJoaoPinheiro"
    ]
  ],
  [
    "Paracatu",
    "paracatu",
    "3147006",
    99005,
    [
      "mining"
    ],
    [
      "mineracao"
    ],
    "Noroeste de Minas",
    "A Kinross descreve a Mina Morro do Ouro em Paracatu como operação de mineração e beneficiamento de ouro, com mina a céu aberto, usina e infraestrutura superficial. A referência sustenta o polo mineral, sem afirmar cliente, contratação, filial ou cobertura da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "kinrossParacatu"
    ]
  ],
  [
    "Patrocínio",
    "patrocinio",
    "3148103",
    94357,
    [
      "agro"
    ],
    [
      "agro"
    ],
    "Alto Paranaíba",
    "A Prefeitura de Patrocínio informa políticas de apoio à agricultura e identifica café, grãos, hortaliças, leite e frutas como atividades do município em publicação de 2026. Esse registro municipal justifica o recorte agro, sem afirmar demanda, cliente ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "patrocinioAgro"
    ]
  ],
  [
    "Três Marias",
    "tres-marias",
    "3169356",
    29985,
    [
      "industry"
    ],
    [
      "industrial"
    ],
    "Centro-Norte",
    "A Nexa identifica em Três Marias uma unidade metalúrgica de zinco em operação desde 1969 e informa produção de 2025. O dado comprova contexto industrial-metalúrgico, não uma demanda, cliente ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "nexaTresMarias"
    ]
  ],
  [
    "Unaí",
    "unai",
    "3170404",
    91320,
    [
      "agro"
    ],
    [
      "agro"
    ],
    "Noroeste de Minas",
    "A Prefeitura de Unaí atribui à Secretaria de Agricultura e Serviços Rurais ações de incentivo à produção agrícola e pecuária e manutenção de infraestrutura rural. O portal municipal sustenta o recorte agropecuário, sem afirmar frota, contratação ou atendimento da New Tractor.",
    [
      "ibgePop2025",
      "ibgeMunicipiosMG",
      "prefeituraUnaiAgro"
    ]
  ]
].map(([name, slug, ibge, population, inclusion, sectors, region, context, sourceKeys]) => ({
  name,
  slug,
  ibge,
  population,
  populationYear: 2025,
  inclusion,
  sectors,
  region,
  context,
  procurementNote: sectors.length === 1 ? ({"mineracao":"Para demandas minerárias, orientar a cotação por equipamento, componente, aplicação e requisitos de acesso e segurança; confirmar escopo e logística sob consulta.","florestal":"Para operações florestais, orientar a cotação por máquina, implemento, terreno e ciclo operacional; confirmar escopo e logística sob consulta.","agro":"Para operações agro, orientar a cotação por cultura, implemento, solo e janela operacional; confirmar escopo e logística sob consulta.","industrial":"Para operações industriais, orientar a cotação por processo, componente, ambiente e requisitos de manutenção; confirmar escopo e logística sob consulta."}[sectors[0]]) : 'Orientar a cotação por equipamento, componente, aplicação e requisitos logísticos; confirmar escopo sob consulta.',
  sourceKeys,
}));

export const minasCities = Object.freeze([...populationCities, ...sectorPoles]);
