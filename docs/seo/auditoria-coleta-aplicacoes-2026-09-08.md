# Auditoria da coleta MCP — aplicações, território e HidrauTractor

**Data da coleta:** 08/09/2026  
**Fontes cruzadas:** `/tmp/newtractor-territorio-mcp-20260908.json` e `/tmp/newtractor-hidrau-escopo-material-20260908.md`.  
**Regra:** números abaixo são a fotografia retornada pelo provedor para português/Brasil ou para a localização declarada pela chamada. Não somar volumes, não tratar ausência de campo como zero e não transferir oferta de concorrentes ou de um escopo do Grupo para outro.

## Contagem exata da execução

O JSON tem **19 chamadas**: 11 `match_keywords`, 3 `location_suggest` e 5 `serp_analysis`. Houve **16 sucessos e 3 erros**. Os três erros foram `INVALID_ARGUMENT`, todos em lotes iniciais de `match_keywords`; erros não equivalem a volume zero ou ausência de procura.

- `match_keywords`: 8 sucessos, 3 erros. Foram solicitadas **34 sementes de palavra-chave**: 20 em chamadas bem-sucedidas e 14 nos três lotes que falharam. As 20 sementes bem-sucedidas retornaram em `searched_keywords`, mas somente sete têm simultaneamente `volume` e `sd`; as outras 13 vieram sem esses campos.
- Sugestões: o provedor reportou `suggestionCount` de **160**, mas entregou **63 linhas** (`2` na primeira chamada e `61` na chamada de pistão). A chamada de pistão informa `nextKey: 114`; portanto, essa coleta é parcial e os 160 não são um universo exaustivo. Seis chamadas bem-sucedidas reportaram zero sugestões, sem que isso prove demanda zero.
- `location_suggest`: 3 sucessos. `Minas Gerais` retornou 12 resultados (incluindo variantes duplicadas de nomes como Além Paraíba e Araguari); `Contagem` retornou 1; `Betim` retornou 1. Esses resultados são IDs de localização do provedor, não cobertura comercial nem demanda local.
- `serp_analysis`: 5 sucessos, **72 entradas** no total. Todas informam `updated_at: 2026-09-08`. Os ordinais misturam orgânico e recursos de busca; não são ranking orgânico puro.

## Termos com métricas disponíveis

`volumeBR` é o volume estimado para `locId: 2076` (Brasil), não Minas Gerais. `SD` é o indicador de dificuldade devolvido pelo provedor. Os termos de aplicação têm utilidade para estruturar perguntas e páginas futuras; não comprovam execução hidráulica do Grupo.

| Semente ou sugestão | volumeBR | SD | Leitura segura |
|---|---:|---:|---|
| `cilindro hidráulico escavadeira` | 90 | 17 | Aplicação explícita; pode orientar a rota futura de escavadeiras e ligar ao guia de consulta. |
| `manutenção de cilindros hidráulicos` | 70 | 21 | Intenção de manutenção; a rota atual continua sendo consulta condicionada. |
| `cilindro escavadeira` | 40 | 24 | Termo curto; exige qualificação do componente e pode misturar peças e serviço. |
| `cilindro hidráulico trator` | 30 | 42 | Aplicação de trator sem distinguir agrícola, esteira ou implemento; usar somente com contexto. |
| `recuperação de cilindros hidráulicos` | 30 | 27 | Intenção de recuperação; não autoriza anunciar recuperação da HidrauTractor. |
| `reforma de cilindro hidráulico` | 0 | 4 | Retorno explícito do provedor; não usar como ausência de mercado e não somar. |
| `pistão hidráulico` | 4.400 | 50 | Semente ampla e ambígua; não é equivalente a cilindro de máquina pesada. |
| `pistão hidráulico para trator` (sugestão) | 140 | 7 | Pode ser agrícola ou implemento; precisa de filtro de equipamento e aplicação. |
| `pistão hidráulico pequeno` (sugestão) | 480 | 19 | Produto genérico, fora da rota industrial sem qualificação. |
| `reparo de pistão hidráulico` (sugestão) | 170 | 7 | Mistura peça, kit e serviço; não é prova de reparo do Grupo. |

As sementes `cilindro hidráulico pá carregadeira`, `hidráulica minas gerais`, `conserto cilindro hidráulico`, `reparo cilindro hidráulico escavadeira`, `manutenção hidráulica máquinas pesadas`, as variantes de Belo Horizonte/Contagem/Betim/Itabira/Uberlândia e `cilindro hidráulico trator de esteira` vieram sem `volume` e `sd` nas chamadas que concluíram. Devem ser marcadas como **métrica não retornada**, nunca como V0.

## SERP por feature e localização efetiva

| Semente | `locId` e localização efetiva | Entradas | Features contadas |
|---|---|---:|---|
| `manutenção de cilindros de escavadeira` | 1001566 · Belo Horizonte/MG | 14 | orgânico 10; AI Overview 1; vídeos curtos 1; PAA 1; vídeo 1 |
| `cilindro hidráulico trator` | 1001566 · Belo Horizonte/MG | 15 | orgânico 10; imagens 1; produtos populares 2; AI Overview 1; PAA 1 |
| `recuperação de cilindros hidráulicos` | 1031586 · Contagem/MG | 15 | orgânico 10; pacote local 2; imagens 1; PAA 1; vídeo 1 |
| `manutenção de cilindros hidráulicos` | 1031483 · Betim/MG | 15 | orgânico 10; pacote local 3; PAA 1; vídeo 1 |
| `recuperação de cilindros hidráulicos itabira` | **1001566 · Belo Horizonte/MG** | 13 | orgânico 10; pacote local 3 |

