---
title: Fieldset
group: Forms
version: 1.1.0
css_prefix: fieldset
---

# Fieldset

Grupează câmpuri de formular înrudite, cu legendă și descriere opționale.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `fieldset_legend` | string | `null` | Textul legendei |
| `fieldset_description` | string | `null` | Text de ajutor afișat sub legendă |
| `fieldset_disabled` | boolean | `false` | Dezactivează toate câmpurile din grup (atributul `disabled`) |
| `fieldset_uc` | array | `[]` | Clase utilitare adăugate pe `<fieldset>` |
| `fieldset_legend_uc` | array | `[]` | Clase utilitare adăugate pe `<legend>` |
| `fieldset_att` | Attribute | `null` | Atribute HTML pe `<fieldset>` |
| `fieldset_legend_att` | Attribute | `null` | Atribute HTML pe `<legend>` |

## Sloturi

| Slot | Descriere |
|---|---|
| `slot_content` | Câmpurile din grup |

## Exemplu

```twig
{% embed 'mud_egov:fieldset' with {
  fieldset_legend: 'Date de contact',
  fieldset_description: 'Completează cel puțin un câmp.',
} %}
  {% block slot_content %}
    {# câmpurile grupului #}
  {% endblock %}
{% endembed %}
```

## Variabile CSS publice

Goale implicit; se setează doar într-un context anume.

- Grup: `--fieldset_p-b`, `--fieldset_p-i`, `--fieldset_m-b`, `--fieldset_b-w`, `--fieldset_b-c`, `--fieldset_b-r`, `--fieldset_gap`.
- Legendă: `--fieldset_legend_{f-s,f-w,c,m-b,p-b,b-w,b-c}`.
- Descriere: `--fieldset_desc_{f-s,c,m-b}`.

Implicit, grupul nu are chenar și moștenește textul din context.

## Accessibility

- Folosește elementele native `<fieldset>` și `<legend>`: cititoarele de ecran anunță legenda la intrarea în grup.
- `fieldset_disabled` folosește atributul nativ `disabled`, care dezactivează și scoate din ordinea tastaturii toate câmpurile din grup.
- Fiecare grup trebuie să aibă legendă, ca să fie identificat de tehnologiile asistive.
