# Unsloth

> **Repo:** [unslothai/unsloth](https://github.com/unslothai/unsloth)  
> **Category:** DevTools · Fine-tuning & Unsloth Studio  
> **Tags:** `self-host` · `cli` · `api` · `desktop`  
> **Ngôn ngữ:** Python · Triton · **⭐** ~68.2k · **License:** Apache-2.0  
> Docs: [unsloth.ai/docs](https://unsloth.ai/docs) · Site: [unsloth.ai](https://unsloth.ai)

## Tổng quan

**Unsloth** — fine-tune / RL LLM **nhanh hơn (~2×) · ít VRAM hơn (tới ~70%)** (LoRA, 4/16-bit, FP8, GRPO…) + **Unsloth Studio** (web UI train + chat). Core Python + Studio installer. Export GGUF / safetensors; inference API cho Claude Code / Codex; data recipes từ PDF/CSV/DOCX. Đội làm việc sát với Qwen, Llama, Gemma, gpt-oss…

Liên quan repo nội bộ: [ai-training](../../ai-training/README.md) · notebook `odoo_assistant_finetune_unsloth.ipynb` · [FINE_TUNING.md](../../ai-training/docs/FINE_TUNING.md).

Peer: [LocalAI](localai.md) (serve model sau train), [VoxCPM](voxcpm.md) / Orpheus notebooks (TTS FT).

## Để làm gì?

| Nhu cầu | Unsloth |
|---------|---------|
| Fine-tune / RL trên consumer GPU | ✅ Studio + Core |
| UI train + chat local | ✅ `unsloth studio` |
| Export GGUF → Ollama/LocalAI | ✅ |
| Chỉ inference multi-modal API | → [LocalAI](localai.md) |
| Free-tier cloud proxy | → [FreeLLMAPI](freellmapi.md) |

## Highlight

```bash
# Studio
curl -fsSL https://unsloth.ai/install.sh | sh
unsloth studio -p 8888

# Core
uv pip install unsloth --torch-backend=auto
```

- 500+ models · Multi-GPU · Observability loss/GPU  
- Docker `unsloth/unsloth` · Colab free notebooks (Gemma 4, Qwen3.5, gpt-oss, GRPO…)  
- Tool calling · code sandbox · vision/PDF chat trong Studio  

## So sánh catalog

| | Unsloth | LocalAI | ai-training (nội bộ) |
|--|---------|---------|----------------------|
| Niche | Train/RL + Studio UI | Serve OpenAI-compat | Knowledge + Odoo FT pipeline |
| Tags | `self-host` `cli` `api` `desktop` | `api` `mcp` `stt`… | docs + notebooks |

## Use case Odoo / ai_core

- Fine-tune assistant Odoo (xem notebook Unsloth trong ai-training).  
- Export adapter → LocalAI / vLLM on-prem.  
- RL/GRPO experiments cho domain ERP (cẩn thận data privacy).

## Link

- Repo: https://github.com/unslothai/unsloth  
- Docs · Notebooks: [unslothai/notebooks](https://github.com/unslothai/notebooks)  
- Peers: [localai.md](localai.md) · `../../ai-training/docs/FINE_TUNING.md`
