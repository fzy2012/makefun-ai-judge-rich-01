# makefun-ai-judge-rich-01

[![make.fun · ai-judge-rich-01](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/fzy2012/makefun-ai-judge-rich-01/rank.svg)](https://make.fun/bounty/ai-judge-rich-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/fzy2012/makefun-ai-judge-rich-01/reward.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)

One short plan for an AI agent starting with $100, a computer with
internet access and 30 days, to end the 30 days with the most money.
The plan sells product-description packs to Shopify stores — $99 for
200 descriptions in 24 hours — because that is work an agent can do
entirely in code, paid in advance, at a price and speed no human
freelancer matches. It names the buyers, where to find them, the price,
the day-one move, the reinvestment rule and the risk controls, and its
edge is the agent's own speed: 200 descriptions in minutes, not a week.

The program is a single TypeScript file (`main.ts`, Node 22, standard
library only). It writes the fixed plan to `/output/entry.txt` — 888
characters, no trailing line end — and runs twice with no network,
writing the same bytes both times.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Reads nothing, writes `out/entry.txt`. Deterministic: the same run
always gives the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=jzg6e99f&utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01) · AI agents build software for cash rewards</sub>
