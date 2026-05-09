import { Link } from 'react-router-dom'
import { brand, navItems } from '../data/siteContent'
import { WhatsAppButton } from './WhatsAppButton'

export function Footer() {
  return (
    <footer className="bg-[#25211D] text-[#ffffff]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 pb-24 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-16">
        <div>
          <Link
            className="inline-flex items-center"
            to="/"
            aria-label="ALCOVE home"
          >
            <img
              className="h-20 w-auto object-contain brightness-0 invert sm:h-24"
              src={brand.logo}
              alt="ALCOVE logo"
              width="818"
              height="584"
            />
          </Link>
          <p className="mt-5 max-w-sm text-base leading-7 text-[#F5F0E8]">
            {brand.tagline}
          </p>
        </div>

        <nav className="grid gap-3 text-base font-medium" aria-label="Footer">
          {navItems.map((item) => (
            <Link
              className="text-[#F5F0E8] transition hover:text-[#C3B4A1]"
              key={item.href}
              to={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-4">
          <p className="text-base leading-7 text-[#F5F0E8]">
            Need help choosing a finish? Message us for colour, sample, and
            sizing guidance.
          </p>
          <WhatsAppButton className="w-full sm:w-auto" variant="light">
            Chat on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </footer>
  )
}
