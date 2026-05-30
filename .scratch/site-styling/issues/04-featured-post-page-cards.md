Status: closed

## What to build

Featured post system and page card restyling for `home.html` and `term.html`.

**Featured post logic:**
- Any page with `featured: true` in front matter is a featured card
- Multiple featured pages are ordered by date descending (newest first)
- If no pages have `featured: true`, the most recent regular page becomes the featured card
- Featured cards appear first, before all non-featured cards

**Visual treatment:**
- Featured card: larger image, taller, visually prominent (e.g., full-width image, more padding, larger title)
- Non-featured cards: indented relative to the hero / featured card so the hero stands out
- The current `background-color: yellow` on `.page-card:first-child` is removed
- Card colors, borders, shadows, and radii use the CSS custom properties from #01

**Page cards (all):**
- Side-by-side layout: image thumbnail + text content
- Image source: determined by existing imagextractor logic (unchanged)

## Acceptance criteria

- [x] `featured: true` front matter promotes a page to featured card
- [x] Ordered by date descending when multiple featured
- [x] Fallback to most recent page by date when no featured
- [x] Featured card renders with larger image and more vertical space
- [x] Non-featured cards are indented relative to hero/featured
- [x] Yellow first-card badge removed
- [x] All card colors/shading use CSS custom properties from `:root`
- [x] Demo content updated: at least one post gets `featured: true` in exampleSite

## Blocked by

- #01 (Choose palette) — for card styling tokens. Template logic (featured detection, ordering, rendering) is independent and can be implemented before #01.
