# Benchmark MCP do Grupo New Tractor — frentes e contextos

**Data de observação:** 08/09/2026, 07:17–07:35 UTC (04:17–04:35 em
Belo Horizonte) · **Fonte:** Ubersuggest MCP · **idioma:** português · **bases:**
Brasil (`locId=2076`) e Belo Horizonte, Minas Gerais, Brasil (`locId=1001566`).
Os dados completos, inclusive as linhas não selecionadas nesta leitura, estão em
[benchmark-mcp-grupo-2026-09-08.json](benchmark-mcp-grupo-2026-09-08.json).

## O que foi consultado

Foram concluídas 36 chamadas somente leitura, com uma tentativa adicional que
falhou no transporte e foi repetida: dez `domain_keywords` (até 30 linhas
por domínio), sete `domain_top_pages` (até dez páginas por domínio), sete grupos
de `keyword_suggestions` com três sementes cada em Belo Horizonte, sete
`serp_analysis` em Belo Horizonte e cinco grupos de `keyword_suggestions` por
contexto em Brasil. A cobertura de domínio trouxe 165 linhas de palavras-chave,
36 páginas, 21 sementes de frente e uma sugestão relacionada, além de 104
entradas de SERP, 15 sementes setoriais e 334 sugestões relacionadas setoriais
(com limites do provedor). A tentativa florestal que falhou e o retry
bem-sucedido permanecem registrados. O arquivo JSON conserva argumentos,
horários e respostas estruturadas; não conserva texto de conta, token ou
cabeçalho.

A consulta de localização confirmou Brasil (`2076`) e Belo Horizonte
(`1001566`). A geografia nacional dos relatórios de domínio não é ranking de
Minas Gerais. As sementes locais têm `updated_at` de **06/03/2026**: essa é a
data exibida pelo indicador, não a data da coleta. As sementes setoriais são
Brasil, não Belo Horizonte, e têm datas heterogêneas (2025, março, julho e
setembro de 2026); algumas linhas não têm `volume` ou `updated_at`. As sete SERPs
locais têm `updated_at` **08/09/2026** e `newData=true`.

Os números são estimativas do fornecedor. `traffic` de `domain_keywords` e de
`domain_top_pages` são campos de endpoints diferentes e não devem ser somados.
Na Minusa, por exemplo, a linha de `material rodante` mostra tráfego estimado 15,
enquanto a Top Pages mostra 1 para a URL correspondente; os dois valores foram
preservados. Os campos `cpc` e `cpcDollars` também não foram comparados nem
convertidos. “Outdated”, quando existente em outras bases, não foi tratado como
nova métrica. O painel não informa profissão, empresa, setor, conversão ou
cliente de quem pesquisa.

## Matriz de cobertura por frente

