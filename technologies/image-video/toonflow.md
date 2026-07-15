# Toonflow

> **Repo:** [HBAI-Ltd/Toonflow-app](https://github.com/HBAI-Ltd/Toonflow-app)  
> **Category:** Image & Video · AI short-drama / novel→anime studio  
> **Tags:** `video` · `image-gen` · `desktop` · `self-host` · `agent` · `skill`  
> **Ngôn ngữ:** TypeScript · Electron · Vue3 · Node · Docker · **⭐** ~11.5k  
> **License:** Apache-2.0 (+ supplemental commercial terms) · Site: [toonflow.net](https://toonflow.net)

## Đây là gì?

**Toonflow** là desktop **all-in-one short drama factory**: tiểu thuyết/kịch bản → ScriptAgent (adaptation) → ProductionAgent (storyboard · character · video nodes) trên **infinite canvas**.

Ba lớp agent (decision / execution / supervision), memory ONNX local, skill files Markdown cho prompt, provider TypeScript hot-plug trong Settings. Deploy: release Electron (Win/Mac/Linux) hoặc Docker / yarn.

**Cùng kiểu:** [MoneyPrinterTurbo](moneyprinterturbo.md) (TikTok-style short, không canvas drama), [OpenToonz](opentoonz.md) (2D animation cổ điển — không AI), [OpenMontage](openmontage.md) / [HyperFrames](hyperframes.md) (compose khác shape), [ComfyUI](comfyui.md) (node image — Toonflow thường gọi model/Comfy bên ngoài).

## Dùng khi nào?

| Nhu cầu | Toonflow |
|---------|----------|
| Novel → short drama (script · board · video) | ✅ |
| Infinite canvas + Script/Production agents | ✅ |
| Desktop Electron / Docker self-host | ✅ |
| Topic → stock+TTS short (không novel adapt) | → [MoneyPrinterTurbo](moneyprinterturbo.md) |
| HTML→MP4 / NLE browser | → [HyperFrames](hyperframes.md) / [FreeCut](freecut.md) |

## Chạy thử

```bash
# Release: tải installer Win / macOS / Linux từ GitHub Releases
# Docker / yarn — xem README (Node 24+, yarn, PM2 optional)
yarn install && yarn start   # Electron + backend
```

- Chapter **event graph** từ novel → giảm mất ngữ cảnh dài  
- Default login demo: `admin` / `admin123` (đổi ngay)  
- Cần API key text/image/video models (Seedance, Sora, Doubao…) — chi phí gen video không nhỏ  
- License: Apache-2.0 + điều khoản thương mại bổ sung (đọc NOTICES / commercial addendum)

## So với tool khác

| | Toonflow | MoneyPrinterTurbo | OpenMontage |
|--|----------|-------------------|-------------|
| Shape | Novel→drama canvas studio | Topic→short edit pipeline | Agentic montage / skill |
| UI | Electron infinite canvas | WebUI/API/CLI | CLI/agent |
| Tags | `video` `desktop` `agent` `skill` | `video` `tts` `api` | `video` `agent` `skill` |

## Dùng với Odoo / ai_core

- Studio nội bộ sản xuất teaser / training clip từ kịch bản (human QC trước đăng).  
- Không auto-publish IP người khác — tôn trọng bản quyền novel.  
- Bridge: export video → attach Odoo document / DAM nếu cần.

## Link

- Repo: https://github.com/HBAI-Ltd/Toonflow-app  
- Docs VI: https://github.com/HBAI-Ltd/Toonflow-app/blob/master/docs/README.vi.md  
- Peers: [moneyprinterturbo.md](moneyprinterturbo.md) · [opentoonz.md](opentoonz.md) · [openmontage.md](openmontage.md) · [hyperframes.md](hyperframes.md) · [comfyui.md](comfyui.md) · [ai-auto-generate-video.md](ai-auto-generate-video.md)
