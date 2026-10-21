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

## Styling

Reuses global utility classes from `css/utils/button.css`:

- `button` — base sizing, transitions, focus outline
- `button-text` — transparent bg, no border
- `button-icon-only` — square, aspect-ratio 1, no padding-inline
- `button-circular` — pill border-radius
- `button-sm` — compact padding
- `button-close` — color override (currentColor), hover overlay, SVG sizing

## Color

Because color inherits from the parent via `currentColor`, the same component looks correct on:

- `notification-emphasis-solid` (colored bg, white text) → close is white
- `notification-emphasis-subtle` (tint bg, colored text) → close matches variant color
- `info-box`, `banner`, modal, drawer — same rule
