---
title: Progress Tracker
group: Globals
version: 1.1.0
css_prefix: progress-tracker
---

# Progress Tracker

Multi-step progress indicator (stepper). Supports horizontal and vertical orientations, compact dot-rail mode, and five step statuses.

## Usage

```twig
{% include 'mud_egov:progress-tracker' with {
  progress_tracker_steps: [
    { label: 'Date personale', status: 'completed' },
    { label: 'Documente', status: 'current' },
    { label: 'Confirmare', status: 'pending' },
  ],
  progress_tracker_orientation: 'horizontal',
} %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `progress_tracker_steps` | array | [] | `[{id?, label, description?, status, icon_name?, disabled?}]` |
| `progress_tracker_aria_label` | string\|null | null | Accessible name for the list |
| `progress_tracker_orientation` | string\|null | null | `horizontal` \| `vertical` |
| `progress_tracker_compact` | boolean | false | Dot-rail mode (hides labels) |
| `progress_tracker_uc` | array | [] | Additional CSS classes |
| `progress_tracker_att` | Attribute | null | HTML attributes |

## Step statuses

| Status | Visual |
|--------|--------|
| `pending` | Grey ring + number |
| `current` / `active` | Brand ring + number |
| `available` | Brand outline ring + number |
| `complete` / `completed` | Filled brand circle + checkmark |
| `error` | Danger ring + ✕ |

## CSS variables

Valorile implicite vin din tokenuri și din `--progress-tracker-*` (MUD, `css/defaults/feedback.css`) acolo unde valoarea coincide. Variabilele publice sunt goale implicit; se setează într-un context anume.

| Variable | Description |
|----------|-------------|
| `--progress-tracker_gap`, `--progress-tracker_step_gap` | Spațiul dintre pași și dintre indicator și etichetă |
| `--progress-tracker_indicator_size`, `--progress-tracker_compact_indicator_size` | Mărimea indicatorului (normal, compact) |
| `--progress-tracker_indicator_b-w`, `_f-s`, `_f-w`, `_trn` | Grosimea cercului, fontul și tranziția indicatorului (prefix `--progress-tracker_indicator`) |
| `--progress-tracker_connector_h`, `--progress-tracker_connector_bg` | Grosimea și culoarea conectorului |
| `--progress-tracker_label_f-s`, `_f-w`, `_c`, `_gap`, `--progress-tracker_desc_f-s`, `_c` | Eticheta și descrierea |
| `--progress-tracker_o_d` | Opacitatea unui pas dezactivat |
| `--progress-tracker_<stare>_bg`, `_b-c`, `_c` | Culorile indicatorului pe stare: `pending`, `current` (și `available`), `complete`, `error` |

## Accessibility

- Lista este un `<ol>` cu `aria-label`; fiecare pas are `aria-label` cu starea (curent, finalizat, eroare).
- Starea nu depinde doar de culoare: pasul finalizat arată ✓, cel cu eroare ✕, ceilalți numărul; numerele și pictogramele sunt `aria-hidden`.
- Pașii dezactivați (`is-disabled`) sunt estompați (opacitate 0,4) și nu primesc evenimente de pointer.
- Tranziția indicatorului este oprită la `prefers-reduced-motion: reduce`.
