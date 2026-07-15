# Tags — chú giải & “dùng để làm gì”

> Tag = **capability** (làm được gì). Domain/Primary = chỗ xếp folder.  
> **Duyệt theo nhu cầu tiếng Việt:** [USE-CASES.md](USE-CASES.md)  
> Subgroup domain: [categories/README.md](categories/README.md) · Star `#`: [repos/README.md](repos/README.md)

## Cách đọc bảng

| Cột | Ý nghĩa |
|-----|---------|
| Tag | Giá trị trong metadata bài / cột Tags của `repos/` |
| Dùng để | Việc thực tế bạn đang cần |
| Không phải | Tránh nhầm với capability gần |

---

## Agent · tri thức · MCP

| Tag | Dùng để | Không phải |
|-----|---------|------------|
| `mcp` | Gắn tool/API vào Cursor/Claude qua MCP | Agent tự suy luận端到端 |
| `agent` | Runtime/orchestrator agent hoặc bot đa kênh | Chỉ một skill/prompt lẻ |
| `coding-agent` | Agent chuyên viết/sửa code, PR, repo | Bot chat support thuần |
| `rag` | Hỏi đáp / truy vấn trên tài liệu đã ingest | Fine-tune model |
| `extract` | Cào web / extract → markdown·JSON·graph | RAG UI hoàn chỉnh |
| `prompt` | Thư viện / tối ưu prompt | Runtime agent |
| `skill` | Gói `SKILL.md` hướng dẫn agent làm việc | MCP server |
| `cli` | Dùng chủ yếu bằng dòng lệnh | Bắt buộc phải có GUI |
| `harness` | Harness CLI-Anything điều khiển 1 app | Agent framework đầy đủ |
| `guardrail` | Chặn lệnh nguy hiểm / governance | Antivirus máy chủ |
| `workflow` | Nối nhiều bước tự động (pipeline) | Một lệnh CLI đơn |

---

## Speech · media

| Tag | Dùng để | Không phải |
|-----|---------|------------|
| `stt` | Nghe nói → chữ (họp, phụ đề) | TTS |
| `tts` | Chữ → tiếng nói | STT |
| `voice-clone` | Nhân bản / giữ tembre giọng | Chỉ TTS giọng mặc định |
| `watermark` | Đánh dấu / phát hiện watermark AI | DRM Netflix |
| `image-gen` | Sinh ảnh (diffusion / studio) | Chỉ edit ảnh thủ công |
| `video` | Pipeline video (gen, edit, tải, stream) | Chỉ audio |
| `ui-to-code` | Screenshot/URL → code giao diện | Browser automation click |
| `3d` / `cad` / `game` | 3D, CAD, hoặc điều khiển game engine | Video 2D thuần |

---

## Automation · edge · docs · ops

| Tag | Dùng để | Không phải |
|-----|---------|------------|
| `ui-automation` | Điều khiển UI (thường browser) | MCP lấy dữ liệu thuần |
| `computer-use` | Agent nhìn màn hình / NL→hành động | Script Selenium cố định |
| `browser` | Thao tác hoặc capture trong trình duyệt | App desktop native |
| `dom` | Làm việc trên DOM (capture/agent) | Screenshot-only vision |
| `cv` | Thị giác máy: detect/recognize | Gen ảnh artistic |
| `edge` / `iot` | Chạy trên thiết bị biên / IoT | Cloud GPU lớn |
| `pdf` / `ocr` | PDF và nhận dạng chữ trong ảnh/PDF | Word/Excel thuần |
| `office` | Word/Excel/Slide / Workspace office | Chỉ PDF merge |
| `notification` | Push/alert/bridge tin nhắn | Email marketing |
| `workspace` | Môi trường làm việc / productivity shell | Inference LLM |
| `dataset` | Corpus / dataset train-eval | Vector DB production |
| `diagram` | Vẽ/sửa sơ đồ (draw.io…) | Whiteboard realtime |
| `gis` | Bản đồ / GIS / định vị | CV thuần |
| `security` / `pentest` | AppSec, pentest, scan rủi ro | Backup/restore |
| `self-host` | Tự host trên máy/VPS của bạn | Chỉ SaaS closed |
| `desktop` | Có app desktop (hoặc UX desktop-first) | Chỉ API server |
| `api` | Expose HTTP/API để hệ khác gọi | Chỉ GUI không API |

---

## Điểm neo nhanh

> Vài tool tiêu biểu — catalog đầy đủ theo nhu cầu → [USE-CASES.md](USE-CASES.md).

| Nhu cầu | Điểm neo |
|---------|----------|
| RAG | RAGFlow · WeKnora · AnythingLLM · PageIndex |
| Extract/crawl | Firecrawl · Crawl4AI · Scrapling · Hyper-Extract |
| Coding agent | OpenHands · CodeWhale · Paseo · Nezha · Spec Kit |
| MCP | Hermes · NotebookLM MCP · Firecrawl · AstrBot |
| Skill/prompt | prompts.chat · Prompt Optimizer · CLI-Anything · Ponytail |
| STT | faster-whisper · FunASR · Voicebox |
| TTS/clone | Voicebox · VieNeu-TTS · CosyVoice · VoxCPM |
| Video gen | ComfyUI · OpenMontage · LivePortrait · Toonflow |
| Browser agent | Midscene · Stagehand · Browser Use · Page Agent |
| PDF/OCR | Stirling-PDF · MinerU · MarkItDown · STranslate |
| Security | Strix · Magika · System Informer · AGT |
| Notify | ntfy · TREK · Horizon · zca-bridge |
