((Drupal, once) => {
  Drupal.behaviors.carousel = {
    attach(context) {
      once('carousel', '[data-carousel]', context).forEach((el) => {
        const viewport = el.querySelector('.carousel-viewport');
        const slides = [...el.querySelectorAll('.carousel-slide')];
        const dots = [...el.querySelectorAll('.carousel-dot')];

        if (!viewport || slides.length < 2) return;

        const autoplay = el.dataset.autoplay === 'true';
        const interval = parseInt(el.dataset.interval, 10) || 5000;
        let current = 0;
        let timer = null;

        const btnPrev = el.querySelector('.carousel-btn--prev');
        const btnNext = el.querySelector('.carousel-btn--next');

        const updateButtons = () => {
          if (btnPrev) btnPrev.disabled = current === 0;
          if (btnNext) btnNext.disabled = current === slides.length - 1;
        };

        // Active dot tracking via IntersectionObserver
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              current = slides.indexOf(entry.target);
              dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
              updateButtons();
            });
          },
          { root: viewport, threshold: 0.5 }
        );
        slides.forEach((s) => observer.observe(s));
        updateButtons();

        btnPrev?.addEventListener('click', () => {
          viewport.scrollBy({ left: -viewport.clientWidth, behavior: 'smooth' });
        });
        btnNext?.addEventListener('click', () => {
          viewport.scrollBy({ left: viewport.clientWidth, behavior: 'smooth' });
        });

        // Dots: prevent page scroll on anchor click
        el.querySelectorAll('.carousel-dot').forEach((dot) => {
          dot.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById(dot.getAttribute('href').slice(1));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
          });
        });

        if (!autoplay) return;

        const goNext = () => {
          viewport.scrollBy({ left: viewport.clientWidth, behavior: 'smooth' });
        };

        const start = () => { timer = setInterval(goNext, interval); };
        const stop = () => clearInterval(timer);

        el.addEventListener('mouseenter', stop);
        el.addEventListener('mouseleave', start);
        el.addEventListener('focusin', stop);
        el.addEventListener('focusout', start);

        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          start();
        }
      });
    },
  };
})(Drupal, once);
