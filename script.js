const nav = document.getElementById('site-nav');
const toggle = document.querySelector('.nav-toggle');
const mobileLayout = window.matchMedia('(max-width: 850px)');

function setNav(open, restoreFocus = false) {
  if (!nav || !toggle) return;
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  if (restoreFocus) toggle.focus();
}

if (nav && toggle) {
  // Without JavaScript the navigation remains visible.
  document.documentElement.classList.add('nav-ready');
  toggle.addEventListener('click', () =>
    setNav(toggle.getAttribute('aria-expanded') !== 'true')
  );
  nav
    .querySelectorAll('a')
    .forEach((link) => link.addEventListener('click', () => setNav(false)));
  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      toggle.getAttribute('aria-expanded') === 'true'
    )
      setNav(false, true);
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setNav(false);
  });
  nav.addEventListener('focusout', (event) => {
    if (
      mobileLayout.matches &&
      event.relatedTarget &&
      !nav.contains(event.relatedTarget) &&
      event.relatedTarget !== toggle
    )
      setNav(false);
  });
  const resetNav = () => setNav(false);
  if (typeof mobileLayout.addEventListener === 'function')
    mobileLayout.addEventListener('change', resetNav);
  else if (typeof mobileLayout.addListener === 'function')
    mobileLayout.addListener(resetNav);
}
