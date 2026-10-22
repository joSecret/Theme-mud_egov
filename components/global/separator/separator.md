---
title: Separator
group: Globals
version: 1.1.0
css_prefix: separator
---

# Separator

Visual divider between groups of content with optional inline label, orientation, size and variant.

## Usage

```twig
{% include 'mud_egov:separator' with {} %}
```

### With label

```twig
{% include 'mud_egov:separator' with {
  separator_label: 'or'
} %}
```

### Vertical

```twig
{% include 'mud_egov:separator' with {
  separator_orientation: 'vertical'
} %}
```

### Strong variant, medium thickness

```twig
{% include 'mud_egov:separator' with {
  separator_variant: 'strong',
  separator_size: 'medium'
} %}
```

### Inset (spaced from edges)

```twig
{% include 'mud_egov:separator' with {
  separator_inset: true
} %}
```

### With rich label slot (icon + text)

```twig
{% include 'mud_egov:separator' with {} %}
  {% block slot_label %}
    {% include 'mud_egov:icon' with { icon_name: 'star', icon_size: '16' } %}
    <span>Featured</span>
  {% endblock %}
{% endinclude %}
```

### Semantic separator with aria-label

```twig
{% include 'mud_egov:separator' with {
  separator_aria_label: 'End of navigation section'
} %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `separator_label` | `string\|null` | `null` | Plain-text label at the center of the separator. |
| `separator_aria_label` | `string\|null` | `null` | Accessible label. Use only for semantically significant boundaries. |
| `separator_orientation` | `string\|null` | `null` | `horizontal` (default) or `vertical`. |
| `separator_size` | `string\|null` | `null` | Thickness: `extra-thin`, `thin`, `medium`, `thick`. |
| `separator_variant` | `string\|null` | `null` | Color emphasis: `subtle`, `mild`, `strong`. |
| `separator_inset` | `boolean` | `false` | Adds cross-axis spacing (`--separator-inset-spacing`). |
| `separator_uc` | `array` | `[]` | Extra utility classes. |
| `separator_att` | `Attribute\|null` | `null` | Additional HTML attributes. |

## CSS variables

Public overrides, empty by default; each links to a MUD default (`--separator-*`) or a token.

| Variable | Default | Description |
|----------|---------|-------------|
| `--separator_bg` | `--separator-color-subtle` | Rule color. |
| `--separator_size` | `--separator-size-thin` | Rule thickness. |
| `--separator_inset` | `0px` (`--separator-inset-spacing` with `separator_inset`) | Cross-axis inset spacing. |
| `--separator_c` | `--separator-label-color` | Label color. |
| `--separator_gap` | `--separator-label-gap` | Gap between rule and label. |
| `--separator_label_p-i` | `--separator-label-padding-inline` | Label inline padding. |
| `--separator_label_f-s` | `--separator-label-font-size` | Label font size. |

Per variant: `--separator_mild_bg`, `--separator_strong_bg`, … Per size: `--separator_thick_size`, `--separator_extra-thin_size`, …

## Accessibility

- The element has `role="separator"` (and `aria-orientation="vertical"` when vertical); the rules are `aria-hidden`.
- Most separators are decorative: set `separator_aria_label` only for semantically significant boundaries.
- The label is real text (or the `slot_label` slot), so it is read in order; the default label color is checked against the 4.5:1 contrast on white backgrounds.
- No animation or interaction: nothing to operate from the keyboard.
