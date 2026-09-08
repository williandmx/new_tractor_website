# QA — consulta de Parts e benchmark de páginas

Data: 08/09/2026.

## Alteração pública

Parts apresenta consulta de peças novas por código, desenho ou especificação.
O texto deixou de afirmar fabricação sem modelo de fornecimento confirmado.
A apresentação da home, Empresa, Parcerias, cards e `llms.txt` foi alinhada.
Os canais, nomes e rotas permanecem os existentes. `lastmod` foi atualizado
nas quatro rotas cujo conteúdo mudou: `/`, `/empresa/`, `/parcerias/`, `/parts/`.

O ledger e a revisão de conteúdo mantêm a pendência de fabricação/revenda,
disponibilidade e compatibilidade. Não foram publicadas capacidades adicionais.

## Verificações locais

- `npm run check` após a revisão final: build de 26 páginas e 32 testes
  aprovados, zero falhas. Inclui metadados, um H1 por página, links, JSON-LD,
  consentimento e equivalência das 25 rotas entre sitemap e llms.
- Parts: viewport de 360 px, navegação por teclado, skip link até o `main`,
  CTA e canais reais verificados no navegador.
- Home e Parcerias: HTML, metadados, dados estruturados e lastmod verificados.
- Lighthouse de Parts: mobile 98/100/100/100 e desktop 100/100/100/100
  (performance/acessibilidade/boas práticas/SEO). Mobile 360×640; desktop
  1350×940, formFactor desktop e DPR 1.
- Home e Parcerias: Lighthouse mobile 99/100/100/100. As últimas alterações
  textuais de consistência foram seguidas pelo `npm run check`; essas notas
  Lighthouse pertencem à coleta anterior a essas últimas frases e não foram
  repetidas como medição da versão final da home/Parcerias.

Arquivos de Lighthouse da sessão: `/tmp/newtractor-parts-lighthouse-mobile-20260908.json`,
`/tmp/newtractor-parts-lighthouse-desktop-20260908.json`,
`/tmp/newtractor-home-lighthouse-mobile-20260908.json` e
`/tmp/newtractor-parcerias-lighthouse-mobile-20260908.json`.

## Relatório e dados

Consulta autenticada no Ubersuggest: sete domínios, 30 páginas principais,
sete detalhes por página e 18 linhas de palavras-chave. Revisão independente
sem erro numérico material; país nacional e mês de referência indisponível
preservados. Estimativas de variantes e páginas não foram somadas como demanda.

O HTML integrado foi inspecionado em desktop pelo responsável pela integração
e em 360 px por captura. Navegação para a seção 07, foco visível, ausência de
overflow global e respostas HTTP 200 dos novos arquivos Markdown/JSON estão
registrados em [evidência do relatório](seo/evidencias/paginas-buscas-relatorio-qa-20260908.json).
As tabelas têm rolagem interna no mobile. O servidor local do relatório retorna
404 para o favicon padrão; isso não afeta o conteúdo, a navegação ou o site
institucional, que possui seus próprios assets.

Preview, testes e relatório não demonstram ganho de posição, clientes obtidos
ou redução de parada. O domínio canônico ainda serve o WordPress anterior.


## Preview final

O código do commit `5c720fc` foi publicado e validado em
[80768b7f — Parts](https://80768b7f.newtractor-site.pages.dev/parts/).
As quatro rotas alteradas passaram em 360×800 e 1350×940: oito verificações,
HTTP 200, um H1, canonical correto, JSON-LD parseável, skip link com foco no
main, nenhum overflow global e nenhum texto afirmando fabricação. Ambos os
CTAs principais de Parts cabem na viewport e usam o e-mail real.
O header permaneceu `noindex, nofollow`.
[Evidência do preview](seo/evidencias/parts-preview-qa-20260908.json).

A verificação inicial supunha um CTA único; a página tem dois, no início e no
final. O roteiro passou a verificar ambos. A execução seguinte usou uma página
isolada por rota para não carregar foco/navegação de uma verificação anterior.
Oito verificações passaram sem alteração adicional no código da aplicação.

Código, revisão e publicação são rastreáveis pelo
[PR6](https://github.com/williandmx/new_tractor_website/pull/6).
