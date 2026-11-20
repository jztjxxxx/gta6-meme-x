// Entry program for gta6-meme-x-01, "Post a GTA 6 meme on X" (Node 22,
// standard library only).
//
// The entry itself is the post on X: this repository only has to hand the
// house its address. So this program reads POST.json at the repository
// root, checks that the address it names really looks like an X post
// address (a mistake here would hand in a post that does not exist), and
// then copies POST.json, byte for byte, to /output/POST.json, where the
// gate reads it.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

// Read and validate before copying: POST.json must be a JSON object whose
// "url" is an https address on x.com or twitter.com ending in a numeric
// post id, the shape X gives a post's address.
let postUrl: string;
try {
  const parsed: unknown = JSON.parse(readFileSync(source, 'utf8'));
  if (typeof parsed !== 'object' || parsed === null || !('url' in parsed)) {
    throw new Error('POST.json has no "url" field');
  }
  postUrl = String((parsed as { url: unknown }).url);
} catch (err) {
  console.error(`POST.json could not be read from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

const POST_ADDRESS = /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
if (!POST_ADDRESS.test(postUrl)) {
  console.error(`POST.json names "${postUrl}", which is not an X post address`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);
console.log(`handed in the post ${postUrl} as ${target}`);
