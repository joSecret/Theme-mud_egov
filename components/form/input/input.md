# Input

Single-line text input aligned with `mud-input`. Renders a native `<input>` with label, helper text, error state, and optional leading/trailing icons.

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
