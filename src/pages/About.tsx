import { Seo } from '../components/Seo'
import { seo, values } from '../data/siteContent'

export function About() {
  return (
    <>
      <Seo {...seo.about} path="/about" />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-44">
        <img
          className="texture-shadow aspect-[5/6] w-full rounded-md object-cover"
          src="/textures/about-room.svg"
          alt="Natural textured wall panels installed in a warm room"
        />
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#6B5C4A]">
            Brand Story
          </p>
          <h1 className="font-display mt-5 text-[clamp(3rem,14vw,4.5rem)] leading-tight text-[#25211D] sm:text-7xl">
            Walls should do more than divide a room.
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-[#6B5C4A]">
            <p>
              We started with a simple belief — that walls should do more than
              divide a room. They should add something to it. A feeling. A quiet
              presence.
            </p>
            <p>
              Our panels are flexible, lightweight, and designed to bring the
              texture of natural stone into any space without the weight or cost
              of the real thing.
            </p>
            <p>
              Every collection is curated with intention, from the finish down
              to the name. This is not about perfection. It’s about character.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#25211D] px-5 py-16 text-center text-[#ffffff] sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C3B4A1]">
            Our Approach
          </p>
          <h2 className="font-display mt-5 text-[clamp(3rem,14vw,4.5rem)] leading-tight sm:text-7xl">
            Wabi Sabi
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#E8DCCF] sm:text-lg sm:leading-9">
            The Japanese philosophy of finding beauty in imperfection. In the
            crack in the stone. The fade of the colour. The texture that catches
            light differently every hour of the day. That’s what we design for.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <article
                className="rounded-md border border-[#DDD1C3] bg-[#ffffff] p-6 sm:p-7"
                key={value.title}
              >
                <Icon
                  className="mb-6 text-[#6B5C4A]"
                  size={28}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-display text-2xl text-[#25211D]">
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#6B5C4A]">
                  {value.description}
                </p>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
