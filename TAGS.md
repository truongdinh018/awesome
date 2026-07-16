# Tags — chú giải & “dùng để làm gì”

> Tag = **capability** (làm được gì). Domain/Primary = chỗ xếp folder.  
> **Duyệt theo nhu cầu tiếng Việt:** [USE-CASES.md](USE-CASES.md)  
> Subgroup domain: [categories/README.md](categories/README.md) · Star `#`: [repos/README.md](repos/README.md)  
> UI lọc: catalog web nhóm tag theo bảng dưới (`site/src/tagTaxonomy.ts`).

## Cách đọc bảng

| Cột | Ý nghĩa |
|-----|---------|
| Tag | Giá trị trong metadata bài / cột Tags của `repos/` |
| Nhãn UI | Hiển thị trong bộ lọc catalog |
| Dùng để | Việc thực tế bạn đang cần |
| Không phải | Tránh nhầm với capability gần |

**Quy ước bài viết:** mỗi repo ≥ 2–4 tag capability; ưu tiên tag mô tả **hành động** (`rag`, `stt`) hơn tag chung (`cli`) nếu phải chọn.

---

## Agent · MCP · Skill

| Tag | Nhãn UI | Dùng để | Không phải |
|-----|---------|---------|------------|
| `mcp` | MCP | Gắn tool/API vào Cursor/Claude qua MCP | Agent tự suy luận end-to-end |
| `agent` | Agent runtime | Runtime/orchestrator agent hoặc bot đa kênh | Chỉ một skill/prompt lẻ |
| `coding-agent` | Coding agent | Agent chuyên viết/sửa code, PR, repo | Bot chat support thuần |
| `rag` | RAG | Hỏi đáp / truy vấn trên tài liệu đã ingest | Fine-tune model |
| `memory` | Memory | Persistent memory cho agent (session dài) | RAG document store thuần |
| `knowledge` | Knowledge base | PKM / wiki / ghi chú cá nhân | Vector DB infrastructure |
| `extract` | Extract / crawl | Cào web / extract → markdown·JSON·graph | RAG UI hoàn chỉnh |
| `prompt` | Prompt | Thư viện / tối ưu prompt | Runtime agent |
| `skill` | Skill | Gói `SKILL.md` hướng dẫn agent | MCP server |
| `plugin` | Plugin | Marketplace / plugin Claude Code… | Skill đơn lẻ không có marketplace |
| `cli` | CLI | Dùng chủ yếu bằng dòng lệnh | Bắt buộc phải có GUI |
| `harness` | Harness | Harness CLI-Anything điều khiển 1 app | Agent framework đầy đủ |
| `guardrail` | Guardrail | Chặn lệnh nguy hiểm / governance | Antivirus máy chủ |
| `workflow` | Workflow | Nối nhiều bước tự động (pipeline) | Một lệnh CLI đơn |
| `chatbot` | Chatbot IM | Bot trên Telegram / Discord / Slack… | Coding agent trong IDE |
| `eval` | Eval / benchmark | Đánh giá model / agent / RAG | Training fine-tune |
| `observability` | Observability | Monitor session, anti-pattern agent | APM server thuần |

---

## Speech · Voice

| Tag | Nhãn UI | Dùng để | Không phải |
|-----|---------|---------|------------|
| `stt` | STT | Nghe nói → chữ (họp, phụ đề) | TTS |
| `tts` | TTS | Chữ → tiếng nói | STT |
| `voice-clone` | Voice clone | Nhân bản / giữ tembre giọng | Chỉ TTS giọng mặc định |
| `realtime` | Realtime voice | Voice chat realtime (low latency) | Batch TTS file |
| `subtitle` | Subtitle | Phụ đề / caption video | Dubbing đầy đủ |
| `dubbing` | Dubbing | Lồng tiếng / dịch audio track | Chỉ export SRT |

---

## Ảnh · Video · Design

| Tag | Nhãn UI | Dùng để | Không phải |
|-----|---------|---------|------------|
| `image-gen` | Image gen | Sinh ảnh (diffusion / studio) | Chỉ edit ảnh thủ công |
| `video` | Video | Pipeline video (gen, edit, tải, stream) | Chỉ audio |
| `nle` | NLE | Timeline editor (non-linear) | Script FFmpeg một lệnh |
| `multimodal` | Multimodal | Agent/model xử lý chữ + ảnh/video | Text-only LLM |
| `ui-to-code` | UI → code | Screenshot/URL → code giao diện | Browser automation click |
| `design` | Design UI | Skill thiết kế UI / layout / theme | Backend API |
| `anti-slop` | Anti-slop | Chống look/văn AI generic | Watermark detect |
| `watermark` | Watermark | Đánh dấu / phát hiện watermark AI | DRM Netflix |
| `3d` / `cad` / `game` | 3D / CAD / Game | 3D, CAD, hoặc điều khiển game engine | Video 2D thuần |

---

## Browser · Automation · Edge

