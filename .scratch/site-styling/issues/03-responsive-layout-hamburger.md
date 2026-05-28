Status: ready-for-agent

## What to build

Make the layout responsive with a mobile hamburger slide-in drawer. Key behaviors:

**Desktop (≥ 768px):**
- `.page`: three-column grid (nav | content | aside)
- `.home`: two-column grid (nav | content + posts) — empty aside element removed
- `.term`: two-column grid (nav | posts) — empty aside element removed
- Header is static (normal flow), hamburger button hidden

**Mobile (< 768px):**
- All grids collapse to single-column stack
- Header is `position: sticky` at top
- Hamburger button visible, left-aligned in header
- Tapping hamburger slides in a drawer from the left containing the nav content
- Tapping hamburger again (or clicking outside) closes the drawer
- Tapping a link inside the drawer closes it
- Aside on `.page` reflows to full-width below content

The hamburger should be implemented with minimal JS. A single function that toggles a class on a container element — CSS handles the slide animation.

## Acceptance criteria

- [ ] Desktop layout unchanged from current (aside from empty aside removal on `.home` and `.term`)
- [ ] Below 768px, all pages display as single-column stacked layout
- [ ] Hamburger button appears in header below 768px, is hidden on desktop
- [ ] Tapping hamburger opens a drawer that slides in from the left
- [ ] Drawer contains the nav content (tag cloud on home/term, ToC on page)
- [ ] Tapping hamburger again or clicking outside drawer closes it
- [ ] Tapping a drawer link closes the drawer
- [ ] Header is sticky on mobile, static on desktop
- [ ] CSS transition for drawer slide (smooth, not instant)
- [ ] No external JS dependencies

## Blocked by

- #01 (Choose palette) — for colors of the drawer background, overlay, etc. Structural CSS can be written with placeholder variables.

## Notes

- The breadown does not include site menu rendering (decided: menu is not rendered for now).
