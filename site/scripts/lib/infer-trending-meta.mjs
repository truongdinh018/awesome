const REPO_OVERRIDES = {
  'n8n-io/n8n': {
    domain: 'devtools',
    slug: 'n8n-workflow',
    subcategory: 'Workflow automation',
    tags: ['workflow', 'self-host', 'mcp', 'api', 'docker'],
  },
  'huggingface/transformers': {
    domain: 'devtools',
    slug: 'huggingface-transformers',
    subcategory: 'ML frameworks',
    tags: ['agent', 'api', 'cli'],
  },
  'snailclimb/javaguide': {
    domain: 'devtools',
    slug: 'javaguide',
    subcategory: 'Learning resources',
    tags: ['knowledge'],
  },
  'tensorflow/tensorflow': {
    domain: 'devtools',
    slug: 'tensorflow',
    subcategory: 'ML frameworks',
    tags: ['agent', 'api'],
  },
  'ollama/ollama': {
    domain: 'mcp-ai-agents',
    slug: 'ollama',
    subcategory: 'Local LLM runtime',
    tags: ['agent', 'cli', 'self-host', 'api'],
  },
  'vllm-project/vllm': {
    domain: 'devtools',
    slug: 'vllm',
    subcategory: 'Inference serving',
    tags: ['api', 'self-host', 'docker'],
  },
  'tesseract-ocr/tesseract': {
    domain: 'devtools',
    slug: 'tesseract',
    subcategory: 'OCR',
    tags: ['ocr', 'cli'],
  },
}

const DOMAIN_LABELS = {
  'mcp-ai-agents': 'MCP & AI Agents',
  'speech-audio': 'Speech & Audio',
  'image-video': 'Image & Video',
  'ui-automation': 'UI Automation',
  'cv-edge': 'CV & Edge',
  devtools: 'DevTools',
  security: 'Security',
}

const TOPIC_TAG_MAP = {
  mcp: 'mcp',
  'mcp-server': 'mcp',
  'mcp-client': 'mcp',
  'ai-agents': 'agent',
  agent: 'agent',
  agents: 'agent',
  llm: 'agent',
  rag: 'rag',
  workflow: 'workflow',
  'workflow-automation': 'workflow',
  automation: 'workflow',
  'self-hosted': 'self-host',
  'self-host': 'self-host',
  docker: 'docker',
  cli: 'cli',
  api: 'api',
  ocr: 'ocr',
  pdf: 'pdf',
  browser: 'browser',
  'computer-vision': 'cv',
  cv: 'cv',
  edge: 'edge',
  iot: 'iot',
  tts: 'tts',
  stt: 'stt',
  'voice-clone': 'voice-clone',
  'image-generation': 'image-gen',
  'generative-ai': 'agent',
  'coding-agent': 'coding-agent',
  'low-code': 'workflow',
  'no-code': 'workflow',
  monitoring: 'observability',
  observability: 'observability',
  security: 'security',
  pentest: 'security',
  inference: 'api',
  'fine-tuning': 'agent',
  kubernetes: 'docker',
  desktop: 'desktop',
  skill: 'skill',
  prompt: 'prompt',
  memory: 'memory',
  extract: 'extract',
  crawl: 'extract',
  video: 'video',
  'machine-learning': 'agent',
  'deep-learning': 'agent',
  nlp: 'agent',
}

