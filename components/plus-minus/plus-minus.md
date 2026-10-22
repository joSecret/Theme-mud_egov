---
title: Plus Minus
group: Content
version: 1.1.0
css_prefix: plus-minus
---

# Plus Minus

Animated plus/minus icon. On hover (or when it sits inside an open `<details>`), the container rotates 90° and the horizontal bar fades out, leaving only the vertical bar (the "minus" state).

Used in accordions and expandable sections (`accordion-item` includes it inside `<summary>`).

## Props

| Prop              | Type      | Default | Description                                          |
|-------------------|-----------|---------|------------------------------------------------------|
| `plus_minus_open` | boolean   | `false` | Adds the `plus-minus--open` class on the wrapper.    |
| `plus_minus_uc`   | array     | `[]`    | Extra utility classes on the wrapper.                |
| `plus_minus_att`  | Attribute | `null`  | HTML attributes on the wrapper.                      |

The minus state comes from CSS (`:hover` or an `[open]` ancestor); the `plus-minus--open` class has no rules of its own yet.

## Public CSS variables (level 3, empty by default)

| Variable                 | Default         | Description                                      |
|--------------------------|-----------------|--------------------------------------------------|
| `--plus-minus_size`      | `50px`          | Width and height of the icon                     |
| `--plus-minus_c`         | `currentcolor`  | Bar color                                        |
| `--plus-minus_bar_h`     | `2px`           | Bar thickness                                    |
| `--plus-minus_bar_w`     | `12px`          | Bar length                                       |
| `--plus-minus_trn`       | `0.2s`          | Transition duration                              |
| `--plus-minus_tr`        | `rotate(0deg)`  | Transform at rest                                |
| `--plus-minus_tr_h`      | `rotate(90deg)` | Transform on hover / inside `[open]`             |
| `--plus-minus_horiz_o`   | `1`             | Opacity of the horizontal bar at rest            |
| `--plus-minus_horiz_o_h` | `0`             | Opacity of the horizontal bar on hover / `[open]`|

## Usage

```twig
{% include 'mud_egov:plus-minus' with {} %}

<div style="--plus-minus_size: 24px; --plus-minus_c: var(--color-text-brand-default);">
  {% include 'mud_egov:plus-minus' with {} %}
</div>
```

## Accessibility

- Decorative icon with no text alternative: the parent element (for example `<summary>`) must have an accessible name.
- Inside `<summary>` the icon has `pointer-events: none`, so interaction and focus stay on the natively keyboard-accessible `<summary>`.
- The open/closed state is conveyed by `<details>`, not by the icon; the bars use `currentcolor`, so they follow the contrast of the surrounding text.
- The rotation and opacity transitions are disabled under `prefers-reduced-motion: reduce`.
