# Tab Harbor

> **Repo:** [V-IOLE-T/tab-harbor](https://github.com/V-IOLE-T/tab-harbor)  
> **Category:** DevTools · Chrome new-tab workspace  
> **Tags:** `browser` · `workspace` · `desktop`  
> **Ngôn ngữ:** JavaScript · CSS · HTML · Manifest V3 · **⭐** ~582 · **License:** MIT  
> Chrome Web Store / Releases: xem README repo

## Đây là gì?

**Tab Harbor** biến **New Tab** Chrome thành bàn làm việc yên hơn: xem tab đang mở (gom theo domain + nhóm thủ công), quick links, **saved sessions**, và drawer **todo** nhẹ — tất cả một trang, không backend / không account.

Dữ liệu nằm `chrome.storage.local`. Thêm sleep tab / group, xóa tab trùng một click, theme / nền tùy chỉnh. Không phải AI — là **extension quản lý tab + workspace**. Fork/cải tiến từ dự án open-source **tab-out** (xem Acknowledgements trên README).

**Cùng kiểu:** [FluentFlyout](fluent-flyout.md) / [CheatReader](cheatreader.md) (desktop UX), [Dashy](dashy.md) (homelab hub — khác nền), [React Scan](react-scan.md) (devtools React — khác miền), [Chrome DevTools MCP](../ui-automation/chrome-devtools-mcp.md) (agent ↔ Chrome).

## Dùng khi nào?

| Nhu cầu | Tab Harbor |
|---------|------------|
| New tab = bảng tab + session + todo | ✅ |
| Gom tab theo domain, sleep / dedupe | ✅ |
| 100% local, không sync cloud | ✅ |
| Homelab dashboard server | → [Dashy](dashy.md) |
| Agent điều khiển Chrome | → [Chrome DevTools MCP](../ui-automation/chrome-devtools-mcp.md) / [CloakBrowser](../ui-automation/cloakbrowser.md) |

## Chạy thử

```bash
git clone https://github.com/V-IOLE-T/tab-harbor.git
# chrome://extensions → Developer mode → Load unpacked → chọn thư mục extension/
# (Edge: có thể load từ repo root — xem README)
```

Hoặc cài từ [Chrome Web Store](https://chromewebstore.google.com/) (link trên README / Releases). Không cần `npm` / build.

## So với tool khác

| | Tab Harbor | Dashy | FluentFlyout |
|--|------------|-------|--------------|
| Niche | New-tab tab workspace | Self-host start page | Win11 media flyout |
| Tags | `browser` `workspace` | `self-host` | `desktop` `workspace` |

## Dùng với Odoo / ai_core

- Không tích hợp Odoo — chỉ tiện ích browser khi làm việc nhiều tab (Odoo backend, docs, GitHub…).  
- Privacy: dữ liệu tab/session ở máy local; phù hợp máy dev cá nhân.

## Link

- Repo: https://github.com/V-IOLE-T/tab-harbor  
- README ZH: [README.zh-CN.md](https://github.com/V-IOLE-T/tab-harbor/blob/main/README.zh-CN.md)  
- Peers: [fluent-flyout.md](fluent-flyout.md) · [cheatreader.md](cheatreader.md) · [dashy.md](dashy.md) · [react-scan.md](react-scan.md)
