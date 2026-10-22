---
title: Menu
group: Navigation
version: 1.1.0
css_prefix: menu
---

# Menu

Listă de legături de navigare construită din arborele de meniu Drupal. Poate fi orizontală (implicit) sau verticală, cu sub-liste imbricate. Legăturile sunt elemente `<a>` simple, generate cu `link()`; culorile implicite vin din variabilele `--link-*`.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `menu_items` | `array` | | Obligatoriu. Elemente cu `title`, `url`, `attributes`, `in_active_trail`, `below` (sub-elemente). |
| `menu_variant` | `string` | `horizontal` | `horizontal` sau `vertical`. |
| `menu_tag_nav` | `boolean` | `false` | Dacă e `true`, lista e învelită într-un `<nav>` care primește clasele și atributele componentei. |
| `menu_uc` | `array` | `[]` | Clase utilitare suplimentare (de ex. `sidebar-menu` pentru bara laterală). |
| `menu_att` | `Attribute` | `null` | Atribute HTML pentru listă (sau pentru `<nav>`). |

## Exemplu Twig

```twig
{% include "mud_egov:menu" with {
  menu_variant: 'vertical',
  menu_items: items,
  menu_att: attributes,
} %}
```

Bara laterală:

```twig
{% include "mud_egov:menu" with {
  menu_items: content['#items'],
  menu_variant: 'vertical',
  menu_uc: ['sidebar-menu'],
} %}
```

## Variabile CSS publice

Goale implicit; se setează într-un context anume (nivelul 3 de suprascriere).

| Variabilă | Ce controlează |
|---|---|
| `--menu_d`, `--menu_f-d`, `--menu_gap` | afișare, direcție și spațiu între elemente |
| `--menu_bg`, `--menu_b-r`, `--menu_p-b`, `--menu_p-i`, `--menu_m` | fundal, rotunjire, padding și margine ale listei |
| `--menu_ul_m`, `--menu_ul_p-b`, `--menu_ul_p-i` | margine și padding ale sub-listelor |
| `--menu_item_c`, `--menu_item_bg`, `--menu_item_b-r` | culoare, fundal și rotunjire ale `<li>` |
| `--menu_link_c` (`_h`, `_a`, `_s`) | culoarea legăturii: normal, hover, active, selectat (`.is-active`) |
| `--menu_link_bg` (`_h`, `_a`, `_s`) | fundalul legăturii, pe aceleași stări |
| `--menu_link_d`, `--menu_link_t-d`, `--menu_link_b-r`, `--menu_link_p-b`, `--menu_link_p-i` | afișare, subliniere, rotunjire și padding ale legăturii |
| `--menu_link_trail_bg`, `--menu_link_trail_b-c`, `--menu_link_trail_c` | doar în `.sidebar-menu`: fundal, bordură și culoare pentru legătura din traseul activ |

## Accessibility

- Lista folosește `<ul>`/`<li>` și legături native, deci e navigabilă integral din tastatură.
- Pentru un meniu care e punct de navigare (nu doar o listă), folosește `menu_tag_nav: true` și dă `<nav>`-ului un `aria-label` prin `menu_att`.
- Focusul vizibil este cel global din `reboot.css` (contur pe `:focus-visible`); componenta nu îl elimină.
- Legătura paginii curente primește clasa `is-active` de la Drupal; starea ei nu depinde numai de culoare când e folosită varianta `.sidebar-menu` (fundal și bordură pe traseul activ).
