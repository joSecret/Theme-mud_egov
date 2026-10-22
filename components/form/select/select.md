---
title: Select
group: Forms
version: 1.1.0
css_prefix: select
---

# Select

Native `<select>` dropdown with label (from the `label` component), optional description, option list or custom options slot, and single or multiple selection.

## Usage

```twig
{% include 'mud_egov:select' with {
  select_name: 'country',
  select_label: 'Country',
  select_placeholder: 'Choose a country…',
  select_required: true,
  select_description: 'Used for the invoice address.',
  select_options: [
    { value: 'md', label: 'Moldova' },
    { value: 'ro', label: 'Romania' },
    { value: 'ua', label: 'Ukraine', disabled: true },
  ],
} only %}
```

### Custom options (slot)

```twig
{% embed 'mud_egov:select' with { select_name: 'city', select_label: 'City' } only %}
  {% block slot_options %}
    <optgroup label="North"><option value="balti">Bălți</option></optgroup>
    <optgroup label="South"><option value="cahul">Cahul</option></optgroup>
  {% endblock %}
{% endembed %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `select_name` | string | required | Form control name (`[]` is appended when `select_multiple` is true) |
| `select_id` | string\|null | null | HTML id (falls back to name) |
| `select_label` | string\|null | null | Label text |
| `select_options` | array | [] | `{value, label, selected?, disabled?}` objects |
| `select_placeholder` | string\|null | null | Empty first option |
| `select_description` | string\|null | null | Help text below the field, linked with `aria-describedby` |
| `select_size` | string\|null | null | sm \| lg |
| `select_required` | boolean\|null | false | Marks the field as required |
| `select_disabled` | boolean\|null | false | Disables the field |
| `select_multiple` | boolean\|null | false | Allows multiple selections |
| `select_rows` | integer\|null | null | Visible rows (`size` attribute), mainly with `select_multiple` |
| `select_uc` / `select_field_uc` / `select_label_uc` | array | [] | Extra CSS classes on the wrapper / field / label |
| `select_att` / `select_field_att` / `select_label_att` | Attribute\|null | null | Extra HTML attributes on the wrapper / field / label |

## Slots

| Slot | Description |
|---|---|
| `slot_options` | Custom `<option>` or `<optgroup>` markup inside the select |

## CSS variables

Defaults come from `--select-*` in `css/defaults/forms.css`. To override in a specific context, set a public variable (empty by default) on the wrapper or an ancestor:

| Variable | Controls |
|---|---|
| `--select_h`, `--select_sm_h`, `--select_lg_h` | Field height |
| `--select_p-i`, `--select_sm_p-i`, `--select_lg_p-i` | Inline padding |
| `--select_f-s`, `--select_sm_f-s`, `--select_lg_f-s` | Font size |
| `--select_bg`, `--select_bg_d` | Background (normal / disabled) |
| `--select_b-c`, `--select_b-c_h`, `--select_b-c_f`, `--select_b-c_d` | Border color (normal / hover / focus / disabled) |
| `--select_desc_c` | Description color |
| `--select_m-b` | Wrapper bottom margin |

## Accessibility

- Native `<select>`: keyboard, screen reader and mobile pickers work without scripting.
- The label is bound with `for`/`id` and the description is linked with `aria-describedby`.
- Keyboard focus shows the MUD focus halo on `:focus-visible`; the outline stays transparent (visible in forced-colors mode).
- Use `select_placeholder` only as a non-selectable prompt; do not rely on it as the field's label.
