# QA — vínculo com o perfil público no Maps — 08/09/2026

Escopo: URL dos botões de mapa, identidade `sameAs` da base física e data
editorial de Contato. Sem novas rotas, ofertas, avaliações, horários ou filiais.

- `npm run check`: build de 26 páginas e 32 testes aprovados.
- Contato em 360 px e desktop: apresentação inspecionada; dois links Maps
  apontam ao perfil público confirmado por nome, endereço, telefone e domínio.
- Teclado: Tab alcança o atalho inicial e Enter transfere o foco ao `main`.
- Um H1; canonical `https://newtractor.com.br/contato/`; sitemap registra
  `lastmod` de Contato em `2026-09-08`.
- JSON-LD válido: o perfil identifica somente `LocalBusiness` da base de BH.
  Sem `aggregateRating`, `review`, horários ou CNPJ adicionados.
- Lighthouse local, 08/09 às 04:46 UTC: mobile e desktop com performance,
  acessibilidade, boas práticas e SEO em 100. Resultados de laboratório;
  não medem classificação no Google ou aquisição comercial.
- `git diff --check`: aprovado.

O preview e a publicação têm evidência de URL, commit e checks registrada no PR
desta alteração. O host `pages.dev` deve manter `noindex, nofollow`; o domínio
canônico continua no WordPress até o corte autorizado e validado.

O [diagnóstico local](seo/presenca-local-google-2026-09-08.md) distingue a ficha
pública do cadastro duplicado disponível na conta. Nenhuma edição no Google,
solicitação de acesso, avaliação ou mensagem foi enviada.


## Preview e relatório

Preview validado: https://3162019b.newtractor-site.pages.dev/contato/
(commit de aplicação `3d74b921301ca340a73fb46dc061ee2ceede4d2f`).
Quatro verificações de home/Contato em 360 e desktop: HTTP 200, H1/canonical,
JSON-LD e links Maps exatos, ausência de overflow, foco em `main` e headers
`noindex, nofollow`.
[Evidência do preview](seo/evidencias/maps-preview-qa-20260908.json).

Seção 08 do relatório validada nos dois tamanhos: dois links de navegação,
rolagem até a seção, ausência de overflow e Markdown HTTP 200. O servidor local
de relatórios responde 404 para favicon; não houve erro de runtime e isso não
corresponde ao site público.
[Evidência do relatório](seo/evidencias/presenca-local-relatorio-qa-20260908.json).

O primeiro navegador isolado de preview encerrou durante navegação. A tentativa
com diretório temporário longo excedeu o limite do socket do Chromium; a
execução em diretório curto foi concluída. Nenhuma alteração no site foi
necessária para esses problemas do ambiente de teste.
