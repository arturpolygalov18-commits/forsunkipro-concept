const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Открыть меню' : 'Закрыть меню');
  mobileNav.hidden = open;
});

document.querySelector('#trade-request')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const details = document.querySelector('#request-details').value.trim();
  if (!details) return;
  const subject = 'Запрос наличия и оптового расчёта для СТО';
  const body = `Здравствуйте!\n\nПрошу уточнить наличие и оптовую цену по позициям:\n${details}\n\nКонтактное лицо и телефон:\n`;
  window.location.href = `mailto:forsunkipro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
