---
title: Button Close
group: Globals
version: 2.0.0
css_prefix: btn-close
---

# Button Close

Icon-only dismiss control. Composable across `notification`, `info-box`, `banner`, modals, drawers, dismissable chips.

Inherits color from the parent context via `currentColor` — no variant/appearance/size decisions needed.

## Usage

```twig
{% include "mud_egov:button-close" with {
  button_close_label: 'Închide'|t,
} only %}
```

With custom icon:

```twig
{% include "mud_egov:button-close" with {
  button_close_label: 'Șterge'|t,
  button_close_icon: '<svg …>…</svg>',
} only %}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `button_close_label` | string | `'Închide'` | `aria-label` of the button |
| `button_close_icon` | string, null | built-in X | SVG override with `aria-hidden="true"` |
| `button_close_uc` | array | `[]` | Utility classes |
| `button_close_att` | Attribute | `null` | Extra attributes |

No slots.

## Styling

Self-contained: 32px square, 16px icon, 4px radius, transparent background with a tint on hover (`--color-background-base-tertiary-hover`). On colored backgrounds set the public override, for example:

```css
.notification-emphasis-solid {
  --btn-close_bg_h: var(--color-background-alpha-overlay-dark);
}
```

Public overrides: `--btn-close_size`, `--btn-close_icon_size`, `--btn-close_b-r`, `--btn-close_c`, `--btn-close_bg_h`.

## Color

Because color inherits from the parent via `currentColor`, the same component looks correct on:

- `notification-emphasis-solid` (colored bg, white text) → close is white
- `notification-emphasis-subtle` (tint bg, colored text) → close matches variant color
- `info-box`, `banner`, modal, drawer — same rule

## Accessibility

- `button_close_label` becomes the `aria-label`; the icon is hidden from assistive tech.
- Focus: the MUD ring (`--focus-ring`) on `:focus-visible`.
- On touch screens the hit area grows to 40px without changing the visual size.
- The transition is off under `prefers-reduced-motion: reduce`.
