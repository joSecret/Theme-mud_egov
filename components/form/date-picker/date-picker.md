# Date Picker

Calendar-based date picker aligned with `mud-date-picker`. Renders a text input that opens a calendar popup on click/focus. Supports single, range, and multi-select modes; locale-aware weekday and month labels via `Intl.DateTimeFormat`.

## Usage

```twig
{% include 'mud_egov:date-picker' with {
  date_picker_label: 'Data nașterii',
  date_picker_name: 'birthdate',
  date_picker_value: '1990-05-15',
  date_picker_min: '1920-01-01',
  date_picker_max: '2010-12-31',
  date_picker_locale: 'ro-RO',
} %}
```

Inline calendar:

```twig
{% include 'mud_egov:date-picker' with {
  date_picker_label: 'Selectează data',
  date_picker_inline: true,
} %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `date_picker_label` | string\|null | null | Field label |
| `date_picker_name` | string\|null | null | Input name |
| `date_picker_id` | string\|null | null | Input id |
| `date_picker_value` | string\|null | null | ISO YYYY-MM-DD value |
| `date_picker_min` | string\|null | null | Minimum date (ISO) |
| `date_picker_max` | string\|null | null | Maximum date (ISO) |
| `date_picker_placeholder` | string\|null | null | Input placeholder |
| `date_picker_helper_text` | string\|null | null | Helper text |
| `date_picker_error_message` | string\|null | null | Error message |
| `date_picker_locale` | string\|null | null | BCP-47 locale (default: ro-RO) |
| `date_picker_mode` | string\|null | null | `single` \| `range` \| `multi` |
| `date_picker_size` | string\|null | null | `sm` \| `md` \| `lg` |
| `date_picker_disabled` | boolean | false | Disable field |
| `date_picker_required` | boolean | false | Mark as required |
| `date_picker_error` | boolean | false | Error state |
| `date_picker_inline` | boolean | false | Show calendar inline |
| `date_picker_uc` | array | [] | Additional CSS classes |
| `date_picker_att` | Attribute | null | HTML attributes |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `date-picker:change` | `{ value }` | Emitted when a date is selected |
