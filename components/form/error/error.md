---
title: Error
group: Forms
version: 1.1.0
css_prefix: error
---

# Error

Mesaj de eroare de validare pentru un câmp de formular. Are `role="alert"`, deci apariția lui este anunțată de cititoarele de ecran, și începe cu pictograma ⚠.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `error_message` | string | (obligatoriu) | Textul erorii |
| `error_id` | string | `null` | Atributul `id`, folosit în `aria-describedby` al câmpului |
| `error_uc` | array | `[]` | Clase utilitare adăugate pe element (ex. `has-type_critical`, `has-type_warning`) |
| `error_att` | Attribute | `null` | Atribute HTML pe element |

Componenta nu are sloturi.

## Exemplu

```twig
{% include 'mud_egov:error' with {
  error_message: 'Adresa de e-mail nu este validă.',
  error_id: 'edit-mail-error',
  error_uc: ['has-type_critical'],
} only %}
```

## Variabile CSS publice

Goale implicit; se setează doar într-un context anume.

- `--error_c`, `--error_m-b`, `--error_f-s`, `--error_l-h`, `--error_anim`.
- În interiorul unui `.form-item`: `--error_item_m-b`.
- Variante: `--error_critical_c`, `--error_critical_f-w`, `--error_warning_c`.

Implicit, textul moștenește culoarea din context.

## Accessibility

- `role="alert"` face ca mesajul să fie citit imediat ce apare; câmpul invalid trebuie să trimită la `error_id` prin `aria-describedby` și să aibă `aria-invalid="true"`.
- Eroarea nu se transmite doar prin culoare: mesajul are text și pictograma ⚠.
- Animația de apariție este dezactivată la `prefers-reduced-motion: reduce`.
