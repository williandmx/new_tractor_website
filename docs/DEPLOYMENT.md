# Publicação e migração do domínio

## Estado atual — 10/09/2026

O domínio oficial já serve o site pelo **Cloudflare Workers Static Assets**,
serviço `new-tractor-website`; a zona foi verificada como `active`.
As seções abaixo são histórico de Pages/WordPress, não instruções para recriar
ou migrar novamente a infraestrutura atual.

O fluxo atual é `npm run deploy:preview` (upload de versão, sem promover)
e, depois do QA, a publicação pelo merge da `main`/Workers Builds.
Domínios existentes são gerenciados pelo painel: manter `workers_dev: false`
e não adicionar `routes` ao arquivo sem inventariar a configuração real.
Nenhuma alteração de DNS ou de registros de e-mail é necessária para esta entrega.

O Worker de aplicação implementa os redirects legados antes do acesso a ASSETS.
O JSON de Single Redirect Rules continua sendo uma alternativa **desativada**;
não instalar os dois mecanismos sem revisar prioridade e destinos.
`run_worker_first: true` faz as requisições passarem pelo Worker: monitorar a
franquia de invocações existente. Não foi contratado ou ampliado plano.

Evidências, limites de acesso e rollback: [ativação SEO](seo/ATIVACAO-2026-09-10.md).

Política de crawlers atualizada em 10/09/2026: o arquivo do projeto permite
busca e IA, inclusive treinamento. O robots gerenciado e o bloqueio de bots
de treinamento da Cloudflare foram desativados somente nesta zona. Manter
essa configuração para não sobrepor regras conflitantes ao arquivo próprio.
Evidências e rollback: [acesso público por IA](seo/AI-CRAWLERS-2026-09-10.md).

## Histórico anterior

## Entrega das sete especialidades — 08/09/2026

