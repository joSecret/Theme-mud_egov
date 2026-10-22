((Drupal, once) => {
  // Open functions of the initialised panels, looked up by triggers at click time.
  const openers = new WeakMap();

  const FOCUSABLE = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  Drupal.behaviors.sidebar = {
    attach(context) {
      once('sidebar', '[data-sidebar]', context).forEach((panel) => {
        const wrapper = panel.closest('[data-sidebar-wrapper]');
        const overlay = wrapper?.querySelector('[data-sidebar-overlay-el]');
        const hasOverlay = panel.hasAttribute('data-sidebar-overlay');

        let previousActiveElement = null;

        function openSidebar() {
          previousActiveElement = document.activeElement;
          panel.classList.add('is-open');
          panel.removeAttribute('aria-hidden');
          wrapper?.classList.add('is-open');

          // Focus first focusable element in panel.
          const first = panel.querySelector(FOCUSABLE);
          if (first) first.focus();

          // Prevent body scroll.
          document.body.style.overflow = 'hidden';
        }

        function closeSidebar() {
          panel.classList.remove('is-open');
          panel.setAttribute('aria-hidden', 'true');
          wrapper?.classList.remove('is-open');
          document.body.style.overflow = '';

          // Restore focus.
          if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
            previousActiveElement.focus();
          }
        }

        openers.set(panel, openSidebar);

        panel.querySelectorAll('[data-sidebar-close]').forEach((btn) => {
          btn.addEventListener('click', closeSidebar);
        });

        if (hasOverlay && overlay) {
          overlay.addEventListener('click', closeSidebar);
        }

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && panel.classList.contains('is-open')) {
            e.preventDefault();
            closeSidebar();
          }
        });

        // Focus trap.
        panel.addEventListener('keydown', (e) => {
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
          } else if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        });
      });

      // External triggers: data-sidebar-trigger="<id>".
      once('sidebar-trigger', '[data-sidebar-trigger]', context).forEach((trigger) => {
        trigger.addEventListener('click', () => {
          const panel = document.getElementById(trigger.getAttribute('data-sidebar-trigger'));
          const open = panel && openers.get(panel);
          if (open) open();
        });
      });
    },
  };
})(Drupal, once);
