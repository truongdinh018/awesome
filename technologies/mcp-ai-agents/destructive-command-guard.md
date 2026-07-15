# Destructive Command Guard (dcg)

> **Repo:** [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard)  
> **Category:** MCP & AI Agents · Chặn lệnh git/shell nguy hiểm cho agent  
> **Tags:** `guardrail` · `cli`  
> **Ngôn ngữ:** Rust · **⭐** ~3.6k

## Đây là gì?

**Destructive Command Guard (dcg)** chặn các lệnh **git** và **shell** nguy hiểm trước khi AI agent thực thi — lớp bảo vệ khi agent có quyền chạy terminal.

Agent coding (Claude Code, Cursor Agent, Codex…) có thể vô tình hoặc do prompt injection chạy `git push --force`, `git reset --hard`, `rm -rf /`, `DROP DATABASE`… **dcg** đứng giữa agent và shell, từ chối lệnh khớp rule nguy hiểm.

**Cùng kiểu:** [Agent Governance Toolkit](agent-governance-toolkit.md) (policy kernel đa ngôn ngữ), [Strix](../security/strix.md) (AppSec offensive).

## Dùng khi nào?

| Nhu cầu | dcg |
|---------|-----|
| Dev machine khi dùng AI agent full terminal access | ✅ |
| CI/CD wrapper cho autonomous coding loops | ✅ |
| Bổ sung hook/policy trong harness (ECC, Cursor hooks) | ✅ |
| Policy YAML cho mọi tool call | → [AGT](agent-governance-toolkit.md) |
| Chỉ sandbox container | Bổ sung, không đủ một mình |

## Chạy thử

**Cơ chế:**

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

- Repo: https://github.com/Dicklesworthstone/destructive_command_guard  
- **Khuyến nghị:** dcg + sandbox + approval cho lệnh production.

## So với tool khác

| | dcg | Human approval | Sandbox | AGT |
|--|-----|----------------|---------|-----|
| Tự động | Có | Không | Một phần | Có |
| Git-specific | Có | Tùy | Hạn chế | Một phần |
| Tool calls MCP | ❌ | Tùy | Một phần | ✅ intercept |
| Zero trust agent | Không đủ một mình | Cần kết hợp | Cần kết hợp | Bổ sung |

## Dùng với Odoo / ai_core

- `ai_agentic_workflow` có approval step — concept tương tự nhưng ở tầng business workflow.  
- Có thể cân nhắc rule tương tự cho MCP tools gọi `execute` trên Odoo.  
- Dev machine khi agent có quyền terminal đầy đủ.

## Link

- Repo: https://github.com/Dicklesworthstone/destructive_command_guard  
- Peers: [agent-governance-toolkit.md](agent-governance-toolkit.md)
