# Mapa de URLs e migração

## Rotas comerciais — Pages publicado, domínio oficial ainda pendente

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

Cinco rotas técnicas adicionadas em 07/09/2026, sem substituir URLs existentes:

- `/guias/`
- `/guias/avaliacao-maquinas-linha-amarela/`
- `/guias/inspecao-material-rodante/`
- `/guias/cotacao-pecas-maquinas-pesadas/`
- `/servicos/usinagem-componentes-maquinas-pesadas/`

Cada uma tem normalização 301 de sua versão sem barra em `_redirects`.
O estado de publicação é registrado em `DEPLOYMENT.md`.

Oito rotas adicionadas em 08/09/2026 completam as jornadas setoriais e dois
guias de componentes, preservando as URLs anteriores:

- `/setores/`
- `/setores/mineracao/`
- `/setores/florestal/`
- `/setores/agronegocio/`
- `/setores/construcao-terraplenagem/`
- `/setores/locadoras/`
- `/guias/avaliacao-cilindros-hidraulicos/`
- `/guias/avaliacao-cacambas-conchas/`

Todas normalizam a versão sem barra com 301. O alias proposto
`/setores/locacao-de-equipamentos/`, com ou sem barra, redireciona para
`/setores/locadoras/`; não é outra página indexável. Sitemap e `llms.txt`
usavam as 33 URLs canônicas na etapa PR9; a ampliação abaixo leva o inventário atual a 38.

| Origem antiga | Destino novo | Observação |
|---|---|---|
| `/?p=470` | `/empresa/` | Empresa |
| `/?p=13` | `/servicos/manutencao-material-rodante/` | Revisão de 08/09/2026: preservar título, assunto principal e consultas de manutenção/recuperação |
| `/?p=288` | `/servicos/reforma-cacambas-conchas/` | Reforma |
| `/?p=286` | `/servicos/monitoramento-material-rodante/` | Monitoramento |
| `/?p=477` | `/contato/` | Contato |
| `/fale-conosco` | `/contato/` | Alias textual |
| `/servicos` | `/servicos/` | Normalização de barra |
| `/exposibram-2026` | `/noticias/new-tractor-na-exposibram-2026/` | Conteúdo histórico |

## Regra técnica importante

Revisão de 08/09/2026: os cinco `/?page_id=ID` foram observados fazendo 301
para o `/?p=ID` correspondente no WordPress. Incluir os dois formatos na mesma
regra de destino durante o corte. O ID 13 passa do hub para o serviço específico,
mais fiel ao título e assunto principal; o serviço mantém links para o hub,
monitoramento e reforma. O conjunto anterior permanece no histórico Git.

O pacote de regras para revisão fica em
[`migration/wordpress-single-redirects.json`](migration/wordpress-single-redirects.json).
Ele não foi ativado na zona; aceitar parâmetros adicionais não significa
preservar a query WordPress no destino canônico.

O arquivo `_redirects` do Cloudflare Pages não diferencia query string para as
URLs `?p=`/`?page_id=` do WordPress. Esses redirects devem ser configurados em
Cloudflare Single Redirects ou em um Worker no corte do domínio. Bulk Redirects
não aceita query string na origem; não usar uma regra genérica para a home.
O `_redirects` continua responsável pelas rotas de caminho e normalização.

## URLs sem equivalente

Páginas de exemplo ou conteúdo vazio (`?p=2`, `?p=43`, `?p=44`) devem retornar
404/410. Não redirecionar tudo para a home, pois isso cria soft-404 e perde a
intenção original.


## Rotas acrescentadas na ampliação semântica de 08/09/2026

| Rota canônica | Papel | Variante sem barra |
|---|---|---|
| `/componentes/` | Hub de identificação do material rodante | 301 para a canônica |
| `/componentes/rodas-guia/` | Função, sinais e recuperação da pista | 301 para a canônica |
| `/componentes/roletes-de-esteira/` | Superiores/inferiores, condição e recuperação | 301 para a canônica |
| `/componentes/correntes-sapatas-esteiras/` | Corrente/rosário, articulação e sapatas | 301 para a canônica |
| `/guias/folgas-pinos-buchas-alojamentos/` | Registro de folgas e distinção peça/alojamento | 301 para a canônica |

O sitemap raiz agora é um índice de oito mapas por frente editorial; o conjunto mantém cada uma das 38 URLs indexáveis uma única vez. DNS e Search Console permanecem fora desta entrega.
