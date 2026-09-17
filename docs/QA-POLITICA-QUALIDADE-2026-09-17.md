# Política da Qualidade — inclusão institucional

## Pedido, fonte e decisão

Em 17/09/2026, o proprietário pediu incluir no site as informações da placa
anexada. A imagem diz “Política da Qualidade”, embora o pedido mencione
“segurança”. Foi mantida a denominação do documento e a transcrição literal,
registradas em `CONTENT-REVIEW.md` e `source-ledger.md`.

A política foi integrada a `/empresa/#politica-da-qualidade`, após a abertura
institucional, com link HTML no rodapé de todas as páginas. Não foi criada
uma rota separada para um único parágrafo. A fotografia foi usada como fonte,
não como substituto do texto acessível. Não foram inferidas certificações,
normas de segurança, data de aprovação interna ou procedimentos.

## Escopo técnico

- Conteúdo: H2, seção identificada e citação em HTML inicial.
- Estilo: tipografia responsiva, destaque amarelo e área mínima de toque de
  44 px nos links finais do rodapé; CSS versionado para evitar cache antigo.
- SEO: título institucional preservado; descrição inclui a política.
- Descoberta: `/empresa/` passa a `lastmod` e `WebPage.dateModified`
  `2026-09-17`. As demais datas editoriais não mudam pelo novo link global.
- Mantidas 594 URLs indexáveis, 595 documentos incluindo o 404; fragmentos
  não entram no sitemap. O resumo da empresa em `llms.txt` acompanha a descrição.
- Sem mudanças em Worker, DNS, domínio, e-mail, analytics, robots, redirecionamentos,
  imagens, JavaScript, dependências ou configurações de outros clientes.
- O checkout original, com alterações anteriores do usuário, foi preservado.

## Validação pré-publicação

- `npm run check`: build de 595 páginas e 69 testes aprovados.
- Reexecução dos 69 testes após melhoria da área de toque: aprovada.
- `git diff --check`: aprovado.
- Wrangler 4.125.0: validação de upload sem publicação aprovada.
- Revisão editorial independente: texto literal, semântica, metadados,
  fonte e escopo aprovados; recomendação de toque incorporada.
- Preview final: `https://ade8d73c-new-tractor-website.williandmx.workers.dev`.
- Versão: `ade8d73c-1159-4622-9bb8-45ccc00898b7`.
- 594 páginas indexáveis conferidas no preview: status 200, título, canonical,
  H1 único, link da política, CSS atual e header `noindex`.
- 14 arquivos conferidos contra o build: 11 XMLs, `robots.txt`, `llms.txt` e CSS.
- HTML da Empresa conferido com identificadores Googlebot e OAI-SearchBot.
  Isso não é uma inspeção autenticada do Google nem comprova indexação.
- Resultados visuais, Lighthouse e confirmação pós-publicação serão registrados
  no PR da entrega após sua execução, sem estimar métricas.

## Publicação e rollback

Base: `0f1eb0a`, repositório `williandmx/new_tractor_website`.
Fluxo: preview validado → PR/CI → merge → Workers Builds → conferência pública.
Destino: Worker `new-tractor-website`, domínio `https://newtractor.com.br`.
Para rollback desta inclusão, reverter o commit do PR e acompanhar o novo
build, sem alterar DNS ou reescrever histórico. Os endereços dos sitemaps
continuam os mesmos; não se afirma novo envio manual ao Search Console.

O instalador reportou três alertas altos preexistentes em dependências de
desenvolvimento. Nenhuma atualização automática de dependências foi aplicada
nesta alteração editorial.
