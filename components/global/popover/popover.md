---
title: Popover
group: Globals
version: 1.1.0
css_prefix: popover
---

# Popover

Panel anchored to a trigger element with the native popover API (`popover` attribute and CSS anchor positioning). It holds free content or a list of menu items, and is used by the language switcher block.

## Usage

```twig
{# Trigger: a button with popovertarget and the matching anchor-name #}
{% include 'mud_egov:popover' with {
  popover_id: 'lang-menu',
  popover_menu_items: [
    { label: 'Română', url: '/ro', active: true },
    { divider: true },
    { label: 'English', url: '/en' },
    { label: 'Русский', disabled: true },
  ],
} only %}

{# Free content #}
{% include 'mud_egov:popover' with {
  popover_id: 'info',
  popover_content: '<p>Text</p>',
} only %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `popover_id` | string\|null | `null` | Required. ID of the popover and name of its anchor (`position-anchor: --<id>`). |
| `popover_mobile_panel` | boolean | `false` | On mobile (up to 767px) slides in from the right over the whole area below the navbar. |
| `popover_content` | string\|null | `null` | Free content, used when there are no menu items. |
| `popover_menu_items` | array\|null | `null` | Items `{label, url, icon, active, disabled, divider}`. |
| `popover_uc` | array | `[]` | Extra utility classes. |
| `popover_att` | Attribute\|null | `null` | Extra HTML attributes on the wrapper. |

## Slots

| Slot | Description |
|------|-------------|
| `slot_content` | Replaces the content (menu items or `popover_content`). |

## CSS Variables

Public overrides are empty by default; set them in a specific context.

| Variable | Default | Description |
|----------|---------|-------------|
| `--popover_bg` | `--color-background-base-default` | Background. |
| `--popover_c` | `--color-text-base-default` | Text color. |
| `--popover_b-r` | `--border-radius-16` | Border radius. |
| `--popover_bs` | `--drop-shadow-menu` | Shadow. |
| `--popover_p-b`, `--popover_p-i` | `--spacing-24`, `--spacing-20` | Padding of a free-content popover. |
| `--popover_menu_p-b`, `--popover_menu_p-i` | `--spacing-8` | Padding when it holds a menu. |
| `--popover_m-b` | `--spacing-16` | Distance from the anchor. |
| `--popover_item_p-b`, `--popover_item_p-i` | `--spacing-8`, `--spacing-12` | Menu item padding. |
| `--popover_item_bg_h` | `--color-background-base-default-hover` | Item hover background. |
| `--popover_item_bg_s` | `--color-background-base-secondary` | Active item (`aria-current`) background. |
| `--popover_item_c_s` | `--color-icon-brand-default` | Active item color. |
| `--popover_divider_bg` | `--color-border-base-default` | Divider color. |

## Accessibility

- The native popover API provides light dismiss (click outside, Escape) and top-layer rendering.
- Menu items are real `<a>`/`<button>` elements, reachable by keyboard; the active item has `aria-current`, a disabled one has `aria-disabled`.
- Keyboard focus on an item shows a 2px inset focus ring.
- The hover transition and the mobile slide-in are off under `prefers-reduced-motion: reduce`.
