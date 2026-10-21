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

## CSS Custom Properties

| Property            | Default                        | Description              |
|---------------------|--------------------------------|--------------------------|
| `--heading_c`       | `--color-text-base-default`    | Text color override.     |
| `--heading_d1_f-s`  | `--h1_font-size` (40px)        | Display-1 font size.     |
| `--heading_d2_f-s`  | `--h2_font-size` (32px)        | Display-2 font size.     |
| `--heading_d3_f-s`  | `--h3_font-size` (24px)        | Display-3 font size.     |
| `--heading_d4_f-s`  | `--h4_font-size` (20px)        | Display-4 font size.     |
| `--heading_d5_f-s`  | `--h5_font-size` (18px)        | Display-5 font size.     |
| `--heading_d6_f-s`  | `--h6_font-size` (16px)        | Display-6 font size.     |
