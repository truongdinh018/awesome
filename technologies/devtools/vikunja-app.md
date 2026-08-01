# Vikunja App

> **Repo:** [go-vikunja/app](https://github.com/go-vikunja/app)  
> **Category:** DevTools · Productivity · to-do client (Flutter)  
> **Tags:** `self-host` · `mobile` · `desktop` · `workspace`  
> **Ngôn ngữ:** Dart (Flutter) · **⭐** ~577 · **License:** MIT  
> Site: [vikunja.io](https://vikunja.io) · Backend: [go-vikunja/vikunja](https://github.com/go-vikunja/vikunja)

## Đây là gì?

**Vikunja App** là client **Flutter cross-platform** (Android / iOS / desktop / web) cho **Vikunja** — app to-do open-source, self-host được.

Bạn dùng app để tổ chức task, làm việc nhóm, xem project dạng list / Gantt / table / Kanban. Data nằm trên backend Vikunja bạn tự host (hoặc Vikunja Cloud) — privacy-first, không bị khóa vendor SaaS todo.

**Lưu ý:** app đang **alpha / pre-release** (vd. `0.1.8-beta`). Cần bản **stable** của server Vikunja. Không nên gắn backend production quan trọng nếu chưa chấp nhận rủi ro bug.

**Cùng kiểu:** [OpenTickly](opentickly.md) (time tracker self-host) · [Whisper Money](whisper-money.md) (finance self-host) · [PlainApp](plain-app.md) (Android hub) · [Vibe Kanban](../mcp-ai-agents/vibe-kanban.md) *(kanban cho coding agents — khác mục đích)*

## Dùng khi nào?

| Nhu cầu | Vikunja App |
|---------|-------------|
| App mobile/desktop gắn todo self-host (Vikunja) | ✅ |
| Kanban / Gantt / list trên dữ liệu bạn sở hữu | ✅ (qua API server) |
| Chỉ cần time tracker kiểu Toggl | → [OpenTickly](opentickly.md) |
| Kanban điều khiển coding agents | → [Vibe Kanban](../mcp-ai-agents/vibe-kanban.md) |
| Backend / API server Vikunja | → [go-vikunja/vikunja](https://github.com/go-vikunja/vikunja) (không phải repo app này) |

## Chạy thử

```bash
# Cài sẵn (khuyến nghị thử nhanh)
# - Google Play Beta: https://play.google.com/store/apps/details?id=io.vikunja.app
# - APK / build: https://dl.vikunja.io/app/  hoặc GitHub Releases (pre-release)
# Trong app: trỏ URL tới instance Vikunja stable của bạn

# Build từ source (cần Flutter SDK)
git clone https://github.com/go-vikunja/app.git
cd app
flutter pub get
flutter run          # debug trên device/emulator
# hoặc: make build-release   # APK release
```

Server tối thiểu: deploy [Vikunja](https://vikunja.io/docs/) (Docker/binary) bản stable, rồi đăng nhập từ app.

## So với tool khác

| | Vikunja App | OpenTickly | Vibe Kanban |
|--|-------------|------------|-------------|
| Shape | Flutter client cho Vikunja todo | Time tracker self-host | Kanban + coding agents |
| Mobile | ✅ (alpha) | Web/API-first | Không phải todo cá nhân |
| Data | Backend Vikunja bạn host | Instance riêng | Workspace agent |
| Trạng thái | Pre-release | Production-oriented | Production OSS |

## Dùng với Odoo / ai_core

- Board task cá nhân / team lab song song Odoo project — agent ghi chú tiến độ ngoài ERP.  
- Webhook / API Vikunja (server) có thể nối ntfy hoặc workflow khi task đổi trạng thái.  
- Đừng dùng bản alpha app làm nguồn sự thật duy nhất cho production Odoo nếu chưa backup backend.

## Link

- App: https://github.com/go-vikunja/app  
- Server: https://github.com/go-vikunja/vikunja · Docs: https://vikunja.io/docs/  
- Downloads: https://dl.vikunja.io/app/ · Play Beta: https://play.google.com/store/apps/details?id=io.vikunja.app  
- Peers: [opentickly.md](opentickly.md) · [whisper-money.md](whisper-money.md) · [plain-app.md](plain-app.md) · [ntfy.md](ntfy.md) · [vibe-kanban.md](../mcp-ai-agents/vibe-kanban.md)
