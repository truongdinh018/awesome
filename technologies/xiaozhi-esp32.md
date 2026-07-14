# XiaoZhi AI (ESP32 Voice Assistant)

> **Repo:** [78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32)  
> **Category:** Speech & Audio · Edge Voice  
> **Ngôn ngữ:** C++ (ESP-IDF) · **License:** MIT  
> **Liên quan:** Lily Box / Heylily (thương mại VN), [xiaozhi.me](https://xiaozhi.me)

## Tổng quan

**XiaoZhi (小智)** là firmware open-source biến **ESP32-S3 / C3 / P4** thành trợ lý AI giọng nói realtime: wake word offline → streaming ASR → LLM → TTS.

**Lily Box 01** (Heylily, bán trên Shopee) dùng kiến trúc tương tự — firmware thương mại dựa trên Xiaozhi, thêm tính năng VN (Zing MP3, Radio, “Hey Lily”, gói VIP 40 cấu hình). Các tính năng Heylily **không open source**.

## Vấn đề giải quyết

| Cloud speaker (Alexa/Google) | XiaoZhi |
|------------------------------|---------|
| Khóa vendor, tốn phí | MIT, tự host được |
| Hardware đắt / kín | DIY từ ~500–800k VNĐ |
| Ít kiểm soát protocol | WebSocket / MQTT+UDP documented |
| Khó gắn MCP / smart home | Device MCP + cloud MCP |

## Chip & phần cứng

| Chip | Đặc điểm | Khi nào dùng |
|------|----------|--------------|
| **ESP32-S3** (N16R8 khuyến nghị) | Dual-core 240MHz, AEC, wake word tốt | Mặc định / giống Lily Box |
| **ESP32-C3** | Rẻ, nhỏ, không AEC (simplex) | Mini / nút bấm / pendants |
| **ESP32-P4** | Mạnh, màn MIPI, camera; WiFi qua chip phụ | UI lớn / camera |

### BOM DIY tối thiểu (breadboard)

| Linh kiện | Vai trò |
|-----------|---------|
| ESP32-S3-DevKitC-1 **N16R8** | MCU (16MB Flash + 8MB PSRAM) |
| INMP441 | Mic I2S |
| MAX98357A | Amp I2S |
| Loa 8Ω 2–3W | Output |
| OLED SSD1306 / LCD ST7789 | Hiển thị (tùy chọn) |

### Đấu nối Simplex (firmware ≥ v0.3)

| ESP32-S3 | INMP441 | MAX98357A |
|----------|---------|-------------|
| GPIO4 | WS | — |
| GPIO5 | SCK | — |
| GPIO6 | SD | — |
| GPIO7 | — | DIN |
| GPIO15 | — | BCLK |
| GPIO16 | — | LRC |
| 3.3V / GND | VDD / GND+L/R | VIN+SD / GND+GAIN |

Chi tiết: [Hardware guide](https://xiaozhi.dev/docs/usage/hardware-guide/)

### Board sẵn (không cần hàn nhiều)

| Board | Ghi chú |
|-------|---------|
| ESP32-S3-BOX3, M5Stack CoreS3 / AtomS3R+Echo | All-in-one |
| Kevin Box / Magic Button C3 / XiaGe Mini C3 | Nhỏ / rẻ |
| Waveshare Touch LCD / AMOLED | Giống Lily Box Touch |
| SenseCAP Watcher, DFRobot XingKong K10 | Camera / giáo dục |

Firmware prebuilt: [xiaozhi.dev firmware list](https://xiaozhi.dev/en/docs/usage/firmware-download/)

## Streaming voice — cách ESP làm được

```
Mic (I2S DMA)
  → PCM 16 kHz mono
  → AEC/NS (chỉ S3)
  → Opus encode (frame 60 ms)
  → WebSocket binary / MQTT+UDP
  → Server: ASR → LLM → TTS
  → Opus về ESP → decode → loa
```

| Tham số | Giá trị |
|---------|---------|
| Codec | Opus |
| Sample rate (mic) | 16 kHz mono |
| Frame | 60 ms = 960 samples = **1920 B PCM** → ~**120–240 B Opus** |
| Bitrate hiệu dụng | ~16–32 kbps |
| Latency 1 chiều (ước tính) | ~180–330 ms (mạng + server thường chiếm phần lớn) |

Handshake (tóm tắt):

```json
{
  "type": "hello",
  "transport": "websocket",
  "audio_params": {
    "format": "opus",
    "sample_rate": 16000,
    "channels": 1,
    "frame_duration": 60
  }
}
```

Protocol: [websocket.md](https://xiaozhi.dev/en/docs/development/websocket/)

## Bộ nhớ — bao nhiêu?

### Phần cứng (S3 N16R8)

| Loại | Dung lượng | Dùng cho |
|------|------------|----------|
| SRAM | ~512 KB | Task realtime, WiFi stack |
| PSRAM | 4–8 MB (**8 MB khuyến nghị**) | Model wake word, AFE, audio buffer |
| Flash | 4–16 MB (**16 MB khuyến nghị**) | Firmware, assets, ESP-SR models |

Board **N8R2** (2MB PSRAM) dễ thiếu RAM / reboot → ưu tiên **N16R8**.

### Runtime buffer (trên chip)

| Component | ~Size |
|-----------|-------|
| Encoder input (1 frame) | 1.9 KB |
| `audio_decode_queue_` | 10–50 KB (5–25 gói TTS) |
| Opus enc/dec | vài KB mỗi bên |
| AudioProcessor + WakeWord (S3) | ~200–400 KB (PSRAM) |

### Conversation memory

| Loại | Ở đâu |
|------|--------|
| Buffer audio TTS ngắn | ESP RAM |
| Ngữ cảnh hội thoại / short-term memory / tóm tắt | **Server cloud** (xiaozhi.me / self-host) |
| WiFi, token, settings | NVS trên Flash |

ESP **không** giữ lịch sử chat dài — chỉ stream + buffer ngắn.

## Firmware / stack open source tương tự

### Firmware thiết bị

| Dự án | Vai trò |
|-------|---------|
| [78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) | Firmware gốc (giống Lily Box nhất) |
| [beancookie/xiaoclaw](https://github.com/beancookie/xiaoclaw) | Xiaozhi + agent brain (cần Flash lớn) |
| [zenhall/DAZI-AI](https://github.com/zenhall/DAZI-AI) | Arduino, gọi OpenAI trực tiếp |
| [justLV/onju-v2](https://github.com/justLV/onju-v2) | PCB Nest Mini-style + pipeline riêng |
| [RealDeco/xiaozhi-esphome](https://github.com/RealDeco/xiaozhi-esphome) | Flash ESPHome → HA voice satellite |
| [Willow](https://willow.ai) | Local/privacy trên ESP32-S3-BOX |

### Server (tự host thay xiaozhi.me)

| Dự án | Stack |
|-------|-------|
| [xinnan-tech/xiaozhi-esp32-server](https://github.com/xinnan-tech/xiaozhi-esp32-server) | Python + Vue — khuyến nghị |
| [joey-zhou/xiaozhi-esp32-server-java](https://github.com/joey-zhou/xiaozhi-esp32-server-java) | Java |
| [AnimeAIChat/xiaozhi-server-go](https://github.com/AnimeAIChat/xiaozhi-server-go) | Go |

### App / client (cùng protocol, không cần ESP)

| Dự án | Platform |
|---------|----------|
| [TOM88812/xiaozhi-android-client](https://github.com/TOM88812/xiaozhi-android-client) | Flutter: Android/iOS/Web/Desktop |
| [huangjunsen0406/py-xiaozhi](https://github.com/huangjunsen0406/py-xiaozhi) | Python: PC / Raspberry Pi / Jetson |
| [100askTeam/xiaozhi-linux](https://github.com/100askTeam/xiaozhi-linux) | Embedded Linux |

## Stack tự host gợi ý

```
ESP32 (xiaozhi-esp32)
    ↕ WebSocket / MQTT+UDP
xiaozhi-esp32-server (Docker)
    ├── ASR: SenseVoice / Whisper (faster-whisper)
    ├── LLM: Ollama (Qwen, DeepSeek…)
    ├── TTS: CosyVoice / Edge-TTS / VoxCPM
    └── Memory + MCP + RAG (tùy server)
```

Có thể thay ESP bằng **Flutter client** hoặc **py-xiaozhi**.

## So sánh nhanh với sản phẩm thương mại

| | Xiaozhi DIY / self-host | Lily Box (Heylily) |
|--|-------------------------|---------------------|
| Hội thoại AI | ✅ | ✅ |
| Wake word | ✅ (cấu hình) | ✅ “Hey Lily” |
| Zing / Radio / TV | ❌ | ✅ |
| 40 cấu hình VIP | ❌ | ✅ |
| Self-host / Ollama | ✅ | Hạn chế (ecosystem Heylily) |
| License firmware | MIT (upstream) | Đóng |

## Liên quan Awesome AI / ai_core

- **STT local:** [faster-whisper](faster-whisper.md) cho server ASR
- **TTS local:** [VoxCPM](voxcpm.md), [OmniVoice Studio](omnivoice-studio.md)
- **MCP:** device MCP XiaoZhi ↔ pattern `xb_mcp` / agent tools trong ai_core
- **Edge sibling:** [ALPR](alpr.md) (Jetson CV) — cùng hướng “AI device tại chỗ”

## Use case

- Trợ lý học tập / desk voice (giống Lily Box)
- Wake word + agent điều khiển IoT (MCP / Home Assistant)
- Demo edge AI education (ESP32 cheap hardware)
- Client điện thoại dùng cùng server self-host (Flutter)

## Gợi ý chọn hướng

| Mục tiêu | Chọn |
|----------|------|
| Giống Lily Box, open source | `xiaozhi-esp32` + prebuilt board firmware |
| Zing/Radio VN sẵn | Mua Lily Box / Heylily |
| Self-host toàn bộ | `xiaozhi-esp32` + `xiaozhi-esp32-server` |
| Không mua ESP | Flutter client hoặc `py-xiaozhi` |
| Home Assistant | `xiaozhi-esphome` / ESPHome Voice |
| Privacy tối đa | Willow + inference local |

## Link

- Firmware: https://github.com/78/xiaozhi-esp32
- Docs / flash: https://xiaozhi.dev
- Cloud mặc định: https://xiaozhi.me
- Server Python: https://github.com/xinnan-tech/xiaozhi-esp32-server
- Espressif component: https://docs.espressif.com/projects/esp-iot-solution/en/latest/ai/xiaozhi.html
- Heylily (commercial VN): https://heylily.net
- Shopee Lily Box 01 (tham chiếu sản phẩm): [shopee.vn Lily Box 01](https://shopee.vn/Lily-Box-01-(Xiaozhi)-Tr%E1%BB%A3-l%C3%BD-AI-h%E1%BB%97-tr%E1%BB%A3-h%E1%BB%8Dc-t%E1%BA%ADp-v%C3%A0-gi%E1%BA%A3i-tr%C3%AD-(k%C3%A8m-g%C3%B3i-VIP-40-c%E1%BA%A5u-h%C3%ACnh-t%E1%BB%AB-Heylily)-i.17592926.51002032366)

## Ghi chú session (2026-07)

- Catalog hóa từ thảo luận DIY Lily Box / Xiaozhi (WSL workspace odoo17).
- Ưu tiên N16R8; nhớ hội thoại trên server; Opus 60ms là chìa khóa stream trên WiFi yếu.
- Không nhầm Heylily closed features với MIT upstream.
