Status: ready-for-agent

## What to build

Apply the theme's typography system: serif headings (Georgia stack), sans-serif body (system default). No external fonts — all typefaces must be system-installed.

The font stacks should be defined in a way that can be overridden by a site using the theme (e.g., via CSS custom properties or Hugo params), but defaults should be set at the theme level.

## Acceptance criteria

- [ ] Body text uses a system sans-serif stack (e.g. `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`)
- [ ] All headings (`h1`–`h6`) use `Georgia, "Times New Roman", serif`
- [ ] Rationale comment in CSS (optional — "No external fonts; serif headings + sans body for hierarchy without dependencies")
- [ ] Font stacks are defined via CSS custom properties (`--font-body`, `--font-heading`) for easy override

## Blocked by

- #01 (Choose palette) — for colors, but font-family choices are independent. Can implement CSS custom property structure now, value will be the same regardless of palette.
