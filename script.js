// Smooth scroll bouton "Voir mes projets"
document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('#projets').scrollIntoView({ behavior: 'smooth' });
});

// Animation au scroll
const animateElements = document.querySelectorAll('.animate');

function showOnScroll() {
    const triggerBottom = window.innerHeight / 5 * 4;

    animateElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);

// Lancer au chargement
showOnScroll();
