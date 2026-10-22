---
title: Image
group: Content
version: 1.1.0
css_prefix: image
---

# Image

Element `<img>` simplu, cu atributele standard ale componentelor. Se folosește când șablonul are doar URL-ul și textul alternativ (de exemplu imaginea de copertă a unui `card`), nu un câmp imagine Drupal.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `image_src` | `string` | `''` | Valoarea atributului `src`. |
| `image_alt` | `string` | `''` | Textul alternativ. Gol pentru imagini decorative. |
| `image_uc` | `array` | `[]` | Clase utilitare. |
| `image_att` | `Attribute` | `null` | Atribute HTML pentru elementul `<img>`. |

## Exemplu

```twig
{% include 'mud_egov:image' with {
  image_src: file_url('themes/custom/mud_egov/img/cover.jpg'),
  image_alt: 'Clădirea Guvernului',
  image_att: create_attribute().addClass('img-fluid'),
} %}
```

## Variabile CSS publice

| Variabilă | Implicit | Descriere |
|---|---|---|
| `--image_b-r` | `--spacing-0` | Raza colțurilor imaginii (stilul se aplică cu specificitate zero). |

## Accessibility

- `alt` este întotdeauna prezent în HTML; pentru imagini decorative rămâne gol (`alt=""`), iar cititoarele de ecran o ignoră.
- Pentru imagini cu informație, `image_alt` descrie conținutul sau funcția imaginii.
- Componenta nu adaugă text în imagine și nu ascunde conținutul de tehnologiile asistive.
