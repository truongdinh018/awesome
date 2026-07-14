# XiaoZhi AI (ESP32 Voice Assistant)

> **Repo:** [78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32)  
> **Category:** Speech & Audio · Edge Voice  
> **Tags:** `stt` · `tts` · `edge` · `iot` · `mcp`  
> **Ngôn ngữ:** C++ (ESP-IDF) · **License:** MIT  
> **Liên quan:** Lily Box / Heylily (thương mại VN), [xiaozhi.me](https://xiaozhi.me)

## Đây là gì?

**XiaoZhi (小智)** là firmware open-source biến **ESP32-S3 / C3 / P4** thành trợ lý AI giọng nói realtime: wake word offline → streaming ASR → LLM → TTS.

**Lily Box 01** (Heylily, bán trên Shopee) dùng kiến trúc tương tự — firmware thương mại dựa trên Xiaozhi, thêm tính năng VN (Zing MP3, Radio, "Hey Lily", gói VIP 40 cấu hình). Các tính năng Heylily **không open source**.

Stream audio: Mic I2S → Opus 60ms frame → WebSocket/MQTT+UDP → server ASR/LLM/TTS → Opus về ESP → loa. ESP **không** giữ lịch sử chat dài — chỉ buffer ngắn; memory trên server.

**Cùng kiểu:** [faster-whisper](faster-whisper.md) (STT server), [VoxCPM](voxcpm.md) / [VieNeu-TTS](vieneu-tts.md) (TTS), [ALPR](alpr.md) (edge CV sibling).

## Dùng khi nào?

| Nhu cầu | XiaoZhi |
|---------|---------|
| DIY voice assistant ESP32 (~500–800k VNĐ) | ✅ firmware MIT |
| Self-host toàn bộ (Ollama + Whisper) | ✅ + `xiaozhi-esp32-server` |
| Giống Lily Box, open source | ✅ `xiaozhi-esp32` + prebuilt board |
| Zing/Radio VN sẵn | → Mua Lily Box / Heylily |
| Không mua ESP | → Flutter client hoặc `py-xiaozhi` |

## Chạy thử

**BOM DIY tối thiểu:** ESP32-S3-DevKitC-1 **N16R8** (16MB Flash + 8MB PSRAM) · INMP441 mic · MAX98357A amp · loa 8Ω 2–3W.

```bash
# Server Python (khuyến nghị)
git clone https://github.com/xinnan-tech/xiaozhi-esp32-server
# Docker deploy — xem README
```

**Stack tự host:** ESP32 ↔ `xiaozhi-esp32-server` → ASR (SenseVoice/Whisper) · LLM (Ollama) · TTS (CosyVoice/Edge-TTS/VoxCPM).

Firmware prebuilt: [xiaozhi.dev firmware list](https://xiaozhi.dev/en/docs/usage/firmware-download/). Ưu tiên board **N16R8** — N8R2 (2MB PSRAM) dễ thiếu RAM / reboot.

## So với tool khác

| | Xiaozhi DIY / self-host | Lily Box (Heylily) | Willow |
|--|-------------------------|---------------------|--------|
| Hội thoại AI | ✅ | ✅ | ✅ local/privacy |
| Wake word | ✅ (cấu hình) | ✅ "Hey Lily" | ✅ |
| Zing / Radio / TV | ❌ | ✅ | ❌ |
| Self-host / Ollama | ✅ | Hạn chế | ✅ |
| License firmware | MIT (upstream) | Đóng | Open |

## Dùng với Odoo / ai_core

- STT local: [faster-whisper](faster-whisper.md) cho server ASR.  
- TTS local: [VoxCPM](voxcpm.md), [VieNeu-TTS](vieneu-tts.md).  
- Device MCP XiaoZhi ↔ pattern `xb_mcp` / agent tools trong ai_core.

## Link

- Firmware: https://github.com/78/xiaozhi-esp32  
- Docs / flash: https://xiaozhi.dev  
- Cloud mặc định: https://xiaozhi.me  
- Server Python: https://github.com/xinnan-tech/xiaozhi-esp32-server  
- Heylily (commercial VN): https://heylily.net
