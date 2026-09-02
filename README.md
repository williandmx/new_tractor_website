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

- `/`
- `/empresa/`
- `/servicos/`
- `/servicos/manutencao-material-rodante/`
- `/servicos/reforma-cacambas-conchas/`
- `/servicos/monitoramento-material-rodante/`
- `/equipamentos/`
- `/atuacao/`
- `/contato/`
- `/noticias/new-tractor-na-exposibram-2026/`
- `/privacidade/`

Arquivos de descoberta: `/robots.txt`, `/sitemap.xml`, `/llms.txt` e o
documento experimental `/agents.txt`.

## Publicação

O projeto usa Cloudflare Pages via Wrangler. Consulte
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) antes de alterar o domínio. As
evidências da entrega estão em [`docs/QA.md`](docs/QA.md) e o checklist de
corte em [`docs/RELEASE.md`](docs/RELEASE.md).

```bash
npm run deploy:preview
npm run deploy:production
```

Não versionar tokens, `.env`, certificados ou chaves. A migração do domínio
deve preservar os registros de e-mail atuais.
