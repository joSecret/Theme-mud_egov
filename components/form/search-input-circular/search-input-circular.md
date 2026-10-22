---
title: Search Input Circular
group: Forms
version: 1.1.0
css_prefix: search-circular
---

# Search Input Circular

Câmp de căutare cu formă de pastilă (`border-radius` complet), aliniat la MUD Search Input Circular. Conține un `<input type="search">` nativ, pictograma lupei la început și, opțional, un buton de ștergere și un buton rotund de trimitere.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `search_input_circular_label` | string | `null` | Textul etichetei vizibile |
| `search_input_circular_placeholder` | string | `null` | Textul de ajutor din câmpul gol |
| `search_input_circular_name` | string | `null` | Atributul `name` |
| `search_input_circular_id` | string | `null` | Atributul `id` (implicit, valoarea din `name`) |
| `search_input_circular_value` | string | `null` | Valoarea curentă |
| `search_input_circular_button_label` | string | `Caută` | Eticheta accesibilă a butonului de trimitere |
| `search_input_circular_size` | string | `null` | Mărimea: `md` (implicit) sau `lg` |
| `search_input_circular_disabled` | boolean | `false` | Dezactivează câmpul |
| `search_input_circular_required` | boolean | `false` | Marchează câmpul ca obligatoriu |
| `search_input_circular_with_button` | boolean | `false` | Afișează butonul rotund de trimitere |
| `search_input_circular_with_clear` | boolean | `false` | Afișează butonul de ștergere a textului |
| `search_input_circular_uc` | array | `[]` | Clase utilitare adăugate pe rădăcină |
| `search_input_circular_att` | Attribute | `null` | Atribute HTML pe rădăcină |

Componenta nu are sloturi.

## Exemplu

```twig
{% include 'mud_egov:search-input-circular' with {
  search_input_circular_label: 'Căutare',
  search_input_circular_placeholder: 'Caută servicii...',
  search_input_circular_name: 'q',
  search_input_circular_id: 'site-search',
  search_input_circular_size: 'lg',
  search_input_circular_with_button: true,
  search_input_circular_with_clear: true,
} only %}
```

## Variabile CSS publice

Goale implicit; se setează doar într-un context anume (`--search-circular_control_bg: ...`). Valorile implicite vin din `css/defaults/forms.css` (`--search-input-circular-*`).

- Câmp: `--search-circular_control_{h,p-i,gap,b-r,b-w,bg,b-c}` și stările `_h`, `_f`, `_d` (de ex. `--search-circular_control_b-c_h`); mărimea lg: `--search-circular_control_lg_{h,p-i,gap}`, `--search-circular_field_lg_{f-s,l-h}`, `--search-circular_icon_lg_size`.
- Text: `--search-circular_c`, `--search-circular_f-f`, `--search-circular_field_f-s`, `--search-circular_field_l-h`, `--search-circular_field_ph_c`.
- Etichetă: `--search-circular_label_{f-f,f-s,f-w,l-h,gap,c}`, `--search-circular_req_{c,m-i}`.
- Butoane: `--search-circular_clear_{bg,c,b-r}`, `--search-circular_submit_{bg,c,b-r}` (cu stările `_h`, `_d`).
- Inel de focus și tranziție: `--search-circular_ring_{w,c,ol-o}`, `--search-circular_trn`.

## Accessibility

- Câmpul are etichetă asociată (`for`/`id`) și `aria-labelledby`; `required` și `disabled` se transmit și prin `aria-required`, respectiv `aria-disabled`.
- Butoanele de trimitere și de ștergere au `aria-label`; pictogramele sunt `aria-hidden`.
- Focusul din câmp este afișat prin inelul de pe container (`:focus-within`), iar butonul de trimitere are contur propriu pe `:focus-visible`.
- Tranzițiile sunt dezactivate la `prefers-reduced-motion: reduce`. Butonul de ștergere se ascunde cât timp câmpul e gol și se golește din tastatură (Enter sau Space).
