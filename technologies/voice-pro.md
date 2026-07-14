# Voice-Pro

> **Repo:** [abus-aikorea/voice-pro](https://github.com/abus-aikorea/voice-pro)  
> **Category:** Speech & Audio · Gradio voice studio (STT/TTS/clone)  
> **Tags:** `stt` · `tts` · `voice-clone` · `self-host` · `desktop` · `video`  
> **Ngôn ngữ:** Python · Gradio · **⭐** ~11.2k · **License:** GPL-3.0  
> TTS: Edge-TTS · kokoro · F5/E2 · CosyVoice · STT: faster-whisper · + yt-dlp · Demucs

## Đây là gì?

**Voice-Pro** là Gradio WebUI all-in-one cho creator: download YouTube, tách vocal (Demucs), STT (faster-whisper…), dịch đa ngữ, TTS + **zero-shot clone** (F5-TTS, E2-TTS, CosyVoice / Fun-CosyVoice3).

Alternative ElevenLabs self-host — Win/Mac/Linux. Dev chính đang pause (WeConnect); code OSS free. WhisperX removed (Gradio 6 pin) → fallback faster-whisper.

**Cùng kiểu:** [OmniVoice Studio](omnivoice-studio.md) / [Voicebox](voicebox.md) (studio khác UX), [pyVideoTrans](pyvideotrans.md) (dub video), [CosyVoice](cosyvoice.md) / [yt-dlp](yt-dlp.md) (engine lẻ).

## Dùng khi nào?

| Nhu cầu | Voice-Pro |
|---------|-----------|
| WebUI clone + TTS + STT + translate | ✅ |
| Karaoke / podcast / subtitles pipeline | ✅ |
| Chỉ TTS API embed app | → [CosyVoice](cosyvoice.md) / [MOSS-TTS](moss-tts.md) |
| Dub video desktop CN-centric | → [pyVideoTrans](pyvideotrans.md) |

## Chạy thử

```bash
# Xem README: Windows/macOS/Linux install · Python 3.12 · Torch / Gradio 6
# First CosyVoice download có thể lớn (~9GB CosyVoice2)
```

## So với tool khác

| | Voice-Pro | OmniVoice | pyVideoTrans |
|--|-----------|-----------|--------------|
| Shape | Gradio WebUI multimedia | Desktop ElevenLabs-alt | Video dub desktop |
| yt-dlp + Demucs | ✅ | ❌ | partial |
| Tags | `stt` `tts` `voice-clone` `video` | `stt` `tts` `desktop` | `video` `stt` `tts` |

## Dùng với Odoo / ai_core

- Nội bộ tạo voice-over / phụ đề demo (GPL-3.0).  
- Tôn trọng ToS YouTube khi download.  
- Production agent TTS → gọi CosyVoice/FunASR service thay full UI.

## Link

- Repo: https://github.com/abus-aikorea/voice-pro  
- Peers: [omnivoice-studio.md](omnivoice-studio.md) · [voicebox.md](voicebox.md) · [cosyvoice.md](cosyvoice.md) · [pyvideotrans.md](pyvideotrans.md) · [yt-dlp.md](yt-dlp.md) · [faster-whisper.md](faster-whisper.md)
