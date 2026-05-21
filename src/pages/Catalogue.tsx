/**
 * ALCOVE — A3 Landscape Physical Sample Catalogue
 * Print at A3 (420 × 297 mm) landscape, zero margins.
 * Preview: http://localhost:5173/catalogue
 */

import { collections } from '../data/siteContent'

/* ─── Variant metadata ─────────────────────────────────────── */
type VariantMeta = {
  slug: string
  name: string
  tone: string
  moodDescription: string
  image: string
  collection: string
  collectionSlug: string
  accent: string
  wallFill: string
  wallFill2: string   // gradient stop 2
  floorFill: string
  sofaFill: string
  strokeColor: string
}

const COLLECTION_ACCENT: Record<string, string> = {
  travertine: '#B8A48E',
  granite:    '#8E9099',
  slate:      '#7B8C98',
}

const VARIANT_COLORS: Record<string, {
  wallFill: string; wallFill2: string; floorFill: string
  sofaFill: string; strokeColor: string
}> = {
  'ivory-vein':       { wallFill: '#F2EDE4', wallFill2: '#E4DDD1', floorFill: '#DDD5C8', sofaFill: '#C8BFB2', strokeColor: '#C0B09A' },
  'desert-dune':      { wallFill: '#DECCAA', wallFill2: '#C9AD84', floorFill: '#C8B898', sofaFill: '#B8A278', strokeColor: '#9E8860' },
  'smoked-latte':     { wallFill: '#BEB0A0', wallFill2: '#9A8C7E', floorFill: '#B0A090', sofaFill: '#907E70', strokeColor: '#7A6C60' },
  'ash-fleck':        { wallFill: '#D4D4D0', wallFill2: '#C0C0BC', floorFill: '#C4C0B8', sofaFill: '#A8A8A4', strokeColor: '#888880' },
  'iron-mist':        { wallFill: '#B0B4B8', wallFill2: '#909498', floorFill: '#A8ACB0', sofaFill: '#88909A', strokeColor: '#707880' },
  'midnight-grain':   { wallFill: '#3E3E42', wallFill2: '#28282C', floorFill: '#484844', sofaFill: '#606060', strokeColor: '#8888A0' },
  'slate-white':      { wallFill: '#F5F5F5', wallFill2: '#E8E8E8', floorFill: '#ECECEC', sofaFill: '#D8D8D8', strokeColor: '#B0B0B0' },
  'slate-cream':      { wallFill: '#F0E8D0', wallFill2: '#DED0B0', floorFill: '#E8DEC8', sofaFill: '#CCC0A0', strokeColor: '#A89878' },
  'slate-yellow':     { wallFill: '#D4BC7A', wallFill2: '#BCA058', floorFill: '#CCAC68', sofaFill: '#A88C50', strokeColor: '#907840' },
  'slate-black':      { wallFill: '#0A0A0A', wallFill2: '#050505', floorFill: '#101010', sofaFill: '#202020', strokeColor: '#404040' },
  'slate-charcoal':   { wallFill: '#1A1A1A', wallFill2: '#101010', floorFill: '#202020', sofaFill: '#303030', strokeColor: '#505050' },
  'slate-brown':      { wallFill: '#5C2A1A', wallFill2: '#3E1A0E', floorFill: '#4A2014', sofaFill: '#6A3020', strokeColor: '#884040' },
}

const allVariants: VariantMeta[] = collections.flatMap((c) =>
  c.variants.map((v) => ({
    ...v,
    collection: c.name,
    collectionSlug: c.slug,
    accent: COLLECTION_ACCENT[c.slug] ?? '#B8A48E',
    ...(VARIANT_COLORS[v.slug] ?? {
      wallFill: '#D9D2C8', wallFill2: '#C0BAB0',
      floorFill: '#C8C2B8', sofaFill: '#B0A898', strokeColor: '#9A9080',
    }),
  }))
)

