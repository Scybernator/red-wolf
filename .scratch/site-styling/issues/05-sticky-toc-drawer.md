Status: closed

## What to build

Table of Contents behavior on `.page`:

**Desktop (≥ 768px):**
- ToC renders in the left nav column
- ToC is sticky (`position: sticky; top: <header-height>`) so it follows as the user scrolls

**Mobile (< 768px):**
- ToC is placed inside the slide-in drawer (not in the nav column)
- Behaves like the drawer described in #03

The existing Hugo ToC output (`{{ .TableOfContents }}`) is used as-is — no custom ToC generation.

## Acceptance criteria

- [x] ToC appears in left nav column on desktop
- [x] ToC is sticky on scroll on desktop, doesn't overflow below the fold
- [x] ToC appears in the slide-in drawer on mobile
- [x] No duplicate ToC (never both nav column + drawer simultaneously)
- [x] ToC styling uses CSS custom properties from `:root`

## Blocked by

- #03 (Responsive layout + hamburger) — drawer must exist for mobile ToC placement
