Status: ready-for-agent

# Standalone pages and section listing

## What to build

Create content beyond the posts section to exercise the theme's `section.html`, `page.html`, and navigation paths for non-post content:

- **`about/`** — leaf bundle (`_index.md`). A single page with richer content (headings, paragraphs, blockquotes) to exercise the ToC navigation, date display, title+subtitle rendering, and tags listing in `page.html`.
- **`projects/`** — section (`_index.md` with `layout: section`). Lists child pages using `section.html`.
- **`projects/project-alpha/`** — leaf bundle. A project page with subtitle.
- **`projects/project-beta/`** — leaf bundle. A project page without subtitle, demonstrating both with/without subtitle.

Page content should use placeholder titles like "About This Site" and "Project Alpha" to make the config-to-template mapping obvious.

## Acceptance criteria

- [ ] `about/` page renders with ToC nav, title, date, and body content
- [ ] `about/` shows tags listing if tags are assigned (or no tags section if none)
- [ ] `projects/` section page lists Project Alpha and Project Beta with summaries
- [ ] Project Alpha page shows title + subtitle
- [ ] Project Beta page shows title without subtitle
- [ ] `hugo server --source exampleSite` builds without errors

## Blocked by

- Slice 1 (scaffold exampleSite)
