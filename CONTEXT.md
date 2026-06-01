# Red Wolf Hugo Theme — Glossary

## Design direction

- **Earthy / natural** — the theme conveys a grounded, organic feel. Colors and typography draw from natural landscapes rather than synthetic or corporate palettes.

### Color palette: Forest & bark

Defined via CSS custom properties in `assets/css/main.css:7`.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#F5F0E8` | Page background (warm cream) |
| `--color-text` | `#1A1A1A` | Body text (near-black) |
| `--color-accent` | `#2D5A27` | Borders, shadows, primary accent (deep green) |
| `--color-accent-secondary` | `#6B4226` | Secondary accent (warm brown) |
| `--color-surface` | `#FFFFFF` | Card/surface backgrounds |
| `--color-border` | `#D4B895` | Subtle borders (tan) |
| `--color-link` | `#2D5A27` | Link color (deep green, unused — links are unstyled per design choice) |

### Border & shadow language

- **Heavy rounded borders** — `--radius-sm: 8px`, `--radius-md: 16px`, `--radius-lg: 25px`; hero/header elements may use larger (50px) radii.
- **Colored shadows** — `--shadow-md` uses `--color-accent` (deep green) tinted at 25% opacity.

### Spacing scale (1rem base)

| Token | Value |
|-------|-------|
| `--space-xs` | `0.5rem` |
| `--space-sm` | `1rem` |
| `--space-md` | `2rem` |
| `--space-lg` | `4rem` |

### Link styling

- No color or underline decoration. Only `cursor: pointer` signals clickability.

## Typography

- **No external fonts** — all typefaces are system-installed. No Google Fonts, no `@font-face` loading.
- **Headings**: serif stack (`Georgia, "Times New Roman", serif`)
- **Body**: sans-serif stack (system default sans)
- **Rationale**: the serif/sans contrast creates hierarchy without external dependencies.

## Header

- Hamburger menu button: left-aligned, hidden on desktop (≥ 768px).
- Header: `position: sticky` on mobile only; static on desktop.
- Logo + site title remain as-is pending palette decisions.

## Layout & responsiveness

- **Breakpoints**: Bootstrap's `md` (768px) as the mobile ↔ desktop threshold.
- **Mobile (< 768px)**:
  - Nav becomes a slide-in drawer from the left, toggled by a hamburger button.
  - Content goes full-width.
  - Posts (home/term) go full-width.
  - Aside (.page) becomes full-width below content.
- **Desktop (≥ 768px)**:
  - Three-column grid on `.page` (nav | content | aside).
  - Two-column grid on `.home` and `.term` (nav | content/posts).

## Tag cloud

- Displayed in nav on `home.html` and `term.html` (desktop) and in the slide-in drawer (mobile).
- Tags rendered as pills with link count.
- "Tags:" heading above the list.

## Table of Contents

- On `.page` only.
- Desktop: sticky in the left nav column, follows scroll.
- Mobile: in the slide-in drawer.

## Footer

- Copyright line (current year, auto-generated).
- Optional social links configured via `hugo.toml` `[params]`.

## Page cards

- Shown on `home.html` and `term.html`.
- A featured card exists for each page with `featured: true` in front matter (ordered by date descending). If none, the most recent page is featured.
- Featured cards: larger image, taller, visually prominent.
- Non-featured cards: standard size, indented relative to the hero to let the hero stand out.
- First-card yellow badge removed.

## Pagination

- Both home page and tag term pages are paginated.
- **Per-page count**: theme default 10, overridable by site config via `[pagination] pagerSize`.
- **Home page**: featured cards (and the auto-feature fallback) appear only on page 1. Hero content (`.Content` from `_index.md` + hero image) also only on page 1. Tag cloud nav persists on all pages.
- **Term page**: simple pagination of all `.Pages`, no featured split or first-page treatment.
- **Controls**: numbered pill buttons with prev/next arrows, styled in the earthy palette. Absent when total pages ≤ 1.
  - Empty asides on `.home` and `.term` to be removed when implementation begins.

## Floating footnotes

- On `.page` layouts, Hugo's markdown footnotes (`<div class="footnotes">`) are moved from `.content` to `.aside` via JavaScript on page load.
- At window widths ≥ 768px, each footnote `<li>` is positioned absolutely within the aside column, aligned vertically beside its in-text reference. A `ResizeObserver` on `.content` recalculates positions on dimension changes.
- Below 768px, footnotes render in normal flow within the aside (which stacks below `.content` on mobile).
- **Opt-out**: `disableFloatingFootnotes: true` in `hugo.toml` `[params]` (site-wide) or in page front matter (per-page). Enabled by default.
