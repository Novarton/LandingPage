// Animar elementos al hacer scroll usando Intersection Observer
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__fadeInUp');
        entry.target.classList.remove('opacity-0');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.scroll-animate').forEach(el => {
    el.classList.add('opacity-0');
    observer.observe(el);
  });

  // Animación lateral izquierda para imagen sección 1
  const observerImgLeft = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__fadeInLeft');
        entry.target.classList.remove('opacity-0');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.scroll-animate-img').forEach(el => {
    el.classList.add('opacity-0');
    observerImgLeft.observe(el);
  });

  // Animación lateral derecha para imagen sección 2
  const observerImgRight = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__fadeInRight');
        entry.target.classList.remove('opacity-0');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.scroll-animate-img-right').forEach(el => {
    el.classList.add('opacity-0');
    observerImgRight.observe(el);
  });
});