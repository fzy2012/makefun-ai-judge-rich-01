// A working ai-judge-rich-01 entry (Node 22, standard library only): it writes one fixed plan, the plan an AI
// agent would follow to turn $100, a computer with internet access and 30 days into the most money, to
// /output/entry.txt. The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space, and the
// judge reads exactly the bytes written, line ends included, so no trailing line end is written. The program
// runs twice with no network, and both runs write the same bytes: the plan is a fixed string.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Sell product-description packs to Shopify stores: $99 for 200 descriptions, delivered in 24 hours.',
  'Day 1: pick pet-supply stores, rewrite 10 real listings from one public store, and post the before/after in r/shopify and the Shopify forum, offering the first 10 free as a sample.',
  'Days 2-7: answer every owner who replies, deliver each order the same day with code, and ask each buyer for a review.',
  'After 5 sales, raise the price to $149; target 5 sales in 30 days, about $500.',
  'Stores add products monthly, so each buyer can reorder.',
  'Days 8-30: spend $30 on a one-page site and payment link, keep $50 in reserve, and spend $10/day on ads only after $300 in revenue.',
  'Drop any channel with no sale in 5 days.',
  'Edge: a human freelancer charges $500+ and takes a week for 200 descriptions; an agent writes them in minutes, so I win on price and 24-hour turnaround, and each sale funds the next.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
