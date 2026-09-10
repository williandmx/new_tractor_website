# QA de performance — páginas regionais de Minas Gerais (preview local e remoto)

**Data:** 10 de setembro de 2026

**Ambiente:** preview local Wrangler em `http://localhost:8792`

**Ferramenta:** Lighthouse CLI 13.4.1, Chrome 153.0.8010.36 em `/opt/google/chrome/chrome`

**Execução:** uma coleta mobile e/ou desktop por rota, com `--headless --no-sandbox --disable-dev-shm-usage`.

O Chrome DevTools MCP não estava disponível neste ambiente; a medição foi feita com o Lighthouse CLI independente, sem CUA, Playwright, perfil de usuário ou conexão CDP interativa. Esta é a rodada final pós-correção do contraste, após a reinicialização do preview. Os JSON brutos foram preservados em `/tmp/nt-minas-lighthouse-final-GDyo2K/`.

## Rodada local pós-correção — rotas e métricas

Os valores abaixo são os resultados reais do laboratório Lighthouse. TBT ficou em `30 ms` no material rodante mobile e `0 ms` nos outros dois cenários.

| Rota | Perfil | Performance | Acessibilidade | Práticas | SEO | FCP | LCP | TBT | CLS |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/atuacao/minas-gerais/contagem/material-rodante/` | mobile | 100 | 100 | 100 | 69 | 0,9 s | 1,7 s | 30 ms | 0 |
| `/atuacao/minas-gerais/contagem/material-rodante/` | desktop | 100 | 100 | 100 | 69 | 0,2 s | 0,6 s | 0 ms | 0 |
| `/atuacao/minas-gerais/cidades/` | mobile | 100 | 100 | 100 | 69 | 0,8 s | 1,7 s | 0 ms | 0 |

As três execuções também marcaram `agentic-browsing` em 100. O servidor respondeu `200` para as rotas auditadas.

## Comparação da correção de contraste

| Amostra | Antes da correção | Depois da correção | Resultado |
| --- | --- | --- | --- |
| Material rodante — mobile | Acessibilidade 97; `color-contrast` reprovado; contraste 3,73:1 no bloco RFQ | Acessibilidade 100; `color-contrast` aprovado, sem itens reprovados | Corrigido |
| Material rodante — desktop | Acessibilidade 97; `color-contrast` reprovado; contraste 3,73:1 no bloco RFQ | Acessibilidade 100; `color-contrast` aprovado, sem itens reprovados | Corrigido |
| Lista de cidades — mobile | Acessibilidade 100; sem falha de contraste | Acessibilidade 100; sem falha de contraste | Mantido |

## Achados

- **Bom comportamento de carregamento:** FCP mobile de 0,8–0,9 s, LCP mobile de 1,7 s, TBT de 0–30 ms e CLS 0. O LCP mobile ficou dentro da referência de 2,5 s; desktop ficou em 0,6 s.
- **Contraste corrigido:** o bloco de solicitação do material rodante passou a acessibilidade 100 nos dois perfis. O audit `color-contrast` não encontrou itens reprovados nesta rodada.
- **Entrega de imagens:** o Lighthouse sinalizou oportunidade estimada de 77 KiB no material rodante mobile (143 KiB desktop), principalmente em `material-rodante-1200.webp` e no logo. Na lista de cidades, a oportunidade estimada foi 66 KiB, principalmente em `equipe-1200.webp` e no logo. É uma oportunidade de compressão/seleção de variante, não uma falha de carregamento.
- **Console e práticas:** as três páginas responderam `200` para `/site.webmanifest`, sem `errors-in-console`; a categoria Práticas ficou em 100 nesta rodada final.
- **Dependências locais:** a auditoria de rede identificou a navegação, o manifesto e o CSS versionado como a cadeia mais longa. A folha CSS `site.20260910-minas-v2.css` foi classificada como render-blocking, com 163–165 ms no mobile e 57 ms no desktop neste laboratório; isso deve ser reavaliado contra a implementação final e a latência pública.
- **Interação:** o `max-potential-fid` foi 160 ms no material rodante mobile, 20 ms no desktop e 150 ms na lista de cidades. Esse indicador é uma simulação de laboratório, não uma medição de usuários reais.

## Rodada adicional — prévia remota Cloudflare

**Endpoint:** `https://5d934aed-new-tractor-website.williandmx.workers.dev`

