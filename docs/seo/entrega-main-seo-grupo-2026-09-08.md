# Entrega de SEO para a main — Grupo New Tractor

Escopo acordado em 08/09/2026: análises e modificações prontas nas sete especialidades; DNS, Search Console e comprovação posterior de ranking ficam fora do aceite.

[Relatório interativo](entrega-main-seo-grupo-2026-09-08.html) · [PR9](https://github.com/williandmx/new_tractor_website/pull/9) · [Evidências MCP](benchmark-mcp-grupo-2026-09-08.md)

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

33 URLs indexáveis e 404 separado, um H1 por página, títulos e descrições únicos, canonical, 7 identidades Brand, FAQs visíveis equivalentes ao schema, cinco guias Article com crédito e data, sitemap e llms gerados do mesmo inventário.

As páginas setoriais cobrem mineração, florestal, agronegócio, construção/terraplenagem e locadoras. Elas organizam dados da operação e não alegam carteira de clientes ou presença física fora da base de Belo Horizonte.

Build/testes, mobile/desktop, teclado, no-JS, Lighthouse e preview são documentados no [registro de QA](../QA-SEO-MAIN-2026-09-08.md). Os checks e o merge têm evidência no PR9.

A análise mantém métricas BR separadas das consultas BH, datas de coleta separadas da atualização do indicador, N/D separado de zero, recursos de SERP separados de resultados orgânicos, e tráfego estimado separado de compradores ou leads.
