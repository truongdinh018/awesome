# Minimalist Entrepreneur Skills

> **Repo:** [slavingia/skills](https://github.com/slavingia/skills)  
> **Category:** MCP & AI Agents · Skill pack (startup / product)  
> **Tags:** `skill` · `coding-agent` · `prompt` · `plugin`
> **Ngôn ngữ:** Claude Code plugin / SKILL.md · **⭐** ~9.6k · **License:** (chưa SPDX trên GitHub)  
> Dựa trên sách *The Minimalist Entrepreneur* (Sahil Lavingia)

## Đây là gì?

**slavingia/skills** là pack **10 Claude Code skills** theo hành trình *Minimalist Entrepreneur*: tìm community → validate ý tưởng → MVP / processize → khách đầu → pricing → marketing → grow → values → review.

Không phải coding skill (TDD, ship code) — mà **coach kinh doanh tối giản** trong agent: slash commands như `/validate-idea`, `/mvp`, `/pricing`, `/minimalist-review`.

**Cùng kiểu:** [Addy's Agent Skills](agent-skills.md) (lifecycle engineering), [Ponytail](ponytail.md) / [Karpathy Guidelines](karpathy-skills.md) (quy tắc code), [knowledge-work-plugins](knowledge-work-plugins.md) (skill văn phòng).

## Dùng khi nào?

| Nhu cầu | Minimalist Entrepreneur Skills |
|---------|--------------------------------|
| Coach startup / product trong Claude Code | ✅ 10 skills theo sách |
| Gut-check quyết định kinh doanh | ✅ `/minimalist-review` |
| Spec → ship code production | → [Addy's Agent Skills](agent-skills.md) |
| YAGNI / ít code hơn | → [Ponytail](ponytail.md) |
| Runtime agent + MCP | → [Hermes](hermes-agent.md) |

## Chạy thử

```bash
# Claude Code
/plugin marketplace add slavingia/skills
/plugin install minimalist-entrepreneur

# Hoặc clone local rồi marketplace add đường dẫn
git clone https://github.com/slavingia/skills.git ~/.claude/plugins/skills
```

| Skill | Command |
|-------|---------|
| Find Community | `/find-community` |
| Validate Idea | `/validate-idea` |
| MVP | `/mvp` |
| Processize | `/processize` |
| First Customers | `/first-customers` |
| Pricing | `/pricing` |
| Marketing Plan | `/marketing-plan` |
| Grow Sustainably | `/grow-sustainably` |
| Company Values | `/company-values` |
| Minimalist Review | `/minimalist-review` |

## So với tool khác

| | slavingia/skills | Addy Agent Skills | Ponytail |
|--|------------------|-------------------|----------|
| Domain | Startup / product | Engineering lifecycle | YAGNI coding |
| Số skill | 10 | 24 + commands | 1 |
| Tags | `skill` `prompt` | `skill` `coding-agent` | `skill` `prompt` |

## Dùng với Odoo / ai_core

- Lên ý tưởng module / vertical Odoo trước khi code: `/validate-idea`, `/mvp`, `/processize`.  
- Định giá addon / SaaS quanh Odoo: `/pricing`, `/first-customers`.  
- Không thay skill engineering — ghép với [agent-skills.md](agent-skills.md) khi vào giai đoạn implement.

## Link

- Repo: https://github.com/slavingia/skills  
- Sách / site: https://www.minimalistentrepreneur.com  
- Peers: [agent-skills.md](agent-skills.md) · [ponytail.md](ponytail.md) · [karpathy-skills.md](karpathy-skills.md) · [mattpocock-skills.md](mattpocock-skills.md) · [knowledge-work-plugins.md](knowledge-work-plugins.md)
