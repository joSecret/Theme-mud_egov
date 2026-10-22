---
title: Breadcrumb
group: Navigation
version: 1.1.0
css_prefix: breadcrumb
---

Breadcrumb: traseul paginii curente în ierarhia site-ului. Randează un element de navigare (`nav` implicit) cu un titlu ascuns vizual și o listă ordonată; separatorul „›” dintre elemente vine din CSS, iar ultimul element (fără `url`) e evidențiat și trunchiat cu `…` peste 250px.

## Usage

```twig
{% include 'mud_egov:breadcrumb' with {
  breadcrumb_items: [
    { text: 'Acasă', url: '/' },
    { text: 'Servicii', url: '/servicii' },
    { text: 'Pagina curentă', url: null },
  ],
} only %}
```

Fără separator: `breadcrumb_hide_icons: true`. Titlul ascuns pentru cititoarele de ecran: `breadcrumb_title`.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `breadcrumb_items` | array | `[]` | `[{text, url?}]`; fără `url` elementul e text simplu (pagina curentă) |
| `breadcrumb_tag` | string\|null | `nav` | Elementul rădăcină (`nav` sau `div`) |
| `breadcrumb_title` | string\|null | `Breadcrumb` | Titlul ascuns vizual (`h2`) |
| `breadcrumb_hide_icons` | boolean | `false` | Ascunde separatorul dintre elemente |
| `breadcrumb_uc` | array | `[]` | Clase utilitare pe rădăcină |
| `breadcrumb_list_uc` | array | `[]` | Clase utilitare pe `<ol>` |
| `breadcrumb_item_uc` | array | `[]` | Clase utilitare pe fiecare `<li>` |
| `breadcrumb_att` | Attribute | - | Atribute pe rădăcină |
| `breadcrumb_list_att` | Attribute | - | Atribute pe `<ol>` |

## Slots

| Slot | Description |
|------|-------------|
| `breadcrumb_content` | Înlocuiește lista implicită |

## CSS variables (override excepțional)

Goale implicit; valorile default vin din `css/defaults/navigation.css` și tokenuri.

| Variabilă | Efect |
|-----------|-------|
| `--breadcrumb_c` | Culoarea textului |
| `--breadcrumb_f-s` | Mărimea fontului |
| `--breadcrumb_m-b` | Marginea de jos a rădăcinii |
| `--breadcrumb_ol_gap` / `_ol_m` / `_ol_p` | Spațiul dintre elemente, marginea și padding-ul listei |
| `--breadcrumb_li_m-i` | Distanța dintre element și separator |
| `--breadcrumb_li_mx-w` | Lățimea maximă a ultimului element |
| `--breadcrumb_sep_c` | Culoarea separatorului |
| `--breadcrumb_last_c` | Culoarea ultimului element |
| `--breadcrumb_link_c` / `--breadcrumb_link_t-d` | Culoarea și sublinierea linkurilor (implicit culoarea textului, fără subliniere) |

## Accessibility

- Rădăcina e `nav` cu `role="navigation"` și `aria-labelledby` către un `h2` ascuns vizual (`breadcrumb_title`).
- Elementele sunt într-o listă ordonată `<ol>`, deci cititoarele de ecran anunță poziția și numărul de elemente.
- Separatorul e conținut CSS (`::after`) și nu e citit; ultimul element e text simplu, nu link.
- Linkurile sunt focusabile din tastatură și folosesc inelul de focus implicit din `reboot.css`.
