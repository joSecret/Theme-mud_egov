---
title: Table
group: Globals
version: 1.1.0
css_prefix: table
---

# Table

Data table. Supports header styles, row styles (divided/zebra/borderless), hover highlight, sticky header, and sort indicators on columns (sorting itself is done by the caller; the component has no JavaScript).

## Usage

```twig
{% include 'mud_egov:table' with {
  table_headers: [
    { key: 'name', label: 'Nume', sortable: true },
    { key: 'status', label: 'Status', align: 'center' },
    { key: 'date', label: 'Dată', sortable: true, align: 'end' },
  ],
  table_rows: [
    { name: 'Ion Popescu', status: 'Activ', date: '2024-01-15' },
    { name: 'Maria Ionescu', status: 'Inactiv', date: '2024-02-20' },
  ],
  table_row_style: 'divided',
  table_hoverable: true,
} %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `table_caption` | string\|null | null | Accessible caption (visually hidden) |
| `table_aria_label` | string\|null | null | `aria-label` on table |
| `table_headers` | array | [] | `[{key, label, sortable?, align?, width?}]` |
| `table_rows` | array | [] | Array of data objects |
| `table_sort_column` | string\|null | null | Currently sorted column key |
| `table_sort_direction` | string\|null | null | `asc` \| `desc` |
| `table_header_style` | string\|null | null | `default` \| `inverted` \| `white` |
| `table_row_style` | string\|null | null | `divided` \| `zebra` \| `borderless` |
| `table_hoverable` | boolean | false | Hover highlight on rows |
| `table_sticky_header` | boolean | false | Sticky `<thead>` |
| `table_uc` | array | [] | Additional CSS classes |
| `table_att` | Attribute | null | HTML attributes on wrapper |

## CSS variables

Public overrides (empty by default). Defaults come from tokens (`--color-*`, `--spacing-*`, `--font-size-*`).

| Variable | Default | Description |
|----------|---------|-------------|
| `--table_b-c` | `--color-border-base-default` | Divided row border color. |
| `--table_c` | `--color-text-base-default` | Cell text color. |
| `--table_f-s` | `--font-size-14` | Cell font size. |
| `--table_head_bg` | `--color-background-base-secondary` | Header background. |
| `--table_head_c` | `--color-text-base-secondary` | Header text color. |
| `--table_head_f-s`, `--table_head_f-w` | `--font-size-12`, `--font-weight-semibold` | Header font size and weight. |
| `--table_head_bg_h` | 5% darker header background | Sortable header hover background. |
| `--table_inverted_head_bg`, `--table_inverted_head_c` | `--color-background-base-default`, `--color-text-base-inverse-default` | Inverted header. |
| `--table_white_head_bg` | `--color-background-base-default` | White header background. |
| `--table_cell_p-b`, `--table_cell_p-i` | `--spacing-12`, `--spacing-16` | Cell padding. |
| `--table_row_bg_h` | `--color-background-base-tertiary` | Row hover background. |
| `--table_zebra_bg` | `--color-background-base-secondary` | Zebra even-row background. |
| `--table_empty_p-b` | `--spacing-32` | Empty-state vertical padding. |
| `--table_sort_m-i`, `--table_sort_f-s` | `--spacing-4`, `--font-size-10` | Sort icon spacing and size. |
| `--table_th_w` | `auto` | Column width (set inline from the header `width`). |

Renamed from the previous API: `--table_border_c` is now `--table_b-c`, `--table_row_hover_bg` is `--table_row_bg_h`, and the inline `--col-width` is `--table_th_w`.

## Accessibility

- Native `<table>` with `<thead>`/`<th scope="col">`; the caption (visually hidden) or `table_aria_label` names it.
- Sortable headers carry `aria-sort` and `tabindex="0"`; the sort arrow is `aria-hidden`.
- Sticky header and horizontal scroll (`.table-wrapper`) keep the table usable at narrow widths.
- Header/cell text uses theme text tokens on their backgrounds; check contrast when overriding the colors.
