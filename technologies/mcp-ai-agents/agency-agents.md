# Agency Agents

> **Repo:** [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)  
> **Category:** MCP & AI Agents · Thư viện agent personality / skill theo “agency”  
> **Tags:** `skill` · `prompt` · `coding-agent` · `agent` · `desktop` · `cli`  
> **Ngôn ngữ:** Markdown · Shell · **⭐** ~135.5k · **License:** MIT  
> **App:** [agencyagents.app](https://agencyagents.app) · Installer: [agency-agents-app](https://github.com/msitarzewski/agency-agents-app)

## Đây là gì?

**Agency Agents** (*The Agency*) là bộ sưu tập **agent chuyên môn** (frontend, marketing, security, finance, healthcare…) — mỗi file Markdown = một chuyên gia có personality, workflow, deliverable và success metrics. Không phải runtime agent: là **prompt/skill pack** cài vào Claude Code, Cursor, Codex, Gemini CLI, OpenCode, Aider…

Cài nhanh bằng app desktop (macOS/Linux/Windows) hoặc `./scripts/install.sh --tool <claude-code|cursor|…>`. Có bản dịch cộng đồng (kể cả tiếng Việt).

**Cùng kiểu:** [Addy's Agent Skills](agent-skills.md) (lifecycle eng skills), [Ponytail](ponytail.md) / [Hallmark](hallmark.md) (skill mỏng), [Minimalist Entrepreneur Skills](slavingia-skills.md), [PraisonAI](praisonai.md) (runtime multi-agent — khác lớp).

## Dùng khi nào?

| Nhu cầu | Agency Agents |
|---------|---------------|
| Roster agent domain (eng / design / sales…) cho coding CLI | ✅ primary |
| Cài 1-click vào Cursor / Claude Code | ✅ app hoặc `install.sh` |
| Runtime tự orchestrate multi-agent | → [PraisonAI](praisonai.md) / [Hermes](hermes-agent.md) |
| Một skill anti-slop / YAGNI mỏng | → [Hallmark](hallmark.md) / [Ponytail](ponytail.md) |
| Skill registry web browse | → bookmarks skill-registries |

## Chạy thử

```bash
# App (khuyến nghị) — brew cask hoặc download release
brew install --cask msitarzewski/agency-agents/agency-agents

# Hoặc clone + script
git clone https://github.com/msitarzewski/agency-agents
cd agency-agents
./scripts/convert.sh          # sinh file cho nhiều tool
./scripts/install.sh          # interactive: chọn tool + team
./scripts/install.sh --tool cursor --division engineering
./scripts/install.sh --tool claude-code --agent frontend-developer
```

Trong session: nhắc agent “activate Frontend Developer mode…” theo tên trong roster.

## So với tool khác

| | Agency Agents | Addy's Skills | PraisonAI |
|--|---------------|---------------|-----------|
| Shape | Personality pack / installer | Eng lifecycle skills | Multi-agent runtime |
| Desktop app | ✅ | ❌ | UI/Claw extras |
| Tags | `skill` `prompt` `coding-agent` | `skill` `prompt` | `agent` `mcp` `rag` |

## Dùng với Odoo / ai_core

- Cài division `engineering` + `project-management` vào Cursor khi làm module Odoo — agent theo persona review/PR.  
- Không thay `ai_core` runtime: chỉ là lớp hướng dẫn hành vi coding agent.  
- Tự viết agent Markdown nội bộ (quy trình duyệt chứng từ) theo cùng format rồi `install.sh --agent …`.

## Link

- Repo: https://github.com/msitarzewski/agency-agents · App: https://agencyagents.app  
- Peers: [agent-skills.md](agent-skills.md) · [ponytail.md](ponytail.md) · [hallmark.md](hallmark.md) · [slavingia-skills.md](slavingia-skills.md) · [praisonai.md](praisonai.md)
