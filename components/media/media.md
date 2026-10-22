---
title: Media
group: Content
version: 1.1.0
css_prefix: media
---

# Media

Înveliș pentru o entitate media Drupal (șablonul `templates/system/media.html.twig`). Conține linkurile contextuale și conținutul media și dă imaginilor spațiu în jur, în funcție de aliniere (`has-align_left`, `has-align_right`, `has-align_center`).

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `media_uc` | `array` | `[]` | Clase utilitare. |
| `media_att` | `Attribute` | `null` | Atribute HTML pentru elementul rădăcină. |

## Slots

| Slot | Descriere |
|---|---|
| `slot_addons` | Linkuri contextuale și alte elemente auxiliare. |
| `slot_content` | Conținutul media. |

## Exemplu

```twig
{% embed 'mud_egov:media' with { media_att: attributes } %}
  {% block slot_addons %}{{ title_suffix.contextual_links }}{% endblock %}
  {% block slot_content %}{{ content }}{% endblock %}
{% endembed %}
```

## Comportament

Clasele de aliniere (`has-align_*`) vin din CKEditor. `media.js` observă lățimea câmpului `.field--name-field-body`: când imaginea ocupă aproape toată lățimea câmpului, adaugă `is-full-width` pe `.c--media` și spațiul lateral dispare.

## Variabile CSS publice

Goale implicit; se setează într-un context anume.

| Variabilă | Implicit | Descriere |
|---|---|---|
| `--media_gap` | `--spacing-20` | Spațiul vertical de sub imagine. |
| `--media_inline_gap` | `--media_gap` | Spațiul lateral al imaginilor aliniate stânga sau dreapta. |
| `--media_full_gap` | `--spacing-0` | Spațiul lateral când imaginea ocupă toată lățimea (`is-full-width`). |
| `--media_img_p-b` | `0 --media_gap` | Padding vertical al imaginii. |
| `--media_img_p-i` | `--spacing-0` | Padding orizontal al imaginii. |
| `--media_sibling_img_p-b` | `calc(--media_gap - --spacer) --media_gap` | Padding vertical când media urmează după un `<p>`. |
| `--media_left_img_p-i` | `0 --media_inline_gap` | Padding orizontal pentru `has-align_left`. |
| `--media_right_img_p-i` | `--media_inline_gap 0` | Padding orizontal pentru `has-align_right`. |

## Accessibility

- Imaginile păstrează atributul `alt` din Drupal; componenta nu îl modifică.
- Imaginea se micșorează la lățimea containerului (`max-width: 100%`), fără derulare orizontală la zoom.
- `media.js` doar comută o clasă CSS: nu afectează focusul, ordinea din DOM sau starea ARIA.
