---
title: Tooltip
group: Globals
version: 1.1.0
css_prefix: tooltip
---

# Tooltip

Accessible tooltip that appears on hover/focus (or click). Renders an inline trigger wrapper with a visually hidden `role="tooltip"` bubble. The trigger element is linked to the bubble via `aria-describedby`. JavaScript manages show/hide with configurable delays, keyboard dismissal (Esc), and outside-click handling.

## Usage

Simple tooltip with default info-icon trigger:

```twig
{% include 'mud_egov:tooltip' with {
  tooltip_text: 'This field is required.',
  tooltip_position: 'top',
} only %}
```

Custom trigger element:

```twig
{% include 'mud_egov:tooltip' with {
  tooltip_text: 'Download the document',
  tooltip_trigger: '<button type="button" aria-label="Download">⬇</button>',
  tooltip_position: 'bottom',
  tooltip_size: 'lg',
} only %}
```

Click-triggered tooltip:

```twig
{% include 'mud_egov:tooltip' with {
  tooltip_text: 'More information about this option.',
  tooltip_trigger_event: 'click',
  tooltip_position: 'right',
} only %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `tooltip_text` | `string` | `''` | Tooltip bubble content (plain text). |
| `tooltip_trigger` | `string\|null` | `null` | HTML for the trigger element. Defaults to an info icon button when null. |
| `tooltip_id` | `string\|null` | auto | ID linking `aria-describedby` to the bubble. Auto-generated when null. |
| `tooltip_position` | `string\|null` | `'top'` | Preferred placement: `top`, `bottom`, `left`, `right`, `top-left`, `top-right`, `bottom-left`, `bottom-right`. |
| `tooltip_size` | `string\|null` | `'sm'` | Size rung: `sm` (compact) or `lg` (spacious). |
| `tooltip_trigger_event` | `string\|null` | `'hover'` | Activation mode: `hover`, `click`, or `focus`. |
| `tooltip_uc` | `string[]` | `[]` | Extra utility classes on the root wrapper. |
| `tooltip_att` | `Attribute` | `null` | Additional HTML attributes on the root wrapper. |

## CSS Variables

Public overrides are empty by default; set them in a specific context. Defaults come from the `--tooltip-*` variables in `css/defaults/feedback.css`.

| Variable | Default | Description |
|---|---|---|
| `--tooltip_bg` | `--tooltip-container-background-default` | Bubble background. |
| `--tooltip_c` | `--color-text-base-inverse-default` | Bubble text color. |
| `--tooltip_b-r` | `--tooltip-container-border-radius-sm` | Bubble border radius. |
| `--tooltip_p-b` | `--tooltip-container-padding-block-sm` | Bubble block padding. |
| `--tooltip_p-i` | `--tooltip-container-padding-inline-sm` | Bubble inline padding. |
| `--tooltip_mx-w` | `--tooltip-container-max-width` | Bubble maximum width. |
| `--tooltip_z` | `--tooltip-container-z-index` | z-index of the bubble. |
| `--tooltip_bs` | `--tooltip-container-shadow` | Bubble box-shadow. |
| `--tooltip_gap` | `--spacing-8` | Gap between trigger and bubble. |
| `--tooltip_arrow_size` | `--tooltip-arrow-size-sm` | Arrow triangle size. |
| `--tooltip_f-s`, `--tooltip_f-w`, `--tooltip_l-h` | `--tooltip-hint-*` | Text typography. |

Size `lg`: `--tooltip_lg_b-r`, `--tooltip_lg_p-b`, `--tooltip_lg_p-i`, `--tooltip_arrow_lg_size`.

## Accessibility

- The bubble has `role="tooltip"` and the trigger points to it with `aria-describedby`; `aria-hidden` follows the visible state.
- It opens on hover and on keyboard focus (`hover` mode), on click (`click` mode) or on focus only (`focus` mode); Escape always closes it.
- The default trigger is a real `<button>` with an accessible name taken from the tooltip text.
- The fade transition is off under `prefers-reduced-motion: reduce`.
