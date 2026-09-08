# Concorrência Ubersuggest — ofertas técnicas

**Data da consulta:** 08/09/2026 · **fonte:** Ubersuggest MCP, somente leitura ·
**idioma:** português · **base:** Brasil (`locId=2076`). Os dados estruturados
estão em [revisao-ofertas-dominios-2026-09-08.json](dados/revisao-ofertas-dominios-2026-09-08.json).

## Snapshot de domínio

O endpoint `domain_overview` apresentou estas estimativas. A consulta foi feita
em 08/09/2026; o último período mensal disponível no histórico retornado é
`202608`. Isso não representa tráfego atual medido no site nem é uma projeção.

| Domínio | Keywords orgânicas | Tráfego orgânico estimado | DA do provedor | Backlinks | Domínios de referência |
|---|---:|---:|---:|---:|---:|
| `newtractor.com.br` | 3 | 141 | 6 | 17 | 13 |
| `minusa.com.br` | 65 | 717 | 29 | 719 | 87 |

No recorte do overview da New Tractor, a única keyword com tráfego estimado
maior que zero foi `newtractor` (volume 320, posição 3, tráfego estimado 141);
as outras duas linhas retornadas não geraram tráfego estimado. Isso descreve a
amostra do provedor, não todas as visitas ou consultas reais.

Na amostra de keywords orgânicas da Minusa, `material rodante` aparece na
posição 7, volume 320 e tráfego estimado 15, associado à página de material
rodante. A posição é o campo do endpoint de keywords, não uma promessa de
posição atual no Google. DA, tráfego, backlinks e domínios de referência são
indicadores do fornecedor e não medem qualidade técnica, clientes ou conversão.

Este arquivo não contém uma consulta de SERP. Portanto, o overview não permite
dizer que a New Tractor não aparece em buscas de material rodante, cilindros,
usinagem ou caldeiraria. A presença observada em outras coletas, incluindo
resultados legados e pacote local, também não deve ser descrita como ranking
orgânico estável. Bases nacionais não são métricas de Minas Gerais.

## Destino editorial das ofertas

Os caminhos abaixo são decisões de arquitetura para a main atual. Não são
URLs novas validadas pelo overview nem associações consulta→URL fornecidas pela
ferramenta.

| Intenção | Destino canônico | Escopo publicável |
|---|---|---|
| Cilindros hidráulicos, recuperação e fabricação | [`/hidrautractor/`](https://newtractor.com.br/hidrautractor/) e suas rotas de [recuperação](https://newtractor.com.br/hidrautractor/recuperacao-cilindros-hidraulicos/) e [fabricação](https://newtractor.com.br/hidrautractor/fabricacao-cilindros-hidraulicos/) | A HidrauTractor executa recuperação e fabricação, confirmadas pelo proprietário em 08/09/2026. Cada peça exige avaliação, projeto e critérios de aceitação próprios. |
| Inspeção, medição e demanda na operação | [`/services/`](https://newtractor.com.br/services/) | Interface para qualificar objetivo, máquina, componente, cidade, acesso e logística. Não afirmar manutenção de campo genérica, equipe residente, mobilização ou prazo sem evidência específica. |
| Caldeiraria de linha amarela e reforma estrutural | [`/calderaria/`](https://newtractor.com.br/calderaria/) e [reforma de caçambas/conchas](https://newtractor.com.br/servicos/reforma-cacambas-conchas/) | Manter o recorte de recuperação estrutural, caçambas e conchas já documentado. Não importar capacidades, materiais, certificações ou linhas de fabricantes. |

O catálogo de `/servicos/` apresenta seis ofertas com fotos do acervo e links
para os destinos canônicos. Cilindros conta com ações separadas para recuperação
e fabricação. Os slugs propostos `/servicos/cilindros-hidraulicos/`,
`/servicos/inspecao-manutencao-campo/` e
`/servicos/caldeiraria-linha-amarela/` foram configurados como aliases com
redirecionamento 301, com e sem barra final, respectivamente para HidrauTractor,
Services e Calderaria. Eles não criam páginas indexáveis nem entradas adicionais
nos sitemaps. A arquitetura mantém 44 URLs indexáveis em 10 sitemaps temáticos.

## Limites de interpretação

- A coleta é Brasil/português; não identifica cidade, profissão, setor,
  comprador, empresa, lead ou conversão.
- `202608` é o período mensal mais recente no histórico retornado, enquanto
  08/09 é a data da consulta. Não misturar esse overview com Top Pages,
  `domain_keywords` ou SERPs, cujas métricas e datas podem divergir.
- Não usar ausência de linha, tráfego 0 ou posição não encontrada como prova de
  ausência de demanda, clientes ou indexação.
- Menções e ofertas de concorrentes servem para orientar perguntas e
  arquitetura. Não transferem capacidade industrial, estoque, relação OEM,
  prazo, garantia ou qualidade ao Grupo New Tractor.
