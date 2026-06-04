Status: closed

# What to build

Make page cards (`home.html`, `term.html`, `section.html`) render appropriately at each breakpoint tier.

**Layout changes:**

- **xs/sm (<768px):** cards stack vertically — image above text (`flex-direction: column`). The fixed `margin-left: 35px` is removed so cards use the full available width. The card image goes full-width (cap at `min(100%, 215px)` or similar).
- **md+ (≥768px):** cards remain side-by-side (current `flex` layout) but `margin-left` reduces from 35px to `--space-sm` (1rem) for a tighter fit within the narrower nav+content grid.

**Draft badge:** no changes to badge positioning.

# Acceptance criteria

- [ ] On xs/sm viewports, cards stack vertically with image above text
- [ ] On xs/sm viewports, no fixed left-margin pushes cards off-screen
- [ ] On md+ viewports, cards remain side-by-side with reduced left margin
- [ ] Featured cards follow the same layout rules but retain their larger image cap

# Blocked by

Issue #01 — the breakpoint custom properties must exist so the media queries reference consistent values
