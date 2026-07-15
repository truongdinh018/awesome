# Obsidian (CLI-Anything harness)

> **Parent:** [CLI-Anything](../mcp-ai-agents/cli-anything.md)  
> **Domain:** MCP & AI Agents · Knowledge  
> **Tags:** `harness` · `rag` · `cli`  
> **Type:** Agent-native CLI harness  
> **Path:** [`obsidian/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/obsidian/agent-harness)

## Đây là gì?

Harness **Obsidian** (Local REST API): agent đọc/ghi vault, search, note workflow — knowledge management agent-native (persistent memory patterns).

Là con của CLI-Anything — vault bên ngoài Odoo, agent CRUD notes qua CLI.

**Cùng kiểu:** [NotebookLM MCP](../mcp-ai-agents/notebooklm-mcp.md), [SAG](../mcp-ai-agents/sag.md), [Khoj](../mcp-ai-agents/khoj.md) (tri thức cho agent).

## Dùng khi nào?

| Nhu cầu | Obsidian harness |
|---------|------------------|
| Agent CRUD notes / folders | ✅ |
| Search nội dung vault | ✅ |
| Workflow gắn skill agent | ✅ |
| RAG enterprise full platform | → [WeKnora](../mcp-ai-agents/weknora.md) |

## Chạy thử

```bash
# Harness: https://github.com/HKUDS/CLI-Anything/tree/main/obsidian/agent-harness
# Cần Obsidian + Local REST API plugin
```

## So với tool khác

| | Obsidian harness | WeKnora | SAG |
|--|------------------|---------|-----|
| Storage | Local vault Markdown | Full KB platform | Graph event RAG |
| Tags | `harness` `rag` `cli` | `rag` `agent` `mcp` | `rag` `mcp` |

## Dùng với Odoo / ai_core

- Song song RAG / agent memory — vault bên ngoài Odoo.  
- Handoff notes agent → vault trước khi commit code.  
- Không thay `ai_rag_core` — personal/team knowledge layer.

## Link

- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/obsidian/agent-harness  
- Upstream: https://obsidian.md  
- Cha: [cli-anything.md](../mcp-ai-agents/cli-anything.md)
