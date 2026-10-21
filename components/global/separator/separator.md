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
| `separator_inset` | `boolean` | `false` | Adds cross-axis spacing (8px). |
| `separator_uc` | `array` | `[]` | Extra utility classes. |
| `separator_att` | `Attribute\|null` | `null` | Additional HTML attributes. |

## CSS variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--separator_color` | `#d9d9d9` | Rule color (overrides variant). |
| `--separator_size` | `1px` | Rule thickness (overrides size modifier). |
| `--separator_inset` | `0px` | Cross-axis inset spacing. |
