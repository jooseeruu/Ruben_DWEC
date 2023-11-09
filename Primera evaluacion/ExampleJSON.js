let json = `{
    "nombre": "Juan",
    "edad": 30,
    "casado": false,
    "hijos": null,
    "mascotas": ["Rex", "Firulais"],
    "direccion": {
        "calle": "Calle 123",
        "ciudad": "Madrid",
        "pais": "España"
    },
    "hobbies": [
        {
            "nombre": "fútbol",
            "nivel": "intermedio"
        },
        {
            "nombre": "cocina",
            "nivel": "avanzado"
        }
    ]
}`;

let objeto = JSON.parse(json);

console.log(objeto);
