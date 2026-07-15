# Godot (CLI-Anything harness)

> **Parent:** [CLI-Anything](../mcp-ai-agents/cli-anything.md)  
> **Domain:** Image & Video · Game engine  
> **Tags:** `harness` · `game` · `cli`  
> **Type:** Agent-native CLI harness  
> **Path:** [`godot/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/godot/agent-harness)

## Đây là gì?

Harness **Godot Engine**: agent build/run project, export, demo-game E2E qua CLI — không thao tác editor bằng tay.

Là con của CLI-Anything — engine realtime 3D/2D, cạnh Blender (offline 3D) và Slay the Spire (game play automation).

**Cùng kiểu:** [O3DE](../image-video/o3de.md) (full AAA engine ★), [Blender](blender.md) (offline 3D), [Slay the Spire II](slay-the-spire-ii.md) (game play CLI).

## Dùng khi nào?

| Nhu cầu | Godot harness |
|---------|---------------|
| Project scaffold / run headless | ✅ |
| Export build | ✅ |
| Pipeline demo E2E (theo harness tests) | ✅ |
| Vision click editor UI | → [Midscene](../ui-automation/midscene.md) |

## Chạy thử

```bash
# Harness: https://github.com/HKUDS/CLI-Anything/tree/main/godot/agent-harness
# Cần Godot Engine cài local
```

## So với tool khác

| | Godot harness | Blender harness | Slay harness |
|--|---------------|-----------------|--------------|
| Domain | Realtime game engine | Offline 3D render | Game play automation |
| Tags | `harness` `game` `cli` | `harness` `3d` `cli` | `harness` `game` `ui-automation` |

## Dùng với Odoo / ai_core

- Demo game / interactive training nội bộ.  
- E2E test game logic qua agent CLI.  
- Không gắn ERP — creative/education sidecar.

## Link

- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/godot/agent-harness  
- Upstream: https://godotengine.org  
- Cha: [cli-anything.md](../mcp-ai-agents/cli-anything.md)
