var palabra = "A na";
var palabraSinEspacios = "";

palabra = palabra.toLowerCase();

for (var i = 0; i < palabra.length; i++) {
    if (palabra[i] !== ' ') {
        palabraSinEspacios += palabra[i];
    }
}

var palabraReversa = "";

for (var i = palabraSinEspacios.length - 1; i >= 0; i--) {
    palabraReversa += palabraSinEspacios[i];
}

if (palabraSinEspacios === palabraReversa) {
    console.log(palabra+" es un palíndromo.");
} else {
    console.log(palabra+" no es un palíndromo.");
}