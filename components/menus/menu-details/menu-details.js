/**
 * @file
 * Menu details: închide sub-meniurile la click în afară și la Escape,
 * și întoarce panoul spre inline-start când ar ieși din ecran.
 */

((Drupal, once) => {
  Drupal.behaviors.menuDetails = {
    attach(context) {
      once('menu-details', '.c--menu-details', context).forEach((nav) => {
        document.addEventListener('click', (e) => {
          if (!window.matchMedia('(min-width: 769px)').matches) return;
          nav.querySelectorAll('details[open]').forEach((details) => {
            if (!details.contains(e.target)) {
              details.removeAttribute('open');
            }
          });
        });

        document.addEventListener('keydown', (e) => {
          if (e.key !== 'Escape') return;
          nav.querySelectorAll('details[open]').forEach((details) => {
            details.removeAttribute('open');
          });
        });

        nav.addEventListener('toggle', (e) => {
          const details = e.target;
          if (!(details instanceof HTMLDetailsElement)) return;
          if (!window.matchMedia('(min-width: 769px)').matches) return;

          const li = details.closest('li');
          if (!li || li.classList.contains('menu-details_level_0')) return;

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
})(Drupal, once);
