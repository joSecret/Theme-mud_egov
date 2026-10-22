---
title: Header
group: Globals
version: 1.1.0
css_prefix: header
---

# Header

Site header and navigation bar: an optional government pre-header band, then the logo, primary navigation, actions and the mobile menu trigger. Native Drupal SDC, no web component.

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
| `header_nav_label` | string\|null | `'Main navigation'` | Accessible name for the `<nav>` landmark |
| `header_uc` | array | `[]` | Extra utility classes |
| `header_att` | Attribute | `null` | Additional HTML attributes |

## Slots

| Slot | Description |
|---|---|
| `slot_logo` | Main product logo (e.g. `mud_egov:logo`) |
| `slot_nav` | Primary navigation items |
| `slot_actions` | Trailing action icons and CTA buttons |
| `slot_mobile_menu` | Mobile navigation menu trigger |

## CSS variables

Public overrides are empty by default; set them in a specific context.

```css
.my-site .c--header {
  --header_bar_h: 72px;
  --header_pre-header_bg: var(--color-background-brand-strong);
}
```

| Variable | Default |
|---|---|
| `--header_bg`, `--header_c` | `--color-background-base-default`, `--color-text-base-default` |
| `--header_bs` | `--drop-shadow-100` (`none` when bordered) |
| `--header_b-b` | `none` (bordered: `--border-width-1` solid `--color-border-base-default`) |
| `--header_p-b`, `--header_p-i` | `0`, `--spacing-24` |
| `--header_z` | `100` |
| `--header_pre-header_bg`, `--header_pre-header_c` | `--color-background-brand-default`, `--color-text-base-inverse-default` |
| `--header_pre-header_f-s`, `--header_pre-header_l-h` | `--font-size-12`, `--line-height-16` |
| `--header_bar_h`, `--header_bar_gap`, `--header_bar_mx-w` | `64px`, `--spacing-16`, `100%` |
| `--header_actions_gap` | `--spacing-8` |

## Accessibility

- Renders a `<header>` landmark; the navigation is a `<nav>` with `aria-label` from `header_nav_label` (translate it, e.g. "Navigare principală").
- Interactive content comes from the slots, so focus styles and labels belong to the components placed there.
- The mobile menu slot is hidden from 1024px up with `display: none`, so it also leaves the accessibility tree.
