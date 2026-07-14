# Strix

> **Repo:** [usestrix/strix](https://github.com/usestrix/strix)  
> **Category:** Security & Pentesting  
> **Tags:** `security` · `pentest` · `agent` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~41.3k · **License:** Apache-2.0  
> **Docs:** [docs.strix.ai](https://docs.strix.ai) · **Site:** [strix.ai](https://strix.ai)

## Đây là gì?

**Strix** là tool **AI penetration testing** open-source: agent tự chủ hành xử như pentester (recon → exploit → validate PoC), không chỉ report SAST giả dương.

Multi-agent orchestration, CLI developer-first, CI/CD (GitHub Actions), optional platform `app.strix.ai`. Công cụ agent: HTTP proxy (Caido), browser exploit, shell, Python exploit sandbox, recon/OSINT, SAST+DAST, KB findings (CVSS/OWASP).

**Cùng kiểu:** [Destructive Command Guard](destructive-command-guard.md) (chặn lệnh nguy hiểm agent), [OpenHands](openhands.md) (coding agent — Strix = agent kiểm tra bảo mật).

## Dùng khi nào?

| Nhu cầu | Strix |
|---------|--------|
| Scan local codebase / GitHub repo / URL | ✅ `strix --target …` |
| Validate vuln bằng PoC thật | ✅ |
| AppSec / bug bounty / pentest nhanh | ✅ |
| Block insecure code trên PR | ✅ CI non-interactive `-n` |
| Autofix / report compliance | ✅ (đặc biệt platform / enterprise) |

## Chạy thử

```bash
curl -sSL https://strix.ai/install | bash
export STRIX_LLM="openai/gpt-5.4"   # hoặc anthropic/…
export LLM_API_KEY="your-api-key"
strix --target ./app-directory
strix --target https://your-app.com
strix -n --target ./ --scan-mode quick   # CI / headless
```

Yêu cầu: **Docker** đang chạy + LLM API key. Lần chạy đầu kéo sandbox image.

**Cảnh báo pháp lý:** Chỉ test app **bạn sở hữu** hoặc được phép. Lạm dụng = trách nhiệm người dùng (README Strix).

## So với tool khác

| | Strix | Destructive Command Guard | OpenHands |
|--|-------|---------------------------|----------|
| Mục tiêu | Tấn công có kiểm soát để tìm/fix vuln | Chặn lệnh nguy hiểm của agent | Coding agent |
| Domain | AppSec / red team | Agent safety | Dev |

## Dùng với Odoo / ai_core

- Scan API, auth, RLS trước release (chỉ môi trường được phép).  
- Workflow PR + `strix -n` trong DevTools CI.  
- Agent viết code (OpenHands / Hermes); Strix = agent **kiểm tra bảo mật**.

## Link

- Repo: https://github.com/usestrix/strix  
- Docs: https://docs.strix.ai  
- Platform: https://app.strix.ai
