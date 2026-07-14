<!-- markdownlint-disable MD013 MD033 MD036 MD041 MD045 -->

<div align="center">

<img src="https://img.shields.io/badge/-⭐_Awesome_AI-0EA5E9?style=for-the-badge&labelColor=000000" alt="Awesome AI" />

### **Catalog công nghệ AI — star → phân nhóm → tags đa nhãn → bài viết chi tiết**

**7 nhóm domain · ~30 capability tags · 64 ★ · 11 CLI harness**

<p>
  <img src="https://img.shields.io/badge/Technologies-58-success?style=flat-square" />
  <img src="https://img.shields.io/badge/CLI_harnesses-11-informational?style=flat-square" />
  <img src="https://img.shields.io/badge/Categories-7-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Multi--tags-yes-purple?style=flat-square" />
  <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" />
</p>

<p>
  <a href="categories/README.md"><strong>📂 Categories & Tags</strong></a> ·
  <a href="repos/README.md"><strong>🔗 Starred Repos</strong></a> ·
  <a href="technologies/cli-anything/README.md"><strong>🐙 CLI Harnesses</strong></a> ·
  <a href="../ai-training/README.md"><strong>🧠 AI Training</strong></a>
</p>

</div>

---

## Cách đọc catalog

Mỗi công nghệ có:

| Lớp | Ý nghĩa | Ví dụ |
|-----|---------|--------|
| **Primary category** | 1 nhóm “nhà” (đặt ở đâu trong mục lục) | UI Automation |
| **Tags** | Nhiều nhãn capability — **cùng lúc** nếu đa năng | `browser` + `dom` + `mcp` |
| **Bài viết** | Chi tiết use case / deploy | `technologies/*.md` |

