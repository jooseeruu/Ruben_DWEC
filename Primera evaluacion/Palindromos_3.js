var palabra = "A ná";
var palabraSinEspacios = "";
var palabraSinAcentos = "";

palabra = palabra.toLowerCase();

for (var i = 0; i < palabra.length; i++) {
    if (palabra[i] !== ' ') {
        var letra = palabra[i];
        switch(letra) {
            case 'á': letra = 'a'; break;
            case 'é': letra = 'e'; break;
            case 'í': letra = 'i'; break;
            case 'ó': letra = 'o'; break;
            case 'ú': letra = 'u'; break;
        }
        palabraSinEspacios += letra;
    }
}

palabraSinAcentos = palabraSinEspacios;

var palabraReversa = "";

for (var i = palabraSinAcentos.length - 1; i >= 0; i--) {
    palabraReversa += palabraSinAcentos[i];
}

if (palabraSinAcentos === palabraReversa) {
    console.log(palabra+" es un palíndromo.");
} else {
    console.log(palabra+" no es un palíndromo.");
}