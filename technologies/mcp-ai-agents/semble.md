# Semble

> **Repo:** [MinishLab/semble](https://github.com/MinishLab/semble)  
> **Category:** MCP & AI Agents · Code search for agents (token-efficient)  
> **Tags:** `mcp` · `cli` · `coding-agent` · `rag` · `self-host`  
> **Ngôn ngữ:** Python · **⭐** ~5.6k · **License:** MIT  
> Docs: [minish.ai/packages/semble](https://minish.ai/packages/semble/introduction/) · PyPI / `uv tool install semble`

## Đây là gì?

**Semble** là thư viện **code search** dành cho coding agents: hỏi NL (`"How is authentication handled?"`) → trả **snippet** đúng chỗ, claim **~98% ít token** hơn grep+read full file.

Index/query CPU-only (~250 ms index, ~1.5 ms query), không API key / GPU. Dùng **MCP**, CLI (`semble search`), hoặc sub-agent `semble-search` (Claude Code, Cursor, Codex, OpenCode…).

**Cùng kiểu:** [Headroom](headroom.md), [Understand Anything](understand-anything.md), [Caveman](caveman.md), [OpenHands](openhands.md)

## Dùng khi nào?

| Nhu cầu | Semble |
|---------|--------|
| Agent tìm code nhanh, ít token | ✅ primary |
| MCP / AGENTS.md / sub-agent install | ✅ `semble install` |
| Search remote git URL | ✅ |
| Nén mọi tool output (JSON/log) | → [Headroom](headroom.md) |
| Doc/tree RAG PDF | → [PageIndex](pageindex.md) / [RAGFlow](ragflow.md) |

## Chạy thử

```bash
uv tool install semble
semble install                    # MCP + AGENTS.md + sub-agent
# unattended:
semble install --agent claude --type mcp subagent --yes

semble search "authentication flow" ./my-project
semble search "save model" https://github.com/MinishLab/model2vec --top-k 10
semble find-related src/auth.py 42 ./my-project
semble savings
```

Ignore: `.gitignore` + `.sembleignore`. Cache: `~/.cache/semble/` (override `SEMBLE_CACHE_LOCATION`).

## So với tool khác

| | Semble | Headroom | Understand Anything |
|--|--------|----------|---------------------|
| Shape | Semantic code retrieve → snippets | Compress tool/context | Repo understanding skill |
| Token cut | Ít hơn grep+read | Nén payload vào LLM | Map / explain |
| Tags | `mcp` `cli` `rag` | `mcp` `cli` `agent` | `skill` `rag` `cli` |

## Dùng với Odoo / ai_core

- Cursor/Claude khi làm addon lớn: MCP Semble thay Grep rộng → bớt context.  
- CI/script: `semble search` trên path `addons/ai_core`.  
- Kết hợp Headroom nếu vẫn cần nén JSON Odoo sau tool khác.

## Link

- Repo: https://github.com/MinishLab/semble  
- Peers: [headroom.md](headroom.md) · [understand-anything.md](understand-anything.md) · [caveman.md](caveman.md) · [openhands.md](openhands.md) · [happy.md](happy.md)
