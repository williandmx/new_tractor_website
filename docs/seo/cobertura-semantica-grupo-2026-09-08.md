# Cobertura semântica do Grupo New Tractor — coleta MCP

**Data da coleta:** 08/09/2026, aproximadamente 08:15–08:17 UTC para as chamadas abaixo  
**Fonte:** Ubersuggest MCP, somente leitura  
**Idioma:** português  
**Bases:** palavras-chave Brasil (`locId=2076`) e SERPs Belo Horizonte/MG (`locId=1001566`)  
**Arquivos crus:** [semantica-grupo-keywords-2026-09-08.json](dados/semantica-grupo-keywords-2026-09-08.json) e [semantica-grupo-serps-bh-2026-09-08.json](dados/semantica-grupo-serps-bh-2026-09-08.json)

## Limites e contagem

Foram feitas 7 chamadas `match_keywords`, com 3 sementes por frente: 21 sementes consultadas. O endpoint retornou **268 sugestões**, todas distintas após deduplicação por palavra normalizada (trim/lowercase); não houve duplicata entre as sete respostas. Também foram retornadas 21 linhas `searched_keywords`, que são as sementes e não devem ser contadas novamente como sugestões.

| Frente | Sementes | Sugestões retornadas | Únicas após dedup | `suggestionCount` | Paginação |
|---|---:|---:|---:|---:|---|
| Rodantes | 3 | 75 | 75 | 278 | `nextKey=114`; recorte não esgotado |
| HidrauTractor | 3 | 88 | 88 | 429 | `nextKey=114`; recorte não esgotado |
| Usinagem | 3 | 30 | 30 | 30 | sem `nextKey` |
| Calderaria | 3 | 37 | 37 | 37 | sem `nextKey` |
| Parts | 3 | 32 | 32 | 32 | sem `nextKey` |
| Services | 3 | 6 | 6 | 6 | sem `nextKey` |
| TechTractor | 3 | 0 | 0 | 0 | resposta vazia |
| **Total** | **21** | **268** | **268** | — | — |

`suggestionCount` é um campo do provedor e não foi usado para completar a amostra. Rodantes e HidrauTractor ainda indicavam paginação; portanto 268 não é o universo de sugestões. A ausência de uma linha, volume ausente ou V0 não prova ausência de procura.

Todos os dados de palavras-chave são **Brasil**, não Minas Gerais. As respostas não informam profissão, empregador, setor, comprador, lead ou conversão. Os dados de `match_keywords` não trouxeram `updated_at` de indicador; `collectedAt` registra a consulta, não uma série mensal. Os volumes e rótulos de intenção são estimativas do provedor. Não comparar CPC, dificuldade ou volume como previsão de ranking.

## Sugestões que mudam a arquitetura

- **Rodantes:** `material rodante escavadeira` V140, `material rodante trator de esteira` V70 e `corrente de esteira` V170. A intenção pode ser respondida pelo conjunto Rodantes/manutenção e pelas páginas próprias de **componentes** para roda-guia, roletes e correntes/sapatas. Os novos componentes devem qualificar função, sinais, máquina, aplicação e dados para avaliação; não prometer vida útil ou compatibilidade universal.
- **HidrauTractor:** `cilindro hidráulico` V4.400 com intenção transacional no campo pesquisado; `cilindro hidráulico escavadeira` e `reparo de cilindro hidráulico` V90. A rota implementada é uma consulta condicionada em `/hidrautractor/` e o guia de avaliação. O volume não autoriza anunciar reparo, fabricação, cromo, brunimento, bomba, pistão, vedação ou testes.
- **Usinagem:** `mandrilhamento` V480 e `usinagem pesada` V170, esta marcada informacional; `usinagem pesada em Minas Gerais` V10. A rota de serviço cobre recuperação dimensional na base e deve explicar mandrilhamento/mandrilamento. `mandrilhamento de campo` V40 é uma intenção separada; o conteúdo precisa continuar dizendo que não há modalidade de campo confirmada.
- **Calderaria:** `caldeiraria pesada` V320 e `caldeiraria pesada em Minas Gerais` V10. Reforma de caçambas/conchas deve continuar sendo o objeto comercial comprovado. O termo amplo não transfere corte e dobra, roll-on, material específico, ensaio ou fabricação de terceiros.
- **Parts:** `peças para escavadeira` V210, `pinos e buchas` V140 e `pinos e buchas para escavadeiras` V30. A resposta precisa separar peça nova, componente desgastado e alojamento; código, desenho, aplicação e quantidade qualificam a consulta. Variantes Hyundai, Volvo, Komatsu, New Holland e Caterpillar são marcas/produtos observados, não autorização OEM ou prova de estoque.
- **Services:** `manutenção escavadeira` V10, `medição de material rodante` V10 e `plano de manutenção escavadeira hidráulica` V20. A resposta atual deve qualificar componente, objetivo, cidade, acesso, histórico e logística. O termo genérico mistura manutenção, curso e manual; não justifica páginas municipais ou oferta end-to-end.
- **TechTractor:** as três sementes — `inspeção máquinas pesadas`, `controle de desgaste` e `monitoramento material rodante` — retornaram V0 e nenhuma sugestão. Isso é ausência de linha no recorte, não ausência de demanda. A frente deve permanecer descrita como tecnologia em evolução para registros/histórico, sem plataforma, sensor, API, login ou diagnóstico automático.

