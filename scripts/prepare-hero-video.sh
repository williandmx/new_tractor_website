#!/usr/bin/env bash
set -euo pipefail

# Rebuild the public hero from the camera originals.  The source material lives
# outside this repository; generated public assets are the only files written in
# the repo.  The long treated export is intentionally kept in Midia/hero-fluid.

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MEDIA_ROOT="${REPO_ROOT}/../Midia/hero-fluid"
MANHA_ROOT="${MEDIA_ROOT}/../MANHÃ"
TARDE_ROOT="${MEDIA_ROOT}/../TARDE"
VIDEO_OUT="${REPO_ROOT}/public/assets/videos"
IMAGE_OUT="${REPO_ROOT}/public/assets/images"

DESKTOP_OUT="${VIDEO_OUT}/hero-film-desktop-v2.mp4"
MOBILE_OUT="${VIDEO_OUT}/hero-film-mobile-v2.mp4"
FULL_OUT="${MEDIA_ROOT}/hero-newtractor-quatro-atos-v1-site-stills-treated.mp4"
POSTER_1920="${IMAGE_OUT}/hero-film-1920.webp"

for tool in ffmpeg ffprobe; do
  command -v "${tool}" >/dev/null || {
    echo "missing required command: ${tool}" >&2
    exit 1
  }
done

mkdir -p "${VIDEO_OUT}" "${IMAGE_OUT}"

# Eight short, documentary shots selected from the originals.  All source
# clips are 3840x2160 HEVC 10-bit camera files; no proxy is used here.
INPUTS=(
  -ss 1.60 -t 4.20 -i "${MANHA_ROOT}/C3730.MP4" # people / operation
  # C3723 is 5.505 s long; start at 1.00 s so a complete 4.20 s segment remains.
  -ss 1.00 -t 4.20 -i "${MANHA_ROOT}/C3723.MP4" # components
  -ss 1.20 -t 4.20 -i "${TARDE_ROOT}/C3765.MP4" # structure / machine
  -ss 2.60 -t 4.20 -i "${TARDE_ROOT}/C3767.MP4" # component operation
  -ss 1.20 -t 4.20 -i "${MANHA_ROOT}/C3732.MP4" # people / process
  -ss 2.40 -t 4.20 -i "${TARDE_ROOT}/C3780.MP4" # machining detail
  # C3728 is also 5.505 s long; leave headroom after the seek.
  -ss 1.00 -t 4.20 -i "${MANHA_ROOT}/C3728.MP4" # material / track assembly
  -ss 1.20 -t 4.20 -i "${MANHA_ROOT}/C3710.MP4" # facility
)

build_filter() {
  local width="$1"
  local height="$2"
  local filter=""
  local i
  for i in {0..7}; do
    filter+="[${i}:v]trim=duration=4.20,setpts=PTS-STARTPTS,scale=${width}:${height}:force_original_aspect_ratio=increase,crop=${width}:${height},setsar=1,fps=30,curves=all='0/0.01 0.06/0.025 0.50/0.54 0.88/0.94 1/1',eq=contrast=1.10:brightness=-0.02:saturation=1.08:gamma=0.98,unsharp=5:5:0.30:5:5:0.0,format=yuv420p[v${i}];"
  done
  # Each clip is 4.20 s and each transition is 0.28 s.  The short dissolves
  # retain continuity without the long double-exposure seen in the old proxy
  # assembly.  The final fade-to-black makes the browser loop unobtrusive.
  filter+="[v0][v1]xfade=transition=fade:duration=0.28:offset=3.92[x1];"
  filter+="[x1][v2]xfade=transition=fade:duration=0.28:offset=7.84[x2];"
  filter+="[x2][v3]xfade=transition=fade:duration=0.28:offset=11.76[x3];"
  filter+="[x3][v4]xfade=transition=fade:duration=0.28:offset=15.68[x4];"
  filter+="[x4][v5]xfade=transition=fade:duration=0.28:offset=19.60[x5];"
  filter+="[x5][v6]xfade=transition=fade:duration=0.28:offset=23.52[x6];"
  filter+="[x6][v7]xfade=transition=fade:duration=0.28:offset=27.44[x7];"
  filter+="[x7]fade=t=in:st=0:d=0.28,fade=t=out:st=31.36:d=0.28,format=yuv420p[out]"
  printf '%s' "${filter}"
}

