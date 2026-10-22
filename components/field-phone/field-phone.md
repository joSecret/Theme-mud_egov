---
title: Field Phone
group: Fields
version: 1.1.0
css_prefix: field-phone
---

# Field Phone

A phone number rendered as a `tel:` link with a leading phone icon. Non-digit characters are removed for the `href` and the Moldova country code `373` is added when missing. The link opens in a new tab. Used by `templates/paragraph/paragraph--field-phone.html.twig` and by `footer-contact`.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `field_phone_value` | string | `null` | The phone number, as it is displayed. |
| `field_phone_uc` | array | `[]` | Utility classes for the link. |
| `field_phone_att` | Attribute | `null` | Attributes for the link. |

No slots.

## CSS variables

Public overrides (empty by default): `--field-phone_gap`, `--field-phone_c`, `--field-phone_f-s`, `--field-phone_f-w`, `--field-phone_p-b`, `--field-phone_t-d`, `--field-phone_icon_size`, `--field-phone_icon_c`.

## Example

```twig
{% include 'mud_egov:field-phone' with {
  field_phone_value: '+373 22 123 456',
} only %}
```

## Accessibility

- The link text is the phone number as displayed, so the name is clear out of context.
- The icon is decorative and not exposed to assistive technology through the link text.
- The link opens in a new tab; keep the visible text meaningful so that the change of context is expected.
