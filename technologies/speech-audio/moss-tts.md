# MOSS-TTS

> **Repo:** [OpenMOSS/MOSS-TTS](https://github.com/OpenMOSS/MOSS-TTS)  
> **Category:** Speech & Audio · TTS / sound generation family  
> **Tags:** `tts` · `voice-clone` · `self-host` · `api` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~3.8k · **License:** Apache-2.0  
> **Site:** [mosi.cn/models/moss-tts](https://mosi.cn/models/moss-tts) · MOSI.AI / OpenMOSS

## Đây là gì?

**MOSS-TTS Family** là họ model **speech + sound generation**: long-form ổn định, multi-speaker dialogue, voice/character design, **environmental sound effects**, **real-time streaming TTS**. Variants: Local / Delay / Realtime / Nano (~100M, CPU streaming) · TTSD · VoiceGenerator · SoundEffect · tokenizer 48 kHz stereo. Inference: vLLM-Omni · SGLang-Omni (OpenAI `/v1/audio/speech`) · llama.cpp · mlx-audio.

**Cùng kiểu:** [CosyVoice](cosyvoice.md), [VibeVoice](vibevoice.md), [VoxCPM](voxcpm.md), [VieNeu-TTS](vieneu-tts.md), [Voicebox](voicebox.md).

## Dùng khi nào?

| Nhu cầu | MOSS-TTS |
|---------|----------|
| TTS clone + streaming đa variant | ✅ Local / Realtime / Nano |
| Sound effects / dialogue multi-speaker | ✅ SoundEffect · TTSD |
| Edge CPU nhẹ | ✅ Nano ~100M |
| TTS Việt tối ưu | → [VieNeu-TTS](vieneu-tts.md) |
| Studio desktop all-in-one | → [OmniVoice Studio](omnivoice-studio.md) / [Voicebox](voicebox.md) |

## Chạy thử

```bash
git clone https://github.com/OpenMOSS/MOSS-TTS.git
# Xem README: moss_tts_local / realtime / delay · vLLM-Omni / SGLang cookbooks
```

v1.5: language tags, stable clone, `[pause X.Ys]`, Local-Transformer **4B** + MOSS-Audio-Tokenizer-v2.

## So với tool khác

| | MOSS-TTS | CosyVoice | VibeVoice |
|--|----------|-----------|-----------|
| Shape | Family (TTS + SFX + realtime) | LLM-TTS full-stack | Multimodal voice |
| Nano / CPU | ✅ | ❌ | ❌ |
| Tags | `tts` `voice-clone` `api` | `tts` `voice-clone` `api` | `tts` `voice-clone` |

## Dùng với Odoo / ai_core

- Voice agent / IVR: Realtime hoặc Nano.  
- Demo narrate + SFX (SoundEffect).  
- Benchmark cạnh CosyVoice trước production.

## Link

- Repo: https://github.com/OpenMOSS/MOSS-TTS · Site: https://mosi.cn/models/moss-tts  
- Peers: [cosyvoice.md](cosyvoice.md) · [vibevoice.md](vibevoice.md) · [voxcpm.md](voxcpm.md) · [vieneu-tts.md](vieneu-tts.md)
