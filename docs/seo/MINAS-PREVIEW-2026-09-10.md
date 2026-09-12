# QA pública do preview Minas Gerais — 10/09/2026

## Resultado

Verificação somente leitura concluída em **10/09/2026, 17:00 BRT** no preview:

<https://5d934aed-new-tractor-website.williandmx.workers.dev>

O conteúdo público comparável está idêntico ao `dist` local. Não houve deploy,
alteração de código, acesso a contas ou envio a mecanismos de busca.

## Cobertura

- **595 rotas exportadas** consultadas: 594 indexáveis e `/404.html` não
  indexável.
- **594/594 páginas indexáveis:** HTTP 200 e corpo idêntico ao arquivo
  correspondente em `dist`.
- `/404.html`: HTTP 307 para `/404`, comportamento especial do host de assets;
  não foi comparado como página 200.
- **13 artefatos:** `robots.txt`, `llms.txt`, índice `sitemap.xml` e os 10
  sitemaps filhos; todos HTTP 200 e com corpo idêntico ao `dist`.
- Total: **608 requisições**, **607 HTTP 200**, **1 HTTP 307 esperado**; falhas
  de status ou corpo comparável: **0**.

Os corpos foram comparados após a descompressão automática do fetch. O preview
respondeu com `content-encoding: br` em HTML, sem alteração do conteúdo.

## Proteções e rotas

- Todas as 608 respostas consultadas retornaram `X-Robots-Tag: noindex`.
  O preview não expôs `nofollow` nesse cabeçalho: a plataforma Cloudflare
  normaliza o valor para `noindex`. A proteção contra indexação está confirmada;
  isso não é uma inferência sobre o host de produção.
- O HTML das páginas permaneceu idêntico ao build e conserva o meta-robots de
  produção (`index, follow`); o bloqueio adicional é aplicado no cabeçalho do
  preview.
- Rota inexistente amostrada:
  `/qa-route-definitely-missing-20260910/` → **HTTP 404**, sem `Location`,
  `text/html` e `X-Robots-Tag: noindex`.
- Redirects sem barra, amostras:
  - `/empresa` → **301** `/empresa/`
  - `/atuacao/minas-gerais` → **301** `/atuacao/minas-gerais/`
  - `/contato` → **301** `/contato/`

## Limitações

Esta rodada não substitui QA visual, Lighthouse ou validação de produção; esses
itens dependem do fluxo separado. Não foram testados DNS, Search Console,
Googlebot real, contas ou alterações de infraestrutura. O `X-Robots-Tag`
observado é o valor efetivamente servido pelo preview Cloudflare.
