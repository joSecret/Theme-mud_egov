---
title: Field Link
group: Fields
version: 1.1.0
css_prefix: field-link
---

# Field Link

A link field rendered as a stacked list of links. Each link has a leading icon: arrow up-right for external URLs and arrow right for internal ones. The link markup (`item.content`) comes unchanged from the Drupal formatter. Used by `templates/fields/field--node--field-links.html.twig`.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `field_link_items` | array | `[]` | Items, each `{ content, is_external }`. |
| `field_link_label` | string, object | `null` | Label shown as `h3` above the links. |
| `field_link_label_hidden` | boolean | `false` | Do not render the label. |
| `field_link_uc` | array | `[]` | Utility classes for the wrapper. |
| `field_link_att` | Attribute | `null` | Attributes for the wrapper. |

No slots.

## CSS variables

Public overrides (empty by default): `--field-link_m-b`, `--field-link_gap`, `--field-link_item_gap`, `--field-link_icon_size`, `--field-link_icon_c`, `--field-link_icon_m-b`, `--field-link_link_c`, `--field-link_link_t-d`, `--field-link_link_t-d-c`.

## Example

```twig
{% include 'mud_egov:field-link' with {
  field_link_label: 'Linkuri utile',
  field_link_items: [
    { content: link_markup, is_external: true },
  ],
} only %}
```

## Accessibility

- The icons are decorative (`aria-hidden="true"`); the link text carries the name.
- The link stays underlined, so it is not identified by color alone.
- The label is a real `h3` heading; it is not rendered when `field_link_label_hidden` is true.
