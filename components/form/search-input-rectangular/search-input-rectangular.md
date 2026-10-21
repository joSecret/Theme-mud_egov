---
title: Search Input Rectangular
group: Forms
slug: search-input-rectangular
description: Rectangular search input aligned with MUD mud-search-input-rectangular. Supports an optional integrated submit button, size variants, and full accessibility wiring.
version: 1.0.0
---

# Search Input Rectangular

## Overview

Rectangular search input wrapping the MUD `mud-search-input-rectangular` token namespace. Renders a native `<input type="search">` with a leading magnifying-glass icon and an optional trailing submit button.

## Features

- Rectangular border-radius silhouette
- Leading search icon
- Optional trailing rectangular submit button (`search_rect_show_button`)
- Size variants: `md` (default), `lg`
- Disabled state
- Full ARIA wiring (`aria-labelledby`, `aria-required`, `aria-disabled`)

## Usage

```twig
{% include 'mud_egov:search-input-rectangular' with {
  search_rect_label: 'Search',
  search_rect_placeholder: 'Enter a keyword...',
  search_rect_name: 'q',
  search_rect_id: 'site-search',
} %}
```

## With submit button

```twig
{% include 'mud_egov:search-input-rectangular' with {
  search_rect_label: 'Search services',
  search_rect_placeholder: 'Search...',
  search_rect_name: 'q',
  search_rect_show_button: true,
  search_rect_button_label: 'Search',
} %}
```

## Large size

```twig
{% include 'mud_egov:search-input-rectangular' with {
  search_rect_label: 'Find a service',
  search_rect_size: 'lg',
  search_rect_show_button: true,
} %}
```

## Properties

| Property                    | Type      | Default   | Description                               |
| --------------------------- | --------- | --------- | ----------------------------------------- |
| `search_rect_label`         | string    | null      | Visible label text                        |
| `search_rect_placeholder`   | string    | null      | Placeholder text                          |
| `search_rect_name`          | string    | null      | Form control name                         |
| `search_rect_id`            | string    | null      | HTML id (falls back to name)              |
| `search_rect_value`         | string    | null      | Current value                             |
| `search_rect_button_label`  | string    | 'Caută'   | Accessible label for the submit button    |
| `search_rect_size`          | string    | null      | Size rung: `md` or `lg`                  |
| `search_rect_disabled`      | boolean   | false     | Disables the control                      |
| `search_rect_required`      | boolean   | false     | Marks the field as required               |
| `search_rect_show_button`   | boolean   | false     | Renders the trailing submit button        |
| `search_rect_uc`            | array     | []        | Extra utility classes                     |
| `search_rect_att`           | Attribute | null      | Extra HTML attributes on the wrapper      |
