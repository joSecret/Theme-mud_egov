---
title: Section main with sidebar
group: Drupal
version: 1.1.0
css_prefix: sms
---


# Section main with sidebar

Elementul `<main>` al paginii cu bară laterală stângă (`page.sidebar`) și dreaptă (`page.sidebar_right`) opționale, alături de `page.content`. Layout-ul depinde de lățimea containerului: sub 720px totul stă pe o coloană și bara stângă este ascunsă; de la 720px apare coloana laterală (348px sau 352px).

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `section_main_sidebar_container` | `boolean\|null` | `true` | Adaugă clasa `wrapper` pe `<main>`. |
| `section_main_sidebar_uc` | `array` | `[]` | Clase utilitare pe `<main>`. |
| `section_main_sidebar_main_uc` | `array` | `[]` | Clase utilitare pe secțiunea interioară. |
| `section_main_sidebar_left_uc`, `section_main_sidebar_right_uc` | `array` | `[]` | Clase utilitare pe barele laterale. |
| `section_main_sidebar_att`, `_main_att`, `_content_att`, `_left_att`, `_right_att` | `Attribute` | `null` | Atribute HTML (prefix `section_main_sidebar`). |

Sloturi: `slot_highlighted`, `slot_content`, `slot_sidebar_left`, `slot_sidebar_right`, `slot_bottom`.

## Variabile CSS publice

Goale implicit. Prefix: `--sms_`.

| Variabilă | Implicit | Descriere |
|---|---|---|
| `--sms_p-b`, `--sms_p-i` | `--spacing-32`, `--spacing-0` | Padding-ul secțiunii. |
| `--sms_w_g-t-c` | `1fr` / `1fr 348px` / `352px 1fr` | Coloanele grilei. |
| `--sms_w_col_gap`, `--sms_w_row_gap` | `clamp(24px, 4vw, 74px)`, `--spacing-20` | Spațiile dintre coloane și rânduri. |
| `--sms_left_d` | `none` / `block` | Afișarea barei stângi. |
| `--sms_left_b-w`, `--sms_left_b-c`, `--sms_left_b-r` | `--border-width-1`, `--color-border-base-default`, `--border-radius-16` | Bordura barei stângi. |
| `--sms_left_inset` | înălțimea navbar-ului + `--sms_p-b` | Poziția sticky a barei stângi. |
| `--sms_title_m-b` | `--spacing-24` | Spațiul de sub titlul paginii. |

## Exemplu

```twig
{% include 'mud_egov:section-main-sidebar' with {
  section_main_sidebar_container: true,
} %}
```

## Accessibility

- Un singur `<main role="main">` pe pagină, cu ținta `#main-content` (`tabindex="-1"`) pentru „Salt la conținut".
- Ordinea în DOM este bara stângă, conținutul, bara dreaptă; verifică ordinea de citire și de tabulare.
- Barele laterale goale sunt ascunse (`display: none`), deci nu apar în arborele de accesibilitate.
