---
title: Info Box
group: Globals
slug: info-box
description: Inline information callout with optional heading, body, actions, and close button — fills the content column width.
version: 1.0.0
---

# Info Box Component

## Overview

Inline, in-content callout that highlights key messages, announcements, alerts, or explanations within the page flow. Mapped to `mud-info-box`. Unlike `mud-notification` (fixed-width toast) or `mud-banner` (page bar), the info box sits inside the content column and fills container width.

Supports four variants — `info` (neutral icon), `info-moderate` (brand-blue icon), `warning`, and `error` — combined with two emphasis levels: `subtle` (neutral grey surface) and `strong` (tinted semantic surface).

This component is **not** an ARIA live region.

## Usage

```twig
{% include 'mud_egov:info-box' with {
  info_box_variant: 'info',
  slot_content: 'Your documents will be processed within 3 business days.',
} %}
```

With title and actions:

```twig
{% include 'mud_egov:info-box' with {
  info_box_variant: 'warning',
  info_box_emphasis: 'strong',
  info_box_title: 'Verification required',
  slot_content: 'Please verify your identity before proceeding.',
  slot_actions: '<a href="/verify">Verify now</a>',
} %}
```

Closable:

```twig
{% include 'mud_egov:info-box' with {
  info_box_variant: 'info-moderate',
  info_box_title: 'New in this release',
  info_box_closable: true,
  slot_content: 'Electronic signatures are now supported.',
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `info_box_title` | `string\|null` | `null` | Optional bold heading |
| `info_box_icon` | `string\|null` | `null` | SVG string for the leading icon (overrides default) |
| `info_box_close_label` | `string\|null` | `"Închide"` | Close button accessible label |
| `info_box_variant` | `string\|null` | `null` (info) | `info` \| `info-moderate` \| `warning` \| `error` |
| `info_box_emphasis` | `string\|null` | `null` (subtle) | `subtle` \| `strong` |
| `info_box_closable` | `boolean` | `false` | Show close button |
| `info_box_hide_icon` | `boolean` | `false` | Suppress the leading icon |
| `info_box_uc` | `array` | `[]` | Extra utility classes |
| `info_box_att` | `Attribute` | `null` | Extra HTML attributes |

## Slots

### `slot_content`
Body content — plain text or rich inline/block content.

### `slot_actions`
Optional inline action group (links or buttons) rendered below the body.

## CSS Variables

| Variable | Description |
|---|---|
| `--info-box_bg` | Background color override |
| `--info-box_c` | Text color override |
| `--info-box_icon-c` | Icon color override |
| `--info-box_b-r` | Border radius |
| `--info-box_p-b` | Block padding |
| `--info-box_p-i` | Inline padding |
| `--info-box_gap` | Gap between icon and body |
| `--info-box_icon-s` | Icon size |
| `--info-box_heading-f-s` | Heading font size |
| `--info-box_heading-f-w` | Heading font weight |
| `--info-box_body-f-s` | Body font size |
| `--info-box_close-s` | Close button icon size |
