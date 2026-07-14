# ntfy

> **Repo:** [binwiederhier/ntfy](https://github.com/binwiederhier/ntfy)  
> **Category:** DevTools & Integration  
> **Tags:** `notification` · `self-host` · `cli`  
> **Ngôn ngữ:** Go · **⭐** ~31k

## Đây là gì?

**ntfy** gửi **push notification** tới điện thoại hoặc desktop qua **HTTP đơn giản** (PUT/POST) — không cần Firebase/APNs SDK phức tạp cho use case cơ bản.

Bạn có thể **self-host** hoặc dùng `ntfy.sh` public (topic public — không gửi secret). Hỗ trợ topics, priority, tags/emoji, attachments, và app mobile/desktop/web.

**Cùng kiểu:** [trek.md](trek.md) · [yuvomi.md](yuvomi.md) *(reminders)* · [jitsi-meet.md](jitsi-meet.md) *(video rooms)*

## Dùng khi nào?

| Nhu cầu | ntfy |
|---------|------|
| Alert CI/CD / cron / agent → phone | ✅ |
| Push mobile nhanh, setup đơn giản | ✅ |
| Rich format / thread chat team | → Slack webhook |
| Self-host notification | ✅ Docker / binary Go |

## Chạy thử

```bash
curl -d "Deploy Odoo xong" https://ntfy.sh/mytopic

docker run -p 80:80 -itd binwiederhier/ntfy serve
```

Production: đặt auth (`ntfy user` / access tokens).

## So với tool khác

| | ntfy | Slack webhook | Email |
|--|------|---------------|-------|
| Setup | Rất nhanh | Cần workspace | SMTP |
| Mobile push | ✅ App | ✅ App | Delay |
| Self-host | ✅ | ❌ | Tùy |
| Rich format | Hạn chế | Cao | Cao |

## Dùng với Odoo / ai_core

- Webhook sau `ai_agentic_workflow` approval.  
- `ai.training.job` complete → ntfy notify.  
- Thay email cho alert nội bộ dev.

## Link

- Repo: https://github.com/binwiederhier/ntfy  
- Docs: https://docs.ntfy.sh  
- Peers: [trek.md](trek.md) · [yuvomi.md](yuvomi.md) · [jitsi-meet.md](jitsi-meet.md)
