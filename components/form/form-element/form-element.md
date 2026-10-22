---
title: Form Element
group: Forms
version: 1.1.0
css_prefix: form-element
---

# Form Element

Înveliș complet pentru un câmp de formular: orchestrează eticheta (`label`), câmpul (slot), descrierea (`description`) și eroarea (`error`), plus prefix și sufix. Este folosit de șablonul Drupal `templates/form/form-element.html.twig`.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `form_element_type` | string | `null` | Tipul elementului (pentru clasele CSS) |
| `form_element_name` | string | `null` | Numele câmpului (pentru clasele CSS) |
| `form_element_id` | string | `null` | `id`-ul câmpului; leagă eticheta, descrierea și eroarea |
| `form_element_label` | string | `null` | Textul etichetei |
| `form_element_label_display` | string | `before` | `before`, `after`, `invisible`, `inline` sau `none` |
| `form_element_required` | boolean | `false` | Afișează simbolul de câmp obligatoriu |
| `form_element_description` | string | `null` | Text de ajutor |
| `form_element_description_display` | string | `after` | `before`, `after`, `invisible` sau `none` |
| `form_element_description_att` | Attribute | `null` | Atribute HTML pentru descriere |
| `form_element_error` | string | `null` | Mesajul de eroare |
| `form_element_prefix` | string | `null` | Conținut afișat înaintea câmpului |
| `form_element_suffix` | string | `null` | Conținut afișat după câmp |
| `form_element_disabled` | boolean | `false` | Adaugă clasa `form-disabled` |
| `form_element_uc` | array | `[]` | Clase utilitare adăugate pe înveliș |
| `form_element_att` | Attribute | `null` | Atribute HTML pe înveliș |

## Sloturi

| Slot | Descriere |
|---|---|
| `form_element_field` | Câmpul propriu-zis (input, select, textarea etc.) |

## Exemplu

```twig
{% embed 'mud_egov:form-element' with {
  form_element_type: 'textfield',
  form_element_label: 'Nume',
  form_element_id: 'edit-name',
  form_element_description: 'Numele complet, ca în actul de identitate.',
} %}
  {% block form_element_field %}
    <input id="edit-name" type="text" aria-describedby="edit-name-description">
  {% endblock %}
{% endembed %}
```

## Variabile CSS publice

Goale implicit; se setează doar într-un context anume: `--form-element_d`, `--form-element_gap`.

## Accessibility

- Eticheta este legată de câmp prin `for`/`id` (`form_element_id`); descrierea și eroarea primesc `id`-urile `<id>-description` și `<id>-error`, pe care câmpul le referă prin `aria-describedby`.
- Eroarea are `role="alert"`, deci este anunțată când apare.
- Eticheta cu `form_element_label_display: invisible` rămâne disponibilă pentru cititoarele de ecran.
