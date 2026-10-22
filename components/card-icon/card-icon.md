---
title: Card Icon
group: Content
version: 1.1.0
css_prefix: card-icon
---

# Card Icon

Static card with a pictogram next to a title and a description underneath. Used by the "Card icon" paragraph.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `card_icon_title` | `string\|null` | `null` | Title next to the icon |
| `card_icon_description` | `string\|null` | `null` | Description under the header (rich text) |
| `card_icon_uc` | `array` | `[]` | Utility classes |
| `card_icon_att` | `Attribute` | `null` | Extra attributes |

## Slots

| Slot | Description |
|---|---|
| `card_icon` | Rendered icon or illustration field |

## CSS variables

Public (empty by default): `--card-icon_bg`, `--card-icon_b-r`, `--card-icon_p`, `--card-icon_gap`, `--card-icon_header_gap`, `--card-icon_title_f-w`, `--card-icon_title_f-s`.

## Example

```twig
{% include 'mud_egov:card-icon' with {
  card_icon: content.field_illustration_or_icon,
  card_icon_title: paragraph.field_title.value,
  card_icon_description: paragraph.field_description.processed,
} only %}
```

## Accessibility

- The card is not interactive, so it has no focus state; place links inside the description if needed.
- The icon is decorative: give it an empty `alt` or `aria-hidden="true"` because the title carries the meaning.
- Title and description keep the inherited text colour on a light background, above the 4.5:1 contrast minimum.
