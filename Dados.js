function Dado(numCaras) {
    this.numCaras = numCaras;
    this.tirarDado = function() {
        return Math.floor(Math.random() * this.numCaras) + 1;
    }
}


var CaraCruz = new Dado(2);
var Parchis = new Dado(6);
var Rol = new Dado(12);


var puntuacionUsuarioCaraCruz = CaraCruz.tirarDado();
var puntuacionUsuarioParchis = Parchis.tirarDado();
var puntuacionUsuarioRol = Rol.tirarDado();

console.log("Puntuación del usuario con CaraCruz: " + puntuacionUsuarioCaraCruz);
console.log("Puntuación del usuario con Parchis: " + puntuacionUsuarioParchis);
console.log("Puntuación del usuario con Rol: " + puntuacionUsuarioRol);


if (puntuacionUsuarioCaraCruz === 1) {
    console.log("¡El usuario gana en el dado de CaraCruz!");
} else {
    console.log("El usuario no gana en el dado de CaraCruz.");
}

if (puntuacionUsuarioParchis === 1) {
    console.log("¡El usuario gana en el dado de Parchis!");
} else {
    console.log("El usuario no gana en el dado de Parchis.");
}

if (puntuacionUsuarioRol === 1) {
    console.log("¡El usuario gana en el dado de Rol!");
} else {
    console.log("El usuario no gana en el dado de Rol.");
}



