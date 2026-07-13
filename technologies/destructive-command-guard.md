# Destructive Command Guard (dcg)

> **Repo:** [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard)  
> **Category:** MCP & AI Agents  
> **Ngôn ngữ:** Rust · **⭐** ~3.6k

## Tổng quan

**Destructive Command Guard (dcg)** chặn các lệnh **git** và **shell** nguy hiểm trước khi AI agent thực thi — lớp bảo vệ khi agent có quyền chạy terminal.

## Vấn đề giải quyết

Agent coding (Claude Code, Cursor Agent, Codex…) có thể vô tình hoặc do prompt injection chạy:

- `git push --force`, `git reset --hard`
- `rm -rf /`, `DROP DATABASE`
- Lệnh phá hoại repo / production

**dcg** đứng giữa agent và shell, từ chối lệnh khớp rule nguy hiểm.

## Cơ chế

```
Agent đề xuất lệnh
        │
        ▼
dcg (Rust) — pattern matching / rules
        │
   ┌────┴────┐
   ▼         ▼
 ALLOW     BLOCK + log
```

## Use case

- Dev machine khi dùng AI agent full terminal access
- CI/CD wrapper cho autonomous coding loops
- Bổ sung cho hook/policy trong harness (ECC, Cursor hooks)

## So sánh

| | dcg | Human approval | Sandbox |
|--|-----|----------------|---------|
| Tự động | Có | Không | Một phần |
| Git-specific | Có | Tùy | Hạn chế |
| Zero trust agent | Không đủ một mình | Cần kết hợp | Cần kết hợp |

**Khuyến nghị:** dcg + sandbox + approval cho lệnh production.

## Liên quan ai_core

- `ai_agentic_workflow` có approval step — concept tương tự nhưng ở tầng business workflow
- Có thể cân nhắc rule tương tự cho MCP tools gọi `execute` trên Odoo

## Link

- Repo: https://github.com/Dicklesworthstone/destructive_command_guard
