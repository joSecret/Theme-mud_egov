---
title: Notification
group: Globals
slug: notification
description: Toast notification for transient status messages — info, success, warning, or error.
version: 1.0.0
---

# Notification Component

## Overview

Semantic toast notification (350 px filled surface, 8 px radius) that renders a leading icon, optional bold heading, message body, optional inline actions, and an optional close button. Mapped to `mud-notification`.

Live-region routing follows WCAG conventions:
- `info` / `success` → `role="status"` + `aria-live="polite"`
- `warning` / `error` → `role="alert"` + `aria-live="assertive"`

## Usage

```twig
{% include 'mud_egov:notification' with {
  notification_variant: 'success',
  notification_message: 'Your application was submitted successfully.',
} %}
```

With title and dismiss:

```twig
{% include 'mud_egov:notification' with {
  notification_variant: 'error',
  notification_title: 'Upload failed',
  notification_message: 'The file exceeds the 5 MB limit.',
  notification_dismissible: true,
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `notification_title` | `string\|null` | `null` | Optional bold heading |
| `notification_message` | `string\|null` | `null` | Body text |
| `notification_icon` | `string\|null` | `null` | SVG string for the leading icon |
| `notification_close_label` | `string\|null` | `"Închide"` | Close button accessible label |
| `notification_variant` | `string\|null` | `null` (info) | `info` \| `success` \| `warning` \| `error` |
| `notification_dismissible` | `boolean` | `false` | Show close button |
| `notification_uc` | `array` | `[]` | Extra utility classes |
| `notification_att` | `Attribute` | `null` | Extra HTML attributes |

## Slots

### `slot_content`
Overrides `notification_message` with rich HTML content.

### `slot_actions`
Optional inline action group (links or buttons) rendered below the body.

## CSS Variables

| Variable | Description |
|---|---|
| `--notification_bg` | Background color override |
| `--notification_c` | Text/icon color override |
| `--notification_b-r` | Border radius |
| `--notification_w` | Toast width |
| `--notification_p-t` | Top padding |
| `--notification_p-b` | Bottom padding |
| `--notification_p-i` | Inline padding |
| `--notification_gap` | Gap between icon and body |
| `--notification_icon-s` | Leading icon size |
| `--notification_title-f-s` | Title font size |
| `--notification_title-f-w` | Title font weight |
| `--notification_body-f-s` | Body font size |
| `--notification_close-s` | Close button icon size |
