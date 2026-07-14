# AI-auto-generate-video (Template Video)

> **Repo:** [huytranvan2010/AI-auto-generate-video](https://github.com/huytranvan2010/AI-auto-generate-video)  
> **Category:** Image & Video Generation · Template / short-form pipeline  
> **Tags:** `video` · `skill` · `tts` · `cli` · `agent`  
> **Ngôn ngữ:** TypeScript (Node ≥22) · **⭐** ~181 · **License:** MIT  
> Slogan: *A Vietnamese article in. A 9:16 short out.*

## Tổng quan

**AI-auto-generate-video** (AI Coding) — pipeline **bài viết / URL → video Shorts 9:16** deterministic:

- **AI** (Claude Code skill `/create-template-video`) = content: fetch bài → `script.json` + chọn template  
- **Code** = production: TTS · SFX · HyperFrames · FFmpeg mux — cùng `script.json` → cùng pixels

Stack đã có trong catalog: **[HyperFrames](hyperframes.md)** (render) + **[OmniVoice](omnivoice-studio.md)** (TTS local, không API key).

## Để làm gì?

| Nhu cầu | Repo này |
|---------|----------|
| Bài VN / URL → Short TikTok/Reels | ✅ 1080×1920 + voice + SFX |
| Tách `voice.mp3` / `script.txt` cho CapCut | ✅ |
| Render lặp lại ổn định (CI / batch) | ✅ Idempotent per scene |
| Template HTML sẵn (hook/body/outro) | ✅ Catalog trong `templates/` |
| Engine tuỳ biến sâu (không template) | → dùng [HyperFrames](hyperframes.md) trực tiếp |

## Pipeline

```
URL / .txt
    → Claude /create-template-video
    → script.json (Zod)
    → OmniVoice TTS / scene
    → SFX mix → voice.mp3
    → HyperFrames (Chromium) → clips
    → FFmpeg concat + mux → video.mp4
```

Output: `video.mp4` · `voice.mp3` · `script.txt`.

## Quick start

```bash
git clone https://github.com/huytranvan2010/AI-auto-generate-video.git
cd AI-auto-generate-video
npm install
# OmniVoice local: OMNIVOICE_ENDPOINT=http://127.0.0.1:8123
```

Claude Code:

```text
/create-template-video https://example.com/article
```

Manual:

```bash
npm run pipeline -- output/my-video/script.json
```

## Templates (HyperFrames)

Ví dụ: `frame-liquid-bg-hero` (hook), `frame-pentagram-stat`, `frame-glitch-title`, `frame-logo-outro`… — chi tiết `templates/CATALOG.md`.

## So sánh catalog

| | AI-auto-generate-video | HyperFrames | ComfyUI |
|--|------------------------|-------------|---------|
| Vai trò | App pipeline Shorts sẵn | Engine HTML→MP4 | Diffusion GUI |
| TTS | OmniVoice bắt buộc | Không | Không |
| Skill Claude | ✅ `/create-template-video` | Agent tự viết HTML | Workflow graph |

## Use case

- Content channel công nghệ VN: URL bài → Short hàng ngày  
- Marketing Odoo / internal: script cố định → batch render  
- Học agent skill: `.claude/skills/create-template-video`

## Link

- Repo: https://github.com/huytranvan2010/AI-auto-generate-video  
- README VI: `README.vi.md`  
- Engine: [hyperframes.md](hyperframes.md) · TTS: [omnivoice-studio.md](omnivoice-studio.md)  
- Full agentic studio peer: [openmontage.md](openmontage.md)  
- Demo Short: https://youtube.com/shorts/LUAgRhPBONg  
