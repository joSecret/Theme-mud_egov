---
title: Field Documents
group: Fields
version: 1.1.0
css_prefix: field-documents
---

# Field Documents

A documents field rendered as a stacked list of document items with an optional level 3 heading as label. Each item's markup (`item.content`) is passed through unchanged, so media entities keep the display of their view mode (for example `file-link`). Used by `templates/fields/field--field-documents.html.twig`.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `field_documents_items` | array | `[]` | Items, each `{ content }`. |
| `field_documents_label` | string, object | `null` | Label shown as `h3` above the list. |
| `field_documents_label_hidden` | boolean | `false` | Do not render the label. |
| `field_documents_uc` | array | `[]` | Utility classes for the wrapper. |
| `field_documents_att` | Attribute | `null` | Attributes for the wrapper. |

No slots.

## CSS variables

Public overrides (empty by default): `--field-documents_m-b`, `--field-documents_gap`, `--field-documents_item_gap`.

## Example

```twig
{% include 'mud_egov:field-documents' with {
  field_documents_label: 'Documente',
  field_documents_items: [
    { content: file_link_markup },
  ],
} only %}
```

## Accessibility

- The label is a real heading (`h3`), so the list is reachable through heading navigation; pick the page structure so that it follows an `h2`.
- When the label is hidden, it is not rendered at all.
- The links inside the items keep their own focus ring and accessible name.
