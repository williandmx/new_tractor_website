# Medição de descoberta e intenção de contato

08/09/2026 · Grupo New Tractor

## Acesso verificado

A conta Google aberta no navegador não possui acesso à propriedade de domínio
`newtractor.com.br` no Search Console; o seletor não apresentou uma propriedade
da New Tractor. O Tag Manager não apresentou contas disponíveis. No seletor
do Google Analytics, a pesquisa por “tractor” não retornou propriedades. Nenhuma
propriedade, contêiner ou tag foi criada. A identificação do responsável pelos
acessos foi solicitada ao proprietário.

Isso impede, nesta etapa, obter cliques e impressões reais do domínio, verificar
ações manuais e configurar/validar o destino de `site_cta_click`. As posições
regionais do Ubersuggest continuam sendo estimativas da ferramenta.

## Contrato do evento no site

O evento `site_cta_click` identifica um clique, não uma conversa iniciada,
proposta enviada, lead qualificado ou venda. A partir desta correção, envia:

| Parâmetro | Conteúdo | Uso |
|---|---|---|
| `cta_name` | Nome estático do botão, como `email_parts_rfq` | Distinguir finalidade e posição do CTA |
| `cta_channel` | `whatsapp`, `email`, `phone`, `map` ou `site` | Distinguir canal de contato e navegação |
| `page_path` | Caminho da página, sem query string | Associar interesse à especialidade, serviço ou guia |

O payload próprio não contém destinatário, corpo do e-mail, telefone, texto
de WhatsApp, nome do visitante ou campos preenchidos. Links comerciais do
rodapé, telefone da faixa de contato e e-mail alternativo das sete frentes
passaram a usar o mesmo evento.

Cards de empresas, mapas, fornecedores e parcerias também podem emitir o evento.
**Não transformar todo `site_cta_click` em lead.**

## Configuração a aplicar no GTM existente quando o acesso estiver disponível

Usar o contêiner existente `GTM-T3RNZ98`, rever os acionadores legados e testar
o vínculo à propriedade GA4 correta. O ID público observado anteriormente
foi `G-BR1S7Y1VCV`; essa observação não comprova acesso ou recebimento de dados.

1. Criar variáveis da camada de dados para `cta_name`, `cta_channel` e `page_path`.
2. Configurar uma tag GA4 para `site_cta_click`, com esses parâmetros, acionada
   pelo evento homônimo. Evitar uma segunda tag equivalente.
3. Restringir a medição publicada aos hosts canônicos `newtractor.com.br` e
   `www.newtractor.com.br`. Usar debug para validar previews e testes internos.
4. Tratar cliques de navegação e mapa como engajamento. Para intenção comercial,
   usar uma lista explícita de nomes de contato, excluindo fornecedores,
   parcerias institucionais e solicitações de privacidade.
5. Conferir consentimento, Tag Assistant e DebugView: um clique permitido deve
   chegar uma vez, com página/canal corretos; recusa não deve carregar GTM.
6. Validar mudanças e publicar uma versão identificada do contêiner, preservando
   a versão anterior para rollback. Não reintroduzir o segundo contêiner legado.

Lista inicial para intenção comercial, sujeita à validação no atendimento:

- `whatsapp_contato`, `whatsapp_flutuante`;
- `telefone_contato`, `telefone_faixa_contato`, `telefone_rodape`;
- `email_contato`, `email_rfq_contato`, `email_homologacao`,
  `email_exposibram_hero`, `email_rodape`;
- `email_{frente}_{hero|rfq|alternativo}`, nas frentes `rodantes`, `hidrautractor`,
  `usinagem`, `calderaria`, `parts`, `services` e `techtractor`.

Mesmo esses nomes medem intenção: um fornecedor pode usar o WhatsApp geral.
Lead qualificado depende de registro no atendimento; não emitir `generate_lead`
por um simples clique em link externo.

## Escolha de analytics

A escolha passa a valer em memória quando o armazenamento local falha. Um
aceite persistido só é reutilizado se o armazenamento permitir gravar e remover
uma chave temporária; isso evita reativar aceite antigo que não possa ser revogado. GTM
continua bloqueado antes do aceite. Ao carregá-lo, a aplicação informa estado
inicial negado e libera apenas armazenamento de analytics; os sinais de
publicidade permanecem negados, coerentes com o pedido de analytics do banner.
Revisar a escolha abre o painel; confirmar “Só essenciais” atualiza a negação
e recarrega a página para encerrar o runtime carregado. Alterações de preferência
em outra aba são refletidas pelas demais abas abertas.

O comportamento das tags configuradas no serviço externo ainda exige revisão
com acesso ao contêiner. A validação local intercepta os serviços externos e
verifica somente o contrato e o comportamento da aplicação.

Referências: [implementação e atualização de consentimento](https://developers.google.com/tag-platform/security/guides/consent),
[modo básico e bloqueio de tags](https://developers.google.com/tag-platform/security/concepts/consent-mode).

## Como escolher a próxima melhoria de SEO

Após recuperar o acesso ao Search Console e concluir o domínio, exportar
consultas e páginas por período, país e dispositivo. Separar marca, serviço e
componente; comparar consultas com impressões e poucos cliques, páginas que
recebem cliques sem intenção de contato e pedidos que a operação consegue atender.
O recorte brasileiro do Search Console não identifica profissão ou setor;
registrar setor, cidade, máquina, componente, condição e origem declarada no
atendimento permite qualificar os compradores reais.

O sitemap registra 08/09 apenas para manutenção de material rodante, que
recebeu a referência editorial, e para a explicação de privacidade revisada.
Datas de outras páginas permanecem preservadas: `lastmod` deve representar
[alteração significativa verificável](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
