import React from 'react'
import Link from 'next/link'
import { useSidebar } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

interface SidebarLinksProps {
  links: Array<{ icon: React.ReactNode; label: string; href?: string; onClick?: () => void }>
}

export default function SidebarLinks({ links }: SidebarLinksProps) {
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'
  
  return (
    <nav className="flex flex-col items-center space-y-6 flex-1">
      {links.map((link, idx) => (
        link.href ? (
          <Link
            key={idx}
            href={link.href}
            className="sidebar-icon"
            title={link.label}
          >
            {link.icon}
          </Link>
        ) : (
          <button
            key={idx}
            className="sidebar-icon"
            onClick={link.onClick}
            aria-label={link.label}
            type="button"
          >
            {link.icon}
          </button>
        )
      ))}
    </nav>
  )
} 