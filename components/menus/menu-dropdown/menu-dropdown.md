# Menu

Dropdown/context menu with a floating panel of items. Supports keyboard navigation (arrows, Enter, Escape), outside-click dismiss, and both contextual (action) and selection (single-select) flavours.

## Usage

```twig
{% include 'mud_egov:menu' with {
  menu_trigger_label: 'Options',
  menu_position: 'bottom-start',
  menu_items: [
    { label: 'Edit', url: '/edit' },
    { label: 'Duplicate', url: '/duplicate' },
    { divider: true },
    { label: 'Delete', url: '/delete', disabled: false },
  ],
} only %}
```

### Custom trigger

```twig
{% include 'mud_egov:menu' with {
  menu_items: [{ label: 'Profile' }, { label: 'Logout' }],
  slot_trigger: '<button type="button" data-menu-trigger aria-haspopup="menu" aria-expanded="false">Account</button>',
} only %}
```

## Props

| Prop                 | Type              | Default          | Description                                                   |
|----------------------|-------------------|------------------|---------------------------------------------------------------|
| `menu_items`         | `array`           | `[]`             | Items: `{label, url, icon, disabled, divider}`.               |
| `menu_trigger_label` | `string\|null`    | `null`           | Default trigger button label.                                 |
| `menu_type`          | `string\|null`    | `contextual`     | `contextual` (ARIA menu) or `selection` (ARIA listbox).       |
| `menu_position`      | `string\|null`    | `bottom-start`   | `bottom-start` / `bottom-end` / `top-start` / `top-end`       |
| `menu_open`          | `boolean`         | `false`          | Initial open state.                                           |
| `menu_uc`            | `array`           | `[]`             | Extra utility classes.                                        |
| `menu_att`           | `Attribute\|null` | `null`           | Additional HTML attributes.                                   |

## Slots

| Slot           | Description                                      |
|----------------|--------------------------------------------------|
| `slot_trigger` | Custom trigger element (must include `data-menu-trigger`). |

## CSS Custom Properties

| Property                    | Default     | Description              |
|-----------------------------|-------------|--------------------------|
| `--menu_panel-bg`           | `#fff`      | Panel background.        |
| `--menu_panel-border-color` | `#e0e0e0`   | Panel border color.      |
| `--menu_panel-border-radius`| `8px`       | Panel corner radius.     |
| `--menu_panel-shadow`       | shadow      | Panel drop shadow.       |
| `--menu_panel-min-width`    | `180px`     | Minimum panel width.     |
| `--menu_panel-max-height`   | `320px`     | Maximum panel height.    |
