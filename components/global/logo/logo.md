# Logo

Government / brand logo component. Renders either a MUD `<mud-logo>` web component (using a named asset from the MUD library) or a plain `<img>`. Optionally wraps the logo in an anchor link.

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
| `logo_name` | string\|null | `null` | MUD mud-logo asset name (e.g. `mpay-logo-logomark-only`) |
| `logo_src` | string\|null | `null` | Custom image URL (used when `logo_name` is not set) |
| `logo_alt` | string\|null | `null` | Accessible alt text. Omit for decorative logos |
| `logo_url` | string\|null | `null` | Wraps the logo in `<a>` when set |
| `logo_title` | string\|null | `null` | Title attribute on the link or image |
| `logo_size` | string\|null | `null` | `sm` (24 px) / `md` (40 px) / `lg` (64 px) |
| `logo_variant` | string\|null | `null` | `color` / `white` / `black` |
| `logo_uc` | array | `[]` | Extra utility classes |
| `logo_att` | Attribute | `null` | Additional HTML attributes |

## MUD logo names

Available names follow the pattern `{service}-logo-{layout}`. Services: `mcloud`, `mconnect`, `mdelivery`, `mdocs`, `mlearn`, `mlog`, `mnotify`, `mpass`, `mpay`, `mpower`, `msign`. Layouts: `logomark-only`, `with-name`, `with-verb`, `with-long-name-medium`, `with-long-name-large`.

## CSS custom properties

```css
.c--logo {
  --logo_h_md: 48px;
}
```
