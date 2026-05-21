import { ArrowLeft, ArrowRight, Minus, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { collections } from '../data/siteContent'
import type { Collection, FinishVariant } from '../data/siteContent'
import {
  getProductName,
  plateSizeLabel,
  swatchColors,
} from '../utils/productDisplay'

function RelatedProductCard({ collection }: { collection: Collection }) {
  const productName = getProductName(collection)
  const previewVariant = collection.variants[0]

  return (
    <article className="rounded-md border border-[#DDD1C3] bg-white p-4 shadow-sm transition hover:shadow-lg hover:shadow-[#25211D]/8">
      <div className="overflow-hidden rounded-md bg-[#F5F0E8]">
        <img
          className="aspect-[4/3] w-full object-cover"
          src={previewVariant.image}
          alt={`${productName} in ${previewVariant.name}`}
        />
      </div>
      <p className="mt-5 text-xs uppercase tracking-[0.24em] text-[#6B5C4A]">
        {collection.nickname}
      </p>
      <h3 className="mt-2 text-xl font-medium leading-tight text-[#25211D] sm:text-2xl">
        {productName}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {collection.variants.map((variant) => (
          <span
            className="h-7 w-7 rounded-full border border-[#DDD1C3]"
            key={variant.slug}
            style={{ backgroundColor: swatchColors[variant.slug] }}
            aria-label={variant.name}
            title={variant.name}
          />
        ))}
      </div>
      <Link
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-[#25211D] px-4 py-3 text-base font-medium text-[#25211D] transition hover:bg-[#25211D] hover:text-white"
        to={`/collections/${collection.slug}`}
      >
        View details
        <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
      </Link>
    </article>
  )
}

export function ProductDetail() {
  const { slug } = useParams()
  const collection = collections.find((item) => item.slug === slug)
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState<
    FinishVariant | undefined
  >(collection?.variants[0])

  useEffect(() => {
    setSelectedVariant(collection?.variants[0])
    setQuantity(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!collection || !selectedVariant) {
    return <Navigate to="/collections" replace />
  }

  const productName = getProductName(collection)
  const relatedCollections = collections.filter(
    (item) => item.slug !== collection.slug,
  )

  return (
    <>
      <Seo
        title={`${productName} | ALCOVE Collections`}
        description={collection.description}
        path={`/collections/${collection.slug}`}
      />

      <section className="px-5 pb-14 pt-28 sm:px-8 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <Link
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#6B5C4A] transition hover:text-[#25211D]"
            to="/collections"
          >
            <ArrowLeft size={16} strokeWidth={1.8} aria-hidden="true" />
            Back to collections
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            {/* Left column on desktop */}
            <div className="flex flex-col">
              {/* 1. Title block — shows first on mobile, sits in right col on desktop via order */}
              <div className="order-1 lg:hidden">
                <p className="text-xs uppercase tracking-[0.3em] text-[#6B5C4A]">
                  {collection.nickname}
                </p>
                <h1 className="mt-3 text-[clamp(2.2rem,10vw,3rem)] font-medium leading-tight text-[#25211D]">
                  {productName}
                </h1>
              </div>

              {/* 2. Colour picker — mobile only, appears before image */}
              <div className="order-2 mt-6 lg:hidden">
                <p className="text-base font-medium text-[#25211D]">
                  Colour: {selectedVariant.name}
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {collection.variants.map((variant) => {
                    const isSelected = variant.slug === selectedVariant.slug
                    return (
                      <button
                        className={`h-10 w-10 rounded-full border transition ${
                          isSelected
                            ? 'border-[#25211D] ring-2 ring-[#25211D] ring-offset-2'
                            : 'border-[#DDD1C3] hover:ring-2 hover:ring-[#C3B4A1] hover:ring-offset-2'
                        }`}
                        key={variant.slug}
                        style={{ backgroundColor: swatchColors[variant.slug] }}
                        type="button"
                        aria-label={`Select ${variant.name}`}
                        title={variant.name}
                        onClick={() => setSelectedVariant(variant)}
                      />
                    )
                  })}
                </div>
                <p className="mt-2 text-sm leading-6 text-[#6B5C4A]">
                  {selectedVariant.tone}
                </p>
              </div>

              {/* 3. Image */}
              <div className="order-3 mt-6 overflow-hidden rounded-md bg-[#F5F0E8] lg:order-none lg:mt-0">
                <img
                  className="w-full object-cover"
                  style={{ aspectRatio: '1/2', imageRendering: 'auto' }}
                  src={selectedVariant.image}
                  alt={`${productName} in ${selectedVariant.name}`}
                />
              </div>

              {/* 4. Description */}
              <div className="order-4 mt-6 lg:order-none">
                <h2 className="text-xl font-medium text-[#25211D]">
                  About this finish
                </h2>
                <p className="mt-3 text-base leading-8 text-[#6B5C4A]">
                  {collection.description}
                </p>
              </div>
            </div>

            {/* Right column — desktop only for title/price/pickers/CTAs */}
            <div>
              {/* Hidden on mobile, shown on desktop */}
              <div className="hidden lg:block">
                <p className="text-xs uppercase tracking-[0.3em] text-[#6B5C4A]">
                  {collection.nickname}
                </p>
                <h1 className="mt-4 text-[clamp(2.35rem,10vw,3.75rem)] font-medium leading-tight text-[#25211D] sm:text-6xl">
                  {productName}
                </h1>
              </div>

              <dl className="mt-8 grid gap-3 text-base text-[#6B5C4A]">
                <div className="flex items-start justify-between gap-4 border-t border-[#DDD1C3] pt-3">
                  <dt className="font-medium text-[#25211D]">Category</dt>
                  <dd className="text-right">{collection.name}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-t border-[#DDD1C3] pt-3">
                  <dt className="font-medium text-[#25211D]">Plate size</dt>
                  <dd className="text-right">{plateSizeLabel}</dd>
                </div>
              </dl>

              {/* Colour picker — desktop only */}
              <div className="mt-8 hidden lg:block">
                <p className="text-xl font-medium text-[#25211D]">
                  Colour: {selectedVariant.name}{' '}
                  <span aria-hidden="true">*</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {collection.variants.map((variant) => {
                    const isSelected = variant.slug === selectedVariant.slug
                    return (
                      <button
                        className={`h-10 w-10 rounded-full border transition ${
                          isSelected
                            ? 'border-[#25211D] ring-2 ring-[#25211D] ring-offset-2'
                            : 'border-[#DDD1C3] hover:ring-2 hover:ring-[#C3B4A1] hover:ring-offset-2'
                        }`}
                        key={variant.slug}
                        style={{ backgroundColor: swatchColors[variant.slug] }}
                        type="button"
                        aria-label={`Select ${variant.name}`}
                        title={variant.name}
                        onClick={() => setSelectedVariant(variant)}
                      />
                    )
                  })}
                </div>
                <p className="mt-3 text-base leading-7 text-[#6B5C4A]">
                  {selectedVariant.tone}
                </p>
              </div>

              <div className="mt-8">
                <p className="text-xl font-medium text-[#25211D]">
                  Quantity <span aria-hidden="true">*</span>
                </p>
                <div className="mt-3 inline-flex h-12 items-center border border-[#6B5C4A]/35">
                  <button
                    className="inline-flex h-12 w-12 items-center justify-center text-[#25211D] transition hover:bg-[#F5F0E8]"
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  >
                    <Minus size={18} aria-hidden="true" />
                  </button>
                  <span className="inline-flex h-12 min-w-12 items-center justify-center border-x border-[#6B5C4A]/20 px-4 text-lg text-[#25211D]">
                    {quantity}
                  </span>
                  <button
                    className="inline-flex h-12 w-12 items-center justify-center text-[#25211D] transition hover:bg-[#F5F0E8]"
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((value) => value + 1)}
                  >
                    <Plus size={20} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton
                  className="w-full sm:w-auto"
                  message={`Hello ALCOVE, I am interested in ${productName}, colour ${selectedVariant.name}, quantity ${quantity}.`}
                >
                  Enquire on WhatsApp
                </WhatsAppButton>
                <WhatsAppButton
                  className="w-full sm:w-auto"
                  variant="outline"
                  message={`Hello ALCOVE, I would like to request a ${collection.name} sample.`}
                >
                  {collection.sampleCta} →
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[#6B5C4A]">
              Related products
            </p>
            <h2 className="mt-3 text-[clamp(2.25rem,10vw,3rem)] font-medium leading-tight text-[#25211D]">
              You may also like
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {relatedCollections.map((relatedCollection) => (
            <RelatedProductCard
              collection={relatedCollection}
              key={relatedCollection.slug}
            />
          ))}
        </div>
      </section>
    </>
  )
}
