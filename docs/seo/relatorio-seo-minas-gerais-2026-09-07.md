# Do Google ao pátio do cliente

> Atualização de 08/09/2026: veja o [relatório de entrega para a main](entrega-main-seo-grupo-2026-09-08.html), com evidência e aplicação nas sete especialidades. Este documento preserva o plano e as observações originais.

**Plano de SEO e aquisição B2B para o Grupo New Tractor em Minas Gerais**
Pesquisa e verificação: **07 de setembro de 2026** · Horizonte de execução proposto: **90 dias**

## 01. Recomendação executiva

**Concentrar o investimento em `newtractor.com.br`, com uma estratégia própria para cada uma das sete frentes e caminhos específicos para mineração, operações florestais e locadoras.** O site institucional com layout aprovado é a base de marca; o corte do domínio ainda está pendente. A próxima camada deve responder às necessidades concretas de quem compra, planeja a manutenção ou encontra um problema na máquina.

A proposta comercial que orienta o plano é **“Conhecimento técnico perto da operação, para apoiar a disponibilidade da máquina.”** A expressão do proprietário — “colocar a New Tractor no pátio do cliente para que a máquina não fique parada” — traduz a ambição. Sua aplicação pública deve descrever o atendimento efetivamente disponível: medição em campo, avaliação e encaminhamento de componentes, conforme o escopo confirmado. Não transforma o site em promessa de atendimento imediato, reparo de qualquer componente no local ou ausência de paradas.

