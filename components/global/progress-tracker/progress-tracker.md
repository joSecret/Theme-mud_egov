# Progress Tracker

Multi-step progress indicator (stepper) aligned with `mud-progress-tracker`. Supports horizontal and vertical orientations, compact dot-rail mode, and five step statuses.

## Usage

```twig
{% include 'mud_egov:progress-tracker' with {
  progress_tracker_steps: [
    { label: 'Date personale', status: 'completed' },
    { label: 'Documente', status: 'current' },
    { label: 'Confirmare', status: 'pending' },
  ],
  progress_tracker_orientation: 'horizontal',
} %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `progress_tracker_steps` | array | [] | `[{id?, label, description?, status, icon_name?, disabled?}]` |
| `progress_tracker_aria_label` | string\|null | null | Accessible name for the list |
| `progress_tracker_orientation` | string\|null | null | `horizontal` \| `vertical` |
| `progress_tracker_compact` | boolean | false | Dot-rail mode (hides labels) |
| `progress_tracker_uc` | array | [] | Additional CSS classes |
| `progress_tracker_att` | Attribute | null | HTML attributes |

## Step statuses

| Status | Visual |
|--------|--------|
| `pending` | Grey ring + number |
| `current` / `active` | Brand ring + number |
| `available` | Brand outline ring + number |
| `complete` / `completed` | Filled brand circle + checkmark |
| `error` | Danger ring + ✕ |

## CSS variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--progress-tracker_indicator_size` | 32px | Indicator circle size |
| `--progress-tracker_complete_bg` | brand | Completed step fill |
| `--progress-tracker_current_b-c` | brand | Current step border |
| `--progress-tracker_error_b-c` | danger | Error step border |
| `--progress-tracker_connector_c` | border | Connector line color |
