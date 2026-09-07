# Mapa de URLs e migração

## Rotas comerciais novas — status local, não publicado

Decisão atualizada em 2026-09-06: a home apresenta o Grupo New Tractor e
as sete frentes abaixo. São rotas de arquitetura de marca, não prova de
entidades jurídicas separadas. `/rodante/` e `/hidraulica/` redirecionam
para os slugs atuais.

| Rota | Nome público | Papel |
|---|---|---|
| `/` | Grupo New Tractor | Home, filme compilado e encaminhamento comercial |
| `/parcerias/` | Parcerias | Apresentação e contatos para clientes, fornecedores e parceiros |
| `/rodantes/` | New Tractor Rodantes | Material rodante, com o filme institucional desta frente |
| `/hidrautractor/` | HidrauTractor | Frente hidráulica; escopo técnico sob avaliação |
| `/usinagem/` | New Tractor Usinagem | Usinagem de componentes pesados |
| `/calderaria/` | New Tractor Calderaria | Caldeiraria e solda |
| `/parts/` | New Tractor Parts | Fabricação e consulta de peças |
| `/services/` | New Tractor Services | Frente integradora; sem promessa de contrato, SLA ou garantia |
| `/techtractor/` | TechTractor | Frente tecnológica em evolução; sem produto pronto ou CTA transacional |

`/servicos/` continua sendo o hub técnico das soluções comprovadas. Não deve
ser substituído, renomeado ou redirecionado para `/services/`: os dois slugs
representam intenções distintas.

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
Cloudflare Single Redirects ou em um Worker no corte do domínio. Bulk Redirects
não aceita query string na origem; não usar uma regra genérica para a home.
O `_redirects` continua responsável pelas rotas de caminho e normalização.

## URLs sem equivalente

Páginas de exemplo ou conteúdo vazio (`?p=2`, `?p=43`, `?p=44`) devem retornar
404/410. Não redirecionar tudo para a home, pois isso cria soft-404 e perde a
intenção original.
