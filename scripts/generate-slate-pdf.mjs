/**
 * ALCOVE Slate Series — A3 Catalogue PDF Generator
 * Run: node scripts/generate-slate-pdf.mjs
 * Requires the Vite dev server to be running on port 5174.
 */

import puppeteer from 'puppeteer'
import { mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const OUT_DIR = resolve(ROOT, 'print')
const OUT_FILE = resolve(OUT_DIR, 'ALCOVE-Slate-Series-2025.pdf')
const URL = 'http://localhost:5174/catalogue/slate'

const A3_W = '420mm'
const A3_H = '297mm'
const PAGE_COUNT = 2  // cover + slate collection page

async function run() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true })

  console.log('🚀  Launching Chrome…')
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=none',
    ],
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1587, height: 1123, deviceScaleFactor: 2 })

  console.log(`📄  Loading ${URL}…`)
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 })
  await page.waitForFunction(() => document.fonts.ready)
  await new Promise(r => setTimeout(r, 1500))

  const count = await page.evaluate(() =>
    document.querySelectorAll('.page').length
  )
  console.log(`✅  Detected ${count} pages (expected ${PAGE_COUNT})`)

  console.log('🖨️  Generating PDF…')
  await page.pdf({
    path: OUT_FILE,
    width: A3_W,
    height: A3_H,
    printBackground: true,
    pageRanges: '',
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  })

  await browser.close()
  console.log(`\n✨  Done!  PDF saved to:\n    ${OUT_FILE}\n`)
}

run().catch(err => {
  console.error('❌  PDF generation failed:', err.message)
  process.exit(1)
})
