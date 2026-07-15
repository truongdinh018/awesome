# Supertonic

> **Repo:** [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic)  
> **Category:** Speech & Audio · TTS chạy trên máy (ONNX), nhiều ngôn ngữ  
> **Tags:** `tts` · `voice-clone` · `self-host` · `cli` · `api` · `edge`  
> **Ngôn ngữ:** ONNX Runtime · Python / Node / WebGPU / Swift / Flutter / … · **⭐** ~13.1k · **License:** MIT  
> Demo: [HF Space](https://huggingface.co/spaces/Supertone/supertonic-3) · Models: [Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3) · PyPI: `supertonic`

## Đây là gì?

**Supertonic** (Supertone) là công cụ **đọc chữ thành tiếng** (*TTS*) chạy **trên máy bạn** (*on-device*), không cần cloud.

Hỗ trợ **31 ngôn ngữ** (có **`vi`**). Model mở ~**99M** tham số, chạy qua **ONNX** (CPU, WebGPU, mobile, Raspberry Pi). Xuất WAV **44.1 kHz**; có thẻ biểu cảm (`<laugh>`, `<breath>`…); Voice Builder / giọng preset. Có SDK nhiều runtime. Python SDK có **`supertonic serve`** — endpoint `/v1/tts` và kiểu OpenAI `/v1/audio/speech`.

**Cùng kiểu:** [VieNeu-TTS](vieneu-tts.md) (Việt chuyên sâu + clone), [CosyVoice](cosyvoice.md) / [MOSS-TTS](moss-tts.md) (TTS GPU lớn hơn), [sherpa-onnx](sherpa-onnx.md) (edge STT+TTS), [VoxCPM](voxcpm.md), [XiaoZhi ESP32](xiaozhi-esp32.md) (IoT).

## Dùng khi nào?

| Nhu cầu | Supertonic |
|---------|------------|
| TTS local nhanh, nhiều ngôn ngữ, ít RAM | ✅ lựa chọn chính |
| HTTP local kiểu OpenAI speech | ✅ `supertonic serve` |
| Browser WebGPU / Flutter / iOS | ✅ có ví dụ trong repo |
| TTS Việt dài / clone studio | → [VieNeu-TTS](vieneu-tts.md) |
| STT + TTS edge chung một runtime | → [sherpa-onnx](sherpa-onnx.md) |

## Chạy thử

```bash
pip install supertonic
# hoặc: pip install 'supertonic[serve]' && supertonic serve --host 127.0.0.1 --port 7788
```

```python
from supertonic import TTS
tts = TTS(auto_download=True)
style = tts.get_voice_style(voice_name="M1")
wav, duration = tts.synthesize(text="Xin chào.", lang="vi", voice_style=style)
tts.save_audio(wav, "out.wav")
# lang="na" khi không chắc ngôn ngữ
```

## So với tool khác

| | Supertonic | VieNeu-TTS | CosyVoice |
|--|------------|------------|-----------|
| Vai trò | TTS ONNX gọn, edge | TTS Việt + clone UI | TTS đa ngôn ngữ nặng hơn |
| Kích thước | ~99M, không bắt buộc GPU | GPU/CPU GGUF | Stack nặng hơn |
| Tags | `tts` `edge` `api` | `tts` `voice-clone` | `tts` `api` `cli` |

## Dùng với Odoo / ai_core

- Gateway TTS nhẹ (thông báo / đọc báo cáo) qua endpoint kiểu OpenAI speech.  
- Cần giọng Việt dài / clone → ưu tiên VieNeu; cần **nhiều locale + footprint nhỏ** → Supertonic.  
- Không thay studio all-in-one kiểu Voicebox.

## Link

- Repo: https://github.com/supertone-inc/supertonic  
- Peers: [vieneu-tts.md](vieneu-tts.md) · [sherpa-onnx.md](sherpa-onnx.md) · [cosyvoice.md](cosyvoice.md) · [moss-tts.md](moss-tts.md) · [voxcpm.md](voxcpm.md) · [xiaozhi-esp32.md](xiaozhi-esp32.md)
