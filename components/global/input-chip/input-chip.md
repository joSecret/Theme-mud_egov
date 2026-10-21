# Input Chip

Multi-value text-entry control where each confirmed value renders as a removable chip (token field). Aligned with `mud-input-chip`. Add chips with Enter or comma; remove with Backspace or the ✕ button.

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

| Variable | Default | Description |
|----------|---------|-------------|
| `--input-chip_b-c` | border | Field border color |
| `--input-chip_focus_b-c` | brand | Focus border color |
| `--input-chip_chip_bg` | brand subtle | Chip background |
| `--input-chip_chip_c` | brand | Chip text color |
