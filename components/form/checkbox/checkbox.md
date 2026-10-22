---
title: Checkbox
group: Forms
version: 1.1.0
css_prefix: checkbox
---

# Checkbox

Boolean checkbox input aligned with the MUD design system. Renders a native `<input type="checkbox">` with label, error state, indeterminate visual, and two sizes (sm/md).

## Usage

```twig
{% include 'mud_egov:checkbox' with {
  checkbox_label: 'I agree to the terms',
  checkbox_name: 'terms',
  checkbox_id: 'terms',
  checkbox_required: true,
} only %}
```

### With error state

```twig
{% include 'mud_egov:checkbox' with {
  checkbox_label: 'Accept conditions',
  checkbox_name: 'accept',
  checkbox_error: true,
} only %}
```

### Indeterminate (visual only)

```twig
{% include 'mud_egov:checkbox' with {
  checkbox_label: 'Select all',
  checkbox_name: 'select_all',
  checkbox_indeterminate: true,
} only %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `checkbox_label` | string\|null | null | Visible label text |
| `checkbox_name` | string\|null | null | Form control name |
| `checkbox_value` | string\|null | null | Submitted value when checked (defaults to "on") |
| `checkbox_id` | string\|null | null | HTML id (falls back to name) |
| `checkbox_checked` | boolean | false | Whether the checkbox is checked |
| `checkbox_disabled` | boolean | false | Disables the checkbox |
| `checkbox_required` | boolean | false | Marks the field as required |
| `checkbox_indeterminate` | boolean | false | Visual-only indeterminate (dash glyph) |
| `checkbox_error` | boolean | false | Activates error/destructive visual state |
| `checkbox_size` | string\|null | null | sm \| md |
| `checkbox_uc` | array | [] | Extra CSS classes on the wrapper |
| `checkbox_att` | Attribute\|null | null | Extra HTML attributes on the wrapper |

## CSS variables

Defaults come from `--checkbox-*` in `css/defaults/forms.css`. To override in a specific context, set the public variable (empty by default), for example `--checkbox_bg_s`, `--checkbox_b-c`, `--checkbox_err_b-c`, `--checkbox_size`, `--checkbox_sm_size`, `--checkbox_label_c`.

## Accessibility

- Native `<input type="checkbox">` with a `<label for>`; keyboard and screen-reader behaviour is the browser default.
- The focus ring is shown on `:focus-visible` through `box-shadow`, with a transparent outline kept for forced-colors mode.
- `checkbox_required` sets `required` and `aria-required`; the visual asterisk is `aria-hidden`.
- `checkbox_error` sets `aria-invalid="true"`; the indeterminate state is visual only and is not announced, so set it from script together with `input.indeterminate` when needed.
