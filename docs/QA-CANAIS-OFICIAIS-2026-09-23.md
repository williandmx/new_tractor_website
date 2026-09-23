# Comunicado institucional e canais oficiais — 23/09/2026

## Escopo e decisões editoriais

O proprietário solicitou informar que o Grupo New Tractor não oferece aluguel
de máquinas, não cadastra clientes pelo site e não possui grupos de WhatsApp.
A minuta complementar foi adaptada para manter o pedido original de não fazer
acusações: não se publicaram identidades de terceiros, imputações criminais,
exoneração jurídica integral ou afirmação de conformidade LGPD auditada.

As declarações institucionais, suas fontes e os limites da revisão constam de
`CONTENT-REVIEW.md` e `source-ledger.md`. A redação jurídica integral da minuta
depende de advogado. Não houve investigação, denúncia ou contato com terceiros.

## Implementação

- Nova página `/canais-oficiais/`, com domínio exclusivo, contatos existentes,
  esclarecimentos sobre a atuação e orientações preventivas com fontes oficiais.
- Aviso visível em HTML inicial e link no rodapé de todas as páginas. Não é
  modal, não depende de JavaScript e fica dentro da superfície desativada quando
  o menu móvel está aberto.
- Atualização do contato e da privacidade: ausência de cadastro não equivale
  a ausência de tratamento técnico de dados; analytics continua opcional.
- Nenhuma mudança em mecanismos de coleta, contêiner GTM, JavaScript, Worker,
  DNS, e-mail, redirecionamentos, imagens, dependências ou outros clientes.
- CSS versionado. Conteúdo de qualidade anteriormente publicado preservado.
- 595 URLs indexáveis e 596 documentos incluindo o 404. Comunicado incluído
  em `sitemap-grupo.xml` e `llms.txt`; datas editoriais de comunicado, contato e
  privacidade atualizadas para 23/09/2026. Demais datas editoriais preservadas.
- Checkout original com alterações do usuário preservado; trabalho em worktree
  dedicado a partir de `4ca95668ce67430590cd602dde817c8cf4049363`.

## Validação pré-publicação

- `npm run check`: build completo e 73 testes aprovados, incluindo quatro testes
  novos de comunicado, canais, privacidade e descoberta.
- `git diff --check` e validação de upload do Wrangler aprovados.
- Preview: <https://f0b1f6fa-new-tractor-website.williandmx.workers.dev>.
- Versão: `f0b1f6fa-5c8b-4797-be3d-3b97802ff60b`.
- 595 páginas conferidas: HTTP 200, título, canonical, H1 único, aviso, link no
  rodapé, CSS atual, JSON-LD e datas editoriais. Zero falhas.
- 14 arquivos conferidos contra o build: 11 XMLs, robots, llms e CSS.
- Preview mantém `noindex`; HTML do comunicado conferido também com
  identificadores Googlebot e OAI-SearchBot. Isso não comprova rastreamento
  autêntico desses serviços nem indexação no Google.
- Revisão independente de conteúdo e consentimento realizada. A configuração
  externa do GTM e a governança integral de dados não foram auditadas.
- Resultados de responsividade, teclado, Lighthouse e conferência da publicação
  serão registrados no PR após a execução, sem estimar métricas.

## Publicação e rollback

Fluxo: preview validado → PR e CI → merge → Workers Builds → conferência pública.
Destino exclusivo: `williandmx/new_tractor_website`, Worker `new-tractor-website`,
domínio `https://newtractor.com.br`.

Rollback: reverter o commit desta entrega e acompanhar o novo build, sem
reescrever histórico ou alterar DNS. Os endereços dos sitemaps permanecem os
mesmos; esta entrega não afirma reenvio manual no Search Console.

O instalador reportou três alertas altos preexistentes em dependências de
desenvolvimento. Não se aplicaram atualizações automáticas nesta entrega editorial.
