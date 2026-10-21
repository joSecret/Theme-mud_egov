(function (Drupal) {
  Drupal.behaviors.datePicker = {
    attach(context) {
      context.querySelectorAll('[data-date-picker]').forEach(el => {
        if (el.hasAttribute('data-date-picker-initialized')) return;
        el.setAttribute('data-date-picker-initialized', 'true');

        const input = el.querySelector('.date-picker-input');
        const popup = el.querySelector('.date-picker-popup');
        const calendarEl = el.querySelector('[data-date-picker-calendar]');
        const locale = el.getAttribute('data-locale') || 'ro-RO';
        const minDate = el.getAttribute('data-min') || null;
        const maxDate = el.getAttribute('data-max') || null;
        const inline = !popup;

        let current = new Date();
        let selected = input && input.value ? new Date(input.value) : null;
        if (selected && isNaN(selected)) selected = null;

        const fmt = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' });
        const WEEKDAYS = [...Array(7)].map((_, i) => {
          const d = new Date(2024, 0, 1 + i); // Monday-based from a known Monday
          return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(d).slice(0, 2);
        });

        function isoDate(d) {
          return d.toISOString().slice(0, 10);
        }

        function renderCalendar() {
          if (!calendarEl) return;
          const year = current.getFullYear();
          const month = current.getMonth();
          const today = isoDate(new Date());
          const selStr = selected ? isoDate(selected) : null;

          const firstDay = new Date(year, month, 1).getDay();
          const offset = (firstDay === 0 ? 6 : firstDay - 1); // Monday-first
          const daysInMonth = new Date(year, month + 1, 0).getDate();

          let html = `<div class="dp-nav">
            <button type="button" class="dp-nav-btn" data-dp-prev aria-label="Luna anterioară">&#8249;</button>
            <span class="dp-month-label">${fmt.format(new Date(year, month))}</span>
            <button type="button" class="dp-nav-btn" data-dp-next aria-label="Luna următoare">&#8250;</button>
          </div>
          <div class="dp-grid">
            ${WEEKDAYS.map(w => `<span class="dp-weekday">${w}</span>`).join('')}
            ${Array(offset).fill('<span></span>').join('')}
            ${[...Array(daysInMonth)].map((_, i) => {
              const d = i + 1;
              const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
              const isToday = iso === today;
              const isSel = iso === selStr;
              const isMin = minDate && iso < minDate;
              const isMax = maxDate && iso > maxDate;
              return `<button
                type="button"
                class="dp-day${isToday ? ' is-today' : ''}${isSel ? ' is-selected' : ''}"
                data-date="${iso}"
                ${isMin || isMax ? 'disabled' : ''}
                aria-pressed="${isSel}"
                aria-label="${iso}"
              >${d}</button>`;
            }).join('')}
          </div>`;

          calendarEl.innerHTML = html;

          calendarEl.querySelector('[data-dp-prev]').addEventListener('click', () => {
            current = new Date(year, month - 1, 1);
            renderCalendar();
          });
          calendarEl.querySelector('[data-dp-next]').addEventListener('click', () => {
            current = new Date(year, month + 1, 1);
            renderCalendar();
          });
          calendarEl.querySelectorAll('[data-date]').forEach(btn => {
            btn.addEventListener('click', () => {
              const iso = btn.getAttribute('data-date');
              selected = new Date(iso);
              if (input) input.value = iso;
              el.dispatchEvent(new CustomEvent('date-picker:change', { bubbles: true, detail: { value: iso } }));
              renderCalendar();
              if (!inline) close();
            });
          });
        }

        function open() {
          if (!popup) return;
          popup.hidden = false;
          renderCalendar();
        }

        function close() {
          if (!popup) return;
          popup.hidden = true;
        }

        function toggle() {
          popup && (popup.hidden ? open() : close());
        }

        if (inline) renderCalendar();

        if (input) {
          input.addEventListener('click', toggle);
          input.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
            if (e.key === 'Escape') close();
          });
        }

        document.addEventListener('click', e => {
          if (!el.contains(e.target)) close();
        });
      });
    },
  };
})(Drupal);
