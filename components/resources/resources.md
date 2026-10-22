---
title: Resources
group: Content
version: 1.1.0
css_prefix: resources
---

# Resources

Section with an optional eyebrow label, a heading and a list of items (usually `card-icon` paragraphs). On wide containers (above 528px) the intro and the list are two columns.

## Props and slots

| Name                    | Kind | Type         | Default | Description                                  |
|-------------------------|------|--------------|---------|----------------------------------------------|
| `resources_label`       | prop | string, null | `null`  | Eyebrow text above the heading.              |
| `resources_title`       | prop | string, null | `null`  | Heading text.                                |
| `resources_title_level` | prop | integer 1-6  | `2`     | Heading level.                               |
| `resources_uc`          | prop | array        | `[]`    | Extra utility classes on the wrapper.        |
| `resources_att`         | prop | Attribute    | `null`  | HTML attributes on the wrapper.              |
| `resources_items`       | slot | render       |         | Rendered `card-icon` paragraphs.             |

## Public CSS variables (level 3, empty by default)

| Variable                                                   | Default (level 2)                         |
|------------------------------------------------------------|-------------------------------------------|
| `--resources_gap`                                          | `--spacing-48`                            |
| `--resources_p-b`, `--resources_p-i`                       | `--spacing-64`, `0px`                     |
| `--resources_label_c`, `_f-s`, `_f-w`, `_m-b`              | secondary text, 16px, semibold, `--spacing-16` |
| `--resources_heading_mx-w`                                 | `560px`                                   |
| `--resources_items_gap`                                    | `--spacing-24`                            |

## Usage

```twig
{% include 'mud_egov:resources' with {
  resources_label: paragraph.field_label.value,
  resources_title: paragraph.field_title.value,
  resources_items: content.field_paragraphs,
} only %}
```

## Accessibility

- The title is a real heading (`resources_title_level`); the eyebrow label is a plain paragraph and is not a heading.
- Items keep the source order, so the reading order matches the visual order in both layouts.
- Label color uses a token with at least 4.5:1 contrast on white.
- No animation.
