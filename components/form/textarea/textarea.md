# Textarea

Multi-line text input aligned with `mud-textarea`. Renders a native `<textarea>` with label, helper text, error state, configurable rows, and resize control.

## Usage

```twig
{% include 'mud_egov:textarea' with {
  textarea_label: 'Description',
  textarea_name: 'description',
  textarea_id: 'description',
  textarea_placeholder: 'Write something…',
  textarea_rows: 6,
  textarea_helper_text: 'Maximum 500 characters.',
} only %}
```

### With error state

```twig
{% include 'mud_egov:textarea' with {
  textarea_label: 'Comments',
  textarea_name: 'comments',
  textarea_error: true,
  textarea_error_message: 'This field is required.',
} only %}
```

### No resize

```twig
{% include 'mud_egov:textarea' with {
  textarea_label: 'Notes',
  textarea_name: 'notes',
  textarea_resize: 'none',
} only %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `textarea_label` | string\|null | null | Visible label text |
| `textarea_name` | string\|null | null | Form control name |
| `textarea_id` | string\|null | null | HTML id (falls back to name) |
| `textarea_placeholder` | string\|null | null | Placeholder text |
| `textarea_value` | string\|null | null | Initial content |
| `textarea_rows` | integer\|null | 4 | Minimum visible rows |
| `textarea_helper_text` | string\|null | null | Hint shown below the field |
| `textarea_error_message` | string\|null | null | Error text (shown when `textarea_error` is true) |
| `textarea_disabled` | boolean | false | Disables the field |
| `textarea_readonly` | boolean | false | Makes the field read-only |
| `textarea_required` | boolean | false | Marks the field as required |
| `textarea_error` | boolean | false | Activates error/destructive visual state |
| `textarea_size` | string\|null | null | md \| lg |
| `textarea_resize` | string\|null | null | vertical \| none \| horizontal \| both |
| `textarea_uc` | array | [] | Extra CSS classes on the wrapper |
| `textarea_att` | Attribute\|null | null | Extra HTML attributes on the wrapper |
