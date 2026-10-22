---
title: Section main
group: Drupal
version: 1.1.0
css_prefix: section-main
---


# Section main

Elementul `<main>` al paginii, fără bare laterale: hero, zonă evidențiată (`page.highlighted`), conținut (`page.content`) și zonă de jos (`page.content_bottom`). Conține ținta linkului „Salt la conținut" (`#main-content`).

Componenta nu are stil propriu; aspectul vine din clasele utilitare și din temă.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `section_main_container` | `boolean\|null` | `false` | Adaugă clasa `w-content` pe secțiunea interioară. |
| `section_main_uc` | `array` | `[]` | Clase utilitare pe `<main>`. |
| `section_main_main_uc` | `array` | `[]` | Clase utilitare pe secțiunea interioară. |
| `section_main_att` | `Attribute` | `null` | Atribute pe `<main>`. |
| `section_main_main_att` | `Attribute` | `null` | Atribute pe secțiunea interioară. |

Sloturi: `slot_highlighted`, `slot_content`, `slot_bottom`.

## Exemplu

```twig
{% include 'mud_egov:section-main' with {
  section_main_container: true,
} %}
```

## Accessibility

- Un singur `<main role="main">` pe pagină; conține ținta `#main-content` (`tabindex="-1"`) pentru linkul „Salt la conținut".
- Zona de jos este o `<section>` separată, randată numai când are conținut.
