'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

function NavLink({ href, name, closeMobile }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={closeMobile}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
        ${isActive ? 'text-blue-600 font-semibold' : 'text-zinc-700 dark:text-zinc-300'}
        hover:text-blue-500`}
    >
      {name}
    </Link>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-white">
          MyBlog
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-zinc-800 dark:text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 animate-fade-in-down">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} closeMobile={closeMenu} />
          ))}
        </div>
      )}
    </header>
  )
}
