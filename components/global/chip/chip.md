# Chip

Compact, pill-shaped control for filter selection or token display. Maps to the `mud-chip` web component.

Two behavioral modes:
- `filter` — toggleable filter chip; emits `chip:select` event with `{ selected, chip }`.
- `input` — represents a user-entered value; combine with `chip_removable` for a trailing remove button that emits `chip:remove`.

## Usage

```twig
{# Filter chip #}
{% include 'mud_egov:chip' with {
  chip_label: 'Active',
  chip_type: 'filter',
  chip_selected: false,
} only %}

{# Filter chip — multi-select with checkmark #}
{% include 'mud_egov:chip' with {
  chip_label: 'Category',
  chip_type: 'filter',
  chip_selection_mode: 'multi',
  chip_selected: true,
} only %}

{# Input chip with remove button #}
{% include 'mud_egov:chip' with {
  chip_label: 'Ion Obreja',
  chip_type: 'input',
  chip_removable: true,
} only %}

{# Small chip with count #}
{% include 'mud_egov:chip' with {
  chip_label: 'Results',
  chip_size: 'sm',
  chip_count: 42,
} only %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `chip_label` | string\|null | `null` | Visible text content. |
| `chip_count` | integer\|null | `null` | Numeric badge after the label. |
| `chip_icon` | string\|null | `null` | SVG icon markup before the label. |
| `chip_type` | string\|null | `filter` | `filter` \| `input` |
| `chip_size` | string\|null | `md` | `sm` \| `md` |
| `chip_selection_mode` | string\|null | `mono` | `mono` \| `multi` (adds checkmark when selected) |
| `chip_selected` | boolean | `false` | Selected state for `type=filter`. |
| `chip_removable` | boolean | `false` | Show remove button. Only for `type=input`. |
| `chip_disabled` | boolean | `false` | Disables all interactivity. |
| `chip_uc` | array | `[]` | Extra utility classes. |
| `chip_att` | Attribute\|null | `null` | Extra HTML attributes on the wrapper. |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--chip_h` | `--chip-container-height-md` | Chip height. |
| `--chip_p-i` | `--chip-container-padding-inline-md` | Inline padding. |
| `--chip_gap` | `--chip-container-gap-md` | Gap between icon and label. |
| `--chip_f-s` | `--chip-label-font-size-md` | Label font size. |
| `--chip_bg` | `--chip-filter-background-default` | Background color. |
| `--chip_bg-hover` | `--chip-filter-background-hover` | Hover background. |
| `--chip_c` | `--chip-filter-label-default` | Label color. |
| `--chip_icon-c` | `--chip-filter-icon-default` | Icon color. |
| `--chip_b-r` | `--chip-container-border-radius` | Border radius. |

## JavaScript Events

| Event | Bubbles | Detail | Description |
|-------|---------|--------|-------------|
| `chip:select` | yes | `{ selected: boolean, chip: Element }` | Fired on filter chip toggle. |
| `chip:remove` | yes | `{ chip: Element }` | Fired when remove button is clicked. Chip is hidden by default; call `e.preventDefault()` to cancel. |
