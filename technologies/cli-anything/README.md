# CLI-Anything — Harness con (ecosystem)

> **Cha:** [CLI-Anything](../cli-anything.md) (`HKUDS/CLI-Anything`)  
> Các bài dưới đây **không phải** star riêng — là **agent-native CLI harness** trong monorepo / CLI-Hub.  
> Tags: luôn có `harness` (+ `cli`); domain tags theo capability ngang.

## Đây là gì?

**CLI-Anything harness** là lớp **agent-native CLI** bọc quanh app desktop (Blender, FreeCAD, n8n, Obsidian…): agent gọi lệnh có cấu trúc + `SKILL.md` thay vì click UI hoặc tự wrap API.

Monorepo `HKUDS/CLI-Anything` chứa nhiều harness con — mỗi con có bài riêng trong thư mục này. **ComfyUI ★** có bài star riêng; harness ComfyUI chỉ mô tả lớp agent CLI.

**Cùng kiểu:** [CLI-Anything](../cli-anything.md) (cha), [drawio-skill](../drawio-skill.md) (skill NL→diagram, không qua CLI-Hub).

## Dùng khi nào?

| Nhu cầu | Harness gợi ý |
|---------|----------------|
| Agent điều khiển Blender / FreeCAD / Godot | [blender.md](blender.md) · [freecad.md](freecad.md) · [godot.md](godot.md) |
| Workflow automation n8n qua CLI | [n8n.md](n8n.md) |
| Vault Obsidian / RAG local | [obsidian.md](obsidian.md) |
| Office convert headless | [libreoffice.md](libreoffice.md) |
| Diagram / GIS / video caption | [drawio.md](drawio.md) · [arcgis-pro.md](arcgis-pro.md) · [videocaptioner.md](videocaptioner.md) |
| Image gen diffusion | [comfyui.md](comfyui.md) → [ComfyUI ★](../comfyui.md) |
| Demo game automation | [slay-the-spire-ii.md](slay-the-spire-ii.md) |

## Chạy thử

```bash
# Cài harness qua CLI-Hub (xem docs cha)
# Hub: https://clianything.cc/
# Repo: https://github.com/HKUDS/CLI-Anything
```

Mỗi harness có path riêng trong monorepo — xem bài con tương ứng.

## So với tool khác

| | CLI-Anything harness | Midscene | drawio-skill |
|--|----------------------|----------|--------------|
| Cách điều khiển | CLI có cấu trúc | Vision screenshot | Agent Skill NL |
| Surface | App cụ thể (Blender, n8n…) | Web/mobile/desktop | Draw.io |
| Tags | `harness` `cli` | `computer-use` `skill` | `skill` `diagram` |

## Dùng với Odoo / ai_core

- Preprocess attachment (LibreOffice) trước `ai_rag_core` ingest.  
- Sequence diagram (Draw.io) luồng approval trước khi viết spec.  
- n8n harness bổ sung `ai_agentic_workflow` — runtime ngoài ERP.

## Link

- Cha: [cli-anything.md](../cli-anything.md)  
- Repo: https://github.com/HKUDS/CLI-Anything  
- Hub: https://clianything.cc/  
- Index harness: [freecad.md](freecad.md) · [blender.md](blender.md) · [drawio.md](drawio.md) · [n8n.md](n8n.md) · [obsidian.md](obsidian.md) · [comfyui.md](comfyui.md)
