# Tooltip

Accessible tooltip that appears on hover/focus (or click). Renders an inline trigger wrapper with a visually hidden `role="tooltip"` bubble. The trigger element is linked to the bubble via `aria-describedby`. JavaScript manages show/hide with configurable delays, keyboard dismissal (Esc), and outside-click handling.

## Usage

Simple tooltip with default info-icon trigger:

```twig
{% include 'egov:tooltip' with {
  tooltip_text: 'This field is required.',
  tooltip_position: 'top',
} %}
```

Custom trigger element:

```twig
{% include 'egov:tooltip' with {
  tooltip_text: 'Download the document',
  tooltip_trigger: '<button type="button" aria-label="Download">⬇</button>',
  tooltip_position: 'bottom',
  tooltip_size: 'lg',
} %}
```

Click-triggered tooltip:

```twig
{% include 'egov:tooltip' with {
  tooltip_text: 'More information about this option.',
  tooltip_trigger_event: 'click',
  tooltip_position: 'right',
} %}
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

## CSS custom properties

| Property | Description |
|---|---|
| `--tooltip_bg` | Bubble background colour. |
| `--tooltip_c` | Bubble text colour. |
| `--tooltip_border_r` | Bubble border radius. |
| `--tooltip_p_b` | Bubble block (top/bottom) padding. |
| `--tooltip_p_i` | Bubble inline (left/right) padding. |
| `--tooltip_max_w` | Bubble maximum width. |
| `--tooltip_z` | z-index of the bubble. |
| `--tooltip_shadow` | Bubble box-shadow. |
| `--tooltip_offset` | Gap between trigger and bubble. |
| `--tooltip_arrow_size` | Arrow triangle size. |
