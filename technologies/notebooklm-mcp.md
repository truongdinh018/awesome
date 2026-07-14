# NotebookLM MCP

> **Repo:** [PleasePrompto/notebooklm-mcp](https://github.com/PleasePrompto/notebooklm-mcp)  
> **Category:** MCP & AI Agents  
> **Tags:** `mcp` · `rag`  
> **Ngôn ngữ:** TypeScript · **⭐** ~3k

## Đây là gì?

**NotebookLM MCP** là MCP server nối AI agent (Claude Code, Codex, Cursor…) với **Google NotebookLM**.

Agent có thể research tài liệu đã upload và nhận câu trả lời **có trích dẫn** (*grounded*, *citation-backed*) từ Gemini — giảm hallucination so với hỏi model trực tiếp. Có persistent auth, quản lý library, và chia sẻ cross-client.

**Cùng kiểu:** [open-notebook.md](open-notebook.md) *(OSS Notebook LM)* · [surfsense.md](surfsense.md) *(CI agents)* · [anything-llm.md](anything-llm.md) · [weknora.md](weknora.md)

## Dùng khi nào?

| Nhu cầu | NotebookLM MCP |
|---------|----------------|
| Agent trả lời dựa trên notebook đã upload | ✅ |
| Câu trả lời có citation | ✅ |
| RAG self-host, dữ liệu on-prem | → [open-notebook.md](open-notebook.md) / `ai_rag_core` |
| Research nội bộ policy / spec Odoo | ✅ |

## Chạy thử

Cài MCP server từ repo, cấu hình auth Google NotebookLM, rồi thêm vào client MCP (Cursor / Claude Code).

```
AI Agent → MCP protocol → notebooklm-mcp → Google NotebookLM + Gemini → tài liệu user upload
```

## So với tool khác

| | NotebookLM MCP | RAG tự host (ai_rag_core) |
|--|----------------|---------------------------|
| Hosting | Google NotebookLM | Self-hosted vector DB |
| Setup | MCP + auth Google | Embed + chunk + index |
| Citation | Built-in NotebookLM | Tùy pipeline |
| Privacy | Dữ liệu trên Google | Kiểm soát on-prem |

## Dùng với Odoo / ai_core

- Pattern tương tự `ai_rag_core` + `xb_mcp` — tham khảo flow **agent → MCP tool → grounded answer**.  
- Research policy công ty, spec sản phẩm, tài liệu Odoo custom.  
- Coding agent tra cứu API doc đã nạp vào notebook.

## Link

- Repo: https://github.com/PleasePrompto/notebooklm-mcp  
- MCP spec: https://modelcontextprotocol.io  
- Peers: [open-notebook.md](open-notebook.md) · [surfsense.md](surfsense.md) · [anything-llm.md](anything-llm.md) · [weknora.md](weknora.md)
