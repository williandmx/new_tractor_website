# AGENTS.md — Site institucional New Tractor

As regras do `AGENTS.md` do workspace continuam válidas. Este arquivo adiciona
as regras específicas do site público.

## Objetivo

Manter um site institucional estático, mobile-first e acessível, com conteúdo
útil para manutenção, engenharia, PCM e suprimentos de operações com máquinas
pesadas.

## Fonte de verdade

- Conteúdo e rotas: `src/site.mjs`.
- Perfis das sete empresas: `src/group.mjs`, integrado por `src/site.mjs`.
- Composição final dos títulos e associação à frente: `src/seo-metadata.mjs`.
- Estilos: `src/styles.css`.
- Comportamento progressivo: `src/main.js`.
- Assets públicos: `public/assets/`.
- Fatos, conflitos e autorizações: `docs/source-ledger.md` e
  `docs/CONTENT-REVIEW.md`.
- Arquitetura e redirects: `docs/architecture.md` e `docs/url-map.md`.

## Regras editoriais

- Não inventar certificações, ART, SLA, garantia, tolerância, estoque, prazo,
  capacidade de máquina, depoimento, case ou relação comercial vigente.
- Diferenciar fato público, declaração do proprietário, inferência e pendência.
- Usar “Grupo New Tractor” como endosso de marca, não como razão social.
- Títulos locais por especialidade/cidade usam `Grupo New Tractor | Serviço em
  Cidade`, conforme autorização do proprietário em 11/09/2026. Conservar o
  nome completo do município e a empresa responsável no conteúdo. Nas páginas
  institucionais das frentes, manter `Grupo New Tractor — Frente | Assunto`.
  O limite editorial de 65 caracteres previne o alerta da auditoria; não é
  limite oficial nem garantia de exibição integral no Google. Não truncar
  palavras automaticamente para cumprir esse limite.
- A metragem de mais de 4.000 m² é uma declaração atual do proprietário e deve
  permanecer registrada com o conflito histórico de 3.000 m².
- Logos são “referências históricas divulgadas”; não significam contratos
  atuais, resultados ou autorização para depoimentos.
- Cobertura nacional é sujeita a avaliação técnica, comercial e logística por
  demanda. Não sugerir filial, equipe ou prazo local onde não existem.
- Expansão autorizada pelo proprietário em 10/09/2026: municípios de Minas
  Gerais acima de 100.000 habitantes e polos selecionados de mineração,
  florestal, agro e indústria, com páginas por especialidade/cidade e
  especialidade/setor. Esta decisão substitui a restrição anterior de manter
  apenas cobertura consolidada para esse recorte. Cada município ainda exige
  fonte, contexto próprio e orientação útil; não inventar presença local ou
  criar combinações cidade × setor × serviço sem nova decisão editorial.

## Desenvolvimento e QA

- HTML editorial completo deve funcionar sem JavaScript.
- Exatamente um H1 por página indexável.
- Componentes e imagens precisam funcionar a partir de 360 px, sem rolagem
  horizontal, texto cortado ou CTA fora da viewport.
- Imagens devem ter `width`, `height`, `alt`, versões responsivas e origem
  registrada em `docs/ASSET-PROVENANCE.md`.
- Não simular formulário. RFQ usa o e-mail e os canais reais publicados.
- Antes de entregar: `npm run check`, teste local responsivo, navegação por
  teclado, inspeção dos dados estruturados e Lighthouse.
- O host `pages.dev` deve continuar com `X-Robots-Tag: noindex, nofollow`.

## Publicação

- Publicar primeiro em preview e validar.
- Não trocar DNS, domínio ou nameservers sem preservar MX, SPF, DKIM e demais
  registros de e-mail e sem registrar rollback.
- Redirects por query string do WordPress não são resolvidos por `_redirects`;
  usar Cloudflare Single/Bulk Redirects ou Worker no corte do domínio.
