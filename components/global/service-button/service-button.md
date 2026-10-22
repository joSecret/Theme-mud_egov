---
title: Service Button
group: Globals
version: 2.0.0
css_prefix: svc-btn
---

# Service Button

Service portal button with an embedded logo badge. Uses the `--service-button-*` defaults (48 px height, asymmetric padding). The badge is rendered by `mud_egov:logo`, without web components. Renders as `<button>` by default or as `<a>` when `service_button_url` is set.

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
| `service_button_icon` | string\|null | `null` | MUD logo name for the 24px badge (rendered by `mud_egov:logo`) |
| `service_button_variant` | string\|null | `null` | `primary` (brand, default) / `neutral` (light surface) |
| `service_button_external` | boolean | `false` | Opens in new tab with `rel="noopener noreferrer"` |
| `service_button_disabled` | boolean | `false` | Disables interactivity |
| `service_button_full_width` | boolean | `false` | Stretches to fill its container |
| `service_button_target` | string\|null | `null` | Anchor `target` (ignored when `external` is true) |
| `service_button_rel` | string\|null | `null` | Anchor `rel` (ignored when `external` is true) |
| `service_button_aria_label` | string\|null | `null` | Accessible name override |
| `service_button_uc` | array | `[]` | Extra utility classes |
| `service_button_att` | Attribute | `null` | Additional HTML attributes |

No slots.

## CSS overrides

```css
.my-section .c--service-button {
  --svc-btn_b-r: 0;
  --svc-btn_neutral_bg: var(--color-background-base-default);
}
```

Pattern: `--svc-btn_<variant>_<property>_<state>` (`--svc-btn_bg_h`, `--svc-btn_neutral_c`, `--svc-btn_badge_size`).

## Accessibility

- Focus: the MUD ring (`--focus-ring`) on `:focus-visible`.
- The badge is decorative (`aria-hidden`); the label is the accessible name unless `service_button_aria_label` is set.
- External links announce "(se deschide într-un tab nou)" to screen readers.
- Disabled links get `aria-disabled="true"` and `tabindex="-1"`.
