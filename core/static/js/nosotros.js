document.addEventListener('DOMContentLoaded', () => {

    /**
     * Parte 1: Animaciones de elementos al hacer scroll.
     * Utiliza Intersection Observer para detectar cuándo un elemento es visible.
     */
    const animatedElements = document.querySelectorAll(
        '.animar-desde-izquierda, .animar-desde-derecha, .animar-expandir, .animar-desde-abajo, .fade-in-down'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento está en la pantalla, añade la clase 'is-visible' para activar la animación
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    });

    // Observa cada uno de los elementos a animar
    animatedElements.forEach(el => observer.observe(el));


    /**
     * Parte 2: Efecto interactivo del logo en la sección principal.
     * Mueve el logo en respuesta al movimiento del mouse.
     */
    const heroSection = document.querySelector('.hero-nosotros');
    const logo = document.querySelector('.hero-logo-interactive');

    if (heroSection && logo) {
        heroSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = heroSection;
            
            // Calcula la posición del mouse de -0.5 a 0.5 relativo al centro de la sección
            const xPos = (clientX / offsetWidth) - 0.5;
            const yPos = (clientY / offsetHeight) - 0.5;

            const moveStrength = 25; // Define qué tanto se moverá el logo
            const translateX = -xPos * moveStrength;
            const translateY = -yPos * moveStrength;

            // Aplica la transformación al logo
            logo.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });

        // Resetea la posición del logo cuando el mouse sale de la sección
        heroSection.addEventListener('mouseleave', () => {
            logo.style.transform = 'translate(0, 0)';
        });
    }

});