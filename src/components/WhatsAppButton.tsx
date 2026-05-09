import type { ReactNode } from 'react'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { WhatsAppIcon } from './WhatsAppIcon'

type WhatsAppButtonProps = {
  children: ReactNode
  ariaLabel?: string
  message?: string
  variant?: 'light' | 'dark' | 'outline'
  className?: string
}

const variants = {
  dark: 'bg-[#7EEF3A] text-[#25211D] hover:bg-[#6CDA2F]',
  light:
    'border border-[#7EEF3A] bg-[#7EEF3A] text-[#25211D] hover:bg-[#6CDA2F]',
  outline:
    'border border-[#7EEF3A] bg-[#7EEF3A] text-[#25211D] hover:bg-[#6CDA2F]',
}

export function WhatsAppButton({
  children,
  ariaLabel,
  message,
  variant = 'dark',
  className = '',
}: WhatsAppButtonProps) {
  const accessibleLabel =
    ariaLabel ??
    (typeof children === 'string'
      ? `${children} on WhatsApp`
      : 'Chat with ALCOVE on WhatsApp')

  return (
    <a
      className={`whatsapp-attract inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-center text-base font-medium transition ${variants[variant]} ${className}`}
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={accessibleLabel}
    >
      <WhatsAppIcon className="h-[17px] w-[17px]" />
      <span>{children}</span>
    </a>
  )
}
