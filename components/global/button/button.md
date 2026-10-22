---
title: Button
group: Globals
version: 3.0.0
css_prefix: btn
---

# Button

Actions in forms, dialogs and pages. Native Drupal version of `mud-button` (MUD JS 1.2.1): same variants, appearances, sizes and shapes, built on the `--button-*` defaults in `css/defaults/actions.css`.

The `.button` classes are also loaded globally (`css/utils.css`), so Drupal form buttons and links with `class="button"` get the same look.

## Props

| Prop | Type | Default | Values |
| --- | --- | --- | --- |
| `button_label` | string | `''` | Visible text. Also the accessible name. |
| `button_variant` | string, null | `null` (primary) | `primary`, `secondary`, `strict`, `neutral`, `destructive` |
| `button_appearance` | string, null | `null` (filled) | `filled`, `outlined`, `text`. Outlined and text exist for primary, strict and destructive; secondary and neutral fall back to primary. |
| `button_size` | string, null | `null` (md) | `sm` (32px), `md` (40px), `lg` (48px) |
| `button_shape` | string, null | `null` (rectangular) | `none`, `rectangular`, `circular` |
| `button_icon` | string, null | `null` | SVG markup with `aria-hidden="true"` |
| `button_icon_second` | string, null | `null` | Second SVG, after the label |
| `button_icon_position` | string, null | `right` when an icon is set | `left`, `right`, `only` |
| `button_tag` | string, null | `button` (`a` when `button_url` is set) | `a`, `button`, `span`, `input`, `summary` |
| `button_url`, `button_target`, `button_rel` | string, null | `null` | Link attributes |
| `button_name`, `button_value` | string, null | `null` | Form attributes |
| `button_id`, `button_role` | string, null | `null` | |
| `button_disabled` | boolean | `false` | Native `disabled` on `button`/`input`, `aria-disabled` on the others |
| `button_loading` | boolean | `false` | Shows a spinner on click (`aria-busy="true"`) |
| `button_full_width` | boolean | `false` | Fills the container |
| `button_aria_expanded` | boolean, null | `null` | Only for toggles (menus, accordions) |
| `button_aria_label` | string, null | `null` | Required for icon-only buttons |
| `button_uc` | array | `[]` | Utility classes |
| `button_att` | Attribute | `null` | Extra attributes |

## Slots

| Slot | Content |
| --- | --- |
| `slot_icon` | Icon (left, right or only) |
| `slot_content` | Label |
| `slot_icon_second` | Second icon |

## Example

```twig
{% include 'mud_egov:button' with {
  button_label: 'Trimite'|t,
  button_variant: 'primary',
  button_appearance: 'outlined',
  button_size: 'lg',
  button_icon: '<svg aria-hidden="true" …></svg>',
  button_icon_position: 'left',
} only %}
```

## CSS overrides

Public variables are empty by default. Set them in a specific context:

```css
.my-toolbar .button {
  --btn_b-r: 0;
  --btn_secondary_bg: var(--color-background-base-default);
}
```

Pattern: `--btn_<variant>_<size>_<property>_<state>`, for example `--btn_bg_h`, `--btn_lg_f-s`, `--btn_outlined_strict_b-c`.

## Accessibility

- Focus: the two-colour MUD ring (`--focus-ring`) on `:focus-visible`.
- Touch: on coarse pointers the hit area grows to 40px (sm) or 48px (md, lg) without changing the visual size.
- Icon-only buttons need `button_aria_label`; the icon SVG must have `aria-hidden="true"`.
- `<button>` gets `type="button"` unless set, so it does not submit forms by accident.
- Disabled links get `aria-disabled="true"` and `tabindex="-1"`.
- Transitions are off under `prefers-reduced-motion: reduce`.
