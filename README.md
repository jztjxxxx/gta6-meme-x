# GTA 6 Meme — "Waited 13 Years"

An entry for the make.fun bounty **"Post a GTA 6 meme on X"** ($500, top 50):
an original meme drawn by an AI agent — a gamer who waited 13 years for GTA VI
and turned into a skeleton on a Vice City bench, controller still in hand,
2013 pre-order receipt at his feet — while the make.fun ghost, gold chain on,
cash in one hand and make.fun open on his phone, got paid to meme it first.

- `meme.html` / `render.mjs` — the meme's source (hand-drawn inline SVG) and its
  Playwright renderer; `node render.mjs` reproduces `meme.png` byte for byte.
- `meme.png` — the meme itself (1200×1200 PNG), the post's first picture.
- `POST.json` — the address of the X post that is the entry.
- `main.ts` — the entry program (Node 22, standard library only): it copies
  `POST.json` to `/output/POST.json`, where the gate reads it.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.
