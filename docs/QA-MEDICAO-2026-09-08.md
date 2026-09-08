# QA — medição de contatos e escolha de analytics

08/09/2026 · código `306bdbf` · [PR5](https://github.com/williandmx/new_tractor_website/pull/5).

## Resultado funcional

`npm run check`: 32 testes aprovados, incluindo sete regressões de analytics.
A verificação de ordem dos comandos usa os objetos originais do dataLayer;
um aceite em armazenamento somente leitura não é reutilizado no novo documento.

Playwright com Chromium efêmero: sete cenários aprovados, 23 CTAs verificados
em dez rotas, além da página de privacidade.

- Sem escolha ou “Só essenciais”: zero requisições GTM/GA e zero eventos de clique.
- Aceite: um carregamento de GTM por documento e um evento por clique.
- Armazenamento indisponível: aceite válido em memória, sem persistir após reload.
- Revisão e recusa posterior: novo documento sem GTM e sem eventos de clique.
- Armazenamento somente leitura com aceite antigo: banner reapresentado, sem tracking
  até novo aceite explícito; valor antigo não reativa GTM no reload.
- Privacidade em 360 px: sem overflow antes/depois; fluxo de teclado
  Aceitar → Revisar → Tab → Só essenciais aprovado.
- Canais de rodapé, faixa de contato, parcerias e e-mail alternativo das sete
  frentes produzem o evento esperado.

O primeiro ciclo funcional encontrou o CTA de contato de `/parcerias/` sem
marcador. Após a correção, a repetição fechou em 7/7. Os hosts externos Google
foram interceptados e atendidos localmente: nenhum dado de teste foi enviado.
A verificação cobre o comportamento da aplicação, não a ingestão no GA4.

[Evidência funcional em JSON](seo/evidencias/medicao-contatos-20260908.json).

## Lighthouse local

Página `/privacidade/`, perfil Chromium isolado. Mobile: Performance 98,
Acessibilidade 100, Best Practices 100, SEO 100; FCP 1,6 s, LCP 2,3 s, CLS 0, TBT 0.

Desktop com `--preset=desktop`: 100 nas quatro categorias; FCP 0,3 s,
LCP 0,5 s, CLS 0 e TBT 0. Configuração confirmada: 1350 × 940, DPR 1,
user-agent desktop, RTT 40 ms, throughput 10240 Kbps e CPU 1×.
A primeira execução rotulada desktop manteve parâmetros mobile e foi
desconsiderada para essa comparação; o perfil correto foi executado uma vez.
As medições são de laboratório, sem comprovar ranking ou conversão.

## Preview e descoberta

[Preview da privacidade](https://5d3edebf.newtractor-site.pages.dev/privacidade/)
respondeu HTTP 200, com `X-Robots-Tag: noindex, nofollow`. O HTML carrega o novo
asset `site.20260908-measurement.js`, e a resposta remota contém a proteção de
armazenamento somente leitura e a classificação de canais.

Sitemap conserva 25 URLs indexáveis. Apenas manutenção de material rodante e
privacidade têm lastmod de 08/09, correspondendo a conteúdo alterado. Os testes
conferem um H1, metadados, JSON-LD e links das páginas geradas.

A publicação no domínio oficial e a validação de recebimento no GA4 permanecem
pendentes de DNS e acessos. [Contrato e próximas etapas](seo/MEDICAO-AQUISICAO.md).

## Publicação

PR5 mesclado na main em `7ae51f03dce67d73dbac82a97beb1909b7c0db0b`.
GitHub e Cloudflare concluíram seus checks com sucesso; deployment
`2336586e-7a16-4756-835e-79db1e8a253c`.

A [privacidade no Pages estável](https://newtractor-site.pages.dev/privacidade/)
respondeu HTTP 200 com o novo asset e `noindex, nofollow`. O SHA-256 do
JavaScript remoto corresponde ao código fonte testado. O domínio oficial
respondeu HTTP 200 com conteúdo WordPress anterior; não houve corte de DNS.
