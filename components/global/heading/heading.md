---
title: Heading
group: Globals
version: 1.1.0
css_prefix: heading
---

# Heading

Semantic heading element (`h1`–`h6`) with optional visual level override.

## Usage

```twig
{# Simple h2 #}
{% include 'mud_egov:heading' with {
  heading_level: 2,
  heading_text: 'Page title',
} %}

{# h1 rendered visually as h3 #}
{% include 'mud_egov:heading' with {
  heading_level: 1,
  heading_display: 3,
  heading_text: 'Section title',
} %}

{# With rich content via slot #}
{% embed 'mud_egov:heading' with { heading_level: 2 } %}
  {% block slot_content %}
    Title with <strong>emphasis</strong>
  {% endblock %}
{% endembed %}
```

## Props

| Prop              | Type           | Default | Description                                      |
|-------------------|----------------|---------|--------------------------------------------------|
| `heading_level`   | integer (1–6)  | `2`     | Semantic HTML tag (`h1`–`h6`).                  |
| `heading_display` | integer\|null  | `null`  | Visual size override, independent of level.      |
| `heading_text`    | string\|null   | `null`  | Text content. Use `slot_content` for markup.     |
| `heading_uc`      | array          | `[]`    | Extra utility CSS classes.                       |
| `heading_att`     | Attribute      | `null`  | Extra HTML attributes.                           |

## CSS Variables

Public overrides, empty by default. The display sizes link to the theme variables `--h1_font-size` … `--h6_font-size` (`css/theme/vars.css`).

| Variable            | Default                        | Description              |
|---------------------|--------------------------------|--------------------------|
| `--heading_c`       | `--color-text-base-default`    | Text color override.     |
| `--heading_d1_f-s`  | `--h1_font-size`               | Display-1 font size.     |
| `--heading_d2_f-s`  | `--h2_font-size`               | Display-2 font size.     |
| `--heading_d3_f-s`  | `--h3_font-size`               | Display-3 font size.     |
| `--heading_d4_f-s`  | `--h4_font-size`               | Display-4 font size.     |
| `--heading_d5_f-s`  | `--h5_font-size`               | Display-5 font size.     |
| `--heading_d6_f-s`  | `--h6_font-size`               | Display-6 font size.     |

## Accessibility

- `heading_level` sets the real `h1`–`h6` tag, so the document outline stays correct; use `heading_display` only to change the look, never to skip levels.
- Keep one `h1` per page and do not jump more than one level down.
- The default text color (`--color-text-base-default`) meets 4.5:1 on light backgrounds; check it if you override `--heading_c`.
