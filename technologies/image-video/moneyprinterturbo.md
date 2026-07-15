# MoneyPrinterTurbo

> **Repo:** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)  
> **Category:** Image & Video · One-click AI short video  
> **Tags:** `video` · `tts` · `cli` · `self-host` · `api` · `skill`  
> **Ngôn ngữ:** Python · MoviePy · **⭐** ~97.4k · **License:** MIT  
> LLM script → stock/material → TTS → subtitle → short video (TikTok-style)

## Đây là gì?

**MoneyPrinterTurbo** là pipeline **một click short video**: LLM viết kịch bản, lấy素材, TTS (Edge/Azure/ElevenLabs/Gemini/Chatterbox…), phụ đề (Edge timestamps hoặc Whisper), ghép HD. Dùng qua **WebUI · API · CLI · AI Agent Skill**. Docker release sẵn (`ghcr.io/harry0703/moneyprinterturbo`).

**Cùng kiểu:** [Toonflow](toonflow.md) (novel→short drama canvas), [AI-auto-generate-video](ai-auto-generate-video.md) / [HyperFrames](hyperframes.md) / [OpenMontage](openmontage.md) (compose khác shape), [pyVideoTrans](pyvideotrans.md) (dub video có sẵn), [Voice-Pro](../speech-audio/voice-pro.md) (voice studio).

## Dùng khi nào?

| Nhu cầu | MoneyPrinterTurbo |
|---------|-------------------|
| Topic → short video + sub + TTS | ✅ |
| WebUI / REST / CLI / agent skill | ✅ |
| HTML→MP4 cinematic | → [HyperFrames](hyperframes.md) |
| Dub/translate video có sẵn | → [pyVideoTrans](pyvideotrans.md) |

## Chạy thử

```bash
# Docker (recommended)
cp config.example.toml config.toml
docker compose -f docker-compose.release.yml up

# hoặc: uv / pip + WebUI + API
uv run python cli.py --video-subject "…"
```

Tôn trọng bản quyền stock/music; API keys LLM/TTS trong config.

## So với tool khác

| | MoneyPrinterTurbo | HyperFrames | AI-auto-generate-video |
|--|-------------------|-------------|------------------------|
| Shape | Short-form LLM→edit pipeline | HTML→MP4 | Skill/agent video gen |
| WebUI+API | ✅ | CLI-first | skill |
| Tags | `video` `tts` `api` | `video` `cli` `agent` | `video` `skill` `tts` |

## Dùng với Odoo / ai_core

- Demo marketing / training clip từ topic (human approve trước đăng).  
- Skill agent nội bộ gọi CLI/API.  
- Không auto-spam social không moderation.

## Link

- Repo: https://github.com/harry0703/MoneyPrinterTurbo  
- Peers: [ai-auto-generate-video.md](ai-auto-generate-video.md) · [hyperframes.md](hyperframes.md) · [openmontage.md](openmontage.md) · [pyvideotrans.md](pyvideotrans.md) · [voice-pro.md](../speech-audio/voice-pro.md)
