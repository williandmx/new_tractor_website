# Entrega de SEO para a main — Grupo New Tractor

Escopo acordado em 08/09/2026: análises e modificações prontas nas sete especialidades; DNS, Search Console e comprovação posterior de ranking ficam fora do aceite.

[Relatório interativo](entrega-main-seo-grupo-2026-09-08.html) · [PR10](https://github.com/williandmx/new_tractor_website/pull/10) · [Evidências MCP](benchmark-mcp-grupo-2026-09-08.md)

## Aplicação por frente

### Rodantes

- Evidência: Minusa: material rodante e roda-guia conduzem a páginas específicas. ITR aparece para medição.
- Aplicação: Componentes, lado da máquina, condição e histórico; decisão entre recuperação, acompanhamento e peça nova.
- Rotas: /rodantes/, /servicos/manutencao-material-rodante/, /servicos/monitoramento-material-rodante/, /guias/inspecao-material-rodante/.

### HidrauTractor

- Evidência: A SERP de recuperação de cilindros em BH mostra prestadores locais e páginas por serviço.
- Aplicação: Cilindros hidráulicos no contexto da máquina, sintomas e identificação; guia para separar cilindro, haste, pistão e vedação na consulta.
- Rotas: /hidrautractor/, /guias/avaliacao-cilindros-hidraulicos/.

### Usinagem

- Evidência: Mandrilhamento combina resultados educativos e prestadores; Açomec não apresentou dados de domínio no recorte BR.
- Aplicação: Recuperação dimensional e mandrilhamento em mandrilhadora, desenho, material, aplicação e critérios definidos por peça.
- Rotas: /usinagem/, /servicos/usinagem-componentes-maquinas-pesadas/, /guias/cotacao-pecas-maquinas-pesadas/.

### Calderaria

- Evidência: Reforma de caçambas mistura escavadeiras, caminhões e resíduos. Parte do tráfego da Modelaço é de telhas.
- Aplicação: Distinção entre caçamba de escavadeira e concha de carregadeira, condição estrutural, geometria e dados para comparar escopos.
- Rotas: /calderaria/, /servicos/reforma-cacambas-conchas/, /guias/avaliacao-cacambas-conchas/.

### Parts

- Evidência: As buscas levam a catálogos por peça e aplicação. Resultados de marca não equivalem a demanda por peças.
- Aplicação: Consulta por código, desenho, modelo, quantidade e destino; caminho claro entre peça nova e recuperação de componente existente.
- Rotas: /parts/, /guias/cotacao-pecas-maquinas-pesadas/.

### Services

- Evidência: A busca ampla por manutenção de máquinas pesadas em BH contém muitos cursos e treinamentos.
- Aplicação: Medição e organização da demanda de campo, com máquina, objetivo, cidade, acesso, histórico e logística para avaliação.
- Rotas: /services/, /guias/avaliacao-maquinas-linha-amarela/, /guias/inspecao-material-rodante/.

### TechTractor

- Evidência: A SERP de monitoramento mostra indicadores, kits, sensores e a página legada da própria New Tractor.
- Aplicação: Registro, inspeção, desgaste e histórico; relação com manutenção e Services, mantendo explícito o estágio em evolução.
- Rotas: /techtractor/, /servicos/monitoramento-material-rodante/, /guias/inspecao-material-rodante/.

## Descoberta e aceite

38 URLs indexáveis e 404 separado, um H1 por página, títulos e descrições únicos, canonical, 7 identidades Brand, FAQs visíveis equivalentes ao schema, seis guias Article com crédito e data, sitemap e llms gerados do mesmo inventário.

As páginas setoriais cobrem mineração, florestal, agronegócio, construção/terraplenagem e locadoras. Elas organizam dados da operação e não alegam carteira de clientes ou presença física fora da base de Belo Horizonte.

Build/testes, mobile/desktop, teclado, no-JS, Lighthouse e preview são documentados no [registro de QA](../QA-SEO-MAIN-2026-09-08.md). Os checks e o merge têm evidência no PR9.

A análise mantém métricas BR separadas das consultas BH, datas de coleta separadas da atualização do indicador, N/D separado de zero, recursos de SERP separados de resultados orgânicos, e tráfego estimado separado de compradores ou leads.


## Antes e depois: main e benchmarks

Base: `938c434`; etapa PR9: `46752a8`; PR10: rodada semântica de 08/09 (aplicação 43ea681). WordPress não é a comparação de qualidade.

| Critério | Antes | PR9 | PR10 | Leitura |
|---|---|---|---|---|
| URLs indexáveis | 25 | 33 | 38 | 13 rotas novas desde a base: 5 setores e hub, 3 guias e 4 páginas de componentes. |
| Frentes do grupo | 7 | 7 ampliadas | 7 aprofundadas | A marca já tinha arquitetura; agora componente, problema e próximo passo aparecem na mesma jornada. |
| Guias editoriais | 3 | 5 | 6 | Cilindros, caçambas/conchas e folgas de pinos, buchas e alojamentos acrescentados. |
| Páginas de componentes | 0 | 0 | 4 | Hub, rodas-guia, roletes, corrente/rosário e sapatas. Processos documentados e fotos existentes. |
| Setores em rotas próprias | 0 | 5 + hub | 5 + hub | Mineração, florestal, agro, construção/terraplenagem e locadoras. |
| FAQPage por frente / perguntas | 0 / 0 | 7 / 21 | 7 / 22 | Equivalência com o texto; não implica exibição de resultado enriquecido. |
| Brand / Article nos guias | 0 / 0 | 7 / 5 | 7 / 6 | Sete identidades de marca, uma base real e autoria editorial nos guias. |
| Sitemaps | 1 XML · 25 URLs | 1 XML · 33 URLs | 1 índice + 8 mapas · 38 URLs | Uma frente responsável por URL; nenhum endereço duplicado, planejado ou municipal artificial. |
| llms.txt | 25 URLs | 33 URLs | 38 URLs | Mesma cobertura canônica dos sitemaps, agrupada por frente. Não é um mecanismo de ranking. |
| HTML sem JS, canonical, H1 único | Já existiam | Preservados | Preservados | Qualidade anterior mantida; não atribuída como novidade desta rodada. |

| Frente | Antes | Depois aplicado | Benchmark | Trabalho futuro |
|---|---|---|---|---|
| Rodantes | Manutenção, monitoramento e inspeção já existiam. | Recuperação de roda-guia e rolete, corrente/rosário, sapata e avaliação do conjunto. Hub e três rotas com função, condição, processo e destino. | Minusa e ITR têm páginas específicas de componentes; Tratorvias aparece para recuperação de roletes. | Acrescentar medições, registros de recuperação e exemplos próprios autorizados. |
| HidrauTractor | Apresentação hidráulica genérica, escopo condicionado. | Title centrado em cilindros, guia com aplicação, sintomas, kit versus serviço, haste, êmbolo e tipo identificado. | Hidraucron e Cilíndrica detalham processos hidráulicos. A amostra BR inclui cilindro e reparo para escavadeira. | Confirmar os processos realmente oferecidos, capacidade e provas antes de criar páginas comerciais de fabricação, testes ou reparos específicos. |
| Usinagem | Recuperação dimensional e página técnica já disponíveis. | Usinagem pesada, mandrilhamento/mandrilamento, alojamentos e ligação com o guia de folgas. Base industrial em BH explícita. | Roscaf, Gans e Imbra aparecem na consulta com Minas Gerais; termos locais têm intenção mais dirigida. | Fotos e exemplos próprios por peça, documentação técnica autorizada; a entrega não afirma serviço portátil em campo. |
| Calderaria | Frente e reforma de caçambas/conchas existentes. | Caldeiraria pesada contextualizada em máquinas, caçamba de escavadeira e concha de carregadeira, com guia de avaliação. | GD Manutenção, Engeman e Imbra aparecem para caldeiraria pesada em MG; isso não torna todos os seus serviços equivalentes. | Reformas reais com condição inicial, processo e critério de entrega; qualificar procura de caçamba sem captar entulho como serviço. |
| Parts | Consulta por código/desenho e guia de cotação. | Peças para escavadeira, pinos/buchas e escolha entre peça nova e recuperação. Guia diferencia pino, bucha e alojamento. | Dispetral e Minusa têm páginas de pinos e buchas; ITR organiza catálogo por componente. | Catálogo e compatibilidades comprovadas. Texto editorial ainda não equivale a inventário comercial de fabricante. |
| Services | Frente integradora para avaliação de demandas. | Medição → máquina e componente → cidade e acesso → logística → encaminhamento. Hub responde a seis necessidades reais de manutenção. | Globalmaxtractor aparece em consulta BH, que também contém vagas e cursos. Sotreq permanece referência de atendimento. | Comprovar modalidades de visita, mobilização e execução; acompanhar se chegam solicitações atendíveis. |
| TechTractor | Inspeção e histórico apresentados como direção em evolução. | Ligação entre registros, condição, histórico e planejamento, com Services e monitoramento. | ITR e Cat têm conteúdo e soluções de monitoramento. A nova expansão de termos não retornou sugestões para as três sementes. | Demonstração de produto e resultados próprios quando existirem; falta de volume na ferramenta não prova ausência de demanda. |

## Cobertura semântica ampliada

Ubersuggest: 21 sementes, 268 sugestões únicas BR/pt; volumes não são MG e não têm data do indicador no endpoint. Rodantes e hidráulica têm paginação não esgotada. Nova coleta de seis SERPs BH com 84 entradas: 60 orgânicas, nove locais e 15 outros recursos, posições separadas por bloco/tipo.

[Análise e matriz](cobertura-semantica-grupo-2026-09-08.md) · [Keywords brutas](dados/semantica-grupo-keywords-2026-09-08.json) · [SERPs brutas](dados/semantica-grupo-serps-bh-2026-09-08.json).

Índice `/sitemap.xml` com oito mapas e 38 URLs, cada uma atribuída uma vez. A divisão permite auditoria por frente e não acrescenta vantagem de ranking.

- `sitemap-rodantes.xml`: 6 URLs.
- `sitemap-hidrautractor.xml`: 2 URLs.
- `sitemap-usinagem.xml`: 3 URLs.
- `sitemap-calderaria.xml`: 3 URLs.
- `sitemap-parts.xml`: 2 URLs.
- `sitemap-services.xml`: 2 URLs.
- `sitemap-techtractor.xml`: 2 URLs.
- `sitemap-grupo.xml`: 18 URLs.

## O que esperar com o tempo

Minha expectativa é observar primeiro descoberta e novas consultas específicas; depois, avaliar recorrência e contatos compatíveis. Rodantes, reforma e usinagem têm escopos documentados que permitem aprofundar páginas de serviço. As demais frentes ganham caminhos mais claros para descoberta, com resultados condicionados à oferta, às provas, à concorrência e à procura real.

As janelas abaixo são um plano de acompanhamento recomendado, não uma previsão estatística de tráfego ou prazo para primeira página. T0 é a entrada do conteúdo no domínio canônico acessível aos buscadores. Enquanto a nova versão estiver somente no Pages com noindex, a passagem do tempo não mede seu ganho orgânico.

O Google descreve prazos variáveis, de horas a meses, para reflexos das mudanças; rastreamento pode levar dias ou semanas e migrações podem oscilar. [Guia de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [rastreamento](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [migração](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

| Janela desde T0 | Expectativa de acompanhamento | Como decidir |
| --- | --- | --- |
| T0 · início da observação | Novo conteúdo disponível no domínio canônico e acessível aos buscadores. | Registrar data, URLs, versão, consultas acompanhadas e medição de contatos. A data do merge não substitui esse marco. |
| Primeiros 30 dias | Janela para verificar descoberta das páginas e aderência às intenções de serviço e componente. | Observar rastreamento, indexação e destinos. Oscilações iniciais não comprovam sucesso ou falha da estratégia. |
| 30 a 90 dias | Primeira janela de avaliação de consultas novas e páginas de entrada. | Comparar períodos completos de 28 dias. Procurar impressões e cliques de serviço/componente, separados de marca; verificar se os contatos são atendíveis. |
| 3 a 6 meses | Janela para avaliar tendências por especialidade e decidir onde aprofundar. | Relacionar procura, consultas recebidas e orçamentos. Priorizar conteúdo e provas nas frentes com demanda qualificada; rever intenção quando só chegam buscas irrelevantes. |
| 6 a 12 meses | Horizonte de expansão sustentada por evidências e relações reais. | Avaliar se há justificativa para novos componentes, cases e conteúdo territorial próprio. Tempo sozinho não acrescenta autoridade, referências ou resultados. |

### Base para comparar resultados

| Indicador | Base conhecida | Como ler o depois |
| --- | --- | --- |
| Entrega técnica | 38 URLs; 34 testes aprovados; 152 cenários responsivos. Lighthouse local 95–100 em desempenho e 100 nas demais categorias em cinco cenários. | É resultado da implementação; não é medida de posição no Google. |
| Buscas e visitas reais | Não há série pós-publicação validada nesta entrega. | Separar impressões/cliques do Search Console, sessões do Analytics e estimativas do Ubersuggest. Não somar essas métricas. |
| Contatos e negócio | Os canais e cliques foram testados; recebimento de oportunidades e vendas não foi medido. | Registrar contato efetivo, setor/cidade informados, equipamento, necessidade atendível, orçamento e resultado. Clique em WhatsApp ou e-mail não comprova envio nem venda. |

Separar impressões/cliques, sessões e contatos confirmados. [Orientação do Google](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console). Comparar períodos completos de 28 dias e a mesma lista de consultas, geografia, idioma e dispositivo. Registrar mudanças, sazonalidade e limitações. Zero ou ausência de base não permite calcular crescimento percentual; usar contagens. Pacote local, orgânico e recursos de SERP ficam separados; BH não representa todo o estado.

- **Se não há páginas novas indexadas:** Verificar acesso, status HTTP, canonical, noindex e leitura do conteúdo antes de produzir mais páginas.
- **Se há impressões, mas poucos cliques:** Revisar consulta, posição, título e aderência do resultado. Não concluir que mudar a description, isoladamente, resolverá a disputa.
- **Se há cliques, mas poucos contatos válidos:** Revisar a intenção, o escopo apresentado e o caminho de contato; conferir se os dados de mensuração estão chegando.
- **Se há contatos, mas poucos orçamentos ou vendas:** Identificar compatibilidade técnica, logística, prazo solicitado e resposta comercial. Esse trecho depende da operação, além do site.

O critério de negócio é mais necessidades atendíveis encaminhadas para avaliação e orçamento. Não há previsão validada de visitas, leads ou vendas. Este complemento não configura monitoramento automático.


## Validação da ampliação

[QA semântico](../QA-SEO-SEMANTICA-2026-09-08.md) · [Evidências em JSON](dados/validacao-semantica-2026-09-08.json). Aplicação `43ea681` validada no preview: 49 recursos HTTP 200 iguais ao build, 34 testes, 152 cenários responsivos e rechecagens focadas; cinco auditorias Lighthouse com desempenho 95–100 e demais categorias 100. O grupo tem 22 perguntas nas sete FAQPage.
