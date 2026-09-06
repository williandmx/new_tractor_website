# Proveniência de assets

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

Toda foto nova deve registrar data, unidade, autoria, autorização de pessoas e
marcas visíveis. Documentos, placas, telas, números de série e marcas de cliente
devem ser removidos ou autorizados antes da publicação. Não encenar trabalho
inseguro para fotografia.
