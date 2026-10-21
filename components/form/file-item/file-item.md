# File Item

Single uploaded file row aligned with `mud-file-item`. Displays filename, file size or error message, state icon, and an optional remove button. Used inside `file-input` or any file list.

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

| Variable | Default | Description |
|----------|---------|-------------|
| `--file-item_bg` | secondary bg | Row background |
| `--file-item_b-c` | border | Row border color |
| `--file-item_error_b-c` | danger border | Error state border |
| `--file-item_progress_fill_bg` | brand | Progress bar fill |
