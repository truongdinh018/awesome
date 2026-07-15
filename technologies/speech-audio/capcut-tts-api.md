# CapCut TTS/STT API

> **Repo:** [K07VN/capcut-tts-api](https://github.com/K07VN/capcut-tts-api)  
> **Category:** Speech & Audio · CapCut common-task CLI (TTS + STT)  
> **Tags:** `stt` · `tts` · `cli` · `api`  
> **Ngôn ngữ:** Python 3.9+ · **⭐** ~213 · **License:** (chưa SPDX)  
> *Unofficial CapCut client — chỉ dùng với account/device/media bạn được phép*

## Đây là gì?

**capcut-tts-api** là CLI Python thuần gọi CapCut **common task** API: **TTS**, **STT/subtitle**, upload audio/video lên VOD, poll kết quả.

Không native lib / ctypes — tự dựng `x-ss-stub`, header `sign`, RSA payload TTS, AWS SigV4 upload. File chính: `capcut_common_task_client.py` + `Voice.json`.

⚠️ Client **không chính thức** (reverse-engineered CapCut flow). Có thể vi phạm ToS / đổi API bất kỳ lúc nào — chỉ thử nghiệm cá nhân với session hợp lệ; **không** production / multi-tenant.

**Cùng kiểu:** [faster-whisper](faster-whisper.md) / [FunASR](funasr.md) (STT local), [VoxCPM](voxcpm.md) / [OmniVoice](omnivoice-studio.md) (TTS local), [AudioBook KJ](audiobook-kj.md) / [AI-auto-generate-video](../image-video/ai-auto-generate-video.md) (pipeline media).

## Dùng khi nào?

| Nhu cầu | CapCut TTS/STT API |
|---------|-------------------|
| TTS CapCut qua CLI (SSML / voice id) | ✅ `tts-new` + `tts-query` |
| STT / phụ đề từ file (vi-VN…) | ✅ `stt-file` / `stt-new` + query |
| Upload media → VOD `vid`/`md5` | ✅ `upload-audio` |
| Stack STT/TTS open-source local | → FunASR / faster-whisper / OmniVoice |
| SDK CapCut chính thức | ❌ không có — đây là client cộng đồng |

## Chạy thử

```bash
pip install requests
python3 capcut_common_task_client.py tts-new --text "Xin chào" --device-json device.json
python3 capcut_common_task_client.py stt-file --audio-file 1.mp4 --language vi-VN
python3 capcut_common_task_client.py stt-query --task-id ID --token TOKEN --out response.json
```

- Override device/session: `--device-json` (profile desktop CapCut)  
- STT payload → `utterances[].text` / `start_time` / `end_time` / `words[]`  
- `--dry-run` xem request không gọi API  

## So với tool khác

| | CapCut CLI | FunASR | OmniVoice |
|--|------------|--------|-----------|
| Backend | CapCut cloud | Self-host models | Local desktop |
| Shape | Single Python script | Full ASR toolkit | Voice studio |
| Tags | `stt` `tts` `cli` `api` | `stt` `cli` `api` | `stt` `tts` `desktop` |
| ToS | ⚠️ unofficial | ✅ OSS | ✅ OSS |

## Dùng với Odoo / ai_core

- Prototype phụ đề tiếng Việt nhanh nếu đã có CapCut session (nội bộ R&D).  
- Ưu tiên FunASR / faster-whisper cho pipeline production Odoo.  
- Không nhúng signing/session CapCut vào module customer-facing.

## Link

- Repo: https://github.com/K07VN/capcut-tts-api  
- Peers: [funasr.md](funasr.md) · [faster-whisper.md](faster-whisper.md) · [omnivoice-studio.md](omnivoice-studio.md) · [audiobook-kj.md](audiobook-kj.md) · [vieneu-tts.md](vieneu-tts.md)