**Build auditado:** prévia remota final informada com 65 cidades/595 HTML; CSS observado: `site.20260910-minas-v3.css`.

| Rota | Perfil | Performance | Acessibilidade | Práticas | SEO | FCP | LCP | TBT | CLS |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/atuacao/minas-gerais/contagem/material-rodante/` | mobile | 100 | 100 | 100 | 69 | 1,0 s | 1,7 s | 60 ms | 0 |
| `/atuacao/minas-gerais/contagem/material-rodante/` | desktop | 100 | 100 | 100 | 69 | 0,5 s | 0,7 s | 0 ms | 0 |
| `/atuacao/minas-gerais/cidades/` | mobile | 100 | 100 | 100 | 69 | 1,0 s | 1,8 s | 60 ms | 0 |

O preview remoto respondeu `200` nas três rotas e em `/site.webmanifest`, sem `errors-in-console`. O contraste passou nos três cenários (`color-contrast` sem itens reprovados). As únicas reprovações binárias foram os audits `is-crawlable`, causadas pelo `X-Robots-Tag: noindex` esperado do preview.

Achados específicos da prévia remota:

- As oportunidades de entrega de imagens permaneceram em aproximadamente 77 KiB (material mobile), 143 KiB (material desktop) e 66 KiB (cidades mobile).
- O CSS v3 foi classificado como render-blocking; o Lighthouse estimou 120 ms de economia no mobile. A cadeia de dependências refletiu latência pública do preview, chegando a 957 ms para o CSS na amostra mobile da lista de cidades; isso é um resultado de laboratório, não dado de campo.
- O `max-potential-fid` foi 170 ms no material mobile, 50 ms no desktop e 170 ms na lista de cidades. TBT permaneceu baixo (0–60 ms) e CLS ficou em 0.

## Limitações e interpretação SEO

- No preview local, as respostas carregaram `X-Robots-Tag: noindex, nofollow`; na prévia remota, `X-Robots-Tag: noindex`. Em ambos, isso é esperado para preview e mantém o SEO em 69 com `is-crawlable` reprovado. Esses valores não devem ser tratados como o SEO de produção.
- Lighthouse é um teste sintético de uma execução por cenário. Não representa Core Web Vitals de campo, variação de rede/dispositivo ou dados de usuários reais.
- A rodada local aconteceu durante a integração de 64 cidades. A rodada remota auditou o conjunto final de 65, após a inclusão de Timóteo. As notas representam apenas as rotas e perfis medidos, não todas as 595 páginas.
- A auditoria não publicou arquivos, alterou contas ou modificou código/configuração do site.

## Arquivos brutos

- Rodada final pós-correção: `/tmp/nt-minas-lighthouse-final-GDyo2K/contagem-material-mobile.json`
- Rodada final pós-correção: `/tmp/nt-minas-lighthouse-final-GDyo2K/contagem-material-desktop.json`
- Rodada final pós-correção: `/tmp/nt-minas-lighthouse-final-GDyo2K/cidades-mobile.json`
- Baseline para comparação: `/tmp/nt-minas-lighthouse-0SqUa8/`
- Prévia remota: `/tmp/nt-minas-lighthouse-remote-hrkVPe/contagem-material-mobile.json`
- Prévia remota: `/tmp/nt-minas-lighthouse-remote-hrkVPe/contagem-material-desktop.json`
- Prévia remota: `/tmp/nt-minas-lighthouse-remote-hrkVPe/cidades-mobile.json`
