---
title: Accordion Item
group: Content
version: 1.1.0
css_prefix: accordion-item
---

# Accordion Item

A single accordion entry built on native `<details>`/`<summary>`: optional icon, title (`<h3>`), optional description and a plus/minus trigger (`plus-minus` component). The body content is shown when the item is open. Meant to be placed inside `accordion`.

## Props

| Prop                         | Type             | Default | Description                                                                                 |
|------------------------------|------------------|---------|---------------------------------------------------------------------------------------------|
| `accordion_item_title`       | string           | `''`    | Summary (trigger) text.                                                                     |
| `accordion_item_icon`        | object, string, null | `''` | Pre-rendered icon/illustration shown before the title.                                      |
| `accordion_item_description` | string           | `''`    | Short description under the title.                                                          |
| `accordion_item_content`     | string           | `''`    | Pre-rendered body, shown when open.                                                         |
| `accordion_item_name`        | string, null     | `null`  | `name` of the `<details>`; items with the same name are exclusive.                          |
| `accordion_item_open`        | boolean          | `false` | Open by default.                                                                            |
| `accordion_item_uc`          | array            | `[]`    | Extra utility classes on the `<details>`.                                                   |
| `accordion_item_att`         | Attribute        | `null`  | HTML attributes on the `<details>`.                                                         |

## Public CSS variables (level 3, empty by default)

Default values come from `css/defaults/content.css` (`--accordion-item-*`).

| Variable                              | Description                                        |
|---------------------------------------|----------------------------------------------------|
| `--accordion-item_bg`, `_bg_h`        | Summary background, normal / hover                 |
| `--accordion-item_b-c`, `_b-w`        | Separator color and width                          |
| `--accordion-item_trn`                | Transition (duration and timing function)          |
| `--accordion-item_gap`                | Gap between icon, text and trigger                 |
| `--accordion-item_p-b`, `_p-i`, `_p-i_h` | Summary padding (block, inline, inline on hover) |
| `--accordion-item_c`, `_c_a`          | Text color, normal / open                          |
| `--accordion-item_title_c`, `_title_c_a` | Title color, normal / open (also trigger color when open) |
| `--accordion-item_description_c`, `_f-s`, `_l-h`, `_f-w` | Description text           |
| `--accordion-item_body_gap`, `_body_p-i` | Gap between title and description, body inline padding |
| `--accordion-item_trigger_size`       | Plus/minus trigger size                            |
| `--accordion-item_icon_size`          | Icon width                                         |
| `--accordion-item_panel_p-b`, `_panel_p-i` | Content padding                               |
| `--accordion-item_sm_p-b`, `_trigger_sm_size`, `_title_sm_f-s`, `_title_sm_l-h` | `is-small` variant (set by `accordion_size: small`) |

## Usage

```twig
{% include 'mud_egov:accordion-item' with {
  accordion_item_title: 'How do I apply?',
  accordion_item_description: 'Short answer',
  accordion_item_content: '<p>Full answer.</p>',
  accordion_item_name: 'faq',
  accordion_item_open: false,
} only %}
```

## Accessibility

- Native `<details>`/`<summary>`: keyboard (Enter/Space) and screen reader support come from the browser; no ARIA state needs to be synchronised.
- The title is an `<h3>` inside the `<summary>`; keep heading order coherent with the surrounding page.
- The plus/minus trigger is decorative and not exposed separately; the summary text is the accessible name.
- Open and hover states do not rely on color alone (the trigger changes shape); text colors use design tokens with at least 4.5:1 contrast.
- Background and padding transitions are disabled under `prefers-reduced-motion: reduce`.
