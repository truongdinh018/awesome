# HyperFrames

> **Repo:** [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)  
> **Category:** Image & Video Generation  
> **Tags:** `video` · `cli` · `agent`  
> **Ngôn ngữ:** TypeScript · **⭐** ~34k

## Đây là gì?

**HyperFrames** (HeyGen) — *"Write HTML. Render video."* — framework sinh **video từ HTML/CSS**, thiết kế cho **AI agents**. Agent viết markup (hoặc React-like components); engine render thành **video** (frame sequence → mp4). Phù hợp **programmatic video** không cần After Effects thủ công.

**Cùng kiểu:** [HTML Anything](html-anything.md) (agentic HTML), [OpenMontage](openmontage.md) (agentic studio), [AI-auto-generate-video](ai-auto-generate-video.md) (VN short pipeline), [MoneyPrinterTurbo](moneyprinterturbo.md) (short-form LLM→edit).

## Dùng khi nào?

| Nhu cầu | HyperFrames |
|---------|-------------|
| Agent sinh HTML → MP4 | ✅ |
| Video động từ code, version control | ✅ |
| NLE browser thủ công | → [FreeCut](freecut.md) |
| Topic → short video + TTS stock | → [MoneyPrinterTurbo](moneyprinterturbo.md) |
| Dub/translate video có sẵn | → [pyVideoTrans](pyvideotrans.md) |

## Chạy thử

Xem README repo cho API render và self-host options. Node.js / TypeScript stack.

```
Agent (LLM) → sinh HTML + style + timeline
    → HyperFrames renderer (headless browser / compositor)
    → MP4 / GIF output
```

## So với tool khác

| | HyperFrames | Remotion | FFmpeg script |
|--|-------------|----------|---------------|
| Input | HTML | React/TS | CLI filtergraph |
| Agent-friendly | ✅ Built for agents | Trung bình | Thấp |
| Ecosystem | HeyGen | Mature OSS | Universal |

## Dùng với Odoo / ai_core

- `ai_agentic_workflow` step: generate HTML → render video → attach to `mail.message`.  
- Training video Odoo — slide động từ nội dung help doc.  
- Kết hợp TTS — VoxCPM voice-over + HyperFrames visual.

## Link

- Repo: https://github.com/heygen-com/hyperframes  
- HeyGen: https://www.heygen.com  
- Peers: [ai-auto-generate-video.md](ai-auto-generate-video.md) · [html-anything.md](html-anything.md) · [openmontage.md](openmontage.md) · [moneyprinterturbo.md](moneyprinterturbo.md)
