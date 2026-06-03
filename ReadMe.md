# red-wolf

A Hugo theme with a green-on-cream aesthetic, circular-masked hero/logo images, floating footnotes, an image lightbox, and a responsive drawer navigation.

## Features

- **Forest-green color palette** — CSS custom properties, easy to override
- **Circular-masked images** — `hero.png` and `logo.png` masked via `circle_mask.png` using Hugo's `images.Mask`
- **Image lightbox** — click any content image to view fullscreen (opt-out per-page or site-wide)
- **Floating footnotes** — footnote section repositions to the sidebar on wide screens, aligned with their references (opt-out per-page or site-wide)
- **Drawer navigation** — hamburger menu on mobile slides in a side drawer (Table of Contents on pages, tag cloud elsewhere)
- **Tag cloud** — sidebar listing all tags with post counts
- **Pagination** — home and tag pages
- **Featured posts** — mark posts with `featured: true` front-matter to pin them above the paginated list
- **Draft badge** — visible indicator on draft pages
- **Auto card images** — cascading priority: `cardImage` front-matter → page resource matching URL base → first image resource → remote image in content → fallback default
- **Clean summaries** — strips images, figures, and tables; plainifies; truncates at `summaryMaxLength` (default 300)

## Requirements

- Hugo **>= 0.146.0** (non-extended is fine)
- **No** Node.js, npm, or external build tools. CSS/JS pipeline uses Hugo's native `css.Build` / `js.Build`.

## Installation

Add the theme as a git submodule:

```shell
git submodule add https://github.com/scybernator/red-wolf.git themes/red-wolf
```

Then set `theme = 'red-wolf'` in your site's `hugo.toml`.

## Quick start

The repo includes an `exampleSite/` for development and preview:

```shell
hugo server --source exampleSite
```

## Configuration

### Site `hugo.toml`

```toml
baseURL = 'https://example.org/'
locale = 'en-US'
title = 'My Site'
theme = 'red-wolf'

[pagination]
  pagerSize = 10

[params]
  summaryMaxLength = 300          # default character limit for card summaries
  disableImageLightbox = false    # set true to disable lightbox site-wide
  disableFloatingFootnotes = false # set true to disable floating footnotes site-wide

[params.social]
  github = 'https://github.com/example'
  twitter = 'https://twitter.com/example'

[markup.tableOfContents]
  startLevel = 1
  endLevel = 4
  ordered = true
```

### Menus

Configure in `hugo.toml`:

```toml
[menus]
  [[menus.main]]
    name = 'Home'
    pageRef = '/'
    weight = 10
  [[menus.main]]
    name = 'About'
    pageRef = '/about'
    weight = 20
```

### Required asset images

Place these in `assets/images/`:

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
| `home.html` | `/` | Hero + tag cloud + featured + paginated pages as `.page-card` |
| `page.html` | Single pages | ToC nav, title+subtitle, date, content, tags, floating footnotes |
| `section.html` | Section listing | Title, content, child page list |
| `taxonomy.html` | `/tags/` (list) | Empty — no rendering |
| `term.html` | `/tags/<tag>/` | Tag cloud + matching pages as `.page-card` |
| `info.html` | Debug route | Lists all image resources across the site |

## Image extraction logic

Priority for a page's card image (`imagextractor.html`):

1. `cardImage` front-matter param matching a page resource name
2. Page resource whose name matches the page's URL base
3. First image resource in the page bundle
4. Remote image URL found via regex in content
5. Fallback: `/images/default.jpg`

## Per-page front-matter overrides

```yaml
---
title: "My Page"
subtitle: "Optional subtitle"
featured: true                    # pins to top of home page
cardImage: "my-card.jpg"          # explicit card image
disableImageLightbox: true        # disable lightbox on this page only
disableFloatingFootnotes: true    # disable floating footnotes on this page only
---
```

## Development

```shell
hugo server --source exampleSite    # dev server with live reload
hugo --source exampleSite            # production build
```
