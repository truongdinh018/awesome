# Agent Skill registries & websites

> **Loại:** Directory / marketplace *(không tính ★ catalog)*  
> **Tags:** `skill` · `coding-agent` · `prompt`  
> Bookmark hub cài / tìm **Agent Skills** (`SKILL.md`) cho Claude Code · Cursor · Codex · Copilot…

Cập nhật: **2026-07-14**

## Đây là gì?

**Agent Skill registries** là các website / marketplace để **tìm và cài skill** cho coding agent.

Skill là file `SKILL.md` — quy tắc portable cho Claude Code, Cursor, Codex, Copilot… Không phải model AI; là *plugin prompt* giúp agent làm việc theo workflow cụ thể.

Ba hub chính đã lưu: **Skills.sh** (CLI `npx skills add`), **AgentSkill.sh** (marketplace lớn), **Skills Hub** (sync nhiều nguồn + quality score).

**Cùng kiểu:** [Addy's Agent Skills](agent-skills.md), [Taste Skill](taste-skill.md), [Caveman](caveman.md), [Ponytail](ponytail.md), [OpenSpace](openspace.md) (★ — evolve + hub OSS).

## Dùng khi nào?

| Nhu cầu | Gợi ý hub |
|---------|-----------|
| `npx skills add` quen thuộc | [skills.sh](https://skills.sh) |
| Browse / marketplace lớn | [agentskill.sh](https://agentskill.sh) |
| Org, quality score, multi-source sync | [skills-hub.ai](https://skills-hub.ai) |
| Skill cụ thể đã star trong awesome-ai | Bài `technologies/*.md` tương ứng |

## Chạy thử

```bash
# Skills.sh / CLI skills (vd.)
npx skills add addyosmani/agent-skills
npx skills add https://github.com/Leonxlnx/taste-skill

# Skills Hub
npx @skills-hub-ai/cli install <skill>
# hoặc: skills-hub init
```

**Spec chuẩn:** Agent Skills format `SKILL.md`. Peer spec: [agentskills.io](https://agentskills.io).

## So với tool khác

| | Skills.sh | AgentSkill.sh | Skills Hub |
|--|-----------|---------------|------------|
| CLI | `npx skills add` | Browse web | `npx @skills-hub-ai/cli` |
| Quy mô | Phổ biến (Vercel) | Trăm nghìn+ skills | Sync Anthropic, MS, Google… |
| Quality | Community | Marketplace | Score + MCP |

## Dùng với Odoo / ai_core

- Cài skill lifecycle (Addy) hoặc Caveman trước khi agent code module Odoo.  
- Org nên pin skill version — không auto-update production.  
- Skill trong catalog ★ đáng tin hơn marketplace ngẫu nhiên.

## Link

- Skills.sh: https://skills.sh  
- AgentSkill.sh: https://agentskill.sh  
- Skills Hub: https://skills-hub.ai  
- Peers: [agent-skills.md](agent-skills.md) · [taste-skill.md](taste-skill.md) · [caveman.md](caveman.md) · [ponytail.md](ponytail.md) · [prompts-chat.md](prompts-chat.md)
