# GitReverse

> **Repo:** [filiksyos/gitreverse](https://github.com/filiksyos/gitreverse)  
> **Category:** MCP & AI Agents · Repo → synthetic vibe-coding prompt  
> **Tags:** `coding-agent` · `prompt` · `self-host`  
> **Ngôn ngữ:** TypeScript · Next.js 16 · **⭐** ~1.2k · **License:** (xem repo)  
> Site: [gitreverse.com](https://gitreverse.com)

## Đây là gì?

**GitReverse** — “reverse engineer” **public GitHub repo** thành **một user prompt tổng hợp** (kiểu paste vào Cursor / Claude Code / Codex để vibe-code lại project từ đầu). Lấy metadata + tree depth-1 + README → LLM viết prompt ngắn, conversational. Web app; URL shareable `/owner/repo`.

Khác [Gitingest](gitingest.md) (dump raw digest code): GitReverse = **prompt ý tưởng / spec giả** từ repo, không dump toàn bộ source.

**Cùng kiểu:** [Gitingest](gitingest.md), [Easy-Vibe](easy-vibe.md), [prompts.chat](prompts-chat.md), [AI Website Cloner](ai-website-cloner.md) (URL→code — chiều ngược: site, không GitHub→prompt).

## Dùng khi nào?

| Nhu cầu | GitReverse |
|---------|------------|
| Học / tái tạo vibe prompt từ repo mẫu | ✅ primary |
| Shareable `/owner/repo` reverse | ✅ |
| Full codebase → text cho RAG/LLM | → [Gitingest](gitingest.md) |
| Khóa vibe coding có curricula | → [Easy-Vibe](easy-vibe.md) |
| Clone UI website → Next | → [AI Website Cloner](ai-website-cloner.md) |

## Chạy thử

```bash
pnpm install
# .env.local: ít nhất 1 LLM key (Grok / OpenRouter / Azure / Google) — xem README
pnpm dev   # http://localhost:3000
```

Production: [gitreverse.com](https://gitreverse.com). Optional Supabase cache `/library`, `GITHUB_TOKEN` tăng rate limit.

## So với tool khác

| | GitReverse | Gitingest | Easy-Vibe |
|--|------------|-----------|-----------|
| Output | Synthetic user prompt | Raw repo digest | Course + playground |
| Shape | Next web + LLM | CLI/pip/web | Giáo trình |
| Tags | `prompt` `coding-agent` | `cli` `rag` | `skill` `prompt` |

## Dùng với Odoo / ai_core

- Tham khảo prompt style từ OSS stack (không clone license-blind).  
- Tôn trọng license/ToS repo nguồn; output là gợi ý — không bằng “original prompt” thật.  
- Không ingest pháp lý/prod secrets qua flow reverse.

## Link

- Repo: https://github.com/filiksyos/gitreverse · Site: https://gitreverse.com  
- Peers: [gitingest.md](gitingest.md) · [easy-vibe.md](easy-vibe.md) · [prompts-chat.md](prompts-chat.md) · [ai-website-cloner.md](ai-website-cloner.md) · [semble.md](semble.md)