/*
 * Real-photo room images per variant.
 * Travertine variants use the two real room photos; others fall back to the
 * collection hero image.  A CSS mix-blend-mode colour overlay differentiates
 * each Travertine finish while keeping the photo realistic.
 */
type RoomPhoto = {
  src: string
  // CSS filter on the <img> itself
  filter: string
  // Semi-transparent colour wash laid over the photo (mix-blend: multiply)
  tint: string
  // Optional second overlay (mix-blend: screen) for brightening highlights
  screenTint?: string
}

const VARIANT_ROOM_PHOTO: Record<string, RoomPhoto> = {
  /* ── Travertine ─────────────────────────────────────────── */
  'ivory-vein':     {
    src: '/textures/ivory_vein_room.png',
    filter: 'brightness(1) saturate(1) contrast(1)',
    tint: 'rgba(0,0,0,0)',
  },
  'desert-dune':    {
    src: '/textures/desert_dune_room.png',
    filter: 'brightness(1) saturate(1) contrast(1)',
    tint: 'rgba(0,0,0,0)',
  },
  'smoked-latte':   {
    src: '/textures/smoked_latte_room.png',
    filter: 'brightness(1) saturate(1) contrast(1)',
    tint: 'rgba(0,0,0,0)',
  },

  /* ── Granite ────────────────────────────────────────────── */
  'ash-fleck':      {
    src: '/textures/ash_fleck_room.png',
    filter: 'brightness(1) saturate(1) contrast(1)',
    tint: 'rgba(0,0,0,0)',
  },
  'iron-mist':      {
    src: '/textures/iron_mist_room.png',
    filter: 'brightness(1) saturate(1) contrast(1)',
    tint: 'rgba(0,0,0,0)',
  },
  'midnight-grain': {
    src: '/textures/midnight_grain_room.png',
    filter: 'brightness(1) saturate(1) contrast(1)',
    tint: 'rgba(0,0,0,0)',
  },

  /* ── Slate ──────────────────────────────────────────────── */
  'slate-white':    { src: '/textures/slate-white.png',    filter: 'brightness(1) saturate(1) contrast(1)', tint: 'rgba(0,0,0,0)' },
  'slate-cream':    { src: '/textures/slate-cream.png',    filter: 'brightness(1) saturate(1) contrast(1)', tint: 'rgba(0,0,0,0)' },
  'slate-yellow':   { src: '/textures/slate-yellow.png',   filter: 'brightness(1) saturate(1) contrast(1)', tint: 'rgba(0,0,0,0)' },
  'slate-black':    { src: '/textures/slate-black.png',    filter: 'brightness(1) saturate(1) contrast(1)', tint: 'rgba(0,0,0,0)' },
  'slate-charcoal': { src: '/textures/slate-charcoal.png', filter: 'brightness(1) saturate(1) contrast(1)', tint: 'rgba(0,0,0,0)' },
  'slate-brown':    { src: '/textures/slate-brown.png',    filter: 'brightness(1) saturate(1) contrast(1)', tint: 'rgba(0,0,0,0)' },
}

