# Draw.io (CLI-Anything harness)

> **Parent:** [CLI-Anything](../cli-anything.md)  
> **Domain:** DevTools & Integration · Diagram  
> **Type:** Agent-native CLI harness  
> **Path:** [`drawio/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/drawio/agent-harness)

## Tổng quan

Harness **diagrams.net / Draw.io**: agent sinh sơ đồ (vd. HTTPS handshake) bằng CLI — shape, connect, export — không kéo thả tay.

## Agent làm gì được

- Tạo diagram XML / file `.drawio`  
- Thêm node, edge, layout  
- Export PNG/SVG cho doc  

## Quan hệ catalog

| | Vai trò |
|--|---------|
| **Cha** | CLI-Anything |
| **Domain** | DevTools — artifact kỹ thuật (cùng tinh thần Google Workspace CLI / n8n) |
| **Use case Odoo** | Sequence diagram luồng approval / MCP trước khi viết spec |

## Link

- Upstream: https://github.com/jgraph/drawio  
- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/drawio/agent-harness
