---
title: File Link
group: Fields
version: 1.1.0
css_prefix: file-link
---

# File Link

A downloadable file rendered as a card: a format badge on the left (color-coded by extension) and the title with meta (extension, size, date) on the right. The whole card is one `<a download>`. Used by `templates/file/file-link.html.twig`; the variables come from `mud_egov_preprocess_file_link()` in `mud_egov.theme`.

Extension families (class `c--file-link-<family>`): `pdf`, `doc` (doc, docx, rtf, odt), `xls` (xls, xlsx, csv, ods), `ppt` (ppt, pptx, odp), `txt`, `zip` (zip, rar, 7z), `img` (jpg, jpeg, png, gif, webp, svg); anything else uses the default icon color.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `file_link_url` | string | `''` | Href of the file. |
| `file_link_title` | string | `null` | Human-readable title. |
| `file_link_extension` | string | `null` | Lowercase extension, without dot. |
| `file_link_size` | string | `null` | Pre-formatted size, for example `1.3 MB`. |
| `file_link_date` | string | `null` | Pre-formatted date. |
| `file_link_uc` | array | `[]` | Utility classes for the anchor. |
| `file_link_att` | Attribute | `null` | Attributes for the anchor. |

No slots.

## CSS variables

Public overrides (empty by default): `--file-link_gap`, `--file-link_p-b`, `--file-link_p-i`, `--file-link_b-r`, `--file-link_bg`, `--file-link_bg_h`, `--file-link_trn`, `--file-link_body_gap`, `--file-link_icon_size`, `--file-link_icon_c`, `--file-link_<family>_icon_c` (`pdf`, `doc`, `xls`, `ppt`, `txt`, `zip`, `img`), `--file-link_title_f-s`, `--file-link_title_f-w`, `--file-link_title_l-h`, `--file-link_title_c`, `--file-link_meta_f-s`, `--file-link_meta_c`, `--file-link_meta_gap`.

## Example

```twig
{% include 'mud_egov:file-link' with {
  file_link_url: '/files/raport.pdf',
  file_link_title: 'Raport anual',
  file_link_extension: 'pdf',
  file_link_size: '1.3 MB',
  file_link_date: '01.02.2026',
} only %}
```

## Accessibility

- The card is a single link: the accessible name is the title followed by the meta text (format, size, date).
- The format badge is decorative (`aria-hidden="true"`); the format is repeated as text in the meta line, so color is not the only carrier.
- Hover and keyboard focus change the background; the global focus outline stays visible.
- The background transition is disabled with `prefers-reduced-motion: reduce`.
