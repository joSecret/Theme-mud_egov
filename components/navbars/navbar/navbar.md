---
title: Navbar
group: Navigation
version: 1.1.0
css_prefix: navbar
---

# Navbar

Bara de sus a paginii. Șablonul nu primește conținut prin sloturi: își ia regiunile direct din variabila `page` și le pune în pozițiile din grilă (`page.branding`, `page.header_mobil`, `page.nav_search`, `page.nav_main`, `page.nav_additional`, `page.header`, `page.header_notifications`).

- **Mobil** (container `body` de cel mult 768px): branding și butonul de meniu pe primul rând; meniul principal, căutarea și zona utilizatorului sunt într-un panou care se deschide din butonul `#js-nav-mob-toggle`.
- **Desktop**: o singură bară. Când meniul principal nu încape, `navbar.js` marchează regiunea cu `js_long-main-menu`, iar meniul trece pe un rând propriu sub celelalte elemente.

Bara este învelită într-un `<div class="border_b">`, care devine lipicios (sticky) în partea de sus a paginii.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `navbar_att` | `Attribute` | `null` | Atribute HTML pentru `.c--navbar`. |
| `navbar_uc` | `array` | `[]` | Clase utilitare pentru `.c--navbar`. |
| `navbar_branding_att`, `navbar_nav_att`, `navbar_search_att` | `Attribute` | `null` | Declarate în schemă, dar neutilizate încă de șablon. |
| `navbar_branding_uc`, `navbar_nav_uc`, `navbar_search_uc` | `array` | `[]` | Declarate în schemă, dar neutilizate încă de șablon. |

## Exemplu Twig

```twig
{% include "mud_egov:navbar" %}
```

`page` trebuie să fie în contextul șablonului (cum e în `page.html.twig`).

## Variabile CSS publice

Goale implicit; se setează într-un context anume (nivelul 3 de suprascriere).

| Variabilă | Ce controlează |
|---|---|
| `--navbar_bg`, `--navbar_h`, `--navbar_w`, `--navbar_p-i` | fundal, înălțime, lățime (desktop) și padding inline |
| `--navbar_g-t-c`, `--navbar_rows_h`, `--navbar_col_gap`, `--navbar_row_gap` | coloanele, rândurile și spațiile grilei (valoarea implicită depinde de ecran) |
| `--navbar_branding_w`, `--navbar_branding_p-i` | lățimea coloanei de branding (desktop) și padding-ul brandingului (mobil) |
| `--navbar_mob_d`, `--navbar_mob_gap` | zona din dreapta a barei mobile |
| `--navbar_main_bg` | fundalul panoului meniului principal |
| `--navbar_additional_*`, `--navbar_header_*`, `--navbar_search_p`, `--navbar_menu_p-b` | spațieri ale regiunilor suplimentare, header, căutare și meniu pe rând propriu |
| `--navbar_trn` | tranziția panoului |
| `--navbar_border_b-c` | culoarea bordurii claselor `.border_b` și `.border_b-e` |

## Accessibility

- Butonul de meniu mobil este un `<button>` real (`mud_egov:button`), cu `aria_expanded` actualizat din tema de buton și etichetă „Show main menu”.
- Regiunile păstrează ordinea din DOM (branding, meniu, căutare, utilizator), deci ordinea de tab este cea vizuală.
- Cât timp panoul mobil e deschis, scroll-ul paginii este blocat (`body:has(...)`), iar panoul își păstrează propriul scroll (`overscroll-behavior: contain`).
- Tranzițiile grilei și ale panoului sunt dezactivate la `prefers-reduced-motion: reduce`.
