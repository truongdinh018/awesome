# Stirling-PDF

> **Repo:** [Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF)  
> **Category:** DevTools & Integration  
> **Tags:** `pdf` · `ocr` · `self-host` · `api`  
> **Ngôn ngữ:** Java · TypeScript · **⭐** ~87k · **License:** Open-core  
> **Docs:** [docs.stirlingpdf.com](https://docs.stirlingpdf.com)

## Đây là gì?

**Stirling-PDF** là nền tảng **chỉnh sửa / xử lý PDF self-host** (#1 PDF app trên GitHub theo mô tả repo).

Chạy desktop, browser UI, hoặc server riêng kèm **API riêng tư** — không gửi file lên dịch vụ cloud bên thứ ba. Thay iLovePDF / Smallpdf / Adobe online bằng **instance nội bộ** bạn kiểm soát — quan trọng khi PDF chứa HĐ, CCCD, hóa đơn.

**Cùng kiểu:** [LibreOffice harness](cli-anything/libreoffice.md) (convert office), [MinerU](mineru.md) (PDF→MD), [Magika](magika.md) (pre-classify files).

## Dùng khi nào?

| Nhu cầu | Stirling-PDF |
|---------|----------------|
| Merge / split / xoay / nén PDF | ✅ ~50+ tool trên UI |
| OCR PDF scan | ✅ |
| Ký, redact, convert (PDF↔ảnh/Office…) | ✅ |
| Pipeline batch hàng loạt | ✅ Workflow UI + REST API |
| On-prem / doanh nghiệp | ✅ SSO, audit, K8s… |

## Chạy thử

```bash
docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf
# → http://localhost:8080
```

## So với tool khác

| | Stirling-PDF | LibreOffice headless | Cloud PDF SaaS |
|--|--------------|----------------------|----------------|
| UI web đủ tool | ✅ | ❌ | ✅ |
| Self-host / privacy | ✅ | ✅ | ❌ |
| REST API rộng | ✅ | CLI/UNO | ✅ (vendor) |
| OCR tích hợp | ✅ | Cần Tesseract riêng | ✅ |

## Dùng với Odoo / ai_core

- OCR hóa đơn / scan trước wizard `xb_ai_invoice`.  
- Merge phụ lục HĐ trước lưu `ir.attachment`.  
- Redact PII trước khi đưa vào RAG — API nội bộ VPN, agent MCP wrap endpoint Stirling.

## Link

- Repo: https://github.com/Stirling-Tools/Stirling-PDF  
- Site: https://stirling.com  
- Docs: https://docs.stirlingpdf.com  
- Peers: [magika.md](magika.md) · [mineru.md](mineru.md) · [nanonets-ocr2.md](nanonets-ocr2.md) · [cli-anything/libreoffice.md](cli-anything/libreoffice.md)
