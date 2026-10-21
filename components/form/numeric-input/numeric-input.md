# Numeric Input

Numeric entry field with optional increment/decrement stepper controls. Aligned with the `mud-numeric-input` component from the MUD design system.

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
