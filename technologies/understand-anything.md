# Understand Anything

> **Repo:** [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything)  
> **Category:** MCP & AI Agents · Code / wiki knowledge graph  
> **Tags:** `skill` · `coding-agent` · `rag` · `cli` · `agent`  
> **Ngôn ngữ:** TypeScript · **⭐** ~73.9k · **License:** MIT  
> Site: [understand-anything.com](https://understand-anything.com/) · Slogan: *Graphs that teach > graphs that impress*

## Tổng quan

**Understand Anything** — plugin/skill biến **codebase / docs / Karpathy-style LLM wiki** thành **interactive knowledge graph**: explore, search, chat, onboarding tours, diff impact, domain/business flows. Multi-agent pipeline → `.ua/knowledge-graph.json` + dashboard. Claude Code, Cursor, Codex, Copilot, Gemini CLI, Hermes, OpenCode… (slash/`$understand`).

Peer: [SAG](sag.md) (event–entity RAG), [Hyper-Extract](hyper-extract.md) (extract graph), [Addy's Agent Skills](agent-skills.md) (lifecycle skills), [PageIndex](pageindex.md) (doc trees).

## Để làm gì?

| Nhu cầu | Understand Anything |
|---------|---------------------|
| Onboard monorepo lớn | ✅ `/understand` + tours |
| Chat “payment flow?” trên graph | ✅ `/understand-chat` |
| Diff impact trước commit | ✅ `/understand-diff` |
| Wiki → knowledge graph | ✅ `/understand-knowledge` |
| Flat vector RAG docs | → [RAGFlow](ragflow.md) / [Pathway](pathway.md) |

## Highlight

```bash
# Claude
/plugin marketplace add Egonex-AI/Understand-Anything
/plugin install understand-anything
/understand
/understand-dashboard

# Multi-platform
curl -fsSL …/install.sh | bash -s codex   # gemini|opencode|hermes|…
```

- Incremental re-analyze · `--language zh` · `--auto-update` post-commit  
- Persona-adaptive UI · layer viz (API/Service/Data/UI)  
- First full `/understand` tốn token — nên subscription / local model  

## So sánh catalog

| | Understand Anything | SAG | Agent Skills |
|--|---------------------|-----|--------------|
| Niche | Interactive code/wiki graph | Retrieval graph RAG | Spec→ship workflows |
| UI | Dashboard graph | Workbench | Commands/skills |
| Tags | `skill` `coding-agent` `rag` | `rag` `mcp` | `skill` `prompt` |

## Use case Odoo / ai_core

- `/understand` trên `addons/ai_core` + Odoo custom — onboard module map.  
- Domain view cho ERP business flows.  
- Diff impact khi PR lớn.

## Link

- Repo: https://github.com/Egonex-AI/Understand-Anything  
- Site / live demo  
- Peers: [sag.md](sag.md) · [hyper-extract.md](hyper-extract.md) · [agent-skills.md](agent-skills.md) · [cli-anything.md](cli-anything.md)
