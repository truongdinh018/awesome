# LLM Checker

> **Repo:** [signerless/llm-checker](https://github.com/signerless/llm-checker)  
> **Category:** DevTools · Local LLM — HW detect + model recommend  
> **Tags:** `cli` · `mcp` · `self-host`  
> **Ngôn ngữ:** JavaScript · Node ≥16 · **⭐** ~2.8k · **License:** NPDL-1.0 *(no paid distribution / monetized hosted delivery)*  
> npm: [`llm-checker`](https://www.npmjs.com/package/llm-checker)

## Đây là gì?

**LLM Checker** — CLI (và MCP) **quét phần cứng** rồi **recommend** model LLM/sLLM local phù hợp (Ollama + registry HF/Ollama/GPT4All, scoring Quality/Speed/Fit/Context). `hw-detect` · `check` · `recommend` · `sync` · `ai-run`; runtime target ollama/vLLM/MLX/llama.cpp… Hỗ trợ calibrate RAM, policy/audit export.

Không phải inference server — chỉ **chọn model đúng máy**; chạy model vẫn cần [LocalAI](localai.md) / Ollama / vLLM…

**Cùng kiểu:** [llmfit](llmfit.md) (Rust TUI/bench, MIT), [LocalAI](localai.md), [MiniCPM](minicpm.md), [exo](exo.md) / [Cake](cake.md) (cluster local), [AirLLM](airllm.md) (layerwise VRAM).

## Dùng khi nào?

| Nhu cầu | LLM Checker |
|---------|-------------|
| Máy này chạy được model nào? (coding/general…) | ✅ primary |
| MCP trong Claude Code | ✅ `llm-checker-mcp` |
| OpenAI-compat local API | → [LocalAI](localai.md) |
| Deploy cluster multi-device | → [exo](exo.md) / [Cake](cake.md) |

## Chạy thử

```bash
npm install -g llm-checker   # optional: --include=optional cho sql.js
llm-checker hw-detect
llm-checker recommend --category coding
llm-checker sync

# Claude Code MCP
claude mcp add llm-checker -- llm-checker-mcp
# hoặc: llm-checker mcp-setup
```

**License NPDL:** không bán / không cung cấp SaaS tính phí phần mềm — đọc `LICENSE` trước deploy thương mại.

## So với tool khác

| | LLM Checker | llmfit | LocalAI |
|--|-------------|---------|---------|
| Shape | HW→model recommend CLI/MCP | Rust TUI/CLI + bench share | Local OpenAI API engine |
| Inference | ❌ (gợi ý/pull) | ❌ | ✅ |
| Tags | `cli` `mcp` | `cli` `desktop` `skill` | `api` `self-host` |

## Dùng với Odoo / ai_core

- Chọn Ollama model cho laptop/WSL trước khi gắn coding agent.  
- Policy/audit khi org chặn license model.  
- Không thay FreeLLMAPI/LocalAI gateway.

## Link

- Repo: https://github.com/signerless/llm-checker · npm: https://www.npmjs.com/package/llm-checker  
- Peers: [llmfit.md](llmfit.md) · [localai.md](localai.md) · [minicpm.md](minicpm.md) · [exo.md](exo.md) · [cake.md](cake.md) · [airllm.md](airllm.md) · [freellmapi.md](freellmapi.md)
