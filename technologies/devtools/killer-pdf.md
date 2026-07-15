# KillerPDF

> **Repo:** [SteveTheKiller/KillerPDF](https://github.com/SteveTheKiller/KillerPDF)  
> **Category:** DevTools · PDF editor native (Windows)  
> **Tags:** `pdf` · `ocr` · `desktop`  
> **Ngôn ngữ:** C# · PDFium · Tesseract · **⭐** ~3.1k · **License:** GPL-3.0  
> Site: [KillerPDF.net](https://KillerPDF.net)

## Đây là gì?

**KillerPDF** là **PDF editor desktop cho Windows** (10/11 x64): xem, annotate, sửa text, vẽ/highlight, merge/split, form fill, ký, print, flatten, mở PDF có mật khẩu — **local-only**, không subscription, không telemetry.

Một EXE portable ~15 MB (PDFium + Tesseract kèm sẵn). OCR trang/vùng → clipboard, “Make Searchable PDF”, extract text. Khác [Stirling-PDF](stirling-pdf.md): Stirling = web/self-host + API; KillerPDF = app native kiểu Acrobat mỏng, chỉ Windows.

**Cùng kiểu:** [Stirling-PDF](stirling-pdf.md) (PDF toolkit server), [STranslate](stranslate.md) (translate+OCR WPF), [LibreOffice harness](../cli-anything/libreoffice.md) (Office convert), [OpenResume](open-resume.md) (PDF CV chuyên biệt).

## Dùng khi nào?

| Nhu cầu | KillerPDF |
|---------|-----------|
| Sửa/annotate/ký PDF trên Windows, offline | ✅ |
| OCR scan local (không cloud) | ✅ Tesseract trong EXE |
| Merge / split / crop / rotate | ✅ |
| Batch API / multi-user server | → [Stirling-PDF](stirling-pdf.md) |
| PDF → Markdown cho RAG | → [MinerU](mineru.md) / [MarkItDown](markitdown.md) |
| Dịch + OCR screenshot Windows | → [STranslate](stranslate.md) |
| Linux / macOS native | ❌ Windows only |

## Chạy thử

```powershell
# WinGet / Chocolatey
winget install killerpdf
# choco install killerpdf

# Hoặc tải EXE portable
# https://github.com/SteveTheKiller/KillerPDF/releases/latest/download/KillerPDF.exe
```

Build: `git clone` → `dotnet publish -c Release` (SDK .NET 8+, target net48).

## So với tool khác

| | KillerPDF | Stirling-PDF | MinerU |
|--|-----------|--------------|--------|
| Shape | Native Win EXE | Self-host web + API | PDF→MD/JSON |
| OCR | Local Tesseract | ✅ server-side | Layout/VLM |
| Tags | `pdf` `ocr` `desktop` | `pdf` `ocr` `self-host` `api` | `ocr` `pdf` `cli` |

## Dùng với Odoo / ai_core

- Trên máy Windows: annotate/ký HĐ trước khi upload `ir.attachment`.  
- OCR nhanh 1 trang/scan rồi paste — không thay pipeline MinerU/Stirling server.  
- Giữ PII offline; không đưa bản flatten vào RAG nếu còn metadata nhạy cảm.

## Link

- Repo: https://github.com/SteveTheKiller/KillerPDF · Site: https://KillerPDF.net  
- Peers: [stirling-pdf.md](stirling-pdf.md) · [mineru.md](mineru.md) · [markitdown.md](markitdown.md) · [open-resume.md](open-resume.md) · [cli-anything/libreoffice.md](../cli-anything/libreoffice.md)
