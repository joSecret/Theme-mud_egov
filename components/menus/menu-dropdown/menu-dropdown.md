---
title: Menu Dropdown
group: Navigation
version: 1.1.0
css_prefix: menu-dropdown
---

# Menu Dropdown

Meniu derulant (dropdown / meniu contextual): un buton de declanșare și un panou plutitor cu elemente. Poate fi contextual (acțiuni) sau de selecție (listă cu o singură alegere).

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `menu_dropdown_items` | `array` | `[]` | Elemente: `{label, url, icon, disabled, divider}`. Cu `url` devin legături, fără `url` butoane. |
| `menu_dropdown_trigger_label` | `string\|null` | `null` | Eticheta butonului de declanșare implicit. |
| `menu_dropdown_type` | `string\|null` | `contextual` | `contextual` (rol ARIA `menu`) sau `selection` (rol `listbox`). |
| `menu_dropdown_position` | `string\|null` | `bottom-start` | `bottom-start`, `bottom-end`, `top-start` sau `top-end`. |
| `menu_dropdown_open` | `boolean` | `false` | Starea inițială. |
| `menu_dropdown_uc` | `array` | `[]` | Clase utilitare suplimentare. |
| `menu_dropdown_att` | `Attribute\|null` | `null` | Atribute HTML pentru containerul componentei. |

## Slots

| Slot | Descriere |
|---|---|
| `slot_trigger` | Element de declanșare propriu; trebuie să aibă atributul `data-menu-trigger`. |

## Exemplu Twig

```twig
{% include 'mud_egov:menu-dropdown' with {
  menu_dropdown_trigger_label: 'Opțiuni',
  menu_dropdown_position: 'bottom-start',
  menu_dropdown_items: [
    { label: 'Editează', url: '/edit' },
    { label: 'Duplică', url: '/duplicate' },
    { divider: true },
    { label: 'Șterge', disabled: true },
  ],
} %}
```

Declanșator propriu:

```twig
{% embed 'mud_egov:menu-dropdown' with {
  menu_dropdown_items: [{ label: 'Profil' }, { label: 'Deconectare' }],
} %}
  {% block slot_trigger %}
    <button type="button" data-menu-trigger aria-haspopup="menu" aria-expanded="false">Cont</button>
  {% endblock %}
{% endembed %}
```

## Variabile CSS publice

Goale implicit; se setează într-un context anume (nivelul 3 de suprascriere). Valorile implicite ale panoului vin din `--menu-panel-*` (MUD).

| Variabilă | Ce controlează |
|---|---|
| `--menu-dropdown_panel_bg`, `_panel_b-c`, `_panel_b-w`, `_panel_b-r`, `_panel_bs` | fundal, culoare, grosime și rotunjire de bordură, umbră ale panoului |
| `--menu-dropdown_panel_p`, `_panel_gap`, `_panel_m-w`, `_panel_mx-h`, `_panel_z`, `_panel_trn` | padding, spațiu între elemente, lățime minimă, înălțime maximă, z-index, tranziție |
| `--menu-dropdown_item_p-b`, `_item_p-i`, `_item_gap`, `_item_b-r`, `_item_icon_size`, `_item_trn` | dimensiuni și tranziția elementelor |
| `--menu-dropdown_item_c`, `_item_c_d` | culoarea elementului: normal și dezactivat |
| `--menu-dropdown_item_bg`, `_item_bg_h`, `_item_bg_f` | fundalul elementului: normal, hover, focus |
| `--menu-dropdown_trigger_gap`, `--menu-dropdown_trigger_icon_trn` | butonul implicit: spațiu și tranziția săgeții |
| `--menu-dropdown_divider_m-b` | marginea separatorului |

## Accessibility

- Declanșatorul are `aria-haspopup`, `aria-expanded`  și `aria-controls` spre panou; panoul are rol `menu` sau `listbox`, iar elementele `menuitem` sau `option`.
- Comportamentul interactiv (deschidere, tastatură, Escape, click în afară) nu e implementat încă: componenta are doar marcajul și stilurile. Se adaugă la alinierea pe modelul `button`.
- Elementele dezactivate (`disabled: true`) au `aria-disabled` și sunt sărite la navigarea cu săgeți.
- Focusul vizibil folosește inelul MUD (`--focus-ring-color-outer`) în interiorul elementului, iar tranzițiile sunt dezactivate la `prefers-reduced-motion: reduce`.
