---
title: Receipt
group: Globals
version: 1.1.0
css_prefix: receipt
---

# Receipt Component

## Overview

A structured card that presents the summary of a finished e-Gov Moldova transaction. Supports four service types (MPay, MPass, MSign, MDelivery), status badges, itemised detail rows, and a total amount block.

## Features

- Service type variants: mpay, mpass, msign, mdelivery
- Status badges: paid, confirmed, pending, failed
- Itemised detail rows (label/value pairs)
- Total amount block with label
- Transaction reference and date display
- Optional footer text
- Print-friendly styles

## Props Reference

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `receipt_service` | `string \| null` | `null` | Service type: mpay, mpass, msign, mdelivery |
| `receipt_title` | `string \| null` | `null` | Custom title (defaults to Romanian per-service string) |
| `receipt_status` | `string \| null` | `null` | Status: paid, confirmed, pending, failed |
| `receipt_reference` | `string \| null` | `null` | Transaction ID / reference code |
| `receipt_items` | `array` | `[]` | Array of `{label, value}` detail rows |
| `receipt_total_label` | `string \| null` | `null` | Label preceding the total value |
| `receipt_total_value` | `string \| null` | `null` | Pre-formatted amount string (e.g. "150,00 MDL") |
| `receipt_date` | `string \| null` | `null` | Date string displayed on receipt |
| `receipt_footer_text` | `string \| null` | `null` | Optional footer message |
| `receipt_uc` | `array` | `[]` | Utility classes |
| `receipt_att` | `Attribute` | `null` | Additional HTML attributes |

## Usage Example

```twig
{% include 'mud_egov:receipt' with {
  receipt_service: 'mpay',
  receipt_status: 'paid',
  receipt_date: '22 mai 2026, 14:32',
  receipt_reference: 'TXN-2026-001234',
  receipt_items: [
    { label: 'Plătitor', value: 'Ion Popescu' },
    { label: 'Beneficiar', value: 'Fisc Moldova' },
    { label: 'Descriere', value: 'Impozit pe venit 2025' },
  ],
  receipt_total_label: 'Suma',
  receipt_total_value: '350,00 MDL',
  receipt_footer_text: 'Păstrați această chitanță ca dovadă a plății.',
} %}
```

## CSS variables

Public overrides (empty by default). Defaults come from the `--receipt-*` variables in `css/defaults/data.css` and from tokens.

| Variable | Default | Description |
| --- | --- | --- |
| `--receipt_mx-w` | `--receipt-container-max-width` | Maximum card width. |
| `--receipt_bg` | `--receipt-container-background` | Card background. |
| `--receipt_b-r` | `--receipt-container-border-radius` | Card border radius. |
| `--receipt_bs` | `--receipt-container-shadow` | Card shadow. |
| `--receipt_p` | `--receipt-container-padding` (`-mobile` up to 480px) | Card padding. |
| `--receipt_gap` | `--receipt-container-gap` | Gap between header, body and footer. |
| `--receipt_title_c`, `--receipt_title_f-s`, `--receipt_title_f-w` | `--receipt-title-*` | Title color, size and weight. |
| `--receipt_amount_value_c`, `--receipt_amount_value_f-s` | `--receipt-amount-value-*` | Total amount color and size. |
| `--receipt_row_label_c`, `--receipt_row_value_c` | `--receipt-row-*-color` | Row label and value colors. |
| `--receipt_divider_bg`, `--receipt_divider_b-c` | `--receipt-divider-color` | Divider and row border colors. |
| `--receipt_badge_bg`, `--receipt_badge_c` | `--color-background-brand-secondary`, `--color-text-brand-default` | Service badge colors. |
| `--receipt_paid_bg` / `_c`, `--receipt_confirmed_bg` / `_c`, `--receipt_pending_bg` / `_c`, `--receipt_failed_bg` / `_c` | `--color-*` status tokens | Status tag colors. |

Renamed from the previous API: the `--receipt-*` MUD variables are no longer read directly by the component; use the `--receipt_*` overrides above (or change the defaults in `css/defaults/data.css`).

## Accessibility

- Wraps in `<article>` for semantic document structure
- Title rendered as `<h2>` for screen reader navigation
- Status badge uses semantic text (not color alone)
- `role="separator"` on dividers
- Print styles remove decorative shadows and add a plain border
- The component has no interactive elements, so there is no focus or motion handling
