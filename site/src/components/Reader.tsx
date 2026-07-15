import { useMemo } from 'react'
import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'

type Props = {
  content: string
  currentPath: string | null
  onNavigate: (href: string) => void
}

const schema = {
  ...defaultSchema,
  tagNames: [
    ...(defaultSchema.tagNames ?? []),
    'div',
    'span',
    'img',
    'center',
    'br',
    'hr',
    'sup',
    'sub',
    'details',
    'summary',
  ],
  attributes: {
    ...defaultSchema.attributes,
    div: ['align', 'className', 'class', 'style'],
    span: ['className', 'class', 'style'],
    p: [...(defaultSchema.attributes?.p ?? []), 'align', 'className', 'class'],
    img: [
      'src',
      'alt',
      'title',
      'width',
      'height',
      'align',
      'className',
      'class',
    ],
    a: [...(defaultSchema.attributes?.a ?? []), 'className', 'class', 'name'],
    '*': ['className', 'class'],
  },
}

function stripNoiseComments(md: string): string {
  return md
    .replace(/<!--\s*markdownlint-disable[\s\S]*?-->\s*/gi, '')
    .replace(/^\uFEFF/, '')
}

export function Reader({ content, currentPath, onNavigate }: Props) {
  const cleaned = useMemo(() => stripNoiseComments(content), [content])

  const components: Components = {
    a({ href, children, ...rest }) {
      const url = href ?? ''
      const isMd =
        Boolean(currentPath) &&
        !url.startsWith('#') &&
        !/^[a-z]+:/i.test(url) &&
        (url.endsWith('.md') || url.includes('.md#'))

      if (isMd) {
        return (
          <a
            href={url}
            {...rest}
            onClick={(e) => {
              e.preventDefault()
              onNavigate(url)
            }}
          >
            {children}
          </a>
        )
      }

      return (
        <a
          href={url}
          target={url.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          {...rest}
        >
          {children}
        </a>
      )
    },
    img({ src, alt, ...rest }) {
      return (
        <img
          src={src}
          alt={alt ?? ''}
          loading="lazy"
          referrerPolicy="no-referrer"
          {...rest}
        />
      )
    },
  }

  return (
    <article className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}
        components={components}
      >
        {cleaned || '*Empty file*'}
      </ReactMarkdown>
    </article>
  )
}
