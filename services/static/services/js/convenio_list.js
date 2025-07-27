document.addEventListener('DOMContentLoaded', () => {

    /**
     * Parte 2: Animaciones de Entrada
     */
    const animatedElements = document.querySelectorAll('.animar-entrada');
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay, 10) || 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {

    /**
     * Se eliminó la Parte 1 (Lógica del Filtro Isotope).
     * Solo queda la Parte 2 (Animaciones de Entrada).
     */
    const animatedElements = document.querySelectorAll('.animar-entrada');
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay, 10) || 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});