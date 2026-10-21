(function (Drupal) {
  Drupal.behaviors.segmentedControl = {
    attach(context) {
      context.querySelectorAll('[data-segmented-control]').forEach(el => {
        if (el.hasAttribute('data-segmented-control-initialized')) return;
        el.setAttribute('data-segmented-control-initialized', 'true');

        const segments = () => [...el.querySelectorAll('.segmented-control-segment:not(.is-disabled)')];

        function select(btn) {
          el.querySelectorAll('.segmented-control-segment').forEach(s => {
            s.classList.remove('is-selected');
            s.setAttribute('aria-checked', 'false');
            s.setAttribute('tabindex', '-1');
          });
          btn.classList.add('is-selected');
          btn.setAttribute('aria-checked', 'true');
          btn.setAttribute('tabindex', '0');

          el.dispatchEvent(new CustomEvent('segmented-control:change', {
            bubbles: true,
            detail: { value: btn.getAttribute('data-value') },
          }));
        }

        el.querySelectorAll('.segmented-control-segment').forEach(btn => {
          btn.addEventListener('click', () => select(btn));
        });

        el.addEventListener('keydown', e => {
          const enabled = segments();
          const idx = enabled.indexOf(document.activeElement);
          if (idx === -1) return;

          let next = -1;
          if (e.key === 'ArrowRight') next = (idx + 1) % enabled.length;
          if (e.key === 'ArrowLeft') next = (idx - 1 + enabled.length) % enabled.length;
          if (e.key === 'Home') next = 0;
          if (e.key === 'End') next = enabled.length - 1;

          if (next !== -1) {
            e.preventDefault();
            select(enabled[next]);
            enabled[next].focus();
          }
        });
      });
    },
  };
})(Drupal);
