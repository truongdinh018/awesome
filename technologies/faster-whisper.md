# faster-whisper

> **Repo:** [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper)  
> **Category:** Speech & Audio  
> **Tags:** `stt` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~24k

## Tổng quan

**faster-whisper** là implementation **Whisper** (OpenAI) dùng **CTranslate2** — transcription speech-to-text **nhanh hơn** bản gốc, ít RAM hơn, hỗ trợ GPU và quant (int8, float16).

## Vấn đề giải quyết

| Whisper gốc | faster-whisper |
|-------------|----------------|
| Chậm hơn trên CPU | Tối ưu CTranslate2 |
| VRAM cao | Quant 8-bit / 16-bit |
| Khó deploy edge | Chạy tốt local / server |

## Model size

| Model | Tham số | Use case |
|-------|---------|----------|
| tiny | ~39M | Real-time, độ chính xác thấp |
| base | ~74M | Cân bằng nhẹ |
| small | ~244M | Desktop thường dùng |
| medium | ~769M | Chất lượng tốt |
| large-v3 | ~1.5B | Production STT |

## Pipeline cơ bản

```python
from faster_whisper import WhisperModel

model = WhisperModel("small", device="cuda", compute_type="float16")
segments, info = model.transcribe("audio.mp3", language="vi")
for segment in segments:
    print(f"[{segment.start:.2f}s] {segment.text}")
```

## Use case

- **Voice note → text** trong Odoo (helpdesk, CRM log)
- **Meeting transcription** nội bộ
- **Input cho LLM agent** — user nói, agent xử lý text
- **Subtitle** video marketing (kết hợp HyperFrames)

## So sánh

| | faster-whisper | OpenAI Whisper API | Vox / cloud STT |
|--|----------------|-------------------|-----------------|
| Chi phí | Free (self-host) | Pay per minute | Pay per minute |
| Privacy | On-prem | Cloud | Cloud |
| Tiếng Việt | Tốt (large-v3) | Tốt | Tùy provider |

## Liên quan ai_core

- Provider pattern: có thể wrap STT như một **tool MCP** hoặc preprocessing trước khi gửi `ai.chat`
- Kết hợp `OmniVoice-Studio` / `VoxCPM` cho pipeline voice hai chiều

## Link

- Repo: https://github.com/SYSTRAN/faster-whisper
- Whisper paper: https://arxiv.org/abs/2212.04356
- Industrial ASR toolkit peer: [funasr.md](funasr.md)
- CapCut unofficial CLI (cloud STT/TTS): [capcut-tts-api.md](capcut-tts-api.md)
- Video translate / dub suite: [pyvideotrans.md](pyvideotrans.md)
