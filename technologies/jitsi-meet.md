# Jitsi Meet

> **Repo:** [jitsi/jitsi-meet](https://github.com/jitsi/jitsi-meet)  
> **Category:** DevTools · Self-hosted video conferencing  
> **Tags:** `self-host` · `video` · `api`  
> **Ngôn ngữ:** TypeScript · React · WebRTC · **⭐** ~29.6k · **License:** Apache-2.0  
> Site: [jitsi.org/meet](https://jitsi.org/meet) · Try: [meet.jit.si](https://meet.jit.si) · Handbook: [jitsi.github.io/handbook](https://jitsi.github.io/handbook/)

## Tổng quan

**Jitsi Meet** — nền tảng **video conference OSS**: deploy riêng hoặc embed (web/native SDK). HD A/V, screen share, chat, polls, raise hand, virtual backgrounds, mobile apps. **Không phải AI product** — collab realtime; stack agent/Odoo hay dùng cho support call, training, live demos. Cloud free: meet.jit.si; enterprise: 8x8 JaaS.

Peer: [ntfy](ntfy.md) (async notify), [Yuvomi](yuvomi.md) / [TREK](trek.md) (self-host household/travel), [faster-whisper](faster-whisper.md) (transcribe cuộc họp offline).

## Để làm gì?

| Nhu cầu | Jitsi Meet |
|---------|------------|
| Self-host meeting (privacy) | ✅ Docker / Debian |
| Embed trong web app / portal | ✅ iframe + SDK |
| SaaS zoom-like có sẵn | meet.jit.si / JaaS |
| AI meeting summary native | → gắn STT ([faster-whisper](faster-whisper.md)) / agent riêng |
| Short video gen | → [HyperFrames](hyperframes.md) |

## Highlight

- Browser-first · Android / iOS apps · F-Droid  
- Content sharing · reactions · private chat · polls · virtual BG  
- Scalable SFU architecture (Jitsi Videobridge stack)  
- Secure by design — xem docs Security  

## Deploy

Handbook: [Self-Hosting Guide](https://jitsi.github.io/handbook/docs/devops-guide/).  
Debian packages + Docker compose đầy đủ; advanced: build từ source toàn stack (meet + jvb + prosody…).

```bash
# Quick try (hosted)
# https://meet.jit.si

# Self-host: follow handbook devops-guide (Docker recommended)
```

## So sánh catalog

| | Jitsi Meet | ntfy | HyperFrames |
|--|------------|------|-------------|
| Niche | Realtime video room | Push notify | Agent → video file |
| AI-first | ❌ WebRTC | ❌ | ✅ agent-native |
| Tags | `self-host` `video` `api` | `notification` | `video` `agent` `cli` |

## Use case Odoo / ai_core

- Embed Jitsi trong portal/helpdesk / training LMS.  
- Pipeline: record meeting → [faster-whisper](faster-whisper.md) → RAG notes.  
- Agent join via browser tools ([Stagehand](stagehand.md)) nếu cần automation.

## Link

- Repo: https://github.com/jitsi/jitsi-meet  
- Handbook · Security · [JaaS](https://jaas.8x8.vc/)  
- Peers: [ntfy.md](ntfy.md) · [faster-whisper.md](faster-whisper.md) · [yuvomi.md](yuvomi.md)
