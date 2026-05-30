Status: closed

## What to build

Restyle the tag cloud (shown in nav on `home.html` and `term.html`, and in the slide-in drawer on mobile) as tag pills with link counts.

Each tag renders as a pill-shaped element:
- Rounded background (pill shape using `border-radius` or `pill` shape)
- Tag name as a link
- Count in parentheses (e.g. "hugo (3)") retained
- "Tags:" heading above the list retained
- Uses CSS custom properties for colors, radii, spacing

## Acceptance criteria

- [x] Each tag renders as a rounded pill with background color
- [x] Tag link + count displayed inside the pill
- [x] "Tags:" heading retained above the list
- [x] Hover state for pills (e.g., background darkens or accent shifts)
- [x] Styled via CSS custom properties from `:root`
- [x] Works correctly inside the slide-in drawer on mobile

## Blocked by

- #01 (Choose palette) — pill colors come from the palette.
