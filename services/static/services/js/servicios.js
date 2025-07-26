document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica para animar elementos al hacer scroll ---
    const animatedElements = document.querySelectorAll('.fade-in');

    if (!animatedElements.length) {
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Obtiene el delay del atributo data-delay, si existe
                const delay = entry.target.dataset.delay || 0;

                // Aplica la animación después del delay
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, parseInt(delay));

                // Deja de observar el elemento una vez que ha sido animado
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});