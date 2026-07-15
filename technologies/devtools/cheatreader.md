# CheatReader

> **Repo:** [yaoyao2mm/cheatreader](https://github.com/yaoyao2mm/cheatreader)  
> **Category:** DevTools · Floating desktop reader (transparent)  
> **Tags:** `desktop` · `workspace` · `pdf`  
> **Ngôn ngữ:** Dart · Flutter · **⭐** ~533 · **License:** Non-Commercial (xem LICENSE repo — không MIT/GPL)  
> macOS / Windows / Linux

## Đây là gì?

**CheatReader** là app **đọc sách nổi** trên desktop: cửa sổ nhỏ góc màn hình, chế độ **transparent text-only** (chỉ chữ, nền trong suốt) để đọc song song khi code — không chiếm full màn hình như app đọc truyền thống.

Hỗ trợ `txt`, `epub`, `html`, `md`, `fb2`, `docx`, `pdf` (text layer; PDF scan kém). Jump line/page/%, search, font tùy chỉnh, “boss key” ẩn/hiện giữ vị trí đọc. **Chỉ file local** — không import URL/web (README nhấn mạnh bản quyền). Không phải AI.

**Cùng kiểu:** [FluentFlyout](fluent-flyout.md) / [WSL Dashboard](wsl-dashboard.md) (desktop utility), [KillerPDF](killer-pdf.md) (PDF edit — khác đọc floating), [Folo](folo.md) (feed reader — khác miền).

## Dùng khi nào?

| Nhu cầu | CheatReader |
|---------|-------------|
| Đọc sách/docs góc màn hình khi làm việc | ✅ |
| Overlay trong suốt, boss-key | ✅ |
| EPUB/MD/DOCX/PDF text local | ✅ |
| Import sách từ web/URL | ❌ không hỗ trợ (cố ý) |
| Sửa/annotate PDF | → [KillerPDF](killer-pdf.md) / [Stirling-PDF](stirling-pdf.md) |

## Chạy thử

```bash
# Releases: macOS / Windows / Linux
# https://github.com/yaoyao2mm/cheatreader/releases

# macOS unsigned: gỡ quarantine
xattr -dr com.apple.quarantine /Applications/cheatreader.app

# Dev
flutter pub get && flutter run -d macos   # hoặc windows / linux
cheatreader --reset-display               # reset layout cửa sổ
```

## So với tool khác

| | CheatReader | KillerPDF | FluentFlyout |
|--|-------------|-----------|--------------|
| Niche | Floating reader overlay | PDF editor Win | Media flyout Win11 |
| AI | ❌ | ❌ | ❌ |
| License | Non-commercial | GPL-3.0 | GPL-3.0 |

## Dùng với Odoo / ai_core

- Giữ tài liệu/spec (MD/PDF text) nổi cạnh Cursor khi code Odoo.  
- Không dùng cho nội dung có bản quyền trái phép — chỉ file bạn có quyền.  
- License non-commercial: không đóng gói bán / SaaS từ fork mà không xin phép.

## Link

- Repo: https://github.com/yaoyao2mm/cheatreader  
- Peers: [fluent-flyout.md](fluent-flyout.md) · [killer-pdf.md](killer-pdf.md) · [wsl-dashboard.md](wsl-dashboard.md) · [folo.md](folo.md)