Agregando pela localização realmente enviada à SERP: Belo Horizonte tem 42 entradas (orgânico 30, AI 2, PAA 2, vídeos curtos 1, vídeo 1, imagens 1, produtos populares 2 e pacote local 3); Contagem tem 15 (orgânico 10, pacote local 2, imagens 1, PAA 1 e vídeo 1); Betim tem 15 (orgânico 10, pacote local 3, PAA 1 e vídeo 1).

O termo que contém “Itabira” foi consultado com o `locId` de Belo Horizonte. Ele não demonstra resultado, concorrência ou cobertura local em Itabira. O pacote local de Betim inclui uma entrada com título `Hidrautractor`, tipo `local_pack`, posição exibida 3, mas com URL/domínio `NODOMAIN`. Sem perfil, endereço, telefone ou URL identificável, isso não confirma identidade da empresa, presença em Betim, serviço ou lead.

## Ambiguidades e exclusões

- As 61 sugestões de `pistão hidráulico` têm intenções heterogêneas: incluem cadeira de barbeiro, cadeira de cabeleireiro e cadeira de escritório, além de elevador, prensa, plataforma, girafa, empilhadeira manual, peças usadas, medidas, tonelagem, “caseiro”, preço e instruções de desmontagem. Exemplos explícitos: `pistão hidráulico para cadeira de barbeiro` V40/SD33, `... para cadeira de cabeleireiro` V10/SD36 e `... para cadeira de escritório` V0/SD4. Excluir esses termos das rotas industriais.
- `trator agrícola` deve ser tratado como intenção agrícola independente. Ele não foi uma semente bem-sucedida nesta coleta e não prova oferta para tratores de esteira, escavadeiras ou hidráulica pesada. Não misturar uma futura rota de tratores de esteira com agricultura sem contexto próprio.
- “Cilindro hidráulico para trator” também mistura produto, loja e implemento: a SERP de Belo Horizonte trouxe produtos, OLX, Mercado Livre, peças agrícolas e catálogos. Ela serve para explicar a necessidade de identificar máquina, função e peça; não para declarar recuperação ou fabricação.
- Os três lotes `INVALID_ARGUMENT` não produziram `searched_keywords`, sugestões ou métricas. Eles não devem aparecer no relatório como termos zerados.
- Pacotes locais, AI Overview, imagens, PAA, vídeos e produtos populares contam como features retornadas, não como posição orgânica, cobertura territorial, clientes ou conversões.
- O relatório próprio de escopo hidráulico confirma que materiais locais só sustentam HidrauTractor como frente de consulta; não há documento de execução, teste, bancada, fabricação ou modalidade de campo. Portanto, métricas e SERPs servem para priorizar perguntas, não para ampliar a oferta.

## Matriz de termos para rotas futuras já decididas

| Rota futura | Evidência de busca que pode orientar o conteúdo | Papel editorial seguro |
|---|---|---|
| `/equipamentos/escavadeiras/` | `cilindro hidráulico escavadeira` V90/SD17; `cilindro escavadeira` V40/SD24; SERP BH de manutenção com 10 orgânicos e recursos AI/PAA/vídeo. | Explicar função, identificação, sintoma observado e aplicação; ligar a `/hidrautractor/` e ao guia. Não anunciar reparo hidráulico. |
| `/equipamentos/tratores-de-esteira/` | `cilindro hidráulico trator` V30/SD42; `cilindro hidráulico trator de esteira` sem métrica; SERP BH predominantemente produtos e comércio. | Separar trator de esteira de trator agrícola e implemento; pedir código, função e condição. Usar Rodantes para a oferta comprovada de esteiras. |
| `/equipamentos/pas-carregadeiras/` | `cilindro hidráulico pá carregadeira` sem métrica; o guia atual usa carregadeira de forma comprovada no contexto de caçamba/concha. | Priorizar implemento, articulação, condição e documentação. A rota pode contextualizar a consulta hidráulica, mas não deve declarar serviço hidráulico para carregadeiras sem confirmação própria. |
| `/atuacao/minas-gerais/` | Termos de cidades e `hidráulica minas gerais` sem volume/SD; `location_suggest` retornou 12 cidades para a busca estadual, 1 Contagem e 1 Betim. | Falar de base em Belo Horizonte e avaliação logística por demanda. Não criar páginas municipais nem inferir cobertura em Itabira, Uberlândia, Contagem ou Betim. |
| `/hidrautractor/` (atual) | `manutenção de cilindros hidráulicos` V70/SD21 e `recuperação de cilindros hidráulicos` V30/SD27; SERPs locais exibem concorrentes e um pacote sem identidade “Hidrautractor”. | Manter entrada como consulta sobre cilindros por componente, aplicação e condição. Não converter termos em promessa de manutenção/recuperação. |
| `/guias/avaliacao-cilindros-hidraulicos/` (atual) | `cilindro hidráulico escavadeira` V90/SD17, `manutenção de cilindros hidráulicos` V70/SD21 e `recuperação...` V30/SD27. | Guia informacional para identificação, segurança, peça/conjunto e dados da consulta. Não é prova de execução nem rota de oferta. |

## Encaminhamento

A coleta apoia páginas futuras por equipamento como camadas de contexto e triagem, preservando as rotas atuais. A oferta publicável continua limitada ao que o ledger e o material próprio confirmam: HidrauTractor recebe consultas; Rodantes e reforma de caçambas/conchas têm escopos próprios documentados; base e atendimento nacional dependem de avaliação técnica, comercial e logística. Para transformar qualquer rota hidráulica futura em serviço anunciado, ainda é necessário um artefato do proprietário com componente executado, aplicação, modalidade, responsável e data de validade.
