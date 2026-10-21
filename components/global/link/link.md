# Link

Interactive navigational link atom rendered as an anchor tag with size, variant and underline options.

## Usage

```twig
{% include 'mud_egov:link' with {
  link_label: 'Read more',
  link_url: '/about'
} %}
```

### Primary link (default)

```twig
{% include 'mud_egov:link' with {
  link_label: 'View details',
  link_url: '/details',
  link_variant: 'primary'
} %}
```

### Opens in new tab

```twig
{% include 'mud_egov:link' with {
  link_label: 'Official website',
  link_url: 'https://example.com',
  link_target: '_blank'
} %}
```

### Strict (ink black) on hover underline only

```twig
{% include 'mud_egov:link' with {
  link_label: 'Terms and conditions',
  link_url: '/terms',
  link_variant: 'strict',
  link_underline: 'hover'
} %}
```

### Standalone CTA (enlarged tap target)

```twig
{% include 'mud_egov:link' with {
  link_label: 'View all services',
  link_url: '/services',
  link_size: 'lg',
  link_standalone: true
} %}
```

### White variant on dark background

```twig
{% include 'mud_egov:link' with {
  link_label: 'Learn more',
  link_url: '/info',
  link_variant: 'white'
} %}
```

### Disabled

```twig
{% include 'mud_egov:link' with {
  link_label: 'Unavailable',
  link_url: '/page',
  link_disabled: true
} %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `link_label` | `string` | `''` | Visible link text. |
| `link_url` | `string\|null` | `null` | Anchor href. |
| `link_target` | `string\|null` | `null` | Anchor target (e.g. `_blank`). |
| `link_rel` | `string\|null` | `null` | Anchor rel. Auto-set to `noopener noreferrer` when `target="_blank"`. |
| `link_download` | `string\|null` | `null` | Triggers a file download. |
| `link_aria_label` | `string\|null` | `null` | Accessible label for screen readers. |
| `link_variant` | `string\|null` | `null` | Color treatment: `primary`, `strict`, `white`. |
| `link_size` | `string\|null` | `null` | Type scale size: `xs`, `sm`, `md`, `lg`. |
| `link_underline` | `string\|null` | `null` | Underline treatment: `always`, `hover`, `none`. |
| `link_standalone` | `boolean` | `false` | Enlarges interactive target (32px pointer / 40px touch). |
| `link_disabled` | `boolean` | `false` | Makes the link inert. Sets `aria-disabled`. |
| `link_external` | `boolean` | `true` | Shows external-link indicator when `target="_blank"`. |
| `link_uc` | `array` | `[]` | Extra utility classes. |
| `link_att` | `Attribute\|null` | `null` | Additional HTML attributes. |

## CSS variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--link_f-s` | `16px` | Font size (overrides size modifier). |
| `--link_l-h` | `24px` | Line height. |
| `--link_gap` | `4px` | Gap between icon and label. |
| `--link_icon-size` | `20px` | Icon slot size. |
| `--link_c` | `#0058d2` | Link color at rest. |
| `--link_c-hover` | `#0058d2` | Link color on hover. |
| `--link_c-active` | `#00357e` | Link color on active. |
| `--link_c-visited` | `#aa18ce` | Link color when visited. |
| `--link_u-default` | `underline` | Underline at rest. |
| `--link_u-hover` | `underline` | Underline on hover/focus. |
