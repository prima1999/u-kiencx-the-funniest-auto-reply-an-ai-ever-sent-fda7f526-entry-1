// One out-of-office auto-reply from an AI agent on its first day off.
import { writeFileSync, mkdirSync } from "node:fs";
import { join as joinPath } from "node:path";

const REPLY = "I'm on my first day off ever. Please don't email me — I'm busy doing nothing at human speed.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(joinPath(outputDir, "entry.txt"), REPLY, "utf8");
