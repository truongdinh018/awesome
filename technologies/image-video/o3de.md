# O3DE (Open 3D Engine)

> **Repo:** [o3de/o3de](https://github.com/o3de/o3de)  
> **Category:** Image & Video · Multi-platform AAA 3D engine (games · sim · cinema)  
> **Tags:** `desktop` · `self-host`  
> **Ngôn ngữ:** C++ · Python · **⭐** ~9.5k · **License:** Apache-2.0 (+ MIT components — xem LICENSE*.TXT)  
> Site: [o3de.org](https://o3de.org) · Docs: [o3de.org/docs](https://o3de.org/docs/)

## Đây là gì?

**O3DE** (*Open 3D Engine*) là **engine 3D realtime** open-source (Linux Foundation / cộng đồng, gốc Amazon Lumberyard): game AAA, world cinema-quality, simulation fidelity cao — **không phí / không royalty thương mại**. Modular (Gems), Editor + Asset Processor, CMake / multi-platform.

Không phải AI generator — runtime/editor dựng thế giới 3D. Harness agent điều khiển: xem [Godot](../cli-anything/godot.md) / [Blender](../cli-anything/blender.md) (CLI-Anything); O3DE là **engine đầy đủ** cạnh Godot.

**Cùng kiểu:** [Godot harness](../cli-anything/godot.md), [Blender harness](../cli-anything/blender.md), [OpenToonz](opentoonz.md) (2D animation), [LingBot-Map](../cv-edge/lingbot-map.md) (3D reconstr. — khác engine).

## Dùng khi nào?

| Nhu cầu | O3DE |
|---------|------|
| Game / sim / 3D world OSS không royalty | ✅ primary |
| Editor + source engine (Git LFS) | ✅ |
| Agent CLI bọc engine nhẹ | → [Godot](../cli-anything/godot.md) |
| Offline modeling/render DCC | → [Blender](../cli-anything/blender.md) |
| Animation 2D xsheet | → [OpenToonz](opentoonz.md) |

## Chạy thử

```bash
git lfs install
git clone https://github.com/o3de/o3de.git
cd o3de
# Windows: cmake + VS — xem https://www.o3de.org/docs/welcome-guide/
# scripts\o3de.bat register --this-engine
# scripts\o3de.bat create-project --project-path <path>
```

Cần Git LFS, CMake ≥3.24, VS (Windows) / toolchain Linux-macOS theo System Requirements. Binary installer: [o3de.org](https://o3de.org).

## So với tool khác

| | O3DE | Godot (upstream) | Blender |
|--|------|------------------|---------|
| Shape | Full game/sim engine | Lightweight game engine | DCC / offline 3D |
| License | Apache-2.0 | MIT | GPL |
| Catalog peer | Engine ★ | Harness [godot.md](../cli-anything/godot.md) | Harness [blender.md](../cli-anything/blender.md) |

## Dùng với Odoo / ai_core

- Demo 3D / digital twin / training sim — ngoài stack Odoo (khác miền).  
- Asset pipeline nặng: tách GPU workstation; không nhồi vào Odoo host.  
- Agent coding chỉ hữu ích ở layer script/Gemini tooling — không thay Editor.

## Link

- Repo: https://github.com/o3de/o3de · Site: https://o3de.org  
- Peers: [godot.md](../cli-anything/godot.md) · [blender.md](../cli-anything/blender.md) · [opentoonz.md](opentoonz.md) · [lingbot-map.md](../cv-edge/lingbot-map.md)
