# n8n Workflows (Zie619)

> **Repo:** [Zie619/n8n-workflows](https://github.com/Zie619/n8n-workflows)  
> **Category:** DevTools · Workflow template catalog  
> **Tags:** `workflow` · `self-host` · `dataset`  
> **Ngôn ngữ:** Python · **⭐** ~55.7k · **License:** MIT  
> **Browse:** [zie619.github.io/n8n-workflows](https://zie619.github.io/n8n-workflows)

## Đây là gì?

**n8n Workflow Collection** là kho **~4,3k workflow JSON** production-ready (365+ integrations, 15 categories), gom từ community + site n8n. Có UI search (SQLite FTS5), GitHub Pages browse, Docker, import thẳng vào instance n8n.

Không thay [n8n harness](../cli-anything/n8n.md) / upstream [n8n-io/n8n](https://github.com/n8n-io/n8n) — đây là **dataset templates**. Peer: [Horizon](horizon.md) (news pipeline), [zca-bridge](zca-bridge.md) / [EpicStaff](../mcp-ai-agents/epicstaff.md) (orchestration khác stack).

## Dùng khi nào?

| Nhu cầu | Zie619/n8n-workflows |
|---------|----------------------|
| Tìm / tải JSON workflow mẫu | ✅ Search + download |
| Self-host browser catalog | ✅ `python run.py` |
| Agent CLI điều khiển n8n | → [n8n harness](../cli-anything/n8n.md) |
| Runtime automation | → n8n-io/n8n |

## Chạy thử

```bash
git clone https://github.com/Zie619/n8n-workflows.git
cd n8n-workflows && pip install -r requirements.txt
python run.py
# → http://localhost:8000
```

Online: https://zie619.github.io/n8n-workflows — audit credentials trước khi production-import.

## So với tool khác

| | n8n-workflows | n8n harness | n8n-io/n8n |
|--|---------------|-------------|------------|
| Shape | Template catalog | Agent CLI | Workflow engine |
| Tags | `workflow` `dataset` | `harness` `workflow` | (upstream) |

## Dùng với Odoo / ai_core

- Seed automation (webhook → LLM → notify) song song Odoo.  
- Review/template cho `ai_agentic_workflow` / Automation Studio.  
- Scrub secrets trong JSON trước deploy.

## Link

- Repo: https://github.com/Zie619/n8n-workflows · Pages: https://zie619.github.io/n8n-workflows  
- Peers: [cli-anything/n8n.md](../cli-anything/n8n.md) · [horizon.md](horizon.md) · [zca-bridge.md](zca-bridge.md) · [epicstaff.md](../mcp-ai-agents/epicstaff.md)
