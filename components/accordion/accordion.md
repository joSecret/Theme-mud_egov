---
title: Accordion
group: Content
version: 1.1.0
css_prefix: accordion
---

# Accordion

Wrapper for a group of `accordion-item` elements. Each item is a native `<details>`/`<summary>`; the wrapper adds the shared look (optional outer border, size modifier) and animates the content height.

## Props

| Prop                      | Type             | Default      | Description                                                              |
|---------------------------|------------------|--------------|--------------------------------------------------------------------------|
| `accordion_id`            | integer, string  | `0`          | `id` of the wrapper (omitted when falsy).                                |
| `accordion_content`       | string           | `''`         | Pre-rendered `accordion-item` elements. Nothing renders when empty.      |
| `accordion_appearance`    | `single`, `multiple` | `multiple` | Declared for the item group behaviour; no visual effect yet.            |
| `accordion_mode`          | boolean          | `false`      | Stay open; no visual effect yet.                                         |
| `accordion_open_item_id`  | integer          | `0`          | Item opened by default; no visual effect yet.                            |
| `accordion_icon_position` | `none`, `left`, `right` | `left` | Icon position; no visual effect yet.                                    |
| `accordion_flush`         | boolean          | `false`      | Adds `is-bordered`: outer border around the accordion.                   |
| `accordion_size`          | `''`, `small`, `large` | `''`   | Adds `is-small` / `is-large` (only `is-small` has styles).               |
| `accordion_uc`            | array            | `[]`         | Extra utility classes on the wrapper.                                    |
| `accordion_att`           | Attribute        | `null`       | HTML attributes on the wrapper.                                          |

## Public CSS variables (level 3, empty by default)

| Variable             | Default (level 2)                              | Description                  |
|----------------------|------------------------------------------------|------------------------------|
| `--accordion_bg`     | `transparent`                                  | Background of the `<details>` |
| `--accordion_b-r`    | `0px`                                          | Radius of the outer border   |
| `--accordion_b-c`    | `--accordion-item-border-color-default`        | Outer border color           |
| `--accordion_b-w`    | `--accordion-item-border-width`                | Outer border width           |
| `--accordion_trn`    | `--accordion-item-transition-duration`         | Content height transition    |

The look of each item is controlled by the variables listed in `accordion-item.md`.

## Usage

```twig
{% set items %}
  {% include 'mud_egov:accordion-item' with {
    accordion_item_title: 'Item 1',
    accordion_item_content: '<p>Content 1</p>',
    accordion_item_name: 'faq',
  } only %}
  {% include 'mud_egov:accordion-item' with {
    accordion_item_title: 'Item 2',
    accordion_item_content: '<p>Content 2</p>',
    accordion_item_name: 'faq',
  } only %}
{% endset %}

{% include 'mud_egov:accordion' with {
  accordion_id: 'faq-accordion',
  accordion_flush: true,
  accordion_size: 'small',
  accordion_content: items,
} only %}
```

In Drupal the paragraph templates `paragraph--accrordion.html.twig` and `paragraph--accrordion-item.html.twig` do this wiring.

## Accessibility

- Built on native `<details>`/`<summary>`: Enter and Space toggle an item from the keyboard and the open state is exposed to assistive technology without extra ARIA.
- Items sharing the same `accordion_item_name` behave as an exclusive group (only one open), handled by the browser.
- The content height transition is disabled under `prefers-reduced-motion: reduce`.
- Keep the item titles meaningful: the title is the only text of the `<summary>` trigger.
