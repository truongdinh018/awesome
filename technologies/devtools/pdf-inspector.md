# PDF Inspector

> **Repo:** [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector)  
> **Category:** DevTools · Documents · PDF classify + extract (không OCR)  
> **Tags:** `pdf` · `cli` · `ocr` · `self-host`  
> **Ngôn ngữ:** Rust · Python · Node · WASM · **⭐** ~10.0k · **License:** MIT  
> **Site:** [firecrawl.github.io/pdf-inspector](https://firecrawl.github.io/pdf-inspector/) · PyPI / npm / crates.io: `pdf-inspector`

## Đây là gì?

**PDF Inspector** (Firecrawl) là thư viện Rust **nhanh** để **phân loại PDF** (text-based / scanned / image-based / mixed), **extract text có vị trí**, và **convert Markdown** — **không chạy OCR**. Mục tiêu: ~54% PDF có text layer xử lý local dưới 200ms, chỉ route sang OCR khi thật sự cần.

Có binding Python, Node (`@firecrawl/pdf-inspector`), WASM (browser/Web Worker), CLI (`pdf2md`). Pure Rust + `lopdf`, không ML model / service ngoài. Benchmark opendataloader-bench: mạnh về tốc độ, reading order, bảng trên PDF native-text.

**Cùng kiểu:** [MarkItDown](markitdown.md) (multi-format → MD), [MinerU](mineru.md) / [Chunkr](chunkr.md) (layout + OCR pipeline), [Stirling-PDF](stirling-pdf.md) (PDF ops), [Firecrawl](../mcp-ai-agents/firecrawl.md) (web → MD; cùng org).

## Dùng khi nào?

| Nhu cầu | PDF Inspector |
|---------|---------------|
| Classify PDF rồi quyết định có OCR không | ✅ primary |
| PDF text-native → MD nhanh, local, không model | ✅ |
| Scan / ảnh / encoding hỏng cần OCR | → [MinerU](mineru.md) / [Surya](surya.md) / [dots.ocr](dots-ocr.md) |
| Nhiều định dạng Office + PDF một CLI | → [MarkItDown](markitdown.md) |
| Merge/split/redact PDF | → [Stirling-PDF](stirling-pdf.md) |
| Scrape web → MD | → [Firecrawl](../mcp-ai-agents/firecrawl.md) |

## Chạy thử

```bash
# Node
npm i @firecrawl/pdf-inspector

# Python (PyPI) hoặc build: pip install maturin && maturin develop --release
pip install pdf-inspector

# CLI (Rust)
cargo install pdf-inspector
pdf2md document.pdf            # → Markdown
pdf2md document.pdf --json     # classify + extract JSON
```

```javascript
import { readFileSync } from 'fs';
import { processPdf } from '@firecrawl/pdf-inspector';

const result = processPdf(readFileSync('document.pdf'));
console.log(result.pdfType);  // TextBased | Scanned | ImageBased | Mixed
console.log(result.markdown);
```

Docs: Python / NAPI / WASM / Rust API trên repo. Browser: `@firecrawl/pdf-inspector-wasm`.

## So với tool khác

| | PDF Inspector | MarkItDown | MinerU |
|--|---------------|------------|--------|
| Shape | Classify + extract + MD (no OCR) | Multi-format → MD | Layout/OCR pipeline |
| OCR routing | ✅ confidence / per-page | Tùy plugin | OCR-heavy |
| Speed (text PDF) | Rất nhanh (Rust) | OK | Chậm hơn (model) |
| Tags | `pdf` `cli` `ocr` | `cli` `pdf` `ocr` | `ocr` `pdf` `api` |

## Dùng với Odoo / ai_core

- Gate trước RAG: `classify` → text-based thì `pdf2md` local; scanned thì gọi MinerU/OCR.  
- Giảm chi phí OCR cloud trên attachment Odoo có text layer.  
- Firecrawl scrape PDF trên web có thể kết hợp cùng stack classify/extract.

## Link

- Repo: https://github.com/firecrawl/pdf-inspector · Docs site: https://firecrawl.github.io/pdf-inspector/  
- Peers: [markitdown.md](markitdown.md) · [mineru.md](mineru.md) · [chunkr.md](chunkr.md) · [stirling-pdf.md](stirling-pdf.md) · [firecrawl.md](../mcp-ai-agents/firecrawl.md)
