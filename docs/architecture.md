# Arquitetura do site

## Princípios

- HTML estático completo, sem dependência de JavaScript para conteúdo.
- Uma intenção principal por rota.
- Navegação curta: O grupo, Empresas (âncora na home), Pessoas, Atuação, Parcerias e Fale com o grupo. A segunda linha com as sete empresas aparece somente nas páginas de especialidades. Soluções técnicas e Equipamentos permanecem no conteúdo e no rodapé.
- Prova visual real antes de claims publicitários.
- Cobertura geográfica consolidada, sem doorway pages municipais.
- As sete frentes são arquitetura de marca local, não afirmação de pessoas jurídicas distintas.
- A rota `/servicos/` permanece o hub técnico das soluções comprovadas; `/services/` é uma frente comercial distinta e não um alias.

## Rotas comerciais confirmadas para implementação local

Status: decisão do usuário registrada em 2026-09-06. Os nomes abaixo organizam
a marca do Grupo New Tractor e não autorizam claims de capacidade, certificação,
prazo, estoque, garantia ou estrutura societária.

| Rota | Papel | Limite editorial |
|---|---|---|
| `/` | Home do Grupo, filme compilado e encaminhamento às sete frentes | Usar o Grupo como endosso de marca; manter fatos públicos e declarações do proprietário identificadas |
| `/rodantes/` | Frente New Tractor Rodantes | Pode usar manutenção, recondicionamento e monitoramento de material rodante já comprovados. `/rodante/` redireciona para cá |
| `/hidrautractor/` | Frente HidrauTractor | Hub de recuperação e fabricação de cilindros, com avaliação por peça/aplicação. `/hidraulica/` redireciona para cá |
| `/usinagem/` | Frente New Tractor Usinagem | Usinagem de componentes; prazo e capacidade após avaliação |
| `/calderaria/` | Frente New Tractor Calderaria | Caldeiraria e solda; escopo após avaliação da condição |
| `/parts/` | Frente New Tractor Parts | Fabricação e consulta de peças; não afirmar estoque sem matriz técnica |
| `/services/` | Frente New Tractor Services, interface comercial para demandas integradas | Não afirmar contrato único, garantia, SLA ou execução end-to-end sem evidência |
| `/techtractor/` | Frente TechTractor para tecnologia e acompanhamento de condição | Produto em evolução; não publicar como sistema pronto nem oferecer acesso transacional |

## Rotas institucionais e técnicas preservadas

| Rota | Papel |
|---|---|
| `/` | posicionamento, prova, soluções e conversão |
| `/empresa/` | história, estrutura, princípios e governança factual |
| `/parcerias/` | apresentação institucional e caminhos para clientes, fornecedores e parceiros |
| `/pessoas/` | filme sob demanda e visão institucional; entrevistas só após captação e autorização |
| `/servicos/` | hub das soluções comprovadas |
| `/servicos/manutencao-material-rodante/` | serviço de rodantes |
| `/servicos/reforma-cacambas-conchas/` | serviço de caçambas/conchas |
| `/servicos/monitoramento-material-rodante/` | medição e monitoramento |
| `/servicos/usinagem-componentes-maquinas-pesadas/` | recuperação dimensional, conforme peça e escopo |
| `/guias/` | hub de orientações para manutenção e suprimentos |
| `/guias/avaliacao-maquinas-linha-amarela/` | dados da máquina, componente e cinco contextos setoriais |
| `/guias/inspecao-material-rodante/` | organização dos registros de inspeção |
| `/guias/cotacao-pecas-maquinas-pesadas/` | preparação da consulta de peças e recuperação |
| `/guias/avaliacao-cilindros-hidraulicos/` | identificação do cilindro, sintomas e dados para consulta técnica |
| `/guias/avaliacao-cacambas-conchas/` | condição estrutural e aplicação em escavadeiras e carregadeiras |
| `/setores/` | hub das cinco jornadas por contexto de operação |
| `/setores/mineracao/` | máquina, componente e avaliação em operações de mineração |
| `/setores/florestal/` | componentes de máquinas pesadas no contexto florestal |
| `/setores/agronegocio/` | linha amarela e componentes pesados no apoio ao agronegócio |
| `/setores/construcao-terraplenagem/` | componentes, frente de obra e logística de terraplenagem |
| `/setores/locadoras/` | condição na entrega, devolução e manutenção da frota locada |
| `/equipamentos/` | máquinas, componentes e informações para avaliação |
| `/atuacao/` | Brasil, corredores prioritários e logística por demanda |
| `/contato/` | canais, RFQ e homologação de fornecedor |
| `/noticias/new-tractor-na-exposibram-2026/` | anúncio histórico atualizado |
| `/privacidade/` | analytics e serviços externos |

## Expansões condicionadas a evidência

- três hubs regionais (Sudeste, Bahia e Goiás);
- cases autorizados;
- conteúdo técnico assinado/revisado por especialista;
- programa 360 e qualquer promessa de reforma integral, contrato único ou pós-venda;
- catálogos, cases ou páginas de capacidade para Parts, Services e TechTractor;
  parâmetros de projeto, materiais, tolerâncias, ensaios, capacidade, prazo,
  garantia e logística da HidrauTractor continuam definidos por peça e escopo.

## Descoberta por busca e conteúdo institucional

