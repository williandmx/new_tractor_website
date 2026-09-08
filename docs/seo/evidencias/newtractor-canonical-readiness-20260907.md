# Readiness de canônicos e indexação — 2026-09-07

Auditoria HTTP somente leitura, com `curl`, em 07/09/2026 (America/Sao_Paulo). Comparei o domínio canônico `https://newtractor.com.br/`, o preview solicitado `https://da1c3cee.newtractor-site.pages.dev/` e o deployment informado como atual `https://e45e49ee.newtractor-site.pages.dev/`.

## Estado observado

### Produção / domínio canônico

- `https://newtractor.com.br/` responde `200` por Apache, mas entrega o WordPress anterior: título `NewTractor`, sem H1 editorial da nova versão e sem a marca “Grupo New Tractor”/hero novo no HTML inicial.
- As rotas prioritárias da nova versão (`/empresa/`, `/parcerias/`, as sete frentes, `/servicos/`, os três serviços existentes, `/guias/` e o guia de Usinagem) respondem `404`. Os aliases de caminho testados (`/rodante`, `/hidraulica`, `/servicos`, `/empresa`, `/fale-conosco` e `/exposibram-2026`) também respondem `404` no host atual.
- `/robots.txt`, `/sitemap.xml`, `/llms.txt` e `/agents.txt` respondem `404` com HTML da hospedagem. Portanto, não há arquivo de descoberta público no domínio canônico atual.
- HTTP e `www` já convergem para HTTPS/apex; `/index.php` responde `301` para `/`.
- Os cinco endereços WordPress com query preservam conteúdo antigo e respondem `200`: `/?p=470` (Empresa), `/?p=13` (Manutenção de material rodante), `/?p=288` (Reforma), `/?p=286` (Monitoramento) e `/?p=477` (Contato). Cada um mantém canonical para a própria URL com query (`https://newtractor.com.br/?p=...`). `/?page_id=470` primeiro converge para `?p=470` e depois continua nessa página antiga.
- A home antiga contém dois IDs públicos distintos de Google Tag Manager no HTML. Não encontrei meta de verificação pública do Search Console/Bing nem um ID de mensuração GA4 identificável no HTML; a ausência não prova o estado de uma propriedade verificada por DNS ou da configuração privada da conta.

### Preview novo

- `da1c3cee`, `e45e49ee` e o host estável `newtractor-site.pages.dev` entregam o mesmo catálogo novo: `200` nas rotas, H1/títulos institucionais e canonical para `https://newtractor.com.br/...`.
- Os arquivos `robots.txt`, `sitemap.xml` e `llms.txt` respondem `200`; o sitemap lista URLs do domínio canônico. `agents.txt` responde `404`.
- Todas as respostas do preview carregam `X-Robots-Tag: noindex, nofollow`. As páginas HTML ainda exibem meta robots `index, follow`, mas o header HTTP prevalece e mantém o preview fora do índice. Isso é o comportamento correto enquanto o domínio canônico não foi cortado.
- Aliases sem barra testados redirecionam em um salto para a rota com barra. Query strings `?p=` no preview servem a home estática `200`, com canonical da home e header de noindex; esse comportamento não substitui redirects de migração no domínio de produção.
- Não encontrei meta de verificação pública nem scripts inline de analytics no preview. O novo HTML deixa a carga do contêiner para o JavaScript após consentimento; a configuração de tags e a propriedade de conversão continuam não verificáveis por HTTP público.

## O que impede indexar a nova versão

A versão nova existe apenas no Pages preview, que está corretamente bloqueado por `X-Robots-Tag`. O domínio canônico ainda aponta para a hospedagem antiga; nele a nova home e todas as novas rotas retornam conteúdo antigo ou `404`, e não há robots/sitemap. Mesmo que o Google rastreie o preview, os canonicals apontam para o host antigo, que não contém as páginas correspondentes. A nova versão só poderá ser indexada depois que o Pages servir o domínio canônico, as rotas retornarem `200`, o header de noindex ficar restrito a `*.pages.dev`, e robots/sitemap estiverem acessíveis no apex.

## Riscos de migração legada

1. **Perda de intenção e sinais dos URLs WordPress:** sem regras antes do corte, os cinco `?p=` continuarão servindo conteúdo antigo enquanto o hosting atual estiver ativo; depois do corte, o Pages tende a servir a home para a query, produzindo `200` genérico/soft-404 em vez do destino equivalente. A tabela de `docs/DEPLOYMENT.md` já mapeia os cinco destinos; implementar regras Cloudflare Single Redirect para `?p=470 → /empresa/`, `13 → /servicos/`, `288 → /servicos/reforma-cacambas-conchas/`, `286 → /servicos/monitoramento-material-rodante/` e `477 → /contato/`, sem preservar a query, antes de trocar DNS.
2. **Novos caminhos hoje quebrados:** links externos para `/empresa/`, `/servicos/`, frentes ou guias recebem `404` no host atual. Após o corte, confirmar `200` em cada URL canônica e `301` dos aliases antigos, com um único salto.
3. **Descoberta e rastreamento:** a ausência atual de `robots.txt`/sitemap deixa o Google sem o catálogo esperado. Após o corte, conferir `200`, `Sitemap: https://newtractor.com.br/sitemap.xml`, 25 URLs indexáveis e nenhum `X-Robots-Tag: noindex` no apex.
4. **Medição inconsistente:** o WordPress atual injeta dois contêineres GTM, enquanto o preview não injeta analytics antes de consentimento. Auditar a propriedade e as tags no GTM, evitar disparos duplicados e validar um CTA após publicação; não assumir que os dados do container antigo medem o novo site.
5. **Verificação de propriedade:** nenhuma prova de verificação está exposta no HTML/arquivos públicos consultados. Confirmar a propriedade `https://newtractor.com.br/` no Search Console por conta/DNS e usar inspeção de URL depois do corte; isso não pode ser inferido pela resposta pública.

## Próximos passos ordenados

1. Antes do DNS: publicar no Pages o build aprovado no projeto correto e configurar as cinco Single Redirect Rules dos `?p=`; validar também `www → apex`, HTTP → HTTPS e aliases de caminho.
2. Fazer o corte preservando MX, SPF, DKIM, DMARC e demais registros de e-mail; manter o `X-Robots-Tag` de noindex somente nos hosts `pages.dev`.
3. Executar uma matriz HTTP pós-corte para a home, sete frentes, `/parcerias/`, serviços, guias, robots, sitemap e llms; cada rota canônica deve responder `200`, ter canonical no apex e não ter noindex.
4. Testar os cinco URLs WordPress com `curl -I -L`: um único `301` até o destino estático, sem query residual. Testar também `/index.php`, aliases e `www`.
5. No Search Console, verificar/inspecionar a propriedade, enviar o sitemap canônico e acompanhar cobertura/redirects. No GTM/analytics, validar consentimento, uma conversão de contato e ausência de duplicação.

Referências operacionais e técnicas: [mapa de URLs](https://newtractor.com.br/), [preview atual](https://e45e49ee.newtractor-site.pages.dev/), [Google sobre redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects), [Google sobre sitemap/robots](https://developers.google.com/search/docs/crawling-indexing/overview) e [Search Console URL Inspection](https://support.google.com/webmasters/answer/9012289).
