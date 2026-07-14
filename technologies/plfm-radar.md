# PLFM RADAR (AERIS-10)

> **Repo:** [NawfalMotii79/PLFM_RADAR](https://github.com/NawfalMotii79/PLFM_RADAR)  
> **Category:** Computer Vision & Edge · Open hardware radar (không phải GIS)  
> **Tags:** `edge` · `iot` · `self-host`  
> **Ngôn ngữ:** Firmware · schematics · Python GUI · **⭐** ~22.8k  
> **License:** Hardware **CERN-OHL-P** · Software **MIT** · Status: Alpha / WIP  
> **PLFM** = *Pulse Linear Frequency Modulated* phased-array radar @ **10.5 GHz**

## Đây là gì?

**AERIS-10** (repo `PLFM_RADAR`) là hệ **radar mảng pha** OSS giá thấp: pulse LFM, beam steering điện tử ±45°, FPGA (pulse compression, Doppler FFT, MTI, CFAR), GPS/IMU, Python GUI có map.

Hai bản: **10N Nexus** ~3 km (8×16 patch) · **10E Extended** ~20 km (32×16 waveguide). Mục tiêu nghiên cứu / drone / SDR — **không** phải thư viện GIS (dù GUI tích hợp bản đồ).

**Cùng kiểu:** [ALPR](alpr.md), [TREK](trek.md), [VN Provinces](vietnamese-provinces-database.md)

## Dùng khi nào?

| Nhu cầu | AERIS-10 / PLFM_RADAR |
|---------|------------------------|
| Học / thử phased-array radar OSS | ✅ schematics + firmware |
| Detect/track mục tiêu RF | ✅ (alpha) |
| Bản đồ hành chính / GIS DB | → [vietnamese-provinces-database](vietnamese-provinces-database.md) |
| Biển số camera edge | → [ALPR](alpr.md) |

## Chạy thử

Full OSHW: power · freq synth · RF · FPGA processing.

**Radio law:** phát 10.5 GHz thường cần giấy phép — kiểm tra quy định địa phương.

## So với tool khác

| | PLFM RADAR | ALPR | VN Provinces |
|--|------------|------|--------------|
| Domain | mmWave / X-band radar HW | Camera plate OCR | Admin GIS data |
| Tags | `edge` `iot` | `cv` `edge` | `gis` |

## Dùng với Odoo / ai_core

- R&D sensing (drone site) — không gắn production ERP mặc định.  
- Ingest track events qua webhook nếu tự build bridge.  
- Tuân thủ luật tần số + an toàn.

## Link

- Repo: https://github.com/NawfalMotii79/PLFM_RADAR  
- Peers: [alpr.md](alpr.md) · [trek.md](trek.md) · [vietnamese-provinces-database.md](vietnamese-provinces-database.md)
