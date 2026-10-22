---
title: File Input
group: Forms
version: 1.1.0
css_prefix: file-input
---

# File Input

Drag-and-drop file upload field aligned with the MUD design system. Supports dropzone and button variants, drag-over state, file list display, and validation props.

## Usage

```twig
{% include 'mud_egov:file-input' with {
  file_input_label: 'Documente',
  file_input_name: 'files',
  file_input_accept: '.pdf,.docx',
  file_input_multiple: true,
  file_input_max_size_label: 'Mărime maximă: 10 MB',
  file_input_variant: 'dropzone',
} only %}
```

Button variant:

```twig
{% include 'mud_egov:file-input' with {
  file_input_label: 'Fotografie',
  file_input_name: 'photo',
  file_input_accept: 'image/*',
  file_input_variant: 'button',
  file_input_browse_label: 'Alege fotografie',
} only %}
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

## CSS variables

Defaults are tokens (`--color-*`, `--spacing-*`, `--font-size-*`). The public variables below are empty by default and are set only for a specific context.

| Variable | Default | Description |
|----------|---------|-------------|
| `--file-input_b-c` | `--color-border-base-default` | Drop zone border color |
| `--file-input_bg` | `--color-background-base-secondary` | Drop zone background |
| `--file-input_b-c_h` | `--color-border-brand-default` | Border on hover, focus and drag-over |
| `--file-input_bg_h` | `--palette-blue-sky-100` | Background on hover, focus and drag-over |
| `--file-input_err_b-c` | `--color-border-danger-default` | Border when invalid |
| `--file-input_m-h` | `160px` | Drop zone minimum height |
| `--file-input_lg_m-h` | `200px` | Minimum height for the `lg` size |
| `--file-input_icon_c` | `--color-text-brand-default` | Upload icon color |

## JavaScript

`Drupal.behaviors.fileInput` (initialised once per element) opens the native picker from the drop zone, the browse link or the button, handles drag and drop, and renders the selected files into the list as `file-item` rows.

## Accessibility

- The drop zone has `role="button"`, `tabindex="0"` (`-1` when disabled), an `aria-label` and `aria-disabled`; Enter and Space open the file picker.
- The native input is kept for form submission and exposes `required` and `aria-invalid`; the selected-files list is an `aria-live="polite"` region.
- The error message uses `role="alert"`; hover, focus and drag-over share the same visible border and background change.
- The border transition stops under `prefers-reduced-motion: reduce`.
