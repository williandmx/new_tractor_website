# SITE-NEWTRACTOR-001 — Reconstrução do site institucional

Status: **Ready / In progress**

Data: 2026-08-15

Revisão de escopo: 2026-09-01

## Objetivo

Substituir o site WordPress público da New Tractor por um site institucional
estático, rastreável, mobile-first e acessível, pronto para Cloudflare Pages e
para descoberta por mecanismos de busca e agentes de IA.

## Mini-spec

- Preservar marca, cores, logo, fatos institucionais, serviços e canais oficiais
  comprovados no site anterior.
- Entregar HTML inicial completo em todas as rotas públicas.
- Separar home, empresa, serviços, três páginas de serviço, equipamentos,
  atuação, contato e privacidade.
- Entregar canonical, metadados sociais, JSON-LD, `robots.txt`, `sitemap.xml`,
  `llms.txt`, favicon, manifest, 404 e redirects.
- Reutilizar e otimizar imagens institucionais já publicadas pela empresa.
- Usar “Grupo New Tractor” como endosso de marca, sem assumir razão social.
- Publicar atendimento nacional com mobilização e logística avaliadas por
  demanda; não criar doorway pages municipais.
- Registrar a declaração atual de mais de 4.000 m² em três galpões e a
  divergência com a presença pública antiga de 3.000 m².
- Não simular formulário ou envio: conversão por telefone, e-mail e WhatsApp
  reais.
- Carregar o GTM preexistente `GTM-T3RNZ98` somente após consentimento.

## ADR

- [ADR 0001 — Site estático em Cloudflare Pages](../adr/0001-cloudflare-pages-static.md)

## Contratos afetados

- URLs públicas em `https://newtractor.com.br/`.
- Canais comerciais públicos: telefone, e-mail e WhatsApp.
- DNS autoritativo e domínio raiz durante a etapa de publicação final.

## Critérios de aceite

- Build e testes locais verdes.
- Exatamente um H1 editorial por rota indexável.
- Conteúdo útil presente sem JavaScript.
- Navegação por teclado, foco visível e layouts de 360 px a desktop.
- Sem rolagem horizontal em 360, 390, 412, 768, 1024 e 1440 px.
- Links e CTAs reais funcionando.
- `404` devolvida corretamente pelo Pages.
- Preview público validado antes de qualquer troca de DNS.
- Domínio raiz, `www`, HTTPS e redirects validados após a migração.

## Testes e evidências

- `npm run check`.
- Inspeção do `dist/` e validação automatizada das rotas.
- Teste local com JavaScript ligado e desligado.
- Auditoria mobile/desktop e navegação por teclado.
- Lighthouse local e pós-publicação.
- `curl` com navegador comum e user agents de busca após o deploy.

## Rollback

1. Manter o hosting WordPress atual ativo durante a validação do preview.
2. Registrar os DNS atuais antes da migração.
3. Em falha no domínio, restaurar os nameservers/records anteriores e aguardar a
   delegação voltar a responder.
4. Em falha apenas de aplicação, promover a implantação anterior pelo histórico
   do Cloudflare Pages.
