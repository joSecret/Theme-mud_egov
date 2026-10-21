(function (Drupal) {
  Drupal.behaviors.sidebar = {
    attach(context) {
      context.querySelectorAll('[data-sidebar]').forEach(panel => {
        if (panel.hasAttribute('data-sidebar-initialized')) return;
        panel.setAttribute('data-sidebar-initialized', 'true');

        const id = panel.id;
        const wrapper = panel.closest('[data-sidebar-wrapper]');
        const overlay = wrapper?.querySelector('[data-sidebar-overlay-el]');
        const hasOverlay = panel.hasAttribute('data-sidebar-overlay');

        // Focusable selectors
        const FOCUSABLE = [
          'a[href]',
          'button:not([disabled])',
          'input:not([disabled])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          '[tabindex]:not([tabindex="-1"])',
        ].join(', ');

        let previousActiveElement = null;

        // --- Open ---
        function openSidebar() {
          previousActiveElement = document.activeElement;
          panel.classList.add('is-open');
          panel.removeAttribute('aria-hidden');
          wrapper?.classList.add('is-open');

          // Focus first focusable element in panel
          const first = panel.querySelector(FOCUSABLE);
          if (first) first.focus();

          // Prevent body scroll
          document.body.style.overflow = 'hidden';
        }

        // --- Close ---
        function closeSidebar() {
          panel.classList.remove('is-open');
          panel.setAttribute('aria-hidden', 'true');
          wrapper?.classList.remove('is-open');
          document.body.style.overflow = '';

          // Restore focus
          if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
            previousActiveElement.focus();
          }
        }

        // Close buttons
        panel.querySelectorAll('[data-sidebar-close]').forEach(btn => {
          btn.addEventListener('click', closeSidebar);
        });

        // Overlay click
        if (hasOverlay && overlay) {
          overlay.addEventListener('click', closeSidebar);
        }

        // Escape key
        document.addEventListener('keydown', function onKeydown(e) {
          if (e.key === 'Escape' && panel.classList.contains('is-open')) {
            e.preventDefault();
            closeSidebar();
          }
        });

        // Focus trap
        panel.addEventListener('keydown', function (e) {
          if (e.key !== 'Tab') return;

          const focusable = Array.from(panel.querySelectorAll(FOCUSABLE));
          if (!focusable.length) {
            e.preventDefault();
            return;
          }

          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        });

        // External triggers: data-sidebar-trigger="<id>"
        if (id) {
          document.querySelectorAll(`[data-sidebar-trigger="${CSS.escape(id)}"]`).forEach(trigger => {
            if (!trigger.hasAttribute('data-sidebar-trigger-initialized')) {
              trigger.setAttribute('data-sidebar-trigger-initialized', 'true');
              trigger.addEventListener('click', openSidebar);
            }
          });
        }
      });

      // Also attach triggers that may not be inside a sidebar's context
      context.querySelectorAll('[data-sidebar-trigger]:not([data-sidebar-trigger-initialized])').forEach(trigger => {
        const targetId = trigger.getAttribute('data-sidebar-trigger');
        const panel = document.getElementById(targetId);
        if (!panel) return;
        trigger.setAttribute('data-sidebar-trigger-initialized', 'true');
        trigger.addEventListener('click', function () {
          panel.classList.add('is-open');
          panel.removeAttribute('aria-hidden');
          const wrapper = panel.closest('[data-sidebar-wrapper]');
          wrapper?.classList.add('is-open');
        });
      });
    },
  };
})(Drupal);
