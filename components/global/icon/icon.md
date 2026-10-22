---
title: Icon
group: Globals
version: 1.1.0
css_prefix: icon
---

# Icon

Inline SVG icon from the MUD icon set (`assets/outlined/`, `assets/filled/`, copied from MUD JS 1.2.1), identified by name with optional size and color. The SVG is inlined with `source()`, so it inherits `currentColor`; no web component is needed.

## Usage

```twig
{% include 'mud_egov:icon' with {
  icon_name: 'checkmark-small',
  icon_size: '20'
} %}
```

### Filled variant

```twig
{% include 'mud_egov:icon' with {
  icon_name: 'circle-checkmark-filled',
  icon_size: '24'
} %}
```

### With accessible label

```twig
{% include 'mud_egov:icon' with {
  icon_name: 'cross-small',
  icon_size: '16',
  icon_aria_label: 'Close dialog'
} %}
```

### Interactive icon

```twig
{% include 'mud_egov:icon' with {
  icon_name: 'bookmark',
  icon_size: '20',
  icon_interactive: true,
  icon_aria_label: 'Save'
} %}
```

### Inline SVG slot

```twig
{% include 'mud_egov:icon' with {
  icon_size: '24'
} %}
  {% block slot_svg %}
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">...</svg>
  {% endblock %}
{% endinclude %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon_name` | `string` | `'checkmark-small'` | File name from `assets/` (kebab-case). Suffix `-filled` selects the filled drawing; a name missing in one style falls back to the other. Unknown names render an empty box. |
| `icon_size` | `string\|null` | `null` | Pixel size: `'12'`, `'16'`, `'20'`, `'24'`. |
| `icon_color` | `string\|null` | `null` | CSS color value. Defaults to `currentColor` (inherits). |
| `icon_interactive` | `boolean` | `false` | Enables cursor, hover and focus-ring treatment. |
| `icon_disabled` | `boolean` | `false` | Visually disables the icon. |
| `icon_aria_label` | `string\|null` | `null` | Accessible label. Omit for decorative icons. |
| `icon_uc` | `array` | `[]` | Extra utility classes applied to the wrapper. |
| `icon_att` | `Attribute\|null` | `null` | Additional HTML attributes for the wrapper element. |

## CSS variables

All are empty by default; set them in a specific context.

| Variable | Default | Description |
|----------|---------|-------------|
| `--icon_size` | `var(--spacing-16)` (or the `icon_size` class) | Width and height. |
| `--icon_c` | `currentColor` | Icon color (also set inline by `icon_color`). |
| `--icon_c_h` | `var(--color-icon-brand-default)` | Hover color of interactive icons. |
| `--icon_c_a` | `currentColor` | Active color of interactive icons. |
| `--icon_c_d` | `var(--color-icon-disabled-default)` | Disabled color. |

## Accessibility

- Without `icon_aria_label` the icon is decorative (`aria-hidden="true"`).
- With `icon_aria_label` the label is set on the wrapper; pair interactive icons with a label, since they get `role="button"` and `tabindex="0"`.
- Interactive icons show the MUD focus ring (`--focus-ring`) on `:focus-visible`.
- The color transition is disabled under `prefers-reduced-motion: reduce`.
