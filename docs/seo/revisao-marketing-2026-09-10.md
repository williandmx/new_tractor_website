# Revisão de marketing e linguagem — 10/09/2026

O site passou a apresentar os serviços que o Grupo New Tractor executa e o
benefício para a operação: reduzir o tempo de máquina parada com técnicos no
campo, manutenção planejada, estrutura industrial, peças sob demanda e tecnologia.

## O problema encontrado

A redação anterior explicava como encaminhar uma solicitação, mas enfraquecia a
oferta. “Consulta por componente”, “frente integradora” e “quando esse escopo
fizer sentido” descreviam um processo interno. As limitações registradas antes
da confirmação comercial do proprietário também permaneciam no conteúdo público.

## Antes e depois

| Área | Antes | Depois |
|---|---|---|
| Home | “Conhecimento industrial. Força em conjunto.” | “Mais tempo produzindo. Menos paradas inesperadas.”, seguido dos serviços concretos do grupo |
| Services | “Consulta por componente” | Serviço de campo com técnicos especializados em toda a linha amarela; avaliação de desgaste e manutenção conforme agenda ou programada nas unidades industriais |
| Parts | Consulta de peças por código ou especificação | Fabricação de peças sob demanda, a partir dos requisitos da aplicação |
| Sobressalentes | Oferta não apresentada | Peças sobressalentes sob contrato, inclusive durante a reparação da máquina |
| Botões | “Conheça” e encaminhamentos genéricos | “Solicitar visita técnica”, “Solicitar fabricação de peça”, “Recuperar componente” e “Planejar manutenção” |
| Páginas de setores | Instruções para organizar uma demanda | Manutenção conectada à produção mineral, à operação florestal, ao ciclo agrícola, ao cronograma da obra e à disponibilidade da frota de locação |
| Guias e componentes | Parts e Services como destinos de consulta | Links que explicam fabricação sob demanda, execução no campo e planejamento das intervenções |

## Coerência comercial e SEO

- Revisão dos sete perfis, home, catálogo, contato, páginas setoriais,
  equipamentos, componentes, território mineiro e guias relacionados.
- Preservação dos nomes das empresas e das rotas existentes. Parts e Services
  recebem descrições em português junto às marcas.
- Catálogo com sete ofertas, incluindo fabricação de peças sob demanda e serviço
  de campo. Botões abrem os canais reais; solicitar uma visita não simula uma
  reserva de agenda.
- Títulos, descrições, compartilhamento, marcas no JSON-LD e FAQs alinhados com
  o texto visível. As seis especialidades operacionais usam o tipo `Service`;
  TechTractor permanece apresentada como tecnologia em evolução.
- `llms.txt` descreve as ofertas confirmadas. Os sitemaps mantêm as rotas
  canônicas e registram as datas de revisão do conteúdo alterado.
- Termos técnicos úteis, como material rodante, usinagem, cilindros hidráulicos,
  desgaste e peças sob demanda, permanecem em linguagem natural. “Consulta” não
  foi removida indiscriminadamente de contextos em que o verbo faz sentido.

## Fonte e limites da oferta

A declaração do proprietário em 10/09/2026 confirma serviço de campo com equipe
especializada, manutenção agendada, fabricação sob demanda e sobressalentes sob
contrato. O registro vigente está em `docs/source-ledger.md` e
`docs/CONTENT-REVIEW.md`.

A disponibilidade da máquina é o objetivo comercial. O texto não transforma
isso em garantia de operação ininterrupta. Sobressalentes continuam vinculados
ao contrato; não foram criadas condições de gratuidade, pronta-entrega, prazo
fixo ou equipe residente.

## Validação

`npm run check`: 34 testes aprovados, incluindo HTML semântico, metadados,
links, dados estruturados, equivalência das FAQs e canais de contato reais.
O relatório visual e a evidência do preview são conferidos antes do merge e da
verificação final no domínio oficial.
