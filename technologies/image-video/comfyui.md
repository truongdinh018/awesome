# ComfyUI

> **Repo:** [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)  
> **Category:** Image & Video Generation · GUI/API modular cho diffusion models  
> **Tags:** `image-gen` · `video` · `self-host`  
> **Ngôn ngữ:** Python · **⭐** ~120k

## Đây là gì?

**ComfyUI** là GUI/API **modular** cho **diffusion models** (Stable Diffusion, SDXL, Flux, [SANA](sana.md), video models…). Giao diện **node graph** — mỗi node là một bước (load model, prompt, sampler, upscale, v.v.).

Đây là một trong những repo AI **phổ biến nhất** trong catalog (120k+ stars). Tái sử dụng workflow (export JSON), debug từng bước, custom node từ community (ComfyUI Manager).

**Cùng kiểu:** [LocalAI](../devtools/localai.md) (engine đa backend), [CLI-Anything ComfyUI harness](../cli-anything/comfyui.md) (agent-native CLI).

## Dùng khi nào?

| Nhu cầu | ComfyUI |
|---------|---------|
| Banner sản phẩm, social post (marketing) | ✅ txt2img / img2img |
| Mockup UI concept trước khi dev | ✅ (bổ sung ScreenCoder) |
| Batch asset qua API + queue | ✅ API mode headless |
| Thử model mới không cần viết code | ✅ R&D |
| Tab form đơn giản hơn | → Automatic1111 |
| API cloud không self-host | → DALL·E API |

## Chạy thử

**Kiến trúc node graph:**

```
[Load Checkpoint] → [CLIP Text Encode] → [KSampler] → [VAE Decode] → [Save Image]
                         ↑
                   [ControlNet]
                         ↑
                   [Reference Image]
```

**Tính năng chính:** txt2img / img2img · ControlNet (pose, depth, canny) · LoRA / checkpoint · API mode headless · Video nodes (AnimateDiff, SVD… qua extension).

**Deploy gợi ý:** GPU 8GB+ (SD 1.5); 12GB+ (SDXL); 24GB+ (Flux). Chạy Docker hoặc native Python. Expose API chỉ nội bộ VPN.

**Harness agent-native CLI** (cha [CLI-Anything](../mcp-ai-agents/cli-anything.md)):

- Bài harness: [cli-anything/comfyui.md](../cli-anything/comfyui.md)
- Path: [`comfyui/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/comfyui/agent-harness)

## So với tool khác

| | ComfyUI | Automatic1111 | DALL·E API |
|--|---------|---------------|------------|
| UI | Node graph | Tab form | Không có (API) |
| Modular | Rất cao | Trung bình | Thấp |
| Self-host | ✅ | ✅ | ❌ |
| Learning curve | Cao | Trung bình | Thấp |

## Dùng với Odoo / ai_core

- Agent gọi ComfyUI API qua MCP tool → lưu ảnh `ir.attachment`.  
- Workflow JSON version control trong repo marketing.  
- Marketing Odoo — banner sản phẩm, social post.

## Link

- Repo: https://github.com/Comfy-Org/ComfyUI  
- Docs community: https://github.com/comfyanonymous/ComfyUI (legacy fork history)  
- Harness: [cli-anything/comfyui.md](../cli-anything/comfyui.md)
