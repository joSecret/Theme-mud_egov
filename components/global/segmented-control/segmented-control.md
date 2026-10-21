# Segmented Control

Single-select horizontal switcher aligned with `mud-segmented-control`. Uses `role="radiogroup"` + `role="radio"` semantics with roving tabindex keyboard navigation (arrow keys, Home, End).

## Usage

```twig
{% include 'mud_egov:segmented-control' with {
  segmented_control_options: [
    { value: 'day', label: 'Zi' },
    { value: 'week', label: 'Săptămână' },
    { value: 'month', label: 'Lună' },
  ],
  segmented_control_value: 'week',
  segmented_control_size: 'md',
} %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `segmented_control_options` | array | [] | `[{value, label, disabled?}]` |
| `segmented_control_value` | string\|null | null | Currently selected value |
| `segmented_control_name` | string\|null | null | Form control name |
| `segmented_control_label` | string\|null | null | `aria-label` for the group |
| `segmented_control_size` | string\|null | null | `md` (40px) \| `sm` (32px) |
| `segmented_control_disabled` | boolean | false | Disable all segments |
| `segmented_control_fluid` | boolean | false | Stretch to fill container |
| `segmented_control_uc` | array | [] | Additional CSS classes |
| `segmented_control_att` | Attribute | null | HTML attributes |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `segmented-control:change` | `{ value }` | Emitted when a segment is selected |

## CSS variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--segmented-control_bg` | tertiary bg | Track background |
| `--segmented-control_seg_selected_bg` | white | Selected segment background |
| `--segmented-control_seg_selected_c` | base text | Selected segment text color |
| `--segmented-control_h` | 40px | Control height (md) |
| `--segmented-control_sm_h` | 32px | Control height (sm) |
