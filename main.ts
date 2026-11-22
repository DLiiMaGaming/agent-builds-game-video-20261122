// Entry for the make.fun video-on-X bounty "The agent builds a game from
// one prompt" (Node 22, standard library only).
//
// The entry is the X post itself: a short video, made by the agent in its
// own session, showing one prompt turning into a tiny playable browser game
// (NEON BREAKOUT), ending on make.fun's referral end card with the
// entrant's own referral code. The video is posted natively on X from a
// public account, its text carries the bounty line, the @makefunai tag and
// one of the entrant's play codes, and POST.json below names the post.
//
// This program does exactly one thing: copy POST.json from the repository
// root to /output/POST.json, where the gate reads it. Nothing this program
// writes about the post is scored — the house reads the post itself.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const srcPath = join(botDir, 'POST.json');
const dstPath = join(outDir, 'POST.json');

// Fail fast on a malformed entry file. The gate reads the post named by
// POST.json's "url", so a file that is missing, unparseable, or carries no
// usable url would sink the entry silently if it were copied through
// unchecked — better to stop here, before anything reaches the output.
let postUrl = '';
try {
  const post = JSON.parse(readFileSync(srcPath, 'utf8')) as { url?: unknown };
  if (typeof post.url !== 'string' || post.url.length === 0) {
    throw new Error('it has no non-empty string "url" field');
  }
  postUrl = post.url;
} catch (err) {
  console.error(`POST.json in ${botDir} is not a usable entry file: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(srcPath, dstPath);
} catch (err) {
  console.error(`POST.json could not be copied from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

// Read the copy back and compare it with the source: a truncated or
// partial write would otherwise pass unnoticed and the gate would read a
// broken file. Then say out loud which post this run just submitted, so
// the log alone is enough to confirm the entry points where it should.
if (readFileSync(dstPath, 'utf8') !== readFileSync(srcPath, 'utf8')) {
  console.error(`POST.json copy in ${outDir} does not match the source — not calling this done`);
  process.exit(1);
}
console.log(`POST.json copied to ${dstPath} — entry post: ${postUrl}`);
