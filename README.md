<!-- markdownlint-disable MD013 MD033 MD036 MD041 MD045 -->

<div align="center">

<img src="https://img.shields.io/badge/-⭐_Awesome_AI-0EA5E9?style=for-the-badge&labelColor=000000" alt="Awesome AI" />

### Catalog công nghệ AI — dễ tìm, dễ hiểu

Mỗi ★ = 1 repo đã star + 1 bài giải thích tiếng Việt (giữ thuật ngữ Anh: API, LLM, RAG, MCP…).

**7 domain · ~30 tags · 154 ★ · 11 CLI harness**

<p>
  <img src="https://img.shields.io/badge/Technologies-154-success?style=flat-square" />
  <img src="https://img.shields.io/badge/CLI_harnesses-11-informational?style=flat-square" />
  <img src="https://img.shields.io/badge/Categories-7-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Multi--tags-yes-purple?style=flat-square" />
  <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" />
</p>

<p>
  <a href="categories/README.md"><strong>📂 Categories</strong></a> ·
  <a href="repos/README.md"><strong>🔗 Starred Repos</strong></a> ·
  <a href="technologies/cli-anything/README.md"><strong>🐙 CLI Harnesses</strong></a> ·
  <a href="technologies/WRITING.md"><strong>✍️ Chuẩn viết bài</strong></a> ·
  <a href="../ai-training/README.md"><strong>🧠 AI Training</strong></a>
</p>

</div>

---

## Đọc catalog như thế nào?

