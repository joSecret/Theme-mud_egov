---
title: Receipt
group: Globals
slug: receipt
description: Transaction receipt card for e-Gov Moldova services (MPay, MPass, MSign, MDelivery).
version: 1.0.0
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

## CSS Custom Properties

| Property | Description |
| --- | --- |
| `--receipt-container-max-width` | Maximum card width (default: 480px) |
| `--receipt-container-background` | Card background color |
| `--receipt-container-border-radius` | Card border radius |
| `--receipt-container-shadow` | Card box shadow |
| `--receipt-container-padding` | Card padding |
| `--receipt-title-color` | Title text color |
| `--receipt-title-font-size` | Title font size |
| `--receipt-title-font-weight` | Title font weight |
| `--receipt-amount-value-font-size` | Total amount font size |
| `--receipt-amount-value-color` | Total amount color |
| `--receipt-row-label-color` | Row label color |
| `--receipt-row-value-color` | Row value color |
| `--receipt-divider-color` | Row divider color |

## Accessibility

- Wraps in `<article>` for semantic document structure
- Title rendered as `<h2>` for screen reader navigation
- Status badge uses semantic text (not color alone)
- `role="separator"` on dividers
- Print styles remove decorative shadows
