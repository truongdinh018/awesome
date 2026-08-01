import { describeTrendingVi } from './describe-trending-vi.mjs'

function formatStars(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`
  return String(n)
}

function useCases(repo, meta) {
  const rows = []
  const desc = `${repo.description ?? ''} ${(repo.topics ?? []).join(' ')}`.toLowerCase()

  if (meta.tags.includes('mcp')) rows.push(['Gắn tool qua MCP', '✅'])
  if (meta.tags.includes('rag')) rows.push(['Hỏi đáp trên tài liệu / RAG', '✅'])
  if (meta.tags.includes('workflow')) rows.push(['Tự động hóa workflow nhiều bước', '✅'])
  if (meta.tags.includes('coding-agent')) rows.push(['Agent viết/sửa code', '✅'])
  if (meta.tags.includes('self-host')) rows.push(['Self-host / on-prem', '✅'])
  if (desc.includes('local') || desc.includes('ollama')) rows.push(['Chạy model local', '✅'])
  if (meta.tags.includes('ocr')) rows.push(['OCR / đọc tài liệu', '✅'])
  if (meta.tags.includes('browser')) rows.push(['Tự động hóa trình duyệt', '✅'])
  if (meta.tags.includes('tts') || meta.tags.includes('stt')) rows.push(['Giọng nói / speech', '✅'])
  if (meta.tags.includes('image-gen') || desc.includes('image')) rows.push(['Sinh / xử lý ảnh', '✅'])
  if (desc.includes('monitor') || meta.tags.includes('observability')) {
    rows.push(['Giám sát hệ thống / observability', '✅'])
  }
  if (desc.includes('course') || desc.includes('lesson') || desc.includes('beginner')) {
    rows.push(['Học ML/AI từ số 0', '✅'])
  }

  if (rows.length === 0) {
    rows.push([`Khám phá / PoC ${meta.title}`, '✅'])
    rows.push(['Production ERP thay thế ai_core', '→ xem README upstream'])
  } else {
    rows.push(['Thay thế stack nội bộ chưa đánh giá', '→ đọc README repo trước'])
  }

  return rows
    .map(([need, ans]) => `| ${need} | ${ans} |`)
    .join('\n')
}

export function generateTrendingArticle(repo, meta, opts = {}) {
  const week = opts.week ?? 'trending'
  const license = opts.license ?? 'xem LICENSE repo'
  const homepage = opts.homepage ? ` · Site: ${opts.homepage}` : ''
  const descriptionVi = repo.descriptionVi || describeTrendingVi(repo, null)
  const stars = formatStars(repo.stars ?? 0)
  const lang = repo.language || '—'
  const tagLine = meta.tags.map((t) => `\`${t}\``).join(' · ')

  const whatParagraphs = [
    descriptionVi,
    repo.description && repo.description !== descriptionVi
      ? `Theo GitHub: ${repo.description.trim()}`
      : null,
    repo.highlights?.length
      ? `Điểm nổi bật tuần này: ${repo.highlights.join(' · ')}.`
      : null,
  ]
    .filter(Boolean)
    .join('\n\n')

  return `# ${meta.title}

> **Repo:** [${repo.fullName}](${repo.url})  
> **Category:** ${meta.domainLabel} · ${meta.subcategory}  
> **Tags:** ${tagLine}  
> **Ngôn ngữ:** ${lang} · **⭐** ~${stars} · **License:** ${license}${homepage}  
> **Trending:** tuần ${week} · bài khởi tạo tự động từ GitHub trending

## Đây là gì?

${whatParagraphs}

> Bài này được tạo tự động từ danh sách trending — nên bổ sung peer links và lệnh chạy thật sau khi đã thử.

## Dùng khi nào?

| Nhu cầu | ${meta.title} |
|---------|${'-'.repeat(meta.title.length)}|
${useCases(repo, meta)}

## Chạy thử

\`\`\`bash
# Clone repo và làm theo README upstream
git clone ${repo.url}.git
cd ${repo.fullName.split('/')[1]}
# xem README.md để cài dependency / docker compose
\`\`\`

## So với tool khác

| | ${meta.title} | Ghi chú |
|--|${'-'.repeat(meta.title.length)}|---------|
| Trọng tâm | ${meta.subcategory} | Theo mô tả GitHub + topic trending |
| Self-host | ${meta.tags.includes('self-host') ? '✅ có thể' : 'kiểm tra README'} | Chưa review chi tiết |
| Tích hợp MCP | ${meta.tags.includes('mcp') ? '✅' : '—'} | Xem docs repo |

## Dùng với Odoo / ai_core

- Tham khảo / PoC — chưa tích hợp sẵn vào \`ai_core\`.  
- Đọc README upstream và license trước khi deploy production.  
- Cập nhật bài này sau khi team đã thử trong stack nội bộ.

## Link

- Repo: ${repo.url}
`
}
