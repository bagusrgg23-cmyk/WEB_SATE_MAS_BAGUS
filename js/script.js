// Navigasi mobile dan filter kategori menu.
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    });
  }

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a[data-page]').forEach(function (link) {
    if (link.dataset.page === currentFile) {
      link.classList.add('is-current');
      link.setAttribute('aria-current', 'page');
    }
  });

  const filterButtons = document.querySelectorAll('.filter-button');
  const menuCards = document.querySelectorAll('.menu-card');
  const emptyState = document.querySelector('.empty-state');

  if (filterButtons.length && menuCards.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const selected = button.dataset.filter;
        let visibleCount = 0;

        filterButtons.forEach(function (item) {
          const active = item === button;
          item.classList.toggle('is-active', active);
          item.setAttribute('aria-pressed', String(active));
        });

        menuCards.forEach(function (card) {
          const shouldShow = selected === 'semua' || card.dataset.category === selected;
          card.hidden = !shouldShow;
          if (shouldShow) visibleCount += 1;
        });

        if (emptyState) emptyState.hidden = visibleCount !== 0;
      });
    });
  }
});
