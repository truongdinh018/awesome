# Ponytail

> **Repo:** [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)  
> **Category:** MCP & AI Agents · Coding skill / YAGNI ruleset  
> **Tags:** `skill` · `coding-agent` · `prompt`  
> **Ngôn ngữ:** Rules / Skills / hooks (multi-host) · **⭐** ~82.6k · **License:** MIT  
> Slogan: *The best code is the code you never wrote.*

## Tổng quan

**Ponytail** — skill/plugin làm AI coding agent “nghĩ như senior lười nhưng đúng”: **YAGNI ladder** trước khi viết code — tái dùng stdlib/native/deps, một dòng nếu đủ, **không cắt** validation / error handling / security / a11y.

Benchmark agentic (Claude Code · FastAPI+React template · 12 feature · Haiku 4.5): trung bình **~54% ít LOC**, **~20% rẻ hơn**, **~27% nhanh hơn**, **100% safe** so với agent không skill.

## Để làm gì?

| Nhu cầu | Ponytail |
|---------|----------|
| Agent over-build (date picker → flatpickr…) | ✅ Ưu tiên native / 1 dòng |
| Giảm token/cost session coding | ✅ Side effect của ladder |
| Review diff / audit over-engineering | ✅ `/ponytail-review`, `/ponytail-audit` |
| Modes Lite / Full / Ultra / Off | ✅ |
| Nhiều host (Claude Code, Cursor, Hermes…) | ✅ Plugin + `AGENTS.md` / rules copy |

## Ladder (trước khi viết)

```
1. Có cần tồn tại?     → YAGNI / skip
2. Đã có trong repo?   → reuse
3. Stdlib?             → dùng
4. Native platform?    → dùng (`<input type="date">`…)
5. Dep đã cài?         → dùng
6. Một dòng đủ?        → một dòng
7. Chỉ khi đó: tối thiểu còn lại
```

Đọc code và trace flow **trước** khi chọn rung — lười giải pháp, không lười đọc.

## Cài nhanh (Claude Code)

```text
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail
```

**Hermes** (đã có trong catalog):

```bash
hermes plugins install DietrichGebert/ponytail --enable
```

**Cursor / Windsurf / Cline…:** copy rule từ repo (`.cursor/rules/`, …) hoặc `AGENTS.md`.

## Commands (host hỗ trợ skill)

| Command | Việc |
|---------|------|
| `/ponytail [lite\|full\|ultra\|off]` | Đổi mức độ |
| `/ponytail-review` | Review diff over-engineering |
| `/ponytail-audit` | Audit cả repo |
| `/ponytail-debt` | Ledger shortcut `ponytail:` đã defer |
| `/ponytail-gain` | Scoreboard benchmark |
| `/ponytail-help` | Tra cứu nhanh |

## So sánh trong catalog

| | Ponytail | Destructive Command Guard | prompts.chat | OpenHands |
|--|----------|---------------------------|--------------|-----------|
| Vai trò | Ruleset **viết ít / đúng** | Chặn lệnh **shell nguy hiểm** | Catalog **prompt** | Runtime **coding agent** |
| Tags | `skill` `coding-agent` `prompt` | `guardrail` | `prompt` `mcp` | `coding-agent` `agent` |

## Use case Odoo / Cursor

- Bật trên workspace Odoo addon: tránh agent tạo wrapper/layer thừa khi ORM/API đã có.
- Kết hợp [Hermes](hermes-agent.md) / Claude Code / Cursor rules.
- Không thay thế [dcg](destructive-command-guard.md) — ponytail không chặn `rm -rf`.

## Link

- Repo: https://github.com/DietrichGebert/ponytail
- Portability: `docs/agent-portability.md` trong repo
- Benchmark: `benchmarks/results/2026-06-18-agentic.md`
- Context compress peer: [headroom.md](headroom.md)
- Lifecycle skills pack: [agent-skills.md](agent-skills.md)
