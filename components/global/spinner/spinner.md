---
title: Spinner
group: Globals
version: 1.1.0
css_prefix: spinner
---

# Spinner

CSS-only animated circular loading indicator.

## Usage

```twig
{% include 'mud_egov:spinner' with {} %}

{% include 'mud_egov:spinner' with {
  spinner_size: 'lg',
  spinner_variant: 'dark',
  spinner_label: 'Se încarcă...',
} %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `spinner_size` | `xs\|sm\|md\|lg\|null` | `null` | Visual size rung |
| `spinner_variant` | `brand\|dark\|light\|light-on-color\|null` | `null` | Color treatment |
| `spinner_label` | `string` | `'Loading'` | Accessible label for screen readers |
| `spinner_uc` | `string[]` | `[]` | Utility classes |
| `spinner_att` | `Attribute` | `{}` | Extra HTML attributes |

## CSS Variables

Public overrides, empty by default; each links to a MUD default (`--spinner-*`) or a token.

| Variable | Default | Description |
|---|---|---|
| `--spinner_size` | `--spinner-size-md` | Spinner size. |
| `--spinner_b-w` | `--spinner-stroke-width-md` | Arc stroke width. |
| `--spinner_b-c` | `--spinner-arc-color-brand` | Arc color. |
| `--spinner_anim` | `spinner-rotate` + `--spinner-transition-*` | Full `animation` value. |

Per size: `--spinner_xs_size`, `--spinner_lg_b-w`, … Per variant: `--spinner_brand_b-c`, `--spinner_dark_b-c`, `--spinner_light_b-c`, `--spinner_light-on-color_b-c`.

## Accessibility

- The wrapper has `role="status"`, `aria-live="polite"` and an `aria-label` from `spinner_label`; the arc itself is `aria-hidden`. Pass a translated `spinner_label`.
- Under `prefers-reduced-motion: reduce` the rotation runs once and stops; keep a visible text or state change elsewhere for sighted users.
- Use the `light` or `light-on-color` variant only on dark or colored backgrounds (3:1 contrast for graphics).
