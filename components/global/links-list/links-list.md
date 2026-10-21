---
title: LinksList
group: Globals
slug: links-list
description: Renders an unordered list of links. Each item can be a rendered link, text with attributes, or plain text.
version: 1.0.0
---

# LinksList Component

## Overview

Renders an unordered list of links following the standard Drupal links array structure. Each item supports three modes: rendered link markup, text wrapped in a `<span>` with attributes, or plain text.

## CSS Classes Generated

- Base: `links-list`

## Usage

```twig
{% include 'mud_egov:links-list' with {
  links_links: links,
  links_uc: ['my-nav'],
} %}
```

## Properties Reference

| Property | Type | Default | Description |
|---|---|---|---|
| `links_links` | `array` | `[]` | Array of link items (link, text, attributes, text_attributes) |
| `links_uc` | `array` | `[]` | Utility classes for the `<ul>` |
| `links_att` | `Drupal\Core\Template\Attribute` | `null` | Extra HTML attributes for the `<ul>` |

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--links-list_d` | `block` | Display of the `<ul>` |
| `--links-list_p` | `0` | Padding of the `<ul>` |
| `--links-list_m` | `0` | Margin of the `<ul>` |
| `--links-list_lst` | `none` | List-style of the `<ul>` |
