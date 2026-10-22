---
title: Block
group: Drupal
version: 1.1.0
css_prefix: block
---

# Block

Wrapper pentru un bloc Drupal: etichetă (vizibilă sau doar pentru cititoare de ecran), descriere opțională și conținut. Tag-ul HTML al blocului și al etichetei se aleg din props.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `block_tag` | `string\|null` | `div` | `div`, `nav`, `section`, `article` sau `aside`. |
| `block_label_tag` | `string\|null` | `h3` | `h2`–`h6`. |
| `block_label_visible` | `boolean` | `true` | `false` ascunde eticheta vizual (`visually-hidden`). |
| `block_label` | `string\|null` | `label` | Textul etichetei. |
| `block_description` | `string\|null` | `description` | Descrierea, afișată sub etichetă. |
| `block_content` | `string\|null` | `content` | Conținutul blocului. |
| `block_uc`, `block_label_uc` | `array` | `[]` | Clase utilitare pentru bloc, respectiv etichetă. |
| `block_att`, `block_label_att` | `Attribute` | `null` | Atribute HTML pentru bloc, respectiv etichetă. |

Sloturi: `slot_label`, `slot_description`, `slot_content`.

## Variabile CSS publice

Goale implicit; se setează într-un context anume.

| Variabilă | Implicit | Descriere |
|---|---|---|
| `--block_c` | moștenit | Culoarea textului. |
| `--block_bg` | `transparent` | Fundalul. |
| `--block_p` | `--spacing-0` | Padding. |
| `--block_b-r` | `--border-radius-4` | Raza colțurilor. |
| `--block_f-s` | moștenit | Mărimea fontului. |
| `--block_trn` | `color 0.3s, background 0.3s` | Tranziția. |
| `--block_description_m-b` | `--spacing-0` | Spațiul de sub descriere. |

## Exemplu

```twig
{% include 'mud_egov:block' with {
  block_tag: 'aside',
  block_label: 'Linkuri utile',
  block_label_visible: true,
  block_content: content,
} only %}
```

## Accessibility

- Eticheta rămâne în DOM și când e ascunsă (`block_label_visible: false`), deci cititoarele de ecran o anunță.
- Alege `block_label_tag` după ierarhia paginii, fără a sări niveluri de titlu.
- Folosește `nav`, `aside` sau `section` pentru blocuri cu rol de reper, nu `div`.
- Tranziția de culoare și fundal este dezactivată la `prefers-reduced-motion: reduce`.
