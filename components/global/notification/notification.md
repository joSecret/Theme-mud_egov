---
title: Notification
group: Globals
version: 1.1.0
css_prefix: notification
---

# Notification Component

## Overview

Semantic notification (filled or subtle surface, 8 px radius) that renders a leading icon, optional bold heading, message body, optional inline actions, and an optional close button (`mud_egov:button-close`). It is also used by `status-messages.html.twig` for Drupal messenger groups.

Live-region routing follows WCAG conventions:
- `info` / `success` → `role="status"` + `aria-live="polite"`
- `warning` / `error` → `role="alert"` + `aria-live="assertive"`

## Usage

```twig
{% include 'mud_egov:notification' with {
  notification_variant: 'success',
  notification_message: 'Your application was submitted successfully.',
} %}
```

With title and dismiss:

```twig
{% include 'mud_egov:notification' with {
  notification_variant: 'error',
  notification_title: 'Upload failed',
  notification_message: 'The file exceeds the 5 MB limit.',
  notification_dismissible: true,
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `notification_title` | `string\|null` | `null` | Optional bold heading |
| `notification_message` | `string\|array\|null` | `null` | Body text; an array of strings renders a bullet list |
| `notification_sr_heading` | `string\|null` | `null` | Visually hidden heading (accessible severity label) |
| `notification_icon` | `string\|null` | `null` | SVG string for the leading icon |
| `notification_close_label` | `string\|null` | `"Close"` | Close button accessible label |
| `notification_variant` | `string\|null` | `null` (info) | `info` \| `success` \| `warning` \| `error` |
| `notification_emphasis` | `string\|null` | `solid` | `solid` (filled surface) \| `subtle` (tinted surface) |
| `notification_dismissible` | `boolean` | `false` | Show close button |
| `notification_uc` | `array` | `[]` | Extra utility classes |
| `notification_att` | `Attribute` | `null` | Extra HTML attributes |

## Slots

### `slot_content`
Overrides `notification_message` with rich HTML content.

### `slot_actions`
Optional inline action group (links or buttons) rendered below the body.

## CSS Variables

Valorile implicite vin din `--notification-*` (MUD, `css/defaults/feedback.css`) și din tokenuri. Variabilele publice sunt goale implicit; se setează într-un context anume.

| Variable | Description |
|---|---|
| `--notification_bg`, `--notification_c` | Fundal și culoare de text (implicit, info) |
| `--notification_b-r`, `--notification_w`, `--notification_p-b`, `--notification_p-i`, `--notification_gap` | Rotunjire, lățime, padding (`p-b` primește două valori: sus și jos) și spațiul dintre pictogramă și conținut |
| `--notification_f-s`, `--notification_body_l-h`, `--notification_body_gap` | Textul și spațiul dintre titlu și text |
| `--notification_title_f-s`, `--notification_title_f-w`, `--notification_title_l-h`, `--notification_title_l-s` | Titlul |
| `--notification_icon_size`, `--notification_icon_p` | Mărimea și padding-ul pictogramei |
| `--notification_link_f-w`, `--notification_link_t-d-c_h`, `--notification_link_trn`, `--notification_link_ol-o` | Linkurile din conținut |
| `--notification_actions_gap`, `--notification_actions_m-b`, `--notification_list_gap` | Spațierea acțiunilor și a listei de mesaje |
| `--notification_<variantă>_bg`, `--notification_<variantă>_c` | Culorile unei variante, ex. `--notification_error_bg` (`info`, `success`, `warning`, `error`) |
| `--notification_<variantă>_subtle_bg`, `--notification_<variantă>_subtle_c` | Culorile accentului `subtle` |

## Accessibility

- `info` și `success` folosesc `role="status"` și `aria-live="polite"`; `warning` și `error` folosesc `role="alert"` și `aria-live="assertive"`.
- Butonul de închidere (`button-close`) are nume accesibil din `notification_close_label` și inelul de focus MUD.
- Linkurile din conținut sunt subliniate și au contur vizibil la `:focus-visible`; tranziția lor este oprită la `prefers-reduced-motion: reduce`.
- Sensul nu depinde doar de culoare: folosește titlul sau `notification_sr_heading`.
