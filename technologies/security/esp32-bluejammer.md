# ESP32-BlueJammer

> **Repo:** [EmenstaNougat/ESP32-BlueJammer](https://github.com/EmenstaNougat/ESP32-BlueJammer)  
> **Category:** Security · RF / 2.4 GHz disruption (lab)  
> **Tags:** `security` · `edge` · `iot`  
> **Ngôn ngữ:** firmware ESP32 (không mở đầy đủ) · **⭐** ~7.7k · **License:** NOASSERTION  
> Homepage flasher: [esp32-bluejammerflasher.pages.dev](https://esp32-bluejammerflasher.pages.dev)

## Đây là gì?

**ESP32-BlueJammer** là dự án phần cứng dùng **ESP32 + module nRF24** để gây nhiễu băng **2.4 GHz** (Bluetooth, BLE, Wi‑Fi, RC). Repo mô tả: phát nhiễu / gói tin thừa để thiết bị giao tiếp trên băng đó không hoạt động như ý — phục vụ **kiểm thử bảo mật có kiểm soát**.

Firmware **không phải open source đầy đủ**. Tác giả nêu rõ: gây nhiễu RF thường **bất hợp pháp** nếu không có giấy phép; chỉ dùng giáo dục / lab được ủy quyền.

⚠️ Catalog này **không** hướng dẫn flash firmware, lắp mạch, hay cách gây nhiễu. Chỉ ghi nhận repo vì nó viral trên GitHub.

**Cùng kiểu:** [HackingTool](hackingtool.md) (menu tool pentest lab), [Strix](strix.md) (AI pentest có RoE), [RuView](../cv-edge/ruview.md) (ESP32 Wi‑Fi CSI — cảm biến, không jam).

## Dùng khi nào?

| Nhu cầu | ESP32-BlueJammer |
|---------|------------------|
| Hiểu khái niệm jammer 2.4 GHz / nghiên cứu RF lab | ✅ đọc README + pháp lý |
| Pentest app / web có RoE | → [Strix](strix.md) |
| Bộ tool pentest cổ điển trên Linux | → [HackingTool](hackingtool.md) |
| Presence / pose từ Wi‑Fi CSI (ESP32) | → [RuView](../cv-edge/ruview.md) |
| Gây nhiễu mạng công cộng / thiết bị người khác | ❌ bất hợp pháp |

**Cảnh báo pháp lý:** Chỉ dùng trên hệ thống **bạn sở hữu** hoặc có **ủy quyền viết**. Gây nhiễu phổ tần không phép là tội ở nhiều nước. Lạm dụng = trách nhiệm người dùng.

## Chạy thử

Catalog **không** đưa lệnh flash hay thao tác jam.

```text
Đọc README + disclaimer trên:
https://github.com/EmenstaNougat/ESP32-BlueJammer

Firmware không mở đầy đủ. Không flash trên thiết bị dùng hàng ngày.
Không thử ngoài phòng lab được phép.
```

## So với tool khác

| | BlueJammer | Strix | RuView |
|--|------------|-------|--------|
| Vai trò | Nhiễu RF 2.4 GHz (phần cứng) | AI pentest phần mềm | Cảm biến Wi‑Fi CSI |
| Open source | Firmware hạn chế | ✅ | ✅ |
| Tags | `security` `edge` | `security` `pentest` `agent` | `cv` `edge` `iot` |

## Dùng với Odoo / ai_core

- Không gắn vào pipeline Odoo / agent.  
- AppSec Odoo: dùng [Strix](strix.md) / SAST có RoE — không dùng RF jammer.  
- ESP32 trong catalog gần hơn với [RuView](../cv-edge/ruview.md) / [Sesame](../cv-edge/sesame-robot.md) (cảm biến / robot), không phải disruption.

## Link

- Repo: https://github.com/EmenstaNougat/ESP32-BlueJammer  
- Peers: [hackingtool.md](hackingtool.md) · [strix.md](strix.md) · [ruview.md](../cv-edge/ruview.md)
