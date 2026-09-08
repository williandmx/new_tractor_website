# QA — entrega de SEO das sete especialidades

Data: 08/09/2026. Código da aplicação: `966f1364475878bd0fac17c9aba22405e09bfd76`.
Entrega e evidência de merge: [PR9](https://github.com/williandmx/new_tractor_website/pull/9).
Os commits seguintes deste PR consolidam somente documentação e evidências.

## Aceite e revisão editorial

Sete frentes, cinco setores, cinco guias e 33 URLs indexáveis. DNS, Search Console,
configuração de contas externas e comprovação posterior de ranking ficam fora
do aceite vigente. Os fatos foram confrontados com o source-ledger e com a
análise MCP; os concorrentes orientam linguagem e arquitetura, sem transferir
capacidade, estoque, SLA, clientes ou resultados para o Grupo.

A revisão independente apontou ambiguidade na HidrauTractor. O texto foi
ajustado para consultas sobre cilindros, com escopo sob avaliação técnica e
comercial; o FAQ explicita que o envio não confirma reparo ou fornecimento.
A revisão posterior confirmou a resolução. As sete identidades Brand são
arquitetura de marca, não alegações de sete pessoas jurídicas ou endereços.

## Build e navegação

- `npm run check`: 34 testes aprovados, zero falhas; lint, build e testes concluídos.
- 34 arquivos HTML: 33 páginas indexáveis e um 404 separado.
- Todas as páginas indexáveis alcançáveis por links HTML desde a home; IDs e
  fragmentos válidos, títulos/descrições únicos, H1 único, canonical e metadados.
- Sitemap e llms contêm as mesmas 33 URLs canônicas; robots aponta o sitemap.
- Sete Brand, 21 FAQs equivalentes ao conteúdo visível e cinco guias Article,
  com crédito editorial e data. Não foi usado teste de elegibilidade do Google
  como substituto da inspeção do JSON-LD ou como promessa de rich result.

[Log dos testes](seo/evidencias/main-2026-09-08/npm-check.txt).

## Navegador, acessibilidade e visual

Playwright em Chromium isolado: 33 rotas em 360 e 1365 px, com e sem JavaScript
(132 navegações). Não foram encontrados overflow do documento, imagens quebradas,
erros de metadados, falhas de requisição ou erros de console na bateria.
A HidrauTractor teve rechecagem nos dois tamanhos e nos dois modos após o ajuste.

Skip link, navegação por teclado, abertura/fechamento do menu com Escape, FAQ
com Enter e URL real de RFQ foram verificados. Nenhuma mensagem ou formulário
foi enviado. O conteúdo essencial e os links funcionaram sem JavaScript.
Capturas de home, especialidade, setor e guia foram inspecionadas visualmente;
a HidrauTractor também foi conferida no preview em 360/1365 px.

[Evidência de navegação](seo/evidencias/main-2026-09-08/playwright.json) ·
[Rechecagem HidrauTractor](seo/evidencias/main-2026-09-08/hidrautractor-recheck.json) ·
[Captura do preview em 360 px](seo/evidencias/main-2026-09-08/preview-hidrautractor-360.png).

## Lighthouse

Auditorias de laboratório no servidor local do build, Lighthouse 13.4.1,
mobile e desktop. Notas na escala 0–100:

| Rota | Perfil | Desempenho | Acessibilidade | Boas práticas | SEO |
|---|---|---:|---:|---:|---:|
| /guias/avaliacao-cilindros-hidraulicos/ | desktop | 100 | 100 | 100 | 100 |
| /guias/avaliacao-cilindros-hidraulicos/ | mobile | 97 | 100 | 100 | 100 |
| /hidrautractor/ | desktop | 100 | 100 | 100 | 100 |
| /hidrautractor/ | mobile | 99 | 100 | 100 | 100 |
| / | desktop | 100 | 100 | 100 | 100 |
| / | mobile | 98 | 100 | 100 | 100 |
| /setores/mineracao/ | desktop | 100 | 100 | 100 | 100 |
| /setores/mineracao/ | mobile | 97 | 100 | 100 | 100 |

São medições de laboratório, sujeitas ao ambiente; não são dados de usuários
reais, Core Web Vitals de campo ou garantia de posição. Os avisos de cache do
servidor estático local não equivalem aos headers de cache do Pages. Tentativas
com falha de captura de robots ou crash do navegador foram repetidas; as oito
execuções válidas estão preservadas, com horário e hash, no
[resumo Lighthouse](seo/evidencias/main-2026-09-08/lighthouse-resumo.json) e nos
JSON completos compactados no mesmo diretório.

## Preview e redirects

Preview da aplicação:
[https://d93cae5b.newtractor-site.pages.dev/](https://d93cae5b.newtractor-site.pages.dev/).
Deployment: `d93cae5b-2e1c-4e8c-a44c-b662eb345909`.
GitHub Actions e Cloudflare Pages concluíram com sucesso para o commit da aplicação.

As 33 páginas e sitemap, robots e llms responderam 200, com corpo idêntico ao
build e `X-Robots-Tag: noindex, nofollow`. As oito novas rotas sem barra e os
dois formatos do alias de locação retornaram 301 para o destino correto.
Canonical permaneceu em `https://newtractor.com.br`. O domínio oficial e o
Search Console não foram alterados.

[HTTP e paridade](seo/evidencias/main-2026-09-08/preview-http.json) ·
[Redirects](seo/evidencias/main-2026-09-08/preview-redirects.json) ·
[Inspeção no navegador](seo/evidencias/main-2026-09-08/preview-browser.json).

## Relatórios e rastreabilidade

O [relatório interativo final](seo/entrega-main-seo-grupo-2026-09-08.html) traz
165 associações consulta–URL, sete SERPs BH, aplicação por empresa e inventário
das páginas. A análise MCP preserva 36 chamadas concluídas e 37 tentativas,
incluindo um retry, com limites e datas do indicador separados da coleta.

O relatório foi validado em 360/1365 px, teclado, âncoras, filtro por domínio,
busca com/sem acento, zero resultados, limpeza e tabela completa sem JavaScript.
Os dois relatórios anteriores recebem link para a entrega atual; seus planos e
observações históricas foram preservados. No relatório final, que reúne 315 links, e nos dois relatórios anteriores,
foram conferidos os destinos e fragmentos locais, sem referências ausentes. Links externos de concorrentes são as URLs
fornecidas na pesquisa, não uma auditoria do estado atual de cada site.

[QA do relatório](seo/evidencias/main-2026-09-08/relatorio-interativo.json) ·
[Captura mobile](seo/evidencias/main-2026-09-08/relatorio-360.png) ·
[Captura desktop](seo/evidencias/main-2026-09-08/relatorio-1365.png).
