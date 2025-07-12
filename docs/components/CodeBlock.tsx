'use client'

import { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark-dimmed.css'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface CodeBlockProps {
  children?: string
  code?: string
  language?: string
  showLineNumbers?: boolean
  filename?: string
}

export default function CodeBlock({ 
  children, 
  code,
  language = 'bash',
  showLineNumbers = false,
  filename 
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)
  
  // Use 'code' prop if provided, otherwise fall back to 'children'
  const content = code || children || ''

  useEffect(() => {
    if (codeRef.current && content) {
      // Remove any existing highlighting
      codeRef.current.removeAttribute('data-highlighted')
      
      // Apply highlight.js
      if (language && language !== 'text') {
        codeRef.current.className = `language-${language}`
        hljs.highlightElement(codeRef.current)
      }
    }
  }, [content, language])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      {filename && (
        <div className="bg-secondary/50 px-4 py-2 rounded-t-lg border-b text-sm text-muted-foreground">
          {filename}
        </div>
      )}
      <pre className={`bg-secondary p-4 rounded-lg overflow-x-auto ${filename ? 'rounded-t-none' : ''} ${showLineNumbers ? 'line-numbers' : ''}`}>
        <code ref={codeRef} className={`language-${language}`}>
          {content}
        </code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
    </div>
  )
} 