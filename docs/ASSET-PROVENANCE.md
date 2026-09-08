# Proveniência de assets

## Reuso editorial — 08/09/2026

As novas páginas setoriais e os guias de cilindros hidráulicos e caçambas/conchas
reutilizam as imagens já documentadas abaixo. Nenhuma imagem externa, sintética
ou nova alegação de processo foi adicionada nesta expansão. Os atributos
responsivos, dimensões e textos alternativos são gerados pelos componentes
existentes; as cenas ilustram contexto e não comprovam uma relação comercial.

As imagens e o logo deste projeto foram derivados de arquivos já publicados no
site oficial `https://newtractor.com.br/`, conforme solicitação de reconstruir o
site preservando a identidade existente.

## Origem

- Logo: `/wp-content/uploads/2022/11/newtractor-1024x315.png`
- Hero: `/wp-content/uploads/2019/11/cropped-newtractor_5.jpg`
- Estrutura da empresa: `/wp-content/uploads/2019/11/WhatsApp-Image-2022-11-10-at-10.29.21.jpeg`
- Material rodante: `/wp-content/uploads/2023/01/material-rodante.jpg`
- Reforma de caçamba: `/wp-content/uploads/2019/10/reforma_cacamba_principal.jpg`
- Monitoramento e componentes: imagens das páginas públicas de serviços de
  outubro e novembro de 2019.
- Componentes amarelos e pretos: `/wp-content/uploads/2023/01/Design-sem-nome.png`.
  O original tinha laterais transparentes; os derivados locais foram recortados
  para a área fotográfica e gerados em 640, 1200 e 1600 px como
  `componentes-industriais-*`.
- Caçamba preta no pátio: `/wp-content/uploads/.../carrousel-05-1.jpeg`,
  recuperada do carrossel público anterior e gerada em 640 e 1200 px como
  `concha-patio-*`.
- Favicon: `/wp-content/uploads/2020/01/cropped-images-1-192x192.png`

## Referências de clientes

Os 15 logotipos da grade de referências foram derivados da seção “Nossos
clientes” já publicada no site anterior:

- 2019: `cliente2.png`, `cliente4.png`, `cliente9.png`, `cliente10.png` e
  `cliente20.png` a `cliente24.png`;
- 2021: `cliente_novo1_cor_certa.jpg`;
- 2022: `armac.png`, `fagundes.png`, `flapa.png`, `tsl.png` e `vix.png`.

As marcas identificadas nesses arquivos são Armac, Fagundes, TSL Transportes,
VIX, FLAPA, SADA, ICAL, EMPA, Terrabel, InfraBrasil, Tracbel, Transamigos,
Vertical Green do Brasil, Queiroz Galvão e Skava Minas. Os derivados locais
ficam em `public/assets/images/clientes/`.

## Transformações

Os arquivos foram recortados para retirar margens do layout antigo,
redimensionados para uma tela uniforme de 400 × 180 px e convertidos para WebP,
sem modificar os logotipos. Isso reduz transferência e evita layout shift. Os
derivados ficam em `public/assets/` e preservam nomes descritivos.

Antes de publicação definitiva, o proprietário deve confirmar que mantém os
direitos de uso de todos os arquivos do site anterior.

## Regra para novas captações

### Guias e página técnica — 2026-09-07

Os guias reutilizam `material-rodante-*`, `equipe-*`, `medicao-rolete-*` e
`componentes-industriais-*`. A página técnica de Usinagem reutiliza
`componentes-industriais-*` como acervo de componentes, sem representar
estoque, capacidade ou execução de um processo específico. Nenhuma mídia foi
gerada ou alterada nesta etapa.

### Reuso na arquitetura do grupo — 2026-09-06

