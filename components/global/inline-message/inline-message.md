---
title: Inline Message
group: Globals
version: 1.1.0
css_prefix: inline-message
---

# Inline Message Component

## Overview

Lightweight, in-context feedback rendered as a coloured leading icon plus a short text line. Has no surface, border, or padding. Used alongside inputs and form fields to give immediate guidance.

This component is **not** an ARIA live region. Associate it with a form field via `aria-describedby` (and `aria-invalid` for errors) on the consumer side. The icon is decorative.

## Usage

```twig
{% include 'mud_egov:inline-message' with {
  inline_message_variant: 'error',
  inline_message_text: 'This field is required.',
} %}
```

With size:

```twig
{% include 'mud_egov:inline-message' with {
  inline_message_variant: 'success',
  inline_message_size: 'small',
  inline_message_text: 'CNP valid.',
} %}
```

Without icon:

```twig
{% include 'mud_egov:inline-message' with {
  inline_message_variant: 'warning',
  inline_message_text: 'This data may be outdated.',
  inline_message_hide_icon: true,
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `inline_message_text` | `string\|null` | `null` | The feedback message text |
| `inline_message_icon` | `string\|null` | `null` | SVG string for the leading icon (overrides default) |
| `inline_message_variant` | `string\|null` | `null` (info) | `info` \| `success` \| `warning` \| `error` |
| `inline_message_size` | `string\|null` | `null` (medium) | `small` (12 px) \| `medium` (14 px) |
| `inline_message_hide_icon` | `boolean` | `false` | Suppress the leading icon |
| `inline_message_uc` | `array` | `[]` | Extra utility classes |
| `inline_message_att` | `Attribute` | `null` | Extra HTML attributes |

## Slots

### `slot_content`
Overrides `inline_message_text` with rich inline content.

## CSS Variables

Valorile implicite vin din `--inline-message-*` (MUD, `css/defaults/links.css`). Variabilele publice sunt goale implicit; se setează într-un context anume.

| Variable | Description |
|---|---|
| `--inline-message_c`, `--inline-message_icon_c` | Culoarea textului și a pictogramei (implicit, info) |
| `--inline-message_f-f`, `--inline-message_f-s`, `--inline-message_l-h`, `--inline-message_f-w` | Fontul |
| `--inline-message_gap`, `--inline-message_icon_size` | Spațiul dintre pictogramă și text, mărimea pictogramei |
| `--inline-message_sm_f-s`, `--inline-message_sm_l-h`, `--inline-message_sm_gap`, `--inline-message_icon_sm_size` | Aceleași valori pentru mărimea `small` |
| `--inline-message_<variantă>_c`, `--inline-message_<variantă>_icon_c` | Culorile unei variante, ex. `--inline-message_error_c` (`info`, `success`, `warning`, `error`) |

## Accessibility

- Nu este regiune ARIA live: asociază mesajul cu câmpul prin `aria-describedby` (și `aria-invalid` pentru erori).
- Pictograma este decorativă (`aria-hidden`); sensul vine din text, nu doar din culoare.
- Culorile textului respectă contrastul minim 4,5:1 pe fundal alb.
- Nu are animații.