const DOMAIN_SCORES = [
  {
    domain: 'security',
    topics: ['security', 'pentest', 'osint'],
    words: ['security', 'pentest', 'guardrail'],
  },
  {
    domain: 'speech-audio',
    topics: ['tts', 'stt', 'speech', 'audio', 'voice', 'whisper'],
    words: ['speech', 'voice', 'tts', 'stt', 'audio', 'whisper'],
  },
  {
    domain: 'image-video',
    topics: ['image', 'video', 'diffusion', 'comfyui', 'cad', '3d'],
    words: ['image', 'video', 'design', 'render', 'diffusion'],
  },
  {
    domain: 'ui-automation',
    topics: ['browser-automation', 'playwright', 'selenium', 'computer-use'],
    words: ['browser automation', 'computer use', 'ui automation', 'playwright'],
  },
  {
    domain: 'cv-edge',
    topics: ['computer-vision', 'opencv', 'edge', 'iot', 'embedded', 'esp32'],
    words: ['computer vision', 'edge', 'iot', 'embedded', 'opencv'],
  },
  {
    domain: 'mcp-ai-agents',
    topics: [
      'mcp',
      'agent',
      'ai-agents',
      'llm',
      'rag',
      'generative-ai',
      'langchain',
      'chatbot',
    ],
    words: ['agent', 'mcp', 'llm', 'rag', 'langchain', 'chatgpt', 'workflow agent'],
  },
]

function slugify(name) {
  return name
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}

function titleCase(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function inferTrendingMeta(repo) {
  const override = REPO_OVERRIDES[repo.fullName.toLowerCase()]
  const [, repoName] = repo.fullName.split('/')
  const topics = (repo.topics ?? []).map((t) => t.toLowerCase())
  const blob = `${repo.description ?? ''} ${topics.join(' ')}`.toLowerCase()

  let bestDomain = 'devtools'
  let bestScore = 0
  if (!override) {
    for (const rule of DOMAIN_SCORES) {
      let score = 0
      for (const t of rule.topics) {
        if (topics.includes(t)) score += 3
      }
      for (const w of rule.words) {
        if (blob.includes(w)) score += 2
      }
      if (score > bestScore) {
        bestScore = score
        bestDomain = rule.domain
      }
    }
  } else {
    bestDomain = override.domain
  }

  const tags = new Set(override?.tags ?? [])
  if (!override) {
    for (const topic of topics) {
      const tag = TOPIC_TAG_MAP[topic]
      if (tag) tags.add(tag)
    }
    if (tags.size === 0) tags.add('agent')
    if (repo.language && /typescript|javascript|python|rust|go|java/i.test(repo.language)) {
      tags.add('cli')
    }
    if ((repo.description ?? '').toLowerCase().includes('self-host')) tags.add('self-host')
  }

  const tagList = [...tags].slice(0, 6)
  const slug = override?.slug ?? slugify(repoName)
  const title = titleCase(repoName)
  const subcategory = override?.subcategory ?? inferSubcategory(bestDomain, repo, topics)

  return {
    domain: bestDomain,
    domainLabel: DOMAIN_LABELS[bestDomain] ?? bestDomain,
    slug,
    title,
    subcategory,
    tags: tagList,
    articlePath: `technologies/${bestDomain}/${slug}.md`,
  }
}

function inferSubcategory(domain, repo, topics) {
  const desc = (repo.description ?? '').toLowerCase()
  if (domain === 'mcp-ai-agents') {
    if (topics.includes('coding-agent') || desc.includes('coding')) return 'Coding agents'
    if (topics.includes('mcp')) return 'MCP & agents'
    if (topics.includes('rag')) return 'RAG & knowledge'
    return 'AI agents'
  }
  if (domain === 'devtools') {
    if (topics.includes('workflow') || desc.includes('workflow')) return 'Workflow & integration'
    if (topics.includes('ocr')) return 'OCR & documents'
    if (desc.includes('framework')) return 'Frameworks'
    if (desc.includes('course') || desc.includes('lesson') || desc.includes('beginner')) {
      return 'Learning resources'
    }
    return 'DevTools'
  }
  if (domain === 'speech-audio') return 'Speech & audio'
  if (domain === 'image-video') return 'Image & video'
  if (domain === 'ui-automation') return 'UI automation'
  if (domain === 'cv-edge') return 'Computer vision & edge'
  if (domain === 'security') return 'Security'
  return 'Tools'
}
