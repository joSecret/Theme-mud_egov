# Table

Data table aligned with `mud-table`. Supports header styles, row styles (divided/zebra/borderless), hover highlight, sticky header, and sortable columns.

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

| Variable | Default | Description |
|----------|---------|-------------|
| `--table_border_c` | border | Divided row border color |
| `--table_head_bg` | secondary bg | Header background |
| `--table_inverted_head_bg` | dark | Inverted header background |
| `--table_row_hover_bg` | tertiary bg | Row hover background |
| `--table_zebra_bg` | secondary bg | Zebra even-row background |
