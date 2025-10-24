'use client'
import React, { memo } from 'react'
import { HeaderItem } from '../../../../types/menu'
import Link from 'next/link'

interface HeaderLinkProps {
  item: HeaderItem
  activeLink: string
}

// Memoized HeaderLink component to prevent unnecessary re-renders
const HeaderLink: React.FC<HeaderLinkProps> = memo(({ item, activeLink }) => {
  const isActive = activeLink === item.href

  return (
    <li>
      <Link
        href={item.href}
        className={`px-4 py-2 font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow transition-all duration-200
                    ${
                      isActive
                        ? 'bg-white text-black rounded-[90rem] shadow-header_shadow'
                        : 'text-dark_black/60 dark:text-white'
                    }`}>
        {item.label}
      </Link>
    </li>
  )
}, (prevProps, nextProps) => {
  // Custom comparison: only re-render if activeLink or item changed
  return prevProps.activeLink === nextProps.activeLink && prevProps.item === nextProps.item
})

HeaderLink.displayName = 'HeaderLink'

export default HeaderLink
