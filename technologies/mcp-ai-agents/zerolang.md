# Zerolang

> **Repo:** [vercel-labs/zerolang](https://github.com/vercel-labs/zerolang)  
> **Category:** MCP & AI Agents · Graph-native programming language for agents  
> **Tags:** `coding-agent` · `agent` · `cli` · `skill`  
> **Ngôn ngữ:** C (compiler) · JS/TS tooling · **⭐** ~5.2k · **License:** Apache-2.0  
> Site: [zerolang.ai](https://zerolang.ai)

## Đây là gì?

**Zerolang** (*The programming language for agents*) là ngôn ngữ **experimental graph-native**: *program database* = semantic graph (`zero.graph`). Agent **query + checked patch** thay vì viết text rồi đoán; file `.0` chỉ là projection cho người đọc/review.

Workflow: `zero query` → `zero patch` → `zero check` / `test` / `run`. Compiler từ chối patch stale/invalid trước khi ghi store. Bundle skill (`npx skills add vercel-labs/zerolang`). **Cảnh báo:** experimental — chỉ workspace cô lập, không prod/sensitive.

Khác [Learn Claude Code](learn-claude-code.md) (học harness text-loop): Zerolang đổi **surface lập trình** sang graph. Khác [Spec Kit](spec-kit.md) (SDD docs): đây là **language + compiler**.

**Cùng kiểu:** [Learn Claude Code](learn-claude-code.md), [Spec Kit](spec-kit.md), [CodeWhale](codewhale.md), [Graphify](graphify.md), [CLI-Anything](cli-anything.md).

## Dùng khi nào?

| Nhu cầu | Zerolang |
|---------|----------|
| Agent edit semantic (symbol/type/effect) không line-diff | ✅ experimental |
| Patch checked + projection `.0` review | ✅ |
| Tutorial harness Claude Code | → [Learn Claude Code](learn-claude-code.md) |
| Spec→implement PRD | → [Spec Kit](spec-kit.md) |
| Production coding agent hàng ngày | → [OpenHands](openhands.md) / [CodeWhale](codewhale.md) |

## Chạy thử

```bash
curl -fsSL https://zerolang.ai/install.sh | bash
export PATH="$HOME/.zero/bin:$PATH"
zero --version

npx skills add vercel-labs/zerolang
zero init
zero patch --op 'addMain' --op 'addCheckWrite fn="main" text="hello from zero\n"'
zero run
```

Skill: `zero skills get agent|graph|language|stdlib`. Dev compiler: `pnpm install` + `make -C native/zero-c`.

## So với tool khác

| | Zerolang | Learn Claude Code | Spec Kit |
|--|----------|-------------------|----------|
| Shape | Lang + graph compiler | Harness tutorial | SDD toolkit |
| Source of truth | `zero.graph` | Text / tools loop | Spec MD |
| Maturity | Experimental | Course | Ship workflow |

## Dùng với Odoo / ai_core

- Thử agent package tooling trong sandbox — **không** đụng DB/prod Odoo.  
- Pattern “checked edit” gợi ý API agent nội bộ; không migrate mã Odoo sang `.0`.  
- Expect breaking changes / security issues (README warning).

## Link

- Repo: https://github.com/vercel-labs/zerolang · Site: https://zerolang.ai  
- Peers: [learn-claude-code.md](learn-claude-code.md) · [spec-kit.md](spec-kit.md) · [codewhale.md](codewhale.md) · [graphify.md](graphify.md)
