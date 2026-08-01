/**
 * Build a short Vietnamese description for trending repos.
 * Known catalog entries reuse excerpt; new repos get a generated summary.
 */

const TOPIC_LABELS = {
  'ai-agents': 'agent AI',
  'llm': 'LLM',
  'mcp': 'MCP',
  'rag': 'RAG',
  'self-hosted': 'self-host',
  'workflow': 'workflow',
  'automation': 'tự động hóa',
  'generative-ai': 'AI sinh tạo',
  'machine-learning': 'machine learning',
  'deep-learning': 'deep learning',
  'computer-vision': 'computer vision',
  'nlp': 'NLP',
  'tts': 'TTS',
  'stt': 'STT',
  'image-generation': 'sinh ảnh',
  'video': 'video',
  'browser': 'trình duyệt',
  'cli': 'CLI',
  'docker': 'Docker',
  'kubernetes': 'Kubernetes',
  'observability': 'quan sát hệ thống',
  'monitoring': 'giám sát',
  'ocr': 'OCR',
  'fine-tuning': 'fine-tune',
  'inference': 'inference',
  'low-code': 'low-code',
  'no-code': 'no-code',
}

const PHRASE_PATTERNS = [
  [/workflow automation/i, 'nền tảng tự động hóa workflow'],
  [/open[- ]source machine learning framework/i, 'framework machine learning mã nguồn mở'],
  [/machine learning framework/i, 'framework machine learning'],
  [/agent engineering platform/i, 'nền tảng xây dựng agent'],
  [/agent harness/i, 'hệ thống tối ưu agent harness'],
  [/model-definition framework/i, 'framework định nghĩa model'],
  [/inference and serving engine/i, 'engine inference & serving'],
  [/fine-?tun(e|ing)/i, 'fine-tune model'],
  [/web scraping|crawl/i, 'crawl & scrape web'],
  [/observability/i, 'quan sát full-stack'],
  [/ocr engine/i, 'engine OCR mã nguồn mở'],
  [/data platform/i, 'nền tảng dữ liệu'],
  [/user-friendly ai interface/i, 'giao diện AI thân thiện'],
  [/build agentic workflows/i, 'xây workflow agentic & RAG'],
  [/deploying ai-powered agents/i, 'triển khai agent & workflow AI'],
  [/accessible ai for everyone/i, 'AI dễ tiếp cận cho mọi người'],
  [/collection of mcp servers/i, 'tổng hợp MCP server'],
  [/cross-platform desktop/i, 'ứng dụng desktop đa nền tảng'],
  [/real-time global intelligence/i, 'dashboard tình báo toàn cầu thời gian thực'],
  [/open-source claude design/i, 'bản mở thay thế Claude Design'],
  [/generative ai for beginners/i, 'khóa học generative AI cho người mới'],
  [/machine learning for all/i, 'khóa học machine learning cho mọi người'],
  [/chatgpt-like llm/i, 'LLM kiểu ChatGPT'],
  [/tensors and dynamic neural networks/i, 'tensor & mạng neural động'],
  [/get up and running with/i, 'chạy local các model'],
]

const WORD_MAP = new Map(
  Object.entries({
    powerful: 'mạnh',
    platform: 'nền tảng',
    tool: 'công cụ',
    framework: 'framework',
    library: 'thư viện',
    engine: 'engine',
    system: 'hệ thống',
    open: 'mã nguồn mở',
    source: 'nguồn',
    native: 'tích hợp sẵn',
    capabilities: 'khả năng',
    visual: 'kéo-thả',
    building: 'xây dựng',
    custom: 'tùy chỉnh',
    code: 'code',
    cloud: 'cloud',
    integrations: 'tích hợp',
    agents: 'agent',
    workflows: 'workflow',
    pipeline: 'pipeline',
    training: 'huấn luyện',
    inference: 'inference',
    serving: 'serving',
    model: 'model',
    models: 'model',
    everyone: 'mọi người',
    beginners: 'người mới',
    lessons: 'bài học',
    research: 'nghiên cứu',
    development: 'phát triển',
    security: 'bảo mật',
    memory: 'bộ nhớ',
    skills: 'skill',
    desktop: 'desktop',
    local: 'local',
    first: 'ưu tiên local',
    alternative: 'thay thế',
    dashboard: 'dashboard',
    monitoring: 'giám sát',
    tracking: 'theo dõi',
    powered: 'dùng AI',
    intelligence: 'tình báo',
    automation: 'tự động hóa',
    combine: 'kết hợp',
    support: 'hỗ trợ',
    deploy: 'triển khai',
    self: 'self',
    host: 'host',
    hosted: 'host',
    fastest: 'nhanh nhất',
    path: 'cách',
    full: 'full',
    stack: 'stack',
    teams: 'team',
    lean: 'nhỏ gọn',
    state: 'state-of-the-art',
    art: '',
    text: 'text',
    vision: 'vision',
    audio: 'audio',
    multimodal: 'đa phương thức',
  }),
)

