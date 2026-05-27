Status: ready-for-agent

# Scaffold exampleSite

## What to build

Create an `exampleSite/` directory at the theme root that makes it a valid Hugo site consuming the theme via `theme = 'red-wolf'`. This is the conventional way for Hugo themes to ship a self-contained demo.

The `exampleSite/hugo.toml` should mirror the theme's own config defaults (same locale, markup ToC settings, base menu), but with clear placeholder values (e.g. `title = 'Site Title'`) so users see exactly which config variables map to which template outputs.

Create the 4 required asset images under the theme's `assets/images/`:

- `circle_mask.png` — a small PNG with a transparent circle on a solid background. Must be actual PNG (not SVG) since `images.Mask` needs alpha channel.
- `hero.png` — a simple colored placeholder image (e.g. 200×200 solid rectangle) that will be masked by `circle_mask.png` on the home page.
- `logo.png` — same approach as hero, used in the header next to the site title.
- `default.jpg` — a small JPEG fallback used by `imagextractor.html` when no page image is found.

These images live in the theme's `assets/` (not the exampleSite's), so they're available to any site using the theme. Users override by placing their own files at the same paths.

## Acceptance criteria

- [ ] `exampleSite/` directory exists at theme root with a working `hugo.toml`
- [ ] `exampleSite/hugo.toml` sets `theme = 'red-wolf'` (or `red-wolf` resolved via themesDir)
- [ ] Running `hugo server --source exampleSite` starts without errors
- [ ] Home page renders: hero section (with masked image), logo in header, site title visible
- [ ] All 4 required images exist in `assets/images/` with valid image data

## Blocked by

None — can start immediately
