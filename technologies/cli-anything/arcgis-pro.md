# ArcGIS Pro (CLI-Anything harness)

> **Parent:** [CLI-Anything](../cli-anything.md)  
> **Domain:** DevTools & Integration · GIS  
> **Tags:** `harness` · `gis` · `mcp` · `cli`  
> **Type:** Agent-native CLI + MCP bridge  
> **Ghi chú:** Đề xuất / registry (Windows · ArcPy) — cartography, geoprocessing, live Pro MCP

## Đây là gì?

Harness **ArcGIS Pro**: agent làm bản đồ, geoprocessing, chỉnh feature — CLI kèm **MCP bridge** để điều khiển Pro live (demo cartography).

Chạy trên Windows với ArcPy. Không nhầm [ALPR](../alpr.md) (edge plate CV) — đây là GIS desktop authoring.

**Cùng kiểu:** [Vietnamese Provinces Database](../vietnamese-provinces-database.md) (master data ĐVHC VN), [TREK](../trek.md) (trip planner + map).

## Dùng khi nào?

| Nhu cầu | ArcGIS Pro harness |
|---------|---------------------|
| Cartography / map authoring | ✅ |
| Geoprocessing pipelines | ✅ |
| Feature edit qua ArcPy-style surface | ✅ |
| MCP bridge ↔ AI agent | ✅ |
| Edge plate OCR Jetson | → [ALPR](../alpr.md) |

## Chạy thử

```bash
# Registry: https://github.com/HKUDS/CLI-Anything
# Hub: https://clianything.cc/
# Yêu cầu: ArcGIS Pro trên Windows
```

## So với tool khác

| | ArcGIS harness | VN Provinces DB | TREK |
|--|----------------|-----------------|------|
| Vai trò | GIS CLI/MCP authoring | Master data ĐVHC | Trip planner |
| Tags | `harness` `gis` `mcp` `cli` | `gis` | `gis` `mcp` |

## Dùng với Odoo / ai_core

- Map fleet / boundary join GeoJSON từ [vietnamese-provinces-database](../vietnamese-provinces-database.md).  
- MCP tool schema cho agent GIS — pattern giống `xb_mcp`.  
- Chỉ Windows + license ArcGIS Pro.

## Link

- Parent / registry: https://github.com/HKUDS/CLI-Anything  
- Hub: https://clianything.cc/  
- Peers: [vietnamese-provinces-database.md](../vietnamese-provinces-database.md) · [trek.md](../trek.md)
