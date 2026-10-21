(function (Drupal) {
  Drupal.behaviors.modal = {
    attach(context) {
      context.querySelectorAll('[data-modal]').forEach(dialog => {
        if (dialog.hasAttribute('data-modal-initialized')) return;
        dialog.setAttribute('data-modal-initialized', 'true');

        const id = dialog.id;
        const closeOnBackdrop = dialog.hasAttribute('data-modal-close-on-backdrop');
        const closeOnEscape = !dialog.hasAttribute('data-modal-no-escape');

        // --- Open ---
        function openModal() {
          dialog.showModal();
        }

        // --- Close ---
        function closeModal() {
          dialog.close();
        }

        // Trigger buttons (outside the dialog, keyed by data-modal-trigger="<id>")
        if (id) {
          const root = context === document ? document : context.getRootNode?.() ?? document;
          (root === document ? document : context).querySelectorAll(
            `[data-modal-trigger="${CSS.escape(id)}"]`
          ).forEach(trigger => {
            trigger.addEventListener('click', openModal);
          });
        }

        // Close buttons inside the dialog
        dialog.querySelectorAll('[data-modal-close]').forEach(btn => {
          btn.addEventListener('click', closeModal);
        });

        // Backdrop click
        if (closeOnBackdrop) {
          dialog.addEventListener('click', function (e) {
            // dialog covers the viewport; click directly on <dialog> = backdrop
            if (e.target === dialog) {
              closeModal();
            }
          });
        }

        // Escape key — native <dialog> fires 'cancel' on Escape
        if (!closeOnEscape) {
          dialog.addEventListener('cancel', function (e) {
            e.preventDefault();
          });
        }

        // Re-attach trigger buttons that may not be in context yet (global scope)
        if (id && context === document) {
          document.querySelectorAll(`[data-modal-trigger="${CSS.escape(id)}"]`).forEach(trigger => {
            if (!trigger.hasAttribute('data-modal-trigger-initialized')) {
              trigger.setAttribute('data-modal-trigger-initialized', 'true');
              trigger.addEventListener('click', openModal);
            }
          });
        }
      });

      // Attach triggers that live outside the dialog (e.g. rendered before dialog)
      context.querySelectorAll('[data-modal-trigger]:not([data-modal-trigger-initialized])').forEach(trigger => {
        const targetId = trigger.getAttribute('data-modal-trigger');
        const dialog = document.getElementById(targetId);
        if (!dialog) return;
        trigger.setAttribute('data-modal-trigger-initialized', 'true');
        trigger.addEventListener('click', function () {
          if (typeof dialog.showModal === 'function') dialog.showModal();
        });
      });
    },
  };
})(Drupal);
