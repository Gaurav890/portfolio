#!/usr/bin/env node
/**
 * Image generator for case study assets.
 * Uses Pollinations.ai (free, no API key, powered by Flux) to generate images
 * from prompts defined in image-prompts.json.
 *
 * Usage:
 *   node scripts/generate-images.mjs                                                      # generate all missing images
 *   node scripts/generate-images.mjs --case-study=ai-fashion-trust                        # one case study
 *   node scripts/generate-images.mjs --case-study=ai-fashion-trust --image=main-interface # one image
 *   node scripts/generate-images.mjs --regenerate                                         # regenerate even if file exists
 *   node scripts/generate-images.mjs --list                                               # list all prompts without generating
 *   node scripts/generate-images.mjs --model=flux-realism                                 # use a different model
 *
 * Models (all free): flux (default), flux-realism, flux-pro, turbo
 * No API key required.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const PROMPTS_FILE = resolve(__dirname, 'image-prompts.json');

// --- CLI args ---
const args = process.argv.slice(2);
const getArg = (name) => {
  const match = args.find(a => a.startsWith(`--${name}=`));
  return match ? match.split('=').slice(1).join('=') : null;
};
const hasFlag = (name) => args.includes(`--${name}`);

const targetCaseStudy = getArg('case-study');
const targetImage = getArg('image');
const regenerate = hasFlag('regenerate');
const listOnly = hasFlag('list');
const model = getArg('model') || 'flux';

// --- Load prompts ---
const config = JSON.parse(readFileSync(PROMPTS_FILE, 'utf8'));

// --- List mode ---
if (listOnly) {
  for (const [slug, study] of Object.entries(config)) {
    if (targetCaseStudy && slug !== targetCaseStudy) continue;
    console.log(`\n📁 ${slug} → ${study.outputDir}/`);
    for (const [key, img] of Object.entries(study.images)) {
      if (targetImage && key !== targetImage) continue;
      const outputPath = resolve(ROOT, study.outputDir, img.filename);
      const exists = existsSync(outputPath) ? '✓' : '✗';
      console.log(`  [${exists}] ${key} → ${img.filename}`);
      console.log(`       Prompt: ${img.prompt.slice(0, 100)}...`);
    }
  }
  process.exit(0);
}

async function generateImage(prompt, outputPath) {
  const encoded = encodeURIComponent(prompt);
  const url = `https://image.pollinations.ai/prompt/${encoded}?width=1024&height=1024&model=${model}&nologo=true`;

  const response = await fetch(url, { signal: AbortSignal.timeout(120_000) });
  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`HTTP ${response.status} ${response.statusText}${text ? ': ' + text.slice(0, 200) : ''}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length < 1000) {
    throw new Error('Response too small — likely an error page, not an image');
  }
  writeFileSync(outputPath, buffer);
}

async function run() {
  console.log(`Using model: ${model} (via Pollinations.ai — free, no API key)\n`);

  let total = 0;
  let skipped = 0;
  let generated = 0;
  let failed = 0;

  for (const [slug, study] of Object.entries(config)) {
    if (targetCaseStudy && slug !== targetCaseStudy) continue;

    const outDir = resolve(ROOT, study.outputDir);
    mkdirSync(outDir, { recursive: true });

    for (const [key, img] of Object.entries(study.images)) {
      if (targetImage && key !== targetImage) continue;

      total++;
      const outputPath = resolve(outDir, img.filename);

      if (existsSync(outputPath) && !regenerate) {
        console.log(`⏭  Skipping ${slug}/${key} (file exists — use --regenerate to overwrite)`);
        skipped++;
        continue;
      }

      console.log(`🎨 Generating ${slug}/${key} → ${img.filename}`);

      try {
        await generateImage(img.prompt, outputPath);
        console.log(`   ✅ Saved to ${study.outputDir}/${img.filename}`);
        generated++;
      } catch (err) {
        console.error(`   ❌ Failed: ${err.message}`);
        failed++;
      }
    }
  }

  console.log(`\nDone. ${generated} generated, ${skipped} skipped, ${failed} failed (${total} total)`);
}

run().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
