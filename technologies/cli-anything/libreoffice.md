# LibreOffice (CLI-Anything harness)

> **Parent:** [CLI-Anything](../mcp-ai-agents/cli-anything.md)  
> **Domain:** DevTools & Integration · Office  
> **Tags:** `harness` · `office` · `cli`  
> **Type:** Agent-native CLI harness  
> **Path:** [`libreoffice/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/libreoffice/agent-harness)

## Đây là gì?

Harness **LibreOffice** headless: convert, export document (Writer/Calc/…) qua CLI — agent batch office file không cần GUI.

Là con của CLI-Anything — preprocess doc trước khi ingest RAG. Cạnh [Stirling-PDF](../devtools/stirling-pdf.md) (chuyên PDF toolkit).

**Cùng kiểu:** [Stirling-PDF](../devtools/stirling-pdf.md) (PDF), [MinerU](../devtools/mineru.md) (PDF→MD), [CLI-Anything](../mcp-ai-agents/cli-anything.md) (cha).

## Dùng khi nào?

| Nhu cầu | LibreOffice harness |
|---------|---------------------|
| Convert định dạng (DOCX↔PDF, …) | ✅ |
| Xử lý batch tài liệu | ✅ |
| Pipeline doc trước khi ingest RAG | ✅ |
| PDF OCR / merge / redact | → [Stirling-PDF](../devtools/stirling-pdf.md) |

## Chạy thử

```bash
# Harness: https://github.com/HKUDS/CLI-Anything/tree/main/libreoffice/agent-harness
# Cần LibreOffice headless cài local
```

## So với tool khác

| | LibreOffice harness | Stirling-PDF | MinerU |
|--|---------------------|--------------|--------|
| Focus | Office convert | PDF toolkit + UI | PDF→MD pipeline |
| Tags | `harness` `office` `cli` | `pdf` `ocr` `api` | `ocr` `pdf` |

## Dùng với Odoo / ai_core

- Preprocess attachment trước `ai_rag_core` ingest.  
- Convert DOCX hóa đơn → PDF trước lưu `ir.attachment`.  
- Agent batch convert qua harness thay shell script thủ công.

## Link

- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/libreoffice/agent-harness  
- Upstream: https://www.libreoffice.org  
- Peers: [stirling-pdf.md](../devtools/stirling-pdf.md) · [mineru.md](../devtools/mineru.md)
