# VieNeu-TTS

> **Repo:** [pnnbao97/VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS)  
> **Category:** Speech & Audio · Vietnamese TTS + voice clone  
> **Tags:** `tts` · `voice-clone` · `self-host` · `api` · `desktop`  
> **Ngôn ngữ:** Python · **⭐** ~2.2k · **License:** Apache-2.0  
> Site: [vieneu.io](https://www.vieneu.io) · README VI: [README.vi.md](https://github.com/pnnbao97/VieNeu-TTS/blob/main/README.vi.md)

## Tổng quan

**VieNeu-TTS** — TTS **tiếng Việt on-device**: instant voice cloning (3–5s), bilingual En↔Vi (sea-g2p), podcast/conversation multi-speaker, inference **GPU (LMDeploy)** / **CPU (GGUF/ONNX)**, 24 kHz (v2) · **v3 Turbo** preview 48 kHz + built-in voices + emotion tags (`[cười]`, …). Web UI + Python SDK + Docker server. Train ~10k+ giờ data.

Peer: [VoxCPM](voxcpm.md), [OmniVoice Studio](omnivoice-studio.md), [VibeVoice](vibevoice.md), [CapCut TTS/STT API](capcut-tts-api.md) (cloud CapCut), [AudioBook KJ](audiobook-kj.md).

## Để làm gì?

| Nhu cầu | VieNeu-TTS |
|---------|------------|
| TTS / clone giọng Việt local | ✅ v2 · v3 Turbo preview |
| Code-switch En-Vi tự nhiên | ✅ sea-g2p |
| Podcast multi-speaker | ✅ Conversation mode |
| CapCut / cloud VN voices | → [capcut-tts-api.md](capcut-tts-api.md) |
| Long EN podcast multi-turn | → [VibeVoice](vibevoice.md) |

## Highlight

```bash
# uv + Web UI (xem README)
uv sync && …   # backbone VieNeu-TTS-v2 / v3-Turbo
# SDK
# vieneu = Vieneu(mode="v3turbo")
```

- HF: VieNeu-TTS · VieNeu-TTS-v2 · VieNeu-TTS-v3-Turbo  
- Server HQ + Docker · fine-tune folder trong repo  
- Offline production-oriented — không phụ thuộc CapCut/cloud TTS  

## So sánh catalog

| | VieNeu-TTS | VoxCPM | CapCut CLI |
|--|------------|--------|------------|
| Niche | VN/EN bilingual local TTS | General clone | CapCut cloud |
| Offline | ✅ | ✅ | ❌ |
| Tags | `tts` `voice-clone` `self-host` | `tts` `voice-clone` | `tts` `cli` `api` |

## Use case Odoo / ai_core

- Voice notify / IVR / training audio tiếng Việt self-host.  
- Ghép OpenMontage / AudioBook KJ khi cần narration VN.  
- Watermark output bằng [AudioSeal](audioseal.md) nếu publish ngoài.

## Link

- Repo: https://github.com/pnnbao97/VieNeu-TTS  
- Site: https://www.vieneu.io  
- Peers: [voxcpm.md](voxcpm.md) · [omnivoice-studio.md](omnivoice-studio.md) · [vibevoice.md](vibevoice.md) · [capcut-tts-api.md](capcut-tts-api.md) · [pyvideotrans.md](pyvideotrans.md) · [voicebox.md](voicebox.md)
