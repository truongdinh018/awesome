# Gitingest

> **Repo:** [coderamp-labs/gitingest](https://github.com/coderamp-labs/gitingest)  
> **Category:** MCP & AI Agents · Repo → LLM prompt digest  
> **Tags:** `cli` · `coding-agent` · `rag` · `self-host`  
> **Ngôn ngữ:** Python · **⭐** ~15.1k · **License:** MIT  
> Site: [gitingest.com](https://gitingest.com) · Trick: `github.com` → `gitingest.com` trên URL

## Đây là gì?

**Gitingest** biến bất kỳ Git repo / thư mục thành **text digest** thân thiện LLM: cấu trúc file, size, token count.

Có CLI + Python package + web; optional `gitingest[server]` để self-host. Private repos qua GitHub PAT. Có Chrome/Firefox extension (repo riêng).

**Cùng kiểu:** [Semble](semble.md) (semantic code search MCP), [ghgrab](ghgrab.md) (TUI grab file/folder, không digest), [Understand Anything](understand-anything.md) (repo skill map), [Headroom](headroom.md) (nén context), [Hyper-Extract](hyper-extract.md) (text→graph).

## Dùng khi nào?

| Nhu cầu | Gitingest |
|---------|-----------|
| Dump codebase → 1 file prompt cho LLM | ✅ primary |
| CLI / pip / self-host web | ✅ |
| Semantic search snippet (ít token) | → [Semble](semble.md) |
| Nén tool output sau khi có context | → [Headroom](headroom.md) |

## Chạy thử

```bash
pip install gitingest          # hoặc: pipx install gitingest
gitingest /path/to/repo        # → digest.txt
gitingest https://github.com/coderamp-labs/gitingest
gitingest https://github.com/org/private --token "$GITHUB_TOKEN"
```

URL shortcut: `https://github.com/foo/bar` → `https://gitingest.com/foo/bar`.

## So với tool khác

| | Gitingest | Semble | Understand Anything |
|--|-----------|--------|---------------------|
| Shape | Full/partial text digest | Semantic retrieve snippets | Repo understanding skill |
| Output | Prompt blob + stats | Ranked chunks | Map / explain |
| Tags | `cli` `coding-agent` | `mcp` `rag` `cli` | `skill` `rag` `cli` |

## Dùng với Odoo / ai_core

- Ingest `addons/ai_core` (hoặc subtree) trước khi hỏi model ngoài Cursor khi cần full dump.  
- Cẩn trọng token limit — exclude `node_modules`/venv; Semble khi chỉ cần search.

## Link

- Repo: https://github.com/coderamp-labs/gitingest · Site: https://gitingest.com  
- Peers: [semble.md](semble.md) · [understand-anything.md](understand-anything.md) · [headroom.md](headroom.md) · [hyper-extract.md](hyper-extract.md)
