# Google Workspace CLI

> **Repo:** [googleworkspace/cli](https://github.com/googleworkspace/cli)  
> **Category:** DevTools & Integration  
> **Ngôn ngữ:** Rust · **⭐** ~29k

## Tổng quan

**Google Workspace CLI** (`gws` hoặc tên binary theo repo) — **một công cụ dòng lệnh** cho toàn bộ Google Workspace:

- Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin…
- Được build **động** từ **Google Discovery Service** (API schema)
- Có **AI agent skills** — agent gọi CLI thay vì viết OAuth flow từ đầu

## Vấn đề giải quyết

| Trước | Với CLI |
|-------|---------|
| Mỗi API một SDK | Một entry point |
| Auth phức tạp | Flow chuẩn hóa |
| Agent khó tích hợp | Skill/command có sẵn |

## Ví dụ lệnh (khái niệm)

```bash
# Liệt kê file Drive (syntax xem README repo)
gws drive files list --page-size 10

# Tạo sự kiện Calendar
gws calendar events insert --calendar-id primary --json '{...}'
```

## Use case

- **RAG ingestion:** Export Google Docs → chunk → `ai_rag_core`
- **Agent automation:** Đọc email → tạo ticket Odoo
- **Reporting:** Sheets → pull data → Odoo BI
- **Backup:** Sync Drive folder định kỳ

## So sánh

| | gws CLI | Google Apps Script | Odoo Google modules |
|--|---------|-------------------|---------------------|
| Runtime | Local / CI | Google cloud | Trong Odoo |
| Agent | ✅ Skills | Hạn chế | Qua Odoo RPC |
| Discovery auto | ✅ | ❌ | Per-module |

## Bảo mật

- OAuth credentials — **không** commit vào repo
- Scope tối thiểu (least privilege)
- Service account cho server-to-server

## Liên quan ai_core

- MCP tool wrap `gws` commands
- `ai_agentic_tasks` workflow: email trigger → Odoo record
- Tham khảo pattern **CLI-as-tool** cho agent harness

## Link

- Repo: https://github.com/googleworkspace/cli
- Google Workspace APIs: https://developers.google.com/workspace
