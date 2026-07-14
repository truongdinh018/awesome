# QuiverAI

> **Loại:** Product / SaaS *(không tính ★ catalog)*  
> **Tags:** `image-gen` · `mcp` · `api` · `diagram`  
> Site: [quiver.ai](https://quiver.ai/) · Docs: [docs.quiver.ai](https://docs.quiver.ai/) · MCP: [app.quiver.ai/mcp](https://app.quiver.ai/mcp)

Cập nhật: **2026-07-15**

## Đây là gì?

**[QuiverAI](https://quiver.ai/)** — foundational model SaaS cho **vector design**: generate / edit / (sắp) animate **SVG** (logo, illustration, typography). API `https://api.quiver.ai/v1` (text→SVG, image→SVG) + **hosted MCP** cho coding agent. Seed a16z; core model **không** OSS — SDK/plugin public nhẹ ([quiverai-node](https://github.com/quiverai/quiverai-node), [cursor-plugin](https://github.com/quiverai/cursor-plugin)).

**Cùng kiểu catalog:** [ComfyUI](comfyui.md) / [SANA](sana.md) (raster self-host), [drawio-skill](drawio-skill.md) / [FossFLOW](fossflow.md) (diagram editable, không generative SVG cloud), [Taste Skill](taste-skill.md) (design taste cho agent).

## Dùng khi nào?

| Nhu cầu | QuiverAI |
|---------|----------|
| Logo / illustration **SVG production-ready** từ prompt | ✅ primary |
| Agent (Claude/Cursor) sinh SVG qua MCP | ✅ hosted MCP + OAuth |
| Diffusion self-host / node graph | → [ComfyUI](comfyui.md) |
| Diagram isometric / Draw.io bằng skill | → [FossFLOW](fossflow.md) / [drawio-skill](drawio-skill.md) |

## Chạy thử

```bash
# Claude Code — hosted MCP
claude mcp add --transport http quiverai https://app.quiver.ai/mcp

# Cursor — ~/.cursor/mcp.json hoặc project .cursor/mcp.json
# { "mcpServers": { "quiverai": { "url": "https://app.quiver.ai/mcp" } } }
```

API: `GET https://api.quiver.ai/v1/models` với `Authorization: Bearer <token>` — xem [docs](https://docs.quiver.ai/).

## So với tool khác

| | QuiverAI | ComfyUI | drawio-skill |
|--|----------|---------|--------------|
| Shape | Cloud SVG gen + MCP/API | Local diffusion graph | Skill → Draw.io XML |
| Format | Vector SVG | Raster (+ video) | Diagram |
| Count ★ catalog | ❌ bookmark | ✅ ★ | ✅ ★ |

## Dùng với Odoo / ai_core

- Asset brand / logo SVG cho module website — qua MCP trong coding agent, không pipeline Odoo sẵn.  
- Cần account QuiverAI (paid tiers). Không self-host model.

## Link

- Product: https://quiver.ai/ · Docs: https://docs.quiver.ai/ · MCP: https://docs.quiver.ai/app/mcp  
- Blog MCP: https://quiver.ai/blog/introducing-quiverai-mcp  
- SDK: https://github.com/quiverai/quiverai-node · Cursor plugin: https://github.com/quiverai/cursor-plugin  
- Peers: [comfyui.md](comfyui.md) · [sana.md](sana.md) · [drawio-skill.md](drawio-skill.md) · [fossflow.md](fossflow.md) · [taste-skill.md](taste-skill.md)
