---
title: Link
group: Globals
version: 1.1.0
css_prefix: link
---

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

Public overrides (empty by default; set them in a specific context). Defaults come from the `--link-*` variables in `css/defaults/links.css`.

| Variable | Default | Description |
|----------|---------|-------------|
| `--link_f-s` | `--link-label-font-size-md` | Font size (follows the size modifier). |
| `--link_l-h` | `--link-label-line-height-md` | Line height. |
| `--link_gap` | `--link-container-gap-md` | Gap between icon and label. |
| `--link_icon_size` | `--link-icon-size-md` | Icon slot size. |
| `--link_c` | `--link-primary-label-default` | Color at rest. |
| `--link_c_h` | `--link-primary-label-hover` | Color on hover. |
| `--link_c_a` | `--link-primary-label-active` | Color on active. |
| `--link_visited_c` | `--link-primary-label-visited` | Color when visited. |
| `--link_c_d` | `--link-disabled-label` | Color when disabled. |
| `--link_t-d` | `underline` | Text decoration at rest. |
| `--link_t-d_h` | `underline` | Text decoration on hover. |
| `--link_underline_gap` | `--link-label-underline-offset` | Underline offset. |
| `--link_underline_b-w` | `--link-label-underline-thickness` | Underline thickness. |
| `--link_underline_b-w_h` | `--link-label-underline-thickness-hover` | Underline thickness on hover. |
| `--link_f-f`, `--link_f-w` | `--link-label-font-family`, `--link-label-font-weight` | Font family and weight. |
| `--link_p-i`, `--link_p-b`, `--link_b-r` | `--link-container-*` | Padding and radius. |
| `--link_trn` | `--link-container-transition-*` | Transition. |
| `--link_focus_ol-o`, `--link_focus_bg`, `--link_focus_b-w`, `--link_focus_b-c` | `--link-focus-ring-*` | Focus ring geometry and colors. |
| `--link_standalone_m-h`, `--link_standalone_p-b` | `--link-container-min-height-*`, `--spacing-4` | Standalone target size. |

Renamed from the previous API: `--link_c-hover` is now `--link_c_h`, `--link_c-active` is `--link_c_a`, `--link_c-visited` is `--link_visited_c`, `--link_u-default` / `--link_u-hover` are `--link_t-d` / `--link_t-d_h`, `--link_icon-size` is `--link_icon_size`.

## Accessibility

- Rendered as a native `<a>`; the label is real text, and icon-only links need `link_aria_label`.
- Focus: visible ring (two-color `box-shadow`) on `:focus-visible`; the outline is only made transparent because the ring replaces it.
- Disabled links set `aria-disabled="true"` and `tabindex="-1"`; the disabled color is for state indication, not for text that must be read.
- The external indicator icon is `aria-hidden`; `rel="noopener noreferrer"` is added for `target="_blank"`. Transitions are off under `prefers-reduced-motion: reduce`.
