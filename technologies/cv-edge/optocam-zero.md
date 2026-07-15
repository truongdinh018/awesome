# Optocam Zero

> **Repo:** [dorukkumkumoglu/optocamzero](https://github.com/dorukkumkumoglu/optocamzero)  
> **Category:** Computer Vision & Edge · Máy ảnh DIY trên Raspberry Pi Zero  
> **Tags:** `cv` · `edge` · `iot` · `self-host`  
> **Ngôn ngữ:** Python · C++ · Shell · **⭐** ~741  
> **License:** CC BY-SA 4.0

## Đây là gì?

**Optocam Zero** là máy ảnh số bỏ túi **DIY** dựng trên **Raspberry Pi Zero**, linh kiện bán sẵn + vỏ in 3D.

Giao diện cố ý kiểu *toy camera* (cảm hứng Kodak Charmera): chụp nhanh, preview LCD 1.4", filter ảnh, chuyển ảnh qua hotspot Wi‑Fi (mobile/desktop). Firmware Buildroot boot ~5 giây; preview ~25–30 fps; ảnh JPEG 2592×2592; pin 14500 ~70–80 phút; có quay/phát GIF.

**Cùng kiểu:** [ALPR](alpr.md) (camera edge Jetson — nghiệp vụ), [RuView](ruview.md) (sensing không camera), [xiaozhi-esp32](../speech-audio/xiaozhi-esp32.md) (edge device DIY khác domain).

## Dùng khi nào?

| Nhu cầu | Optocam Zero |
|---------|--------------|
| Tự build máy ảnh Pi Zero bỏ túi | ✅ BOM + STL + guide |
| Chụp offline, chuyển ảnh qua hotspot | ✅ |
| Edge AI / biển số / radar | → [ALPR](alpr.md) / [PLFM RADAR](plfm-radar.md) |
| Camera module gắn PC / Odoo ingest thôi | → camera USB / Pi Cam + app riêng |

## Chạy thử

Không “npm install” — đây là full hardware project:

1. Đọc [BOM](https://github.com/dorukkumkumoglu/optocamzero/blob/main/hardware/BOM.md) + [build guide PDF](https://github.com/dorukkumkumoglu/optocamzero/blob/main/hardware/optocamzero-build-guide.pdf).
2. Mua linh kiện (gợi ý VN bên dưới) → in case (`hardware/stls/` hoặc Bambu project trong `hardware/print-ready/`).
3. Lắp Pi Zero + Camera Module 3 + màn 240×240 + pin 14500 + USB‑C.
4. Flash image / cài software theo `software/` (Buildroot image có release trên GitHub).

```bash
git clone https://github.com/dorukkumkumoglu/optocamzero.git
cd optocamzero
# hardware/ — STL, CAD, BOM, PDF
# software/ — app + hướng dẫn cài firmware
```

## Thiết bị / linh kiện (raspberrypi.vn)

Map từ [BOM chính thức](https://github.com/dorukkumkumoglu/optocamzero/blob/main/hardware/BOM.md) → shop VN. Giá/tồn kho thay đổi — kiểm tra trang trước khi đặt. Chọn bản **không header** nếu shop có SKU (BOM: *without header*).

| BOM | Qty | Mua VN ([raspberrypi.vn](https://raspberrypi.vn)) | Ghi chú |
|-----|-----|---------------------------------------------------|---------|
| Raspberry Pi Zero 2 W (no header) | 1 | [Pi Zero 2 W](https://raspberrypi.vn/san-pham/raspberry-pi-zero-2-w-wireless) | Board chính |
| Camera Module 3 (autofocus) | 1 | [Camera Module V3 12MP AF](https://raspberrypi.vn/san-pham/raspberry-pi-camera-module-v3-12mp-ong-kinh-lay-net-tu-dong) | Chọn **V3 75°** (không NoIR) trừ khi bạn cố ý đổi |
| Cáp camera cho Pi Zero | 1 | [Cáp chuyển Camera Pi Zero](https://raspberrypi.vn/san-pham/cap-chuyen-camera-raspberry-pi-zero) | 15 cm; BOM gốc ~200 mm — đo case trước |
| MicroSD ≥16 GB (A2/Class10) | 1 | [Kioxia Exceria 32 GB U1](https://raspberrypi.vn/san-pham/the-nho-micro-sd-kioxia-32gb-class10-exceria-u1-lmex1l032gg4) | Hoặc [128 GB Exceria G2](https://raspberrypi.vn/san-pham/the-nho-kioxia-128gb-microsdxc-exceria-g2-uhs-i-c10-u3-lmex2l128gg4) |
| Waveshare Li-ion Battery HAT | 1 | *(chưa thấy trên shop)* | [Waveshare product](https://www.waveshare.com/li-ion-battery-hat.htm) |
| Waveshare 1.3″ IPS 240×240 LCD HAT | 1 | *(chưa thấy trên shop)* | [Waveshare 1.3inch LCD HAT](https://www.waveshare.com/1.3inch-lcd-hat.htm) — README gọi “1.4″” nhưng panel là 240×240 |
| Pin 14500 3.7 V ~900 mAh | 1 | *(chưa thấy trên shop)* | Mua linh kiện pin cục bộ / Shopee |
| Header 2×20 male + dây JST / enamel | — | *(lẻ)* | Header hàn lên Zero nếu board không kèm pin |

**Tóm tắt còn thiếu tại VN:** Battery HAT + LCD HAT Waveshare + pin 14500 + ốc/magnet (BOM *Fasteners*) → đặt Waveshare / chợ linh kiện + in 3D phần case.

Shop: [Raspberry Pi Việt Nam](https://raspberrypi.vn) · hotline trên site.

## So với tool khác

| | Optocam Zero | ALPR | Xiaozhi ESP32 |
|--|--------------|------|---------------|
| Domain | DIY digital camera | Plate OCR edge | Voice IoT |
| Board | Pi Zero | Jetson Orin | ESP32 |
| Tags | `cv` `edge` `iot` | `cv` `edge` | `stt` `tts` `edge` `iot` |

## Dùng với Odoo / ai_core

- Prototype field photo → sync ảnh vào `ir.attachment` / RAG ingest khi về mạng.  
- Không thay pipeline CV doanh nghiệp ([ALPR](alpr.md), [Supervision](supervision.md)).  
- Ghi chú license **CC BY-SA 4.0** nếu fork/remix case + firmware.

## Link

- Repo: https://github.com/dorukkumkumoglu/optocamzero  
- BOM: https://github.com/dorukkumkumoglu/optocamzero/blob/main/hardware/BOM.md  
- Shop VN: https://raspberrypi.vn  
- Peers: [alpr.md](alpr.md) · [plfm-radar.md](plfm-radar.md) · [ruview.md](ruview.md) · [xiaozhi-esp32.md](../speech-audio/xiaozhi-esp32.md)
