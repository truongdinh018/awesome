# Vietnamese Provinces Database

> **Repo:** [thanglequoc/vietnamese-provinces-database](https://github.com/thanglequoc/vietnamese-provinces-database)  
> **Category:** DevTools & Integration · Geo / địa chính VN  
> **Tags:** `gis`  
> **Ngôn ngữ:** SQL · JSON · Mongo · Redis · GeoJSON · **⭐** ~1.7k · **License:** MIT  
> Cập nhật theo nghị quyết/NQ mới nhất (vd. **30/2026/QH16** — **34 tỉnh/TP**, ~3321 xã/phường)

## Đây là gì?

**vietnamese-provinces-database** là dataset **đơn vị hành chính Việt Nam** (không phải AI model): tỉnh/thành + xã/phường/đặc khu, kèm region/unit meta, tên EN, `code_name` slug, và **GIS** (GeoJSON / PostGIS / MySQL / SQL Server).

Nguồn gốc: API [danh mục ĐVHC NSO](https://danhmuchanhchinh.nso.gov.vn/); có pipeline generate trong repo → minh bạch, regenerate khi có nghị quyết mới. **Không affiliated** với Tổng cục Thống kê.

**Cùng kiểu:** [ArcGIS Pro harness](../cli-anything/arcgis-pro.md) (GIS CLI/MCP), [TREK](trek.md) (trip planner + map).

## Dùng khi nào?

| Nhu cầu | Dataset này |
|---------|-------------|
| Dropdown tỉnh → xã Odoo / web VN | ✅ SQL PostgreSQL/MySQL/… |
| Chuẩn hóa địa chỉ agent / RAG | ✅ `code` chính thức |
| Bản đồ ranh giới hành chính | ✅ GIS add-on |
| JSON / Redis cho app nhẹ | ✅ Non-SQL exports |
| LLM "biết" địa chính VN | Chỉ là **data** — không phải model |

## Chạy thử

```sql
CREATE DATABASE vietnamese_administrative_units;
-- chạy theo thứ tự trong postgresql/:
-- 1. CreateTable_vn_units.sql
-- 2. ImportData_vn_units.sql
```

**Schema chính:** `administrative_regions` (8 vùng) · `administrative_units` (loại ĐVHC) · `provinces` (**34** tỉnh/TP) · `wards` (~3321 xã/phường). GIS: xem `docs/gis/gis_readme.md`.

## So với tool khác

| | VN Provinces DB | ArcGIS Pro harness | TREK |
|--|-----------------|--------------------|------|
| Vai trò | Master data ĐVHC VN | GIS CLI/MCP | Trip planner + map |
| Tags | `gis` | `gis` `mcp` `harness` | `gis` `mcp` … |

## Dùng với Odoo / ai_core

- Replace hardcode địa chỉ; sync `res.country.state` / custom model tỉnh–xã sau sắp xếp 34 tỉnh.  
- Tool agent: validate `province_code` / `ward_code` trước tạo `res.partner`.  
- Map fleet / ALPR / TREK: join boundary GeoJSON.

## Link

- Repo: https://github.com/thanglequoc/vietnamese-provinces-database  
- Nguồn NSO API: https://danhmuchanhchinh.nso.gov.vn/  
- Peers: [cli-anything/arcgis-pro.md](../cli-anything/arcgis-pro.md) · [trek.md](trek.md)
