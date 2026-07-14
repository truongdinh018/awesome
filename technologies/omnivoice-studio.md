# OmniVoice Studio

> **Repo:** [debpalash/OmniVoice-Studio](https://github.com/debpalash/OmniVoice-Studio)  
> **Category:** Speech & Audio  
> **Tags:** `stt` · `tts` · `voice-clone` · `desktop` · `self-host`  
> **Ngôn ngữ:** Python · **⭐** ~8.3k

## Tổng quan

**OmniVoice Studio** là **desktop app** mã nguồn mở — alternative **ElevenLabs** chạy **local**:

- Voice **cloning**
- Voice **design** & tạo giọng mới
- **Dubbing** (lồng tiếng)
- **Dictation** (ghi âm → text)

Mục tiêu: toàn bộ pipeline voice **không phụ thuộc cloud** (privacy, chi phí).

## Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| Clone giọng | Từ vài giây audio mẫu |
| Design | Tạo persona giọng mới |
| Dubbing | Thay giọng video/audio |
| Dictation | STT tích hợp app |
| Desktop UI | Không cần viết code |

## So sánh ElevenLabs

| | OmniVoice Studio | ElevenLabs |
|--|------------------|------------|
| Chạy local | ✅ | ❌ (API) |
| Chi phí | Free (GPU của bạn) | Subscription |
| Chất lượng | Tốt, tùy model/GPU | SOTA commercial |
| Tích hợp API | Hạn chế hơn | REST API đầy đủ |

## Use case

- **Demo nội bộ** — tạo voice cho video training Odoo
- **Prototype** trước khi mua ElevenLabs enterprise
- **Offline** — môi trường không được gửi audio ra ngoài

## Yêu cầu

- GPU NVIDIA khuyến nghị (voice cloning nặng)
- Python stack — xem README repo cho phiên bản cụ thể

## Liên quan ai_core

- Bổ sung cho stack speech: `faster-whisper` (STT) + OmniVoice (TTS)
- Có thể export audio → attachment Odoo hoặc gửi qua `ntfy`

## Link

- Repo: https://github.com/debpalash/OmniVoice-Studio
- Consumer pipeline (Shorts + TTS): [ai-auto-generate-video.md](ai-auto-generate-video.md)
