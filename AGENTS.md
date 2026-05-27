# red-wolf — Hugo theme

## Requirements

- Hugo **>= 0.146.0** (non-extended is fine — per `hugo.toml.module.hugoVersion.extended = false`)
- **No** Node.js, npm, or external build tools. CSS/JS pipeline is Hugo-native (`css.Build`/`js.Build`).

## Commands

This is a **theme**, not a standalone site. The repo includes an `exampleSite/` for development and previewing:

```shell
hugo server --source exampleSite    # dev server with live reload
hugo --source exampleSite            # production build
```

To preview from a real site:
```shell
hugo server    # from a site dir with `theme = 'red-wolf'`
```

## Asset pipeline

- `assets/css/main.css` — entry point; imports `components/header.css`, `components/footer.css`, `layout.css`
- `assets/js/main.js` — single file, no imports
- CSS/JS are minified and fingerprinted in production, source-mapped in dev (controlled by `hugo.IsDevelopment` in `head/css.html`/`head/js.html`)

## Required asset images

The theme expects these in `assets/images/`:

| File | Used by | Notes |
|------|---------|-------|
| `hero.png` | `layouts/home.html` | Circular-masked via `circle_mask.png` + `images.Mask` |
| `logo.png` | `layouts/_partials/header.html` | Same mask technique |
| `circle_mask.png` | Both of the above | Must be **PNG** (transparency needed for mask) |
| `images/default.jpg` | `layouts/_partials/imagextractor.html` | Fallback when no page image found |

## Templates

| Layout | Route | Notes |
|--------|-------|-------|
| `baseof.html` | All | Grid layout: header / main / footer |
| `home.html` | `/` | Hero + tag cloud + all regular pages as `.page-card` |
| `page.html` | Single pages | ToC nav, title+subtitle, date, content, tags |
| `taxonomy.html` | `/tags/` (list) | Empty block — no rendering |
| `term.html` | `/tags/<tag>/` | Tag cloud + matching pages as `.page-card` |
| `info.html` | Debug route | Lists all image resources across the site |

## Image extraction logic (`imagextractor.html`)

Priority for a page's card image:
1. `featuredImage` front-matter param matching a page resource name
2. Page resource whose name matches the page's URL base
3. First image resource in the page bundle
4. Remote image URL found via regex in content
5. Fallback: `/images/default.jpg`

## Notable quirks

- **`.gitignore` excludes `MeRead.md`** — Ignore this file, just a scratchpad for the author.
- **ToC `startLevel = 1` in `hugo.toml`** — author notes this may not work at theme level; may need to be set in site's `hugo.toml`
- **`home.html`**: Uses `site.RegularPages` directly (no pagination yet — noted in `MeRead.md`)
- **Archetype**: `archetypes/default.md` creates draft pages
- **`i18n/` and `data/` directories are empty** — ready for use but unused

## Agent skills

### Issue tracker

Issues are tracked as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Labels match the canonical defaults (`needs-triage`, `needs-info`, etc.). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout (`CONTEXT.md` + `docs/adr/` at root). See `docs/agents/domain.md`.
