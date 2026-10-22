---
title: Avatar
group: Globals
version: 1.1.0
css_prefix: avatar
---

# Avatar

Displays a user avatar as a photo, initials, or icon fallback.

## Usage

```twig
{# Photo avatar #}
{% include 'mud_egov:avatar' with {
  avatar_type: 'photo',
  avatar_src: '/path/to/photo.jpg',
  avatar_alt: 'Ion Obreja',
  avatar_size: 'md',
} only %}

{# Initials avatar #}
{% include 'mud_egov:avatar' with {
  avatar_type: 'initials',
  avatar_name: 'Ion Obreja',
  avatar_size: 'lg',
  avatar_color: 'primary',
} only %}

{# Icon fallback #}
{% include 'mud_egov:avatar' with {
  avatar_type: 'icon',
  avatar_size: 'sm',
} only %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `avatar_src` | string\|null | `null` | Photo URL. Used when `avatar_type` is `photo`. |
| `avatar_alt` | string\|null | `null` | Alt text for photo. Falls back to `avatar_name`. |
| `avatar_initials` | string\|null | `null` | Pre-computed 1–2 letter initials. |
| `avatar_name` | string\|null | `null` | Full name — derives initials and alt text. |
| `avatar_icon` | string\|null | `null` | Custom SVG icon markup for `icon` type. |
| `avatar_type` | string\|null | `initials` | `photo` \| `initials` \| `icon` |
| `avatar_size` | string\|null | `md` | `xs` \| `sm` \| `md` \| `lg` \| `xl` |
| `avatar_shape` | string\|null | `circular` | `circular` \| `square` |
| `avatar_color` | string\|null | `null` | `primary` \| `secondary` \| `success` \| `danger` \| `warning` \| `info`. Background color for initials/icon mode. |
| `avatar_uc` | array | `[]` | Extra utility classes. |
| `avatar_att` | Attribute\|null | `null` | Extra HTML attributes. |

## CSS Variables

Public overrides, empty by default; each links to a MUD default (`--avatar-*`) or a token.

| Variable | Default | Description |
|----------|---------|-------------|
| `--avatar_size` | `--avatar-container-size-md` | Avatar size. |
| `--avatar_bg` | `--avatar-container-background` | Background color. |
| `--avatar_b-r` | `--avatar-container-border-radius` | Border radius. |
| `--avatar_f-s` | `--avatar-initials-font-size-md` | Initials font size. |
| `--avatar_c` | `--avatar-initials-color` | Initials text color. |
| `--avatar_icon_size` | `--avatar-icon-size-md` | Icon size. |
| `--avatar_icon_c` | `--avatar-icon-color` | Icon color. |

Per size: `--avatar_xs_size`, `--avatar_lg_f-s`, `--avatar_icon_xl_size`, … Per shape: `--avatar_square_b-r`. Per color: `--avatar_primary_bg`, `--avatar_primary_c`, `--avatar_primary_icon_c`, …

## Accessibility

- The container has `role="img"` and an `aria-label` (alt text, then name, then initials); the inner photo, initials and icon are `aria-hidden`.
- Always pass `avatar_alt` or `avatar_name` for a photo so the label is meaningful.
- Initials on `primary`, `success`, `danger` and `info` use inverse text on a saturated background; check contrast (4.5:1) if you override the colors.
