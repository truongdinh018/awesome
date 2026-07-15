# LivePortrait

> **Repo:** [KlingAIResearch/LivePortrait](https://github.com/KlingAIResearch/LivePortrait)  
> **Category:** Image & Video · Efficient portrait animation  
> **Tags:** `video` · `image-gen` · `self-host` · `cv` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~18.7k · **License:** MIT  
> Homepage: [liveportrait.github.io](https://liveportrait.github.io) · Paper: [arXiv](https://arxiv.org/abs/2407.03168)

## Đây là gì?

**LivePortrait** — **portrait animation** hiệu quả: ảnh (hoặc video) nguồn + **driving** video/ảnh → animate khuôn mặt (expression, pose; stitch + retargeting control). Humans + Animals mode; Gradio UI, CLI, Windows one-click, Apple Silicon (Humans). Stack PyTorch · Conda · FFmpeg · CUDA (GPU khuyến nghị). Paper *LivePortrait: Efficient Portrait Animation with Stitching and Retargeting Control* (Kuaishou / Kling). Adopted rộng trên nền tảng video CN.

Không phải face-swap webcam realtime — xem [Deep-Live-Cam](deep-live-cam.md) / [MagicMirror](magicmirror.md).

**Cùng kiểu:** [Deep-Live-Cam](deep-live-cam.md) (swap/live deepfake), [MagicMirror](magicmirror.md) (desktop face swap ảnh), [Toonflow](toonflow.md) (storyboard→video), [ComfyUI](comfyui.md) (node graph; có community AdvancedLivePortrait).

⚠️ **Đạo đức / pháp lý:** Consent khi animate người thật; gắn nhãn synthetic khi publish. Cấm mạo danh / deepfake lừa đảo. Trách nhiệm end-user.

## Dùng khi nào?

| Nhu cầu | LivePortrait |
|---------|----------------|
| Animate still portrait từ driving video | ✅ primary |
| Talking-head / expression retarget | ✅ |
| Face swap webcam realtime | → [Deep-Live-Cam](deep-live-cam.md) |
| Face swap ảnh desktop offline | → [MagicMirror](magicmirror.md) |
| Full generative video pipeline | → [ComfyUI](comfyui.md) · [Toonflow](toonflow.md) |

## Chạy thử

```bash
# cần git, conda, FFmpeg (+ CUDA cho GPU)
git clone https://github.com/KlingAIResearch/LivePortrait.git
cd LivePortrait
conda create -n LivePortrait python=3.10 && conda activate LivePortrait
# cài torch theo CUDA + pip install -r requirements.txt — xem README
# tải pretrained weights theo hướng dẫn upstream
python inference.py -s assets/examples/source/s0.jpg -d assets/examples/driving/d0.mp4
# hoặc Gradio app theo README
```

Weights lớn; Animals mode cần X-Pose (không macOS). Demo: [Hugging Face Space](https://huggingface.co/spaces/KwaiVGI/LivePortrait).

## So với tool khác

| | LivePortrait | Deep-Live-Cam | MagicMirror |
|--|--------------|---------------|-------------|
| Việc chính | Animate portrait (drive) | Live swap / video deepfake | Face swap ảnh desktop |
| GPU | CUDA khuyến nghị | GPU/CPU | Offline nhẹ |
| License | MIT | AGPL-3.0 | (xem repo) |
| UI | Gradio + CLI + Win installer | GUI + CLI | Tauri app |

## Odoo / ai_core

Pipeline avatar / talking-head từ ảnh staff → artifact MP4 qua job GPU ngoài Odoo; catalog + ACL media. Không gắn worker Odoo trực tiếp.

## Link

- Repo: https://github.com/KlingAIResearch/LivePortrait · Home: https://liveportrait.github.io  
- Paper: https://arxiv.org/abs/2407.03168 · HF Space: https://huggingface.co/spaces/KwaiVGI/LivePortrait  
- Gần: [Deep-Live-Cam](deep-live-cam.md) · [MagicMirror](magicmirror.md) · [Toonflow](toonflow.md) · [ComfyUI](comfyui.md)
