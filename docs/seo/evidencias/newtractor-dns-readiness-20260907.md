# Readiness DNS — newtractor.com.br

**Verificação:** 07/09/2026, 23:24–23:26 (America/Sao_Paulo; UTC−03).
**Método:** consultas dig contra 1.1.1.1, 8.8.8.8 e 9.9.9.9, repetidas diretamente nos quatro servidores autoritativos publicados; curl HTTPS/HTTP somente leitura. Não foi feito brute force de seletores DKIM nem alteração de conta/zona.

## Estado público observado

Os três resolvedores públicos retornaram os mesmos valores essenciais; a ordem dos registros varia.

| Nome/tipo | Valor observado | TTL/observação |
|---|---|---|
| newtractor.com.br A | 200.162.188.15 | 3600 s |
| newtractor.com.br AAAA | nenhum | resposta negativa com SOA de task.com.br |
| www.newtractor.com.br CNAME | sd15.task.com.br. | 3600 s; o alvo resolve para 200.162.188.15 |
| NS do apex | ns1.task.com.br., ns2.task.com.br., ns3.task.com.br., ns4.task.com.br. | 3600 s |
| SOA | MNAME ns1.task.com.br., RNAME marcus.task.com.br., serial 1777548676, refresh 1200, retry 600, expire 1209600, minimum 5400 | autoridade atual task.com.br |
| MX do apex | prioridade 1 mx1.task.com.br.; prioridade 100 mx3.task.com.br. | 3600 s |
| TXT do apex (SPF) | "v=spf1 mx a:smtp.task.com.br include:task.com.br -all" | 3600 s; único TXT retornado |
| _dmarc.newtractor.com.br TXT | "v=DMARC1; p=quarantine;" | 3600 s |
| CAA do apex | nenhum registro CAA retornado | não há restrição CAA explícita publicada no apex |
| TXT/MX/CAA próprios de www | nenhum registro independente | www é CNAME; consultas recursivas podem mostrar o CNAME do alvo |

Consultas IPv4 diretas aos quatro NS retornaram o mesmo A, NS, MX, SPF e DMARC. Uma consulta inicial ao IPv6 de ns2.task.com.br expirou; as consultas IPv4 seguintes responderam normalmente e de forma consistente.

A resposta pública ainda delega o domínio para task.com.br, não para nameservers Cloudflare. Isso mostra a autoridade DNS atual; não permite inferir se já existe ou não uma zona criada em alguma conta Cloudflare. O apex continua servindo o hosting anterior: curl observou HTTP→HTTPS 301 e HTTPS 200; www responde 301 para https://newtractor.com.br/, seguido de 200 no apex. Os cabeçalhos indicam Nginx no salto HTTP e Apache/WordPress no conteúdo HTTPS atual.

## DKIM: evidência e lacuna

docs/DEPLOYMENT.md, docs/RELEASE.md, docs/source-ledger.md e os demais arquivos do repositório não documentam nenhum seletor DKIM. Nenhum seletor foi adivinhado ou consultado. Portanto, não há evidência pública suficiente nesta auditoria para declarar DKIM presente, ausente ou completo.

Antes do corte, o administrador do e-mail deve fornecer o export da zona atual ou os seletores legítimos usados pelo provedor. Só então consultar cada <seletor>._domainkey.newtractor.com.br TXT e registrar o valor para recriação idêntica.

## Dados a preservar na zona Cloudflare

1. Manter os dois MX, suas prioridades e os hostnames mx1.task.com.br/mx3.task.com.br.
2. Recriar exatamente o SPF, incluindo a:smtp.task.com.br, include:task.com.br e -all; não substituir por um SPF “simplificado”.
3. Recriar exatamente _dmarc com p=quarantine; confirmar com o responsável se há política adicional fora do DNS observado.
4. Recriar todos os seletores DKIM e TXT de verificações de terceiros quando forem identificados no export do provedor.
5. Registrar TTLs, CAA e quaisquer registros não cobertos por esta consulta antes da importação. CAA atualmente não tem valor no apex; não adicionar uma política de emissão sem decisão.
6. Manter o hosting antigo e o e-mail funcionando durante a propagação. No corte, substituir o A/CNAME web pelos registros do Pages somente depois de o domínio raiz e www estarem associados ao projeto; configurar www→apex conforme docs/DEPLOYMENT.md.

## O que ainda falta para um corte seguro

- Export autoritativo completo da zona atual, incluindo registros de subdomínios e verificações não descobertas por consultas ao apex.
- Seletores DKIM, chaves públicas e confirmação do provedor responsável pelo e-mail.
- Confirmação de que SPF/DMARC/DKIM continuam alinhados após a zona ser importada; testar envio e recebimento de mensagens.
- Nameservers atribuídos pela conta Cloudflare correta e confirmação de que o projeto Pages aceita newtractor.com.br e www.newtractor.com.br.
- Plano de janela, TTLs/propagação e rollback para os quatro NS task.com.br, preservando MX e registros de autenticação.
- Após a troca: validar HTTPS/certificado, apex, www, redirects legados, robots/sitemap, e-mail, RFQ e analytics.

Fontes operacionais lidas: docs/DEPLOYMENT.md, docs/RELEASE.md e docs/source-ledger.md.
