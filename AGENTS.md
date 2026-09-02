# AGENTS.md — Site institucional New Tractor

As regras do `AGENTS.md` do workspace continuam válidas. Este arquivo adiciona
as regras específicas do site público.

## Objetivo

Manter um site institucional estático, mobile-first e acessível, com conteúdo
útil para manutenção, engenharia, PCM e suprimentos de operações com máquinas
pesadas.

## Fonte de verdade

- Conteúdo e rotas: `src/site.mjs`.
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
- A metragem de mais de 4.000 m² é uma declaração atual do proprietário e deve
  permanecer registrada com o conflito histórico de 3.000 m².
- Logos são “referências históricas divulgadas”; não significam contratos
  atuais, resultados ou autorização para depoimentos.
- Cobertura nacional é sujeita a avaliação técnica, comercial e logística por
  demanda. Não sugerir filial, equipe ou prazo local onde não existem.
- Não criar páginas municipais em massa. Uma rota local exige evidência e
  conteúdo próprio; listas de cidades são dados de priorização, não uma fábrica
  de páginas para busca.

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
