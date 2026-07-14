# LuxTTS

> **Repo:** [ysharma3501/LuxTTS](https://github.com/ysharma3501/LuxTTS)  
> **Category:** Speech & Audio · Fast TTS voice cloning  
> **Tags:** `tts` · `voice-clone` · `self-host` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~4.8k · **License:** Apache-2.0  
> Model: [YatharthS/LuxTTS](https://huggingface.co/YatharthS/LuxTTS) · Space / Colab trên README

## Đây là gì?

**LuxTTS** — TTS **voice clone** nhẹ dựa **ZipVoice** (distill ~4 steps + sampling cải tiến), vocoder **48 kHz** (không 24 kHz mặc định ZipVoice). Claim ~**150× realtime** trên 1 GPU, nhanh hơn realtime trên CPU; fit **&lt;1 GB VRAM**. Prompt audio ≥ ~3s.

**Không** full-stack studio (UI/MCP) — engine + Python API; cộng đồng có Gradio / ComfyUI / ONNX.

**Cùng kiểu:** [VoxCPM](voxcpm.md), [CosyVoice](cosyvoice.md), [MOSS-TTS](moss-tts.md), [Supertonic](supertonic.md) (edge), [VibeVoice](vibevoice.md).

## Dùng khi nào?

| Nhu cầu | LuxTTS |
|---------|--------|
| Zero-shot clone + tốc độ / VRAM thấp | ✅ primary |
| 48 kHz clear speech | ✅ |
| Multilingual LLM-TTS + instruct/stream | → [CosyVoice](cosyvoice.md) |
| TTS Việt on-device | → [VieNeu-TTS](vieneu-tts.md) |
| Studio STT+TTS+UI | → [Voicebox](voicebox.md) / [OmniVoice Studio](omnivoice-studio.md) |

## Chạy thử

```bash
git clone https://github.com/ysharma3501/LuxTTS.git
cd LuxTTS && pip install -r requirements.txt
```

```python
from zipvoice.luxvoice import LuxTTS
import soundfile as sf

lux = LuxTTS('YatharthS/LuxTTS', device='cuda')  # hoặc cpu / mps
prompt = lux.encode_prompt('audio_file.wav', rms=0.01)
wav = lux.generate_speech("Hey, what's up?", prompt, num_steps=4)
sf.write('output.wav', wav.numpy().squeeze(), 48000)
```

Tips: `return_smooth=True` nếu metallic; `t_shift` trade-off quality/WER; tối thiểu ~3s reference.

## So với tool khác

| | LuxTTS | CosyVoice | Supertonic |
|--|--------|-----------|------------|
| Focus | ZipVoice distill, 48kHz, &lt;1GB VRAM | Multilingual LLM-TTS stack | On-device Swift/edge |
| Speed claim | ~150× RT (GPU) | streaming ~150ms | edge realtime |
| Tags | `tts` `voice-clone` `cli` | `tts` `api` `cli` | `tts` `edge` `api` |

## Dùng với Odoo / ai_core

- TTS nội bộ UAT khi cần clone nhanh ít VRAM (báo cáo đọc).  
- So A/B với CosyVoice/VieNeu trước production; watermark [AudioSeal](audioseal.md) nếu cần provenance.

## Link

- Repo: https://github.com/ysharma3501/LuxTTS · HF: https://huggingface.co/YatharthS/LuxTTS  
- Peers: [voxcpm.md](voxcpm.md) · [cosyvoice.md](cosyvoice.md) · [moss-tts.md](moss-tts.md) · [supertonic.md](supertonic.md) · [vibevoice.md](vibevoice.md) · [vieneu-tts.md](vieneu-tts.md)
