---
title: Date Picker
group: Forms
version: 1.1.0
css_prefix: date-picker
---

# Date Picker

Calendar-based single-date picker aligned with the MUD design system. Renders a read-only text input that opens a calendar popup on click or Enter/Space, or an inline calendar. The selected date is written as ISO `YYYY-MM-DD`; weekday and month labels are locale-aware via `Intl.DateTimeFormat`. The `date_picker_mode` and `date_picker_size` props are accepted (as `data-mode` and a `date-picker-<size>` class) but the current script only implements single-date selection and no size styles.

## Usage

```twig
{% include 'mud_egov:date-picker' with {
  date_picker_label: 'Data nașterii',
  date_picker_name: 'birthdate',
  date_picker_value: '1990-05-15',
  date_picker_min: '1920-01-01',
  date_picker_max: '2010-12-31',
  date_picker_locale: 'ro-RO',
} only %}
```

Inline calendar:

```twig
{% include 'mud_egov:date-picker' with {
  date_picker_label: 'Selectează data',
  date_picker_inline: true,
} only %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `date_picker_label` | string\|null | null | Field label |
| `date_picker_name` | string\|null | null | Input name |
| `date_picker_id` | string\|null | null | Input id |
| `date_picker_value` | string\|null | null | ISO YYYY-MM-DD value |
| `date_picker_min` | string\|null | null | Minimum date (ISO) |
| `date_picker_max` | string\|null | null | Maximum date (ISO) |
| `date_picker_placeholder` | string\|null | null | Input placeholder |
| `date_picker_helper_text` | string\|null | null | Helper text |
| `date_picker_error_message` | string\|null | null | Error message |
| `date_picker_locale` | string\|null | null | BCP-47 locale (default: ro-RO) |
| `date_picker_mode` | string\|null | null | `single` \| `range` \| `multi` |
| `date_picker_size` | string\|null | null | `sm` \| `md` \| `lg` |
| `date_picker_disabled` | boolean | false | Disable field |
| `date_picker_required` | boolean | false | Mark as required |
| `date_picker_error` | boolean | false | Error state |
| `date_picker_inline` | boolean | false | Show calendar inline |
| `date_picker_uc` | array | [] | Additional CSS classes |
| `date_picker_att` | Attribute | null | HTML attributes |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `date-picker:change` | `{ value }` | Emitted when a date is selected |

## CSS variables

Defaults are tokens (`--color-*`, `--spacing-*`, `--font-size-*`). The public variables below are empty by default and are set only for a specific context.

| Variable | Default | Description |
|----------|---------|-------------|
| `--date-picker_b-c` | `--color-border-base-default` | Input border color |
| `--date-picker_b-c_f` | `--color-border-brand-default` | Input border color on focus |
| `--date-picker_err_b-c` | `--color-border-danger-default` | Input border color in error state |
| `--date-picker_b-r` | `--border-radius-8` | Input radius |
| `--date-picker_h` | `44px` | Input height |
| `--date-picker_popup_bg` | `--color-background-base-default` | Popup background |
| `--date-picker_popup_bs` | `--drop-shadow-300` | Popup shadow |
| `--date-picker_day_bg_s` | `--color-background-brand-default` | Selected day background |

## Accessibility

- The label is tied to the input with `for`; `date_picker_required` sets `required` and `aria-required`, and `date_picker_error` sets `aria-invalid`; the error message uses `role="alert"`.
- The input is keyboard-operable: Enter or Space toggles the calendar and Escape closes it; the focus ring is shown on `:focus-visible`.
- The popup has `role="dialog"` and an `aria-label`; day buttons are native buttons with `aria-pressed` and an ISO `aria-label`, and days outside min/max are `disabled`.
- Transitions stop under `prefers-reduced-motion: reduce`.
