---
title: Logo
group: Globals
version: 2.0.0
css_prefix: logo
---

# Logo

Government / brand logo. Renders an `<img>`: either one of the MUD M-service logos that ship with the component in `assets/` (copied from MUD JS 1.2.1, MIT licence) or a custom image URL. Optionally wraps the logo in a link. No web component is used.

## Usage

```twig
{# MUD asset logo #}
{% include 'mud_egov:logo' with {
  logo_name: 'mpay-logo-with-name',
  logo_alt: 'mpay',
  logo_url: '/',
  logo_size: 'md',
} %}

{# Custom image logo #}
{% include 'mud_egov:logo' with {
  logo_src: '/themes/custom/egov/images/logo.svg',
  logo_alt: 'My Site',
  logo_url: '/',
  logo_size: 'lg',
} %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `logo_name` | string\|null | `null` | MUD logo asset name (e.g. `mpay-logo-logomark-only`) |
| `logo_src` | string\|null | `null` | Custom image URL (wins over `logo_name`) |
| `logo_alt` | string\|null | `null` | Accessible alt text. Omit for decorative logos |
| `logo_url` | string\|null | `null` | Wraps the logo in `<a>` when set |
| `logo_title` | string\|null | `null` | Title attribute on the link or image |
| `logo_size` | string\|null | `null` (SVG size) | `sm` (24 px) / `md` (40 px) / `lg` (64 px) height |
| `logo_variant` | string\|null | `null` | `color` / `white` / `black` |
| `logo_uc` | array | `[]` | Extra utility classes |
| `logo_att` | Attribute | `null` | Additional HTML attributes |

## MUD logo names

Available names follow the pattern `{service}-logo-{layout}`. Services: `mcloud`, `mconnect`, `mdelivery`, `mdocs`, `mlearn`, `mlog`, `mnotify`, `mpass`, `mpay`, `mpower`, `msign`. Layouts: `logomark-only`, `with-name`, `with-verb`, `with-long-name-medium`, `with-long-name-large`.

No slots.

## CSS overrides

```css
.my-header .c--logo {
  --logo_h: 32px;      /* height without a size, or md */
  --logo_sm_h: 20px;
  --logo_lg_h: 72px;
}
```

## Accessibility

- With `logo_alt` the image is announced; without it the logo is decorative (`alt=""`, `aria-hidden`).
- A linked logo needs `logo_alt` (or `logo_title`) so the link has a name.
- Brand colours are kept in forced-colors mode.
