---
title: Badge
group: Globals
version: 1.1.0
css_prefix: badge
---

# Badge Component

## Overview

Badge component for displaying counters, status indicators, and notification markers. Supports five sizes (xs–xl), four color variants, a dot mode, and absolute positioning for overlay on other elements.

## Usage

```twig
{% include 'mud_egov:badge' with {
  badge_content: '5',
  badge_color: 'danger',
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `badge_content` | `string\|null` | `null` | Text or number inside the badge |
| `badge_color` | `string\|null` | `null` | Color: `brand`, `positive`, `warning`, `danger` |
| `badge_size` | `string\|null` | `null` (md) | Size: `xs`, `sm`, `lg`, `xl` |
| `badge_dot` | `boolean` | `false` | Dot indicator mode — hides content, renders as small circle |
| `badge_positioned` | `boolean` | `false` | Absolute positioning. Parent must have `position: relative` |
| `badge_uc` | `array` | `[]` | Utility classes |
| `badge_att` | `Attribute` | `{}` | Extra HTML attributes |

## Slots

### `slot_content`
Use instead of `badge_content` for complex markup inside the badge.

## Examples

### Sizes

```twig
{% include 'mud_egov:badge' with { badge_content: '9', badge_size: 'xs' } %}
{% include 'mud_egov:badge' with { badge_content: '9', badge_size: 'sm' } %}
{% include 'mud_egov:badge' with { badge_content: '9' } %}
{% include 'mud_egov:badge' with { badge_content: '99', badge_size: 'lg' } %}
{% include 'mud_egov:badge' with { badge_content: '99+', badge_size: 'xl' } %}
```

### Colors

```twig
{% include 'mud_egov:badge' with { badge_content: '1', badge_color: 'brand' } %}
{% include 'mud_egov:badge' with { badge_content: '2', badge_color: 'positive' } %}
{% include 'mud_egov:badge' with { badge_content: '3', badge_color: 'warning' } %}
{% include 'mud_egov:badge' with { badge_content: '4', badge_color: 'danger' } %}
```

### Dot indicator

```twig
{% include 'mud_egov:badge' with { badge_dot: true, badge_color: 'danger' } %}
{% include 'mud_egov:badge' with { badge_dot: true, badge_color: 'positive', badge_size: 'lg' } %}
```

### Positioned on an element

```twig
<div style="position: relative; display: inline-flex;">
  <svg>...</svg>
  {% include 'mud_egov:badge' with {
    badge_content: '3',
    badge_color: 'danger',
    badge_positioned: true,
  } %}
</div>
```

Offset can be overridden via CSS:
```css
.my-context .badge-positioned {
  --badge_inset: -4px -4px auto auto;
}
```

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--badge_h` | `var(--badge-size-md)` | Height |
| `--badge_m-w` | `var(--badge-min-width-md)` | Min-width |
| `--badge_p-i` | `var(--badge-padding-inline-md)` | Padding inline |
| `--badge_b-r` | `var(--badge-border-radius)` | Border radius |
| `--badge_f-s` | `var(--badge-font-size-md)` | Font size |
| `--badge_l-h` | `var(--badge-line-height-md)` | Line height |
| `--badge_f-w` | `var(--badge-font-weight)` | Font weight |
| `--badge_bg` | `var(--badge-background-default)` | Background color |
| `--badge_c` | `var(--badge-text-default)` | Text color |
| `--badge_inset` | `var(--badge-offset-top) var(--badge-offset-right) auto auto` | Position in positioned mode |
| `--badge_<size>_<property>` | size defaults | Per size, e.g. `--badge_lg_f-s` |
| `--badge_<color>_bg`, `--badge_<color>_c` | color defaults | Per color, e.g. `--badge_brand_bg` |
| `--badge_dot_size` | `var(--badge-dot-size-md)` | Inner pip of dot badges |

## Accessibility

- `role="status"` with `aria-live="polite"`: count changes are announced.
- The accessible name is `badge_aria_label`, or the visible count; dot badges fall back to "Notification", so pass a meaningful `badge_aria_label`.
- The badge is not interactive (`pointer-events: none`).
