---
title: Banner
group: Globals
version: 1.1.0
css_prefix: banner
---

# Banner Component

## Overview

Full-width notification bar that spans its container and informs users of system-wide events (scheduled maintenance, outages, announcements). Supports `info`, `warning`, and `error` variants (no `success` per MUD spec) and two emphasis levels: `subtle` (tinted background) and `strong` (filled).

Live-region routing follows WCAG conventions:
- `info` → `role="status"` + `aria-live="polite"`
- `warning` / `error` → `role="alert"` + `aria-live="assertive"`

## Usage

```twig
{% include 'mud_egov:banner' with {
  banner_variant: 'warning',
  banner_message: 'Scheduled maintenance on Saturday 09:00–11:00.',
} %}
```

With title and dismiss:

```twig
{% include 'mud_egov:banner' with {
  banner_variant: 'error',
  banner_emphasis: 'strong',
  banner_title: 'Service unavailable',
  banner_message: 'The portal is temporarily unavailable.',
  banner_dismissible: true,
} %}
```

With inline link:

```twig
{% include 'mud_egov:banner' with {
  banner_variant: 'info',
  banner_message: 'New features are available.',
  banner_link_text: 'Learn more',
  banner_link_href: '/release-notes',
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `banner_title` | `string\|null` | `null` | Optional bold heading |
| `banner_message` | `string\|null` | `null` | Body text |
| `banner_icon` | `string\|null` | `null` | SVG string for the leading icon |
| `banner_link_text` | `string\|null` | `null` | Inline link label |
| `banner_link_href` | `string\|null` | `null` | Inline link URL (defaults to `#`) |
| `banner_close_label` | `string\|null` | `"Închide"` | Close button accessible label |
| `banner_variant` | `string\|null` | `null` (info) | `info` \| `warning` \| `error` |
| `banner_emphasis` | `string\|null` | `null` (subtle) | `subtle` \| `strong` |
| `banner_dismissible` | `boolean` | `false` | Show close button |
| `banner_uc` | `array` | `[]` | Extra utility classes |
| `banner_att` | `Attribute` | `null` | Extra HTML attributes |

## Slots

### `slot_content`
Overrides `banner_message` with rich HTML content.

## CSS Variables

Valorile implicite vin din `--banner-*` (MUD, `css/defaults/feedback.css`) și din tokenuri. Variabilele publice sunt goale implicit; se setează într-un context anume.

| Variable | Description |
|---|---|
| `--banner_bg`, `--banner_c` | Fundal și culoare de text (implicit, info subtle) |
| `--banner_b`, `--banner_b-r` | Chenar și rotunjire |
| `--banner_p-b`, `--banner_p-i` | Padding pe bloc și pe inline |
| `--banner_gap`, `--banner_inner_gap`, `--banner_body_gap` | Spațieri: bara, pictogramă/conținut, în conținut |
| `--banner_icon_size`, `--banner_close_size` | Mărimea pictogramei și a butonului de închidere |
| `--banner_title_f-s`, `--banner_title_f-w`, `--banner_body_f-s`, `--banner_link_f-w` | Tipografia |
| `--banner_close_b-r`, `--banner_close_ol-o` | Rotunjirea și decalajul conturului la butonul de închidere |
| `--banner_<variantă>_<accent>_bg`, `--banner_<variantă>_<accent>_c` | Culorile unei perechi, ex. `--banner_warning_strong_bg` (variantă: `info`, `warning`, `error`; accent: `subtle`, `strong`) |

## Accessibility

- `info` folosește `role="status"` și `aria-live="polite"`; `warning` și `error` folosesc `role="alert"` și `aria-live="assertive"`.
- Butonul de închidere are nume accesibil din `banner_close_label` și un contur vizibil la `:focus-visible`; pictograma din buton și cea de început sunt decorative (`aria-hidden`).
- Perechile de culori respectă contrastul minim 4,5:1 în varianta `subtle`; nu transmite sensul doar prin culoare, ci prin titlu sau text.
- Bannerul nu are animații.
