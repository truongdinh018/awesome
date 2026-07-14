# Stirling-PDF

> **Repo:** [Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF)  
> **Category:** DevTools & Integration  
> **Tags:** `pdf` · `ocr` · `self-host` · `api`  
> **Ngôn ngữ:** Java · TypeScript · **⭐** ~87k · **License:** Open-core  
> **Docs:** [docs.stirlingpdf.com](https://docs.stirlingpdf.com)

## Tổng quan

**Stirling-PDF** là nền tảng **chỉnh sửa / xử lý PDF self-host** (#1 PDF app trên GitHub theo mô tả repo): chạy desktop, browser UI, hoặc server riêng kèm **API riêng tư** — không gửi file lên dịch vụ cloud bên thứ ba.

## Để làm gì?

| Nhu cầu | Stirling-PDF |
|---------|----------------|
| Merge / split / xoay / nén PDF | ✅ ~50+ tool trên UI |
| OCR PDF scan | ✅ |
| Ký, redact, convert (PDF↔ảnh/Office…) | ✅ |
| Pipeline batch hàng loạt | ✅ Workflow UI + REST API |
| On-prem / doanh nghiệp | ✅ SSO, audit, K8s…

**Một câu:** thay iLovePDF / Smallpdf / Adobe online bằng **instance nội bộ** bạn kiểm soát — quan trọng khi PDF chứa HĐ, CCCD, hóa đơn.

## Chạy nhanh

```bash
docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf
# → http://localhost:8080
```

## So sánh

| | Stirling-PDF | LibreOffice headless | Cloud PDF SaaS |
|--|--------------|----------------------|----------------|
| UI web đủ tool | ✅ | ❌ | ✅ |
| Self-host / privacy | ✅ | ✅ | ❌ |
| REST API rộng | ✅ | CLI/UNO | ✅ (vendor) |
| OCR tích hợp | ✅ | Cần Tesseract riêng | ✅ |

## Quan hệ catalog

| | Vai trò |
|--|---------|
| **LibreOffice harness** (CLI-Anything) | Convert office; Stirling chuyên **PDF toolkit** + UI/API |
| **ai_rag_core** | Preprocess PDF (OCR, split) trước ingest KB |
| **xb_ai / agent** | Agent gọi REST Stirling thay vì upload PDF ra internet |

## Use case Odoo / ai_core

- OCR hóa đơn / scan trước wizard `xb_ai_invoice`  
- Merge phụ lục HĐ trước lưu `ir.attachment`  
- Redact PII trước khi đưa vào RAG  
- API nội bộ VPN — agent MCP wrap endpoint Stirling  

## Link

- Repo: https://github.com/Stirling-Tools/Stirling-PDF  
- Site: https://stirling.com  
- Docs: https://docs.stirlingpdf.com
