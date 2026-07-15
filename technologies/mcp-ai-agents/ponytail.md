# Ponytail

> **Repo:** [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)  
> **Category:** MCP & AI Agents · Coding skill / YAGNI ruleset  
> **Tags:** `skill` · `coding-agent` · `prompt`  
> **Ngôn ngữ:** Rules / Skills / hooks (multi-host) · **⭐** ~82.6k · **License:** MIT  
> Slogan: *The best code is the code you never wrote.*

## Đây là gì?

**Ponytail** là skill/plugin làm AI coding agent “nghĩ như senior lười nhưng đúng”: **YAGNI ladder** trước khi viết code — tái dùng stdlib/native/deps, một dòng nếu đủ, **không cắt** validation / error handling / security / a11y.

Benchmark agentic (Claude Code · FastAPI+React template · 12 feature · Haiku 4.5): trung bình **~54% ít LOC**, **~20% rẻ hơn**, **~27% nhanh hơn**, **100% safe** so với agent không skill.

**Cùng kiểu:** [Caveman](caveman.md), [Headroom](headroom.md), [Destructive Command Guard](destructive-command-guard.md), [OpenHands](openhands.md)

## Dùng khi nào?

| Nhu cầu | Ponytail |
|---------|----------|
| Agent over-build (date picker → flatpickr…) | ✅ Ưu tiên native / 1 dòng |
| Giảm token/cost session coding | ✅ Side effect của ladder |
| Review diff / audit over-engineering | ✅ `/ponytail-review`, `/ponytail-audit` |
| Modes Lite / Full / Ultra / Off | ✅ |
| Nhiều host (Claude Code, Cursor, Hermes…) | ✅ Plugin + `AGENTS.md` / rules copy |
| Nén cách trả lời agent | → [Caveman](caveman.md) |

## Chạy thử

```text
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail
```

**Hermes:**

```bash
hermes plugins install DietrichGebert/ponytail --enable
```

**Cursor / Windsurf / Cline…:** copy rule từ repo (`.cursor/rules/`, …) hoặc `AGENTS.md`.

Ladder (trước khi viết): (1) Có cần tồn tại? → YAGNI · (2) Đã có trong repo? → reuse · (3) Stdlib? · (4) Native platform? · (5) Dep đã cài? · (6) Một dòng đủ? · (7) Chỉ khi đó: tối thiểu còn lại.

## So với tool khác

| | Ponytail | Caveman | Destructive Command Guard |
|--|----------|---------|---------------------------|
| Làm gì | Ruleset **viết ít / đúng** | Nén cách trả lời | Chặn lệnh **shell nguy hiểm** |
| Output tokens | Hệ quả phụ | Mục tiêu chính | — |
| Tags | `skill` `coding-agent` `prompt` | `skill` `prompt` | `guardrail` |

## Dùng với Odoo / ai_core

- Bật trên workspace Odoo addon: tránh agent tạo wrapper/layer thừa khi ORM/API đã có.  
- Kết hợp [Hermes](hermes-agent.md) / Claude Code / Cursor rules.  
- Không thay thế [dcg](destructive-command-guard.md) — ponytail không chặn `rm -rf`.

## Link

- Repo: https://github.com/DietrichGebert/ponytail  
- Portability: `docs/agent-portability.md` trong repo  
- Benchmark: `benchmarks/results/2026-06-18-agentic.md`  
- Peers: [caveman.md](caveman.md) · [headroom.md](headroom.md) · [agent-skills.md](agent-skills.md) · [openhands.md](openhands.md)
