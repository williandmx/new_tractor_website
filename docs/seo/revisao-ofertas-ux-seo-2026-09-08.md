# Revisão das ofertas — UX, UI e SEO

Revisão em 08/09/2026 da branch `feat/servicos-oferta-descoberta-20260908`
(`b1a80b2`), integrada à main `5f60c8c`. Na consulta ao GitHub, não havia PR
aberto; essa era a branch nova encontrada. Seu diff desde a base comum
`9f6137c` tinha três arquivos e 64 adições. A divergência com a main não
representava remoções de páginas hidráulicas: o merge de três vias as preservou.

## Antes e depois

| Aspecto | Main anterior / proposta recebida | Implementação revisada |
|---|---|---|
| Catálogo principal | Três cards na main; módulo novo com três links não consumido pelo build | Seis especialidades integradas com fotos existentes, marca responsável, escopo e ações |
| Cilindros | Hub e duas páginas já publicados na main | Acesso destacado a recuperação e fabricação no catálogo |
| Busca pelo sintoma | Seis blocos extensos na sequência do catálogo | Seis detalhes expansíveis nativos, com todo o conteúdo e links no HTML inicial |
| Endereços propostos | Três slugs sem páginas | Seis regras 301 (com/sem barra) para três destinos canônicos existentes |
| Dados estruturados | FAQ e Breadcrumb no hub | ItemList correspondente aos seis cards, além do FAQ e Breadcrumb |
| Robôs | Grupos específicos redundantes na proposta | Uma política geral com bloqueio de `/404.html`; referência a llms.txt em comentário; noindex/nofollow de pages.dev preservado |
| Evidência Ubersuggest | Período ausente e inferências de SERP sem consulta correspondente | Coleta bruta registrada, período 202608 e limites explícitos |
| Inventário | 44 URLs em dez sitemaps | Mesmas 44 URLs em dez sitemaps; aliases fora do inventário |

As fotos reutilizadas estão identificadas em `docs/ASSET-PROVENANCE.md`. O
catálogo usa o padrão de cores, tipografia, espaçamento, foco e componentes do
site. No celular, os cards ocupam uma coluna; em telas intermediárias,
imagem e texto ficam lado a lado. A entrada Services qualifica a demanda e
condiciona mobilização/logística à operação, sem acrescentar promessa de
reparo local, equipe residente ou prazo.

## Validação local

- `npm run check`: lint, build e 34 testes aprovados; 45 documentos HTML,
  dos quais 44 têm intenção de indexação no domínio canônico.
- Cinco larguras: 360, 375, 768, 1024 e 1365 px; sem rolagem horizontal,
  falhas de rede ou sobreposição do cabeçalho na âncora do catálogo.
- Navegação por teclado, foco visível, seis cards e correspondência exata
  entre seus nomes/destinos e ItemList.
- Expansão dos sintomas com Enter em todos os tamanhos; operação sem
  JavaScript também validada em 360 e 1365 px.
- Inspeção visual dos screenshots de hero, catálogo e sintomas em celular
  e desktop. Regressão dos hubs HidrauTractor, Calderaria e Services verificada.
- O teste de equivalência FAQ foi delimitado à seção de dúvidas; os detalhes
  de sintomas não são classificados artificialmente como perguntas no schema.

| Lighthouse 13.4.1, servidor local | Desempenho | Acessibilidade | Boas práticas | SEO | LCP | CLS |
|---|---:|---:|---:|---:|---:|---:|
| Mobile | 93 | 100 | 100 | 100 | 3,2 s | 0 |
| Desktop | 100 | 100 | 100 | 100 | 0,7 s | 0 |

Ensaios de laboratório de 08/09/2026, sem erros de execução. O hero é o LCP
no celular; o servidor local não reproduz cache e compressão do Cloudflare.
Essas notas não medem posicionamento no Google nem Core Web Vitals de usuários
reais. [Registro compacto de QA](dados/revisao-ofertas-qa-2026-09-08.json).

## Impacto e acompanhamento

A mudança melhora a descoberta dos serviços, a navegação interna e o caminho
até a solicitação comercial. Ela não acrescenta novas capacidades industriais
ou páginas municipais e não implica aumento instantâneo de ranking. O
[benchmark corrigido](concorrencia-ofertas-2026-09-08.md) mantém estimativas do
Ubersuggest separadas de visitas e conversões reais.

Após disponibilização e indexação no domínio canônico, comparar mensalmente
consultas não relacionadas à marca, páginas de entrada e solicitações por
especialidade. Em quatro a oito semanas, a revisão serve para observar sinais
de descoberta e uso; em três a seis meses, para reavaliar cobertura e conversões,
sem prazo garantido de resultado. DNS e Search Console permanecem fora desta
entrega. A quantidade de sitemaps permanece determinada pela arquitetura:
redirecionamentos não são páginas adicionais.
