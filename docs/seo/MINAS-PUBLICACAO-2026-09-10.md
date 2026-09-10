# Publicação e checagem final — Minas Gerais

O PR22 foi mesclado em 10/09/2026, às 20:06:34 UTC, no commit
`c9d7fcaaabcd9957dc1190e7311c27a8f28c921a`. GitHub e Workers Builds concluíram
com sucesso. O domínio oficial passou a servir as 65 cidades e 594 páginas
indexáveis. Nenhuma conta Google, DNS, e-mail ou projeto de outro cliente foi
alterado. O checkout principal com mudanças locais do usuário foi preservado.

## Verificação de produção

- 594 páginas indexáveis: HTTP 200, sem cabeçalho noindex e corpo igual ao build.
- Índice e dez sitemaps filhos, além de llms.txt: HTTP 200 e corpo igual ao build.
- Robots.txt: HTTP 200; o bloco do projeto está presente, incluindo Allow e
  sitemap. A Cloudflare acrescenta regras gerenciadas para alguns robôs e
  sinais de uso de conteúdo. Não é falha de upload e essas preferências não
  foram alteradas. O Google Search permanece permitido.
- URL inexistente: HTTP 404.
- Lighthouse mobile de rodantes em Contagem às 20:07:59 UTC: performance 98,
  acessibilidade 100, boas práticas 100 e SEO 100; LCP 2,0 s, TBT 0 e CLS 0.
  Uma amostra sintética, não métrica de todos os visitantes ou páginas.

## Ajuste complementar de canonicalização

As novas variantes sem barra final retornaram 307 automático do host. O build
agora preserva todos os aliases manuais e gera um 301 para cada rota HTML real
que ainda não possuía regra. Isso inclui as novas rotas e evita manutenção de
centenas de linhas manuais. Um teste impede duplicações e exceder o limite de
2.000 regras estáticas. Não há redirect genérico de URL inexistente para a home.

Fonte técnica: [redirects de Static Assets na Cloudflare](https://developers.cloudflare.com/workers/static-assets/redirects/).
Preview validado antes da integração:
https://53e1d11e-new-tractor-website.williandmx.workers.dev

- 593 variantes sem barra final: HTTP 301 para a rota canônica correta, sem falhas.
- 54 regras manuais e 558 geradas: 612 regras, sem origem duplicada.
- `npm run check`: 49 testes aprovados e 595 arquivos HTML gerados.
- Página canônica, sitemap e robots: HTTP 200; preview protegido com noindex.
- Código revisado de forma independente; regras de WordPress e preferências
  gerenciadas de robots não foram alteradas.

## Retorno à versão anterior

Antes da expansão, a main era `e1d4034b00027a86783ced017f686f957f0ffe2b`.
Caso um rollback seja solicitado, reverter os PRs da expansão pelo fluxo Git e
validar o novo Workers Build; não alterar DNS, domínio ou registros de e-mail.
Não foi executado rollback nesta entrega. Indexação e posicionamento no Google
não são garantidos pelo deploy, pelo sitemap nem pelas notas de laboratório.