- `sitemap.xml` com URLs canônicas e indexáveis;
- `robots.txt` permissivo em produção;
- `llms.txt` resume fatos e links canônicos do catálogo, conforme o pedido de
  descoberta; não representa fator de ranking. `agents.txt` não é gerado;
- a linguagem pública continua institucional, sem bastidores de IA/SEO;
- JSON-LD de `Organization`, `LocalBusiness`, `WebSite`, `Service`,
  `BreadcrumbList`, sete identidades `Brand`, `FAQPage` equivalente às perguntas
  visíveis e `Article` nos cinco guias, com crédito editorial e data;
- preview `pages.dev` protegido por header `noindex, nofollow`.

## Entrega de SEO das sete especialidades — 08/09/2026

O inventário contém 38 URLs indexáveis, alcançáveis por links HTML desde a home.
As cinco páginas setoriais usam contexto próprio de operação, componentes e
perguntas de compradores, manutenção e mecânicos; não criam filiais, carteira
de clientes ou promessa de atendimento local. A matriz de evidência e aplicação
está no [relatório de entrega](seo/entrega-main-seo-grupo-2026-09-08.md).
DNS, Search Console e comprovação posterior de ranking não fazem parte deste aceite.


## Ampliação semântica — 08/09/2026, segunda rodada

A arquitetura passa de 33 para 38 URLs indexáveis, mantendo a 404 fora da descoberta. O hub `/servicos/` organiza seis necessidades por componente/condição e situa a base em Belo Horizonte para demandas em Minas Gerais. Os cinco setores mantêm contexto próprio; não há páginas municipais em massa.

`src/component-content.mjs` acrescenta o hub `/componentes/`, três páginas com perguntas e decisões próprias (rodas-guia, roletes, correntes/rosários e sapatas) e o guia de folgas de pinos, buchas e alojamentos. As páginas de componentes usam o WebPage gerado pelo renderizador com `about: Thing`; somente o guia acrescenta Article, autoria e data.

`src/discovery.mjs` atribui cada URL a uma frente editorial. `/sitemap.xml` torna-se índice de oito mapas na raiz: Rodantes, HidrauTractor, Usinagem, Calderaria, Parts, Services, TechTractor e grupo/compartilhados. O llms usa a mesma atribuição. A divisão facilita auditoria por frente e não é requisito de volume nem fator de ranking. Os testes leem os XMLs de saída e verificam cobertura, exclusividade, host, entradas completas e correspondência com páginas/llms.

A coleta e o filtro editorial estão em `docs/seo/cobertura-semantica-grupo-2026-09-08.md`. O comparativo usa main `938c434`, etapa `46752a8` e esta rodada, sem avaliar qualidade contra o WordPress.
# Ampliação por aplicação e território — 08/09/2026

A base da rodada é `ef32c45` (PR10, 38 URLs). Acrescentam-se três páginas em `/equipamentos/` e uma em `/atuacao/minas-gerais/`, totalizando 42 URLs indexáveis no código. Fontes editoriais novas: `src/equipment-content.mjs` e `src/territory-content.mjs`, integradas por `src/site.mjs`.

`src/discovery.mjs` distribui 42 URLs em dez mapas: Rodantes 6; HidrauTractor 2; Usinagem 3; Calderaria 3; Parts 2; Services 2; TechTractor 2; Equipamentos 4; Atuação 2; Grupo 16. O índice `sitemap.xml` aponta para os dez arquivos; `llms.txt` deriva da mesma coleção. A segmentação serve à auditoria de cobertura, não a um ganho de ranking pelo número de XMLs.

Os hubs Equipamentos e Atuação, as sete frentes e o guia de cilindros fornecem entradas HTML para os novos destinos. As aplicações possuem conteúdo próprio por movimento e configuração, Article/Breadcrumb e metadados específicos; a página territorial possui Breadcrumb e assunto AdministrativeArea, sem criar estabelecimentos locais. Não são produzidas combinações automáticas serviço × município.

## Rotas de serviços hidráulicos — 08/09/2026

A confirmação explícita do proprietário autoriza a HidrauTractor a apresentar
recuperação e fabricação de cilindros hidráulicos. Em relação à main `9f6137c`,
as duas rotas abaixo acrescentam duas URLs indexáveis ao inventário de 42,
totalizando 44; o mapa HidrauTractor passa de 2 para 4 URLs e o índice raiz
mantém dez sitemaps.

| Rota | Papel | Conteúdo editorial |
|---|---|---|
| `/hidrautractor/recuperacao-cilindros-hidraulicos/` | Caminho comercial para cilindro em uso | Seis etapas da avaliação à recuperação, detalhes de camisa/haste/vedações e critérios de ensaio por peça |
| `/hidrautractor/fabricacao-cilindros-hidraulicos/` | Caminho comercial para novo conjunto | Seis etapas da aplicação ao conjunto identificado, com projeto, materiais, usinagem, montagem e aceitação definidos no escopo |

O hub `/hidrautractor/` encaminha os dois caminhos por cards de decisão. As
páginas detalhadas ligam aplicações de escavadeiras, tratores de esteira e pás
carregadeiras, formulário de orçamento por e-mail, WhatsApp e telefone reais.
Os fluxos não fixam pressão, material, acabamento, tolerância, capacidade,
garantia ou prazo; esses dados dependem da peça, aplicação, norma adotada e
requisitos contratuais. As referências ISO exibidas contextualizam o projeto e
os ensaios, sem certificar a empresa.
