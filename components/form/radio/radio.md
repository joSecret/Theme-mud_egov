# Radio

Single radio button input aligned with `mud-radio`. Renders a native `<input type="radio">` with label, error state, and two sizes (sm/md). Group multiple radio components by sharing the same `radio_name`.

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
