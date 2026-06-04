Status: closed

# What to build

Two independent typography fixes and one hero layout fix.

**1. Clamp `.site-title`** (currently `font-size: 10vh`)
- Apply `clamp(2rem, 10vh, 4rem)` so the title never goes below ~32px or above ~64px regardless of viewport height.

**2. Clamp hero content font-size** (currently `font-size: x-large` ≈24px)
- Apply `clamp(1.2rem, 4vw, x-large)` so hero text scales down on small viewports but doesn't exceed its current size on desktop.

**3. Fix hero overflow on narrow screens** (home.html)
- The hero's inline `style="display: flex; align-items: center;"` defaults to `flex-wrap: nowrap`, causing the image and text content to overflow on narrow phones.
- Move the inline styles to a CSS class (`.hero-inner` or similar) on `.hero > div`.
- Add `flex-wrap: wrap; justify-content: center;` so the image wraps above the text on xs/sm.

# Acceptance criteria

- [ ] `.site-title` doesn't grow comically large on tall-viewport phones
- [ ] Hero text scales down gracefully on narrow screens
- [ ] Hero image and text wrap (image above text) on xs/sm instead of overflowing
- [ ] No visual change on desktop viewports

# Blocked by

None — can start immediately
