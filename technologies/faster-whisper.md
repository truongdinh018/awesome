# faster-whisper

> **Repo:** [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper)  
> **Category:** Speech & Audio · STT nhanh với CTranslate2  
> **Tags:** `stt` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~24k

## Đây là gì?

**faster-whisper** là implementation **Whisper** (OpenAI) dùng **CTranslate2** — transcription speech-to-text (*STT*) **nhanh hơn** bản gốc, ít RAM hơn, hỗ trợ GPU và quant (int8, float16).

Giải quyết: Whisper gốc chậm trên CPU, VRAM cao, khó deploy edge → faster-whisper tối ưu CTranslate2, quant 8-bit/16-bit, chạy tốt local / server.

**Cùng kiểu:** [FunASR](funasr.md) (ASR toolkit industrial), [CapCut TTS/STT API](capcut-tts-api.md) (cloud STT unofficial), [sherpa-onnx.md](sherpa-onnx.md) (edge ASR/TTS kit).

## Dùng khi nào?

| Nhu cầu | faster-whisper |
|---------|----------------|
| Voice note → text (helpdesk, CRM log) | ✅ |
| Meeting transcription nội bộ | ✅ |
| Input cho LLM agent — user nói, agent xử lý text | ✅ |
| Subtitle video marketing (kết hợp HyperFrames) | ✅ |
| STT cloud trả phí theo phút | → OpenAI Whisper API |
| ASR toolkit đa model / industrial | → [FunASR](funasr.md) |

## Chạy thử

**Model size:**

| Model | Tham số | Use case |
|-------|---------|----------|
| tiny | ~39M | Real-time, độ chính xác thấp |
| base | ~74M | Cân bằng nhẹ |
| small | ~244M | Desktop thường dùng |
| medium | ~769M | Chất lượng tốt |
| large-v3 | ~1.5B | Production STT |

```python
from faster_whisper import WhisperModel

model = WhisperModel("small", device="cuda", compute_type="float16")
segments, info = model.transcribe("audio.mp3", language="vi")
for segment in segments:
    print(f"[{segment.start:.2f}s] {segment.text}")
```

## So với tool khác

| | faster-whisper | OpenAI Whisper API | Vox / cloud STT |
|--|----------------|-------------------|-----------------|
| Chi phí | Free (self-host) | Pay per minute | Pay per minute |
| Privacy | On-prem | Cloud | Cloud |
| Tiếng Việt | Tốt (large-v3) | Tốt | Tùy provider |

## Dùng với Odoo / ai_core

- Provider pattern: wrap STT như một **tool MCP** hoặc preprocessing trước khi gửi `ai.chat`.  
- Voice note → text trong Odoo (helpdesk, CRM log).  
- Kết hợp `OmniVoice-Studio` / `VoxCPM` cho pipeline voice hai chiều.

## Link

- Repo: https://github.com/SYSTRAN/faster-whisper  
- Whisper paper: https://arxiv.org/abs/2212.04356  
- Peers: [funasr.md](funasr.md) · [capcut-tts-api.md](capcut-tts-api.md) · [pyvideotrans.md](pyvideotrans.md) · [sherpa-onnx.md](sherpa-onnx.md)
