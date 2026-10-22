---
title: Textarea
group: Forms
version: 1.1.0
css_prefix: textarea
---

# Textarea

Multi-line text input aligned with the MUD Storybook textarea. Renders a native `<textarea>` with label, helper text, error state, configurable rows, and resize control.

## Usage

```twig
{% include 'mud_egov:textarea' with {
  textarea_label: 'Description',
  textarea_name: 'description',
  textarea_id: 'description',
  textarea_placeholder: 'Write something…',
  textarea_rows: 6,
  textarea_helper_text: 'Maximum 500 characters.',
} only %}
```

### With error state

```twig
{% include 'mud_egov:textarea' with {
  textarea_label: 'Comments',
  textarea_name: 'comments',
  textarea_error: true,
  textarea_error_message: 'This field is required.',
} only %}
```

### No resize

```twig
{% include 'mud_egov:textarea' with {
  textarea_label: 'Notes',
  textarea_name: 'notes',
  textarea_resize: 'none',
} only %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `textarea_label` | string\|null | null | Visible label text |
| `textarea_name` | string\|null | null | Form control name |
| `textarea_id` | string\|null | null | HTML id (falls back to name) |
| `textarea_placeholder` | string\|null | null | Placeholder text |
| `textarea_value` | string\|null | null | Initial content |
| `textarea_rows` | integer\|null | 4 | Minimum visible rows |
| `textarea_helper_text` | string\|null | null | Hint shown below the field |
| `textarea_error_message` | string\|null | null | Error text (shown when `textarea_error` is true) |
| `textarea_disabled` | boolean | false | Disables the field |
| `textarea_readonly` | boolean | false | Makes the field read-only |
| `textarea_required` | boolean | false | Marks the field as required |
| `textarea_error` | boolean | false | Activates error/destructive visual state |
| `textarea_size` | string\|null | null | md \| lg |
| `textarea_resize` | string\|null | null | vertical \| none \| horizontal \| both |
| `textarea_uc` | array | [] | Extra CSS classes on the wrapper |
| `textarea_att` | Attribute\|null | null | Extra HTML attributes on the wrapper |

## CSS variables

Defaults come from `--textarea-*` and `--input-*` in `css/defaults/forms.css`. To override in a specific context, set a public variable (empty by default) on the wrapper or an ancestor:

| Variable | Controls |
|---|---|
| `--textarea_p-b`, `--textarea_lg_p-b` | Block padding (md / lg) |
| `--textarea_p-i`, `--textarea_lg_p-i` | Inline padding |
| `--textarea_f-s`, `--textarea_lg_f-s` | Font size |
| `--textarea_bg`, `--textarea_bg_d`, `--textarea_readonly_bg` | Background (normal / disabled / read-only) |
| `--textarea_b-c`, `--textarea_b-c_h`, `--textarea_b-c_f`, `--textarea_b-c_d` | Border color (normal / hover / focus / disabled) |
| `--textarea_error_b-c`, `--textarea_error_bs_f`, `--textarea_error_c` | Error border, focus ring and message color |
| `--textarea_c`, `--textarea_placeholder_c` | Text and placeholder color |
| `--textarea_label_c`, `--textarea_label_c_d` | Label color (normal / disabled) |

## Accessibility

- The label is bound to the field with `for`/`id`; the required asterisk is `aria-hidden` and the field gets `required` and `aria-required`.
- Helper and error text are linked with `aria-describedby`; the error state sets `aria-invalid="true"` and the message has `role="alert"`.
- Keyboard focus shows the MUD focus halo on `:focus-visible`; the outline stays transparent (visible in forced-colors mode).
- Keep resizing enabled (default `vertical`) unless the layout requires otherwise, so users can enlarge the field.
