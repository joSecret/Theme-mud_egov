---
title: Field Mail
group: Fields
version: 1.1.0
css_prefix: field-mail
---

# Field Mail

An email address rendered as a `mailto:` link with a leading envelope icon. The link opens in a new tab (`target="_blank"`, `rel="noopener noreferrer"`). Used by `templates/paragraph/paragraph--field-email.html.twig` and by `footer-contact`.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `field_mail_value` | string | `null` | The email address. |
| `field_mail_uc` | array | `[]` | Utility classes for the link. |
| `field_mail_att` | Attribute | `null` | Attributes for the link. |

No slots.

## CSS variables

Public overrides (empty by default): `--field-mail_gap`, `--field-mail_c`, `--field-mail_f-s`, `--field-mail_f-w`, `--field-mail_p-b`, `--field-mail_t-d`, `--field-mail_icon_size`, `--field-mail_icon_c`.

## Example

```twig
{% include 'mud_egov:field-mail' with {
  field_mail_value: 'a@example.md',
} only %}
```

## Accessibility

- The link text is the email address itself, so the name is clear out of context.
- The icon is decorative and not exposed to assistive technology through the link text.
- The link opens in a new tab; keep the visible text meaningful so that the change of context is expected.
