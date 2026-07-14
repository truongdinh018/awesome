# CC Workflow Studio

> **Repo:** [breaking-brake/cc-wf-studio](https://github.com/breaking-brake/cc-wf-studio)  
> **Category:** MCP & AI Agents · Visual workflow → agent skills  
> **Tags:** `coding-agent` · `skill` · `mcp` · `cli` · `workflow`  
> **Ngôn ngữ:** TypeScript · **⭐** ~5.3k · **License:** AGPL-3.0 (VS Code ext) · MIT (`core` / `cli` / `mcp` npm)  
> Canvas → Markdown skills cho Claude Code · Cursor · Codex · Copilot · Gemini…

## Đây là gì?

**CC Workflow Studio** là công cụ thiết kế workflow agent **trên canvas** (React Flow), export sang format agent đã hiểu (`.claude/`, `.cursor/skills/`, `.codex/skills/`…).

VS Code extension + CLI (`ccwf`) + MCP (`ccwf-mcp`) cùng `workflow.json`. Edit bằng NL qua MCP; Run trực tiếp từ editor.

**Cùng kiểu:** [Vibe Kanban](vibe-kanban.md) (kanban chạy agents), [drawio-skill](drawio-skill.md) (diagram skill), [n8n-workflows](n8n-workflows.md) / n8n harness (automation ngoài coding agent), [knowledge-work-plugins](knowledge-work-plugins.md) (Cowork plugins).

## Dùng khi nào?

| Nhu cầu | CC WF Studio |
|---------|--------------|
| Visual design → Claude/Cursor skills | ✅ |
| CLI/CI export validate | ✅ `@cc-wf-studio/cli` |
| MCP edit workflow từ agent | ✅ |
| Multi-agent coding kanban board | → [Vibe Kanban](vibe-kanban.md) |
| n8n business automation templates | → [n8n-workflows](n8n-workflows.md) |

## Chạy thử

```bash
code --install-extension breaking-brake.cc-wf-studio
npx @cc-wf-studio/cli --help
# MCP: @cc-wf-studio/mcp → ccwf-mcp trong .mcp.json
```

Export targets: Claude Code, Copilot Chat/CLI, Codex, Roo/Zoo, Gemini CLI, Antigravity, Cursor.

## So với tool khác

| | CC WF Studio | Vibe Kanban | drawio-skill |
|--|--------------|-------------|--------------|
| Shape | Canvas → skill/md export | Kanban run agents | Draw.io agent skill |
| MCP + CLI | ✅ | ✅ MCP | CLI skill |
| Tags | `skill` `mcp` `workflow` | `coding-agent` `workflow` | `skill` `diagram` |

## Dùng với Odoo / ai_core

- Chuẩn hóa multi-step agent Odoo (test → migrate → review) thành skill Cursor/Claude.  
- AGPL cho extension; MIT libs npm khi embed.  
- Không thay EpicStaff/Hermes runtime trong Odoo.

## Link

- Repo: https://github.com/breaking-brake/cc-wf-studio · Open VSX / Marketplace  
- Peers: [vibe-kanban.md](vibe-kanban.md) · [drawio-skill.md](drawio-skill.md) · [knowledge-work-plugins.md](knowledge-work-plugins.md) · [n8n-workflows.md](n8n-workflows.md)
