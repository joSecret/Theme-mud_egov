---
title: Label
group: Forms
version: 1.1.0
css_prefix: label
---

# Label

Eticheta unui câmp de formular, folosită singură sau inclusă de `form-element` și `select`. Poate afișa un simbol pentru câmpurile obligatorii.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `label_text` | string | (obligatoriu) | Textul vizibil al etichetei |
| `label_for` | string | `null` | `id`-ul câmpului asociat (atributul `for`) |
| `label_required` | boolean | `false` | Afișează simbolul de câmp obligatoriu și adaugă clasa `is-required` |
| `label_required_symbol` | string | `*` | Simbolul afișat pentru câmpurile obligatorii |
| `label_uc` | array | `[]` | Clase utilitare adăugate pe `<label>` |
| `label_att` | Attribute | `null` | Atribute HTML pe `<label>` |

Componenta nu are sloturi.

## Exemplu

```twig
{% include 'mud_egov:label' with {
  label_text: 'Adresa de e-mail',
  label_for: 'edit-mail',
  label_required: true,
} only %}
```

## Variabile CSS publice

Goale implicit; se setează doar într-un context anume.

- Etichetă: `--label_c`, `--label_d`, `--label_f-s`, `--label_f-w`, `--label_m-b`.
- Simbol obligatoriu: `--label_required_c`, `--label_required_m-i`.

Implicit, eticheta moștenește culoarea, mărimea și grosimea fontului din context.

## Accessibility

- Folosește elementul nativ `<label>`; legătura cu câmpul se face cu `label_for`, deci se dă și câmpului `id`-ul corespunzător.
- Simbolul de câmp obligatoriu are `aria-hidden="true"`: starea obligatorie trebuie transmisă și câmpului (`required` sau `aria-required`).
- Culoarea simbolului trebuie să păstreze contrastul minim 4,5:1 față de fundal.