## Seis SERPs de Belo Horizonte

Todas têm `newData=true`, `updated_at=2026-09-08`, idioma português e localização “Belo Horizonte, Minas Gerais, Brasil”. O limite solicitado foi 10; cada resposta tem 10 entradas orgânicas e linhas adicionais de recursos. No total: **84 linhas**, sendo **60 orgânicas**, **9 local pack** e **15 recursos/feature blocks**. Os ordinais de recursos não são posição orgânica universal.

| Consulta BH | Linhas | Orgânico | Outros tipos e posições exibidas |
|---|---:|---:|---|
| `material rodante escavadeira` | 14 | 10 (1–10) | AI Overview 1; imagens 2; PAA 3; vídeo 9 |
| `recuperação de roletes` | 13 | 10 (1–10) | AI Overview 1; vídeo 3; short videos 8 |
| `usinagem pesada em Minas Gerais` | 14 | 10 (1–10) | local pack 1–3; PAA 8 |
| `caldeiraria pesada em Minas Gerais` | 14 | 10 (1–10) | local pack 1–3; PAA 8 |
| `pinos e buchas para escavadeiras` | 15 | 10 (1–10) | vídeo 2; imagens 3; AI Overview 4; popular products 6; PAA 10 |
| `manutenção de máquinas pesadas Belo Horizonte` | 14 | 10 (1–10) | local pack 1–3; PAA 9 |

Exemplos concretos de leitura:

- Material rodante trouxe ITR, Dispetral, Minusa, Grupo Hidrau Torque, GHT e JRL entre lojas/fabricantes/conteúdo. Recuperação de roletes trouxe a página legada da New Tractor no orgânico exibido 2, além de Tratorvias, CMR, Lopes e Rodalink. É evidência de intenção e presença observada; não é prova de qualidade, lead ou posição estável.
- Usinagem pesada em MG trouxe o diretório oHub, Roscaf, Gans e outros resultados, com Master, Betel e Gurgel no local pack. Diretório, rede social e pacote local não devem ser tratados como equivalentes técnicos sem validação da página original.
- Caldeiraria pesada em MG trouxe GD Manutenção e Montagem, Engeman, Mecald, Geartech e outros; o local pack mostrou Caldenás, THR e ACP. Os domínios listados são referências de vocabulário e estrutura; não transferem processos, materiais ou escala.
- Pinos e buchas mostrou páginas de Mercado Livre, Dispetral, OliTractor, Berch, Retratecc, Minusa e BBX. O padrão confirma navegação comercial por componente, mas não estoque, compatibilidade ou autorização para o Grupo.
- A consulta de manutenção em BH foi misturada com vagas (Glassdoor, Indeed, LinkedIn), cursos e locação, embora também mostrasse Global Max Tractor e uma oficina. Não usar essa SERP para prometer manutenção geral ou equipe local.

## Mapa das sete frentes

