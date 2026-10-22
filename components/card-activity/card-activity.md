---
title: Card Activity
group: Content
version: 1.1.0
css_prefix: card-activity
---

# Card Activity

Card for an activity node: logo or cover image at the top and the title below. When a URL is set, the title is a stretched link and the whole card is clickable (border darkens on hover and focus).

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `card_activity_title` | `string\|null` | `null` | Title (rendered with `heading`, level 3) |
| `card_activity_image` | `string\|array\|null` | `null` | Rendered image or media |
| `card_activity_url` | `string\|null` | `null` | Makes the whole card a link |
| `card_activity_uc` | `array` | `[]` | Utility classes |
| `card_activity_att` | `Attribute` | `null` | Extra attributes |

## Slots

`slot_image` (image area, top), `slot_title` (title).

## CSS variables

Public (empty by default): `--card-activity_bg`, `--card-activity_b-r`, `--card-activity_b-w`, `--card-activity_b-c`, `--card-activity_b-c_h`, `--card-activity_p`, `--card-activity_gap`, `--card-activity_c`, `--card-activity_trn`, `--card-activity_image_size`, `--card-activity_title_f-s`, `--card-activity_title_l-h`, `--card-activity_title_f-w`.

## Example

```twig
{% include 'mud_egov:card-activity' with {
  card_activity_title: node.label,
  card_activity_image: content.field_logo,
  card_activity_url: url,
} only %}
```

## Accessibility

- The title is a real heading (h3) and the only link; the stretched link gives one focus target and one accessible name for the whole card.
- The image is decorative here: give it an empty `alt` since the title already names the card.
- Hover and focus-within change the border colour (`--color-border-base-strong`); the link keeps the global focus ring.
- The border transition is disabled under `prefers-reduced-motion: reduce`.
