# Button Group

Layout container for grouping multiple buttons with consistent spacing. Aligned with `mud-button-group`. Pure layout primitive — does not propagate props to children.

## Usage

```twig
{% embed 'mud_egov:button-group' with {
  button_group_orientation: 'horizontal',
  button_group_label: 'Acțiuni formular',
} %}
  {% block slot_buttons %}
    {% include 'mud_egov:button' with { label: 'Salvează', button_variant: 'primary', button_appearance: 'filled' } %}
    {% include 'mud_egov:button' with { label: 'Anulează', button_appearance: 'outlined' } %}
  {% endblock %}
{% endembed %}
```

Attached (merged borders):

```twig
{% embed 'mud_egov:button-group' with { button_group_attached: true } %}
  {% block slot_buttons %}
    {% include 'mud_egov:button' with { label: 'Zi' } %}
    {% include 'mud_egov:button' with { label: 'Lună' } %}
    {% include 'mud_egov:button' with { label: 'An' } %}
  {% endblock %}
{% endembed %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `button_group_label` | string\|null | null | `aria-label` for the group |
| `button_group_orientation` | string\|null | null | `horizontal` (default) \| `vertical` |
| `button_group_attached` | boolean | false | Merge buttons by removing inner border radii |
| `button_group_uc` | array | [] | Additional CSS classes |
| `button_group_att` | Attribute | null | HTML attributes |

## Slots

| Slot | Description |
|------|-------------|
| `slot_buttons` | Button components |

## CSS variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--button-group_gap` | 12px | Space between buttons |
