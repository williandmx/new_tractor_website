# Acesso público por buscadores e IA — 10/09/2026

## Decisão e escopo

O usuário pediu acesso para todas as plataformas (OpenAI, Grok, Gemini etc.)
e respondeu “sim” à consulta sobre incluir treinamento. Foi explicitada na
conversa a interpretação: permitir busca, respostas, citações e treinamento
do conteúdo público da New Tractor. Esta política não publica conteúdo
privado nem concede direitos sobre marcas ou materiais de terceiros.

Somente `newtractor.com.br`, sua configuração Cloudflare e o repositório
`williandmx/new_tractor_website` estão no escopo. Nenhuma alteração em outros
clientes, DNS, e-mail, autenticação, Analytics ou Search Console nesta entrega.

## Implementação

- `public/robots.txt`: curinga permissivo e grupos documentados de OpenAI,
  Google, Bing, Apple, Anthropic e Perplexity. Exclusão `/404.html` preservada
  em todos os grupos; sitemap canônico e referência a `llms.txt` mantidos.
- `Google-Extended` e `Applebot-Extended` são controles de uso estendido,
  não a promessa de um novo robô visitando o site.
- Outros agentes usam o curinga. Não foi encontrado token oficial de crawler
  do Grok nas fontes consultadas; nenhum nome como “GrokBot” foi inventado.
- Nenhuma alteração em HTML, CSS, JavaScript, conteúdo comercial ou rotas.

## Cloudflare: estado observado e alterações

Zona conferida no painel: `newtractor.com.br`, ID
`f63acd191eb13c74e3f147fedd609518`. A credencial de publicação local não tinha
permissão para ler Bot Management (403); alterações feitas pela sessão
autenticada do painel, sem criar credenciais ou ampliar permissões.

| Controle | Antes | Depois |
|---|---|---|
| Manage your robots.txt | Set your preference to block training in robots.txt | Disable robots.txt configuration |
| Block AI training bots | Block only on pages with ads | Do not block (allow crawlers) |

Conferência posterior: políticas Search, Agent e Training exibem
`Allow (do not block)`. Todos os 32 controles individuais “Block Crawler”
exibidos em AI Crawl Control estavam desligados; não foram alterados.
AI Labyrinth e Bot Fight Mode já estavam desligados e foram preservados.
WAF gerenciado, proteção DDoS e Browser Integrity Check permanecem ativos.
Não foram criadas exceções amplas baseadas apenas em User-Agent.

A remoção da configuração gerenciada eliminou o prefixo Cloudflare e
`ai-train=no` do arquivo público. Também corrigiu a resposta das variantes
HTTP e `www`: antes retornavam 200 com cabeçalho Location e apenas o bloco
gerenciado; depois passaram a responder 301 para o robots canônico.

## QA e publicação

- `npm run check`: 52 testes aprovados; 595 páginas HTML geradas.
- Testes novos cobrem os agentes explícitos, fallback curinga, exclusão única
  e URL do sitemap. Parser propositalmente limitado ao formato do projeto.
- Preview: `a38ea92a-f280-4f10-86b3-7cc281d505de`, disponível em
  <https://a38ea92a-new-tractor-website.williandmx.workers.dev>.
- Home, robots, sitemap, llms e arquivo 404 do preview: corpo idêntico ao build;
  cabeçalho público `X-Robots-Tag: noindex` confirmado. A plataforma pode
  normalizar o cabeçalho `noindex, nofollow` definido pelo Worker.
- Somente um asset alterado no upload: `/robots.txt`.
- Publicação de produção pelo merge na `main` e Workers Builds; confirmar
  igualdade do robots público com o build após o deploy.
- Sitemaps e URLs não mudaram; não é necessário reenviar o sitemap para esta
  alteração. O envio anterior no Search Console permanece válido.

## Limites e rollback

Permissão não garante rastreamento, treinamento, indexação, posição ou citação.
Teste com User-Agent declarado não comprova acesso a partir dos IPs reais dos
provedores. Relatórios podem levar tempo para refletir nova coleta.

Rollback do site: reverter este PR, sem desfazer alterações alheias. Rollback
da política de Cloudflare: restaurar os dois valores “Antes” na zona indicada;
isso voltaria a restringir treinamento e deve ser uma decisão explícita do
responsável. Não há mudança de DNS a reverter. O checkout original com
alterações locais foi preservado; trabalho realizado em worktree isolado.

## Fontes oficiais consultadas

- [OpenAI — bots](https://developers.openai.com/api/docs/bots)
- [Google — common crawlers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)
- [Apple — Applebot](https://support.apple.com/en-ie/119829)
- [Anthropic — crawler controls](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Perplexity — crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [xAI — Web Search](https://docs.x.ai/developers/tools/web-search)
- [Cloudflare — robots.txt setting](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/)
- [Cloudflare — AI bot policies](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/)

Esta entrega seguiu a skill `build-seo-ai-sites`: conferir o arquivo efetivamente
servido, remover política gerenciada conflitante e manter previews não indexáveis.
