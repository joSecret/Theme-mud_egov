# Service Button

Service portal button with an embedded logo badge. Aligned with MUD `mud-service-button`. Fixed 48 px height with asymmetric padding per the Figma spec. Renders as `<button>` by default or as `<a>` when `service_button_url` is set.

## Usage

```twig
{% include 'mud_egov:service-button' with {
  service_button_label: 'Plătește cu mpay',
  service_button_icon: 'mpay-logo-logomark-only',
  service_button_url: 'https://mpay.gov.md',
  service_button_external: true,
  service_button_variant: 'primary',
} %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `service_button_label` | string | `''` | **Required.** Visible label text |
| `service_button_description` | string\|null | `null` | Secondary description below the label |
| `service_button_url` | string\|null | `null` | Renders as `<a>` when set |
| `service_button_icon` | string\|null | `null` | MUD mud-logo asset name for the badge |
| `service_button_variant` | string\|null | `null` | `primary` (brand, default) / `neutral` (light surface) |
| `service_button_external` | boolean | `false` | Opens in new tab with `rel="noopener noreferrer"` |
| `service_button_disabled` | boolean | `false` | Disables interactivity |
| `service_button_full_width` | boolean | `false` | Stretches to fill its container |
| `service_button_target` | string\|null | `null` | Anchor `target` (ignored when `external` is true) |
| `service_button_rel` | string\|null | `null` | Anchor `rel` (ignored when `external` is true) |
| `service_button_aria_label` | string\|null | `null` | Accessible name override |
| `service_button_uc` | array | `[]` | Extra utility classes |
| `service_button_att` | Attribute | `null` | Additional HTML attributes |

## CSS custom properties

```css
.c--service-button {
  --service-button_h: 48px;
  --service-button_b-r: 8px;
}
```
