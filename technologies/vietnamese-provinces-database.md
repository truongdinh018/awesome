# Vietnamese Provinces Database

> **Repo:** [thanglequoc/vietnamese-provinces-database](https://github.com/thanglequoc/vietnamese-provinces-database)  
> **Category:** DevTools & Integration · Geo / địa chính VN  
> **Tags:** `gis`  
> **Ngôn ngữ:** SQL · JSON · Mongo · Redis · GeoJSON · **⭐** ~1.7k · **License:** MIT  
> Cập nhật theo nghị quyết/NQ mới nhất (vd. **30/2026/QH16** — **34 tỉnh/TP**, ~3321 xã/phường)

## Tổng quan

**vietnamese-provinces-database** — dataset **đơn vị hành chính Việt Nam** (không phải AI model): tỉnh/thành + xã/phường/đặc khu, kèm region/unit meta, tên EN, `code_name` slug, và **GIS** (GeoJSON / PostGIS / MySQL / SQL Server).

Nguồn gốc: API [danh mục ĐVHC NSO](https://danhmuchanhchinh.nso.gov.vn/); có pipeline generate trong repo → minh bạch, regenerate khi có nghị quyết mới. **Không affiliated** với Tổng cục Thống kê.

## Để làm gì?

| Nhu cầu | Dataset này |
|---------|-------------|
| Dropdown tỉnh → xã Odoo / web VN | ✅ SQL PostgreSQL/MySQL/… |
| Chuẩn hóa địa chỉ agent / RAG | ✅ `code` chính thức |
| Bản đồ ranh giới hành chính | ✅ GIS add-on |
| JSON / Redis cho app nhẹ | ✅ Non-SQL exports |
| LLM “biết” địa chính VN | Chỉ là **data** — không phải model |

## Schema chính

| Bảng | Nội dung |
|------|----------|
| `administrative_regions` | 8 vùng địa lý |
| `administrative_units` | Loại ĐVHC (TP TW, tỉnh, phường, xã, đặc khu…) |
| `provinces` | **34** ĐV cấp tỉnh (`code` PK chính phủ) |
| `wards` | Cấp xã (~3321), FK `province_code` |

## Cài nhanh (PostgreSQL)

```sql
CREATE DATABASE vietnamese_administrative_units;
-- chạy theo thứ tự trong postgresql/:
-- 1. CreateTable_vn_units.sql
-- 2. ImportData_vn_units.sql
```

GIS: xem `docs/gis/gis_readme.md`.

## So sánh catalog

| | VN Provinces DB | ArcGIS Pro harness | TREK |
|--|-----------------|--------------------|------|
| Vai trò | Master data ĐVHC VN | GIS CLI/MCP | Trip planner + map |
| Tags | `gis` | `gis` `mcp` `harness` | `gis` `mcp` … |

## Use case Odoo

- Replace hardcode địa chỉ; sync `res.country.state` / custom model tỉnh–xã sau sắp xếp 34 tỉnh.  
- Tool agent: validate `province_code` / `ward_code` trước tạo `res.partner`.  
- Map fleet / ALPR / TREK: join boundary GeoJSON.

## Link

- Repo: https://github.com/thanglequoc/vietnamese-provinces-database  
- Nguồn NSO API: https://danhmuchanhchinh.nso.gov.vn/  
- GIS peer: [cli-anything/arcgis-pro.md](cli-anything/arcgis-pro.md) · [trek.md](trek.md)
