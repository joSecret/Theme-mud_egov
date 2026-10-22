---
title: Field Icon
group: Fields
version: 1.1.0
css_prefix: field-icon
---

# Field Icon

A field row with an icon on the left and the content on the right. The icon comes from the `field_icon_icon` prop or from the `slot_icon` slot, the content from `field_icon_value` or `slot_content`. Links inside the value are not underlined.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `field_icon_icon` | string | `null` | Icon markup (SVG or img). |
| `field_icon_value` | string | `null` | The value displayed next to the icon. |
| `field_icon_uc` | array | `[]` | Utility classes for the wrapper. |
| `field_icon_att` | Attribute | `null` | Attributes for the wrapper. |

Slots: `slot_icon` (icon), `slot_content` (content).

## CSS variables

Public overrides (empty by default): `--field-icon_gap`, `--field-icon_c`, `--field-icon_f-s`, `--field-icon_f-w`, `--field-icon_p-b`, `--field-icon_icon_size`, `--field-icon_icon_c`, `--field-icon_link_t-d`.

## Example

```twig
{% include 'mud_egov:field-icon' with {
  field_icon_icon: icon_svg,
  field_icon_value: 'Chișinău, str. Exemplu 1',
} only %}
```

## Accessibility

- The icon is decorative: pass SVG markup with `aria-hidden="true"` unless it carries meaning that the text does not.
- The value stays as real text, so it can be selected and read by assistive technology.
