# HidrauTractor: recuperação e fabricação de cilindros hidráulicos

**Data:** 08/09/2026 · **Status:** implementação, QA local e preview validados.
Entrega e histórico de merge: [PR 12](https://github.com/williandmx/new_tractor_website/pull/12).

## Decisão de escopo

O proprietário confirmou em 08/09/2026 que a HidrauTractor executa recuperação e
fabricação de cilindros hidráulicos. Essa confirmação supera a pendência
registrada nas revisões anteriores. O site passa a oferecer dois caminhos de
entrada, sem transformar parâmetros de projeto em promessa geral:

- `/hidrautractor/recuperacao-cilindros-hidraulicos/`: cilindro em uso, condição
  encontrada, recuperação de componentes, novas vedações, montagem e ensaios;
- `/hidrautractor/fabricacao-cilindros-hidraulicos/`: novo conjunto, aplicação,
  projeto, materiais, usinagem, montagem e critérios de aceitação.

O hub `/hidrautractor/` apresenta os dois caminhos lado a lado. A rota de
recuperação parte da peça existente e pode encaminhar para fabricação quando a
condição ou a aplicação exigir; a rota de fabricação começa pela função,
fixação, curso, carga, pressão, fluido e ambiente informados pelo solicitante.
Os dois percursos são avaliados por peça e aplicação, com base em Belo
Horizonte e logística definida por demanda.

## Fluxo público de seis etapas

| Recuperação | Fabricação |
|---|---|
| 1. Receber e diagnosticar | 1. Especificar a aplicação |
| 2. Desmontar e medir | 2. Definir projeto e materiais |
| 3. Definir o reparo | 3. Fabricar os componentes |
| 4. Recuperar os componentes | 4. Acabar e conferir |
| 5. Montar com novas vedações | 5. Limpar e montar |
| 6. Testar e preparar a entrega | 6. Ensaiar e identificar |

As rotas detalham o fluxo em HTML acessível, com navegação interna, cards de
aplicação para escavadeiras, tratores de esteira e pás carregadeiras, perguntas
frequentes e entrada de orçamento por e-mail, WhatsApp e telefone publicados.
O pedido orienta o visitante a enviar máquina, aplicação, identificação, estado
da peça, desenho/código/amostra ou fotos, cidade e prioridade.

Na recuperação, os detalhes explicam metrologia, camisa e brunimento, haste e
revestimento, vedações, montagem e testes. Na fabricação, explicam a
especificação da aplicação, camisa/haste e materiais, pistão/guia/tampas/
fixações, montagem, ensaios e identificação. Pressão de ensaio, material,
acabamento, tolerância, critério de aceitação, capacidade, prazo, garantia e
logística devem ser definidos na proposta e no escopo da peça. Não há parâmetro
universal, incluindo fator de pressão 1,5 ou valor de rugosidade genérico.

## Imagens e prova visual

Foram extraídos frames reais dos originais da pasta `Midia`, autorizados pelo
proprietário para o site, em versões WebP 640 × 360 e 1280 × 720:

- `hidrau-recuperacao-{640,1280}.webp`: fonte `Midia/TARDE/C3757.MP4`,
  frame 00:01.20; operador e componente cilíndrico em máquina;
- `hidrau-fabricacao-{640,1280}.webp`: fonte
  `Midia/TARDE/TARDE-20260310T184028Z-1-001/TARDE/C3817.MP4`, frame
  00:01.20; peça cilíndrica presa em torno.

O helper publica `width`, `height`, `alt`, `sizes` e `srcset`. As legendas
identificam contexto industrial; não identificam essas peças como cilindros
hidráulicos específicos nem usam a foto como resultado de ensaio. Os arquivos
originais e filmes preexistentes permanecem preservados. Origem, derivação e
limites estão em [ASSET-PROVENANCE](../ASSET-PROVENANCE.md).

## Evidência de busca

O JSON em [dados/hidrautractor-servicos-2026-09-08.json](dados/hidrautractor-servicos-2026-09-08.json)
preserva três chamadas Ubersuggest MCP somente leitura: duas consultas de
`match_keywords` em Brasil/português (`locId=2076`) e uma `serp_analysis` em
Belo Horizonte/MG (`locId=1001566`). Entre seis sementes, três retornaram
volume estimado Brasil: 40 para “fabricação de cilindros hidráulicos”, 30 para
“recuperação de cilindros hidráulicos” e 10 para “brunimento de cilindros
hidráulicos”. As três restantes não têm campo de volume; isso não é zero. Uma
sugestão relacionada foi retornada com volume 0. A consulta nacional não mede
Minas Gerais, profissão, setor, cliente ou conversão.

A SERP de Belo Horizonte para “fabricação de cilindros hidráulicos” foi marcada
`newData=true` e `updated_at=2026-09-08`. O retorno contém 10 entradas orgânicas,
3 do pacote local e 1 vídeo. Os campos de posição são ordinais da resposta que
inclui recursos da SERP; não são promessa de ranking orgânico estável. Os
resultados de Wernek, ABV Hidráulica, Global HP, Motion HP, BR Hidráulica,
Hidralpress, Huade, Central Projetec e Eurohydraulics são referências de
vocabulário e contexto, não transferência de processos, escala ou qualidade ao
Grupo New Tractor.

## Normas como referência técnica

As referências oficiais usadas para a redação são: [ISO 10100:2020](https://www.iso.org/standard/75271.html),
ensaios de aceitação e funcionamento; [ISO 6020-1:2007](https://www.iso.org/standard/40298.html),
[ISO 6020-2:2015](https://www.iso.org/standard/61339.html) e
[ISO 6022:2006](https://www.iso.org/standard/36109.html), séries dimensionais e
montagem; [ISO 4413:2010](https://www.iso.org/standard/44781.html), regras e
segurança de sistemas hidráulicos; [ISO 4406:2021](https://www.iso.org/standard/79716.html),
código de contaminação do fluido; e [ABNT NBR ISO 10100:2022](https://www.dinmedia.de/en/standard/abnt-nbr-iso-10100/360298770),
edição brasileira identificada no catálogo público.

Essas normas descrevem referências técnicas aplicáveis quando escolhidas para o
projeto; não certificam a empresa, não definem sozinhas material ou pressão de
ensaio e não substituem desenho, especificação, registros ou requisitos
contratuais. A NBR 13444 é uma referência dimensional específica para cilindros
de haste simples da série 250 bar, não uma regra geral para toda recuperação ou
fabricação.

## Limites de publicação

A confirmação do proprietário autoriza as duas ofertas. O atendimento de cada
peça continua sujeito a avaliação técnica e comercial. Não foram publicados
estoque, capacidade máxima de máquina, prazo, garantia, certificação, equipe
residente, coleta local ou resultado de ensaio antes da especificação.

## Antes e depois na main

Referência anterior: commit `9f6137c` (PR 11). Código desta entrega:
`832b5186e8b4d7de7c0ccb42f08ffc397395f66a` (PR 12).

| Aspecto | Antes | Implementação desta entrega |
|---|---|---|
| Oferta hidráulica | Entrada de consulta, sem confirmação das duas ofertas | Recuperação e fabricação explicitadas pelo proprietário |
| Destinos comerciais específicos | Nenhum para esses dois serviços | Duas páginas com intenção própria |
| Processo e contratação | Orientações de identificação do componente | Dois fluxogramas, detalhes expansíveis e roteiros de orçamento por serviço |
| Busca por máquina | Guias de cilindros por equipamento | Guias conectados diretamente aos serviços da HidrauTractor |
| Descoberta | 42 URLs, 10 sitemaps; Hidrau com 2 URLs | 44 URLs, 10 sitemaps; Hidrau com 4 URLs |

A seleção das duas intenções usa as consultas Ubersuggest e a oferta confirmada.
A implementação cria destinos comerciais para termos encontrados na pesquisa;
não demonstra aumento de ranking ou tráfego. Esses resultados exigem publicação
indexável, rastreamento, observação posterior e medição de consultas e contatos.
DNS e Search Console permanecem fora deste escopo.

## Correções de referência técnica

[ISO 6158](https://www.iso.org/standard/72269.html) é referência de cromo de
engenharia; [ISO 4525](https://www.iso.org/standard/36754.html) trata revestimento
decorativo sobre plásticos e não foi usada como norma da haste. HVOF é aspersão
térmica ([Oerlikon](https://www.oerlikon.com/metco/en/solutions-technologies/technology/thermal-spraying-processes/high-velocity-oxygen-fuel-spray/)); não foi anunciado como soldagem ou instalação própria.
A referência pública para tubos é [DIN EN 10305-4](https://www.dinmedia.de/en/standard/din-en-10305-4/251709296), conforme o produto especificado.

## Validação local

`npm run check`: build, sintaxe e 34 testes aprovados. As 44 páginas foram
verificadas em 176 navegações, 360/1365 px, com e sem JavaScript; nenhum erro
ou aviso. Após refinar contraste e âncoras das duas páginas novas, mais oito
cenários passaram. Seis cenários em 360/768/1365 px verificaram fluxo,
cabeçalho, teclado dos detalhes e roteiro de e-mail específico por serviço.

| Lighthouse local | Desempenho | Acessibilidade | Boas práticas | SEO |
|---|---:|---:|---:|---:|
| HidrauTractor, mobile | 99 | 100 | 100 | 100 |
| Recuperação, mobile | 97 | 100 | 100 | 100 |
| Fabricação, mobile | 100 | 100 | 100 | 100 |
| Recuperação, desktop | 100 | 100 | 100 | 100 |

Evidência compacta: [dados/hidrautractor-qa-2026-09-08.json](dados/hidrautractor-qa-2026-09-08.json).
Scores são de laboratório; não medem ranking ou resultados de clientes.

## Preview validado e publicação

Preview do código `832b518`: [HidrauTractor na Cloudflare](https://1c533714.newtractor-site.pages.dev/hidrautractor/).
Foram verificados 57 recursos: 44 páginas, dez sitemaps segmentados, índice,
robots.txt e llms.txt. Todos HTTP 200 e idênticos ao build local. As três rotas
hidráulicas passaram em 12 cenários de navegador, com/sem JavaScript e
mobile/desktop, após carregamento completo do CSS.

Os dois endereços novos sem barra retornaram 301 para a forma canônica. As
imagens têm cache de 30 dias; CSS versionado tem cache de um ano e immutable.
Googlebot e OAI-SearchBot recebem o conteúdo completo em HTML. O host Pages.dev
preserva `X-Robots-Tag: noindex, nofollow`, conforme o projeto. Isso limita a
indexação desse host; o trabalho não alterou DNS ou Search Console.

GitHub Actions aprovou o build e os 34 testes do código em
[34231948629](https://github.com/williandmx/new_tractor_website/actions/runs/34231948629).
O check Cloudflare Pages confirmou o deployment
`1c533714-c5ef-4f93-a5a4-06d1115af855`. A revisão documental seguinte não altera o
site gerado. O merge da PR 12 aciona o deploy de produção integrado ao Git;
a conferência final deve comparar o host de produção com este mesmo build.

Rollback de código: reverter o merge da PR 12 e validar o deploy resultante.
Referência anterior de produção: commit `9f6137c`, deployment
`4bd77a18-6dcb-41c1-b96a-c5ecd2da1700`. Nenhuma migração de DNS está envolvida.
