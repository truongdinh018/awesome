# Sesame Robot

> **Repo:** [dorianborian/sesame-robot](https://github.com/dorianborian/sesame-robot)  
> **Category:** CV & Edge · Mini quadruped robot (ESP32, DIY)  
> **Tags:** `edge` · `iot` · `api` · `self-host`  
> **Ngôn ngữ:** C / C++ (Arduino firmware) · Python companion · **⭐** ~3.6k · **License:** Apache-2.0  
> Site: [doriantodd.com/sesame](https://www.doriantodd.com/sesame)

## Đây là gì?

**Sesame** là project **robot bốn chân mini** open-source trên **ESP32** (~$50–60 linh kiện + in 3D PLA): 8 servo MG90 (2/chân), OLED 128×64 làm “mặt” cảm xúc, Wi‑Fi + **JSON/REST API**, web UI / Serial CLI. Có **Sesame Studio** (compose animation), simulator, Companion App (voice).

Không phải vision stack — là **nền tảng robotics biểu cảm** cho maker (hàn cơ bản, Arduino IDE). Distro board V3 / Lolin S2 Mini / DevKit legacy.

**Cùng kiểu:** [XiaoZhi ESP32](../speech-audio/xiaozhi-esp32.md) (voice ESP — không đi bộ), [Clawdmeter](../mcp-ai-agents/clawdmeter.md) (ESP desk meter), [PLFM RADAR](plfm-radar.md) (edge HW khác), [Godot harness](../cli-anything/godot.md) (game — khác robot thật).

## Dùng khi nào?

| Nhu cầu | Sesame |
|---------|--------|
| DIY quadruped rẻ + STL + firmware | ✅ |
| API/Wi‑Fi điều khiển / emote | ✅ |
| Voice assistant trên ESP (không chân) | → [XiaoZhi](../speech-audio/xiaozhi-esp32.md) |
| Research gait RL / big dog | ❌ không thay Spot/Unitree |

## Chạy thử

```bash
# 1) BOM + STL: docs/ + hardware/ trong repo
# 2) In PLA → build/wiring guides
# 3) Arduino IDE → firmware/sesame-firmware-main.ino (cấu hình WiFi)
# Studio: software/sesame-studio/
```

Site / Discord: xem README · Companion App repo riêng (link từ README).

## So với tool khác

| | Sesame | XiaoZhi | Clawdmeter |
|--|--------|---------|------------|
| Niche | Mini quadruped + face | Voice assistant | Claude usage meter |
| MCU | ESP32 + 8 servos | ESP32-S3 audio | ESP32 AMOLED |
| AI built-in | Companion voice optional | STT/LLM/TTS | ❌ |

## Dùng với Odoo / ai_core

- Demo IoT / agent điều khiển robot qua REST trên LAN (POC).  
- Không gắn ERP mặc định — học robotics / workshop.  
- Tôn trọng an toàn servo/pin (5V 3A); không deploy production.

## Link

- Repo: https://github.com/dorianborian/sesame-robot · Site: https://www.doriantodd.com/sesame  
- Peers: [xiaozhi-esp32.md](../speech-audio/xiaozhi-esp32.md) · [clawdmeter.md](../mcp-ai-agents/clawdmeter.md) · [plfm-radar.md](plfm-radar.md) · [godot.md](../cli-anything/godot.md)
