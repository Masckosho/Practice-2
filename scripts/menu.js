const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// overlay
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

function toggleMenu() {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  mainNav.classList.toggle('active');
  navOverlay.classList.toggle('active');

  document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// close on link click (mobile only)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
      toggleMenu();
    }
  });
});

// close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav.classList.contains('active')) {
    toggleMenu();
  }
});

// close on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
    toggleMenu();
  }
});

// Scroll to top button
const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (!scrollTopButton) return;
  if (window.scrollY > 300) scrollTopButton.classList.add('visible');
  else scrollTopButton.classList.remove('visible');
});

if (scrollTopButton) {
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