- Implementação: `966f1364475878bd0fac17c9aba22405e09bfd76`, entregue pelo
  [PR9](https://github.com/williandmx/new_tractor_website/pull/9).
- Preview validado da aplicação: `d93cae5b-2e1c-4e8c-a44c-b662eb345909`,
  [abrir preview](https://d93cae5b.newtractor-site.pages.dev/).
- As 33 páginas, sitemap, robots e `llms.txt` responderam 200, com corpo
  idêntico ao build local e `X-Robots-Tag: noindex, nofollow`.
- Evidências de responsividade, acessibilidade, Lighthouse, links e dados
  estruturados: [QA da entrega](QA-SEO-MAIN-2026-09-08.md).
- A integração Git publica o merge da `main` no alias estável
  `https://newtractor-site.pages.dev/`; o estado terminal do build e o commit
  correspondente ficam nos checks do PR e no histórico do Pages.
- DNS e Search Console estão fora do aceite definido pelo proprietário.
  O canonical continua `https://newtractor.com.br`; esta entrega não faz o
  corte do domínio nem afirma que o novo conteúdo já foi indexado.

## Histórico — 07/09/2026

- PR3 mesclado em `main`: `a2d813520a2e4bdd878f223fdb2137932b70a35f`.
- GitHub Actions e Cloudflare Pages aprovaram o merge.
- Produção do Pages: `e45e49ee-85bf-4778-8f3d-b2563b17433b`, disponível em
  `https://e45e49ee.newtractor-site.pages.dev/` e no alias estável
  `https://newtractor-site.pages.dev/`.
- Home, Guias, Usinagem, sitemap e llms responderam 200 no alias estável;
  `X-Robots-Tag: noindex, nofollow` foi preservado.
- O domínio oficial `newtractor.com.br` ainda serve o WordPress na Task.
  Merge e produção do Pages não representam corte do domínio ou indexação.
- Inventário e roteiro: [prontidão do domínio](seo/PRONTIDAO-DOMINIO-2026-09-07.md).
  Falta obter a zona completa, incluindo DKIM e subdomínios, antes do corte.
- A zona já existe na conta Cloudflare com configuração pendente e 13 registros
  importados; o Pages ainda não possui custom domain. Há aliases de e-mail/FTP
  importados como Proxied que precisam ser corrigidos antes da ativação.

As seções seguintes preservam o histórico dos previews e da configuração.

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

## Preview institucional de 07/09/2026

- Versão para avaliação: `https://951d4336.newtractor-site.pages.dev/`.
- Alias de revisão: `https://institutional-group.newtractor-site.pages.dev/`.
- Deployment: `951d4336-9db0-457e-b0ed-c3d6ec26d022`; ambiente `Preview`.
- Build: base `c1cb38c` com alterações institucionais locais, upload direto via
  Wrangler. Evidências em `QA-INSTITUTIONAL-2026-09-07.md`.
- Produção e DNS preservados; aprovação do novo layout ainda cabe ao proprietário.
- Retorno visual à versão anterior: `https://79240147.newtractor-site.pages.dev/`.

## Preview

### Expansão técnica de SEO — 07/09/2026

- Preview validado: `https://4d52fe2d.newtractor-site.pages.dev/`.
- Alias: `https://seo-linha-amarela.newtractor-site.pages.dev/`.
- Build de aplicação: `89bf95a`, branch Git `feat/seo-linha-amarela`, branch
  de preview Pages `seo-linha-amarela`. Upload direto com Wrangler 4.125.0.
- Cinco rotas novas, metadados das sete frentes, sitemap e `llms.txt`.
- QA: `QA-SEO-2026-09-07.md`. Pages.dev mantém `noindex, nofollow`.
- O layout institucional anterior recebeu aprovação do proprietário na
  conversa. Esta expansão tem preview próprio para revisão.
- O domínio canônico e DNS não foram alterados; versão visual anterior
  preservada em `https://951d4336.newtractor-site.pages.dev/`.

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

### Configuração da integração Git corrigida em 07/09/2026

O projeto Pages estava sem comando de build. O log da publicação automática
`a6bbd73b-92d5-4446-b54e-059c16ec4d26` mostrava que a etapa foi ignorada e
`dist` não foi encontrado. O mesmo padrão já ocorria no merge anterior de main.

Configuração salva no Dashboard: framework None, comando `npm run check`,
saída `dist` e raiz do repositório. A configuração do Wrangler continua
declarando `./dist`. Builds passam a gerar o HTML e testar antes do upload.
Restauração da configuração anterior: remover comando e saída no painel;
isso reintroduziria a falha e não constitui rollback da aplicação.
Domínio, DNS, variáveis, bindings e branch de produção não foram alterados.

1. Criar ou confirmar o projeto `newtractor-site` na conta Cloudflare correta.
2. Publicar o build aprovado com `npm run deploy:production`.
3. Adicionar `newtractor.com.br` como Custom Domain do projeto.
4. Adicionar a zona ao Cloudflare e revisar **todos** os registros importados,
   principalmente MX, SPF, DKIM, DMARC e verificações.
5. Somente após essa revisão, trocar no Registro.br os nameservers atuais pelos
   dois nameservers atribuídos ao domínio pelo Cloudflare.
6. Adicionar `www.newtractor.com.br` e redirecionar para o apex canônico.
7. Validar HTTPS, certificado, raiz, `www`, 404, robots, sitemap, HTML
   bruto, analytics e CTAs.

## Redirects legados com query string — revisão de 08/09/2026

O `_redirects` do Pages trata caminhos, mas não interpreta os IDs WordPress.
O pacote [wordpress-single-redirects.json](migration/wordpress-single-redirects.json)
contém cinco Single Redirect Rules, todas desativadas para revisão, com um
301 por destino. O [roteiro de aplicação](migration/README.md) explica como
preservar as regras existentes da zona e validar o parser Cloudflare antes de
ativar. Bulk Redirects não aceita query string na origem.

| ID WordPress (`p` ou `page_id`) | Destino canônico |
|---|---|
| 470 | `https://newtractor.com.br/empresa/` |
| 13 | `https://newtractor.com.br/servicos/manutencao-material-rodante/` |
| 288 | `https://newtractor.com.br/servicos/reforma-cacambas-conchas/` |
| 286 | `https://newtractor.com.br/servicos/monitoramento-material-rodante/` |
| 477 | `https://newtractor.com.br/contato/` |

Os aliases `page_id` foram verificados no WordPress: cada um faz 301 para seu
`p` correspondente. O novo pacote aceita um único ID em um desses campos,
com parâmetros adicionais em qualquer ordem, e remove a query no destino.
Não casa a home sem ID, IDs desconhecidos ou IDs duplicados/ambíguos.

O destino do ID 13 foi revisto: a página técnica preserva melhor seu título,
assunto principal e consultas regionais de manutenção/recuperação do que o hub.
Links no serviço mantêm acesso a monitoramento, reforma e todas as soluções.
As regras ainda não foram aplicadas na conta. No corte, testar os dez aliases,
variações com parâmetros e controles negativos, além de evitar cadeias até o
HTTPS/apex final. Verificar os redirects por query antes da normalização genérica.

## Rollback

- Aplicação: promover novamente a versão anterior no histórico do Pages.
- DNS: restaurar a delegação e os registros registrados na mudança.
- Não remover o hosting ou e-mail anterior até o domínio público ser validado.
