# Karpathy Guidelines

> **Repo:** [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)  
> **Category:** MCP & AI Agents · Skill / `CLAUDE.md` chống pitfall coding LLM  
> **Tags:** `skill` · `coding-agent` · `prompt`  
> **Ngôn ngữ:** Markdown / Claude plugin / Cursor rules · **⭐** ~192k · **License:** MIT  
> Nguồn cảm hứng: quan sát của Andrej Karpathy về LLM coding pitfalls

## Đây là gì?

**andrej-karpathy-skills** (Karpathy Guidelines) là **một file quy tắc** (`CLAUDE.md` + skill / Cursor rule) chỉnh hành vi coding agent: ít giả định mù, ít over-engineer, chỉnh đúng chỗ cần, mục tiêu có verify được.

Bốn nguyên tắc: **Think Before Coding** · **Simplicity First** · **Surgical Changes** · **Goal-Driven Execution**. Không phải runtime agent — là **prompt/skill pack** (Claude Code plugin, Cursor `.mdc`, append `CLAUDE.md`).

**Cùng kiểu:** [Ponytail](ponytail.md) (YAGNI), [Caveman](caveman.md) (nén reply), [Addy's Agent Skills](agent-skills.md) (lifecycle), [Taste Skill](taste-skill.md) (UI taste), [Spec Kit](spec-kit.md) (SDD).

## Dùng khi nào?

| Nhu cầu | Karpathy Guidelines |
|---------|---------------------|
| Agent hay đoán bậy / bloated / diff lung tung | ✅ primary |
| Ép clarify + tradeoff trước khi code | ✅ |
| Goal + test loop thay “làm X” mơ hồ | ✅ |
| YAGNI skill hẹp hơn | → [Ponytail](ponytail.md) |
| Lifecycle eng đầy đủ (spec→ship) | → [Addy's Agent Skills](agent-skills.md) |

Tradeoff README: ưu tiên **cẩn thận hơn tốc độ** — task typo trivial có thể bỏ qua full rigor.

## Chạy thử

```bash
# Claude Code plugin (README vẫn ghi marketplace forrestchang — org redirect → multica-ai)
/plugin marketplace add forrestchang/andrej-karpathy-skills
/plugin install andrej-karpathy-skills@karpathy-skills

# Per-project CLAUDE.md
curl -o CLAUDE.md https://raw.githubusercontent.com/multica-ai/andrej-karpathy-skills/main/CLAUDE.md
```

Cursor: mở repo (có `.cursor/rules/karpathy-guidelines.mdc`) hoặc copy rule theo [CURSOR.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CURSOR.md). Có `EXAMPLES.md` + `README.zh.md`.  
Canonical GitHub: [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) (~192k ★).

## So với tool khác

| | Karpathy Guidelines | Ponytail | Addy Skills |
|--|---------------------|----------|-------------|
| Shape | 4 principles anti-pitfall | YAGNI ladder | Nhiều skill lifecycle |
| File kiểu | `CLAUDE.md` / plugin | skill mỏng | `npx skills add` pack |
| Tags | `skill` `prompt` | `skill` `prompt` | `skill` `prompt` |

## Dùng với Odoo / ai_core

- Gắn vào repo addon khi agent hay rewrite lung tung / abstraction thừa.  
- Merge với guideline Odoo/OWL riêng trong cùng `CLAUDE.md`.  
- Không thay review human trên migration & security.

## Link

- Repo: https://github.com/multica-ai/andrej-karpathy-skills  
- Peers: [ponytail.md](ponytail.md) · [caveman.md](caveman.md) · [agent-skills.md](agent-skills.md) · [taste-skill.md](taste-skill.md) · [spec-kit.md](spec-kit.md) · [skill-registries.md](skill-registries.md)
