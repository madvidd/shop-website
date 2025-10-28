function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (!links) return;
  const isOpen = getComputedStyle(links).display !== 'none';
  if (isOpen) {
    links.style.display = 'none';
  } else {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '72px';
    links.style.right = '12px';
    links.style.background = 'color-mix(in srgb, var(--bg) 85%, black)';
    links.style.padding = '12px 16px';
    links.style.border = '1px solid color-mix(in srgb, var(--text) 10%, transparent)';
    links.style.borderRadius = '14px';
    links.style.gap = '12px';
  }
}
