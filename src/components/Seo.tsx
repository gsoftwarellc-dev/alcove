import { Helmet } from 'react-helmet-async'

type SeoProps = {
  title: string
  description: string
  path?: string
}

const siteUrl = (import.meta.env.VITE_SITE_URL ?? 'https://alcove.example.com').replace(
  /\/$/,
  '',
)

export function Seo({ title, description, path = '/' }: SeoProps) {
  const canonical = `${siteUrl}${path === '/' ? '' : path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="/brand/logo-transparent.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
