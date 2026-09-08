# Prontidão do domínio — 07/09/2026

Documento operacional interno para o corte de `newtractor.com.br`. Reúne as
observações públicas disponíveis e a sequência necessária para trocar a camada
web preservando e-mail, subdomínios e retorno. Não altera DNS, contas ou código.

## Estado autoritativo desta entrega

- O PR3 foi mesclado na `main` no commit
  `a2d813520a2e4bdd878f223fdb2137932b70a35f`.
- O deployment Pages correspondente é
  `e45e49ee-85bf-4778-8f3d-b2563b17433b`; a URL versionada é
  `https://e45e49ee.newtractor-site.pages.dev/` e o alias estável é
  `https://newtractor-site.pages.dev/`.
- Os hosts `pages.dev` permanecem com `X-Robots-Tag: noindex, nofollow`.
  O Pages de produção entrega a apresentação institucional, mas seu canonical ainda
  aponta para `https://newtractor.com.br/`.
- O domínio canônico ainda está delegado aos servidores `task.com.br` e serve o
  WordPress anterior. O DNS não foi trocado e o corte continua pendente.
- O corte aguarda o inventário completo da zona e a validação operacional.
- No painel autenticado, a zona `newtractor.com.br` já existe com “Finish setup”;
  a abertura da visão geral mostra seleção de plano. O Pages ainda não tem
  custom domain associado. A lista DNS da zona está acessível e contém 13 registros.

Os previews e builds mais antigos citados em `docs/DEPLOYMENT.md` são histórico.
Para o corte, usar a última versão aprovada no Pages; o commit acima registra a etapa de 07/09.

## Evidências públicas que condicionam o corte

A auditoria DNS de 07/09/2026 consultou resolvedores públicos e os quatro
servidores autoritativos, sem adivinhar seletores DKIM. Ela observou:

| Item | Evidência pública | Condição operacional |
|---|---|---|
| Autoridade DNS | `ns1.task.com.br` a `ns4.task.com.br` | Registrar a delegação atual antes de qualquer mudança. |
| Web atual | Apex `200.162.188.15`; `www` CNAME para `sd15.task.com.br.` | Guardar os valores para rollback e trocar somente a camada web aprovada. |
| E-mail | MX prioridade 1 `mx1.task.com.br.` e prioridade 100 `mx3.task.com.br.` | Recriar os dois MX com prioridade e hostname idênticos. |
| SPF | `v=spf1 mx a:smtp.task.com.br include:task.com.br -all` | Recriar o TXT completo; não simplificar nem criar um segundo SPF. |
| DMARC | `_dmarc` com `v=DMARC1; p=quarantine;` | Preservar e testar envio/recebimento depois da propagação. |
| DKIM | Nenhum seletor foi documentado ou inferido na auditoria | Obter o export do provedor e todos os seletores legítimos antes da migração; não inventar nomes ou chaves. |
| Subdomínios e verificações | A consulta ao apex não constitui inventário completo | Exportar a zona atual e comparar todos os subdomínios, TXT, CAA e verificações antes de publicar. |

A ausência de um seletor DKIM na documentação consultada não prova que DKIM não
exista. O export autoritativo do responsável pelo e-mail é a fonte necessária.

### Registros já importados no Cloudflare — zona ainda não autoritativa

A lista autenticada mostrou apex A, oito CNAME, dois MX e dois TXT. Apex,
MX, SPF e DMARC coincidem com a consulta pública acima. Os CNAME abaixo também
foram confirmados por consulta pública ao resolvedor `1.1.1.1` nesta etapa:

| Nome | Destino atual | Estado no rascunho Cloudflare |
|---|---|---|
| ftp | www.newtractor.com.br | Proxied |
| imap | imap.task.com.br | Proxied |
| mail | mail.task.com.br | Proxied |
| pop3 | pop3.task.com.br | Proxied |
| pop | pop3.task.com.br | Proxied |
| smtp | smtp.task.com.br | Proxied |
| webmail | webmail.task.com.br | Proxied |
| www | sd15.task.com.br | Proxied |