As páginas comerciais reutilizam somente o acervo acima: `material-rodante-*`
na Rodante; `equipe-*` (foto de máquina/pátio, não retrato de equipe) na
Hidráulica, com legenda de base do grupo; `componentes-industriais-*` na Parts,
sem representar estoque atual; e `hero-film-people-*` na Services. A fotografia
da Hidráulica não é apresentada como prova de bancada ou serviço hidráulico.
TechTractor usa uma composição tipográfica HTML/CSS de visão do projeto, sem
simular tela de produto, resultados ou criar um logo oficial novo.
Nenhum asset de mídia foi modificado por esta reorganização.

### Filme institucional — 2026-09-05

O usuário forneceu a montagem `Midia/hero-fluid/hero-newtractor-quatro-atos-v1-site-stills.mp4`
e os materiais locais para tratamento e inclusão no website. O corte público
`hero-film-*-v2.mp4` foi remontado a partir dos arquivos de câmera em
`Midia/MANHÃ/` e `Midia/TARDE/`; fontes, pontos de entrada, filtros e limitações
ficam registrados em `scripts/prepare-hero-video.sh` e `docs/VIDEO-TREATMENT.md`.
Os posters `hero-film-*` derivam de um frame de `MANHÃ/C3730.MP4`, em 2,40 s.
O material mostra pessoas e trabalho reais, sem nome/cargo inferido, sem fala
fabricada e sem selo novo. A solicitação do usuário autoriza esta integração;
a empresa deve arquivar os termos de uso de imagem e marcas antes do corte do
domínio definitivo. Data e autoria da captação devem ser confirmadas; metadados
de câmera não substituem autorização. Os originais permanecem fora do Git.

### Abertura institucional do grupo — 2026-09-07

O loop curto do grupo foi derivado exclusivamente do filme público já autorizado
`public/assets/videos/hero-film-full-desktop.mp4`. Os quatro trechos usados são
`00:02.000–00:05.000` (pessoa com proteção), `00:44.000–00:47.000`
(soldagem), `01:18.000–01:21.000` (usinagem) e `01:56.000–01:59.000`
(conjuntos de material rodante). Uma amostragem do filme completo a cada dez
segundos e a revisão dos intervalos selecionados não encontrou captions ou
texto queimado. Não foram usados arquivos de câmera, modelos de aprendizado de
máquina ou geração de imagem.

As saídas são `group-opening-desktop.mp4` (1280 × 720, 12,000 s,
2.636.480 bytes), `group-opening-mobile.mp4` (960 × 540, 12,000 s,
1.833.284 bytes), `group-opening-1280.webp` (1280 × 720, 31.420 bytes) e
`group-opening-640.webp` (640 × 360, 11.526 bytes). O vídeo mantém a cor e o
enquadramento da fonte, não tem áudio nem texto adicionado, e recebe apenas
fade de entrada e saída de 0,25 s. Os posters são frames diretamente da fonte
em `00:02.500`, exportados nas duas dimensões.

O tratamento é reproduzível em `scripts/prepare-group-opening.sh`. A empresa
deve arquivar os termos de uso de imagem e marcas antes do corte do domínio
definitivo; essa necessidade também se aplica a este derivado.

Toda foto nova deve registrar data, unidade, autoria, autorização de pessoas e
marcas visíveis. Documentos, placas, telas, números de série e marcas de cliente
devem ser removidos ou autorizados antes da publicação. Não encenar trabalho
inseguro para fotografia.


## Reuso nos componentes — 08/09/2026

Nenhuma mídia nova foi criada ou importada. As páginas de componentes reutilizam imagens públicas já tratadas neste projeto e empregadas no site anterior desta branch:

| Rota | Asset reutilizado | Dimensões declaradas |
|---|---|---|
| `/componentes/` | `material-rodante-640.webp`, `material-rodante-1200.webp` | referência 1200 × 675 |
| `/componentes/rodas-guia/` | `roda-guia-640.webp` | 640 × 427 |
| `/componentes/roletes-de-esteira/` | `medicao-rolete-640.webp` | 640 × 427 |
| `/componentes/correntes-sapatas-esteiras/` | `rosario-640.webp` | 640 × 427 |
| `/guias/folgas-pinos-buchas-alojamentos/` | `medicao-rolete-640.webp` | 640 × 427 |

