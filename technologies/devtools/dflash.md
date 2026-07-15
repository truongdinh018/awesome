# DFlash

> **Repo:** [z-lab/dflash](https://github.com/z-lab/dflash)  
> **Category:** DevTools · Speculative decoding (block diffusion)  
> **Tags:** `cli` · `self-host` · `api`  
> **Ngôn ngữ:** Python · **⭐** ~5.5k · **License:** MIT  
> Site: [dflash.z-lab.ai](https://dflash.z-lab.ai) · Paper: [arXiv:2602.06036](https://arxiv.org/abs/2602.06036)

## Đây là gì?

**DFlash** (*Block Diffusion for Flash Speculative Decoding*) là draft model **block diffusion** nhẹ để **speculative decoding**: target LLM verify draft song song → tăng throughput, giữ chất lượng.

Backends: **vLLM**, **SGLang**, Transformers (Qwen3/LLaMA), **MLX** (Apple Silicon). Draft checkpoints trên Hugging Face (`z-lab/*-DFlash`) cho Gemma 4, Qwen3.5/3.6, gpt-oss, Kimi, MiniMax…

**Cùng kiểu:** [LocalAI](localai.md) / vLLM serve, [Unsloth](unsloth.md) (train), [FreeLLMAPI](freellmapi.md) (proxy — không tăng tốc GPU). Nội bộ: [ai-training INFERENCE_SCALING](../../ai-training/docs/INFERENCE_SCALING.md).

## Dùng khi nào?

| Nhu cầu | DFlash |
|---------|--------|
| Tăng tok/s self-host LLM | ✅ speculative + draft HF |
| Serve OpenAI-compat (vLLM/SGLang) | ✅ |
| Fine-tune / RL | → [Unsloth](unsloth.md) |
| Multi-modal local engine UI | → [LocalAI](localai.md) |

## Chạy thử

```bash
uv pip install -e ".[vllm]"   # or [sglang] [transformers] [mlx]
vllm serve Qwen/Qwen3.5-27B \
  --speculative-config '{"method":"dflash","model":"z-lab/Qwen3.5-27B-DFlash","num_speculative_tokens":15}'
```

- Benchmark: `python -m dflash.benchmark --backend vllm|sglang|transformers|mlx`  
- Gemma4: Docker `ghcr.io/z-lab/vllm-openai:gemma4-dflash-cu130`  
- Training recipe draft sắp open-source  

## So với tool khác

| | DFlash | LocalAI | Unsloth |
|--|--------|---------|---------|
| Niche | Spec decode / draft | Multi-modal serve | Fine-tune |
| Tags | `cli` `self-host` `api` | `api` `mcp` `stt`… | `cli` `desktop` |

## Dùng với Odoo / ai_core

- Tăng throughput API LLM nội bộ (Odoo agents) khi GPU đã có vLLM/SGLang.  
- Chọn draft matching model family từ bảng HF trong README.  
- Benchmark trước roll production (`dflash.benchmark`).

## Link

- Repo: https://github.com/z-lab/dflash  
- Models: Hugging Face `z-lab/*-DFlash`  
- Peers: [localai.md](localai.md) · [unsloth.md](unsloth.md)
