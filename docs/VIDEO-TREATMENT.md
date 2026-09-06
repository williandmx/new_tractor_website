# Tratamento do hero em vídeo

## Saídas

O corte público curto usa somente os originais de câmera HEVC 3840×2160
10-bit em `Midia/MANHÃ/` e `Midia/TARDE/`; os proxies H.264 da pasta
`Midia/hero-fluid/proxies/` não entram na nova montagem.

- `public/assets/videos/hero-film-desktop-v2.mp4` — 1280×720, 30 fps, H.264,
  sem áudio, `yuv420p`, `faststart`, aproximadamente 32 s.
- `public/assets/videos/hero-film-mobile-v2.mp4` — 960×540, 30 fps, H.264,
  sem áudio, `yuv420p`, `faststart`, aproximadamente 32 s.
- `public/assets/images/hero-film-640.webp`, `hero-film-1280.webp` e
  `hero-film-1920.webp` — posters 16:9 responsivos do frame de câmera do
  primeiro plano de pessoas/operação.
- `public/assets/images/hero-film-people-640.webp` e
  `hero-film-people-1280.webp` — o mesmo frame real de pessoa trabalhando,
  separado para a seção de pessoas; não usa `equipe-1200.webp` nem uma imagem
  de fachada.
- `Midia/hero-fluid/hero-newtractor-quatro-atos-v1-site-stills-treated.mp4` —
  exportação completa tratada, fora do Git; preserva a duração e a ordem da
  montagem longa original.

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

O desktop é limitado a 1.800 kb/s e o mobile a 1.050 kb/s para manter os
arquivos dentro do orçamento web (o tamanho final deve ser conferido pelo
script). A exportação longa usa 2.200 kb/s e prioriza qualidade dentro de um
arquivo bem menor que a fonte; ela conserva as transições já editadas, pois
remover cada blend exigiria remontar todos os planos longos a partir dos
originais. Nenhuma faixa de áudio é incluída.

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
