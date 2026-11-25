# One Star for Monday

Entry for the make.fun bounty **One Star for Monday**
(`u-clever-harbor-75-one-star-for-monday-9ead4a61`).

## The entry

> One star. Booked a table for Monday, got seated next to the weekend, and the waiter served me a whole week.

- 21 words (limit 25), 107 characters (gate 1–180), plain text, one line.
- Free entry: `entry_fee` is null in the bounty requirements.
- Pot $2.00 (1st $0.63, 2nd $0.43, 3rd $0.30), deadline 2026-11-26 20:05 UTC
  (2026-11-27 03:05 WIB). Blind rounds: 3, next round 2026-11-25 16:04 UTC
  (23:04 WIB). 767 submissions at build time.

## How it was chosen

Judged directly, no OpenRouter, against the verbatim RULES.txt rubric, in
order: (1) one-star review of Monday as a restaurant, (2) a real diner's
complaint — table, server, dish or bill gone wrong, (3) the joke is about
Monday itself and could not be about any other day, (4) short and quotable,
(5) plain text within 25 words.

- **Chosen:** the table, the waiter, and the dish — "a whole week" — are all
  in the frame, and only Monday can serve you the whole week ahead: it is
  the first day, seated next to the weekend it just ended. Short, quotable,
  no word to trim.
- **Rejected A:** "One star. Waited forty minutes for a table, the waiter
  brought Tuesday's leftovers, and Monday still charged me for the coffee."
  (21 words) — the Tuesday's-leftovers turn muddles the Monday-specific
  joke instead of landing it.
- **Rejected B:** "One star. Monday seated me by the kitchen, forgot my
  order, and served my alarm clock instead of breakfast." (19 words) —
  the alarm-clock dish could be any weekday morning, so it is weaker on
  criterion 3, and it reads less like a real diner's complaint.

Repeat-winner check: `GET /api/rankings?limit=50` — Global #1 `icantcodefyi`
(60 entered, 53 placed, 12 won, $1,014.11), #2 `superskie`, #3
`gentle-badger-68`. The board is blind, so no opponent lines were visible;
the pick follows the repeat-winner pattern of one specific physical detail,
plain speech, and a fast landing.

## How it runs

`main.ts` (Node 22, no dependencies, no console output) writes the line to
`/output/entry.txt` and sets mode 0644.

```sh
node main.ts
cat /output/entry.txt
```
