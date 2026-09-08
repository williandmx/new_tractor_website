# Benchmark integrado do Grupo New Tractor — linha amarela

**Data:** 07/09/2026 · **País/idioma da base de palavras-chave:** Brasil /
português · **Escopo:** HidrauTractor, Rodantes, Usinagem, Calderaria, Parts,
TechTractor e Services, com cinco contextos setoriais. Este documento integra
os benchmarks de rodantes/Parts, usinagem/Calderaria e TechTractor/Services, o
benchmark de cilindros hidráulicos e a transcrição de 75 termos do Ubersuggest.
O relatório hidráulico de base está em
[benchmark-cilindros-ubersuggest-2026-09-07.md](benchmark-cilindros-ubersuggest-2026-09-07.md).

## Como ler os dados

O Ubersuggest foi consultado em configuração **Brasil**, não Minas Gerais. Os
75 resultados visíveis foram transcritos individualmente no JSON da conta,
sem somar variantes próximas. **Profissão e setor de quem pesquisou não são
revelados pela ferramenta**; os percursos por setor e as jornadas abaixo são
hipóteses operacionais para validar no atendimento. Há **67 SD marcados
“Outdated”** e 36 termos com volume estimado zero. “Outdated” descreve a
atualização do indicador de dificuldade, não a demanda. Zero também não prova
ausência de demanda, concorrência ou intenção: variantes podem divergir.
Volumes são estimativas nacionais mensais, não pessoas, pedidos ou clientes.

A prioridade editorial é busca por **serviço e componente**, com a marca como
contexto. Para o proprietário, publicação, liderança, posição orgânica e meta
alcançada são estados que exigem evidência própria antes de serem registrados.
A base industrial em Belo Horizonte pode ser informada quando
comprovada, mas atendimento em outras localidades continua sujeito a avaliação
técnica, comercial e logística.

