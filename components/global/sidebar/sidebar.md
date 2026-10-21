# Sidebar

Slide-in side panel (drawer) with overlay, focus trap, and Escape-to-close support. Aligned with `mud-sidebar`.

## Usage

```twig
{% include 'mud_egov:sidebar' with {
  sidebar_id: 'main-sidebar',
  sidebar_title: 'Navigare',
  sidebar_position: 'start',
  sidebar_size: 'md',
  sidebar_open: false,
  sidebar_overlay: true,
} %}
```

Trigger open from another element:

```twig
<button data-sidebar-toggle="main-sidebar">Deschide meniu</button>
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

## CSS variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--sidebar_w` | 320px | Panel width |
| `--sidebar_bg` | white | Panel background |
| `--sidebar_overlay_bg` | rgba(0,0,0,0.4) | Overlay color |
| `--sidebar_z` | 900 | z-index |
