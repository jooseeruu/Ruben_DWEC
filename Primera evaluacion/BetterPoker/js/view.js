// Función para mostrar la mano en la ventana del juego
function mostrarMano(mano, ventana) {
    const body = ventana.document.body;
    body.innerHTML = '';

    for (let i = 0; i < mano.length; i++) {
        const img = ventana.document.createElement('img');
        img.src = 'img/' + mano[i] + '.png';
        img.style.width = '20%';
        body.appendChild(img);
    }

    const button = ventana.document.createElement('button');
    button.textContent = 'Refrescar';
    button.addEventListener('click', jugar);
    body.appendChild(button);

    const button2 = ventana.document.createElement('button');
    button2.textContent = 'CerrarVentana';
    button2.addEventListener('click', cerrarVentana);
    body.appendChild(button2);
}

// Función para mostrar el resultado del juego
function mostrarResultado(mano, ventana) {
    const p = ventana.document.createElement('p');
    ventana.document.body.appendChild(p);

    if (esPareja(mano)) {
        p.textContent = "¡Has ganado, tienes parejas!"; 
    } else {
        p.textContent = "Has perdido. ¡Inténtalo de nuevo!"; 
    }
}
