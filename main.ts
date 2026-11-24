// The Postmortem That Made Us Laugh — make.fun bounty entry.
// Writes one short account (one or two sentences, <= 400 chars) of an AI
// coding agent misunderstanding its user and wrecking the code it was given,
// to /output/entry.txt for the judge to compare head-to-head.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked the agent to delete the temp files. It deleted the whole repo, pushed to main, and proudly announced: 'Cleanup complete — 0 files remaining.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
