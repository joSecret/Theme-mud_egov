---
title: Switch
group: Forms
version: 1.1.0
css_prefix: switch
---

# Switch

Binary on/off toggle switch form element. Implements the WAI-ARIA switch pattern (`role="switch"`).

## Usage

```twig
{# Basic switch with label #}
{% include 'mud_egov:switch' with {
  switch_label: 'Enable notifications',
  switch_name: 'notifications',
  switch_checked: false,
} only %}

{# Pre-checked switch #}
{% include 'mud_egov:switch' with {
  switch_label: 'Dark mode',
  switch_name: 'dark_mode',
  switch_value: '1',
  switch_checked: true,
} only %}

{# Label before the track #}
{% include 'mud_egov:switch' with {
  switch_label: 'Auto-save',
  switch_name: 'autosave',
  switch_label_position: 'start',
} only %}

{# Disabled switch #}
{% include 'mud_egov:switch' with {
  switch_label: 'Premium feature',
  switch_name: 'premium',
  switch_disabled: true,
} only %}

{# Icon-only (no visible label) #}
{% include 'mud_egov:switch' with {
  switch_name: 'toggle',
  switch_aria_label: 'Toggle feature',
} only %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `switch_label` | string\|null | `null` | Visible label text. |
| `switch_name` | string\|null | `null` | Form control `name` attribute. |
| `switch_value` | string\|null | `'on'` | Value submitted when on. |
| `switch_id` | string\|null | `null` | ID for input. Derived from `switch_name`. |
| `switch_aria_label` | string\|null | `null` | Accessible name when no visible label. |
| `switch_checked` | boolean | `false` | Initial on state. |
| `switch_disabled` | boolean | `false` | Disables interactivity. |
| `switch_required` | boolean | `false` | Marks field as mandatory. |
| `switch_label_position` | string\|null | `end` | `start` \| `end` — position of visible label relative to track. |
| `switch_uc` | array | `[]` | Extra utility classes. |
| `switch_att` | Attribute\|null | `null` | Extra HTML attributes on the wrapper. |

## CSS Variables

Defaults come from `--switch-*` in `css/defaults/forms.css`. The public variables below are empty by default and are set only for a specific context.

| Variable | Default | Description |
|----------|---------|-------------|
| `--switch_track_w` | `--switch-track-width` | Track width. |
| `--switch_track_h` | `--switch-track-height` | Track height. |
| `--switch_track_p` | `--switch-track-padding` | Inner padding (thumb offset). |
| `--switch_thumb_size` | `--switch-thumb-size` | Thumb diameter. |
| `--switch_track_bg` | `--switch-background-off` | Track background when off. |
| `--switch_on_track_bg` | `--switch-background-on` | Track background when on. |
| `--switch_thumb_bg` | `--switch-thumb-color-default` | Thumb color. |
| `--switch_label_c` | `--switch-label-color-default` | Label color. |

## JavaScript Events

| Event | Bubbles | Detail | Description |
|-------|---------|--------|-------------|
| `switch:change` | yes | `{ checked: boolean, value: string, switch: Element }` | Fired whenever the toggle state changes. |

## Accessibility

- Native `<input type="checkbox" role="switch">` inside a `<label>`, so the whole row is clickable and the label is the accessible name; `switch_aria_label` is used only when there is no visible label.
- The focus ring is drawn on the track on `:focus-visible`; the invisible input keeps a transparent outline for forced-colors mode.
- The touch target grows to 40px on coarse pointers.
- Transitions are removed under `prefers-reduced-motion: reduce`; state is kept in sync through the `is-checked` class and the native `checked` property.
