Status: closed

## What to build

A lightbox for markdown content images on `page.html`. Clicking an image (unless wrapped in a link) opens a full-viewport overlay showing the image at its largest size that fits within the viewport, with a caption from the image's `alt` text. The overlay fades in/out (~200ms). Dismiss by clicking backdrop, clicking the image, pressing Escape, or the close button. Body scroll is locked while open. All behaviour is identical on mobile and desktop.

Opt-out via `disableImageLightbox: true` in `hugo.toml` `[params]` (site-wide) or in page front matter (per-page). The `.page` element receives a `data-disable-image-lightbox` attribute when disabled (matching the existing footnote opt-out pattern).

## Acceptance criteria

- [ ] Markdown `<img>` tags in `.content` on `page.html` show `cursor: zoom-in` and dim to `opacity: 0.85` on hover
- [ ] Clicking an image (not wrapped in an `<a>`) opens a dark overlay (`rgba(0,0,0,0.8)`) with the image centered, contained within the viewport, preserving aspect ratio
- [ ] The image's `alt` text appears as a caption below the image (omitted if no alt text)
- [ ] A close button (white X, CSS-drawn, no icon font) is positioned top-right with ≥44px touch target
- [ ] Dismiss works via: click backdrop, click image, press Escape, click close button
- [ ] Body scroll is locked (`overflow: hidden`) while lightbox is open
- [ ] Overlay fades in/out (~200ms)
- [ ] Images already wrapped in a link (`<a>` around `<img>`) are not intercepted — the link takes priority
- [ ] Opt-out: `disableImageLightbox: true` in site config or page front matter disables click behavior and cursor/hover effects
- [ ] Accessibility: overlay has `role="dialog"` and `aria-modal="true"`. Close button has `aria-label="Close image"`.
- [ ] Same behavior on mobile and desktop
- [ ] No prev/next gallery navigation (one image at a time)
- [ ] JS logic is a self-contained module within `assets/js/main.js` (easy to split out later)
- [ ] CSS lives in `assets/css/components/lightbox.css` (imported by `main.css`)

## Blocked by

None - can start immediately
