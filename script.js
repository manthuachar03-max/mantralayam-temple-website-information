document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  if (!slides.length || !prev || !next) return;
  let current = slides.findIndex(s => s.classList.contains('active'));
  if (current === -1) current = 0;
  function show(i) {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
  }
  prev.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    show(current);
  });
  next.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    show(current);
  });
  // optional: keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prev.click();
    if (e.key === 'ArrowRight') next.click();
  });
});