function shortName(fullName) {
  return fullName.split('/').pop() ?? fullName
}

function topicHint(topics) {
  const labels = []
  for (const t of topics ?? []) {
    const label = TOPIC_LABELS[t]
    if (label && !labels.includes(label)) labels.push(label)
    if (labels.length >= 3) break
  }
  return labels.length ? labels.join(', ') : ''
}

function softenEnglish(text) {
  return text
    .replace(/🤗|🎨|🖥️|🖼️|🤯|🤖|✅|⭐|📦|🔥/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function guessKind(description, topics) {
  const d = description.toLowerCase()
  const topicSet = new Set((topics ?? []).map((t) => t.toLowerCase()))

  for (const [re, label] of PHRASE_PATTERNS) {
    if (re.test(description)) return label
  }

  if (topicSet.has('mcp')) return 'dự án MCP / agent'
  if (topicSet.has('llm') || topicSet.has('generative-ai')) return 'dự án LLM / AI sinh tạo'
  if (topicSet.has('machine-learning') || topicSet.has('deep-learning')) {
    return 'dự án machine learning'
  }
  if (topicSet.has('workflow') || topicSet.has('automation')) {
    return 'công cụ tự động hóa workflow'
  }
  if (topicSet.has('ocr')) return 'công cụ OCR'
  if (topicSet.has('monitoring') || topicSet.has('observability')) {
    return 'công cụ quan sát & giám sát'
  }
  if (/framework/i.test(d)) return 'framework'
  if (/platform/i.test(d)) return 'nền tảng'
  if (/library/i.test(d)) return 'thư viện'
  if (/tool/i.test(d)) return 'công cụ'
  if (/engine/i.test(d)) return 'engine'
  return 'repo AI'
}

function summarizeEnglish(description) {
  const clean = softenEnglish(description)
  if (!clean) return ''

  const words = clean
    .replace(/[()[\]{}]/g, ' ')
    .split(/[\s,.;:!?/–—-]+/)
    .map((w) => w.trim())
    .filter(Boolean)

  const viBits = []
  for (const word of words.slice(0, 18)) {
    const lower = word.toLowerCase()
    if (WORD_MAP.has(lower)) {
      const mapped = WORD_MAP.get(lower)
      if (mapped) viBits.push(mapped)
    } else if (/^[A-Z][a-zA-Z0-9+.-]{1,}$/.test(word)) {
      viBits.push(word)
    } else if (/^[a-z]{3,}$/.test(word) && word.length <= 8) {
      viBits.push(word)
    }
  }

  const compact = [...new Set(viBits)].join(' ').trim()
  if (compact.length >= 12) return compact

  const clipped = clean.length > 140 ? `${clean.slice(0, 137).trim()}…` : clean
  return clipped
}

/**
 * @param {{ full_name?: string, fullName?: string, description?: string, topics?: string[], language?: string }} repo
 * @param {{ excerpt?: string | null, title?: string | null } | null | undefined} catalog
 */
export function describeTrendingVi(repo, catalog) {
  if (catalog?.excerpt?.trim()) return catalog.excerpt.trim()

  const fullName = repo.full_name ?? repo.fullName ?? ''
  const name = shortName(fullName)
  const description = softenEnglish(repo.description ?? '')
  const topics = repo.topics ?? []
  const hint = topicHint(topics)
  const kind = guessKind(description, topics)
  const hintSuffix = hint ? ` (${hint})` : ''

  if (!description) {
    return hint
      ? `${name} là ${kind} trên GitHub${hintSuffix}.`
      : `${name} là ${kind} đang trending trên GitHub.`
  }

  for (const [re, label] of PHRASE_PATTERNS) {
    if (re.test(description)) {
      return `${name} là ${label}${hintSuffix}.`
    }
  }

  const detail = summarizeEnglish(description)
  let out = `${name} là ${kind}`
  if (hint) out += hintSuffix
  out += ` — ${detail}`
  if (!out.endsWith('.')) out += '.'
  return out
}
