var palabra = "Ana";
var palabraReversa = "";

palabra = palabra.toLowerCase();

for (var i = palabra.length - 1; i >= 0; i--) {
  palabraReversa += palabra[i];
}

if (palabra === palabraReversa) {
  console.log(palabra + " es un palíndromo.");
} else {
  console.log(palabra + " no es un palíndromo.");
}
