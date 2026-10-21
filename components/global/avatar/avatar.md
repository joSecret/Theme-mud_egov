# Avatar

Displays a user avatar as a photo, initials, or icon fallback. Maps to the `mud-avatar` web component.

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
| `avatar_color` | string\|null | `null` | Background color for initials/icon mode. |
| `avatar_uc` | array | `[]` | Extra utility classes. |
| `avatar_att` | Attribute\|null | `null` | Extra HTML attributes. |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--avatar_size` | `--avatar-container-size-md` | Override avatar size. |
| `--avatar_bg` | `--avatar-container-background` | Background color. |
| `--avatar_b-r` | `--avatar-container-border-radius` | Border radius. |
| `--avatar_f-s` | `--avatar-initials-font-size-md` | Initials font size. |
| `--avatar_icon-size` | `--avatar-icon-size-md` | Icon size. |
| `--avatar_c` | `--avatar-initials-color` | Initials text color. |
| `--avatar_icon-c` | `--avatar-icon-color` | Icon color. |
