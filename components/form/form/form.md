---
title: Form
group: Forms
version: 1.1.0
css_prefix: form
---

# Form

Înveliș pentru elementul `<form>`, cu sloturi pentru titlu, tab-uri și conținut.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `form_method` | string | `post` | Metoda HTTP: `post` sau `get` (nu se aplică dacă `form_att` are deja `method`) |
| `form_action` | string | `null` | URL-ul la care se trimit datele |
| `form_max_width` | boolean | `true` | Rezervat; nu are efect în șablon. Pentru lățime limitată se adaugă clasa `is-limited` în `form_uc` |
| `form_uc` | array | `[]` | Clase utilitare adăugate pe `<form>` |
| `form_att` | Attribute | `null` | Atribute HTML pe `<form>` |

## Sloturi

| Slot | Descriere |
|---|---|
| `slot_title` | Titlul formularului, într-un `<h2 class="form--title">` |
| `slot_tabs` | Tab-uri sau navigare, într-un `<div class="form--tabs">` |
| `slot_content` | Câmpurile formularului |

## Exemplu

```twig
{% embed 'mud_egov:form' with {
  form_action: '/cautare',
  form_method: 'get',
  form_uc: ['is-limited'],
} %}
  {% block slot_title %}Căutare{% endblock %}
  {% block slot_content %}
    {# câmpurile formularului #}
  {% endblock %}
{% endembed %}
```

## Variabile CSS publice

Goale implicit; se setează doar într-un context anume.

- `--form_w`, `--form_bg`, `--form_f-s`, `--form_f-w`, `--form_p-b`, `--form_p-i`, `--form_d`, `--form_gap`, `--form_m-b`, `--form_m-i`, `--form_b-r`.
- Cu clasa `is-limited`: `--form_mx-w` (lățimea maximă, implicit 610px).
- Pe ecrane late (container `body` mai lat de 576px): `--form_desktop_w`.

## Accessibility

- Folosește elementul nativ `<form>`; câmpurile din el trebuie să aibă etichete asociate.
- Dacă formularul are titlu, el este un `<h2>`: respectă ierarhia de titluri a paginii.
- Trimiterea funcționează din tastatură (Enter într-un câmp sau activarea butonului de trimitere).
