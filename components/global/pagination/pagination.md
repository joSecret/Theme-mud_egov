---
title: Pagination
group: Globals
version: 1.1.0
css_prefix: pagination
---

# Pagination

Page navigation control rendering Previous/Next links and a windowed set of numbered page links. Renders nothing when `pagination_total` is 1 or less. Pure server-side Twig — no JavaScript required.

## Usage

```twig
{% include 'mud_egov:pagination' with {
  pagination_current: 4,
  pagination_total: 20,
  pagination_base_url: '/results',
  pagination_size: 'md',
} %}
```

This produces links like `/results?page=3`, `/results?page=5`, etc.

Without a base URL:

```twig
{% include 'mud_egov:pagination' with {
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

## CSS variables

Public overrides (empty by default). Defaults come from the `--pagination-*` variables in `css/defaults/navigation.css`.

| Variable | Default | Description |
|---|---|---|
| `--pagination_size` | `--pagination-item-size-md` (`-sm` with `pagination_size: sm`) | Width/height of each item. |
| `--pagination_gap` | `--pagination-container-gap-md` | Gap between items. |
| `--pagination_b-r` | `--pagination-item-border-radius` | Item border radius. |
| `--pagination_f-f`, `--pagination_f-s`, `--pagination_f-w`, `--pagination_l-h` | `--pagination-item-font-*` | Typography. |
| `--pagination_trn` | `--pagination-container-transition-*` | Transition. |
| `--pagination_c` | `--pagination-item-unselected-label-default` | Item text color. |
| `--pagination_c_h` | `--pagination-item-unselected-label-hover` | Item text color on hover. |
| `--pagination_bg` | `--pagination-item-unselected-background-default` | Item background. |
| `--pagination_bg_h` | `--pagination-item-unselected-background-hover` | Item background on hover. |
| `--pagination_current_c` | `--pagination-item-selected-label-default` | Current page text color. |
| `--pagination_current_bg` | `--pagination-item-selected-background-default` | Current page background. |
| `--pagination_current_f-w` | `--font-weight-semibold` | Current page font weight. |
| `--pagination_link_p-i`, `--pagination_link_gap` | `--pagination-nav-padding-inline-md`, `--spacing-6` | Link padding and icon/label gap. |
| `--pagination_link_b-w`, `--pagination_link_b-c`, `--pagination_link_b-c_f` | `--pagination-item-*` | Link border width, color and focus color. |
| `--pagination_link_bs_f` | inner + outer ring | Focus ring. |

Renamed from the previous API: `--pagination_item_size` / `--pagination-item_s` is `--pagination_size`; `--pagination_item_c`, `_item_bg`, `_item_c_hover`, `_item_bg_hover` are `--pagination_c`, `_bg`, `_c_h`, `_bg_h`; `_item_c_current` / `_item_bg_current` are `--pagination_current_c` / `_current_bg`. The `--pagination_nav_*` variables were removed: the Previous/Next styles never applied (the old selector was a descendant selector that matched nothing), so those links use the item variables.

## Accessibility

- A `<nav>` landmark named by `pagination_nav_label`; items are in a list.
- The current page is a non-link element with `aria-current="page"`; every link has a descriptive `aria-label` ("Go to page N", "Go to previous page").
- Focus: visible two-color ring on `:focus-visible`; the outline is only made transparent because the ring replaces it.
- The ellipsis item is `aria-hidden`; transitions are off under `prefers-reduced-motion: reduce`.
