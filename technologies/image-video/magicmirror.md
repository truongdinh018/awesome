# MagicMirror

> **Repo:** [idootop/MagicMirror](https://github.com/idootop/MagicMirror)  
> **Category:** Image & Video · Instant AI face swap (desktop)  
> **Tags:** `image-gen` · `desktop` · `self-host` · `cv`  
> **Ngôn ngữ:** TypeScript · Rust (Tauri) · Python · **⭐** ~2.9k · **License:** MIT *(commercial use prohibited per disclaimer)*  
> Face swap offline — build trên [InsightFace](../cv-edge/insightface.md) / FaceFusion / TinyFace

## Đây là gì?

**MagicMirror** là app desktop **AI face swap** một click: kéo-thả ảnh đổi mặt/kiểu tóc/trang phục. Offline, không cần GPU mạnh; installer &lt;10MB, models &lt;1GB. macOS 13+ / Windows 10+. Tauri + Python backend.

**Cùng kiểu:** [Deep-Live-Cam](deep-live-cam.md) (live webcam deepfake), [InsightFace](../cv-edge/insightface.md) (engine face analysis), [ComfyUI](comfyui.md) (pipeline generative rộng hơn).

## Dùng khi nào?

| Nhu cầu | MagicMirror |
|---------|-------------|
| Face swap thử đồ / hairstyle offline | ✅ Drag-drop |
| Live webcam / video deepfake | → [Deep-Live-Cam](deep-live-cam.md) |
| Face embedding / verify API | → [InsightFace](../cv-edge/insightface.md) |
| Full graph image/video gen | → [ComfyUI](comfyui.md) |

## Chạy thử

Releases: GitHub · docs Installation / Usage / FAQ.

**Disclaimer:** entertainment only; cấm mạo danh / deepfake độc hại; user chịu trách nhiệm quyền ảnh.

## So với tool khác

| | MagicMirror | InsightFace | ComfyUI |
|--|-------------|-------------|---------|
| Shape | Desktop face-swap UX | Face analysis library | Node graph gen |
| Privacy | Offline | Self-host libs | Self-host |
| Tags | `image-gen` `desktop` `cv` | `cv` `cli` | `image-gen` `video` |

## Dùng với Odoo / ai_core

- Demo marketing creative nội bộ (có consent).  
- Không dùng deepfake lừa đảo / PII.  
- Production face ID → InsightFace + policy, không MagicMirror.

## Link

- Repo: https://github.com/idootop/MagicMirror  
- Peers: [deep-live-cam.md](deep-live-cam.md) · [insightface.md](../cv-edge/insightface.md) · [comfyui.md](comfyui.md)
