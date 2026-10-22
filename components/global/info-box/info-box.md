---
title: Info Box
group: Globals
version: 1.1.0
css_prefix: info-box
---

# Info Box Component

## Overview

Inline, in-content callout that highlights key messages, announcements, alerts, or explanations within the page flow. Unlike `notification` (toast) or `banner` (page bar), the info box sits inside the content column and fills container width.

Supports four variants — `info` (neutral icon), `info-moderate` (brand-blue icon), `warning`, and `error` — combined with two emphasis levels: `subtle` (neutral grey surface) and `strong` (tinted semantic surface).

This component is **not** an ARIA live region.

## Usage

```twig
{% include 'mud_egov:info-box' with {
  info_box_variant: 'info',
  slot_content: 'Your documents will be processed within 3 business days.',
} %}
```

With title and actions:

```twig
{% include 'mud_egov:info-box' with {
  info_box_variant: 'warning',
  info_box_emphasis: 'strong',
  info_box_title: 'Verification required',
  slot_content: 'Please verify your identity before proceeding.',
  slot_actions: '<a href="/verify">Verify now</a>',
} %}
```

Closable:

```twig
{% include 'mud_egov:info-box' with {
  info_box_variant: 'info-moderate',
  info_box_title: 'New in this release',
  info_box_closable: true,
  slot_content: 'Electronic signatures are now supported.',
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `info_box_title` | `string\|null` | `null` | Optional bold heading |
| `info_box_icon` | `string\|null` | `null` | SVG string for the leading icon (overrides default) |
| `info_box_close_label` | `string\|null` | `"Închide"` | Close button accessible label |
| `info_box_variant` | `string\|null` | `null` (info) | `info` \| `info-moderate` \| `warning` \| `error` |
| `info_box_emphasis` | `string\|null` | `null` (subtle) | `subtle` \| `strong` |
| `info_box_closable` | `boolean` | `false` | Show close button |
| `info_box_hide_icon` | `boolean` | `false` | Suppress the leading icon |
| `info_box_uc` | `array` | `[]` | Extra utility classes |
| `info_box_att` | `Attribute` | `null` | Extra HTML attributes |

## Slots

### `slot_content`
Body content — plain text or rich inline/block content.

### `slot_actions`
Optional inline action group (links or buttons) rendered below the body.

## CSS Variables

Valorile implicite vin din `--info-box-*` (MUD, `css/defaults/feedback.css`) și din tokenuri. Variabilele publice sunt goale implicit; se setează într-un context anume.

| Variable | Description |
|---|---|
| `--info-box_bg`, `--info-box_c`, `--info-box_icon_c` | Fundal, text și pictogramă (implicit, info subtle) |
| `--info-box_b-r`, `--info-box_p-b`, `--info-box_p-i`, `--info-box_gap` | Rotunjire, padding și spațiul dintre pictogramă și conținut |
| `--info-box_f-f`, `--info-box_f-s`, `--info-box_l-h` | Fontul textului |
| `--info-box_heading_f-f`, `--info-box_heading_f-s`, `--info-box_heading_f-w`, `--info-box_heading_l-h` | Fontul titlului |
| `--info-box_icon_size`, `--info-box_body_gap` | Mărimea pictogramei, spațiul dintre titlu și text |
| `--info-box_actions_gap`, `--info-box_actions_m-b` | Spațierea grupului de acțiuni |
| `--info-box_close_size`, `--info-box_close_icon_size`, `--info-box_close_b-r`, `--info-box_close_bg_h`, `--info-box_close_ol-o` | Butonul de închidere |
| `--info-box_<variantă>_<accent>_bg`, `_c`, `_icon_c` | Culorile unei perechi, ex. `--info-box_warning_strong_bg` (variantă: `info`, `info-moderate`, `warning`, `error`; accent: `subtle`, `strong`) |

## Accessibility

- Nu este regiune ARIA live: mesajul se citește în ordinea paginii. Pentru mesaje dinamice folosește `notification`.
- Pictograma este decorativă (`aria-hidden`); sensul vine din titlu și text, nu doar din culoare.
- Butonul de închidere are nume accesibil din `info_box_close_label` și contur vizibil la `:focus-visible`.
- Nu are animații.
