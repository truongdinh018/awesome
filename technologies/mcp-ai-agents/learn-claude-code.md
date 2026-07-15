# Learn Claude Code

> **Repo:** [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)  
> **Category:** MCP & AI Agents · Educational nano Claude Code harness (0→1)  
> **Tags:** `coding-agent` · `agent` · `skill` · `cli` · `prompt`  
> **Ngôn ngữ:** Python · **⭐** ~71k · **License:** MIT  
> Site: [learn.shareai.run](https://learn.shareai.run)

## Đây là gì?

**Learn Claude Code** (*Bash is all you need*) là **khóa học + code nano harness** kiểu Claude Code: dạy *harness engineering* — tools, knowledge, observation, permissions quanh agent loop — không pretend “build intelligence” bằng prompt-chain workflow.

Track chính: **s01–s20** (mỗi bài thêm 1 cơ chế: tool, permission, hooks, todo, subagent, skill, compact, memory, task, teams, worktree, MCP…). Có `code.py` chạy được. Legacy 12-lesson vẫn giữ tạm.

Khác [Easy-Vibe](easy-vibe.md) (vibe coding → ship app): đây = **mổ xẻ agent harness**. Khác [CodeWhale](codewhale.md) / [OpenHands](openhands.md): đây là **tutorial**, không phải product runtime.

**Cùng kiểu:** [Easy-Vibe](easy-vibe.md), [AI Engineering Coach](ai-engineering-coach.md), [Spec Kit](spec-kit.md), [Zerolang](zerolang.md) (graph-native lang), [CodeWhale](codewhale.md), [CLI-Anything](cli-anything.md).

## Dùng khi nào?

| Nhu cầu | Learn Claude Code |
|---------|-------------------|
| Học vì sao Claude Code “chỉ loop + tools” | ✅ primary |
| Implement nano agent từ 0 (Python) | ✅ s01–s20 |
| Course vibe → SaaS đầy đủ | → [Easy-Vibe](easy-vibe.md) |
| Production coding agent | → [OpenHands](openhands.md) / [CodeWhale](codewhale.md) |
| Ngôn ngữ graph cho agent (experimental) | → [Zerolang](zerolang.md) |

## Chạy thử

```bash
git clone https://github.com/shareAI-lab/learn-claude-code.git
cd learn-claude-code
# Bắt đầu mới: s01_agent_loop/ … s20_comprehensive/
# Mỗi folder: README + code.py (cần Anthropic API key theo README)
```

Web: [learn.shareai.run](https://learn.shareai.run). Không trộn số chapter legacy 12 vs track 20.

## So với tool khác

| | Learn Claude Code | Easy-Vibe | CodeWhale |
|--|-------------------|-----------|-----------|
| Shape | Harness tutorial 0→1 | Vibe coding course | Product TUI agent |
| Output | Hiểu + nano code | Ship app | Runtime hàng ngày |
| License | MIT | CC-BY-NC-SA | — |

## Dùng với Odoo / ai_core

- Team mới làm Odoo + Claude Code: đọc s01–s08 trước khi viết skill/MCP custom.  
- Pattern harness (permission, compact, subagent) áp vào agent nội bộ quanh `ai_core`.  
- Không thay OpenHands/CodeWhale trên prod — dùng để **đào tạo harness engineer**.

## Link

- Repo: https://github.com/shareAI-lab/learn-claude-code · Site: https://learn.shareai.run  
- Peers: [easy-vibe.md](easy-vibe.md) · [ai-engineering-coach.md](ai-engineering-coach.md) · [codewhale.md](codewhale.md) · [spec-kit.md](spec-kit.md) · [cli-anything.md](cli-anything.md)
