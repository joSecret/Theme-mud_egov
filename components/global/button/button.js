/**
 * @file
 * Button: comută aria-expanded și arată spinner-ul pentru butoanele is-loading.
 */
((Drupal, once) => {
  Drupal.behaviors.button = {
    attach(context) {
      once('button-expanded', '.button[aria-expanded]', context).forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.setAttribute('aria-expanded', btn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        });
      });

      // La click spinner-ul apare până pleacă pagina (trimiterea formularului) sau 3 s.
      once('button-loading', '.button.is-loading', context).forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.setAttribute('aria-busy', 'true');
          setTimeout(() => btn.setAttribute('aria-busy', 'false'), 3000);
        });
      });
    },
  };
})(Drupal, once);