| Frente | Domínios e papel | Evidência MCP observada | Decisão editorial segura |
|---|---|---|---|
| **HidrauTractor** | [Hidraucron](https://hidraucron.com.br/) como referência de hidráulica e serviço local | 20 keywords e 5 Top Pages. `bh cromo` apareceu na posição exibida 7, V170, tráfego estimado 5, na página [Cromo Duro](https://www.hidraucron.com.br/servicos/cromo-duro/8); `cromagem em bh`, posição 26, V210, tráfego 1, na mesma URL. A SERP BH de recuperação mostrou Hidraucron e Chrome Service no pacote local e [Cilíndrica](https://cilindrica.com.br/reparo-cilindro-hidraulico-belo-horizonte) no ordinal 4 orgânico exibido. | A consulta mostra vocabulário local para serviço hidráulico, mas não comprova cilindros, cromo, testes ou capacidade do Grupo. Separar recuperação, fabricação e vedação somente após validação técnica. |
| **Rodantes** | [Minusa](https://minusa.com.br/), [ITR](https://itrsa.com.br/) e [Tem Trator](https://temtrator.com.br/) como fabricante/distribuidores e referência de componentes | Minusa: `material rodante`, posição 7, V320, T15, e `roda guia`, posição 8, V320, T14. ITR: `medição de material rodante`, posição 3, V10, T3, em [kit de medição](https://itrsa.com.br/site/kit-de-medicao-de-material-rodante-itr/). Tem Trator: `material rodante`, posição 30, V320, T0, em `/materialrodante/`. A SERP BH exibiu CMR, Rodan e New Tractor no pacote local; pacote local não é ranking orgânico nem comprovação de lead. | Priorizar taxonomia de componente, identificação, condição, medição e consulta. A diferença Minusa keyword/Top Pages impede usar tráfego como resultado comercial. |
| **Usinagem** | [Açomec](https://www.acomec.ind.br/) e [IC Torneamentos](https://ictorneamentos.com.br/) como referências de usinagem; Modelaço é referência industrial adjacente | Açomec retornou `noData` no Brasil. IC trouxe somente `ic usinagem` e `ic usinagem industrial`, ambas de marca, V140, posições 12 e 21. A semente BH `usinagem belo horizonte` marcou V20 e `mandrilhamento` V10, com data do indicador em março. | A página própria deve começar pelo problema da peça e pedir desenho, medidas, material conhecido e aplicação; não publicar capacidade, tolerância, prazo ou máquina sem matriz técnica. |
| **Calderaria** | [Modelaço](https://modelaco.com.br/) como referência industrial de corte, aço e implementos; o benchmark não trata suas linhas como equivalentes ao Grupo | `corte e dobra de chapas`, posição 4, V1600, T496, e `caçamba rollon`, posição 13, V1300, T57. As páginas de telhas e roll-on/off dominam parte do conjunto. Em BH, `reforma de caçambas` V10, `caldeiraria pesada` V10 e `reforma de conchas` V0. A SERP BH mistura locadoras de caçambas/resíduos no pacote local e empresas de reforma nos ordinais 6–16. | Manter foco na reforma de caçambas/conchas já documentada. Não importar Hardox, corte e dobra, soldagem, ensaio, materiais ou capacidades da Modelaço. |
| **Parts** | [Grupo LPR](https://grupolpr.com.br/) como referência de peças; Tem Trator e ITR como catálogos/distribuidores | LPR teve apenas três keywords de marca e a home com tráfego 0, embora backlinks/refdomains apareçam no endpoint. Tem Trator trouxe `peças para trator`, posição 31, V1300, T2, e `material rodante`, posição 30, V320, T0. ITR trouxe páginas por marca, como `peças cat` posição 11, V720, T6, e `peças jcb` posição 14, V260, T4. A SERP BH de `peças para escavadeira` mostrou TEOMAQ, Clemaq e PEMAC no pacote local e Escava Peças no ordinal orgânico 4. | Receber código, desenho, aplicação e quantidade. Fichas por marca, estoque, equivalência OEM e pronta-entrega exigem comprovação própria. |
| **Services** | [Sotreq](https://sotreq.com.br/) como referência OEM de rede/campo | As 30 linhas da Sotreq são majoritariamente marca, filiais e carreira: `sotreq contagem` V6600 e `sotreq vagas` V5400, por exemplo. As Top Pages também são home, carreira e filiais. A SERP BH de `manutenção de máquinas pesadas` mistura pacotes locais de treinamento/serviço e resultados educacionais. | Usar `/services/` para intake de avaliação e medição, explicando cidade, acesso, componente e logística. Não tratar marca, vaga ou curso como lead de manutenção nem prometer mobilização, SLA ou equipe residente. |
| **TechTractor** | [Trackunit](https://trackunit.com/) como referência de tecnologia; ITR, Cat e a página legada New Tractor aparecem na SERP, não como equivalentes comerciais | Trackunit retornou `noData` no Brasil. A SERP BH de `monitoramento de material rodante` mostrou ITR em ordinal exibido 5, `newtractor.com.br/?p=286` em ordinal 6, e sensor Cat em ordinal 13, entre AI/PAA/vídeo e outros recursos. | Preservar o redirecionamento do endereço legado `?p=286` para a rota atual de monitoramento, quando aplicável. Apresentar registro e histórico em evolução; não anunciar plataforma, sensores, API, login ou diagnóstico automático. |

As posições acima são as posições exibidas pelo endpoint. Quando há AI Overview,
PAA, vídeo, pacote local ou imagens, o ordinal inclui esses recursos; não é
ranking orgânico universal. O JSON mantém literalmente entradas `NODOMAIN` e
URLs de recursos do provedor para preservar a resposta; elas não são URLs
publicáveis nem devem virar links no HTML.

## Sete SERPs locais úteis

### `material rodante`

A SERP de Belo Horizonte exibiu AI Overview e imagens antes do primeiro
resultado orgânico. O pacote local mostrou CMR Trator Peças, Rodan Serviços e
New Tractor; a sequência orgânica incluiu Engepeças no ordinal 3, ITR no 8,
GHT no 9 e Minusa no 10, além de artigos e lojas. O resultado local da New
Tractor é uma presença observada no pacote da consulta, não prova de ranking
orgânico, clique, lead ou cobertura fora da base comprovada.

### `recuperação de cilindros hidráulicos`

O pacote local exibiu Hidraucron, Chrome Service e um perfil do Instagram; a
Cilíndrica apareceu no ordinal orgânico 4, seguida por páginas de recuperação da
Modrali, Olivertech, Krome, Vedacil e Bertech. O padrão confirma uma intenção
local de recuperação e separa essa intenção de uma busca genérica por hidráulica.
Ele não autoriza atribuir ao Grupo os processos, testes, fabricação ou
capacidade publicados por essas empresas.

### `reforma de caçambas`

Os três primeiros itens foram perfis locais de empresas de caçamba; a SERP
orgânica incluiu uma página de resíduos de reformas no ordinal 4, PV Truck no 6,
MGL Processos e Montagens no 7, Nimsay no 11, Renovar Carretas no 12 e JRL no
15. A consulta mistura caçamba de entulho, basculante e equipamentos; a rota do
Grupo deve manter o recorte de caçambas/conchas de máquinas pesadas já
documentado.

### `peças para escavadeira`

O pacote local exibiu TEOMAQ, Clemaq e PEMAC. Entre os orgânicos, Escava Peças
apareceu no ordinal 4, Tratoraço no 5, GHT no 6, JNL no 7, Usaparts no 8 e
TEOMAQ no 9; imagens apareceram no 10. Isso dá exemplos de navegação por
componente e aplicação. Não é evidência de estoque, compatibilidade universal ou
autorização OEM para Parts.

### `mandrilhamento`

A SERP de Belo Horizonte mostrou AI Overview no primeiro recurso, um artigo
educativo da Cadium no ordinal 2, UsiTob no 5, um PDF no 6, Fuser do Brasil no 7,
Wikipedia no 8, imagens no 9, DCN Usinagem no 10, Precismec no 11, RV Metalúrgica
no 13, vídeo no 14 e Scribd no 15. Isso sugere que uma página autoral pode
combinar definição curta, aplicação em componente pesado, dados para avaliação e
CTA de peça/desenho. Os resultados de terceiros são referências de formato e
vocabulário; não comprovam oferta, qualidade ou capacidade da New Tractor.

### `monitoramento de material rodante`

Além de AI Overview, PAA e vídeo, a SERP mostrou ITR (indicadores) no ordinal 5,
a página legada da New Tractor `/?p=286` no 6, Cat (sensor de desgaste) no 13,
Revista M&T no 10 e outros resultados de medição, manutenção e componentes. O
resultado legado confirma uma intenção histórica da própria marca; deve ser
preservado por redirect e substituído por conteúdo atual equivalente. O ordinal 6
não deve ser descrito como “posição 6 orgânica” sem separar os recursos da SERP.

### `manutenção de máquinas pesadas`

O primeiro item é AI Overview; os itens 2–4 são pacote local: treinamento 3X
Mais, Max Máquinas e Minas Terra Treinamento. A lista orgânica inclui Sem
Machinery no ordinal 5,
um material educacional no 7, Querobolsa no 9, Anglo Cursos no 10, Tracbel no
11, SENAI Goiás no 12 e outros cursos ou fabricantes. A consulta ampla mistura
serviço, treinamento e carreira; a página Services deve qualificar equipamento,
componente, condição, local e tipo de avaliação antes de falar em atendimento.

## Belo Horizonte: sementes ainda exploratórias

As sete chamadas locais de `keyword_suggestions` usaram três sementes por frente.
Os resultados abaixo são estimativas antigas do indicador, de março, e não
volume atual nem prova de ausência de demanda:

| Frente | Sementes consultadas | Volume BH exibido |
|---|---|---|
| Rodantes | `material rodante`; `roda guia escavadeira`; `manutenção material rodante` | 10; 10; 10 |
| HidrauTractor | `cilindro hidráulico`; `recuperação de cilindros hidráulicos`; `cilindro hidráulico escavadeira` | 70; 10; 10 |
| Usinagem | `usinagem pesada`; `mandrilhamento`; `usinagem belo horizonte` | 10; 10; 20 |
| Calderaria | `reforma de caçambas`; `reforma de conchas`; `caldeiraria pesada` | 10; 0; 10 |
| Parts | `peças para escavadeira`; `peças linha amarela`; `peças para máquinas pesadas` | 10; 10; 10 |
| Services | `manutenção de máquinas pesadas`; `manutenção escavadeira`; `manutenção máquinas pesadas em campo` | 10; 10; 0 |
| TechTractor | `inspeção de máquinas pesadas`; `monitoramento de material rodante`; `gestão de manutenção máquinas pesadas` | 0; 0; 0 |

Uma sugestão relacionada foi `cilindro enerpac` (V10), que é marca/produto
específico e deve ser evitada como alvo do Grupo sem relação comercial comprovada.
Os campos `searchIntent` vieram nulos nas sugestões; a intenção editorial deve
ser decidida pelo problema da página, não inferida do endpoint.

## Cinco contextos setoriais: leitura exploratória

Foram feitas cinco chamadas de `keyword_suggestions` em Brasil (`locId=2076`),
com três sementes por contexto. A primeira tentativa do lote florestal falhou
no transporte; o retry foi concluído e está separado no JSON. Os campos ausentes
de `volume` e `updated_at` permanecem ausentes e não foram convertidos em zero.

| Contexto | Sementes e volume exibido | Data do indicador / leitura |
|---|---|---|
| **Mineração** | `manutenção de equipamentos de mineração`: V0; `material rodante mineração`: sem volume; `cilindro hidráulico mineração`: sem volume | V0 datado de 06/03/2026. Não há base para concluir ausência de demanda. |
| **Florestal** | `manutenção de máquinas florestais`: V10; `material rodante florestal`: sem volume; `peças para máquinas florestais`: sem volume | V10 datado de 06/03/2026; retry concluído. Uma sugestão relacionada foi curso, que não deve ser tratado como demanda de serviço. |
| **Agro** | `manutenção de máquinas agrícolas`: V320; `peças para tratores`: V1600; `usinagem para tratores`: sem volume | Datas heterogêneas: 28/09/2025 e 16/07/2026 para as duas linhas com métrica. O retorno relacionado foi limitado às primeiras 300 linhas e informou mais 245 omitidas; várias sugestões são marcas/lojas. |
| **Construção/terraplenagem** | `manutenção máquinas terraplenagem`: V0; `peças escavadeira`: V210; `reforma caçamba escavadeira`: sem volume | V0 datado de 06/03/2026 e V210 de 03/01/2026. Sugestões relacionadas incluem marcas como Hyundai, Volvo, Komatsu, Case e New Holland; não presumir fornecimento OEM. |
| **Locadoras** | `manutenção de frotas`: V140; `manutenção frota locadoras`: V0; `inspeção de máquinas pesadas`: V0 | V140 datado de 06/09/2026; os V0 são de 06/03/2026. Sugestões relacionadas misturam gestão e sistemas de frota, sem provar produto TechTractor. |

Os números são estimativas do provedor, com datas que não formam uma série
mensal única. O setor é um filtro editorial para aplicação e encaminhamento; a
ferramenta não identifica cargo, empresa ou setor de quem pesquisa.

## Sete prioridades de implementação

1. **Rodantes:** fortalecer uma página de componente e avaliação com rodas-guia,
   sapatas, correntes e pinos/buchas; registrar máquina, lado, ponto, unidade,
   data e horímetro. A página deve levar à consulta, sem prometer vida útil.
2. **HidrauTractor:** a entrega atual organiza consultas sobre cilindros e um
   guia editorial de identificação. Uma página comercial de recuperação,
   fabricação, vedação ou ensaios depende da comprovação do processo específico.
   As URLs de cromo da Hidraucron são vocabulário de concorrente, não prova de
   oferta própria.
3. **Usinagem:** responder `mandrilhamento` e recuperação dimensional com
   condição da peça, desenho, medidas e material conhecido; encaminhar Parts
   quando a necessidade for peça nova.
4. **Calderaria:** detalhar reforma de caçambas e conchas já confirmada, com
   diagnóstico e limites próprios. Manter corte, aço específico e ensaios fora
   da promessa até documentação técnica.
5. **Parts:** usar código, desenho, aplicação e quantidade como intake. O dado de
   Tem Trator/ITR mostra caminhos por catálogo e fabricante, não estoque,
   compatibilidade universal ou autorização OEM do Grupo.
6. **Services:** posicionar avaliação/medição como caminho técnico; solicitar
   frota, local, acesso, componente e janela, deixando mobilização sujeita à
   análise comercial e logística. A SERP ampla contém cursos e fichas locais.
7. **TechTractor:** ligar inspeção, medição e histórico ao fluxo de manutenção,
   aproveitando o endereço legado `?p=286` e o resultado ITR como referências de
   intenção. Não anunciar produto de software ou telemetria pronta.

Estas prioridades respeitam o [source-ledger](../source-ledger.md): as frentes
são arquitetura de marca do Grupo, não pessoas jurídicas independentes; BH é
base comprovada, enquanto atendimento nacional continua sujeito a avaliação
logística; capacidades, prazos, SLA, estoque, certificações, casos e contratos
não são transferidos de concorrentes.

## Limites e próximos dados

O JSON conserva os resultados nacionais de domínio e as sete SERPs BH em estado
bruto estruturado. As 36 Top Pages da primeira rodada são uma amostra de até dez
por domínio; as linhas de keyword são uma amostra de até 30 por chamada. A
segunda rodada de IC, Tem Trator e ITR cobriu keywords, mas não Top Pages; a
Açomec e a Trackunit retornaram ausência de dados para o Brasil. A ausência de
linha não é tráfego zero.

Extensões opcionais podem abrir Top Pages de ITR/Tem Trator ou páginas comerciais
de IC, mas não são necessárias para fechar esta amostra. Uma nova rodada deve
manter país, município, data do indicador e data de consulta em campos separados.
Depois do corte do domínio, Search Console e registro comercial devem validar
consultas, contatos e setores declarados; nenhum dado desta coleta prova ranking
estadual, lead ou resultado de negócio.
