# Monitoramento do Grupo New Tractor no Ubersuggest

Configurado em 07/09/2026, horário de São Paulo, na conta já assinada.
A ferramenta foi operada pelo navegador autenticado. O plugin está instalado,
mas suas chamadas MCP não foram expostas nesta sessão.

## Projeto salvo

- Domínio: `newtractor.com.br`; nome: Grupo New Tractor.
- Localização: **Belo Horizonte, Minas Gerais, Brasil**; idioma Português.
- **44 palavras-chave**, diante do limite de 150 exibido no projeto.
- **10 concorrentes**, cobrindo as sete frentes.
- **Sete perguntas** para acompanhar menções em respostas de IA, uma por frente.
- Visões Desktop e Mobile disponíveis. Mobile estava com 44 consultas pendentes.
- Sitemap ainda não informado: o endereço canônico esperado respondia 404.

[O painel de ranking](https://app.neilpatel.com/en/rank-tracking) exige a conta
autenticada e o projeto selecionado. A configuração e a amostra observada estão em
[JSON](monitoramento-ubersuggest-2026-09-07.json).

## Atualização em 08/09/2026

A coleta Desktop terminou com dez consultas posicionadas, 34 não classificadas
e nenhuma pendente. Mobile continuava com 44 pendentes; a próxima atualização
indicada pelo painel era aproximadamente 14/09. Abaixo permanece o registro
parcial inicial. Consulte a [coleta concluída e suas URLs](referencias-e-ranking-2026-09-08.md)
e o [novo JSON](referencias-e-ranking-2026-09-08.json) para os dados mais recentes.

## Primeira amostra regional — site antigo

Atualização exibida: 07/09/2026 às 23h41. Consulta em Desktop, Belo Horizonte.
Este horário pertence ao novo painel de rastreamento. As seis SERPs nacionais
do benchmark anterior exibiam 08/09/2026 durante a coleta em 07/09 no horário
de São Paulo; são painéis e amostras diferentes, com datas preservadas nos JSON.
Havia seis termos com posição, 17 “Not ranked” e 21 “Pending”. São estados
transitórios durante a primeira coleta, não uma comparação antes/depois.

| Consulta | Posição exibida | Página antiga |
|---|---:|---|
| grupo new tractor | 1 | / |
| manutenção de material rodante | 1 | /?p=13 |
| monitoramento de material rodante | 3 | /?p=286 |
| reforma de conchas | 5 | /?p=288 |
| reforma de caçamba de escavadeira | 10 | /?p=288 |
| reforma de caçambas | 21 | /?p=288 |

**Implicação:** os endereços antigos de rodantes e caçambas já aparecem na
amostra regional. Preservar suas equivalências por redirect durante a migração
é prioridade. Esses resultados pertencem ao WordPress no domínio oficial e não
comprovam efeito da implementação que está no Pages.

O rastreamento de respostas de IA ainda não tem resultado concluído validado.
“Pending” não deve ser convertido em posição zero ou falta de indexação.

## Referências selecionadas

| Domínio | Papel no benchmark |
|---|---|
| mills.com.br | Locação e manutenção de máquinas pesadas |
| tbm.com.br | Peças e componentes |
| modelaco.com.br | Caldeiraria e caçambas |
| acomec.ind.br | Usinagem e recuperação |
| itrsa.com.br | Rodantes, componentes e medição |
| minusa.com.br | Material rodante |
| cilindrica.com.br | Cilindros hidráulicos |
| hidraucron.com.br | Hidráulica |
| sotreq.com.br | Dealer, peças, serviços e tecnologia |
| cat.com | OEM e tecnologia; escala global |

São referências com escalas e ofertas distintas. A comparação deve ser por
consulta, intenção, página e evidência técnica, sem somar tráfego global de um
OEM como se fosse demanda mineira por serviços.

## Como utilizar a medição

1. Registrar o corte do domínio como início real da nova versão. Guardar esta
   amostra e a lista de URLs antigas para observar eventuais perdas.
2. Após publicar no domínio oficial, informar o sitemap no projeto, verificar
   o Search Console e acompanhar indexação das cinco rotas novas.
3. Comparar marca, componente e serviço separadamente; analisar Desktop e
   Mobile. Belo Horizonte é o primeiro recorte, não todo o território mineiro.
4. Relacionar cliques e páginas de entrada a pedidos qualificados: setor,
   cidade, máquina, componente e condição informados no atendimento.
5. Usar as lacunas para escolher conteúdos com processo, fotografias e
   capacidade confirmados. Uma consulta monitorada não comprova que o grupo
   fabrica, mantém estoque ou executa aquele serviço.

Consultas dos cinco setores foram incluídas como hipóteses de demanda.
Volumes nacionais do benchmark anterior continuam nacionais; o novo seletor
regional não altera a origem daqueles dados. Indicadores de dificuldade
marcados com mais de seis meses exigem cautela.
