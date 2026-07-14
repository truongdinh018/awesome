# prompts.chat

> **Repo:** [f/prompts.chat](https://github.com/f/prompts.chat)  
> **Category:** MCP & AI Agents  
> **Tags:** `prompt` · `mcp` · `cli` · `self-host`  
> **Ngôn ngữ:** TypeScript (Next.js) · **⭐** ~166k · **License:** MIT + CC0 (prompts)  
> **Site:** [prompts.chat](https://prompts.chat) · **f.k.a.** Awesome ChatGPT Prompts

## Tổng quan

**prompts.chat** là thư viện prompt open-source lớn cho AI chat (ChatGPT, Claude, Gemini, Llama, Mistral…). Xuất phát từ **Awesome ChatGPT Prompts** (Dec 2022) — curated examples cộng đồng, có thể **self-host** nội bộ (privacy).

Không phải LLM hay agent runtime: là **catalog + nền tảng chia sẻ / tổ chức prompt**, kèm MCP, CLI, Claude plugin.

## Để làm gì?

| Nhu cầu | prompts.chat |
|---------|----------------|
| Tìm prompt mẫu (role, CoT, domain…) | ✅ Browse web + CSV / HF dataset |
| Học prompt engineering | ✅ Interactive book (25+ chương) |
| Thư viện prompt riêng công ty | ✅ Self-host + branding + SSO |
| Agent / IDE lấy prompt | ✅ MCP server + Claude plugin + CLI |

## Tích hợp agent

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

## Self-host nhanh

```bash
npx prompts.chat new my-prompt-library
# hoặc clone + npm run setup; DB khuyến nghị PostgreSQL (Neon)
```

## So sánh

| | prompts.chat | Prompt trong Odoo `xb_ai` | LangSmith Hub |
|--|--------------|---------------------------|---------------|
| Cộng đồng / browse | ✅ Rất lớn | ❌ | Trung bình |
| Self-host privacy | ✅ | Nằm trong ERP | Cloud |
| MCP / CLI | ✅ | RPC nội bộ | SDK |
| Runtime chat | ❌ (chỉ thư viện) | ✅ Session agent | Eval / trace |

## Quan hệ catalog / ai_core

| | Vai trò |
|--|---------|
| **NotebookLM MCP** | Tri thức có citation; prompts.chat = **mẫu prompt** |
| **SAG / RAG** | Retrieval doc; prompts.chat = instruction templates |
| **xb_ai Agents** | System prompt / few-shot lấy từ library nội bộ (self-host) hoặc MCP |

## Link

- Repo: https://github.com/f/prompts.chat  
- Browse: https://prompts.chat/prompts  
- Dataset: https://huggingface.co/datasets/fka/prompts.chat  
- Self-host: [SELF-HOSTING.md](https://github.com/f/prompts.chat/blob/main/SELF-HOSTING.md)
