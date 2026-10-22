---
title: Statistics
group: Content
version: 1.1.0
css_prefix: statistics
---

# Statistics

Section with a heading, an optional link and a grid of `statistics-item` elements. Above 992px (container named `body`) the intro and the grid are two columns; above 528px the items are laid out in two columns.

## Props and slots

| Name                     | Kind | Type         | Default | Description                              |
|--------------------------|------|--------------|---------|------------------------------------------|
| `statistics_title`       | prop | string, null | `null`  | Heading text.                            |
| `statistics_title_level` | prop | integer 1-6  | `2`     | Heading level (the template falls back to 3 when empty). |
| `statistics_uc`          | prop | array        | `[]`    | Extra utility classes on the wrapper.    |
| `statistics_att`         | prop | Attribute    | `null`  | HTML attributes on the wrapper.          |
| `statistics_link`        | slot | render       |         | Rendered link field (`field_cta_primary`).|
| `statistics_items`       | slot | render       |         | Rendered `statistics-item` paragraphs.   |

## Public CSS variables (level 3, empty by default)

| Variable                                         | Default (level 2)              |
|--------------------------------------------------|--------------------------------|
| `--statistics_gap`                               | `--spacing-80`                 |
| `--statistics_g-t-c`, `--statistics_lg_g-t-c`    | `1fr`, `repeat(2, 1fr)` (above 992px) |
| `--statistics_p-b`, `--statistics_p-i`           | `--spacing-64`, `0px`          |
| `--statistics_heading_mx-w`                      | `510px`                        |
| `--statistics_intro_gap`                         | `--spacing-24`                 |
| `--statistics_grid_g-t-c`, `--statistics_grid_sm_g-t-c` | `1fr`, `repeat(2, 1fr)` (above 528px) |
| `--statistics_grid_gap`                          | `--spacing-48`                 |

## Usage

```twig
{% include 'mud_egov:statistics' with {
  statistics_title: paragraph.field_label.value,
  statistics_link: content.field_cta_primary,
  statistics_items: content.field_paragraphs,
} only %}
```

## Accessibility

- The title is a real heading (`statistics_title_level`); pick the level that fits the page outline.
- The link comes from the link field and keeps its own accessible name and focus ring.
- Content order follows the source order in both layouts.
- No animation.
