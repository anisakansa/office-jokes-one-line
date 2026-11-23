// Make the AI Judge Laugh: Office Jokes — writes a single original one-liner
// about office life to /output/entry.txt.
// Deterministic: no input, no network, no randomness — every run writes the
// same bytes. The gate the house scorer enforces: 1–199 characters, one line,
// not only white space. We check it ourselves first so a bad line fails loudly
// here instead of silently scoring 0 on the platform.
// The joke: the CV boasts "excellent communicator", then the office reality
// is four years of replying to emails that just say "per my last email" — the
// advertised skill is exactly what the job grinds down. The turn lands on the
// quoted phrase every office worker has both sent and received.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I put 'excellent communicator' on my CV, then spent four years replying to emails that just say 'per my last email.'";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 199) {
  throw new Error(`line must be 1-199 characters, got ${chars.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
