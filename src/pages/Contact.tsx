import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ImageUp,
  MessageCircle,
  Palette,
  Phone,
  Ruler,
} from 'lucide-react'
import { Seo } from '../components/Seo'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { contactPrompts, seo } from '../data/siteContent'

const conversionPoints = [
  'Personal finish guidance on WhatsApp',
  'Help choosing between Travertine, Granite, and Slate',
  'Clear next steps for samples, sizing, and installation questions',
]

const promptIcons = [ImageUp, Ruler, Palette, ImageUp]

const contactCards = [
  {
    label: 'WhatsApp',
    value: '+65 8073 6460',
    icon: Phone,
  },
  {
    label: 'Best for',
    value: 'Samples, sizing, finish guidance',
    icon: MessageCircle,
  },
  {
    label: 'Reply flow',
    value: 'Send photos, room size, and preferred tones',
    icon: Clock3,
  },
]

export function Contact() {
  return (
    <>
      <Seo {...seo.contact} path="/contact" />
      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/textures/contact-stone.svg"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#ffffff]/88" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F5F0E8] to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_440px] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#6B5C4A]">
                Contact
              </p>
              <h1 className="font-display mt-5 max-w-4xl text-[clamp(3rem,14vw,4.5rem)] leading-tight text-[#25211D] sm:text-7xl lg:text-8xl">
                Let’s find the wall finish your space needs.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#6B5C4A] sm:text-xl sm:leading-9">
                Send us a few details and we’ll help you choose the right
                collection, colour tone, and sample direction.
              </p>

              <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
                {conversionPoints.map((point) => (
                  <div
                    className="rounded-md border border-[#DDD1C3] bg-white/80 p-4"
                    key={point}
                  >
                    <CheckCircle2
                      className="text-[#6B5C4A]"
                      size={21}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-base font-medium leading-7 text-[#25211D]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton
                  className="w-full sm:min-w-60 sm:w-auto"
                  message="Hello ALCOVE, I would like help choosing the right wall panel finish for my space."
                >
                  Chat on WhatsApp
                </WhatsAppButton>
                <p className="text-base font-medium text-[#6B5C4A]">
                  +65 8073 6460
                </p>
              </div>
            </div>

            <aside className="rounded-md border border-[#DDD1C3] bg-[#25211D] p-6 text-white shadow-[0_28px_80px_rgba(37,33,29,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.34em] text-[#C3B4A1]">
                Direct support
              </p>
              <h2 className="font-display mt-4 text-[clamp(2.35rem,10vw,3rem)] leading-tight">
                Message us with your project details.
              </h2>
              <div className="mt-8 grid gap-4">
                {contactCards.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      className="flex gap-4 border-t border-[#C3B4A1]/20 pt-4 first:border-t-0 first:pt-0"
                      key={item.label}
                    >
                      <Icon
                        className="mt-1 shrink-0 text-[#C3B4A1]"
                        size={22}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[#C3B4A1]">
                          {item.label}
                        </p>
                        <p className="mt-2 text-lg font-medium leading-7">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0E8] px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[#6B5C4A]">
                What to send
              </p>
              <h2 className="font-display mt-4 text-[clamp(2.35rem,10vw,3rem)] leading-tight text-[#25211D] sm:text-5xl">
                A few details are enough to begin.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#6B5C4A]">
                Share what you have. We can help narrow the collection, colour,
                and sample direction from there.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactPrompts.map((prompt, index) => {
                const Icon = promptIcons[index]

                return (
                  <article
                    className="rounded-md border border-[#DDD1C3] bg-white p-6 shadow-sm"
                    key={prompt}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <Icon
                        className="text-[#6B5C4A]"
                        size={24}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      <span className="text-xs uppercase tracking-[0.22em] text-[#6B5C4A]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-5 text-xl font-medium leading-7 text-[#25211D]">
                      {prompt}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-md bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="font-display text-3xl leading-tight text-[#25211D]">
                Ready to ask about a finish?
              </h3>
              <p className="mt-3 text-base leading-7 text-[#6B5C4A]">
                No form. No waiting room. Just a direct WhatsApp conversation.
              </p>
            </div>
            <WhatsAppButton
              className="w-full sm:w-auto sm:shrink-0"
              message="Hello ALCOVE, I would like help choosing the right wall panel finish for my space."
            >
              Start Chat
              <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  )
}
