/** Tag taxonomy — capability labels for filter UI + docs sync with TAGS.md */

export type TagGroupId =
  | 'agent'
  | 'speech'
  | 'media'
  | 'automation'
  | 'docs'
  | 'ops'
  | 'domain'

export type TagDef = {
  id: string
  label: string
  hint: string
  group: TagGroupId
  /** Optional aliases people might type */
  aliases?: string[]
}

export const TAG_GROUPS: { id: TagGroupId; label: string; hue: number }[] = [
  { id: 'agent', label: 'Agent · MCP · Skill', hue: 168 },
  { id: 'speech', label: 'Speech · Voice', hue: 285 },
  { id: 'media', label: 'Ảnh · Video · Design', hue: 18 },
  { id: 'automation', label: 'Browser · Automation', hue: 210 },
  { id: 'docs', label: 'Docs · OCR · Office', hue: 42 },
  { id: 'ops', label: 'Deploy · Ops · Security', hue: 198 },
  { id: 'domain', label: 'Lĩnh vực · Ngôn ngữ', hue: 320 },
]

export const TAG_DEFS: TagDef[] = [
  // Agent · MCP · Skill
  { id: 'mcp', label: 'MCP', hint: 'Gắn tool/API qua MCP', group: 'agent' },
  { id: 'agent', label: 'Agent runtime', hint: 'Orchestrator / bot đa kênh', group: 'agent' },
  { id: 'coding-agent', label: 'Coding agent', hint: 'Viết/sửa code, PR, repo', group: 'agent' },
  { id: 'rag', label: 'RAG', hint: 'Hỏi đáp trên tài liệu đã ingest', group: 'agent' },
  { id: 'memory', label: 'Memory', hint: 'Nhớ dài hạn cho agent', group: 'agent' },
  { id: 'knowledge', label: 'Knowledge base', hint: 'Ghi chú / PKM / wiki cá nhân', group: 'agent' },
  { id: 'extract', label: 'Extract / crawl', hint: 'Cào web → markdown/JSON', group: 'agent', aliases: ['crawl'] },
  { id: 'prompt', label: 'Prompt', hint: 'Thư viện / tối ưu prompt', group: 'agent' },
  { id: 'skill', label: 'Skill', hint: 'Gói SKILL.md cho agent', group: 'agent' },
  { id: 'plugin', label: 'Plugin', hint: 'Marketplace / plugin agent', group: 'agent' },
  { id: 'harness', label: 'Harness', hint: 'CLI-Anything điều khiển 1 app', group: 'agent' },
  { id: 'guardrail', label: 'Guardrail', hint: 'Chặn lệnh nguy hiểm / governance', group: 'agent' },
  { id: 'workflow', label: 'Workflow', hint: 'Pipeline nhiều bước', group: 'agent' },
  { id: 'chatbot', label: 'Chatbot IM', hint: 'Bot trên Telegram/Discord/…', group: 'agent' },
  { id: 'eval', label: 'Eval / benchmark', hint: 'Đánh giá chất lượng model/agent', group: 'agent' },
  { id: 'observability', label: 'Observability', hint: 'Monitor session / hành vi agent', group: 'agent' },

  // Speech
  { id: 'stt', label: 'STT', hint: 'Speech → text', group: 'speech' },
  { id: 'tts', label: 'TTS', hint: 'Text → speech', group: 'speech' },
  { id: 'voice-clone', label: 'Voice clone', hint: 'Nhân bản tembre giọng', group: 'speech' },
  { id: 'realtime', label: 'Realtime voice', hint: 'Voice chat realtime', group: 'speech' },
  { id: 'subtitle', label: 'Subtitle', hint: 'Phụ đề / caption', group: 'speech' },
  { id: 'dubbing', label: 'Dubbing', hint: 'Lồng tiếng / dịch audio', group: 'speech' },

  // Media
  { id: 'image-gen', label: 'Image gen', hint: 'Sinh ảnh (diffusion…)', group: 'media' },
  { id: 'video', label: 'Video', hint: 'Gen / edit / tải / stream video', group: 'media' },
  { id: 'nle', label: 'NLE', hint: 'Timeline editor (non-linear)', group: 'media' },
  { id: 'multimodal', label: 'Multimodal', hint: 'Chữ + ảnh/video cùng lúc', group: 'media' },
  { id: 'ui-to-code', label: 'UI → code', hint: 'Screenshot/URL → giao diện', group: 'media' },
  { id: 'design', label: 'Design UI', hint: 'Skill thiết kế giao diện', group: 'media' },
  { id: 'anti-slop', label: 'Anti-slop', hint: 'Chống look/văn AI generic', group: 'media' },
  { id: 'watermark', label: 'Watermark', hint: 'Đánh dấu / detect watermark', group: 'media' },
  { id: '3d', label: '3D', hint: 'Đồ họa 3D / engine', group: 'media' },
  { id: 'cad', label: 'CAD', hint: 'CAD / kỹ thuật', group: 'media' },
  { id: 'game', label: 'Game', hint: 'Game engine / harness game', group: 'media' },

  // Automation
  { id: 'ui-automation', label: 'UI automation', hint: 'Điều khiển UI (browser…)', group: 'automation' },
  { id: 'computer-use', label: 'Computer use', hint: 'Agent nhìn màn hình → hành động', group: 'automation' },
  { id: 'browser', label: 'Browser', hint: 'Thao tác trong trình duyệt', group: 'automation' },
  { id: 'dom', label: 'DOM', hint: 'Làm việc trên DOM', group: 'automation' },
  { id: 'cv', label: 'Computer vision', hint: 'Detect / recognize ảnh', group: 'automation' },
  { id: 'edge', label: 'Edge', hint: 'Chạy trên thiết bị biên', group: 'automation' },
  { id: 'iot', label: 'IoT', hint: 'IoT / embedded', group: 'automation' },
  { id: 'mobile', label: 'Mobile', hint: 'App mobile / Android-iOS', group: 'automation' },

  // Docs
  { id: 'pdf', label: 'PDF', hint: 'Xử lý PDF', group: 'docs' },
  { id: 'ocr', label: 'OCR', hint: 'Nhận dạng chữ trong ảnh/PDF', group: 'docs' },
  { id: 'office', label: 'Office', hint: 'Word / Excel / Slide', group: 'docs' },
  { id: 'diagram', label: 'Diagram', hint: 'Sơ đồ (draw.io…)', group: 'docs' },
  { id: 'dataset', label: 'Dataset', hint: 'Corpus train / eval', group: 'docs' },
  { id: 'gis', label: 'GIS', hint: 'Bản đồ / định vị', group: 'docs' },

  // Ops
  { id: 'cli', label: 'CLI', hint: 'Dùng chủ yếu bằng dòng lệnh', group: 'ops' },
  { id: 'api', label: 'API', hint: 'Expose HTTP/API', group: 'ops' },
  { id: 'self-host', label: 'Self-host', hint: 'Tự host máy/VPS', group: 'ops' },
  { id: 'desktop', label: 'Desktop', hint: 'App desktop / UX desktop', group: 'ops' },
  { id: 'docker', label: 'Docker', hint: 'Deploy bằng Docker', group: 'ops' },
  { id: 'local-llm', label: 'Local LLM', hint: 'Chạy model local / inference', group: 'ops' },
  { id: 'gateway', label: 'LLM gateway', hint: 'Proxy / router API LLM', group: 'ops' },
  { id: 'finetune', label: 'Fine-tune', hint: 'Fine-tune / train adapter', group: 'ops' },
  { id: 'vector', label: 'Vector / embed', hint: 'Vector DB / embedding', group: 'ops' },
  { id: 'notification', label: 'Notification', hint: 'Push / alert / bridge tin', group: 'ops' },
  { id: 'workspace', label: 'Workspace', hint: 'Productivity shell / workspace', group: 'ops' },
  { id: 'security', label: 'Security', hint: 'AppSec / scan rủi ro', group: 'ops' },
  { id: 'pentest', label: 'Pentest', hint: 'Penetration testing', group: 'ops' },
  { id: 'batch', label: 'Batch', hint: 'Xử lý hàng loạt', group: 'ops' },
  { id: 'webhook', label: 'Webhook', hint: 'Webhook / callback HTTP', group: 'ops' },

  // Domain
  { id: 'vietnam', label: 'Tiếng Việt / VN', hint: 'Tối ưu tiếng Việt hoặc dữ liệu VN', group: 'domain' },
  { id: 'legal', label: 'Legal', hint: 'Pháp lý / văn bản luật', group: 'domain' },
  { id: 'finance', label: 'Finance', hint: 'Tài chính / kế toán', group: 'domain' },
  { id: 'trading', label: 'Trading', hint: 'Giao dịch / thị trường', group: 'domain' },
  { id: 'edu', label: 'Education', hint: 'Học tập / khóa học', group: 'domain' },
]

