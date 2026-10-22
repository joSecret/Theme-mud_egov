---
title: Government Branding
group: Layout
version: 1.1.0
css_prefix: gov-branding
---


# Government Branding

Government seal and the name "Guvernul Republicii Moldova", as a link to gov.md that opens in a new tab. Rendered by the `mud_core` government branding block.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `gov_branding_uc` | array | `[]` | Extra classes on the link. |
| `gov_branding_att` | Attribute | `null` | Attributes on the link. |

## CSS variables

| Variable | Default | Description |
|---|---|---|
| `--gov-branding_gap` | `--spacing-8` | Gap between seal and name. |
| `--gov-branding_f-s` | `--font-size-14` | Name font size. |
| `--gov-branding_icon_c` | `--color-icon-brand-default` | Seal color. |

## Example

```twig
{% include 'mud_egov:gov-branding' only %}
```

## Accessibility

- The link text is the visible name; the seal SVG is decorative.
- The link opens in a new tab with `rel="noopener noreferrer"`.
- Standard link focus ring from `reboot.css`.
