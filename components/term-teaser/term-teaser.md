---
title: Term Teaser
group: Content
version: 1.1.0
css_prefix: term-teaser
---

# Term Teaser

Teaser for a taxonomy term: an image or SVG on top and the term name below. When a URL is set, the whole teaser is a link. Two variants: `icon` (small square, centered text) and `cover` (full-width square image, left-aligned text).

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `term_teaser_title` | `string\|null` | `null` | Term name shown under the image |
| `term_teaser_url` | `string\|null` | `null` | Wraps the teaser in a link when set |
| `term_teaser_variant` | `string\|null` | `icon` | `icon` (64px square) or `cover` (wide square image) |
| `term_teaser_uc` | `array` | `[]` | Utility classes |
| `term_teaser_att` | `Attribute` | `null` | Extra attributes |

## Slots

| Slot | Description |
|---|---|
| `term_image` | Rendered image or SVG field |

## CSS variables

Public (empty by default): `--term-teaser_gap`, `--term-teaser_img_size`, `--term-teaser_t-a`, `--term-teaser_f-s`, `--term-teaser_f-w`, and for the cover variant `--term-teaser_cover_img_size`, `--term-teaser_cover_t-a`, `--term-teaser_cover_f-s`.

## Example

```twig
{% include 'mud_egov:term-teaser' with {
  term_teaser_title: name,
  term_teaser_url: url,
  term_teaser_variant: 'cover',
  term_image: content,
} %}
```

## Accessibility

- With a URL the image and the name are inside one `<a>`, so there is a single focus stop whose accessible name is the term name.
- Give the image an empty `alt` (decorative) so the name is not read twice.
- The link keeps the inherited text colour and the global focus ring; no information depends on colour alone.