const BY_ID = new Map(TAG_DEFS.map((t) => [t.id, t]))

export function tagDef(id: string): TagDef | undefined {
  return BY_ID.get(id)
}

export function tagLabel(id: string): string {
  return BY_ID.get(id)?.label ?? id
}

export function tagHint(id: string): string {
  return BY_ID.get(id)?.hint ?? id
}

export function tagGroupHue(id: string): number {
  const def = BY_ID.get(id)
  if (!def) return 230
  return TAG_GROUPS.find((g) => g.id === def.group)?.hue ?? 230
}

/** Prefer taxonomy hue over hash for known tags */
export function taxonomyTagHue(id: string): number {
  return BY_ID.has(id) ? tagGroupHue(id) : hashHue(id)
}

function hashHue(tag: string): number {
  let h = 0
  for (let i = 0; i < tag.length; i++) {
    h = (h * 31 + tag.charCodeAt(i)) % 360
  }
  return h
}

export function groupTagsPresent(present: string[]): {
  group: (typeof TAG_GROUPS)[number]
  tags: string[]
}[] {
  const presentSet = new Set(present)
  const unknown = present.filter((t) => !BY_ID.has(t)).sort()
  const rows = TAG_GROUPS.map((group) => ({
    group,
    tags: TAG_DEFS.filter((t) => t.group === group.id && presentSet.has(t.id)).map(
      (t) => t.id,
    ),
  })).filter((row) => row.tags.length > 0)

  if (unknown.length > 0) {
    rows.push({
      group: { id: 'domain' as TagGroupId, label: 'Khác (chưa catalog)', hue: 230 },
      tags: unknown,
    })
  }
  return rows
}
