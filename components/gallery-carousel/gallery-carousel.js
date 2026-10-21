((Drupal, once) => {
  Drupal.behaviors.galleryCarousel = {
    attach(context) {
      once('gallery-carousel', '[data-gallery]', context).forEach((el) => {
        const viewport = el.querySelector('.gallery-viewport');
        const slides = [...el.querySelectorAll('.gallery-slide')];
        const thumbs = [...el.querySelectorAll('.gallery-thumb')];
        const thumbsStrip = el.querySelector('.gallery-thumbs');
        const counterCurrent = el.querySelector('.gallery-counter__current');

        const btnPrev = el.querySelector('.gallery-btn--prev');
        const btnNext = el.querySelector('.gallery-btn--next');

        const lightboxEnabled = el.dataset.lightbox === 'true';
        const dialog = el.querySelector('.gallery-lightbox');
        const lbImage = dialog?.querySelector('.lightbox-image');
        const lbCaption = dialog?.querySelector('.lightbox-caption');
        const lbCurrent = dialog?.querySelector('.lightbox-counter__current');
        const lbClose = dialog?.querySelector('.lightbox-close');
        const lbPrev = dialog?.querySelector('.lightbox-btn--prev');
        const lbNext = dialog?.querySelector('.lightbox-btn--next');

        if (!viewport || slides.length === 0) return;

        let current = 0;

        const setActive = (index) => {
          current = index;
          thumbs.forEach((t, i) => {
            const active = i === index;
            t.setAttribute('aria-selected', active ? 'true' : 'false');
            if (active && thumbsStrip) {
              t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
          });
          if (counterCurrent) counterCurrent.textContent = index + 1;
          if (btnPrev) btnPrev.disabled = index === 0;
          if (btnNext) btnNext.disabled = index === slides.length - 1;
          if (dialog?.open) renderLightbox(index);
        };

        // Active slide detection via IntersectionObserver.
        if (slides.length > 1) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                setActive(slides.indexOf(entry.target));
              });
            },
            { root: viewport, threshold: 0.6 }
          );
          slides.forEach((s) => observer.observe(s));
        }

        const scrollToIndex = (index) => {
          const target = slides[index];
          if (!target) return;
          target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        };

        btnPrev?.addEventListener('click', () => scrollToIndex(Math.max(0, current - 1)));
        btnNext?.addEventListener('click', () => scrollToIndex(Math.min(slides.length - 1, current + 1)));

        thumbs.forEach((thumb) => {
          thumb.addEventListener('click', () => {
            scrollToIndex(parseInt(thumb.dataset.index, 10));
          });
        });

        // Keyboard navigation on viewport focus.
        viewport.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            scrollToIndex(Math.max(0, current - 1));
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            scrollToIndex(Math.min(slides.length - 1, current + 1));
          }
        });

        // ── Lightbox ──
        if (!lightboxEnabled || !dialog || !lbImage) return;

        const renderLightbox = (index) => {
          const slide = slides[index];
          if (!slide) return;
          const img = slide.querySelector('img');
          const caption = slide.querySelector('.gallery-caption');
          lbImage.src = img.currentSrc || img.src;
          lbImage.alt = img.alt || '';
          if (lbCaption) lbCaption.textContent = caption ? caption.textContent.trim() : '';
          if (lbCurrent) lbCurrent.textContent = index + 1;
        };

        const openLightbox = (index) => {
          renderLightbox(index);
          dialog.showModal();
        };

        slides.forEach((slide, i) => {
          slide.querySelector('img')?.addEventListener('click', () => openLightbox(i));
        });

        lbClose?.addEventListener('click', () => dialog.close());

        // Click on backdrop closes.
        dialog.addEventListener('click', (e) => {
          if (e.target === dialog) dialog.close();
        });

        // Click on lightbox image closes (zoom-out cursor).
        lbImage.addEventListener('click', () => dialog.close());

        lbPrev?.addEventListener('click', (e) => {
          e.stopPropagation();
          scrollToIndex(Math.max(0, current - 1));
        });
        lbNext?.addEventListener('click', (e) => {
          e.stopPropagation();
          scrollToIndex(Math.min(slides.length - 1, current + 1));
        });

        dialog.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            scrollToIndex(Math.max(0, current - 1));
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            scrollToIndex(Math.min(slides.length - 1, current + 1));
          }
        });
      });
    },
  };
})(Drupal, once);
