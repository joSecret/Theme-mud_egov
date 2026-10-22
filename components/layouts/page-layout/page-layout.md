---
title: Page layout
group: Layout
version: 1.1.0
css_prefix: page-layout
---


# Page layout

Structura paginii pe toată înălțimea ferestrei (`min-height: 100dvh`): regiunea de sus, antet (`mud_egov:navbar`), zonă principală (`mud_egov:section-main-sidebar`), subsol (`mud_egov:footer`) și regiunea fixă de jos (`.region--bottom-fixed`, folosită pentru notificări).

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `page_layout_main_container` | `boolean\|null` | `true` | Transmis zonei principale ca `section_main_container`. |
| `page_layout_padding_block` | `number\|null` | `null` | Scrie inline `--_pl_main_p-b` (în px); nu este consumată de CSS-ul actual. |
| `page_layout_uc` | `array` | `[]` | Clase utilitare. |
| `page_layout_att` | `Attribute` | `null` | Atribute HTML. |

Sloturi: `slot_header`, `slot_main`, `slot_footer`.

## Variabile CSS publice

Goale implicit. Prefix: `--page-layout_`.

| Variabilă | Implicit | Descriere |
|---|---|---|
| `--page-layout_m-h` | `100dvh` | Înălțimea minimă a paginii. |
| `--page-layout_bottom-fixed_gap` | `--spacing-16` | Padding și spațiul dintre notificări. |
| `--page-layout_bottom-fixed_p-b`, `--page-layout_bottom-fixed_p-i` | `--page-layout_bottom-fixed_gap` | Padding-ul regiunii fixe. |
| `--page-layout_bottom-fixed_w` | `400px` | Lățimea regiunii fixe. |

## Exemplu

```twig
{% embed 'mud_egov:page-layout' %}
  {% block slot_main %}
    {% include 'mud_egov:section-main' %}
  {% endblock %}
{% endembed %}
```

## Accessibility

- Zona principală este singurul `<main>` al paginii; antetul și subsolul rămân repere separate.
- Regiunea fixă de jos acoperă conținutul din colțul din dreapta; notificările din ea trebuie să poată fi închise din tastatură.
