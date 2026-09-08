# QA — referência editorial e URLs legadas

08/09/2026 · aplicação no commit `7510ad9`.

A página de manutenção de material rodante recebeu uma referência histórica
à Revista M&T e quatro links para serviços e orientações relacionados. O
mapeamento de `?p=13` foi refinado para a página de manutenção; o pacote
Cloudflare também contempla os aliases `page_id` e permanece desativado.

## Verificações

- `npm run check`: build, lint e 25 testes aprovados. A verificação do pacote
  cobre estrutura, estado desativado, destinos e consistência do mapa. As
  expressões ainda precisam passar pelo parser remoto da Cloudflare antes do corte.
- HTML estático: referência e links presentes sem JavaScript, um H1 e JSON-LD
  válido com Organization, LocalBusiness, WebSite, WebPage, BreadcrumbList e Service.
- Navegador local em 360 × 800: sem rolagem horizontal, imagens quebradas ou
  novos links fora da largura disponível. Tab alcançou Monitoramento de desgaste.
- Lighthouse local final: mobile 98/100/100/100 e desktop 100/100/100/100
  (Performance, Acessibilidade, Best Practices e SEO). Mobile LCP 2,4 s; CLS 0;
  TBT 0. Desktop LCP 0,5 s; CLS 0; TBT 0. A primeira execução desktop teve
  erro transitório de recursos; a repetição isolada não reproduziu o erro.

## Preview remoto

[Preview da página](https://7084af74.newtractor-site.pages.dev/servicos/manutencao-material-rodante/)
e [alias da branch](https://seo-referencias.newtractor-site.pages.dev/) responderam
HTTP 200 com `X-Robots-Tag: noindex, nofollow`. A rota de manutenção contém o
novo bloco editorial. Não houve challenge interativo nas respostas verificadas.

A requisição identificada como Python-urllib recebeu HTTP 403, código 1010;
o curl padrão recebeu HTTP 200 nos dois hosts. A diferença foi registrada como
restrição de borda por cliente, sem alteração de regras de segurança.

As notas do Lighthouse são medições de laboratório e não demonstram posição
no Google ou aquisição de clientes. O domínio oficial continua no WordPress;
DNS, e-mail e regras de redirect não foram alterados.
