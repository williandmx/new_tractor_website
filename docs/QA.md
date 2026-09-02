# Evidências de qualidade — 01/09/2026

## Resultado

- `npm run check`: aprovado.
- 12 documentos HTML gerados: 11 rotas públicas e uma página 404.
- 9 grupos de testes automatizados aprovados.
- 36 combinações de rota e largura inspecionadas entre 360 e 1440 px, sem
  overflow horizontal ou H1 cortado.
- 11 rotas públicas verificadas em 390 px, com um H1, imagens carregadas e
  links internos válidos.
- Menu móvel validado com foco inicial, fechamento por Escape, retorno de foco
  e isolamento do conteúdo subjacente.
- Console do navegador sem erros ou avisos nas rotas amostradas.

## Lighthouse local

| Página e perfil | Performance | Acessibilidade | Boas práticas | SEO | FCP | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Home mobile | 99 | 100 | 100 | 100 | 0,9 s | 2,1 s | 20 ms | 0 |
| Home desktop | 100 | 100 | 100 | 100 | 0,2 s | 0,6 s | 0 ms | 0 |
| Equipamentos mobile | 99 | 100 | 100 | 100 | 0,8 s | 2,0 s | 0 ms | 0 |

Os números são medições de laboratório e não substituem Core Web Vitals de
campo. O preview publicado marcou SEO menor porque o `X-Robots-Tag: noindex,
nofollow` é intencional antes do corte do domínio.

## Validação publicada

- Preview aprovado: `https://f045b7f3.newtractor-site.pages.dev/`.
- Versão estável do Pages: `https://newtractor-site.pages.dev/`.
- Todas as rotas amostradas responderam `200`.
- Uma URL inexistente respondeu `404` real.
- `robots.txt`, `sitemap.xml`, `llms.txt` e `agents.txt` responderam `200`.
- O preview e o endereço `pages.dev` estável retornam `X-Robots-Tag: noindex,
  nofollow`.
- Os canonicals continuam apontando para `https://newtractor.com.br/`, como
  preparação para o corte controlado.

## Limites da evidência

- Não há ainda dados reais de campo do Chrome UX Report.
- Leitor de tela e navegação por tecnologia assistiva dedicada devem ser
  repetidos após o domínio canônico entrar em produção.
- Validação do Search Console, Perfil da Empresa no Google, DNS, e-mail e
  redirects por query string depende do corte do domínio.
