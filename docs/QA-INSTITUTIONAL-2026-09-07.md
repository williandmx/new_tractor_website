# QA — apresentação institucional do Grupo New Tractor

Data: 07/09/2026. Repositório: `williandmx/new_tractor_website`.
Base de desenvolvimento: `c1cb38c`; branch local: `feat/institutional-group`.

## Escopo entregue para avaliação

- Home institucional com abertura em vídeo, visão do grupo, sete especialidades,
  estrutura, pessoas, setores, relações e contatos reais.
- Páginas do grupo e das sete frentes com linguagem editorial revisada; nova
  `/parcerias/` para clientes, fornecedores e parceiros industriais.
- Logo oficial preservado; fotografias e filmes do acervo já autorizado. Abertura
  de 12 segundos extraída do filme público existente, com variantes mobile e
  desktop e poster responsivo. Procedência em `ASSET-PROVENANCE.md`.
- Referências públicas a IA, agentes e bastidores de SEO removidas. `llms.txt` e
  `agents.txt` retirados do build por orientação editorial do proprietário.
- Títulos, metadados, canonical, sitemap, HTML semântico e JSON-LD preservados.
- Benchmarks consultados: NetZero, Armac, Sotreq, Apple e Klap Tech. Aplicação
  registrada em `design-direction.md`, sem copiar marcas, conteúdo ou imagens.

## Evidências locais

`npm run check`: lint, build de 21 páginas HTML e **25 testes aprovados**, sem
falhas. `git diff --check`: sem erros. Vinte páginas indexáveis, mais 404.

Revisão em Chrome/Kimi WebBridge: 1440×900 e 390×844/360×800 nas rotas `/`,
`/empresa/`, `/parcerias/`, `/servicos/`, `/techtractor/` e `/contato/`.

- Um H1 por página; nenhum overflow horizontal no documento ou imagem quebrada.
- CTAs dentro da viewport; links e todos os assets locais referenciados retornam
  HTTP 200. Canais de telefone, WhatsApp, e-mail e mapas conferidos; sem envio.
- Menu mobile abre com estado acessível; Tab percorre os links, Escape fecha e
  devolve foco ao botão. Conteúdo sob o menu fica inerte durante a abertura.
- Subnavegação das empresas passa a quebrar linhas em celular, eliminando a
  rolagem horizontal interna observada na primeira inspeção.
- JavaScript realmente desativado via CDP: home e TechTractor mantêm conteúdo,
  navegação, CTAs e poster em 360 px. Subnav final: duas linhas, sem overflow,
  links com 44 px. JavaScript restaurado após o teste.
- Vídeo usa poster estático e `preload="none"`; só carrega quando visível e
  respeita preferência por movimento reduzido. Variante mobile confirmada.
- JSON-LD lido em todas as páginas; organização de marca e base operacional
  preservadas sem inventar sete pessoas jurídicas. Removido `foundingDate`, pois
  atuação desde 2010 não comprova data de fundação societária.
- Notícia histórica da EXPOSIBRAM usa `Article`; nó `Event` retirado por carregar
  um valor inexistente no enum [EventStatusType](https://schema.org/EventStatusType).
- Cinco perguntas/respostas do FAQ coincidem exatamente com o conteúdo visível.
- Arquivos de usuário preexistentes `docs/QA-GROUP-2026-09-06.md` e
  `public/assets/images/hero-video-poster.jpg` preservados e excluídos do commit.

## Lighthouse de laboratório

Chrome isolado, Lighthouse 13.4.1, build servido por Wrangler Pages local em
`http://localhost:8791`. Notas em ordem: performance / acessibilidade / boas
práticas / SEO. São medições de laboratório, sem dados reais de tráfego.

| Rota e perfil | Notas | FCP | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- |
| Home desktop, final | 100 / 100 / 100 / 100 | 298 ms | 388 ms | 0,000052 | 0 ms |
| Home mobile, final | 100 / 100 / 100 / 100 | 996 ms | 1.546 ms | 0 | 0 ms |
| Parcerias mobile, final | 99 / 100 / 100 / 100 | 793 ms | 1.993 ms | 0 | 48 ms |
| Rodantes mobile | 100 / 100 / 100 / 100 | 994 ms | 1.834 ms | 0 | 0 ms |

Contraste dos números das frentes e breadcrumbs corrigido; auditoria de contraste
aprovada nas medições finais. Relatórios brutos desta sessão em
`/tmp/newtractor-qa-20260907/` (artefatos locais temporários).

## Publicação e limite de aprovação

Entrega restrita ao preview do projeto Cloudflare Pages existente
`newtractor-site`, conta `15586705c7bc857acbd94b5e48ed6d6b`, ambiente
`institutional-group`. O domínio público, DNS, nameservers e registros de e-mail
não foram alterados. A decisão de apontar o domínio permanece com o proprietário.

Metadados e sitemap mantêm `https://newtractor.com.br` como destino canônico da
futura migração. O header `X-Robots-Tag: noindex, nofollow` protege `pages.dev`.
A publicação usa upload direto do build validado, sem promover a branch `main`.

## Preview publicado e verificado

- URL versionada: https://951d4336.newtractor-site.pages.dev/
- Alias: https://institutional-group.newtractor-site.pages.dev/
- Deployment: `951d4336-9db0-457e-b0ed-c3d6ec26d022`, ambiente `Preview`.
- Upload direto concluído com sucesso: 120 arquivos, 27 enviados e 93 em cache.
- Registro de origem no Cloudflare: base `c1cb38c` com `commit-dirty=true`; o
  código desta entrega é versionado localmente após o registro do deploy.
- Vinte rotas públicas: HTTP 200, H1 único, JSON-LD parseável e canonical correto.
- Raiz remota idêntica, byte a byte, à saída HTML local validada.
  SHA-256: `6c56682d8af7058081765de75096239573584fceabadbe9fdbd4501689dc5b03`.
- CSS, dois scripts e dois posters remotos também idênticos aos arquivos locais.
- Requisições com user agents Googlebot e GPTBot: HTTP 200 com HTML completo e
  `noindex` esperado. Uma consulta com User-Agent padrão do Python recebeu 403;
  as consultas de QA, Chrome e os user agents acima funcionaram normalmente.
- `robots.txt`, `sitemap.xml`, CSS e vídeos: HTTP 200; URL inexistente,
  `llms.txt` e `agents.txt`: HTTP 404 real.
- `X-Robots-Tag: noindex, nofollow` confirmado em todas as respostas consultadas.
- Inspeção visual final da home publicada em desktop e 360 px aprovada.
- Lighthouse **remoto mobile**: performance **99**, acessibilidade **100**, boas
  práticas **100**, SEO **69**. FCP 1.106 ms, LCP 1.587 ms, CLS 0, TBT 66 ms.
  A única reprovação SEO é o `noindex` obrigatório do preview. No build local,
  sem esse header restrito ao host `pages.dev`, SEO marcou 100.
- As oportunidades restantes do Lighthouse são otimizações de peso de imagens,
  CSS e recalculo de layout; nenhum bloqueador de leitura, contraste ou uso.

Rollback de revisão: abrir o preview anterior
https://79240147.newtractor-site.pages.dev/ ou reconstruir a base `c1cb38c`.
O deployment estável anterior `56c6f431` não foi promovido/substituído. Para o
futuro corte do domínio, seguir `DEPLOYMENT.md`, preservando e-mail e registrando
as configurações existentes antes de qualquer alteração.
