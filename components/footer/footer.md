---
title: Footer
group: Layout
version: 1.1.0
css_prefix: footer
---


# Footer

Subsolul site-ului: o grilă cu trei regiuni (stânga, centru, dreapta), o bandă de mijloc și o bară de jos. Fiecare secțiune apare numai dacă are conținut, din slot sau din regiunea Drupal corespunzătoare.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `footer_copyright_text` | `string` | `© United Nations Environment Programme` | Text de copyright (declarat în schemă; șablonul nu îl afișează încă). |
| `footer_uc` | `array` | `[]` | Clase utilitare pentru elementul `<footer>`. |
| `footer_att` | `Attribute` | `null` | Atribute HTML pentru elementul `<footer>`. |

## Slots

| Slot | Regiune Drupal de rezervă | Descriere |
|---|---|---|
| `slot_footer_left` | `page.footer_left` | Coloana din stânga a grilei principale. |
| `slot_footer` | `page.footer` | Coloana centrală (navigarea principală). |
| `slot_footer_right` | `page.footer_right` | Coloana din dreapta. |
| `slot_footer_middle` | `page.footer_middle` | Banda de mijloc, cu linie de separare sus. |
| `slot_footer_bottom` | `page.footer_bottom` | Bara de jos (copyright, linkuri legale). |

Grila principală (`.grid-footer`) apare dacă cel puțin unul dintre `slot_footer_left`, `slot_footer`, `slot_footer_right` sau regiunea lui are conținut. Layoutul se adaptează la lățimea containerului `body`: o coloană până la 576px, două coloane până la 1248px, trei de la 1248px.

## Exemplu

```twig
{# Regiunile paginii (page.footer_*) #}
{% include 'mud_egov:footer' %}

{# Cu sloturi #}
{% embed 'mud_egov:footer' with { footer_uc: ['my-footer'] } %}
  {% block slot_footer %}{{ footer_nav }}{% endblock %}
  {% block slot_footer_bottom %}<p>© 2026</p>{% endblock %}
{% endembed %}
```

## Variabile CSS publice

Goale implicit; setează-le într-un context anume.

| Variabilă | Implicit | Descriere |
|---|---|---|
| `--footer_c` | `--footer-container-color` | Culoarea textului. |
| `--footer_f-s` | `inherit` | Dimensiunea fontului. |
| `--footer_l-h` | `inherit` | Înălțimea liniei. |
| `--footer_p-b` | `--spacing-40` | Spațiul de deasupra subsolului. |
| `--footer_grid_p-b` | `--spacing-32` | Spațiul de sub grila principală. |
| `--footer_grid_gap` | `--spacing-48 --spacing-24` | Spațiul dintre regiunile grilei principale. |
| `--footer_nav_gap` | `--spacing-48 --spacing-24` | Spațiul dintre navigările din regiunea centrală. |
| `--footer_middle_gap` | `--spacing-48` | Spațiul dintre elementele benzii de mijloc. |
| `--footer_middle_p-b` | `--spacing-32` | Padding vertical al benzii de mijloc. |
| `--footer_bottom_gap` | `--spacing-20` | Spațiul dintre elementele barei de jos. |
| `--footer_bottom_p-b` | `--spacing-12` | Padding vertical al barei de jos. |
| `--footer_social_gap` | `--spacing-24` | Spațiul dintre linkurile sociale. |
| `--footer_logos_gap` | `--spacing-32` | Spațiul dintre logo-urile din paragraful de imagini SVG. |
| `--footer_contact_gap` | `--spacing-12` | Spațiul din blocul de contact. |
| `--footer_pay_p-b` | `--spacing-24 --spacing-16` | Padding vertical al textului din blocul de opțiuni de plată. |
| `--footer_middle_b-c` | `--footer-divider-color` | Culoarea liniei de separare a benzii de mijloc. |
| `--footer_pay_bg` | `--color-background-base-default` | Fundalul logo-urilor de plată (Visa, Mastercard). |

## Accessibility

- Element semantic `<footer>` (landmark `contentinfo`).
- Ordinea din DOM urmează ordinea vizuală pe lățimi mici; pe lățimi medii regiunile se reordonează doar cu `grid-area`, deci tastatura parcurge stânga, centru, dreapta.
- Linkurile și titlurile din blocuri vin din blocurile Drupal; textul linkurilor trebuie să descrie destinația.
- Culoarea textului vine din `--footer-container-color`, cu contrast peste 4,5:1 pe fundalul paginii.
