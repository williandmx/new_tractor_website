# Títulos institucionais — 10/09/2026

## Direção aprovada

O usuário solicitou títulos com o Grupo New Tractor em primeiro plano,
seguidos pela empresa/frente responsável e pelo assunto da página. Para a
home, pediu foco no grupo industrial e a mensagem: “Conectamos técnicos,
estrutura industrial e tecnologia para cuidar da sua frota.” A captura de
tela mostra a apresentação anterior no Google; não é uma garantia de como
o próximo resultado será exibido.

## Padrão editorial

- Home: `Grupo New Tractor | Soluções industriais para sua frota`.
- Frentes e páginas relacionadas: `Grupo New Tractor — Frente | Assunto`.
- Institucional, território e conteúdos que integram várias frentes:
  `Grupo New Tractor | Assunto`.
- Nas páginas regionais, conservar serviço e município; nas setoriais,
  conservar serviço e aplicação. Não trocar todos os assuntos por um slogan.
- Usar a marca “Calderaria” e a grafia técnica “caldeiraria” em seus papéis
  correspondentes, sem alterar nomes comerciais ou URLs.
- Não repetir “New Tractor” duas vezes no mesmo título para expandir o nome
  da frente. São marcas endossadas pelo grupo, não novas pessoas jurídicas.

A regra de composição fica em `src/seo-metadata.mjs`, aplicada na exportação
de `pages` em `src/site.mjs`. Os títulos finais alimentam HTML, Open Graph,
Twitter Card, `WebPage.name` e os links de `llms.txt`. Assuntos originais dos
módulos editoriais são normalizados nessa etapa; exceções de concisão e
associação à frente são explícitas. Não há truncamento automático de palavras.

Inventário completo desta revisão: [595 títulos por URL](titulos-2026-09-10.json),
incluindo as 594 páginas indexáveis e a página 404 não indexável. Todos são
únicos e respeitam o guardrail do projeto, com máximo de 75 caracteres.

## Home e identidade do site

Título e abertura deixam de limitar a apresentação do grupo à linha amarela
em Minas Gerais. Serviços, base em Belo Horizonte, cobertura condicionada,
história, estrutura e limites comerciais permanecem no conteúdo.

Descrição: “Conectamos técnicos, estrutura industrial e tecnologia para
cuidar da sua frota. Manutenção de máquinas pesadas e fabricação de peças
sob demanda.”

H1: “Soluções industriais. Cuidado com a sua frota.” A frase do proprietário
também aparece no primeiro parágrafo visível. Mantido exatamente um H1.
O nó `WebSite` existente conserva `name: Grupo New Tractor` e recebe
`alternateName: New Tractor`; não foi criado um segundo site no schema.

## SEO e limites

O Google recomenda títulos descritivos, concisos e distintos. Não existe
limite universal de 60 caracteres: a exibição depende da largura disponível.
O guardrail de até 75 caracteres é uma decisão de QA deste projeto, não uma
garantia de exibição integral. Marca no início é a preferência editorial do
responsável. Fonte: [Google — title links](https://developers.google.com/search/docs/appearance/title-link).

Nome do site e título de página são elementos diferentes. `WebSite`,
`og:site_name` e conteúdo coerente indicam uma preferência; a escolha final
continua automática. Fonte: [Google — site names](https://developers.google.com/search/docs/appearance/site-names).

O Google pode selecionar outro trecho para a descrição e reescrever títulos
conforme a consulta. A captura de resultados não muda instantaneamente após
o deploy: depende de nova coleta e processamento. Fonte:
[Google — snippets](https://developers.google.com/search/docs/appearance/snippet).

## Escopo e publicação

Somente New Tractor. Sem alteração em outros clientes, DNS, e-mail, contas de
analytics, política de bots, rotas ou ofertas comerciais. O checkout original
com mudanças locais foi preservado; esta entrega usa worktree isolado.
Sitemap e `llms.txt` são regenerados a partir das mesmas páginas. A data de
modificação muda apenas nas entradas efetivamente revisadas.

Preview desta revisão: `8d6be940-8b4b-493c-b237-e562ebcf9564`, em
<https://8d6be940-new-tractor-website.williandmx.workers.dev>.
`npm run check` aprovado, com lint, build de 595 páginas e testes de metadados,
schema, descoberta, navegação e isolamento de previews. O diff do conteúdo
editorial confirma que só a home mudou no corpo e na descrição; URLs e saídas
canônicas foram preservadas. Registrar QA visual e conferência pós-publicação
no PR de entrega, depois da conclusão de Workers Builds.

Validação do preview: 595 rotas responderam com o título esperado e isolamento
`noindex`. Home testada em 360, 375, 768 e 1440 px, sem overflow horizontal ou
cortes; skip link, abertura do menu por teclado e fechamento por Escape
funcionam. Conteúdo e navegação principal permanecem disponíveis sem JavaScript.
O CTA destacado do menu fica oculto nesse modo, comportamento preexistente
fora do escopo desta revisão; os demais links de contato permanecem no HTML.

Lighthouse local da home: Performance, Acessibilidade e Boas práticas 100 em
mobile e desktop; LCP de 1,9 s e 0,5 s, respectivamente, e CLS 0. SEO 69 no
ambiente de teste por `noindex`, intencional e não aplicável ao domínio de
produção. São medições de laboratório, não dados de campo nem garantia futura.
Suíte final: 59 testes aprovados.

Rollback: reverter o PR desta alteração e acompanhar o build, preservando os
PRs anteriores e qualquer mudança alheia. Nenhum rollback de infraestrutura
é necessário.
