# ALPR (Automatic License Plate Recognition)

> **Repo:** [joshkautz/alpr](https://github.com/joshkautz/alpr)  
> **Category:** Computer Vision & Edge  
> **Tags:** `cv` · `edge` · `self-host`  
> **Ngôn ngữ:** Python · **⭐** ~1

## Tổng quan

**ALPR** là hệ thống **nhận dạng biển số xe** (license plate recognition) **portable, offline hoàn toàn**:

- Chạy trên **NVIDIA Jetson Orin Nano Super** (67 TOPS)
- Camera **Reolink 4K** + GPS USB
- Pin **BLUETTI** — hoạt động 11–16 giờ không cần internet
- Dashboard mobile-friendly qua Wi-Fi của thiết bị

Toàn bộ inference **local** — phù hợp privacy, hiện trường, hoặc môi trường không có mạng.

## Hardware stack

| Component | Vai trò |
|-----------|---------|
| Jetson Orin Nano Super | AI inference (YOLO + OCR) |
| Reolink RLC-811A | Camera 4K, zoom 5x |
| VK-162 USB GPS | Gắn tọa độ vào mỗi lần đọc biển |
| BLUETTI Handsfree 2 | Nguồn pin di động |

## Kiến trúc pipeline

```
Camera (Baichuan :9000)
        │
        ▼
Neolink → RTSP :8654
        │
        ▼
go2rtc → WebRTC (dashboard live)
        │
        ▼
Video Capture (hardware decode)
        │
        ▼
YOLO Detection (fast-alpr) → OCR
        │
        ▼
Deduplication + quality filter (blur, brightness)
        │
        ▼
GPS metadata + SQLite + crop images
        │
        ▼
FastAPI dashboard (WebSocket real-time)
```

**Vì sao Baichuan thay RTSP?** Reolink dùng protocol Baichuan (port 9000) cho chất lượng tốt nhất; RTSP trên nhiều model bị buggy. **Neolink** (fork ổn định 24/7) bridge Baichuan → RTSP không transcode, **go2rtc** phục vụ WebRTC sub-second latency.

## Module chính

| File | Vai trò |
|------|---------|
| `main.py` | Entry point — `PipelineOrchestrator` |
| `frame_processor.py` | YOLO detection + OCR |
| `video_stream_capture.py` | RTSP capture, hardware decode |
| `duplicate_filter.py` | Dedup theo time window + OCR similarity |
| `plate_database.py` | SQLite WAL |
| `location_service.py` | GPS qua gpsd |
| `web/` | FastAPI dashboard |
| `health/` | Monitor Jetson qua sysfs (temp, GPU, power) |
| `camera/` | Reolink API — zoom, focus, IR |

## Xử lý ảnh trước OCR

- **Blur:** Laplacian variance (OpenCV) — bỏ frame mờ
- **Brightness:** Loại over/under-exposed
- **Plate validation:** Regex tùy chọn (bật/tắt từ dashboard)
- **Lighting metadata:** exposure, gain, IR mode — phân tích độ chính xác OCR theo điều kiện sáng

## Deploy nhanh

```bash
git clone https://github.com/joshkautz/alpr.git
cd alpr
./setup.sh   # deploy qua USB-C → Jetson 192.168.55.1
```

Dashboard:

| Kết nối | URL |
|---------|-----|
| USB-C | http://192.168.55.1:8080 |
| Wi-Fi AP | http://192.168.50.1 |
| Cùng mạng | http://jetson.local:8080 |

## API (REST)

| Endpoint | Mô tả |
|----------|--------|
| `GET /api/readings` | Danh sách biển số gần đây |
| `GET /api/export` | Export ZIP (CSV + ảnh) |
| `GET /api/metrics` | Thống kê hiệu năng |
| `POST /api/camera/zoom/in` | Zoom camera |
| `POST /api/camera/infrared` | Chế độ IR (auto/on/off) |

## GPU / Jetson

- **ONNX Runtime** + **TensorRT/CUDA** — không dùng `onnxruntime-gpu` PyPI thường (không hỗ trợ ARM64 Jetson)
- Wheel từ **Jetson AI Lab** (JetPack 6.x):

```bash
pip install onnxruntime-gpu --index-url https://pypi.jetson-ai-lab.io/jp6/cu126
```

Providers mong đợi: `TensorrtExecutionProvider`, `CUDAExecutionProvider`, `CPUExecutionProvider`

## Dependencies chính

- JetPack 6.2+ (CUDA, TensorRT)
- **fast-alpr** (YOLO + OCR)
- OpenCV, FastAPI, gpsd, go2rtc, Neolink

## Use case

| Domain | Ứng dụng |
|--------|----------|
| **Fleet / logistics** | Check-in xe vào kho, bãi (liên quan `addons/fleet`) |
| **Parking / gate** | Tự động ghi nhận biển, không cloud |
| **Field survey** | Thu thập biển + GPS ngoài hiện trường |
| **Odoo integration** | Webhook `POST /api/readings` → tạo `fleet.vehicle.log` hoặc alert `ntfy` |

## So sánh

| | ALPR (Jetson) | Cloud ALPR API | OpenALPR commercial |
|--|---------------|----------------|---------------------|
| Offline | ✅ | ❌ | Tùy deploy |
| Edge battery | ✅ | ❌ | Hạn chế |
| Chi phí API | Không | Per call | License |
| Custom hardware | Jetson + Reolink | N/A | N/A |

## Liên quan ai_core / Odoo

- Pattern **edge inference + REST API** — tương tự bridge local cho Odoo
- Kết hợp **ntfy**: biển số lạ → push notification
- **Fleet module:** sync reading → Odoo qua cron hoặc MCP tool
- Khác **ComfyUI/ScreenCoder**: đây là **real-time CV inference**, không phải generative AI

## Link

- Repo: https://github.com/joshkautz/alpr
- Docs trong repo: `docs/` (Build Guide, Camera Setup, Jetson Connectivity)
