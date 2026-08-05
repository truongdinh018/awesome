# ECC

> **Repo:** [affaan-m/ECC](https://github.com/affaan-m/ECC)  
> **Category:** MCP & AI Agents · Agent harness OS — skills, memory, guardrail, workflow  
> **Tags:** `coding-agent` · `skill` · `memory` · `guardrail` · `mcp` · `cli` · `workflow`  
> **Ngôn ngữ:** JavaScript · TypeScript · **⭐** ~238k · **License:** MIT  
> Site: [ecc.tools](https://ecc.tools)

## Đây là gì?

**ECC** (*Everything Claude Code* / agent harness operating system) là hệ thống **tối ưu performance cho coding agent**: plan → test → implement → review → verify → remember → improve. Không chỉ viết code — ECC gắn **67 agents**, **281 skills**, hooks, rules, memory, continuous learning và **AgentShield** security scan.

Hỗ trợ **Claude Code** (plugin `ecc@ecc` — khuyến nghị), Codex sync, và adapter cho Cursor, OpenCode, Gemini, Zed, Copilot, Antigravity, Qwen, Hermes, OpenClaw… MIT OSS; ECC Pro = GitHub App cho private repo.

**Cùng kiểu:** [Claude-Mem](claude-mem.md) (session memory), [Karpathy Guidelines](karpathy-skills.md) (coding rules), [Destructive Command Guard](destructive-command-guard.md) (guardrail), [Spec Kit](spec-kit.md) (SDD workflow), [QM](qm.md) (org harness).

## Dùng khi nào?

| Nhu cầu | ECC |
|---------|-----|
| Gói skills + agents + memory + review loop cho Claude Code/Codex | ✅ primary |
| AgentShield scan bảo mật trước khi merge | ✅ |
| Multi-harness (Cursor / OpenCode / Copilot…) cùng workflow | ✅ adapters |
| Chỉ memory cross-session | → [Claude-Mem](claude-mem.md) · [agentmemory](agentmemory.md) |
| Một file quy tắc coding ngắn | → [Karpathy Guidelines](karpathy-skills.md) |
| Org multiplayer Slack harness | → [QM](qm.md) |

## Chạy thử

```bash
# Claude Code (khuyến nghị) — trong session Claude Code:
/plugin install ecc@ecc

# Hoặc npm (release theo tag, không phải mọi commit main)
npm install -g ecc-universal

# Cursor / OpenCode / Gemini… — từ repo clone
git clone https://github.com/affaan-m/ECC.git
cd ECC
./install.sh --profile minimal --target cursor   # đổi cursor → opencode, gemini…
```

- **Chỉ cài 1 phương thức / harness** — trùng plugin + manual install dễ duplicate skills/hooks  
- Nguồn chính thức: GitHub, `ecc-universal`, `ecc-agentshield`, [GitHub App](https://github.com/apps/ecc-tools), `ecc.tools`  
- Troubleshoot: `node scripts/ecc.js doctor` · `repair` · `list-installed`

## So với tool khác

| | ECC | Claude-Mem | Karpathy Guidelines |
|--|-----|------------|---------------------|
| Shape | Full harness OS (skills+agents+memory+guard) | Session memory compress | Single rule/skill file |
| Harness | Claude Code, Codex, Cursor, 7+ | Claude/Codex/OpenClaw… | Claude/Cursor plugin |
| Security | AgentShield | ❌ | ❌ |
| Tags | `coding-agent` `skill` `memory` `guardrail` `workflow` | `memory` `mcp` | `skill` `prompt` |

## Dùng với Odoo / ai_core

- Skill pack ECC cho module Odoo: plan → test → review loop thay vibe-code thuần.  
- AgentShield quét PR addon trước merge — bổ sung guardrail nội bộ.  
- Không thay `ai_core` runtime — lớp workflow/harness trên Claude Code/Cursor khi dev Odoo.

## Link

- Repo: https://github.com/affaan-m/ECC  
- Site: https://ecc.tools · Docs VI: [docs/vi-VN/README.md](https://github.com/affaan-m/ECC/blob/main/docs/vi-VN/README.md)  
- Peers: [claude-mem.md](claude-mem.md) · [karpathy-skills.md](karpathy-skills.md) · [spec-kit.md](spec-kit.md) · [destructive-command-guard.md](destructive-command-guard.md)
