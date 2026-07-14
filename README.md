<!-- markdownlint-disable MD013 MD033 MD036 MD041 MD045 -->

<div align="center">

<img src="https://img.shields.io/badge/-⭐_Awesome_AI-0EA5E9?style=for-the-badge&labelColor=000000" alt="Awesome AI" />

### Catalog công nghệ AI — star → Primary + multi-tags → bài viết chi tiết

**7 domain · ~30 tags · 76 ★ · 11 CLI harness**

<p>
  <img src="https://img.shields.io/badge/Technologies-76-success?style=flat-square" />
  <img src="https://img.shields.io/badge/CLI_harnesses-11-informational?style=flat-square" />
  <img src="https://img.shields.io/badge/Categories-7-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Multi--tags-yes-purple?style=flat-square" />
  <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" />
</p>

<p>
  <a href="categories/README.md"><strong>📂 Categories</strong></a> ·
  <a href="repos/README.md"><strong>🔗 Starred Repos</strong></a> ·
  <a href="technologies/cli-anything/README.md"><strong>🐙 CLI Harnesses</strong></a> ·
  <a href="../ai-training/README.md"><strong>🧠 AI Training</strong></a>
</p>

</div>

---

## Mục lục

1. [Cách đọc](#cách-đọc)
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
5. [Index 76 ★ theo Primary](#index-76--theo-primary)
6. [Cấu trúc · Cập nhật](#cấu-trúc-thư-mục)

---

## Cách đọc

| Lớp | Ý nghĩa | Ví dụ |
|-----|---------|--------|
| **Primary** | 1 “nhà” trong mục lục (§1–§7) | Speech & Audio |
| **Tags** | Nhiều capability cùng lúc | `stt` + `tts` + `mcp` |
| **Bài viết** | Use case / deploy / peers | `technologies/<slug>.md` |

```
Star GitHub  →  repos/README.md  →  technologies/<slug>.md  →  README + categories/
```

> Primary chỉ chọn **một**. Tra capability → [Tag index](#tag-index--capability--gợi-ý) hoặc bảng trong từng nhóm. Repo/stars đầy đủ: [repos/README.md](repos/README.md).

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
| `mcp` | Hermes · RAGFlow · AnythingLLM · Voicebox · NotebookLM MCP · **docmd** |
| `agent` | Hermes · OpenHands · OpenMontage · EpicStaff · Stagehand |
| `coding-agent` | OpenHands · Addy's Agent Skills · Understand Anything · OpenMontage |
| `rag` | RAGFlow · WeKnora · AnythingLLM · SAG · Pathway · Understand Anything · Án lệ TOAAN · Bộ Pháp Điển MOJ · **docmd** *(semantic search)* |
| `extract` | Hyper-Extract |
| `skill` / `prompt` | CLI-Anything · Addy's Agent Skills · Ponytail · prompts.chat · OpenMontage · **docmd** |
| `stt` | faster-whisper · FunASR · sherpa-onnx · Voicebox · pyVideoTrans |
| `tts` / `voice-clone` | Voicebox · VieNeu-TTS · VoxCPM · VibeVoice · OmniVoice · sherpa-onnx *(TTS)* |
| `video` | OpenMontage · HyperFrames · ComfyUI · pyVideoTrans |
| `ui-automation` / `browser` | Midscene · Stagehand · Page Agent · Puppeteer |
| `api` / `self-host` | LocalAI · FreeLLMAPI · Stirling-PDF · **zca-bridge** · hầu hết RAG stack |
| `notification` / `workflow` | ntfy · Yuvomi · TREK · OpenMontage · **zca-bridge** |
| `ocr` / `pdf` | MinerU · HunyuanOCR · Nanonets-OCR2 · DeepSeek-OCR · dots.ocr · Stirling-PDF |
| `dataset` / `rag` *(corpora)* | Án lệ TOAAN · Bộ Pháp Điển MOJ · (+ RAG platforms §1.2) |
| `security` / `pentest` | Strix · Magika *(file-type)* · dcg *(guardrail)* |

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
| **SurfSense** | `rag` `agent` `mcp` `self-host` `api` `workflow` | [surfsense.md](technologies/surfsense.md) |
| └ Obsidian harness | `harness` `rag` `cli` | [cli-anything/obsidian.md](technologies/cli-anything/obsidian.md) |

#### 1.3 Agent runtime

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Hermes Agent** | `agent` `mcp` `skill` `cli` `self-host` | [hermes-agent.md](technologies/hermes-agent.md) |
| **OpenHands** | `coding-agent` `agent` `self-host` | [openhands.md](technologies/openhands.md) |
| **EpicStaff** | `agent` `mcp` `rag` `self-host` `workflow` | [epicstaff.md](technologies/epicstaff.md) |
| **CLI-Anything** ★ | `cli` `harness` `skill` `agent` | [cli-anything.md](technologies/cli-anything.md) |
| └ *11 harness* | [cli-anything/](technologies/cli-anything/README.md) | |

#### 1.4 Skill · prompt · memory · knowledge graph · guardrail

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **prompts.chat** | `prompt` `mcp` `cli` `self-host` | [prompts-chat.md](technologies/prompts-chat.md) |
| **Ponytail** | `skill` `coding-agent` `prompt` | [ponytail.md](technologies/ponytail.md) |
| **Addy's Agent Skills** | `skill` `coding-agent` `prompt` | [agent-skills.md](technologies/agent-skills.md) |
| **Understand Anything** | `skill` `coding-agent` `rag` `cli` `agent` | [understand-anything.md](technologies/understand-anything.md) |
| **Headroom** | `mcp` `cli` `agent` `coding-agent` `self-host` | [headroom.md](technologies/headroom.md) |
| **TencentDB Agent Memory** | `agent` `self-host` `coding-agent` | [tencentdb-agent-memory.md](technologies/tencentdb-agent-memory.md) |
| **drawio-skill** | `skill` `diagram` `cli` | [drawio-skill.md](technologies/drawio-skill.md) |
| **Destructive Command Guard** | `guardrail` `cli` | [destructive-command-guard.md](technologies/destructive-command-guard.md) |

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

#### 2.3 TTS · Voice cloning

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **VoxCPM** | `tts` `voice-clone` | [voxcpm.md](technologies/voxcpm.md) |
| **VibeVoice** | `tts` `voice-clone` `self-host` | [vibevoice.md](technologies/vibevoice.md) |
| **VieNeu-TTS** | `tts` `voice-clone` `self-host` `api` `desktop` | [vieneu-tts.md](technologies/vieneu-tts.md) |
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

**Mục đích:** Sinh / compose video, localize+dub, UI→code, CAD/3D harness, watermark, playlist.

#### 3.1 Generate · compose · agentic studio

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ComfyUI** ★ | `image-gen` `video` `self-host` | [comfyui.md](technologies/comfyui.md) |
| └ ComfyUI harness | `harness` `image-gen` `cli` | [cli-anything/comfyui.md](technologies/cli-anything/comfyui.md) |
| **HyperFrames** | `video` `cli` `agent` | [hyperframes.md](technologies/hyperframes.md) |
| **OpenMontage** | `video` `agent` `skill` `coding-agent` `workflow` `cli` `tts` | [openmontage.md](technologies/openmontage.md) |
| **AI-auto-generate-video** | `video` `skill` `tts` `cli` `agent` | [ai-auto-generate-video.md](technologies/ai-auto-generate-video.md) |

#### 3.2 Localize · dub · subtitle

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **pyVideoTrans** | `video` `stt` `tts` `voice-clone` `desktop` `self-host` `cli` | [pyvideotrans.md](technologies/pyvideotrans.md) |

#### 3.3 UI → code · Agentic HTML

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ScreenCoder** | `ui-to-code` | [screencoder.md](technologies/screencoder.md) |
| **AI Website Cloner** | `ui-to-code` `coding-agent` `skill` | [ai-website-cloner.md](technologies/ai-website-cloner.md) |
| **HTML Anything** | `skill` `coding-agent` `agent` `video` `self-host` | [html-anything.md](technologies/html-anything.md) |

#### 3.4 CAD · 3D · Game *(harness)*

| Harness | Tags | Bài viết |
|---------|------|----------|
| FreeCAD | `harness` `cad` `cli` | [freecad.md](technologies/cli-anything/freecad.md) |
| Blender | `harness` `3d` `cli` | [blender.md](technologies/cli-anything/blender.md) |
| Godot | `harness` `game` `cli` | [godot.md](technologies/cli-anything/godot.md) |

#### 3.5 Watermark · playlists

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **blind_watermark** | `watermark` `cli` | [blind-watermark.md](technologies/blind-watermark.md) |
| **iptv-org/iptv** | `video` | [iptv-org.md](technologies/iptv-org.md) |

---

### 4. UI Automation & Computer Use

**Mục đích:** NL → UI action (vision / DOM) · CDP driver foundation.

| # | Lớp | Công nghệ | Tags | Bài viết |
|---|-----|-----------|------|----------|
| 4.0 | CDP driver | **Puppeteer** | `browser` `ui-automation` `api` `mcp` | [puppeteer.md](technologies/puppeteer.md) |
| 4.1 | Vision | **Midscene.js** | `ui-automation` `computer-use` `browser` `skill` | [midscene.md](technologies/midscene.md) |
| 4.2 | NL ↔ code | **Stagehand** | `ui-automation` `browser` `agent` | [stagehand.md](technologies/stagehand.md) |
| 4.3 | DOM agent | **Page Agent** | `ui-automation` `browser` `dom` `mcp` `agent` | [page-agent.md](technologies/page-agent.md) |
| 4.4 | Game CLI | Slay the Spire II | `harness` `ui-automation` `game` `cli` | [slay-the-spire-ii.md](technologies/cli-anything/slay-the-spire-ii.md) |

**Ranh giới:** Puppeteer = CDP API · Midscene = screenshot→action · Stagehand = NL↔code · Page Agent = DOM LLM · harness = surface có cấu trúc.

---

### 5. Computer Vision & Edge

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ALPR** | `cv` `edge` `self-host` | [alpr.md](technologies/alpr.md) |
| **LocateAnything-3B** | `cv` `ocr` `self-host` `cli` | [locate-anything.md](technologies/locate-anything.md) |

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

#### 6.2 Documents · PDF · file type

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Magika** | `cli` `security` | [magika.md](technologies/magika.md) |
| **Stirling-PDF** | `pdf` `ocr` `self-host` `api` | [stirling-pdf.md](technologies/stirling-pdf.md) |
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
| **VLMs OCR Playground** | `ocr` `self-host` | [vlms-ocr-playground.md](technologies/vlms-ocr-playground.md) |

> Dots demo Space: [yahtzee/Dots-OCR](https://huggingface.co/spaces/yahtzee/Dots-OCR) · DeepSeek quant: `DeepSeek-OCR-Latest-BF16.I64` (xem [deepseek-ocr.md](technologies/deepseek-ocr.md)).  
> Grounding / text-locate (không thay PDF→MD): [LocateAnything-3B](technologies/locate-anything.md) *(Primary §5)*.

#### 6.3 Diagram · Workflow · GIS

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **drawio-skill** | `skill` `diagram` `cli` *(Primary §1.4)* | [drawio-skill.md](technologies/drawio-skill.md) |
| └ Draw.io · n8n · ArcGIS harnesses | `harness` … | [cli-anything/](technologies/cli-anything/README.md) |
| **Vietnamese Provinces DB** | `gis` | [vietnamese-provinces-database.md](technologies/vietnamese-provinces-database.md) |

#### 6.4 LLM gateway · train · inference

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **FreeLLMAPI** | `api` `self-host` `mcp` `desktop` | [freellmapi.md](technologies/freellmapi.md) |
| **LocalAI** | `api` `self-host` `mcp` `agent` `stt` `tts` `image-gen` | [localai.md](technologies/localai.md) |
| **Unsloth** | `self-host` `cli` `api` `desktop` | [unsloth.md](technologies/unsloth.md) |
| **DFlash** | `cli` `self-host` `api` | [dflash.md](technologies/dflash.md) |

> Fine-tune Odoo: [ai-training](../ai-training/README.md).

#### 6.5 Datasets · Vietnam legal (RAG)

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Án lệ TOAAN** | `rag` `dataset` `self-host` | [anle-toaan.md](technologies/anle-toaan.md) |
| **Bộ Pháp Điển MOJ** | `rag` `dataset` `self-host` | [phapdien-moj.md](technologies/phapdien-moj.md) |

> Nguồn công khai cổng nhà nước · CC-BY-4.0 · verify văn bản gốc khi dùng agent.

---

### 7. Security & Pentesting

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Strix** | `security` `pentest` `agent` `cli` | [strix.md](technologies/strix.md) |

| Khác biệt | Vai trò |
|-----------|---------|
| **dcg** (§1.4) | Phòng agent phá máy |
| **Strix** | Pentest có kiểm soát (RoE) |
| **Magika** (§6.2) | AI file-type trước ingest/scan |

---

## Index 76 ★ theo Primary

> `#` = ID trong [repos/README.md](repos/README.md) (thứ tự star). Bên dưới nhóm theo **Primary** để duyệt nhanh.

### MCP & Agents (24)

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

### Speech & Audio (12)

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

### Image & Video (10)

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

### UI Automation (4)

| # | Công nghệ | Tags |
|---|-----------|------|
| 13 | [Midscene.js](technologies/midscene.md) | `ui-automation` `computer-use` `browser` `skill` |
| 25 | [Page Agent](technologies/page-agent.md) | `ui-automation` `browser` `dom` `mcp` `agent` |
| 42 | [Stagehand](technologies/stagehand.md) | `ui-automation` `browser` `agent` |
| 51 | [Puppeteer](technologies/puppeteer.md) | `browser` `ui-automation` `api` `mcp` |

### CV & Edge (2)

| # | Công nghệ | Tags |
|---|-----------|------|
| 12 | [ALPR](technologies/alpr.md) | `cv` `edge` `self-host` |
| 70 | [LocateAnything-3B](technologies/locate-anything.md) | `cv` `ocr` `self-host` `cli` |

### DevTools (23)

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

### Security (1)

| # | Công nghệ | Tags |
|---|-----------|------|
| 24 | [Strix](technologies/strix.md) | `security` `pentest` `agent` `cli` |

---

## Cấu trúc thư mục

```
awesome-ai/
├── README.md              ← mục lục + taxonomy (file này)
├── categories/README.md   ← quy tắc Primary/Tags + sơ đồ
├── repos/README.md        ← index star (#1–64) + mô tả GitHub
└── technologies/
    ├── *.md               ← bài từng ★
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
2. Viết `technologies/<slug>.md` (header có **Tags**)
3. Ghép vào subgroup đúng trong README này + [categories/](categories/README.md)
4. Harness → `technologies/cli-anything/<slug>.md` + index cha
5. Bump badge count (★) và footer

---

<div align="center">

**Awesome AI Knowledge Base**

*2026-07-14 — 76 ★ · thêm zca-bridge*

</div>
