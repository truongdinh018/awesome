# Draw.io (CLI-Anything harness)

> **Parent:** [CLI-Anything](../cli-anything.md)  
> **Domain:** DevTools & Integration · Diagram  
> **Tags:** `harness` · `diagram` · `cli`  
> **Type:** Agent-native CLI harness  
> **Path:** [`drawio/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/drawio/agent-harness)

## Đây là gì?

Harness **diagrams.net / Draw.io**: agent sinh sơ đồ (vd. HTTPS handshake) bằng CLI — shape, connect, export — không kéo thả tay.

Là con của CLI-Anything — artifact kỹ thuật. Cùng domain với [drawio-skill ★](../drawio-skill.md) (Agent Skill NL→Draw.io, không qua CLI-Hub).

**Cùng kiểu:** [drawio-skill](../drawio-skill.md) (skill), [n8n harness](n8n.md) (workflow artifact), [CLI-Anything](../cli-anything.md) (cha).

## Dùng khi nào?

| Nhu cầu | Draw.io harness |
|---------|-----------------|
| Agent tạo diagram XML / file `.drawio` | ✅ |
| Thêm node, edge, layout | ✅ |
| Export PNG/SVG cho doc | ✅ |
| NL→diagram qua skill (không CLI-Hub) | → [drawio-skill](../drawio-skill.md) |

## Chạy thử

```bash
# Harness: https://github.com/HKUDS/CLI-Anything/tree/main/drawio/agent-harness
# Upstream: https://github.com/jgraph/drawio
```

## So với tool khác

| | Draw.io harness | drawio-skill ★ | Mermaid (inline) |
|--|-----------------|----------------|------------------|
| Cách | Agent CLI | Agent Skill NL | Markdown embed |
| Output | .drawio / PNG / SVG | .drawio | SVG inline |
| Tags | `harness` `diagram` `cli` | `skill` `diagram` | docs |

## Dùng với Odoo / ai_core

- Sequence diagram luồng approval / MCP trước khi viết spec.  
- Export PNG attach vào `ir.attachment` / wiki nội bộ.  
- Agent architecture doc cho module Odoo mới.

## Link

- Upstream: https://github.com/jgraph/drawio  
- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/drawio/agent-harness  
- Skill ★: [../drawio-skill.md](../drawio-skill.md)
