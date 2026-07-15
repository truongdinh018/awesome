# OpenResume

> **Repo:** [xitanggg/open-resume](https://github.com/xitanggg/open-resume)  
> **Category:** DevTools · Documents · PDF *(resume builder + ATS parser)*  
> **Tags:** `pdf` · `self-host`  
> **Ngôn ngữ:** TypeScript · Next.js · React · **⭐** ~8.8k · **License:** AGPL-3.0  
> **Site:** [open-resume.com](https://open-resume.com)

## Đây là gì?

**OpenResume** là resume **builder** + **parser** mã nguồn mở: PDF modern ATS-friendly, cập nhật UI realtime, import PDF sẵn có.

Chạy **local trên browser** — không signup, data không rời máy. Parser kiểm tra readability ATS (Greenhouse/Lever…). Stack: PDF.js + react-pdf · Redux Toolkit · Tailwind.

**Không** dùng VLM OCR — extract text layer + heuristic section. Cạnh [Stirling-PDF](stirling-pdf.md) (PDF tổng quát) / [MinerU](mineru.md) (layout OCR).

**Cùng kiểu:** [stirling-pdf.md](stirling-pdf.md) · [mineru.md](mineru.md) · [docmd.md](docmd.md)

## Dùng khi nào?

| Nhu cầu | OpenResume |
|---------|------------|
| Soạn / tải CV PDF ATS-friendly | ✅ Builder |
| Import PDF cũ → template mới | ✅ |
| Test ATS readability | ✅ Parser |
| Merge/split/OCR PDF bất kỳ | → [Stirling-PDF](stirling-pdf.md) |
| PDF→Markdown layout đa dạng | → [MinerU](mineru.md) |

## Chạy thử

```bash
git clone https://github.com/xitanggg/open-resume.git
cd open-resume && npm i && npm run dev
# → http://localhost:3000

# hoặc
docker build -t open-resume . && docker run -p 3000:3000 open-resume
```

Routes: `/resume-builder` · `/resume-import` · `/resume-parser`.

## So với tool khác

| | OpenResume | Stirling-PDF | MinerU |
|--|------------|--------------|--------|
| Shape | Resume UI + ATS parse | PDF toolbox 50+ | Doc layout → MD |
| AI / OCR | Không (PDF.js text) | OCR tùy chọn | VLM / pipeline |
| Privacy | Browser-local | Self-host server | Self-host CLI/API |
| Tags | `pdf` `self-host` | `pdf` `ocr` … | `ocr` `pdf` … |

## Dùng với Odoo / ai_core

- Demo / HR portal: mẫu CV nội bộ (self-host Docker).  
- Không thay MinerU ingest hợp đồng; chỉ CV + ATS check.  
- AGPL-3.0 — cân nhắc license khi productize.

## Link

- Repo: https://github.com/xitanggg/open-resume · Demo: https://open-resume.com  
- Peers: [stirling-pdf.md](stirling-pdf.md) · [mineru.md](mineru.md) · [docmd.md](docmd.md)
