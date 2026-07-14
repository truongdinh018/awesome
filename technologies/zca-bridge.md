# zca-bridge

> **Repo:** [diendh/zca-bridge](https://github.com/diendh/zca-bridge)  
> **Category:** DevTools · Zalo ↔ Chatwoot bridge (VN support)  
> **Tags:** `self-host` · `api` · `notification` · `workflow`  
> **Ngôn ngữ:** TypeScript · Fastify · PostgreSQL · **⭐** ~113 · **License:** Apache-2.0  
> Site: [vietts.io](https://vietts.io/) · README VI: [README.vi.md](https://github.com/diendh/zca-bridge/blob/main/README.vi.md)

## Tổng quan

**zca-bridge** — sidecar **self-host** đồng bộ hội thoại **Zalo ↔ Chatwoot** hai chiều cho đội hỗ trợ khách hàng VN: Zalo OA (API chính thức) và/hoặc Zalo cá nhân (`zca-js` + QR — **không chính thức**). Queue PostgreSQL bền, media archive, admin `/admin/`, cảnh báo Telegram/webhook.

⚠️ Kênh cá nhân qua `zca-js` có rủi ro khóa tài khoản — dùng tài khoản phụ. OA dùng API chính thức an toàn hơn. Dự án độc lập, không affiliated Zalo/Chatwoot.

Peer: [ntfy](ntfy.md), [Yuvomi](yuvomi.md), [Jitsi Meet](jitsi-meet.md), [TREK](trek.md).

## Để làm gì?

| Nhu cầu | zca-bridge |
|---------|------------|
| Inbox Zalo trong Chatwoot | ✅ OA + personal |
| Self-host Docker / Node 24+ | ✅ |
| Push notify chung (không helpdesk) | → [ntfy](ntfy.md) |
| CRM chat Odoo native | → integrate riêng (Discuss / livechat) |

## Highlight

```bash
# Docker / compose — xem README; cần Chatwoot + Postgres riêng
# Admin: /admin/ — OA OAuth, QR personal, proxy per-account
```

- Media, quote/reply, reaction, backfill OA  
- Dead-letter + reconnect backoff  

## Use case Odoo / ai_core

- CS Zalo → Chatwoot; agent AI trên Chatwoot hoặc webhook sang Odoo.  
- Không nhúng unofficial personal API vào production chính nếu chưa chấp nhận risk.

## Link

- Repo: https://github.com/diendh/zca-bridge  
- Peers: [ntfy.md](ntfy.md) · [yuvomi.md](yuvomi.md) · [jitsi-meet.md](jitsi-meet.md)
