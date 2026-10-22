---
title: Button Group
group: Globals
version: 1.1.0
css_prefix: btn-group
---

# Button Group

Layout container for grouping multiple buttons with consistent spacing. Aligned with `mud-button-group`. Pure layout primitive — does not propagate props to children.

## Usage

```twig
{% embed 'mud_egov:button-group' with {
  button_group_orientation: 'horizontal',
  button_group_label: 'Acțiuni formular',
} %}
  {% block slot_buttons %}
    {% include 'mud_egov:button' with { button_label: 'Salvează', button_variant: 'primary', button_appearance: 'filled' } %}
    {% include 'mud_egov:button' with { button_label: 'Anulează', button_appearance: 'outlined' } %}
  {% endblock %}
{% endembed %}
```

Attached (merged borders):

```twig
{% embed 'mud_egov:button-group' with { button_group_attached: true } %}
  {% block slot_buttons %}
    {% include 'mud_egov:button' with { button_label: 'Zi' } %}
    {% include 'mud_egov:button' with { button_label: 'Lună' } %}
    {% include 'mud_egov:button' with { button_label: 'An' } %}
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

## CSS overrides

| Variable | Default | Description |
|----------|---------|-------------|
| `--btn-group_gap` | `--button-group-gap-horizontal` (12px) | Space between buttons (horizontal) |
| `--btn-group_vertical_gap` | `--button-group-gap-vertical` (12px) | Space between buttons (vertical) |
| `--btn-group_attached_gap` | `0` | Space when attached |

## Accessibility

- Rendered with `role="group"`; pass `button_group_label` when no visible label names the group.
- Keyboard order follows the DOM order of the buttons.
