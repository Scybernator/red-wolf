Status: closed

## What to build

Footer with copyright line and optional social links.

**Copyright:**
- Auto-generated current year: "Copyright {year}. All rights reserved."

**Social links (optional, configured via `hugo.toml`):**
- Site author can add social links under `[params.social]`:
  ```toml
  [params.social]
    github = "https://github.com/username"
    twitter = "https://twitter.com/username"
  ```
- If `[params.social]` is absent or empty, the footer shows only the copyright line
- Social links render as icon + text, or just text (no icon set required — use text labels like "GitHub", "Twitter" for now)
- Social links open in a new tab with `rel="noopener"` (privacy)

**Styling:**
- Footer uses CSS custom properties from `:root`
- Separator line at top (currently `border-top: 1px solid #222`) updated to use theme tokens

## Acceptance criteria

- [x] Footer shows "Copyright {current year}. All rights reserved."
- [x] Optional social links render when configured in `hugo.toml`
- [x] Footer renders only copyright when no social links configured
- [x] Social links open in new tab with `rel="noopener"`
- [x] Separator line uses theme CSS custom properties
- [x] Footer layout works on both mobile and desktop (full-width stack)

## Blocked by

- #01 (Choose palette) — for styling tokens.
