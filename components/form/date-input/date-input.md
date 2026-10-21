# Date Input

Date entry field using a native `<input type="date">` (or `datetime-local`, `month`, `week`). Aligned with `mud-date-input` from the MUD design system.

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
