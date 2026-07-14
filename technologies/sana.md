# SANA (NVlabs)

> **Repo:** [NVlabs/Sana](https://github.com/NVlabs/Sana)  
> **Category:** Image & Video · Efficient Linear-DiT image/video synthesis  
> **Tags:** `image-gen` · `video` · `self-host` · `cli` · `api`  
> **Ngôn ngữ:** Python · PyTorch · Diffusers · **⭐** ~8.5k  
> **License:** Apache-2.0 · Docs: [nvlabs.github.io/Sana](https://nvlabs.github.io/Sana/docs/) · ICLR'25 Oral / ICML'25 / ICCV'25 / ICLR'26 Oral

## Đây là gì?

**SANA** là family model diffusion **hiệu năng cao** (NVIDIA Labs + MIT HAN Lab): Linear Attention DiT + DC-AE (32× compress) → text-to-image tới **4K**, nhanh/nhỏ hơn Flux-12B nhiều bậc.

Có **Sprint** (1-step ~0.1s/1024 trên H100), **Video/LongSANA**, **WM** (world model camera 6-DoF), **Streaming** (V2V edit realtime), **Sol-RL**. Inference qua `diffusers` / ComfyUI / SGLang (OpenAI-compatible) / Replicate; 4-bit chạy được **<8GB VRAM**.

**Cùng kiểu:** [ComfyUI](comfyui.md), [Toonflow](toonflow.md), [MoneyPrinterTurbo](moneyprinterturbo.md), [MagicMirror](magicmirror.md)

## Dùng khi nào?

| Nhu cầu | SANA |
|---------|------|
| T2I efficient 1K–4K / few-step Sprint | ✅ |
| T2V / long video / world model / stream edit | ✅ (family) |
| Fine-tune LoRA / RL post-train | ✅ (diffusers · Cosmos-RL · Sol-RL) |
| Node-graph studio end-user | → [ComfyUI](comfyui.md) (+ SANA nodes) |
| Novel→short drama desktop | → [Toonflow](toonflow.md) |

## Chạy thử

```bash
git clone https://github.com/NVlabs/Sana.git
cd Sana && ./environment_setup.sh sana

# Diffusers (diffusers≥0.32)
# from diffusers import SanaPipeline
# pipe = SanaPipeline.from_pretrained("Efficient-Large-Model/SANA1.5_1.6B_1024px_diffusers", ...)
```

Weights/HF: [Efficient-Large-Model/sana](https://huggingface.co/collections/Efficient-Large-Model/sana) · Demo: [nv-sana.mit.edu](https://nv-sana.mit.edu/)

## So với tool khác

| | SANA | ComfyUI | Toonflow |
|--|------|---------|----------|
| Shape | Research + train/serve codebase | Node GUI orchestration | Drama studio app |
| Core | Linear DiT · DC-AE | Graph runtime (any model) | Agents + canvas |
| Tags | `image-gen` `video` `cli` `api` | `image-gen` `video` | `video` `desktop` `agent` |

## Dùng với Odoo / ai_core

- Self-host T2I/T2V cho marketing asset (ComfyUI hoặc SGLang API).  
- R&D / fine-tune brand LoRA — không gắn ERP mặc định.  
- Tôn trọng policy NVIDIA/HF model card + bản quyền prompt/output.

## Link

- Repo: https://github.com/NVlabs/Sana  
- Docs: https://nvlabs.github.io/Sana/docs/  
- Peers: [comfyui.md](comfyui.md) · [toonflow.md](toonflow.md) · [moneyprinterturbo.md](moneyprinterturbo.md) · [magicmirror.md](magicmirror.md)
