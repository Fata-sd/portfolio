// Animation au scroll
const animateElements = document.querySelectorAll('.animate');
function showOnScroll() {
  const triggerBottom = window.innerHeight / 5 * 4;
  animateElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add('show');
  });
}
window.addEventListener('scroll', showOnScroll);
showOnScroll();

// Scroll fluide
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
