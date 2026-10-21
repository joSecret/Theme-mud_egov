# Checkbox

Boolean checkbox input aligned with `mud-checkbox`. Renders a native `<input type="checkbox">` with label, error state, indeterminate visual, and two sizes (sm/md).

## Usage

```twig
{% include 'mud_egov:checkbox' with {
  checkbox_label: 'I agree to the terms',
  checkbox_name: 'terms',
  checkbox_id: 'terms',
  checkbox_required: true,
} only %}
```

### With error state

```twig
{% include 'mud_egov:checkbox' with {
  checkbox_label: 'Accept conditions',
  checkbox_name: 'accept',
  checkbox_error: true,
} only %}
```

### Indeterminate (visual only)

```twig
{% include 'mud_egov:checkbox' with {
  checkbox_label: 'Select all',
  checkbox_name: 'select_all',
  checkbox_indeterminate: true,
} only %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `checkbox_label` | string\|null | null | Visible label text |
| `checkbox_name` | string\|null | null | Form control name |
| `checkbox_value` | string\|null | null | Submitted value when checked (defaults to "on") |
| `checkbox_id` | string\|null | null | HTML id (falls back to name) |
| `checkbox_checked` | boolean | false | Whether the checkbox is checked |
| `checkbox_disabled` | boolean | false | Disables the checkbox |
| `checkbox_required` | boolean | false | Marks the field as required |
| `checkbox_indeterminate` | boolean | false | Visual-only indeterminate (dash glyph) |
| `checkbox_error` | boolean | false | Activates error/destructive visual state |
| `checkbox_size` | string\|null | null | sm \| md |
| `checkbox_uc` | array | [] | Extra CSS classes on the wrapper |
| `checkbox_att` | Attribute\|null | null | Extra HTML attributes on the wrapper |
