# Headroom

> **Repo:** [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)  
> **Category:** MCP & AI Agents · Context compression  
> **Tags:** `mcp` · `cli` · `agent` · `coding-agent` · `self-host`  
> **Ngôn ngữ:** Python CLI/SDK · TypeScript SDK · Rust crates · **⭐** ~59k · **License:** xem repo  
> Docs: [headroom-docs.vercel.app](https://headroom-docs.vercel.app) · Slogan: *The context compression layer for AI agents*

## Đây là gì?

**Headroom** nén **tool output, logs, file, RAG chunks, history** trước khi vào LLM — claim ~**60–95%** ít token cho JSON, ~**15–20%** cho coding agents, cùng câu trả lời. Chạy **local-first**; bản gốc reversible qua CCR + `headroom_retrieve`.

Ba lối vào: **library** (`compress()`), **proxy** (drop-in, zero code), **MCP** (`headroom_compress` / `retrieve` / `stats`). Có `headroom wrap` cho Claude Code, Cursor, Codex, OpenHands, …

**Cùng kiểu:** [Ponytail](ponytail.md) (YAGNI — ít code), [Caveman](caveman.md) (nén output), [CodeBurn](codeburn.md) (track spend), [FreeLLMAPI](../devtools/freellmapi.md) (LLM gateway).

## Dùng khi nào?

| Nhu cầu | Headroom |
|---------|----------|
| Cắt cost/context tràn cửa sổ | ✅ Content-aware compressors |
| Wrap coding agent 1 lệnh | ✅ `headroom wrap claude\|cursor\|…` |
| Proxy mọi HTTP LLM | ✅ `headroom proxy --port 8787` |
| MCP tools nén/retrieve | ✅ |
| Memory chung nhiều agent | ✅ Cross-agent store |
| YAGNI ruleset (ít code hơn) | → [Ponytail](ponytail.md) (không nén token) |

## Chạy thử

```bash
uv tool install "headroom-ai[all]"   # hoặc: pip install "headroom-ai[all]"
# npm: headroom-ai = TS SDK only (không CLI)

headroom wrap claude
headroom proxy --port 8787
headroom doctor && headroom perf
```

```python
from headroom import compress
# compress(messages) …
```

## So với tool khác

| | Headroom | Ponytail | dcg | PageIndex |
|--|----------|----------|-----|-----------|
| Việc | **Nén context** vào LLM | Viết **ít code** | Chặn lệnh nguy hiểm | RAG tree |
| Tags | `mcp` `cli` `agent` | `skill` `prompt` | `guardrail` | `rag` `mcp` |

## Dùng với Odoo / ai_core

- Proxy trước call LLM trong `xb_ai` / agent khi tool trả JSON Odoo lớn.  
- Wrap Cursor/Claude khi làm addon → bớt token log/test.  
- MCP: gắn `headroom_*` cạnh MCP RAG.

## Link

- Repo: https://github.com/headroomlabs-ai/headroom  
- Docs: https://headroom-docs.vercel.app  
- llms.txt: trong repo / site docs  
- Peers: [ponytail.md](ponytail.md) · [codeburn.md](codeburn.md) · [openhands.md](openhands.md) · [hermes-agent.md](hermes-agent.md) · [freellmapi.md](../devtools/freellmapi.md) · [tencentdb-agent-memory.md](tencentdb-agent-memory.md)
