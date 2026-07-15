# vLLM-Omni

> **Repo:** [vllm-project/vllm-omni](https://github.com/vllm-project/vllm-omni)  
> **Category:** DevTools · Serve omni-modality trên nền vLLM  
> **Tags:** `api` · `self-host` · `cli` · `tts` · `image-gen` · `video`  
> **Ngôn ngữ:** Python · **⭐** ~5.6k · **License:** Apache-2.0  
> Docs: [vllm-omni.readthedocs.io](https://vllm-omni.readthedocs.io/en/latest/) · Paper: [arXiv:2602.02204](https://arxiv.org/abs/2602.02204)

## Đây là gì?

**vLLM-Omni** mở rộng [vLLM](https://github.com/vllm-project/vllm) từ **LLM text AR** sang phục vụ model **omni-modality**: text, ảnh, audio, video, action — kèm **Diffusion (DiT)** và output không chỉ text.

Nhanh nhờ KV cache của vLLM + *pipeline stage* chồng lấp + disaggregation (OmniConnector). Linh hoạt: pipeline dị thể, HF models, parallel (tensor/pipeline/data/expert), streaming, **API kiểu OpenAI**. Cover Qwen3-Omni / TTS, VoxCPM2, CosyVoice, diffusion (Qwen-Image, Wan, FLUX), world/robot-policy (Cosmos3, GR00T…). Backend: CUDA / ROCm / XPU / NPU.

**Cùng kiểu:** [LocalAI](localai.md) (engine đa backend, dễ deskop), [Cake](cake.md) / [exo](exo.md) (cluster local), [ComfyUI](../image-video/comfyui.md) (graph gen ảnh/video), [VoxCPM](../speech-audio/voxcpm.md) (TTS model — Omnicó thể serve).

## Dùng khi nào?

| Nhu cầu | vLLM-Omni |
|---------|-----------|
| Serve omni / TTS / DiT production trên GPU cluster | ✅ primary |
| API OpenAI-compat multimodal | ✅ |
| Một máy deskop CPU/Ollama-style | → [LocalAI](localai.md) |
| Workflow gen ảnh node graph | → [ComfyUI](../image-video/comfyui.md) |
| Chỉ tăng tốc decode LLM (speculative) | → [DFlash](dflash.md) |

## Chạy thử

```bash
# Docs: https://vllm-omni.readthedocs.io/en/latest/getting_started/installation/
pip install vllm-omni   # hoặc theo recipe release — cần khớp phiên bản vLLM

# OpenAI-compatible server (xem quickstart + recipes.vllm.ai)
vllm serve <omni-or-tts-or-dit-model>  # lệnh/entrypoint theo docs hiện tại
```

- Supported models: [docs — Supported Models](https://vllm-omni.readthedocs.io/en/latest/models/supported_models/)  
- Recipes deploy: [recipes.vllm.ai](https://recipes.vllm.ai)  
- Skill agent: [vllm-omni-skills](https://github.com/hsliuustc0106/vllm-omni-skills)

## So với tool khác

| | vLLM-Omni | LocalAI | Cake |
|--|-----------|---------|------|
| Vai trò | Serve omni + DiT trên stack vLLM | Engine đa backend dễ tự host | Inference Rust + shard cluster |
| GPU prod | ✅ CUDA/ROCm/NPU… | ✅ tùy backend | ✅ |
| Tags | `api` `self-host` `tts` `image-gen` `video` | `api` `mcp` `agent` `stt` `tts` | `api` `edge` `tts` |

## Dùng với Odoo / ai_core

- Trỏ `base_url` provider Odoo / `ai_llm` tới OpenAI-compat của Omnicó GPU on-prem.  
- TTS/VLM/caption chunk RAG (image/table ModalProcessor) → backend Omnicó throughput cao hơn local laptop.  
- Khác ComfyUI: đây là **serving API**, không phải canvas workflow.

## Link

- Repo: https://github.com/vllm-project/vllm-omni  
- Docs: https://vllm-omni.readthedocs.io/en/latest/  
- Peers: [localai.md](localai.md) · [cake.md](cake.md) · [exo.md](exo.md) · [dflash.md](dflash.md) · [voxcpm.md](../speech-audio/voxcpm.md) · [comfyui.md](../image-video/comfyui.md)