O objetivo de SEO é aumentar a presença nas buscas relevantes e os contatos tecnicamente compatíveis. **Não há mecanismo para garantir que todas as mineradoras, todos os compradores ou qualquer busca encontrem uma única empresa. “Cilindros” também pode indicar produtos fora da hidráulica de linha amarela; a qualificação do termo é necessária.** A elegibilidade e a classificação dependem de conteúdo, contexto da consulta, localização e outros sinais. [Como o Google funciona](https://developers.google.com/search/docs/fundamentals/how-search-works).

**Ordem de investimento recomendada:** domínio definitivo e medição → páginas técnicas das frentes → três páginas de setores → prova de trabalho em Minas → relacionamento e referências externas → expansão conforme demanda observada. A compra de novos domínios não é necessária para iniciar.

## 02. O que existe hoje e o que impede o próximo passo

| Verificação | Evidência em 07/09/2026 | Consequência prática |
|---|---|---|
| Domínio definitivo | `https://newtractor.com.br/` respondeu 200 com o WordPress anterior; título `NewTractor`; nenhum H1 encontrado no HTML inicial consultado | O Google ainda recebe a apresentação anterior no domínio principal |
| Rotas novas no domínio | `/hidrautractor/` e `/parcerias/` responderam 404 | As páginas do novo grupo ainda não estão disponíveis nessas URLs canônicas |
| Descoberta no site anterior | `/robots.txt`, `/sitemap.xml`, `/wp-sitemap.xml` e `/sitemap_index.xml` responderam 404 | Os endereços usuais consultados não oferecem arquivos de descoberta; isso não prova ausência de indexação nem de sitemap em outro endereço |
| Preview aprovado | Home e sitemap responderam 200; sitemap com 20 URLs; header `X-Robots-Tag: noindex, nofollow` | Correto para avaliação. O preview não é o endereço a posicionar nas buscas |
| Código | `main` em `780f5e1`, PR #2 integrado; build e testes do GitHub aprovados | Existe uma base versionada e validada para publicar |
| Publicação automática | Check externo Cloudflare Pages falhou na main anterior e após o merge; causa detalhada ainda não comprovada | Corrigir a integração ou manter um procedimento de publicação direta verificável antes da operação recorrente |
| `llms.txt` | Removido na revisão anterior e ausente no preview | Restaurar como índice técnico complementar, conforme o escopo da skill; não tratar como instrumento de ranking no Google |
| Mensuração | O código contém GTM `GTM-T3RNZ98` após consentimento e evento `site_cta_click` com nome de CTA e página | A presença do contêiner não comprova que GA4 esteja recebendo conversões; validar propriedade, tags e coleta |

Fontes de estado: [domínio atual](https://newtractor.com.br/), [preview aprovado](https://951d4336.newtractor-site.pages.dev/), [sitemap do preview](https://951d4336.newtractor-site.pages.dev/sitemap.xml), [PR #2](https://github.com/williandmx/new_tractor_website/pull/2), [validação da main](https://github.com/williandmx/new_tractor_website/actions/runs/34158808559). Respostas HTTP refletem esta consulta, não um histórico de disponibilidade.

### Base técnica já construída

HTML editorial completo sem JavaScript, 20 páginas indexáveis planejadas, H1 único, metadados e canonical por rota, imagens responsivas, navegação por teclado e contatos reais. No QA anterior da versão aprovada, 25 testes passaram e o Lighthouse mobile remoto marcou desempenho 99, acessibilidade 100 e boas práticas 100. Essas notas são de laboratório, não dados reais de usuários nem indicadores de posicionamento.

**Primeiro marco:** publicar o build aprovado no domínio definitivo, com HTTPS e redirects corretos, e verificar se as páginas prioritárias podem ser rastreadas. A troca de DNS e a preservação de MX, SPF, DKIM, DMARC e demais registros devem seguir o plano de migração já existente e a decisão do proprietário. Manter o `noindex` em `pages.dev`; conferir que ele não esteja presente no domínio de produção.

## 03. Benchmark aplicado: o que o comprador encontra em outros sites

Foram observados **oito sites próprios** com ligação operacional ou unidade em Minas Gerais. A comparação abaixo trata de estrutura e conteúdo publicado, não de classificação no Google, eficácia comercial ou validação independente de certificações. As referências visuais anteriores — NetZero, Armac, Sotreq, Apple e Klap Tech — continuam úteis ao institucional; este benchmark acrescenta especialistas que disputam intenções técnicas.

### Hidráulica, componentes e manutenção

| Empresa e papel | Evidência publicada observada | Aplicação para a New Tractor |
|---|---|---|
| **Hidraucron · BH · hidráulica** | Blocos explícitos de cilindros e bombas, serviços, endereço e orçamento rápido | Tornar o componente e o serviço compreensíveis logo na entrada da HidrauTractor. Separar o escopo de cilindros dos demais componentes. [Fonte](https://www.hidraucron.com.br/) |
| **Cilíndrica · BH · hidráulica** | Página específica de reparo de cilindro em Belo Horizonte; canais de contato e apresentação de serviços | Criar uma página técnica consistente para cilindros. A grande quantidade de variações de cidades/termos observada não deve ser copiada automaticamente. [Página observada](https://www.cilindrica.com.br/reparo-cilindro-hidraulico-belo-horizonte) |
| **Transtorque · Vespasiano · componentes off-road** | Separa famílias de subconjuntos e descreve teste e logística em sua apresentação | Explicar etapas, entrega e dados necessários para cotação em cada serviço comprovado. As bancadas e processos são declarações do concorrente, não capacidades da New Tractor. [Fonte](https://transtorque.com.br/quem-somos/) |
| **MECATEC · Araguari · manutenção e peças; também locação** | Estrutura por diagnóstico, máquinas, manutenção, peças e serviços em campo | Organizar o caminho do gestor de frota. Sua oferta de locação não significa que a New Tractor deva anunciar aluguel de máquinas. [Fonte](https://mecatecservicos.com.br/) |
| **ITR South America · presença em Contagem · fabricante/distribuidor** | Material rodante organizado por componentes; catálogos e conteúdos sobre avaliação/troca | Adotar taxonomia clara de componentes e conectar perguntas técnicas a avaliação. É referência técnica e comercial de componentes, não equivalente a todas as frentes do grupo. [Fonte](https://www.itrsa.com.br/site/material-rodante/) |

### Processo industrial e tecnologia

| Empresa e papel | Evidência publicada observada | Aplicação para a New Tractor |
|---|---|---|
| **União Equipamentos Mecânicos · Betim · usinagem e caldeiraria** | Páginas por processo, recuperação, apresentação de capacidades e documentação comercial | Criar prova de processo para suprimentos: peça/desenho, escopo, conferência e documentação. Não transferir números ou certificações do concorrente. [Fonte](https://uniaoeqm.com.br/) |
| **Garra · Igarapé · usinagem e caldeiraria** | Famílias de processos e peças, informações de inspeção e aplicações industriais | Facilitar a leitura técnica do comprador com exemplos próprios, processo e canal. A implementação visual do concorrente não é um padrão de QA a copiar. [Fonte](https://garrausinagem.com.br/) |
| **Komatsu · OEM · referência de suporte técnico** | Explica medição de material rodante, acompanhamento e ferramentas próprias de manutenção | Estruturar o raciocínio campo → registro → histórico → decisão. Nomes e recursos Komatsu não são ofertas TechTractor. [Suporte de mineração](https://www.komatsu.com.br/source/mineracao.php), [unidades e segmentos](https://www.komatsu.com.br/source/institucional.php) |

**Leitura estratégica:** especialistas tornam fácil reconhecer o serviço; fornecedores industriais apresentam elementos para homologação; OEMs explicam métodos e informação de manutenção. O Grupo pode combinar essas qualidades com suas sete especialidades, sua base real e seus registros próprios. Não há evidência suficiente para afirmar superioridade de preço, prazo, qualidade ou capacidade sobre essas empresas.

A HidrauTractor é a lacuna editorial mais evidente para a intenção de cilindros: concorrentes já nomeiam componente e serviço, enquanto a página atual é genérica por falta de escopo confirmado. Rodantes tem base factual mais forte e páginas existentes; deve receber refinamento e prova, não uma duplicação do catálogo. TechTractor precisa explicar o problema que pretende resolver e seu estágio, evitando a aparência de software contratado antes da hora.


## 04. Um domínio, sete estratégias de aquisição

### Arquitetura recomendada

Cada frente terá uma URL principal, conjunto de consultas, responsável técnico, provas, CTA e indicadores próprios. Isso permite avaliar Rodantes e HidrauTractor separadamente, mesmo quando o comprador entra diretamente em uma página interna e não passa pela home.

- **Grupo:** reputação, estrutura, equipe, visão industrial e conexão entre especialidades.
- **Frentes:** escopo da especialidade e encaminhamento para serviços comprovados.
- **Serviços/componentes:** resposta específica ao problema e à necessidade de cotação.
- **Setores:** contexto de mineração, operações florestais ou locação; não duplicar o catálogo.
- **Território:** base real, logística, critérios de mobilização e registros locais autorizados.
- **Conteúdo técnico:** dúvidas de decisão e documentos úteis, revisados por quem executa.

As sete frentes são uma arquitetura de marca. SEO não exige inventar sete CNPJs, endereços ou estabelecimentos. Usar `Organization`, `LocalBusiness` e `Service` de acordo com entidades e ofertas verificadas. Identidade societária e contatos de cada empresa devem ser confirmados antes de marcar organizações independentes.

### Domínios adicionais: decisão recomendada

| Alternativa | Quando faz sentido | Decisão para esta fase |
|---|---|---|
| `newtractor.com.br` com páginas por frente | Grupo compartilha marca, estrutura, equipe comercial e esforço editorial | **Recomendado agora**. Manter as rotas já construídas |
| Domínios das marcas com redirecionamento | Proteção da marca ou endereço curto em material impresso, após conferir titularidade e disponibilidade | Opcional. Redirecionar para a página correspondente, sem criar cópias |
| Site independente por empresa | Oferta, público, operação, provas, responsáveis e orçamento editorial realmente independentes | Avaliar quando essa separação for um requisito de negócio; prever manutenção e migração |
| Subdomínio de produto | TechTractor evoluir para produto próprio, com documentação e acesso distintos | Avaliação futura; separar aplicação privada e conteúdo público |
| Vários domínios de palavras-chave/cidades | Tentativa de ampliar alcance repetindo páginas semelhantes | Não incluir na estratégia |

Minha recomendação de domínio único é uma decisão de foco operacional e editorial, não uma alegação de que subpastas sempre ranqueiam melhor. O Google informa que palavras-chave no domínio têm pouco efeito isolado e cita múltiplos domínios ou páginas regionais que apenas encaminham ao mesmo destino como exemplo de abuso de páginas de entrada. [Guia de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [políticas contra spam](https://developers.google.com/search/docs/essentials/spam-policies).

Há uma distinção de apresentação: o Google suporta nome de site por domínio ou subdomínio, não por subdiretório. As páginas das empresas podem ter títulos, conteúdo e posições próprios, enquanto o nome do site permanece o do grupo. Se um nome de site separado para cada marca se tornar indispensável, essa será uma razão de marca para reavaliar a arquitetura. [Nomes de sites](https://developers.google.com/search/docs/appearance/site-names).

Não foi feita consulta de disponibilidade, aquisição ou reserva de novos domínios. O ponto de consulta é o [Registro.br](https://registro.br/dominio/); não há necessidade de compra para executar a primeira fase deste plano.

### Plano por frente: consultas, páginas e conversão

**Todos os exemplos abaixo são propostas editoriais, não alterações já publicadas.** As consultas representam hipóteses de intenção. Incluir Belo Horizonte e Minas Gerais de forma natural na apresentação da base e da logística; não repetir uma lista de cidades em todas as páginas.

#### Rodantes — categoria e recuperação

- **Página principal existente:** `/rodantes/`.
- **Consultas:** material rodante Minas Gerais; material rodante para escavadeira; avaliação de rodantes; recuperação de sapatas e roletes; manutenção de material rodante MG.
- **Title proposto:** “Material rodante em Minas Gerais | New Tractor Rodantes”. **H1:** “Material rodante para máquinas pesadas”.
- **Página que deve disputar manutenção:** preservar `/servicos/manutencao-material-rodante/`. Medição/monitoramento específico permanece em `/servicos/monitoramento-material-rodante/`.
- **Conteúdo/prova:** famílias de componentes, aplicações, condição observada, avaliação e registros próprios. Acrescentar páginas de roletes ou sapatas apenas com escopo, exemplos e procura próprios.
- **CTA:** “Solicitar avaliação do material rodante”. Encaminhar para componentes, monitoramento, Services e contato.

#### HidrauTractor — hidráulica e prioridade de cilindros

- **Página principal existente:** `/hidrautractor/`; **nova página proposta:** `/hidrautractor/cilindros-hidraulicos/`, após confirmação do escopo.
- **Consultas:** cilindro hidráulico máquina pesada; recuperação de cilindro hidráulico BH; reparo de cilindro de escavadeira; manutenção hidráulica linha amarela; cilindros hidráulicos Minas Gerais.
- **Title do serviço, condicionado:** “Recuperação de cilindros hidráulicos em MG | HidrauTractor”. **H1 condicionado:** “Recuperação de cilindros hidráulicos para máquinas pesadas”. Se recuperação não fizer parte da oferta confirmada, mudar assunto, título e consultas antes de publicar.
- **Conteúdo/prova:** tipos e aplicações atendidos; identificação, avaliação e procedimentos executados; transporte e condições de atendimento. Fabricação, vedações, testes e intervenção em campo entram somente se confirmados.
- **CTA:** “Enviar dados do cilindro para avaliação”. Informar máquina, componente, código/placa, fotos, condição e cidade. Não abrir também uma URL quase idêntica em `/servicos/`.

#### Usinagem — recuperação dimensional

- **Página existente:** `/usinagem/`.
- **Consultas:** recuperação dimensional de componentes; usinagem de máquinas pesadas MG; recuperação de peças em mandrilhadora; torno para recuperação de componentes; usinagem pesada Belo Horizonte.
- **Title proposto:** “Recuperação dimensional em MG | New Tractor Usinagem”. **H1:** “Recuperação dimensional de componentes pesados”.
- **Conteúdo/prova:** condição da peça, referência dimensional, processos divulgados, conferência e critérios de escopo. Publicar limites e tolerâncias apenas documentados.
- **CTA:** “Enviar peça, desenho ou medições”. Peça existente a recuperar fica aqui; fabricação de peça nova é encaminhada para Parts. Não criar outra página genérica de recuperação dimensional que repita este conteúdo.

#### Calderaria — recuperação estrutural

- **Página existente:** `/calderaria/`; serviço detalhado em `/servicos/reforma-cacambas-conchas/`.
- **Consultas:** caldeiraria para máquinas pesadas MG; recuperação estrutural de componentes; reforma de caçambas e conchas; solda em componentes pesados; recuperação de caçamba de escavadeira.
- **Title proposto:** “Caldeiraria para máquinas pesadas em MG | New Tractor”. **H1:** “Recuperação de estruturas e componentes pesados”. Preservar a grafia oficial **Calderaria** na marca.
- **Conteúdo/prova:** componentes, condição, preparação, recuperação e critérios de inspeção efetivos. Materiais, procedimentos e qualificações não devem ser inferidos da fotografia.
- **CTA:** “Solicitar avaliação da estrutura”. A página específica de caçambas deve receber os links relativos a esse serviço; o hub apresenta a especialidade mais ampla.

#### Parts — peças novas e consulta sob desenho

- **Página existente:** `/parts/`.
- **Consultas:** peças sob desenho para máquinas pesadas; cotação de componente industrial; peça nova para escavadeira; fabricação de peças novas MG; peças para linha amarela sob especificação.
- **Title proposto:** “Peças novas sob desenho em MG | New Tractor Parts”. **H1:** “Peças novas a partir da aplicação e da especificação”.
- **Conteúdo/prova:** código/desenho, material quando conhecido, quantidade, aplicação e documentação para proposta. Confirmar o que é fabricação própria e o que é fornecimento. Catálogo por modelo só após matriz real de compatibilidade e oferta.
- **CTA:** “Consultar peça por código ou desenho”. Conectar compradores a documentação e a Usinagem quando a necessidade for recuperar uma peça existente. Não prometer estoque imediato.

#### Services — presença técnica no campo

- **Página existente e prioritária para a proposta de pátio:** `/services/`.
- **Consultas:** medição de máquinas pesadas em campo; inspeção de material rodante em campo; avaliação de desgaste na operação; medição de frota MG; avaliação no pátio do cliente, quando esse atendimento estiver caracterizado.
- **Title proposto:** “Medição de máquinas pesadas em campo | New Tractor Services”. **H1 proposto:** “Medição em campo para apoiar a manutenção”. Validar os componentes, a equipe e as condições de mobilização antes da revisão pública.
- **Conteúdo/prova:** equipamento, local, preparação, dados coletados, entregável e mobilização. Um exemplo autorizado de registro vale mais do que uma afirmação genérica de rapidez.
- **CTA:** “Consultar avaliação em campo”. Usar esta página antes de criar outra de pátio; uma URL filha só se houver serviço, intenção e conteúdo distintos. Reparos e montagem no local aguardam confirmação.

#### TechTractor — inspeção, dados e histórico

- **Página existente:** `/techtractor/`.
- **Consultas:** tecnologia para inspeção de máquinas pesadas; registro de inspeção de máquinas; histórico de manutenção de componentes; acompanhamento de desgaste; informação para PCM de linha amarela.
- **Title proposto:** “Inspeções e histórico de manutenção | TechTractor”. **H1:** “Tecnologia para organizar inspeções e histórico de manutenção”.
- **Conteúdo/prova:** explicar a direção da iniciativa e como informação de campo pode apoiar decisões; mostrar apenas telas, dados ou processos autorizados e no estágio correto.
- **CTA:** “Conversar sobre a TechTractor”. Não disputar “software pronto”, “app de manutenção” ou “plataforma de telemetria” enquanto não houver oferta comercial confirmada.

### Fronteiras para evitar páginas concorrendo pela mesma intenção

| Intenção principal | URL responsável | Papel das outras páginas |
|---|---|---|
| Material rodante como especialidade | `/rodantes/` | Apresentação do portfólio e encaminhamento |
| Manutenção/recondicionamento | `/servicos/manutencao-material-rodante/` | Rodantes apresenta; a página técnica detalha |
| Medição e monitoramento de rodante | `/servicos/monitoramento-material-rodante/` | Services explica a execução em campo; TechTractor, a informação |
| Medição no campo e mobilização | `/services/` | Atuação explica território/logística |
| Recuperação de peça existente | `/usinagem/` | Parts recebe a demanda de peça nova |
| Peça nova | `/parts/` | Usinagem é processo relacionado, sem repetir a oferta |
| Reforma de caçamba/concha | `/servicos/reforma-cacambas-conchas/` | Calderaria apresenta recuperação estrutural mais ampla |
| Cilindros hidráulicos | `/hidrautractor/cilindros-hidraulicos/`, se confirmada | HidrauTractor organiza a categoria |
| Tecnologia e registros de inspeção | `/techtractor/` | Não substituir a página do serviço executado |

Revisar canibalização por consultas e URLs no Search Console, não apenas por palavras iguais. Duas páginas podem mencionar “material rodante” sem conflito quando resolvem decisões diferentes. Para o conjunto territorial desta fase, fortalecer `/atuacao/` com Minas Gerais; não duplicar imediatamente em outra página estadual. Os três setores usam a família `/setores/` proposta neste relatório para manter sua função distinta da cobertura geográfica.


## 05. Como chegar a compradores, manutenção e mecânicos

| Público | Busca ou necessidade provável — hipótese a validar | Página e evidência que devem encontrar | Próximo passo |
|---|---|---|---|
| Comprador / suprimentos | fornecedor de material rodante MG; recuperação de cilindros; fabricação de peça sob desenho; homologação de fornecedor | Escopo, componente/aplicação, documentação disponível, canais, dados para cotar e condições sujeitas à análise | Solicitar proposta ou documentação por e-mail |
| Gestor de manutenção / PCM | inspeção de rodante; medição de desgaste em campo; planejamento de reforma; histórico de componentes | Método real, exemplo autorizado de relatório, informações coletadas e como apoiam decisões | Consultar avaliação em campo ou reunião técnica |
| Mecânico / encarregado | desgaste de sapata/rolete; identificação de cilindro; folga em pino/bucha; trinca em caçamba | Orientação de identificação e dados para avaliação, fotos didáticas e acesso rápido ao contato | Enviar modelo, componente, fotos e cidade |
| Gestor de locadora | condição da frota; inspeção de entrega/devolução; recuperação de componentes de escavadeiras | Página para manutenção de frotas de locação e serviços efetivamente disponíveis | Apresentar frota e necessidade de manutenção |

Esses termos não possuem volume nem posição medidos nesta análise. **“Locação de escavadeira” é intenção de contratar uma máquina; não deve virar a palavra principal de uma página que vende manutenção para locadoras.** Da mesma forma, “tecnologia” isolada é ampla: a TechTractor deve ser encontrada por problemas específicos de inspeção, desgaste e histórico, respeitando o estágio atual da iniciativa.

### Da busca à visita técnica

1. O visitante encontra uma página correspondente ao componente, serviço ou setor.
2. A página explica o que pode ser avaliado e o que precisa ser informado: máquina/modelo, componente, condição, cidade e prioridade.
3. O canal comercial recebe os dados e identifica a frente responsável.
4. A equipe valida escopo, segurança, logística e possibilidade de mobilização.
5. Quando aplicável, define-se medição no pátio, avaliação do componente ou encaminhamento à estrutura industrial.
6. O registro comercial acompanha proposta, contratação e motivo de perda; a manutenção acompanha o serviço e os resultados realmente medidos.

O site atual já usa canais reais. Manter e-mail e WhatsApp; só adicionar upload, agenda ou formulário quando houver operação real por trás. Clique no WhatsApp é intenção de contato, não comprovação de mensagem enviada, lead qualificado ou visita realizada.

### Página comercial prioritária de campo

**Fortalecer `/services/` como porta de entrada para medição em campo**, com o contexto da máquina no pátio e da logística em Minas Gerais. A página existente de monitoramento de material rodante deve explicar o método específico; a TechTractor explica a organização da informação. Essas três páginas precisam se complementar.

Texto de trabalho: “Leitura da condição da máquina no ambiente de operação. Apresente sua frota, a cidade e os componentes que precisam de avaliação.” CTA: **“Consultar avaliação em campo”**. Ampliação para desmontagem, reparo ou montagem no pátio depende da confirmação do serviço, equipe, equipamentos e condições de mobilização.

## 06. Minas Gerais: onde concentrar conteúdo e esforço comercial

O recorte mineiro é economicamente coerente: o IBRAM atribuiu a MG **39,9% do faturamento mineral brasileiro de 2025**. O levantamento da AMIF evidencia polos de floresta plantada em regiões como Curvelo, Capelinha, Paracatu e Três Marias. São indicadores de contexto, não estimativas de compras, frota ou contratos acessíveis à New Tractor. [IBRAM — resultado de 2025](https://ibram.org.br/noticia/mineracao-faturamento-balanca-comercial-2025/), [AMIF — levantamento territorial](https://amif.org.br/pt/levantamento-completo/).

As áreas abaixo são uma **priorização analítica** a cruzar com logística e capacidade reais. Não representam filiais, equipe residente, cobertura garantida ou rotas de viagem. Separar operações distantes ao calcular mobilização.

| Área de prioridade | Municípios/polos iniciais | Por que investigar | Aplicação ao conteúdo e comercial |
|---|---|---|---|
| **Base metropolitana e Quadrilátero Ferrífero** | BH, Contagem, Vespasiano; Itabira, Mariana, Ouro Preto, Congonhas, Itatiaiuçu e Mateus Leme | Concentração industrial, mineração e fornecedores. [Vale](https://www.vale.com/pt/onde-estamos), [CSN Mineração](https://www.csn.com.br/mineracao/), [Mineração Usiminas](https://www.usiminas.com/pages/mineracao-usiminas/) | Primeira prioridade de investigação: material rodante, cilindros com escopo confirmado, recuperação e suprimentos. Mostrar a base real em BH e avaliar deslocamento por operação |
| **Minas-Rio / Espinhaço** | Conceição do Mato Dentro, Alvorada de Minas e Dom Joaquim | Municípios citados no comunicado oficial de 2026 sobre testes do sistema de sirenes do Minas-Rio. [Anglo American](https://brasil.angloamerican.com/pt-pt/imprensa/noticias/2026/05-03-2026) | Qualificar serviços para ativos móveis e compreender acesso, homologação e logística; não tratar o traçado do mineroduto como área de atendimento automático |
| **Rio Doce / Vale do Aço** | Belo Oriente e eixo industrial/florestal do Vale do Aço | Celulose, manejo florestal e indústria. [Licenciamento da CENIBRA em Belo Oriente](https://sistemas.meioambiente.mg.gov.br/licenciamento/site/view-externo?id=38921), [BioFlorestas — manejo 2024](https://bioflorestas.arcelormittal.com.br/uploads/cartilha_bioflorestas-2024_item_10104.pdf) | Conteúdo para máquinas de apoio, componentes e planejamento; confirmar famílias de equipamentos florestais antes de anunciar atendimento específico |
| **Centro-Norte e Noroeste — subpolos separados** | Curvelo, Três Marias, João Pinheiro, Buritizeiro e Paracatu | Polos florestais da AMIF; mineração em Paracatu. [AMIF](https://amif.org.br/pt/levantamento-completo/), [Kinross Brasil](https://kinross.com.br/) | Prospecção por operação, com custos e viabilidade de mobilização separados. Não publicar um prazo único para todo o eixo |
| **Jequitinhonha** | Capelinha, Itamarandiba, Araçuaí e Itinga | Base florestal e localização pública do projeto Grota do Cirilo. [Aperam BioEnergia](https://aperambioenergia.com.br/contato/), [documento do projeto Sigma, 2024](https://sigmalithiumresources.com/wp-content/uploads/2024/12/Anexo-18_Relatorio-Hidrogeologico.pdf) | Investigar escopo, ativos e contratação em cada operação. Confirmar situação operacional atual antes de prospectar a partir de documento histórico |
| **Triângulo e Alto Paranaíba** | Uberlândia, Araguari, Araxá, Tapira e Uberaba | Locação, nióbio e fertilizantes. [Mills Uberlândia](https://www.mills.com.br/mapa-de-atuacao/mills-uberlandia), [CBMM em Araxá, 2026](https://cbmm.com/pt/midias/noticias/programa-jovem-aprendiz-cbmm-2026), [Mosaic — unidades citadas](https://mosaicco.com.br/Article/Mosaic-Fertilizantes-utiliza-aplicativo-para-atender-comunidades-vizinhas-de-suas-opera%C3%A7%C3%B5es) | Avaliar terceirização de componentes e manutenção de frotas; abordar a necessidade técnica, não anunciar locação própria |
| **Sul de Minas — nó inicial de locação** | Pouso Alegre; ampliar por evidência de operações e frota | Filial publicada da Loxam e mercado de equipamentos de acesso/obras. [Loxam](https://loxam.com.br/filial/pouso-alegre/) | Prioridade exploratória: o portfólio de plataformas não equivale ao de linha amarela; confirmar compatibilidade antes de investir em conteúdo ou prospecção |

A primeira página territorial deve ser a **`/atuacao/` já existente**, enriquecida com contexto de Minas Gerais, processo de análise logística e links para especialidades e setores. Uma página de município só passa a ser justificável quando houver serviço realmente atendível, operação ou caso autorizado, perguntas locais relevantes e conteúdo substancial próprio. Não colocar nomes de mineradoras no title de páginas que insinuem atendimento já prestado.

### Amostra de empresas e operações para qualificação comercial

**17 exemplos, não um cadastro exaustivo de empresas mineiras.** As fontes mostram presença ou operação publicada, não demanda de compra, intenção de terceirizar ou relação com a New Tractor. Confrontar a lista com a carteira e o histórico comercial; não classificá-las automaticamente como clientes ou novos prospects. OEMs e grandes locadoras podem ter manutenção interna e requisitos de contratação próprios.

| Segmento | Empresa / operação de referência | Evidência e encaminhamento |
|---|---|---|
| Mineração | Vale | [Operações](https://www.vale.com/pt/onde-estamos); [cadastro de fornecedores](https://www.vale.com/pt/cadastro-de-fornecedores) |
| Mineração | Anglo American / Minas-Rio | [Operação em MG, comunicação de 2026](https://brasil.angloamerican.com/pt-pt/imprensa/noticias/2026/05-03-2026); [canal de fornecedores](https://brasil.angloamerican.com/pt-pt/fornecedores/entre-em-contato) |
| Mineração | Samarco / Germano | [Processo produtivo](https://www.samarco.com/processo-produtivo/); [fornecedores](https://www.samarco.com/fornecedores/) |
| Mineração | CSN Mineração | [Operações](https://www.csn.com.br/mineracao/); [fornecedores](https://www.csn.com.br/fornecedores/introducao/) |
| Mineração | Mineração Usiminas / Serra Azul | [Operação](https://www.usiminas.com/pages/mineracao-usiminas/); confirmar o canal atual de suprimentos |
| Mineração | Kinross / Paracatu | [Empresa](https://kinross.com.br/); [fornecedores](https://kinross.com.br/fornecedores/) |
| Mineração | Sigma / Grota do Cirilo | [Localização no documento de 2024](https://sigmalithiumresources.com/wp-content/uploads/2024/12/Anexo-18_Relatorio-Hidrogeologico.pdf); revalidar estágio e canal de contratação |
| Mineração / indústria | CBMM / Araxá | [Operação em 2026](https://cbmm.com/pt/midias/noticias/programa-jovem-aprendiz-cbmm-2026); [fornecedores e manual](https://cbmm.com/pt/operacoes/fornecedores) |
| Mineração / fertilizantes | Mosaic | [Unidades mineiras citadas oficialmente](https://mosaicco.com.br/Article/Mosaic-Fertilizantes-utiliza-aplicativo-para-atender-comunidades-vizinhas-de-suas-opera%C3%A7%C3%B5es); validar escopo de compras por unidade |
| Florestal / celulose | CENIBRA | [Unidade em Belo Oriente](https://sistemas.meioambiente.mg.gov.br/licenciamento/site/view-externo?id=38921); [e-Fornecedores](https://efo.cenibra.com.br/default.aspx?l=pt-br), acesso autenticado |
| Florestal | Aperam BioEnergia | [Endereços e canais](https://aperambioenergia.com.br/contato/); confirmar fluxo de cadastro e serviços compatíveis |
| Florestal | Suzano / região de Curvelo | [Programa de operadores em MG, notícia de 2024](https://www.suzano.com.br/noticia/suzano-forma-novos-operadores-de-maquinas-florestais-em-minas-gerais); atualizar operação e compras antes de abordagem |
| Florestal | ArcelorMittal BioFlorestas | [Regiões de manejo, 2024](https://bioflorestas.arcelormittal.com.br/uploads/cartilha_bioflorestas-2024_item_10104.pdf); confirmar canal de suprimentos vigente |
| Florestal | Bracell | [Relatório de sustentabilidade 2025](https://www.bracell.com/wp-content/uploads/2026/03/Bracell-Relatorio-de-Sustentabilidade-2025.pdf); [sinal histórico em João Pinheiro](https://www.bracell.com/noticias/bracell-abre-vagas-em-joao-pinheiro-mg/); qualificar o escopo mineiro atual |
| Locação | Mills | [Unidade e oferta em Uberlândia](https://www.mills.com.br/mapa-de-atuacao/mills-uberlandia); confirmar área de suprimentos/manutenção. Portal de cliente não é cadastro de fornecedor |
| Locação / OEM | Sotreq Cat Rentals | [Oferta de locação](https://hub.sotreq.com.br/sotreq-rental), [filiais mineiras](https://www.sotreq.com.br/filiais-sotreq); qualificar terceirização ou parceria, sem presumir contratação |
| Locação adjacente | Loxam | [Filial Pouso Alegre](https://loxam.com.br/filial/pouso-alegre/); validar componentes/equipamentos compatíveis antes de priorizar |

### Como ampliar a cobertura além dessa amostra

Usar dados e mapas da [ANM/SIGMINE](https://geo.anm.gov.br/portal/home/) e [CFEM](https://www.gov.br/anm/pt-br/assuntos/acesso-a-sistemas/portal-sigmine/destaques-sigmine/painel-interativo-da-cfem) para localizar atividade mineral; cruzar com páginas de operações e contatos corporativos. Um processo mineral não é prova de mina em produção nem de frota própria. Para floresta, partir de [AMIF — associadas](https://amif.org.br/pt/associadas/) e levantamento territorial; para locação, de unidades e portfólios efetivamente publicados.

A planilha/CRM de trabalho deve registrar empresa, operação, município, segmento, ativo/componente compatível, frente do grupo, fonte/data, canal oficial, etapa de homologação e próximo passo. Priorizar **compatibilidade do serviço + viabilidade logística + oportunidade comercial validada**, em vez de porte da empresa isolado. Registrar campos desconhecidos como pendentes. Nomes de responsáveis só entram após identificação por canal legítimo; esta pesquisa não coletou contatos pessoais.


## 07. Conteúdo e provas que devem sustentar as páginas

Cada serviço prioritário precisa responder: o que atende; componentes e aplicações; sinais que motivam consulta; etapas reais; informações para avaliar; critérios de escopo; local/logística; documentos e contato. O tamanho do texto segue essa utilidade, não uma contagem artificial de palavras.

| Prova a produzir | Uso comercial e de busca | Requisito |
|---|---|---|
| Registro de medição em campo | Mostrar como a Services coleta informação para a manutenção | Cliente/local autorizados, dados e método reais |
| Exemplo de relatório de desgaste | Apoiar PCM e diferenciar acompanhamento técnico | Anonimizar informações da operação; revisão técnica |
| Processo de recuperação de componente | Ajudar comprador e mecânico a reconhecer o serviço | Fotos próprias, etapas efetivas, escopo documentado |
| Antes/depois com contexto | Demonstrar intervenção e condição, sem sugerir resultado universal | Identificar o que foi feito e evitar métricas não medidas |
| Documentos para homologação | Facilitar avaliação por suprimentos | Documentos válidos, canal de solicitação e controle de versão |
| Vídeo técnico curto | Explicar um componente ou etapa, além do filme institucional | Conteúdo próprio, legenda, descrição e revisão do responsável |

**Três páginas setoriais propostas:** `/setores/mineracao/`, `/setores/florestal/` e `/setores/locacao-de-equipamentos/`. Cada uma deve conter um problema operacional próprio, aplicações compatíveis, serviços relacionados, prova específica e CTA de frota/operação. Publicar quando houver conteúdo suficiente; não criar o produto cartesiano de sete frentes × todos os municípios × todos os setores.

Pautas iniciais para revisão técnica:

- O que informar para avaliar material rodante de uma escavadeira.
- Como organizar registros de desgaste para o planejamento da manutenção.
- O que uma locadora deve documentar sobre componentes na entrega e devolução.
- Quais dados ajudam a avaliar um cilindro hidráulico — com escopo da HidrauTractor confirmado.
- Quando uma demanda envolve recuperação dimensional e quando pede uma peça nova.
- Informações para cotação de reforma de caçamba ou concha.

Vídeos de fundo reforçam a marca, mas não substituem conteúdo técnico. Para disputar resultados de vídeo, avaliar páginas em que o vídeo seja o conteúdo principal, com título, transcrição e metadados reais. Não criar sete páginas idênticas apenas para um sitemap de vídeos. [Orientação do Google para vídeos](https://developers.google.com/search/docs/appearance/video).

## 08. Sitemaps, robots, llms e dados estruturados

### Sitemap: organizar o conteúdo que existe

O sitemap não segmenta cargos, empresas ou municípios e não insere palavras-chave na busca. Ele comunica URLs e ajuda a descoberta. O atual, com 20 páginas, pode continuar como está enquanto a nova camada editorial é preparada. [Documentação de sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview).

Quando o conjunto crescer, organizar um índice `/sitemap.xml` e arquivos filhos por responsabilidade:

- institucional;
- Rodantes, incluindo as URLs técnicas existentes de manutenção e monitoramento;
- HidrauTractor;
- Usinagem;
- Calderaria, incluindo a URL existente de reforma de caçambas;
- Parts;
- Services;
- TechTractor;
- setores e atuação;
- conteúdos técnicos e casos autorizados.

Essa divisão é uma convenção de manutenção e diagnóstico. Não é necessário publicar arquivos vazios nem um sitemap para cada cidade. Cada URL pertence a um conjunto, entra somente depois de publicada com 200 e canonical próprio, e sai do índice quando é removida ou redirecionada. O sitemap não deve conter URLs de clientes/prospects, previews, PDFs privados ou páginas planejadas que ainda não existem.

O gerador deve usar `lastmod` da alteração relevante de cada página, incluindo mudanças substanciais de conteúdo e dados estruturados. Não atualizar todas as datas a cada deploy. `<priority>` e `<changefreq>` não são instrumentos de prioridade para o Google. [Construção e envio de sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

### Robots e migração

Na produção, manter acesso ao conteúdo público e ao CSS/JS necessários, com referência ao sitemap canônico. Preview continua com header `noindex`. `robots.txt` controla rastreamento; não é mecanismo de posicionamento por cidade nem substituto de `noindex` para uma página que não deve aparecer.

Preservar as URLs úteis já existentes. As rotas técnicas atuais não precisam mudar de endereço para aparecer vinculadas a uma empresa do grupo. Para URLs legadas do WordPress, revisar o mapa de redirects, inclusive `/?p=...`, e testar cada destino. Uma reforma no mesmo domínio não exige trocar a identidade do site ou criar uma migração de domínio adicional. [Orientação de migração](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

### `llms.txt`: complementar, sem promessa de ranking

Restaurar um arquivo técnico simples com nome do grupo, resumo factual, sete frentes, serviços, contato e links canônicos publicados. Ele pode permanecer sem link no menu, sem mudar a linguagem institucional das páginas. A retirada anterior foi uma interpretação editorial do assistente, não uma decisão técnica necessária do proprietário.

A documentação atual do Google afirma que o Google Search ignora esses arquivos especiais para visibilidade e classificação. Portanto, a restauração atende à organização técnica solicitada, mas não é o caminho para aparecer para mineradoras ou compradores. [Orientação oficial sobre arquivos de IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

### Dados estruturados

Manter `WebSite` e organização do grupo consistentes. Cada serviço comprovado pode ter `Service` com provedor real e descrição visível equivalente. Usar breadcrumbs nas páginas e `Article` em conteúdo editorial. `VideoObject` exige vídeo e metadados verificáveis. Não fabricar `Review`, estrelas, `Product`, preço, estoque, certificações ou identidades jurídicas para tentar obter destaque. Marcação válida não garante resultado especial. [Diretrizes de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## 09. Presença local, reputação e entrada em empresas

**Perfil da Empresa no Google:** primeiro auditar e atualizar o perfil da base real em Belo Horizonte: nome reconhecível, endereço, telefone, categoria que descreve a atividade, serviços, horários verdadeiros, fotos e link canônico. Não afirmar que isso já foi feito nesta análise.

O Google considera relevância, distância e notoriedade nos resultados locais. Uma base em BH pode disputar pesquisas regionais úteis, mas listar Minas Gerais como área não cria proximidade física com todas as minas e pátios. [Fatores de resultado local](https://support.google.com/business/answer/7091?hl=pt-BR).

Não abrir automaticamente sete perfis para sete frentes ou perfis em cidades sem operação. Marcas/departamentos distintos precisam atender às regras aplicáveis e ter representação real. Para o perfil de atendimento externo, informar as áreas efetivamente atendidas: as orientações gerais limitam a lista a 20 áreas e usam cerca de duas horas de deslocamento como referência, com situações específicas tratadas nas diretrizes. Esse cadastro local não substitui o planejamento de mobilização industrial por demanda. [Representação da empresa](https://support.google.com/business/answer/3038177?hl=pt-BR), [áreas de cobertura](https://support.google.com/business/answer/9157481?hl=pt-BR).

Para alcançar organizações que não estão pesquisando naquele momento, somar relacionamento comercial ao SEO:

- cadastro nos canais oficiais de fornecedores compatíveis com o serviço;
- documentos de apresentação e homologação atualizados;
- participação real em entidades e encontros setoriais relevantes;
- conteúdo técnico assinado e relações legítimas com fornecedores e parceiros;
- relatos de serviço e referências de clientes somente com autorização;
- solicitação de avaliações honestas depois do serviço, sem compra ou incentivo a depoimentos artificiais.

Portais de fornecedores podem não gerar links públicos e cadastro não garante contratação. São uma via comercial paralela à busca. Empresas citadas no mapa territorial são exemplos de mercado, não carteira de clientes nem vínculos da New Tractor.

## 10. Plano de execução de 90 dias

P0 = requisito para operar; P1 = aquisição prioritária; P2 = expansão sustentada por evidência. Datas são janelas de execução, não promessa de ranking.

| Janela | Entrega | Responsável proposto | Critério de conclusão |
|---|---|---|---|
| Dias 1–7 · P0 | Confirmar escopo de cilindros e atendimento em campo; separar recuperação, fabricação e tecnologia em evolução | Proprietário + líderes técnicos | Matriz de serviços e limites aprovada |
| Dias 1–7 · P0 | Preparar publicação definitiva e diagnosticar integração Cloudflare; executar a migração após liberação operacional | Desenvolvimento + responsável por DNS | HTTPS, 200 nas rotas, redirects, e-mail preservado, produção indexável e preview noindex |
| Dias 1–14 · P0 | Validar GSC, GA4/GTM e contatos; registrar situação anterior | Marketing + comercial + desenvolvimento | Sitemap lido, inspeção de URLs e eventos reais de teste, sem duplicidade |
| Dias 8–30 · P1 | Revisar sete páginas de frente e três páginas técnicas existentes; fortalecer entrada de campo | Redação + líderes técnicos + desenvolvimento | Intenção, título, conteúdo, prova, CTA e links próprios por página |
| Dias 8–30 · P1 | Criar página de cilindros após confirmação; restaurar llms técnico; organizar mapa editorial | HidrauTractor + SEO | Página publicável com evidências; arquivos de descoberta consistentes |
| Dias 15–45 · P1 | Validar evidências e preparar três páginas setoriais; publicar as aprovadas e enriquecer `/atuacao/` | Comercial + operação + conteúdo | Contextos distintos, cobertura factual e encaminhamento para especialidades |
| Dias 30–60 · P1 | Produzir registros técnicos de campo e componentes; iniciar cadastros e relações priorizados | Operação + comercial | Provas autorizadas, cadastros acompanhados e primeiras demandas classificadas |
| Dias 45–90 · P2 | Ajustar páginas por consultas reais; avaliar conteúdo regional adicional e sitemaps separados | SEO + comercial | Decisões baseadas em impressões, consultas, leads e escopo atendível |
| Dias 60–90 · P2 | Revisar custo, qualidade e desfecho das oportunidades por frente | Direção + comercial | Prioridades da próxima etapa ligadas à receita e à capacidade operacional |

### Indicadores para cada frente

- **Descoberta:** URLs publicadas/indexadas e motivos de exclusão. Sitemap recebido não significa página indexada.
- **Visibilidade:** impressões, cliques, consultas sem marca e posição por página/consulta. Não chamar média geral de posição de ranking em todo o estado.
- **Intenção comercial:** cliques em contato por página, CTA e frente.
- **Qualificação:** demandas com componente, aplicação, cidade e escopo compatíveis, confirmadas pelo comercial.
- **Resultado:** avaliações acordadas, propostas, contratos, recorrência e motivos de perda.

Usar filtros de páginas/consultas no Search Console e uma tabela de correspondência de URL para frente. Os sitemaps ajudam a acompanhar descoberta/indexação; a análise de tráfego e leads precisa dos relatórios por página e do registro comercial. GSC não identifica o cargo ou a empresa de cada visitante; município, segmento e função devem vir do contato declarado, respeitando privacidade.

O GTM existente pode encaminhar `site_cta_click` para GA4 após validação. Adicionar campos analíticos controlados como `business_unit`, `service_cluster` e `cta_name`; não transmitir nome, telefone, CNPJ, fotos ou conteúdo da solicitação ao analytics. Propostas e visitas devem ser contabilizadas no processo comercial, não inferidas do clique.

Estabelecer baseline antes de impor metas de tráfego ou conversão. Nas revisões de 30/60/90 dias, ampliar o que produz demanda qualificada e corrigir páginas que atraem intenção incompatível. Metas numéricas de leads dependem de capacidade, sazonalidade, histórico e orçamento; não foram inventadas aqui.

## 11. Decisões necessárias e limites desta análise

1. **HidrauTractor:** confirmar quais trabalhos de cilindros são executados hoje, aplicações, processos, testes, dimensões e comprovação disponível.
2. **Pátio do cliente:** distinguir inspeção/medição, desmontagem, reparo e montagem; definir equipe, logística e condições reais de mobilização.
3. **Território:** cruzar os corredores propostos com deslocamentos praticáveis, carteira real, margem e capacidade. Não publicar prazo ou filial presumidos.
4. **TechTractor:** confirmar estágio e disponibilidade comercial; até lá, apresentar tecnologia em evolução e organização da informação de manutenção.
5. **Canais e prova:** validar contato principal, administração do Perfil da Empresa, acesso a GSC/GA4, documentação institucional e autorizações de casos.

Método: código e documentos do projeto, verificações HTTP e pesquisa pública em fontes oficiais de busca e sites de empresas/entidades. Não foram acessados CRM, dados privados de clientes, Search Console, GA4, contas de anúncios ou listas de compradores. Também não foram enviados contatos nem feitos cadastros.

A tentativa de consulta ao Semrush retornou insuficiência de unidades de API. Por isso, este relatório não apresenta volume mensal, dificuldade, CPC, tráfego estimado ou posição de concorrentes como se tivessem sido medidos. Para uma etapa quantitativa, as opções de acesso estão em [Semrush MCP](https://www.semrush.com/mcp-access). A pesquisa pública não simula uma SERP do Google geolocalizada em cada município.

**Resultado entregue nesta etapa:** diagnóstico, benchmark, arquitetura e plano de ação. A implementação editorial e técnica proposta não foi aplicada ao site por este relatório. Nenhum domínio foi comprado e nenhum DNS foi alterado.


## 12. Fontes e método de leitura

As fontes estão ligadas às respectivas alegações ao longo do relatório. **Documentação do Google** sustenta as recomendações de rastreamento, indexação, spam, presença local e apresentação nos resultados. **Sites dos concorrentes** mostram o que eles publicam, sem validar desempenho, certificações ou resultados. **IBRAM, AMIF, ANM e páginas de operações** sustentam o recorte territorial; documentos históricos têm sua data indicada e exigem atualização comercial. **Repositório e consultas HTTP** sustentam o diagnóstico do site.

“Proposto”, “hipótese” e “prioridade” identificam recomendações desta análise. “Publicado” identifica informação encontrada na fonte. “Confirmar” identifica dependência de validação pelo responsável. A lista de empresas é uma amostra de mercado e não uma alegação de relacionamento comercial.

Versão de trabalho: 07/09/2026. Reavaliar fontes e escopo antes de publicar novas alegações no site.
