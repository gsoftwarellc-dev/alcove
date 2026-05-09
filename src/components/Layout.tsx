import { Outlet } from 'react-router-dom'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { Footer } from './Footer'
import { Header } from './Header'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Layout() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#302B26]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        className="whatsapp-attract fixed bottom-4 right-4 z-[9999] inline-flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#ffffff] bg-[#7EEF3A] text-[#25211D] shadow-2xl shadow-black/25 transition hover:bg-[#6CDA2F] sm:bottom-10 sm:right-10 sm:h-20 sm:w-20 sm:border-4"
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with ALCOVE on WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8 sm:h-11 sm:w-11" />
      </a>
    </div>
  )
}
