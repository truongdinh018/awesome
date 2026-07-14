# HackingTool

> **Repo:** [Z4nzu/hackingtool](https://github.com/Z4nzu/hackingtool)  
> **Category:** Security & Pentesting · All-in-one tool menu (classic)  
> **Tags:** `security` · `pentest` · `cli` · `self-host`  
> **Ngôn ngữ:** Python 3.10+ · Linux/macOS · Docker · **⭐** ~78.3k · **License:** MIT  
> Đối tượng README: security researchers & pentesters

## Đây là gì?

**HackingTool** là **menu CLI all-in-one** gom ~185+ tool bảo mật/pentest quen thuộc (recon, web, AD, cloud, mobile, forensics…) — tìm `/`, lọc tag, recommend theo nhu cầu, cài/cập nhật từng tool hoặc theo category. Docker build local. **Không phải AI agent** (không tự exploit như Strix): chỉ là **launcher/catalog** cho bộ công cụ đã có.

**Cùng kiểu:** [Strix](strix.md) (AI pentest agent), [OSIRIS](osiris.md) (OSINT map + RECON UI), [Magika](magika.md) (file-type).

## Dùng khi nào?

| Nhu cầu | HackingTool |
|---------|-------------|
| Hub cài nhanh nhiều tool lab/CTF trên Linux | ✅ primary |
| Menu tìm tool theo tag (osint, web, cloud…) | ✅ |
| AI agent tự recon→PoC có RoE | → [Strix](strix.md) |
| Dashboard OSINT bản đồ | → [OSIRIS](osiris.md) |

**Cảnh báo pháp lý:** Chỉ dùng trên hệ thống **bạn sở hữu** hoặc có **ủy quyền viết (RoE)**. Lạm dụng = trách nhiệm người dùng. Catalog không hướng dẫn tấn công trái phép.

## Chạy thử

```bash
# Official one-liner (đọc script trước khi | sudo bash)
curl -sSL https://raw.githubusercontent.com/Z4nzu/hackingtool/master/install.sh | sudo bash
```

Hoặc clone repo → chạy theo README (Python 3.10+). Ưu tiên **lab VM / container** tách biệt; không cài mù trên máy prod.

Trong menu: `/` search · `t` tags · `r` recommend · `?` help.

## So với tool khác

| | HackingTool | Strix | OSIRIS |
|--|-------------|-------|--------|
| Shape | Menu cài/chạy tool cổ điển | AI pentest agent | OSINT map + RECON |
| AI/LLM | ❌ | ✅ | ❌ (phần lớn) |
| Tags | `security` `pentest` `cli` | `security` `pentest` `agent` | `security` `gis` |

## Dùng với Odoo / ai_core

- Không gắn pipeline agent mặc định.  
- AppSec Odoo/module: ưu tiên [Strix](strix.md) / SAST-CI có RoE; HackingTool chỉ nếu team cần lab toolbelt riêng.  
- Không đưa tool offensive vào container production.

## Link

- Repo: https://github.com/Z4nzu/hackingtool  
- Peers: [strix.md](strix.md) · [osiris.md](osiris.md) · [magika.md](magika.md) · [agent-governance-toolkit.md](agent-governance-toolkit.md)
