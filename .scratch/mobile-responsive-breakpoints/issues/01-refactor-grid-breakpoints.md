Status: closed

# What to build

Replace the theme's single 768px breakpoint with Bootstrap's full 6-tier system (xs: <576px, sm: ≥576px, md: ≥768px, lg: ≥992px, xl: ≥1200px, xxl: ≥1400px). This is the foundation all other mobile work depends on.

**Grid layout changes per tier:**

| | xs <576 | sm ≥576 | md ≥768 | lg ≥992 | xl ≥1200 | xxl ≥1400 |
|---|---|---|---|---|---|---|
| **Grid (page)** | 1 col | 1 col | 2 col (nav\|content) | 3 col | ← same | ← same |
| **Grid (home/term)** | 1 col | 1 col | 2 col (nav\|posts) | 2 col | ← same | ← same |
| **Nav** | Drawer | Drawer | Inline sticky | Inline sticky | ← same | ← same |
| **Header** | Sticky | Sticky | Static | Static | ← same | ← same |
| **Gutters** | 16px | 16px | 24px | 24px | 32px | 32px |

**Files to touch:**
- `assets/css/layout.css` — grid definitions for `.home`, `.page`, `.term`
- `assets/css/main.css` — replace `@media (max-width: 767px)` / `@media (min-width: 768px)` blocks with tiered queries; update drawer/hamburger/hamburger/overlay rules; update header sticky rule
- `assets/css/components/tables.css` — its media query at line 47
- `assets/js/main.js` — change `FOOTNOTE_MIN_WIDTH` from `768` to `992` (line 128)

Define CSS custom properties for the breakpoint values on `:root` so other component files can reference them consistently.

# Acceptance criteria

- [ ] On xs/sm (<768px): single-column grids everywhere, nav in slide-in drawer, header sticky
- [ ] On md (768–991px): `.page` has 2-column grid (nav + content), aside flows below content; `.home`/`.term` have 2-column grid (nav + posts); nav is inline sticky (no drawer); header is static
- [ ] On lg+ (≥992px): `.page` has 3-column grid; `.home`/`.term` have 2-column grid; nav inline sticky; header static
- [ ] Gutters widen at md (24px) and xl (32px) thresholds
- [ ] Floating footnotes only activate at ≥992px (lg+); at 768–991px they render in normal flow within the aside

# Blocked by

None — can start immediately
