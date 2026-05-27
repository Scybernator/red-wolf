Status: ready-for-agent

# Image extraction demo posts with tags

## What to build

Create 5 leaf-bundle posts under `exampleSite/content/posts/`, each demonstrating one priority tier of the theme's image-extraction logic (`imagextractor.html`). Each post gets a short body describing what it demonstrates, and all posts are assigned tags so the tag cloud and term pages have content.

The 5 posts and their setup:

1. **`using-featured-image/`** (priority 1) — front-matter sets `featuredImage: "hero-shot.png"`. Bundle includes `hero-shot.png`.
2. **`name-match-resource/`** (priority 2) — no `featuredImage`. Bundle includes an image named `name-match-resource.png` matching the URL base.
3. **`first-bundle-image/`** (priority 3) — no `featuredImage`, no name match. Bundle includes `photo-a.png` and `photo-b.png`; the first one should appear.
4. **`remote-image-link/`** (priority 4) — no bundle resources. Body contains a markdown image linking to a remote URL (e.g. `https://picsum.photos/400/300`).
5. **`fallback-image/`** (priority 5) — no images at all. Falls through to `default.jpg`.

Tags vocabulary: `featured`, `images`, `remote`, `reference`. Distribute across the 5 posts so the home-page tag cloud shows multiple entries and some tags have multiple pages.

Bundle images can be simple colored placeholders (e.g. 100×100 PNGs with distinct colors).

## Acceptance criteria

- [ ] All 5 posts exist as leaf bundles with correct front-matter
- [ ] Posts appear as `.page-card` on the home page, each with the correct image for its priority tier
- [ ] Tag cloud on home page lists tags with correct counts
- [ ] `/tags/<tag>/` term pages show matching posts as `.page-card`
- [ ] `/tags/` (taxonomy list) renders as an empty block
- [ ] `hugo server --source exampleSite` builds without errors

## Blocked by

- Slice 1 (scaffold exampleSite)