| Frente: consulta → intenção | Rotas implementadas | Benchmark primário observado | Lacuna remanescente |
|---|---|---|---|
| **Rodantes:** material rodante escavadeira/corrente/roletes → componente, condição e recuperação | Implementadas: `/rodantes/`, `/servicos/manutencao-material-rodante/`, `/servicos/monitoramento-material-rodante/`, `/guias/inspecao-material-rodante/`. Novas rotas integradas: `/componentes/`, `/componentes/rodas-guia/`, `/componentes/roletes-de-esteira/`, `/componentes/correntes-sapatas-esteiras/`. | ITR [material rodante](http://loja.itrsa.com.br/material-rodante/) e Minusa [material rodante](http://www.minusa.com.br/material-rodante-para-tratores-e-maquinas-pesadas), fabricantes/distribuidores observados. | Integração validada pelo build e testes: função, condição, processo documentado e encaminhamento próprio. Próximo ganho depende de registros técnicos e exemplos próprios de recuperação. Não somar tráfego de endpoints. |
| **HidrauTractor:** cilindro/reparo/vazamento → consulta e avaliação condicionada | Implementadas: `/hidrautractor/`, `/guias/avaliacao-cilindros-hidraulicos/`. | Hidraucron [Cromo Duro](https://www.hidraucron.com.br/servicos/cromo-duro/8) e Cilíndrica [reparo em BH](https://cilindrica.com.br/reparo-cilindro-hidraulico-belo-horizonte), páginas de serviço concorrentes no benchmark anterior. | Falta prova própria de processo. Manter o guia como orientação de dados, sem converter benchmark de cromo/reparo em oferta. |
| **Usinagem:** mandrilhamento/usinagem pesada/MG → recuperação dimensional de peça | Implementadas: `/usinagem/`, `/servicos/usinagem-componentes-maquinas-pesadas/`; `/guias/folgas-pinos-buchas-alojamentos/` integra o novo módulo editorial. | Roscaf [usinagem pesada](http://www.roscaf.com.br/usinagem-pesada) e Master [serviços e usinagem](http://masterusinagem.srv.br/) apareceram; oHub é diretório. | Explicar mandrilhamento/mandrilamento e limites de base BH. Não criar usinagem em campo sem confirmação. |
| **Calderaria:** caldeiraria pesada/reforma de caçamba/concha → recuperação estrutural | Implementadas: `/calderaria/`, `/servicos/reforma-cacambas-conchas/`, `/guias/avaliacao-cacambas-conchas/`. | GD [caldeiraria para mineração/pedreiras](http://gdmanutencaoemontagem.com.br/caldeiraria-industrial) e Engeman [caldeiraria](http://engeman.net/enus/caldeiraria/); Caldenás apareceu no local pack. | Manter recorte de caçambas/conchas. Não ampliar para fabricação geral, caçamba de caminhão ou materiais de terceiros. |
| **Parts:** peças escavadeira/pinos e buchas → consulta comercial por código | Implementadas: `/parts/`, `/guias/cotacao-pecas-maquinas-pesadas/`; o guia de folgas integra o novo módulo editorial. | Dispetral [pinos e buchas](http://loja.dispetral.com.br/pinos-e-buchas-embuchamento/pinos-e-buchas) e Minusa [pinos e buchas](http://www.minusa.com.br/produto/pinos-e-buchas). | Explicitar nova versus recuperação e reunir código, desenho, aplicação, quantidade e destino. Não criar páginas por marca/cidade sem matriz própria. |
| **Services:** manutenção escavadeira/medição → decisão por componente, campo e logística | Implementada: `/services/`; encaminha a manutenção de rodantes, guias e demais frentes conforme escopo. | Global Max [manutenção em BH](http://globalmaxtractor.com.br/manutencao-para-tratores-e-caminhoes-em-bh/) apareceu organicamente, ao lado de vagas, cursos e transporte. | O termo genérico ainda é ambíguo. Qualificar equipamento, componente, objetivo, acesso e cidade; não chamar recursos de emprego/curso de lead de serviço. |
| **TechTractor:** monitoramento/inspeção → histórico e gestão em evolução | Implementadas: `/techtractor/`, `/servicos/monitoramento-material-rodante/`, `/guias/inspecao-material-rodante/`. | ITR [kit de medição](https://itrsa.com.br/site/kit-de-medicao-de-material-rodante-itr/) e o legado New Tractor apareceram em benchmark; ITR/Cat não são equivalentes de software próprio. | Não há sugestões no lote. Manter linguagem de evolução e testar redirect do legado; não criar página de plataforma/sensor/API sem produto comprovado. |

## Estado de sitemaps e integração

O módulo novo `src/component-content.mjs` define cinco rotas editoriais: hub de componentes, rodas-guia, roletes, correntes/sapatas e guia de folgas. A integração em `src/site.mjs` foi concluída e o build validado com 38 URLs indexáveis. Os testes confirmam links HTML, canonical, H1 e inclusão única nos mapas. A validação HTTP da publicação está registrada no QA desta rodada.

O arquivo `src/discovery.mjs` organiza páginas em oito arquivos por frente/grupo. Esse particionamento é organização de auditoria; não aumenta autoridade nem corrige sozinho cobertura semântica. A publicação em preview deve confirmar HTTP 200, conteúdo esperado e proteção noindex do host Pages. Não usar múltiplos sitemaps para substituir conteúdo próprio ou criar páginas municipais repetidas.

## Fontes de contexto

- Código e conteúdo: `src/group.mjs`, `src/technical-content.mjs`, `src/sector-content.mjs`, `src/component-content.mjs` e `src/discovery.mjs`.
- Limitações e benchmark anterior: [benchmark-mcp-grupo-2026-09-08.md](benchmark-mcp-grupo-2026-09-08.md).
- Fatos e escopos autorizados: [source-ledger.md](../source-ledger.md).
- As URLs concorrentes acima foram preservadas como resultados observados. Estar listado na SERP, em pacote local ou diretório não prova qualidade técnica, capacidade, contrato, estoque, atendimento em MG ou resultado comercial.

