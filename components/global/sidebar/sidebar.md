---
title: Sidebar
group: Globals
version: 1.1.0
css_prefix: sidebar
---

# Sidebar

Slide-in side panel (drawer) with overlay, focus trap, and Escape-to-close support.

## Usage

```twig
{% include 'mud_egov:sidebar' with {
  sidebar_id: 'main-sidebar',
  sidebar_title: 'Navigare',
  sidebar_position: 'start',
  sidebar_size: 'md',
  sidebar_open: false,
  sidebar_overlay: true,
} only %}
```

Trigger open from another element:

```twig
<button type="button" data-sidebar-trigger="main-sidebar">Deschide meniu</button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sidebar_title` | string\|null | null | Panel title |
| `sidebar_id` | string\|null | null | Unique element ID |
| `sidebar_close_label` | string | 'Închide' | Close button accessible label |
| `sidebar_open` | boolean | false | Server-side initial open state |
| `sidebar_overlay` | boolean | true | Show dimmed backdrop |
| `sidebar_position` | string\|null | null | `start` \| `end` |
| `sidebar_size` | string\|null | null | `sm` \| `md` \| `lg` |
| `sidebar_collapsed` | boolean | false | Collapse to icon-only rail |
| `sidebar_uc` | array | [] | Additional CSS classes |
| `sidebar_att` | Attribute | null | HTML attributes |

## Slots

| Slot | Description |
|------|-------------|
| `slot_header` | Custom header (overrides `sidebar_title`) |
| `slot_content` | Main body content |
| `slot_footer` | Footer actions |

## CSS Variables

Public overrides are empty by default; set them in a specific context. Defaults come from the `--sidebar-*` variables in `css/defaults/navigation.css`.

| Variable | Default | Description |
|----------|---------|-------------|
| `--sidebar_w` | `--sidebar-container-inline-size` | Panel width (default size `md`). |
| `--sidebar_sm_w` | `240px` | Width for `sm`. |
| `--sidebar_lg_w` | `480px` | Width for `lg`. |
| `--sidebar_collapsed_w` | `--sidebar-container-collapsed-inline-size` | Width of the collapsed rail. |
| `--sidebar_bg` | `--sidebar-container-background` | Panel background. |
| `--sidebar_b-c`, `--sidebar_b-w`, `--sidebar_b-r` | `--sidebar-container-border-*` | Panel border color, width and radius. |
| `--sidebar_overlay_bg` | `--color-background-alpha-overlay-dark` | Overlay color. |
| `--sidebar_trn` | `250ms ease` | Slide and fade transition. |
| `--sidebar_z` | `200` | z-index. |

Also available: `--sidebar_header_p-b`, `--sidebar_header_p-i`, `--sidebar_title_f-s`, `--sidebar_close_size`, `--sidebar_body_p-b`, `--sidebar_body_p-i`, `--sidebar_footer_p-b`, `--sidebar_footer_p-i`.

## Accessibility

- A closed panel has `aria-hidden="true"`; opening it moves focus to the first focusable element and closing it restores focus to the trigger.
- Focus stays inside the open panel (Tab and Shift+Tab wrap); Escape and the overlay click close it.
- The close button has an accessible name (`sidebar_close_label`) and the MUD focus ring (`--focus-ring`).
- The slide, overlay fade and close-button transitions are off under `prefers-reduced-motion: reduce`.
