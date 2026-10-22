((Drupal, once) => {
  Drupal.behaviors.modal = {
    attach(context) {
      const openModal = (dialog) => {
        if (typeof dialog.showModal === 'function' && !dialog.open) dialog.showModal();
      };

      once('modal', '[data-modal]', context).forEach((dialog) => {
        const closeOnBackdrop = dialog.hasAttribute('data-modal-close-on-backdrop');
        const closeOnEscape = !dialog.hasAttribute('data-modal-no-escape');

        // Close buttons inside the dialog.
        dialog.querySelectorAll('[data-modal-close]').forEach((btn) => {
          btn.addEventListener('click', () => dialog.close());
        });

        // Backdrop click: a click directly on <dialog> hits the backdrop.
        if (closeOnBackdrop) {
          dialog.addEventListener('click', (e) => {
            if (e.target === dialog) dialog.close();
          });
        }

        // Escape key: native <dialog> fires 'cancel'.
        if (!closeOnEscape) {
          dialog.addEventListener('cancel', (e) => e.preventDefault());
        }
      });

      // Triggers (outside the dialog), keyed by data-modal-trigger="<id>".
      once('modal-trigger', '[data-modal-trigger]', context).forEach((trigger) => {
        trigger.addEventListener('click', () => {
          const dialog = document.getElementById(trigger.getAttribute('data-modal-trigger'));
          if (dialog) openModal(dialog);
        });
      });
    },
  };
})(Drupal, once);
