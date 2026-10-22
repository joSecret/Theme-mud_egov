---
title: Footer Contact
group: Layout
version: 1.1.0
css_prefix: footer-contact
---


# Footer Contact

Contact block for the footer: optional logo link, phone, email, address and a menu slot. Rendered by the `mud_core` footer contact block.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `footer_contact_logo_src` | string \| null | `null` | Logo image URL. The logo is not rendered when empty. |
| `footer_contact_logo_alt` | string \| null | `null` | Logo alt text. When empty the image gets `aria-hidden="true"`. |
| `footer_contact_logo_url` | string \| null | `/` | Logo link URL. |
| `footer_contact_phone` | string \| null | `null` | Phone, rendered with `field-phone`. |
| `footer_contact_email` | string \| null | `null` | Email, rendered with `field-mail`. |
| `footer_contact_address` | string \| null | `null` | Address; line breaks become `<br>`. |
| `footer_contact_uc` | array | `[]` | Extra classes on the wrapper. |
| `footer_contact_att` | Attribute | `null` | Attributes on the wrapper. |

## Slots

| Slot | Description |
|---|---|
| `menu` | Rendered menu shown under the address. |

## CSS variables

Defaults come from `--footer-contact-gap` and spacing tokens. Set the public variables on the component or an ancestor to override.

| Variable | Default | Description |
|---|---|---|
| `--footer-contact_gap` | `--footer-contact-gap` | Gap between items. |
| `--footer-contact_logo_m-b` | `--spacing-8` | Space under the logo. |
| `--footer-contact_menu_m-b` | `--spacing-8` | Space above the menu. |
| `--footer-contact_menu_gap` | `--spacing-12` | Gap between menu items. |

## Example

```twig
{% embed 'mud_egov:footer-contact' with {
  footer_contact_logo_src: '/logo.svg',
  footer_contact_logo_alt: 'Guvernul Republicii Moldova',
  footer_contact_phone: '+373 22 250 101',
  footer_contact_email: 'info@gov.md',
  footer_contact_address: 'Piața Marii Adunări Naționale 1',
} %}
  {% block menu %}{{ menu }}{% endblock %}
{% endembed %}
```

## Accessibility

- The logo link has `rel="home"`; a logo without alt text is hidden from assistive technology.
- Phone and email are real `tel:` and `mailto:` links from the field components.
- The address is plain text in a paragraph.
