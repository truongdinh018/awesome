# FossFLOW

> **Repo:** [Abrar74774/FossFLOW](https://github.com/Abrar74774/FossFLOW)  
> **Category:** DevTools · Diagram · isometric infra (PWA)  
> **Tags:** `diagram` · `self-host`  
> **Ngôn ngữ:** TypeScript · React · **⭐** ~41 · **License:** MIT  
> Demo: [abrar74774.github.io/FossFLOW](https://abrar74774.github.io/FossFLOW/)  
> Tiếp nối [stan-smith/FossFLOW](https://github.com/stan-smith/FossFLOW) (isoflow fork; upstream khó truy cập)

## Đây là gì?

**FossFLOW** — PWA **vẽ sơ đồ isometric** (network/infra): drag node, connector multiplex, export/import JSON, offline; Docker self-host + optional HTTP basic auth. Lib npm `fossflow` + app. **Không** phải AI skill — editor người dùng; agent muốn NL→diagram → [drawio-skill](../mcp-ai-agents/drawio-skill.md).

**Cùng kiểu:** [drawio-skill](../mcp-ai-agents/drawio-skill.md) / [Draw.io harness](../cli-anything/drawio.md) (draw.io), [CC WF Studio](../mcp-ai-agents/cc-wf-studio.md) (canvas→skills), [n8n-workflows](n8n-workflows.md) (workflow visual — khác domain).

## Dùng khi nào?

| Nhu cầu | FossFLOW |
|---------|----------|
| Sơ đồ infra isometric đẹp, browser/PWA | ✅ primary |
| Self-host Docker + lưu server | ✅ |
| NL / IaC → `.drawio` bằng agent | → [drawio-skill](../mcp-ai-agents/drawio-skill.md) |
| Globe WebGL decoration | → [COBE](cobe.md) |

## Chạy thử

```bash
git clone https://github.com/Abrar74774/FossFLOW
cd FossFLOW && npm install && npm run build:lib && npm run dev
# http://localhost:3000

docker compose up
# hoặc: docker run -p 80:80 -v $(pwd)/diagrams:/data/diagrams stnsmith/fossflow:latest
```

Online demo: link GitHub Pages trong header repo.

## So với tool khác

| | FossFLOW | drawio-skill | Draw.io harness |
|--|----------|--------------|-----------------|
| Shape | Isometric PWA editor | Agent NL→draw.io | CLI harness |
| AI | ❌ | ✅ skill | harness |
| Tags | `diagram` `self-host` | `skill` `diagram` | `harness` `diagram` |

## Dùng với Odoo / ai_core

- Diagram kiến trúc Odoo/infra nội bộ (export JSON).  
- Không thay drawio-skill khi cần agent sinh sơ đồ tự động.

## Link

- Repo: https://github.com/Abrar74774/FossFLOW · Demo: https://abrar74774.github.io/FossFLOW/  
- Peers: [drawio-skill.md](../mcp-ai-agents/drawio-skill.md) · [cli-anything/drawio.md](../cli-anything/drawio.md) · [cc-wf-studio.md](../mcp-ai-agents/cc-wf-studio.md) · [cobe.md](cobe.md)
