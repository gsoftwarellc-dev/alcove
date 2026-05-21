import type { Collection } from '../data/siteContent'

export const plateSizeLabel = 'Custom sizing available'

export const swatchColors: Record<string, string> = {
  'ivory-vein': '#f2eadf',
  'desert-dune': '#caa872',
  'smoked-latte': '#8a7c6f',
  'cream-stone': '#efe2cd',
  'terra-wash': '#b98968',
  'ash-fleck': '#c9cac6',
  'iron-mist': '#737b7c',
  'midnight-grain': '#20201f',
  'silver-dust': '#d6d3cc',
  'basalt-speck': '#3b3d3b',
  'pale-rift': '#b9c8c8',
  'graphite-fold': '#4c5352',
  'obsidian-split': '#111313',
  'mist-layer': '#aeb8b7',
  'moss-ridge': '#6d7667',
  'slate-white': '#f5f5f5',
  'slate-cream': '#f0e8d0',
  'slate-yellow': '#d4bc7a',
  'slate-black': '#0a0a0a',
  'slate-charcoal': '#1a1a1a',
  'slate-brown': '#5c2a1a',
}

export function getProductName(collection: Collection) {
  return `Flexi Stone - ${collection.name} Series`
}
