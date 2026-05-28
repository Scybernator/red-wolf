Status: ready-for-agent

## What to build

Table of Contents behavior on `.page`:

**Desktop (≥ 768px):**
- ToC renders in the left nav column
- ToC is sticky (`position: sticky; top: <header-height>`) so it follows as the user scrolls
- Active section highlighting is optional for this slice

**Mobile (< 768px):**
- ToC is placed inside the slide-in drawer (not in the nav column)
- Behaves like the drawer described in #03

The existing Hugo ToC output (`{{ .TableOfContents }}`) is used as-is — no custom ToC generation.

## Acceptance criteria

- [ ] ToC appears in left nav column on desktop
- [ ] ToC is sticky on scroll on desktop, doesn't overflow below the fold
- [ ] ToC appears in the slide-in drawer on mobile
- [ ] No duplicate ToC (never both nav column + drawer simultaneously)
- [ ] ToC styling uses CSS custom properties from `:root`

## Blocked by

- #03 (Responsive layout + hamburger) — drawer must exist for mobile ToC placement
