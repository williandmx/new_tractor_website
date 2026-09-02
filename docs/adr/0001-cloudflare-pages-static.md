# ADR 0001 — Site estático em Cloudflare Pages

Status: **Accepted**

Data: 2026-08-15

## Contexto

O site atual usa WordPress 5.2, Elementor e vários assets bloqueantes. A home tem
title genérico, não possui H1 editorial e depende de scripts antigos. O novo site
é institucional, com conteúdo de baixa frequência de atualização e conversão
por canais externos reais.

## Decisão

Gerar um site multipágina estático com Node.js sem framework de runtime e
publicá-lo por Direct Upload no Cloudflare Pages.

## Consequências

- HTML, CSS e imagens podem ser servidos diretamente na borda.
- Não existe banco, painel administrativo ou superfície de login pública.
- Alterações de conteúdo passam por Git, build, preview e promoção.
- O formulário não será simulado; contato usa WhatsApp, telefone e e-mail.
- Para usar o domínio raiz no Pages, a zona precisa estar no Cloudflare e o DNS
  de e-mail deve ser preservado durante a troca de nameservers.

## Alternativas consideradas

- Manter WordPress: descartado por complexidade, dívida de versão e maior
  superfície operacional para um site estático.
- SPA cliente: descartada porque conteúdo institucional deve existir no HTML
  inicial sem depender de JavaScript.
- Pages Functions para formulário: adiada até existir provedor de entrega,
  antispam, política de retenção e contrato de privacidade verificáveis.
