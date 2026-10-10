# Rucking Fitness Advent Calendar (2026)

GitHub-ready Netlify project. Upload the **contents** of this folder to the root of a **new, separate** GitHub repository and deploy to Netlify with publish directory `.` and functions directory `netlify/functions`. No API keys or AI Gateway required.

## Artwork included
`advent-picture.jpg` is the approved reconstructed Christmas poster background, without numbered doors. It is included alongside `index.html`. The HTML overlays the interactive doors and personalised heading. The artwork is a reconstruction, not Neil's original source image.

## Date rules
- Before 1 December 2026: Day 1 preview available; Days 2–24 locked.
- 1–24 December 2026: days unlock sequentially at midnight UK time (Europe/London).
- After 24 December 2026: all doors remain available.
- Date comes from a Netlify Function, not the visitor's computer clock. If date verification fails, doors stay locked.
- The content of future challenges remains visible to people inspecting the webpage source. Server-side challenge storage would be needed for genuine secrecy; this package intentionally preserves Neil's original structure.
- Stamps, names and mince-pie counts are saved only in the browser's local storage (not synced across devices).

## Fixes
Corrected malformed JavaScript multiplication expressions that prevented parsing; replaced device-clock unlocking with a small Netlify date endpoint. Neil's existing visual design and challenges are otherwise preserved.
