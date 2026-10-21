# Select Input

Native select/dropdown input aligned with `mud-select-input`. Renders a styled native `<select>` with label, helper text, error state, placeholder, and optional multiple selection.

## Usage

```twig
{% include 'mud_egov:select-input' with {
  select_input_label: 'Country',
  select_input_name: 'country',
  select_input_id: 'country',
  select_input_placeholder: 'Choose a country…',
  select_input_required: true,
  select_input_options: [
    { value: 'md', label: 'Moldova' },
    { value: 'ro', label: 'Romania' },
    { value: 'ua', label: 'Ukraine', disabled: true },
  ],
} only %}
```

### With error state

```twig
{% include 'mud_egov:select-input' with {
  select_input_label: 'Region',
  select_input_name: 'region',
  select_input_error: true,
  select_input_error_message: 'Please select a region.',
  select_input_options: [
    { value: 'north', label: 'North' },
    { value: 'south', label: 'South' },
  ],
} only %}
```

### Multiple selection

```twig
{% include 'mud_egov:select-input' with {
  select_input_label: 'Languages',
  select_input_name: 'languages',
  select_input_multiple: true,
  select_input_options: [
    { value: 'ro', label: 'Romanian' },
    { value: 'en', label: 'English', selected: true },
    { value: 'ru', label: 'Russian' },
  ],
} only %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `select_input_label` | string\|null | null | Visible label text |
| `select_input_name` | string\|null | null | Form control name |
| `select_input_id` | string\|null | null | HTML id (falls back to name) |
| `select_input_options` | array | [] | Array of `{value, label, selected?, disabled?}` objects |
| `select_input_placeholder` | string\|null | null | Empty option shown when nothing is selected |
| `select_input_helper_text` | string\|null | null | Hint shown below the field |
| `select_input_error_message` | string\|null | null | Error text (shown when `select_input_error` is true) |
| `select_input_multiple` | boolean | false | Allows multiple selections |
| `select_input_disabled` | boolean | false | Disables the field |
| `select_input_required` | boolean | false | Marks the field as required |
| `select_input_error` | boolean | false | Activates error/destructive visual state |
| `select_input_size` | string\|null | null | md \| lg |
| `select_input_uc` | array | [] | Extra CSS classes on the wrapper |
| `select_input_att` | Attribute\|null | null | Extra HTML attributes on the wrapper |
