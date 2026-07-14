# OmniVoice Studio

> **Repo:** [debpalash/OmniVoice-Studio](https://github.com/debpalash/OmniVoice-Studio)  
> **Category:** Speech & Audio  
> **Tags:** `stt` · `tts` · `voice-clone` · `desktop` · `self-host`  
> **Ngôn ngữ:** Python · **⭐** ~8.3k

## Đây là gì?

**OmniVoice Studio** là **desktop app** mã nguồn mở — thay thế **ElevenLabs** chạy **local**.

Bạn dùng để: **voice clone**, **voice design** (tạo giọng mới), **dubbing** (lồng tiếng), và **dictation** (ghi âm → text). Toàn bộ pipeline voice **không phụ thuộc cloud** — privacy và chi phí thấp hơn.

GPU NVIDIA khuyến nghị (voice cloning nặng). Python stack — xem README repo cho phiên bản cụ thể.

**Cùng kiểu:** [faster-whisper](faster-whisper.md) (STT) · [ai-auto-generate-video.md](ai-auto-generate-video.md) · [audiobook-kj.md](audiobook-kj.md) · [voicebox.md](voicebox.md)

## Dùng khi nào?

| Nhu cầu | OmniVoice Studio |
|---------|------------------|
| Clone / design giọng local | ✅ |
| Dubbing / dictation desktop | ✅ |
| REST API đầy đủ như ElevenLabs | → ElevenLabs cloud |
| Demo voice không gửi audio ra ngoài | ✅ offline |

## Chạy thử

Cài từ repo — xem README cho Python stack và GPU requirements.

```bash
# Clone repo, cài dependencies theo README
git clone https://github.com/debpalash/OmniVoice-Studio.git
```

## So với tool khác

| | OmniVoice Studio | ElevenLabs | Voicebox |
|--|------------------|------------|----------|
| Chạy local | ✅ | ❌ (API) | ✅ + MCP |
| Chi phí | Free (GPU của bạn) | Subscription | Free |
| Chất lượng | Tốt, tùy model/GPU | SOTA commercial | Tùy model |
| Tags | `stt` `tts` `voice-clone` `desktop` | cloud API | `stt` `tts` `mcp` |

## Dùng với Odoo / ai_core

- Bổ sung stack speech: `faster-whisper` (STT) + OmniVoice (TTS).  
- Export audio → attachment Odoo hoặc gửi qua [ntfy](ntfy.md).  
- Demo nội bộ voice cho video training Odoo.

## Link

- Repo: https://github.com/debpalash/OmniVoice-Studio  
- Peers: [ai-auto-generate-video.md](ai-auto-generate-video.md) · [audiobook-kj.md](audiobook-kj.md) · [voicebox.md](voicebox.md) · [faster-whisper.md](faster-whisper.md)
