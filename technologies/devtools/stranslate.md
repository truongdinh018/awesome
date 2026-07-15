# STranslate

> **Repo:** [STranslate/STranslate](https://github.com/STranslate/STranslate)  
> **Category:** DevTools · Documents · ready-to-go translate + OCR (Windows)  
> **Tags:** `ocr` · `desktop`  
> **Ngôn ngữ:** C# (WPF) · Rust · **⭐** ~7.5k · **License:** MIT  
> Site: [stranslate.zggsong.com](https://stranslate.zggsong.com) · Mirror: [Gitee](https://gitee.com/zggsong/STranslate)

## Đây là gì?

**STranslate** là app **Windows (WPF) tức dùng tức đi**: dịch thuật + OCR — chọn vùng / screenshot → nhận diện text → dịch, cấu hình nhiều backend dịch/OCR qua plugin. Tải Release, giải nén chạy; không phải pipeline VLM tự host.

Khác [KillerPDF](killer-pdf.md) (sửa PDF + OCR local): STranslate = **dịch + OCR hàng ngày** trên desktop. Khác [MinerU](mineru.md) / [DeepSeek-OCR](deepseek-ocr.md): đây là **UX tool**, không phải model OCR server.

**Cùng kiểu:** [KillerPDF](killer-pdf.md), [Stirling-PDF](stirling-pdf.md), [protonx-legal-tc](protonx-legal-tc.md) (sửa chính tả tiếng Việt sau OCR), [CheatReader](cheatreader.md) (đọc floating — khác miền).

## Dùng khi nào?

| Nhu cầu | STranslate |
|---------|------------|
| Dịch / OCR nhanh trên Windows | ✅ primary |
| Portable, không cài nặng | ✅ Release zip |
| Sửa/annotate PDF | → [KillerPDF](killer-pdf.md) |
| PDF→MD / RAG pipeline | → [MinerU](mineru.md) |
| OCR VLM self-host | → [DeepSeek-OCR](deepseek-ocr.md) / [Surya](surya.md) |

## Chạy thử

```text
# Tải Release mới nhất → giải nén → chạy
# https://github.com/STranslate/STranslate/releases

# Docs: https://stranslate.zggsong.com
```

Windows-focused (WPF). Cấu hình API key dịch/OCR trong app theo Document.

## So với tool khác

| | STranslate | KillerPDF | MinerU |
|--|------------|-----------|--------|
| Niche | Translate + OCR UX | PDF editor + OCR | PDF→MD pipeline |
| Platform | Windows WPF | Windows EXE | Cross-platform CLI/server |
| Shape | Desktop daily driver | Annotate PDF | Doc parse cho LLM |

## Dùng với Odoo / ai_core

- Đọc docs / ticket tiếng Trung-Anh trên Windows trước khi paste vào task.  
- OCR screenshot lỗi UI rồi dịch — không thay OCR server invoice (`ai_parse_*`).  
- Kết hợp [protonx-legal-tc](protonx-legal-tc.md) nếu cần chỉnh tiếng Việt sau OCR.

## Link

- Repo: https://github.com/STranslate/STranslate · Site: https://stranslate.zggsong.com  
- Peers: [killer-pdf.md](killer-pdf.md) · [stirling-pdf.md](stirling-pdf.md) · [mineru.md](mineru.md) · [protonx-legal-tc.md](protonx-legal-tc.md)
