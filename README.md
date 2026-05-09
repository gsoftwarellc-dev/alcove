# ALCOVE Frontend

React + Vite + Tailwind frontend for the ALCOVE flexible wall panels showcase website.

## Local Setup

```bash
npm install
cp .env.example .env
npm run dev
```

The WhatsApp CTA defaults to `+65 80736460`.
Update `VITE_SITE_URL` before production so canonical tags, `robots.txt`, and `sitemap.xml` match the live domain.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Content

Website copy, collections, finish variants, and image paths live in `src/data/siteContent.ts`.
The current texture images are temporary SVG placeholders under `public/textures` and can later be replaced by Laravel Storage URLs.
