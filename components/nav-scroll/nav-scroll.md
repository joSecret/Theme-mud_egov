---
title: Scroll Navigation
group: Navigation
version: 1.1.0
css_prefix: nav-scroll
---

Listă de navigare cu derulare orizontală: butoane înainte/înapoi, snap la elemente, centrarea automată a elementului activ și butoane ascunse când nu sunt necesare. Potrivită pentru meniuri cu taburi, filtre sau orice listă orizontală care nu încape pe lățime.

Se folosește cu `embed`, conținutul intră în blocul `slot_content`. Elementul activ e cel cu clasa `.active` sau cel care conține un `input:checked`.

## Usage

```twig
{% embed 'mud_egov:nav-scroll' %}
  {% block slot_content %}
    <a href="#s1" class="active">Secțiunea 1</a>
    <a href="#s2">Secțiunea 2</a>
    <a href="#s3">Secțiunea 3</a>
  {% endblock %}
{% endembed %}
```

Filtre cu radio:

```twig
{% embed 'mud_egov:nav-scroll' %}
  {% block slot_content %}
    <div class="form-item">
      <input type="radio" id="f-all" name="filter" value="all" checked>
      <label for="f-all">Toate</label>
    </div>
    <div class="form-item">
      <input type="radio" id="f-news" name="filter" value="news">
      <label for="f-news">Noutăți</label>
    </div>
  {% endblock %}
{% endembed %}
```

Fără butoane: `nav_scroll_navigation: false`. Butoane proprii: suprascrie blocurile `slot_btn_prev` și `slot_btn_next` (păstrează atributele `data-navScroll-prev` / `data-navScroll-next`).

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `nav_scroll_navigation` | boolean | `true` | Afișează butoanele înainte/înapoi |
| `nav_scroll_uc` | array | `[]` | Clase utilitare pe rădăcină |
| `nav_scroll_att` | Attribute | - | Atribute pe rădăcină |

## Slots

| Slot | Description |
|------|-------------|
| `slot_content` | Elementele listei (linkuri, butoane, `.form-item` cu radio) |
| `slot_btn_prev` | Butonul de derulare spre stânga |
| `slot_btn_next` | Butonul de derulare spre dreapta |

## CSS variables (override excepțional)

Goale implicit; valorile default vin din tokenuri.

| Variabilă | Efect |
|-----------|-------|
| `--nav-scroll_track_gap`, `--nav-scroll_track_p-i`, `--nav-scroll_track_b-b` | Spațiul dintre elemente, padding-ul listei (loc pentru butoane), bordura de jos |
| `--nav-scroll_btns_w`, `--nav-scroll_btns_b-r`, `--nav-scroll_btns_d`, `--nav-scroll_btns_inset` | Lățimea, raza, display-ul și poziția butoanelor |
| `--nav-scroll_btn_bg`, `--nav-scroll_btn_b`, `--nav-scroll_btn_o_d` | Fundal, bordură și opacitate (dezactivat) pentru butoane |
| `--nav-scroll_item_p`, `_item_bg`, `_item_c`, `_item_f-s`, `_item_f-w`, `_item_b`, `_item_b-r`, `_item_trn` | Elementele listei |
| `--nav-scroll_item_bg_s`, `--nav-scroll_item_c_s` | Elementul activ: fundal și culoare |

## JavaScript

`Drupal.behaviors.navScroll` (cu `once()`): derulează la elementul activ la încărcare și la schimbarea claselor (MutationObserver), activează/dezactivează butoanele la capete, ascunde butoanele când lista încape (clasa `is-no-buttons`). Pe ecrane tactile (`pointer: coarse`) butoanele sunt ascunse din CSS.

## Accessibility

- Elementele listei sunt linkuri, butoane sau radio native, deci focusabile și acționabile din tastatură; derularea nu depinde de butoane.
- Butoanele de derulare sunt `<button>` native; cel dezactivat la capăt are atributul `disabled`. Dacă le înlocuiești, adaugă etichete accesibile (`aria-label`).
- Atenție: la `.form-item` inputul radio e ascuns cu `display: none`, deci nu e focusabil din tastatură; pentru acces complet din tastatură preferă linkuri sau butoane.
- Tranziția elementelor este dezactivată în `prefers-reduced-motion: reduce`.
