Status: ready-for-human

## What to decide

Pick the color palette and visual language for the red-wolf theme. The result will be a set of CSS custom properties (design tokens) that all subsequent styling issues consume.

### Palette options

| Palette | Key tones |
|---------|-----------|
| **Forest & bark** | Deep green (#2D5A27), warm brown (#6B4226), tan (#D4B895), near-black (#1A1A1A) |
| **Desert** | Sand (#E8D5B7), rust (#A0522D), slate (#5B6770), warm white (#FAF5EB) |
| **Moss & stone** | Olive (#6B8E23), slate gray (#4A5568), warm white (#F7F2E8), dark moss (#3A4A1F) |

### Decisions needed

- Which palette?
- Border/shadow language: heavy rounded borders + colored shadows, flat, minimal, or something else?
- Link styling: underline on hover, color change, or both?
- Spacing/rhythm: base unit for padding/margins (e.g. 0.5rem / 1rem / 1.5rem scale)
- Any other global decorative choices (background texture, gradients, etc.)

## Output

A set of CSS custom properties defined in `:root` (likely in `main.css` or a new `tokens.css` imported by it). Subsequent issues will reference these variables rather than hardcoding values.

## Acceptance criteria

- [ ] Palette chosen and documented in CONTEXT.md
- [ ] CSS custom properties defined for: `--color-bg`, `--color-text`, `--color-accent`, `--color-accent-secondary`, `--color-surface`, `--color-border`, `--color-link`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`
- [ ] Existing hardcoded color values in CSS replaced with custom property references

## Blocked by

None - can start immediately
