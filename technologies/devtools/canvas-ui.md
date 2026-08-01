# Canvas UI

> **Repo:** [DavidHDev/canvas-ui](https://github.com/DavidHDev/canvas-ui)  
> **Category:** DevTools · Creative canvas component library (WebGL / HTML-in-canvas)  
> **Tags:** `browser` · `design` · `mcp` · `cli`  
> **Ngôn ngữ:** TypeScript · **⭐** ~2.8k · **License:** MIT + Commons Clause  
> Site: [canvasui.dev](https://canvasui.dev)

## Đây là gì?

**Canvas UI** là thư viện component **creative coding** cho frontend: hiệu ứng fluid, shader, glass, fire, particle… chạy **trên live HTML** — text vẫn select được, link vẫn click được. Dùng experimental [HTML-in-canvas](https://chromestatus.com/feature/5172548013916160) API (Chrome) hoặc fallback WebGL overlay.

Framework-agnostic: mỗi component có bản **React, Solid, Preact, Vue, Svelte, vanilla**. Cài qua **shadcn-compatible registry** (`npx shadcn@latest add @canvas-ui/liquid-react`) — source copy vào repo, không phải black-box npm. **MCP ready**: agent (Cursor, Claude Code…) browse và cài component qua registry.

33+ components: Liquid, Glass, Shatter, Force Field, Decrypt Reveal, VHS, Particle Scroll…

**Cùng kiểu:** [SnapDOM](snapdom.md) (DOM→image), [Swup](swup.md) (page transition), [Hallmark](../mcp-ai-agents/hallmark.md) (design skill anti-slop).

## Dùng khi nào?

| Nhu cầu | Canvas UI |
|---------|-----------|
| Landing / hero có hiệu ứng WebGL nhưng giữ HTML tương tác | ✅ |
| Copy component vào Next.js / React / Vue (shadcn CLI) | ✅ |
| Agent cài component qua MCP + shadcn | ✅ |
| Chụp DOM → PNG export | → [SnapDOM](snapdom.md) |
| Skill thiết kế UI anti-AI-slop cho agent | → [Hallmark](../mcp-ai-agents/hallmark.md) |
| Browser automation / computer-use | → [Midscene](../ui-automation/midscene.md) |

## Chạy thử

```bash
# Cần shadcn init trước (nếu chưa)
npx shadcn@latest init

# Thêm component — đổi liquid → glass, blaze…; react → vue, svelte, vanilla…
npx shadcn@latest add @canvas-ui/liquid-react
```

```tsx
import { Liquid } from "@/components/canvasui/Liquid";

export default function Page() {
  return (
    <Liquid>
      <YourEntirePage />
    </Liquid>
  );
}
```

- Playground: [canvasui.dev/playground](https://canvasui.dev/playground)  
- MCP: `npx shadcn@latest mcp init --client claude` → hỏi agent *"add the Liquid component from Canvas UI"*  
- HTML-in-canvas: Chrome cần flag `chrome://flags/#canvas-draw-element` hoặc origin trial — xem [docs](https://canvasui.dev/docs/installation)

## So với tool khác

| | Canvas UI | SnapDOM | Hallmark |
|--|-----------|---------|----------|
| Mục đích | Hiệu ứng canvas trên live UI | DOM capture → ảnh | Design skill cho agent |
| Cài đặt | shadcn registry copy | npm `@zumer/snapdom` | skill file |
| MCP | ✅ registry browse/install | ❌ | ❌ (skill) |
| Tags | `browser` `design` `mcp` `cli` | `browser` `dom` | `skill` `design` |

## Dùng với Odoo / ai_core

- Landing page / portal PWA: bọc hero section bằng Liquid/Glass — HTML Odoo gateway vẫn tương tác bình thường.  
- Coding agent (Cursor) cài component qua MCP khi build marketing site nội bộ.  
- Không thay OWL widget — dùng ở layer frontend marketing/static, không embed vào backend Odoo.

## Link

- Repo: https://github.com/DavidHDev/canvas-ui  
- Docs: https://canvasui.dev/docs · Components: https://canvasui.dev/docs/components  
- Peers: [snapdom.md](snapdom.md) · [swup.md](swup.md) · [hallmark.md](../mcp-ai-agents/hallmark.md)
