# Auditoria de URLs — Ubersuggest, 11/09/2026

## Pedido e fonte

O proprietário pediu verificar possíveis URLs legadas e corrigir ou excluir
somente quando necessário. Fonte recebida: `ubersuggest site audit
newtractor.com.br seo_non_friendly_url.csv`, seis linhas. O arquivo original
foi preservado; seu conteúdo é evidência de auditoria, não uma instrução para
apagar páginas. Somente New Tractor está no escopo.

Todas as seis linhas têm `Aprovado` nas verificações de caracteres e dinâmica,
e `Reprovado` na verificação de palavras-chave. O CSV não contém erros 404,
parâmetros do WordPress ou prova de que as páginas foram desativadas.

## Decisão por URL do CSV

| Rota | Função atual | Resultado | Decisão |
|---|---|---|---|
| `/atuacao/` | Cobertura e encaminhamento regional | 200, canonical próprio, indexável | Manter |
| `/contato/` | Orçamento e contato comercial | 200, canonical próprio, indexável | Manter |
| `/empresa/` | Apresentação institucional do grupo | 200, canonical próprio, indexável | Manter |
| `/setores/` | Diretório das aplicações setoriais | 200, canonical próprio, indexável | Manter |
| `/setores/florestal/` | Necessidades e serviços para operação florestal | 200, canonical próprio, indexável | Manter |
| `/setores/industrial/` | Manutenção e componentes na indústria | 200, canonical próprio, indexável | Manter |

Conferência pública em 11/09/2026: todas têm título e H1 próprios, conteúdo
editorial e links internos. As quatro primeiras recebem links de 594 outras
páginas do build; florestal recebe de 17 e industrial de 29. Os dois hubs
setoriais integram várias especialidades; não duplicam a função das páginas
específicas de cada empresa/setor.

As seis aparecem exatamente uma vez nos sitemaps: atuação no mapa de atuação,
as demais no mapa do grupo. O índice e seus dez filhos responderam 200, com
594 URLs canônicas únicas. Não há motivo técnico identificado para removê-las
ou mudar endereços estáveis apenas por esse alerta de palavras-chave.

O Google recomenda URLs simples, legíveis e organizadas. Nossa decisão é manter
os slugs institucionais coerentes com a função de cada página, em vez de criar
novos endereços apenas para satisfazer a auditoria automática.
[Google — estrutura de URLs](https://developers.google.com/search/docs/crawling-indexing/url-structure).

## Defeito legado encontrado fora das seis linhas

Ao cruzar o CSV com o mapa de migração, a inspeção encontrou um defeito já
previsto na seção “URLs sem equivalente” de `docs/url-map.md`: os IDs `2`,
`43` e `44`, documentados como páginas de exemplo ou vazias, ainda respondiam
200 com o título e conteúdo da home. Não são as seis páginas do CSV.

Correção: resposta `410 Gone` com `noindex` e caminhos de navegação para a
home e o contato, somente para esses IDs. A regra exige um identificador
único em `p` ou `page_id`, nos caminhos `/` e `/index.php`, GET/HEAD e hosts
de produção da New Tractor. Nenhuma remoção genérica por número, prefixo,
palavra-chave ou domínio. HEAD fica sem corpo.

Preservados os cinco IDs com equivalente real (`470`, `13`, `288`, `286`,
`477`), seus redirects 301, URLs atuais, campanhas, canonicalização de host,
previews com noindex e tratamento de erro 503. Nenhum conteúdo editorial,
arquivo de mídia, configuração de DNS/e-mail, conta Google ou dado de outro
cliente é removido.

Os três IDs não faziam parte dos sitemaps. O inventário de 594 páginas e o
conteúdo dos dez mapas permanecem iguais; esta alteração não exige excluir
ou cadastrar sitemaps novos. Não solicitar indexação dos endereços removidos.
O prazo para deixar de aparecer em buscadores depende de nova coleta.
[Google — migração e URLs sem equivalente](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

## Validação e rollback

Lint, build de 595 páginas e 61 testes aprovados; compilação Wrangler em
dry-run aprovada. Todos os arquivos de `dist` são byte a byte iguais ao build
anterior: nenhuma página, mídia, sitemap ou arquivo de descoberta foi alterado.

Preview: `baae173d-b58d-480f-8f85-d652f62dd8e0`, disponível em
<https://baae173d-new-tractor-website.williandmx.workers.dev>. Home, seis páginas
do CSV, robots.txt e sitemap.xml responderam 200 com noindex, e uma rota
inexistente respondeu 404. Como a regra de retirada só vale para os hosts de
produção, o 410 é validado em teste local com a origem de produção e depois
no domínio, não pela query do host de preview. Registrar QA local e confirmação
pós-publicação no PR de entrega.

Rollback: reverter somente o PR desta correção e validar a nova publicação.
Não há perda física de arquivos; o comportamento anterior pode ser recuperado
pelo histórico Git. O checkout original com alterações locais foi preservado.