1. **Biết domain?** → nhảy vào [Phân loại chi tiết](#phân-loại-chi-tiết) (§1–§7).  
2. **Biết capability?** (vd. `tts`, `rag`) → [Tag index](#tag-index--capability--gợi-ý).  
3. **Biết số thứ tự star?** → [Index 154 ★](#index-154--theo-primary) hoặc [repos/README.md](repos/README.md).  
4. **Muốn hiểu sâu?** → mở `technologies/<slug>.md` (mục **Đây là gì?** trước).

| Lớp | Ý nghĩa | Ví dụ |
|-----|---------|--------|
| **Primary** | Chỉ **một** “nhà” trong mục lục §1–§7 | Speech & Audio |
| **Tags** | Nhiều capability cùng lúc | `stt` + `tts` + `mcp` |
| **Bài viết** | Giải thích VN + chạy thử + peers | [caveman.md](technologies/caveman.md) |

```
Star GitHub  →  repos/README.md  →  technologies/<slug>.md  →  README + categories/
```

## Mục lục

1. [Đọc catalog như thế nào?](#đọc-catalog-như-thế-nào)
2. [Chú giải Tags](#chú-giải-tags)
3. [Tag index](#tag-index--capability--gợi-ý)
4. [Phân loại chi tiết](#phân-loại-chi-tiết)
   - [1. MCP & AI Agents](#1-mcp--ai-agents)
   - [2. Speech & Audio](#2-speech--audio)
   - [3. Image & Video](#3-image--video)
   - [4. UI Automation](#4-ui-automation--computer-use)
   - [5. CV & Edge](#5-computer-vision--edge)
   - [6. DevTools](#6-devtools--integration)
   - [7. Security](#7-security--pentesting)
5. [Index 154 ★ theo Primary](#index-154--theo-primary)
6. [Cấu trúc · Cập nhật](#cấu-trúc-thư-mục)

---

## Chú giải Tags

<details>
<summary><strong>Agent & tri thức</strong></summary>

| Tag | Nghĩa |
|-----|--------|
| `mcp` | MCP server / client |
| `agent` | Agent runtime / orchestrator |
| `coding-agent` | Software / coding agent |
| `rag` | Retrieval / RAG |
| `extract` | Extract → graph / structured data |
| `prompt` | Prompt library |
| `skill` | Agent Skills (`SKILL.md`) |
| `cli` | CLI-first |
| `harness` | CLI-Anything child harness |
| `guardrail` | Agent / shell safety |

</details>

<details>
<summary><strong>Speech & media</strong></summary>

| Tag | Nghĩa |
|-----|--------|
| `stt` / `tts` / `voice-clone` | Speech I/O |
| `watermark` | Watermark nội dung AI |
| `image-gen` / `video` | Sinh ảnh / video |
| `ui-to-code` | Screenshot / URL → code |
| `3d` / `cad` / `game` | 3D · CAD · game |

</details>

<details>
<summary><strong>Automation · edge · DevTools · security</strong></summary>

| Tag | Nghĩa |
|-----|--------|
| `ui-automation` / `computer-use` / `browser` / `dom` | UI automation |
| `cv` / `edge` / `iot` | Vision · edge |
| `pdf` / `ocr` / `office` / `notification` / `workspace` | Productivity |
| `dataset` | Corpus / HF datasets (RAG training & ingest) |
| `workflow` / `diagram` / `gis` | Automation · GIS |
| `security` / `pentest` | AppSec |
| `self-host` / `desktop` / `api` | Deploy shape |

</details>

---

## Tag index — capability → gợi ý

> Danh sách đầy đủ nằm trong bảng §1–§7. Dưới đây chỉ **điểm neo** (representative), không liệt kê hết `self-host`/`cli`.

| Tag | Điểm neo |
|-----|----------|
| `mcp` | Hermes · RAGFlow · AnythingLLM · Voicebox · NotebookLM MCP · **docmd** · **Tabularis** · **Semble** · **Chrome DevTools MCP** · **Firecrawl** · **Claude-Mem** · **LLM Checker** · **Vibe-Trading** · **OpenSpace** · **Claude Peers** · **DeerFlow** · **QuiverAI** *(bookmark)* |
| `ui-automation` / `browser` | Midscene · Stagehand · Page Agent · Puppeteer · **Chrome DevTools MCP** · **CloakBrowser** · **Scrapling** *(fetch)* · **Crawl4AI** *(crawl)* · **Firecrawl** *(scrape)* |
| `agent` | Hermes · OpenHands · **Atomic Agents** · EpicStaff · Stagehand · **OpenHuman** · **MiroFish** · **Vibe-Trading** · **DeerFlow** |
| `coding-agent` | OpenHands · Addy's Agent Skills · Understand Anything · OpenMontage · **Happy** · **Vibe Kanban** · **Lanes** · **Claude Peers** · **DeerFlow** · **CC WF Studio** · **Spec Kit** · **AI Eng Coach** · **Easy-Vibe** · **Karpathy Guidelines** · **Matt Pocock Skills** · **Claude-Mem** · **GitReverse** · **Semble** · **Gitingest** · **ghgrab** |
| `skill` / `prompt` | CLI-Anything · Addy's Agent Skills · Ponytail · **Taste Skill** · **Caveman** · **Karpathy Guidelines** · **Matt Pocock Skills** · **Spec Kit** · **AI Eng Coach** · **Easy-Vibe** · **GitReverse** · **knowledge-work-plugins** · **CC WF Studio** · **OpenSpace** · prompts.chat · OpenMontage · **Toonflow** · **docmd** · [**Skill registries**](technologies/skill-registries.md) |
| `rag` | RAGFlow · WeKnora · AnythingLLM · SAG · Pathway · Understand Anything · Án lệ TOAAN · Bộ Pháp Điển MOJ · **docmd** *(semantic search)* · **OpenHuman** · **MiroFish** · **Semble** *(code)* · **Trilium** *(KB)* · **Docmost** *(wiki)* · **Gitingest** *(repo digest)* |
| `extract` | Hyper-Extract · **Scrapling** · **Crawl4AI** · **Firecrawl** |
| `stt` | faster-whisper · FunASR · sherpa-onnx · Voicebox · pyVideoTrans · **Voice-Pro** |
| `tts` / `voice-clone` | Voicebox · VieNeu-TTS · **KhanhTTS** · VoxCPM · **CosyVoice** · **MOSS-TTS** · **SoulX-Singer** · **Supertonic** · **LuxTTS** · VibeVoice · OmniVoice · **Voice-Pro** · sherpa-onnx *(TTS)* |
| `video` | OpenMontage · HyperFrames · ComfyUI · pyVideoTrans · **FreeCut** · **yt-dlp** · **MoneyPrinterTurbo** · **Toonflow** · **Pixelle-Video** · **SANA** · **Open Generative AI** · **Supervision** · **LingBot-Map** *(3D reconstr.)* · **Deep-Live-Cam** |
| `api` / `self-host` | LocalAI · FreeLLMAPI · **MiniCPM** · **exo** · **Cake** · **Floci** · Stirling-PDF · **zca-bridge** · **Firecrawl** · hầu hết RAG stack |
| `notification` / `workflow` | ntfy · Yuvomi · TREK · OpenMontage · **zca-bridge** · **Horizon** · **changedetection.io** · **Vibe Kanban** · **n8n-workflows** · **Duckle** · **CC WF Studio** |
| `ocr` / `pdf` | MinerU · HunyuanOCR · Nanonets-OCR2 · DeepSeek-OCR · dots.ocr · Stirling-PDF · **MarkItDown** · **OpenResume** · **Surya** · **Infinity-Parser2** · **protonx-legal-tc** |
| `dataset` / `rag` *(corpora)* | Án lệ TOAAN · Bộ Pháp Điển MOJ · (+ RAG platforms §1.2) · **n8n-workflows** *(templates)* · **ViT5** *(VN backbone)* |
| `security` / `pentest` | Strix · **HackingTool** *(tool menu)* · **OSIRIS** *(OSINT)* · Magika *(file-type)* · dcg *(guardrail)* · **AGT** |

---

## Phân loại chi tiết

### 1. MCP & AI Agents

**Mục đích:** MCP, RAG/knowledge, agent runtime, skill/prompt, memory, guardrail.

#### 1.1 MCP connectors & extract

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **NotebookLM MCP** | `mcp` `rag` | [notebooklm-mcp.md](technologies/notebooklm-mcp.md) |
| **SAG** | `rag` `mcp` `self-host` | [sag.md](technologies/sag.md) |
| **Hyper-Extract** | `extract` `rag` `mcp` `cli` | [hyper-extract.md](technologies/hyper-extract.md) |
| **Scrapling** | `extract` `mcp` `cli` `browser` `self-host` | [scrapling.md](technologies/scrapling.md) |
| **Crawl4AI** | `extract` `cli` `browser` `self-host` `api` | [crawl4ai.md](technologies/crawl4ai.md) |
| **Firecrawl** | `extract` `api` `mcp` `cli` `self-host` `browser` | [firecrawl.md](technologies/firecrawl.md) |
| **PageIndex** | `rag` `mcp` `self-host` `cli` | [pageindex.md](technologies/pageindex.md) |
| **Pathway** | `rag` `cli` `self-host` `workflow` `api` | [pathway.md](technologies/pathway.md) |
| **PixelRAG** | `rag` `cli` `skill` `api` | [pixelrag.md](technologies/pixelrag.md) |

#### 1.2 RAG platforms

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **WeKnora** | `rag` `mcp` `agent` `self-host` `cli` `skill` | [weknora.md](technologies/weknora.md) |
| **RAGFlow** | `rag` `agent` `mcp` `self-host` `api` | [ragflow.md](technologies/ragflow.md) |
| **AnythingLLM** | `rag` `agent` `mcp` `self-host` `desktop` `api` | [anything-llm.md](technologies/anything-llm.md) |
| **Open Notebook** | `rag` `self-host` `api` `tts` | [open-notebook.md](technologies/open-notebook.md) |
| **Khoj** | `rag` `agent` `self-host` `desktop` `stt` | [khoj.md](technologies/khoj.md) |
| **Trilium Notes** | `rag` `self-host` `desktop` `api` | [trilium.md](technologies/trilium.md) |
| **Docmost** | `rag` `self-host` `api` `workspace` | [docmost.md](technologies/docmost.md) |
| **OpenHuman** | `rag` `agent` `mcp` `self-host` `desktop` `workflow` `skill` | [openhuman.md](technologies/openhuman.md) |
| **SurfSense** | `rag` `agent` `mcp` `self-host` `api` `workflow` | [surfsense.md](technologies/surfsense.md) |
| └ Obsidian harness | `harness` `rag` `cli` | [cli-anything/obsidian.md](technologies/cli-anything/obsidian.md) |

#### 1.3 Agent runtime

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Hermes Agent** | `agent` `mcp` `skill` `cli` `self-host` | [hermes-agent.md](technologies/hermes-agent.md) |
| **OpenHands** | `coding-agent` `agent` `self-host` | [openhands.md](technologies/openhands.md) |
| **Happy** | `coding-agent` `cli` `agent` `self-host` `desktop` | [happy.md](technologies/happy.md) |
| **Vibe Kanban** | `coding-agent` `agent` `cli` `self-host` `workflow` `mcp` | [vibe-kanban.md](technologies/vibe-kanban.md) |
| **Lanes** | `coding-agent` `agent` `desktop` `mcp` `workflow` `cli` | [lanes.md](technologies/lanes.md) |
| **Claude Peers MCP** | `mcp` `coding-agent` `agent` `cli` `self-host` | [claude-peers-mcp.md](technologies/claude-peers-mcp.md) |
| **DeerFlow** | `agent` `skill` `coding-agent` `self-host` `workflow` `mcp` `cli` | [deer-flow.md](technologies/deer-flow.md) |
| **CC Workflow Studio** | `coding-agent` `skill` `mcp` `cli` `workflow` | [cc-wf-studio.md](technologies/cc-wf-studio.md) |
| **Spec Kit** | `coding-agent` `skill` `cli` `workflow` `prompt` | [spec-kit.md](technologies/spec-kit.md) |
| **Atomic Agents** | `agent` `cli` `api` `workflow` | [atomic-agents.md](technologies/atomic-agents.md) |
| **EpicStaff** | `agent` `mcp` `rag` `self-host` `workflow` | [epicstaff.md](technologies/epicstaff.md) |
| **MiroFish** | `agent` `self-host` `rag` `workflow` `api` | [mirofish.md](technologies/mirofish.md) |
| **Vibe-Trading** | `agent` `mcp` `skill` `cli` `self-host` `workflow` `desktop` | [vibe-trading.md](technologies/vibe-trading.md) |
| **CLI-Anything** ★ | `cli` `harness` `skill` `agent` | [cli-anything.md](technologies/cli-anything.md) |
| └ *11 harness* | [cli-anything/](technologies/cli-anything/README.md) | |

#### 1.4 Skill · prompt · memory · knowledge graph · guardrail

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **prompts.chat** | `prompt` `mcp` `cli` `self-host` | [prompts-chat.md](technologies/prompts-chat.md) |
| **Ponytail** | `skill` `coding-agent` `prompt` | [ponytail.md](technologies/ponytail.md) |
| **Taste Skill** | `skill` `coding-agent` `prompt` `image-gen` | [taste-skill.md](technologies/taste-skill.md) |
| **Caveman** | `skill` `coding-agent` `prompt` `cli` `mcp` | [caveman.md](technologies/caveman.md) |
| **Karpathy Guidelines** | `skill` `coding-agent` `prompt` | [karpathy-skills.md](technologies/karpathy-skills.md) |
| **Matt Pocock Skills** | `skill` `coding-agent` `prompt` | [mattpocock-skills.md](technologies/mattpocock-skills.md) |
| **AI Engineering Coach** | `coding-agent` `skill` `desktop` `cli` | [ai-engineering-coach.md](technologies/ai-engineering-coach.md) |
| **Easy-Vibe** | `coding-agent` `skill` `prompt` `workflow` | [easy-vibe.md](technologies/easy-vibe.md) |
| **Addy's Agent Skills** | `skill` `coding-agent` `prompt` | [agent-skills.md](technologies/agent-skills.md) |
| **knowledge-work-plugins** | `skill` `prompt` `workspace` `office` | [knowledge-work-plugins.md](technologies/knowledge-work-plugins.md) |
| **Understand Anything** | `skill` `coding-agent` `rag` `cli` `agent` | [understand-anything.md](technologies/understand-anything.md) |
| **Headroom** | `mcp` `cli` `agent` `coding-agent` `self-host` | [headroom.md](technologies/headroom.md) |
| **Semble** | `mcp` `cli` `coding-agent` `rag` `self-host` | [semble.md](technologies/semble.md) |
| **Gitingest** | `cli` `coding-agent` `rag` `self-host` | [gitingest.md](technologies/gitingest.md) |
| **GitReverse** | `coding-agent` `prompt` `self-host` | [gitreverse.md](technologies/gitreverse.md) |
| **ghgrab** | `cli` `coding-agent` `self-host` | [ghgrab.md](technologies/ghgrab.md) |
| **TencentDB Agent Memory** | `agent` `self-host` `coding-agent` | [tencentdb-agent-memory.md](technologies/tencentdb-agent-memory.md) |
| **Claude-Mem** | `agent` `coding-agent` `mcp` `self-host` `rag` | [claude-mem.md](technologies/claude-mem.md) |
| **drawio-skill** | `skill` `diagram` `cli` | [drawio-skill.md](technologies/drawio-skill.md) |
| **Destructive Command Guard** | `guardrail` `cli` | [destructive-command-guard.md](technologies/destructive-command-guard.md) |
| **Agent Governance Toolkit** | `guardrail` `security` `agent` `cli` `mcp` | [agent-governance-toolkit.md](technologies/agent-governance-toolkit.md) |
| **OpenSpace** | `skill` `agent` `mcp` `cli` `self-host` `coding-agent` `workflow` | [openspace.md](technologies/openspace.md) |

> **Skill websites / registries** (bookmark, không ★): [skill-registries.md](technologies/skill-registries.md) — [Skills.sh](https://skills.sh) · [AgentSkill.sh](https://agentskill.sh) · [Skills Hub](https://skills-hub.ai/about)  
> **Coding-agent companions** (bookmark, không ★): [codex-pets.md](technologies/codex-pets.md) — [Codex Pets](https://www.codexpets.app/) · [Petdex](https://petdex.dev)

---

### 2. Speech & Audio

**Mục đích:** STT/TTS, voice studio, cloning, audiobook, watermark, edge voice.

#### 2.1 STT engines

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **faster-whisper** | `stt` `cli` | [faster-whisper.md](technologies/faster-whisper.md) |
| **FunASR** | `stt` `cli` `api` `self-host` `mcp` | [funasr.md](technologies/funasr.md) |
| **sherpa-onnx** | `stt` `tts` `edge` `self-host` `cli` `api` | [sherpa-onnx.md](technologies/sherpa-onnx.md) |
| **CapCut TTS/STT API** | `stt` `tts` `cli` `api` | [capcut-tts-api.md](technologies/capcut-tts-api.md) |
| └ VideoCaptioner harness | `harness` `stt` `video` | [cli-anything/videocaptioner.md](technologies/cli-anything/videocaptioner.md) |

> CapCut client **không chính thức** — chỉ account/session hợp lệ; ưu tiên FunASR/faster-whisper cho production.

#### 2.2 Voice studios *(STT + TTS + UI)*

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Voicebox** | `stt` `tts` `voice-clone` `desktop` `self-host` `mcp` `api` | [voicebox.md](technologies/voicebox.md) |
| **OmniVoice Studio** | `stt` `tts` `voice-clone` `desktop` `self-host` | [omnivoice-studio.md](technologies/omnivoice-studio.md) |
| **Voice-Pro** | `stt` `tts` `voice-clone` `self-host` `desktop` `video` | [voice-pro.md](technologies/voice-pro.md) |

#### 2.3 TTS · Voice cloning

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **VoxCPM** | `tts` `voice-clone` | [voxcpm.md](technologies/voxcpm.md) |
| **VibeVoice** | `tts` `voice-clone` `self-host` | [vibevoice.md](technologies/vibevoice.md) |
| **CosyVoice** | `tts` `voice-clone` `self-host` `api` `cli` | [cosyvoice.md](technologies/cosyvoice.md) |
| **MOSS-TTS** | `tts` `voice-clone` `self-host` `api` `cli` | [moss-tts.md](technologies/moss-tts.md) |
| **SoulX-Singer** | `tts` `voice-clone` `self-host` `cli` | [soulx-singer.md](technologies/soulx-singer.md) |
| **VieNeu-TTS** | `tts` `voice-clone` `self-host` `api` `desktop` | [vieneu-tts.md](technologies/vieneu-tts.md) |
| **KhanhTTS-OmniVoice** | `tts` `voice-clone` `self-host` `cli` | [khanhtts-omnivoice.md](technologies/khanhtts-omnivoice.md) |
| **Supertonic** | `tts` `voice-clone` `self-host` `cli` `api` `edge` | [supertonic.md](technologies/supertonic.md) |
| **LuxTTS** | `tts` `voice-clone` `self-host` `cli` | [luxtts.md](technologies/luxtts.md) |
| **sherpa-onnx** | *(xem 2.1 — cũng TTS edge)* | |

#### 2.4 Audiobook / narration pipeline

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **AudioBook KJ** | `tts` `voice-clone` `desktop` `self-host` `video` | [audiobook-kj.md](technologies/audiobook-kj.md) |

#### 2.5 Watermark & Edge voice

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **AudioSeal** | `watermark` | [audioseal.md](technologies/audioseal.md) |
| **XiaoZhi ESP32** | `stt` `tts` `edge` `iot` `mcp` | [xiaozhi-esp32.md](technologies/xiaozhi-esp32.md) |
| **sherpa-onnx** | *(xem 2.1 — ONNX edge runtime)* | |

> Blind watermark ảnh: [blind_watermark](technologies/blind-watermark.md) *(Primary §3)*.

---

### 3. Image & Video

**Mục đích:** Sinh / compose video, localize+dub, UI→code, CAD/3D harness, watermark, playlist, download.

#### 3.1 Generate · compose · agentic studio

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ComfyUI** ★ | `image-gen` `video` `self-host` | [comfyui.md](technologies/comfyui.md) |
| └ ComfyUI harness | `harness` `image-gen` `cli` | [cli-anything/comfyui.md](technologies/cli-anything/comfyui.md) |
| **SANA** | `image-gen` `video` `self-host` `cli` `api` | [sana.md](technologies/sana.md) |
| **Open Generative AI** | `image-gen` `video` `desktop` `self-host` `api` | [open-generative-ai.md](technologies/open-generative-ai.md) |
| **HyperFrames** | `video` `cli` `agent` | [hyperframes.md](technologies/hyperframes.md) |
| **OpenMontage** | `video` `agent` `skill` `coding-agent` `workflow` `cli` `tts` | [openmontage.md](technologies/openmontage.md) |
| **AI-auto-generate-video** | `video` `skill` `tts` `cli` `agent` | [ai-auto-generate-video.md](technologies/ai-auto-generate-video.md) |
| **MagicMirror** | `image-gen` `desktop` `self-host` `cv` | [magicmirror.md](technologies/magicmirror.md) |
| **Deep-Live-Cam** | `video` `image-gen` `desktop` `self-host` `cv` `cli` | [deep-live-cam.md](technologies/deep-live-cam.md) |
| **MoneyPrinterTurbo** | `video` `tts` `cli` `self-host` `api` `skill` | [moneyprinterturbo.md](technologies/moneyprinterturbo.md) |
| **Toonflow** | `video` `image-gen` `desktop` `self-host` `agent` `skill` | [toonflow.md](technologies/toonflow.md) |
| **Pixelle-Video** | `video` `tts` `image-gen` `self-host` `workflow` `api` | [pixelle-video.md](technologies/pixelle-video.md) |

> **Vector SVG SaaS** (bookmark, không ★): [quiverai.md](technologies/quiverai.md) — [QuiverAI](https://quiver.ai/) (text/image→SVG · MCP/API)

#### 3.2 Browser NLE

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **FreeCut** | `video` `self-host` `stt` `tts` | [freecut.md](technologies/freecut.md) |

#### 3.3 Localize · dub · subtitle

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **pyVideoTrans** | `video` `stt` `tts` `voice-clone` `desktop` `self-host` `cli` | [pyvideotrans.md](technologies/pyvideotrans.md) |

#### 3.4 UI → code · Agentic HTML

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ScreenCoder** | `ui-to-code` | [screencoder.md](technologies/screencoder.md) |
| **AI Website Cloner** | `ui-to-code` `coding-agent` `skill` | [ai-website-cloner.md](technologies/ai-website-cloner.md) |
| **HTML Anything** | `skill` `coding-agent` `agent` `video` `self-host` | [html-anything.md](technologies/html-anything.md) |

#### 3.5 CAD · 3D · Game *(harness)*

| Harness | Tags | Bài viết |
|---------|------|----------|
| FreeCAD | `harness` `cad` `cli` | [freecad.md](technologies/cli-anything/freecad.md) |
| Blender | `harness` `3d` `cli` | [blender.md](technologies/cli-anything/blender.md) |
| Godot | `harness` `game` `cli` | [godot.md](technologies/cli-anything/godot.md) |

#### 3.6 Watermark · playlists · download

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **blind_watermark** | `watermark` `cli` | [blind-watermark.md](technologies/blind-watermark.md) |
| **iptv-org/iptv** | `video` | [iptv-org.md](technologies/iptv-org.md) |
| **yt-dlp** | `video` `cli` `self-host` | [yt-dlp.md](technologies/yt-dlp.md) |

---

### 4. UI Automation & Computer Use

**Mục đích:** NL → UI action (vision / DOM) · CDP driver foundation.

| # | Lớp | Công nghệ | Tags | Bài viết |
|---|-----|-----------|------|----------|
| 4.0 | CDP driver | **Puppeteer** | `browser` `ui-automation` `api` `mcp` | [puppeteer.md](technologies/puppeteer.md) |
| 4.05 | DevTools MCP | **Chrome DevTools MCP** | `mcp` `browser` `ui-automation` `cli` `coding-agent` | [chrome-devtools-mcp.md](technologies/chrome-devtools-mcp.md) |
| 4.06 | Stealth Chromium | **CloakBrowser** | `browser` `ui-automation` `api` `cli` `self-host` | [cloakbrowser.md](technologies/cloakbrowser.md) |
| 4.1 | Vision | **Midscene.js** | `ui-automation` `computer-use` `browser` `skill` | [midscene.md](technologies/midscene.md) |
| 4.2 | NL ↔ code | **Stagehand** | `ui-automation` `browser` `agent` | [stagehand.md](technologies/stagehand.md) |
| 4.3 | DOM agent | **Page Agent** | `ui-automation` `browser` `dom` `mcp` `agent` | [page-agent.md](technologies/page-agent.md) |
| 4.4 | Game CLI | Slay the Spire II | `harness` `ui-automation` `game` `cli` | [slay-the-spire-ii.md](technologies/cli-anything/slay-the-spire-ii.md) |

**Ranh giới:** Puppeteer = CDP API · **Chrome DevTools MCP** = MCP/CLI DevTools · **CloakBrowser** = stealth Chromium drop-in · Midscene = screenshot→action · Stagehand = NL↔code · Page Agent = DOM LLM · harness = surface có cấu trúc.

---

### 5. Computer Vision & Edge

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ALPR** | `cv` `edge` `self-host` | [alpr.md](technologies/alpr.md) |
| **PLFM RADAR (AERIS-10)** | `edge` `iot` `self-host` | [plfm-radar.md](technologies/plfm-radar.md) |
| **RuView** | `cv` `edge` `iot` `self-host` | [ruview.md](technologies/ruview.md) |
| **LingBot-Map** | `cv` `self-host` `cli` `video` | [lingbot-map.md](technologies/lingbot-map.md) |
| **InsightFace** | `cv` `self-host` `cli` | [insightface.md](technologies/insightface.md) |
| **LocateAnything-3B** | `cv` `ocr` `self-host` `cli` | [locate-anything.md](technologies/locate-anything.md) |
| **Supervision** | `cv` `cli` `self-host` `video` | [supervision.md](technologies/supervision.md) |

---

### 6. DevTools & Integration

**Mục đích:** Notify, documents, GIS/workflow, LLM gateway, train, inference accel.

#### 6.1 Productivity · notify · collab

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Google Workspace CLI** | `cli` `workspace` `skill` `office` | [google-workspace-cli.md](technologies/google-workspace-cli.md) |
| **ntfy** | `notification` `self-host` `cli` | [ntfy.md](technologies/ntfy.md) |
| **TREK** | `mcp` `self-host` `notification` `gis` | [trek.md](technologies/trek.md) |
| **Yuvomi** | `self-host` `mcp` `api` `notification` | [yuvomi.md](technologies/yuvomi.md) |
| **zca-bridge** | `self-host` `api` `notification` `workflow` | [zca-bridge.md](technologies/zca-bridge.md) |
| **Jitsi Meet** | `self-host` `video` `api` | [jitsi-meet.md](technologies/jitsi-meet.md) |
| **Folo** | `desktop` `self-host` | [folo.md](technologies/folo.md) |
| **Horizon** | `mcp` `self-host` `workflow` `notification` `cli` | [horizon.md](technologies/horizon.md) |
| **changedetection.io** | `notification` `self-host` `browser` `workflow` `api` | [changedetection-io.md](technologies/changedetection-io.md) |
| **Dashy** | `self-host` `desktop` `workspace` | [dashy.md](technologies/dashy.md) |
| **Whisper Money** | `self-host` `desktop` `workspace` | [whisper-money.md](technologies/whisper-money.md) |

#### 6.2 Documents · PDF · file type

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Magika** | `cli` `security` | [magika.md](technologies/magika.md) |
| **Stirling-PDF** | `pdf` `ocr` `self-host` `api` | [stirling-pdf.md](technologies/stirling-pdf.md) |
| **MarkItDown** | `cli` `pdf` `ocr` | [markitdown.md](technologies/markitdown.md) |
| **OpenResume** | `pdf` `self-host` | [open-resume.md](technologies/open-resume.md) |
| **docmd** | `mcp` `skill` `cli` `self-host` `api` `rag` | [docmd.md](technologies/docmd.md) |
| └ LibreOffice harness | `harness` `office` `cli` | [libreoffice.md](technologies/cli-anything/libreoffice.md) |

#### 6.2b OCR · Document VLMs

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **MinerU** | `ocr` `pdf` `cli` `self-host` `api` | [mineru.md](technologies/mineru.md) |
| **HunyuanOCR** | `ocr` `self-host` `cli` | [hunyuan-ocr.md](technologies/hunyuan-ocr.md) |
| **dots.ocr** | `ocr` `pdf` `self-host` `cli` | [dots-ocr.md](technologies/dots-ocr.md) |
| **Nanonets-OCR2** | `ocr` `pdf` `self-host` `api` | [nanonets-ocr2.md](technologies/nanonets-ocr2.md) |
| **DeepSeek-OCR** | `ocr` `self-host` `cli` `api` | [deepseek-ocr.md](technologies/deepseek-ocr.md) |
| **Surya** | `ocr` `pdf` `self-host` `cli` | [surya.md](technologies/surya.md) |
| **Infinity-Parser2** | `ocr` `pdf` `self-host` `cli` | [infinity-parser2.md](technologies/infinity-parser2.md) |
| **VLMs OCR Playground** | `ocr` `self-host` | [vlms-ocr-playground.md](technologies/vlms-ocr-playground.md) |

> Dots demo Space: [yahtzee/Dots-OCR](https://huggingface.co/spaces/yahtzee/Dots-OCR) · Surya demo: [xiaoyao9184/surya](https://huggingface.co/spaces/xiaoyao9184/surya) · Infinity-Parser2: [Infinity-Parser2-Demo](https://huggingface.co/spaces/infly/Infinity-Parser2-Demo) · DeepSeek quant: `DeepSeek-OCR-Latest-BF16.I64` (xem [deepseek-ocr.md](technologies/deepseek-ocr.md)).  
> Grounding / text-locate (không thay PDF→MD): [LocateAnything-3B](technologies/locate-anything.md) *(Primary §5)*.

#### 6.3 Diagram · Workflow · GIS

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **drawio-skill** | `skill` `diagram` `cli` *(Primary §1.4)* | [drawio-skill.md](technologies/drawio-skill.md) |
| └ Draw.io · n8n · ArcGIS harnesses | `harness` … | [cli-anything/](technologies/cli-anything/README.md) |
| **FossFLOW** | `diagram` `self-host` | [fossflow.md](technologies/fossflow.md) |
| **n8n-workflows** | `workflow` `self-host` `dataset` | [n8n-workflows.md](technologies/n8n-workflows.md) |
| **Duckle** | `workflow` `self-host` `desktop` `mcp` `cli` `agent` | [duckle.md](technologies/duckle.md) |
| **Tabularis** | `mcp` `desktop` `self-host` `cli` `agent` | [tabularis.md](technologies/tabularis.md) |
| **Floci** | `self-host` `cli` `api` | [floci.md](technologies/floci.md) |
| **VeloxDB** | `desktop` `self-host` `cli` | [veloxdb.md](technologies/veloxdb.md) |
| **Vietnamese Provinces DB** | `gis` | [vietnamese-provinces-database.md](technologies/vietnamese-provinces-database.md) |
| **COBE** | `gis` | [cobe.md](technologies/cobe.md) |

#### 6.4 LLM gateway · train · inference

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **FreeLLMAPI** | `api` `self-host` `mcp` `desktop` | [freellmapi.md](technologies/freellmapi.md) |
| **LocalAI** | `api` `self-host` `mcp` `agent` `stt` `tts` `image-gen` | [localai.md](technologies/localai.md) |
| **MiniCPM** | `self-host` `cli` `edge` `desktop` `skill` | [minicpm.md](technologies/minicpm.md) |
| **Unsloth** | `self-host` `cli` `api` `desktop` | [unsloth.md](technologies/unsloth.md) |
| **DFlash** | `cli` `self-host` `api` | [dflash.md](technologies/dflash.md) |
| **AirLLM** | `self-host` `cli` `api` | [airllm.md](technologies/airllm.md) |
| **exo** | `self-host` `api` `cli` `desktop` | [exo.md](technologies/exo.md) |
| **Cake** | `api` `self-host` `cli` `tts` `image-gen` `edge` | [cake.md](technologies/cake.md) |
| **LLM Checker** | `cli` `mcp` `self-host` | [llm-checker.md](technologies/llm-checker.md) |
| **llmfit** | `cli` `desktop` `self-host` `skill` | [llmfit.md](technologies/llmfit.md) |

> Fine-tune Odoo: [ai-training](../ai-training/README.md).

#### 6.5 Datasets · Vietnam legal · VN NLP

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Án lệ TOAAN** | `rag` `dataset` `self-host` | [anle-toaan.md](technologies/anle-toaan.md) |
| **Bộ Pháp Điển MOJ** | `rag` `dataset` `self-host` | [phapdien-moj.md](technologies/phapdien-moj.md) |
| **protonx-legal-tc** | `ocr` `self-host` `cli` | [protonx-legal-tc.md](technologies/protonx-legal-tc.md) |
| **ViT5-base** | `self-host` `cli` `api` | [vit5-base.md](technologies/vit5-base.md) |

> Nguồn công khai cổng nhà nước · CC-BY-4.0 (datasets) · verify văn bản gốc khi dùng agent.  
> protonx-legal-tc: license **NC** — đọc card HF. ViT5: MIT backbone cho fine-tune VN.

---

### 7. Security & Pentesting

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Strix** | `security` `pentest` `agent` `cli` | [strix.md](technologies/strix.md) |
| **HackingTool** | `security` `pentest` `cli` `self-host` | [hackingtool.md](technologies/hackingtool.md) |
| **OSIRIS** | `security` `gis` `self-host` `desktop` `api` | [osiris.md](technologies/osiris.md) |

| Khác biệt | Vai trò |
|-----------|---------|
| **dcg** (§1.4) | Phòng agent phá máy (shell/git) |
| **AGT** (§1.4) | Policy / identity / sandbox tool-calls |
| **Strix** | Pentest AI có kiểm soát (RoE) |
| **HackingTool** | Menu cài tool pentest cổ điển (lab/CTF) |
| **OSIRIS** | OSINT map + RECON toolkit |
| **Magika** (§6.2) | AI file-type trước ingest/scan |

---

## Index 154 ★ theo Primary

> `#` = ID trong [repos/README.md](repos/README.md) (thứ tự star). Bên dưới nhóm theo **Primary** để duyệt nhanh.

### MCP & Agents (54)

| # | Công nghệ | Tags |
|---|-----------|------|
| 2 | [NotebookLM MCP](technologies/notebooklm-mcp.md) | `mcp` `rag` |
| 3 | [Destructive Command Guard](technologies/destructive-command-guard.md) | `guardrail` `cli` |
| 15 | [SAG](technologies/sag.md) | `rag` `mcp` `self-host` |
| 16 | [CLI-Anything](technologies/cli-anything.md) | `cli` `harness` `skill` `agent` |
| 18 | [prompts.chat](technologies/prompts-chat.md) | `prompt` `mcp` `cli` `self-host` |
| 19 | [drawio-skill](technologies/drawio-skill.md) | `skill` `diagram` `cli` |
| 21 | [Hyper-Extract](technologies/hyper-extract.md) | `extract` `rag` `mcp` `cli` |
| 22 | [Hermes Agent](technologies/hermes-agent.md) | `agent` `mcp` `skill` `cli` `self-host` |
| 23 | [OpenHands](technologies/openhands.md) | `coding-agent` `agent` `self-host` |
| 26 | [Ponytail](technologies/ponytail.md) | `skill` `coding-agent` `prompt` |
| 27 | [PageIndex](technologies/pageindex.md) | `rag` `mcp` `self-host` `cli` |
| 32 | [EpicStaff](technologies/epicstaff.md) | `agent` `mcp` `rag` `self-host` `workflow` |
| 34 | [Headroom](technologies/headroom.md) | `mcp` `cli` `agent` `coding-agent` `self-host` |
| 36 | [WeKnora](technologies/weknora.md) | `rag` `mcp` `agent` `self-host` `cli` `skill` |
| 37 | [RAGFlow](technologies/ragflow.md) | `rag` `agent` `mcp` `self-host` `api` |
| 38 | [AnythingLLM](technologies/anything-llm.md) | `rag` `agent` `mcp` `self-host` `desktop` `api` |
| 39 | [Open Notebook](technologies/open-notebook.md) | `rag` `self-host` `api` `tts` |
| 40 | [Khoj](technologies/khoj.md) | `rag` `agent` `self-host` `desktop` `stt` |
| 41 | [SurfSense](technologies/surfsense.md) | `rag` `agent` `mcp` `self-host` `api` `workflow` |
| 43 | [PixelRAG](technologies/pixelrag.md) | `rag` `cli` `skill` `api` |
| 50 | [Addy's Agent Skills](technologies/agent-skills.md) | `skill` `coding-agent` `prompt` |
| 52 | [Pathway](technologies/pathway.md) | `rag` `cli` `self-host` `workflow` `api` |
| 53 | [TencentDB Agent Memory](technologies/tencentdb-agent-memory.md) | `agent` `self-host` `coding-agent` |
| 58 | [Understand Anything](technologies/understand-anything.md) | `skill` `coding-agent` `rag` `cli` `agent` |
| 78 | [Atomic Agents](technologies/atomic-agents.md) | `agent` `cli` `api` `workflow` |
| 81 | [Taste Skill](technologies/taste-skill.md) | `skill` `coding-agent` `prompt` `image-gen` |
| 86 | [Scrapling](technologies/scrapling.md) | `extract` `mcp` `cli` `browser` `self-host` |
| 87 | [Happy](technologies/happy.md) | `coding-agent` `cli` `agent` `self-host` `desktop` |
| 89 | [OpenHuman](technologies/openhuman.md) | `rag` `agent` `mcp` `self-host` `desktop` `workflow` `skill` |
| 90 | [Vibe Kanban](technologies/vibe-kanban.md) | `coding-agent` `agent` `cli` `self-host` `workflow` `mcp` |
| 95 | [MiroFish](technologies/mirofish.md) | `agent` `self-host` `rag` `workflow` `api` |
| 96 | [knowledge-work-plugins](technologies/knowledge-work-plugins.md) | `skill` `prompt` `workspace` `office` |
| 100 | [CC Workflow Studio](technologies/cc-wf-studio.md) | `coding-agent` `skill` `mcp` `cli` `workflow` |
| 107 | [Caveman](technologies/caveman.md) | `skill` `coding-agent` `prompt` `cli` `mcp` |
| 108 | [Spec Kit](technologies/spec-kit.md) | `coding-agent` `skill` `cli` `workflow` `prompt` |
| 109 | [AI Engineering Coach](technologies/ai-engineering-coach.md) | `coding-agent` `skill` `desktop` `cli` |
| 111 | [Agent Governance Toolkit](technologies/agent-governance-toolkit.md) | `guardrail` `security` `agent` `cli` `mcp` |
| 114 | [Crawl4AI](technologies/crawl4ai.md) | `extract` `cli` `browser` `self-host` `api` |
| 115 | [Semble](technologies/semble.md) | `mcp` `cli` `coding-agent` `rag` `self-host` |
| 124 | [Trilium Notes](technologies/trilium.md) | `rag` `self-host` `desktop` `api` |
| 126 | [Lanes](technologies/lanes.md) | `coding-agent` `agent` `desktop` `mcp` `workflow` `cli` |
| 128 | [Docmost](technologies/docmost.md) | `rag` `self-host` `api` `workspace` |
| 131 | [Gitingest](technologies/gitingest.md) | `cli` `coding-agent` `rag` `self-host` |
| 132 | [Easy-Vibe](technologies/easy-vibe.md) | `coding-agent` `skill` `prompt` `workflow` |
| 133 | [Firecrawl](technologies/firecrawl.md) | `extract` `api` `mcp` `cli` `self-host` `browser` |
| 140 | [Karpathy Guidelines](technologies/karpathy-skills.md) | `skill` `coding-agent` `prompt` |
| 141 | [Matt Pocock Skills](technologies/mattpocock-skills.md) | `skill` `coding-agent` `prompt` |
| 142 | [Claude-Mem](technologies/claude-mem.md) | `agent` `coding-agent` `mcp` `self-host` `rag` |
| 143 | [GitReverse](technologies/gitreverse.md) | `coding-agent` `prompt` `self-host` |
| 148 | [Vibe-Trading](technologies/vibe-trading.md) | `agent` `mcp` `skill` `cli` `self-host` `workflow` `desktop` |
| 149 | [ghgrab](technologies/ghgrab.md) | `cli` `coding-agent` `self-host` |
| 152 | [OpenSpace](technologies/openspace.md) | `skill` `agent` `mcp` `cli` `self-host` `coding-agent` `workflow` |
| 153 | [Claude Peers MCP](technologies/claude-peers-mcp.md) | `mcp` `coding-agent` `agent` `cli` `self-host` |
| 154 | [DeerFlow](technologies/deer-flow.md) | `agent` `skill` `coding-agent` `self-host` `workflow` `mcp` `cli` |

### Speech & Audio (19)

| # | Công nghệ | Tags |
|---|-----------|------|
| 5 | [AudioSeal](technologies/audioseal.md) | `watermark` |
| 6 | [faster-whisper](technologies/faster-whisper.md) | `stt` `cli` |
| 7 | [OmniVoice Studio](technologies/omnivoice-studio.md) | `stt` `tts` `voice-clone` `desktop` `self-host` |
| 8 | [VoxCPM](technologies/voxcpm.md) | `tts` `voice-clone` |
| 14 | [XiaoZhi ESP32](technologies/xiaozhi-esp32.md) | `stt` `tts` `edge` `iot` `mcp` |
| 55 | [FunASR](technologies/funasr.md) | `stt` `cli` `api` `self-host` `mcp` |
| 57 | [VibeVoice](technologies/vibevoice.md) | `tts` `voice-clone` `self-host` |
| 59 | [AudioBook KJ](technologies/audiobook-kj.md) | `tts` `voice-clone` `desktop` `self-host` `video` |
| 60 | [CapCut TTS/STT API](technologies/capcut-tts-api.md) | `stt` `tts` `cli` `api` |
| 62 | [VieNeu-TTS](technologies/vieneu-tts.md) | `tts` `voice-clone` `self-host` `api` `desktop` |
| 64 | [Voicebox](technologies/voicebox.md) | `stt` `tts` `voice-clone` `desktop` `self-host` `mcp` `api` |
| 72 | [sherpa-onnx](technologies/sherpa-onnx.md) | `stt` `tts` `edge` `self-host` `cli` `api` |
| 79 | [CosyVoice](technologies/cosyvoice.md) | `tts` `voice-clone` `self-host` `api` `cli` |
| 91 | [MOSS-TTS](technologies/moss-tts.md) | `tts` `voice-clone` `self-host` `api` `cli` |
| 99 | [Voice-Pro](technologies/voice-pro.md) | `stt` `tts` `voice-clone` `self-host` `desktop` `video` |
| 105 | [SoulX-Singer](technologies/soulx-singer.md) | `tts` `voice-clone` `self-host` `cli` |
| 119 | [Supertonic](technologies/supertonic.md) | `tts` `voice-clone` `self-host` `cli` `api` `edge` |
| 120 | [KhanhTTS-OmniVoice](technologies/khanhtts-omnivoice.md) | `tts` `voice-clone` `self-host` `cli` |
| 150 | [LuxTTS](technologies/luxtts.md) | `tts` `voice-clone` `self-host` `cli` |

### Image & Video (19)

| # | Công nghệ | Tags |
|---|-----------|------|
| 4 | [ScreenCoder](technologies/screencoder.md) | `ui-to-code` |
| 9 | [ComfyUI](technologies/comfyui.md) | `image-gen` `video` `self-host` |
| 11 | [HyperFrames](technologies/hyperframes.md) | `video` `cli` `agent` |
| 20 | [AI Website Cloner](technologies/ai-website-cloner.md) | `ui-to-code` `coding-agent` `skill` |
| 28 | [AI-auto-generate-video](technologies/ai-auto-generate-video.md) | `video` `skill` `tts` `cli` `agent` |
| 29 | [blind_watermark](technologies/blind-watermark.md) | `watermark` `cli` |
| 35 | [iptv-org/iptv](technologies/iptv-org.md) | `video` |
| 49 | [HTML Anything](technologies/html-anything.md) | `skill` `coding-agent` `agent` `video` `self-host` |
| 61 | [OpenMontage](technologies/openmontage.md) | `video` `agent` `skill` `coding-agent` `workflow` `cli` `tts` |
| 63 | [pyVideoTrans](technologies/pyvideotrans.md) | `video` `stt` `tts` `voice-clone` `desktop` `self-host` `cli` |
| 77 | [FreeCut](technologies/freecut.md) | `video` `self-host` `stt` `tts` |
| 82 | [yt-dlp](technologies/yt-dlp.md) | `video` `cli` `self-host` |
| 94 | [MagicMirror](technologies/magicmirror.md) | `image-gen` `desktop` `self-host` `cv` |
| 101 | [MoneyPrinterTurbo](technologies/moneyprinterturbo.md) | `video` `tts` `cli` `self-host` `api` `skill` |
| 103 | [Toonflow](technologies/toonflow.md) | `video` `image-gen` `desktop` `self-host` `agent` `skill` |
| 104 | [SANA](technologies/sana.md) | `image-gen` `video` `self-host` `cli` `api` |
| 106 | [Open Generative AI](technologies/open-generative-ai.md) | `image-gen` `video` `desktop` `self-host` `api` |
| 136 | [Pixelle-Video](technologies/pixelle-video.md) | `video` `tts` `image-gen` `self-host` `workflow` `api` |
| 151 | [Deep-Live-Cam](technologies/deep-live-cam.md) | `video` `image-gen` `desktop` `self-host` `cv` `cli` |

### UI Automation (6)

| # | Công nghệ | Tags |
|---|-----------|------|
| 13 | [Midscene.js](technologies/midscene.md) | `ui-automation` `computer-use` `browser` `skill` |
| 25 | [Page Agent](technologies/page-agent.md) | `ui-automation` `browser` `dom` `mcp` `agent` |
| 42 | [Stagehand](technologies/stagehand.md) | `ui-automation` `browser` `agent` |
| 51 | [Puppeteer](technologies/puppeteer.md) | `browser` `ui-automation` `api` `mcp` |
| 122 | [Chrome DevTools MCP](technologies/chrome-devtools-mcp.md) | `mcp` `browser` `ui-automation` `cli` `coding-agent` |
| 127 | [CloakBrowser](technologies/cloakbrowser.md) | `browser` `ui-automation` `api` `cli` `self-host` |

### CV & Edge (7)

| # | Công nghệ | Tags |
|---|-----------|------|
| 12 | [ALPR](technologies/alpr.md) | `cv` `edge` `self-host` |
| 70 | [LocateAnything-3B](technologies/locate-anything.md) | `cv` `ocr` `self-host` `cli` |
| 93 | [InsightFace](technologies/insightface.md) | `cv` `self-host` `cli` |
| 102 | [PLFM RADAR](technologies/plfm-radar.md) | `edge` `iot` `self-host` |
| 112 | [Supervision](technologies/supervision.md) | `cv` `cli` `self-host` `video` |
| 138 | [RuView](technologies/ruview.md) | `cv` `edge` `iot` `self-host` |
| 139 | [LingBot-Map](technologies/lingbot-map.md) | `cv` `self-host` `cli` `video` |

### DevTools (46)

| # | Công nghệ | Tags |
|---|-----------|------|
| 1 | [ntfy](technologies/ntfy.md) | `notification` `self-host` `cli` |
| 10 | [Google Workspace CLI](technologies/google-workspace-cli.md) | `cli` `workspace` `skill` `office` |
| 17 | [Stirling-PDF](technologies/stirling-pdf.md) | `pdf` `ocr` `self-host` `api` |
| 30 | [TREK](technologies/trek.md) | `mcp` `self-host` `notification` `gis` |
| 31 | [Magika](technologies/magika.md) | `cli` `security` |
| 33 | [Vietnamese Provinces DB](technologies/vietnamese-provinces-database.md) | `gis` |
| 44 | [FreeLLMAPI](technologies/freellmapi.md) | `api` `self-host` `mcp` `desktop` |
| 45 | [Yuvomi](technologies/yuvomi.md) | `self-host` `mcp` `api` `notification` |
| 46 | [Jitsi Meet](technologies/jitsi-meet.md) | `self-host` `video` `api` |
| 47 | [LocalAI](technologies/localai.md) | `api` `self-host` `mcp` `agent` `stt` `tts` `image-gen` |
| 48 | [Unsloth](technologies/unsloth.md) | `self-host` `cli` `api` `desktop` |
| 54 | [DFlash](technologies/dflash.md) | `cli` `self-host` `api` |
| 56 | [Folo](technologies/folo.md) | `desktop` `self-host` |
| 65 | [MinerU](technologies/mineru.md) | `ocr` `pdf` `cli` `self-host` `api` |
| 66 | [HunyuanOCR](technologies/hunyuan-ocr.md) | `ocr` `self-host` `cli` |
| 67 | [dots.ocr](technologies/dots-ocr.md) | `ocr` `pdf` `self-host` `cli` |
| 68 | [Nanonets-OCR2](technologies/nanonets-ocr2.md) | `ocr` `pdf` `self-host` `api` |
| 69 | [DeepSeek-OCR](technologies/deepseek-ocr.md) | `ocr` `self-host` `cli` `api` |
| 71 | [VLMs OCR Playground](technologies/vlms-ocr-playground.md) | `ocr` `self-host` |
| 73 | [Án lệ TOAAN](technologies/anle-toaan.md) | `rag` `dataset` `self-host` |
| 74 | [Bộ Pháp Điển MOJ](technologies/phapdien-moj.md) | `rag` `dataset` `self-host` |
| 75 | [docmd](technologies/docmd.md) | `mcp` `skill` `cli` `self-host` `api` `rag` |
| 76 | [zca-bridge](technologies/zca-bridge.md) | `self-host` `api` `notification` `workflow` |
| 80 | [MiniCPM](technologies/minicpm.md) | `self-host` `cli` `edge` `desktop` `skill` |
| 83 | [OpenResume](technologies/open-resume.md) | `pdf` `self-host` |
| 84 | [Surya](technologies/surya.md) | `ocr` `pdf` `self-host` `cli` |
| 85 | [Infinity-Parser2](technologies/infinity-parser2.md) | `ocr` `pdf` `self-host` `cli` |
| 88 | [Horizon](technologies/horizon.md) | `mcp` `self-host` `workflow` `notification` `cli` |
| 92 | [n8n-workflows](technologies/n8n-workflows.md) | `workflow` `self-host` `dataset` |
| 97 | [protonx-legal-tc](technologies/protonx-legal-tc.md) | `ocr` `self-host` `cli` |
| 98 | [ViT5-base](technologies/vit5-base.md) | `self-host` `cli` `api` |
| 110 | [Duckle](technologies/duckle.md) | `workflow` `self-host` `desktop` `mcp` `cli` `agent` |
| 113 | [AirLLM](technologies/airllm.md) | `self-host` `cli` `api` |
| 116 | [exo](technologies/exo.md) | `self-host` `api` `cli` `desktop` |
| 117 | [Cake](technologies/cake.md) | `api` `self-host` `cli` `tts` `image-gen` `edge` |
| 121 | [Tabularis](technologies/tabularis.md) | `mcp` `desktop` `self-host` `cli` `agent` |
| 123 | [changedetection.io](technologies/changedetection-io.md) | `notification` `self-host` `browser` `workflow` `api` |
| 125 | [Floci](technologies/floci.md) | `self-host` `cli` `api` |
| 129 | [VeloxDB](technologies/veloxdb.md) | `desktop` `self-host` `cli` |
| 130 | [Dashy](technologies/dashy.md) | `self-host` `desktop` `workspace` |
| 134 | [MarkItDown](technologies/markitdown.md) | `cli` `pdf` `ocr` |
| 135 | [Whisper Money](technologies/whisper-money.md) | `self-host` `desktop` `workspace` |
| 144 | [COBE](technologies/cobe.md) | `gis` |
| 145 | [FossFLOW](technologies/fossflow.md) | `diagram` `self-host` |
| 146 | [LLM Checker](technologies/llm-checker.md) | `cli` `mcp` `self-host` |
| 147 | [llmfit](technologies/llmfit.md) | `cli` `desktop` `self-host` `skill` |

### Security (3)

| # | Công nghệ | Tags |
|---|-----------|------|
| 24 | [Strix](technologies/strix.md) | `security` `pentest` `agent` `cli` |
| 118 | [OSIRIS](technologies/osiris.md) | `security` `gis` `self-host` `desktop` `api` |
| 137 | [HackingTool](technologies/hackingtool.md) | `security` `pentest` `cli` `self-host` |

---

## Cấu trúc thư mục

```
awesome-ai/
├── README.md              ← mục lục + taxonomy (file này)
├── categories/README.md   ← quy tắc Primary/Tags + sơ đồ
├── repos/README.md        ← index star (#1–154) + mô tả GitHub ngắn
└── technologies/
    ├── WRITING.md         ← chuẩn viết: tiếng Việt dễ đọc, giữ thuật ngữ Anh
    ├── *.md               ← bài từng ★
    ├── skill-registries.md ← bookmark Skills.sh / AgentSkill.sh / Skills Hub
    ├── codex-pets.md       ← bookmark Codex Pets / Petdex (companions)
    ├── quiverai.md         ← bookmark QuiverAI (SVG SaaS + MCP)
    └── cli-anything/      ← 11 harness
```
---

## Repo liên quan

| Repo | Quan hệ |
|------|---------|
| [truongdinh018/awesome-ai](https://github.com/truongdinh018/awesome-ai) | **Repo này** |
| [truongdinh018/ai-training](https://github.com/truongdinh018/ai-training) | Fine-tune / kiến thức nền |
| [truongdinh018/ai_core](https://github.com/truongdinh018/ai_core) | Runtime Odoo — RAG, MCP, agents |

---

## Quy trình cập nhật

1. Star → dòng mới trong [repos/README.md](repos/README.md) (`#`, Primary, Tags)
2. Viết `technologies/<slug>.md` theo [**chuẩn tiếng Việt dễ đọc**](technologies/WRITING.md) (giữ thuật ngữ Anh)
3. Ghép vào subgroup đúng trong README này + [categories/](categories/README.md)
4. Harness → `technologies/cli-anything/<slug>.md` + index cha
5. Bump badge count (★) và footer

---

<div align="center">

**Awesome AI Knowledge Base**

*2026-07-15 — 154 ★ · thêm DeerFlow*

*2026-07-15 — 153 ★ · thêm Claude Peers MCP*

*2026-07-15 — 152 ★ · thêm OpenSpace*

*2026-07-15 — 151 ★ · thêm Deep-Live-Cam*

*2026-07-15 — 150 ★ · thêm LuxTTS*

*2026-07-15 — 149 ★ · thêm ghgrab*

*2026-07-15 — 148 ★ · thêm Vibe-Trading*

*2026-07-15 — 147 ★ · thêm llmfit*

*2026-07-15 — bookmark QuiverAI (quiver.ai · SVG + MCP)*

*2026-07-15 — 146 ★ · thêm LLM Checker*

*2026-07-14 — 145 ★ · thêm FossFLOW*

*2026-07-14 — 144 ★ · thêm COBE*

*2026-07-14 — 143 ★ · thêm GitReverse*

*2026-07-14 — 142 ★ · thêm Claude-Mem*

*2026-07-14 — 141 ★ · thêm Matt Pocock Skills*

*2026-07-14 — 140 ★ · thêm Karpathy Guidelines*

*2026-07-14 — 139 ★ · thêm LingBot-Map*

*2026-07-14 — 138 ★ · thêm RuView*

*2026-07-14 — 137 ★ · thêm HackingTool*

*2026-07-14 — bookmark Codex Pets (codexpets.app) + Petdex*

*2026-07-14 — 136 ★ · thêm Pixelle-Video*

*2026-07-14 — 135 ★ · thêm Whisper Money*

*2026-07-14 — 134 ★ · thêm MarkItDown*

*2026-07-14 — 133 ★ · thêm Firecrawl*

*2026-07-14 — 132 ★ · thêm Easy-Vibe*

*2026-07-14 — 131 ★ · thêm Gitingest*

*2026-07-14 — 130 ★ · thêm Dashy*

*2026-07-14 — 129 ★ · sửa VeloxDB → veloxbase/veloxdb (Postgres desktop)*

*2026-07-14 — 129 ★ · thêm VeloxDB*

*2026-07-14 — 128 ★ · thêm Docmost*

*2026-07-14 — 127 ★ · thêm CloakBrowser*

*2026-07-14 — 126 ★ · thêm Lanes*

*2026-07-14 — 125 ★ · thêm Floci*

*2026-07-14 — 124 ★ · thêm Trilium Notes*

*2026-07-14 — 123 ★ · thêm changedetection.io*

*2026-07-14 — 122 ★ · thêm Chrome DevTools MCP*

*2026-07-14 — 121 ★ · thêm Tabularis*

*2026-07-14 — 120 ★ · thêm KhanhTTS-OmniVoice*

*2026-07-14 — 119 ★ · thêm Supertonic*

*2026-07-14 — 118 ★ · thêm OSIRIS*

*2026-07-14 — 117 ★ · thêm Cake*

*2026-07-14 — 116 ★ · thêm exo*

*2026-07-14 — 115 ★ · thêm Semble*

*2026-07-14 — 114 ★ · thêm Crawl4AI*

*2026-07-14 — 113 ★ · thêm AirLLM*

*2026-07-14 — 112 ★ · thêm Supervision (Roboflow)*

*2026-07-14 — 111 ★ · thêm Agent Governance Toolkit*

*2026-07-14 — 110 ★ · thêm Duckle*

*2026-07-14 — 109 ★ · thêm AI Engineering Coach*

*2026-07-14 — 108 ★ · thêm Spec Kit*

*2026-07-14 — 107 ★ · thêm Caveman*

*2026-07-14 — 106 ★ · thêm Open Generative AI*

*2026-07-14 — 105 ★ · thêm SoulX-Singer*

*2026-07-14 — 104 ★ · thêm SANA (NVlabs)*

*2026-07-14 — 103 ★ · thêm Toonflow*

*2026-07-14 — 102 ★ · thêm PLFM RADAR (AERIS-10)*

*2026-07-14 — 101 ★ · thêm MoneyPrinterTurbo*

*2026-07-14 — 100 ★ · thêm CC Workflow Studio*

*2026-07-14 — 99 ★ · thêm Voice-Pro*

*2026-07-14 — 98 ★ · thêm protonx-legal-tc + ViT5-base*

*2026-07-14 — 96 ★ · thêm knowledge-work-plugins*

*2026-07-14 — 95 ★ · thêm MiroFish*

*2026-07-14 — 94 ★ · thêm MagicMirror*

*2026-07-14 — 93 ★ · thêm InsightFace*

*2026-07-14 — 92 ★ · thêm n8n-workflows*

*2026-07-14 — 91 ★ · thêm MOSS-TTS*

*2026-07-14 — 90 ★ · thêm Vibe Kanban*

*2026-07-14 — 89 ★ · thêm OpenHuman*

*2026-07-14 — 88 ★ · thêm Horizon*

*2026-07-14 — bookmark skill registries (Skills.sh · AgentSkill.sh · Skills Hub)*

</div>
