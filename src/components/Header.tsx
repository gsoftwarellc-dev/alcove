import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand, navItems } from '../data/siteContent'
import { WhatsAppButton } from './WhatsAppButton'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#6B5C4A]/10 bg-[#ffffff]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:h-24 sm:px-8">
        <Link
          className="flex items-center"
          to="/"
          aria-label="ALCOVE home"
          onClick={() => setIsOpen(false)}
        >
          <img
            className="h-14 w-auto object-contain sm:h-20"
            src={brand.logo}
            alt="ALCOVE logo"
            width="818"
            height="584"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `text-base font-medium transition hover:text-[#6B5C4A] ${
                  isActive ? 'text-[#25211D]' : 'text-[#6B5C4A]'
                }`
              }
              key={item.href}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton variant="outline">Chat on WhatsApp</WhatsAppButton>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#6B5C4A]/20 text-[#25211D] lg:hidden"
          type="button"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-[#6B5C4A]/10 bg-[#ffffff] px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile primary">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-lg font-medium transition ${
                    isActive
                      ? 'bg-[#F5F0E8] text-[#25211D]'
                      : 'text-[#6B5C4A]'
                  }`
                }
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <WhatsAppButton className="mt-2 w-full" variant="dark">
              Chat on WhatsApp
            </WhatsAppButton>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
