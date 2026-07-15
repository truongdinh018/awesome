# AirLLM

> **Repo:** [lyogavin/airllm](https://github.com/lyogavin/airllm)  
> **Category:** DevTools · Suy luận LLM từng layer trên GPU VRAM nhỏ  
> **Tags:** `self-host` · `cli` · `api`  
> **Ngôn ngữ:** Python · PyTorch · notebooks · **⭐** ~22.6k · **License:** Apache-2.0  
> PyPI: [airllm](https://pypi.org/project/airllm/)

## Đây là gì?

**AirLLM** là thư viện **suy luận LLM lớn trên GPU nhỏ** bằng cách **chỉ giữ một layer trên VRAM** (load layer-wise từ disk), không bắt buộc quantize/distill/prune.

Claim: **70B ~4GB**, Llama 3.1 **405B ~8GB**, DeepSeek-V3 **671B ~12GB**, Qwen3-235B ~3GB (v3). `AutoModel.from_pretrained` giống transformers; optional compression 4bit/8bit (~3× faster load); Mac Apple Silicon; CPU path.

**Cùng kiểu:** [LocalAI](localai.md) / [MiniCPM](minicpm.md) (serve/app), [Unsloth](unsloth.md) (fine-tune + quant), [DFlash](dflash.md) (speculative decode accel), [FreeLLMAPI](freellmapi.md) (proxy free APIs).

## Dùng khi nào?

| Nhu cầu | AirLLM |
|---------|--------|
| Chạy 70B+ trên GPU consumer / Mac | ✅ layer streaming |
| API/UI multi-model serve | → [LocalAI](localai.md) |
| Fine-tune nhanh | → [Unsloth](unsloth.md) |
| Decode accel (draft) | → [DFlash](dflash.md) |

## Chạy thử

```bash
pip install airllm
```

```python
from airllm import AutoModel
model = AutoModel.from_pretrained("Qwen/Qwen3-32B")
# compression='4bit' | '8bit'  # optional block-wise weight compression
```

Disk I/O là bottleneck — SSD nhanh + prefetch quan trọng. Throughput thấp hơn full-VRAM; trade VRAM ↔ speed.

## So với tool khác

| | AirLLM | LocalAI | Unsloth |
|--|--------|---------|---------|
| Shape | Layerwise low-VRAM inference | Multi-modal local API | FT + quant train |
| Tiny GPU huge model | ✅ primary | Quant/offload | Train focus |
| Tags | `self-host` `cli` | `api` `self-host` | `self-host` `cli` |

## Dùng với Odoo / ai_core

- Lab/UAT thử model lớn khi GPU hạn chế.  
- Không thay serving latency-critical production (chậm vs GPU fit).  
- Prefer LocalAI/vLLM khi cần concurrent API.

## Link

- Repo: https://github.com/lyogavin/airllm  
- Peers: [localai.md](localai.md) · [unsloth.md](unsloth.md) · [dflash.md](dflash.md) · [minicpm.md](minicpm.md) · [freellmapi.md](freellmapi.md)
