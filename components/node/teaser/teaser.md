---
title: Teaser
group: Content
version: 1.1.0
css_prefix: teaser
---

# Teaser

Node teaser with a side-by-side layout: image on the left, content on the right (date, title, description, categories). The title is a stretched link, so the whole teaser is clickable; the background changes on hover. Without an image the content takes the full width.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `teaser_title` | `string\|null` | `null` | Title (rendered with `heading`, level 5) |
| `teaser_description` | `string\|null` | `null` | Description text |
| `teaser_image` | `string\|array\|null` | `null` | Image or media render array; empty means the no-image layout |
| `teaser_date` | `string\|null` | `null` | Date shown above the title |
| `teaser_categories` | `string\|array\|null` | `null` | Categories list |
| `teaser_link` | `string\|null` | `null` | URL of the stretched link on the title |
| `teaser_uc` | `array` | `[]` | Utility classes |
| `teaser_att` | `Attribute` | `null` | Extra attributes |

## Slots

`slot_image`, `slot_date`, `slot_title`, `slot_description`, `slot_categories`.

## CSS variables

Public (empty by default): `--teaser_bg`, `--teaser_bg_h`, `--teaser_trn`, `--teaser_gap`, `--teaser_g-t-c`, `--teaser_no-image_g-t-c`, `--teaser_content_{p-b,p-i,gap}`, `--teaser_date_{f-f,f-s,l-h,f-w,c,m-b}`, `--teaser_title_{c,f-s,l-h,f-w,m-b}`, `--teaser_description_{f-f,f-s,l-h,f-w,c}`.

## Example

```twig
{% include 'mud_egov:teaser' with {
  teaser_title: label,
  teaser_link: url,
  teaser_date: date,
  teaser_description: summary,
  teaser_image: content.field_image,
} %}
```

## Accessibility

- The title is a real heading and the only link; it is stretched over the card with `::after`, giving one focus stop and one accessible name.
- Date and description use `--color-text-base-secondary` on the light background, above 4.5:1.
- The image should have an empty `alt` when it only illustrates the title.
- The hover background transition is disabled under `prefers-reduced-motion: reduce`.
