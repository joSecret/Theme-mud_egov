---
title: Phone Input
group: Forms
version: 1.1.0
css_prefix: phone-input
---

# Phone Input

Phone number input (`type="tel"`) with an optional country code prefix pill. Aligned with the MUD Storybook phone input.

No JavaScript — format validation and masking are left to the consumer or server side.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `phone_input_label` | string\|null | null | Visible label text |
| `phone_input_name` | string\|null | null | Form control name |
| `phone_input_id` | string\|null | null | HTML id (auto-generated if omitted) |
| `phone_input_value` | string\|null | null | Current value |
| `phone_input_placeholder` | string\|null | null | Placeholder text |
| `phone_input_country_code` | string\|null | null | Dial code prefix (e.g. `+373`) |
| `phone_input_helper_text` | string\|null | null | Hint shown below the field |
| `phone_input_error_message` | string\|null | null | Error text (shown when `error` is true) |
| `phone_input_size` | string\|null | null | `md` \| `lg` |
| `phone_input_disabled` | boolean | false | Disables the field |
| `phone_input_required` | boolean | false | Marks as required |
| `phone_input_error` | boolean | false | Activates error visual state |
| `phone_input_uc` | string[] | [] | Utility classes on the wrapper |
| `phone_input_att` | Attribute\|null | null | HTML attributes on the wrapper |

## Usage

```twig
{% include 'mud_egov:phone-input' with {
  phone_input_label: 'Phone number',
  phone_input_name: 'phone',
  phone_input_id: 'phone',
  phone_input_country_code: '+373',
  phone_input_placeholder: 'XXX XX XXX',
  phone_input_required: true,
} only %}
```

```twig
{% include 'mud_egov:phone-input' with {
  phone_input_label: 'Mobile',
  phone_input_name: 'mobile',
  phone_input_error: true,
  phone_input_error_message: 'Phone number is invalid.',
} only %}
```

## CSS variables

Defaults come from `--phone-input-*` in `css/defaults/forms.css`. To override in a specific context, set a public variable (empty by default) on the wrapper or an ancestor:

| Variable | Controls |
|---|---|
| `--phone-input_h`, `--phone-input_lg_h` | Row height (md / lg) |
| `--phone-input_p-i`, `--phone-input_lg_p-i` | Inline padding |
| `--phone-input_f-s`, `--phone-input_lg_f-s` | Font size |
| `--phone-input_bg` | Row background |
| `--phone-input_b-c`, `--phone-input_b-c_f` | Border color (normal / focus) |
| `--phone-input_bs_f` | Focus halo (box-shadow) |
| `--phone-input_error_b-c`, `--phone-input_error_c` | Error border and message color |
| `--phone-input_c`, `--phone-input_label_c`, `--phone-input_label_c_d` | Text, label and disabled label color |
| `--phone-input_o_d` | Opacity when disabled |
| `--phone-input_code_bg`, `--phone-input_code_b-c` | Country code prefix background and divider |

## Accessibility

- The label is bound to the field with `for`/`id`; the required asterisk is `aria-hidden` and the field gets `required` and `aria-required`.
- Helper and error text are linked with `aria-describedby`; the error state sets `aria-invalid="true"` and the message has `role="alert"`.
- Focus is shown on the row (`:focus-within`): thicker border plus the MUD halo, with a transparent outline that stays visible in forced-colors mode.
- The country code prefix is `aria-hidden`; include the dial code in the label or helper text if it matters to screen reader users. The input uses `type="tel"` and `autocomplete="tel"`.
