# Spinner

CSS-only animated circular loading indicator ported from `mud-spinner`.

## Usage

```twig
{% include 'mud_egov:spinner' with {} %}

{% include 'mud_egov:spinner' with {
  size: 'lg',
  variant: 'dark',
  label: 'Se încarcă...',
} %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `xs\|sm\|md\|lg\|null` | `null` | Visual size rung |
| `variant` | `brand\|dark\|light\|light-on-color\|null` | `null` | Color treatment |
| `label` | `string` | `'Loading'` | Accessible label for screen readers |
| `spinner_uc` | `string[]` | `[]` | Utility classes |
| `spinner_att` | `Attribute` | `{}` | Extra HTML attributes |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--spinner_arc-color` | `--spinner-arc-color-brand` | Arc color override |
| `--spinner_size` | `--spinner-size-md` | Size override |
| `--spinner_stroke-width` | `--spinner-stroke-width-md` | Stroke width override |

## Design Tokens (from `core.tokens.css`)

| Token | Value |
|---|---|
| `--spinner-size-xs` | `16px` |
| `--spinner-size-sm` | `20px` |
| `--spinner-size-md` | `32px` |
| `--spinner-size-lg` | `40px` |
| `--spinner-arc-color-brand` | `#0058d2` |
| `--spinner-arc-color-dark` | `#1e1e1e` |
| `--spinner-arc-color-light` | `#ffffff` |
| `--spinner-transition-duration` | `800ms` |
