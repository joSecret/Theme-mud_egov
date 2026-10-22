---
title: Description
group: Forms
version: 1.1.0
css_prefix: description
---

# Description

Text de ajutor pentru un câmp de formular, afișat sub sau deasupra câmpului. Se leagă de câmp prin `aria-describedby`, folosind `description_id`.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `description_text` | string | (obligatoriu) | Textul de ajutor |
| `description_display` | string | `visible` | `visible` sau `invisible` (ascuns vizual, dar citit de cititoarele de ecran) |
| `description_id` | string | `null` | Atributul `id`, folosit în `aria-describedby` al câmpului |
| `description_uc` | array | `[]` | Clase utilitare adăugate pe element |
| `description_att` | Attribute | `null` | Atribute HTML pe element |

Componenta nu are sloturi.

## Exemplu

```twig
{% include 'mud_egov:description' with {
  description_text: 'Folosește adresa de e-mail din contul gov.md.',
  description_id: 'edit-mail-description',
} only %}
```

## Variabile CSS publice

Goale implicit; se setează doar într-un context anume.

- `--description_d`, `--description_m-b`, `--description_f-s`, `--description_c`, `--description_l-h`.
- În interiorul unui `.form-item`: `--description_item_m-b`.

Implicit, textul moștenește culoarea din context.

## Accessibility

- Câmpul asociat trebuie să trimită la `description_id` prin `aria-describedby`.
- Varianta `invisible` ascunde textul doar vizual (`.visually-hidden`); rămâne disponibil pentru tehnologiile asistive.
- Textul trebuie să aibă contrast minim 4,5:1 față de fundal.
