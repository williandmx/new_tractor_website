# New Tractor — prontidão de analytics (inspeção pública)

**Data da observação:** 07/09/2026 (horário local de São Paulo; as respostas HTTP aparecem em UTC). **Escopo:** somente conteúdo entregue publicamente ao visitante. Não houve login, acesso a workspace/conta GTM ou GA, alteração de configuração, cookies de usuário, navegação interativa ou coleta de telemetria.

## Método e limite da evidência

Fiz `GET` da [raiz pública](https://newtractor.com.br/) e da [prévia atual](https://e45e49ee.newtractor-site.pages.dev/). Na raiz de produção, extraí os dois snippets públicos do Google Tag Manager e baixei os scripts públicos correspondentes: [`GTM-T3RNZ98`](https://www.googletagmanager.com/gtm.js?id=GTM-T3RNZ98) e [`GTM-N55QVV5`](https://www.googletagmanager.com/gtm.js?id=GTM-N55QVV5). O objeto `resource` entregue por cada script foi analisado como configuração estática: IDs, tipos de tag, macros, predicados e regras.

Essa inspeção demonstra o que está exposto e configurado no payload público observado. Ela não demonstra que uma tag disparou, que um provedor recebeu um evento, que uma conta é da New Tractor, nem que uma conversão foi atribuída. O payload pode mudar sem aviso.

## Achados

1. **A produção ainda entrega dois contêineres independentes.** A resposta da raiz antiga é WordPress e contém um loader para `GTM-T3RNZ98` no `<head>` e outro para `GTM-N55QVV5` dentro do conteúdo Elementor; há também um `noscript` para cada um. Os dois usam o mesmo `dataLayer` padrão e são inseridos diretamente pelo HTML. O HTML antigo não expõe o fluxo `data-consent` da versão nova.

   A [prévia atual](https://e45e49ee.newtractor-site.pages.dev/) não contém loader GTM inline. No código público [`src/main.js`](/home/willian/Projects/company_standard/New_tractor/new_tractor_website/src/main.js:16), somente `GTM-T3RNZ98` é carregado após `accepted` no armazenamento local; o evento `site_cta_click` também só é colocado no `dataLayer` quando a preferência é `accepted`. A prévia responde com `X-Robots-Tag: noindex, nofollow`, como esperado para esse host.

2. **O payload de T3RNZ98 expõe uma configuração de Analytics e eventos de contato.** Foram encontrados:

   - measurement ID GA4 `G-BR1S7Y1VCV`, usado por uma tag Google (`__googtag`) e por uma tag de evento GA4 (`__gaawe`) cujo nome público é `botao_wpp`;
   - propriedade Universal Analytics `UA-251146167-1`, em uma tag de pageview legada (`__ua`);
   - regras de clique que combinam `gtm.linkClick` com texto contendo `Entrar em contato`, e outra que combina `gtm.click` com a classe `ctc-analytics`; ambas adicionam a tag de conversão e o evento `botao_wpp`;
   - tags de conversão/remarketing Google Ads relacionadas ao ID numérico `10800971378`.

   Portanto, a configuração pública contém uma rota de contato GA4 além de Analytics legado e tags de conversão. As strings genéricas como `conversion`, `page_view` e `generate_lead` presentes no runtime não foram tratadas como eventos configurados, pois não aparecem como valores das tags relevantes.

3. **O payload de N55QVV5 não expõe measurement ID GA4 ou propriedade UA identificável.** Não encontrei `G-...`, `UA-...` ou `AW-...` configurado no `resource`. Ele contém quatro tags `__awct` e uma tag `__sp` com o mesmo ID de conversão `10800971378`, além de listeners para cliques em URLs públicas específicas de WhatsApp, Facebook, Instagram, LinkedIn e na antiga URL `?p=477`. É configuração de conversão/remarketing pública, não evidência de recebimento.

4. **Não há evidência de que um contêiner carregue o outro.** Cada resposta `gtm.js` contém apenas seu próprio ID (desconsiderando texto genérico do runtime, como `gtm-yt-inspected-`); não há referência cruzada T3↔N55. A duplicação observada vem dos dois snippets independentes no HTML antigo. Como ambos expõem o ID de conversão `10800971378`, e T3 ainda mede cliques por texto/classe, existe risco de contagens duplicadas quando as condições de duas tags coincidirem. No HTML antigo observado há cinco links com o texto `Entrar em contato` e o widget `ctc-analytics`. A URL de WhatsApp configurada no gatilho N55 (`5531993120054`) não é igual à URL dos links antigos (`553193120054`), então não há prova estática de disparo desse gatilho específico nessa raiz.

## Próximos passos ordenados

1. Com acesso do responsável às contas, exportar/inventariar tags e gatilhos de T3 e N55, confirmar propriedade/uso autorizado e escolher um único contêiner para o corte. Registrar quais conversões de contato permanecem; não apagar N55 antes de exportar e definir rollback.
2. Depois da troca do DNS, testar em navegador limpo e no Tag Assistant: sem aceite não deve haver request de analytics; após aceite, verificar um pageview e um evento de contato por ação, sem duplicidade, e confirmar os destinos de rede no ambiente de produção.
3. Revisar a política de consentimento e o texto de privacidade contra a configuração efetivamente aprovada. A inspeção pública não substitui verificação de conta, Search Console ou relatório real de conversões.
