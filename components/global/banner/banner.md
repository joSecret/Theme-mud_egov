---
title: Banner
group: Globals
slug: banner
description: Full-width, top-of-page system message for announcements, outages, and important notices.
version: 1.0.0
---

# Banner Component

## Overview

Full-width notification bar that spans its container and informs users of system-wide events (scheduled maintenance, outages, announcements). Mapped to `mud-banner`. Supports `info`, `warning`, and `error` variants (no `success` per MUD spec) and two emphasis levels: `subtle` (tinted background) and `strong` (filled).

Live-region routing follows WCAG conventions:
- `info` → `role="status"` + `aria-live="polite"`
- `warning` / `error` → `role="alert"` + `aria-live="assertive"`

## Usage

```twig
{% include 'mud_egov:banner' with {
  banner_variant: 'warning',
  banner_message: 'Scheduled maintenance on Saturday 09:00–11:00.',
} %}
```

With title and dismiss:

```twig
{% include 'mud_egov:banner' with {
  banner_variant: 'error',
  banner_emphasis: 'strong',
  banner_title: 'Service unavailable',
  banner_message: 'The portal is temporarily unavailable.',
  banner_dismissible: true,
} %}
```

With inline link:

```twig
{% include 'mud_egov:banner' with {
  banner_variant: 'info',
  banner_message: 'New features are available.',
  banner_link_text: 'Learn more',
  banner_link_href: '/release-notes',
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `banner_title` | `string\|null` | `null` | Optional bold heading |
| `banner_message` | `string\|null` | `null` | Body text |
| `banner_icon` | `string\|null` | `null` | SVG string for the leading icon |
| `banner_link_text` | `string\|null` | `null` | Inline link label |
| `banner_link_href` | `string\|null` | `null` | Inline link URL (defaults to `#`) |
| `banner_close_label` | `string\|null` | `"Închide"` | Close button accessible label |
| `banner_variant` | `string\|null` | `null` (info) | `info` \| `warning` \| `error` |
| `banner_emphasis` | `string\|null` | `null` (subtle) | `subtle` \| `strong` |
| `banner_dismissible` | `boolean` | `false` | Show close button |
| `banner_uc` | `array` | `[]` | Extra utility classes |
| `banner_att` | `Attribute` | `null` | Extra HTML attributes |

## Slots

### `slot_content`
Overrides `banner_message` with rich HTML content.

## CSS Variables

| Variable | Description |
|---|---|
| `--banner_bg` | Background color override |
| `--banner_c` | Text/icon color override |
| `--banner_b` | Border override |
| `--banner_p-b` | Block padding |
| `--banner_p-i` | Inline padding |
| `--banner_b-r` | Border radius |
| `--banner_icon-s` | Icon size |
| `--banner_title-f-s` | Title font size |
| `--banner_title-f-w` | Title font weight |
| `--banner_body-f-s` | Body font size |
| `--banner_close-s` | Close button icon size |
