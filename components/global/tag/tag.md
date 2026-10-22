---
title: Tag
group: Globals
version: 1.1.0
css_prefix: tag
---

# Tag Component

## Overview

Tag component for labeling and categorizing content. Supports three appearance types (subtle, strong, outlined) combined with six color variants, two sizes, and optional icon support.

## Usage

```twig
{% include 'mud_egov:tag' with {
  tag_content: 'Label',
  tag_type: 'subtle',
  tag_color: 'neutral',
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `tag_content` | `string\|null` | `null` | Text content inside the tag |
| `tag_tag` | `string\|null` | `span` | HTML element: `span`, `div`, `a` |
| `tag_url` | `string\|null` | `null` | URL — auto-sets tag_tag to `a` |
| `tag_type` | `string\|null` | `null` | Appearance: `subtle`, `strong`, `outlined` |
| `tag_color` | `string\|null` | `null` | Color: `muted`, `neutral`, `accent`, `success`, `brand`, `danger` |
| `tag_size` | `string\|null` | `null` | Size: `sm` |
| `tag_icon_position` | `string\|null` | `null` | Icon side: `left`, `right` |
| `tag_uc` | `array` | `[]` | Utility classes |
| `tag_att` | `Attribute` | `{}` | Extra HTML attributes |

## Slots

### `slot_content`
Main text content of the tag.

### `slot_icon`
Icon content. Position controlled by `tag_icon_position`.

## Examples

### Appearance types

```twig
{% include 'mud_egov:tag' with { tag_content: 'Subtle', tag_type: 'subtle', tag_color: 'brand' } %}
{% include 'mud_egov:tag' with { tag_content: 'Strong', tag_type: 'strong', tag_color: 'brand' } %}
{% include 'mud_egov:tag' with { tag_content: 'Outlined', tag_type: 'outlined', tag_color: 'brand' } %}
```

### Color variants

```twig
{% include 'mud_egov:tag' with { tag_content: 'Muted', tag_type: 'subtle', tag_color: 'muted' } %}
{% include 'mud_egov:tag' with { tag_content: 'Success', tag_type: 'subtle', tag_color: 'success' } %}
{% include 'mud_egov:tag' with { tag_content: 'Danger', tag_type: 'subtle', tag_color: 'danger' } %}
```

### Sizes

```twig
{% include 'mud_egov:tag' with { tag_content: 'Default', tag_type: 'subtle', tag_color: 'neutral' } %}
{% include 'mud_egov:tag' with { tag_content: 'Small', tag_type: 'subtle', tag_color: 'neutral', tag_size: 'sm' } %}
```

### With icon

```twig
{% embed 'mud_egov:tag' with { tag_content: 'Status', tag_type: 'subtle', tag_color: 'success', tag_icon_position: 'left' } %}
  {% block slot_icon %}<svg>...</svg>{% endblock %}
{% endembed %}
```

### As link

```twig
{% include 'mud_egov:tag' with {
  tag_content: 'View all',
  tag_type: 'outlined',
  tag_color: 'brand',
  tag_url: '/category',
} %}
```

### Tag group

```twig
<div class="tag-group">
  {% include 'mud_egov:tag' with { tag_content: 'Design', tag_type: 'subtle', tag_color: 'brand' } %}
  {% include 'mud_egov:tag' with { tag_content: 'UX', tag_type: 'subtle', tag_color: 'accent' } %}
  {% include 'mud_egov:tag' with { tag_content: 'Dev', tag_type: 'subtle', tag_color: 'neutral' } %}
</div>
```

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--tag_h` | `var(--tag-container-height-md)` | Height |
| `--tag_m-w` | `var(--tag-container-min-width-md)` | Min-width |
| `--tag_p-i` | `var(--tag-container-padding-inline-md)` | Padding inline |
| `--tag_gap` | `var(--tag-container-gap-md)` | Gap between icon and text |
| `--tag_b-r` | `var(--tag-container-border-radius)` | Border radius |
| `--tag_f-s` | `var(--tag-label-font-size-md)` | Font size |
| `--tag_l-h` | `var(--tag-label-line-height-md)` | Line height |
| `--tag_f-w` | `var(--tag-label-font-weight-info)` | Font weight |
| `--tag_subtle_bg`, `--tag_subtle_c` | muted | Subtle colors (also the default) |
| `--tag_strong_bg`, `--tag_strong_c` | muted | Strong colors |
| `--tag_outlined_b-c`, `--tag_outlined_c` | muted | Outlined colors |
| `--tag_<color>_<type>_<property>` | per color | e.g. `--tag_brand_strong_bg` |
| `--tag_icon_size` | `var(--tag-icon-size-md)` | Icon size |
| `--tag_group_gap` | `var(--tag-container-group-gap)` | Gap in tag-group wrapper |

Sizes: `--tag_sm_h`, `--tag_sm_f-s`, etc.

## Accessibility

- A tag is static text; as a link (`tag_url`) it is a normal `<a>` with the global focus ring.
- The icon is decorative; put meaning in the text.
- Color pairs come from the MUD defaults; strong and subtle pairs meet 4.5:1.
