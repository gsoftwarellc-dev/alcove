const fallbackNumber = '6580736460'
const fallbackMessage =
  'Hello ALCOVE, I would like help choosing a wall panel finish.'

export const whatsappNumber = (
  import.meta.env.VITE_WHATSAPP_NUMBER ?? fallbackNumber
).replace(/\D/g, '')

export const defaultWhatsAppMessage =
  import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE ?? fallbackMessage

export function buildWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}
