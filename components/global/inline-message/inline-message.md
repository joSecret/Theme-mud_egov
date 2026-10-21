---
title: Inline Message
group: Globals
slug: inline-message
description: Lightweight in-context feedback — coloured leading icon plus a short text line, no surface or border.
version: 1.0.0
---

# Inline Message Component

## Overview

Lightweight, in-context feedback rendered as a coloured leading icon plus a short text line. Has no surface, border, or padding. Mapped to `mud-inline-message`. Used alongside inputs and form fields to give immediate guidance.

This component is **not** an ARIA live region. Associate it with a form field via `aria-describedby` (and `aria-invalid` for errors) on the consumer side. The icon is decorative.

## Usage

```twig
{% include 'mud_egov:inline-message' with {
  inline_message_variant: 'error',
  inline_message_text: 'This field is required.',
} %}
```

With size:

```twig
{% include 'mud_egov:inline-message' with {
  inline_message_variant: 'success',
  inline_message_size: 'small',
  inline_message_text: 'CNP valid.',
} %}
```

Without icon:

```twig
{% include 'mud_egov:inline-message' with {
  inline_message_variant: 'warning',
  inline_message_text: 'This data may be outdated.',
  inline_message_hide_icon: true,
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `inline_message_text` | `string\|null` | `null` | The feedback message text |
| `inline_message_icon` | `string\|null` | `null` | SVG string for the leading icon (overrides default) |
| `inline_message_variant` | `string\|null` | `null` (info) | `info` \| `success` \| `warning` \| `error` |
| `inline_message_size` | `string\|null` | `null` (medium) | `small` (12 px) \| `medium` (14 px) |
| `inline_message_hide_icon` | `boolean` | `false` | Suppress the leading icon |
| `inline_message_uc` | `array` | `[]` | Extra utility classes |
| `inline_message_att` | `Attribute` | `null` | Extra HTML attributes |

## Slots

### `slot_content`
Overrides `inline_message_text` with rich inline content.

## CSS Variables

| Variable | Description |
|---|---|
| `--inline-message_c` | Text color override |
| `--inline-message_icon-c` | Icon color override |
| `--inline-message_f-s` | Font size override |
| `--inline-message_l-h` | Line height override |
| `--inline-message_f-w` | Font weight override |
| `--inline-message_gap` | Gap between icon and text |
| `--inline-message_icon-s` | Icon size override |
