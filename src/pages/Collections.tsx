import { ArrowRight, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { collections, seo } from '../data/siteContent'
import type { Collection } from '../data/siteContent'
import {
  getProductName,
  plateSizeLabel,
  swatchColors,
} from '../utils/productDisplay'

function ProductCard({ collection }: { collection: Collection }) {
  const productName = getProductName(collection)

  return (
    <article
      id={collection.slug}
      className="rounded-md border border-[#DDD1C3] bg-[#ffffff] p-5 shadow-sm transition hover:shadow-xl hover:shadow-[#25211D]/8"
    >
      <div className="overflow-hidden rounded-md bg-[#F5F0E8]">
        <img
          className="aspect-square w-full object-cover"
          src={collection.heroImage}
          alt={`${productName} hero`}
        />
      </div>

      <div className="pt-6">
        <p className="text-xs uppercase tracking-[0.24em] text-[#6B5C4A]">
          {collection.nickname}
        </p>
        <h2 className="mt-3 text-2xl font-medium leading-tight text-[#25211D] sm:text-3xl">
          {productName}
        </h2>


        <dl className="mt-6 grid gap-3 text-base text-[#6B5C4A]">
          <div className="flex items-start justify-between gap-4 border-t border-[#DDD1C3] pt-3">
            <dt className="font-medium text-[#25211D]">Category</dt>
            <dd className="text-right">{collection.name}</dd>
          </div>
          <div className="flex items-start justify-between gap-4 border-t border-[#DDD1C3] pt-3">
            <dt className="font-medium text-[#25211D]">Plate size</dt>
            <dd className="text-right">{plateSizeLabel}</dd>
          </div>
          <div className="border-t border-[#DDD1C3] pt-3">
            <dt className="font-medium text-[#25211D]">Colours</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {collection.variants.map((variant) => (
                <span
                  className="h-8 w-8 rounded-full border border-[#DDD1C3]"
                  key={variant.slug}
                  style={{ backgroundColor: swatchColors[variant.slug] }}
                  aria-label={variant.name}
                  title={variant.name}
                />
              ))}
            </dd>
          </div>
        </dl>

        <Link
          to={`/collections/${collection.slug}`}
          className="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-[#25211D] bg-[#25211D] px-5 py-3 text-base font-medium text-white transition hover:bg-[#6B5C4A]"
        >
          <Eye size={18} strokeWidth={1.8} aria-hidden="true" />
          View details
          <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}

export function Collections() {
  return (
    <>
      <Seo {...seo.collections} path="/collections" />
      <section className="px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:pb-14 lg:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-[clamp(3rem,14vw,4.5rem)] font-medium leading-tight text-[#25211D] sm:text-7xl">
            The Collections
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#6B5C4A] sm:text-xl">
            Three stories. Nine finishes. One wall.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => (
            <ProductCard collection={collection} key={collection.slug} />
          ))}
        </div>
      </section>

      <section className="border-t border-[#DDD1C3] bg-[#F5F0E8] px-5 py-16 text-center sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[clamp(1.75rem,6vw,2.75rem)] font-medium leading-tight text-[#25211D]">
            Seen something you love?
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#6B5C4A]">
            We'd be happy to help you bring it to life.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              message="Hello ALCOVE, I'd like to get in touch about your wall panel collections."
            >
              Get in Touch on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  )
}
