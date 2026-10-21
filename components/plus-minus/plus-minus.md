# Plus Minus

Animated plus/minus icon. On hover (or when `plus_minus_open` is true), the container rotates 90° and the horizontal bar fades out, leaving only the vertical bar.

Designed for use in accordions, expandable sections, and toggles.

## Usage

```twig
{# Plus state (default) #}
{% include 'mud_egov:plus-minus' with {} %}

{# Minus state (open) #}
{% include 'mud_egov:plus-minus' with {
  plus_minus_open: true,
} %}

{# Custom size and color via CSS variables #}
<div style="--plus-minus_s: 24px; --plus-minus_c: var(--c-primary);">
  {% include 'mud_egov:plus-minus' with {} %}
</div>
```

## Props

| Prop              | Type      | Default | Description                              |
|-------------------|-----------|---------|------------------------------------------|
| `plus_minus_open` | boolean   | `false` | Shows minus state when `true`.           |
| `plus_minus_uc`   | array     | `[]`    | Extra utility classes on the wrapper.    |
| `plus_minus_att`  | Attribute | `null`  | HTML attributes on the wrapper element.  |

## CSS Variables

| Variable           | Default        | Description             |
|--------------------|----------------|-------------------------|
| `--plus-minus_s`   | `50px`         | Icon size (width/height) |
| `--plus-minus_c`   | `currentColor` | Bar color               |
| `--plus-minus_bw`  | `2px`          | Bar thickness           |
| `--plus-minus_tt`  | `0.2s`         | Transition duration     |
