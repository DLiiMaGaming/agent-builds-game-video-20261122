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

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
