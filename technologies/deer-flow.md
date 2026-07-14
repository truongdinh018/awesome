# DeerFlow

> **Repo:** [bytedance/deer-flow](https://github.com/bytedance/deer-flow)  
> **Category:** MCP & AI Agents · Long-horizon SuperAgent harness  
> **Tags:** `agent` · `skill` · `coding-agent` · `self-host` · `workflow` · `mcp` · `cli`  
> **Ngôn ngữ:** Python · Node/TS · LangGraph · **⭐** ~77k · **License:** MIT  
> Site: [deerflow.tech](https://deerflow.tech)

## Đây là gì?

**DeerFlow** (*Deep Exploration and Efficient Research Flow*) — OSS **super agent harness** (ByteDance): research · code · create trên task dài (phút→giờ). Orchestrate **sub-agents**, **memory**, **sandbox**, **skills/tools**, message gateway (IM), MCP. **v2.0** rewrite (LangGraph); nhánh 1.x = deep-research cũ.

**Cùng kiểu:** [Hermes](hermes-agent.md) (personal gateway + skills), [OpenHands](openhands.md) (coding sandbox), [OpenSpace](openspace.md) (skill evolve hub), [EpicStaff](epicstaff.md) / [Atomic Agents](atomic-agents.md).

## Dùng khi nào?

| Nhu cầu | DeerFlow |
|---------|----------|
| Long-horizon research + code + sandbox | ✅ primary |
| Self-host SuperAgent + skills/MCP/IM | ✅ |
| Personal messaging agent nhẹ | → [Hermes](hermes-agent.md) |
| Git-centric coding platform | → [OpenHands](openhands.md) |
| Chỉ evolve/share skills | → [OpenSpace](openspace.md) |

⚠️ Deploy có sandbox/shell — đọc **Security Notice** upstream; không expose public không auth.

## Chạy thử

```bash
git clone https://github.com/bytedance/deer-flow.git
cd deer-flow
make setup          # config
make doctor         # verify
make docker-init && make docker-start   # Docker (recommended)
# hoặc local: make install && make setup-sandbox && make dev
```

Model gợi ý: Doubao-Seed-2.0-Code · DeepSeek v3.2 · Kimi 2.5 (Volcengine coding plan). Docs: [Install.md](https://github.com/bytedance/deer-flow/blob/main/Install.md).

## So với tool khác

| | DeerFlow | Hermes | OpenHands |
|--|----------|--------|-----------|
| Shape | SuperAgent harness (research+code+sandbox) | Personal agent + gateway | Dev team coding platform |
| Stack | LangGraph · skills · MCP | Skills · messaging | Sandbox · git |
| Stars | ~77k | ~214k | (catalog) |

## Dùng với Odoo / ai_core

- Lab research/codegen dài trên monorepo — sandbox tách môi trường.  
- Không thay Odoo business agents; giữ secrets ngoài config commit.

## Link

- Repo: https://github.com/bytedance/deer-flow · Site: https://deerflow.tech  
- Peers: [hermes-agent.md](hermes-agent.md) · [openhands.md](openhands.md) · [openspace.md](openspace.md) · [epicstaff.md](epicstaff.md) · [atomic-agents.md](atomic-agents.md) · [surfsense.md](surfsense.md)