A foto de medição é identificada pelo componente mostrado, sem tratá-la como um case de articulação ou de pinos/buchas. `pageHero` usa o helper de imagem com srcset, sizes, width, height e alt. Origem e condições de uso seguem o registro prévio dos assets públicos.

As fotos específicas de roda-guia, rosário e medição têm fonte disponível de 640 px. O layout se adapta à viewport com dimensões e srcset; não foi feito aumento artificial de resolução. Uma futura captação em maior resolução pode melhorar a apresentação em telas de alta densidade.
# Reuso na ampliação por equipamento e território — 08/09/2026

As novas páginas reaproveitam somente imagens já registradas neste documento: `equipe-{640,1200}.webp` (escavadeiras e Minas Gerais; proporção 1200×675), `material-rodante-{640,1200}.webp` (tratores de esteira; 1200×675) e `concha-patio-{640,1200}.webp` (pás carregadeiras; 1200×612). Mantidos `width`, `height`, `alt`, `srcset` e `sizes`, sem geração, alteração raster ou ampliação artificial. As fotos ilustram ativos e contexto próprios; não são prova de execução ou bancada hidráulica, atendimento municipal ou compatibilidade por modelo.

## Derivados documentais para HidrauTractor — 08/09/2026

O proprietário autorizou explicitamente, nesta tarefa, o uso de fotos presentes
na pasta `Midia` para o site. Foram selecionados dois frames dos arquivos de
captação de câmera originais, sem uso de `imagine-stills`, geração de imagem,
texto queimado, recorte ou tratamento artístico. A única derivação foi a
extração do frame em `00:01.20` e a conversão WebP nas duas larguras abaixo,
preservando a proporção 16:9. Os vídeos e arquivos originais não foram
alterados.

| Uso editorial | Original de captação | Saídas públicas | Fato visível e legenda segura |
|---|---|---|---|
| Recuperação, como contexto documental | `Midia/TARDE/C3757.MP4` — `/home/willian/Projects/company_standard/New_tractor/Midia/TARDE/C3757.MP4` | `hidrau-recuperacao-640.webp` (640 × 360) e `hidrau-recuperacao-1280.webp` (1280 × 720) | Operador com proteção ocular junto a uma máquina e componente metálico cilíndrico em dispositivo. Legenda: “Componente cilíndrico em avaliação”. O enquadramento não identifica com segurança o componente como cilindro hidráulico nem comprova uma etapa de recuperação. |
| Fabricação, como contexto de usinagem | `Midia/TARDE/TARDE-20260310T184028Z-1-001/TARDE/C3817.MP4` — `/home/willian/Projects/company_standard/New_tractor/Midia/TARDE/TARDE-20260310T184028Z-1-001/TARDE/C3817.MP4` | `hidrau-fabricacao-640.webp` (640 × 360) e `hidrau-fabricacao-1280.webp` (1280 × 720) | Peça cilíndrica presa em torno, com ferramenta e fluido visíveis. Legenda: “Peça cilíndrica em torno”. A imagem não prova material, medida, tolerância ou que a peça seja um cilindro hidráulico específico. |

Os quatro WebPs foram derivados diretamente desses dois arquivos HEVC de
3840 × 2160 (16:9), sem ampliação artificial, e tiveram inspeção visual após a
conversão. Há pessoa, sinalização de segurança e marcação desgastada de
máquina no acervo; nenhum conteúdo foi removido. Data de captação, autoria,
unidade e termos de uso de imagem não estão identificados neste registro. A
autorização desta tarefa cobre o uso no site, mas não substitui o arquivamento
dessas informações e das permissões de pessoas e marcas antes do corte do
domínio, conforme a regra geral deste documento.

Esses stills são derivados independentes para a frente hidráulica. Os assets de
filme `film-hidrautractor-*` preexistentes permanecem inalterados e não devem
ser tratados como os mesmos arquivos nem como fonte desses WebPs.
