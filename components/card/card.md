---
title: Card
group: Content
version: 1.1.0
css_prefix: card
---

# Card

Flexible content container: optional header, image, title, subtitle, text, link button and footer. The default look adds no background, border or padding, so the card takes its look from the context (utility classes, the parent layout or the public CSS variables below).

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `card_tag` | `string\|null` | `div` | Root tag: `div`, `section` |
| `card_header` / `card_footer` | `string\|null` | `null` | Header and footer text |
| `card_title` | `string\|null` | `null` | Title, rendered with the `heading` component |
| `card_title_tag` | `string\|null` | `h3` | Title level: `h1`–`h6` |
| `card_subtitle` / `card_subtitle_tag` | `string\|null` | `null` / `div` | Subtitle and its tag |
| `card_body` | `string\|null` | `null` | Body text; `card_text_tag` sets the wrapper (`p`, `span`, `div`) |
| `card_body_tag` | `string\|null` | `div` | Body wrapper: `div`, `section` |
| `card_link_url` / `card_link_text` | `string\|null` | `null` | Stretched link button (whole card is clickable) |
| `card_link_icon` / `card_link_icon_position` | `string\|null` | `null` / `right` | Link icon (SVG) and position: `left`, `right`, `only` |
| `card_image_src` / `card_image_alt` | `string\|null` | `null` | Image; `card_media` replaces it with free markup |
| `card_image_cap` | `string` | `top` | Image position: `top`, `bottom` |
| `card_uc` | `array` | `[]` | Utility classes on the root |
| `card_att` | `Attribute` | `null` | Extra attributes on the root |
| `card_{title,subtitle,header,body,text,link,footer}_utility_classes` | `array` | `[]` | Utility classes for each part |
| `card_title_prefix` / `card_title_suffix` | `array` | `[]` | Output injected around the title |

## Slots

`slot_card_image_top`, `slot_card_image_bottom`, `slot_card_body`, `slot_card_links`, `slot_card_footer` (override the matching section when embedding).

## CSS variables

Public (empty by default, set in a context): `--card_p`, `--card_gap`, `--card_c`, `--card_bg`, `--card_b-r`, `--card_b-w`, `--card_b-c`, `--card_f-d`, `--card_lg_f-d` (direction from 48rem), `--card_cap_bg`, `--card_cap_c`, `--card_header_gap`, `--card_title_c`, `--card_subtitle_c`, `--card_body_p`, `--card_body_gap`, `--card_link_m-i`.

## Example

```twig
{% include 'mud_egov:card' with {
  card_title: 'Title',
  card_body: 'Text',
  card_link_url: '/path',
  card_link_text: 'Read more',
  card_uc: ['my-card'],
} %}
```

## Accessibility

- The title uses a real heading (`card_title_tag`); choose the level to fit the page outline.
- The link button is stretched over the card (`stretched-link`), so the whole card is one focusable target with a single accessible name (`card_link_text`).
- Focus uses the global focus ring; decorative images need an empty `card_image_alt`.
- Transitions are disabled under `prefers-reduced-motion: reduce`.