**Correção obrigatória antes do corte:** preservar os serviços de e-mail e FTP
como DNS only, sem proxy HTTP da Cloudflare. O CNAME de FTP também segue o
`www`: se o FTP continuar na Task, ele precisa manter o destino do serviço
confirmado pelo provedor quando `www` mudar para o Pages. Não presumir que FTP
deve acompanhar o novo site. Nenhum desses registros foi alterado nesta etapa.
A distinção entre tráfego web e protocolos de e-mail/FTP segue a
[documentação Cloudflare](https://developers.cloudflare.com/dns/proxy-status/use-cases/).

Os 13 registros importados não incluem seletor DKIM e não comprovam que a
importação esteja completa. Compará-los com a zona exportada pela Task.
A consulta pública de DS via `1.1.1.1` retornou NOERROR sem resposta DS;
rever DNSSEC no Registro.br na janela do corte, antes de alterar delegação.
Um DS antigo pode impedir a resolução após a troca de chaves/servidores;
seguir a [sequência de DNSSEC da Cloudflare](https://developers.cloudflare.com/dns/dnssec/).

## Cinco destinos legados — revisão de 08/09/2026

O pacote [wordpress-single-redirects.json](../migration/wordpress-single-redirects.json)
substitui as cinco expressões de query exata documentadas anteriormente. Ele
inclui os pares `p`/`page_id` observados no WordPress e parâmetros auxiliares,
sem ativar regras ou alterar DNS. [Aplicação e validação](../migration/README.md).

| ID WordPress | Destino | Status |
|---|---|---:|
| 470 | `/empresa/` | 301 |
| 13 | `/servicos/manutencao-material-rodante/` | 301 |
| 288 | `/servicos/reforma-cacambas-conchas/` | 301 |
| 286 | `/servicos/monitoramento-material-rodante/` | 301 |
| 477 | `/contato/` | 301 |

O ID 13 passa ao serviço específico para preservar o assunto principal e as
consultas de manutenção/recuperação. O serviço conserva acesso ao hub, reforma
e monitoramento. Cada `page_id` deve ir direto ao mesmo destino, sem depender
do WordPress para o primeiro salto. A query não permanece no destino.

Não criar uma regra genérica para a home. Validar o parser remoto e os dez
aliases, com controles negativos, antes de considerar a migração concluída.
Apenas os cinco destinos conhecidos estão cobertos; IDs sem equivalente seguem
pendentes da resposta 404/410 apropriada e não devem ser enviados à home.

## Sequência de corte

1. **Congelar a referência web.** Confirmar que o projeto Pages correto serve o
   commit acima, que o domínio customizado e `www` estão disponíveis na conta
   correta e que o `noindex` continua restrito aos hosts `pages.dev` quando o
   apex for ativado.
2. **Registrar a zona atual.** Obter um export completo no provedor autoritativo:
   NS, A/AAAA, CNAME, MX, SPF, DKIM, DMARC, CAA, TXT de verificações e todos os
   subdomínios. Guardar o arquivo, a data e o responsável pelo rollback.
3. **Preparar a zona Cloudflare.** Retomar a zona existente na conta correta e comparar
   registro por registro com o export. Recriar MX, SPF, DMARC e cada seletor
   DKIM exatamente; manter subdomínios e verificações que não pertencem à web.
   Corrigir os proxies de e-mail/FTP e a dependência FTP → www descritos acima.
   Associar o Pages ao apex e ao `www` conforme a configuração fornecida pela
   Cloudflare, sem substituir registros de e-mail.
4. **Preparar os redirects.** Criar e revisar as cinco Single Redirects da tabela
   e os redirects de caminho já previstos em `docs/url-map.md`. Não transformar
   rotas sem equivalente em redirecionamentos para a home; elas devem continuar
   404/410 conforme o mapa.
5. **Validar a medição antes do tráfego definitivo.** A produção antiga expõe
   dois contêineres independentes, `GTM-T3RNZ98` e `GTM-N55QVV5`. O payload
   público de T3 expõe GA4 `G-BR1S7Y1VCV`, UA legado `UA-251146167-1`, o evento
   `botao_wpp` e regras de contato; N55 expõe tags de conversão/remarketing e o
   mesmo ID numérico `10800971378`, sem measurement ID GA4/UA identificável.
   A versão nova carrega somente T3 após consentimento. [`src/main.js`](/home/willian/Projects/company_standard/New_tractor/new_tractor_website/src/main.js:123)
   emite o novo evento `site_cta_click` após aceite, mas a configuração pública
   de T3 observada não mostra um gatilho explícito para esse nome. O responsável
   deve confirmar ou configurar o evento no GTM e validar uma única conversão por
   ação; a inspeção estática não prova coleta, recebimento ou atribuição.
6. **Executar a mudança de autoridade.** Depois da revisão completa dos registros
   e da validação de preservação do e-mail, trocar no Registro.br os
   nameservers atuais pelos atribuídos à zona Cloudflare. Manter o hosting antigo
   e o e-mail ativos durante a propagação; fazer `www` convergir para o apex.
7. **Testar o domínio canônico.** De resolvedores públicos, confirmar NS, web,
   MX, SPF, DMARC e os seletores DKIM do export. Com `curl -I -L`, validar HTTP e
   HTTPS, apex, `www`, certificado, 404, as cinco queries, aliases, `robots.txt`,
   `sitemap.xml`, `llms.txt`, canonical, JSON-LD, CTAs e o header de indexação.
   O apex deve ser indexável; `pages.dev` deve continuar `noindex, nofollow`.
8. **Observar e registrar.** Testar envio e recebimento de e-mail, Search
   Console, consentimento e `site_cta_click` sem incluir dados pessoais. Registrar
   horários, respostas e qualquer desvio antes de retirar o hosting anterior.

## Rollback

Acionar rollback se houver falha de e-mail, certificado, rota prioritária,
redirect legado, canonical/indexação ou medição aprovada.

1. Parar a janela de mudança e preservar os logs e respostas observados.
   Se o destino voltar ao WordPress, desativar as cinco Single Redirects de
   query antes de restaurar a origem: durante propagação, requisições que ainda
   passam pelo Cloudflare não devem apontar para rotas ausentes no site antigo.
2. Para a aplicação, promover pelo histórico do Pages o deployment anterior
   aprovado; o identificador dessa versão deve ser escolhido no histórico da
   conta, sem ser inventado neste documento.
3. Para DNS, restaurar a delegação e os registros web do export pré-corte. Não
   remover nem alterar MX, SPF, DKIM, DMARC, subdomínios ou verificações durante
   o retorno; eles devem permanecer iguais ao baseline salvo.
4. Confirmar novamente HTTPS, `www`, e-mail e o comportamento de rotas, queries e
   arquivos de descoberta esperado na versão restaurada.
   Repetir `curl -I` nas cinco URLs legadas e conferir o destino final com `-L`.
   Manter o hosting e o e-mail anteriores até o proprietário aceitar o estado
   recuperado e registrar a decisão seguinte.

## Fontes e limites

- [DNS da zona na conta Cloudflare](https://dash.cloudflare.com/15586705c7bc857acbd94b5e48ed6d6b/newtractor.com.br/dns/records):
  13 registros importados e status de proxy, leitura autenticada de 07/09/2026.

- `docs/DEPLOYMENT.md` e `docs/url-map.md`: sequência operacional, rotas e os
  cinco redirects aprovados.
- [Auditoria de dns](evidencias/newtractor-dns-readiness-20260907.md): consultas DNS e HTTP somente
  leitura de 07/09/2026.
- [Auditoria de canonical](evidencias/newtractor-canonical-readiness-20260907.md): comparação do domínio
  WordPress com os previews, rotas, canonicals, robots e indexação.
- [Auditoria de analytics](evidencias/newtractor-analytics-readiness-20260907.md): leitura dos dois scripts
  GTM públicos e limites da evidência de analytics.

As auditorias preservadas em `evidencias/` são fotografias do estado observado naquela janela. O
commit e o deployment indicados no início são o estado autoritativo informado
para esta etapa; a troca do domínio ainda exige validação operacional posterior.
