# OpenSpace

> **Repo:** [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace)  
> **Category:** MCP & AI Agents · Quality-first skill hub (self-evolving)  
> **Tags:** `skill` · `agent` · `mcp` · `cli` · `self-host` · `coding-agent` · `workflow`  
> **Ngôn ngữ:** Python · **⭐** ~6.7k · **License:** MIT  
> Cloud: [open-space.cloud](https://open-space.cloud/)

## Đây là gì?

**OpenSpace** — *quality-first skill hub* cho AI agents: **self-evolve** skill (auto-fix / improve / learn từ task thật), **share** skill cloud (public/private/team), giảm token khi tái dùng pattern thành công. Plug MCP vào OpenClaw · Claude Code · Codex · Cursor · nanobot…; CLI `openspace` / gateway chat (WhatsApp, Feishu).

Khác [skill-registries](skill-registries.md) (bookmark marketplace tìm `SKILL.md`): OpenSpace = **runtime evolution + hub OSS** kèm monitor chất lượng.

**Cùng kiểu:** [Hermes](hermes-agent.md) (runtime + skills), [Ponytail](ponytail.md) / [Addy's Agent Skills](agent-skills.md) (skill packs), [Vibe-Trading](vibe-trading.md) (HKUDS domain agent — cùng org).

## Dùng khi nào?

| Nhu cầu | OpenSpace |
|---------|-----------|
| Agent tự evolve/share skills + MCP | ✅ primary |
| Browse community skills (web) | ✅ [open-space.cloud](https://open-space.cloud/) |
| Chỉ `npx skills add` marketplace | → [skill-registries](skill-registries.md) |
| YAGNI coding ruleset mỏng | → [Ponytail](ponytail.md) |
| Trading research agent | → [Vibe-Trading](vibe-trading.md) |

## Chạy thử

```bash
git clone --filter=blob:none --sparse https://github.com/HKUDS/OpenSpace.git
cd OpenSpace
git sparse-checkout set --no-cone '/*' '!/assets/'
pip install -e .
openspace-mcp --help
# openspace --query "your task"
```

MCP (host agent):

```json
{
  "mcpServers": {
    "openspace": {
      "command": "openspace-mcp",
      "toolTimeout": 600,
      "env": {
        "OPENSPACE_HOST_SKILL_DIRS": "/path/to/agent/skills",
        "OPENSPACE_WORKSPACE": "/path/to/OpenSpace"
      }
    }
  }
}
```

LLM credentials thường auto-detect từ config agent; optional `OPENSPACE_API_KEY` cho cloud.

## So với tool khác

| | OpenSpace | skill-registries | Hermes |
|--|-----------|------------------|--------|
| Shape | Evolve + cloud skill hub + MCP | Bookmark marketplaces | Agent runtime |
| Count ★ | ✅ ★ | ❌ bookmark | ✅ ★ |
| Tags | `skill` `mcp` `agent` | `skill` | `agent` `mcp` `skill` |

## Dùng với Odoo / ai_core

- Layer skill evolution cho coding agent monorepo (không thay Odoo business logic).  
- Skills private team via cloud ACL — không commit secrets vào skill public.

## Link

- Repo: https://github.com/HKUDS/OpenSpace · Cloud: https://open-space.cloud/  
- Peers: [skill-registries.md](skill-registries.md) · [hermes-agent.md](hermes-agent.md) · [ponytail.md](ponytail.md) · [agent-skills.md](agent-skills.md) · [vibe-trading.md](vibe-trading.md)
