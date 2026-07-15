# Dùng để làm gì? — Mục lục theo nhu cầu

> **Bắt đầu từ đây** nếu bạn chưa biết tool thuộc domain nào. Mỗi mục = một việc cần làm → tool + tóm tắt “là gì”.
>
> **226** bài · generated từ `technologies/*/…md` · **2026-07-15**.
>
> Song song: [categories/](categories/README.md) · [repos/](repos/README.md) · [TAGS.md](TAGS.md).

## Cách dùng

1. Ctrl+F nhu cầu tiếng Việt (vd. `PDF`, `clone giọng`, `MCP`).
2. Mở bài → đọc **Dùng khi nào?** rồi mới cài.
3. Một repo có thể xuất hiện ở **nhiều nhóm**.

## Mục lục nhanh

- [Hỏi đáp trên tài liệu / knowledge (RAG)](#01-rag) — **31**
- [Cào web & extract dữ liệu](#02-extract) — **4**
- [Agent lập trình](#03-coding) — **46**
- [Agent runtime / bot đa kênh](#04-agent-runtime) — **15**
- [MCP — gắn tool vào AI coding assistant](#05-mcp) — **52**
- [Skill / prompt / guideline](#06-skills) — **50**
- [Memory dài hạn cho agent](#07-memory) — **3**
- [An toàn lệnh & governance](#08-guardrail) — **2**
- [Nhận dạng giọng nói (STT)](#09-stt) — **14**
- [Tổng hợp tiếng nói / clone giọng (TTS)](#10-tts) — **26**
- [Sinh ảnh & video bằng AI](#11-image-video-gen) — **16**
- [Sửa / tải / xem video (không gen)](#12-video-tools) — **13**
- [UI / web → code](#13-ui2code) — **4**
- [Tự động hóa trình duyệt (computer-use)](#14-browser) — **14**
- [Thị giác máy & edge/IoT](#15-cv) — **9**
- [PDF, OCR, tài liệu văn phòng](#16-pdf-ocr) — **23**
- [Thông báo & cầu nối chat](#17-notify) — **7**
- [Workflow / automation glue](#18-workflow) — **16**
- [Bảo mật & pentest](#19-security) — **7**
- [Hạ tầng chạy LLM (gateway / inference / train)](#20-llm-infra) — **11**
- [DB / storage / file browser](#21-data) — **5**
- [Năng suất & self-host tiện ích](#22-productivity) — **27**
- [CLI-Anything harness (điều khiển app bằng agent)](#23-harness) — **12**
- [3D / CAD / game engine](#24-3d) — **7**
- [Watermark nội dung AI](#25-watermark) — **2**
- [Sơ đồ / GIS / bản đồ](#26-diagram-gis) — **12**

---

<a id="01-rag"></a>
## Hỏi đáp trên tài liệu / knowledge (RAG)

> Ingest tài liệu rồi chat/truy vấn có ngữ cảnh.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **agentmemory** | MCP & AI Agents | `agent` `coding-agent` `mcp` `self-host` `rag` `cli` | agentmemory là engine persistent memory local cho coding agents: tự capture (hooks), nén, hybrid search (BM25 + vector + graph)… | [agentmemory.md](technologies/mcp-ai-agents/agentmemory.md) |
| **AnythingLLM** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `desktop` `api` | AnythingLLM (Mintplex Labs) là app all-in-one local-first : chat với documents, AI agents, multi-user (Docker), vector DB, MCP,… | [anything-llm.md](technologies/mcp-ai-agents/anything-llm.md) |
| **AstrBot** | MCP & AI Agents | `agent` `mcp` `skill` `rag` `self-host` `api` | AstrBot — platform agent chatbot all-in-one gắn IM (QQ, Telegram, Discord, Feishu, DingTalk, WeCom, Slack, LINE…). | [astrbot.md](technologies/mcp-ai-agents/astrbot.md) |
| **Bộ Pháp Điển MOJ (phapdien-moj-gov-vn)** | DevTools | `rag` `dataset` `self-host` | Dataset corpus cấp Điều của Bộ Pháp Điển Việt Nam chính thức: ~65,997 Điều , 43 chủ đề, 202 đề mục, ontology Việt–Anh, article … | [phapdien-moj.md](technologies/devtools/phapdien-moj.md) |
| **Claude-Mem** | MCP & AI Agents | `agent` `coding-agent` `mcp` `self-host` `rag` | Claude-Mem — hệ persistent memory compression : capture tool usage trong session → nén/tóm tắt bằng AI → inject context liên qu… | [claude-mem.md](technologies/mcp-ai-agents/claude-mem.md) |
| **Deta Surf** | MCP & AI Agents | `rag` `desktop` `self-host` `browser` | Deta Surf là AI Notebook desktop: gom file + webpage vào thư viện local, rồi sinh note thông minh ngay trên nguồn đó — giảm cop… | [deta-surf.md](technologies/mcp-ai-agents/deta-surf.md) |
| **docmd** | DevTools | `mcp` `skill` `cli` `self-host` `api` `rag` | docmd là static site generator tài liệu từ Markdown: nhanh, không React/bloat. | [docmd.md](technologies/devtools/docmd.md) |
| **Docmost** | MCP & AI Agents | `rag` `self-host` `api` `workspace` | Docmost là wiki/docs collaborative open-source thay Confluence / Notion : realtime collab, Spaces, permissions/groups, comments… | [docmost.md](technologies/mcp-ai-agents/docmost.md) |
| **EpicStaff** | MCP & AI Agents | `agent` `mcp` `rag` `self-host` `workflow` | EpicStaff là platform self-host để ops/engineer xây AI agent flows : editor kéo-thả node trên backend Django ; mọi node có thể … | [epicstaff.md](technologies/mcp-ai-agents/epicstaff.md) |
| **Gitingest** | MCP & AI Agents | `cli` `coding-agent` `rag` `self-host` | Gitingest biến bất kỳ Git repo / thư mục thành text digest thân thiện LLM: cấu trúc file, size, token count. | [gitingest.md](technologies/mcp-ai-agents/gitingest.md) |
| **Graphify** | MCP & AI Agents | `skill` `coding-agent` `rag` `cli` `agent` | Graphify là skill / CLI cho coding agent: map cả folder (code, SQL schema, docs, PDF, ảnh, video…) thành knowledge graph tra cứ… | [graphify.md](technologies/mcp-ai-agents/graphify.md) |
| **Hyper-Extract** | MCP & AI Agents | `extract` `rag` `mcp` `cli` | Hyper-Extract là CLI/framework LLM biến văn bản / PDF không cấu trúc thành Knowledge Abstract có kiểu mạnh: List/Set/Pydantic →… | [hyper-extract.md](technologies/mcp-ai-agents/hyper-extract.md) |
| **Khoj** | MCP & AI Agents | `rag` `agent` `self-host` `desktop` `stt` | Khoj là AI second brain self-hostable: chat local/online LLM, answers từ web + docs (PDF, Markdown, Notion, Word, org-mode…), c… | [khoj.md](technologies/mcp-ai-agents/khoj.md) |
| **LangBot** | MCP & AI Agents | `agent` `mcp` `skill` `rag` `self-host` `api` | LangBot — platform production-grade xây bot AI trên IM : Discord · Telegram · Slack · LINE · QQ · WeChat/WeCom · Feishu · DingT… | [langbot.md](technologies/mcp-ai-agents/langbot.md) |
| **Maths, CS & AI Compendium** | MCP & AI Agents | `prompt` `mcp` `skill` `rag` `cli` | Maths, CS & AI Compendium là sách giáo khoa mở (intuition-first): toán → ML → NLP/CV/speech/multimodal → hệ thống / GPU / infer… | [maths-cs-ai-compendium.md](technologies/mcp-ai-agents/maths-cs-ai-compendium.md) |
| **MiroFish** | MCP & AI Agents | `agent` `self-host` `rag` `workflow` `api` | MiroFish là swarm intelligence engine dự đoán: lấy seed (tin tức, policy, báo cáo, tiểu thuyết…) → GraphRAG + persona agents → … | [mirofish.md](technologies/mcp-ai-agents/mirofish.md) |
| **NotebookLM MCP** | MCP & AI Agents | `mcp` `rag` | NotebookLM MCP là MCP server nối AI agent (Claude Code, Codex, Cursor…) với Google NotebookLM. | [notebooklm-mcp.md](technologies/mcp-ai-agents/notebooklm-mcp.md) |
| **Obsidian (CLI-Anything harness)** | CLI-Anything | `harness` `rag` `cli` | Harness Obsidian (Local REST API): agent đọc/ghi vault, search, note workflow — knowledge management agent-native (persistent m… | [obsidian.md](technologies/cli-anything/obsidian.md) |
| **Open Notebook** | MCP & AI Agents | `rag` `self-host` `api` `tts` | Open Notebook là thay thế mã nguồn mở cho Google Notebook LM : 100% local / self-host. | [open-notebook.md](technologies/mcp-ai-agents/open-notebook.md) |
| **OpenHuman** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `desktop` `workflow` | OpenHuman là personal AI super intelligence local-first gồm ba phần: (1) brain — memory tree / Obsidian-style wiki từ email·cal… | [openhuman.md](technologies/mcp-ai-agents/openhuman.md) |
| **PageIndex** | MCP & AI Agents | `rag` `mcp` `self-host` `cli` | PageIndex (Vectify AI) là RAG không vector DB / không chunk giả : biến PDF dài thành cây hierarchical kiểu mục lục, rồi LLM lý … | [pageindex.md](technologies/mcp-ai-agents/pageindex.md) |
| **Pathway** | MCP & AI Agents | `rag` `cli` `self-host` `workflow` `api` | Pathway ( Live Data Framework ) là Python ETL stream + batch cùng một codebase: real-time analytics, connectors (Kafka, GDrive,… | [pathway.md](technologies/mcp-ai-agents/pathway.md) |
| **PixelRAG** | MCP & AI Agents | `rag` `cli` `skill` `api` | PixelRAG (Berkeley SkyLab / BAIR) — Web Screenshots Beat Text for RAG : render docs/web/PDF thành screenshot tiles , embed bằng… | [pixelrag.md](technologies/mcp-ai-agents/pixelrag.md) |
| **RAGFlow** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `api` | RAGFlow (InfiniFlow) là RAG engine mã nguồn mở kết hợp deep document understanding ( DeepDoc ), template chunking, citations gr… | [ragflow.md](technologies/mcp-ai-agents/ragflow.md) |
| **SAG (Zleap AI)** | MCP & AI Agents | `rag` `mcp` `self-host` | SAG là phương pháp graph retrieval cho dữ liệu động quy mô lớn, kèm workbench out-of-the-box: upload Markdown/TXT → chunk → vec… | [sag.md](technologies/mcp-ai-agents/sag.md) |
| **Semble** | MCP & AI Agents | `mcp` `cli` `coding-agent` `rag` `self-host` | Semble là thư viện code search dành cho coding agents: hỏi NL ( "How is authentication handled?" ) → trả snippet đúng chỗ, clai… | [semble.md](technologies/mcp-ai-agents/semble.md) |
| **SurfSense** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `api` `workflow` | SurfSense là NotebookLM for Competitive Intelligence : nền tảng OSS cho AI agents theo dõi thị trường với live connectors (Redd… | [surfsense.md](technologies/mcp-ai-agents/surfsense.md) |
| **Trilium Notes** | MCP & AI Agents | `rag` `self-host` `desktop` `api` | Trilium Notes (TriliumNext) là app note knowledge base open-source, local-first: cây note sâu + clone, WYSIWYG/code, attributes… | [trilium.md](technologies/mcp-ai-agents/trilium.md) |
| **Understand Anything** | MCP & AI Agents | `skill` `coding-agent` `rag` `cli` `agent` | Understand Anything là plugin/skill biến codebase / docs / Karpathy-style LLM wiki thành interactive knowledge graph : explore,… | [understand-anything.md](technologies/mcp-ai-agents/understand-anything.md) |
| **WeKnora** | MCP & AI Agents | `rag` `mcp` `agent` `self-host` `cli` `skill` | WeKnora (Tencent) là framework self-host tri thức LLM enterprise: RAG Q&A , ReAct Agent (orchestration retrieval + MCP + web se… | [weknora.md](technologies/mcp-ai-agents/weknora.md) |
| **Án lệ TOAAN (anle-toaan-gov-vn)** | DevTools | `rag` `dataset` `self-host` | Corpus đa cấp bản án + án lệ Việt Nam: ~ 1,963 văn bản, hierarchy document → section → paragraph → sentence, markdown NFC chuẩn… | [anle-toaan.md](technologies/devtools/anle-toaan.md) |

---

<a id="02-extract"></a>
## Cào web & extract dữ liệu

> Crawl/scrape → nội dung sạch cho RAG hoặc pipeline.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **Crawl4AI** | MCP & AI Agents | `extract` `cli` `browser` `self-host` `api` | Crawl4AI là crawler/scraper OSS biến trang web thành Markdown sạch (LLM-ready) cho RAG, agents, data pipelines. | [crawl4ai.md](technologies/mcp-ai-agents/crawl4ai.md) |
| **Firecrawl** | MCP & AI Agents | `extract` `api` `mcp` `cli` `self-host` `browser` | Firecrawl là web context API : search / scrape / crawl / map → Markdown sạch hoặc JSON có schema cho agents & RAG. | [firecrawl.md](technologies/mcp-ai-agents/firecrawl.md) |
| **Hyper-Extract** | MCP & AI Agents | `extract` `rag` `mcp` `cli` | Hyper-Extract là CLI/framework LLM biến văn bản / PDF không cấu trúc thành Knowledge Abstract có kiểu mạnh: List/Set/Pydantic →… | [hyper-extract.md](technologies/mcp-ai-agents/hyper-extract.md) |
| **Scrapling** | MCP & AI Agents | `extract` `mcp` `cli` `browser` `self-host` | Scrapling là framework web scraping / crawl adaptive: từ một request tới spider full-scale. | [scrapling.md](technologies/mcp-ai-agents/scrapling.md) |

---

<a id="03-coding"></a>
## Agent lập trình

> Viết/sửa code, PR, spec-driven development với agent.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **Addy's Agent Skills** | MCP & AI Agents | `skill` `coding-agent` `prompt` | Addy's Agent Skills là pack 24 skill production-grade + 8 slash commands ( /spec → /ship ) cho AI coding agents (Claude Code, C… | [agent-skills.md](technologies/mcp-ai-agents/agent-skills.md) |
| **Agent Skill registries & websites** | Bookmarks | `skill` `coding-agent` `prompt` | Agent Skill registries là các website / marketplace để tìm và cài skill cho coding agent. | [skill-registries.md](technologies/bookmarks/skill-registries.md) |
| **agentmemory** | MCP & AI Agents | `agent` `coding-agent` `mcp` `self-host` `rag` `cli` | agentmemory là engine persistent memory local cho coding agents: tự capture (hooks), nén, hybrid search (BM25 + vector + graph)… | [agentmemory.md](technologies/mcp-ai-agents/agentmemory.md) |
| **AI Engineering Coach** | MCP & AI Agents | `coding-agent` `skill` `desktop` `cli` | AI Engineer Coach là extension VS Code đọc local AI session logs → dashboard hành vi agentic: practice scores, anti-patterns (4… | [ai-engineering-coach.md](technologies/mcp-ai-agents/ai-engineering-coach.md) |
| **AI Website Cloner Template** | Image & Video | `ui-to-code` `coding-agent` `skill` | Template tái sử dụng để reverse-engineer bất kỳ website thành codebase Next.js hiện đại bằng AI coding agent (khuyến nghị Claud… | [ai-website-cloner.md](technologies/image-video/ai-website-cloner.md) |
| **Caveman** | MCP & AI Agents | `skill` `coding-agent` `prompt` `cli` `mcp` | Caveman là skill / plugin bắt coding agent trả lời ngắn (kiểu “người hang đá”), nhưng giữ nguyên code, lệnh shell và thông báo … | [caveman.md](technologies/mcp-ai-agents/caveman.md) |
| **CC Workflow Studio** | MCP & AI Agents | `coding-agent` `skill` `mcp` `cli` `workflow` | CC Workflow Studio là công cụ thiết kế workflow agent trên canvas (React Flow), export sang format agent đã hiểu ( .claude/ , .… | [cc-wf-studio.md](technologies/mcp-ai-agents/cc-wf-studio.md) |
| **Chrome DevTools MCP** | UI Automation | `mcp` `browser` `ui-automation` `cli` `coding-agent` | chrome-devtools-mcp (Chrome DevTools / Google) là MCP server để coding agent (Cursor, Claude, Copilot, Antigravity…) điều khiển… | [chrome-devtools-mcp.md](technologies/ui-automation/chrome-devtools-mcp.md) |
| **Claude Peers MCP** | MCP & AI Agents | `mcp` `coding-agent` `agent` `cli` `self-host` | claude-peers (MCP) — cho nhiều session Claude Code trên cùng máy tìm nhau và nhắn tin ad-hoc. | [claude-peers-mcp.md](technologies/mcp-ai-agents/claude-peers-mcp.md) |
| **Claude-Mem** | MCP & AI Agents | `agent` `coding-agent` `mcp` `self-host` `rag` | Claude-Mem — hệ persistent memory compression : capture tool usage trong session → nén/tóm tắt bằng AI → inject context liên qu… | [claude-mem.md](technologies/mcp-ai-agents/claude-mem.md) |
| **Clawdmeter** | MCP & AI Agents | `coding-agent` `edge` `iot` `desktop` `cli` | Clawdmeter là dashboard bàn trên ESP32: hiện Claude Code usage (session / weekly). | [clawdmeter.md](technologies/mcp-ai-agents/clawdmeter.md) |
| **CodeBurn** | MCP & AI Agents | `cli` `coding-agent` `mcp` `desktop` `self-host` | CodeBurn là tool local-first theo dõi token + chi phí dùng AI coding (~32 tools: Claude Code, Cursor, Codex, Gemini, Grok…). | [codeburn.md](technologies/mcp-ai-agents/codeburn.md) |
| **CodeWhale** | MCP & AI Agents | `coding-agent` `cli` `agent` `self-host` `mcp` `skill` | CodeWhale là coding agent chạy trên máy bạn trong terminal: đưa provider + model + task → đọc code, sửa file, chạy lệnh, kiểm t… | [codewhale.md](technologies/mcp-ai-agents/codewhale.md) |
| **Codex Pets & coding-agent companions** | Bookmarks | `coding-agent` `desktop` `cli` | Cộng đồng làm companion nhỏ (pixel / animation) gắn UI coding agent — chủ yếu OpenAI Codex app. | [codex-pets.md](technologies/bookmarks/codex-pets.md) |
| **DeerFlow** | MCP & AI Agents | `agent` `skill` `coding-agent` `self-host` `workflow` `mcp` | DeerFlow ( Deep Exploration and Efficient Research Flow ) — OSS super agent harness (ByteDance): research · code · create trên … | [deer-flow.md](technologies/mcp-ai-agents/deer-flow.md) |
| **Easy-Vibe** | MCP & AI Agents | `coding-agent` `skill` `prompt` `workflow` | Easy-Vibe (Datawhale) là khóa học vibe coding từ số 0: ý tưởng → prototype → full-stack → deploy/payment. | [easy-vibe.md](technologies/mcp-ai-agents/easy-vibe.md) |
| **ghgrab** | MCP & AI Agents | `cli` `coding-agent` `self-host` | ghgrab — TUI/CLI browse + download file/folder từ GitHub · GitLab · Codeberg · Gitea · Forgejo mà không git clone toàn repo. | [ghgrab.md](technologies/mcp-ai-agents/ghgrab.md) |
| **Gitingest** | MCP & AI Agents | `cli` `coding-agent` `rag` `self-host` | Gitingest biến bất kỳ Git repo / thư mục thành text digest thân thiện LLM: cấu trúc file, size, token count. | [gitingest.md](technologies/mcp-ai-agents/gitingest.md) |
| **GitReverse** | MCP & AI Agents | `coding-agent` `prompt` `self-host` | GitReverse — “reverse engineer” public GitHub repo thành một user prompt tổng hợp (kiểu paste vào Cursor / Claude Code / Codex … | [gitreverse.md](technologies/mcp-ai-agents/gitreverse.md) |
| **Graphify** | MCP & AI Agents | `skill` `coding-agent` `rag` `cli` `agent` | Graphify là skill / CLI cho coding agent: map cả folder (code, SQL schema, docs, PDF, ảnh, video…) thành knowledge graph tra cứ… | [graphify.md](technologies/mcp-ai-agents/graphify.md) |
| **Happy (Happy Coder)** | MCP & AI Agents | `coding-agent` `cli` `agent` `self-host` `desktop` | Happy là client mobile (iOS/Android) + web cho Claude Code và Codex : CLI wrapper happy claude / happy codex , chuyển điều khiể… | [happy.md](technologies/mcp-ai-agents/happy.md) |
| **Headroom** | MCP & AI Agents | `mcp` `cli` `agent` `coding-agent` `self-host` | Headroom nén tool output, logs, file, RAG chunks, history trước khi vào LLM — claim ~ 60–95% ít token cho JSON, ~ 15–20% cho co… | [headroom.md](technologies/mcp-ai-agents/headroom.md) |
| **HTML Anything** | Image & Video | `skill` `coding-agent` `agent` `video` `self-host` | HTML Anything là agentic HTML editor local-first: AI coding CLI (Claude/Cursor/Codex/Gemini/Copilot/OpenCode/Qwen/Aider) viết s… | [html-anything.md](technologies/image-video/html-anything.md) |
| **Huashu Design** | Image & Video | `skill` `coding-agent` `agent` `video` | Huashu Design ( 花叔设计 ) là agent skill HTML-native: một câu prompt → prototype App/Web (click được), slide HTML + PPTX chỉnh sửa… | [huashu-design.md](technologies/image-video/huashu-design.md) |
| **Karpathy Guidelines** | MCP & AI Agents | `skill` `coding-agent` `prompt` | andrej-karpathy-skills (Karpathy Guidelines) là một file quy tắc ( CLAUDE.md + skill / Cursor rule) chỉnh hành vi coding agent:… | [karpathy-skills.md](technologies/mcp-ai-agents/karpathy-skills.md) |
| **Lanes** | MCP & AI Agents | `coding-agent` `agent` `desktop` `mcp` `workflow` `cli` | Lanes là app desktop ( mission control ) để điều phối nhiều AI coding CLI cùng lúc. | [lanes.md](technologies/mcp-ai-agents/lanes.md) |
| **Learn Claude Code** | MCP & AI Agents | `coding-agent` `agent` `skill` `cli` `prompt` | Learn Claude Code ( Bash is all you need ) là khóa học + code nano harness kiểu Claude Code: dạy harness engineering — tools, k… | [learn-claude-code.md](technologies/mcp-ai-agents/learn-claude-code.md) |
| **Matt Pocock Skills** | MCP & AI Agents | `skill` `coding-agent` `prompt` | mattpocock/skills — bộ Agent Skills từ .claude của Matt Pocock (Total TypeScript / AI Hero): nhỏ, composable, giữ quyền kiểm so… | [mattpocock-skills.md](technologies/mcp-ai-agents/mattpocock-skills.md) |
| **Nezha (哪吒)** | MCP & AI Agents | `coding-agent` `agent` `desktop` `workflow` `cli` `skill` | Nezha (哪吒) là IDE nhẹ agent-first (cross-platform, ~7MB): một app quản lý nhiều project × nhiều session Claude Code / Codex , t… | [nezha.md](technologies/mcp-ai-agents/nezha.md) |
| **OfficeCLI** | DevTools | `cli` `office` `skill` `coding-agent` `workspace` | OfficeCLI là suite đọc / sửa / tạo file Word (.docx), Excel (.xlsx), PowerPoint (.pptx) qua CLI — không cần cài Microsoft Office. | [officecli.md](technologies/devtools/officecli.md) |
| **OpenHands** | MCP & AI Agents | `coding-agent` `agent` `self-host` | OpenHands là nền tảng AI-driven development self-host: Agent Canvas là control center cho coding agents + automations (Slack, G… | [openhands.md](technologies/mcp-ai-agents/openhands.md) |
| **OpenMontage** | Image & Video | `video` `agent` `skill` `coding-agent` `workflow` `cli` | OpenMontage là hệ thống agentic video production open-source: biến coding assistant (Claude Code, Cursor, Copilot, Windsurf, Co… | [openmontage.md](technologies/image-video/openmontage.md) |
| **OpenSpace** | MCP & AI Agents | `skill` `agent` `mcp` `cli` `self-host` `coding-agent` | OpenSpace — quality-first skill hub cho AI agents: self-evolve skill (auto-fix / improve / learn từ task thật), share skill clo… | [openspace.md](technologies/mcp-ai-agents/openspace.md) |
| **Paseo** | MCP & AI Agents | `coding-agent` `agent` `desktop` `cli` `skill` `self-host` | Paseo là một interface điều phối nhiều coding agent trên máy bạn: Claude Code · Codex · Copilot · OpenCode · Pi — desktop, iOS/… | [paseo.md](technologies/mcp-ai-agents/paseo.md) |
| **Ponytail** | MCP & AI Agents | `skill` `coding-agent` `prompt` | Ponytail là skill/plugin làm AI coding agent “nghĩ như senior lười nhưng đúng”: YAGNI ladder trước khi viết code — tái dùng std… | [ponytail.md](technologies/mcp-ai-agents/ponytail.md) |
| **PPT Master** | MCP & AI Agents | `skill` `office` `cli` `coding-agent` `workflow` | PPT Master là workflow / Agent Skill chạy trong AI IDE (Claude Code, Cursor, Copilot…): đưa PDF / DOCX / web / text → sinh file… | [ppt-master.md](technologies/mcp-ai-agents/ppt-master.md) |
| **RTK** | MCP & AI Agents | `cli` `coding-agent` | RTK ( Rust Token Killer ) là CLI proxy chặn output lệnh shell trước khi vào context LLM — lọc/nén git status , grep , cargo tes… | [rtk.md](technologies/mcp-ai-agents/rtk.md) |
| **Semble** | MCP & AI Agents | `mcp` `cli` `coding-agent` `rag` `self-host` | Semble là thư viện code search dành cho coding agents: hỏi NL ( "How is authentication handled?" ) → trả snippet đúng chỗ, clai… | [semble.md](technologies/mcp-ai-agents/semble.md) |
| **SmolVM** | DevTools | `cli` `self-host` `desktop` `coding-agent` | SmolVM là CLI chạy Linux microVM cục bộ: cold start dưới giây, macOS / Linux / Windows, RAM elastic (virtio balloon). | [smolvm.md](technologies/devtools/smolvm.md) |
| **Spec Kit** | MCP & AI Agents | `coding-agent` `skill` `cli` `workflow` `prompt` | Spec Kit là toolkit OSS của GitHub cho Spec-Driven Development (SDD) : spec executable thay vì vibe-code từ đầu. | [spec-kit.md](technologies/mcp-ai-agents/spec-kit.md) |
| **Stop Slop** | MCP & AI Agents | `skill` `coding-agent` `prompt` | Stop Slop là Agent Skill dạy LLM (Claude, Cursor, …) nhận và xóa lối viết AI điển hình: câu mở họng, jargon, nhịp máy, cấu trúc… | [stop-slop.md](technologies/mcp-ai-agents/stop-slop.md) |
| **Taste Skill** | MCP & AI Agents | `skill` `coding-agent` `prompt` `image-gen` | Taste Skill là bộ Agent Skills portable (Claude Code, Cursor, Codex, ChatGPT…) chống UI AI "generic slop": layout, typography, … | [taste-skill.md](technologies/mcp-ai-agents/taste-skill.md) |
| **TencentDB Agent Memory** | MCP & AI Agents | `agent` `self-host` `coding-agent` | TencentDB Agent Memory là long-term memory fully local cho AI agents (zero external API bắt buộc): pipeline 4 tầng progressive … | [tencentdb-agent-memory.md](technologies/mcp-ai-agents/tencentdb-agent-memory.md) |
| **Understand Anything** | MCP & AI Agents | `skill` `coding-agent` `rag` `cli` `agent` | Understand Anything là plugin/skill biến codebase / docs / Karpathy-style LLM wiki thành interactive knowledge graph : explore,… | [understand-anything.md](technologies/mcp-ai-agents/understand-anything.md) |
| **Vibe Kanban** | MCP & AI Agents | `coding-agent` `agent` `cli` `self-host` `workflow` `mcp` | Vibe Kanban là kanban + workspace để lấy 10X từ coding agents : plan issues trên board → spawn workspace để agent chạy. | [vibe-kanban.md](technologies/mcp-ai-agents/vibe-kanban.md) |
| **Zerolang** | MCP & AI Agents | `coding-agent` `agent` `cli` `skill` | Zerolang ( The programming language for agents ) là ngôn ngữ experimental graph-native : program database = semantic graph ( ze… | [zerolang.md](technologies/mcp-ai-agents/zerolang.md) |

---

<a id="04-agent-runtime"></a>
## Agent runtime / bot đa kênh

> Orchestrator agent, bot chat, multi-agent (không chỉ IDE).

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **Agent Governance Toolkit (AGT)** | MCP & AI Agents | `guardrail` `security` `agent` `cli` `mcp` | Agent Governance Toolkit (AGT) là bộ công cụ mã nguồn mở của Microsoft để ship agent production : áp dụng policy ( policy enfor… | [agent-governance-toolkit.md](technologies/mcp-ai-agents/agent-governance-toolkit.md) |
| **AnythingLLM** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `desktop` `api` | AnythingLLM (Mintplex Labs) là app all-in-one local-first : chat với documents, AI agents, multi-user (Docker), vector DB, MCP,… | [anything-llm.md](technologies/mcp-ai-agents/anything-llm.md) |
| **AstrBot** | MCP & AI Agents | `agent` `mcp` `skill` `rag` `self-host` `api` | AstrBot — platform agent chatbot all-in-one gắn IM (QQ, Telegram, Discord, Feishu, DingTalk, WeCom, Slack, LINE…). | [astrbot.md](technologies/mcp-ai-agents/astrbot.md) |
| **Atomic Agents** | MCP & AI Agents | `agent` `cli` `api` `workflow` | Atomic Agents (Eigenwise) là framework nhẹ, modular để dựng agent pipeline như LEGO: mỗi agent / tool / context provider single… | [atomic-agents.md](technologies/mcp-ai-agents/atomic-agents.md) |
| **CLI-Anything** | MCP & AI Agents | `cli` `harness` `skill` `agent` | CLI-Anything (HKUDS) làm mọi phần mềm trở thành agent-native qua CLI có cấu trúc, thay vì để agent “bấm UI” mù. | [cli-anything.md](technologies/mcp-ai-agents/cli-anything.md) |
| **EpicStaff** | MCP & AI Agents | `agent` `mcp` `rag` `self-host` `workflow` | EpicStaff là platform self-host để ops/engineer xây AI agent flows : editor kéo-thả node trên backend Django ; mọi node có thể … | [epicstaff.md](technologies/mcp-ai-agents/epicstaff.md) |
| **Hermes Agent** | MCP & AI Agents | `agent` `mcp` `skill` `cli` `self-host` | Hermes Agent (Nous Research) là self-improving AI agent với vòng học khép kín: tạo/cải thiện skills từ trải nghiệm, nhớ người d… | [hermes-agent.md](technologies/mcp-ai-agents/hermes-agent.md) |
| **Khoj** | MCP & AI Agents | `rag` `agent` `self-host` `desktop` `stt` | Khoj là AI second brain self-hostable: chat local/online LLM, answers từ web + docs (PDF, Markdown, Notion, Word, org-mode…), c… | [khoj.md](technologies/mcp-ai-agents/khoj.md) |
| **LangBot** | MCP & AI Agents | `agent` `mcp` `skill` `rag` `self-host` `api` | LangBot — platform production-grade xây bot AI trên IM : Discord · Telegram · Slack · LINE · QQ · WeChat/WeCom · Feishu · DingT… | [langbot.md](technologies/mcp-ai-agents/langbot.md) |
| **MiroFish** | MCP & AI Agents | `agent` `self-host` `rag` `workflow` `api` | MiroFish là swarm intelligence engine dự đoán: lấy seed (tin tức, policy, báo cáo, tiểu thuyết…) → GraphRAG + persona agents → … | [mirofish.md](technologies/mcp-ai-agents/mirofish.md) |
| **OpenHuman** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `desktop` `workflow` | OpenHuman là personal AI super intelligence local-first gồm ba phần: (1) brain — memory tree / Obsidian-style wiki từ email·cal… | [openhuman.md](technologies/mcp-ai-agents/openhuman.md) |
| **RAGFlow** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `api` | RAGFlow (InfiniFlow) là RAG engine mã nguồn mở kết hợp deep document understanding ( DeepDoc ), template chunking, citations gr… | [ragflow.md](technologies/mcp-ai-agents/ragflow.md) |
| **SurfSense** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `api` `workflow` | SurfSense là NotebookLM for Competitive Intelligence : nền tảng OSS cho AI agents theo dõi thị trường với live connectors (Redd… | [surfsense.md](technologies/mcp-ai-agents/surfsense.md) |
| **Vibe-Trading** | MCP & AI Agents | `agent` `mcp` `skill` `cli` `self-host` `workflow` | Vibe-Trading — personal trading agent OSS: NL research → market data → strategy codegen → backtest → report/export (+ Alpha Zoo… | [vibe-trading.md](technologies/mcp-ai-agents/vibe-trading.md) |
| **WeKnora** | MCP & AI Agents | `rag` `mcp` `agent` `self-host` `cli` `skill` | WeKnora (Tencent) là framework self-host tri thức LLM enterprise: RAG Q&A , ReAct Agent (orchestration retrieval + MCP + web se… | [weknora.md](technologies/mcp-ai-agents/weknora.md) |

---

<a id="05-mcp"></a>
## MCP — gắn tool vào AI coding assistant

> Server/client MCP (Cursor, Claude Desktop, …).

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **Agent Governance Toolkit (AGT)** | MCP & AI Agents | `guardrail` `security` `agent` `cli` `mcp` | Agent Governance Toolkit (AGT) là bộ công cụ mã nguồn mở của Microsoft để ship agent production : áp dụng policy ( policy enfor… | [agent-governance-toolkit.md](technologies/mcp-ai-agents/agent-governance-toolkit.md) |
| **agentmemory** | MCP & AI Agents | `agent` `coding-agent` `mcp` `self-host` `rag` `cli` | agentmemory là engine persistent memory local cho coding agents: tự capture (hooks), nén, hybrid search (BM25 + vector + graph)… | [agentmemory.md](technologies/mcp-ai-agents/agentmemory.md) |
| **AnythingLLM** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `desktop` `api` | AnythingLLM (Mintplex Labs) là app all-in-one local-first : chat với documents, AI agents, multi-user (Docker), vector DB, MCP,… | [anything-llm.md](technologies/mcp-ai-agents/anything-llm.md) |
| **ArcGIS Pro (CLI-Anything harness)** | CLI-Anything | `harness` `gis` `mcp` `cli` | Harness ArcGIS Pro : agent làm bản đồ, geoprocessing, chỉnh feature — CLI kèm MCP bridge để điều khiển Pro live (demo cartograp… | [arcgis-pro.md](technologies/cli-anything/arcgis-pro.md) |
| **AstrBot** | MCP & AI Agents | `agent` `mcp` `skill` `rag` `self-host` `api` | AstrBot — platform agent chatbot all-in-one gắn IM (QQ, Telegram, Discord, Feishu, DingTalk, WeCom, Slack, LINE…). | [astrbot.md](technologies/mcp-ai-agents/astrbot.md) |
| **Caveman** | MCP & AI Agents | `skill` `coding-agent` `prompt` `cli` `mcp` | Caveman là skill / plugin bắt coding agent trả lời ngắn (kiểu “người hang đá”), nhưng giữ nguyên code, lệnh shell và thông báo … | [caveman.md](technologies/mcp-ai-agents/caveman.md) |
| **CC Workflow Studio** | MCP & AI Agents | `coding-agent` `skill` `mcp` `cli` `workflow` | CC Workflow Studio là công cụ thiết kế workflow agent trên canvas (React Flow), export sang format agent đã hiểu ( .claude/ , .… | [cc-wf-studio.md](technologies/mcp-ai-agents/cc-wf-studio.md) |
| **Chrome DevTools MCP** | UI Automation | `mcp` `browser` `ui-automation` `cli` `coding-agent` | chrome-devtools-mcp (Chrome DevTools / Google) là MCP server để coding agent (Cursor, Claude, Copilot, Antigravity…) điều khiển… | [chrome-devtools-mcp.md](technologies/ui-automation/chrome-devtools-mcp.md) |
| **Claude Peers MCP** | MCP & AI Agents | `mcp` `coding-agent` `agent` `cli` `self-host` | claude-peers (MCP) — cho nhiều session Claude Code trên cùng máy tìm nhau và nhắn tin ad-hoc. | [claude-peers-mcp.md](technologies/mcp-ai-agents/claude-peers-mcp.md) |
| **Claude-Mem** | MCP & AI Agents | `agent` `coding-agent` `mcp` `self-host` `rag` | Claude-Mem — hệ persistent memory compression : capture tool usage trong session → nén/tóm tắt bằng AI → inject context liên qu… | [claude-mem.md](technologies/mcp-ai-agents/claude-mem.md) |
| **CodeBurn** | MCP & AI Agents | `cli` `coding-agent` `mcp` `desktop` `self-host` | CodeBurn là tool local-first theo dõi token + chi phí dùng AI coding (~32 tools: Claude Code, Cursor, Codex, Gemini, Grok…). | [codeburn.md](technologies/mcp-ai-agents/codeburn.md) |
| **CodeWhale** | MCP & AI Agents | `coding-agent` `cli` `agent` `self-host` `mcp` `skill` | CodeWhale là coding agent chạy trên máy bạn trong terminal: đưa provider + model + task → đọc code, sửa file, chạy lệnh, kiểm t… | [codewhale.md](technologies/mcp-ai-agents/codewhale.md) |
| **DeerFlow** | MCP & AI Agents | `agent` `skill` `coding-agent` `self-host` `workflow` `mcp` | DeerFlow ( Deep Exploration and Efficient Research Flow ) — OSS super agent harness (ByteDance): research · code · create trên … | [deer-flow.md](technologies/mcp-ai-agents/deer-flow.md) |
| **docmd** | DevTools | `mcp` `skill` `cli` `self-host` `api` `rag` | docmd là static site generator tài liệu từ Markdown: nhanh, không React/bloat. | [docmd.md](technologies/devtools/docmd.md) |
| **Duckle** | DevTools | `workflow` `self-host` `desktop` `mcp` `cli` `agent` | Duckle là desktop ETL/ELT studio local-first: canvas kéo-thả (~345–360 components: files, DBs, lakehouse, SaaS, streaming, DQ, … | [duckle.md](technologies/devtools/duckle.md) |
| **EpicStaff** | MCP & AI Agents | `agent` `mcp` `rag` `self-host` `workflow` | EpicStaff là platform self-host để ops/engineer xây AI agent flows : editor kéo-thả node trên backend Django ; mọi node có thể … | [epicstaff.md](technologies/mcp-ai-agents/epicstaff.md) |
| **ezBookkeeping** | DevTools | `self-host` `desktop` `workspace` `mcp` `api` `ocr` | ezBookkeeping — app personal finance / bookkeeping self-host nhẹ: ghi giao dịch, import đa định dạng (CSV, OFX/QFX/QIF, Firefly… | [ezbookkeeping.md](technologies/devtools/ezbookkeeping.md) |
| **Firecrawl** | MCP & AI Agents | `extract` `api` `mcp` `cli` `self-host` `browser` | Firecrawl là web context API : search / scrape / crawl / map → Markdown sạch hoặc JSON có schema cho agents & RAG. | [firecrawl.md](technologies/mcp-ai-agents/firecrawl.md) |
| **FreeLLMAPI** | DevTools | `api` `self-host` `mcp` `desktop` | FreeLLMAPI là proxy tương thích OpenAI ( OpenAI-compatible ) gom free tier của ~16+ LLM provider (~1.7B tokens/tháng theo READM… | [freellmapi.md](technologies/devtools/freellmapi.md) |
| **FunASR** | Speech & Audio | `stt` `cli` `api` `self-host` `mcp` | FunASR (ModelScope / Alibaba DAMO) là toolkit ASR công nghiệp ( industrial ASR ): tới ~340× realtime (Fun-ASR-Nano + vLLM), 50+… | [funasr.md](technologies/speech-audio/funasr.md) |
| **Headroom** | MCP & AI Agents | `mcp` `cli` `agent` `coding-agent` `self-host` | Headroom nén tool output, logs, file, RAG chunks, history trước khi vào LLM — claim ~ 60–95% ít token cho JSON, ~ 15–20% cho co… | [headroom.md](technologies/mcp-ai-agents/headroom.md) |
| **Hermes Agent** | MCP & AI Agents | `agent` `mcp` `skill` `cli` `self-host` | Hermes Agent (Nous Research) là self-improving AI agent với vòng học khép kín: tạo/cải thiện skills từ trải nghiệm, nhớ người d… | [hermes-agent.md](technologies/mcp-ai-agents/hermes-agent.md) |
| **Horizon** | DevTools | `mcp` `self-host` `workflow` `notification` `cli` | Horizon là AI news radar cá nhân: lấy Hacker News · RSS · Reddit · Telegram · X · GitHub · OpenBB… → dedupe · score · filter · … | [horizon.md](technologies/devtools/horizon.md) |
| **Hyper-Extract** | MCP & AI Agents | `extract` `rag` `mcp` `cli` | Hyper-Extract là CLI/framework LLM biến văn bản / PDF không cấu trúc thành Knowledge Abstract có kiểu mạnh: List/Set/Pydantic →… | [hyper-extract.md](technologies/mcp-ai-agents/hyper-extract.md) |
| **Lanes** | MCP & AI Agents | `coding-agent` `agent` `desktop` `mcp` `workflow` `cli` | Lanes là app desktop ( mission control ) để điều phối nhiều AI coding CLI cùng lúc. | [lanes.md](technologies/mcp-ai-agents/lanes.md) |
| **LangBot** | MCP & AI Agents | `agent` `mcp` `skill` `rag` `self-host` `api` | LangBot — platform production-grade xây bot AI trên IM : Discord · Telegram · Slack · LINE · QQ · WeChat/WeCom · Feishu · DingT… | [langbot.md](technologies/mcp-ai-agents/langbot.md) |
| **LLM Checker** | DevTools | `cli` `mcp` `self-host` | LLM Checker — CLI (và MCP) quét phần cứng rồi recommend model LLM/sLLM local phù hợp (Ollama + registry HF/Ollama/GPT4All, scor… | [llm-checker.md](technologies/devtools/llm-checker.md) |
| **LocalAI** | DevTools | `api` `self-host` `mcp` `agent` `stt` `tts` | LocalAI là engine AI mã nguồn mở: chạy LLM, nhìn ảnh ( vision ), giọng nói, tạo ảnh / video trên phần cứng của bạn (CPU cũng đư… | [localai.md](technologies/devtools/localai.md) |
| **Maths, CS & AI Compendium** | MCP & AI Agents | `prompt` `mcp` `skill` `rag` `cli` | Maths, CS & AI Compendium là sách giáo khoa mở (intuition-first): toán → ML → NLP/CV/speech/multimodal → hệ thống / GPU / infer… | [maths-cs-ai-compendium.md](technologies/mcp-ai-agents/maths-cs-ai-compendium.md) |
| **NotebookLM MCP** | MCP & AI Agents | `mcp` `rag` | NotebookLM MCP là MCP server nối AI agent (Claude Code, Codex, Cursor…) với Google NotebookLM. | [notebooklm-mcp.md](technologies/mcp-ai-agents/notebooklm-mcp.md) |
| **OpenHuman** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `desktop` `workflow` | OpenHuman là personal AI super intelligence local-first gồm ba phần: (1) brain — memory tree / Obsidian-style wiki từ email·cal… | [openhuman.md](technologies/mcp-ai-agents/openhuman.md) |
| **OpenSpace** | MCP & AI Agents | `skill` `agent` `mcp` `cli` `self-host` `coding-agent` | OpenSpace — quality-first skill hub cho AI agents: self-evolve skill (auto-fix / improve / learn từ task thật), share skill clo… | [openspace.md](technologies/mcp-ai-agents/openspace.md) |
| **Page Agent** | UI Automation | `ui-automation` `browser` `dom` `mcp` `agent` | Page Agent (Alibaba) là GUI agent sống trong webpage : một script JS gắn vào trang → điều khiển UI bằng ngôn ngữ tự nhiên. | [page-agent.md](technologies/ui-automation/page-agent.md) |
| **PageIndex** | MCP & AI Agents | `rag` `mcp` `self-host` `cli` | PageIndex (Vectify AI) là RAG không vector DB / không chunk giả : biến PDF dài thành cây hierarchical kiểu mục lục, rồi LLM lý … | [pageindex.md](technologies/mcp-ai-agents/pageindex.md) |
| **Paseo** | MCP & AI Agents | `coding-agent` `agent` `desktop` `cli` `skill` `self-host` | Paseo là một interface điều phối nhiều coding agent trên máy bạn: Claude Code · Codex · Copilot · OpenCode · Pi — desktop, iOS/… | [paseo.md](technologies/mcp-ai-agents/paseo.md) |
| **Prompt Optimizer** | MCP & AI Agents | `prompt` `mcp` `self-host` `desktop` `browser` `image-gen` | Prompt Optimizer — tool tối ưu / test / evaluate prompt bằng LLM: one-click + iterative rewrite; system vs user prompt; analysi… | [prompt-optimizer.md](technologies/mcp-ai-agents/prompt-optimizer.md) |
| **prompts.chat** | MCP & AI Agents | `prompt` `mcp` `cli` `self-host` | prompts.chat là thư viện prompt open-source lớn cho AI chat (ChatGPT, Claude, Gemini, Llama, Mistral…). | [prompts-chat.md](technologies/mcp-ai-agents/prompts-chat.md) |
| **Puppeteer** | UI Automation | `browser` `ui-automation` `api` `mcp` | Puppeteer là JavaScript/TypeScript API điều khiển Chrome / Firefox (headless hoặc headed) qua CDP. | [puppeteer.md](technologies/ui-automation/puppeteer.md) |
| **QuiverAI** | Bookmarks | `image-gen` `mcp` `api` `diagram` | QuiverAI — foundational model SaaS cho vector design : generate / edit / (sắp) animate SVG (logo, illustration, typography). | [quiverai.md](technologies/bookmarks/quiverai.md) |
| **RAGFlow** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `api` | RAGFlow (InfiniFlow) là RAG engine mã nguồn mở kết hợp deep document understanding ( DeepDoc ), template chunking, citations gr… | [ragflow.md](technologies/mcp-ai-agents/ragflow.md) |
| **SAG (Zleap AI)** | MCP & AI Agents | `rag` `mcp` `self-host` | SAG là phương pháp graph retrieval cho dữ liệu động quy mô lớn, kèm workbench out-of-the-box: upload Markdown/TXT → chunk → vec… | [sag.md](technologies/mcp-ai-agents/sag.md) |
| **Scrapling** | MCP & AI Agents | `extract` `mcp` `cli` `browser` `self-host` | Scrapling là framework web scraping / crawl adaptive: từ một request tới spider full-scale. | [scrapling.md](technologies/mcp-ai-agents/scrapling.md) |
| **Semble** | MCP & AI Agents | `mcp` `cli` `coding-agent` `rag` `self-host` | Semble là thư viện code search dành cho coding agents: hỏi NL ( "How is authentication handled?" ) → trả snippet đúng chỗ, clai… | [semble.md](technologies/mcp-ai-agents/semble.md) |
| **SurfSense** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `api` `workflow` | SurfSense là NotebookLM for Competitive Intelligence : nền tảng OSS cho AI agents theo dõi thị trường với live connectors (Redd… | [surfsense.md](technologies/mcp-ai-agents/surfsense.md) |
| **Tabularis** | DevTools | `mcp` `desktop` `self-host` `cli` `agent` | Tabularis là client SQL desktop OSS (PostgreSQL, MySQL/MariaDB, SQLite + plugins DuckDB, ClickHouse, Redis, Firestore…). | [tabularis.md](technologies/devtools/tabularis.md) |
| **TREK** | DevTools | `mcp` `self-host` `notification` `gis` | TREK là travel / trip planner self-host : kế hoạch ngày, bản đồ tương tác, ngân sách, packing list, journal, collab realtime (W… | [trek.md](technologies/devtools/trek.md) |
| **Vibe Kanban** | MCP & AI Agents | `coding-agent` `agent` `cli` `self-host` `workflow` `mcp` | Vibe Kanban là kanban + workspace để lấy 10X từ coding agents : plan issues trên board → spawn workspace để agent chạy. | [vibe-kanban.md](technologies/mcp-ai-agents/vibe-kanban.md) |
| **Vibe-Trading** | MCP & AI Agents | `agent` `mcp` `skill` `cli` `self-host` `workflow` | Vibe-Trading — personal trading agent OSS: NL research → market data → strategy codegen → backtest → report/export (+ Alpha Zoo… | [vibe-trading.md](technologies/mcp-ai-agents/vibe-trading.md) |
| **Voicebox** | Speech & Audio | `stt` `tts` `voice-clone` `desktop` `self-host` `mcp` | Voicebox là studio giọng local-first (OSS thay ElevenLabs + WisprFlow): clone voice, TTS 7 engines / 23 ngôn ngữ, dictation hot… | [voicebox.md](technologies/speech-audio/voicebox.md) |
| **WeKnora** | MCP & AI Agents | `rag` `mcp` `agent` `self-host` `cli` `skill` | WeKnora (Tencent) là framework self-host tri thức LLM enterprise: RAG Q&A , ReAct Agent (orchestration retrieval + MCP + web se… | [weknora.md](technologies/mcp-ai-agents/weknora.md) |
| **XiaoZhi AI (ESP32 Voice Assistant)** | Speech & Audio | `stt` `tts` `edge` `iot` `mcp` | XiaoZhi (小智) là firmware open-source biến ESP32-S3 / C3 / P4 thành trợ lý AI giọng nói realtime: wake word offline → streaming … | [xiaozhi-esp32.md](technologies/speech-audio/xiaozhi-esp32.md) |
| **Yuvomi** | DevTools | `self-host` `mcp` `api` `notification` | Yuvomi là family planner self-host / offline PWA : tasks, shopping, meals, calendar, budget, health, rewards… 16 modules, 23 la… | [yuvomi.md](technologies/devtools/yuvomi.md) |

---

<a id="06-skills"></a>
## Skill / prompt / guideline

> SKILL.md, prompt pack, tối ưu prompt, quy tắc viết code.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **Addy's Agent Skills** | MCP & AI Agents | `skill` `coding-agent` `prompt` | Addy's Agent Skills là pack 24 skill production-grade + 8 slash commands ( /spec → /ship ) cho AI coding agents (Claude Code, C… | [agent-skills.md](technologies/mcp-ai-agents/agent-skills.md) |
| **Agent Skill registries & websites** | Bookmarks | `skill` `coding-agent` `prompt` | Agent Skill registries là các website / marketplace để tìm và cài skill cho coding agent. | [skill-registries.md](technologies/bookmarks/skill-registries.md) |
| **agentmemory** | MCP & AI Agents | `agent` `coding-agent` `mcp` `self-host` `rag` `cli` | agentmemory là engine persistent memory local cho coding agents: tự capture (hooks), nén, hybrid search (BM25 + vector + graph)… | [agentmemory.md](technologies/mcp-ai-agents/agentmemory.md) |
| **AI Engineering Coach** | MCP & AI Agents | `coding-agent` `skill` `desktop` `cli` | AI Engineer Coach là extension VS Code đọc local AI session logs → dashboard hành vi agentic: practice scores, anti-patterns (4… | [ai-engineering-coach.md](technologies/mcp-ai-agents/ai-engineering-coach.md) |
| **AI Website Cloner Template** | Image & Video | `ui-to-code` `coding-agent` `skill` | Template tái sử dụng để reverse-engineer bất kỳ website thành codebase Next.js hiện đại bằng AI coding agent (khuyến nghị Claud… | [ai-website-cloner.md](technologies/image-video/ai-website-cloner.md) |
| **AI-auto-generate-video (Template Video)** | Image & Video | `video` `skill` `tts` `cli` `agent` | AI-auto-generate-video (AI Coding) là pipeline bài viết / URL → video Shorts 9:16 theo cách xác định ( deterministic ): - AI (C… | [ai-auto-generate-video.md](technologies/image-video/ai-auto-generate-video.md) |
| **AstrBot** | MCP & AI Agents | `agent` `mcp` `skill` `rag` `self-host` `api` | AstrBot — platform agent chatbot all-in-one gắn IM (QQ, Telegram, Discord, Feishu, DingTalk, WeCom, Slack, LINE…). | [astrbot.md](technologies/mcp-ai-agents/astrbot.md) |
| **Caveman** | MCP & AI Agents | `skill` `coding-agent` `prompt` `cli` `mcp` | Caveman là skill / plugin bắt coding agent trả lời ngắn (kiểu “người hang đá”), nhưng giữ nguyên code, lệnh shell và thông báo … | [caveman.md](technologies/mcp-ai-agents/caveman.md) |
| **CC Workflow Studio** | MCP & AI Agents | `coding-agent` `skill` `mcp` `cli` `workflow` | CC Workflow Studio là công cụ thiết kế workflow agent trên canvas (React Flow), export sang format agent đã hiểu ( .claude/ , .… | [cc-wf-studio.md](technologies/mcp-ai-agents/cc-wf-studio.md) |
| **CodeWhale** | MCP & AI Agents | `coding-agent` `cli` `agent` `self-host` `mcp` `skill` | CodeWhale là coding agent chạy trên máy bạn trong terminal: đưa provider + model + task → đọc code, sửa file, chạy lệnh, kiểm t… | [codewhale.md](technologies/mcp-ai-agents/codewhale.md) |
| **DeerFlow** | MCP & AI Agents | `agent` `skill` `coding-agent` `self-host` `workflow` `mcp` | DeerFlow ( Deep Exploration and Efficient Research Flow ) — OSS super agent harness (ByteDance): research · code · create trên … | [deer-flow.md](technologies/mcp-ai-agents/deer-flow.md) |
| **docmd** | DevTools | `mcp` `skill` `cli` `self-host` `api` `rag` | docmd là static site generator tài liệu từ Markdown: nhanh, không React/bloat. | [docmd.md](technologies/devtools/docmd.md) |
| **drawio-skill** | MCP & AI Agents | `skill` `diagram` `cli` | drawio-skill là Agent Skill biến mô tả ngôn ngữ tự nhiên (và codebase / infra / ảnh) thành file .drawio + export PNG/SVG/PDF/JP… | [drawio-skill.md](technologies/mcp-ai-agents/drawio-skill.md) |
| **Easy-Vibe** | MCP & AI Agents | `coding-agent` `skill` `prompt` `workflow` | Easy-Vibe (Datawhale) là khóa học vibe coding từ số 0: ý tưởng → prototype → full-stack → deploy/payment. | [easy-vibe.md](technologies/mcp-ai-agents/easy-vibe.md) |
| **GitReverse** | MCP & AI Agents | `coding-agent` `prompt` `self-host` | GitReverse — “reverse engineer” public GitHub repo thành một user prompt tổng hợp (kiểu paste vào Cursor / Claude Code / Codex … | [gitreverse.md](technologies/mcp-ai-agents/gitreverse.md) |
| **Google Workspace CLI** | DevTools | `cli` `workspace` `skill` `office` | Google Workspace CLI ( gws hoặc tên binary theo repo) là một công cụ dòng lệnh cho toàn bộ Google Workspace: Drive, Gmail, Cale… | [google-workspace-cli.md](technologies/devtools/google-workspace-cli.md) |
| **Graphify** | MCP & AI Agents | `skill` `coding-agent` `rag` `cli` `agent` | Graphify là skill / CLI cho coding agent: map cả folder (code, SQL schema, docs, PDF, ảnh, video…) thành knowledge graph tra cứ… | [graphify.md](technologies/mcp-ai-agents/graphify.md) |
| **Hermes Agent** | MCP & AI Agents | `agent` `mcp` `skill` `cli` `self-host` | Hermes Agent (Nous Research) là self-improving AI agent với vòng học khép kín: tạo/cải thiện skills từ trải nghiệm, nhớ người d… | [hermes-agent.md](technologies/mcp-ai-agents/hermes-agent.md) |
| **HTML Anything** | Image & Video | `skill` `coding-agent` `agent` `video` `self-host` | HTML Anything là agentic HTML editor local-first: AI coding CLI (Claude/Cursor/Codex/Gemini/Copilot/OpenCode/Qwen/Aider) viết s… | [html-anything.md](technologies/image-video/html-anything.md) |
| **Huashu Design** | Image & Video | `skill` `coding-agent` `agent` `video` | Huashu Design ( 花叔设计 ) là agent skill HTML-native: một câu prompt → prototype App/Web (click được), slide HTML + PPTX chỉnh sửa… | [huashu-design.md](technologies/image-video/huashu-design.md) |
| **Karpathy Guidelines** | MCP & AI Agents | `skill` `coding-agent` `prompt` | andrej-karpathy-skills (Karpathy Guidelines) là một file quy tắc ( CLAUDE.md + skill / Cursor rule) chỉnh hành vi coding agent:… | [karpathy-skills.md](technologies/mcp-ai-agents/karpathy-skills.md) |
| **Knowledge Work Plugins (Anthropic)** | MCP & AI Agents | `skill` `prompt` `workspace` `office` | knowledge-work-plugins là open-source plugins Anthropic biến Claude thành chuyên gia theo role : mỗi plugin đóng gói skills, co… | [knowledge-work-plugins.md](technologies/mcp-ai-agents/knowledge-work-plugins.md) |
| **LangBot** | MCP & AI Agents | `agent` `mcp` `skill` `rag` `self-host` `api` | LangBot — platform production-grade xây bot AI trên IM : Discord · Telegram · Slack · LINE · QQ · WeChat/WeCom · Feishu · DingT… | [langbot.md](technologies/mcp-ai-agents/langbot.md) |
| **Learn Claude Code** | MCP & AI Agents | `coding-agent` `agent` `skill` `cli` `prompt` | Learn Claude Code ( Bash is all you need ) là khóa học + code nano harness kiểu Claude Code: dạy harness engineering — tools, k… | [learn-claude-code.md](technologies/mcp-ai-agents/learn-claude-code.md) |
| **llmfit** | DevTools | `cli` `desktop` `self-host` `skill` | llmfit — CLI/TUI (và desktop) right-size model LLM theo RAM/CPU/GPU: detect phần cứng, score Quality/Speed/Fit/Context, gợi ý m… | [llmfit.md](technologies/devtools/llmfit.md) |
| **Maths, CS & AI Compendium** | MCP & AI Agents | `prompt` `mcp` `skill` `rag` `cli` | Maths, CS & AI Compendium là sách giáo khoa mở (intuition-first): toán → ML → NLP/CV/speech/multimodal → hệ thống / GPU / infer… | [maths-cs-ai-compendium.md](technologies/mcp-ai-agents/maths-cs-ai-compendium.md) |
| **Matt Pocock Skills** | MCP & AI Agents | `skill` `coding-agent` `prompt` | mattpocock/skills — bộ Agent Skills từ .claude của Matt Pocock (Total TypeScript / AI Hero): nhỏ, composable, giữ quyền kiểm so… | [mattpocock-skills.md](technologies/mcp-ai-agents/mattpocock-skills.md) |
| **Midscene.js** | UI Automation | `ui-automation` `computer-use` `browser` `skill` | Midscene.js là framework UI automation / testing dựa trên vision ( vision-based automation ): mô tả bước bằng ngôn ngữ tự nhiên… | [midscene.md](technologies/ui-automation/midscene.md) |
| **MiniCPM** | DevTools | `self-host` `cli` `edge` `desktop` `skill` | MiniCPM (OpenBMB / Tsinghua) là dòng LLM nhỏ, mạnh trên edge/on-device. | [minicpm.md](technologies/devtools/minicpm.md) |
| **Models.dev** | DevTools | `api` `dataset` `skill` | Models.dev là database mở về thông số model AI: tên, context limit, modality, reasoning/tool-call, giá theo provider, benchmark… | [models-dev.md](technologies/devtools/models-dev.md) |
| **MoneyPrinterTurbo** | Image & Video | `video` `tts` `cli` `self-host` `api` `skill` | MoneyPrinterTurbo là pipeline một click short video : LLM viết kịch bản, lấy素材, TTS (Edge/Azure/ElevenLabs/Gemini/Chatterbox…),… | [moneyprinterturbo.md](technologies/image-video/moneyprinterturbo.md) |
| **Nezha (哪吒)** | MCP & AI Agents | `coding-agent` `agent` `desktop` `workflow` `cli` `skill` | Nezha (哪吒) là IDE nhẹ agent-first (cross-platform, ~7MB): một app quản lý nhiều project × nhiều session Claude Code / Codex , t… | [nezha.md](technologies/mcp-ai-agents/nezha.md) |
| **OfficeCLI** | DevTools | `cli` `office` `skill` `coding-agent` `workspace` | OfficeCLI là suite đọc / sửa / tạo file Word (.docx), Excel (.xlsx), PowerPoint (.pptx) qua CLI — không cần cài Microsoft Office. | [officecli.md](technologies/devtools/officecli.md) |
| **OpenHuman** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `desktop` `workflow` | OpenHuman là personal AI super intelligence local-first gồm ba phần: (1) brain — memory tree / Obsidian-style wiki từ email·cal… | [openhuman.md](technologies/mcp-ai-agents/openhuman.md) |
| **OpenMontage** | Image & Video | `video` `agent` `skill` `coding-agent` `workflow` `cli` | OpenMontage là hệ thống agentic video production open-source: biến coding assistant (Claude Code, Cursor, Copilot, Windsurf, Co… | [openmontage.md](technologies/image-video/openmontage.md) |
| **OpenSpace** | MCP & AI Agents | `skill` `agent` `mcp` `cli` `self-host` `coding-agent` | OpenSpace — quality-first skill hub cho AI agents: self-evolve skill (auto-fix / improve / learn từ task thật), share skill clo… | [openspace.md](technologies/mcp-ai-agents/openspace.md) |
| **Paseo** | MCP & AI Agents | `coding-agent` `agent` `desktop` `cli` `skill` `self-host` | Paseo là một interface điều phối nhiều coding agent trên máy bạn: Claude Code · Codex · Copilot · OpenCode · Pi — desktop, iOS/… | [paseo.md](technologies/mcp-ai-agents/paseo.md) |
| **PixelRAG** | MCP & AI Agents | `rag` `cli` `skill` `api` | PixelRAG (Berkeley SkyLab / BAIR) — Web Screenshots Beat Text for RAG : render docs/web/PDF thành screenshot tiles , embed bằng… | [pixelrag.md](technologies/mcp-ai-agents/pixelrag.md) |
| **Ponytail** | MCP & AI Agents | `skill` `coding-agent` `prompt` | Ponytail là skill/plugin làm AI coding agent “nghĩ như senior lười nhưng đúng”: YAGNI ladder trước khi viết code — tái dùng std… | [ponytail.md](technologies/mcp-ai-agents/ponytail.md) |
| **PPT Master** | MCP & AI Agents | `skill` `office` `cli` `coding-agent` `workflow` | PPT Master là workflow / Agent Skill chạy trong AI IDE (Claude Code, Cursor, Copilot…): đưa PDF / DOCX / web / text → sinh file… | [ppt-master.md](technologies/mcp-ai-agents/ppt-master.md) |
| **Prompt Optimizer** | MCP & AI Agents | `prompt` `mcp` `self-host` `desktop` `browser` `image-gen` | Prompt Optimizer — tool tối ưu / test / evaluate prompt bằng LLM: one-click + iterative rewrite; system vs user prompt; analysi… | [prompt-optimizer.md](technologies/mcp-ai-agents/prompt-optimizer.md) |
| **prompts.chat** | MCP & AI Agents | `prompt` `mcp` `cli` `self-host` | prompts.chat là thư viện prompt open-source lớn cho AI chat (ChatGPT, Claude, Gemini, Llama, Mistral…). | [prompts-chat.md](technologies/mcp-ai-agents/prompts-chat.md) |
| **Spec Kit** | MCP & AI Agents | `coding-agent` `skill` `cli` `workflow` `prompt` | Spec Kit là toolkit OSS của GitHub cho Spec-Driven Development (SDD) : spec executable thay vì vibe-code từ đầu. | [spec-kit.md](technologies/mcp-ai-agents/spec-kit.md) |
| **Stop Slop** | MCP & AI Agents | `skill` `coding-agent` `prompt` | Stop Slop là Agent Skill dạy LLM (Claude, Cursor, …) nhận và xóa lối viết AI điển hình: câu mở họng, jargon, nhịp máy, cấu trúc… | [stop-slop.md](technologies/mcp-ai-agents/stop-slop.md) |
| **Taste Skill** | MCP & AI Agents | `skill` `coding-agent` `prompt` `image-gen` | Taste Skill là bộ Agent Skills portable (Claude Code, Cursor, Codex, ChatGPT…) chống UI AI "generic slop": layout, typography, … | [taste-skill.md](technologies/mcp-ai-agents/taste-skill.md) |
| **Toonflow** | Image & Video | `video` `image-gen` `desktop` `self-host` `agent` `skill` | Toonflow là desktop all-in-one short drama factory : tiểu thuyết/kịch bản → ScriptAgent (adaptation) → ProductionAgent (storybo… | [toonflow.md](technologies/image-video/toonflow.md) |
| **Understand Anything** | MCP & AI Agents | `skill` `coding-agent` `rag` `cli` `agent` | Understand Anything là plugin/skill biến codebase / docs / Karpathy-style LLM wiki thành interactive knowledge graph : explore,… | [understand-anything.md](technologies/mcp-ai-agents/understand-anything.md) |
| **Vibe-Trading** | MCP & AI Agents | `agent` `mcp` `skill` `cli` `self-host` `workflow` | Vibe-Trading — personal trading agent OSS: NL research → market data → strategy codegen → backtest → report/export (+ Alpha Zoo… | [vibe-trading.md](technologies/mcp-ai-agents/vibe-trading.md) |
| **WeKnora** | MCP & AI Agents | `rag` `mcp` `agent` `self-host` `cli` `skill` | WeKnora (Tencent) là framework self-host tri thức LLM enterprise: RAG Q&A , ReAct Agent (orchestration retrieval + MCP + web se… | [weknora.md](technologies/mcp-ai-agents/weknora.md) |
| **Zerolang** | MCP & AI Agents | `coding-agent` `agent` `cli` `skill` | Zerolang ( The programming language for agents ) là ngôn ngữ experimental graph-native : program database = semantic graph ( ze… | [zerolang.md](technologies/mcp-ai-agents/zerolang.md) |

---

<a id="07-memory"></a>
## Memory dài hạn cho agent

> Layer nhớ context giữa các phiên làm việc.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **agentmemory** | MCP & AI Agents | `agent` `coding-agent` `mcp` `self-host` `rag` `cli` | agentmemory là engine persistent memory local cho coding agents: tự capture (hooks), nén, hybrid search (BM25 + vector + graph)… | [agentmemory.md](technologies/mcp-ai-agents/agentmemory.md) |
| **Claude-Mem** | MCP & AI Agents | `agent` `coding-agent` `mcp` `self-host` `rag` | Claude-Mem — hệ persistent memory compression : capture tool usage trong session → nén/tóm tắt bằng AI → inject context liên qu… | [claude-mem.md](technologies/mcp-ai-agents/claude-mem.md) |
| **TencentDB Agent Memory** | MCP & AI Agents | `agent` `self-host` `coding-agent` | TencentDB Agent Memory là long-term memory fully local cho AI agents (zero external API bắt buộc): pipeline 4 tầng progressive … | [tencentdb-agent-memory.md](technologies/mcp-ai-agents/tencentdb-agent-memory.md) |

---

<a id="08-guardrail"></a>
## An toàn lệnh & governance

> Chặn lệnh phá hủy, policy cho agent.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **Agent Governance Toolkit (AGT)** | MCP & AI Agents | `guardrail` `security` `agent` `cli` `mcp` | Agent Governance Toolkit (AGT) là bộ công cụ mã nguồn mở của Microsoft để ship agent production : áp dụng policy ( policy enfor… | [agent-governance-toolkit.md](technologies/mcp-ai-agents/agent-governance-toolkit.md) |
| **Destructive Command Guard (dcg)** | MCP & AI Agents | `guardrail` `cli` | Destructive Command Guard (dcg) chặn các lệnh git và shell nguy hiểm trước khi AI agent thực thi — lớp bảo vệ khi agent có quyề… | [destructive-command-guard.md](technologies/mcp-ai-agents/destructive-command-guard.md) |

---

<a id="09-stt"></a>
## Nhận dạng giọng nói (STT)

> Audio → text, họp, phụ đề.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **CapCut TTS/STT API** | Speech & Audio | `stt` `tts` `cli` `api` | capcut-tts-api là CLI Python thuần gọi CapCut common task API: TTS , STT/subtitle , upload audio/video lên VOD, poll kết quả. | [capcut-tts-api.md](technologies/speech-audio/capcut-tts-api.md) |
| **faster-whisper** | Speech & Audio | `stt` `cli` | faster-whisper là implementation Whisper (OpenAI) dùng CTranslate2 — transcription speech-to-text ( STT ) nhanh hơn bản gốc, ít… | [faster-whisper.md](technologies/speech-audio/faster-whisper.md) |
| **FreeCut** | Image & Video | `video` `self-host` `stt` `tts` | FreeCut là trình chỉnh sửa video chạy hoàn toàn trên trình duyệt ( browser NLE ): timeline đa track, keyframe, hiệu ứng WebGPU,… | [freecut.md](technologies/image-video/freecut.md) |
| **FunASR** | Speech & Audio | `stt` `cli` `api` `self-host` `mcp` | FunASR (ModelScope / Alibaba DAMO) là toolkit ASR công nghiệp ( industrial ASR ): tới ~340× realtime (Fun-ASR-Nano + vLLM), 50+… | [funasr.md](technologies/speech-audio/funasr.md) |
| **Khoj** | MCP & AI Agents | `rag` `agent` `self-host` `desktop` `stt` | Khoj là AI second brain self-hostable: chat local/online LLM, answers từ web + docs (PDF, Markdown, Notion, Word, org-mode…), c… | [khoj.md](technologies/mcp-ai-agents/khoj.md) |
| **LocalAI** | DevTools | `api` `self-host` `mcp` `agent` `stt` `tts` | LocalAI là engine AI mã nguồn mở: chạy LLM, nhìn ảnh ( vision ), giọng nói, tạo ảnh / video trên phần cứng của bạn (CPU cũng đư… | [localai.md](technologies/devtools/localai.md) |
| **MicYou** | Speech & Audio | `stt` `desktop` `edge` | MicYou biến điện thoại Android thành micro cho máy tính : stream âm thanh qua Wi‑Fi hoặc USB (ADB/AOA). | [micyou.md](technologies/speech-audio/micyou.md) |
| **OmniVoice Studio** | Speech & Audio | `stt` `tts` `voice-clone` `desktop` `self-host` | OmniVoice Studio là desktop app mã nguồn mở — thay thế ElevenLabs chạy local. | [omnivoice-studio.md](technologies/speech-audio/omnivoice-studio.md) |
| **pyVideoTrans** | Image & Video | `video` `stt` `tts` `voice-clone` `desktop` `self-host` | pyVideoTrans là tool OSS dịch video end-to-end: ASR → dịch phụ đề → TTS/dubbing multi-role → ghép A/V. | [pyvideotrans.md](technologies/image-video/pyvideotrans.md) |
| **sherpa-onnx** | Speech & Audio | `stt` `tts` `edge` `self-host` `cli` `api` | sherpa-onnx là speech stack offline (next-gen Kaldi + ONNX Runtime): STT , TTS , speaker diarization, enhancement, source separ… | [sherpa-onnx.md](technologies/speech-audio/sherpa-onnx.md) |
| **VideoCaptioner (CLI-Anything harness)** | CLI-Anything | `harness` `stt` `video` | Harness VideoCaptioner — phụ đề / caption video bằng AI qua CLI: agent pipeline video → subtitle thay vì UI desktop. | [videocaptioner.md](technologies/cli-anything/videocaptioner.md) |
| **Voice-Pro** | Speech & Audio | `stt` `tts` `voice-clone` `self-host` `desktop` `video` | Voice-Pro là Gradio WebUI all-in-one cho creator: download YouTube, tách vocal (Demucs), STT (faster-whisper…), dịch đa ngữ, TT… | [voice-pro.md](technologies/speech-audio/voice-pro.md) |
| **Voicebox** | Speech & Audio | `stt` `tts` `voice-clone` `desktop` `self-host` `mcp` | Voicebox là studio giọng local-first (OSS thay ElevenLabs + WisprFlow): clone voice, TTS 7 engines / 23 ngôn ngữ, dictation hot… | [voicebox.md](technologies/speech-audio/voicebox.md) |
| **XiaoZhi AI (ESP32 Voice Assistant)** | Speech & Audio | `stt` `tts` `edge` `iot` `mcp` | XiaoZhi (小智) là firmware open-source biến ESP32-S3 / C3 / P4 thành trợ lý AI giọng nói realtime: wake word offline → streaming … | [xiaozhi-esp32.md](technologies/speech-audio/xiaozhi-esp32.md) |

---

<a id="10-tts"></a>
## Tổng hợp tiếng nói / clone giọng (TTS)

> Text → audio, voice clone, audiobook.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **AI-auto-generate-video (Template Video)** | Image & Video | `video` `skill` `tts` `cli` `agent` | AI-auto-generate-video (AI Coding) là pipeline bài viết / URL → video Shorts 9:16 theo cách xác định ( deterministic ): - AI (C… | [ai-auto-generate-video.md](technologies/image-video/ai-auto-generate-video.md) |
| **AudioBook KJ** | Speech & Audio | `tts` `voice-clone` `desktop` `self-host` `video` | AudioBook KJ là studio thử nghiệm audiobook + video : import/cleanup script → TTS local (Torch / Hugging Face / OmniVoice ) → t… | [audiobook-kj.md](technologies/speech-audio/audiobook-kj.md) |
| **Cake** | DevTools | `api` `self-host` `cli` `tts` `image-gen` `edge` | Cake là máy chủ chạy mô hình AI viết bằng Rust ( inference server ). | [cake.md](technologies/devtools/cake.md) |
| **CapCut TTS/STT API** | Speech & Audio | `stt` `tts` `cli` `api` | capcut-tts-api là CLI Python thuần gọi CapCut common task API: TTS , STT/subtitle , upload audio/video lên VOD, poll kết quả. | [capcut-tts-api.md](technologies/speech-audio/capcut-tts-api.md) |
| **CosyVoice** | Speech & Audio | `tts` `voice-clone` `self-host` `api` `cli` | CosyVoice (FunAudioLLM / Alibaba Tongyi Fun-Audio) là TTS full-stack dựa LLM : inference, training, deploy. | [cosyvoice.md](technologies/speech-audio/cosyvoice.md) |
| **FreeCut** | Image & Video | `video` `self-host` `stt` `tts` | FreeCut là trình chỉnh sửa video chạy hoàn toàn trên trình duyệt ( browser NLE ): timeline đa track, keyframe, hiệu ứng WebGPU,… | [freecut.md](technologies/image-video/freecut.md) |
| **KhanhTTS-OmniVoice** | Speech & Audio | `tts` `voice-clone` `self-host` `cli` | KhanhTTS là model Text-to-Speech (TTS) fine-tune trên OmniVoice (~0.6B), chuyên tiếng Việt + tiếng Anh và voice cloning từ refe… | [khanhtts-omnivoice.md](technologies/speech-audio/khanhtts-omnivoice.md) |
| **LocalAI** | DevTools | `api` `self-host` `mcp` `agent` `stt` `tts` | LocalAI là engine AI mã nguồn mở: chạy LLM, nhìn ảnh ( vision ), giọng nói, tạo ảnh / video trên phần cứng của bạn (CPU cũng đư… | [localai.md](technologies/devtools/localai.md) |
| **LuxTTS** | Speech & Audio | `tts` `voice-clone` `self-host` `cli` | LuxTTS — TTS voice clone nhẹ dựa ZipVoice (distill ~4 steps + sampling cải tiến), vocoder 48 kHz (không 24 kHz mặc định ZipVoice). | [luxtts.md](technologies/speech-audio/luxtts.md) |
| **MoneyPrinterTurbo** | Image & Video | `video` `tts` `cli` `self-host` `api` `skill` | MoneyPrinterTurbo là pipeline một click short video : LLM viết kịch bản, lấy素材, TTS (Edge/Azure/ElevenLabs/Gemini/Chatterbox…),… | [moneyprinterturbo.md](technologies/image-video/moneyprinterturbo.md) |
| **MOSS-TTS** | Speech & Audio | `tts` `voice-clone` `self-host` `api` `cli` | MOSS-TTS Family là họ model speech + sound generation : long-form ổn định, multi-speaker dialogue, voice/character design, envi… | [moss-tts.md](technologies/speech-audio/moss-tts.md) |
| **OmniVoice Studio** | Speech & Audio | `stt` `tts` `voice-clone` `desktop` `self-host` | OmniVoice Studio là desktop app mã nguồn mở — thay thế ElevenLabs chạy local. | [omnivoice-studio.md](technologies/speech-audio/omnivoice-studio.md) |
| **Open Notebook** | MCP & AI Agents | `rag` `self-host` `api` `tts` | Open Notebook là thay thế mã nguồn mở cho Google Notebook LM : 100% local / self-host. | [open-notebook.md](technologies/mcp-ai-agents/open-notebook.md) |
| **OpenMontage** | Image & Video | `video` `agent` `skill` `coding-agent` `workflow` `cli` | OpenMontage là hệ thống agentic video production open-source: biến coding assistant (Claude Code, Cursor, Copilot, Windsurf, Co… | [openmontage.md](technologies/image-video/openmontage.md) |
| **Pixelle-Video** | Image & Video | `video` `tts` `image-gen` `self-host` `workflow` `api` | Pixelle-Video — engine AI short video full-auto : nhập chủ đề → viết script → AI ảnh/video → TTS (+ BGM) → ghép clip (dọc/ngang). | [pixelle-video.md](technologies/image-video/pixelle-video.md) |
| **pyVideoTrans** | Image & Video | `video` `stt` `tts` `voice-clone` `desktop` `self-host` | pyVideoTrans là tool OSS dịch video end-to-end: ASR → dịch phụ đề → TTS/dubbing multi-role → ghép A/V. | [pyvideotrans.md](technologies/image-video/pyvideotrans.md) |
| **sherpa-onnx** | Speech & Audio | `stt` `tts` `edge` `self-host` `cli` `api` | sherpa-onnx là speech stack offline (next-gen Kaldi + ONNX Runtime): STT , TTS , speaker diarization, enhancement, source separ… | [sherpa-onnx.md](technologies/speech-audio/sherpa-onnx.md) |
| **SoulX-Singer** | Speech & Audio | `tts` `voice-clone` `self-host` `cli` | SoulX-Singer là model zero-shot singing voice synthesis (SVS) : clone timbre ca sĩ chưa thấy từ prompt, điều khiển bằng F0 melo… | [soulx-singer.md](technologies/speech-audio/soulx-singer.md) |
| **Supertonic** | Speech & Audio | `tts` `voice-clone` `self-host` `cli` `api` `edge` | Supertonic (Supertone) là công cụ đọc chữ thành tiếng ( TTS ) chạy trên máy bạn ( on-device ), không cần cloud. | [supertonic.md](technologies/speech-audio/supertonic.md) |
| **VibeVoice** | Speech & Audio | `tts` `voice-clone` `self-host` | VibeVoice (Microsoft) là TTS long-form multi-speaker (podcast / hội thoại): tới ~90 phút , 4 speakers , continuous speech token… | [vibevoice.md](technologies/speech-audio/vibevoice.md) |
| **VieNeu-TTS** | Speech & Audio | `tts` `voice-clone` `self-host` `api` `desktop` | VieNeu-TTS là TTS tiếng Việt on-device : instant voice cloning (3–5s), bilingual En↔Vi (sea-g2p), podcast/conversation multi-sp… | [vieneu-tts.md](technologies/speech-audio/vieneu-tts.md) |
| **vLLM-Omni** | DevTools | `api` `self-host` `cli` `tts` `image-gen` `video` | vLLM-Omni mở rộng vLLM từ LLM text AR sang phục vụ model omni-modality : text, ảnh, audio, video, action — kèm Diffusion (DiT) … | [vllm-omni.md](technologies/devtools/vllm-omni.md) |
| **Voice-Pro** | Speech & Audio | `stt` `tts` `voice-clone` `self-host` `desktop` `video` | Voice-Pro là Gradio WebUI all-in-one cho creator: download YouTube, tách vocal (Demucs), STT (faster-whisper…), dịch đa ngữ, TT… | [voice-pro.md](technologies/speech-audio/voice-pro.md) |
| **Voicebox** | Speech & Audio | `stt` `tts` `voice-clone` `desktop` `self-host` `mcp` | Voicebox là studio giọng local-first (OSS thay ElevenLabs + WisprFlow): clone voice, TTS 7 engines / 23 ngôn ngữ, dictation hot… | [voicebox.md](technologies/speech-audio/voicebox.md) |
| **VoxCPM** | Speech & Audio | `tts` `voice-clone` | VoxCPM (VoxCPM2) là mô hình Text-to-Speech (TTS) tokenizer-free của OpenBMB (Tsinghua) — cùng hệ sinh thái với MiniCPM. | [voxcpm.md](technologies/speech-audio/voxcpm.md) |
| **XiaoZhi AI (ESP32 Voice Assistant)** | Speech & Audio | `stt` `tts` `edge` `iot` `mcp` | XiaoZhi (小智) là firmware open-source biến ESP32-S3 / C3 / P4 thành trợ lý AI giọng nói realtime: wake word offline → streaming … | [xiaozhi-esp32.md](technologies/speech-audio/xiaozhi-esp32.md) |

---

<a id="11-image-video-gen"></a>
## Sinh ảnh & video bằng AI

> ComfyUI/studio gen, face/animate, short-form pipeline.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **AI-auto-generate-video (Template Video)** | Image & Video | `video` `skill` `tts` `cli` `agent` | AI-auto-generate-video (AI Coding) là pipeline bài viết / URL → video Shorts 9:16 theo cách xác định ( deterministic ): - AI (C… | [ai-auto-generate-video.md](technologies/image-video/ai-auto-generate-video.md) |
| **ComfyUI** | Image & Video | `image-gen` `video` `self-host` | ComfyUI là GUI/API modular cho diffusion models (Stable Diffusion, SDXL, Flux, SANA, video models…). | [comfyui.md](technologies/image-video/comfyui.md) |
| **Deep-Live-Cam** | Image & Video | `video` `image-gen` `desktop` `self-host` `cv` `cli` | Deep-Live-Cam — face swap realtime (webcam/live) + one-click video deepfake từ một ảnh nguồn. | [deep-live-cam.md](technologies/image-video/deep-live-cam.md) |
| **FreeCut** | Image & Video | `video` `self-host` `stt` `tts` | FreeCut là trình chỉnh sửa video chạy hoàn toàn trên trình duyệt ( browser NLE ): timeline đa track, keyframe, hiệu ứng WebGPU,… | [freecut.md](technologies/image-video/freecut.md) |
| **HTML Anything** | Image & Video | `skill` `coding-agent` `agent` `video` `self-host` | HTML Anything là agentic HTML editor local-first: AI coding CLI (Claude/Cursor/Codex/Gemini/Copilot/OpenCode/Qwen/Aider) viết s… | [html-anything.md](technologies/image-video/html-anything.md) |
| **Huashu Design** | Image & Video | `skill` `coding-agent` `agent` `video` | Huashu Design ( 花叔设计 ) là agent skill HTML-native: một câu prompt → prototype App/Web (click được), slide HTML + PPTX chỉnh sửa… | [huashu-design.md](technologies/image-video/huashu-design.md) |
| **HyperFrames** | Image & Video | `video` `cli` `agent` | HyperFrames (HeyGen) — "Write HTML. | [hyperframes.md](technologies/image-video/hyperframes.md) |
| **LivePortrait** | Image & Video | `video` `image-gen` `self-host` `cv` `cli` | LivePortrait — portrait animation hiệu quả: ảnh (hoặc video) nguồn + driving video/ảnh → animate khuôn mặt (expression, pose; s… | [liveportrait.md](technologies/image-video/liveportrait.md) |
| **MagicMirror** | Image & Video | `image-gen` `desktop` `self-host` `cv` | MagicMirror là app desktop AI face swap một click: kéo-thả ảnh đổi mặt/kiểu tóc/trang phục. | [magicmirror.md](technologies/image-video/magicmirror.md) |
| **MoneyPrinterTurbo** | Image & Video | `video` `tts` `cli` `self-host` `api` `skill` | MoneyPrinterTurbo là pipeline một click short video : LLM viết kịch bản, lấy素材, TTS (Edge/Azure/ElevenLabs/Gemini/Chatterbox…),… | [moneyprinterturbo.md](technologies/image-video/moneyprinterturbo.md) |
| **Open Generative AI** | Image & Video | `image-gen` `video` `desktop` `self-host` `api` | Open Generative AI (trước đây Open Higgsfield AI ) là studio OSS UI kiểu Higgsfield: Image · Video · Lip Sync · Cinema (+ workf… | [open-generative-ai.md](technologies/image-video/open-generative-ai.md) |
| **OpenMontage** | Image & Video | `video` `agent` `skill` `coding-agent` `workflow` `cli` | OpenMontage là hệ thống agentic video production open-source: biến coding assistant (Claude Code, Cursor, Copilot, Windsurf, Co… | [openmontage.md](technologies/image-video/openmontage.md) |
| **Pixelle-Video** | Image & Video | `video` `tts` `image-gen` `self-host` `workflow` `api` | Pixelle-Video — engine AI short video full-auto : nhập chủ đề → viết script → AI ảnh/video → TTS (+ BGM) → ghép clip (dọc/ngang). | [pixelle-video.md](technologies/image-video/pixelle-video.md) |
| **pyVideoTrans** | Image & Video | `video` `stt` `tts` `voice-clone` `desktop` `self-host` | pyVideoTrans là tool OSS dịch video end-to-end: ASR → dịch phụ đề → TTS/dubbing multi-role → ghép A/V. | [pyvideotrans.md](technologies/image-video/pyvideotrans.md) |
| **SANA (NVlabs)** | Image & Video | `image-gen` `video` `self-host` `cli` `api` | SANA là family model diffusion hiệu năng cao (NVIDIA Labs + MIT HAN Lab): Linear Attention DiT + DC-AE (32× compress) → text-to… | [sana.md](technologies/image-video/sana.md) |
| **Toonflow** | Image & Video | `video` `image-gen` `desktop` `self-host` `agent` `skill` | Toonflow là desktop all-in-one short drama factory : tiểu thuyết/kịch bản → ScriptAgent (adaptation) → ProductionAgent (storybo… | [toonflow.md](technologies/image-video/toonflow.md) |

---

<a id="12-video-tools"></a>
## Sửa / tải / xem video (không gen)

> NLE, stabilize, yt-dlp, IPTV, trim.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **AI-auto-generate-video (Template Video)** | Image & Video | `video` `skill` `tts` `cli` `agent` | AI-auto-generate-video (AI Coding) là pipeline bài viết / URL → video Shorts 9:16 theo cách xác định ( deterministic ): - AI (C… | [ai-auto-generate-video.md](technologies/image-video/ai-auto-generate-video.md) |
| **ASCILINE** | Image & Video | `video` `cli` `self-host` `browser` | ASCILINE là engine render video → ASCII / pixel-grid realtime: server Python (OpenCV + NumPy + FastAPI) map pixel → khung chữ, … | [asciline.md](technologies/image-video/asciline.md) |
| **FreeCut** | Image & Video | `video` `self-host` `stt` `tts` | FreeCut là trình chỉnh sửa video chạy hoàn toàn trên trình duyệt ( browser NLE ): timeline đa track, keyframe, hiệu ứng WebGPU,… | [freecut.md](technologies/image-video/freecut.md) |
| **Gyroflow** | Image & Video | `video` `desktop` `self-host` | Gyroflow ổn định video bằng dữ liệu gyroscope (và accelerometer) ghi trong camera — GoPro, Sony, Insta360, DJI… hoặc log ngoài … | [gyroflow.md](technologies/image-video/gyroflow.md) |
| **HyperFrames** | Image & Video | `video` `cli` `agent` | HyperFrames (HeyGen) — "Write HTML. | [hyperframes.md](technologies/image-video/hyperframes.md) |
| **iptv-org/iptv** | Image & Video | `video` | iptv-org/iptv là collection liên kết stream IPTV công khai (M3U) toàn cầu. | [iptv-org.md](technologies/image-video/iptv-org.md) |
| **LibreTube** | Image & Video | `video` `desktop` `self-host` | LibreTube — frontend YouTube thay thế trên Android : giảm tracking Google, không ads trong app; subscriptions / playlist / hist… | [libretube.md](technologies/image-video/libretube.md) |
| **MoneyPrinterTurbo** | Image & Video | `video` `tts` `cli` `self-host` `api` `skill` | MoneyPrinterTurbo là pipeline một click short video : LLM viết kịch bản, lấy素材, TTS (Edge/Azure/ElevenLabs/Gemini/Chatterbox…),… | [moneyprinterturbo.md](technologies/image-video/moneyprinterturbo.md) |
| **OpenMontage** | Image & Video | `video` `agent` `skill` `coding-agent` `workflow` `cli` | OpenMontage là hệ thống agentic video production open-source: biến coding assistant (Claude Code, Cursor, Copilot, Windsurf, Co… | [openmontage.md](technologies/image-video/openmontage.md) |
| **OpenToonz** | Image & Video | `video` `desktop` `self-host` | OpenToonz là phần mềm animation 2D đầy đủ tính năng (open-source, DWANGO): dựa trên Toonz Studio Ghibli Version — Digital Video… | [opentoonz.md](technologies/image-video/opentoonz.md) |
| **pyVideoTrans** | Image & Video | `video` `stt` `tts` `voice-clone` `desktop` `self-host` | pyVideoTrans là tool OSS dịch video end-to-end: ASR → dịch phụ đề → TTS/dubbing multi-role → ghép A/V. | [pyvideotrans.md](technologies/image-video/pyvideotrans.md) |
| **Recordly** | Image & Video | `video` `desktop` `self-host` | Recordly là app desktop ghi màn hình + chỉnh demo (macOS / Windows / Linux): sau khi record nhảy thẳng vào editor — auto-zoom t… | [recordly.md](technologies/image-video/recordly.md) |
| **yt-dlp** | Image & Video | `video` `cli` `self-host` | yt-dlp là CLI tải audio/video đa site (YouTube và hàng nghìn domain khác): playlist, livestream, format chọn, cookies browser, … | [yt-dlp.md](technologies/image-video/yt-dlp.md) |

---

<a id="13-ui2code"></a>
## UI / web → code

> Screenshot hoặc URL thành frontend code.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **AI Website Cloner Template** | Image & Video | `ui-to-code` `coding-agent` `skill` | Template tái sử dụng để reverse-engineer bất kỳ website thành codebase Next.js hiện đại bằng AI coding agent (khuyến nghị Claud… | [ai-website-cloner.md](technologies/image-video/ai-website-cloner.md) |
| **HTML Anything** | Image & Video | `skill` `coding-agent` `agent` `video` `self-host` | HTML Anything là agentic HTML editor local-first: AI coding CLI (Claude/Cursor/Codex/Gemini/Copilot/OpenCode/Qwen/Aider) viết s… | [html-anything.md](technologies/image-video/html-anything.md) |
| **Huashu Design** | Image & Video | `skill` `coding-agent` `agent` `video` | Huashu Design ( 花叔设计 ) là agent skill HTML-native: một câu prompt → prototype App/Web (click được), slide HTML + PPTX chỉnh sửa… | [huashu-design.md](technologies/image-video/huashu-design.md) |
| **ScreenCoder** | Image & Video | `ui-to-code` | ScreenCoder chuyển screenshot giao diện UI thành HTML/CSS sạch, có thể chỉnh sửa. | [screencoder.md](technologies/image-video/screencoder.md) |

---

<a id="14-browser"></a>
## Tự động hóa trình duyệt (computer-use)

> NL→click, CDP, stealth Chromium, DOM capture, browser agent.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **Browser Use** | UI Automation | `ui-automation` `browser` `agent` `cli` `computer-use` | Browser Use — thư viện Python để AI agent điều khiển trình duyệt như người: mở trang, click, gõ, điền form, extract. | [browser-use.md](technologies/ui-automation/browser-use.md) |
| **changedetection.io** | DevTools | `notification` `self-host` `browser` `workflow` `api` | changedetection.io là công cụ self-host (hoặc SaaS) theo dõi thay đổi webpage : diff text/HTML/PDF/JSON, price/restock, visual … | [changedetection-io.md](technologies/devtools/changedetection-io.md) |
| **Chrome DevTools MCP** | UI Automation | `mcp` `browser` `ui-automation` `cli` `coding-agent` | chrome-devtools-mcp (Chrome DevTools / Google) là MCP server để coding agent (Cursor, Claude, Copilot, Antigravity…) điều khiển… | [chrome-devtools-mcp.md](technologies/ui-automation/chrome-devtools-mcp.md) |
| **ChronoFrame** | DevTools | `self-host` `desktop` `workspace` `browser` | ChronoFrame — gallery ảnh cá nhân self-host : quản lý album online, Live/Motion Photos, parse EXIF, reverse geocoding, bản đồ e… | [chronoframe.md](technologies/devtools/chronoframe.md) |
| **CloakBrowser** | UI Automation | `browser` `ui-automation` `api` `cli` `self-host` | CloakBrowser là Chromium anti-detect với fingerprint patch source-level C++ (không chỉ JS inject): canvas/WebGL/audio/fonts/Web… | [cloakbrowser.md](technologies/ui-automation/cloakbrowser.md) |
| **FileBrowser Quantum** | DevTools | `self-host` `desktop` `api` `workspace` `browser` | FileBrowser Quantum — fork hiện đại của File Browser: web file manager self-host trên filesystem (multi-source, include/exclude). | [filebrowser-quantum.md](technologies/devtools/filebrowser-quantum.md) |
| **Midscene.js** | UI Automation | `ui-automation` `computer-use` `browser` `skill` | Midscene.js là framework UI automation / testing dựa trên vision ( vision-based automation ): mô tả bước bằng ngôn ngữ tự nhiên… | [midscene.md](technologies/ui-automation/midscene.md) |
| **Page Agent** | UI Automation | `ui-automation` `browser` `dom` `mcp` `agent` | Page Agent (Alibaba) là GUI agent sống trong webpage : một script JS gắn vào trang → điều khiển UI bằng ngôn ngữ tự nhiên. | [page-agent.md](technologies/ui-automation/page-agent.md) |
| **Puppeteer** | UI Automation | `browser` `ui-automation` `api` `mcp` | Puppeteer là JavaScript/TypeScript API điều khiển Chrome / Firefox (headless hoặc headed) qua CDP. | [puppeteer.md](technologies/ui-automation/puppeteer.md) |
| **React Scan** | DevTools | `browser` `cli` `desktop` | React Scan tự phát hiện vấn đề performance React (render thừa): không cần sửa app nhiều — drop-in script / npx react-scan init … | [react-scan.md](technologies/devtools/react-scan.md) |
| **Slay the Spire II (CLI-Anything harness)** | CLI-Anything | `harness` `ui-automation` `game` `cli` | Harness game automation cho Slay the Spire II: agent chơi / thao tác game qua CLI (deck, combat). | [slay-the-spire-ii.md](technologies/cli-anything/slay-the-spire-ii.md) |
| **SnapDOM** | DevTools | `browser` `dom` | SnapDOM là DOM Capture Engine hiện đại: chụp subtree DOM (styles, pseudo-elements, fonts nhúng) rồi export SVG · PNG · JPG · We… | [snapdom.md](technologies/devtools/snapdom.md) |
| **Stagehand** | UI Automation | `ui-automation` `browser` `agent` | Stagehand (Browserbase) là SDK cho browser agents : framework automation trình duyệt kết hợp NL + code. | [stagehand.md](technologies/ui-automation/stagehand.md) |
| **Tab Harbor** | DevTools | `browser` `workspace` `desktop` | Tab Harbor biến New Tab Chrome thành bàn làm việc yên hơn: xem tab đang mở (gom theo domain + nhóm thủ công), quick links, save… | [tab-harbor.md](technologies/devtools/tab-harbor.md) |

---

<a id="15-cv"></a>
## Thị giác máy & edge/IoT

> Camera, nhận diện, robot, radar, map.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **ALPR (Automatic License Plate Recognition)** | CV & Edge | `cv` `edge` `self-host` | ALPR là hệ thống nhận dạng biển số xe ( license plate recognition ) portable, offline hoàn toàn. | [alpr.md](technologies/cv-edge/alpr.md) |
| **InsightFace** | CV & Edge | `cv` `self-host` `cli` | InsightFace là dự án 2D/3D face analysis SOTA: detection (RetinaFace), recognition (ArcFace), alignment, attribute (age…), pars… | [insightface.md](technologies/cv-edge/insightface.md) |
| **LingBot-Map** | CV & Edge | `cv` `self-host` `cli` `video` | LingBot-Map (Robbyant) là feed-forward 3D foundation model cho streaming 3D reconstruction : video / frame stream → pose + geom… | [lingbot-map.md](technologies/cv-edge/lingbot-map.md) |
| **LocateAnything-3B** | CV & Edge | `cv` `ocr` `self-host` `cli` | LocateAnything-3B (NVIDIA Eagle) là VLM grounding nhanh: referring expression, multi-object detection, GUI grounding, text loca… | [locate-anything.md](technologies/cv-edge/locate-anything.md) |
| **Optocam Zero** | CV & Edge | `cv` `edge` `iot` `self-host` | Optocam Zero là máy ảnh số bỏ túi DIY dựng trên Raspberry Pi Zero , linh kiện bán sẵn + vỏ in 3D. | [optocam-zero.md](technologies/cv-edge/optocam-zero.md) |
| **PLFM RADAR (AERIS-10)** | CV & Edge | `edge` `iot` `self-host` | AERIS-10 (repo PLFM RADAR ) là hệ radar mảng pha OSS giá thấp: pulse LFM, beam steering điện tử ±45°, FPGA (pulse compression, … | [plfm-radar.md](technologies/cv-edge/plfm-radar.md) |
| **RuView (WiFi DensePose)** | CV & Edge | `cv` `edge` `iot` `self-host` | RuView (π / WiFi DensePose) biến WiFi CSI từ ESP32 (hoặc NIC nghiên cứu) thành spatial intelligence : presence, pose/DensePose,… | [ruview.md](technologies/cv-edge/ruview.md) |
| **Sesame Robot** | CV & Edge | `edge` `iot` `api` `self-host` | Sesame là project robot bốn chân mini open-source trên ESP32 (~$50–60 linh kiện + in 3D PLA): 8 servo MG90 (2/chân), OLED 128×6… | [sesame-robot.md](technologies/cv-edge/sesame-robot.md) |
| **Supervision (Roboflow)** | CV & Edge | `cv` `cli` `self-host` `video` | Supervision là toolkit CV model-agnostic của Roboflow: nhận detection/classification/segmentation từ YOLO, Transformers, Infere… | [supervision.md](technologies/cv-edge/supervision.md) |

---

<a id="16-pdf-ocr"></a>
## PDF, OCR, tài liệu văn phòng

> Parse PDF, OCR, convert Office, MarkItDown…

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **CheatReader** | DevTools | `desktop` `workspace` `pdf` | CheatReader là app đọc sách nổi trên desktop: cửa sổ nhỏ góc màn hình, chế độ transparent text-only (chỉ chữ, nền trong suốt) đ… | [cheatreader.md](technologies/devtools/cheatreader.md) |
| **DeepSeek-OCR** | DevTools | `ocr` `self-host` `cli` `api` | DeepSeek-OCR là model OCR/document VLM của DeepSeek (HF). | [deepseek-ocr.md](technologies/devtools/deepseek-ocr.md) |
| **dots.ocr** | DevTools | `ocr` `pdf` `self-host` `cli` | dots.ocr là VLM multilingual document layout parsing trong một model: layout + OCR + cấu trúc. | [dots-ocr.md](technologies/devtools/dots-ocr.md) |
| **ezBookkeeping** | DevTools | `self-host` `desktop` `workspace` `mcp` `api` `ocr` | ezBookkeeping — app personal finance / bookkeeping self-host nhẹ: ghi giao dịch, import đa định dạng (CSV, OFX/QFX/QIF, Firefly… | [ezbookkeeping.md](technologies/devtools/ezbookkeeping.md) |
| **Google Workspace CLI** | DevTools | `cli` `workspace` `skill` `office` | Google Workspace CLI ( gws hoặc tên binary theo repo) là một công cụ dòng lệnh cho toàn bộ Google Workspace: Drive, Gmail, Cale… | [google-workspace-cli.md](technologies/devtools/google-workspace-cli.md) |
| **HunyuanOCR** | DevTools | `ocr` `self-host` `cli` | HunyuanOCR (Tencent) là VLM OCR / document parsing: text spotting, information extraction, text–image translation, multilingual… | [hunyuan-ocr.md](technologies/devtools/hunyuan-ocr.md) |
| **Infinity-Parser2** | DevTools | `ocr` `pdf` `self-host` `cli` | Infinity-Parser2 là VLM document parsing / OCR (Flash + Pro): PDF/ảnh → cấu trúc text. | [infinity-parser2.md](technologies/devtools/infinity-parser2.md) |
| **KillerPDF** | DevTools | `pdf` `ocr` `desktop` | KillerPDF là PDF editor desktop cho Windows (10/11 x64): xem, annotate, sửa text, vẽ/highlight, merge/split, form fill, ký, pri… | [killer-pdf.md](technologies/devtools/killer-pdf.md) |
| **Knowledge Work Plugins (Anthropic)** | MCP & AI Agents | `skill` `prompt` `workspace` `office` | knowledge-work-plugins là open-source plugins Anthropic biến Claude thành chuyên gia theo role : mỗi plugin đóng gói skills, co… | [knowledge-work-plugins.md](technologies/mcp-ai-agents/knowledge-work-plugins.md) |
| **LibreOffice (CLI-Anything harness)** | CLI-Anything | `harness` `office` `cli` | Harness LibreOffice headless: convert, export document (Writer/Calc/…) qua CLI — agent batch office file không cần GUI. | [libreoffice.md](technologies/cli-anything/libreoffice.md) |
| **LocateAnything-3B** | CV & Edge | `cv` `ocr` `self-host` `cli` | LocateAnything-3B (NVIDIA Eagle) là VLM grounding nhanh: referring expression, multi-object detection, GUI grounding, text loca… | [locate-anything.md](technologies/cv-edge/locate-anything.md) |
| **MarkItDown** | DevTools | `cli` `pdf` `ocr` | MarkItDown là utility Python nhẹ chuyển nhiều loại file → Markdown cho LLM / text pipelines (gần textract, nhưng giữ cấu trúc M… | [markitdown.md](technologies/devtools/markitdown.md) |
| **MinerU** | DevTools | `ocr` `pdf` `cli` `self-host` `api` | MinerU là pipeline chuyển PDF / Office phức tạp thành Markdown/JSON LLM-ready cho agentic workflows: layout, bảng, công thức, m… | [mineru.md](technologies/devtools/mineru.md) |
| **Nanonets-OCR2** | DevTools | `ocr` `pdf` `self-host` `api` | Nanonets-OCR2-3B là VLM ( Vision Language Model ) biến ảnh tài liệu thành Markdown có cấu trúc. | [nanonets-ocr2.md](technologies/devtools/nanonets-ocr2.md) |
| **OfficeCLI** | DevTools | `cli` `office` `skill` `coding-agent` `workspace` | OfficeCLI là suite đọc / sửa / tạo file Word (.docx), Excel (.xlsx), PowerPoint (.pptx) qua CLI — không cần cài Microsoft Office. | [officecli.md](technologies/devtools/officecli.md) |
| **OpenResume** | DevTools | `pdf` `self-host` | OpenResume là resume builder + parser mã nguồn mở: PDF modern ATS-friendly, cập nhật UI realtime, import PDF sẵn có. | [open-resume.md](technologies/devtools/open-resume.md) |
| **PPT Master** | MCP & AI Agents | `skill` `office` `cli` `coding-agent` `workflow` | PPT Master là workflow / Agent Skill chạy trong AI IDE (Claude Code, Cursor, Copilot…): đưa PDF / DOCX / web / text → sinh file… | [ppt-master.md](technologies/mcp-ai-agents/ppt-master.md) |
| **ProtonX Legal Text Correction** | DevTools | `ocr` `self-host` `cli` | protonx-legal-tc (v1.3.1) là model sửa lỗi chữ tiếng Việt chuyên pháp lý / enterprise: chuẩn hóa output OCR (PaddleOCR…), diacr… | [protonx-legal-tc.md](technologies/devtools/protonx-legal-tc.md) |
| **Stirling-PDF** | DevTools | `pdf` `ocr` `self-host` `api` | Stirling-PDF là nền tảng chỉnh sửa / xử lý PDF self-host ( 1 PDF app trên GitHub theo mô tả repo). | [stirling-pdf.md](technologies/devtools/stirling-pdf.md) |
| **STranslate** | DevTools | `ocr` `desktop` | STranslate là app Windows (WPF) tức dùng tức đi : dịch thuật + OCR — chọn vùng / screenshot → nhận diện text → dịch, cấu hình n… | [stranslate.md](technologies/devtools/stranslate.md) |
| **Surya OCR** | DevTools | `ocr` `pdf` `self-host` `cli` | Surya là OCR ~650M: đa ngữ (90+), layout + reading order, table recognition. | [surya.md](technologies/devtools/surya.md) |
| **VLMs OCR Playground** | DevTools | `ocr` `self-host` | VLMs OCR Playground là Gradio Space để so sánh các VLM OCR open-source side-by-side (tag: vision-language-models, OCR). | [vlms-ocr-playground.md](technologies/devtools/vlms-ocr-playground.md) |
| **WinPodX** | DevTools | `desktop` `cli` `workspace` `self-host` `office` | WinPodX chạy app Windows trên Linux như app native: mỗi app một cửa sổ riêng (pin taskbar, Alt-Tab, file association) — không c… | [winpodx.md](technologies/devtools/winpodx.md) |

---

<a id="17-notify"></a>
## Thông báo & cầu nối chat

> Push notify, bridge Zalo/chat, realtime alert.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **changedetection.io** | DevTools | `notification` `self-host` `browser` `workflow` `api` | changedetection.io là công cụ self-host (hoặc SaaS) theo dõi thay đổi webpage : diff text/HTML/PDF/JSON, price/restock, visual … | [changedetection-io.md](technologies/devtools/changedetection-io.md) |
| **Horizon** | DevTools | `mcp` `self-host` `workflow` `notification` `cli` | Horizon là AI news radar cá nhân: lấy Hacker News · RSS · Reddit · Telegram · X · GitHub · OpenBB… → dedupe · score · filter · … | [horizon.md](technologies/devtools/horizon.md) |
| **ntfy** | DevTools | `notification` `self-host` `cli` | ntfy gửi push notification tới điện thoại hoặc desktop qua HTTP đơn giản (PUT/POST) — không cần Firebase/APNs SDK phức tạp cho … | [ntfy.md](technologies/devtools/ntfy.md) |
| **PlainApp** | DevTools | `self-host` `desktop` `workspace` `edge` `notification` | PlainApp biến Android thành hub self-host trên LAN : mở browser / PWA trên desktop → file, media, contacts, SMS/calls, apps/APK… | [plain-app.md](technologies/devtools/plain-app.md) |
| **TREK** | DevTools | `mcp` `self-host` `notification` `gis` | TREK là travel / trip planner self-host : kế hoạch ngày, bản đồ tương tác, ngân sách, packing list, journal, collab realtime (W… | [trek.md](technologies/devtools/trek.md) |
| **Yuvomi** | DevTools | `self-host` `mcp` `api` `notification` | Yuvomi là family planner self-host / offline PWA : tasks, shopping, meals, calendar, budget, health, rewards… 16 modules, 23 la… | [yuvomi.md](technologies/devtools/yuvomi.md) |
| **zca-bridge** | DevTools | `self-host` `api` `notification` `workflow` | zca-bridge là sidecar self-host đồng bộ hội thoại Zalo ↔ Chatwoot hai chiều cho đội hỗ trợ khách hàng VN. | [zca-bridge.md](technologies/devtools/zca-bridge.md) |

---

<a id="18-workflow"></a>
## Workflow / automation glue

> Luồng tự động, n8n-like, diagram-driven.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **AstrBot** | MCP & AI Agents | `agent` `mcp` `skill` `rag` `self-host` `api` | AstrBot — platform agent chatbot all-in-one gắn IM (QQ, Telegram, Discord, Feishu, DingTalk, WeCom, Slack, LINE…). | [astrbot.md](technologies/mcp-ai-agents/astrbot.md) |
| **Atomic Agents** | MCP & AI Agents | `agent` `cli` `api` `workflow` | Atomic Agents (Eigenwise) là framework nhẹ, modular để dựng agent pipeline như LEGO: mỗi agent / tool / context provider single… | [atomic-agents.md](technologies/mcp-ai-agents/atomic-agents.md) |
| **changedetection.io** | DevTools | `notification` `self-host` `browser` `workflow` `api` | changedetection.io là công cụ self-host (hoặc SaaS) theo dõi thay đổi webpage : diff text/HTML/PDF/JSON, price/restock, visual … | [changedetection-io.md](technologies/devtools/changedetection-io.md) |
| **Dolt** | DevTools | `cli` `self-host` `api` `workflow` `agent` | Dolt là database SQL bạn fork / clone / branch / merge / push / pull như Git. | [dolt.md](technologies/devtools/dolt.md) |
| **Duckle** | DevTools | `workflow` `self-host` `desktop` `mcp` `cli` `agent` | Duckle là desktop ETL/ELT studio local-first: canvas kéo-thả (~345–360 components: files, DBs, lakehouse, SaaS, streaming, DQ, … | [duckle.md](technologies/devtools/duckle.md) |
| **EpicStaff** | MCP & AI Agents | `agent` `mcp` `rag` `self-host` `workflow` | EpicStaff là platform self-host để ops/engineer xây AI agent flows : editor kéo-thả node trên backend Django ; mọi node có thể … | [epicstaff.md](technologies/mcp-ai-agents/epicstaff.md) |
| **Horizon** | DevTools | `mcp` `self-host` `workflow` `notification` `cli` | Horizon là AI news radar cá nhân: lấy Hacker News · RSS · Reddit · Telegram · X · GitHub · OpenBB… → dedupe · score · filter · … | [horizon.md](technologies/devtools/horizon.md) |
| **LangBot** | MCP & AI Agents | `agent` `mcp` `skill` `rag` `self-host` `api` | LangBot — platform production-grade xây bot AI trên IM : Discord · Telegram · Slack · LINE · QQ · WeChat/WeCom · Feishu · DingT… | [langbot.md](technologies/mcp-ai-agents/langbot.md) |
| **MiroFish** | MCP & AI Agents | `agent` `self-host` `rag` `workflow` `api` | MiroFish là swarm intelligence engine dự đoán: lấy seed (tin tức, policy, báo cáo, tiểu thuyết…) → GraphRAG + persona agents → … | [mirofish.md](technologies/mcp-ai-agents/mirofish.md) |
| **n8n Workflows (Zie619)** | DevTools | `workflow` `self-host` `dataset` | n8n Workflow Collection là kho ~4,3k workflow JSON production-ready (365+ integrations, 15 categories), gom từ community + site… | [n8n-workflows.md](technologies/devtools/n8n-workflows.md) |
| **System Design 101** | DevTools | `diagram` `dataset` | System Design 101 (ByteByteGo) là kho giải thích hệ thống phức tạp bằng hình + ngôn ngữ đơn giản: API/web, load balancer, cache, DB, message queue, microservices, cloud (AWS…), interview system… | [system-design-101.md](technologies/devtools/system-design-101.md) |
| **OpenHuman** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `desktop` `workflow` | OpenHuman là personal AI super intelligence local-first gồm ba phần: (1) brain — memory tree / Obsidian-style wiki từ email·cal… | [openhuman.md](technologies/mcp-ai-agents/openhuman.md) |
| **Pathway** | MCP & AI Agents | `rag` `cli` `self-host` `workflow` `api` | Pathway ( Live Data Framework ) là Python ETL stream + batch cùng một codebase: real-time analytics, connectors (Kafka, GDrive,… | [pathway.md](technologies/mcp-ai-agents/pathway.md) |
| **SurfSense** | MCP & AI Agents | `rag` `agent` `mcp` `self-host` `api` `workflow` | SurfSense là NotebookLM for Competitive Intelligence : nền tảng OSS cho AI agents theo dõi thị trường với live connectors (Redd… | [surfsense.md](technologies/mcp-ai-agents/surfsense.md) |
| **Vibe-Trading** | MCP & AI Agents | `agent` `mcp` `skill` `cli` `self-host` `workflow` | Vibe-Trading — personal trading agent OSS: NL research → market data → strategy codegen → backtest → report/export (+ Alpha Zoo… | [vibe-trading.md](technologies/mcp-ai-agents/vibe-trading.md) |
| **zca-bridge** | DevTools | `self-host` `api` `notification` `workflow` | zca-bridge là sidecar self-host đồng bộ hội thoại Zalo ↔ Chatwoot hai chiều cho đội hỗ trợ khách hàng VN. | [zca-bridge.md](technologies/devtools/zca-bridge.md) |

---

<a id="19-security"></a>
## Bảo mật & pentest

> Scan, pentest agent, filetype/malware heuristics.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **Agent Governance Toolkit (AGT)** | MCP & AI Agents | `guardrail` `security` `agent` `cli` `mcp` | Agent Governance Toolkit (AGT) là bộ công cụ mã nguồn mở của Microsoft để ship agent production : áp dụng policy ( policy enfor… | [agent-governance-toolkit.md](technologies/mcp-ai-agents/agent-governance-toolkit.md) |
| **BleachBit** | DevTools | `desktop` `cli` `security` | BleachBit là phần mềm dọn hệ thống cho Windows và Linux : xóa cache/cookie/log tạm để giải phóng ổ đĩa và giảm dấu vết riêng tư… | [bleachbit.md](technologies/devtools/bleachbit.md) |
| **HackingTool** | Security | `security` `pentest` `cli` `self-host` | HackingTool là menu CLI all-in-one gom ~185+ tool bảo mật/pentest quen thuộc (recon, web, AD, cloud, mobile, forensics…) — tìm … | [hackingtool.md](technologies/security/hackingtool.md) |
| **Magika** | DevTools | `cli` `security` | Magika (Google Security Research) là nhận diện kiểu nội dung file bằng AI (deep learning, model vài MB): ~ 99% precision/recall… | [magika.md](technologies/devtools/magika.md) |
| **OSIRIS** | Security | `security` `gis` `self-host` `desktop` `api` | OSIRIS là dashboard OSINT self-host: gom flight (OpenSky), maritime, CCTV (2k+), động đất (USGS), cháy (NASA FIRMS), thời tiết/… | [osiris.md](technologies/security/osiris.md) |
| **Strix** | Security | `security` `pentest` `agent` `cli` | Strix là tool AI penetration testing open-source: agent tự chủ hành xử như pentester (recon → exploit → validate PoC), không ch… | [strix.md](technologies/security/strix.md) |
| **System Informer** | Security | `security` `desktop` | System Informer (đổi tên từ Process Hacker ) là tool Windows monitor process/resource , debug phần mềm và hỗ trợ phát hiện malw… | [system-informer.md](technologies/security/system-informer.md) |

---

<a id="20-llm-infra"></a>
## Hạ tầng chạy LLM (gateway / inference / train)

> LocalAI, vLLM, unsloth, train-from-scratch, FreeLLM…

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **AirLLM** | DevTools | `self-host` `cli` `api` | AirLLM là thư viện suy luận LLM lớn trên GPU nhỏ bằng cách chỉ giữ một layer trên VRAM (load layer-wise từ disk), không bắt buộ… | [airllm.md](technologies/devtools/airllm.md) |
| **Cake** | DevTools | `api` `self-host` `cli` `tts` `image-gen` `edge` | Cake là máy chủ chạy mô hình AI viết bằng Rust ( inference server ). | [cake.md](technologies/devtools/cake.md) |
| **exo** | DevTools | `self-host` `api` `cli` `desktop` | exo (exo labs) nối nhiều máy thành một cụm ( cluster ) để chạy mô hình AI lớn hơn mức một máy chịu nổi. | [exo.md](technologies/devtools/exo.md) |
| **FreeLLMAPI** | DevTools | `api` `self-host` `mcp` `desktop` | FreeLLMAPI là proxy tương thích OpenAI ( OpenAI-compatible ) gom free tier của ~16+ LLM provider (~1.7B tokens/tháng theo READM… | [freellmapi.md](technologies/devtools/freellmapi.md) |
| **LLM Checker** | DevTools | `cli` `mcp` `self-host` | LLM Checker — CLI (và MCP) quét phần cứng rồi recommend model LLM/sLLM local phù hợp (Ollama + registry HF/Ollama/GPT4All, scor… | [llm-checker.md](technologies/devtools/llm-checker.md) |
| **llmfit** | DevTools | `cli` `desktop` `self-host` `skill` | llmfit — CLI/TUI (và desktop) right-size model LLM theo RAM/CPU/GPU: detect phần cứng, score Quality/Speed/Fit/Context, gợi ý m… | [llmfit.md](technologies/devtools/llmfit.md) |
| **LocalAI** | DevTools | `api` `self-host` `mcp` `agent` `stt` `tts` | LocalAI là engine AI mã nguồn mở: chạy LLM, nhìn ảnh ( vision ), giọng nói, tạo ảnh / video trên phần cứng của bạn (CPU cũng đư… | [localai.md](technologies/devtools/localai.md) |
| **Models.dev** | DevTools | `api` `dataset` `skill` | Models.dev là database mở về thông số model AI: tên, context limit, modality, reasoning/tool-call, giá theo provider, benchmark… | [models-dev.md](technologies/devtools/models-dev.md) |
| **Train LLM From Scratch** | DevTools | `self-host` `cli` `desktop` | Train LLM From Scratch là tutorial + codebase dạy train LLM end-to-end : tải data → tokenize → pretrain Transformer → SFT → rew… | [train-llm-from-scratch.md](technologies/devtools/train-llm-from-scratch.md) |
| **Unsloth** | DevTools | `self-host` `cli` `api` `desktop` | Unsloth là framework fine-tune / RL LLM nhanh hơn (~2×) · ít VRAM hơn (tới ~70%) (LoRA, 4/16-bit, FP8, GRPO…) + Unsloth Studio … | [unsloth.md](technologies/devtools/unsloth.md) |
| **vLLM-Omni** | DevTools | `api` `self-host` `cli` `tts` `image-gen` `video` | vLLM-Omni mở rộng vLLM từ LLM text AR sang phục vụ model omni-modality : text, ảnh, audio, video, action — kèm Diffusion (DiT) … | [vllm-omni.md](technologies/devtools/vllm-omni.md) |

---

<a id="21-data"></a>
## DB / storage / file browser

> Database, object storage UI, file manager self-host.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **Dolt** | DevTools | `cli` `self-host` `api` `workflow` `agent` | Dolt là database SQL bạn fork / clone / branch / merge / push / pull như Git. | [dolt.md](technologies/devtools/dolt.md) |
| **FileBrowser Quantum** | DevTools | `self-host` `desktop` `api` `workspace` `browser` | FileBrowser Quantum — fork hiện đại của File Browser: web file manager self-host trên filesystem (multi-source, include/exclude). | [filebrowser-quantum.md](technologies/devtools/filebrowser-quantum.md) |
| **R2 Web** | DevTools | `self-host` `desktop` `api` `workspace` | R2 Web là file manager web thuần browser cho Cloudflare R2 : browse, upload (kéo/thả, paste), rename/move/copy/delete, preview … | [r2-web.md](technologies/devtools/r2-web.md) |
| **VeloxDB** | DevTools | `desktop` `self-host` `cli` | VeloxDB (veloxbase) là client PostgreSQL desktop local-first: Monaco SQL + lint/autocomplete schema, multi-tab, virtual-scroll … | [veloxdb.md](technologies/devtools/veloxdb.md) |
| **Vietnamese Provinces Database** | DevTools | `gis` | vietnamese-provinces-database là dataset đơn vị hành chính Việt Nam (không phải AI model): tỉnh/thành + xã/phường/đặc khu, kèm … | [vietnamese-provinces-database.md](technologies/devtools/vietnamese-provinces-database.md) |

---

<a id="22-productivity"></a>
## Năng suất & self-host tiện ích

> Workspace CLI, finance, dashboard, utilities hàng ngày.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **AirLLM** | DevTools | `self-host` `cli` `api` | AirLLM là thư viện suy luận LLM lớn trên GPU nhỏ bằng cách chỉ giữ một layer trên VRAM (load layer-wise từ disk), không bắt buộ… | [airllm.md](technologies/devtools/airllm.md) |
| **Cake** | DevTools | `api` `self-host` `cli` `tts` `image-gen` `edge` | Cake là máy chủ chạy mô hình AI viết bằng Rust ( inference server ). | [cake.md](technologies/devtools/cake.md) |
| **ChronoFrame** | DevTools | `self-host` `desktop` `workspace` `browser` | ChronoFrame — gallery ảnh cá nhân self-host : quản lý album online, Live/Motion Photos, parse EXIF, reverse geocoding, bản đồ e… | [chronoframe.md](technologies/devtools/chronoframe.md) |
| **Dashy** | DevTools | `self-host` `desktop` `workspace` | Dashy là dashboard self-host làm homepage homelab : gom links/apps, status check realtime, widgets, themes/icons. | [dashy.md](technologies/devtools/dashy.md) |
| **DFlash** | DevTools | `cli` `self-host` `api` | DFlash ( Block Diffusion for Flash Speculative Decoding ) là draft model block diffusion nhẹ để speculative decoding : target L… | [dflash.md](technologies/devtools/dflash.md) |
| **Drizzle ORM** | DevTools | `api` `cli` `self-host` | Drizzle ORM là ORM headless cho Node.js / TypeScript / JavaScript: khai báo schema SQL type-safe, query relational hoặc SQL-lik… | [drizzle-orm.md](technologies/devtools/drizzle-orm.md) |
| **Duckle** | DevTools | `workflow` `self-host` `desktop` `mcp` `cli` `agent` | Duckle là desktop ETL/ELT studio local-first: canvas kéo-thả (~345–360 components: files, DBs, lakehouse, SaaS, streaming, DQ, … | [duckle.md](technologies/devtools/duckle.md) |
| **Floci** | DevTools | `self-host` `cli` `api` | Floci là emulator AWS local OSS miễn phí (không account, không token, không feature gate): point AWS SDK/CLI/Terraform/CDK/Open… | [floci.md](technologies/devtools/floci.md) |
| **FluentFlyout** | DevTools | `desktop` `workspace` | FluentFlyout là app flyout hiện đại cho Windows 11 , thiết kế Fluent 2: điều khiển media (cover, title, artist, play/pause, rep… | [fluent-flyout.md](technologies/devtools/fluent-flyout.md) |
| **Folo** | DevTools | `desktop` `self-host` | Folo ( Follow Everything ) là trình đọc RSS có AI ( AI RSS reader ): một timeline gọn, subscribe feed và danh sách curated, dịc… | [folo.md](technologies/devtools/folo.md) |
| **FossFLOW** | DevTools | `diagram` `self-host` | FossFLOW — PWA vẽ sơ đồ isometric (network/infra): drag node, connector multiplex, export/import JSON, offline; Docker self-hos… | [fossflow.md](technologies/devtools/fossflow.md) |
| **Jitsi Meet** | DevTools | `self-host` `video` `api` | Jitsi Meet là nền tảng video conference OSS : deploy riêng hoặc embed (web/native SDK). | [jitsi-meet.md](technologies/devtools/jitsi-meet.md) |
| **keyd** | DevTools | `cli` `desktop` `workspace` | keyd là daemon remap phím system-wide trên Linux dùng evdev / uinput (kernel), không phụ thuộc X11. | [keyd.md](technologies/devtools/keyd.md) |
| **LLM Checker** | DevTools | `cli` `mcp` `self-host` | LLM Checker — CLI (và MCP) quét phần cứng rồi recommend model LLM/sLLM local phù hợp (Ollama + registry HF/Ollama/GPT4All, scor… | [llm-checker.md](technologies/devtools/llm-checker.md) |
| **MiniCPM** | DevTools | `self-host` `cli` `edge` `desktop` `skill` | MiniCPM (OpenBMB / Tsinghua) là dòng LLM nhỏ, mạnh trên edge/on-device. | [minicpm.md](technologies/devtools/minicpm.md) |
| **n8n Workflows (Zie619)** | DevTools | `workflow` `self-host` `dataset` | n8n Workflow Collection là kho ~4,3k workflow JSON production-ready (365+ integrations, 15 categories), gom từ community + site… | [n8n-workflows.md](technologies/devtools/n8n-workflows.md) |
| **OpenTickly** | DevTools | `self-host` `api` `cli` `workspace` `agent` | OpenTickly là time tracker self-host , private-first, tương thích Toggl (import/export, giữ workflow hiện có). | [opentickly.md](technologies/devtools/opentickly.md) |
| **React Scan** | DevTools | `browser` `cli` `desktop` | React Scan tự phát hiện vấn đề performance React (render thừa): không cần sửa app nhiều — drop-in script / npx react-scan init … | [react-scan.md](technologies/devtools/react-scan.md) |
| **SmolVM** | DevTools | `cli` `self-host` `desktop` `coding-agent` | SmolVM là CLI chạy Linux microVM cục bộ: cold start dưới giây, macOS / Linux / Windows, RAM elastic (virtio balloon). | [smolvm.md](technologies/devtools/smolvm.md) |
| **System Design 101** | DevTools | `diagram` `dataset` | System Design 101 (ByteByteGo) là kho giải thích hệ thống phức tạp bằng hình + ngôn ngữ đơn giản: API/web, load balancer, cache, DB, message queue, microservices, cloud (AWS…), interview system… | [system-design-101.md](technologies/devtools/system-design-101.md) |
| **Tab Harbor** | DevTools | `browser` `workspace` `desktop` | Tab Harbor biến New Tab Chrome thành bàn làm việc yên hơn: xem tab đang mở (gom theo domain + nhóm thủ công), quick links, save… | [tab-harbor.md](technologies/devtools/tab-harbor.md) |
| **Tabularis** | DevTools | `mcp` `desktop` `self-host` `cli` `agent` | Tabularis là client SQL desktop OSS (PostgreSQL, MySQL/MariaDB, SQLite + plugins DuckDB, ClickHouse, Redis, Firestore…). | [tabularis.md](technologies/devtools/tabularis.md) |
| **termshot** | DevTools | `cli` `desktop` | termshot tạo ảnh screenshot terminal đẹp từ lệnh bạn chạy: prefix như time / watch — đọc ANSI escape (màu/format thật), render … | [termshot.md](technologies/devtools/termshot.md) |
| **VietAI ViT5-base** | DevTools | `self-host` `cli` `api` | ViT5-base là encoder-decoder Transformer pretrained text-to-text cho tiếng Việt (summarization, translation, generation, QA fin… | [vit5-base.md](technologies/devtools/vit5-base.md) |
| **vLLM-Omni** | DevTools | `api` `self-host` `cli` `tts` `image-gen` `video` | vLLM-Omni mở rộng vLLM từ LLM text AR sang phục vụ model omni-modality : text, ảnh, audio, video, action — kèm Diffusion (DiT) … | [vllm-omni.md](technologies/devtools/vllm-omni.md) |
| **WhatCable** | DevTools | `desktop` `cli` `workspace` | WhatCable là app menu bar macOS (Apple Silicon, macOS 14+) giải thích bằng tiếng thường: mỗi cáp USB-C cắm vào Mac thật sự hỗ t… | [whatcable.md](technologies/devtools/whatcable.md) |
| **Whisper Money** | DevTools | `self-host` `desktop` `workspace` | Whisper Money — app personal finance privacy-first: theo dõi tài khoản, phân loại giao dịch (manual + rule automation), insight… | [whisper-money.md](technologies/devtools/whisper-money.md) |
| **WSL Dashboard** | DevTools | `desktop` `cli` `workspace` | WSL Dashboard là app desktop native trên Windows để quản lý WSL (Windows Subsystem for Linux): start/stop distro, migrate VHDX,… | [wsl-dashboard.md](technologies/devtools/wsl-dashboard.md) |

---

<a id="23-harness"></a>
## CLI-Anything harness (điều khiển app bằng agent)

> Harness con: Blender, n8n, Obsidian, FreeCAD…

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **ArcGIS Pro (CLI-Anything harness)** | CLI-Anything | `harness` `gis` `mcp` `cli` | Harness ArcGIS Pro : agent làm bản đồ, geoprocessing, chỉnh feature — CLI kèm MCP bridge để điều khiển Pro live (demo cartograp… | [arcgis-pro.md](technologies/cli-anything/arcgis-pro.md) |
| **Blender (CLI-Anything harness)** | CLI-Anything | `harness` `3d` `cli` | Harness agent cho Blender : scene 3D, mesh, render — agent ra lệnh CLI thay vì thao tác viewport. | [blender.md](technologies/cli-anything/blender.md) |
| **CLI-Anything** | MCP & AI Agents | `cli` `harness` `skill` `agent` | CLI-Anything (HKUDS) làm mọi phần mềm trở thành agent-native qua CLI có cấu trúc, thay vì để agent “bấm UI” mù. | [cli-anything.md](technologies/mcp-ai-agents/cli-anything.md) |
| **ComfyUI (CLI-Anything harness)** | CLI-Anything | `harness` `image-gen` `cli` | Harness CLI-Anything cho ComfyUI : agent gọi / điều khiển workflow diffusion qua CLI + skill, thay vì chỉ GUI node graph hoặc r… | [comfyui.md](technologies/cli-anything/comfyui.md) |
| **Draw.io (CLI-Anything harness)** | CLI-Anything | `harness` `diagram` `cli` | Harness diagrams.net / Draw.io : agent sinh sơ đồ (vd. | [drawio.md](technologies/cli-anything/drawio.md) |
| **FreeCAD (CLI-Anything harness)** | CLI-Anything | `harness` `cad` `cli` | Harness biến FreeCAD thành CLI agent điều khiển được — CAD parametric, model 3D, demo Curiosity Rover (preview / live preview /… | [freecad.md](technologies/cli-anything/freecad.md) |
| **Godot (CLI-Anything harness)** | CLI-Anything | `harness` `game` `cli` | Harness Godot Engine : agent build/run project, export, demo-game E2E qua CLI — không thao tác editor bằng tay. | [godot.md](technologies/cli-anything/godot.md) |
| **LibreOffice (CLI-Anything harness)** | CLI-Anything | `harness` `office` `cli` | Harness LibreOffice headless: convert, export document (Writer/Calc/…) qua CLI — agent batch office file không cần GUI. | [libreoffice.md](technologies/cli-anything/libreoffice.md) |
| **n8n (CLI-Anything harness)** | CLI-Anything | `harness` `workflow` `cli` | Harness n8n (self-host workflow automation): agent tạo/chạy/quản lý workflow qua CLI thay vì chỉ kéo node trên UI. | [n8n.md](technologies/cli-anything/n8n.md) |
| **Obsidian (CLI-Anything harness)** | CLI-Anything | `harness` `rag` `cli` | Harness Obsidian (Local REST API): agent đọc/ghi vault, search, note workflow — knowledge management agent-native (persistent m… | [obsidian.md](technologies/cli-anything/obsidian.md) |
| **Slay the Spire II (CLI-Anything harness)** | CLI-Anything | `harness` `ui-automation` `game` `cli` | Harness game automation cho Slay the Spire II: agent chơi / thao tác game qua CLI (deck, combat). | [slay-the-spire-ii.md](technologies/cli-anything/slay-the-spire-ii.md) |
| **VideoCaptioner (CLI-Anything harness)** | CLI-Anything | `harness` `stt` `video` | Harness VideoCaptioner — phụ đề / caption video bằng AI qua CLI: agent pipeline video → subtitle thay vì UI desktop. | [videocaptioner.md](technologies/cli-anything/videocaptioner.md) |

---

<a id="24-3d"></a>
## 3D / CAD / game engine

> Blender/FreeCAD/Godot/O3DE/Chili3D.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **Blender (CLI-Anything harness)** | CLI-Anything | `harness` `3d` `cli` | Harness agent cho Blender : scene 3D, mesh, render — agent ra lệnh CLI thay vì thao tác viewport. | [blender.md](technologies/cli-anything/blender.md) |
| **Chili3D** | Image & Video | `cad` `3d` `browser` `self-host` | Chili3D là ứng dụng CAD 3D chạy trong trình duyệt : thiết kế / chỉnh sửa mô hình online, không cần cài desktop. | [chili3d.md](technologies/image-video/chili3d.md) |
| **FreeCAD (CLI-Anything harness)** | CLI-Anything | `harness` `cad` `cli` | Harness biến FreeCAD thành CLI agent điều khiển được — CAD parametric, model 3D, demo Curiosity Rover (preview / live preview /… | [freecad.md](technologies/cli-anything/freecad.md) |
| **Godot (CLI-Anything harness)** | CLI-Anything | `harness` `game` `cli` | Harness Godot Engine : agent build/run project, export, demo-game E2E qua CLI — không thao tác editor bằng tay. | [godot.md](technologies/cli-anything/godot.md) |
| **O3DE (Open 3D Engine)** | Image & Video | `desktop` `self-host` | O3DE ( Open 3D Engine ) là engine 3D realtime open-source (Linux Foundation / cộng đồng, gốc Amazon Lumberyard): game AAA, worl… | [o3de.md](technologies/image-video/o3de.md) |
| **OpenToonz** | Image & Video | `video` `desktop` `self-host` | OpenToonz là phần mềm animation 2D đầy đủ tính năng (open-source, DWANGO): dựa trên Toonz Studio Ghibli Version — Digital Video… | [opentoonz.md](technologies/image-video/opentoonz.md) |
| **Slay the Spire II (CLI-Anything harness)** | CLI-Anything | `harness` `ui-automation` `game` `cli` | Harness game automation cho Slay the Spire II: agent chơi / thao tác game qua CLI (deck, combat). | [slay-the-spire-ii.md](technologies/cli-anything/slay-the-spire-ii.md) |

---

<a id="25-watermark"></a>
## Watermark nội dung AI

> Đánh dấu / phát hiện watermark audio hoặc ảnh.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **AudioSeal** | Speech & Audio | `watermark` | AudioSeal (Meta AI Research) là thư viện watermarking cho speech audio do AI sinh ra. | [audioseal.md](technologies/speech-audio/audioseal.md) |
| **blind_watermark** | Image & Video | `watermark` `cli` | blind watermark là thư viện ảnh blind / invisible watermark (DWT-DCT-SVD): nhúng chữ / ảnh / bit vào ảnh; extract không cần ảnh… | [blind-watermark.md](technologies/image-video/blind-watermark.md) |

---

<a id="26-diagram-gis"></a>
## Sơ đồ / GIS / bản đồ

> Diagram skill, GIS notify, map tools.

| Công nghệ | Domain | Tags | Dùng để (tóm tắt) | Bài |
|-----------|--------|------|-------------------|-----|
| **ArcGIS Pro (CLI-Anything harness)** | CLI-Anything | `harness` `gis` `mcp` `cli` | Harness ArcGIS Pro : agent làm bản đồ, geoprocessing, chỉnh feature — CLI kèm MCP bridge để điều khiển Pro live (demo cartograp… | [arcgis-pro.md](technologies/cli-anything/arcgis-pro.md) |
| **COBE** | DevTools | `gis` | COBE — lib WebGL globe siêu nhẹ (~5KB): markers, arcs, CSS Anchor Positioning cho label bindable. | [cobe.md](technologies/devtools/cobe.md) |
| **Draw.io (CLI-Anything harness)** | CLI-Anything | `harness` `diagram` `cli` | Harness diagrams.net / Draw.io : agent sinh sơ đồ (vd. | [drawio.md](technologies/cli-anything/drawio.md) |
| **drawio-skill** | MCP & AI Agents | `skill` `diagram` `cli` | drawio-skill là Agent Skill biến mô tả ngôn ngữ tự nhiên (và codebase / infra / ảnh) thành file .drawio + export PNG/SVG/PDF/JP… | [drawio-skill.md](technologies/mcp-ai-agents/drawio-skill.md) |
| **FossFLOW** | DevTools | `diagram` `self-host` | FossFLOW — PWA vẽ sơ đồ isometric (network/infra): drag node, connector multiplex, export/import JSON, offline; Docker self-hos… | [fossflow.md](technologies/devtools/fossflow.md) |
| **FreeLLMAPI** | DevTools | `api` `self-host` `mcp` `desktop` | FreeLLMAPI là proxy tương thích OpenAI ( OpenAI-compatible ) gom free tier của ~16+ LLM provider (~1.7B tokens/tháng theo READM… | [freellmapi.md](technologies/devtools/freellmapi.md) |
| **LingBot-Map** | CV & Edge | `cv` `self-host` `cli` `video` | LingBot-Map (Robbyant) là feed-forward 3D foundation model cho streaming 3D reconstruction : video / frame stream → pose + geom… | [lingbot-map.md](technologies/cv-edge/lingbot-map.md) |
| **OSIRIS** | Security | `security` `gis` `self-host` `desktop` `api` | OSIRIS là dashboard OSINT self-host: gom flight (OpenSky), maritime, CCTV (2k+), động đất (USGS), cháy (NASA FIRMS), thời tiết/… | [osiris.md](technologies/security/osiris.md) |
| **QuiverAI** | Bookmarks | `image-gen` `mcp` `api` `diagram` | QuiverAI — foundational model SaaS cho vector design : generate / edit / (sắp) animate SVG (logo, illustration, typography). | [quiverai.md](technologies/bookmarks/quiverai.md) |
| **System Design 101** | DevTools | `diagram` `dataset` | System Design 101 (ByteByteGo) là kho giải thích hệ thống phức tạp bằng hình + ngôn ngữ đơn giản: API/web, load balancer, cache, DB, message queue, microservices, cloud (AWS…), interview system… | [system-design-101.md](technologies/devtools/system-design-101.md) |
| **TREK** | DevTools | `mcp` `self-host` `notification` `gis` | TREK là travel / trip planner self-host : kế hoạch ngày, bản đồ tương tác, ngân sách, packing list, journal, collab realtime (W… | [trek.md](technologies/devtools/trek.md) |
| **Vietnamese Provinces Database** | DevTools | `gis` | vietnamese-provinces-database là dataset đơn vị hành chính Việt Nam (không phải AI model): tỉnh/thành + xã/phường/đặc khu, kèm … | [vietnamese-provinces-database.md](technologies/devtools/vietnamese-provinces-database.md) |

