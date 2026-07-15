# llmfit

> **Repo:** [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit)  
> **Category:** DevTools · Local LLM — HW fit + model recommend  
> **Tags:** `cli` · `desktop` · `self-host` · `skill`  
> **Ngôn ngữ:** Rust · **⭐** ~29.4k · **License:** MIT  
> Crates / Scoop / Homebrew · Skill: `skills/llmfit-advisor`

## Đây là gì?

**llmfit** — CLI/TUI (và desktop) **right-size** model LLM theo RAM/CPU/GPU: detect phần cứng, score Quality/Speed/Fit/Context, gợi ý model + quant sẽ chạy được. Multi-GPU, MoE, ước tốc; provider local Ollama · llama.cpp · MLX · Docker Model Runner · LM Studio. `llmfit bench --share` đo tok/s thật và contribute lại cộng đồng.

Không phải inference server — chỉ **chọn model đúng máy** (+ skill advisor). Runtime vẫn cần Ollama / [LocalAI](localai.md) / llama.cpp…

**Cùng kiểu:** [LLM Checker](llm-checker.md) (JS/npm + MCP), [Models.dev](models-dev.md) (catalog API đa provider), [LocalAI](localai.md), [MiniCPM](minicpm.md), [Unsloth](unsloth.md), [AirLLM](airllm.md).

## Dùng khi nào?

| Nhu cầu | llmfit |
|---------|--------|
| TUI/CLI: máy này chạy model nào? | ✅ primary (~29k ★, MIT) |
| Benchmark tok/s + share cộng đồng | ✅ `llmfit bench --share` |
| MCP trong Claude Code | → [LLM Checker](llm-checker.md) |
| OpenAI-compat local API | → [LocalAI](localai.md) |
| Fine-tune rồi serve | → [Unsloth](unsloth.md) |

## Chạy thử

```bash
# macOS / Linux
brew install AlexsJones/llmfit/llmfit
# hoặc: curl -fsSL https://llmfit.axjns.dev/install.sh | sh

# Windows
scoop install llmfit

llmfit                 # TUI mặc định
llmfit --cli           # classic CLI
llmfit bench --share   # đo + góp số liệu
```

Skill agent: `skills/llmfit-advisor` trong repo.

## So với tool khác

| | llmfit | LLM Checker | LocalAI |
|--|--------|-------------|---------|
| Shape | Rust TUI/CLI + bench share | npm CLI + MCP | Local OpenAI API |
| License | MIT | NPDL-1.0 | MIT |
| Tags | `cli` `desktop` `skill` | `cli` `mcp` | `api` `self-host` |

## Dùng với Odoo / ai_core

- Chọn Ollama/MLX model cho laptop/WSL trước khi gắn coding agent.  
- Skill advisor trong agent workflow — không thay FreeLLMAPI/LocalAI gateway.

## Link

- Repo: https://github.com/AlexsJones/llmfit · Docs: [docs/](https://github.com/AlexsJones/llmfit/tree/main/docs)  
- Peers: [llm-checker.md](llm-checker.md) · [models-dev.md](models-dev.md) · [localai.md](localai.md) · [minicpm.md](minicpm.md) · [unsloth.md](unsloth.md) · [airllm.md](airllm.md) · [exo.md](exo.md)
