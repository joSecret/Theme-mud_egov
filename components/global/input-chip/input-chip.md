---
title: Input Chip
group: Globals
version: 1.1.0
css_prefix: input-chip
---

# Input Chip

Multi-value text-entry control where each confirmed value renders as a removable chip (token field). Add chips with Enter or comma; remove with Backspace or the ✕ button.

## Usage

```twig
{% include 'mud_egov:input-chip' with {
  input_chip_label: 'Etichete',
  input_chip_name: 'tags',
  input_chip_placeholder: 'Adaugă etichetă...',
  input_chip_chips: ['design', 'frontend'],
  input_chip_max: 5,
} %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `input_chip_label` | string\|null | null | Field label |
| `input_chip_placeholder` | string\|null | null | Input placeholder |
| `input_chip_name` | string\|null | null | Form name (submitted as JSON array) |
| `input_chip_chips` | array | [] | Pre-populated chip values |
| `input_chip_helper_text` | string\|null | null | Helper text below field |
| `input_chip_error_text` | string\|null | null | Error message (requires `invalid`) |
| `input_chip_max` | number\|null | null | Max chips allowed |
| `input_chip_size` | string\|null | null | `md` \| `lg` |
| `input_chip_variant` | string\|null | null | `default` \| `destructive` |
| `input_chip_disabled` | boolean | false | Disable interactivity |
| `input_chip_required` | boolean | false | Mark as required |
| `input_chip_invalid` | boolean | false | Show error state |
| `input_chip_uc` | array | [] | Additional CSS classes |
| `input_chip_att` | Attribute | null | HTML attributes |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `input-chip:add` | `{ value }` | Chip added |
| `input-chip:remove` | `{ value }` | Chip removed |

## CSS variables

Public overrides, empty by default. Each links to a MUD default (`--input-chip_<x>` → token). Size `lg`: `--input-chip_lg_m-h`; invalid state: `--input-chip_invalid_b-c`.

| Variable | Default | Description |
|----------|---------|-------------|
| `--input-chip_b-c` | `--color-border-base-default` | Field border color |
| `--input-chip_b-c_f` | `--color-border-brand-default` | Field border color on focus |
| `--input-chip_b-r` | `--border-radius-8` | Field border radius |
| `--input-chip_bg` | `--color-background-base-default` | Field background |
| `--input-chip_m-h` | `44px` | Field min height |
| `--input-chip_p` | `6px 12px` | Field padding |
| `--input-chip_gap` | `--spacing-6` | Gap between chips and input |
| `--input-chip_chip_bg` | `--color-background-brand-secondary` | Chip background |
| `--input-chip_chip_c` | `--color-text-brand-default` | Chip text color |
| `--input-chip_chip_b-r` | `--border-radius-full` | Chip radius |
| `--input-chip_chip_f-s` | `13px` | Chip font size |
| `--input-chip_label_c` | `--color-text-base-default` | Label color |

## Accessibility

- The label is tied to the text input with `for`/`id`; required adds `required` and `aria-required`, invalid adds `aria-invalid`.
- The error message uses `role="alert"`; the helper text is shown only when there is no error.
- Each remove button has an accessible name (`Elimină <value>`); Backspace in the empty input also removes the last value, so the keyboard needs no extra stop.
- The field border changes on `:focus-within` (not color alone: the caret and the text input remain visible); the field transition is off under `prefers-reduced-motion: reduce`.
