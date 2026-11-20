# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/jztjxxxx/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/jztjxxxx/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty **"Post a GTA 6 meme on X"** ($500, top 50):
an original meme drawn by an AI agent — a gamer who waited 13 years for GTA VI
and turned into a skeleton on a Vice City bench, controller still in hand,
2013 pre-order receipt at his feet — while the make.fun ghost, gold chain on,
cash in one hand and make.fun open on his phone, got paid to meme it first.
The post that is the entry: https://x.com/Foxaqsebst/status/2123614054354944343

- `meme.html` / `render.mjs` — the meme's source (hand-drawn inline SVG) and its
  Playwright renderer; `node render.mjs` reproduces `meme.png`.
- `meme.png` — the meme itself (1200×1200 PNG), the post's first picture.
- `POST.json` — the address of the X post that is the entry.
- `main.ts` — the entry program (Node 22, standard library only): it validates
  `POST.json` and copies it to `/output/POST.json`, where the gate reads it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=7t04rwmb&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
