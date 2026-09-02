# Arquitetura do site

## Princípios

- HTML estático completo, sem dependência de JavaScript para conteúdo.
- Uma intenção principal por rota.
- Navegação curta: Empresa, Soluções, Equipamentos, Atuação e Contato/RFQ.
- Prova visual real antes de claims publicitários.
- Cobertura geográfica consolidada, sem doorway pages municipais.

## Rotas de lançamento

| Rota | Papel |
|---|---|
| `/` | posicionamento, prova, soluções e conversão |
| `/empresa/` | história, estrutura, princípios e governança factual |
| `/servicos/` | hub das soluções comprovadas |
| `/servicos/manutencao-material-rodante/` | serviço de rodantes |
| `/servicos/reforma-cacambas-conchas/` | serviço de caçambas/conchas |
| `/servicos/monitoramento-material-rodante/` | medição e monitoramento |
| `/equipamentos/` | máquinas, componentes e informações para avaliação |
| `/atuacao/` | Brasil, corredores prioritários e logística por demanda |
| `/contato/` | canais, RFQ e homologação de fornecedor |
| `/noticias/new-tractor-na-exposibram-2026/` | anúncio histórico atualizado |
| `/privacidade/` | analytics e serviços externos |

## Expansões condicionadas a evidência

- páginas de mineração, construção pesada e agrícola;
- três hubs regionais (Sudeste, Bahia e Goiás);
- cases autorizados;
- conteúdo técnico assinado/revisado por especialista;
- frentes Hidráulica, Parts, Tech e programa 360.

## Descoberta por busca e IA

- `sitemap.xml` com URLs canônicas e indexáveis;
- `robots.txt` permissivo em produção;
- `llms.txt` com resumo factual e rotas principais;
- `agents.txt` experimental, sem alegar protocolo universal, API ou capacidade
  transacional;
- JSON-LD de `Organization`, `LocalBusiness`, `WebSite`, `Service`,
  `BreadcrumbList` e `Article` quando aplicável;
- preview `pages.dev` protegido por header `noindex, nofollow`.
