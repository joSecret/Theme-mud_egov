(function (Drupal) {
  Drupal.behaviors.menuDetails = {
    attach(context) {
      context.querySelectorAll('.c--menu-details').forEach(nav => {
      if (nav.hasAttribute('data-menu-details-initialized')) return;
        nav.setAttribute('data-menu-details-initialized', 'true');

        document.addEventListener('click', function (e) {
          if (!window.matchMedia('(min-width: 769px)').matches) return;
          nav.querySelectorAll('details[open]').forEach(details => {
            if (!details.contains(e.target)) {
              details.removeAttribute('open');
            }
          });
        });

        document.addEventListener('keydown', function (e) {
          if (e.key !== 'Escape') return;
          nav.querySelectorAll('details[open]').forEach(details => {
            details.removeAttribute('open');
          });
        });

        nav.addEventListener('toggle', function (e) {
          const details = e.target;
          if (!(details instanceof HTMLDetailsElement)) return;
          if (!window.matchMedia('(min-width: 769px)').matches) return;

          const li = details.closest('li');
          if (!li || li.classList.contains('mItem_l_0')) return;

          details.classList.remove('opens-inline-start');
          if (!details.open) return;

          const panel = details.querySelector(':scope > ul');
          if (!panel) return;

          const rect = panel.getBoundingClientRect();
          if (rect.right > window.innerWidth) {
            details.classList.add('opens-inline-start');
          }
        }, true);
      });
    },
  };
})(Drupal);
