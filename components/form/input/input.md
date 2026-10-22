---
title: Input
group: Forms
version: 1.1.0
css_prefix: input
---

# Input

Single-line text input aligned with the MUD Storybook input. Renders a native `<input>` with label, helper text, error state, and optional leading/trailing icons.

## Usage

```twig
{% include 'mud_egov:input' with {
  input_label: 'Email address',
  input_name: 'email',
  input_id: 'email',
  input_type: 'email',
  input_placeholder: 'you@example.com',
  input_required: true,
  input_helper_text: 'We will never share your email.',
} only %}
```

### With error state

```twig
{% include 'mud_egov:input' with {
  input_label: 'Username',
  input_name: 'username',
  input_id: 'username',
  input_error: true,
  input_error_message: 'Username is already taken.',
} only %}
```

### With prefix icon

```twig
{% include 'mud_egov:input' with {
  input_label: 'Search',
  input_name: 'q',
  input_type: 'search',
  input_prefix_icon: '<svg aria-hidden="true">...</svg>',
} only %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `input_label` | string\|null | null | Visible label text |
| `input_placeholder` | string\|null | null | Placeholder text |
| `input_value` | string\|null | null | Current value |
| `input_name` | string\|null | null | Form control name |
| `input_id` | string\|null | null | HTML id (falls back to name) |
| `input_helper_text` | string\|null | null | Hint shown below the field |
| `input_error_message` | string\|null | null | Error text (shown when `input_error` is true) |
| `input_prefix_icon` | string\|null | null | SVG string for leading icon |
| `input_suffix_icon` | string\|null | null | SVG string for trailing icon |
| `input_type` | string\|null | 'text' | text \| email \| password \| search \| tel \| url \| number |
| `input_size` | string\|null | null | md \| lg |
| `input_disabled` | boolean | false | Disables the field |
| `input_readonly` | boolean | false | Makes the field read-only |
| `input_required` | boolean | false | Marks the field as required |
| `input_error` | boolean | false | Activates error/destructive visual state |
| `input_uc` | array | [] | Extra CSS classes on the wrapper |
| `input_att` | Attribute\|null | null | Extra HTML attributes on the wrapper |

## CSS variables

Defaults come from `--input-*` in `css/defaults/forms.css`. To override in a specific context, set a public variable (empty by default) on the wrapper or an ancestor:

| Variable | Controls |
|---|---|
| `--input_h`, `--input_lg_h` | Field height (md / lg) |
| `--input_p-i`, `--input_lg_p-i` | Inline padding |
| `--input_f-s`, `--input_lg_f-s` | Font size |
| `--input_bg`, `--input_bg_d`, `--input_readonly_bg` | Background (normal / disabled / read-only) |
| `--input_b-c`, `--input_b-c_h`, `--input_b-c_f`, `--input_b-c_d` | Border color (normal / hover / focus / disabled) |
| `--input_error_b-c`, `--input_error_bs_f`, `--input_error_c` | Error border, focus ring and message color |
| `--input_c`, `--input_placeholder_c` | Text and placeholder color |
| `--input_label_c`, `--input_label_c_d` | Label color (normal / disabled) |

## Accessibility

- The label is bound to the field with `for`/`id`; the required asterisk is `aria-hidden` and the field gets `required` and `aria-required`.
- Helper and error text are linked with `aria-describedby`; the error state sets `aria-invalid="true"` and the message has `role="alert"`.
- Keyboard focus shows the MUD focus halo on `:focus-visible`; the outline stays transparent (visible in forced-colors mode).
- Prefix and suffix icons are decorative (`aria-hidden`); do not use them as the only carrier of meaning.
