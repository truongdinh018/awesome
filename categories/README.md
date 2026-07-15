# Categories — phân nhóm Primary & Tags

> **Đây là bản taxonomy chuẩn** (bảng đầy đủ theo domain).  
> Hub: [../README.md](../README.md) · Stars: [../repos/README.md](../repos/README.md) · Tags: [../TAGS.md](../TAGS.md) · Viết bài: [../technologies/WRITING.md](../technologies/WRITING.md)

---

## Quy tắc gán

1. Chọn **đúng một** Primary theo use case chính khi star.  
2. Gắn **mọi** Tags khớp tính năng thật.  
3. Harness CLI-Anything: Primary theo domain ngang; luôn có `harness` (+ `cli`).  
4. Xuất hiện 2 chỗ mục lục: Primary = Agents; nhắc lại dưới DevTools nếu cần.  
5. Không tạo Primary mới chỉ vì 1 repo — thêm tag/subgroup trước.  
6. Client/API không chính thức: ghi ToS trong bài viết.

---

## 7 nhóm Primary

| # | Primary | ★ | Mục đích ngắn |
|---|---------|---|----------------|
| 1 | [MCP & AI Agents](#1-mcp--ai-agents) | 55 | MCP, RAG, agent, skill |
| 2 | [Speech & Audio](#2-speech--audio) | 19 | STT / TTS / voice |
| 3 | [Image & Video](#3-image--video) | 19 | Gen ảnh/video, NLE |
| 4 | [UI Automation](#4-ui-automation--computer-use) | 6 | Browser / computer-use |
| 5 | [CV & Edge](#5-computer-vision--edge) | 7 | Vision, IoT, edge |
| 6 | [DevTools](#6-devtools--integration) | 47 | OCR, gateway, office, self-host |
| 7 | [Security](#7-security--pentesting) | 3 | Pentest, OSINT, guardrail |

**Tổng = 156 ★** (+ 11 CLI-Anything harnesses)

---

## 1. MCP & AI Agents

**Mục đích:** MCP, RAG/knowledge, agent runtime, skill/prompt, memory, guardrail.

### 1.1 MCP connectors & extract

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **NotebookLM MCP** | `mcp` `rag` | [notebooklm-mcp.md](../technologies/notebooklm-mcp.md) |
| **SAG** | `rag` `mcp` `self-host` | [sag.md](../technologies/sag.md) |
| **Hyper-Extract** | `extract` `rag` `mcp` `cli` | [hyper-extract.md](../technologies/hyper-extract.md) |
| **Scrapling** | `extract` `mcp` `cli` `browser` `self-host` | [scrapling.md](../technologies/scrapling.md) |
| **Crawl4AI** | `extract` `cli` `browser` `self-host` `api` | [crawl4ai.md](../technologies/crawl4ai.md) |
| **Firecrawl** | `extract` `api` `mcp` `cli` `self-host` `browser` | [firecrawl.md](../technologies/firecrawl.md) |
| **PageIndex** | `rag` `mcp` `self-host` `cli` | [pageindex.md](../technologies/pageindex.md) |
| **Pathway** | `rag` `cli` `self-host` `workflow` `api` | [pathway.md](../technologies/pathway.md) |
| **PixelRAG** | `rag` `cli` `skill` `api` | [pixelrag.md](../technologies/pixelrag.md) |

### 1.2 RAG platforms

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **WeKnora** | `rag` `mcp` `agent` `self-host` `cli` `skill` | [weknora.md](../technologies/weknora.md) |
| **RAGFlow** | `rag` `agent` `mcp` `self-host` `api` | [ragflow.md](../technologies/ragflow.md) |
| **AnythingLLM** | `rag` `agent` `mcp` `self-host` `desktop` `api` | [anything-llm.md](../technologies/anything-llm.md) |
| **Open Notebook** | `rag` `self-host` `api` `tts` | [open-notebook.md](../technologies/open-notebook.md) |
| **Khoj** | `rag` `agent` `self-host` `desktop` `stt` | [khoj.md](../technologies/khoj.md) |
| **Trilium Notes** | `rag` `self-host` `desktop` `api` | [trilium.md](../technologies/trilium.md) |
| **Docmost** | `rag` `self-host` `api` `workspace` | [docmost.md](../technologies/docmost.md) |
| **OpenHuman** | `rag` `agent` `mcp` `self-host` `desktop` `workflow` `skill` | [openhuman.md](../technologies/openhuman.md) |
| **SurfSense** | `rag` `agent` `mcp` `self-host` `api` `workflow` | [surfsense.md](../technologies/surfsense.md) |
| └ Obsidian harness | `harness` `rag` `cli` | [cli-anything/obsidian.md](../technologies/cli-anything/obsidian.md) |

### 1.3 Agent runtime

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Hermes Agent** | `agent` `mcp` `skill` `cli` `self-host` | [hermes-agent.md](../technologies/hermes-agent.md) |
| **OpenHands** | `coding-agent` `agent` `self-host` | [openhands.md](../technologies/openhands.md) |
| **Happy** | `coding-agent` `cli` `agent` `self-host` `desktop` | [happy.md](../technologies/happy.md) |
| **Vibe Kanban** | `coding-agent` `agent` `cli` `self-host` `workflow` `mcp` | [vibe-kanban.md](../technologies/vibe-kanban.md) |
| **Lanes** | `coding-agent` `agent` `desktop` `mcp` `workflow` `cli` | [lanes.md](../technologies/lanes.md) |
| **Claude Peers MCP** | `mcp` `coding-agent` `agent` `cli` `self-host` | [claude-peers-mcp.md](../technologies/claude-peers-mcp.md) |
| **DeerFlow** | `agent` `skill` `coding-agent` `self-host` `workflow` `mcp` `cli` | [deer-flow.md](../technologies/deer-flow.md) |
| **CC Workflow Studio** | `coding-agent` `skill` `mcp` `cli` `workflow` | [cc-wf-studio.md](../technologies/cc-wf-studio.md) |
| **Spec Kit** | `coding-agent` `skill` `cli` `workflow` `prompt` | [spec-kit.md](../technologies/spec-kit.md) |
| **Atomic Agents** | `agent` `cli` `api` `workflow` | [atomic-agents.md](../technologies/atomic-agents.md) |
| **EpicStaff** | `agent` `mcp` `rag` `self-host` `workflow` | [epicstaff.md](../technologies/epicstaff.md) |
| **MiroFish** | `agent` `self-host` `rag` `workflow` `api` | [mirofish.md](../technologies/mirofish.md) |
| **Vibe-Trading** | `agent` `mcp` `skill` `cli` `self-host` `workflow` `desktop` | [vibe-trading.md](../technologies/vibe-trading.md) |
| **CLI-Anything** ★ | `cli` `harness` `skill` `agent` | [cli-anything.md](../technologies/cli-anything.md) |
| └ *11 harness* | [cli-anything/](../technologies/cli-anything/README.md) | |

### 1.4 Skill · prompt · memory · knowledge graph · guardrail

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **prompts.chat** | `prompt` `mcp` `cli` `self-host` | [prompts-chat.md](../technologies/prompts-chat.md) |
| **Ponytail** | `skill` `coding-agent` `prompt` | [ponytail.md](../technologies/ponytail.md) |
| **Taste Skill** | `skill` `coding-agent` `prompt` `image-gen` | [taste-skill.md](../technologies/taste-skill.md) |
| **Caveman** | `skill` `coding-agent` `prompt` `cli` `mcp` | [caveman.md](../technologies/caveman.md) |
| **Karpathy Guidelines** | `skill` `coding-agent` `prompt` | [karpathy-skills.md](../technologies/karpathy-skills.md) |
| **Matt Pocock Skills** | `skill` `coding-agent` `prompt` | [mattpocock-skills.md](../technologies/mattpocock-skills.md) |
| **AI Engineering Coach** | `coding-agent` `skill` `desktop` `cli` | [ai-engineering-coach.md](../technologies/ai-engineering-coach.md) |
| **Easy-Vibe** | `coding-agent` `skill` `prompt` `workflow` | [easy-vibe.md](../technologies/easy-vibe.md) |
| **Addy's Agent Skills** | `skill` `coding-agent` `prompt` | [agent-skills.md](../technologies/agent-skills.md) |
| **knowledge-work-plugins** | `skill` `prompt` `workspace` `office` | [knowledge-work-plugins.md](../technologies/knowledge-work-plugins.md) |
| **Understand Anything** | `skill` `coding-agent` `rag` `cli` `agent` | [understand-anything.md](../technologies/understand-anything.md) |
| **Headroom** | `mcp` `cli` `agent` `coding-agent` `self-host` | [headroom.md](../technologies/headroom.md) |
| **RTK** | `cli` `coding-agent` | [rtk.md](../technologies/rtk.md) |
| **Semble** | `mcp` `cli` `coding-agent` `rag` `self-host` | [semble.md](../technologies/semble.md) |
| **Gitingest** | `cli` `coding-agent` `rag` `self-host` | [gitingest.md](../technologies/gitingest.md) |
| **GitReverse** | `coding-agent` `prompt` `self-host` | [gitreverse.md](../technologies/gitreverse.md) |
| **ghgrab** | `cli` `coding-agent` `self-host` | [ghgrab.md](../technologies/ghgrab.md) |
| **TencentDB Agent Memory** | `agent` `self-host` `coding-agent` | [tencentdb-agent-memory.md](../technologies/tencentdb-agent-memory.md) |
| **Claude-Mem** | `agent` `coding-agent` `mcp` `self-host` `rag` | [claude-mem.md](../technologies/claude-mem.md) |
| **drawio-skill** | `skill` `diagram` `cli` | [drawio-skill.md](../technologies/drawio-skill.md) |
| **Destructive Command Guard** | `guardrail` `cli` | [destructive-command-guard.md](../technologies/destructive-command-guard.md) |
| **Agent Governance Toolkit** | `guardrail` `security` `agent` `cli` `mcp` | [agent-governance-toolkit.md](../technologies/agent-governance-toolkit.md) |
| **OpenSpace** | `skill` `agent` `mcp` `cli` `self-host` `coding-agent` `workflow` | [openspace.md](../technologies/openspace.md) |

> **Skill websites / registries** (bookmark, không ★): [skill-registries.md](../technologies/skill-registries.md) — [Skills.sh](https://skills.sh) · [AgentSkill.sh](https://agentskill.sh) · [Skills Hub](https://skills-hub.ai/about)  
> **Coding-agent companions** (bookmark, không ★): [codex-pets.md](../technologies/codex-pets.md) — [Codex Pets](https://www.codexpets.app/) · [Petdex](https://petdex.dev)

---

## 2. Speech & Audio

**Mục đích:** STT/TTS, voice studio, cloning, audiobook, watermark, edge voice.

### 2.1 STT engines

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **faster-whisper** | `stt` `cli` | [faster-whisper.md](../technologies/faster-whisper.md) |
| **FunASR** | `stt` `cli` `api` `self-host` `mcp` | [funasr.md](../technologies/funasr.md) |
| **sherpa-onnx** | `stt` `tts` `edge` `self-host` `cli` `api` | [sherpa-onnx.md](../technologies/sherpa-onnx.md) |
| **CapCut TTS/STT API** | `stt` `tts` `cli` `api` | [capcut-tts-api.md](../technologies/capcut-tts-api.md) |
| └ VideoCaptioner harness | `harness` `stt` `video` | [cli-anything/videocaptioner.md](../technologies/cli-anything/videocaptioner.md) |

> CapCut client **không chính thức** — chỉ account/session hợp lệ; ưu tiên FunASR/faster-whisper cho production.

### 2.2 Voice studios *(STT + TTS + UI)*

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Voicebox** | `stt` `tts` `voice-clone` `desktop` `self-host` `mcp` `api` | [voicebox.md](../technologies/voicebox.md) |
| **OmniVoice Studio** | `stt` `tts` `voice-clone` `desktop` `self-host` | [omnivoice-studio.md](../technologies/omnivoice-studio.md) |
| **Voice-Pro** | `stt` `tts` `voice-clone` `self-host` `desktop` `video` | [voice-pro.md](../technologies/voice-pro.md) |

### 2.3 TTS · Voice cloning

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **VoxCPM** | `tts` `voice-clone` | [voxcpm.md](../technologies/voxcpm.md) |
| **VibeVoice** | `tts` `voice-clone` `self-host` | [vibevoice.md](../technologies/vibevoice.md) |
| **CosyVoice** | `tts` `voice-clone` `self-host` `api` `cli` | [cosyvoice.md](../technologies/cosyvoice.md) |
| **MOSS-TTS** | `tts` `voice-clone` `self-host` `api` `cli` | [moss-tts.md](../technologies/moss-tts.md) |
| **SoulX-Singer** | `tts` `voice-clone` `self-host` `cli` | [soulx-singer.md](../technologies/soulx-singer.md) |
| **VieNeu-TTS** | `tts` `voice-clone` `self-host` `api` `desktop` | [vieneu-tts.md](../technologies/vieneu-tts.md) |
| **KhanhTTS-OmniVoice** | `tts` `voice-clone` `self-host` `cli` | [khanhtts-omnivoice.md](../technologies/khanhtts-omnivoice.md) |
| **Supertonic** | `tts` `voice-clone` `self-host` `cli` `api` `edge` | [supertonic.md](../technologies/supertonic.md) |
| **LuxTTS** | `tts` `voice-clone` `self-host` `cli` | [luxtts.md](../technologies/luxtts.md) |
| **sherpa-onnx** | *(xem 2.1 — cũng TTS edge)* | |

### 2.4 Audiobook / narration pipeline

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **AudioBook KJ** | `tts` `voice-clone` `desktop` `self-host` `video` | [audiobook-kj.md](../technologies/audiobook-kj.md) |

### 2.5 Watermark & Edge voice

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **AudioSeal** | `watermark` | [audioseal.md](../technologies/audioseal.md) |
| **XiaoZhi ESP32** | `stt` `tts` `edge` `iot` `mcp` | [xiaozhi-esp32.md](../technologies/xiaozhi-esp32.md) |
| **sherpa-onnx** | *(xem 2.1 — ONNX edge runtime)* | |

> Blind watermark ảnh: [blind_watermark](../technologies/blind-watermark.md) *(Primary §3)*.

---

## 3. Image & Video

**Mục đích:** Sinh / compose video, localize+dub, UI→code, CAD/3D harness, watermark, playlist, download.

### 3.1 Generate · compose · agentic studio

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ComfyUI** ★ | `image-gen` `video` `self-host` | [comfyui.md](../technologies/comfyui.md) |
| └ ComfyUI harness | `harness` `image-gen` `cli` | [cli-anything/comfyui.md](../technologies/cli-anything/comfyui.md) |
| **SANA** | `image-gen` `video` `self-host` `cli` `api` | [sana.md](../technologies/sana.md) |
| **Open Generative AI** | `image-gen` `video` `desktop` `self-host` `api` | [open-generative-ai.md](../technologies/open-generative-ai.md) |
| **HyperFrames** | `video` `cli` `agent` | [hyperframes.md](../technologies/hyperframes.md) |
| **OpenMontage** | `video` `agent` `skill` `coding-agent` `workflow` `cli` `tts` | [openmontage.md](../technologies/openmontage.md) |
| **AI-auto-generate-video** | `video` `skill` `tts` `cli` `agent` | [ai-auto-generate-video.md](../technologies/ai-auto-generate-video.md) |
| **MagicMirror** | `image-gen` `desktop` `self-host` `cv` | [magicmirror.md](../technologies/magicmirror.md) |
| **Deep-Live-Cam** | `video` `image-gen` `desktop` `self-host` `cv` `cli` | [deep-live-cam.md](../technologies/deep-live-cam.md) |
| **MoneyPrinterTurbo** | `video` `tts` `cli` `self-host` `api` `skill` | [moneyprinterturbo.md](../technologies/moneyprinterturbo.md) |
| **Toonflow** | `video` `image-gen` `desktop` `self-host` `agent` `skill` | [toonflow.md](../technologies/toonflow.md) |
| **Pixelle-Video** | `video` `tts` `image-gen` `self-host` `workflow` `api` | [pixelle-video.md](../technologies/pixelle-video.md) |

> **Vector SVG SaaS** (bookmark, không ★): [quiverai.md](../technologies/quiverai.md) — [QuiverAI](https://quiver.ai/) (text/image→SVG · MCP/API)

### 3.2 Browser NLE

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **FreeCut** | `video` `self-host` `stt` `tts` | [freecut.md](../technologies/freecut.md) |

### 3.3 Localize · dub · subtitle

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **pyVideoTrans** | `video` `stt` `tts` `voice-clone` `desktop` `self-host` `cli` | [pyvideotrans.md](../technologies/pyvideotrans.md) |

### 3.4 UI → code · Agentic HTML

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ScreenCoder** | `ui-to-code` | [screencoder.md](../technologies/screencoder.md) |
| **AI Website Cloner** | `ui-to-code` `coding-agent` `skill` | [ai-website-cloner.md](../technologies/ai-website-cloner.md) |
| **HTML Anything** | `skill` `coding-agent` `agent` `video` `self-host` | [html-anything.md](../technologies/html-anything.md) |

### 3.5 CAD · 3D · Game *(harness)*

| Harness | Tags | Bài viết |
|---------|------|----------|
| FreeCAD | `harness` `cad` `cli` | [freecad.md](../technologies/cli-anything/freecad.md) |
| Blender | `harness` `3d` `cli` | [blender.md](../technologies/cli-anything/blender.md) |
| Godot | `harness` `game` `cli` | [godot.md](../technologies/cli-anything/godot.md) |

### 3.6 Watermark · playlists · download

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **blind_watermark** | `watermark` `cli` | [blind-watermark.md](../technologies/blind-watermark.md) |
| **iptv-org/iptv** | `video` | [iptv-org.md](../technologies/iptv-org.md) |
| **yt-dlp** | `video` `cli` `self-host` | [yt-dlp.md](../technologies/yt-dlp.md) |

---

## 4. UI Automation & Computer Use

**Mục đích:** NL → UI action (vision / DOM) · CDP driver foundation.

| # | Lớp | Công nghệ | Tags | Bài viết |
|---|-----|-----------|------|----------|
| 4.0 | CDP driver | **Puppeteer** | `browser` `ui-automation` `api` `mcp` | [puppeteer.md](../technologies/puppeteer.md) |
| 4.05 | DevTools MCP | **Chrome DevTools MCP** | `mcp` `browser` `ui-automation` `cli` `coding-agent` | [chrome-devtools-mcp.md](../technologies/chrome-devtools-mcp.md) |
| 4.06 | Stealth Chromium | **CloakBrowser** | `browser` `ui-automation` `api` `cli` `self-host` | [cloakbrowser.md](../technologies/cloakbrowser.md) |
| 4.1 | Vision | **Midscene.js** | `ui-automation` `computer-use` `browser` `skill` | [midscene.md](../technologies/midscene.md) |
| 4.2 | NL ↔ code | **Stagehand** | `ui-automation` `browser` `agent` | [stagehand.md](../technologies/stagehand.md) |
| 4.3 | DOM agent | **Page Agent** | `ui-automation` `browser` `dom` `mcp` `agent` | [page-agent.md](../technologies/page-agent.md) |
| 4.4 | Game CLI | Slay the Spire II | `harness` `ui-automation` `game` `cli` | [slay-the-spire-ii.md](../technologies/cli-anything/slay-the-spire-ii.md) |

**Ranh giới:** Puppeteer = CDP API · **Chrome DevTools MCP** = MCP/CLI DevTools · **CloakBrowser** = stealth Chromium drop-in · Midscene = screenshot→action · Stagehand = NL↔code · Page Agent = DOM LLM · harness = surface có cấu trúc.

---

## 5. Computer Vision & Edge

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ALPR** | `cv` `edge` `self-host` | [alpr.md](../technologies/alpr.md) |
| **PLFM RADAR (AERIS-10)** | `edge` `iot` `self-host` | [plfm-radar.md](../technologies/plfm-radar.md) |
| **RuView** | `cv` `edge` `iot` `self-host` | [ruview.md](../technologies/ruview.md) |
| **LingBot-Map** | `cv` `self-host` `cli` `video` | [lingbot-map.md](../technologies/lingbot-map.md) |
| **InsightFace** | `cv` `self-host` `cli` | [insightface.md](../technologies/insightface.md) |
| **LocateAnything-3B** | `cv` `ocr` `self-host` `cli` | [locate-anything.md](../technologies/locate-anything.md) |
| **Supervision** | `cv` `cli` `self-host` `video` | [supervision.md](../technologies/supervision.md) |

---

## 6. DevTools & Integration

**Mục đích:** Notify, documents, GIS/workflow, LLM gateway, train, inference accel.

### 6.1 Productivity · notify · collab

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Google Workspace CLI** | `cli` `workspace` `skill` `office` | [google-workspace-cli.md](../technologies/google-workspace-cli.md) |
| **ntfy** | `notification` `self-host` `cli` | [ntfy.md](../technologies/ntfy.md) |
| **TREK** | `mcp` `self-host` `notification` `gis` | [trek.md](../technologies/trek.md) |
| **Yuvomi** | `self-host` `mcp` `api` `notification` | [yuvomi.md](../technologies/yuvomi.md) |
| **zca-bridge** | `self-host` `api` `notification` `workflow` | [zca-bridge.md](../technologies/zca-bridge.md) |
| **Jitsi Meet** | `self-host` `video` `api` | [jitsi-meet.md](../technologies/jitsi-meet.md) |
| **Folo** | `desktop` `self-host` | [folo.md](../technologies/folo.md) |
| **Horizon** | `mcp` `self-host` `workflow` `notification` `cli` | [horizon.md](../technologies/horizon.md) |
| **changedetection.io** | `notification` `self-host` `browser` `workflow` `api` | [changedetection-io.md](../technologies/changedetection-io.md) |
| **Dashy** | `self-host` `desktop` `workspace` | [dashy.md](../technologies/dashy.md) |
| **Whisper Money** | `self-host` `desktop` `workspace` | [whisper-money.md](../technologies/whisper-money.md) |
| **WSL Dashboard** | `desktop` `cli` `workspace` | [wsl-dashboard.md](../technologies/wsl-dashboard.md) |

### 6.2 Documents · PDF · file type

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Magika** | `cli` `security` | [magika.md](../technologies/magika.md) |
| **Stirling-PDF** | `pdf` `ocr` `self-host` `api` | [stirling-pdf.md](../technologies/stirling-pdf.md) |
| **MarkItDown** | `cli` `pdf` `ocr` | [markitdown.md](../technologies/markitdown.md) |
| **OpenResume** | `pdf` `self-host` | [open-resume.md](../technologies/open-resume.md) |
| **docmd** | `mcp` `skill` `cli` `self-host` `api` `rag` | [docmd.md](../technologies/docmd.md) |
| └ LibreOffice harness | `harness` `office` `cli` | [libreoffice.md](../technologies/cli-anything/libreoffice.md) |

### 6.2b OCR · Document VLMs

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **MinerU** | `ocr` `pdf` `cli` `self-host` `api` | [mineru.md](../technologies/mineru.md) |
| **HunyuanOCR** | `ocr` `self-host` `cli` | [hunyuan-ocr.md](../technologies/hunyuan-ocr.md) |
| **dots.ocr** | `ocr` `pdf` `self-host` `cli` | [dots-ocr.md](../technologies/dots-ocr.md) |
| **Nanonets-OCR2** | `ocr` `pdf` `self-host` `api` | [nanonets-ocr2.md](../technologies/nanonets-ocr2.md) |
| **DeepSeek-OCR** | `ocr` `self-host` `cli` `api` | [deepseek-ocr.md](../technologies/deepseek-ocr.md) |
| **Surya** | `ocr` `pdf` `self-host` `cli` | [surya.md](../technologies/surya.md) |
| **Infinity-Parser2** | `ocr` `pdf` `self-host` `cli` | [infinity-parser2.md](../technologies/infinity-parser2.md) |
| **VLMs OCR Playground** | `ocr` `self-host` | [vlms-ocr-playground.md](../technologies/vlms-ocr-playground.md) |

> Dots demo Space: [yahtzee/Dots-OCR](https://huggingface.co/spaces/yahtzee/Dots-OCR) · Surya demo: [xiaoyao9184/surya](https://huggingface.co/spaces/xiaoyao9184/surya) · Infinity-Parser2: [Infinity-Parser2-Demo](https://huggingface.co/spaces/infly/Infinity-Parser2-Demo) · DeepSeek quant: `DeepSeek-OCR-Latest-BF16.I64` (xem [deepseek-ocr.md](../technologies/deepseek-ocr.md)).  
> Grounding / text-locate (không thay PDF→MD): [LocateAnything-3B](../technologies/locate-anything.md) *(Primary §5)*.

### 6.3 Diagram · Workflow · GIS

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **drawio-skill** | `skill` `diagram` `cli` *(Primary §1.4)* | [drawio-skill.md](../technologies/drawio-skill.md) |
| └ Draw.io · n8n · ArcGIS harnesses | `harness` … | [cli-anything/](../technologies/cli-anything/README.md) |
| **FossFLOW** | `diagram` `self-host` | [fossflow.md](../technologies/fossflow.md) |
| **n8n-workflows** | `workflow` `self-host` `dataset` | [n8n-workflows.md](../technologies/n8n-workflows.md) |
| **Duckle** | `workflow` `self-host` `desktop` `mcp` `cli` `agent` | [duckle.md](../technologies/duckle.md) |
| **Tabularis** | `mcp` `desktop` `self-host` `cli` `agent` | [tabularis.md](../technologies/tabularis.md) |
| **Floci** | `self-host` `cli` `api` | [floci.md](../technologies/floci.md) |
| **VeloxDB** | `desktop` `self-host` `cli` | [veloxdb.md](../technologies/veloxdb.md) |
| **Vietnamese Provinces DB** | `gis` | [vietnamese-provinces-database.md](../technologies/vietnamese-provinces-database.md) |
| **COBE** | `gis` | [cobe.md](../technologies/cobe.md) |

### 6.4 LLM gateway · train · inference

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **FreeLLMAPI** | `api` `self-host` `mcp` `desktop` | [freellmapi.md](../technologies/freellmapi.md) |
| **LocalAI** | `api` `self-host` `mcp` `agent` `stt` `tts` `image-gen` | [localai.md](../technologies/localai.md) |
| **MiniCPM** | `self-host` `cli` `edge` `desktop` `skill` | [minicpm.md](../technologies/minicpm.md) |
| **Unsloth** | `self-host` `cli` `api` `desktop` | [unsloth.md](../technologies/unsloth.md) |
| **DFlash** | `cli` `self-host` `api` | [dflash.md](../technologies/dflash.md) |
| **AirLLM** | `self-host` `cli` `api` | [airllm.md](../technologies/airllm.md) |
| **exo** | `self-host` `api` `cli` `desktop` | [exo.md](../technologies/exo.md) |
| **Cake** | `api` `self-host` `cli` `tts` `image-gen` `edge` | [cake.md](../technologies/cake.md) |
| **LLM Checker** | `cli` `mcp` `self-host` | [llm-checker.md](../technologies/llm-checker.md) |
| **llmfit** | `cli` `desktop` `self-host` `skill` | [llmfit.md](../technologies/llmfit.md) |

> Fine-tune Odoo: [ai-training](../../ai-training/README.md).

### 6.5 Datasets · Vietnam legal · VN NLP

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Án lệ TOAAN** | `rag` `dataset` `self-host` | [anle-toaan.md](../technologies/anle-toaan.md) |
| **Bộ Pháp Điển MOJ** | `rag` `dataset` `self-host` | [phapdien-moj.md](../technologies/phapdien-moj.md) |
| **protonx-legal-tc** | `ocr` `self-host` `cli` | [protonx-legal-tc.md](../technologies/protonx-legal-tc.md) |
| **ViT5-base** | `self-host` `cli` `api` | [vit5-base.md](../technologies/vit5-base.md) |

> Nguồn công khai cổng nhà nước · CC-BY-4.0 (datasets) · verify văn bản gốc khi dùng agent.  
> protonx-legal-tc: license **NC** — đọc card HF. ViT5: MIT backbone cho fine-tune VN.

---

## 7. Security & Pentesting

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Strix** | `security` `pentest` `agent` `cli` | [strix.md](../technologies/strix.md) |
| **HackingTool** | `security` `pentest` `cli` `self-host` | [hackingtool.md](../technologies/hackingtool.md) |
| **OSIRIS** | `security` `gis` `self-host` `desktop` `api` | [osiris.md](../technologies/osiris.md) |

| Khác biệt | Vai trò |
|-----------|---------|
| **dcg** (§1.4) | Phòng agent phá máy (shell/git) |
| **AGT** (§1.4) | Policy / identity / sandbox tool-calls |
| **Strix** | Pentest AI có kiểm soát (RoE) |
| **HackingTool** | Menu cài tool pentest cổ điển (lab/CTF) |
| **OSIRIS** | OSINT map + RECON toolkit |
| **Magika** (§6.2) | AI file-type trước ingest/scan |

---

