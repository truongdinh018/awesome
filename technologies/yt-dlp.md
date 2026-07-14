# yt-dlp

> **Repo:** [yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)  
> **Category:** Image & Video · CLI media downloader *(không phải generative AI)*  
> **Tags:** `video` · `cli` · `self-host`  
> **Ngôn ngữ:** Python · **⭐** ~178k · **License:** Unlicense  
> Fork của youtube-dl / youtube-dlc — hàng nghìn extractors, post-process ffmpeg

## Đây là gì?

**yt-dlp** là CLI **tải audio/video** đa site (YouTube và hàng nghìn domain khác): playlist, livestream, format chọn, cookies browser, embed subtitle/thumbnail, merge/re-encode qua **ffmpeg**.

Hạ tầng cho pipeline media, RAG trên transcript, hoặc feed HyperFrames / pyVideoTrans — **không** sinh nội dung AI. Tôn trọng ToS / luật bản quyền site nguồn.

**Cùng kiểu:** [pyVideoTrans](pyvideotrans.md) (dub/STT sau khi có file), [HyperFrames](hyperframes.md) / [OpenMontage](openmontage.md) (compose), [faster-whisper](faster-whisper.md) (transcribe file tải về), [iptv-org](iptv-org.md) (live playlist).

## Dùng khi nào?

| Nhu cầu | yt-dlp |
|---------|--------|
| Tải video/audio + playlist từ URL | ✅ |
| Chọn format / height / audio-only | ✅ `-f` / `-x` |
| Subtitle / cookie / sponsorblock | ✅ |
| Live IPTV M3U không archive | → [iptv-org](iptv-org.md) |
| Dub / translate video đã tải | → [pyVideoTrans](pyvideotrans.md) |

## Chạy thử

```bash
pip install -U yt-dlp
# hoặc binary release · scoop / brew

yt-dlp "https://www.youtube.com/watch?v=…"
yt-dlp -x --audio-format mp3 URL          # audio only
yt-dlp -f "bv*+ba/b" --merge-output-format mp4 URL
yt-dlp --write-auto-sub --sub-langs en,vi URL
```

- Cần **ffmpeg/ffprobe** để merge & post-process  
- YouTube full support thường cần component `yt-dlp-ejs` (xem README deps)  
- Update thường xuyên: extractors đổi nhanh

## So với tool khác

| | yt-dlp | iptv-org | pyVideoTrans |
|--|--------|----------|--------------|
| Shape | Download CLI | M3U playlist dataset | Desktop dub/STT/TTS |
| AI? | Không | Không | Có (STT/TTS) |
| Tags | `video` `cli` | `video` | `video` `stt` `tts` … |

## Dùng với Odoo / ai_core

- Thu thập sample audio/video hợp pháp → FunASR / CosyVoice test.  
- Tải clip demo trước HyperFrames / FreeCut.  
- Không nhúng illegal download vào production agent — policy + human approval.

## Link

- Repo: https://github.com/yt-dlp/yt-dlp · Discord / PyPI `yt-dlp`  
- Peers: [pyvideotrans.md](pyvideotrans.md) · [iptv-org.md](iptv-org.md) · [hyperframes.md](hyperframes.md) · [faster-whisper.md](faster-whisper.md)
