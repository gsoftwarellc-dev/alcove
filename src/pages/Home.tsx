import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { collections, seo, whyItems } from '../data/siteContent'

export function Home() {
  return (
    <>
      <Seo {...seo.home} path="/" />
      <section className="relative min-h-svh overflow-hidden pt-20 text-[#ffffff] sm:pt-24">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/textures/hero-wall.svg"
          alt="Warm natural stone-look flexible wall panels in a calm interior"
        />
        <div className="absolute inset-0 bg-[#25211D]/42" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#25211D]/88 via-[#25211D]/28 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-5 py-10 pb-28 sm:min-h-[calc(100svh-6rem)] sm:px-8 sm:pb-24">
          <div className="max-w-5xl">
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[#E8DCCF]">
              Flexible Wall Panels
            </p>
            <h1 className="font-display max-w-5xl text-[clamp(3rem,15vw,5rem)] leading-[1.02] text-balance sm:text-7xl lg:text-8xl">
              Walls That Tell a Story
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#F5F0E8] sm:text-lg">
              Flexible wall panels inspired by nature. Designed for living.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#ffffff] px-5 py-3 text-base font-medium text-[#25211D] transition hover:bg-[#F5F0E8]"
                to="/collections"
              >
                Explore Collections
                <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-7 flex items-center justify-between gap-4 border-t border-[#F5F0E8]/25 pt-5 text-xs uppercase tracking-[0.28em] text-[#E8DCCF] sm:inset-x-8">
            <span>Travertine, granite, slate</span>
            <ChevronDown size={16} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.36em] text-[#6B5C4A]">
            Our Belief
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(2.35rem,10vw,3rem)] leading-tight text-[#25211D] sm:text-5xl">
            The most beautiful spaces aren’t perfect. They’re honest.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#6B5C4A]">
            Inspired by wabi sabi, every panel in our collection is chosen for
            its texture, depth, and quiet warmth.
          </p>
        </div>
        <img
          className="texture-shadow aspect-[5/4] w-full rounded-md object-cover"
          src="/textures/1.jpeg"
          alt="Close-up warm textured stone wall panel surface"
        />
      </section>

      <section className="bg-[#F5F0E8] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.36em] text-[#6B5C4A]">
                Collections
              </p>
              <h2 className="font-display mt-4 text-[clamp(2.35rem,10vw,3rem)] leading-tight text-[#25211D] sm:text-5xl">
                Three stories. Nine finishes. One wall.
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-base font-medium text-[#25211D] transition hover:text-[#6B5C4A]"
              to="/collections"
            >
              View all collections
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {collections.map((collection) => (
              <article
                className="overflow-hidden rounded-md bg-[#ffffff]"
                key={collection.slug}
              >
                <img
                  className="aspect-[4/3] w-full object-cover"
                  src={collection.heroImage}
                  alt={`${collection.name} wall panel texture`}
                />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#6B5C4A]">
                    {collection.nickname}
                  </p>
                  <h3 className="font-display mt-3 text-3xl text-[#25211D]">
                    {collection.name}
                  </h3>
                  <p className="mt-4 min-h-16 text-base leading-7 text-[#6B5C4A]">
                    {collection.previewDescription}
                  </p>
                  <Link
                    className="mt-6 inline-flex items-center gap-2 rounded-md border border-[#6B5C4A]/30 px-4 py-3 text-base font-medium text-[#25211D] transition hover:bg-[#F5F0E8]"
                    to={`/collections#${collection.slug}`}
                  >
                    View Collection
                    <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.36em] text-[#6B5C4A]">
              Why ALCOVE
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.35rem,10vw,3rem)] leading-tight text-[#25211D] sm:text-5xl">
              Made to feel natural, practical, and quietly refined.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {whyItems.map((item) => {
              const Icon = item.icon

              return (
                <article
                  className="rounded-md border border-[#DDD1C3] bg-[#F5F0E8] p-6 transition hover:-translate-y-1 hover:bg-[#ffffff] hover:shadow-[0_22px_60px_rgba(37,33,29,0.10)] sm:p-7"
                  key={item.title}
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#ffffff] text-[#6B5C4A] shadow-[0_10px_30px_rgba(37,33,29,0.08)] sm:mb-8">
                    <Icon
                      size={25}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display text-2xl text-[#25211D]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#6B5C4A]">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#DDD1C3] bg-[#F5F0E8] px-5 py-14 text-[#25211D] sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <div className="aspect-[16/10] overflow-hidden rounded-md bg-[#DDD1C3] lg:aspect-[4/3]">
            <img
              className="h-full w-full object-cover"
              src="/textures/image_52.png"
              alt="Close-up textured wall panel finish"
            />
          </div>
          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-[0.34em] text-[#6B5C4A]">
              Finish guidance
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.35rem,10vw,3rem)] leading-tight sm:text-5xl">
              Not sure where to start?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B5C4A]">
              Send us a message and we’ll help you find the right finish for
              your space.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton
                className="w-full sm:w-auto sm:shrink-0"
                message="Hello ALCOVE, I would like help finding the right wall panel finish for my space."
              >
                Chat on WhatsApp
              </WhatsAppButton>
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#6B5C4A]">
                Samples, colours, sizing
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