Os processos, aplicações e vocabulário vêm de páginas primárias dos próprios
OEMs, fabricantes, dealers e prestadores, entre elas [Minusa](https://www.minusa.com.br/),
[ITR](https://www.itrsa.com.br/site/material-rodante/),
[Volvo CE](https://www.volvoce.com/brasil/pt-br/parts/wear-parts/undercarriage/),
[Açomec](https://www.acomec.ind.br/nossos-servicos/),
[IC Torneamentos](https://www.ictorneamentos.com.br/),
[Modelaço](https://modelaco.com.br/produtos-e-servicos/caldeiraria/cacambas-escavadeiras-fabricacao/),
[TBM](https://tbm.com.br/reforma-de-implementos/),
[Cat Inspect](https://www.cat.com/en_US/products/new/technology/visionlink/visionlink/132081.html),
[Sotreq](https://www.sotreq.com.br/servicos-campo) e
[Mills](https://www.mills.com.br/maquinas-pesadas/manutencao). As alegações
dessas fontes são benchmarks; não são prova de capacidade, autorização,
contrato ou cobertura da New Tractor.

## Matriz das sete frentes

V significa volume mensal estimado no painel. As variantes aparecem separadas
porque são linhas reais distintas do JSON; a leitura trata cada linha
individualmente e não soma variantes.

### Frentes 1–4

| Frente | Termos reais e V | Rota implementada localmente ou proposta | Prova e pendência |
|---|---|---|---|
| **HidrauTractor** | cilindro hidráulico (4.400); cilindros hidráulicos (880); recuperação de cilindros hidráulicos (30); reparo de cilindro hidráulico (90); manutenção de cilindros hidráulicos (70); fabricação de cilindros hidráulicos (40); cilindro hidráulico belo horizonte (0); reparo cilindro hidráulico belo horizonte (0); cilindro hidráulico contagem (0); cilindro hidráulico escavadeira (90); cilindro hidráulico retroescavadeira (30); retífica de cilindro hidráulico (0); brunimento de cilindros hidráulicos (10); haste de cilindro hidráulico (50); vedação de cilindro hidráulico (30) | /hidrautractor/ é a entrada de marca. /servicos/recuperacao-cilindros-hidraulicos/ é uma rota condicional; a decisão depende de confirmar recuperação, fabricação, testes, componentes e logística. | O benchmark hidráulico compara [Hidraucron](https://www.hidraucron.com.br/) e [CETEME](https://ceteme.com.br/servicos/). Provar processos e aplicações próprios; separar recuperação de peça, fabricação e kit de vedação. |
| **Rodantes** | material rodante (320); manutenção material rodante (10); roletes escavadeira (0); sapata trator esteira (0); corrente escavadeira (40); manutenção de material rodante (0); roletes para escavadeira (0); sapata para trator de esteira (10); corrente para escavadeira (40); pinos e buchas para escavadeira (0); monitoramento de desgaste de material rodante (0) | /rodantes/ e /servicos/manutencao-material-rodante/ já organizam a frente. /servicos/monitoramento-material-rodante/ deve explicar registro e avaliação, sem virar catálogo ou promessa de vida útil. | [Minusa](https://www.minusa.com.br/produto/esteiras) e [ITR](https://www.itrsa.com.br/site/material-rodante/) mostram taxonomia de esteiras, roletes, sapatas, rodas, pinos e buchas. Faltam prova própria de fornecimento, critérios e capacidade por componente. |
| **Usinagem** | usinagem pesada (170); recuperação de peças (20); mandrilhamento (480); embuchamento escavadeira (30); usinagem de peças para tratores (10); embuchamento de escavadeira (0); usinagem belo horizonte (90) | /usinagem/ e /servicos/usinagem-componentes-maquinas-pesadas/ já estão codificadas localmente e os processos-base estão confirmados; /guias/cotacao-pecas-maquinas-pesadas/ orienta o pedido. Capacidade, dimensões, materiais, tolerâncias e prazo permanecem dependentes da peça. | [Açomec](https://www.acomec.ind.br/nossos-servicos/) e [IC Torneamentos](https://www.ictorneamentos.com.br/) sustentam vocabulário de mandrilhamento, embuchamento e recuperação. Validar capacidade por peça, equipamento, envio e documentação. |
| **Calderaria** | caldeiraria pesada (320); reforma de caçambas (90); reforma de conchas (0); solda em escavadeira (0); recuperação estrutural de máquinas (0); caldeiraria em belo horizonte (20); reforma de caçamba de escavadeira (0) | /calderaria/ é a entrada da especialidade. O ledger confirma o serviço de reforma de caçambas/conchas e a rota /servicos/reforma-cacambas-conchas/ já está implementada; o escopo estrutural e de solda continua sujeito à prova de cada demanda. | [Modelaço](https://modelaco.com.br/produtos-e-servicos/caldeiraria/cacambas-escavadeiras-fabricacao/) e [TBM](https://tbm.com.br/reforma-de-implementos/) mostram diagnóstico de desgaste, reforma de caçambas e componentes. Validar materiais, soldagem, inspeções e limites de segurança próprios. |

### Frentes 5–7

| Frente | Termos reais e V | Rota implementada localmente ou proposta | Prova e pendência |
|---|---|---|---|
| **Parts** | peças linha amarela (70); peças para escavadeira (210); peças para tratores (1.600); pinos e buchas escavadeira (0); fabricação de peças sob desenho (0); peças para máquinas pesadas (50); peças para máquinas de terraplenagem (0) | /parts/ é o hub de consulta. /guias/cotacao-pecas-maquinas-pesadas/ está codificada localmente. Fichas por peça só cabem após comprovar fornecimento, compatibilidade, documentação e disponibilidade. | [Grupo LPR](https://www.grupolpr.com.br/produtos/) e [Tem Trator](https://temtrator.com.br/materialrodante/) evidenciam busca por categoria, modelo, aplicação e contato. Estoque, fabricação universal, pronta-entrega, preço e equivalência OEM permanecem pendentes sem prova própria. |
| **TechTractor** | monitoramento material rodante (0); medição de material rodante (10); gestão manutenção máquinas pesadas (0); inspeção máquinas pesadas (0); monitoramento máquinas pesadas (0); monitoramento de máquinas pesadas (0); monitoramento de material rodante (0); gestão de manutenção de máquinas pesadas (0); inspeção de máquinas pesadas (0) | /techtractor/ deve apresentar uma frente tecnológica em evolução. Conteúdo de /servicos/monitoramento-material-rodante/ pode explicar registro e histórico, sem login, dashboard, API, sensor ou diagnóstico automático. | [Cat Inspect](https://www.cat.com/en_US/products/new/technology/visionlink/visionlink/132081.html), [VisionLink](https://www.cat.com/en_US/products/new/technology/visionlink/visionlink/132082.html) e [Trackunit](https://trackunit.com/solutions/equipment-maintenance/) são modelos de inspeção, alertas e histórico. Confirmar escopo, dados, integrações e disponibilidade antes de qualquer oferta. |
| **Services** | manutenção máquinas pesadas (0); manutenção escavadeira (10); manutenção tratores (70); manutenção máquinas pesadas em campo (0); oficina máquinas pesadas belo horizonte (0); manutenção de equipamentos de mineração (0); manutenção máquinas florestais (0); manutenção máquinas agrícolas (0); manutenção máquinas terraplenagem (0); manutenção frota locadoras (0); manutenção de máquinas pesadas (90); manutenção de escavadeiras (10); manutenção de tratores (140); manutenção de máquinas agrícolas (320); manutenção de máquinas florestais (10); manutenção de equipamentos pesados (20); manutenção de frotas (140); manutenção de equipamentos de construção (0); serviços de campo máquinas pesadas (0) | /services/ é a porta de coordenação. /guias/avaliacao-maquinas-linha-amarela/ está codificada localmente; uma página de campo depende de confirmação de mobilização, equipe, parceiros e área atendível. | [Sotreq](https://www.sotreq.com.br/servicos-campo), [Komatsu Technical Field Services](https://www.komatsu.com/en-gb/services/technical-field-services) e [Mills](https://www.mills.com.br/maquinas-pesadas/manutencao) descrevem modelos de campo e manutenção. SLA, garantia, prazo, rede e equipe dessas empresas não são evidência para o Grupo. |

No código local, o hub /guias/, três guias e a página de Usinagem acima já
formam cinco novas rotas; títulos e H2 foram atualizados e o arquivo llms foi
restaurado. A implementação está disponível no preview validado descrito ao final; ainda
não representa publicação no domínio canônico nem resultado orgânico.

## SERPs observadas: evidência parcial

Estas seis leituras são do painel em **Brasil**, sem geolocalização para Minas
Gerais. As posições incluem recursos da página de resultados; não equivalem a
posição orgânica pura. A atualização exibida pelo painel foi **08/09/2026** em
todas. Recursos de IA, imagens, vídeo, pacotes locais e “As pessoas também
perguntam” (PAA) foram observados. A fonte de reprodução é a [análise em lote
do Ubersuggest](https://app.neilpatel.com/pt/keyword-bulk-analysis) e a
[transcrição JSON das SERPs](serps-grupo-ubersuggest-2026-09-07.json).

### Material rodante

| Posição exibida | Resultado observado |
|---:|---|
| 4 | engepecas.com.br |
| 5 | loja.itrsa.com.br |
| 6 | grupoht.com.br |
| 7 | minusa.com.br |

| Posição exibida | Resultado observado |
|---:|---|
| 8 | rech.com |
| 9 | youtube.com |
| 10 | grupohidrautorque.com.br |

Além dos resultados listados, a SERP mostrou “Visão geral criada por IA”,
“Imagens” e “As pessoas também perguntam”.
Isso favorece páginas que respondem ao componente e ao problema com prova
própria; esses recursos não oferecem base para copiar títulos, afirmar posição
ou concluir demanda local.

### Usinagem pesada

| Posição exibida | Resultado observado |
|---:|---|
| — | Pacote local (3 ocorrências); vídeo |
| 5 | wartungusinagem.com |
| 7 | monforteusinagem.com.br |
| 9 | caxambu.com.br |

| Posição exibida | Resultado observado |
|---:|---|
| 10 | roscaf.com.br |
| — | Imagens |
| — | PAA |

O registro inclui “Imagens” e “As pessoas também perguntam” como recursos sem
posição numérica. Essas
observações são sinais de formato e concorrência para a consulta, não auditoria
dos domínios, cobertura em MG ou indicação de parceria.

### Reforma de caçambas

O termo mistura caçambas industriais, rodoviárias e de linha amarela; os
resultados não são todos concorrentes diretos.

| Posição/recurso | Resultado observado |
|---:|---|
| — | Visão geral criada por IA; vídeo |
| 2 | ciclocacambas.com.br |
| 4 | pvtruck.com.br |
| 5 | mglprocessosemontagens.com |
| 6 | instagram.com |

| Posição/recurso | Resultado observado |
|---:|---|
| 7 | renovarcarretas.com.br |
| 8 | instagram.com |
| — | Vídeos curtos; As pessoas também perguntam |

### Peças para escavadeira

| Posição/recurso | Resultado observado |
|---:|---|
| 1 | escavapecas.com.br |
| — | Pacote local (3 ocorrências); Imagens |
| 5 | tratoraco.com.br |
| 7 | jnl.com.br |

| Posição | Resultado observado |
|---:|---|
| 8 | gamape.com.br |
| 9 | grupoht.com.br |
| 10 | mbpecasrs.com.br |

### Medição de material rodante

| Posição/recurso | Resultado observado |
|---:|---|
| — | Visão geral criada por IA; Imagens; vídeo |
| 3 | itrsa.com.br |
| 5 | pt.scribd.com |
| — | As pessoas também perguntam |

| Posição | Resultado observado |
|---:|---|
| 7 | mercadolivre.com.br |
| 8 | piritubatractor.com.br |
| 9 | ngi.com.br |
| 10 | materiais.itrsa.com.br |

### Manutenção de máquinas pesadas

| Posição/recurso | Resultado observado |
|---:|---|
| — | Visão geral criada por IA; Pacote local (3 ocorrências) |
| 5 | semmachinery.com |
| — | As pessoas também perguntam; Imagens; vídeo |
| 7 | cps.sp.gov.br |
| 10 | querobolsa.com.br |

Essas quatro leituras adicionais também são evidência divulgada pelo
Ubersuggest, com ordinal misto entre resultados, pacotes e recursos. A última
consulta tem forte mistura com educação/curso; a prioridade continua sendo
máquina, componente e serviço confirmado. Não são geolocalização mineira nem
validação comercial dos domínios.

## Matriz dos cinco setores

O setor é contexto de aplicação, não identidade inferida do pesquisador. O
encaminhamento deve começar pelo componente, condição e operação.

| Setor | Contexto operacional verificável como hipótese | Encaminhamento editorial |
|---|---|---|
| **Mineração** | Ciclos severos, abrasão, ativos remotos e exigência de registro tornam úteis inspeção, material rodante, hidráulica e recuperação estrutural. [Metso](https://www.metso.com/pt/corporativo/midia/noticias/2021/5/troca-e-reparo-de-pecas-de-desgaste-de-escavadeiras/) documenta um caso de reparo de caçamba; é evidência do caso Metso, não da New Tractor. | O encaminhamento parte de condição e impacto: Rodantes/HidrauTractor; Usinagem ou Calderaria conforme geometria/estrutura; Services quando medição ou mobilização fizer parte do escopo. |
| **Florestal** | Operações em campo e componentes sujeitos a solo, ciclos e acesso variáveis pedem identificação, fotos, medição e histórico. A [Sotreq Florestal](https://sotreq.sotreq.com.br/florestal) publica máquinas, peças, serviços e tecnologia para essa aplicação. | Usar o guia de avaliação; encaminhar componente para Rodantes, HidrauTractor, Usinagem ou Calderaria. Services e TechTractor permanecem condicionados à logística e ao estágio da frente. |
| **Agronegócio** | Trator, colheitadeira e implemento têm aplicações diferentes; “manutenção de máquinas agrícolas” não identifica sozinho o componente. [Torneadora LB](https://www.gruponunediesel.com.br/torneadoralb) mostra vocabulário de eixos, buchas, alojamentos e implementos. | A solicitação deve identificar equipamento, aplicação e período de intervenção. Parts pode atender consulta de peça se comprovada; Usinagem pode atender recuperação dimensional se confirmada; uma oferta agrícola ampla permanece pendente. |
| **Construção e terraplenagem** | Frotas variadas e obras com restrições de acesso tornam relevantes caçamba, concha, material rodante, peças e manutenção planejada. [VisionLink](https://www.cat.com/en_US/products/new/technology/visionlink/visionlink/132082.html) descreve dados de utilização e manutenção com variação por OEM/modelo. | A entrada indicada é /guias/avaliacao-maquinas-linha-amarela/; o caminho segue para Rodantes, Parts, Calderaria ou Usinagem. Services depende da avaliação de cidade, transporte, acesso e janela. |
| **Locadoras** | O ativo muda de operador e contrato; identificação, inspeção de retorno, horas, fotos e histórico são mais úteis que uma promessa genérica de “manutenção de frota”. [Trackunit](https://trackunit.com/solutions/telematics/) descreve contexto de frota mista; [Mills](https://www.mills.com.br/intralogistica/pecas-e-servicos) relaciona peças e suporte. | Iniciar pelo guia de cotação ou avaliação. Parts trata peça nova, Rodantes componente, HidrauTractor cilindro e Services coordena demanda apenas se houver escopo atendível. |

## Jornadas e intenção: hipóteses a testar

1. **Problema no componente:** alguém busca “reparo”, “reforma”, “usinagem” ou
   um componente. A página deve esclarecer se recebe peça existente, vende peça
   nova ou avalia a máquina, e pedir modelo, código/desenho, fotos, aplicação,
   cidade e prioridade.
2. **Máquina em operação com desgaste:** o visitante procura medição,
   inspeção ou material rodante. O registro deve preservar lado, componente,
   ponto de medição, unidade, data, horímetro e histórico; uma foto não
   determina vida útil ou liberação para operar.
3. **Máquina parada ou intervenção programada:** Services pode organizar o
   contexto, mas mobilização, reparo no local e prazo dependem de avaliação.
   “Em campo” permanece uma modalidade a confirmar, sem funcionar como CTA que
   promete atendimento.
4. **Compra versus recuperação:** Parts recebe código, desenho, amostra,
   quantidade e aplicação; Usinagem/Calderaria/Rodantes recebem condição e
   escopo de recuperação. Os caminhos devem evitar misturar peça nova,
   recondicionamento e revenda.
5. **Interesse em tecnologia:** TechTractor explica organização de inspeções e
   histórico em evolução. Os termos “software pronto”, “telemetria completa”,
   “IA”, “predição” e “monitoramento em tempo real” somente entram depois de
   existir prova contratável.

## Encaminhamento e pendências

O título e a página devem privilegiar o serviço ou componente que a fonte
própria consegue provar. “Mineração”, “florestal”, “agro”, “construção” e
“locadoras” qualificam a aplicação, mas não autorizam afirmar clientes,
filiais, cobertura local, equipe, capacidade de máquina, certificação, SLA,
garantia ou prazo. BH é base declarada; Brasil é o recorte da ferramenta e não
uma promessa de atendimento nacional.

A criação de páginas comerciais adicionais requer confirmação com os
responsáveis sobre processos realmente executados; equipamentos, dimensões e
materiais aceitos; critérios de inspeção e medição; documentação e laudo;
disponibilidade de peças; tratamento de dados; mobilização e limites
logísticos; parceiros e autorizações; preço, prazo e condições. A decisão de
transformar uma proposta em rota indexável deve ocorrer depois dessa
confirmação. Municípios e variantes de zero devem orientar validação, sem gerar
páginas em massa.

O próximo ciclo deve observar consultas e contatos no domínio oficial após
publicação, separando serviço, componente e marca, e confrontar cada pedido
com o que a operação conseguiu atender. Os números deste documento não
medem profissão, setor, cidade, conversão ou receita; não sustentam uma meta
alcançada.

**Arquivo de dados:** [palavras-chave-grupo-ubersuggest-2026-09-07.json](palavras-chave-grupo-ubersuggest-2026-09-07.json). **Referências de
território:** [relatorio-seo-minas-gerais-2026-09-07.md](relatorio-seo-minas-gerais-2026-09-07.md).

## Implementação e validação desta etapa

O conteúdo descrito foi publicado no [preview Cloudflare](https://4d52fe2d.newtractor-site.pages.dev/guias/), a partir do commit `89bf95a`. As cinco rotas novas, sitemap e llms responderam corretamente e o preview permanece sem indexação. Foram aprovados 25 testes e as verificações de leitura móvel, teclado e dados estruturados. O domínio canônico ainda depende do fluxo de migração; o resultado não representa ganho comprovado de posição no Google. [Próximas etapas](EXECUCAO-SEO-GRUPO.md).
