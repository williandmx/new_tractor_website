# Publicação e migração do domínio

## Estado verificado em 01/09/2026

- Domínio canônico: `newtractor.com.br`.
- DNS autoritativo: `ns1.task.com.br`, `ns2.task.com.br`, `ns3.task.com.br` e
  `ns4.task.com.br`.
- Apex atual: `200.162.188.15`.
- `www`: `sd15.task.com.br`.
- MX: `mx1.task.com.br` (prioridade 1) e `mx3.task.com.br` (prioridade 100).
- Cloudflare Pages estável: `https://newtractor-site.pages.dev/`.
- Build publicado no Pages em 01/09/2026: `56c6f431`.
- Preview aprovado: `https://f045b7f3.newtractor-site.pages.dev/`.
- O domínio canônico continua no hosting anterior; nenhum registro DNS foi
  alterado nesta entrega.

## Preview

```bash
npm ci
npm run check
npm run deploy:preview
```

O preview deve ser validado em `*.pages.dev` antes de qualquer mudança de DNS.
O arquivo `_headers` aplica `X-Robots-Tag: noindex, nofollow` ao domínio estável
e às URLs versionadas de `newtractor-site.pages.dev`, sem aplicar essa regra ao
domínio canônico.

## Produção

1. Criar ou confirmar o projeto `newtractor-site` na conta Cloudflare correta.
2. Publicar o build aprovado com `npm run deploy:production`.
3. Adicionar `newtractor.com.br` como Custom Domain do projeto.
4. Adicionar a zona ao Cloudflare e revisar **todos** os registros importados,
   principalmente MX, SPF, DKIM, DMARC e verificações.
5. Somente após essa revisão, trocar no Registro.br os nameservers atuais pelos
   dois nameservers atribuídos ao domínio pelo Cloudflare.
6. Adicionar `www.newtractor.com.br` e redirecionar para o apex canônico.
7. Validar HTTPS, certificado, raiz, `www`, 404, robots, sitemap, llms, HTML
   bruto, analytics e CTAs.

## Redirects legados com query string

O `_redirects` do Pages cobre caminhos, mas não diferencia as URLs antigas do
WordPress que usam `/?p=...`. Bulk Redirects também não aceita query string na
URL de origem. Depois que a zona `newtractor.com.br` estiver ativa no
Cloudflare, criar cinco **Single Redirect Rules** antes do corte:

| Expressão | Destino estático | Status | Preservar query |
|---|---|---:|---|
| `http.request.uri.path eq "/" and http.request.uri.query eq "p=470"` | `https://newtractor.com.br/empresa/` | 301 | não |
| `http.request.uri.path eq "/" and http.request.uri.query eq "p=13"` | `https://newtractor.com.br/servicos/` | 301 | não |
| `http.request.uri.path eq "/" and http.request.uri.query eq "p=288"` | `https://newtractor.com.br/servicos/reforma-cacambas-conchas/` | 301 | não |
| `http.request.uri.path eq "/" and http.request.uri.query eq "p=286"` | `https://newtractor.com.br/servicos/monitoramento-material-rodante/` | 301 | não |
| `http.request.uri.path eq "/" and http.request.uri.query eq "p=477"` | `https://newtractor.com.br/contato/` | 301 | não |

Após ativar, testar cada URL com `curl -I` e confirmar um único salto até o
destino final. Não criar um Bulk Redirect genérico para `/`, pois ele não
inspeciona a query string e poderia redirecionar a home legítima.

## Rollback

- Aplicação: promover novamente a versão anterior no histórico do Pages.
- DNS: restaurar a delegação e os registros registrados na mudança.
- Não remover o hosting ou e-mail anterior até o domínio público ser validado.
