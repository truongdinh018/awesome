# FreeCut

> **Repo:** [walterlow/freecut](https://github.com/walterlow/freecut)  
> **Category:** Image & Video · Browser NLE (multi-track editor)  
> **Tags:** `video` `self-host` `stt` `tts`  
> **Ngôn ngữ:** TypeScript · React 19 · WebGPU/WebCodecs · **⭐** ~1.6k · **License:** MIT  
> **Site:** [freecut.net](https://freecut.net/) · Docs: [freecut.net/docs](https://freecut.net/docs)

## Tổng quan

**FreeCut** — trình chỉnh sửa video **chuyên nghiệp chạy hoàn toàn trên trình duyệt**: multi-track timeline, keyframe, effects WebGPU, preview real-time, export WebCodecs. **Không cài đặt, không upload** — project và media nằm local (File System Access API + OPFS). AI on-device: transcription (Parakeet / Whisper fallback), Kokoro TTS, MusicGen, scene detection, captioning.

Peer: [OpenMontage](openmontage.md) (agentic studio), [HyperFrames](hyperframes.md) (HTML→video), [pyVideoTrans](pyvideotrans.md) (dub/translate), [AudioBook KJ](audiobook-kj.md) (timeline + TTS).

## Để làm gì?

| Nhu cầu | FreeCut |
|---------|---------|
| NLE đa track trong browser, zero install | ✅ timeline · transitions · masks · keyframes |
| Media + project local, không cloud upload | ✅ workspace folder trên disk |
| Transcription / caption / TTS on-device | ✅ Parakeet · Kokoro · MusicGen |
| Agent/code → video tự động | → [OpenMontage](openmontage.md) · [HyperFrames](hyperframes.md) |
| Dịch/dub video hàng loạt | → [pyVideoTrans](pyvideotrans.md) |

## Highlight

```bash
git clone https://github.com/walterlow/freecut.git && cd freecut
npm install && npm run dev
# Chrome/Edge 113+ — mở http://localhost:5173
```

- Export MP4/WebM/MOV/MKV — H.264, H.265, VP9, AV1 (tùy browser encoder)  
- Effects WebGPU: blur, color, LUT, chroma key, 25 blend modes, VHS/CRT…  
- ProRes decode, proxy, filmstrip, waveforms, source monitor, compound clips  
- `npm run verify` — lint, types, tests, arch checks  

## So sánh catalog

| | FreeCut | OpenMontage | pyVideoTrans |
|--|---------|-------------|--------------|
| Niche | Browser NLE thủ công | Agentic video production | Dịch/dub/subtitle |
| Deploy | Browser local | Python + Remotion | Desktop/GUI |
| AI | On-device STT/TTS/music | Agent pipelines | ASR/TTS dubbing |
| Tags | `video` `self-host` `stt` `tts` | `video` `agent` `skill` | `video` `stt` `tts` |

## Use case Odoo / ai_core

- Chỉnh sửa demo/release video marketing ngay trên browser, không gửi file lên cloud.  
- Tạo caption/voiceover local cho training clip nội bộ.  
- Ghép với [faster-whisper](faster-whisper.md) / [VieNeu-TTS](vieneu-tts.md) khi cần pipeline VN ngoài FreeCut.

## Link

- Repo: https://github.com/walterlow/freecut  
- Site: https://freecut.net/  
- Peers: [openmontage.md](openmontage.md) · [hyperframes.md](hyperframes.md) · [pyvideotrans.md](pyvideotrans.md) · [audiobook-kj.md](audiobook-kj.md)
