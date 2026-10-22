---
title: Statistics Item
group: Content
version: 1.1.0
css_prefix: statistics-item
---

# Statistics Item

A single statistic: a large number, an optional badge next to it and a label below. With `statistics_item_is_digital` the number gets a blue-purple gradient and a star decoration.

## Props

| Prop                            | Type         | Default | Description                                         |
|---------------------------------|--------------|---------|-----------------------------------------------------|
| `statistics_item_number`        | string, null | `null`  | The value (for example `637`).                      |
| `statistics_item_label`         | string, null | `null`  | Descriptive text below the number.                  |
| `statistics_item_digital_badge` | string, null | `null`  | Short badge text next to the number.                |
| `statistics_item_is_digital`    | boolean      | `false` | Colored (gradient) variant with a star decoration.  |
| `statistics_item_uc`            | array        | `[]`    | Extra utility classes on the wrapper.               |
| `statistics_item_att`           | Attribute    | `null`  | HTML attributes on the wrapper.                     |

## Public CSS variables (level 3, empty by default)

| Variable                                                      | Default (level 2)                  |
|---------------------------------------------------------------|------------------------------------|
| `--statistics-item_gap`, `--statistics-item_row_gap`          | `--spacing-4`, `--spacing-10`      |
| `--statistics-item_number_f-s`, `_l-h`, `_f-w`                | 56px, 64px, semibold               |
| `--statistics-item_badge_p-b`, `_p-i`                         | `0.2em`, `0.6em`                   |
| `--statistics-item_badge_b-c`, `_b-r`, `_f-s`, `_c`           | default border, 4px, 12px, secondary text |
| `--statistics-item_label_f-s`, `_l-h`, `_c`                   | 18px, 28px, secondary text         |
| `--statistics-item_digital_bg-i`                              | blue-sky-600 to purple-500 gradient |

## Usage

```twig
{% include 'mud_egov:statistics-item' with {
  statistics_item_number: '637',
  statistics_item_label: 'Public services',
  statistics_item_digital_badge: '54.9% digitalized',
  statistics_item_is_digital: true,
} only %}
```

## Accessibility

- The number and the label are plain text, read in source order (number, badge, label).
- The star is decorative and hidden from assistive technology (`aria-hidden="true"`).
- The gradient text on white is large text and keeps at least 3:1 contrast along the whole gradient (blue-sky-600 to purple-500).
- No animation.
