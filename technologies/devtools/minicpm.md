# MiniCPM

> **Repo:** [OpenBMB/MiniCPM](https://github.com/OpenBMB/MiniCPM)  
> **Category:** DevTools · On-device LLM family  
> **Tags:** `self-host` · `cli` · `edge` · `desktop` · `skill`  
> **Ngôn ngữ:** Python · **⭐** ~9.8k · **License:** Apache-2.0  
> Flagship hiện tại: **MiniCPM5-1B** · Multi-modal: [MiniCPM-V](https://github.com/OpenBMB/MiniCPM-V) (repo riêng)  
> HF: [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) (+ GGUF / MLX)

## Đây là gì?

**MiniCPM** (OpenBMB / Tsinghua) là dòng **LLM nhỏ, mạnh trên edge/on-device**. Release mới **MiniCPM5-1B**: dense 1B Transformer, SOTA mở trong lớp 1B (reasoning, code, math, instruction, **agentic tool use**). Hybrid reasoning (`<think>` / `enable_thinking`). Repo kèm cookbook + **Agent Skills** cho deploy/fine-tune trên nhiều backend; Desktop Pet chạy local trên MiniCPM5-1B.

Dòng trước: MiniCPM4 / 4.1 (sparse attention, edge accel), MiniCPM-SALA (triệu token context), BitCPM4 (ternary), MiniCPM4-MCP / Survey apps.

**Cùng kiểu:** [LocalAI](localai.md), [Unsloth](unsloth.md), [DFlash](dflash.md), [FreeLLMAPI](freellmapi.md), [VoxCPM](../speech-audio/voxcpm.md) (TTS cùng nhà OpenBMB).

## Dùng khi nào?

| Nhu cầu | MiniCPM |
|---------|---------|
| LLM 1B on-device / low-VRAM SOTA | ✅ MiniCPM5-1B (+ GGUF/MLX) |
| Hybrid think / non-think 1 checkpoint | ✅ |
| Cookbook + Agent Skills deploy/FT | ✅ trong repo |
| Vision / VLM | → [MiniCPM-V](https://github.com/OpenBMB/MiniCPM-V) (chưa catalog riêng) |
| Fine-tune generic multi-model | → [Unsloth](unsloth.md) |
| OpenAI-compat multi-backend serve | → [LocalAI](localai.md) |

## Chạy thử

```bash
# Weights — HF / ModelScope: MiniCPM5-1B · SFT · Base · GGUF · MLX
# Quickstart & cookbooks: docs/ + skills/ trong repo
# Desktop Pet — xem README section Desktop Pet
```

Eval trung bình ~42.6 (1B-class) vs peer ~35.6. Train recipe: RL + OPD (xem technical notes upstream). Quant / speculative: BitCPM4, Eagle variants (MiniCPM4.x).

## So với tool khác

| | MiniCPM | LocalAI | Unsloth |
|--|---------|---------|---------|
| Shape | Model family + skills | Inference engine | Fine-tune / Studio |
| Niche | 1B–edge SOTA + agentic | Drop-in API | Train mọi HF model |
| Tags | `self-host` `edge` `desktop` `skill` | `api` `mcp` `stt`… | `cli` `api` `desktop` |

## Dùng với Odoo / ai_core

- LLM nhẹ cho laptop/WSL hoặc edge box khi Ollama `qwen` quá nặng.  
- Agent tool-use / think mode thử nghiệm trước khi gắn LiteLLM gateway.  
- Fine-tune domain Odoo: Unsloth trên Base/SFT rồi serve LocalAI / vLLM.

## Link

- Repo: https://github.com/OpenBMB/MiniCPM  
- CN: [README-cn.md](https://github.com/OpenBMB/MiniCPM/blob/main/README-cn.md) · Tech report / Wiki  
- Peers: [localai.md](localai.md) · [unsloth.md](unsloth.md) · [dflash.md](dflash.md) · [voxcpm.md](../speech-audio/voxcpm.md) · [freellmapi.md](freellmapi.md)
