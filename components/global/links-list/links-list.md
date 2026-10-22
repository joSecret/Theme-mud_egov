---
title: Links List
group: Globals
version: 1.1.0
css_prefix: links-list
---

# Links List

## Overview

Renders an unordered list of links following the standard Drupal links array structure. Each item supports three modes: rendered link markup, text wrapped in a `<span>` with attributes, or plain text.

## CSS Classes Generated

- Base: `c--links-list`
- Orientation: `links-list-vertical` (from `links_list_orientation`)

## Usage

```twig
{% include 'mud_egov:links-list' with {
  links_list_links: links,
  links_list_uc: ['my-nav'],
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `links_list_links` | `array` | `[]` | Array of link items (link, text, attributes, text_attributes) |
| `links_list_orientation` | `string\|null` | `null` | `horizontal` \| `vertical` (adds `links-list-<value>`) |
| `links_list_uc` | `array` | `[]` | Utility classes for the `<ul>` |
| `links_list_att` | `Drupal\Core\Template\Attribute` | `null` | Extra HTML attributes for the `<ul>` |

## CSS Variables

Public overrides, empty by default; each links to a token or a plain default.

| Variable | Default | Description |
|---|---|---|
| `--links-list_d` | `flex` | Display of the `<ul>` |
| `--links-list_f-d` | `row` | Flex direction (`--links-list_vertical_f-d` for `links-list-vertical`) |
| `--links-list_gap` | `--spacing-16` | Gap between items |
| `--links-list_p` | `0` | Padding of the `<ul>` |
| `--links-list_m` | `0` | Margin of the `<ul>` |
| `--links-list_t-d` | `none` | Text decoration of the links |
| `--links-list_active_t-d` | `underline` | Text decoration of the `.is-active` link |

## Accessibility

- It is a real `<ul>`/`<li>` list, so screen readers announce the number of items; the markers are hidden only visually (`list-style: none`).
- The active link is marked by underline, not by color alone; keep a clear active state if you override `--links-list_active_t-d`.
- Links keep the global focus ring from `reboot.css`.
