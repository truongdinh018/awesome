# Slay the Spire II (CLI-Anything harness)

> **Parent:** [CLI-Anything](../cli-anything.md)  
> **Domain:** UI Automation & Computer Use · Game  
> **Tags:** `harness` · `ui-automation` · `game` · `cli`  
> **Type:** Agent-native CLI harness  
> **Path:** [`slay_the_spire_ii`](https://github.com/HKUDS/CLI-Anything/tree/main/slay_the_spire_ii)

## Đây là gì?

Harness **game automation** cho Slay the Spire II: agent chơi / thao tác game qua CLI (deck, combat).

Minh họa computer-use kiểu **lệnh có cấu trúc** thay vì vision click. Demo biên giới agent-native — không phải stack production Odoo.

**Cùng kiểu:** [Midscene](../midscene.md) (vision UI — harness này = CLI game API), [CLI-Anything](../cli-anything.md) (cha).

## Dùng khi nào?

| Nhu cầu | Slay the Spire harness |
|---------|------------------------|
| Demo agent autonomy + trajectory | ✅ |
| Điều khiển run / combat qua command surface | ✅ |
| Production UI automation web | → [Stagehand](../stagehand.md) / [Midscene](../midscene.md) |

## Chạy thử

```bash
# Path: https://github.com/HKUDS/CLI-Anything/tree/main/slay_the_spire_ii
# Xem README harness + CLI-Anything docs
```

## So với tool khác

| | Slay harness | Midscene | Stagehand |
|--|--------------|----------|-----------|
| Surface | Game CLI API | Vision screenshot | Browser NL+code |
| Mục đích | Demo agent-native | Production UI | Production web |
| Tags | `harness` `game` `cli` | `computer-use` `skill` | `ui-automation` `browser` |

## Dùng với Odoo / ai_core

- Demo biên giới agent — không gắn ERP.  
- Pattern tham khảo: command surface thay vision khi app hỗ trợ CLI.  
- Không dùng production.

## Link

- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/slay_the_spire_ii  
- So sánh: [midscene.md](../midscene.md)  
- Cha: [cli-anything.md](../cli-anything.md)
