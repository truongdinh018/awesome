# RuView (WiFi DensePose)

> **Repo:** [ruvnet/RuView](https://github.com/ruvnet/RuView)  
> **Category:** Computer Vision & Edge · WiFi CSI spatial sensing (không camera)  
> **Tags:** `cv` · `edge` · `iot` · `self-host`  
> **Ngôn ngữ:** Rust · TypeScript · ESP32 firmware · Python (PyO3) · **⭐** ~80.6k · **License:** MIT  
> Docs/site: [Cognitum.One/RuView](https://Cognitum.One/RuView) · HF model: `ruvnet/wifi-densepose-pretrained`

## Đây là gì?

**RuView** (π / WiFi DensePose) biến **WiFi CSI** từ ESP32 (hoặc NIC nghiên cứu) thành **spatial intelligence**: presence, pose/DensePose, hô hấp/nhịp tim ước lượng, theo dõi phòng — **không pixel camera**, không wearable. Model edge nhỏ (int4 ~KB) + self-learning theo phòng; stack Docker / Raspberry Pi / Home Assistant–style IoT.

**Cùng kiểu:** [PLFM RADAR](plfm-radar.md) (radar HW X-band), [Supervision](supervision.md) / [InsightFace](insightface.md) (CV camera), [XiaoZhi ESP32](xiaozhi-esp32.md) (ESP32 voice — khác sensing RF).

## Dùng khi nào?

| Nhu cầu | RuView |
|---------|--------|
| Presence / occupancy / through-wall RF (privacy vs CCTV) | ✅ primary |
| Pose / vital-sign research trên CSI | ✅ (cần CSI ESP32-S3/C6) |
| Demo không HW | ✅ Docker simulated |
| Camera vision / face / OCR | → [Supervision](supervision.md) / [InsightFace](insightface.md) / [ALPR](alpr.md) |
| Phased-array radar HW | → [PLFM RADAR](plfm-radar.md) |

**Ethics / law:** Cảm biến RF vẫn có thể theo dõi người — lấy **đồng ý**, tuân luật riêng tư & phổ tần địa phương; không dùng giám sát trái phép.

## Chạy thử

```bash
# Demo không phần cứng
docker pull ruvnet/wifi-densepose:latest
docker run -p 3000:3000 ruvnet/wifi-densepose:latest
# http://localhost:3000

# Python wheel
pip install ruview   # hoặc wifi-densepose
```

Live sensing: flash firmware ESP32-S3/C6 theo README repo (`esptool` / `idf.py`). CSI-capable HW cần cho vitals/through-wall; laptop WiFi thường chỉ RSSI thô.

## So với tool khác

| | RuView | PLFM RADAR | Supervision |
|--|--------|------------|-------------|
| Modality | WiFi CSI / RF | 10.5 GHz phased radar | Camera pixels |
| Camera | ❌ by design | ❌ | ✅ |
| Tags | `cv` `edge` `iot` | `edge` `iot` | `cv` `video` |

## Dùng với Odoo / ai_core

- Occupancy / building analytics (webhook events) nếu có bridge — không default ERP.  
- Không thay vision CCTV khi cần nhận dạng; RuView = sensing không video.  
- Deploy lab trước; đánh giá false positive & privacy policy.

## Link

- Repo: https://github.com/ruvnet/RuView · Site: https://Cognitum.One/RuView  
- Peers: [plfm-radar.md](plfm-radar.md) · [xiaozhi-esp32.md](xiaozhi-esp32.md) · [supervision.md](supervision.md) · [alpr.md](alpr.md) · [insightface.md](insightface.md)
