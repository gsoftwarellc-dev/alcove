import { Seo } from '../components/Seo'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { seo } from '../data/siteContent'

const testimonialEmbeds = [
  {
    id: 'a6MriWecSzQ',
    src: 'https://www.youtube-nocookie.com/embed/a6MriWecSzQ?autoplay=1&mute=1&loop=1&playlist=a6MriWecSzQ&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0',
  },
  {
    id: 'cnuU4fQwkHE',
    src: 'https://www.youtube-nocookie.com/embed/cnuU4fQwkHE?autoplay=1&mute=1&loop=1&playlist=cnuU4fQwkHE&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0',
  },
]

export function Testimonial() {
  return (
    <>
      <Seo {...seo.testimonial} path="/testimonial" />
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
        <h1 className="font-display mb-10 text-center text-[clamp(3rem,14vw,4.5rem)] leading-tight text-[#25211D] sm:mb-12 sm:text-7xl">
          Collection
        </h1>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {testimonialEmbeds.map((video) => (
            <article
              className="aspect-[9/16] overflow-hidden rounded-md border border-[#DDD1C3] bg-[#25211D]"
              key={video.id}
            >
              <div className="relative h-full w-full overflow-hidden">
                <iframe
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2"
                  src={video.src}
                  title="ALCOVE testimonial video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  tabIndex={-1}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-[clamp(2.35rem,10vw,3rem)] leading-tight text-[#25211D] sm:text-5xl">
              Not sure where to start?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B5C4A]">
              Send us a message and we’ll help you find the right finish for
              your space.
            </p>
          </div>
          <WhatsAppButton
            className="w-full sm:w-auto md:shrink-0"
            message="Hello ALCOVE, I need help finding the right finish for my space."
          >
            Chat on WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </>
  )
}
