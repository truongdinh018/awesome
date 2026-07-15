# FreeCut

> **Repo:** [walterlow/freecut](https://github.com/walterlow/freecut)  
> **Category:** Image & Video · Browser NLE (multi-track editor)  
> **Tags:** `video` `self-host` `stt` `tts`  
> **Ngôn ngữ:** TypeScript · React 19 · WebGPU/WebCodecs · **⭐** ~1.6k · **License:** MIT  
> **Site:** [freecut.net](https://freecut.net/) · Docs: [freecut.net/docs](https://freecut.net/docs)

## Đây là gì?

**FreeCut** là trình chỉnh sửa video **chạy hoàn toàn trên trình duyệt** (*browser NLE*): timeline đa track, keyframe, hiệu ứng WebGPU, preview realtime, export WebCodecs. **Không cài app, không upload** — project và media nằm local (File System Access API + OPFS). AI on-device: transcription (Parakeet / Whisper fallback), Kokoro TTS, MusicGen, scene detection, captioning.

**Cùng kiểu:** [OpenMontage](openmontage.md) (agentic studio), [Recordly](recordly.md) (screen demo desktop), [Gyroflow](gyroflow.md) (gyro stabilize), [OpenToonz](opentoonz.md) (2D animation desktop), [HyperFrames](hyperframes.md) (HTML→video), [pyVideoTrans](pyvideotrans.md) (dub/translate), [AudioBook KJ](../speech-audio/audiobook-kj.md) (timeline + TTS).

## Dùng khi nào?

| Nhu cầu | FreeCut |
|---------|---------|
| NLE đa track trong browser, zero install | ✅ timeline · transitions · masks · keyframes |
| Media + project local, không cloud upload | ✅ workspace folder trên disk |
| Transcription / caption / TTS on-device | ✅ Parakeet · Kokoro · MusicGen |
| Agent/code → video tự động | → [OpenMontage](openmontage.md) · [HyperFrames](hyperframes.md) |
| Stabilize footage có IMU/gyro | → [Gyroflow](gyroflow.md) |
| Dịch/dub video hàng loạt | → [pyVideoTrans](pyvideotrans.md) |

## Chạy thử

```bash
git clone https://github.com/walterlow/freecut.git && cd freecut
npm install && npm run dev
# Chrome/Edge 113+ — mở http://localhost:5173
```

Export MP4/WebM/MOV/MKV — H.264, H.265, VP9, AV1 (tùy browser encoder). Effects WebGPU: blur, color, LUT, chroma key, 25 blend modes, VHS/CRT… ProRes decode, proxy, filmstrip, waveforms, source monitor, compound clips. `npm run verify` — lint, types, tests, arch checks.

## So với tool khác

| | FreeCut | OpenMontage | pyVideoTrans |
|--|---------|-------------|--------------|
| Niche | Browser NLE thủ công | Agentic video production | Dịch/dub/subtitle |
| Deploy | Browser local | Python + Remotion | Desktop/GUI |
| AI | On-device STT/TTS/music | Agent pipelines | ASR/TTS dubbing |
| Tags | `video` `self-host` `stt` `tts` | `video` `agent` `skill` | `video` `stt` `tts` |

## Dùng với Odoo / ai_core

- Chỉnh sửa demo/release video marketing ngay trên browser, không gửi file lên cloud.  
- Tạo caption/voiceover local cho training clip nội bộ.  
- Ghép với [faster-whisper](../speech-audio/faster-whisper.md) / [VieNeu-TTS](../speech-audio/vieneu-tts.md) khi cần pipeline VN ngoài FreeCut.

## Link

- Repo: https://github.com/walterlow/freecut  
- Site: https://freecut.net/  
- Peers: [openmontage.md](openmontage.md) · [recordly.md](recordly.md) · [opentoonz.md](opentoonz.md) · [hyperframes.md](hyperframes.md) · [pyvideotrans.md](pyvideotrans.md) · [audiobook-kj.md](../speech-audio/audiobook-kj.md)
