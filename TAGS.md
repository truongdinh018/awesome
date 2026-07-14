# Tags — chú giải & điểm neo

> Dùng khi bạn biết **capability** (vd. `tts`, `rag`) nhưng chưa biết tool nào.  
> Taxonomy đầy đủ theo domain: [categories/README.md](categories/README.md) · Star list: [repos/README.md](repos/README.md)

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

