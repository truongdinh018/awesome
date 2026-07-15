# Magika

> **Repo:** [google/magika](https://github.com/google/magika)  
> **Category:** DevTools & Integration · File type / content detection  
> **Tags:** `cli` · `security`  
> **Ngôn ngữ:** Rust CLI · Python · JS/TS · Go (WIP) · **⭐** ~17.2k · **License:** Apache-2.0  
> Site: [securityresearch.google/magika](https://securityresearch.google/magika/)

## Đây là gì?

**Magika** (Google Security Research) là **nhận diện kiểu nội dung file bằng AI** (deep learning, model vài MB): ~**99%** precision/recall trên 200+ content types (binary + text), inference ~**5ms**/file trên CPU sau khi load model; thời gian gần như không phụ thuộc kích thước file (chỉ đọc subset bytes).

Dùng production-scale tại Google (Gmail, Drive, Safe Browsing) và tích hợp VirusTotal / abuse.ch — route file tới scanner đúng policy.

**Cùng kiểu:** [Stirling-PDF](stirling-pdf.md) (xử lý PDF), [Strix](../security/strix.md) (AI pentest).

## Dùng khi nào?

| Nhu cầu | Magika |
|---------|--------|
| Detect MIME/label khi extension sai / spoof | ✅ Content-based DL |
| Batch / recursive scan thư mục | ✅ `magika -r` |
| Python / npm / CLI trong pipeline ingest | ✅ |
| Pre-filter trước OCR / RAG / antivirus | ✅ |
| Watermark ảnh / audio | → [blind_watermark](../image-video/blind-watermark.md) / [AudioSeal](../speech-audio/audioseal.md) |

## Chạy thử

```bash
pipx install magika
# hoặc: brew install magika · cargo install --locked magika-cli

magika ./report.pdf --json
magika -r ./uploads/
echo 'print(1)' | magika -
```

```python
from magika import Magika
m = Magika()
print(m.identify_path('doc.ini').output.label)
```

Modes: `high-confidence` / `medium-confidence` / `best-guess` — threshold per content-type.

## So với tool khác

| | Magika | Stirling-PDF | Strix |
|--|--------|--------------|-------|
| Việc | AI **file type** | Xử lý PDF | AI **pentest** |
| Tags | `cli` `security` | `pdf` `ocr` | `security` `pentest` |

## Dùng với Odoo / ai_core

- Trước ingest vào `ai_rag_core` / Stirling OCR: classify attachment → route parser đúng (code vs pdf vs image).  
- Upload API: reject “executable disguised as .pdf” khi Magika báo binary/exe.  
- Agent tool: `magika` CLI trong sandbox trước khi mở file.

## Link

- Repo: https://github.com/google/magika  
- Docs / demo: https://securityresearch.google/magika/  
- Paper: ICSE 2025 (Magika research)  
- Peer PDF pipeline: [stirling-pdf.md](stirling-pdf.md)
