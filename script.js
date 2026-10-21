(() => {
  'use strict';

  // Only show external profile links that the owner has explicitly configured.
  const links = window.SITE_LINKS || {};
  const contactLinks = document.getElementById('contact-links');
  const fallback = document.getElementById('contact-fallback');
  const entries = [
    {key: 'email', label: 'Email', prefix: 'mailto:', isPrimary: true},
    {key: 'personalEmail', label: 'Personal Email', prefix: 'mailto:'},
    {key: 'cv', label: 'Curriculum vitae', prefix: ''},
    {key: 'googleScholar', label: 'Google Scholar', prefix: ''},
    {key: 'github', label: 'GitHub', prefix: ''},
    {key: 'linkedin', label: 'LinkedIn', prefix: ''}
  ];

  let configuredCount = 0;
  for (const entry of entries) {
    const raw = typeof links[entry.key] === 'string' ? links[entry.key].trim() : '';
    if (!raw) continue;
    let target;
    if (entry.key === 'email' || entry.key === 'personalEmail') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)) continue;
      target = `mailto:${raw}`;
    } else if (entry.key === 'cv' && /^assets\/[\w.\/-]+\.pdf$/i.test(raw)) {
      target = raw;
    } else if (/^https:\/\//i.test(raw)) {
      target = raw;
    } else {
      continue;
    }

    const a = document.createElement('a');
    a.className = entry.isPrimary ? 'button button-light' : 'profile-link';
    a.href = target;
    a.append(document.createTextNode(entry.label + ' '));
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = entry.key === 'email' ? '↗' : '↗';
    a.append(arrow);
    if (target.startsWith('https://')) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    if (entry.key === 'cv') a.setAttribute('download', '');
    contactLinks.append(a);
    configuredCount++;

    if (entry.key === 'cv') {
      const headerCV = document.querySelector('[data-profile-link="cv"]');
      headerCV.href = target;
      headerCV.hidden = false;
    }
  }
  if (configuredCount > 0) fallback.hidden = true;

  // Responsive accessible navigation.
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-navigation');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
  });

  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
