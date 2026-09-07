#!/usr/bin/env bash
set -euo pipefail

# Rebuild the short institutional group opening from the already published
# full-length film. The source is read only; this script writes the approved
# public loop and its responsive posters.

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE="${REPO_ROOT}/public/assets/videos/hero-film-full-desktop.mp4"
VIDEO_OUT="${REPO_ROOT}/public/assets/videos"
IMAGE_OUT="${REPO_ROOT}/public/assets/images"

DESKTOP_OUT="${VIDEO_OUT}/group-opening-desktop.mp4"
MOBILE_OUT="${VIDEO_OUT}/group-opening-mobile.mp4"
POSTER_640="${IMAGE_OUT}/group-opening-640.webp"
POSTER_1280="${IMAGE_OUT}/group-opening-1280.webp"

for tool in ffmpeg ffprobe; do
  command -v "${tool}" >/dev/null || {
    echo "missing required command: ${tool}" >&2
    exit 1
  }
done

[[ -f "${SOURCE}" ]] || {
  echo "missing source film: ${SOURCE}" >&2
  exit 1
}

mkdir -p "${VIDEO_OUT}" "${IMAGE_OUT}"

# Four clean three-second selections from the source film. They retain the
# source's framing and color. The ranges were reviewed frame-by-frame for the
# absence of burned-in captions or other overlaid text.
build_filter() {
  local width="$1"
  local height="$2"
  cat <<EOF
[0:v]trim=start=2:end=5,setpts=PTS-STARTPTS,scale=${width}:${height}:flags=lanczos,setsar=1,fps=30[p0];
[0:v]trim=start=44:end=47,setpts=PTS-STARTPTS,scale=${width}:${height}:flags=lanczos,setsar=1,fps=30[p1];
[0:v]trim=start=78:end=81,setpts=PTS-STARTPTS,scale=${width}:${height}:flags=lanczos,setsar=1,fps=30[p2];
[0:v]trim=start=116:end=119,setpts=PTS-STARTPTS,scale=${width}:${height}:flags=lanczos,setsar=1,fps=30[p3];
[p0][p1][p2][p3]concat=n=4:v=1:a=0[joined];
[joined]fade=t=in:st=0:d=0.25,fade=t=out:st=11.75:d=0.25,format=yuv420p[out]
EOF
}

encode_loop() {
  local width="$1"
  local height="$2"
  local output="$3"
  local crf="$4"
  echo "encoding ${output} (${width}x${height})"
  ffmpeg -hide_banner -loglevel warning -y -threads 4 -filter_complex_threads 2 \
    -i "${SOURCE}" \
    -filter_complex "$(build_filter "${width}" "${height}")" \
    -map "[out]" -an -r 30 -fps_mode cfr \
    -c:v libx264 -preset medium -crf "${crf}" \
    -pix_fmt yuv420p -profile:v high -level:v 3.1 \
    -movflags +faststart -color_range tv \
    -color_primaries bt709 -color_trc bt709 -colorspace bt709 \
    "${output}"
}

encode_loop 1280 720 "${DESKTOP_OUT}" 22
encode_loop 960 540 "${MOBILE_OUT}" 23

# The poster is a frame from the opening people shot in the same source film,
# exported directly at both responsive sizes. No text or treatment is added.
echo "writing responsive posters"
ffmpeg -hide_banner -loglevel warning -y -ss 2.50 -i "${SOURCE}" \
  -frames:v 1 -vf "scale=1280:720:flags=lanczos,setsar=1" \
  -c:v libwebp -quality 84 -compression_level 6 "${POSTER_1280}"
ffmpeg -hide_banner -loglevel warning -y -ss 2.50 -i "${SOURCE}" \
  -frames:v 1 -vf "scale=640:360:flags=lanczos,setsar=1" \
  -c:v libwebp -quality 82 -compression_level 6 "${POSTER_640}"

echo "--- generated group opening assets ---"
du -h "${DESKTOP_OUT}" "${MOBILE_OUT}" "${POSTER_1280}" "${POSTER_640}"
for output in "${DESKTOP_OUT}" "${MOBILE_OUT}"; do
  ffprobe -hide_banner -v error -select_streams v:0 \
    -show_entries stream=codec_name,width,height,pix_fmt,avg_frame_rate,duration,bit_rate:format=size \
    -of default=nw=1 "${output}"
done
for poster in "${POSTER_1280}" "${POSTER_640}"; do
  ffprobe -hide_banner -v error -select_streams v:0 \
    -show_entries stream=codec_name,width,height,pix_fmt \
    -of default=nw=1 "${poster}"
done
