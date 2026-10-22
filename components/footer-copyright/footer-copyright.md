---
title: Footer Copyright
group: Layout
version: 1.1.0
css_prefix: footer-copyright
---


# Footer Copyright

Copyright notice for the footer: copyright sign, year and text. Rendered by the `mud_core` footer copyright block.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `footer_copyright_year` | integer \| null | `null` | Year shown after the copyright sign. |
| `footer_copyright_text` | string \| null | `null` | Copyright text. |
| `footer_copyright_uc` | array | `[]` | Extra classes on the paragraph. |
| `footer_copyright_att` | Attribute | `null` | Attributes on the paragraph. |

## CSS variables

| Variable | Default | Description |
|---|---|---|
| `--footer-copyright_f-s` | `--font-size-14` | Font size. |
| `--footer-copyright_c` | `inherit` | Text color. |

## Example

```twig
{% include 'mud_egov:footer-copyright' with {
  footer_copyright_year: 2026,
  footer_copyright_text: 'Guvernul Republicii Moldova',
} only %}
```

## Accessibility

- Plain paragraph text; no interaction.
- Color is inherited from the footer, so contrast follows the footer background.
