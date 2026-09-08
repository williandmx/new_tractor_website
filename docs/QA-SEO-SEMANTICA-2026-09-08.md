# QA — cobertura semântica do Grupo New Tractor — 08/09/2026

Aplicação final: `43ea681`. [PR10](https://github.com/williandmx/new_tractor_website/pull/10). [Preview da aplicação](https://cbf349c2.newtractor-site.pages.dev/). [Resultados e dados de validação](seo/dados/validacao-semantica-2026-09-08.json).

## Resultado

- `npm run check`: 34 testes aprovados, sem falhas. Inclui lint, build, links, HTML editorial, metadados, dados estruturados, consentimento e navegação.
- 38 URLs indexáveis e uma 404. Um H1 e canonical por página; títulos e descrições únicos. Sete Brand, sete FAQPage nas frentes com 22 perguntas e seis guias Article.
- Índice de oito sitemaps na raiz: todas as 38 URLs aparecem uma vez. O llms cobre o mesmo conjunto. Mapas excluem 404, previews e páginas planejadas.
- 152 navegações: 38 rotas × 360/1365 px × com/sem JavaScript. Nenhum erro ou aviso. Teclado nas cinco novas rotas, hub de serviços e HidrauTractor.
- Rechecagens: quatro cenários da página técnica de Usinagem após ajuste de escopo/data; quatro da Services após a última FAQ, incluindo quatro perguntas por teclado e paridade exata com JSON-LD.
- Capturas das cinco novas rotas em mobile e desktop inspecionadas. Conteúdo, imagens, links e CTAs dentro da viewport. O banner de consentimento mantém o comportamento global já existente.
- Preview final: 49 recursos HTTP 200, iguais byte a byte ao build local — 38 páginas, índice, oito mapas, robots e llms. Todos com `X-Robots-Tag: noindex, nofollow`.
- As cinco variantes sem barra retornam 301 para a URL com barra; rota inexistente retorna 404. Essas regras foram verificadas no preview `ec21e82` e não foram modificadas no último ajuste de FAQ.
- Relatório HTML: 360/1365 px, 165 associações históricas filtráveis, busca com/sem acentos, filtro por domínio, limpar, ausência de resultados, conteúdo sem JS, teclado, details e âncoras. Sem falhas; tabelas largas rolam dentro do próprio contêiner.

## Lighthouse local

Lighthouse 13.4.1, Chromium headless, servidor HTTP local, quatro execuções mobile e uma desktop. CSS/JS não sofreram mudança; o último ajuste de FAQ ocorreu em `/services/`, diferente do hub `/servicos/` auditado abaixo.

| Página | Dispositivo | Desempenho | Acessibilidade | Boas práticas | SEO |
|---|---|---:|---:|---:|---:|
| Hub `/servicos/` | Mobile | 95 | 100 | 100 | 100 |
| Roletes de esteira | Mobile | 100 | 100 | 100 | 100 |
| Guia de folgas | Mobile | 100 | 100 | 100 | 100 |
| HidrauTractor | Mobile | 99 | 100 | 100 | 100 |
| Hub `/servicos/` | Desktop | 100 | 100 | 100 | 100 |

Pontuações de laboratório não são métricas de usuários reais nem evidência de ranking. O hub mobile registrou LCP de 3,0 s; oportunidades locais incluem entrega de imagens, CSS e cache. O servidor local não reproduz os headers/cache da Cloudflare. Fotos específicas com fonte de 640 px preservam esse limite de resolução.

## Revisão independente e correções

Corrigidos texto documental que ainda tratava as novas rotas como alvo, referências conflitantes a 33 URLs, data de Usinagem e uma seção que podia sugerir mandrilhamento portátil em campo. A página final descreve recuperação na estrutura industrial em Belo Horizonte. FAQ de Services foca encaminhamento de manutenção por componente; não introduz conteúdo de emprego ou treinamento.

A comparação editorial usa main `938c434`, etapa PR9 `46752a8` e aplicação final `43ea681`; não compara qualidade com WordPress nem atribui notas a concorrentes sem auditoria equivalente. Métricas BR do Ubersuggest e SERPs BH permanecem separadas. DNS, Search Console e comprovação de crescimento posterior não fazem parte da execução.
