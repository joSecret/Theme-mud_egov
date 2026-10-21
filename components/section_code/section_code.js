((Drupal, once) => {
  Drupal.behaviors.sectionCode = {
    attach(context) {
      once("sectionCode", "[data-tabs]", context).forEach((container) => {
        const tabs = container.querySelectorAll('[role="tab"]');
        const panels = container.querySelectorAll('[role="tabpanel"]');

        function activate(tab) {
          panels.forEach(p => {
            p.hidden = true;
          });

          const index = Array.from(tabs).indexOf(tab);
          const panel = panels[index];
          if (panel) panel.hidden = false;
        }

        tabs.forEach(tab => {
          tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;

          tab.addEventListener('click', () => activate(tab));

          tab.addEventListener('keydown', e => {
            let index = Array.from(tabs).indexOf(tab);

            if (e.key === 'ArrowRight') index++;
            if (e.key === 'ArrowLeft') index--;
            if (e.key === 'Home') index = 0;
            if (e.key === 'End') index = tabs.length - 1;

            if (index >= 0 && index < tabs.length) {
              tabs[index].focus();
              activate(tabs[index]);
            }
          });
        });
      });
    }
  };
})(Drupal, once);
