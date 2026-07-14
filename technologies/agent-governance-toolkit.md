# Agent Governance Toolkit (AGT)

> **Repo:** [microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit)  
> **Category:** MCP & AI Agents · Policy / identity / sandbox cho agent production  
> **Tags:** `guardrail` · `security` · `agent` · `cli` · `mcp`  
> **Ngôn ngữ:** Python (+ TS / .NET / Rust / Go SDKs) · **⭐** ~4.9k · **License:** MIT  
> Docs: [microsoft.github.io/agent-governance-toolkit](https://microsoft.github.io/agent-governance-toolkit) · Status: Public Preview · OWASP Agentic Top 10 **10/10**

## Đây là gì?

**Agent Governance Toolkit (AGT)** là bộ công cụ mã nguồn mở của Microsoft để **ship agent production**: áp dụng **policy** (*policy enforcement*) một cách xác định trước khi gọi tool hoặc wire — không dựa vào prompt safety.

Bạn bọc tool bằng `govern(tool, policy=…)` → kết quả **allow** / **deny** / **require_approval** kèm log. Có policy YAML, tích hợp MCP (.NET), plugin Claude Code. SDKs: PyPI `agent-governance-toolkit`, npm `@microsoft/agent-governance-sdk`, NuGet, Rust, Go. Hỗ trợ zero-trust identity, execution sandbox, audit/SRE.

**Cùng kiểu:** [Destructive Command Guard](destructive-command-guard.md) (chặn shell/git hẹp), [Strix](strix.md) (agent AppSec offensive), [Headroom](headroom.md) (nén *context*), [Spec Kit](spec-kit.md) (quy trình SDD, không phải runtime policy).

## Dùng khi nào?

| Nhu cầu | AGT |
|---------|-----|
| Chặn tool nguy hiểm trước khi gọi | ✅ `govern()` + YAML |
| Multi-agent identity / audit trail | ✅ |
| MCP server có governance middleware | ✅ (.NET et al.) |
| Chỉ chặn rm/git force shell | → [dcg](destructive-command-guard.md) |
| Pentest app có RoE | → [Strix](strix.md) |

## Chạy thử

```bash
pip install agent-governance-toolkit[full]
# Claude Code:
# /plugin marketplace add microsoft/agent-governance-toolkit
# /plugin install agt-governance@agent-governance-toolkit
```

```python
from agentmesh.governance import govern
safe_tool = govern(my_tool, policy="policy.yaml")
```

Preview — API có thể breaking trước GA. Prefer `agent-governance-toolkit-core` / AGT 5 APIs cho host mới (README notes `agent_os` deprecation).

## So với tool khác

| | AGT | dcg | Strix |
|--|-----|-----|-------|
| Shape | Policy kernel multi-lang + identity | Shell/git filter | Offensive agent |
| Tool calls | ✅ intercept | ❌ | Attack surface |
| Tags | `guardrail` `security` `mcp` | `guardrail` `cli` | `security` `pentest` |

## Dùng với Odoo / ai_core

- Wrap tools Odoo/agent_router (mail.send, unlink, SQL) bằng policy YAML.  
- Audit deny/allow cho compliance.  
- Không thay RBAC Odoo — bổ sung lớp agent runtime.

## Link

- Repo: https://github.com/microsoft/agent-governance-toolkit  
- PyPI: https://pypi.org/project/agent-governance-toolkit/  
- Peers: [destructive-command-guard.md](destructive-command-guard.md) · [strix.md](strix.md) · [headroom.md](headroom.md) · [spec-kit.md](spec-kit.md)
