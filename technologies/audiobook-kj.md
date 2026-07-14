# AudioBook KJ

> **Repo:** [kentjuno/AudioBookKJ-v2.1](https://github.com/kentjuno/AudioBookKJ-v2.1)  
> **Category:** Speech & Audio · Studio AI audiobook / video  
> **Tags:** `tts` · `voice-clone` · `desktop` · `self-host` · `video`  
> **Ngôn ngữ:** TypeScript (Vite/React) · Python backend · **⭐** ~51 · **License:** (chưa SPDX trên GitHub)  
> Snapshot **v2.1** — source-only; không gồm media/DB/voice refs đã generate

## Đây là gì?

**AudioBook KJ** là studio thử nghiệm **audiobook + video**: import/cleanup script → TTS local (Torch / Hugging Face / **OmniVoice**) → timeline mix (pydub / FFmpeg) → gắn visual assets → export.

Frontend React tách Audio/Video Studios; helper tùy chọn qua **Gemini CLI** + Chrome **FlowKit** extension. Windows one-click (`run.bat`); **không** phải app production hoàn chỉnh.

**Cùng kiểu:** [OmniVoice Studio](omnivoice-studio.md) (TTS engine), [VibeVoice](vibevoice.md) (long multi-speaker), [Open Notebook](open-notebook.md) (podcast), [AI-auto-generate-video](ai-auto-generate-video.md).

## Dùng khi nào?

| Nhu cầu | AudioBook KJ |
|---------|--------------|
| Pipeline audiobook local (script → audio → export) | ✅ studio UI |
| Clone / TTS qua OmniVoice | ✅ backend (voice refs private không ship) |
| Timeline narration + nhạc + SFX | ✅ pydub / FFmpeg |
| Ready-to-sell product | ❌ experimental snapshot |
| Chỉ engine TTS mỏng | → [VoxCPM](voxcpm.md) / [VibeVoice](vibevoice.md) |

## Chạy thử

```bat
run.bat
REM Git · Node 20.19+/22.12+ · Python 3.10/3.11 · FFmpeg
REM Optional: Gemini CLI · Chrome FlowKit · CUDA GPU
```

- Workflows: script cleanup · AI direction/storyboard · TTS · mix · visuals · export  
- RAM tối thiểu ~8 GB; khuyến nghị 16–32 GB + NVIDIA 6–8 GB VRAM  
- Repo cố ý **bỏ** generated media / venv / private voice — clone cần chỉnh local  

## So với tool khác

| | AudioBook KJ | OmniVoice | VibeVoice |
|--|--------------|-----------|-----------|
| Niche | Full audiobook/video studio | Local voice studio | Long multi-speaker TTS |
| Shape | React + Python app | Desktop app | Model + demos |
| Stars | ~51 | ~8k | ~50k |
| Tags | `tts` `video` `desktop` | `stt` `tts` `desktop` | `tts` `voice-clone` |

## Dùng với Odoo / ai_core

- Demo training / podcast nội bộ từ docs (ghép Open Notebook / HyperFrames).  
- Watermark audio bằng [AudioSeal](audioseal.md) trước khi publish.  
- Nghiên cứu UX timeline — không deploy production voice clone khi chưa review legal.

## Link

- Repo: https://github.com/kentjuno/AudioBookKJ-v2.1  
- Peers: [omnivoice-studio.md](omnivoice-studio.md) · [vibevoice.md](vibevoice.md) · [open-notebook.md](open-notebook.md) · [audioseal.md](audioseal.md) · [capcut-tts-api.md](capcut-tts-api.md) · [openmontage.md](openmontage.md)
