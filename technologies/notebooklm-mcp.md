# NotebookLM MCP

> **Repo:** [PleasePrompto/notebooklm-mcp](https://github.com/PleasePrompto/notebooklm-mcp)  
> **Category:** MCP & AI Agents  
> **Tags:** `mcp` · `rag`  
> **Ngôn ngữ:** TypeScript · **⭐** ~3k

## Tổng quan

**NotebookLM MCP** là MCP server kết nối AI agent (Claude Code, Codex, Cursor…) với **Google NotebookLM**. Agent có thể research tài liệu đã upload vào NotebookLM và nhận câu trả lời **có trích dẫn** (grounded, citation-backed) từ Gemini — giảm hallucination so với hỏi model trực tiếp.

## Vấn đề giải quyết

| Vấn đề | Cách MCP xử lý |
|--------|----------------|
| Agent bịa tài liệu nội bộ | Trả lời dựa trên notebook đã upload |
| Không có citation | Trích dẫn nguồn từ NotebookLM |
| Auth phức tạp | Persistent auth, library management |
| Nhiều client | Cross-client sharing |

## Kiến trúc (khái niệm)

```
AI Agent (Claude/Cursor)
        │ MCP protocol
        ▼
notebooklm-mcp server
        │ API
        ▼
Google NotebookLM + Gemini
        │
        ▼
Tài liệu user đã upload (PDF, doc…)
```

## Use case

- **Research nội bộ:** Policy công ty, spec sản phẩm, tài liệu Odoo custom
- **Coding agent:** Tra cứu API doc đã nạp vào notebook
- **Zero hallucination (mục tiêu):** Chỉ trả lời trong phạm vi knowledge base

## So sánh nhanh

| | NotebookLM MCP | RAG tự host (ai_rag_core) |
|--|----------------|---------------------------|
| Hosting | Google NotebookLM | Self-hosted vector DB |
| Setup | MCP + auth Google | Embed + chunk + index |
| Citation | Built-in NotebookLM | Tùy pipeline |
| Privacy | Dữ liệu trên Google | Kiểm soát on-prem |

## Liên quan ai_core

- Pattern tương tự `ai_rag_core` + `xb_mcp` trong Odoo
- Có thể tham khảo flow **agent → MCP tool → grounded answer** khi thiết kế tool mới

## Link

- Repo: https://github.com/PleasePrompto/notebooklm-mcp
- MCP spec: https://modelcontextprotocol.io
