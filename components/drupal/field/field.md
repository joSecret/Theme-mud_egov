---
title: Field
group: Fields
version: 1.1.0
css_prefix: field
---

# Field

Override of Drupal core `field.html.twig`. Renders the field wrapper, the label and the items with the same BEM classes as core (`.field`, `.field-label`, `.field-items`, `.field-item`), so existing Drupal field CSS keeps working. It is used by `templates/fields/field.html.twig` and the `field--*` suggestions.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `field_label_display` | string | `above` | `above`, `inline`, `visually_hidden` or `hidden`. |
| `field_label_hidden` | boolean | `false` | Do not render the label. |
| `field_multiple` | boolean | `false` | Wrap each item in a `.field-items` element. |
| `field_default_wrap` | boolean | `false` | `true` renders wrapper and item divs; `false` outputs only the item contents. |
| `field_label` | string, object | `null` | The field label. |
| `field_items` | array | `[]` | Items, each `{ attributes, content }`. |
| `field_uc`, `field_label_uc`, `field_items_uc`, `field_item_uc` | array | `[]` | Utility classes for the wrapper, label, items wrapper and each item. |
| `field_att`, `field_title_att` | Attribute | `null` | Attributes for the wrapper and the label. |

Slots: `slot_label` replaces the label markup.

## CSS variables

Public overrides (empty by default): `--field_d`, `--field_gap`, `--field_m-b`, `--field_label_f-w`, `--field_label_f-s`, `--field_label_c`, `--field_label_m-b`, `--field_inline_label_m-i`, `--field_items_d`, `--field_items_gap`, `--field_item_m-b`.

## Example

```twig
{% include 'mud_egov:field' with {
  field_label: label,
  field_items: items,
  field_default_wrap: true,
  field_label_display: 'inline',
  field_uc: ['has-label_inline'],
} only %}
```

## Accessibility

- The label is output as text next to its items; `visually_hidden` keeps it for screen readers through the `visually-hidden` class passed in `field_label_uc`.
- The inline label separator (`:`) is generated with `::after`, so it is not part of the label text.
- Markup of the items is passed through unchanged, so the semantics of the formatter (links, lists, media) are preserved.
