# sherpa-onnx

> **Repo:** [k2-fsa/sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx)  
> **Category:** Speech & Audio · On-device ASR/TTS (Kaldi + ONNX Runtime)  
> **Tags:** `stt` · `tts` · `edge` · `self-host` · `cli` · `api`  
> **Ngôn ngữ:** C++ · bindings nhiều ngôn ngữ · **⭐** ~13.6k · **License:** Apache-2.0  
> Docs: [k2-fsa.github.io/sherpa/onnx](https://k2-fsa.github.io/sherpa/onnx/index.html)

## Đây là gì?

**sherpa-onnx** là speech stack **offline** (next-gen Kaldi + ONNX Runtime): **STT**, **TTS**, speaker diarization, enhancement, source separation, **VAD**.

Chạy embedded / Android / iOS / HarmonyOS / Pi / RISC-V / NPU (RK, Axera, Ascend) / server x86. WebSocket server/client; ~12 ngôn ngữ lập trình. Không cần Internet lúc inference.

**Cùng kiểu:** [faster-whisper](faster-whisper.md), [FunASR](funasr.md), [XiaoZhi ESP32](xiaozhi-esp32.md), [VieNeu-TTS](vieneu-tts.md), [Voicebox](voicebox.md), [LocalAI](localai.md)

## Dùng khi nào?

| Nhu cầu | sherpa-onnx |
|---------|-------------|
| ASR/TTS offline trên edge / mobile | ✅ |
| Streaming ASR + VAD + diarization | ✅ |
| Python STT server nhanh (GPU) | → [faster-whisper](faster-whisper.md) / [FunASR](funasr.md) |
| Voice studio desktop + MCP | → [Voicebox](voicebox.md) |

## Chạy thử

```bash
# Docs: install + download models (sense-voice, zipformer, vits, …)
# WebSocket server/client for streaming ASR/TTS
```

Models ONNX sẵn · NPU backends. Xem docs cho install và model download.

## So với tool khác

| | sherpa-onnx | FunASR | XiaoZhi |
|--|-------------|--------|---------|
| Niche | Cross-platform ONNX speech kit | Full ASR toolkit | ESP32 voice product |
| Offline edge | ✅ mạnh | ✅ | ✅ device |
| Tags | `stt` `tts` `edge` | `stt` `cli` `api` | `stt` `tts` `edge` `iot` |

## Dùng với Odoo / ai_core

- Edge / kiosk STT offline trước khi sync Odoo.  
- TTS lightweight thay cloud cho notify local.  
- Ghép XiaoZhi-style device nếu cần hardware voice.

## Link

- Repo: https://github.com/k2-fsa/sherpa-onnx  
- Docs: https://k2-fsa.github.io/sherpa/onnx/index.html  
- Peers: [faster-whisper.md](faster-whisper.md) · [funasr.md](funasr.md) · [xiaozhi-esp32.md](xiaozhi-esp32.md) · [vieneu-tts.md](vieneu-tts.md)
