# Google Workspace CLI

> **Repo:** [googleworkspace/cli](https://github.com/googleworkspace/cli)  
> **Category:** DevTools & Integration  
> **Tags:** `cli` · `workspace` · `skill` · `office`  
> **Ngôn ngữ:** Rust · **⭐** ~29k

## Đây là gì?

**Google Workspace CLI** (`gws` hoặc tên binary theo repo) là **một công cụ dòng lệnh** cho toàn bộ Google Workspace: Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin…

Được build **động** từ **Google Discovery Service** (API schema). Có **AI agent skills** — agent gọi CLI thay vì viết OAuth flow từ đầu.

**Cùng kiểu:** [OfficeCLI](officecli.md) (docx/xlsx/pptx local), [Knowledge Work Plugins](../mcp-ai-agents/knowledge-work-plugins.md) (role plugins Cowork), [Addy's Agent Skills](../mcp-ai-agents/agent-skills.md) (skills coding).

## Dùng khi nào?

| Nhu cầu | gws CLI |
|---------|---------|
| Một entry point cho nhiều Google API | ✅ |
| Auth flow chuẩn hóa | ✅ |
| Agent tích hợp qua skill/command | ✅ |
| Runtime trong Google cloud | → Google Apps Script |
| Tích hợp sâu trong Odoo ERP | → Odoo Google modules |

## Chạy thử

```bash
# Liệt kê file Drive (syntax xem README repo)
gws drive files list --page-size 10

# Tạo sự kiện Calendar
gws calendar events insert --calendar-id primary --json '{...}'
```

OAuth credentials — **không** commit vào repo. Scope tối thiểu (*least privilege*). Service account cho server-to-server.

## So với tool khác

| | gws CLI | Google Apps Script | Odoo Google modules |
|--|---------|-------------------|---------------------|
| Runtime | Local / CI | Google cloud | Trong Odoo |
| Agent | ✅ Skills | Hạn chế | Qua Odoo RPC |
| Discovery auto | ✅ | ❌ | Per-module |

## Dùng với Odoo / ai_core

- RAG ingestion: Export Google Docs → chunk → `ai_rag_core`.  
- Agent automation: Đọc email → tạo ticket Odoo.  
- MCP tool wrap `gws` commands; `ai_agentic_tasks` workflow: email trigger → Odoo record.

## Link

- Repo: https://github.com/googleworkspace/cli  
- Google Workspace APIs: https://developers.google.com/workspace  
- Peers: [officecli.md](officecli.md) · [knowledge-work-plugins.md](../mcp-ai-agents/knowledge-work-plugins.md) · [agent-skills.md](../mcp-ai-agents/agent-skills.md)
