document.querySelectorAll('.Menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href'); // Obtiene el id del destino
        const targetElement = document.querySelector(targetId); // Encuentra el elemento
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajusta según tu diseño
                behavior: 'smooth' // Hace el desplazamiento suave
            });
        }
    });
});


window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let container = document.querySelector('.container');

    if (width < 600) {
        container.style.flexDirection = 'column';
    } else {
        container.style.flexDirection = 'row';
    }
});
