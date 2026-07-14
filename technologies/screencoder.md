# ScreenCoder

> **Repo:** [leigest519/ScreenCoder](https://github.com/leigest519/ScreenCoder)  
> **Category:** Image & Video Generation  
> **Tags:** `ui-to-code`  
> **Ngôn ngữ:** Python · **⭐** ~2.8k

## Đây là gì?

**ScreenCoder** chuyển **screenshot giao diện UI** thành **HTML/CSS sạch, có thể chỉnh sửa**.

Input: ảnh chụp màn hình app/web. Output: HTML + CSS tương đối chính xác layout. Mục tiêu: **nhanh**, **chính xác**, **dễ customize**.

Component **logic** (JS, OWL) không tự sinh — chỉ markup/style. Responsive cần chỉnh tay.

**Cùng kiểu:** [AI Website Cloner](ai-website-cloner.md), [ComfyUI](comfyui.md) (sinh ảnh mockup)

## Dùng khi nào?

| Nhu cầu | ScreenCoder |
|---------|-------------|
| Prototype nhanh screenshot → code starter | ✅ |
| Reverse UI học layout (tuân thủ bản quyền) | ✅ |
| Screenshot form Odoo → template OWL/HTML tham khảo | ✅ |
| URL live → Next.js bằng coding agent | → [AI Website Cloner](ai-website-cloner.md) |
| Prompt text → full app | → v0 / bolt.new |

## Chạy thử

```bash
git clone https://github.com/leigest519/ScreenCoder.git
# xem README repo cho setup Python và model requirements
```

Pipeline: UI Screenshot → vision model + layout analysis → HTML structure + CSS → developer chỉnh sửa → deploy.

## So với tool khác

| | ScreenCoder | v0 / bolt.new | AI Website Cloner |
|--|-------------|---------------|-------------------|
| Input chính | Screenshot | Prompt text | URL live |
| Local | Có thể self-host | Cloud | Agent-driven |
| Pixel fidelity | Cao (mục tiêu) | Trung bình | Sâu hơn screenshot→HTML |

## Dùng với Odoo / ai_core

- Tool MCP: `screenshot_to_html` → dev paste vào QWeb/OWL scaffold.  
- Bổ sung **ComfyUI** (sinh ảnh mockup) → **ScreenCoder** (ảnh → code).  
- Design system (Odoo Bootstrap) cần map thủ công.

## Link

- Repo: https://github.com/leigest519/ScreenCoder  
- Peers: [ai-website-cloner.md](ai-website-cloner.md) · [comfyui.md](comfyui.md)
