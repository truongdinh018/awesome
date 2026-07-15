# ALPR (Automatic License Plate Recognition)

> **Repo:** [joshkautz/alpr](https://github.com/joshkautz/alpr)  
> **Category:** Computer Vision & Edge · Nhận dạng biển số offline trên Jetson  
> **Tags:** `cv` · `edge` · `self-host`  
> **Ngôn ngữ:** Python · **⭐** ~1

## Đây là gì?

**ALPR** là hệ thống **nhận dạng biển số xe** (*license plate recognition*) **portable, offline hoàn toàn**.

Chạy trên **NVIDIA Jetson Orin Nano Super** (67 TOPS), camera **Reolink 4K** + GPS USB, pin **BLUETTI** — hoạt động 11–16 giờ không cần internet. Dashboard mobile-friendly qua Wi-Fi của thiết bị. Toàn bộ inference **local** — phù hợp privacy, hiện trường, hoặc môi trường không có mạng.

**Cùng kiểu:** không có peer trực tiếp trong catalog — pattern **edge inference + REST API** tương tự bridge local cho Odoo; khác **ComfyUI/ScreenCoder** (generative AI, không phải CV real-time).

## Dùng khi nào?

| Nhu cầu | ALPR |
|---------|------|
| Check-in xe vào kho, bãi (fleet / logistics) | ✅ |
| Tự động ghi nhận biển, không cloud (parking / gate) | ✅ |
| Thu thập biển + GPS ngoài hiện trường | ✅ |
| Webhook → Odoo / alert ntfy | ✅ `POST /api/readings` |
| Cloud ALPR trả phí theo call | → Cloud ALPR API |
| Generative AI / diffusion | → [ComfyUI](../image-video/comfyui.md) |

## Chạy thử

**Hardware stack:**

| Component | Vai trò |
|-----------|---------|
| Jetson Orin Nano Super | AI inference (YOLO + OCR) |
| Reolink RLC-811A | Camera 4K, zoom 5x |
| VK-162 USB GPS | Gắn tọa độ vào mỗi lần đọc biển |
| BLUETTI Handsfree 2 | Nguồn pin di động |

**Pipeline:**

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

```bash
git clone https://github.com/joshkautz/alpr.git
cd alpr
./setup.sh   # deploy qua USB-C → Jetson 192.168.55.1
```

**Dashboard:**

| Kết nối | URL |
|---------|-----|
| USB-C | http://192.168.55.1:8080 |
| Wi-Fi AP | http://192.168.50.1 |
| Cùng mạng | http://jetson.local:8080 |

**GPU / Jetson** — ONNX Runtime + **TensorRT/CUDA** (không dùng `onnxruntime-gpu` PyPI thường — không hỗ trợ ARM64 Jetson):

```bash
pip install onnxruntime-gpu --index-url https://pypi.jetson-ai-lab.io/jp6/cu126
```

Providers mong đợi: `TensorrtExecutionProvider`, `CUDAExecutionProvider`, `CPUExecutionProvider`

**Module chính:** `main.py` (PipelineOrchestrator) · `frame_processor.py` (YOLO + OCR) · `video_stream_capture.py` · `duplicate_filter.py` · `plate_database.py` (SQLite WAL) · `location_service.py` (GPS qua gpsd) · `web/` (FastAPI) · `health/` (Jetson sysfs) · `camera/` (Reolink API).

**Xử lý ảnh trước OCR:** blur (Laplacian variance), brightness filter, plate validation regex (bật/tắt dashboard), lighting metadata (exposure, gain, IR mode).

**API REST:** `GET /api/readings` · `GET /api/export` (ZIP CSV + ảnh) · `GET /api/metrics` · `POST /api/camera/zoom/in` · `POST /api/camera/infrared`.

**Dependencies:** JetPack 6.2+ · **fast-alpr** · OpenCV · FastAPI · gpsd · go2rtc · Neolink.

## So với tool khác

| | ALPR (Jetson) | Cloud ALPR API | OpenALPR commercial |
|--|---------------|----------------|---------------------|
| Offline | ✅ | ❌ | Tùy deploy |
| Edge battery | ✅ | ❌ | Hạn chế |
| Chi phí API | Không | Per call | License |
| Custom hardware | Jetson + Reolink | N/A | N/A |

## Dùng với Odoo / ai_core

- Pattern **edge inference + REST API** — tương tự bridge local cho Odoo.  
- Kết hợp **ntfy**: biển số lạ → push notification.  
- **Fleet module:** sync reading → Odoo qua cron hoặc MCP tool.

## Link

- Repo: https://github.com/joshkautz/alpr  
- Docs trong repo: `docs/` (Build Guide, Camera Setup, Jetson Connectivity)
