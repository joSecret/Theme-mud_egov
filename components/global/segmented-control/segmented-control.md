---
title: Segmented Control
group: Globals
version: 1.1.0
css_prefix: segmented-control
---

# Segmented Control

Single-select horizontal switcher. Uses `role="radiogroup"` + `role="radio"` semantics with roving tabindex keyboard navigation (arrow keys, Home, End).

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
} only %}
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

## CSS Variables

Public overrides are empty by default; set them in a specific context.

| Variable | Default | Description |
|----------|---------|-------------|
| `--segmented-control_bg` | `--color-background-base-tertiary` | Track background. |
| `--segmented-control_b-r` | `--border-radius-8` | Track border radius. |
| `--segmented-control_p`, `--segmented-control_gap` | `--spacing-4` | Track padding and gap between segments. |
| `--segmented-control_h` | `--segmented-control-segment-height-md` | Segment height (md, 40px). |
| `--segmented-control_sm_h` | `--segmented-control-segment-height-sm` | Segment height (sm, 32px). |
| `--segmented-control_seg_c` | `--color-text-base-secondary` | Segment text color. |
| `--segmented-control_seg_bg_s` | `--color-background-base-default` | Selected segment background. |
| `--segmented-control_seg_c_s` | `--color-text-base-default` | Selected segment text color. |
| `--segmented-control_seg_bs_s` | `--drop-shadow-segment` | Selected segment shadow. |
| `--segmented-control_seg_c_d` | `--color-text-base-disabled` | Disabled segment text color. |

Also available: `--segmented-control_seg_bg`, `--segmented-control_seg_f-s`, `--segmented-control_seg_f-w`, `--segmented-control_seg_b-r`, `--segmented-control_seg_p-i`, `--segmented-control_seg_ol-c` (focus outline color), `--segmented-control_seg_trn`.

## Accessibility

- `role="radiogroup"` with `role="radio"` segments and `aria-checked`; label the group with `segmented_control_label`.
- Roving tabindex: only the selected segment is in the tab order; arrow keys, Home and End move and select.
- Keyboard focus shows a 2px inset outline (`:focus-visible`).
- Color changes are not the only selected cue (the selected segment also gets a raised background and shadow); transitions are off under `prefers-reduced-motion: reduce`.
