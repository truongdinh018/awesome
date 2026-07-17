# Categories — phân nhóm Primary & Tags

> **Taxonomy theo domain / subgroup** (duyệt capability).  
> **“Dùng để làm gì?” theo nhu cầu** → [USE-CASES.md](../USE-CASES.md).  
> **Thứ tự star `#` và URL repo** → [repos/README.md](../repos/README.md) (bảng master).  
> Hub: [../README.md](../README.md) · Tags: [../TAGS.md](../TAGS.md) · Viết bài: [../technologies/WRITING.md](../technologies/WRITING.md)

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
| 1 | [MCP & AI Agents](#1-mcp--ai-agents) | 74 | MCP, RAG, agent, skill |
| 2 | [Speech & Audio](#2-speech--audio) | 20 | STT / TTS / voice |
| 3 | [Image & Video](#3-image--video) | 29 | Gen ảnh/video, NLE |
| 4 | [UI Automation](#4-ui-automation--computer-use) | 8 | Browser / computer-use |
| 5 | [CV & Edge](#5-computer-vision--edge) | 9 | Vision, IoT, edge |
| 6 | [DevTools](#6-devtools--integration) | 74 | OCR, gateway, office, train, self-host |
| 7 | [Security](#7-security--pentesting) | 4 | Pentest, OSINT, guardrail |

**Tổng = 218 ★** (+ 11 CLI-Anything harnesses)

---

## 1. MCP & AI Agents

**Mục đích:** MCP, RAG/knowledge, agent runtime, skill/prompt, memory, guardrail.

### 1.1 MCP connectors & extract

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **NotebookLM MCP** | `mcp` `rag` | [notebooklm-mcp.md](../technologies/mcp-ai-agents/notebooklm-mcp.md) |
| **SAG** | `rag` `mcp` `self-host` | [sag.md](../technologies/mcp-ai-agents/sag.md) |
| **Hyper-Extract** | `extract` `rag` `mcp` `cli` | [hyper-extract.md](../technologies/mcp-ai-agents/hyper-extract.md) |
| **Scrapling** | `extract` `mcp` `cli` `browser` `self-host` | [scrapling.md](../technologies/mcp-ai-agents/scrapling.md) |
| **Crawl4AI** | `extract` `cli` `browser` `self-host` `api` | [crawl4ai.md](../technologies/mcp-ai-agents/crawl4ai.md) |
| **Firecrawl** | `extract` `api` `mcp` `cli` `self-host` `browser` | [firecrawl.md](../technologies/mcp-ai-agents/firecrawl.md) |
| **PageIndex** | `rag` `mcp` `self-host` `cli` | [pageindex.md](../technologies/mcp-ai-agents/pageindex.md) |
| **Pathway** | `rag` `cli` `self-host` `workflow` `api` | [pathway.md](../technologies/mcp-ai-agents/pathway.md) |
| **PixelRAG** | `rag` `cli` `skill` `api` | [pixelrag.md](../technologies/mcp-ai-agents/pixelrag.md) |

### 1.2 RAG platforms

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **WeKnora** | `rag` `mcp` `agent` `self-host` `cli` `skill` | [weknora.md](../technologies/mcp-ai-agents/weknora.md) |
| **RAGFlow** | `rag` `agent` `mcp` `self-host` `api` | [ragflow.md](../technologies/mcp-ai-agents/ragflow.md) |
| **AnythingLLM** | `rag` `agent` `mcp` `self-host` `desktop` `api` | [anything-llm.md](../technologies/mcp-ai-agents/anything-llm.md) |
| **Open Notebook** | `rag` `self-host` `api` `tts` | [open-notebook.md](../technologies/mcp-ai-agents/open-notebook.md) |
| **Deta Surf** | `rag` `desktop` `self-host` `browser` | [deta-surf.md](../technologies/mcp-ai-agents/deta-surf.md) |
| **Khoj** | `rag` `agent` `self-host` `desktop` `stt` | [khoj.md](../technologies/mcp-ai-agents/khoj.md) |
| **Trilium Notes** | `rag` `self-host` `desktop` `api` | [trilium.md](../technologies/mcp-ai-agents/trilium.md) |
| **Docmost** | `rag` `self-host` `api` `workspace` | [docmost.md](../technologies/mcp-ai-agents/docmost.md) |
| **OpenHuman** | `rag` `agent` `mcp` `self-host` `desktop` `workflow` `skill` | [openhuman.md](../technologies/mcp-ai-agents/openhuman.md) |
| **SurfSense** | `rag` `agent` `mcp` `self-host` `api` `workflow` | [surfsense.md](../technologies/mcp-ai-agents/surfsense.md) |
| └ Obsidian harness | `harness` `rag` `cli` | [cli-anything/obsidian.md](../technologies/cli-anything/obsidian.md) |

### 1.3 Agent runtime

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Hermes Agent** | `agent` `mcp` `skill` `cli` `self-host` | [hermes-agent.md](../technologies/mcp-ai-agents/hermes-agent.md) |
| **AstrBot** | `agent` `mcp` `skill` `rag` `self-host` `api` `workflow` | [astrbot.md](../technologies/mcp-ai-agents/astrbot.md) |
| **LangBot** | `agent` `mcp` `skill` `rag` `self-host` `api` `workflow` | [langbot.md](../technologies/mcp-ai-agents/langbot.md) |
| **OpenHands** | `coding-agent` `agent` `self-host` | [openhands.md](../technologies/mcp-ai-agents/openhands.md) |
| **Cline** | `coding-agent` `agent` `cli` `desktop` `mcp` `self-host` `skill` | [cline.md](../technologies/mcp-ai-agents/cline.md) |
| **CodeWhale** | `coding-agent` `cli` `agent` `self-host` `mcp` `skill` | [codewhale.md](../technologies/mcp-ai-agents/codewhale.md) |
| **Zerolang** | `coding-agent` `agent` `cli` `skill` | [zerolang.md](../technologies/mcp-ai-agents/zerolang.md) |
| **Happy** | `coding-agent` `cli` `agent` `self-host` `desktop` | [happy.md](../technologies/mcp-ai-agents/happy.md) |
| **Vibe Kanban** | `coding-agent` `agent` `cli` `self-host` `workflow` `mcp` | [vibe-kanban.md](../technologies/mcp-ai-agents/vibe-kanban.md) |
| **Lanes** | `coding-agent` `agent` `desktop` `mcp` `workflow` `cli` | [lanes.md](../technologies/mcp-ai-agents/lanes.md) |
| **Nezha** | `coding-agent` `agent` `desktop` `workflow` `cli` `skill` | [nezha.md](../technologies/mcp-ai-agents/nezha.md) |
| **Paseo** | `coding-agent` `agent` `desktop` `cli` `skill` `self-host` `mcp` | [paseo.md](../technologies/mcp-ai-agents/paseo.md) |
| **Claude Peers MCP** | `mcp` `coding-agent` `agent` `cli` `self-host` | [claude-peers-mcp.md](../technologies/mcp-ai-agents/claude-peers-mcp.md) |
| **DeerFlow** | `agent` `skill` `coding-agent` `self-host` `workflow` `mcp` `cli` | [deer-flow.md](../technologies/mcp-ai-agents/deer-flow.md) |
| **CC Workflow Studio** | `coding-agent` `skill` `mcp` `cli` `workflow` | [cc-wf-studio.md](../technologies/mcp-ai-agents/cc-wf-studio.md) |
| **Spec Kit** | `coding-agent` `skill` `cli` `workflow` `prompt` | [spec-kit.md](../technologies/mcp-ai-agents/spec-kit.md) |
| **Atomic Agents** | `agent` `cli` `api` `workflow` | [atomic-agents.md](../technologies/mcp-ai-agents/atomic-agents.md) |
| **EpicStaff** | `agent` `mcp` `rag` `self-host` `workflow` | [epicstaff.md](../technologies/mcp-ai-agents/epicstaff.md) |
| **MiroFish** | `agent` `self-host` `rag` `workflow` `api` | [mirofish.md](../technologies/mcp-ai-agents/mirofish.md) |
| **Vibe-Trading** | `agent` `mcp` `skill` `cli` `self-host` `workflow` `desktop` | [vibe-trading.md](../technologies/mcp-ai-agents/vibe-trading.md) |
| **CLI-Anything** ★ | `cli` `harness` `skill` `agent` | [cli-anything.md](../technologies/mcp-ai-agents/cli-anything.md) |
| └ *11 harness* | [cli-anything/](../technologies/cli-anything/README.md) | |

### 1.4 Skill · prompt · memory · knowledge graph · guardrail

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **prompts.chat** | `prompt` `mcp` `cli` `self-host` | [prompts-chat.md](../technologies/mcp-ai-agents/prompts-chat.md) |
| **Prompt Optimizer** | `prompt` `mcp` `self-host` `desktop` `browser` `image-gen` | [prompt-optimizer.md](../technologies/mcp-ai-agents/prompt-optimizer.md) |
| **Ponytail** | `skill` `coding-agent` `prompt` | [ponytail.md](../technologies/mcp-ai-agents/ponytail.md) |
| **Taste Skill** | `skill` `coding-agent` `prompt` `image-gen` | [taste-skill.md](../technologies/mcp-ai-agents/taste-skill.md) |
| **Hallmark** | `skill` `coding-agent` `prompt` | [hallmark.md](../technologies/mcp-ai-agents/hallmark.md) |
| **Stop Slop** | `skill` `coding-agent` `prompt` | [stop-slop.md](../technologies/mcp-ai-agents/stop-slop.md) |
| **Caveman** | `skill` `coding-agent` `prompt` `cli` `mcp` | [caveman.md](../technologies/mcp-ai-agents/caveman.md) |
| **Karpathy Guidelines** | `skill` `coding-agent` `prompt` | [karpathy-skills.md](../technologies/mcp-ai-agents/karpathy-skills.md) |
| **Matt Pocock Skills** | `skill` `coding-agent` `prompt` | [mattpocock-skills.md](../technologies/mcp-ai-agents/mattpocock-skills.md) |
| **AI Engineering Coach** | `coding-agent` `skill` `desktop` `cli` | [ai-engineering-coach.md](../technologies/mcp-ai-agents/ai-engineering-coach.md) |
| **Easy-Vibe** | `coding-agent` `skill` `prompt` `workflow` | [easy-vibe.md](../technologies/mcp-ai-agents/easy-vibe.md) |
| **Learn Claude Code** | `coding-agent` `agent` `skill` `cli` `prompt` | [learn-claude-code.md](../technologies/mcp-ai-agents/learn-claude-code.md) |
| **Maths CS AI Compendium** | `prompt` `mcp` `skill` `rag` `cli` | [maths-cs-ai-compendium.md](../technologies/mcp-ai-agents/maths-cs-ai-compendium.md) |
| **Addy's Agent Skills** | `skill` `coding-agent` `prompt` | [agent-skills.md](../technologies/mcp-ai-agents/agent-skills.md) |
| **Minimalist Entrepreneur Skills** | `skill` `coding-agent` `prompt` | [slavingia-skills.md](../technologies/mcp-ai-agents/slavingia-skills.md) |
| **knowledge-work-plugins** | `skill` `prompt` `workspace` `office` | [knowledge-work-plugins.md](../technologies/mcp-ai-agents/knowledge-work-plugins.md) |
| **PPT Master** | `skill` `office` `cli` `coding-agent` `workflow` | [ppt-master.md](../technologies/mcp-ai-agents/ppt-master.md) |
| **Understand Anything** | `skill` `coding-agent` `rag` `cli` `agent` | [understand-anything.md](../technologies/mcp-ai-agents/understand-anything.md) |
| **Graphify** | `skill` `coding-agent` `rag` `cli` `agent` | [graphify.md](../technologies/mcp-ai-agents/graphify.md) |
| **Headroom** | `mcp` `cli` `agent` `coding-agent` `self-host` | [headroom.md](../technologies/mcp-ai-agents/headroom.md) |
| **CodeBurn** | `cli` `coding-agent` `mcp` `desktop` `self-host` | [codeburn.md](../technologies/mcp-ai-agents/codeburn.md) |
| **Clawdmeter** | `coding-agent` `edge` `iot` `desktop` `cli` | [clawdmeter.md](../technologies/mcp-ai-agents/clawdmeter.md) |
| **RTK** | `cli` `coding-agent` | [rtk.md](../technologies/mcp-ai-agents/rtk.md) |
| **Semble** | `mcp` `cli` `coding-agent` `rag` `self-host` | [semble.md](../technologies/mcp-ai-agents/semble.md) |
| **Gitingest** | `cli` `coding-agent` `rag` `self-host` | [gitingest.md](../technologies/mcp-ai-agents/gitingest.md) |
| **GitReverse** | `coding-agent` `prompt` `self-host` | [gitreverse.md](../technologies/mcp-ai-agents/gitreverse.md) |
| **ghgrab** | `cli` `coding-agent` `self-host` | [ghgrab.md](../technologies/mcp-ai-agents/ghgrab.md) |
| **TencentDB Agent Memory** | `agent` `self-host` `coding-agent` | [tencentdb-agent-memory.md](../technologies/mcp-ai-agents/tencentdb-agent-memory.md) |
| **Claude-Mem** | `agent` `coding-agent` `mcp` `self-host` `rag` | [claude-mem.md](../technologies/mcp-ai-agents/claude-mem.md) |
| **agentmemory** | `agent` `coding-agent` `mcp` `self-host` `rag` `cli` `skill` | [agentmemory.md](../technologies/mcp-ai-agents/agentmemory.md) |
| **drawio-skill** | `skill` `diagram` `cli` | [drawio-skill.md](../technologies/mcp-ai-agents/drawio-skill.md) |
| **Destructive Command Guard** | `guardrail` `cli` | [destructive-command-guard.md](../technologies/mcp-ai-agents/destructive-command-guard.md) |
| **Agent Governance Toolkit** | `guardrail` `security` `agent` `cli` `mcp` | [agent-governance-toolkit.md](../technologies/mcp-ai-agents/agent-governance-toolkit.md) |
| **OpenSpace** | `skill` `agent` `mcp` `cli` `self-host` `coding-agent` `workflow` | [openspace.md](../technologies/mcp-ai-agents/openspace.md) |

> **Skill websites / registries** (bookmark, không ★): [skill-registries.md](../technologies/bookmarks/skill-registries.md) — [Skills.sh](https://skills.sh) · [AgentSkill.sh](https://agentskill.sh) · [Skills Hub](https://skills-hub.ai/about)  
> **Coding-agent companions** (bookmark, không ★): [codex-pets.md](../technologies/bookmarks/codex-pets.md) — [Codex Pets](https://www.codexpets.app/) · [Petdex](https://petdex.dev)

---

## 2. Speech & Audio

**Mục đích:** STT/TTS, voice studio, cloning, audiobook, watermark, edge voice.

### 2.1 STT engines

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **faster-whisper** | `stt` `cli` | [faster-whisper.md](../technologies/speech-audio/faster-whisper.md) |
| **FunASR** | `stt` `cli` `api` `self-host` `mcp` | [funasr.md](../technologies/speech-audio/funasr.md) |
| **sherpa-onnx** | `stt` `tts` `edge` `self-host` `cli` `api` | [sherpa-onnx.md](../technologies/speech-audio/sherpa-onnx.md) |
| **CapCut TTS/STT API** | `stt` `tts` `cli` `api` | [capcut-tts-api.md](../technologies/speech-audio/capcut-tts-api.md) |
| └ VideoCaptioner harness | `harness` `stt` `video` | [cli-anything/videocaptioner.md](../technologies/cli-anything/videocaptioner.md) |

> CapCut client **không chính thức** — chỉ account/session hợp lệ; ưu tiên FunASR/faster-whisper cho production.

### 2.2 Voice studios *(STT + TTS + UI)*

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Voicebox** | `stt` `tts` `voice-clone` `desktop` `self-host` `mcp` `api` | [voicebox.md](../technologies/speech-audio/voicebox.md) |
| **OmniVoice Studio** | `stt` `tts` `voice-clone` `desktop` `self-host` | [omnivoice-studio.md](../technologies/speech-audio/omnivoice-studio.md) |
| **Voice-Pro** | `stt` `tts` `voice-clone` `self-host` `desktop` `video` | [voice-pro.md](../technologies/speech-audio/voice-pro.md) |
| **MicYou** | `stt` `desktop` `edge` | [micyou.md](../technologies/speech-audio/micyou.md) |

### 2.3 TTS · Voice cloning

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **VoxCPM** | `tts` `voice-clone` | [voxcpm.md](../technologies/speech-audio/voxcpm.md) |
| **VibeVoice** | `tts` `voice-clone` `self-host` | [vibevoice.md](../technologies/speech-audio/vibevoice.md) |
| **CosyVoice** | `tts` `voice-clone` `self-host` `api` `cli` | [cosyvoice.md](../technologies/speech-audio/cosyvoice.md) |
| **MOSS-TTS** | `tts` `voice-clone` `self-host` `api` `cli` | [moss-tts.md](../technologies/speech-audio/moss-tts.md) |
| **SoulX-Singer** | `tts` `voice-clone` `self-host` `cli` | [soulx-singer.md](../technologies/speech-audio/soulx-singer.md) |
| **VieNeu-TTS** | `tts` `voice-clone` `self-host` `api` `desktop` | [vieneu-tts.md](../technologies/speech-audio/vieneu-tts.md) |
| **KhanhTTS-OmniVoice** | `tts` `voice-clone` `self-host` `cli` | [khanhtts-omnivoice.md](../technologies/speech-audio/khanhtts-omnivoice.md) |
| **Supertonic** | `tts` `voice-clone` `self-host` `cli` `api` `edge` | [supertonic.md](../technologies/speech-audio/supertonic.md) |
| **LuxTTS** | `tts` `voice-clone` `self-host` `cli` | [luxtts.md](../technologies/speech-audio/luxtts.md) |
| **sherpa-onnx** | *(xem 2.1 — cũng TTS edge)* | |

### 2.4 Audiobook / narration pipeline

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **AudioBook KJ** | `tts` `voice-clone` `desktop` `self-host` `video` | [audiobook-kj.md](../technologies/speech-audio/audiobook-kj.md) |

### 2.5 Watermark & Edge voice

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **AudioSeal** | `watermark` | [audioseal.md](../technologies/speech-audio/audioseal.md) |
| **XiaoZhi ESP32** | `stt` `tts` `edge` `iot` `mcp` | [xiaozhi-esp32.md](../technologies/speech-audio/xiaozhi-esp32.md) |
| **sherpa-onnx** | *(xem 2.1 — ONNX edge runtime)* | |

> Blind watermark ảnh: [blind_watermark](../technologies/image-video/blind-watermark.md) *(Primary §3)*.

---

## 3. Image & Video

**Mục đích:** Sinh / compose video, localize+dub, analyze/watch, UI→code, CAD/3D harness, watermark, playlist, download.

### 3.1 Generate · compose · agentic studio

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ComfyUI** ★ | `image-gen` `video` `self-host` | [comfyui.md](../technologies/image-video/comfyui.md) |
| └ ComfyUI harness | `harness` `image-gen` `cli` | [cli-anything/comfyui.md](../technologies/cli-anything/comfyui.md) |
| **SANA** | `image-gen` `video` `self-host` `cli` `api` | [sana.md](../technologies/image-video/sana.md) |
| **Open Generative AI** | `image-gen` `video` `desktop` `self-host` `api` | [open-generative-ai.md](../technologies/image-video/open-generative-ai.md) |
| **HyperFrames** | `video` `cli` `agent` | [hyperframes.md](../technologies/image-video/hyperframes.md) |
| **OpenMontage** | `video` `agent` `skill` `coding-agent` `workflow` `cli` `tts` | [openmontage.md](../technologies/image-video/openmontage.md) |
| **AI-auto-generate-video** | `video` `skill` `tts` `cli` `agent` | [ai-auto-generate-video.md](../technologies/image-video/ai-auto-generate-video.md) |
| **MagicMirror** | `image-gen` `desktop` `self-host` `cv` | [magicmirror.md](../technologies/image-video/magicmirror.md) |
| **Deep-Live-Cam** | `video` `image-gen` `desktop` `self-host` `cv` `cli` | [deep-live-cam.md](../technologies/image-video/deep-live-cam.md) |
| **LivePortrait** | `video` `image-gen` `self-host` `cv` `cli` | [liveportrait.md](../technologies/image-video/liveportrait.md) |
| **MoneyPrinterTurbo** | `video` `tts` `cli` `self-host` `api` `skill` | [moneyprinterturbo.md](../technologies/image-video/moneyprinterturbo.md) |
| **Toonflow** | `video` `image-gen` `desktop` `self-host` `agent` `skill` | [toonflow.md](../technologies/image-video/toonflow.md) |
| **Pixelle-Video** | `video` `tts` `image-gen` `self-host` `workflow` `api` | [pixelle-video.md](../technologies/image-video/pixelle-video.md) |

> **Vector SVG SaaS** (bookmark, không ★): [quiverai.md](../technologies/bookmarks/quiverai.md) — [QuiverAI](https://quiver.ai/) (text/image→SVG · MCP/API)

### 3.2 NLE · 2D animation · stabilize

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **FreeCut** | `video` `self-host` `stt` `tts` | [freecut.md](../technologies/image-video/freecut.md) |
| **Recordly** | `video` `desktop` `self-host` | [recordly.md](../technologies/image-video/recordly.md) |
| **Gyroflow** | `video` `desktop` `self-host` | [gyroflow.md](../technologies/image-video/gyroflow.md) |
| **OpenToonz** | `video` `desktop` `self-host` | [opentoonz.md](../technologies/image-video/opentoonz.md) |

### 3.3 Localize · dub · subtitle

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **pyVideoTrans** | `video` `stt` `tts` `voice-clone` `desktop` `self-host` `cli` | [pyvideotrans.md](../technologies/image-video/pyvideotrans.md) |

### 3.4 UI → code · Agentic HTML

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ScreenCoder** | `ui-to-code` | [screencoder.md](../technologies/image-video/screencoder.md) |
| **AI Website Cloner** | `ui-to-code` `coding-agent` `skill` | [ai-website-cloner.md](../technologies/image-video/ai-website-cloner.md) |
| **HTML Anything** | `skill` `coding-agent` `agent` `video` `self-host` | [html-anything.md](../technologies/image-video/html-anything.md) |
| **Huashu Design** | `skill` `coding-agent` `agent` `video` | [huashu-design.md](../technologies/image-video/huashu-design.md) |

### 3.5 CAD · 3D · Game

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **O3DE** | `desktop` `self-host` | [o3de.md](../technologies/image-video/o3de.md) |
| **Chili3D** | `cad` `3d` `browser` `self-host` | [chili3d.md](../technologies/image-video/chili3d.md) |

| Harness | Tags | Bài viết |
|---------|------|----------|
| FreeCAD | `harness` `cad` `cli` | [freecad.md](../technologies/cli-anything/freecad.md) |
| Blender | `harness` `3d` `cli` | [blender.md](../technologies/cli-anything/blender.md) |
| Godot | `harness` `game` `cli` | [godot.md](../technologies/cli-anything/godot.md) |

### 3.6 Watermark · playlists · download · analyze

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **blind_watermark** | `watermark` `cli` | [blind-watermark.md](../technologies/image-video/blind-watermark.md) |
| **iptv-org/iptv** | `video` | [iptv-org.md](../technologies/image-video/iptv-org.md) |
| **yt-dlp** | `video` `cli` `self-host` | [yt-dlp.md](../technologies/image-video/yt-dlp.md) |
| **Claude Video** | `video` `skill` `coding-agent` `stt` `cli` `agent` | [claude-video.md](../technologies/image-video/claude-video.md) |
| **LibreTube** | `video` `desktop` `self-host` | [libretube.md](../technologies/image-video/libretube.md) |
| **ASCILINE** | `video` `cli` `self-host` `browser` | [asciline.md](../technologies/image-video/asciline.md) |

---

## 4. UI Automation & Computer Use

**Mục đích:** NL → UI action (vision / DOM) · CDP driver foundation.

| # | Lớp | Công nghệ | Tags | Bài viết |
|---|-----|-----------|------|----------|
| 4.0 | CDP driver | **Puppeteer** | `browser` `ui-automation` `api` `mcp` | [puppeteer.md](../technologies/ui-automation/puppeteer.md) |
| 4.05 | DevTools MCP | **Chrome DevTools MCP** | `mcp` `browser` `ui-automation` `cli` `coding-agent` | [chrome-devtools-mcp.md](../technologies/ui-automation/chrome-devtools-mcp.md) |
| 4.06 | Stealth Chromium | **CloakBrowser** | `browser` `ui-automation` `api` `cli` `self-host` | [cloakbrowser.md](../technologies/ui-automation/cloakbrowser.md) |
| 4.1 | Vision | **Midscene.js** | `ui-automation` `computer-use` `browser` `skill` | [midscene.md](../technologies/ui-automation/midscene.md) |
| 4.2 | NL ↔ code | **Stagehand** | `ui-automation` `browser` `agent` | [stagehand.md](../technologies/ui-automation/stagehand.md) |
| 4.25 | Agent loop (Py) | **Browser Use** | `ui-automation` `browser` `agent` `cli` `computer-use` | [browser-use.md](../technologies/ui-automation/browser-use.md) |
| 4.3 | DOM agent | **Page Agent** | `ui-automation` `browser` `dom` `mcp` `agent` | [page-agent.md](../technologies/ui-automation/page-agent.md) |
| 4.35 | Agentic browser | **BrowserOS** | `browser` `ui-automation` `agent` `mcp` `desktop` `self-host` `coding-agent` | [browseros.md](../technologies/ui-automation/browseros.md) |
| 4.4 | Game CLI | Slay the Spire II | `harness` `ui-automation` `game` `cli` | [slay-the-spire-ii.md](../technologies/cli-anything/slay-the-spire-ii.md) |

**Ranh giới:** Puppeteer = CDP API · **Chrome DevTools MCP** = MCP/CLI DevTools · **CloakBrowser** = stealth Chromium · Midscene = screenshot→action · Stagehand = NL↔code · **Browser Use** = Python agent loop · Page Agent = DOM LLM · harness = surface có cấu trúc.

---

## 5. Computer Vision & Edge

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **ALPR** | `cv` `edge` `self-host` | [alpr.md](../technologies/cv-edge/alpr.md) |
| **Optocam Zero** | `cv` `edge` `iot` `self-host` | [optocam-zero.md](../technologies/cv-edge/optocam-zero.md) |
| **PLFM RADAR (AERIS-10)** | `edge` `iot` `self-host` | [plfm-radar.md](../technologies/cv-edge/plfm-radar.md) |
| **RuView** | `cv` `edge` `iot` `self-host` | [ruview.md](../technologies/cv-edge/ruview.md) |
| **LingBot-Map** | `cv` `self-host` `cli` `video` | [lingbot-map.md](../technologies/cv-edge/lingbot-map.md) |
| **InsightFace** | `cv` `self-host` `cli` | [insightface.md](../technologies/cv-edge/insightface.md) |
| **LocateAnything-3B** | `cv` `ocr` `self-host` `cli` | [locate-anything.md](../technologies/cv-edge/locate-anything.md) |
| **Supervision** | `cv` `cli` `self-host` `video` | [supervision.md](../technologies/cv-edge/supervision.md) |
| **Sesame Robot** | `edge` `iot` `api` `self-host` | [sesame-robot.md](../technologies/cv-edge/sesame-robot.md) |

---

## 6. DevTools & Integration

**Mục đích:** Notify, documents, GIS/workflow, LLM gateway, train, inference accel.

### 6.1 Productivity · notify · collab

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Google Workspace CLI** | `cli` `workspace` `skill` `office` | [google-workspace-cli.md](../technologies/devtools/google-workspace-cli.md) |
| **ntfy** | `notification` `self-host` `cli` | [ntfy.md](../technologies/devtools/ntfy.md) |
| **TREK** | `mcp` `self-host` `notification` `gis` | [trek.md](../technologies/devtools/trek.md) |
| **Yuvomi** | `self-host` `mcp` `api` `notification` | [yuvomi.md](../technologies/devtools/yuvomi.md) |
| **zca-bridge** | `self-host` `api` `notification` `workflow` | [zca-bridge.md](../technologies/devtools/zca-bridge.md) |
| **Jitsi Meet** | `self-host` `video` `api` | [jitsi-meet.md](../technologies/devtools/jitsi-meet.md) |
| **Folo** | `desktop` `self-host` | [folo.md](../technologies/devtools/folo.md) |
| **Horizon** | `mcp` `self-host` `workflow` `notification` `cli` | [horizon.md](../technologies/devtools/horizon.md) |
| **changedetection.io** | `notification` `self-host` `browser` `workflow` `api` | [changedetection-io.md](../technologies/devtools/changedetection-io.md) |
| **Dashy** | `self-host` `desktop` `workspace` | [dashy.md](../technologies/devtools/dashy.md) |
| **R2 Web** | `self-host` `desktop` `api` `workspace` | [r2-web.md](../technologies/devtools/r2-web.md) |
| **ChronoFrame** | `self-host` `desktop` `workspace` `browser` | [chronoframe.md](../technologies/devtools/chronoframe.md) |
| **FileBrowser Quantum** | `self-host` `desktop` `api` `workspace` `browser` | [filebrowser-quantum.md](../technologies/devtools/filebrowser-quantum.md) |
| **Whisper Money** | `self-host` `desktop` `workspace` | [whisper-money.md](../technologies/devtools/whisper-money.md) |
| **ezBookkeeping** | `self-host` `desktop` `workspace` `mcp` `api` `ocr` | [ezbookkeeping.md](../technologies/devtools/ezbookkeeping.md) |
| **OpenTickly** | `self-host` `api` `cli` `workspace` `agent` | [opentickly.md](../technologies/devtools/opentickly.md) |
| **PlainApp** | `self-host` `desktop` `workspace` `edge` `notification` | [plain-app.md](../technologies/devtools/plain-app.md) |
| **WSL Dashboard** | `desktop` `cli` `workspace` | [wsl-dashboard.md](../technologies/devtools/wsl-dashboard.md) |
| **FluentFlyout** | `desktop` `workspace` | [fluent-flyout.md](../technologies/devtools/fluent-flyout.md) |
| **WhatCable** | `desktop` `cli` `workspace` | [whatcable.md](../technologies/devtools/whatcable.md) |
| **keyd** | `cli` `desktop` `workspace` | [keyd.md](../technologies/devtools/keyd.md) |
| **termshot** | `cli` `desktop` | [termshot.md](../technologies/devtools/termshot.md) |
| **React Scan** | `browser` `cli` `desktop` | [react-scan.md](../technologies/devtools/react-scan.md) |
| **SnapDOM** | `browser` `dom` | [snapdom.md](../technologies/devtools/snapdom.md) |
| **Tab Harbor** | `browser` `workspace` `desktop` | [tab-harbor.md](../technologies/devtools/tab-harbor.md) |
| **CheatReader** | `desktop` `workspace` `pdf` | [cheatreader.md](../technologies/devtools/cheatreader.md) |
| **BleachBit** | `desktop` `cli` `security` | [bleachbit.md](../technologies/devtools/bleachbit.md) |
| **WinPodX** | `desktop` `cli` `workspace` `self-host` `office` | [winpodx.md](../technologies/devtools/winpodx.md) |

### 6.2 Documents · PDF · file type

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Magika** | `cli` `security` | [magika.md](../technologies/devtools/magika.md) |
| **Stirling-PDF** | `pdf` `ocr` `self-host` `api` | [stirling-pdf.md](../technologies/devtools/stirling-pdf.md) |
| **KillerPDF** | `pdf` `ocr` `desktop` | [killer-pdf.md](../technologies/devtools/killer-pdf.md) |
| **STranslate** | `ocr` `desktop` | [stranslate.md](../technologies/devtools/stranslate.md) |
| **MarkItDown** | `cli` `pdf` `ocr` | [markitdown.md](../technologies/devtools/markitdown.md) |
| **OpenResume** | `pdf` `self-host` | [open-resume.md](../technologies/devtools/open-resume.md) |
| **docmd** | `mcp` `skill` `cli` `self-host` `api` `rag` | [docmd.md](../technologies/devtools/docmd.md) |
| **VitePress** | `cli` `self-host` `knowledge` | [vitepress.md](../technologies/devtools/vitepress.md) |
| └ LibreOffice harness | `harness` `office` `cli` | [libreoffice.md](../technologies/cli-anything/libreoffice.md) |
| **OfficeCLI** | `cli` `office` `skill` `coding-agent` `workspace` | [officecli.md](../technologies/devtools/officecli.md) |
| **PPT Master** *(Primary §1)* | `skill` `office` `cli` `coding-agent` `workflow` | [ppt-master.md](../technologies/mcp-ai-agents/ppt-master.md) |

### 6.2b OCR · Document VLMs

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **MinerU** | `ocr` `pdf` `cli` `self-host` `api` | [mineru.md](../technologies/devtools/mineru.md) |
| **HunyuanOCR** | `ocr` `self-host` `cli` | [hunyuan-ocr.md](../technologies/devtools/hunyuan-ocr.md) |
| **dots.ocr** | `ocr` `pdf` `self-host` `cli` | [dots-ocr.md](../technologies/devtools/dots-ocr.md) |
| **Nanonets-OCR2** | `ocr` `pdf` `self-host` `api` | [nanonets-ocr2.md](../technologies/devtools/nanonets-ocr2.md) |
| **DeepSeek-OCR** | `ocr` `self-host` `cli` `api` | [deepseek-ocr.md](../technologies/devtools/deepseek-ocr.md) |
| **Surya** | `ocr` `pdf` `self-host` `cli` | [surya.md](../technologies/devtools/surya.md) |
| **Infinity-Parser2** | `ocr` `pdf` `self-host` `cli` | [infinity-parser2.md](../technologies/devtools/infinity-parser2.md) |
| **VLMs OCR Playground** | `ocr` `self-host` | [vlms-ocr-playground.md](../technologies/devtools/vlms-ocr-playground.md) |

> Dots demo Space: [yahtzee/Dots-OCR](https://huggingface.co/spaces/yahtzee/Dots-OCR) · Surya demo: [xiaoyao9184/surya](https://huggingface.co/spaces/xiaoyao9184/surya) · Infinity-Parser2: [Infinity-Parser2-Demo](https://huggingface.co/spaces/infly/Infinity-Parser2-Demo) · DeepSeek quant: `DeepSeek-OCR-Latest-BF16.I64` (xem [deepseek-ocr.md](../technologies/devtools/deepseek-ocr.md)).  
> Grounding / text-locate (không thay PDF→MD): [LocateAnything-3B](../technologies/cv-edge/locate-anything.md) *(Primary §5)*.

### 6.3 Diagram · Workflow · GIS

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **drawio-skill** | `skill` `diagram` `cli` *(Primary §1.4)* | [drawio-skill.md](../technologies/mcp-ai-agents/drawio-skill.md) |
| └ Draw.io · n8n · ArcGIS harnesses | `harness` … | [cli-anything/](../technologies/cli-anything/README.md) |
| **FossFLOW** | `diagram` `self-host` | [fossflow.md](../technologies/devtools/fossflow.md) |
| **n8n-workflows** | `workflow` `self-host` `dataset` | [n8n-workflows.md](../technologies/devtools/n8n-workflows.md) |
| **System Design 101** | `diagram` `dataset` | [system-design-101.md](../technologies/devtools/system-design-101.md) |
| **Duckle** | `workflow` `self-host` `desktop` `mcp` `cli` `agent` | [duckle.md](../technologies/devtools/duckle.md) |
| **Tabularis** | `mcp` `desktop` `self-host` `cli` `agent` | [tabularis.md](../technologies/devtools/tabularis.md) |
| **Floci** | `self-host` `cli` `api` | [floci.md](../technologies/devtools/floci.md) |
| **SmolVM** | `cli` `self-host` `desktop` `coding-agent` | [smolvm.md](../technologies/devtools/smolvm.md) |
| **VeloxDB** | `desktop` `self-host` `cli` | [veloxdb.md](../technologies/devtools/veloxdb.md) |
| **Dolt** | `cli` `self-host` `api` `workflow` `agent` | [dolt.md](../technologies/devtools/dolt.md) |
| **Drizzle ORM** | `api` `cli` `self-host` | [drizzle-orm.md](../technologies/devtools/drizzle-orm.md) |
| **Vietnamese Provinces DB** | `gis` | [vietnamese-provinces-database.md](../technologies/devtools/vietnamese-provinces-database.md) |
| **COBE** | `gis` | [cobe.md](../technologies/devtools/cobe.md) |

### 6.4 LLM gateway · train · inference

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **FreeLLMAPI** | `api` `self-host` `mcp` `desktop` | [freellmapi.md](../technologies/devtools/freellmapi.md) |
| **Models.dev** | `api` `dataset` `skill` | [models-dev.md](../technologies/devtools/models-dev.md) |
| **LocalAI** | `api` `self-host` `mcp` `agent` `stt` `tts` `image-gen` | [localai.md](../technologies/devtools/localai.md) |
| **vLLM-Omni** | `api` `self-host` `cli` `tts` `image-gen` `video` | [vllm-omni.md](../technologies/devtools/vllm-omni.md) |
| **MiniCPM** | `self-host` `cli` `edge` `desktop` `skill` | [minicpm.md](../technologies/devtools/minicpm.md) |
| **Unsloth** | `self-host` `cli` `api` `desktop` | [unsloth.md](../technologies/devtools/unsloth.md) |
| **Train LLM From Scratch** | `self-host` `cli` `desktop` | [train-llm-from-scratch.md](../technologies/devtools/train-llm-from-scratch.md) |
| **DFlash** | `cli` `self-host` `api` | [dflash.md](../technologies/devtools/dflash.md) |
| **AirLLM** | `self-host` `cli` `api` | [airllm.md](../technologies/devtools/airllm.md) |
| **exo** | `self-host` `api` `cli` `desktop` | [exo.md](../technologies/devtools/exo.md) |
| **Cake** | `api` `self-host` `cli` `tts` `image-gen` `edge` | [cake.md](../technologies/devtools/cake.md) |
| **LLM Checker** | `cli` `mcp` `self-host` | [llm-checker.md](../technologies/devtools/llm-checker.md) |
| **llmfit** | `cli` `desktop` `self-host` `skill` | [llmfit.md](../technologies/devtools/llmfit.md) |

> Fine-tune Odoo: [ai-training](../../ai-training/README.md).

### 6.5 Datasets · Vietnam legal · VN NLP

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Án lệ TOAAN** | `rag` `dataset` `self-host` | [anle-toaan.md](../technologies/devtools/anle-toaan.md) |
| **Bộ Pháp Điển MOJ** | `rag` `dataset` `self-host` | [phapdien-moj.md](../technologies/devtools/phapdien-moj.md) |
| **protonx-legal-tc** | `ocr` `self-host` `cli` | [protonx-legal-tc.md](../technologies/devtools/protonx-legal-tc.md) |
| **ViT5-base** | `self-host` `cli` `api` | [vit5-base.md](../technologies/devtools/vit5-base.md) |

> Nguồn công khai cổng nhà nước · CC-BY-4.0 (datasets) · verify văn bản gốc khi dùng agent.  
> protonx-legal-tc: license **NC** — đọc card HF. ViT5: MIT backbone cho fine-tune VN.

---

## 7. Security & Pentesting

| Công nghệ | Tags | Bài viết |
|-----------|------|----------|
| **Strix** | `security` `pentest` `agent` `cli` | [strix.md](../technologies/security/strix.md) |
| **HackingTool** | `security` `pentest` `cli` `self-host` | [hackingtool.md](../technologies/security/hackingtool.md) |
| **OSIRIS** | `security` `gis` `self-host` `desktop` `api` | [osiris.md](../technologies/security/osiris.md) |
| **System Informer** | `security` `desktop` | [system-informer.md](../technologies/security/system-informer.md) |

| Khác biệt | Vai trò |
|-----------|---------|
| **dcg** (§1.4) | Phòng agent phá máy (shell/git) |
| **AGT** (§1.4) | Policy / identity / sandbox tool-calls |
| **Strix** | Pentest AI có kiểm soát (RoE) |
| **HackingTool** | Menu cài tool pentest cổ điển (lab/CTF) |
| **OSIRIS** | OSINT map + RECON toolkit |
| **System Informer** | Windows process/handle monitor (ex-Process Hacker) |
| **Magika** (§6.2) | AI file-type trước ingest/scan |

---