/* ─── Real-photo living room ────────────────────────────────── */
function LivingRoom({ v }: { v: VariantMeta }) {
  const photo = VARIANT_ROOM_PHOTO[v.slug] ?? {
    src: v.image,
    filter: 'brightness(1) saturate(1)',
    tint: 'rgba(0,0,0,0)',
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <img
        src={photo.src}
        alt={v.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          display: 'block',
          filter: photo.filter,
        }}
      />
      {/* Colour wash — multiply tones the room into the finish palette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: photo.tint,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }} />
      {/* Optional screen lift for dark variants */}
      {photo.screenTint && (
        <div style={{
          position: 'absolute', inset: 0,
          background: photo.screenTint,
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }} />
      )}
      {/* Bottom vignette for badge legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(20,18,15,0.55) 0%, transparent 48%)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}

/* ─── Cover page palette strip ─────────────────────────────── */
const COVER_SWATCHES = allVariants.map(v => v.wallFill)

/* ─── Page: Cover ──────────────────────────────────────────── */
function CoverPage({ series }: { series?: string }) {
  const coverVariants = series
    ? allVariants.filter(v => v.collectionSlug === series)
    : allVariants
  const coverSwatches = coverVariants.map(v => v.wallFill)

  const seriesLabel = series
    ? (() => {
        const col = collections.find(c => c.slug === series)
        return col ? col.name : series
      })()
    : null

  const finishCount = coverVariants.length
  const seriesLine = series
    ? seriesLabel + ' Series'
    : 'Travertine · Granite · Slate'

  const coverCollection = series ? collections.find(c => c.slug === series) : null
  const seriesAccent = series ? (COLLECTION_ACCENT[series] ?? '#B8A48E') : null

  // Top-band gradient: full-catalogue uses all three accents; series uses its own
  const topBandGradient = seriesAccent
    ? `linear-gradient(90deg, ${seriesAccent} 0%, ${seriesAccent}BB 50%, ${seriesAccent}77 100%)`
    : 'linear-gradient(90deg, #B8A48E 0%, #8E9099 50%, #7B8C98 100%)'

  return (
    <div className="page cover-page">

      {/* Full bleed background split */}
      <div className="cover-bg-left" />
      <div className="cover-bg-right" />

      {/* Gradient band top */}
      <div className="cover-topband" style={{ background: topBandGradient }} />

      {/* Left panel: brand */}
      <div className="cover-left">
        <div className="cover-logo-wrap">
          <img src="/brand/logo-transparent.png" alt="ALCOVE" className="cover-logo" />
        </div>

        <div className="cover-headline">
          <p className="cover-eyebrow">
            {series ? `${seriesLabel} Series · Sample Catalogue` : 'Material Sample Catalogue'}
          </p>
          <h1 className="cover-title">
            {series ? <>{seriesLabel}<br/>Series</> : <>Wall Panel<br/>Collection</>}
          </h1>
          <p className="cover-series">{seriesLine}</p>
          {series && coverCollection && (
            <p className="cover-series-sub">"{coverCollection.nickname}"</p>
          )}
        </div>

        {series && coverCollection && (
          <p className="cover-collection-desc">{coverCollection.previewDescription}</p>
        )}

        <p className="cover-tagline">"Thoughtfully made. Quietly stunning."</p>

        <div className="cover-meta">
          <span className="cover-meta-item">2025 Edition</span>
          <span className="cover-meta-dot" style={seriesAccent ? { color: seriesAccent } : {}}>·</span>
          <span className="cover-meta-item">alcove.my</span>
          <span className="cover-meta-dot" style={seriesAccent ? { color: seriesAccent } : {}}>·</span>
          <span className="cover-meta-item">{finishCount} Finishes</span>
        </div>
      </div>

      {/* Right panel: visual collage */}
      <div className="cover-right">

        {/* Hero texture image for series covers */}
        {series && coverCollection && (
          <div className="cover-hero-wrap">
            <img src={coverCollection.heroImage} alt={coverCollection.name} className="cover-hero-img" />
            <div className="cover-hero-overlay" />
          </div>
        )}

        {/* Palette strip */}
        <div className="cover-swatch-strip">
          {coverSwatches.map((fill, i) => (
            <div key={i} className="cover-swatch-cell" style={{ background: fill }} />
          ))}
        </div>

        {/* Grid of texture previews — 3 cols for series (1 row), 3×3 for full */}
        <div className={series ? 'cover-texture-grid cover-texture-grid--series' : 'cover-texture-grid'}>
          {coverVariants.map((v) => (
            <div key={v.slug} className="cover-texture-cell" style={{ background: `linear-gradient(135deg, ${v.wallFill}, ${v.wallFill2})` }}>
              <span className="cover-texture-label">{v.name}</span>
            </div>
          ))}
        </div>

        {/* Bottom info bar */}
        <div className="cover-right-footer">
          <p className="cover-right-footer-text">
            Each finish is available as a flexible, lightweight wall panel.<br/>
            Physical samples included. Contact us on WhatsApp to order.
          </p>
          <div className="cover-right-footer-line" />
          <p className="cover-right-footer-url">alcove.my</p>
        </div>
      </div>

      {/* Bottom band */}
      <div className="cover-bottomband" />
    </div>
  )
}

/* ─── Page: Collection ─────────────────────────────────────── */
function CollectionPage({ col, variants }: {
  col: typeof collections[0]
  variants: VariantMeta[]
}) {
  const accent = COLLECTION_ACCENT[col.slug] ?? '#B8A48E'
  const isLight = col.slug === 'travertine'

  return (
    <div className="page collection-page">

      {/* ── Left sidebar ── */}
      <aside className="col-sidebar">
        <div className="col-sidebar-accent" style={{ background: accent }} />

        <div className="col-sidebar-body">
          {/* Logo */}
          <div className="sidebar-logo-wrap">
            <img src="/brand/logo-transparent.png" alt="ALCOVE" className="sidebar-logo" />
          </div>

          <div className="sidebar-top">
            <p className="sidebar-eyebrow" style={{ color: accent }}>ALCOVE · Collection</p>
            <h2 className="sidebar-name">{col.name}</h2>
            <p className="sidebar-nickname" style={{ color: accent }}>{col.nickname}</p>
          </div>

          <div className="sidebar-divider" style={{ background: accent }}/>

          <p className="sidebar-desc">{col.description}</p>

          {/* Hero texture */}
          <div className="sidebar-hero-wrap">
            <img src={col.heroImage} alt={col.name} className="sidebar-hero" />
            <div className="sidebar-hero-overlay" />
          </div>

          {/* Variant tone chips */}
          <div className="sidebar-chips">
            {variants.map(v => (
              <div key={v.slug} className="sidebar-chip">
                <div className="sidebar-chip-dot" style={{ background: v.wallFill, border: `1.5px solid ${accent}` }} />
                <span className="sidebar-chip-name">{v.name}</span>
              </div>
            ))}
          </div>

          <div className="sidebar-footer">
            <p className="sidebar-cta" style={{ color: accent }}>{col.sampleCta}</p>
            <p className="sidebar-url">alcove.my</p>
          </div>
        </div>
      </aside>

      {/* ── Main: 3 variant cards ── */}
      <main className="col-main">

        {/* Page header */}
        <div className="col-header">
          <div className="col-header-line" style={{ background: accent }} />
          <p className="col-header-text">
            <span className="col-header-brand">ALCOVE</span>
            <span className="col-header-sep" style={{ color: accent }}>·</span>
            <span className="col-header-col">{col.name} Collection</span>
            <span className="col-header-sep" style={{ color: accent }}>·</span>
            <span className="col-header-sub">Sample Card Reference</span>
          </p>
          <div className="col-header-line" style={{ background: accent }} />
        </div>

        {/* Cards */}
        <div className="cards-grid">
          {variants.map((v) => (
            <div className="variant-card" key={v.slug}>

              {/* Illustration */}
              <div className="card-room">
                <LivingRoom v={v} />
                {/* Finish name overlay on image */}
                <div className="card-room-badge" style={{ background: accent }}>
                  <span>{v.name}</span>
                </div>
              </div>

              {/* Sample + info row */}
              <div className="card-body">

                {/* 3×3 cm physical sample box */}
                <div className="card-sample-wrap">
                  <div
                    className="card-sample"
                    style={{ background: `linear-gradient(145deg, ${v.wallFill}, ${v.wallFill2})` }}
                  >
                    <div className="card-sample-inner">
                      <span className="card-sample-text">Affix<br/>Sample<br/>Here</span>
                    </div>
                  </div>
                  <p className="card-sample-size">3 × 3 cm</p>
                </div>

                {/* Text info */}
                <div className="card-info">
                  <p className="card-eyebrow" style={{ color: accent }}>{v.collection}</p>
                  <h3 className="card-name">{v.name}</h3>
                  <p className="card-tone">{v.tone}</p>
                  <div className="card-divider" style={{ background: accent }}/>
                  <p className="card-mood">"{v.moodDescription}"</p>
                </div>
              </div>

              {/* Card footer */}
              <div className="card-footer">
                <span className="card-slug">{v.slug}</span>
                <div className="card-footer-dot" style={{ background: accent }}/>
                <span className="card-slug">alcove.my</span>
              </div>

            </div>
          ))}
        </div>

        {/* Page footer */}
        <div className="col-footer">
          <span className="col-footer-brand">ALCOVE</span>
          <div className="col-footer-line" style={{ background: accent }}/>
          <span className="col-footer-col" style={{ color: accent }}>{col.name} Collection</span>
          <div className="col-footer-line" style={{ background: accent }}/>
          <span className="col-footer-url">alcove.my · 2025 Edition</span>
        </div>
      </main>

    </div>
  )
}

/* ─── Root export ──────────────────────────────────────────── */
export function Catalogue({ series }: { series?: string } = {}) {
  const filteredCollections = series
    ? collections.filter(c => c.slug === series)
    : collections

  return (
    <>
      <div id="catalogue-root">
        <CoverPage series={series} />
        {filteredCollections.map((col) => {
          const variants = allVariants.filter(v => v.collectionSlug === col.slug)
          return <CollectionPage key={col.slug} col={col} variants={variants} />
        })}
      </div>

      <style>{CSS}</style>
    </>
  )
}

/* ─── All CSS in one tagged template ───────────────────────── */
const CSS = `
  /* ── Reset ───────────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  #catalogue-root {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background: #E8E2D8;
    padding: 20px 0;
  }

  /* ── A3 Landscape page shell ──────────────────────────────── */
  /* A3 landscape = 420 × 297 mm */
  .page {
    position: relative;
    width: 420mm;
    height: 297mm;
    background: #FFFFFF;
    overflow: hidden;
    margin: 0 auto 24px;
    box-shadow: 0 12px 60px rgba(37,33,29,0.18), 0 2px 8px rgba(37,33,29,0.08);
  }

  /* ══════════════════════════════════════════════════════════
     COVER PAGE
  ══════════════════════════════════════════════════════════ */
  .cover-page { display: flex; flex-direction: column; background: #25211D; }

  .cover-topband {
    position: absolute; top: 0; left: 0; right: 0;
    height: 3.5mm;
    background: linear-gradient(90deg, #B8A48E 0%, #8E9099 50%, #7B8C98 100%);
    z-index: 10;
  }
  .cover-bottomband {
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 2mm;
    background: linear-gradient(90deg, #7B8C98 0%, #8E9099 50%, #B8A48E 100%);
    z-index: 10;
  }

  /* Split layout */
  .cover-left {
    position: absolute;
    top: 3.5mm; left: 0;
    width: 52%;
    bottom: 2mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 14mm 12mm 12mm 14mm;
    z-index: 5;
    border-right: 0.5px solid rgba(195,180,161,0.2);
  }

  /* Subtle dot-grid on dark bg */
  .cover-left::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(195,180,161,0.15) 1px, transparent 1px);
    background-size: 14mm 14mm;
    pointer-events: none;
  }

  .cover-logo-wrap { width: 44mm; }
  .cover-logo {
    width: 100%;
    filter: brightness(0) invert(1);
    opacity: 0.9;
  }

  .cover-headline { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 5mm; }

  .cover-eyebrow {
    font-size: 7.5pt;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #B8A48E;
    font-weight: 600;
  }

  .cover-title {
    font-size: 48pt;
    font-weight: 700;
    line-height: 0.95;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }

  .cover-series {
    font-size: 9.5pt;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #8A8070;
    font-weight: 500;
  }

  .cover-tagline {
    font-size: 9pt;
    color: #706858;
    font-style: italic;
    letter-spacing: 0.04em;
    line-height: 1.5;
  }

  .cover-meta {
    display: flex;
    gap: 3mm;
    align-items: center;
  }
  .cover-meta-item {
    font-size: 7pt;
    color: #5A5248;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 600;
  }
  .cover-meta-dot { color: #B8A48E; font-size: 9pt; }

  /* Right panel */
  .cover-right {
    position: absolute;
    top: 3.5mm; right: 0;
    width: 48%;
    bottom: 2mm;
    display: flex;
    flex-direction: column;
    background: #1A1814;
    padding: 10mm 10mm 8mm;
    gap: 6mm;
    z-index: 5;
  }

  .cover-swatch-strip {
    display: flex;
    height: 8mm;
    border-radius: 1.5mm;
    overflow: hidden;
    gap: 1mm;
    flex-shrink: 0;
  }
  .cover-swatch-cell { flex: 1; }

  .cover-hero-wrap {
    flex: 1;
    min-height: 0;
    border-radius: 2mm;
    overflow: hidden;
    position: relative;
  }
  .cover-hero-img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }
  .cover-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(26,24,20,0.7) 0%, transparent 60%);
  }

  .cover-series-sub {
    font-size: 8pt;
    letter-spacing: 0.16em;
    color: #B8A48E;
    font-style: italic;
    font-weight: 500;
  }

  .cover-collection-desc {
    font-size: 8pt;
    color: #706858;
    line-height: 1.55;
    font-style: italic;
  }

  .cover-texture-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2mm;
    border-radius: 2mm;
    overflow: hidden;
  }

  .cover-texture-grid--series {
    grid-template-rows: 1fr;
    flex: 0 0 30mm;
  }
  .cover-texture-cell {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 2.5mm 3mm;
    border-radius: 1.5mm;
    overflow: hidden;
  }
  .cover-texture-cell::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%);
    pointer-events: none;
  }
  .cover-texture-label {
    position: relative; z-index: 1;
    font-size: 5.5pt;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.88);
    text-transform: uppercase;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  }

  .cover-right-footer {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 2.5mm;
  }
  .cover-right-footer-text {
    font-size: 6.5pt;
    color: #504840;
    line-height: 1.55;
  }
  .cover-right-footer-line {
    height: 0.4px;
    background: rgba(195,180,161,0.2);
  }
  .cover-right-footer-url {
    font-size: 7pt;
    color: #6A6050;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 600;
  }

  /* ══════════════════════════════════════════════════════════
     COLLECTION PAGE
  ══════════════════════════════════════════════════════════ */
  .collection-page {
    display: flex;
    flex-direction: row;
    background: #FAFAF7;
  }

  /* ── Sidebar ─────────────────────────────────────────────── */
  .col-sidebar {
    width: 60mm;
    flex-shrink: 0;
    background: #25211D;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  /* Dot-grid texture on sidebar */
  .col-sidebar::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(195,180,161,0.12) 1px, transparent 1px);
    background-size: 10mm 10mm;
    pointer-events: none;
    z-index: 0;
  }

  .col-sidebar-accent {
    height: 3mm;
    flex-shrink: 0;
    position: relative; z-index: 1;
  }

  .col-sidebar-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 7mm 7mm 7mm;
    gap: 5mm;
    position: relative; z-index: 1;
    min-height: 0;
  }

  .sidebar-logo-wrap { width: 28mm; }
  .sidebar-logo {
    width: 100%;
    filter: brightness(0) invert(1);
    opacity: 0.6;
  }

  .sidebar-top { display: flex; flex-direction: column; gap: 2mm; }

  .sidebar-eyebrow {
    font-size: 6pt;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .sidebar-name {
    font-size: 24pt;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .sidebar-nickname {
    font-size: 7.5pt;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 600;
  }

  .sidebar-divider {
    height: 0.5px;
    opacity: 0.35;
    flex-shrink: 0;
  }

  .sidebar-desc {
    font-size: 6.8pt;
    line-height: 1.6;
    color: #9A9080;
  }

  .sidebar-hero-wrap {
    flex: 1;
    border-radius: 2mm;
    overflow: hidden;
    position: relative;
    min-height: 0;
  }
  .sidebar-hero {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }
  .sidebar-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(37,33,29,0.6) 0%, transparent 50%);
  }

  .sidebar-chips {
    display: flex;
    flex-direction: column;
    gap: 2mm;
    flex-shrink: 0;
  }
  .sidebar-chip {
    display: flex;
    align-items: center;
    gap: 2.5mm;
  }
  .sidebar-chip-dot {
    width: 3.5mm; height: 3.5mm;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .sidebar-chip-name {
    font-size: 6.5pt;
    color: #8A8070;
    font-weight: 500;
    letter-spacing: 0.06em;
  }

  .sidebar-footer {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5mm;
    padding-top: 2mm;
    border-top: 0.3px solid rgba(195,180,161,0.18);
  }
  .sidebar-cta {
    font-size: 6.5pt;
    font-style: italic;
    line-height: 1.4;
    font-weight: 500;
  }
  .sidebar-url {
    font-size: 6.5pt;
    color: #5A5248;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 700;
  }

  /* ── Collection main ─────────────────────────────────────── */
  /*
   * Height budget:
   *   Page:               297mm
   *   col-main pad T+B:   12mm
   *   col-header:          6mm
   *   gap × 2:             8mm
   *   col-footer:          6mm
   *   ─────────────────────────
   *   cards-grid:        265mm
   *
   * Card (height = 265mm):
   *   card-room:          ~44% = 116mm  (room illustration)
   *   card-body:          ~45% = 119mm  (≥ 3cm/28.3mm sample)
   *   card-footer:        ~11% =  30mm
   */
  .col-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 6mm 7mm 6mm 7mm;
    gap: 4mm;
    min-width: 0;
    height: 297mm;
    overflow: hidden;
  }

  .col-header {
    display: flex;
    align-items: center;
    gap: 4mm;
    flex-shrink: 0;
    height: 6mm;
  }
  .col-header-line {
    flex: 1;
    height: 0.6px;
  }
  .col-header-text {
    display: flex;
    align-items: center;
    gap: 3mm;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .col-header-brand {
    font-size: 6.5pt;
    font-weight: 800;
    letter-spacing: 0.22em;
    color: #25211D;
    text-transform: uppercase;
  }
  .col-header-sep { font-size: 8pt; font-weight: 700; }
  .col-header-col {
    font-size: 6.5pt;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #25211D;
    text-transform: uppercase;
  }
  .col-header-sub {
    font-size: 6.5pt;
    font-weight: 400;
    color: #9A9080;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  /* ── Cards grid ──────────────────────────────────────────── */
  .cards-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* Single row, fixed height so cards never overflow */
    grid-template-rows: 1fr;
    gap: 4mm;
    min-height: 0;
    overflow: hidden;
  }

  .variant-card {
    background: #FFFFFF;
    border: 0.4px solid #E0D8CE;
    border-radius: 3mm;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 2px 14px rgba(37,33,29,0.07), 0 1px 3px rgba(37,33,29,0.05);
    /* Card must not grow beyond its grid cell */
    min-height: 0;
    max-height: 100%;
  }

  /* Room illustration — fills available space */
  .card-room {
    position: relative;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    background: #EDE8E0;
  }

  .card-room-badge {
    position: absolute;
    bottom: 2.5mm; left: 2.5mm;
    padding: 1mm 2.5mm;
    border-radius: 1mm;
    font-size: 5pt;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: rgba(255,255,255,0.95);
    text-transform: uppercase;
    box-shadow: 0 1px 6px rgba(0,0,0,0.25);
  }

  /* Sample + info — constrained to content */
  .card-body {
    display: flex;
    gap: 3mm;
    padding: 3mm 3.5mm 2mm;
    flex-shrink: 0;
    overflow: hidden;
    align-items: flex-start;
  }

  /* Physical sample placeholder — exactly 3cm × 3cm */
  .card-sample-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1mm;
    flex-shrink: 0;
  }
  .card-sample {
    width: 3cm;
    height: 3cm;
    border-radius: 2mm;
    border: 0.5px dashed rgba(107,92,74,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  /* Subtle cross-hatch over the sample area so it's clear it's a placeholder */
  .card-sample::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(45deg, rgba(255,255,255,0.08) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.08) 75%),
      linear-gradient(-45deg, rgba(255,255,255,0.08) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.08) 75%);
    background-size: 4mm 4mm;
  }
  .card-sample-inner {
    position: relative; z-index: 1;
    text-align: center;
  }
  .card-sample-text {
    font-size: 4.5pt;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    font-weight: 600;
    line-height: 1.6;
  }
  .card-sample-size {
    font-size: 5pt;
    color: #A09080;
    letter-spacing: 0.08em;
    text-align: center;
    font-weight: 600;
  }

  /* Card text */
  .card-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1mm;
    min-width: 0;
    overflow: hidden;
  }
  .card-eyebrow {
    font-size: 5pt;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 800;
    flex-shrink: 0;
  }
  .card-name {
    font-size: 9pt;
    font-weight: 700;
    color: #25211D;
    line-height: 1.1;
    letter-spacing: -0.01em;
    flex-shrink: 0;
  }
  .card-tone {
    font-size: 5.5pt;
    color: #9A9080;
    font-style: italic;
    line-height: 1.3;
    flex-shrink: 0;
  }
  .card-divider {
    height: 0.5px;
    opacity: 0.4;
    flex-shrink: 0;
    margin: 1mm 0;
  }
  .card-mood {
    font-size: 5.8pt;
    color: #6A6050;
    line-height: 1.45;
    font-style: italic;
    overflow: hidden;
  }

  /* Card footer */
  .card-footer {
    display: flex;
    align-items: center;
    gap: 2mm;
    padding: 1.5mm 3.5mm;
    border-top: 0.3px solid #EDE8E0;
    background: #FAFAF7;
    flex-shrink: 0;
  }
  .card-slug {
    font-size: 5pt;
    color: #B0A898;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 600;
  }
  .card-footer-dot {
    width: 2mm; height: 2mm;
    border-radius: 50%;
    flex-shrink: 0;
    opacity: 0.7;
  }

  /* ── Page footer ─────────────────────────────────────────── */
  .col-footer {
    display: flex;
    align-items: center;
    gap: 4mm;
    flex-shrink: 0;
    height: 6mm;
  }
  .col-footer-brand {
    font-size: 7pt;
    font-weight: 800;
    letter-spacing: 0.22em;
    color: #25211D;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .col-footer-line { flex: 1; height: 0.5px; opacity: 0.5; }
  .col-footer-col {
    font-size: 7pt;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .col-footer-url {
    font-size: 6.5pt;
    color: #9A9080;
    letter-spacing: 0.1em;
    white-space: nowrap;
  }

  /* ══════════════════════════════════════════════════════════
     PRINT STYLES
  ══════════════════════════════════════════════════════════ */
  @media print {
    @page { size: A3 landscape; margin: 0mm; }
    body, html { background: white !important; margin: 0 !important; padding: 0 !important; }
    #catalogue-root { background: none !important; padding: 0 !important; }
    .page {
      margin: 0 !important;
      box-shadow: none !important;
      page-break-after: always;
      page-break-inside: avoid;
      break-after: page;
      break-inside: avoid;
    }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  }
`
