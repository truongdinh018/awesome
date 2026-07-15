# n8n (CLI-Anything harness)

> **Parent:** [CLI-Anything](../mcp-ai-agents/cli-anything.md)  
> **Domain:** DevTools & Integration · Workflow  
> **Tags:** `harness` · `workflow` · `cli`  
> **Type:** Agent-native CLI harness  
> **Path:** [`n8n/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/n8n/agent-harness)

## Đây là gì?

Harness **n8n** (self-host workflow automation): agent tạo/chạy/quản lý workflow qua CLI thay vì chỉ kéo node trên UI.

Là con của [CLI-Anything](../mcp-ai-agents/cli-anything.md) — expose lệnh có cấu trúc + skill cho coding agent.

**Cùng kiểu:** [n8n-workflows ★](../devtools/n8n-workflows.md) (workflow templates), [CLI-Anything](../mcp-ai-agents/cli-anything.md) (cha).

## Dùng khi nào?

| Nhu cầu | n8n harness |
|---------|-------------|
| Agent import / export / trigger workflow | ✅ |
| Kiểm tra execution qua CLI | ✅ |
| Tích hợp automation ngoài Odoo | ✅ |
| UI kéo node trực quan | → n8n web UI |

## Chạy thử

```bash
# Harness path trong monorepo CLI-Anything:
# https://github.com/HKUDS/CLI-Anything/tree/main/n8n/agent-harness
# Cài qua CLI-Hub — xem https://clianything.cc/
```

## So với tool khác

| | n8n harness | n8n UI | EpicStaff |
|--|-------------|--------|-----------|
| Điều khiển | Agent CLI | Drag-drop | Visual agent ops |
| Tags | `harness` `workflow` `cli` | `workflow` | `agent` `workflow` |

## Dùng với Odoo / ai_core

- Bổ sung `ai_agentic_workflow` / Automation Studio — n8n là runtime ngoài ERP.  
- Agent trigger workflow sau webhook Odoo.  
- Không thay Odoo automation rules — layer bên ngoài.

## Link

- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/n8n/agent-harness  
- Upstream: https://github.com/n8n-io/n8n  
- Cha: [cli-anything.md](../mcp-ai-agents/cli-anything.md)
