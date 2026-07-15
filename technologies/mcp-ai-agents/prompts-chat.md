# prompts.chat

> **Repo:** [f/prompts.chat](https://github.com/f/prompts.chat)  
> **Category:** MCP & AI Agents  
> **Tags:** `prompt` · `mcp` · `cli` · `self-host`  
> **Ngôn ngữ:** TypeScript (Next.js) · **⭐** ~166k · **License:** MIT + CC0 (prompts)  
> **Site:** [prompts.chat](https://prompts.chat) · **f.k.a.** Awesome ChatGPT Prompts

## Đây là gì?

**prompts.chat** là thư viện prompt open-source lớn cho AI chat (ChatGPT, Claude, Gemini, Llama, Mistral…).

Xuất phát từ **Awesome ChatGPT Prompts** (Dec 2022) — curated examples cộng đồng, có thể **self-host** nội bộ (privacy). Không phải LLM hay agent runtime: là **catalog + nền tảng chia sẻ / tổ chức prompt**, kèm MCP, CLI, Claude plugin.

**Cùng kiểu:** [Prompt Optimizer](prompt-optimizer.md) (optimize/test/eval prompt), [NotebookLM MCP](notebooklm-mcp.md), [SAG](sag.md), [agent-skills.md](agent-skills.md)

## Dùng khi nào?

| Nhu cầu | prompts.chat |
|---------|----------------|
| Tìm prompt mẫu (role, CoT, domain…) | ✅ Browse web + CSV / HF dataset |
| Học prompt engineering | ✅ Interactive book (25+ chương) |
| Thư viện prompt riêng công ty | ✅ Self-host + branding + SSO |
| Agent / IDE lấy prompt | ✅ MCP server + Claude plugin + CLI |
| Optimize / A/B prompt có đo | → [Prompt Optimizer](prompt-optimizer.md) |
| Runtime chat / session agent | → Odoo `xb_ai` |

## Chạy thử

**MCP (remote):**

```json
{
  "mcpServers": {
    "prompts.chat": {
      "url": "https://prompts.chat/api/mcp"
    }
  }
}
```

**Local:** `npx -y prompts.chat mcp` · **CLI:** `npx prompts.chat` · Claude: `/plugin marketplace add f/prompts.chat`

```bash
npx prompts.chat new my-prompt-library
# hoặc clone + npm run setup; DB khuyến nghị PostgreSQL (Neon)
```

## So với tool khác

| | prompts.chat | Prompt trong Odoo `xb_ai` | LangSmith Hub |
|--|--------------|---------------------------|---------------|
| Cộng đồng / browse | ✅ Rất lớn | ❌ | Trung bình |
| Self-host privacy | ✅ | Nằm trong ERP | Cloud |
| MCP / CLI | ✅ | RPC nội bộ | SDK |
| Runtime chat | ❌ (chỉ thư viện) | ✅ Session agent | Eval / trace |

## Dùng với Odoo / ai_core

- **NotebookLM MCP** = tri thức có citation; prompts.chat = **mẫu prompt**.  
- **SAG / RAG** = retrieval doc; prompts.chat = instruction templates.  
- System prompt / few-shot lấy từ library nội bộ (self-host) hoặc MCP.

## Link

- Repo: https://github.com/f/prompts.chat  
- Browse: https://prompts.chat/prompts  
- Dataset: https://huggingface.co/datasets/fka/prompts.chat  
- Self-host: [SELF-HOSTING.md](https://github.com/f/prompts.chat/blob/main/SELF-HOSTING.md)
