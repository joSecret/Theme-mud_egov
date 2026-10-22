---
title: Tabs
group: Navigation
version: 1.1.0
css_prefix: tabs
---

Tabs accesibile după tiparul WAI-ARIA `tablist` / `tab` / `tabpanel`, orizontale sau verticale. Când taburile nu încap pe lățime, lista se derulează orizontal, cu butoane înainte/înapoi (ascunse pe ecrane tactile și când nu e nevoie).

## Usage

```twig
{% include 'mud_egov:tabs' with {
  tabs_tabs: [
    { title: 'Date personale', content: '<p>Conținut 1</p>' },
    { title: 'Documente', content: '<p>Conținut 2</p>' },
    { title: 'Confirmare', content: '<p>Conținut 3</p>' },
  ],
  tabs_direction: 'horizontal',
} only %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs_tabs` | array | - | `[{title, content}]`; primul tab e selectat |
| `tabs_direction` | string\|null | `horizontal` | `horizontal` sau `vertical` |
| `tabs_scrollable` | boolean | `true` | Derulare orizontală cu butoane când taburile nu încap |
| `tabs_id` | string\|null | generat | Prefix pentru id-urile panourilor |
| `tabs_uc` / `tabs_list_uc` / `tabs_button_uc` / `tabs_panel_uc` | array | `[]` | Clase utilitare pe rădăcină, listă, butoane, panouri |
| `tabs_att` / `tabs_list_att` / `tabs_button_att` / `tabs_panel_att` | Attribute | - | Atribute pe rădăcină, listă, butoane, panouri |

## Slots

| Slot | Description |
|------|-------------|
| `slot_btn_prev` | Butonul de derulare spre stânga |
| `slot_btn_next` | Butonul de derulare spre dreapta |

## CSS variables (override excepțional)

Goale implicit; valorile default vin din tokenuri. Cele mai folosite:

| Variabilă | Efect |
|-----------|-------|
| `--tabs_c`, `--tabs_bg`, `--tabs_p-i`, `--tabs_p-b`, `--tabs_m-b`, `--tabs_m-i` | Culoare, fundal, padding și margini pe rădăcină |
| `--tabs_gap` | Distanța listă - panou (vertical) |
| `--tabs_nav_gap`, `--tabs_nav_p`, `--tabs_nav_m`, `--tabs_nav_b` | Lista de taburi |
| `--tabs_button_c` / `_c_h` / `_c_s` | Culoarea textului: normal, hover, selectat |
| `--tabs_button_bg` / `_bg_h` / `_bg_s` | Fundalul: normal, hover, selectat |
| `--tabs_button_p-i`, `--tabs_button_p-b`, `--tabs_button_f-w`, `--tabs_button_f-s`, `--tabs_button_b-r` | Dimensiuni și formă |
| `--tabs_button_b-c_h`, `--tabs_button_bs_h` | Culoarea și umbra liniei de la hover |
| `--tabs_panel_p-i`, `--tabs_panel_p-b` | Padding-ul panoului |
| `--tabs_scroll_btns_w`, `--tabs_scroll_btn_bg`, `--tabs_scroll_btn_b`, `--tabs_scroll_btn_o_d` | Butoanele de derulare |

## Accessibility

- Lista are `role="tablist"`, butoanele `role="tab"` cu `aria-selected` și `aria-controls`, panourile `role="tabpanel"` cu `aria-hidden`; `tabindex` rulant (doar tabul selectat intră în ordinea Tab).
- Tastatură: săgeți stânga/dreapta (orizontal) sau sus/jos (vertical), Home și End; navigarea e circulară. Starea ARIA se actualizează din JS.
- Culorile implicite respectă contrastul 4,5:1; focusul folosește inelul implicit din `reboot.css`.
- Tranziția butoanelor este dezactivată în `prefers-reduced-motion: reduce`.
