# CLI-Anything

> **Repo:** [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)  
> **Category:** MCP & AI Agents  
> **Tags:** `cli` · `harness` · `skill` · `agent`  
> **Ngôn ngữ:** Python · **⭐** ~45.3k · **License:** Apache-2.0  
> **Hub:** [clianything.cc](https://clianything.cc/)  
> **Con (harness):** [technologies/cli-anything/](cli-anything/README.md)

## Tổng quan

**CLI-Anything** (HKUDS) — **làm mọi phần mềm trở thành agent-native** qua CLI có cấu trúc, thay vì để agent “bấm UI” mù.

Slogan: *Today's software serves humans. Tomorrow's users will be agents.*

Hai lối vào chính:

1. **Dùng sẵn** — **CLI-Hub**: `pip install cli-anything-hub` → `cli-hub install <name>` — registry CLI cộng đồng.
2. **Tự sinh** — plugin/skill trên agent (Claude Code, Cursor, Pi, OpenClaw, …) + **harness generator 7 pha** (`HARNESS.md`).

Mỗi CLI kèm **SKILL.md** để agent discover lệnh (`--help`, output JSON).

## Cây cha → con (catalog)

```
CLI-Anything ★  (MCP & AI Agents)
├── FreeCAD …………… Image & Video · CAD/3D
├── Blender …………… Image & Video · 3D
├── Draw.io …………… DevTools · Diagram
├── VideoCaptioner … Speech & Audio · Video
├── Slay the Spire II  UI Automation · Game
├── ArcGIS Pro ……… DevTools · GIS + MCP
├── ComfyUI harness … Image & Video  →  ComfyUI ★
├── Obsidian ……… MCP & AI Agents · Knowledge
├── n8n ……………… DevTools · Workflow
├── LibreOffice …… DevTools · Office
└── Godot …………… Image & Video · Game engine
```

Chi tiết từng harness: **[cli-anything/README.md](cli-anything/README.md)**

| Con | Domain | Bài |
|-----|--------|-----|
| FreeCAD | Image & Video · CAD | [freecad.md](cli-anything/freecad.md) |
| Blender | Image & Video | [blender.md](cli-anything/blender.md) |
| Draw.io | DevTools | [drawio.md](cli-anything/drawio.md) |
| VideoCaptioner | Speech · Video | [videocaptioner.md](cli-anything/videocaptioner.md) |
| Slay the Spire II | UI Automation | [slay-the-spire-ii.md](cli-anything/slay-the-spire-ii.md) |
| ArcGIS Pro | DevTools · GIS | [arcgis-pro.md](cli-anything/arcgis-pro.md) |
| ComfyUI harness | Image & Video | [comfyui.md](cli-anything/comfyui.md) → [ComfyUI ★](comfyui.md) |
| Obsidian | MCP & Agents | [obsidian.md](cli-anything/obsidian.md) |
| n8n | DevTools | [n8n.md](cli-anything/n8n.md) |
| LibreOffice | DevTools | [libreoffice.md](cli-anything/libreoffice.md) |
| Godot | Image & Video | [godot.md](cli-anything/godot.md) |

## Vì sao CLI (không phải GUI click)?

| Ưu điểm CLI cho agent | Ý nghĩa |
|----------------------|---------|
| Structured & composable | Text khớp LLM, chain workflow |
| Lightweight | Ít phụ thuộc, chạy cross-platform |
| Self-describing | `--help` = docs agent tự đọc |
| Deterministic | Ít flaky hơn computer-use bằng vision |
| JSON output | Parse ổn định |

## So với công nghệ trong catalog

| | CLI-Anything | Midscene | Google Workspace CLI |
|--|--------------|----------|----------------------|
| Cách điều khiển | CLI / harness sinh ra | Vision + NL trên screenshot | CLI domain cố định (GWS) |
| Mục tiêu | Agent-native hóa **mọi** app | Test / thao tác UI nhìn thấy | Drive, Gmail, Calendar… |
| Determinism | Cao | Thấp hơn | Cao |
| Catalog | ★ + cây con theo domain | ★ UI Automation | ★ DevTools |

## Use case

- Agent coding điều khiển CAD / design / GIS mà không cần Midscene  
- Chuẩn hóa “agent tool surface” cho stack nội bộ  
- Gắn Cursor / Claude Code / OpenClaw qua Skills  
- **Odoo / ai_core:** song song `xb_mcp` — expose capability có schema cho desktop/pro software

## Hạn chế

- Không phải mọi app đều scriptable — harness phức tạp / experimental  
- Sinh harness 7 pha tốn thời gian + cần review bảo mật  
- Không thay computer-use khi UI là nguồn sự thật duy nhất (→ Midscene / Slay Spire demo)

## Link

- Repo: https://github.com/HKUDS/CLI-Anything  
- CLI-Hub: https://clianything.cc/  
- Cài hub: `pip install cli-anything-hub`
