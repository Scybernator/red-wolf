# Red Wolf Hugo Theme — Glossary

## Design direction

- **Earthy / natural** — the theme conveys a grounded, organic feel. Colors and typography draw from natural landscapes rather than synthetic or corporate palettes.

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
  - Empty asides on `.home` and `.term` to be removed when implementation begins.
