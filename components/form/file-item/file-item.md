---
title: File Item
group: Forms
version: 1.1.0
css_prefix: file-item
---

# File Item

Single uploaded file row aligned with the MUD design system. Displays filename, file size or error message, state icon, and an optional remove button. Used inside `file-input` or any file list.

## Usage

```twig
{% include 'mud_egov:file-item' with {
  file_item_name: 'document.pdf',
  file_item_size: '2.4 MB',
  file_item_status: 'uploaded',
  file_item_removable: true,
} %}
```

Progress state:

```twig
{% include 'mud_egov:file-item' with {
  file_item_name: 'photo.jpg',
  file_item_status: 'uploading',
  file_item_progress: 65,
} %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `file_item_name` | string\|null | null | Visible filename |
| `file_item_size` | string\|null | null | Human-readable file size (e.g. "2.4 MB") |
| `file_item_type` | string\|null | null | MIME type or extension hint |
| `file_item_error_message` | string\|null | null | Error message (replaces size when status=error) |
| `file_item_status` | string\|null | 'uploaded' | `uploaded` \| `uploading` \| `success` \| `error` |
| `file_item_progress` | number\|null | null | Upload progress 0–100 (shown when uploading) |
| `file_item_removable` | boolean | true | Show remove button |
| `file_item_disabled` | boolean | false | Disable remove button |
| `file_item_uc` | array | [] | Additional CSS classes |
| `file_item_att` | Attribute | null | HTML attributes |

## CSS variables

Defaults are tokens (`--color-*`, `--spacing-*`, `--border-radius-*`). The public variables below are empty by default and are set only for a specific context.

| Variable | Default | Description |
|----------|---------|-------------|
| `--file-item_bg` | `--color-background-base-secondary` | Row background |
| `--file-item_b-c` | `--color-border-base-default` | Row border color |
| `--file-item_b-r` | `--border-radius-8` | Row radius |
| `--file-item_err_b-c` | `--color-border-danger-default` | Error state border |
| `--file-item_err_bg` | `--palette-red-50` | Error state background |
| `--file-item_success_b-c` | `--palette-green-300` | Success state border |
| `--file-item_progress_fill_bg` | `--color-background-brand-default` | Progress bar fill |
| `--file-item_remove_c` | `--color-text-base-secondary` | Remove button color |

## Accessibility

- The remove button is a native `<button>` with `aria-label="Elimină fișierul <name>"`; when disabled it is `disabled` and `aria-disabled`.
- The progress bar has `role="progressbar"` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax`.
- Status icons (success, error) have an `aria-label`; decorative file icons are `aria-hidden`.
- The fill animation stops under `prefers-reduced-motion: reduce`.
