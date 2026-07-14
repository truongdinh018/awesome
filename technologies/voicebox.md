# Voicebox

> **Repo:** [jamiepine/voicebox](https://github.com/jamiepine/voicebox)  
> **Category:** Speech & Audio · Local AI voice studio  
> **Tags:** `stt` · `tts` · `voice-clone` · `desktop` · `self-host` · `mcp` · `api`  
> **Ngôn ngữ:** TypeScript · Tauri (Rust) · Python backend · **⭐** ~41.1k · **License:** MIT  
> Site: [voicebox.sh](https://voicebox.sh) · *Không nhầm với Meta Voicebox research*

## Tổng quan

**Voicebox** — studio giọng **local-first** (OSS thay ElevenLabs + WisprFlow): clone voice, TTS 7 engines / 23 ngôn ngữ, dictation hotkey (Whisper STT), Stories multi-track, REST + **MCP** (`voicebox.speak` cho Claude/Cursor). Chạy trên máy (macOS MLX/Metal, Win CUDA, Linux, ROCm, Docker); privacy — data không lên cloud.

Peer: [OmniVoice Studio](omnivoice-studio.md), [VieNeu-TTS](vieneu-tts.md), [VoxCPM](voxcpm.md), [VibeVoice](vibevoice.md), [XiaoZhi](xiaozhi-esp32.md), [pyVideoTrans](pyvideotrans.md).

## Để làm gì?

| Nhu cầu | Voicebox |
|---------|----------|
| Clone + dictate + speak local một app | ✅ |
| Agent MCP phát giọng đã clone | ✅ `voicebox.speak` |
| TTS tiếng Việt chuyên sâu | → [VieNeu-TTS](vieneu-tts.md) |
| Dịch/dub video end-to-end | → [pyVideoTrans](pyvideotrans.md) |
| Cloud ElevenLabs SaaS | ❌ local-first |

## Highlight

```bash
# Desktop: voicebox.sh/download (macOS DMG · Windows MSI)
docker compose up
# MCP / REST — xem docs trên voicebox.sh
```

- Engines: Qwen3-TTS · LuxTTS · Chatterbox · HumeAI TADA · Kokoro…  
- Paralinguistic tags `[laugh]` / `[sigh]` · unlimited chunk+crossfade  
- RESPONSIBLE_USE.md — deepfake / consent  

## So sánh catalog

| | Voicebox | OmniVoice | VieNeu-TTS |
|--|----------|-----------|------------|
| Niche | Full voice I/O studio + MCP | Local ElevenLabs-like | VN/EN TTS clone |
| Shape | Tauri desktop | Desktop | SDK + Web UI |
| Tags | `stt` `tts` `mcp` `desktop` | `stt` `tts` `desktop` | `tts` `voice-clone` `api` |

## Use case Odoo / ai_core

- Dictation / voice note → text trước khi agent Odoo.  
- MCP speak thông báo pipeline từ Cursor.  
- Không dùng clone giọng người khác khi chưa có consent.

## Link

- Repo: https://github.com/jamiepine/voicebox  
- Site / docs: https://voicebox.sh  
- Peers: [omnivoice-studio.md](omnivoice-studio.md) · [vieneu-tts.md](vieneu-tts.md) · [voxcpm.md](voxcpm.md) · [pyvideotrans.md](pyvideotrans.md)
