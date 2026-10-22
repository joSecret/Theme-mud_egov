---
title: Numeric Input
group: Forms
version: 1.1.0
css_prefix: numeric-input
---

# Numeric Input

Numeric entry field with optional increment/decrement stepper controls. Aligned with the MUD Storybook numeric input.

Uses native `<input type="number">` for broad browser support and accessibility.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `numeric_input_label` | string\|null | null | Visible label text |
| `numeric_input_name` | string\|null | null | Form control name |
| `numeric_input_id` | string\|null | null | HTML id (auto-generated if omitted) |
| `numeric_input_value` | number\|null | null | Current value |
| `numeric_input_min` | number\|null | null | Inclusive lower bound |
| `numeric_input_max` | number\|null | null | Inclusive upper bound |
| `numeric_input_step` | number\|null | 1 | Stepper increment amount |
| `numeric_input_placeholder` | string\|null | null | Placeholder text |
| `numeric_input_helper_text` | string\|null | null | Hint shown below the field |
| `numeric_input_error_message` | string\|null | null | Error text (shown when `error` is true) |
| `numeric_input_size` | string\|null | null | `md` \| `lg` |
| `numeric_input_disabled` | boolean | false | Disables the field |
| `numeric_input_readonly` | boolean | false | Makes the field read-only |
| `numeric_input_required` | boolean | false | Marks as required |
| `numeric_input_error` | boolean | false | Activates error visual state |
| `numeric_input_show_steppers` | boolean | false | Shows increment/decrement buttons |
| `numeric_input_uc` | string[] | [] | Utility classes on the wrapper |
| `numeric_input_att` | Attribute\|null | null | HTML attributes on the wrapper |

## Usage

```twig
{% include 'mud_egov:numeric-input' with {
  numeric_input_label: 'Quantity',
  numeric_input_name: 'qty',
  numeric_input_id: 'qty',
  numeric_input_value: 1,
  numeric_input_min: 0,
  numeric_input_max: 100,
  numeric_input_show_steppers: true,
  numeric_input_required: true,
} only %}
```

```twig
{% include 'mud_egov:numeric-input' with {
  numeric_input_label: 'Amount (MDL)',
  numeric_input_name: 'amount',
  numeric_input_error: true,
  numeric_input_error_message: 'Please enter a valid amount.',
} only %}
```

## CSS variables

Defaults come from `--numeric-input-*` in `css/defaults/forms.css`. To override in a specific context, set a public variable (empty by default) on the wrapper or an ancestor:

| Variable | Controls |
|---|---|
| `--numeric-input_h`, `--numeric-input_lg_h` | Row height (md / lg) |
| `--numeric-input_p-i`, `--numeric-input_lg_p-i` | Inline padding |
| `--numeric-input_f-s`, `--numeric-input_lg_f-s` | Font size |
| `--numeric-input_bg` | Row background |
| `--numeric-input_b-c`, `--numeric-input_b-c_f` | Border color (normal / focus) |
| `--numeric-input_bs_f` | Focus halo (box-shadow) |
| `--numeric-input_error_b-c`, `--numeric-input_error_c` | Error border and message color |
| `--numeric-input_c`, `--numeric-input_label_c`, `--numeric-input_label_c_d` | Text, label and disabled label color |
| `--numeric-input_o_d` | Opacity when disabled |
| `--numeric-input_step_c`, `--numeric-input_step_c_h`, `--numeric-input_step_bg_h` | Stepper icon color and hover colors |

## Accessibility

- The label is bound to the field with `for`/`id`; the required asterisk is `aria-hidden` and the field gets `required` and `aria-required`.
- Helper and error text are linked with `aria-describedby`; the error state sets `aria-invalid="true"` and the message has `role="alert"`.
- Focus is shown on the row (`:focus-within`): thicker border plus the MUD halo, with a transparent outline that stays visible in forced-colors mode.
- Steppers are mouse-only helpers (`aria-hidden`, `tabindex="-1"`); keyboard and assistive technology users change the value with the native number input (arrow keys, typing).
