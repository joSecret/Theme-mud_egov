---
title: Date Input
group: Forms
version: 1.1.0
css_prefix: date-input
---

# Date Input

Date entry field using a native `<input type="date">` (or `datetime-local`, `month`, `week`). Aligned with the MUD Storybook date input.

No JavaScript — the browser's native date picker is used.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `date_input_label` | string\|null | null | Visible label text |
| `date_input_name` | string\|null | null | Form control name |
| `date_input_id` | string\|null | null | HTML id (auto-generated if omitted) |
| `date_input_value` | string\|null | null | Current value |
| `date_input_min` | string\|null | null | Inclusive lower bound |
| `date_input_max` | string\|null | null | Inclusive upper bound |
| `date_input_helper_text` | string\|null | null | Hint shown below the field |
| `date_input_error_message` | string\|null | null | Error text (shown when `error` is true) |
| `date_input_type` | string | `date` | `date` \| `datetime-local` \| `month` \| `week` |
| `date_input_size` | string\|null | null | `md` \| `lg` |
| `date_input_disabled` | boolean | false | Disables the field |
| `date_input_required` | boolean | false | Marks as required |
| `date_input_readonly` | boolean | false | Makes the field read-only |
| `date_input_error` | boolean | false | Activates error visual state |
| `date_input_uc` | string[] | [] | Utility classes on the wrapper |
| `date_input_att` | Attribute\|null | null | HTML attributes on the wrapper |

## Usage

```twig
{% include 'mud_egov:date-input' with {
  date_input_label: 'Date of birth',
  date_input_name: 'dob',
  date_input_id: 'dob',
  date_input_type: 'date',
  date_input_max: '2008-01-01',
  date_input_required: true,
} only %}
```

```twig
{% include 'mud_egov:date-input' with {
  date_input_label: 'Appointment',
  date_input_name: 'appointment',
  date_input_type: 'datetime-local',
  date_input_error: true,
  date_input_error_message: 'Please select a valid date and time.',
} only %}
```

## CSS variables

Defaults come from `--date-input-*` in `css/defaults/forms.css`. To override in a specific context, set a public variable (empty by default) on the wrapper or an ancestor:

| Variable | Controls |
|---|---|
| `--date-input_h`, `--date-input_lg_h` | Row height (md / lg) |
| `--date-input_p-i`, `--date-input_lg_p-i` | Inline padding |
| `--date-input_f-s`, `--date-input_lg_f-s` | Font size |
| `--date-input_bg` | Row background |
| `--date-input_b-c`, `--date-input_b-c_f` | Border color (normal / focus) |
| `--date-input_bs_f` | Focus halo (box-shadow) |
| `--date-input_error_b-c`, `--date-input_error_c` | Error border and message color |
| `--date-input_c`, `--date-input_label_c`, `--date-input_label_c_d` | Text, label and disabled label color |
| `--date-input_o_d` | Opacity when disabled |
| `--date-input_caret_c`, `--date-input_picker_o`, `--date-input_picker_o_h` | Caret color and calendar button opacity (normal / hover) |

## Accessibility

- The label is bound to the field with `for`/`id`; the required asterisk is `aria-hidden` and the field gets `required` and `aria-required`.
- Helper and error text are linked with `aria-describedby`; the error state sets `aria-invalid="true"` and the message has `role="alert"`.
- Focus is shown on the row (`:focus-within`): thicker border plus the MUD halo, with a transparent outline that stays visible in forced-colors mode.
- The native date control is keyboard operable and announced with its type by screen readers; the calendar button opacity is only visual (WebKit).
