# code-server

> **Repo:** [coder/code-server](https://github.com/coder/code-server)  
> **Category:** DevTools · VS Code trên trình duyệt  
> **Tags:** `self-host` · `browser` · `workspace` · `docker` · `coding-agent`  
> **Ngôn ngữ:** TypeScript · **⭐** ~78.9k · **License:** MIT  
> **Docs:** [coder.com/docs/code-server](https://coder.com/docs/code-server/latest) · Site: [coder.com](https://coder.com)

## Đây là gì?

**code-server** chạy **VS Code** trên máy chủ, mở bằng **trình duyệt**. Máy yếu (tablet, Chromebook) chỉ là client; compile/test/download chạy trên server — tiết kiệm pin, môi trường dev thống nhất.

Không phải coding agent: đây là **IDE remote**. Team lớn hơn thường lên [Coder](https://github.com/coder/coder) (workspace as a service). Extension VS Code (Continue, Cline…) cài được trên instance.

**Cùng kiểu:** [Continue](../mcp-ai-agents/continue.md) (agent trong VS Code), [Cline](../mcp-ai-agents/cline.md), [Nezha](../mcp-ai-agents/nezha.md) (IDE agent-first), [OpenHands](../mcp-ai-agents/openhands.md) (agent canvas self-host).

## Dùng khi nào?

| Nhu cầu | code-server |
|---------|-------------|
| VS Code trên VPS / GPU box, mở từ browser | ✅ |
| Dev thống nhất cho laptop mỏng / iPad | ✅ |
| Workspace team có policy, idle stop | → Coder (sản phẩm) |
| Agent tự sửa repo không cần IDE | → [OpenHands](../mcp-ai-agents/openhands.md) |
| Chỉ agent trong VS Code local | → [Continue](../mcp-ai-agents/continue.md) / [Cline](../mcp-ai-agents/cline.md) |

## Chạy thử

```bash
# Xem trước (không cài)
curl -fsSL https://code-server.dev/install.sh | sh -s -- --dry-run

curl -fsSL https://code-server.dev/install.sh | sh
# script in lệnh start; mặc định bind local + password
```

Yêu cầu tối thiểu (docs): Linux, WebSocket, ~1 GB RAM, 2 vCPU. Đọc [install](https://coder.com/docs/code-server/latest/install) trước khi `| sh`. Docker / systemd: xem docs.

## So với tool khác

| | code-server | Continue | OpenHands |
|--|-------------|----------|-----------|
| Vai trò | VS Code remote (browser) | Agent trong IDE | Agent platform |
| Cần browser | ✅ | ❌ (extension) | UI riêng |
| Tags | `self-host` `browser` `workspace` | `coding-agent` `mcp` | `coding-agent` `self-host` |

## Dùng với Odoo / ai_core

- Dev Odoo trên server: mở module Python trong code-server, không cần VS Code local.  
- Cài Continue/Cline trên code-server nếu muốn agent; khóa password + HTTPS + không expose 0.0.0.0.  
- Không thay runtime ai_core — chỉ môi trường soạn code.

## Link

- Repo: https://github.com/coder/code-server  
- Docs: https://coder.com/docs/code-server/latest  
- Peers: [continue.md](../mcp-ai-agents/continue.md) · [cline.md](../mcp-ai-agents/cline.md) · [openhands.md](../mcp-ai-agents/openhands.md)
