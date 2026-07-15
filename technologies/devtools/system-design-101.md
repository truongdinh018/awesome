# System Design 101

> **Repo:** [ByteByteGoHq/system-design-101](https://github.com/ByteByteGoHq/system-design-101)  
> **Category:** DevTools · System design visual knowledge base  
> **Tags:** `diagram` · `dataset`  
> **Ngôn ngữ:** Markdown · hình minh họa · **⭐** ~86k · **License:** xem repo (nội dung ByteByteGo)  
> Site: [bytebytego.com](https://bytebytego.com) · YouTube · Newsletter

## Đây là gì?

**System Design 101** (ByteByteGo) là kho **giải thích hệ thống phức tạp bằng hình + ngôn ngữ đơn giản**: API/web, load balancer, cache, DB, message queue, microservices, cloud (AWS…), interview system design.

Không phải runtime hay agent — là **tài liệu tham chiếu** (hàng trăm chủ đề link tới bytebytego.com/guides). Hữu ích khi ôn phỏng vấn, thiết kế kiến trúc, hoặc **bơm context** cho coding agent (RAG / đọc trước khi implement).

**Cùng kiểu:** [FossFLOW](fossflow.md) (diagram infra), [drawio-skill](../mcp-ai-agents/drawio-skill.md) (agent vẽ diagram), [n8n-workflows](n8n-workflows.md) (template catalog), [Easy-Vibe](../mcp-ai-agents/easy-vibe.md) (course vibe coding).

## Dùng khi nào?

| Nhu cầu | System Design 101 |
|---------|-------------------|
| Tra cứu nhanh pattern (LB, cache, MQ, CAP…) | ✅ primary |
| Ôn system design interview | ✅ |
| Context cho agent thiết kế service / scale | ✅ clone + RAG hoặc cite guide |
| Vẽ diagram từ NL trong agent | → [drawio-skill](../mcp-ai-agents/drawio-skill.md) / [FossFLOW](fossflow.md) |
| Spec → implement có workflow | → [Spec Kit](../mcp-ai-agents/spec-kit.md) |

## Chạy thử

```bash
git clone https://github.com/ByteByteGoHq/system-design-101.git
cd system-design-101
# Đọc README.md — mục lục link tới từng guide (API, DB, caching, messaging…)
```

Online: browse repo trên GitHub hoặc [bytebytego.com/guides](https://bytebytego.com/guides).

## So với tool khác

| | System Design 101 | FossFLOW | drawio-skill |
|--|-------------------|----------|--------------|
| Shape | Visual knowledge / cheat sheets | Isometric diagram PWA | Agent skill → draw.io |
| Tương tác | Đọc / link | Vẽ sơ đồ | NL → diagram |
| Tags | `diagram` `dataset` | `diagram` `self-host` | `skill` `diagram` |

## Dùng với Odoo / ai_core

- Agent thiết kế module scale (queue, cache, read replica) — cite pattern trước khi code.  
- Onboard dev mới vào stack Odoo + microservice phụ (RAG, MCP gateway).  
- Không thay tài liệu chính thức Odoo — dùng như **tham chiếu kiến trúc** chung.

## Link

- Repo: https://github.com/ByteByteGoHq/system-design-101 · Guides: https://bytebytego.com/guides  
- Peers: [fossflow.md](fossflow.md) · [drawio-skill.md](../mcp-ai-agents/drawio-skill.md) · [n8n-workflows.md](n8n-workflows.md) · [spec-kit.md](../mcp-ai-agents/spec-kit.md) · [easy-vibe.md](../mcp-ai-agents/easy-vibe.md)
