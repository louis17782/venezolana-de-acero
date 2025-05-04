// Abrir menú y ocultar el botón de la hamburguesa
document.querySelector('.menuOpen').addEventListener('click', () => {
  const blurBackground = document.querySelector('.blur-background');
  const nav = document.querySelector('nav');
  const menuOpen = document.querySelector('.menuOpen');

  blurBackground.classList.toggle('active');
  nav.classList.toggle('active');

  if (nav.classList.contains('active')) {
    menuOpen.classList.add('hidden');
  }
});

document.getElementById('close-menu').addEventListener('click', () => {
  const blurBackground = document.querySelector('.blur-background');
  const nav = document.querySelector('nav');
  const menuOpen = document.querySelector('.menuOpen');

  blurBackground.classList.remove('active');
  nav.classList.remove('active');

  menuOpen.classList.remove('hidden');
});

// hover on projects

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseover', () => {
    const content = project.querySelector('.content');
    content.classList.add('show'); 
  });

  project.addEventListener('mouseout', () => {
    const content = project.querySelector('.content');
    content.classList.remove('show');
  });
});

// Close menu after navigation 
const navLinks = document.querySelectorAll('.navlinks a[href="#home"], .navlinks a[href="#about"], .navlinks a[href="#ivs"], .navlinks a[href="#projects"], .navlinks a[href="#contact"]');

function closeMenuAfterNavigation() {
  document.querySelector('.blur-background').classList.remove('active');
  document.querySelector('nav').classList.remove('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', closeMenuAfterNavigation);
});

//animated

  document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animated");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((el) => observer.observe(el));
  });
