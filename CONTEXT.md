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

- No color or underline decoration. Only `cursor: pointer` signals clickability (applies to links only; other interactive elements may use different cursors).

## Typography

- **No external fonts** — all typefaces are system-installed. No Google Fonts, no `@font-face` loading.
- **Headings**: serif stack (`Georgia, "Times New Roman", serif`)
- **Body**: sans-serif stack (system default sans)
- **Rationale**: the serif/sans contrast creates hierarchy without external dependencies.

## Header

- Hamburger menu button: left-aligned, hidden on md+ (≥ 768px).
- Header: `position: sticky` on xs/sm only; static on md+.
- Logo + site title remain as-is pending palette decisions.

## Layout & responsiveness

- **Breakpoints**: Bootstrap's six tiers — xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), xxl (≥1400px).
- **xs, sm (<768px)**:
  - Nav becomes a slide-in drawer from the right, toggled by a hamburger button.
  - Content goes full-width.
  - Posts (home/term) go full-width.
  - Aside (`.page`) stacks full-width below content.
- **md (768–991px)**:
  - `.page`: two-column grid (nav | content). Aside flows below content.
  - `.home`, `.term`: two-column grid (nav | posts). Aside is empty.
  - Nav is inline (sticky, left column), no drawer.
- **lg, xl, xxl (≥992px)**:
  - `.page`: three-column grid (nav | content | aside).
  - `.home`, `.term`: two-column grid (nav | posts).

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

## Draft badge

- Shown on page cards (`home.html`, `term.html`) and on the single page view (`page.html`) when the page's front matter has `draft: true`.
- **Position**: absolute, top-left corner of the card image (cards) / `.content` area (page view).
- **Visual**: pill-shaped (`border-radius: 999px`), amber/gold background, dark text, uppercase "DRAFT", small font (`0.75em`), bold weight.
- **Implementation**: `assets/css/components/draft-badge.css`. Check is via Hugo's built-in `.Draft` property.
- **No effect in production** — Hugo excludes draft pages from `site.RegularPages` by default, so the badge only ever appears in dev mode (`hugo server -D`).

## Image lightbox

- On `.page` layouts, images rendered via markdown (`{{ .Content }}`) are clickable to open in a full-viewport lightbox overlay.
- **Trigger**: click the image. Images already wrapped in a link (`<a>` around `<img>`) are excluded — the link takes priority.
- **Display**: the image is contained within the viewport (`max-width`/`max-height` with padding), centered, preserving aspect ratio.
- **Caption**: the image's `alt` text is shown as a caption below the image within the lightbox. Omitted if no alt text exists.
- **Accessibility**: overlay uses `role="dialog"` and `aria-modal="true"`. Close button has `aria-label="Close image"`.
- **Body scroll**: locked (`overflow: hidden`) while lightbox is open.
- **Transition**: fade in/out, ~200ms.
- **Dismiss**: click backdrop, click image, press Escape, or click the close (X) button. All four work.
- **Backdrop**: semi-transparent dark overlay (`rgba(0,0,0,0.8)`). Close button: top-right, white X, CSS-drawn (no icon font).
- **Implementation**: lightbox overlay injected by JavaScript at runtime. JS logic lives in a self-contained module within `assets/js/main.js`. CSS added in a new `assets/css/components/lightbox.css` component file.
- **Hover**: `cursor: zoom-in` + `opacity: 0.85` on hover with a CSS transition.
- **Gallery**: none — each image opens independently. No prev/next navigation.
- **Responsive**: same behavior on mobile and desktop. Close button has ≥44px touch target on mobile.
- **Scope**: `page.html` only (not home, term, etc.).

## Floating footnotes

- On `.page` layouts, Hugo's markdown footnotes (`<div class="footnotes">`) are moved from `.content` to `.aside` via JavaScript on page load.
- At window widths ≥ 992px (lg+), each footnote `<li>` is positioned absolutely within the aside column, aligned vertically beside its in-text reference. A `ResizeObserver` on `.content` recalculates positions on dimension changes.
- Below 992px, footnotes render in normal flow within the aside (which stacks below `.content` on mobile/tablet).
- **Opt-out**: `disableFloatingFootnotes: true` in `hugo.toml` `[params]` (site-wide) or in page front matter (per-page). Enabled by default.
