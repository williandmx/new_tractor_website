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
| `/hidrautractor/` | HidrauTractor | Hub de recuperação e fabricação de cilindros; avaliação por peça/aplicação |
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
# Rotas acrescentadas — aplicações e Minas Gerais, 08/09/2026

| Canônica | Intenção e conteúdo | Entrada HTML | Sitemap |
|---|---|---|---|
| `/equipamentos/escavadeiras/` | Cilindros de lança, braço e caçamba; identificação, condição e encaminhamento | Equipamentos, HidrauTractor, guia de cilindros e MG | equipamentos |
| `/equipamentos/tratores-de-esteira/` | Cilindros da lâmina, movimentos e ripper conforme configuração; separar agrícola | Equipamentos, HidrauTractor, guia de cilindros e MG | equipamentos |
| `/equipamentos/pas-carregadeiras/` | Elevação, inclinação e direção; ligação com caçamba e estrutura | Equipamentos, HidrauTractor, guia de cilindros e MG | equipamentos |
| `/atuacao/minas-gerais/` | Operação, componente e logística em quatro contextos mineiros | Atuação, sete frentes, Equipamentos e novas aplicações | atuacao |

As versões sem barra final redirecionam com 301 para as canônicas acima. Não há rotas municipais em massa, redirecionamentos por palavra-chave ou mudança de domínio/DNS nesta ampliação.

## Rotas hidráulicas acrescentadas — 08/09/2026

| Rota canônica | Intenção e conteúdo | Entrada HTML | Sitemap |
|---|---|---|---|
| `/hidrautractor/recuperacao-cilindros-hidraulicos/` | Recuperação de cilindro em uso: avaliação, metrologia, componentes, montagem e ensaios por escopo | Hub HidrauTractor, guia de cilindros, Equipamentos e Contato | hidrautractor |
| `/hidrautractor/fabricacao-cilindros-hidraulicos/` | Fabricação de novo cilindro: aplicação, projeto, materiais, usinagem, montagem e aceitação por escopo | Hub HidrauTractor, guia de cilindros, Equipamentos e Contato | hidrautractor |

As duas rotas são novas URLs indexáveis e suas variantes sem barra final
redirecionam com 301. Em relação à main `9f6137c` (42 URLs indexáveis), o
inventário passa a 44; o mapa HidrauTractor passa de 2 para 4, mantendo dez
sitemaps no índice raiz. Não são aliases de `/servicos/` nem páginas municipais.
O proprietário confirmou a recuperação e a fabricação em 08/09/2026; material,
pressão, tolerância, critérios de ensaio, capacidade, prazo, garantia e logística
continuam sujeitos à avaliação e ao escopo de cada peça.

## Consolidação das entradas propostas em 08/09/2026

Os caminhos propostos na branch `feat/servicos-oferta-descoberta-20260908` não
chegaram a gerar páginas. A revisão cria aliases 301, com e sem barra final:

| Caminho proposto | Destino canônico |
|---|---|
| `/servicos/cilindros-hidraulicos/` | `/hidrautractor/` |
| `/servicos/inspecao-manutencao-campo/` | `/services/` |
| `/servicos/caldeiraria-linha-amarela/` | `/calderaria/` |

Os cards usam diretamente os destinos canônicos. Os aliases não entram no
sitemap nem no `llms.txt`; mantêm-se 44 URLs indexáveis e dez sitemaps.

## Expansão autorizada em Minas Gerais — 10/09/2026

As 44 rotas anteriores são preservadas. Para `N` municípios selecionados em
`src/minas-cities.mjs`, acrescentam-se `8N + 30` rotas:

| Padrão canônico | Papel | Mapa |
|---|---|---|
| `/atuacao/minas-gerais/cidades/` | Diretório regional navegável | atuação |
| `/atuacao/minas-gerais/{cidade}/` | Contexto e sete especialidades | atuação |
| `/atuacao/minas-gerais/{cidade}/{especialidade}/` | Escopo e consulta por origem da demanda | respectiva especialidade |
| `/{empresa}/setores/{setor}/` | Sete especialidades × quatro setores | respectiva especialidade |
| `/setores/industrial/` | Nova entrada de aplicação industrial | grupo |

Os slugs públicos das especialidades são `material-rodante`,
`cilindros-hidraulicos`, `usinagem`, `caldeiraria`, `pecas-sob-demanda`,
`servico-de-campo` e `tecnologia-manutencao`. O nome de marca **Calderaria** e a
rota de empresa `/calderaria/` permanecem; o slug local usa a grafia do serviço.

O índice continua com dez sitemaps, sem URLs duplicadas. As novas rotas usam
barra final, canonical próprio e são alcançáveis por links HTML. Não se criam
aliases por combinação de palavra-chave nem o cruzamento triplo cidade ×
especialidade × setor. O host de preview permanece não indexável.
