# ntfy

> **Repo:** [binwiederhier/ntfy](https://github.com/binwiederhier/ntfy)  
> **Category:** DevTools & Integration  
> **Tags:** `notification` · `self-host` · `cli`  
> **Ngôn ngữ:** Go · **⭐** ~31k

## Tổng quan

**ntfy** gửi **push notification** tới điện thoại hoặc desktop qua **HTTP đơn giản** (PUT/POST) — không cần Firebase/APNs SDK phức tạp cho use case cơ bản.

```
curl -d "Deploy Odoo xong" https://ntfy.sh/mytopic
```

Có thể **self-host** hoặc dùng `ntfy.sh` public (topic public — không gửi secret).

## Kiến trúc

```
Producer (Odoo cron, agent, CI)
        │ HTTP POST
        ▼
ntfy server (self-host hoặc ntfy.sh)
        │
        ▼
Mobile app / Desktop / Web
```

## Tính năng

| Tính năng | Mô tả |
|-----------|--------|
| Topics | Pub/sub theo tên channel |
| Priority | urgent, high, default, low |
| Tags / emoji | Phân loại thông báo |
| Attachments | Gửi file nhỏ |
| Self-hosted | Docker, binary Go |

## Use case

- **CI/CD alert** — build ai_core fail → push phone
- **Odoo cron** — job dài xong → notify admin
- **AI agent** — task hoàn thành / cần approval
- **Monitoring** — kết hợp healthcheck script

## So sánh

| | ntfy | Slack webhook | Email |
|--|------|---------------|-------|
| Setup | Rất nhanh | Cần workspace | SMTP |
| Mobile push | ✅ App | ✅ App | Delay |
| Self-host | ✅ | ❌ | Tùy |
| Rich format | Hạn chế | Cao | Cao |

## Self-host nhanh

```bash
docker run -p 80:80 -itd binwiederhier/ntfy serve
```

Đặt auth (`ntfy user` / access tokens) cho production.

## Liên quan ai_core

- Webhook sau `ai_agentic_workflow` approval
- `ai.training.job` complete → ntfy notify
- Thay thế email cho alert nội bộ dev

## Link

- Repo: https://github.com/binwiederhier/ntfy
- Docs: https://docs.ntfy.sh
- Consumer apps: [trek.md](trek.md) · [yuvomi.md](yuvomi.md) *(reminders)*  
- Video rooms (collab): [jitsi-meet.md](jitsi-meet.md)
