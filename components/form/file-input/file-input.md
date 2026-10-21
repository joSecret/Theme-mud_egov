# File Input

Drag-and-drop file upload field aligned with `mud-file-input`. Supports dropzone and button variants, drag-over state, file list display, and validation props.

## Usage

```twig
{% include 'mud_egov:file-input' with {
  file_input_label: 'Documente',
  file_input_name: 'files',
  file_input_accept: '.pdf,.docx',
  file_input_multiple: true,
  file_input_max_size_label: 'Mărime maximă: 10 MB',
  file_input_variant: 'dropzone',
} %}
```

Button variant:

```twig
{% include 'mud_egov:file-input' with {
  file_input_label: 'Fotografie',
  file_input_name: 'photo',
  file_input_accept: 'image/*',
  file_input_variant: 'button',
  file_input_browse_label: 'Alege fotografie',
} %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `file_input_label` | string\|null | null | Field label |
| `file_input_name` | string\|null | null | Input name |
| `file_input_id` | string\|null | null | Input id |
| `file_input_accept` | string\|null | null | MIME types or extensions |
| `file_input_drag_label` | string\|null | null | Drop zone body text |
| `file_input_browse_label` | string\|null | null | Browse link/button label |
| `file_input_max_size_label` | string\|null | null | Caption below zone |
| `file_input_helper_text` | string\|null | null | Helper text |
| `file_input_error_text` | string\|null | null | Error message |
| `file_input_variant` | string\|null | null | `dropzone` \| `button` |
| `file_input_size` | string\|null | null | `md` \| `lg` |
| `file_input_multiple` | boolean | false | Allow multiple files |
| `file_input_disabled` | boolean | false | Disable field |
| `file_input_required` | boolean | false | Mark as required |
| `file_input_invalid` | boolean | false | Error state |
| `file_input_uc` | array | [] | Additional CSS classes |
| `file_input_att` | Attribute | null | HTML attributes |
