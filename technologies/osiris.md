# OSIRIS

> **Repo:** [simplifaisoul/osiris](https://github.com/simplifaisoul/osiris)  
> **Category:** Security & Pentesting · Real-time OSINT / situational awareness dashboard  
> **Tags:** `security` · `gis` · `self-host` · `desktop` · `api`  
> **Ngôn ngữ:** TypeScript · Next.js · MapLibre GL · **⭐** ~6.8k · **License:** MIT  
> Demo: [osirisai.live](https://osirisai.live) · Slogan: *Open Source Intelligence & Reconnaissance Integrated System*

## Đây là gì?

**OSIRIS** là dashboard **OSINT** self-host: gom flight (OpenSky), maritime, CCTV (2k+), động đất (USGS), cháy (NASA FIRMS), thời tiết/không gian, news 24/7, conflict zones, Telegram public channels, crypto wallet + **OFAC SDN** vào **một bản đồ WebGL** (MapLibre).

Kèm **RECON toolkit**: port scan, DNS/WHOIS, SSL, IP intel, CVE (NVD), sanctions search. Định vị “Palantir-style” situational awareness — **không** phải AI pentest agent.

**Cùng kiểu:** [Strix](strix.md), [SurfSense](surfsense.md), [Horizon](horizon.md), [TREK](trek.md)

## Dùng khi nào?

| Nhu cầu | OSIRIS |
|---------|--------|
| Bản đồ đa lớp OSINT realtime | ✅ primary |
| RECON (scan/WHOIS/CVE/sanctions) | ✅ panel |
| AI pentest tự exploit PoC | → [Strix](strix.md) |
| RAG research / CI scrapers | → [SurfSense](surfsense.md) |

## Chạy thử

```bash
git clone https://github.com/simplifaisoul/osiris.git
cd osiris && npm install && npm run dev
# http://localhost:3000
```

Layers bật theo viewport; nhiều nguồn **không cần API key** (OpenSky, USGS, OpenSanctions cache…). Telegram: scrape `t.me/s/<channel>` (không Bot token).

## So với tool khác

| | OSIRIS | Strix | SurfSense |
|--|--------|-------|-----------|
| Shape | Map OSINT + RECON UI | AI pentest agent | CI + RAG/MCP |
| Map / GIS | ✅ WebGL multi-layer | ❌ | Connectors |
| Tags | `security` `gis` `self-host` | `security` `pentest` `agent` | `rag` `agent` `mcp` |

## Dùng với Odoo / ai_core

- Lab tình huống / monitoring công khai — **không** gắn mặc định production Odoo.  
- RECON chỉ trên target **được phép**; port scan / vuln = trách nhiệm pháp lý người chạy.  
- Có thể feed event vào notify ([ntfy](ntfy.md) / [zca-bridge](zca-bridge.md)) nếu tự pipe API routes.

## Link

- Repo: https://github.com/simplifaisoul/osiris · Live: https://osirisai.live  
- Peers: [strix.md](strix.md) · [surfsense.md](surfsense.md) · [horizon.md](horizon.md) · [trek.md](trek.md) · [magika.md](magika.md)
