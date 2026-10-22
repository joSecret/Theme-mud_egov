---
title: Search Input Rectangular
group: Forms
version: 1.1.0
css_prefix: search-rect
---

# Search Input Rectangular

Câmp de căutare cu colțuri rotunjite (dreptunghiular), aliniat la MUD Search Input Rectangular. Conține un `<input type="search">` nativ, pictograma lupei la început și, opțional, un buton de trimitere integrat în câmp.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `search_input_rectangular_label` | string | `null` | Textul etichetei vizibile |
| `search_input_rectangular_placeholder` | string | `null` | Textul de ajutor din câmpul gol |
| `search_input_rectangular_name` | string | `null` | Atributul `name` |
| `search_input_rectangular_id` | string | `null` | Atributul `id` (implicit, valoarea din `name`) |
| `search_input_rectangular_value` | string | `null` | Valoarea curentă |
| `search_input_rectangular_button_label` | string | `Caută` | Eticheta accesibilă a butonului de trimitere |
| `search_input_rectangular_size` | string | `null` | Mărimea: `md` (implicit) sau `lg` |
| `search_input_rectangular_disabled` | boolean | `false` | Dezactivează câmpul |
| `search_input_rectangular_required` | boolean | `false` | Marchează câmpul ca obligatoriu |
| `search_input_rectangular_show_button` | boolean | `false` | Afișează butonul de trimitere |
| `search_input_rectangular_uc` | array | `[]` | Clase utilitare adăugate pe rădăcină |
| `search_input_rectangular_att` | Attribute | `null` | Atribute HTML pe rădăcină |

Componenta nu are sloturi.

## Exemplu

```twig
{% include 'mud_egov:search-input-rectangular' with {
  search_input_rectangular_label: 'Căutare',
  search_input_rectangular_placeholder: 'Caută în portal...',
  search_input_rectangular_name: 'q',
  search_input_rectangular_size: 'lg',
  search_input_rectangular_show_button: true,
} only %}
```

## Variabile CSS publice

Goale implicit; se setează doar într-un context anume (`--search-rect_control_bg: ...`). Valorile implicite vin din `css/defaults/forms.css` (`--search-input-rectangular-*`).

- Câmp: `--search-rect_control_{h,p-i,gap,b-r,b-w,bg,b-c}` și stările `_h`, `_f`, `_d` (de ex. `--search-rect_control_b-c_h`); mărimea lg: `--search-rect_control_lg_{h,p-i,gap}`, `--search-rect_field_lg_{f-s,l-h}`, `--search-rect_icon_lg_size`.
- Text: `--search-rect_c`, `--search-rect_f-f`, `--search-rect_field_f-s`, `--search-rect_field_l-h`, `--search-rect_field_ph_c`.
- Etichetă: `--search-rect_label_{f-f,f-s,f-w,l-h,gap,c}`, `--search-rect_req_{c,m-i}`.
- Buton: `--search-rect_submit_{bg,c,b-r,p-i,f-w}` (cu stările `_h`, `_d` pentru fundal și culoare).
- Inel de focus și tranziție: `--search-rect_ring_{w,c,ol-o}`, `--search-rect_trn`.

## Accessibility

- Câmpul are etichetă asociată (`for`/`id`) și `aria-labelledby`; `required` și `disabled` se transmit și prin `aria-required`, respectiv `aria-disabled`.
- Butonul de trimitere are `aria-label` și text ascuns vizual pentru cititoarele de ecran; pictogramele sunt `aria-hidden`.
- Focusul din câmp este afișat prin inelul de pe container (`:focus-within`), iar butonul de trimitere are contur propriu pe `:focus-visible`.
- Tranzițiile sunt dezactivate la `prefers-reduced-motion: reduce`.
