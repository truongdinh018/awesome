# ComfyUI

> **Repo:** [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)  
> **Category:** Image & Video Generation  
> **Tags:** `image-gen` · `video` · `self-host`  
> **Ngôn ngữ:** Python · **⭐** ~120k

## Tổng quan

**ComfyUI** là GUI/API **modular** cho **diffusion models** (Stable Diffusion, SDXL, Flux, video models…). Giao diện **node graph** — mỗi node là một bước (load model, prompt, sampler, upscale, v.v.).

Đây là một trong những repo AI **phổ biến nhất** trong catalog (120k+ stars).

## Kiến trúc node graph

```
[Load Checkpoint] → [CLIP Text Encode] → [KSampler] → [VAE Decode] → [Save Image]
                         ↑
                   [ControlNet]
                         ↑
                   [Reference Image]
```

**Ưu điểm graph:**

- Tái sử dụng workflow (export JSON)
- Debug từng bước
- Custom node từ community (ComfyUI Manager)

## Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| txt2img / img2img | Sinh ảnh từ prompt |
| ControlNet | Điều khiển pose, depth, canny |
| LoRA / checkpoint | Mix style, nhân vật |
| API mode | Headless cho automation |
| Video nodes | AnimateDiff, SVD… (qua extension) |

## Use case

- **Marketing Odoo** — banner sản phẩm, social post
- **Mockup UI** — concept trước khi dev (bổ sung ScreenCoder)
- **Batch asset** — API ComfyUI + queue
- **R&D** — thử model mới không cần viết code

## So sánh

| | ComfyUI | Automatic1111 | DALL·E API |
|--|---------|---------------|------------|
| UI | Node graph | Tab form | Không có (API) |
| Modular | Rất cao | Trung bình | Thấp |
| Self-host | ✅ | ✅ | ❌ |
| Learning curve | Cao | Trung bình | Thấp |

## Deploy gợi ý

- GPU 8GB+ (SD 1.5); 12GB+ (SDXL); 24GB+ (Flux)
- Chạy Docker hoặc native Python
- Expose API chỉ nội bộ VPN

## Liên quan ai_core

- Agent gọi ComfyUI API qua MCP tool → lưu ảnh `ir.attachment`
- Workflow JSON version control trong repo marketing

## Liên quan CLI-Anything (con)

Harness agent-native CLI (cha [CLI-Anything](cli-anything.md)):

- Bài harness: [cli-anything/comfyui.md](cli-anything/comfyui.md)
- Path: [`comfyui/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/comfyui/agent-harness)

## Link

- Repo: https://github.com/Comfy-Org/ComfyUI
- Docs community: https://github.com/comfyanonymous/ComfyUI (legacy fork history)
