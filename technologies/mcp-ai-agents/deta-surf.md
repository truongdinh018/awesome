# Deta Surf

> **Repo:** [deta/surf](https://github.com/deta/surf)  
> **Category:** MCP & AI Agents · Personal AI Notebook (local-first)  
> **Tags:** `rag` · `desktop` · `self-host` · `browser`  
> **Ngôn ngữ:** TypeScript · Svelte · Rust · **⭐** ~3.5k · **License:** Apache-2.0  
> Site: [deta.surf](https://deta.surf) · Discord: [deta.surf/discord](https://deta.surf/discord)

## Đây là gì?

**Deta Surf** là **AI Notebook** desktop: gom file + webpage vào thư viện local, rồi **sinh note thông minh** ngay trên nguồn đó — giảm copy/paste giữa tab, PDF, YouTube và editor.

Local-first (engine **SFFS**, format mở), chọn model tự do (OpenAI, Claude, DeepSeek, Gemma, **Ollama**…). Smart notes: `@-mention` resource, web search, citation deeplink (PDF page / video timestamp), **Surflets** (sinh mini-app). Tab · split view · sidebar. macOS / Windows / Linux.

**Cùng kiểu:** [Open Notebook](open-notebook.md) (NotebookLM-like self-host), [Khoj](khoj.md), [AnythingLLM](anything-llm.md), [SurfSense](surfsense.md), [Trilium](trilium.md), [OpenHuman](openhuman.md).

## Dùng khi nào?

| Nhu cầu | Deta Surf |
|---------|-----------|
| Notebook AI cá nhân · local data · chọn model | ✅ primary |
| Research đa media (PDF, YouTube, web) + citation | ✅ |
| Notebook LM on-prem / Docker + API | → [Open Notebook](open-notebook.md) |
| RAG workspace + MCP agent | → [AnythingLLM](anything-llm.md) / [SurfSense](surfsense.md) |
| Wiki team / collab | → [Docmost](docmost.md) / [Trilium](trilium.md) |

## Chạy thử

Tải bản phát hành: [GitHub Releases](https://github.com/deta/surf/releases/latest)

| Nền tảng | File |
|----------|------|
| macOS Apple Silicon | `Surf-*.arm64.dmg` |
| macOS Intel | `Surf-*.x64.dmg` |
| Windows | `Surf-*-setup.exe` |
| Linux | `Surf-*.AppImage` |

Build từ source: xem `CONTRIBUTING.md`. Install chi tiết: [`docs/INSTALL.md`](https://github.com/deta/surf/blob/main/docs/INSTALL.md) (release OSS có thể chưa ký — macOS/Windows sẽ cảnh báo lần đầu).

## So với tool khác

| | Deta Surf | Open Notebook | AnythingLLM |
|--|-----------|---------------|-------------|
| Shape | Desktop AI notebook + browser tabs | Self-host NotebookLM-like | Desktop/Docker RAG + agents |
| Data | Local SFFS open formats | SurrealDB / Docker | Workspace files |
| Niche | Research·think multi-media UX | Research + podcast API | MCP / agent tooling |
| License | Apache-2.0 | MIT | MIT |

## Dùng với Odoo / ai_core

- Personal / research KB cạnh ERP — không nhét tài liệu nhạy cảm công ty lên cloud NotebookLM.
- Prototype citation + multi-source note trước khi đưa ingest vào `ai_rag_core`.
- Agent/Odoo SOP wiki → Docmost/Trilium hoặc RAG stack; Surf nghiêng cá nhân desktop.

## Link

- Repo: https://github.com/deta/surf · Site: https://deta.surf  
- Install: https://github.com/deta/surf/blob/main/docs/INSTALL.md  
- Peers: [open-notebook.md](open-notebook.md) · [khoj.md](khoj.md) · [anything-llm.md](anything-llm.md) · [surfsense.md](surfsense.md) · [trilium.md](trilium.md) · [openhuman.md](openhuman.md)
