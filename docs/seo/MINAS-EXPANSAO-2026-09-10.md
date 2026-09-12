# Expansão de Minas Gerais — contrato e arquitetura

## Decisão do proprietário

Pedido confirmado nesta conversa em 10/09/2026:

- Cliente: **New Tractor**, não NetZero.
- Região: somente Minas Gerais.
- Corte: população **superior a 100.000 habitantes**, não 100 habitantes.
- Adicionais: polos relevantes de mineração, florestal, agro e indústria,
  mesmo abaixo do corte, com justificativa e fonte.
- Duas famílias: empresa/especialidade × cidade; especialidade × setor.
- Referência: organização territorial da Guimarães. Não copiar identidade,
  contatos, textos, fotos, credenciais, métricas ou alegações de outro cliente.
- Nenhuma ação em contas Google, DNS, e-mail ou outros clientes nesta expansão.

O pedido atual substitui, para esse recorte, a decisão anterior de apresentar
somente uma página consolidada de Minas. Não remove os limites factuais,
editoriais e de segurança das ofertas. Quantidade de páginas não garante
indexação, tráfego, classificação nem contato comercial.

## Briefing mantido

| Decisão | Fonte | Status |
| --- | --- | --- |
| Grupo institucional, sete frentes, cinza escuro/amarelo, acervo real | Direção anterior do proprietário e site atual | Preservada |
| Compradores, manutenção, PCM e engenharia de máquinas pesadas | AGENTS e conteúdo aprovado | Preservada |
| Base em Belo Horizonte; atendimento por avaliação técnica, comercial e logística | Fonte institucional e proprietário | Preservada |
| E-mail, telefone e WhatsApp vigentes | PR20 / CONTENT-REVIEW | Preservados, sem importar contatos da referência |
| População e contexto municipal | MINAS-FONTES e minas-cities.mjs | Validação factual específica |
| Sete especialidades e limites técnicos | group.mjs, hidráulica, fontes e MINAS-COPY | Reutilizados como escopo, não como prova local |
| Publicação | Fluxo de preview e QA do repositório | Registrar resultado real antes de declarar publicação |

## Arquitetura

| Família | Padrão | Intenção |
| --- | --- | --- |
| Diretório estadual | /atuacao/minas-gerais/cidades/ | Encontrar o município e a especialidade |
| Município | /atuacao/minas-gerais/{cidade}/ | Entender contexto, origem e encaminhamento da demanda |
| Especialidade no município | /atuacao/minas-gerais/{cidade}/{especialidade}/ | Escopo, dados para consulta e logística da necessidade local |
| Especialidade no setor | /{empresa}/setores/{setor}/ | Relacionar componente à aplicação e à rotina operacional |
| Indústria | /setores/industrial/ | Nova entrada setorial integrada ao hub existente |

Não se multiplica cidade × especialidade × setor em uma terceira família.
Mineração, florestal, agronegócio e industrial são os quatro recortes
setoriais desta entrega. Construção e locadoras existentes são preservados.
As sete empresas seguem sendo frentes de marca, não sete CNPJs ou filiais.

Cada município gera oito páginas: um hub e sete especialidades. Há mais
28 combinações por setor, um diretório e um hub industrial. Assim, as páginas
novas são **8 × N + 30**, onde N é o total validado do dataset municipal.
As 44 páginas indexáveis anteriores e a página 404 são preservadas.

Conjunto final: **65 municípios** (36 acima do corte e 29 polos), **455 páginas
de especialidade/cidade**, **28 de especialidade/setor**, 65 hubs municipais,
um diretório e um hub industrial. Total: **550 novas rotas**, **594 indexáveis**
e a página 404. Timóteo foi incluída na revisão industrial final, com fonte
operacional da Aperam e população conferida no IBGE.

## Conteúdo e navegação

- Contexto do município e fontes públicas, separados do escopo próprio.
- Ofertas, limitações, requisitos de cotação, etapas e perguntas por setor.
- Fotos do acervo da base, sem atribuir a imagem à cidade retratada no título.
- Canal real de e-mail com assunto da especialidade e município; nenhum
  formulário simulado ou mensagem enviada automaticamente.
- TechTractor recebe conversa institucional sobre necessidades, sem produto
  disponível, solicitação de acesso ou Service schema comercial.
- Links de ida e volta: atuação → diretório → cidade → especialidade;
  empresa → aplicação setorial → municípios; fontes e guias técnicos.
- Nenhum rodapé com lista massiva de municípios; navegação editorial em hubs.
- JSON-LD reutiliza a entidade e a base real de BH. Cidade é área de origem
  da demanda/atendimento condicionado, nunca um novo LocalBusiness.
- Dez sitemaps temáticos mantidos; URLs adicionais distribuídas entre atuação
  e as sete especialidades, uma vez cada. O llms acompanha as rotas canônicas.

## Critério de aceite

Lista populacional completa na base/ano citados; polos adicionais rastreáveis;
nenhuma URL duplicada ou órfã; title/description/H1/canonical/JSON-LD válidos;
links e imagens íntegros; mobile a partir de 360 px; navegação por teclado;
cotação exclusivamente nos canais reais; noindex no preview e testes verdes.

O desenho gerado reaproveita conteúdo técnico por especialidade. Há risco de
baixa diferenciação entre localidades com contexto semelhante; o acompanhamento
editorial deve privilegiar inclusão de evidências próprias autorizadas,
perguntas reais e informação de logística validada, sem fabricar histórias.

## Referência Guimarães consultada

GitHub somente leitura, main em
[0f33e39](https://github.com/williandmx/guimaraes_site/commit/0f33e39e247839b39b86118f3ecd199ebec7c68f).
O README remoto informa 122 hubs municipais e 1.113 URLs comerciais-base,
diferentemente do checkout local anterior (107/976). O aprendizado utilizado
é o gerador determinístico, hierarquia e justificativa territorial. Não foi
demonstrada relação causal entre volume de páginas e ganho de ranking.

Fontes de orientação:
[políticas Google](https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse)
e [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
