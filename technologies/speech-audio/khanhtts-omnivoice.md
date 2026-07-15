# KhanhTTS-OmniVoice

> **HF:** [kjanh/KhanhTTS-OmniVoice](https://huggingface.co/kjanh/KhanhTTS-OmniVoice)  
> **Category:** Speech & Audio · Vietnamese + English TTS (OmniVoice fine-tune)  
> **Tags:** `tts` · `voice-clone` · `self-host` · `cli`  
> **Ngôn ngữ:** Python · HF ❤️ ~34 · ↓ ~2.3k/mo · **License:** Apache-2.0  
> Base: [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) · Paper: [arXiv:2604.00688](https://arxiv.org/abs/2604.00688)

## Đây là gì?

**KhanhTTS** là model **Text-to-Speech (TTS)** fine-tune trên **OmniVoice** (~0.6B), chuyên **tiếng Việt + tiếng Anh** và **voice cloning** từ reference ngắn.

Train ~1500 giờ audio Vi+En, ~500k steps. Inference qua package `omnivoice` (`OmniVoice.from_pretrained`), output 24 kHz. Có demo Spaces trên HF.

**Cùng kiểu:** [VieNeu-TTS](vieneu-tts.md) (VN on-device + UI), [CosyVoice](cosyvoice.md) / [MOSS-TTS](moss-tts.md) (multilingual GPU), [VoxCPM](voxcpm.md), [OmniVoice Studio](omnivoice-studio.md) (desktop studio — khác model OmniVoice base).

## Dùng khi nào?

| Nhu cầu | KhanhTTS |
|---------|----------|
| TTS / clone giọng Việt + Anh (OmniVoice stack) | ✅ |
| Reference audio ngắn → clone | ✅ `ref_audio` + `ref_text` |
| Studio desktop all-in-one | → [OmniVoice Studio](omnivoice-studio.md) / [Voicebox](voicebox.md) |
| VN on-device + WebUI / GGUF | → [VieNeu-TTS](vieneu-tts.md) |
| TTS gọn ONNX nhiều locale | → [Supertonic](supertonic.md) |

## Chạy thử

```bash
pip install omnivoice
```

```python
from omnivoice import OmniVoice
import soundfile as sf
import torch

model = OmniVoice.from_pretrained(
    "kjanh/KhanhTTS-OmniVoice",
    device_map="cuda:0",
    dtype=torch.float16,
)

audio = model.generate(
    text="Xin chào các bạn.",
    # ref_audio="refvoice.wav",
    # ref_text="transcript của mẫu giọng…",
)  # list[np.ndarray], 24 kHz

sf.write("out.wav", audio[0], 24000)
```

**Ethics:** nghiên cứu / R&D trước; không mạo danh, không clone giọng thiếu consent — công bố rõ nội dung AI (disclaimer upstream).

## So với tool khác

| | KhanhTTS | VieNeu-TTS | CosyVoice |
|--|----------|------------|-----------|
| Niche | OmniVoice FT Vi+En | VN on-device + UI/SDK | Multilingual LLM-TTS |
| Clone | ✅ ref ngắn | ✅ instant | ✅ zero-shot |
| Tags | `tts` `voice-clone` `cli` | `tts` `voice-clone` `api` `desktop` | `tts` `voice-clone` `api` `cli` |

## Dùng với Odoo / ai_core

- Narration / notify tiếng Việt self-host (GPU) cạnh VieNeu khi muốn pipeline OmniVoice.  
- Watermark bằng [AudioSeal](audioseal.md) nếu publish ngoài.  
- Chưa khuyến nghị production mặc định — đánh giá chất lượng + risk (disclaimer HF).

## Link

- HF: https://huggingface.co/kjanh/KhanhTTS-OmniVoice  
- Base OmniVoice: https://huggingface.co/k2-fsa/OmniVoice  
- Peers: [vieneu-tts.md](vieneu-tts.md) · [cosyvoice.md](cosyvoice.md) · [moss-tts.md](moss-tts.md) · [voxcpm.md](voxcpm.md) · [omnivoice-studio.md](omnivoice-studio.md) · [supertonic.md](supertonic.md)
