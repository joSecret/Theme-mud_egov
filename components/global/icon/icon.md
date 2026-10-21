# Icon

Inline SVG icon from the MUD icon set, identified by name with optional size and color.

## Usage

```twig
{% include 'mud_egov:icon' with {
  icon_name: 'check',
  icon_size: '20'
} %}
```

### Filled variant

```twig
{% include 'mud_egov:icon' with {
  icon_name: 'check-filled',
  icon_size: '24'
} %}
```

### With accessible label

```twig
{% include 'mud_egov:icon' with {
  icon_name: 'close',
  icon_size: '16',
  icon_aria_label: 'Close dialog'
} %}
```

### Interactive icon

```twig
{% include 'mud_egov:icon' with {
  icon_name: 'favorite',
  icon_size: '20',
  icon_interactive: true,
  icon_aria_label: 'Add to favorites'
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
| `icon_name` | `string` | `'check'` | Icon identifier (kebab-case). Suffix `-filled` selects the filled variant. |
| `icon_size` | `string\|null` | `null` | Pixel size: `'12'`, `'16'`, `'20'`, `'24'`. |
| `icon_color` | `string\|null` | `null` | CSS color value. Defaults to `currentColor` (inherits). |
| `icon_interactive` | `boolean` | `false` | Enables cursor, hover and focus-ring treatment. |
| `icon_disabled` | `boolean` | `false` | Visually disables the icon. |
| `icon_aria_label` | `string\|null` | `null` | Accessible label. Omit for decorative icons. |
| `icon_uc` | `array` | `[]` | Extra utility classes applied to the wrapper. |
| `icon_att` | `Attribute\|null` | `null` | Additional HTML attributes for the wrapper element. |

## CSS variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--icon_size` | `16px` | Size of the icon (width and height). |
| `--icon_color` | `currentColor` | Icon fill/stroke color. |
