# MarkItDown

> **Repo:** [microsoft/markitdown](https://github.com/microsoft/markitdown)  
> **Category:** DevTools · Documents · file → Markdown (LLM pipelines)  
> **Tags:** `cli` · `pdf` · `ocr`  
> **Ngôn ngữ:** Python · **⭐** ~165.9k · **License:** MIT  
> PyPI: [`markitdown`](https://pypi.org/project/markitdown/) · AutoGen team

## Đây là gì?

**MarkItDown** là utility Python **nhẹ** chuyển nhiều loại file → **Markdown** cho LLM / text pipelines (gần textract, nhưng giữ cấu trúc MD: heading, list, table, link). Output tối ưu token cho model — không phải high-fidelity convert cho người đọc.

Hỗ trợ: PDF, PPTX, DOCX, Excel, images (+ EXIF/OCR), audio (+ STT), HTML, CSV/JSON/XML, ZIP, YouTube, EPUB… Optional Azure Document Intelligence / Content Understanding.

**Cùng kiểu:** [MinerU](mineru.md) (PDF phức tạp → MD/JSON), [Stirling-PDF](stirling-pdf.md) (PDF edit toolkit), [LibreOffice harness](cli-anything/libreoffice.md) (Office preprocess), [Firecrawl](firecrawl.md) (web → MD).

## Dùng khi nào?

| Nhu cầu | MarkItDown |
|---------|------------|
| Office/PDF/HTML → MD nhanh cho RAG/agents | ✅ primary |
| Multi-format một CLI (`pip install`) | ✅ |
| Layout PDF phức tạp (bảng, công thức, scan) | → [MinerU](mineru.md) |
| Merge/split/redact PDF | → [Stirling-PDF](stirling-pdf.md) |
| Web URL scrape | → [Firecrawl](firecrawl.md) / [Crawl4AI](crawl4ai.md) |

## Chạy thử

```bash
pip install 'markitdown[all]'
# hoặc gọn: pip install 'markitdown[pdf,docx,pptx]'

markitdown path-to-file.pdf -o document.md
# pipe: cat file.pdf | markitdown
```

```python
from markitdown import MarkItDown

md = MarkItDown(enable_plugins=False)
result = md.convert("test.pdf")
print(result.text_content)
```

Docker: `docker run --rm -i markitdown:latest < ~/file.pdf > out.md`  
Untrusted input: sanitize paths; dùng `convert_local` / `convert_stream` hẹp nhất — xem Security Considerations trên docs.

## So với tool khác

| | MarkItDown | MinerU | Stirling-PDF |
|--|------------|--------|--------------|
| Shape | Lightweight multi-format → MD | Doc parse OCR/layout pipeline | PDF ops platform |
| Office (DOCX/PPTX/XLSX) | ✅ | PDF-heavy | PDF-centric |
| Tags | `cli` `pdf` `ocr` | `ocr` `pdf` `api` | `pdf` `ocr` `api` |

## Dùng với Odoo / ai_core

- Preprocess attachment Office/PDF → MD trước `ai_rag_core` / [Hyper-Extract](hyper-extract.md).  
- Nhẹ hơn MinerU cho doc có text layer; scan nặng / layout phức tạp → MinerU.  
- Tôn trọng privilege model (process I/O) khi agent gọi convert trên path user upload.

## Link

- Repo: https://github.com/microsoft/markitdown · PyPI: `markitdown`  
- Peers: [mineru.md](mineru.md) · [stirling-pdf.md](stirling-pdf.md) · [firecrawl.md](firecrawl.md) · [docmd.md](docmd.md) · [magika.md](magika.md)
