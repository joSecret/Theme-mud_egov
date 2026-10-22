---
title: Menu Details
group: Navigation
version: 1.1.0
css_prefix: menu-details
---

# Menu Details

Meniul principal al site-ului, cu sub-meniuri construite pe elementul nativ `<details>`/`<summary>`. Pe mobil (container `body` de cel mult 768px) este un acordeon cu înălțime animată. Pe desktop este o bară orizontală: sub-meniurile se deschid în panouri derulante (nivelul 1 în jos, nivelurile următoare lateral), iar elementul activ are un indicator subliniat.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `menu_details_items` | `array` | | Obligatoriu. Arborele de meniu Drupal: `title`, `url`, `attributes`, `in_active_trail`, `below`. |
| `menu_details_uc` | `array` | `[]` | Clase utilitare suplimentare. |
| `menu_details_att` | `Attribute` | `null` | Atribute HTML pentru containerul `<div>`. |

Fiecare `<li>` primește clasa `menu-details_level_<n>` (nivelul de imbricare) și, după caz, `is-link_active-trail` și `is-link_has-children`.

## Exemplu Twig

```twig
{% include "mud_egov:menu-details" with {
  menu_details_items: items,
  menu_details_att: attributes,
} %}
```

## Variabile CSS publice

Goale implicit; se setează într-un context anume (nivelul 3 de suprascriere). Valoarea implicită depinde de contextul de ecran (de ex. `--menu-details_item_p-b` este 12px pe mobil și 24px pe desktop).

| Variabilă | Ce controlează |
|---|---|
| `--menu-details_m`, `--menu-details_p`, `--menu-details_trn` | margine, padding și tranziția componentei |
| `--menu-details_ul_d`, `_ul_f-d`, `_ul_gap`, `_ul_m`, `_ul_p`, `_ul_o`, `_ul_o_s` | listele: afișare, direcție, spațiu, margine, padding, opacitate (închis / deschis) |
| `--menu-details_item_p-b`, `_item_p-i`, `_item_gap`, `_item_j-c`, `_item_a-i`, `_item_w`, `_item_w-s` | elementele: padding, spațiu, aliniere, lățime, white-space |
| `--menu-details_item_c` (`_h`, `_s`) | culoarea elementului: normal, hover, selectat / activ |
| `--menu-details_item_bg` (`_h`, `_s`), `--menu-details_item_trail_bg` | fundalul elementului; `trail_bg` e fundalul traseului activ și al elementului deschis pe mobil |
| `--menu-details_sub_item_p-i` | padding inline al elementelor din sub-meniu, pe mobil |
| `--menu-details_item_icon_w`, `--menu-details_item_icon_tr`, `--menu-details_item_icon_tr_s` | săgeata: mărime și rotire (închis / deschis) |
| `--menu-details_panel_bg`, `_panel_b-r`, `_panel_bs`, `_panel_m-w`, `_panel_mx-w` | panoul derulant (desktop): fundal, rotunjire, umbră, lățime minimă și maximă |
| `--menu-details_indicator_c`, `_indicator_h`, `_indicator_w`, `_indicator_w_s` | indicatorul elementului activ (desktop) |

## Accessibility

- Folosește `<details>`/`<summary>` native: se deschid cu Enter sau Space și sunt accesibile din tastatură fără ARIA suplimentar.
- Escape închide toate sub-meniurile deschise; pe desktop, un click în afara meniului le închide (`menu-details.js`).
- Un panou care ar ieși din ecran se întoarce spre inline-start (clasa `opens-inline-start`), ca să rămână complet vizibil.
- Elementul curent se vede și fără culoare: pe mobil prin fundal, pe desktop prin indicatorul subliniat.
- Animațiile (săgeată, înălțimea acordeonului, opacitatea panoului, indicatorul) sunt dezactivate la `prefers-reduced-motion: reduce`.
