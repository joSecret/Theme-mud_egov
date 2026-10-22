---
title: Modal
group: Globals
version: 1.1.0
css_prefix: modal
---

# Modal

Overlay dialog component built on the native `<dialog>` element. Provides focus trapping, Escape handling, backdrop dimming, and ARIA semantics out of the box.

## Usage

```twig
{% include 'mud_egov:modal' with {
  modal_id: 'confirm-delete',
  modal_title: 'Delete account',
  modal_size: 'md',
  modal_destructive: true,
  modal_open: false,
  slot_trigger: '<button type="button" data-modal-trigger="confirm-delete" class="button button-destructive button-filled">Delete</button>',
  slot_content: '<p>This action cannot be undone. Are you sure?</p>',
  slot_footer: '<button type="button" class="button button-secondary button-outlined" data-modal-close>Cancel</button>
                <button type="button" class="button button-destructive button-filled">Confirm</button>',
} only %}
```

## Props

| Prop                   | Type              | Default    | Description                                              |
|------------------------|-------------------|------------|----------------------------------------------------------|
| `modal_title`          | `string\|null`    | `null`     | Dialog title text.                                       |
| `modal_id`             | `string\|null`    | auto       | Unique ID for the `<dialog>` element.                    |
| `modal_size`           | `string\|null`    | `null`     | `sm` / `md` / `lg` / `xl` / `fullscreen`                |
| `modal_variant`        | `string\|null`    | `null`     | `default` / `with-image` / `with-icon`                   |
| `modal_actions_layout` | `string\|null`    | `null`     | `inline` (default) / `stacked`                           |
| `modal_close_label`    | `string`          | `Închide`  | Accessible label for the × button.                       |
| `modal_open`           | `boolean`         | `false`    | Server-side initial open state.                          |
| `modal_closable`       | `boolean`         | `true`     | Show the × close button.                                 |
| `modal_close_on_backdrop` | `boolean`     | `true`     | Close when clicking the backdrop.                        |
| `modal_close_on_escape` | `boolean`        | `true`     | Close on Escape key.                                     |
| `modal_destructive`    | `boolean`         | `false`    | Danger top-border accent for destructive actions.        |
| `modal_uc`             | `array`           | `[]`       | Extra utility classes.                                   |
| `modal_att`            | `Attribute\|null` | `null`     | Additional HTML attributes.                              |

## Slots

| Slot           | Description                                  |
|----------------|----------------------------------------------|
| `slot_trigger` | Element that opens the modal on click.       |
| `slot_header`  | Custom header content (overrides `modal_title`). |
| `slot_content` | Main body content.                           |
| `slot_footer`  | Footer action buttons.                       |

## CSS Variables

Public overrides are empty by default; set them in a specific context. Defaults come from the `--modal-*` variables in `css/defaults/feedback.css`.

| Variable | Default | Description |
|----------|---------|-------------|
| `--modal_backdrop_bg` | `--modal-backdrop-background` | Backdrop color. |
| `--modal_bg` | `--modal-container-background` | Surface background. |
| `--modal_b-r` | `--modal-container-border-radius` | Surface border radius. |
| `--modal_bs` | `--modal-container-box-shadow` | Surface shadow. |
| `--modal_sm_mx-w` | `--modal-container-max-width-sm` | Max width for `sm`. |
| `--modal_mx-w` | `--modal-container-max-width-md` | Max width for the default size (`md`). |
| `--modal_lg_mx-w` | `--modal-container-max-width-lg` | Max width for `lg`. |
| `--modal_xl_mx-w` | `960px` | Max width for `xl`. |
| `--modal_mx-h` | `--modal-container-max-height` | Max height. |
| `--modal_footer_gap` | `--modal-footer-gap` | Gap between footer buttons. |
| `--modal_danger_bg` | `--color-background-danger-default` | Accent of the destructive modal. |

Also available: `--modal_title_c`, `--modal_title_f-s`, `--modal_body_c`, `--modal_body_f-s`, `--modal_close_bg`, `--modal_close_bg_h`, `--modal_close_c`, `--modal_close_size`, and the padding variables (`--modal_header_start_p-b`, `--modal_body_p-i`, `--modal_footer_p-i`, ...).

## Accessibility

- Native `<dialog>` opened with `showModal()`: focus is trapped, the page behind is inert and Escape closes it (unless `modal_close_on_escape` is false).
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` (title) and `aria-describedby` (body).
- The close button has an accessible name (`modal_close_label`) and the MUD focus ring (`--focus-ring`).
- Close-button transitions are off under `prefers-reduced-motion: reduce`.
