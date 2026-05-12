import { Link } from 'react-router-dom'
import { brand, navItems } from '../data/siteContent'
import { WhatsAppButton } from './WhatsAppButton'

export function Footer() {
  return (
    <footer className="bg-[#25211D] text-[#ffffff]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 pb-24 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
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

        <nav className="flex flex-col items-center gap-3 text-base font-medium lg:items-start" aria-label="Footer">
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

        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <p className="text-base leading-7 text-[#F5F0E8]">
            Need help choosing a finish? Message us for colour, sample, and
            sizing guidance.
          </p>
          <WhatsAppButton className="w-full sm:w-auto" variant="light">
            Chat on WhatsApp
          </WhatsAppButton>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61589257960433"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ALCOVE on Facebook"
              className="text-[#F5F0E8] transition hover:text-[#C3B4A1]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@alcovefinishing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ALCOVE on TikTok"
              className="text-[#F5F0E8] transition hover:text-[#C3B4A1]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
