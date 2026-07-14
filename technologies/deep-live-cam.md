# Deep-Live-Cam

> **Repo:** [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam)  
> **Category:** Image & Video · Real-time face swap / video deepfake  
> **Tags:** `video` · `image-gen` · `desktop` · `self-host` · `cv` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~95k · **License:** AGPL-3.0  
> Site: [deeplivecam.net](https://deeplivecam.net/)

## Đây là gì?

**Deep-Live-Cam** — **face swap realtime** (webcam/live) + one-click **video deepfake** từ **một ảnh** nguồn. Mouth mask, multi-face mapping, GPU/CPU/Mac Silicon; GUI + CLI. Stack face/vision (cùng họ [InsightFace](insightface.md)). Có bản prebuilt thương mại riêng (v2.7 RC) ngoài OSS.

**Cùng kiểu:** [MagicMirror](magicmirror.md) (desktop swap ảnh offline, nhẹ hơn), [InsightFace](insightface.md) (lib face analysis), [ComfyUI](comfyui.md) (pipeline gen rộng).

⚠️ **Đạo đức / pháp lý:** Chỉ dùng hợp pháp, có **consent** khi dùng khuôn mặt người thật; gắn nhãn deepfake khi đăng. Cấm mạo danh / lừa đảo / nội dung bị cấm luật. Upstream có filter nội dung nhạy cảm — **trách nhiệm thuộc end-user**. Catalog không hỗ trợ lạm dụng.

## Dùng khi nào?

| Nhu cầu | Deep-Live-Cam |
|---------|---------------|
| Webcam/live face swap realtime | ✅ primary |
| Video deepfake 1 ảnh nguồn | ✅ |
| Face swap ảnh desktop gọn (offline UI) | → [MagicMirror](magicmirror.md) |
| Face embed / verify API | → [InsightFace](insightface.md) |
| Node graph ảnh/video gen | → [ComfyUI](comfyui.md) |

## Chạy thử

```bash
git clone https://github.com/hacksider/Deep-Live-Cam.git
cd Deep-Live-Cam
# cài deps theo README (Python + models) — bản manual cần kỹ thuật
python run.py
# UI: chọn face → chọn camera → Live
```

Quickstart prebuilt: [deeplivecam.net](https://deeplivecam.net/) / releases upstream. AGPL-3.0 khi redistribute/modify service.

## So với tool khác

| | Deep-Live-Cam | MagicMirror | InsightFace |
|--|---------------|-------------|-------------|
| Shape | Live webcam + video deepfake | Desktop ảnh swap | Face analysis lib |
| Realtime cam | ✅ | ❌ (ảnh) | API/CV |
| License | AGPL-3.0 | MIT* | MIT-ish libs |
| Tags | `video` `cv` `desktop` | `image-gen` `desktop` `cv` | `cv` `cli` |

## Dùng với Odoo / ai_core

- Demo media nội bộ có consent — **không** gắn production identity verification.  
- Face ID / KYC → [InsightFace](insightface.md) + policy, không Deep-Live-Cam.  
- Không dùng để giả mạo khách hàng / nhân sự.

## Link

- Repo: https://github.com/hacksider/Deep-Live-Cam · Site: https://deeplivecam.net/  
- Peers: [magicmirror.md](magicmirror.md) · [insightface.md](insightface.md) · [comfyui.md](comfyui.md) · [supervision.md](supervision.md)
