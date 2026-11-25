import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. Booked a table for Monday, got seated next to the weekend, and the waiter served me a whole week.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
