'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Book, Rocket, Code, FileText, Settings, Command, File, Folder } from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  title: string
  href?: string
  icon?: any
  items?: NavItem[]
  type?: 'folder' | 'file'
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    icon: Rocket,
    type: 'folder',
    items: [
      { 
        title: 'Introduction', 
        type: 'folder',
        items: [
          { title: 'Overview', href: '/', },
          { title: 'What is Codex?', href: '/introduction/what-is-codex', type: 'file' },
          { title: 'Key Features', href: '/introduction/features', type: 'file' },
          { title: 'Use Cases', href: '/introduction/use-cases', type: 'file' },
        ]
      },
      { title: 'Installation', href: '/installation', type: 'file' },
      { title: 'Quick Start', href: '/quick-start', type: 'file' },
    ]
  },
  {
    title: 'Core Concepts',
    icon: Book,
    type: 'folder',
    items: [
      { title: 'How It Works', href: '/concepts/how-it-works', type: 'file' },
      { title: 'Natural Language', href: '/concepts/natural-language', type: 'file' },
      { title: 'Code Generation', href: '/concepts/code-generation', type: 'file' },
    ]
  },
  {
    title: 'Features',
    icon: Code,
    type: 'folder',
    items: [
      { title: 'Overview', href: '/features', type: 'file' },
      { title: 'Multi-Language Support', href: '/features/languages', type: 'file' },
      { title: 'Context Awareness', href: '/features/context', type: 'file' },
      { title: 'Interactive Mode', href: '/features/interactive', type: 'file' },
    ]
  },
  {
    title: 'CLI Reference',
    icon: Command,
    type: 'folder',
    items: [
      { 
        title: 'Commands', 
        type: 'folder',
        items: [
          { title: 'Overview', href: '/api', type: 'file' },
          { title: 'codex generate', href: '/api/generate', type: 'file' },
          { title: 'codex chat', href: '/api/chat', type: 'file' },
          { title: 'codex auth', href: '/api/auth', type: 'file' },
          { title: 'codex config', href: '/api/config', type: 'file' },
          { title: 'codex help', href: '/api/help', type: 'file' },
        ]
      },
      { title: 'Configuration', href: '/reference/config', type: 'file' },
      { title: 'Environment Variables', href: '/reference/env', type: 'file' },
    ]
  },
  {
    title: 'Advanced',
    icon: Settings,
    type: 'folder',
    items: [
      { title: 'Best Practices', href: '/advanced/best-practices', type: 'file' },
      { title: 'Performance', href: '/advanced/performance', type: 'file' },
      { title: 'Security', href: '/advanced/security', type: 'file' },
    ]
  },
]

const Sidebar = () => {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>(['Getting Started', 'CLI Reference', 'Introduction', 'Commands'])

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }

  const isActive = (href?: string) => {
    if (!href) return false
    return pathname === href
  }

  const isSectionActive = (items?: NavItem[]): boolean => {
    if (!items) return false
    return items.some(item => isActive(item.href) || (item.items && isSectionActive(item.items)))
  }

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const isExpanded = expandedSections.includes(item.title)
    const hasChildren = item.items && item.items.length > 0
    const itemActive = isActive(item.href)
    const sectionActive = isSectionActive(item.items)
    
    return (
      <div key={`${item.title}-${level}`} className="nav-section">
        {hasChildren ? (
          <button
            onClick={() => toggleSection(item.title)}
            className={`nav-section-header ${sectionActive || itemActive ? 'active' : ''}`}
            style={{ paddingLeft: `${level * 12 + 16}px` }}
          >
            {level === 0 && item.icon && <item.icon size={16} />}
            {level > 0 && (
              <Folder size={14} />
            )}
            <span>{item.title}</span>
            <ChevronRight 
              size={14} 
              className={`chevron ${isExpanded ? 'expanded' : ''}`}
            />
          </button>
        ) : (
          <Link
            href={item.href || '#'}
            className={`nav-item ${itemActive ? 'active' : ''}`}
            style={{ paddingLeft: `${level * 12 + 32}px` }}
          >
            <File size={14} />
            <span>{item.title}</span>
          </Link>
        )}
        
        {isExpanded && hasChildren && (
          <div className="nav-items">
            {item.items!.map((subItem) => renderNavItem(subItem, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navigation.map((section) => renderNavItem(section))}
      </nav>
    </aside>
  )
}

export default Sidebar 