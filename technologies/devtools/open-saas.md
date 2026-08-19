# Open SaaS

> **Repo:** [wasp-lang/open-saas](https://github.com/wasp-lang/open-saas)  
> **Category:** DevTools · Boilerplate SaaS (Wasp + React + Node + Prisma)  
> **Tags:** `self-host` · `api` · `workspace` · `workflow` · `skill`  
> **Ngôn ngữ:** MDX / TypeScript (template) · **⭐** ~15.5k · **License:** MIT  
> **Site:** [opensaas.sh](https://opensaas.sh) · Docs: [docs.opensaas.sh](https://docs.opensaas.sh)

## Đây là gì?

**Open SaaS** là template **SaaS full-stack miễn phí**: auth (email + Google/GitHub/Slack/MS), thanh toán (Stripe, Polar.sh, Lemon Squeezy), email, job/queue, upload S3, admin (Shadcn), blog/docs Astro Starlight, analytics (Plausible/GA). Viết trên [Wasp](https://wasp.sh) (React + Node + Prisma, type-safe, deploy một lệnh).

Có **AGENTS.md / skills / plugin Claude Code** để coding agent làm việc đúng stack. Demo: [opensaas.sh](https://opensaas.sh).

**Cùng kiểu:** [Appsmith](appsmith.md) (low-code internal tool, không phải SaaS customer-facing), [Vikunja](vikunja.md) (app việc self-host), [Easy-Vibe](../mcp-ai-agents/easy-vibe.md) (khóa vibe coding → fullstack).

## Dùng khi nào?

| Nhu cầu | Open SaaS |
|---------|-----------|
| Bắt đầu SaaS: auth, pay, email, admin | ✅ `wasp new -t saas` |
| Deploy Railway / Fly một lệnh | ✅ CLI Wasp |
| Admin nội bộ trên DB có sẵn | → [Appsmith](appsmith.md) |
| Học vibe coding từ số 0 | → [Easy-Vibe](../mcp-ai-agents/easy-vibe.md) |
| ERP / Odoo thay thế | ❌ khác bài toán |

## Chạy thử

```bash
npm i -g @wasp.sh/wasp-cli
wasp new -t saas
# vào thư mục app → wasp start
```

Chi tiết env (Stripe, auth, S3): [docs.opensaas.sh](https://docs.opensaas.sh).

## So với tool khác

| | Open SaaS | Appsmith | Easy-Vibe |
|--|-----------|----------|-----------|
| Vai trò | Template SaaS Wasp | Low-code admin | Khóa học vibe coding |
| Payment / auth sẵn | ✅ | tự gắn | bài học |
| Tags | `self-host` `skill` `workflow` | `self-host` `workspace` | `coding-agent` `skill` |

## Dùng với Odoo / ai_core

- Prototype cổng khách (billing, login) cạnh Odoo — không thay `res.users` ERP.  
- Webhook Stripe → Odoo cần adapter riêng.  
- Agent: dùng skill trong repo template; ai_core không bundle Wasp.

## Link

- Repo: https://github.com/wasp-lang/open-saas  
- Docs: https://docs.opensaas.sh  
- Peers: [appsmith.md](appsmith.md) · [easy-vibe.md](../mcp-ai-agents/easy-vibe.md) · [vikunja.md](vikunja.md)