encode_short() {
  local width="$1"
  local height="$2"
  local output="$3"
  local crf="$4"
  local maxrate_kbps="$5"
  echo "encoding ${output} (${width}x${height}) from camera originals"
  ffmpeg -hide_banner -loglevel warning -y -threads 4 -filter_complex_threads 2 \
    "${INPUTS[@]}" \
    -filter_complex "$(build_filter "${width}" "${height}")" \
    -map "[out]" -an -r 30 -fps_mode cfr \
    -c:v libx264 -preset medium -crf "${crf}" \
    -maxrate "${maxrate_kbps}k" -bufsize "$((maxrate_kbps * 2))k" \
    -pix_fmt yuv420p -profile:v high -level:v 3.1 \
    -movflags +faststart -color_range tv \
    -color_primaries bt709 -color_trc bt709 -colorspace bt709 \
    "${output}"
}

if [[ "${SKIP_SHORT:-0}" != "1" ]]; then
  encode_short 1280 720 "${DESKTOP_OUT}" 22 1800
  encode_short 960 540 "${MOBILE_OUT}" 23 1050
else
  echo "SKIP_SHORT=1: leaving public short videos unchanged"
fi

# Preserve the authored full-length cut as a separate, technically cleaner
# export.  It still contains the source edit's intentional transitions, but it
# is not the public short hero and is never used as a proxy input above.
if [[ "${SKIP_FULL:-0}" != "1" ]]; then
  echo "encoding full treated export ${FULL_OUT}"
  ffmpeg -hide_banner -loglevel warning -y \
    -i "${MEDIA_ROOT}/hero-newtractor-quatro-atos-v1-site-stills.mp4" \
    -an -vf "fps=30,curves=all='0/0.01 0.06/0.025 0.50/0.53 0.88/0.94 1/1',eq=contrast=1.08:brightness=-0.015:saturation=1.06:gamma=0.99,unsharp=5:5:0.20:5:5:0.0,format=yuv420p" \
    -c:v libx264 -preset medium -crf 22 -maxrate 2200k -bufsize 4400k \
    -threads 4 \
    -pix_fmt yuv420p -profile:v high -level:v 4.0 -r 30 -fps_mode cfr \
    -movflags +faststart -color_range tv \
    -color_primaries bt709 -color_trc bt709 -colorspace bt709 \
    "${FULL_OUT}"
else
  echo "SKIP_FULL=1: leaving full treated export unchanged"
fi

# Poster uses a full-resolution camera frame from the opening people/process
# shot, then derives the responsive sizes from that same graded frame.
echo "writing responsive posters"
ffmpeg -hide_banner -loglevel warning -y -threads 4 \
  -ss 2.40 -i "${MANHA_ROOT}/C3730.MP4" -frames:v 1 \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,curves=all='0/0.01 0.06/0.025 0.50/0.54 0.88/0.94 1/1',eq=contrast=1.10:brightness=-0.02:saturation=1.08:gamma=0.98,unsharp=5:5:0.30:5:5:0.0" \
  -c:v libwebp -quality 86 -compression_level 6 "${POSTER_1920}"
ffmpeg -hide_banner -loglevel warning -y -i "${POSTER_1920}" -vf scale=1280:720 -c:v libwebp -quality 84 -compression_level 6 "${IMAGE_OUT}/hero-film-1280.webp"
ffmpeg -hide_banner -loglevel warning -y -i "${POSTER_1920}" -vf scale=640:360 -c:v libwebp -quality 82 -compression_level 6 "${IMAGE_OUT}/hero-film-640.webp"
cp "${IMAGE_OUT}/hero-film-1280.webp" "${IMAGE_OUT}/hero-film-people-1280.webp"
cp "${IMAGE_OUT}/hero-film-640.webp" "${IMAGE_OUT}/hero-film-people-640.webp"

echo "--- generated hero assets ---"
du -h "${DESKTOP_OUT}" "${MOBILE_OUT}" "${POSTER_1920}" "${IMAGE_OUT}/hero-film-1280.webp" "${IMAGE_OUT}/hero-film-640.webp"
ffprobe -hide_banner -v error -select_streams v:0 \
  -show_entries stream=codec_name,width,height,pix_fmt,avg_frame_rate,duration,bit_rate \
  -of default=nw=1 "${DESKTOP_OUT}"
ffprobe -hide_banner -v error -select_streams v:0 \
  -show_entries stream=codec_name,width,height,pix_fmt,avg_frame_rate,duration,bit_rate \
  -of default=nw=1 "${MOBILE_OUT}"
