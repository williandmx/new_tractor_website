# Títulos concisos — 11/09/2026

## Diagnóstico e autorização

O CSV fornecido pelo proprietário, `ubersuggest site audit newtractor.com.br
title_long.csv`, contém 203 URLs únicas com títulos de 66 a 75 caracteres.
A auditoria anterior à alteração conferiu as 203 URLs no domínio público:
todas responderam 200 e tinham o título indicado no arquivo. São 174 páginas
por cidade/especialidade, 16 páginas por setor/especialidade e 13 outras
páginas. Não são páginas legadas nem candidatas a exclusão por esse alerta.

O guardrail anterior aceitava até 75 caracteres. O recorte apresentado pelo
Ubersuggest corresponde exatamente às 203 páginas acima de 65 caracteres.
O proprietário autorizou simplificar o título local para
`Grupo New Tractor | Serviço em Cidade`, mantendo a identificação da empresa
responsável no conteúdo. Essa aprovação altera o padrão anterior somente
onde descrito abaixo; não autoriza novas cidades, ofertas ou afirmações.

## Política editorial

- A home mantém `Grupo New Tractor | Soluções industriais para sua frota`.
- As páginas de especialidade/cidade seguem o formato local aprovado,
  conservando o município por extenso e o assunto do serviço.
- As páginas institucionais das sete frentes conservam
  `Grupo New Tractor — Frente | Assunto`.
- Guias, serviços, aplicações e páginas de especialidade/setor mantêm a frente
  responsável no título; assuntos longos recebem redação concisa.
- Cada título deve ser único, legível e ter até 65 caracteres. O gerador usa
  alternativas editoriais explícitas, nunca corte cego de palavras ou cidades.
- O título final deve coincidir em HTML, Open Graph, Twitter Card,
  `WebPage.name` e links de `llms.txt`.
- Datas editoriais e `lastmod` mudam apenas para títulos realmente alterados.

O Google recomenda texto descritivo, conciso e distinto, mas não estabelece
um limite universal de caracteres: o corte depende da largura disponível.
O limite de 65 é uma decisão editorial/QA para este projeto, não uma regra
de classificação ou promessa de exibição integral. A atualização do resultado
depende de nova coleta e processamento, e o Google pode reescrever o título.
[Fonte oficial: links de título](https://developers.google.com/search/docs/appearance/title-link?hl=pt-BR).

## Escopo preservado

Somente New Tractor. Não alterar URLs, redirects, textos visíveis, H1,
descrições, imagens, oferta comercial, empresas, cidades, estilos, JavaScript,
política de bots, DNS, e-mail, Analytics ou contas de outros clientes.
Os sitemaps conservam as mesmas 594 URLs canônicas e os mesmos dez arquivos;
o build atualiza as datas das páginas revisadas. `llms.txt` deriva dos títulos
finais, sem mudança de destinos ou descrições.

Base Git: `4b7fa7f4579216be09af31b1bfd890035e641ebe` (PR26).
O checkout original com mudanças do usuário permanece intocado; esta revisão
usa um worktree isolado. Rollback: reverter somente o PR desta revisão e
acompanhar o build. Nenhuma exclusão física ou mudança de infraestrutura.

## Validação e publicação

Comparação automatizada com a base publicada:

- 595 títulos únicos, todos com até 65 caracteres; 594 páginas indexáveis.
- 203/203 títulos do relatório corrigidos.
- 484 títulos revisados: 455 páginas por cidade/especialidade (o formato
  aprovado é consistente em todas elas), 16 por setor/especialidade e 13
  outras páginas. Os demais 111 títulos e suas datas foram preservados.
- Todos os 595 objetos de página permanecem idênticos fora de `title` e das
  datas efetivamente revisadas. Nenhuma alteração de corpo, H1, descrição,
  rotas ou fragmentos de dados estruturados.
- Na renderização, dados estruturados preservados exceto `WebPage.name` e
  a data da página revisada, como esperado. Um H1 por página.

Exemplos verificados:

- Contagem: `Grupo New Tractor | Cilindros hidráulicos em Contagem` (53).
- São Gonçalo do Rio Abaixo:
  `Grupo New Tractor | Peças sob demanda: São Gonçalo do Rio Abaixo` (64).
  A pontuação conserva o serviço completo sem abreviar o município.
- Rodantes: `Grupo New Tractor — Rodantes | Material rodante e manutenção` (60).
- Recuperação: `Grupo New Tractor — HidrauTractor | Recuperação de cilindros` (60).

`npm run check` aprovado: lint, build de 595 páginas e 66 testes. A compilação
Wrangler em modo dry-run também passou. Todos os assets são byte a byte iguais
à base, assim como `robots.txt`, headers, redirects, manifest e índice de
sitemaps. A revisão editorial acrescentou testes para evitar que “serviço de
campo”, “linha amarela” ou “máquinas pesadas” se percam por excesso de redução.

Preview: `f867cf1d-379e-427e-a899-3ad6ad7763f1`, em
<https://f867cf1d-new-tractor-website.williandmx.workers.dev>.
Commit, PR, QA responsiva e checagem pós-publicação devem constar no PR de
entrega, depois da conclusão dos respectivos testes e do build remoto.

Dependências instaladas a partir do lockfile sem sua alteração. A auditoria
de dependências aponta três alertas de severidade alta na cadeia de ferramentas
de desenvolvimento (`sharp` → `miniflare` → `wrangler`), ligados ao advisory
[GHSA-rgj7-g3m4-5g8c](https://github.com/advisories/GHSA-rgj7-g3m4-5g8c).
Esses pacotes não integram o JavaScript entregue ao visitante. A atualização
de ferramentas fica separada desta correção editorial; não executar um
`audit fix` indiscriminado nem afirmar que os alertas foram corrigidos.
