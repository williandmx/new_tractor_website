# Mapa de URLs e migração

## URLs estáveis

| Origem antiga | Destino novo | Observação |
|---|---|---|
| `/?p=470` | `/empresa/` | Empresa |
| `/?p=13` | `/servicos/` | Hub de soluções conforme a regra de migração aprovada |
| `/?p=288` | `/servicos/reforma-cacambas-conchas/` | Reforma |
| `/?p=286` | `/servicos/monitoramento-material-rodante/` | Monitoramento |
| `/?p=477` | `/contato/` | Contato |
| `/fale-conosco` | `/contato/` | Alias textual |
| `/servicos` | `/servicos/` | Normalização de barra |
| `/exposibram-2026` | `/noticias/new-tractor-na-exposibram-2026/` | Conteúdo histórico |

## Regra técnica importante

O arquivo `_redirects` do Cloudflare Pages não diferencia query string para as
URLs `?p=`/`?page_id=` do WordPress. Esses redirects devem ser configurados em
Cloudflare Single Redirects/Bulk Redirects ou em um Worker no corte do domínio.
O `_redirects` continua responsável pelas rotas de caminho e normalização.

## URLs sem equivalente

Páginas de exemplo ou conteúdo vazio (`?p=2`, `?p=43`, `?p=44`) devem retornar
404/410. Não redirecionar tudo para a home, pois isso cria soft-404 e perde a
intenção original.
