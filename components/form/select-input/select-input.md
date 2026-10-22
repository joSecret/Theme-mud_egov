---
title: Select Input
group: Forms
version: 1.1.0
css_prefix: select-input
---

# Select Input

Native select/dropdown input aligned with the MUD Storybook select input. Renders a styled native `<select>` with label, helper text, error state, placeholder, and optional multiple selection.

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

## CSS variables

Defaults come from `--select-input-*` in `css/defaults/forms.css`. To override in a specific context, set a public variable (empty by default) on the wrapper or an ancestor:

| Variable | Controls |
|---|---|
| `--select-input_h`, `--select-input_lg_h` | Field height (md / lg) |
| `--select-input_p-i`, `--select-input_lg_p-i` | Inline start padding |
| `--select-input_f-s`, `--select-input_lg_f-s` | Font size |
| `--select-input_bg`, `--select-input_bg_d` | Background (normal / disabled) |
| `--select-input_b-c`, `--select-input_b-c_h`, `--select-input_b-c_f`, `--select-input_b-c_d` | Border color (normal / hover / focus / disabled) |
| `--select-input_error_b-c`, `--select-input_error_bs_f`, `--select-input_error_c` | Error border, focus ring and message color |
| `--select-input_chevron_c`, `--select-input_chevron_c_d` | Chevron color (normal / disabled) |
| `--select-input_label_c`, `--select-input_label_c_d` | Label color (normal / disabled) |

## Accessibility

- The control is a native `<select>`: keyboard, screen reader and mobile pickers work without extra scripting. The chevron is decorative (`aria-hidden`).
- The label is bound with `for`/`id`; the required asterisk is `aria-hidden` and the field gets `required` and `aria-required`.
- Helper and error text are linked with `aria-describedby`; the error state sets `aria-invalid="true"` and the message has `role="alert"`.
- Keyboard focus shows the MUD focus halo on `:focus-visible`; the outline stays transparent (visible in forced-colors mode).
