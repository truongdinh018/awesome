# COBE

> **Repo:** [shuding/cobe](https://github.com/shuding/cobe)  
> **Category:** DevTools · GIS / WebGL globe UI (không phải AI model)  
> **Tags:** `gis`  
> **Ngôn ngữ:** TypeScript · WebGL · **⭐** ~5.5k · **License:** MIT  
> Demo: [cobe.vercel.app](https://cobe.vercel.app) · `npm i cobe` · ~5KB · zero deps

## Đây là gì?

**COBE** — lib **WebGL globe** siêu nhẹ (~5KB): markers, arcs, CSS Anchor Positioning cho label bindable. High perf, không dependency. **Không** phải AI / map server — chỉ canvas globe cho landing/dashboard (kiểu GitHub globe).

**Cùng kiểu:** [TREK](trek.md) (trip map + MCP), [Vietnamese Provinces DB](vietnamese-provinces-database.md) (admin GIS data), [OSIRIS](../security/osiris.md) (OSINT map — domain khác), ArcGIS harness (GIS desktop).

## Dùng khi nào?

| Nhu cầu | COBE |
|---------|------|
| Globe WebGL nhẹ trên web (markers/arcs) | ✅ primary |
| Trip planner / GIS server | → [TREK](trek.md) / ArcGIS |
| Dữ liệu ranh giới VN | → [vietnamese-provinces-database](vietnamese-provinces-database.md) |
| AI agent map tools | → [TREK](trek.md) MCP |

## Chạy thử

```bash
npm i cobe
```

```js
import createGlobe from 'cobe'

const globe = createGlobe(canvas, {
  devicePixelRatio: 2,
  width: 1000,
  height: 1000,
  markers: [{ location: [21.0285, 105.8542], size: 0.05 }],
  arcs: [{ from: [21.0285, 105.8542], to: [40.7128, -74.006] }],
  onRender: (state) => { /* rotate phi… */ },
})
// globe.destroy()
```

Markers/arcs có `id` → CSS `--cobe-{id}` / visibility vars. Xem demo site.

## So với tool khác

| | COBE | TREK | VN Provinces |
|--|------|------|--------------|
| Shape | 5KB WebGL globe lib | Self-host trip + map MCP | SQL/GeoJSON admin |
| AI | ❌ | MCP tools | ❌ |
| Tags | `gis` | `gis` `mcp` | `gis` |

## Dùng với Odoo / ai_core

- Widget OWL/portal “presence worldwide” / CDN map decoration.  
- Không thay GIS phân tích hay OSP/OSINT stack.

## Link

- Repo: https://github.com/shuding/cobe · Demo: https://cobe.vercel.app  
- Peers: [trek.md](trek.md) · [vietnamese-provinces-database.md](vietnamese-provinces-database.md) · [osiris.md](../security/osiris.md) · [cli-anything/arcgis-pro.md](../cli-anything/arcgis-pro.md)