> Repo có nhiều tính năng chung → **nhiều tags**. Primary chỉ chọn **một** để mục lục gọn; tra cứu theo capability dùng [mục Tag index](#-tag-index--tra-cứu-theo-capability) hoặc [categories/README.md](categories/README.md).

**Quy trình cập nhật:**

```
Star GitHub  →  repos/ (+ Tags)  →  technologies/<slug>.md  →  README + categories
```

---

## Chú giải Tags

### Agent & tri thức

| Tag | Nghĩa |
|-----|--------|
| `mcp` | MCP server / client |
| `agent` | Agent runtime / orchestrator |
| `coding-agent` | Coding / software agent |
| `rag` | Retrieval / RAG |
| `extract` | Extract → graph / structured knowledge |
| `prompt` | Prompt library / engineering |
| `skill` | Agent Skills (`SKILL.md`) |
| `cli` | CLI-first |
| `harness` | CLI-Anything harness (con) |
| `guardrail` | An toàn lệnh / agent safety |

### Speech & media

| Tag | Nghĩa |
|-----|--------|
| `stt` | Speech-to-text |
| `tts` | Text-to-speech |
| `voice-clone` | Voice cloning / design |
| `watermark` | Watermark nội dung AI |
| `image-gen` | Sinh ảnh (diffusion…) |
| `video` | Video pipeline / render |
| `ui-to-code` | Screenshot / URL → code |
| `3d` / `cad` / `game` | 3D, CAD, game engine |

### Automation & edge

| Tag | Nghĩa |
|-----|--------|
| `ui-automation` | Tự động hóa UI |
| `computer-use` | Vision / computer-use |
| `browser` | Browser agent |
| `dom` | Thao tác DOM (không screenshot) |
| `cv` | Computer vision |
| `edge` / `iot` | Edge device / IoT |

### DevTools & security

| Tag | Nghĩa |
|-----|--------|
| `pdf` / `ocr` / `office` | PDF, OCR, Office |
| `notification` | Push notify |
| `workspace` | Google Workspace / productivity |
| `workflow` | Workflow automation |
| `diagram` / `gis` | Sơ đồ / GIS |
| `security` / `pentest` | AppSec / pentest |
| `self-host` | Self-host / on-prem |
| `desktop` / `api` | Desktop app / HTTP API |

---

## Tag index — tra cứu theo capability

| Tag | Công nghệ ★ (và harness liên quan) |
|-----|-------------------------------------|
| **mcp** | NotebookLM MCP · SAG · Hyper-Extract · prompts.chat · Hermes · Page Agent · XiaoZhi · ArcGIS harness · PageIndex · TREK · EpicStaff · Headroom · WeKnora · RAGFlow · AnythingLLM · SurfSense · FreeLLMAPI · Yuvomi · LocalAI · Puppeteer · FunASR · **Voicebox** |
| **agent** | Hermes · OpenHands · CLI-Anything · HyperFrames · Strix · Page Agent · Midscene · AI-auto-generate-video · EpicStaff · Headroom · WeKnora · RAGFlow · AnythingLLM · Khoj · SurfSense · Stagehand · LocalAI · HTML Anything · TencentDB Agent Memory · Understand Anything · **OpenMontage** |
| **coding-agent** | OpenHands · AI Website Cloner · Ponytail · Headroom · HTML Anything · Addy's Agent Skills · TencentDB Agent Memory · Understand Anything · **OpenMontage** |
| **rag** | NotebookLM MCP · SAG · Hyper-Extract · PageIndex · EpicStaff · WeKnora · RAGFlow · AnythingLLM · Open Notebook · Khoj · SurfSense · PixelRAG · Pathway · **Understand Anything** |
| **extract** | Hyper-Extract |
| **prompt** | prompts.chat · Ponytail · **Addy's Agent Skills** |
| **skill** | drawio-skill · Midscene · Google Workspace CLI · CLI-Anything · Hermes · AI Website Cloner · Ponytail · AI-auto-generate-video · WeKnora · PixelRAG · HTML Anything · Addy's Agent Skills · Understand Anything · **OpenMontage** |
| **cli** | CLI-Anything · Hyper-Extract · Google Workspace CLI · prompts.chat · Strix · ntfy · dcg · Stirling (API) · PageIndex · AI-auto-generate-video · blind_watermark · Magika · Headroom · WeKnora · PixelRAG · Unsloth · Pathway · DFlash · FunASR · Understand Anything · CapCut TTS/STT API · OpenMontage · **pyVideoTrans** · harnesses |
| **guardrail** | Destructive Command Guard |
| **stt** | faster-whisper · OmniVoice Studio · XiaoZhi · VideoCaptioner · Khoj · LocalAI · FunASR · CapCut TTS/STT API · pyVideoTrans · **Voicebox** |
| **tts** / **voice-clone** | VoxCPM · OmniVoice Studio · XiaoZhi · AI-auto-generate-video · Open Notebook *(podcast)* · LocalAI · VibeVoice · AudioBook KJ · CapCut TTS/STT API · OpenMontage *(Piper / cloud TTS)* · VieNeu-TTS · pyVideoTrans · **Voicebox** |
| **watermark** | AudioSeal · **blind_watermark** |
| **image-gen** | ComfyUI ★ (+ ComfyUI harness) · **LocalAI** |
| **video** | HyperFrames · ComfyUI · AI-auto-generate-video · VideoCaptioner · iptv-org · Jitsi Meet · HTML Anything *(Hyperframes frames)* · AudioBook KJ · OpenMontage · **pyVideoTrans** |
| **ui-to-code** | ScreenCoder · AI Website Cloner |
| **3d** / **cad** / **game** | Blender · FreeCAD · Godot harnesses |
| **ui-automation** | Midscene · Page Agent · Stagehand · **Puppeteer** · Slay the Spire II harness |
| **computer-use** | Midscene |
| **browser** | Midscene · Page Agent · Stagehand · **Puppeteer** |
| **dom** | Page Agent |
| **cv** / **edge** | ALPR · XiaoZhi (`edge`/`iot`) |
| **pdf** / **ocr** | Stirling-PDF |
| **office** | LibreOffice harness · Google Workspace CLI |
| **notification** | ntfy · TREK · **Yuvomi** *(ntfy/Gotify reminders)* |
| **workspace** | Google Workspace CLI |
| **workflow** | n8n harness · EpicStaff · SurfSense · Pathway · **OpenMontage** |
| **diagram** | drawio-skill · Draw.io harness |
| **gis** | ArcGIS Pro harness · TREK · **VN Provinces DB** |
| **desktop** | OmniVoice Studio · AnythingLLM · Khoj · FreeLLMAPI · Unsloth · Folo · AudioBook KJ · VieNeu-TTS · pyVideoTrans · **Voicebox** |
| **api** | Stirling-PDF · RAGFlow · AnythingLLM · Open Notebook · SurfSense · PixelRAG · FreeLLMAPI · Yuvomi · Jitsi Meet · LocalAI · Unsloth · Puppeteer · Pathway · DFlash · FunASR · CapCut TTS/STT API · VieNeu-TTS · **Voicebox** |
| **security** / **pentest** | Strix · Magika *(file-type → security routing)* |
| **self-host** | ntfy · Stirling · prompts.chat · SAG · Hermes · OpenHands · OmniVoice · ComfyUI · ALPR · PageIndex · TREK · EpicStaff · Headroom · WeKnora · RAGFlow · AnythingLLM · Open Notebook · Khoj · SurfSense · FreeLLMAPI · Yuvomi · Jitsi Meet · LocalAI · Unsloth · HTML Anything · Pathway · TencentDB Agent Memory · DFlash · FunASR · Folo · VibeVoice · AudioBook KJ · VieNeu-TTS · pyVideoTrans · **Voicebox** |

---

## Phân loại chi tiết (7 nhóm · subgroup)

### 1. MCP & AI Agents

**Mục đích:** Agent runtime, MCP, RAG/extract, prompt/skill, CLI agent-native, guardrail.

#### 1.1 MCP & RAG / Knowledge

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **NotebookLM MCP** | `mcp` `rag` | [notebooklm-mcp.md](technologies/notebooklm-mcp.md) |
| **SAG** | `rag` `mcp` `self-host` | [sag.md](technologies/sag.md) |
| **Hyper-Extract** | `extract` `rag` `mcp` `cli` | [hyper-extract.md](technologies/hyper-extract.md) |
| **PageIndex** | `rag` `mcp` `self-host` `cli` | [pageindex.md](technologies/pageindex.md) |
| **WeKnora** | `rag` `mcp` `agent` `self-host` `cli` `skill` | [weknora.md](technologies/weknora.md) |
| **RAGFlow** | `rag` `agent` `mcp` `self-host` `api` | [ragflow.md](technologies/ragflow.md) |
| **AnythingLLM** | `rag` `agent` `mcp` `self-host` `desktop` `api` | [anything-llm.md](technologies/anything-llm.md) |
| **Open Notebook** | `rag` `self-host` `api` `tts` | [open-notebook.md](technologies/open-notebook.md) |
| **Khoj** | `rag` `agent` `self-host` `desktop` `stt` | [khoj.md](technologies/khoj.md) |
| **SurfSense** | `rag` `agent` `mcp` `self-host` `api` `workflow` | [surfsense.md](technologies/surfsense.md) |
| **PixelRAG** | `rag` `cli` `skill` `api` | [pixelrag.md](technologies/pixelrag.md) |
| **Pathway** | `rag` `cli` `self-host` `workflow` `api` | [pathway.md](technologies/pathway.md) |
| **Understand Anything** | `skill` `coding-agent` `rag` `cli` `agent` | [understand-anything.md](technologies/understand-anything.md) |
| └ Obsidian harness | `harness` `rag` `cli` | [cli-anything/obsidian.md](technologies/cli-anything/obsidian.md) |

#### 1.2 Agent runtime & coding agents

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Hermes Agent** | `agent` `mcp` `skill` `cli` `self-host` | [hermes-agent.md](technologies/hermes-agent.md) |
| **OpenHands** | `coding-agent` `agent` `self-host` | [openhands.md](technologies/openhands.md) |
| **EpicStaff** | `agent` `mcp` `rag` `self-host` `workflow` | [epicstaff.md](technologies/epicstaff.md) |
| **CLI-Anything** ★ | `cli` `harness` `skill` `agent` | [cli-anything.md](technologies/cli-anything.md) |
| └ *11 harness* | xem [cli-anything/](technologies/cli-anything/README.md) | |

#### 1.3 Prompt · Skill · Guardrail · Context

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **prompts.chat** | `prompt` `mcp` `cli` `self-host` | [prompts-chat.md](technologies/prompts-chat.md) |
| **Ponytail** | `skill` `coding-agent` `prompt` | [ponytail.md](technologies/ponytail.md) |
| **Addy's Agent Skills** | `skill` `coding-agent` `prompt` | [agent-skills.md](technologies/agent-skills.md) |
| **Headroom** | `mcp` `cli` `agent` `coding-agent` `self-host` | [headroom.md](technologies/headroom.md) |
| **TencentDB Agent Memory** | `agent` `self-host` `coding-agent` | [tencentdb-agent-memory.md](technologies/tencentdb-agent-memory.md) |
| **drawio-skill** | `skill` `diagram` `cli` | [drawio-skill.md](technologies/drawio-skill.md) |
| **Destructive Command Guard** | `guardrail` `cli` | [destructive-command-guard.md](technologies/destructive-command-guard.md) |

---

### 2. Speech & Audio

**Mục đích:** STT/TTS, cloning, watermark, voice edge.

#### 2.1 Speech-to-text

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **faster-whisper** | `stt` `cli` | [faster-whisper.md](technologies/faster-whisper.md) |
| **FunASR** | `stt` `cli` `api` `self-host` `mcp` | [funasr.md](technologies/funasr.md) |
| **CapCut TTS/STT API** | `stt` `tts` `cli` `api` | [capcut-tts-api.md](technologies/capcut-tts-api.md) |
| **OmniVoice Studio** *(cũng TTS/clone)* | `stt` `tts` `voice-clone` `desktop` `self-host` | [omnivoice-studio.md](technologies/omnivoice-studio.md) |
| **Voicebox** *(cũng TTS/clone + MCP)* | `stt` `tts` `voice-clone` `desktop` `self-host` `mcp` `api` | [voicebox.md](technologies/voicebox.md) |
| └ VideoCaptioner harness | `harness` `stt` `video` | [cli-anything/videocaptioner.md](technologies/cli-anything/videocaptioner.md) |

#### 2.2 TTS · Voice cloning

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **VoxCPM** | `tts` `voice-clone` | [voxcpm.md](technologies/voxcpm.md) |
| **VibeVoice** | `tts` `voice-clone` `self-host` | [vibevoice.md](technologies/vibevoice.md) |
| **VieNeu-TTS** | `tts` `voice-clone` `self-host` `api` `desktop` | [vieneu-tts.md](technologies/vieneu-tts.md) |
| **Voicebox** | *(xem 2.1)* | |
| **AudioBook KJ** | `tts` `voice-clone` `desktop` `self-host` `video` | [audiobook-kj.md](technologies/audiobook-kj.md) |
| **CapCut TTS/STT API** | *(xem 2.1 — TTS + STT)* | |
| **OmniVoice Studio** | *(xem trên)* | |

#### 2.3 Watermark & Edge voice

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **AudioSeal** | `watermark` | [audioseal.md](technologies/audioseal.md) |
| **XiaoZhi ESP32** | `stt` `tts` `edge` `iot` `mcp` | [xiaozhi-esp32.md](technologies/xiaozhi-esp32.md) |

> Ảnh blind watermark: [blind_watermark](technologies/blind-watermark.md) *(Primary: Image & Video)*.

---

### 3. Image & Video Generation

**Mục đích:** Sinh ảnh/video, UI→code, CAD/3D/game qua harness; watermark ảnh.

#### 3.1 Diffusion · Video agents

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ComfyUI** ★ | `image-gen` `video` `self-host` | [comfyui.md](technologies/comfyui.md) |
| └ ComfyUI harness | `harness` `image-gen` `cli` | [cli-anything/comfyui.md](technologies/cli-anything/comfyui.md) |
| **HyperFrames** | `video` `cli` `agent` | [hyperframes.md](technologies/hyperframes.md) |
| **AI-auto-generate-video** | `video` `skill` `tts` `cli` `agent` | [ai-auto-generate-video.md](technologies/ai-auto-generate-video.md) |
| **OpenMontage** | `video` `agent` `skill` `coding-agent` `workflow` `cli` `tts` | [openmontage.md](technologies/openmontage.md) |
| **pyVideoTrans** | `video` `stt` `tts` `voice-clone` `desktop` `self-host` `cli` | [pyvideotrans.md](technologies/pyvideotrans.md) |

#### 3.2 UI → code · Agentic HTML

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ScreenCoder** | `ui-to-code` | [screencoder.md](technologies/screencoder.md) |
| **AI Website Cloner** | `ui-to-code` `coding-agent` `skill` | [ai-website-cloner.md](technologies/ai-website-cloner.md) |
| **HTML Anything** | `skill` `coding-agent` `agent` `video` `self-host` | [html-anything.md](technologies/html-anything.md) |

#### 3.3 CAD · 3D · Game *(harness CLI-Anything)*

| Harness | Tags | Bài viết |
|---------|------|----------|
| FreeCAD | `harness` `cad` `cli` | [freecad.md](technologies/cli-anything/freecad.md) |
| Blender | `harness` `3d` `cli` | [blender.md](technologies/cli-anything/blender.md) |
| Godot | `harness` `game` `cli` | [godot.md](technologies/cli-anything/godot.md) |

#### 3.4 Image watermark

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **blind_watermark** | `watermark` `cli` | [blind-watermark.md](technologies/blind-watermark.md) |

#### 3.5 Media playlists *(dataset — không generative)*

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **iptv-org/iptv** | `video` | [iptv-org.md](technologies/iptv-org.md) |

---

### 4. UI Automation & Computer Use

**Mục đích:** NL → hành động UI (vision hoặc DOM); driver browser classic.

#### 4.0 Browser CDP drivers *(foundation — không AI)*

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Puppeteer** | `browser` `ui-automation` `api` `mcp` | [puppeteer.md](technologies/puppeteer.md) |

#### 4.1 Vision / computer-use

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Midscene.js** | `ui-automation` `computer-use` `browser` `skill` | [midscene.md](technologies/midscene.md) |

#### 4.2 Hybrid NL + code SDK

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Stagehand** | `ui-automation` `browser` `agent` | [stagehand.md](technologies/stagehand.md) |

#### 4.3 In-page DOM agent

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Page Agent** | `ui-automation` `browser` `dom` `mcp` `agent` | [page-agent.md](technologies/page-agent.md) |

#### 4.4 Game / structured CLI *(đối cực vision)*

| Harness | Tags | Bài viết |
|---------|------|----------|
| Slay the Spire II | `harness` `ui-automation` `game` `cli` | [slay-the-spire-ii.md](technologies/cli-anything/slay-the-spire-ii.md) |

**So sánh nhanh:** Puppeteer = CDP API · Midscene = screenshot → action · Stagehand = NL↔code · Page Agent = DOM LLM · CLI harness = API có cấu trúc.

---

### 5. Computer Vision & Edge

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ALPR** | `cv` `edge` `self-host` | [alpr.md](technologies/alpr.md) |

---

### 6. DevTools & Integration

**Mục đích:** Workspace, notify, PDF/office, diagram, workflow, GIS, LLM gateway.

#### 6.1 Productivity & notify

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Google Workspace CLI** | `cli` `workspace` `skill` `office` | [google-workspace-cli.md](technologies/google-workspace-cli.md) |
| **ntfy** | `notification` `self-host` `cli` | [ntfy.md](technologies/ntfy.md) |
| **TREK** | `mcp` `self-host` `notification` `gis` | [trek.md](technologies/trek.md) |
| **Yuvomi** | `self-host` `mcp` `api` `notification` | [yuvomi.md](technologies/yuvomi.md) |
| **Jitsi Meet** | `self-host` `video` `api` | [jitsi-meet.md](technologies/jitsi-meet.md) |
| **Folo** | `desktop` `self-host` | [folo.md](technologies/folo.md) |

#### 6.2 Documents · PDF · Office · file type

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Magika** | `cli` `security` | [magika.md](technologies/magika.md) |
| **Stirling-PDF** | `pdf` `ocr` `self-host` `api` | [stirling-pdf.md](technologies/stirling-pdf.md) |
| └ LibreOffice harness | `harness` `office` `cli` | [libreoffice.md](technologies/cli-anything/libreoffice.md) |

#### 6.3 Diagram · Workflow · GIS

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **drawio-skill** | `skill` `diagram` `cli` *(cũng §1.3)* | [drawio-skill.md](technologies/drawio-skill.md) |
| └ Draw.io harness | `harness` `diagram` `cli` | [drawio.md](technologies/cli-anything/drawio.md) |
| └ n8n harness | `harness` `workflow` `cli` | [n8n.md](technologies/cli-anything/n8n.md) |
| └ ArcGIS Pro harness | `harness` `gis` `mcp` `cli` | [arcgis-pro.md](technologies/cli-anything/arcgis-pro.md) |
| **Vietnamese Provinces DB** | `gis` | [vietnamese-provinces-database.md](technologies/vietnamese-provinces-database.md) |

#### 6.4 LLM gateway / proxy

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **FreeLLMAPI** | `api` `self-host` `mcp` `desktop` | [freellmapi.md](technologies/freellmapi.md) |
| **LocalAI** | `api` `self-host` `mcp` `agent` `stt` `tts` `image-gen` | [localai.md](technologies/localai.md) |

#### 6.5 Fine-tuning / Train

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Unsloth** | `self-host` `cli` `api` `desktop` | [unsloth.md](technologies/unsloth.md) |

> Liên quan: [ai-training](../ai-training/README.md) (pipeline + notebook Unsloth Odoo).

#### 6.6 Inference acceleration

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **DFlash** | `cli` `self-host` `api` | [dflash.md](technologies/dflash.md) |

---

### 7. Security & Pentesting

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Strix** | `security` `pentest` `agent` `cli` | [strix.md](technologies/strix.md) |

> **Khác** `guardrail` (dcg): dcg = **phòng** agent phá máy; Strix = **tấn công có kiểm soát** app được phép.  
> **Magika** (Primary DevTools): AI file-type → routing an toàn trước scan/ingest — [magika.md](technologies/magika.md).

---

## Bảng tổng hợp 64 ★ (Primary + Tags)

| # | Công nghệ | Primary | Tags |
|---|-----------|---------|------|
| 1 | [ntfy](technologies/ntfy.md) | DevTools | `notification` `self-host` `cli` |
| 2 | [NotebookLM MCP](technologies/notebooklm-mcp.md) | MCP & Agents | `mcp` `rag` |
| 3 | [Destructive Command Guard](technologies/destructive-command-guard.md) | MCP & Agents | `guardrail` `cli` |
| 4 | [ScreenCoder](technologies/screencoder.md) | Image & Video | `ui-to-code` |
| 5 | [AudioSeal](technologies/audioseal.md) | Speech | `watermark` |
| 6 | [faster-whisper](technologies/faster-whisper.md) | Speech | `stt` `cli` |
| 7 | [OmniVoice Studio](technologies/omnivoice-studio.md) | Speech | `stt` `tts` `voice-clone` `desktop` `self-host` |
| 8 | [VoxCPM](technologies/voxcpm.md) | Speech | `tts` `voice-clone` |
| 9 | [ComfyUI](technologies/comfyui.md) | Image & Video | `image-gen` `video` `self-host` |
| 10 | [Google Workspace CLI](technologies/google-workspace-cli.md) | DevTools | `cli` `workspace` `skill` `office` |
| 11 | [HyperFrames](technologies/hyperframes.md) | Image & Video | `video` `cli` `agent` |
| 12 | [ALPR](technologies/alpr.md) | CV & Edge | `cv` `edge` `self-host` |
| 13 | [Midscene.js](technologies/midscene.md) | UI Automation | `ui-automation` `computer-use` `browser` `skill` |
| 14 | [XiaoZhi ESP32](technologies/xiaozhi-esp32.md) | Speech | `stt` `tts` `edge` `iot` `mcp` |
| 15 | [SAG](technologies/sag.md) | MCP & Agents | `rag` `mcp` `self-host` |
| 16 | [CLI-Anything](technologies/cli-anything.md) | MCP & Agents | `cli` `harness` `skill` `agent` |
| 17 | [Stirling-PDF](technologies/stirling-pdf.md) | DevTools | `pdf` `ocr` `self-host` `api` |
| 18 | [prompts.chat](technologies/prompts-chat.md) | MCP & Agents | `prompt` `mcp` `cli` `self-host` |
| 19 | [drawio-skill](technologies/drawio-skill.md) | MCP & Agents *+ DevTools* | `skill` `diagram` `cli` |
| 20 | [AI Website Cloner](technologies/ai-website-cloner.md) | Image & Video | `ui-to-code` `coding-agent` `skill` |
| 21 | [Hyper-Extract](technologies/hyper-extract.md) | MCP & Agents | `extract` `rag` `mcp` `cli` |
| 22 | [Hermes Agent](technologies/hermes-agent.md) | MCP & Agents | `agent` `mcp` `skill` `cli` `self-host` |
| 23 | [OpenHands](technologies/openhands.md) | MCP & Agents | `coding-agent` `agent` `self-host` |
| 24 | [Strix](technologies/strix.md) | Security | `security` `pentest` `agent` `cli` |
| 25 | [Page Agent](technologies/page-agent.md) | UI Automation | `ui-automation` `browser` `dom` `mcp` `agent` |
| 26 | [Ponytail](technologies/ponytail.md) | MCP & Agents | `skill` `coding-agent` `prompt` |
| 27 | [PageIndex](technologies/pageindex.md) | MCP & Agents | `rag` `mcp` `self-host` `cli` |
| 28 | [AI-auto-generate-video](technologies/ai-auto-generate-video.md) | Image & Video | `video` `skill` `tts` `cli` `agent` |
| 29 | [blind_watermark](technologies/blind-watermark.md) | Image & Video | `watermark` `cli` |
| 30 | [TREK](technologies/trek.md) | DevTools | `mcp` `self-host` `notification` `gis` |
| 31 | [Magika](technologies/magika.md) | DevTools | `cli` `security` |
| 32 | [EpicStaff](technologies/epicstaff.md) | MCP & Agents | `agent` `mcp` `rag` `self-host` `workflow` |
| 33 | [Vietnamese Provinces DB](technologies/vietnamese-provinces-database.md) | DevTools | `gis` |
| 34 | [Headroom](technologies/headroom.md) | MCP & Agents | `mcp` `cli` `agent` `coding-agent` `self-host` |
| 35 | [iptv-org/iptv](technologies/iptv-org.md) | Image & Video | `video` |
| 36 | [WeKnora](technologies/weknora.md) | MCP & Agents | `rag` `mcp` `agent` `self-host` `cli` `skill` |
| 37 | [RAGFlow](technologies/ragflow.md) | MCP & Agents | `rag` `agent` `mcp` `self-host` `api` |
| 38 | [AnythingLLM](technologies/anything-llm.md) | MCP & Agents | `rag` `agent` `mcp` `self-host` `desktop` `api` |
| 39 | [Open Notebook](technologies/open-notebook.md) | MCP & Agents | `rag` `self-host` `api` `tts` |
| 40 | [Khoj](technologies/khoj.md) | MCP & Agents | `rag` `agent` `self-host` `desktop` `stt` |
| 41 | [SurfSense](technologies/surfsense.md) | MCP & Agents | `rag` `agent` `mcp` `self-host` `api` `workflow` |
| 42 | [Stagehand](technologies/stagehand.md) | UI Automation | `ui-automation` `browser` `agent` |
| 43 | [PixelRAG](technologies/pixelrag.md) | MCP & Agents | `rag` `cli` `skill` `api` |
| 44 | [FreeLLMAPI](technologies/freellmapi.md) | DevTools | `api` `self-host` `mcp` `desktop` |
| 45 | [Yuvomi](technologies/yuvomi.md) | DevTools | `self-host` `mcp` `api` `notification` |
| 46 | [Jitsi Meet](technologies/jitsi-meet.md) | DevTools | `self-host` `video` `api` |
| 47 | [LocalAI](technologies/localai.md) | DevTools | `api` `self-host` `mcp` `agent` `stt` `tts` `image-gen` |
| 48 | [Unsloth](technologies/unsloth.md) | DevTools | `self-host` `cli` `api` `desktop` |
| 49 | [HTML Anything](technologies/html-anything.md) | Image & Video | `skill` `coding-agent` `agent` `video` `self-host` |
| 50 | [Addy's Agent Skills](technologies/agent-skills.md) | MCP & Agents | `skill` `coding-agent` `prompt` |
| 51 | [Puppeteer](technologies/puppeteer.md) | UI Automation | `browser` `ui-automation` `api` `mcp` |
| 52 | [Pathway](technologies/pathway.md) | MCP & Agents | `rag` `cli` `self-host` `workflow` `api` |
| 53 | [TencentDB Agent Memory](technologies/tencentdb-agent-memory.md) | MCP & Agents | `agent` `self-host` `coding-agent` |
| 54 | [DFlash](technologies/dflash.md) | DevTools | `cli` `self-host` `api` |
| 55 | [FunASR](technologies/funasr.md) | Speech | `stt` `cli` `api` `self-host` `mcp` |
| 56 | [Folo](technologies/folo.md) | DevTools | `desktop` `self-host` |
| 57 | [VibeVoice](technologies/vibevoice.md) | Speech | `tts` `voice-clone` `self-host` |
| 58 | [Understand Anything](technologies/understand-anything.md) | MCP & Agents | `skill` `coding-agent` `rag` `cli` `agent` |
| 59 | [AudioBook KJ](technologies/audiobook-kj.md) | Speech | `tts` `voice-clone` `desktop` `self-host` `video` |
| 60 | [CapCut TTS/STT API](technologies/capcut-tts-api.md) | Speech | `stt` `tts` `cli` `api` |
| 61 | [OpenMontage](technologies/openmontage.md) | Image & Video | `video` `agent` `skill` `coding-agent` `workflow` `cli` `tts` |
| 62 | [VieNeu-TTS](technologies/vieneu-tts.md) | Speech | `tts` `voice-clone` `self-host` `api` `desktop` |
| 63 | [pyVideoTrans](technologies/pyvideotrans.md) | Image & Video | `video` `stt` `tts` `voice-clone` `desktop` `self-host` `cli` |
| 64 | [Voicebox](technologies/voicebox.md) | Speech | `stt` `tts` `voice-clone` `desktop` `self-host` `mcp` `api` |

Repo / stars đầy đủ: [repos/README.md](repos/README.md).

---

## Cấu trúc thư mục

```
awesome-ai/
├── README.md                 ← mục lục + tags (file này)
├── categories/
│   └── README.md             ← sơ đồ, subgroup, quy tắc tags
├── technologies/             ← bài viết từng ★
│   └── cli-anything/         ← 11 harness con
└── repos/
    └── README.md             ← index star + Primary + Tags
```

---

## Repo liên quan

| Repo | Quan hệ |
|------|---------|
| [truongdinh018/awesome-ai](https://github.com/truongdinh018/awesome-ai) | **Repo này** |
| [truongdinh018/ai-training](https://github.com/truongdinh018/ai-training) | Fine-tune / kiến thức nền |
| [truongdinh018/ai_core](https://github.com/truongdinh018/ai_core) | Runtime Odoo — RAG, MCP, agents |

---

## Cập nhật

1. Star → thêm dòng [repos/README.md](repos/README.md) với **Primary + Tags**
2. Viết `technologies/<slug>.md` (header có Tags)
3. Cập nhật subgroup trong README này + [categories/](categories/README.md)
4. Harness CLI-Anything → `technologies/cli-anything/<slug>.md` + index cha

---

<div align="center">

**Awesome AI Knowledge Base**

*2026-07-14 — 64 ★ · 11 harness · thêm Voicebox*

</div>
