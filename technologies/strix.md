# Strix

> **Repo:** [usestrix/strix](https://github.com/usestrix/strix)  
> **Category:** Security & Pentesting  
> **Tags:** `security` · `pentest` · `agent` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~41.3k · **License:** Apache-2.0  
> **Docs:** [docs.strix.ai](https://docs.strix.ai) · **Site:** [strix.ai](https://strix.ai)

## Tổng quan

**Strix** — tool **AI penetration testing** open-source: agent tự chủ hành xử như pentester (recon → exploit → validate PoC), không chỉ report SAST giả dương. Multi-agent orchestration, CLI developer-first, CI/CD (GitHub Actions), optional platform `app.strix.ai`.

## Để làm gì?

| Nhu cầu | Strix |
|---------|--------|
| Scan local codebase / GitHub repo / URL | ✅ `strix --target …` |
| Validate vuln bằng PoC thật | ✅ |
| AppSec / bug bounty / pentest nhanh | ✅ |
| Block insecure code trên PR | ✅ CI non-interactive `-n` |
| Autofix / report compliance | ✅ (đặc biệt platform / enterprise) |

**Công cụ agent:** HTTP proxy (Caido), browser exploit, shell, Python exploit sandbox, recon/OSINT, SAST+DAST, KB findings (CVSS/OWASP).

## Cài & chạy

```bash
curl -sSL https://strix.ai/install | bash
export STRIX_LLM="openai/gpt-5.4"   # hoặc anthropic/…
export LLM_API_KEY="your-api-key"
strix --target ./app-directory
strix --target https://your-app.com
strix -n --target ./ --scan-mode quick   # CI / headless
```

Yêu cầu: **Docker** đang chạy + LLM API key. Lần chạy đầu kéo sandbox image.

## Cảnh báo pháp lý

Chỉ test app **bạn sở hữu** hoặc được phép. Lạm dụng = trách nhiệm người dùng (README Strix).

## So sánh catalog

| | Strix | Destructive Command Guard | Midscene | OpenHands |
|--|-------|---------------------------|----------|-----------|
| Mục tiêu | **Tấn công có kiểm soát** để tìm/fix vuln | Chặn lệnh nguy hiểm của agent | UI automation | Coding agent |
| Domain | AppSec / red team | Agent safety | QA | Dev |

## Quan hệ / ai_core

| | Vai trò |
|--|---------|
| **Odoo / ai_core** | Scan API, auth, RLS trước release (chỉ môi trường được phép) |
| **DevTools CI** | Workflow PR + `strix -n` |
| **OpenHands / Hermes** | Agent viết code; Strix = agent **kiểm tra bảo mật** |

## Link

- Repo: https://github.com/usestrix/strix  
- Docs: https://docs.strix.ai  
- Platform: https://app.strix.ai
