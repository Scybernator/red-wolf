Status: closed

# What to build

Final visual review of all mobile responsive changes across every breakpoint tier. Build the exampleSite and inspect at each tier, then tweak any values that don't feel right.

**Checklist for each tier (xs, sm, md, lg, xl, xxl):**

- Grid collapses to correct column count
- Nav mode matches expectations (drawer vs inline)
- No horizontal overflow or broken layout
- Page cards render correctly (stacked vs side-by-side)
- Hero content wraps properly
- Typography feels appropriately scaled
- Gutters are comfortable (not too tight, not too wide)
- Touch targets feel adequate on real/emulated touch devices
- Floating footnotes behave correctly at their new threshold
- Tables scroll horizontally on narrow screens (no regression)
- Lightbox works on mobile (close button size, scroll lock)

**Tweak values as needed** — the initial `clamp()`, spacing, and sizing values are starting points and may need adjustment after real visual inspection.

# Acceptance criteria

- [ ] All breakpoints pass visual inspection
- [ ] Any rough edges from issues #01–#04 are corrected
- [ ] No regressions in existing desktop layout

# Blocked by

Issues #01, #02, #03, #04
