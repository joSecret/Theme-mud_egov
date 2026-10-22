---
title: Error Page
group: Drupal
version: 1.1.0
css_prefix: error-page
---

# Error Page

Full-page error display used for HTTP error states (404, 403, 500). Renders a title, optional description, error code, CTA actions, and an optional illustration on the right.

## Usage

```twig
{% embed 'mud_egov:error-page' with {
  error_page_title: 'Pagina nu a fost găsită',
  error_page_description: 'Se pare că linkul nu funcționează sau pagina nu mai există.',
  error_page_code: 404,
} %}
  {% block slot_ctas %}
    {% include 'mud_egov:button' with { label: 'Pagina principală' } only %}
  {% endblock %}
{% endembed %}
```

## With illustration slot

```twig
{% embed 'mud_egov:error-page' with {
  error_page_title: 'Pagina nu a fost găsită',
  error_page_code: 404,
} %}
  {% block slot_illustration %}
    <img src="/themes/custom/egov/images/404.png" alt="" width="320" height="320">
  {% endblock %}
{% endembed %}
```

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `error_page_title` | `string` | `Pagina nu a fost găsită` | Titlul (obligatoriu), randat ca `h1`. |
| `error_page_description` | `string\|null` | `null` | Text explicativ. Se afișează doar când slotul `slot_ctas` nu e gol. |
| `error_page_code` | `string\|int\|null` | `null` | Codul HTTP, afișat ca „Error Code: X". |
| `error_page_primary_label` | `string\|null` | `null` | Eticheta acțiunii principale. |
| `error_page_secondary_label` | `string\|null` | `null` | Eticheta linkului secundar. |
| `error_page_illustration` | `string\|null` | `null` | HTML/SVG pentru ilustrația din dreapta. |
| `error_page_uc` | `array` | `[]` | Clase utilitare. |
| `error_page_att` | `Attribute` | `null` | Atribute HTML. |

Sloturi: `slot_ctas`, `slot_links`, `slot_illustration`.

## Variabile CSS publice

Goale implicit. Prefix: `--error-page_`.

| Variabilă | Implicit | Descriere |
|---|---|---|
| `--error-page_g-t-c` | `532px 456px` | Coloanele grilei. |
| `--error-page_gap` | `--spacing-32` | Spațiul dintre coloane. |
| `--error-page_p-b` | `--spacing-40` | Padding vertical. |
| `--error-page_title_m-b` | `--spacing-32` | Spațiul de sub titlu. |
| `--error-page_description_m-b`, `--error-page_description_f-s` | `--spacing-24`, `--font-size-18` | Descrierea. |
| `--error-page_code_m-b` | `--spacing-48` | Spațiul de sub cod. |
| `--error-page_ctas_m-b` | `--spacing-16` | Spațiul de sub butoane. |

## Accessibility

- Titlul este singurul `h1` al paginii de eroare.
- Ilustrația este decorativă (`aria-hidden="true"`); informația importantă trebuie să fie în text.
- Acțiunile din `slot_ctas` și `slot_links` sunt linkuri sau butoane native, accesibile din tastatură.
