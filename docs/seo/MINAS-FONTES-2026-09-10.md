# Fontes de cidades e polos de Minas Gerais — 2026-09-10

## Escopo

Este inventário serve somente à priorização editorial do site New Tractor. Ele não declara filial, cliente, contrato, estoque, disponibilidade, prazo ou atendimento realizado em qualquer município.

A seleção populacional usa a última planilha municipal completa verificável na data desta revisão: [IBGE POP2025_20260828.xls](https://ftp.ibge.gov.br/Estimativas_de_Populacao/Estimativas_2025/POP2025_20260828.xls), com data de referência em 1º de julho de 2025 e revisão publicada no diretório em 28/08/2026. Não havia uma base municipal POP2026 disponível no diretório oficial consultado em 10/09/2026.

## Validação populacional

Foi filtrada a aba “Municípios” por `UF = MG` e `POPULAÇÃO ESTIMADA > 100000`. O resultado é completo: **36 municípios**, sem faltantes dentro do corte. Os códigos abaixo são os códigos IBGE de sete dígitos; `populationYear` é 2025.

| Município | Código IBGE | População estimada |
|---|---:|---:|
| Araguari | 3103504 | 123.432 |
| Araxá | 3104007 | 118.786 |
| Barbacena | 3105608 | 129.695 |
| Belo Horizonte | 3106200 | 2.415.872 |
| Betim | 3106705 | 431.433 |
| Conselheiro Lafaiete | 3118304 | 138.946 |
| Contagem | 3118601 | 651.718 |
| Coronel Fabriciano | 3119401 | 108.708 |
| Divinópolis | 3122306 | 243.583 |
| Governador Valadares | 3127701 | 266.561 |
| Ibirité | 3129806 | 179.582 |
| Ipatinga | 3131307 | 235.311 |
| Itabira | 3131703 | 118.053 |
| Itaúna | 3133808 | 103.272 |
| Ituiutaba | 3134202 | 106.775 |
| Juiz de Fora | 3136702 | 567.730 |
| Lavras | 3138203 | 110.682 |
| Montes Claros | 3143302 | 437.601 |
| Muriaé | 3143906 | 108.447 |
| Nova Lima | 3144805 | 120.959 |
| Nova Serrana | 3145208 | 114.791 |
| Pará de Minas | 3147105 | 102.844 |
| Passos | 3147907 | 116.951 |
| Patos de Minas | 3148004 | 169.173 |
| Poços de Caldas | 3151800 | 172.339 |
| Pouso Alegre | 3152501 | 162.133 |
| Ribeirão das Neves | 3154606 | 346.971 |
| Sabará | 3156700 | 134.576 |
| Santa Luzia | 3157807 | 230.382 |
| Sete Lagoas | 3167202 | 238.909 |
| Teófilo Otoni | 3168606 | 142.851 |
| Ubá | 3169901 | 107.423 |
| Uberaba | 3170107 | 356.781 |
| Uberlândia | 3170206 | 761.835 |
| Varginha | 3170701 | 143.676 |
| Vespasiano | 3171204 | 138.583 |

O campo `region` em [`src/minas-cities.mjs`](../../src/minas-cities.mjs) é uma macroregião operacional para navegação e priorização; não substitui uma divisão administrativa oficial.

## Contextos próprios dos municípios populacionais

Além da planilha demográfica, estes municípios têm uma fonte local ou operacional específica no dataset. Setor vazio significa que a fonte é útil para contextualizar a cidade, mas não comprova uma das quatro vocações editoriais (`mineracao`, `florestal`, `agro`, `industrial`).

| Município | Setor no dataset | Fato local e fonte primária |
|---|---|---|
| Belo Horizonte | — | Programa municipal de apoio ao empreendedorismo e desenvolvimento econômico — [PBH](https://prefeitura.pbh.gov.br/empreendedor/empreender-em-bh). |
| Contagem | industrial | Distritos e polos industriais sob a Sedecon — [Prefeitura de Contagem](https://portal.contagem.mg.gov.br/superintendencia-de-gestao-de-distritos-e-polos-sedecon/). |
| Governador Valadares | — | Feira empresarial regional que aproxima indústria, comércio e consumidores — [Agência Minas](https://agenciaminas.mg.gov.br/noticia/governador-participa-da-abertura-da-22-edicao-da-expoleste-em-governador-valadares). |
| Ibirité | — | Campus local de instituto federal com formação técnica — [IFMG Ibirité](https://www.ifmg.edu.br/ibirite/institucional/sobre-o-ifmg). |
| Ipatinga | industrial | Perfil econômico e referências à siderurgia e metalurgia no PPA municipal — [Câmara de Ipatinga](https://camaraipatinga.mg.gov.br/normas-juridicas/20101?slug=aprova-o-plano-plurianual-do-municipio-de-ipatinga-para-o-periodo-de-2026-a-2029). |
| Itabira | mineração | Usina Modelo e produção de minério de ferro — [Vale](https://www.vale.com/pt/w/vale-inaugura-usina-modelo-em-itabira-com-ia-aplicada-a-operacao). |
| Juiz de Fora | — | Competências municipais de desenvolvimento econômico e inovação — [Prefeitura/Câmara de Juiz de Fora](https://www.camarajf.mg.gov.br/sal/textop.php?idt=272187). |
| Montes Claros | industrial | Investimentos farmacêuticos e corredor industrial — [Prefeitura de Montes Claros](https://portal.montesclaros.mg.gov.br/noticia/aceleracao-economica/polo-industrial-incentivos-transporte-e-localizacao-estrategica-fortalecem-industrializacao-em-montes-claros). |
| Muriaé | industrial | Moda e confecção como atividades industriais destacadas — [Prefeitura de Muriaé](https://muriae.mg.gov.br/nossa-historia/). |
| Nova Lima | mineração | Complexos Vargem Grande/Paraopeba e usina de pelotização — [Vale](https://www.vale.com/pt/novalima). |
| Patos de Minas | agro | Secretaria municipal de Agricultura, Pecuária e Desenvolvimento Sustentável — [Prefeitura de Patos de Minas](https://www.patosdeminas.mg.gov.br/portal/secretarias/26/secretaria-municipal-de-agricultura-pecuaria-e-desenvolvimento-sustentavel). |
| Poços de Caldas | industrial | Investimentos industriais anunciados em 2025 — [Prefeitura de Poços de Caldas](https://pocosdecaldas.mg.gov.br/noticias/balanco-de-2025-destaca-avancos-no-desenvolvimento-economico-de-pocos-de-caldas/). |
| Pouso Alegre | industrial | Estudo de acesso ao Distrito Industrial e atração de indústrias — [Prefeitura de Pouso Alegre](https://pousoalegre.mg.gov.br/licitacoes/11%20-%20ESTUDO%20AMBIENTAL%20-%20ACESSO%20AO%20DISTRITO%20INDUSTRIAL.pdf). |
| Ribeirão das Neves | — | PPA 2026–2029 com objetivos de fomento e atração de empresas — [portal de transparência municipal](https://ribeiraodasneves.mg.gov.br/src/pages/transparencia.html). É planejamento, não prova de polo operacional. |
| Sabará | — | Plano Diretor com diretrizes para exploração mineral — [Prefeitura de Sabará](https://site.sabara.mg.gov.br/wp-content/uploads/2024/11/plano-diretor.pdf). |
| Santa Luzia | — | Secretaria municipal com objetivo de modernização industrial — [Prefeitura de Santa Luzia](https://www.santaluzia.mg.gov.br/secretaria-de-desenvolvimento-economico/). Planejamento não comprova polo em operação. |
| Sete Lagoas | industrial | Unidade de Sete Lagoas listada no perfil corporativo — [Gerdau RI](https://ri.gerdau.com/a-gerdau/historico-e-perfil-corporativo/). |
| Ubá | industrial | Polo moveleiro e atividades industriais descritos no plano municipal — [Prefeitura de Ubá](https://www.uba.mg.gov.br/abrir_arquivo.aspx/Plano_de_Contingencia_2021_2022?arquivo=%7B5E1ACD7C-A7D8-BC18-8BDB-7AB611683B7B%7D.pdf&cdLocal=2). |
| Uberaba | agro | Agronegócio, produção agrícola e agroindústria — [Prefeitura de Uberaba](https://portal.uberaba.mg.gov.br/res/doc/desenvolvimento/index.html). |
| Uberlândia | — | Investimento municipal em galpão e infraestrutura logística — [Prefeitura de Uberlândia](https://www.uberlandia.mg.gov.br/2025/04/28/uberlandia-recebe-r-150-milhoes-em-investimentos-no-setor-de-logistica/). |
| Varginha | — | Secretaria municipal voltada à atração de empresas e infraestrutura econômica — [Prefeitura de Varginha](https://www.varginha.mg.gov.br/portal/secretarias/1/secretaria-municipal-de-desenvolvimento-economico--sedec). |
| Vespasiano | — | Secretaria municipal declara fomento à atividade industrial — [Prefeitura de Vespasiano](https://vespasiano.mg.gov.br/prefeitura/secretarias/industria-desenvolvimento-economico/). Política de fomento não é prova de operação. |

Os outros 14 municípios do corte foram integrados na revisão final. As chaves
abaixo resolvem para título, URL primária e ano em `minasSources`; as fontes
foram consultadas em 10/09/2026. Não há município com somente a fonte demográfica.

| Município | Fato contextual | Chave da fonte primária |
|---|---|---|
| Araguari | Agronegócio, café e logística no PPA 2026–2029 | `araguariAgro` |
| Araxá | Cadeias mineral e agrícola nas exportações de 2025 | `araxaEconomia` |
| Barbacena | Exposição Agropecuária de 2026 e produtores locais | `barbacenaAgro` |
| Betim | Indústria automotiva, petroquímica e metalurgia | `betimIndustria` |
| Conselheiro Lafaiete | Diagnóstico de indústria e extração, publicado em 2022 com dados históricos | `lafaieteIndustria` |
| Coronel Fabriciano | Distrito industrial e localização próxima à BR-381 | `fabricianoIndustria` |
| Divinópolis | Cadeia da confecção e moda descrita em 2025 | `divinopolisConfeccao` |
| Itaúna | Metalurgia, siderurgia e metalomecânica | `itaunaIndustria` |
| Ituiutaba | Zoneamento industrial/agropecuário de 2025; sem classificação setorial por falta de evidência operacional nesta fonte | `ituiutabaZoneamento` |
| Lavras | Agroindústria-piloto de óleo de café da EPAMIG em 2026 | `lavrasCafe` |
| Nova Serrana | Polo calçadista descrito em 2024 | `novaSerranaCalcados` |
| Pará de Minas | APL de frango e suíno reconhecido em 2023 | `paraMinasAgro` |
| Passos | Cana, café, pecuária e agroindústria | `passosEconomia` |
| Teófilo Otoni | Tradição mineral e de gemas no evento de 2026 | `teofiloGemas` |

## Polos adicionais curados

São **29 municípios adicionais**, selecionados por evidência setorial específica, não por ranking exaustivo. Eles cobrem mineração/minerais estratégicos, florestal, agro e indústria.

| Município | Código IBGE | Setor | Justificativa e fonte |
|---|---:|---|---|
| Conceição do Mato Dentro | 3117504 | mineração | Complexo Minas-Rio licenciado no município — [SEMAD/MG](https://meioambiente.mg.gov.br/w/28/06/2017-anglo-american-minerio-de-ferro-brasil-s.a.-complexo-minas-rio). |
| Congonhas | 3118007 | mineração | Mina Casa de Pedra — [CSN](https://www.csn.com.br/mineracao/). |
| Itabirito | 3131901 | mineração | Atuação territorial, mineração e monitoramento publicados pela própria operação — [Vale](https://vale.com/pt/itabirito). |
| Mariana | 3140001 | mineração | Complexo de Germano — [Samarco](https://www.samarco.com/processo-produtivo/). |
| Ouro Preto | 3146107 | mineração | Complexo de Germano — [Samarco](https://www.samarco.com/processo-produtivo/). |
| São Gonçalo do Rio Abaixo | 3161908 | mineração | Mina de Brucutu e recursos minerais — [SGB](https://rigeo.sgb.gov.br/items/e7c0e548-4bf0-45f2-9181-6b079f8d8272). |
| Barão de Cocais | 3105400 | mineração | Mina Brucutu e operação territorial divulgadas pela própria Vale — [Vale](https://vale.com/pt/baraodecocais). |
| Tapira | 3168101 | mineração | Complexo de mineração e concentrado fosfático — [Mosaic](https://mosaicco.com.br/ckfinder/userfiles/files/RIMA%20CMT%20PDM-2%20-%20Rev%282%29.pdf). |
| Vazante | 3171006 | mineração | Mina polimetálica de zinco, chumbo e prata — [Nexa](https://ri.nexaresources.com/operations/vazante/). |
| Araçuaí | 3103405 | mineração | Município incluído no Vale do Lítio — [SEDE/MG](https://desenvolvimento.mg.gov.br/index.php/inicio/projetos/projeto/1170). |
| Coronel Murta | 3119500 | mineração | Município incluído no Vale do Lítio — [SEDE/MG](https://desenvolvimento.mg.gov.br/index.php/inicio/projetos/projeto/1170). |
| Itinga | 3134004 | mineração | Município incluído no Vale do Lítio — [SEDE/MG](https://desenvolvimento.mg.gov.br/index.php/inicio/projetos/projeto/1170). |
| Salinas | 3157005 | mineração | Município incluído no Vale do Lítio — [SEDE/MG](https://desenvolvimento.mg.gov.br/index.php/inicio/projetos/projeto/1170). |
| Capelinha | 3112307 | florestal | Áreas de eucalipto da Aperam BioEnergia — [histórico da empresa](https://aperambioenergia.com.br/institucional/empresa/historia/). |
| Itamarandiba | 3132503 | florestal | Áreas de eucalipto da Aperam BioEnergia — [histórico da empresa](https://aperambioenergia.com.br/institucional/empresa/historia/). |
| Minas Novas | 3141804 | florestal | Áreas de eucalipto da Aperam BioEnergia — [histórico da empresa](https://aperambioenergia.com.br/institucional/empresa/historia/). |
| Turmalina | 3169706 | florestal | Áreas de eucalipto da Aperam BioEnergia — [histórico da empresa](https://aperambioenergia.com.br/institucional/empresa/historia/). |
| Veredinha | 3171030 | florestal | Áreas de eucalipto da Aperam BioEnergia — [histórico da empresa](https://aperambioenergia.com.br/institucional/empresa/historia/). |
| Jaíba | 3135050 | agro | Projeto Jaíba e agricultura irrigada — [Prefeitura de Jaíba](https://www.jaiba.mg.gov.br/cidade/historia). |
| São Gotardo | 3162104 | agro | Atividades agropecuárias e hortícolas reconhecidas em decreto municipal — [Prefeitura de São Gotardo](https://www.saogotardo.mg.gov.br/midia_publicacao.php?codmidia=397). |
| João Monlevade | 3136207 | industrial | Unidade de João Monlevade e produção siderúrgica descritas no relatório 2025 — [ArcelorMittal Brasil](https://brasil.arcelormittal.com/sala-imprensa/noticias/brasil/arcelormittal-brasil-divulga-relatorio-de-sustentabilidade-2025-com-destaque-para-transicao-energetica-e-inovacao). |
| Ouro Branco | 3145901 | industrial | Usina Açominas em Ouro Branco — [Gerdau RI](https://ri.gerdau.com/a-gerdau/historico-e-perfil-corporativo/). |
| Curvelo | 3120904 | florestal | Microrregião entre as maiores áreas de plantios e formação de operadores em Curvelo e entorno — [AMIF](https://amif.org.br/pt/levantamento-completo/) e [Suzano](https://www.suzano.com.br/noticia/suzano-forma-novos-operadores-de-maquinas-florestais-em-minas-gerais). |
| João Pinheiro | 3136306 | florestal | Vagas de operadores de Harvester e Forwarder publicadas pela Bracell em 2023 — [Bracell](https://www.bracell.com/noticias/bracell-abre-vagas-em-joao-pinheiro-mg/). O registro é histórico e não prova operação atual. |
| Paracatu | 3147006 | mineração | Mina Morro do Ouro, beneficiamento e infraestrutura superficial — [Kinross](https://kinross.com.br/a-kinross/conheca/). |
| Patrocínio | 3148103 | agro | Políticas municipais de apoio à agricultura e atividades de café, grãos, hortaliças, leite e frutas — [Prefeitura de Patrocínio](https://pmp.patrocinio.mg.gov.br/portal/governo-municipal-fortalece-a-agricultura-e-amplia-acoes-de-apoio-ao-produtor-rural-em-patrocinio/). |
| Três Marias | 3169356 | industrial | Unidade metalúrgica de zinco e produção de 2025 — [Nexa Resources](https://ri.nexaresources.com/operations_smelting/tres-marias/). |
| Unaí | 3170404 | agro | Secretaria municipal com competência sobre incentivo à produção agrícola e pecuária e infraestrutura rural — [Prefeitura de Unaí](https://prefeituraunai.mg.gov.br/pmu2/index.php/secretarias/agricultura/a-secretaria-agricultura.html). |
| Timóteo | 3168705 | industrial | Usina integrada de aços inoxidáveis, elétricos e carbono — [Aperam](https://www.aperam.com/pt-br/quem-somos/usinas/). População 84.172 em 2025 confirmada no [IBGE](https://www.ibge.gov.br/cidades-e-estados/mg/timoteo.html). |

O conjunto final tem **65 municípios: 36 pelo corte populacional e 29 polos**.
Muriaé tem contexto de confecção; Governador Valadares, Ibirité e Ribeirão das
Neves permanecem sem classificação nos quatro setores. Um instituto de ensino,
uma feira ou um plano de atração de empresas não demonstram operação industrial
ativa. A mesma cautela é aplicada às demais fontes de planejamento.

## Uso editorial e limites

- `inclusion: ['population']` significa corte demográfico; as tags de `sectors` são filtros editoriais de prospecção e não afirmações de que a New Tractor já atende o município.
- Polos adicionais possuem contexto e fonte próprios. Ainda assim, uma futura página pública precisa acrescentar serviço, logística, perguntas, evidência ou orientação específica; não basta substituir o nome da cidade.
- `procurementNote` é orientação para formular uma demanda técnica/comercial. Não promete prazo, disponibilidade, filial, estoque, preço ou execução local.
- A cobertura deve ser apresentada como avaliação técnica, comercial e logística sob consulta. A base não cria clientes, unidades, contratos ou casos.
- Revalidar a planilha populacional e as páginas setoriais antes de uma publicação futura, pois população, projetos e fontes podem ser atualizados.
