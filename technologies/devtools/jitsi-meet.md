# Jitsi Meet

> **Repo:** [jitsi/jitsi-meet](https://github.com/jitsi/jitsi-meet)  
> **Category:** DevTools · Self-hosted video conferencing  
> **Tags:** `self-host` · `video` · `api` · `realtime` · `docker`
> **Ngôn ngữ:** TypeScript · React · WebRTC · **⭐** ~29.6k · **License:** Apache-2.0  
> Site: [jitsi.org/meet](https://jitsi.org/meet) · Try: [meet.jit.si](https://meet.jit.si) · Handbook: [jitsi.github.io/handbook](https://jitsi.github.io/handbook/)

## Đây là gì?

**Jitsi Meet** là nền tảng **video conference OSS**: deploy riêng hoặc embed (web/native SDK). HD A/V, screen share, chat, polls, raise hand, virtual backgrounds, mobile apps. **Không phải AI product** — collab realtime; stack agent/Odoo hay dùng cho support call, training, live demos. Cloud free: meet.jit.si; enterprise: 8x8 JaaS.

**Cùng kiểu:** [ntfy](ntfy.md) (async notify), [Yuvomi](yuvomi.md) / [TREK](trek.md) (self-host household/travel), [faster-whisper](../speech-audio/faster-whisper.md) (transcribe cuộc họp offline).

## Dùng khi nào?

| Nhu cầu | Jitsi Meet |
|---------|------------|
| Self-host meeting (privacy) | ✅ Docker / Debian |
| Embed trong web app / portal | ✅ iframe + SDK |
| SaaS zoom-like có sẵn | meet.jit.si / JaaS |
| AI meeting summary native | → gắn STT ([faster-whisper](../speech-audio/faster-whisper.md)) / agent riêng |
| Short video gen | → [HyperFrames](../image-video/hyperframes.md) |

## Chạy thử

```bash
# Quick try (hosted)
# https://meet.jit.si

# Self-host: follow handbook devops-guide (Docker recommended)
```

Handbook: [Self-Hosting Guide](https://jitsi.github.io/handbook/docs/devops-guide/). Debian packages + Docker compose đầy đủ; advanced: build từ source toàn stack (meet + jvb + prosody…). Browser-first · Android / iOS apps · F-Droid · SFU architecture (Jitsi Videobridge stack).

## So với tool khác

| | Jitsi Meet | ntfy | HyperFrames |
|--|------------|------|-------------|
| Niche | Realtime video room | Push notify | Agent → video file |
| AI-first | ❌ WebRTC | ❌ | ✅ agent-native |
| Tags | `self-host` `video` `api` | `notification` | `video` `agent` `cli` |

## Dùng với Odoo / ai_core

- Embed Jitsi trong portal/helpdesk / training LMS.  
- Pipeline: record meeting → [faster-whisper](../speech-audio/faster-whisper.md) → RAG notes.  
- Agent join via browser tools ([Stagehand](../ui-automation/stagehand.md)) nếu cần automation.

## Link

- Repo: https://github.com/jitsi/jitsi-meet  
- Handbook · Security · [JaaS](https://jaas.8x8.vc/)  
- Peers: [ntfy.md](ntfy.md) · [faster-whisper.md](../speech-audio/faster-whisper.md) · [yuvomi.md](yuvomi.md)
