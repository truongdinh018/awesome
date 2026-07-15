# MicYou

> **Repo:** [LanRhyme/MicYou](https://github.com/LanRhyme/MicYou)  
> **Category:** Speech & Audio · Android → mic ảo PC  
> **Tags:** `stt` · `desktop` · `edge`  
> **Ngôn ngữ:** Kotlin (Android) · Rust/Tauri + Vue (desktop) · **⭐** ~3k · **License:** GPL-3.0  
> Site: [micyou.top](https://micyou.top)

## Đây là gì?

**MicYou** biến điện thoại **Android** thành **micro cho máy tính**: stream âm thanh qua Wi‑Fi hoặc USB (ADB/AOA). Server desktop Windows / Linux / macOS; mic ảo qua **VB-Cable** (Win) hoặc **BlackHole** (macOS). Có noise suppression, AGC, dereverb; chỉnh sample rate / channel / format.

Không phải STT engine — chỉ **pipeline input** cho dictation / call / Voicebox / faster-whisper. App Android Material 3 + desktop receiver.

**Cùng kiểu:** [Voicebox](voicebox.md) / [OmniVoice Studio](omnivoice-studio.md) (studio STT+TTS — cần mic tốt), [XiaoZhi ESP32](xiaozhi-esp32.md) (edge voice khác hình), [FluentFlyout](../devtools/fluent-flyout.md) (desktop UX — khác miền).

## Dùng khi nào?

| Nhu cầu | MicYou |
|---------|--------|
| Mic laptop kém → dùng mic phone vào PC | ✅ |
| Wi‑Fi hoặc USB; NS/AGC/dereverb | ✅ |
| Input cho STT/dictation local | ✅ + Voicebox / Whisper |
| STT/TTS model trên phone | → [sherpa-onnx](sherpa-onnx.md) / [XiaoZhi](xiaozhi-esp32.md) |
| Studio clone + MCP speak | → [Voicebox](voicebox.md) |

## Chạy thử

```bash
# Tải Android APK + desktop app từ GitHub Releases
# https://github.com/LanRhyme/MicYou/releases

# Windows: cài VB-Cable · macOS: BlackHole — chọn làm input hệ thống
# Cùng Wi‑Fi (hoặc USB) → ghép cặp theo Quick Start / FAQ repo
```

## So với tool khác

| | MicYou | Voicebox | XiaoZhi ESP32 |
|--|--------|----------|---------------|
| Niche | Phone → PC mic | Full voice studio | Edge IoT voice |
| AI | ❌ (audio pipe) | ✅ STT/TTS/MCP | ✅ on-device |
| Tags | `stt` `desktop` `edge` | `stt` `tts` `mcp` | `edge` `iot` |

## Dùng với Odoo / ai_core

- Dictation / demos voice khi laptop mic ồn — feed Whisper hoặc Voicebox.  
- Không thay stack STT trong `ai_core` — chỉ lớp capture.  
- Giữ audio local (Wi‑Fi LAN / USB), tránh stream đám mây nếu PII.

## Link

- Repo: https://github.com/LanRhyme/MicYou · Site: https://micyou.top  
- Peers: [voicebox.md](voicebox.md) · [omnivoice-studio.md](omnivoice-studio.md) · [faster-whisper.md](faster-whisper.md) · [xiaozhi-esp32.md](xiaozhi-esp32.md)
