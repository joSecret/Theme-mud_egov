---
title: Radio
group: Forms
version: 1.1.0
css_prefix: radio
---

# Radio

Single radio button input aligned with the MUD design system. Renders a native `<input type="radio">` with label, error state, and two sizes (sm/md). Group multiple radio components by sharing the same `radio_name`.

## Usage

```twig
{% include 'mud_egov:radio' with {
  radio_label: 'Option A',
  radio_name: 'choice',
  radio_value: 'a',
  radio_id: 'choice-a',
} only %}

{% include 'mud_egov:radio' with {
  radio_label: 'Option B',
  radio_name: 'choice',
  radio_value: 'b',
  radio_id: 'choice-b',
  radio_checked: true,
} only %}
```

### With error state

```twig
{% include 'mud_egov:radio' with {
  radio_label: 'Option A',
  radio_name: 'choice',
  radio_value: 'a',
  radio_error: true,
} only %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `radio_label` | string\|null | null | Visible label text |
| `radio_name` | string\|null | null | Form control name (groups radio buttons) |
| `radio_value` | string\|null | null | Value submitted when selected |
| `radio_id` | string\|null | null | HTML id (falls back to name + value) |
| `radio_checked` | boolean | false | Whether this radio is selected |
| `radio_disabled` | boolean | false | Disables the radio |
| `radio_required` | boolean | false | Marks the field as required |
| `radio_error` | boolean | false | Activates error/destructive visual state |
| `radio_size` | string\|null | null | sm \| md |
| `radio_uc` | array | [] | Extra CSS classes on the wrapper |
| `radio_att` | Attribute\|null | null | Extra HTML attributes on the wrapper |

## CSS variables

Defaults come from `--radio-*` in `css/defaults/forms.css`. To override in a specific context, set the public variable (empty by default), for example `--radio_b-c_s`, `--radio_dot_bg`, `--radio_err_b-c`, `--radio_size`, `--radio_sm_size`, `--radio_label_c`.

## Accessibility

- Native `<input type="radio">` with a `<label for>`; radios sharing `radio_name` form a group with arrow-key navigation provided by the browser.
- The focus ring is shown on `:focus-visible` through `box-shadow`, with a transparent outline kept for forced-colors mode.
- `radio_required` sets `required` and `aria-required`; the visual asterisk is `aria-hidden`.
- `radio_error` sets `aria-invalid="true"`; wrap related radios in a `fieldset` with a `legend` when a group label is needed.
