# pyVideoTrans

> **Repo:** [jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans)  
> **Category:** Image & Video · Video translation / dubbing suite  
> **Tags:** `video` · `stt` · `tts` · `voice-clone` · `desktop` · `self-host` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~18.3k · **License:** GPL-3.0  
> Docs: [pyvideotrans.com](https://pyvideotrans.com) · BBS: [bbs.pyvideotrans.com](https://bbs.pyvideotrans.com)

## Tổng quan

**pyVideoTrans** — tool OSS dịch video end-to-end: **ASR → dịch phụ đề → TTS/dubbing multi-role → ghép A/V**. GUI (PySide6 / Win `.exe`), CLI, WebUI, Docker. Local (faster-whisper, F5-TTS, CosyVoice, GPT-SoVITS, Ollama…) hoặc API online (Edge-TTS, OpenAI, Azure, DeepSeek…). Có diarization / clone giọng và pause/proofread từng bước.

Peer: [faster-whisper](faster-whisper.md), [VieNeu-TTS](vieneu-tts.md), [OmniVoice](omnivoice-studio.md), [VideoCaptioner harness](cli-anything/videocaptioner.md), [OpenMontage](openmontage.md), [CapCut TTS/STT API](capcut-tts-api.md).

## Để làm gì?

| Nhu cầu | pyVideoTrans |
|---------|--------------|
| Dịch video + nhúng dub & soft sub | ✅ one-click / CLI |
| Audio → SRT (+ speaker roles) | ✅ `stt` task |
| Clone / multi-role dubbing | ✅ F5-TTS · CosyVoice · … |
| Chỉ generate video từ prompt | → [OpenMontage](openmontage.md) |
| Chỉ STT local mỏng | → [faster-whisper](faster-whisper.md) |

## Highlight

```bash
git clone https://github.com/jianchang512/pyvideotrans.git && cd pyvideotrans
uv sync
uv run sp.py                          # GUI
uv run cli.py --task vtv --name "./video.mp4" \
  --source_language_code zh-cn --target_language_code en \
  --voice_role "en-US-GuyNeural"
uv sync --extra webui && uv run webui.py
```

- Win prebuilt `sp.exe` · CUDA 12.8 / cuDNN optional  
- Utilities: vocal separate · merge · A/V align  
- GPL-3.0 + disclaimer ToS/copyright khi gọi API / content  

## So sánh catalog

| | pyVideoTrans | OpenMontage | VideoCaptioner |
|--|--------------|-------------|----------------|
| Niche | Localize existing video | Agentic produce video | Caption harness |
| Shape | Desktop + CLI + WebUI | Pipelines + skills | CLI-Anything |
| Tags | `video` `stt` `tts` | `video` `agent` `skill` | `harness` `stt` `video` |

## Use case Odoo / ai_core

- Localize training / release video EN↔VI (VieNeu TTS / Edge).  
- Batch subtitle export trước khi attach Odoo.  
- Không thay thế pipeline generate — ghép sau OpenMontage nếu cần dịch.

## Link

- Repo: https://github.com/jianchang512/pyvideotrans  
- Site: https://pyvideotrans.com  
- Peers: [faster-whisper.md](faster-whisper.md) · [vieneu-tts.md](vieneu-tts.md) · [openmontage.md](openmontage.md) · [cli-anything/videocaptioner.md](cli-anything/videocaptioner.md) · [voicebox.md](voicebox.md)
