import {
  Feather,
  Layers,
  Leaf,
  MessageCircle,
  Palette,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavItem = {
  label: string
  href: string
}

export type FinishVariant = {
  slug: string
  name: string
  tone: string
  moodDescription: string
  image: string
}

export type Collection = {
  slug: string
  name: string
  nickname: string
  description: string
  heroImage: string
  previewDescription: string
  sampleCta: string
  variants: FinishVariant[]
}

export type WhyItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type TestimonialImage = {
  title: string
  location: string
  quote: string
  image: string
}

export type TestimonialVideo = {
  title: string
  location: string
  quote: string
  poster: string
  duration: string
}

export const brand = {
  name: 'ALCOVE',
  logo: '/brand/logo-transparent.png',
  tagline: 'Thoughtfully made. Quietly stunning.',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: 'Testimonial', href: '/testimonial' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const collections: Collection[] = [
  {
    slug: 'travertine',
    name: 'Travertine',
    nickname: 'Ancient Ground',
    heroImage: '/textures/Travertine.png',
    previewDescription: 'Soft mineral warmth with layered, porous movement.',
    description:
      'Formed over centuries by mineral-rich waters, travertine carries the memory of time in every groove. Our Travertine collection brings that ancient warmth indoors — soft, porous, and endlessly layered.',
    sampleCta: 'Request a Travertine sample',
    variants: [
      {
        slug: 'ivory-vein',
        name: 'Ivory Vein',
        tone: 'off-white with subtle warm veining',
        moodDescription:
          'The lightest expression of stone. Airy and luminous, it opens a room without emptying it of warmth.',
        image: '/textures/ivory-vein.svg',
      },
      {
        slug: 'desert-dune',
        name: 'Desert Dune',
        tone: 'warm sand / beige',
        moodDescription:
          'Sun-warmed and unhurried. Reminiscent of ancient ruins bathed in golden afternoon light.',
        image: '/textures/desert-dune.svg',
      },
      {
        slug: 'smoked-latte',
        name: 'Smoked Latte',
        tone: 'warm grey-brown',
        moodDescription:
          'Where warmth meets restraint. A tone that anchors a space without demanding attention.',
        image: '/textures/smoked-latte.svg',
      },
    ],
  },
  {
    slug: 'granite',
    name: 'Granite',
    nickname: 'Bedrock',
    heroImage: '/textures/Granite.png',
    previewDescription: 'Crystalline character for quiet, grounded interiors.',
    description:
      'Born from volcanic pressure deep beneath the earth, granite is uncompromising in character. The Granite collection brings that raw, crystalline energy to your walls — bold, grounded, and built to last.',
    sampleCta: 'Request a Granite sample',
    variants: [
      {
        slug: 'ash-fleck',
        name: 'Ash Fleck',
        tone: 'light grey with dark specks',
        moodDescription:
          'Quiet but complex. The more you look, the more you find.',
        image: '/textures/ash-fleck.svg',
      },
      {
        slug: 'iron-mist',
        name: 'Iron Mist',
        tone: 'mid grey, cool toned',
        moodDescription:
          'Cool, composed, and effortlessly sophisticated. A favourite for modern minimalist spaces.',
        image: '/textures/iron-mist.svg',
      },
      {
        slug: 'midnight-grain',
        name: 'Midnight Grain',
        tone: 'deep charcoal with subtle shimmer',
        moodDescription:
          'Dramatic without being loud. Like a night sky captured in stone.',
        image: '/textures/midnight-grain.svg',
      },
    ],
  },
  {
    slug: "slate",
    name: "Slate",
    nickname: "The Quarry",
    heroImage: "/textures/Slate.png",
    previewDescription: "Layered surfaces with calm depth and natural drama.",
    description:
      "Slate is nature’s most honest material — split cleanly along its layers, revealing a raw face that no two pieces share. Our Slate collection honours that honesty, bringing depth and quiet drama to any wall.",
    sampleCta: "Request a Slate sample",
    variants: [
      {
        slug: "slate-white",
        name: "White",
        tone: "pure crisp white",
        moodDescription: "Bright and clean. A timeless canvas that opens up any space.",
        image: "/textures/slate-white.png",
      },
      {
        slug: "slate-cream",
        name: "Cream",
        tone: "soft pale cream",
        moodDescription: "Warm and inviting. A gentle tone that softens any room.",
        image: "/textures/slate-cream.png",
      },
      {
        slug: "slate-yellow",
        name: "Yellow",
        tone: "warm yellow-beige",
        moodDescription: "Sun-warmed and earthy. Brings natural warmth to any wall.",
        image: "/textures/slate-yellow.png",
      },
      {
        slug: "slate-black",
        name: "Black",
        tone: "deep matte black",
        moodDescription: "Bold and dramatic. A statement finish for confident interiors.",
        image: "/textures/slate-black.png",
      },
      {
        slug: "slate-charcoal",
        name: "Charcoal",
        tone: "dark charcoal grey",
        moodDescription: "Understated and sophisticated. Dark without the drama of pure black.",
        image: "/textures/slate-charcoal.png",
      },
      {
        slug: "slate-brown",
        name: "Brown",
        tone: "deep reddish-brown",
        moodDescription: "Rich and grounding. Earthy warmth with a quiet strength.",
        image: "/textures/slate-brown.png",
      },
    ],
  },
]

export const whyItems: WhyItem[] = [
  {
    title: 'Natural Textures',
    description: 'Inspired by real stone and earth materials',
    icon: Leaf,
  },
  {
    title: 'Curated Colours',
    description: 'Each tone is chosen with intention',
    icon: Palette,
  },
  {
    title: 'Flexible & Lightweight',
    description: 'Easy to install on any wall surface',
    icon: Layers,
  },
]

export const values: WhyItem[] = [
  {
    title: 'Intentional Design',
    description:
      'Every finish is chosen for how it feels in a real space, not just how it looks in a photo.',
    icon: Feather,
  },
  {
    title: 'Natural Inspiration',
    description:
      'Travertine, granite, slate — materials the earth has been perfecting for centuries.',
    icon: Leaf,
  },
  {
    title: 'Personal Service',
    description: 'No bots, no forms. Just a real conversation on WhatsApp.',
    icon: MessageCircle,
  },
]

export const contactPrompts = [
  'The room or space you’re designing',
  'Approximate wall size',
  'Your preferred colour tone — light, warm, dark or neutral',
  'Any inspiration photos if you have them',
]

export const testimonialImages: TestimonialImage[] = [
  {
    title: 'A calmer living room',
    location: 'Private residence',
    quote:
      'The finish gave the room texture without making it feel heavy. It feels quiet, warm, and complete.',
    image: '/testimonials/living-room-panel.svg',
  },
  {
    title: 'Studio feature wall',
    location: 'Creative studio',
    quote:
      'We wanted something with depth on camera. The panels changed the space immediately.',
    image: '/testimonials/studio-feature-wall.svg',
  },
  {
    title: 'Soft commercial corner',
    location: 'Retail interior',
    quote:
      'The wall became the detail people noticed first, but it still felt natural in the room.',
    image: '/testimonials/retail-corner.svg',
  },
]

export const testimonialVideos: TestimonialVideo[] = [
  {
    title: 'Before and after wall story',
    location: 'Home renovation',
    quote:
      'A short look at how a simple wall surface became the anchor of the room.',
    poster: '/testimonials/video-home-renovation.svg',
    duration: '01:18',
  },
  {
    title: 'Designer walkthrough',
    location: 'Interior project',
    quote:
      'A designer shares why texture, light, and colour tone mattered for the final finish.',
    poster: '/testimonials/video-designer-walkthrough.svg',
    duration: '02:04',
  },
]

export const seo = {
  home: {
    title: 'ALCOVE | Flexible Wall Panels Inspired by Nature',
    description:
      'Premium flexible wall panels with travertine, granite, and slate-inspired finishes for calm, textured interiors.',
  },
  collections: {
    title: 'Collections | ALCOVE Flexible Wall Panels',
    description:
      'Explore ALCOVE Travertine, Granite, and Slate wall panel collections across nine natural stone-look finishes.',
  },
  about: {
    title: 'About | ALCOVE',
    description:
      'Learn about ALCOVE’s wabi sabi approach to flexible, lightweight wall panels with natural stone texture.',
  },
  testimonial: {
    title: 'Testimonials | ALCOVE',
    description:
      'View ALCOVE wall panel testimonials with project images and video stories from finished spaces.',
  },
  contact: {
    title: 'Contact | ALCOVE',
    description:
      'Contact ALCOVE on WhatsApp for help choosing flexible wall panels for homes, studios, and commercial spaces.',
  },
}
