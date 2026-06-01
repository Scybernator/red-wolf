# Home & Term Page Pagination

Status: closed

## What to build

Add numbered pagination to the home page (`/`) and tag term pages (`/tags/<tag>/`), keeping the existing featured-post split on the home page.

### Design decisions

- **Featured only on page 1**: featured posts (and the auto-feature fallback) appear only on page 1 of the home page. Subsequent pages show only non-featured posts.
- **Hero only on page 1**: the hero section (`.Content` from `_index.md` + hero image) shows only on page 1. Tag cloud nav remains on all pages.
- **Per-page count**: 10 (theme default). ExampleSite overrides to 5 for testability.
- **UI style**: numbered page buttons with prev/next arrows, pill-shaped, using the existing earthy palette (`--color-accent`, `--color-surface`, `--color-border`, etc.). Matches the tag pill aesthetic.
- **Term pages**: simple pagination of all `.Pages`, no featured split, no special first-page treatment.

### Files to create / modify

Create:
- `layouts/_partials/pagination.html` — numbered-button pagination partial
- `assets/css/components/pagination.css` — pagination bar styles

Modify:
- `layouts/home.html` — add pagination with featured-on-page-1 + hero-on-page-1 logic
- `layouts/term.html` — add simple pagination
- `exampleSite/hugo.toml` — set `paginate = 5`
- `assets/css/main.css` — add `@import "components/pagination.css"`

## Acceptance criteria

- [ ] Home page paginates at 10 posts per page (theme default) / 5 posts per page (exampleSite)
- [ ] Featured posts show only on page 1 of home; auto-feature fallback still works
- [ ] Hero section shows only on page 1 of home; tag cloud nav on all pages
- [ ] Term tag pages paginate normally with no featured split
- [ ] Pagination controls are numbered pill buttons in the earthy style, with prev/next arrows
- [ ] Pagination controls are absent on single-page results (fewer posts than the per-page limit)

## Blocked by

None - can start immediately
