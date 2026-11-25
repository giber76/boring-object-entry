import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of the most boring everyday object: the doorstop.
// The joke is the object's own dullness — it does its job perfectly,
// loyally, forever, and its only reward is being kicked daily.
const entry =
  "The doorstop: the only coworker who never calls in sick, never asks for a raise, and still gets kicked in the face every single day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
