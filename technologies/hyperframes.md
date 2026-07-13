# HyperFrames

> **Repo:** [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)  
> **Category:** Image & Video Generation  
> **Ngôn ngữ:** TypeScript · **⭐** ~34k

## Tổng quan

**HyperFrames** (HeyGen) — **"Write HTML. Render video."** — framework sinh **video từ HTML/CSS**, thiết kế cho **AI agents**:

- Agent viết markup (hoặc React-like components)
- Engine render thành **video** (frame sequence → mp4)
- Phù hợp **programmatic video** không cần After Effects thủ công

## Vấn đề giải quyết

| Cách cũ | HyperFrames |
|---------|-------------|
| Video editor GUI | Code-first HTML |
| Template cứng | Agent generate động |
| Khó CI/CD video | Version control HTML |

## Luồng agent

```
Agent (LLM)
    │ sinh HTML + style + timeline
    ▼
HyperFrames renderer
    │ headless browser / compositor
    ▼
MP4 / GIF output
```

## Use case

- **Training video Odoo** — slide động từ nội dung help doc
- **Personalized marketing** — video báo giá / onboarding khách hàng
- **Social clip** — short video từ data CRM
- **Kết hợp TTS** — VoxCPM voice-over + HyperFrames visual

## So sánh

| | HyperFrames | Remotion | FFmpeg script |
|--|-------------|----------|---------------|
| Input | HTML | React/TS | CLI filtergraph |
| Agent-friendly | ✅ Built for agents | Trung bình | Thấp |
| Ecosystem | HeyGen | Mature OSS | Universal |

## Yêu cầu

- Node.js / TypeScript stack
- Xem README repo cho API render và self-host options

## Liên quan ai_core

- `ai_agentic_workflow` step: generate HTML → render video → attach to `mail.message`
- Notification: gửi link video qua `ntfy`

## Link

- Repo: https://github.com/heygen-com/hyperframes
- HeyGen: https://www.heygen.com
