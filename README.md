# Grupo New Tractor — site institucional

Site multipágina estático da New Tractor, reconstruído a partir do conteúdo e
da identidade visual do site público anterior.

Repositório oficial: `williandmx/new_tractor_website`. Cada push e pull request
para `main` executa build e testes automaticamente no GitHub Actions.

## Desenvolvimento

Requisitos: Node.js 20 ou superior.

```bash
npm ci
npm run check
npm run dev
```

O build fica em `dist/`. O conteúdo principal é gerado em HTML estático e
permanece disponível sem JavaScript.

## Rotas

- `/` — apresentação comercial do Grupo, filme compilado e encaminhamento às empresas
- `/rodantes/`
- `/hidrautractor/`
- `/usinagem/`
- `/calderaria/`
- `/parts/`
- `/services/`
- `/techtractor/`
- `/empresa/`
- `/pessoas/`
- `/parcerias/`
- `/servicos/`
- `/servicos/manutencao-material-rodante/`
- `/servicos/reforma-cacambas-conchas/`
- `/servicos/monitoramento-material-rodante/`
- `/servicos/usinagem-componentes-maquinas-pesadas/`
- `/guias/`
- `/guias/avaliacao-maquinas-linha-amarela/`
- `/guias/inspecao-material-rodante/`
- `/guias/cotacao-pecas-maquinas-pesadas/`
- `/equipamentos/`
- `/atuacao/`
- `/contato/`
- `/noticias/new-tractor-na-exposibram-2026/`
- `/privacidade/`

`/services/` apresenta a empresa Services; `/servicos/` continua sendo o hub de
soluções técnicas. Nenhuma das URLs técnicas antigas foi substituída.

Conteúdo e composição global: `src/site.mjs`. Perfis das sete frentes:
`src/group.mjs`. Guias e aprofundamento técnico: `src/technical-content.mjs`.
Os dois módulos são importados pelo gerador principal. Limites de oferta
e pendências documentais: `docs/source-ledger.md` e `docs/CONTENT-REVIEW.md`.

Descoberta: `/robots.txt`, `/sitemap.xml`, `/llms.txt` e JSON-LD por página.
O pedido de retirar linguagem de bastidores da apresentação institucional não
retirou o pedido anterior de manter os arquivos de descoberta. O `llms.txt`
resume fatos e links canônicos do mesmo catálogo de rotas; não é garantia nem
requisito de classificação no Google. O host `pages.dev` permanece com noindex.

## Publicação

O projeto usa Cloudflare Workers Static Assets (`new-tractor-website`) via Wrangler.
O Worker em `src/worker.mjs` consolida HTTPS/apex e os cinco IDs WordPress,
preservando os arquivos estáticos e as respostas 404. O `run_worker_first`
é necessário para que redirects por query sejam executados antes da home.
URLs de preview permanecem `noindex, nofollow`, sem coleta de Analytics.
Consulte o [estado da ativação SEO](docs/seo/ATIVACAO-2026-09-10.md) e
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) antes de alterar o domínio. As
evidências da entrega estão em [`docs/QA.md`](docs/QA.md) e o checklist de
corte em [`docs/RELEASE.md`](docs/RELEASE.md).

```bash
npm run deploy:preview
npm run deploy:production
```

Não versionar tokens, `.env`, certificados ou chaves. A migração do domínio
deve preservar os registros de e-mail atuais.
