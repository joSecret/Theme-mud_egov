---
title: Card Link
group: Content
version: 1.1.0
css_prefix: card-link
---

# Card Link

Clickable card with an icon on top and a link at the bottom. The link is stretched over the whole card (`a::after`), so the entire card acts as one link. Used by the "Card link" paragraph.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `card_link_url` | `string\|null` | `null` | Rendered link element (`<a>`) from the link field |
| `card_link_icon` | `string\|null` | `null` | Raw SVG or rendered icon/image; a default icon is used when empty |
| `card_link_uc` | `array` | `[]` | Utility classes |
| `card_link_att` | `Attribute` | `null` | Extra attributes |

## CSS variables

Public (empty by default): `--card-link_bg`, `--card-link_b-r`, `--card-link_p`, `--card-link_gap`, `--card-link_c`, `--card-link_m-h`, `--card-link_f-s`, `--card-link_icon_size`, `--card-link_link_c`, `--card-link_link_c_h`, `--card-link_link_c_a`.

## Example

```twig
{% include 'mud_egov:card-link' with {
  card_link_icon: content.field_illustration_or_icon,
  card_link_url: content.field_link,
} only %}
```

## Accessibility

- The single `<a>` is the only interactive element, so keyboard users get one focus stop and screen readers one link name; write a descriptive link text.
- The link text is never underlined, so the whole card needs the visible card shape and hover/focus colour change (`--card-link_link_c_a` on active and focus) to read as interactive.
- Keep the icon decorative (`aria-hidden="true"` or empty `alt`).
