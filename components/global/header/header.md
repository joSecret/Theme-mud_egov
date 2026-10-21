# Header

Site header / navigation bar. Wraps the MUD `mud-header` design pattern as a Drupal SDC component.

## Usage

```twig
{% include 'mud_egov:header' with {
  header_sticky: true,
  header_bordered: false,
  header_government_label: 'Republica Moldova',
  header_nav_label: 'Navigare principală',
} %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `header_sticky` | boolean | `false` | Sticks the header to the top of the viewport on scroll |
| `header_bordered` | boolean | `false` | Adds a bottom border instead of the box shadow |
| `header_government_label` | string\|null | `null` | Label shown in the pre-header band |
| `header_language` | string\|null | `null` | Active language code (e.g. `"ro"`) |
| `header_nav_label` | string\|null | `null` | Accessible name for the `<nav>` landmark |
| `header_uc` | array | `[]` | Extra utility classes |
| `header_att` | Attribute | `null` | Additional HTML attributes |

## Slots

| Slot | Description |
|---|---|
| `slot_logo` | Main product logo (e.g. `<mud-logo>`) |
| `slot_nav` | Primary navigation items |
| `slot_actions` | Trailing action icons and CTA buttons |
| `slot_mobile_menu` | Mobile navigation menu trigger |

## CSS custom properties

Override at the consumer level:

```css
.c--header {
  --header_bg: #fff;
  --header_bar_h: 72px;
  --header_pre-header_bg: #003f8a;
}
```
