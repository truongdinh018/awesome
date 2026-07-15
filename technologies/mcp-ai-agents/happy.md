# Happy (Happy Coder)

> **Repo:** [slopus/happy](https://github.com/slopus/happy)  
> **Category:** MCP & AI Agents · Coding agent client (mobile/web)  
> **Tags:** `coding-agent` · `cli` · `agent` · `self-host` · `desktop`  
> **Ngôn ngữ:** TypeScript · Expo · **⭐** ~22.6k · **License:** MIT  
> **Site:** [happy.engineering](https://happy.engineering)

## Đây là gì?

**Happy** là client **mobile (iOS/Android) + web** cho **Claude Code** và **Codex**: CLI wrapper `happy claude` / `happy codex`, chuyển điều khiển máy ↔ điện thoại, push khi agent cần permission/lỗi, **E2E encryption**, open source (không telemetry theo mô tả). Có realtime voice; stack: App (Expo) · CLI · Agent CLI · Server sync.

Trong catalog: **remote control** coding agent — không thay [OpenHands](openhands.md) (self-host agent runtime) hay [Headroom](headroom.md) (MCP hub). Happy bọc Claude Code/Codex đã có trên máy.

**Cùng kiểu:** [OpenHands](openhands.md), [Headroom](headroom.md), [Hermes](hermes-agent.md).

## Dùng khi nào?

| Nhu cầu | Happy |
|---------|--------|
| Điều khiển Claude Code / Codex từ phone/web | ✅ |
| Push khi agent chờ permission | ✅ |
| E2E encrypt session sync | ✅ |
| Self-host full coding agent sandbox | → [OpenHands](openhands.md) |
| MCP / multi-tool desktop | → [Headroom](headroom.md) / [Hermes](hermes-agent.md) |

## Chạy thử

```bash
npm install -g happy
happy claude    # thay cho `claude`
happy codex     # thay cho `codex`
```

App Store / Google Play · Web app · docs trên site dự án.

## So với tool khác

| | Happy | OpenHands | Headroom |
|--|-------|-----------|----------|
| Shape | Mobile/web client + CLI wrap | Agent platform + canvas | MCP / coding tooling |
| Backend agent | Claude Code / Codex (đã cài) | OpenHands / ACP agents | Local tools |
| Tags | `coding-agent` `cli` `desktop` | `coding-agent` `agent` | `mcp` `coding-agent` |

## Dùng với Odoo / ai_core

- Dev theo dõi agent sửa module Odoo khi không ngồi bàn.  
- Self-host Happy Server nếu muốn sync nội bộ (audit PRIVACY.md / LICENSE).  
- Không thay `ai_agent_router` runtime trong Odoo.

## Link

- Repo: https://github.com/slopus/happy · Site: https://happy.engineering  
- Peers: [openhands.md](openhands.md) · [hermes-agent.md](hermes-agent.md) · [headroom.md](headroom.md) · [taste-skill.md](taste-skill.md)
