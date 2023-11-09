// Creación del mazo de cartas
function crearMazo() {
    const mazo = [];
    for (let i = 1; i <= 52; i++) {
        mazo.push(i);
    }
    return mazo;
}

// Función para obtener una mano de 5 cartas aleatorias
function obtenerMano(cartas) {
    const mano = [];
    for (let i = 0; i < 5; i++) {
        const indice = Math.floor(Math.random() * cartas.length);
        mano.push(cartas[indice]);
        cartas.splice(indice, 1);
    }
    return mano;
}

// Función para verificar si la mano tiene una pareja
function esPareja(mano) {
    const counts = {};
    for (let i = 0; i < mano.length; i++) {
        const number = Math.ceil(mano[i] / 4);
        counts[number] = (counts[number] || 0) + 1;
        if (counts[number] >= 2) {
            return true;
        }
    }
    return false;
}
