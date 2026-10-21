# Pagination

Page navigation control rendering Previous/Next links and a windowed set of numbered page links. Renders nothing when `pagination_total` is 1 or less. Pure server-side Twig — no JavaScript required.

## Usage

```twig
{% include 'egov:pagination' with {
  pagination_current: 4,
  pagination_total: 20,
  pagination_base_url: '/results',
  pagination_size: 'md',
} %}
```

This produces links like `/results?page=3`, `/results?page=5`, etc.

Without a base URL:

```twig
{% include 'egov:pagination' with {
  pagination_current: 2,
  pagination_total: 10,
} %}
```

Produces `?page=1`, `?page=3`, etc.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `pagination_current` | `int` | `1` | Active page (1-indexed). |
| `pagination_total` | `int` | `1` | Total number of pages. |
| `pagination_base_url` | `string\|null` | `null` | Base path for page links. Page appended as `?page=N`. |
| `pagination_prev_label` | `string\|null` | `'Previous'` | Visible label for the Previous button. |
| `pagination_next_label` | `string\|null` | `'Next'` | Visible label for the Next button. |
| `pagination_nav_label` | `string\|null` | `'Pagination'` | Accessible name for the `<nav>` landmark. |
| `pagination_size` | `string\|null` | `null` | Size rung: `md` (40 px) or `sm` (32 px). |
| `pagination_uc` | `string[]` | `[]` | Extra utility classes on the root `<nav>`. |
| `pagination_att` | `Attribute` | `null` | Additional HTML attributes on the root `<nav>`. |

## CSS custom properties

| Property | Description |
|---|---|
| `--pagination_item_size` | Width/height of each numbered page button. |
| `--pagination_item_c` | Page item text colour (default). |
| `--pagination_item_c_hover` | Page item text colour on hover. |
| `--pagination_item_bg` | Page item background (default). |
| `--pagination_item_bg_hover` | Page item background on hover. |
| `--pagination_item_c_current` | Current page text colour. |
| `--pagination_item_bg_current` | Current page background. |
| `--pagination_gap` | Gap between items. |
| `--pagination_nav_c` | Prev/Next button text colour. |
| `--pagination_nav_bg` | Prev/Next button background. |
| `--pagination_nav_bg_hover` | Prev/Next button background on hover. |