| Tag | Nhãn UI | Dùng để | Không phải |
|-----|---------|---------|------------|
| `ui-automation` | UI automation | Điều khiển UI (thường browser) | MCP lấy dữ liệu thuần |
| `computer-use` | Computer use | Agent nhìn màn hình / NL→hành động | Script Selenium cố định |
| `browser` | Browser | Thao tác hoặc capture trong trình duyệt | App desktop native |
| `dom` | DOM | Làm việc trên DOM (capture/agent) | Screenshot-only vision |
| `cv` | Computer vision | Thị giác máy: detect/recognize | Gen ảnh artistic |
| `edge` / `iot` | Edge / IoT | Chạy trên thiết bị biên / IoT | Cloud GPU lớn |
| `mobile` | Mobile | App Android / iOS | Desktop only |

---

## Docs · OCR · Office

| Tag | Nhãn UI | Dùng để | Không phải |
|-----|---------|---------|------------|
| `pdf` / `ocr` | PDF / OCR | PDF và nhận dạng chữ trong ảnh/PDF | Word/Excel thuần |
| `office` | Office | Word/Excel/Slide / Workspace office | Chỉ PDF merge |
| `diagram` | Diagram | Vẽ/sửa sơ đồ (draw.io…) | Whiteboard realtime |
| `dataset` | Dataset | Corpus / dataset train-eval | Vector DB production |
| `gis` | GIS | Bản đồ / GIS / định vị | CV thuần |

---

## Deploy · Ops · Security

| Tag | Nhãn UI | Dùng để | Không phải |
|-----|---------|---------|------------|
| `self-host` | Self-host | Tự host trên máy/VPS của bạn | Chỉ SaaS closed |
| `desktop` | Desktop | Có app desktop (hoặc UX desktop-first) | Chỉ API server |
| `api` | API | Expose HTTP/API để hệ khác gọi | Chỉ GUI không API |
| `docker` | Docker | Deploy / compose bằng Docker | Chỉ binary local |
| `local-llm` | Local LLM | Inference model trên máy bạn | Chỉ gọi OpenAI cloud |
| `gateway` | LLM gateway | Proxy / router nhiều provider | Fine-tune |
| `finetune` | Fine-tune | Fine-tune / LoRA / train adapter | Chỉ chat inference |
| `vector` | Vector / embed | Vector DB / embedding service | RAG UI hoàn chỉnh |
| `notification` | Notification | Push/alert/bridge tin nhắn | Email marketing |
| `workspace` | Workspace | Môi trường làm việc / productivity shell | Inference LLM |
| `security` / `pentest` | Security / Pentest | AppSec, pentest, scan rủi ro | Backup/restore |
| `batch` | Batch | Xử lý hàng loạt / queue jobs | Realtime chat |
| `webhook` | Webhook | Nhận/gửi webhook HTTP | Polling thuần |

---

## Lĩnh vực · Ngôn ngữ

| Tag | Nhãn UI | Dùng để | Không phải |
|-----|---------|---------|------------|
| `vietnam` | Tiếng Việt / VN | Model/data/tool tối ưu tiếng Việt hoặc VN | Chỉ có UI i18n |
| `legal` | Legal | Pháp lý / văn bản luật | Contract eSign generic |
| `finance` | Finance | Tài chính / kế toán / sổ sách | Trading bot |
| `trading` | Trading | Giao dịch thị trường | Accounting |
| `edu` | Education | Khóa học / học liệu AI | Docs kỹ thuật thuần |

---

## Điểm neo nhanh

> Vài tool tiêu biểu — catalog đầy đủ theo nhu cầu → [USE-CASES.md](USE-CASES.md).

| Nhu cầu | Điểm neo |
|---------|----------|
| RAG | RAGFlow · WeKnora · AnythingLLM · PageIndex |
| Memory | agentmemory · Claude-Mem · Hermes |
| Extract/crawl | Firecrawl · Crawl4AI · Scrapling · Hyper-Extract |
| Coding agent | OpenHands · CodeWhale · Paseo · Nezha · Spec Kit |
| Design / anti-slop | Hallmark · Taste Skill · Stop Slop |
| MCP | Hermes · NotebookLM MCP · Firecrawl · AstrBot |
| Skill/prompt | prompts.chat · Prompt Optimizer · CLI-Anything · Ponytail · slavingia/skills |
| Local LLM | Cake · LocalAI · exo · AirLLM · Unsloth |
| STT | faster-whisper · FunASR · Voicebox |
| TTS/clone | Voicebox · VieNeu-TTS · CosyVoice · VoxCPM |
| Video gen | ComfyUI · OpenMontage · LivePortrait · Toonflow |
| Watch / multimodal | Claude Video |
| Browser agent | Midscene · Stagehand · Browser Use · Page Agent |
| PDF/OCR | Stirling-PDF · MinerU · MarkItDown · STranslate |
| Security | Strix · Magika · System Informer · AGT |
| Notify | ntfy · TREK · Horizon · zca-bridge |
| Việt Nam | VieNeu-TTS · Vit5 · vietnamese-provinces · PhapDien |
