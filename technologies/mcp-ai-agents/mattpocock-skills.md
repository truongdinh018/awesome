# Matt Pocock Skills

> **Repo:** [mattpocock/skills](https://github.com/mattpocock/skills)  
> **Category:** MCP & AI Agents · Skills pack engineering (không “vibe-only”)  
> **Tags:** `skill` · `coding-agent` · `prompt`  
> **Ngôn ngữ:** Agent Skills / Shell · **⭐** ~169.8k · **License:** MIT  
> Install: `npx skills@latest add mattpocock/skills` · [skills.sh/mattpocock/skills](https://skills.sh/mattpocock/skills)

## Đây là gì?

**mattpocock/skills** — bộ **Agent Skills** từ `.claude` của Matt Pocock (Total TypeScript / AI Hero): nhỏ, composable, giữ quyền kiểm soát thay vì framework process nặng (GSD / BMAD / Spec-Kit-style). Fix lệch hiểu agent (`/grill-me`, `/grill-with-docs` + CONTEXT.md / ADR), triage ticket, workflow eng hàng ngày.

Hai cách cài: **skills.sh** (copy vào repo, hack được) · **Claude Code plugin** (bundle managed, update theo bản phát hành).

**Cùng kiểu:** [Addy's Agent Skills](agent-skills.md), [Karpathy Guidelines](karpathy-skills.md), [Ponytail](ponytail.md), [Spec Kit](spec-kit.md), [skill-registries](../bookmarks/skill-registries.md).

## Dùng khi nào?

| Nhu cầu | Matt Pocock Skills |
|---------|-------------------|
| Align trước khi code (grill) + shared language | ✅ primary |
| Skills eng nhỏ, tự adapt | ✅ |
| Một `CLAUDE.md` 4 nguyên tắc Karpathy | → [Karpathy Guidelines](karpathy-skills.md) |
| Lifecycle eng đầy đủ (Addy) | → [agent-skills](agent-skills.md) |
| Spec-Driven toolkit GitHub | → [Spec Kit](spec-kit.md) |

## Chạy thử

```bash
npx skills@latest add mattpocock/skills
# Chọn skills + agents; nhớ chọn /setup-matt-pocock-skills
# Trong agent: /setup-matt-pocock-skills  (tracker, labels, docs path)
```

Claude plugin:

```
/plugin marketplace add mattpocock/skills
/plugin install mattpocock-skills@mattpocock
```

## So với tool khác

| | Matt Pocock Skills | Karpathy Guidelines | Addy Skills |
|--|--------------------|---------------------|-------------|
| Shape | Pack skills eng + setup | 1 file 4 principles | Lifecycle skill pack |
| Grill / CONTEXT.md | ✅ signature | — | khác góc |
| Tags | `skill` `prompt` | `skill` `prompt` | `skill` `prompt` |

## Dùng với Odoo / ai_core

- `/grill-with-docs` trước change lớn module Odoo → CONTEXT/ADR nội bộ.  
- Setup tracker (GitHub/Linear/local) khớp đội.  
- Không thay review human / SDD formal nếu team đã Spec Kit.

## Link

- Repo: https://github.com/mattpocock/skills · skills.sh: https://skills.sh/mattpocock/skills  
- Peers: [karpathy-skills.md](karpathy-skills.md) · [agent-skills.md](agent-skills.md) · [ponytail.md](ponytail.md) · [spec-kit.md](spec-kit.md) · [skill-registries.md](../bookmarks/skill-registries.md)
