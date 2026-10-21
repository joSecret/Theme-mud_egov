---
title: Search Input Circular
group: Forms
slug: search-input-circular
description: Pill-shaped search input aligned with MUD mud-search-input-circular. Supports optional trailing submit button, size variants, and full accessibility wiring.
version: 1.0.0
---

# Search Input Circular

## Overview

Pill/circular search input wrapping the MUD `mud-search-input-circular` token namespace. Renders a native `<input type="search">` with a leading magnifying-glass icon and an optional trailing submit button.

## Features

- Pill border-radius (9999px) silhouette
- Leading search icon
- Optional trailing circular submit button (`search_circular_with_button`)
- Size variants: `md` (default), `lg`
- Disabled state
- Full ARIA wiring (`aria-labelledby`, `aria-required`, `aria-disabled`)

## Usage

```twig
{% include 'mud_egov:search-input-circular' with {
  search_circular_label: 'Search',
  search_circular_placeholder: 'Enter a keyword...',
  search_circular_name: 'q',
  search_circular_id: 'site-search',
} %}
```

## With submit button

```twig
{% include 'mud_egov:search-input-circular' with {
  search_circular_label: 'Search services',
  search_circular_placeholder: 'Search...',
  search_circular_name: 'q',
  search_circular_with_button: true,
  search_circular_button_label: 'Search',
} %}
```

## Large size

```twig
{% include 'mud_egov:search-input-circular' with {
  search_circular_label: 'Find a service',
  search_circular_size: 'lg',
  search_circular_with_button: true,
} %}
```

## Properties

| Property                       | Type      | Default   | Description                               |
| ------------------------------ | --------- | --------- | ----------------------------------------- |
| `search_circular_label`        | string    | null      | Visible label text                        |
| `search_circular_placeholder`  | string    | null      | Placeholder text                          |
| `search_circular_name`         | string    | null      | Form control name                         |
| `search_circular_id`           | string    | null      | HTML id (falls back to name)              |
| `search_circular_value`        | string    | null      | Current value                             |
| `search_circular_button_label` | string    | 'Caută'   | Accessible label for the submit button    |
| `search_circular_size`         | string    | null      | Size rung: `md` or `lg`                  |
| `search_circular_disabled`     | boolean   | false     | Disables the control                      |
| `search_circular_required`     | boolean   | false     | Marks the field as required               |
| `search_circular_with_button`  | boolean   | false     | Renders the trailing submit button        |
| `search_circular_uc`           | array     | []        | Extra utility classes                     |
| `search_circular_att`          | Attribute | null      | Extra HTML attributes on the wrapper      |
