Status: closed

# What to build

Bump interactive element sizes to meet the W3C 44×44px minimum touch target recommendation across all breakpoints.

**Elements to fix:**

- Hamburger button (`#hamburger`): currently ~37px effective hit area — add `min-width: 44px; min-height: 44px`
- Drawer close button (`#drawer-close`): currently ~24px — same treatment
- Pagination pills (`.pagination__page`, `.pagination__arrow`): currently `2.5rem` (40px) — bump to `2.75rem` (44px)
- Drawer nav links (`#drawer a`): currently text-sized only — add `display: block; min-height: 44px; line-height: 44px` so links have adequate spacing

The lightbox close button already has explicit 44×44px sizing — no change needed.

# Acceptance criteria

- [ ] Hamburger button has ≥44×44px hit area
- [ ] Drawer close button has ≥44×44px hit area
- [ ] Pagination pills are ≥44px tall
- [ ] Drawer nav links have ≥44px line-height / min-height for comfortable tapping
- [ ] Visual appearance is unchanged (only invisible hit area / min-size grows)

# Blocked by

None — can start immediately
