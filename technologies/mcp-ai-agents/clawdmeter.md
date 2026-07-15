# Clawdmeter

> **Repo:** [HermannBjorgvin/Clawdmeter](https://github.com/HermannBjorgvin/Clawdmeter)  
> **Category:** MCP & AI Agents · ESP32 desk meter (Claude Code usage)  
> **Tags:** `coding-agent` · `edge` · `iot` · `desktop` · `cli`  
> **Ngôn ngữ:** C · PlatformIO (ESP32 firmware) · Python daemon · **⭐** ~1.9k · **License:** chưa SPDX trên GitHub — xem repo  
> Waveshare ESP32-S3/C6 Touch AMOLED

## Đây là gì?

**Clawdmeter** là **dashboard bàn** trên ESP32: hiện **Claude Code usage** (session / weekly). Ghép Bluetooth với máy chạy Claude Code; daemon host đọc OAuth token (Keychain/tương đương), poll usage ~60s, đẩy lên màn AMOLED. Splash pixel-art Clawd (claudepix) “bận” hơn khi usage rate cao. Nút bên gửi Space / Shift+Tab qua **BLE HID** (voice mode / mode toggle).

Không phải tracker đa tool như [CodeBurn](codeburn.md) — chỉ **Claude Code + phần cứng edge**.

**Cùng kiểu:** [CodeBurn](codeburn.md) (spend CLI đa agent), [XiaoZhi ESP32](../speech-audio/xiaozhi-esp32.md) (ESP voice — khác miền), [Headroom](headroom.md) (nén token).

## Dùng khi nào?

| Nhu cầu | Clawdmeter |
|---------|------------|
| Meter usage Claude Code trên bàn (AMOLED) | ✅ |
| BLE + HID shortcut Claude Code | ✅ |
| Track Cursor/Codex/Gemini trên PC | → [CodeBurn](codeburn.md) |
| Trợ lý giọng ESP32 | → [XiaoZhi](../speech-audio/xiaozhi-esp32.md) |

## Chạy thử

```bash
# Cần: PlatformIO · board Waveshare ESP32-*-Touch-AMOLED · Claude Code subscription
# Flash (ví dụ macOS):
./flash-mac.sh waveshare_amoled_216
# Pair Bluetooth “Clawdmeter” → cài daemon:
./install-mac.sh    # hoặc ./install.sh (Linux) · install-windows.ps1
```

Board hỗ trợ sẵn: AMOLED 2.16 / 1.8 (S3 & C6). Port board mới: `docs/porting/`.

## So với tool khác

| | Clawdmeter | CodeBurn | XiaoZhi |
|--|------------|----------|---------|
| Niche | Hardware meter Claude Code | Software spend đa tool | Voice assistant ESP |
| Dữ liệu | Claude OAuth → BLE | Session files local | Mic/LLM cloud |
| Tags | `edge` `iot` | `cli` `mcp` | `edge` `stt` |

## Dùng với Odoo / ai_core

- Nhắc quota Claude lúc code Odoo cả ngày (không mở TUI).  
- Không thay billing/analytics — chỉ glance desk.  
- Token OAuth chỉ trên host daemon; không đưa lên cloud project.

## Link

- Repo: https://github.com/HermannBjorgvin/Clawdmeter  
- Peers: [codeburn.md](codeburn.md) · [headroom.md](headroom.md) · [xiaozhi-esp32.md](../speech-audio/xiaozhi-esp32.md)
