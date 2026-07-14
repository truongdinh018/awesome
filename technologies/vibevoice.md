# VibeVoice

> **Upstream:** [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) · **⭐** ~50.1k · **License:** MIT  
> **Fork (liên kết bạn gửi):** [rsxdalv/VibeVoice](https://github.com/rsxdalv/VibeVoice) (~144★)  
> **Category:** Speech & Audio · Long multi-speaker TTS  
> **Tags:** `tts` · `voice-clone` · `self-host`  
> HF: [microsoft/VibeVoice-1.5B](https://huggingface.co/microsoft/VibeVoice-1.5B) · [VibeVoice-Large](https://huggingface.co/microsoft/VibeVoice-Large)  
> Project: [microsoft.github.io/VibeVoice](https://microsoft.github.io/VibeVoice/)

## Đây là gì?

**VibeVoice** (Microsoft) là TTS **long-form multi-speaker** (podcast / hội thoại): tới **~90 phút**, **4 speakers**, continuous speech tokenizers @ 7.5 Hz + LLM + diffusion head.

EN/ZH; cross-lingual & spontaneous singing (emergent). Research-oriented — README khuyến cáo **không production** chưa test thêm; rủi ro deepfake. Canonical code/models = **microsoft/VibeVoice**. Fork `rsxdalv/VibeVoice` giữ cùng lineage.

**Cùng kiểu:** [VoxCPM](voxcpm.md), [OmniVoice Studio](omnivoice-studio.md), [Open Notebook](open-notebook.md) (podcast), [AudioSeal](audioseal.md) (watermark TTS).

## Dùng khi nào?

| Nhu cầu | VibeVoice |
|---------|-----------|
| Podcast / multi-turn dialogue TTS | ✅ 1–4 speakers, long context |
| Gradio / file inference | ✅ `demo/` |
| Production commercial TTS | ⚠️ research only — test kỹ |
| Short clone / studio UI | → [OmniVoice](omnivoice-studio.md) / [VoxCPM](voxcpm.md) |

## Chạy thử

```bash
git clone https://github.com/microsoft/VibeVoice.git && cd VibeVoice
pip install -e .
python demo/gradio_demo.py --model_path microsoft/VibeVoice-Large --share
python demo/inference_from_file.py --model_path microsoft/VibeVoice-Large \
  --txt_path demo/text_examples/2p_music.txt --speaker_names Alice Frank
```

- Models: 1.5B (~90 min) · Large (~45 min) · 0.5B Streaming (TBD)  
- Tip CN: English punctuation; Large ổn định hơn

## So với tool khác

| | VibeVoice | VoxCPM | OmniVoice |
|--|-----------|--------|-----------|
| Niche | Long multi-speaker dialogue | Tokenizer-free clone | Local studio |
| Length | ~45–90 min | shorter utts | session UI |
| Tags | `tts` `voice-clone` | `tts` `voice-clone` | `stt` `tts` `desktop` |

## Dùng với Odoo / ai_core

- Demo training podcast từ docs (ghép Open Notebook / HyperFrames).  
- Watermark output bằng [AudioSeal](audioseal.md).  
- Không deploy customer-facing voice clone trước khi review legal/safety.

## Link

- Upstream: https://github.com/microsoft/VibeVoice  
- Fork: https://github.com/rsxdalv/VibeVoice  
- Peers: [voxcpm.md](voxcpm.md) · [omnivoice-studio.md](omnivoice-studio.md) · [audioseal.md](audioseal.md) · [vieneu-tts.md](vieneu-tts.md)
