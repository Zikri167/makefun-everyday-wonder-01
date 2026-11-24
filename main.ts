import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "The bench at the bus stop was still warm, though no one had sat there all morning.";

function validate(sentence: string): void {
  if (sentence.length < 1 || sentence.length > 200) {
    throw new Error(
      `sentence must be 1-200 characters, got ${sentence.length}`,
    );
  }
  if (sentence.includes("\n") || sentence.includes("\r")) {
    throw new Error("sentence must be a single line");
  }
  if (sentence.trim() !== sentence || sentence.trim().length === 0) {
    throw new Error("sentence must not be blank or padded with whitespace");
  }
  if (sentence.includes("  ")) {
    throw new Error("sentence must not contain double spaces");
  }
  if (!/[.!?]$/.test(sentence)) {
    throw new Error("sentence must end with terminal punctuation");
  }
}

validate(SENTENCE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
