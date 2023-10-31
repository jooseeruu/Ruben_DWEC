// Creación del objeto matematicas con la propiedad pi y la función suma
let matematicas = {
    pi: Math.PI,
    suma: function(...valores) {
        return valores.reduce((a, b) => a + b, 0);
    }
};

// Añadir la función multiplica al objeto matematicas
matematicas.multiplica = function(...valores) {
    return valores.reduce((a, b) => a * b, 1);
};

// Uso del objeto matematicas
console.log(matematicas.pi); // Imprime el valor de pi
console.log(matematicas.suma(1, 2, 3, 4)); // Imprime la suma de los números
console.log(matematicas.multiplica(1, 2, 3, 4)); // Imprime el producto de los números
