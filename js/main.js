function inicializarContenido(contenedores, botonesMas, botonesMenos) {
    botonesMas.forEach((btnMas, index) => {
        const btnMenos = botonesMenos[index];
        const contenedor = contenedores[index];

        btnMas.addEventListener('click', () => {
            contenedor.classList.remove('hidden');
            btnMas.classList.add('hidden');
            btnMenos.classList.remove('hidden');
        });

        btnMenos.addEventListener('click', () => {
            contenedor.classList.add('hidden');
            btnMenos.classList.add('hidden');
            btnMas.classList.remove('hidden');
        });
    });
}

// Seleccionar todos los elementos con el mismo selector
const contenedores = document.querySelectorAll('.contenido');
const botonesMas = document.querySelectorAll('.boton-mas');
const botonesMenos = document.querySelectorAll('.boton-menos');

// Inicializar la lógica para todos los conjuntos de elementos
inicializarContenido(contenedores, botonesMas, botonesMenos);
