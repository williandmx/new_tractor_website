# QA — aplicações e território de Minas Gerais

Código validado: `de21bb3e48b3b132fafd9a0eb00a2a593a1b17b7`. Baseline: `ef32c45`. [PR11](https://github.com/williandmx/new_tractor_website/pull/11).

Preview: [https://db3b3d8e.newtractor-site.pages.dev](https://db3b3d8e.newtractor-site.pages.dev). Conferência HTTP em 2026-09-08T10:39:43.095874+00:00: 55 recursos aprovados, conteúdo igual ao build e `noindex, nofollow` preservado.

- `npm run check`: 34 testes passaram; build de 43 HTMLs, incluindo 404, e 42 URLs canônicas indexáveis no código.
- 10 sitemaps filhos sob um índice, sem duplicação ou URL inexistente; llms usa o mesmo inventário.
- 56 cenários em 14 rotas alteradas: 360/1365 px, JavaScript ligado/desligado. Sem erros ou avisos.
- Após a última revisão de Minas Gerais, mais 4 cenários na rota, sem erros ou avisos.
- Teclado em sete rotas: três equipamentos, Minas Gerais, hub Equipamentos, HidrauTractor e Atuação.
- Artigos das três aplicações com datas, autoria, imagem e Breadcrumb; metadados e links conferidos pelo build. Nenhum novo estabelecimento ou Service hidráulico adicionado.

| Lighthouse 13.4.1 local | Desempenho | Acessibilidade | Boas práticas | SEO | LCP |
|---|---:|---:|---:|---:|---:|
| carregadeiras-mobile | 99 | 100 | 100 | 100 | 2.10s |
| escavadeiras-mobile | 98 | 100 | 100 | 100 | 2.40s |
| minas-desktop | 100 | 100 | 100 | 100 | 0.52s |
| minas-mobile | 98 | 100 | 100 | 100 | 2.40s |
| tratores-mobile | 97 | 100 | 100 | 100 | 2.55s |

As notas são medições de laboratório, com throttling padrão da ferramenta conforme mobile/desktop. Não equivalem a dados reais de usuários ou posição no Google.

## Escopo e limites

Conteúdo e aplicação foram validados. O host pages.dev permanece sem indexação por instrução do projeto. DNS, Search Console, perfis de empresas, mensagens a terceiros e novas promessas comerciais não foram alterados. O escopo detalhado da HidrauTractor segue pendente da confirmação factual do proprietário.

## Rollback

A base anterior é `ef32c45` e o deployment anterior é `3dcf56fe-a280-4f68-a8eb-9f1c33522c88`. Para desfazer esta rodada, reverter o merge do PR11 por novo commit e validar o build; não reescrever a main. Sem rollback de DNS, pois não houve alteração.

Os dados de QA e pesquisa completos estão em `docs/seo/dados/validacao-aplicacoes-territorio-2026-09-08.json` e `docs/seo/dados/aplicacoes-territorio-mcp-2026-09-08.json`.

## Lighthouse no preview e relatório

A página `/atuacao/minas-gerais/` no preview Cloudflare foi auditada em mobile: desempenho 100, acessibilidade 100, boas práticas 100, SEO 69. A falha da categoria SEO é `is-crawlable`, devido a `X-Robots-Tag: noindex, nofollow`, intencional e preservado no pages.dev. Resultado diferente do HTML local indexável; não remover a proteção para melhorar a nota.

Relatório HTML: 83 termos visíveis sem JavaScript; filtros por escavadeira, trator, acentos, vazio e reset; larguras 360/375/768/1024/1365 e teclado verificados. Tabelas rolam em seus próprios contêineres. Nenhuma métrica de ranking ou receita foi derivada dessas notas.

## Revisão final da aplicação

Código final: `834b1c509849cd12e7c30c0bb699e261d9c087cd`. A bateria de 34 testes passou novamente. ItemList de Equipamentos foi conferido contra os cinco cartões; datas dos três Article fixadas. Mais oito cenários de navegação (Minas Gerais e hub Equipamentos, 360/1365, JS/noJS) sem erros, após os ajustes de referências. As auditorias Lighthouse e os 55 recursos registrados acima pertencem a de21bb3; a revisão altera o ItemList e acrescenta referência Gerdau no fim da página, sem CSS, JS ou ativos novos. A validação do preview final fica no JSON de QA.

Preview do código final 834b1c5: [4cdf6dee](https://4cdf6dee.newtractor-site.pages.dev), conferido em 2026-09-08T10:48:54.204139+00:00. Os 55 recursos retornaram HTTP 200, idênticos ao build, com noindex/nofollow preservado.
