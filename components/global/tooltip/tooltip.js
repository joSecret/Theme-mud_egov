(function (Drupal) {
  Drupal.behaviors.tooltip = {
    attach(context) {
      context.querySelectorAll('[data-tooltip]').forEach(el => {
        if (el.hasAttribute('data-tooltip-initialized')) return;
        el.setAttribute('data-tooltip-initialized', 'true');

        const trigger = el.querySelector('.c--tooltip__trigger');
        const bubble = el.querySelector('.c--tooltip__bubble');
        const triggerEvent = el.dataset.tooltipTrigger || 'hover';

        if (!trigger || !bubble) return;

        let showTimer = null;
        let hideTimer = null;
        const SHOW_DELAY = 200;
        const HIDE_DELAY = 150;

        function show() {
          clearTimeout(hideTimer);
          bubble.setAttribute('aria-hidden', 'false');
          el.classList.add('is-open');
        }

        function hide() {
          clearTimeout(showTimer);
          bubble.setAttribute('aria-hidden', 'true');
          el.classList.remove('is-open');
        }

        function scheduleShow() {
          clearTimeout(hideTimer);
          showTimer = setTimeout(show, SHOW_DELAY);
        }

        function scheduleHide() {
          clearTimeout(showTimer);
          hideTimer = setTimeout(hide, HIDE_DELAY);
        }

        if (triggerEvent === 'hover') {
          trigger.addEventListener('mouseenter', scheduleShow);
          trigger.addEventListener('mouseleave', scheduleHide);

          // Keep open when pointer moves over bubble.
          bubble.addEventListener('mouseenter', () => clearTimeout(hideTimer));
          bubble.addEventListener('mouseleave', scheduleHide);

          // Focus also opens.
          trigger.addEventListener('focusin', show);
          trigger.addEventListener('focusout', hide);
        }

        if (triggerEvent === 'click') {
          trigger.addEventListener('click', () => {
            if (el.classList.contains('is-open')) {
              hide();
            } else {
              show();
            }
          });

          // Close on outside click.
          document.addEventListener('click', e => {
            if (!el.contains(e.target)) hide();
          });
        }

        if (triggerEvent === 'focus') {
          trigger.addEventListener('focusin', show);
          trigger.addEventListener('focusout', hide);
        }

        // Always close on Escape.
        document.addEventListener('keydown', e => {
          if (e.key === 'Escape' && el.classList.contains('is-open')) {
            hide();
          }
        });
      });
    }
  };
})(Drupal);
