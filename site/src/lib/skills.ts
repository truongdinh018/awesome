export type SkillItem = {
  id: string
  slug: string
  path: string
  name: string
  title: string
  description: string
  category: string
  source: string
  tags: string[]
  excerpt: string
}

export type SkillIndex = {
  generatedAt: string
  count: number
  categories: string[]
  tags: string[]
  skills: SkillItem[]
}
