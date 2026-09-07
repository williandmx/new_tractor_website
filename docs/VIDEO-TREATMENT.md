# Tratamento do hero em vídeo

## Saídas

O filme institucional completo (quatro atos, ~2 min 23 s) é montado a
partir dos originais HEVC 3840×2160 em `Midia/MANHÃ/` e `Midia/TARDE/`,
com proxies HQ em `Midia/hero-fluid/proxies-hq/` e correção de cor na
paleta do site (pretos `#0b0d0e`, amarelo `#f4c400`).

O hero da home é um loop de ~32 s com um trecho de cada ato desse master
já graduado. Não usa os proxies H.264 antigos em `proxies/`.

- `public/assets/videos/hero-film-desktop-v2.mp4` — loop da home, 1280×720,
  30 fps, H.264, sem áudio, `yuv420p`, `faststart`, ~32 s, ≤ 8 MB.
- `public/assets/videos/hero-film-mobile-v2.mp4` — o mesmo loop, 960×540,
  ≤ 4 MB.
- `public/assets/videos/hero-film-full-desktop.mp4` — filme completo,
  1280×720, ~2 min 23 s, para `/pessoas/`.
- `public/assets/videos/hero-film-full-mobile.mp4` — o mesmo filme, 960×540.
- `public/assets/images/hero-film-640.webp`, `hero-film-1280.webp` e
  `hero-film-1920.webp` — posters 16:9 do frame de pessoas (t=3 s do master
  graduado).
- `public/assets/images/hero-film-people-640.webp` e
  `hero-film-people-1280.webp` — o mesmo frame, para a seção de pessoas.
- `Midia/hero-fluid/hero-newtractor-site.mp4` — master 1920×1080 graduado,
  fora do Git.

O script reprodutível é
[`scripts/prepare-hero-video.sh`](../scripts/prepare-hero-video.sh). Ele não
edita os arquivos de origem. `SKIP_FULL=1` permite regenerar somente os assets
públicos enquanto se revisa o corte curto.

## Diagnóstico da fonte

O arquivo fornecido
`hero-newtractor-quatro-atos-v1-site-stills.mp4` tem 143,5 s, 1920×1080,
30 fps, H.264 a aproximadamente 4,9 Mb/s e não tem faixa de áudio. A montagem
anterior (`build_quatro_atos.py`) primeiro cria proxies H.264 1920×1080 a partir
dos originais e depois encadeia `xfade` de 0,90 s entre planos e 1,40 s entre
atos. Esse processo explica dois problemas diferentes:

1. O blend longo produz dupla exposição/“fantasmas” visíveis em pessoas,
   ferramentas e componentes durante as transições. Não é desfoque de foco.
2. Os takes originais de câmera já têm uma estética suave, com contraluz,
   profundidade de campo rasa e alguma difusão no ambiente. Em inspeções de
   frames 3840×2160, detalhes como rodas, trilhos e máquinas permanecem
   recuperáveis, mas áreas fora do plano focal não podem ser recriadas por
   sharpening.

O corte curto recompõe os planos diretamente dos HEVC originais e limita cada
dissolução a 0,28 s. Aplica uma curva manual de níveis (preto 0→0,01,
meios-tons 0,50→0,54 e altas luzes 0,88→0,94), contraste/saturação leves e
`unsharp` moderado (0,30) depois da redução; isso reduz a aparência lavada e
melhora o microcontraste sem alegar detalhe inexistente. Não se presume um
perfil LOG nem se aplica LUT de câmera sem identificação do perfil de origem.
Fade-in/out de 0,28 s em preto torna a repetição do vídeo
no navegador discreta. Não há nomes, certificações, depoimentos ou logos novos.

## Comandos e limitações

```sh
./scripts/prepare-hero-video.sh
# durante iterações apenas do corte público:
SKIP_FULL=1 ./scripts/prepare-hero-video.sh
# somente a exportação longa, mantendo os dois cortes públicos existentes:
SKIP_SHORT=1 ./scripts/prepare-hero-video.sh
```

O loop da home permanece limitado a 1.800 kb/s (desktop) e 1.050 kb/s
(mobile). O filme completo em `/pessoas/` usa ~2,4 Mb/s em 1280×720 e
~1,2 Mb/s em 960×540, carregado só com `preload="none"` e controles. Nenhuma
faixa de áudio é incluída.

Validação: usar `ffprobe` para confirmar 30/1 fps constante, `yuv420p`, H.264,
dimensões, duração e ausência de áudio; revisar visualmente o início, cada
transição e o ponto de loop em 360 px, desktop e mobile.

## Resultado verificado para o PR

- Desktop: 31,633333 s, 5.193.530 bytes, 1280×720.
- Mobile: 31,633333 s, 3.099.443 bytes, 960×540.
- Ambos: H.264, `yuv420p`, 30/1 fps, sem áudio, `moov` antes de `mdat`.
- Corrigidos os pontos de entrada de C3723 e C3728: os originais têm
  5,5055 s; o ponto de entrada antigo deixava o segundo plano curto demais
  para o próximo `xfade`, truncando a montagem em 7,83 s. Os inputs agora
  têm 4,20 s disponíveis, com timestamps normalizados antes das transições.
- Os testes Node do projeto validam duração, integridade e orçamento dos MP4
  finais, sem exigir os originais de câmera no CI.

## Loop de abertura do grupo — 2026-09-07

O loop institucional curto usa somente o filme público já autorizado
`public/assets/videos/hero-film-full-desktop.mp4`. A montagem seleciona quatro
intervalos de três segundos, com cortes secos entre eles:

| Intervalo na fonte | Conteúdo visível | Posição no loop |
| --- | --- | --- |
| 00:02.000–00:05.000 | Pessoa com proteção | 00:00–00:03 |
| 00:44.000–00:47.000 | Soldagem | 00:03–00:06 |
| 01:18.000–01:21.000 | Usinagem | 00:06–00:09 |
| 01:56.000–01:59.000 | Conjuntos de material rodante | 00:09–00:12 |

O filme completo foi amostrado visualmente em frames de dez em dez segundos e
os intervalos foram revisados em frames de meio em meio segundo; não há
captions ou texto queimado nos trechos usados. O tratamento preserva cor e
enquadramento da fonte, remove áudio por mapeamento de vídeo único e aplica
somente fade de entrada em 0,00–0,25 s e fade de saída em 11,75–12,00 s. Não
há texto, identidade ou capacidade de máquina inferida pelo corte.

As saídas verificadas são:

| Arquivo | Dimensão | Duração | Codec / pixel | Tamanho |
| --- | ---: | ---: | --- | ---: |
| `group-opening-desktop.mp4` | 1280 × 720 | 12,000 s | H.264, `yuv420p`, 30 fps | 2.636.480 bytes |
| `group-opening-mobile.mp4` | 960 × 540 | 12,000 s | H.264, `yuv420p`, 30 fps | 1.833.284 bytes |

Ambos os MP4 são sem áudio, usam `faststart` e ficam abaixo dos limites de 4
MB (desktop) e 2 MB (mobile). Os posters `group-opening-1280.webp` (1280 ×
720, 31.420 bytes) e `group-opening-640.webp` (640 × 360, 11.526 bytes) são
frames extraídos diretamente da fonte em 00:02.500, antes de qualquer texto ou
composição do site.

O comando reprodutível é:

```sh
./scripts/prepare-group-opening.sh
```
