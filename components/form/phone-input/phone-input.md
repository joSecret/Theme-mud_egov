# Phone Input

Phone number input (`type="tel"`) with an optional country code prefix pill. Aligned with `mud-phone-input` from the MUD design system.

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
