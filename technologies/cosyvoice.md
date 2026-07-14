# CosyVoice

> **Repo:** [FunAudioLLM/CosyVoice](https://github.com/FunAudioLLM/CosyVoice)  
> **Category:** Speech & Audio · Multilingual LLM-TTS  
> **Tags:** `tts` · `voice-clone` · `self-host` · `api` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~22.2k · **License:** Apache-2.0  
> **Models:** CosyVoice 1.0 / 2.0 · **Fun-CosyVoice 3.0** (HF + ModelScope)  
> Paper / demos: xem README upstream · Eval: CV3-Eval

## Đây là gì?

**CosyVoice** (FunAudioLLM / Alibaba Tongyi Fun-Audio) là TTS full-stack dựa **LLM**: inference, training, deploy. Phiên bản mới **Fun-CosyVoice 3.0** tối ưu content consistency, speaker similarity, prosody; zero-shot clone đa ngôn ngữ “in the wild”.

- **9 ngôn ngữ** (ZH/EN/JA/KO/DE/ES/FR/IT/RU) + **18+** giọng địa phương/accents Trung  
- Zero-shot / cross-lingual voice clone  
- Instruct (ngôn ngữ, dialect, emotion, tốc độ, volume)  
- Bi-streaming (text-in + audio-out), latency ~**150ms**  
- Pronunciation inpainting (Pinyin / CMU phonemes) + text normalization không frontend truyền thống  
- Runtime: FastAPI, Gradio WebUI, Docker, vLLM / Triton (CosyVoice2)

**Cùng kiểu:** [VoxCPM](voxcpm.md), [VibeVoice](vibevoice.md), [VieNeu-TTS](vieneu-tts.md), [OmniVoice Studio](omnivoice-studio.md), [FunASR](funasr.md) (STT cùng hệ FunAudio).

## Dùng khi nào?

| Nhu cầu | CosyVoice |
|---------|-----------|
| TTS self-host đa ngôn ngữ + clone | ✅ 3.0 SOTA open eval |
| Streaming / latency thấp | ✅ bi-streaming ~150ms |
| Controllable instruct (emotion/dialect) | ✅ |
| TTS Việt on-device tối ưu | → [VieNeu-TTS](vieneu-tts.md) |
| Tokenizer-free creative voice design | → [VoxCPM](voxcpm.md) |
| STT cùng stack Alibaba Fun | → [FunASR](funasr.md) |

## Chạy thử

```bash
# Clone + deps — xem README (conda/uv + ModelScope/HF weights)
git clone --recursive https://github.com/FunAudioLLM/CosyVoice.git
# WebUI
python webui.py
# FastAPI server: runtime/
# vLLM path: vllm_example.py (CosyVoice2)
```

- Weights: Fun-CosyVoice3-0.5B (+ RL variant) trên Hugging Face / ModelScope  
- Training scripts + eval set CosyVoice 3.0  
- FAQ.md cho troubleshooting GPU/deps  

## So với tool khác

| | CosyVoice | VoxCPM | VieNeu-TTS |
|--|-----------|--------|------------|
| Focus | Multilingual LLM-TTS + dialect ZH | Tokenizer-free / voice design | Vietnamese on-device |
| Deploy | Docker · FastAPI · vLLM | Research / self-host | Web UI · GGUF/ONNX |
| Clone | Zero-shot + cross-lingual | Few-shot | Instant 3–5s (Vi) |
| Tags | `tts` `voice-clone` `self-host` `api` `cli` | `tts` `voice-clone` | `tts` `voice-clone` `api` `desktop` |

## Dùng với Odoo / ai_core

- Voiceover agent / ntfy voice notify đa ngôn ngữ (sau LLM text).  
- Clone brand voice cho demo holding / e-learning (GPU box).  
- Song song FunASR (STT) + CosyVoice (TTS) trên cùng GPU UAT nếu tài nguyên cho phép.

## Link

- Repo: https://github.com/FunAudioLLM/CosyVoice  
- Peers: [voxcpm.md](voxcpm.md) · [vibevoice.md](vibevoice.md) · [vieneu-tts.md](vieneu-tts.md) · [funasr.md](funasr.md) · [omnivoice-studio.md](omnivoice-studio.md)
