// Variable para la ventana del juego
let ventana;

// Evento para iniciar el juego
document.getElementById('jugar').addEventListener('click', iniciarJuego);

// Evento para cerrar el juego
document.getElementById('cerrarTodo').addEventListener('click', cerrarJuego);

// Función para iniciar el juego
function iniciarJuego() {
    if (!ventana || ventana.closed) {
        ventana = window.open("", "", "width=800,height=300");
    }
    jugar();
}

// Función para cerrar el juego
function cerrarJuego() {
    if (window) {
        ventana.close()
        window.close();
    }
}

// Función para cerrar solo la ventana emergente
function cerrarVentana() {
    if (ventana) {
        ventana.close();
    }
}

// Función principal del juego
function jugar() {
    const cartas = crearMazo();
    const mano = obtenerMano(cartas);
    mostrarMano(mano, ventana);
    mostrarResultado(mano, ventana);
}
