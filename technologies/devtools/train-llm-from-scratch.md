# Train LLM From Scratch

> **Repo:** [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch)  
> **Category:** DevTools · Pretrain + post-training LLM từ đầu (PyTorch)  
> **Tags:** `self-host` · `cli` · `desktop`  
> **Ngôn ngữ:** Python · PyTorch · **⭐** ~8.3k · **License:** MIT  
> Docs: [fareedkhan-dev.github.io/train-llm-from-scratch](https://fareedkhan-dev.github.io/train-llm-from-scratch/)

## Đây là gì?

**Train LLM From Scratch** là tutorial + codebase dạy **train LLM end-to-end**: tải data → tokenize → pretrain Transformer → SFT → reward model → DPO/PPO/GRPO → evaluate → chat.

Đặc biệt: mô hình và mọi thuật toán (attention, SFT, Bradley-Terry RM, PPO+GAE, DPO/ORPO/KTO, GRPO) viết bằng **PyTorch thuần** — không `trl` / `peft` / `transformers`. Có config smoke chạy vài giây trên CPU; 13M param chạy được Colab/Kaggle T4; có cờ `--amp` / grad checkpointing / accum cho model lớn hơn. UI điều khiển từng stage bằng **Streamlit**.

**Cùng kiểu:** [Unsloth](unsloth.md) (fine-tune/RL production, LoRA), [ai-training](../../ai-training/README.md) (notebook FT Odoo), [LocalAI](localai.md) (serve model sau train).

## Dùng khi nào?

| Nhu cầu | Train LLM From Scratch |
|---------|------------------------|
| Học pretrain + alignment từ zero (code đọc được) | ✅ |
| Chạy pipeline nhỏ trên 1 GPU / smoke CPU | ✅ scripts + `configs/smoke/` |
| Fine-tune nhanh LoRA production trên consumer GPU | → [Unsloth](unsloth.md) |
| Chỉ serve OpenAI-compat | → [LocalAI](localai.md) |
| Pipeline FT assistant Odoo có sẵn | → [ai-training](../../ai-training/README.md) |

## Chạy thử

```bash
git clone https://github.com/FareedKhan-dev/train-llm-from-scratch.git
cd train-llm-from-scratch
pip install -e ".[all]"

# kiểm tra math post-training trên CPU
python tests/test_post_training_smoke.py

# SFT smoke (model cực nhỏ)
python scripts/train_sft.py --config configs/smoke/sft.json

# UI điều khiển các stage
# streamlit run … (xem README repo / docs site)
```

- Docs local: `pip install -e ".[docs]" && mkdocs serve`  
- Full post-train: `bash scripts/run_posttraining.sh` (`NPROC=1` nếu 1 GPU)

## So với tool khác

| | Train LLM From Scratch | Unsloth | ai-training |
|--|------------------------|---------|-------------|
| Niche | Học + implement từ đầu | FT/RL nhanh (LoRA…) | Knowledge + FT Odoo |
| Stack | Plain PyTorch | Triton / Unsloth Core | notebooks nội bộ |
| Tags | `self-host` `cli` `desktop` | `self-host` `cli` `api` `desktop` | docs |

## Dùng với Odoo / ai_core

- Dùng để **hiểu** SFT/DPO/GRPO trước khi chọn Unsloth / pipeline `ai-training`.  
- Không thay adapter production — sau khi hiểu loss, FT model domain ERP bằng Unsloth rồi serve LocalAI / vLLM.  
- Dataset smoke/tutorial ≠ data Odoo; giữ PII khỏi pretrain công khai.

## Link

- Repo: https://github.com/FareedKhan-dev/train-llm-from-scratch  
- Docs: https://fareedkhan-dev.github.io/train-llm-from-scratch/  
- Peers: [unsloth.md](unsloth.md) · [localai.md](localai.md) · `../../ai-training/docs/FINE_TUNING.md`
