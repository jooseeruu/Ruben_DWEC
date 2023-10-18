// Definimos una "clase" Persona
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Agregamos un método a la "clase" Persona
Persona.prototype.presentarse = function () {
  return `¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
};

// Creamos una instancia de Persona
var juan = new Persona("Juan", 30);

// Usamos el método presentarse
console.log(juan.presentarse()); // Imprime: "¡Hola! Mi nombre es Juan y tengo 30 años."

// Definimos una "clase" Empleado que hereda de Persona
function Empleado(nombre, edad, puesto) {
  // Llamamos al constructor de Persona
  Persona.call(this, nombre, edad);

  // Agregamos la propiedad puesto
  this.puesto = puesto;
}

// Hacemos que Empleado herede los métodos de Persona
Empleado.prototype = Object.create(Persona.prototype);

// Agregamos un método a la "clase" Empleado
Empleado.prototype.describirPuesto = function () {
  return `Trabajo como ${this.puesto}.`;
};

// Creamos una instancia de Empleado
var ana = new Empleado("Ana", 25, "Ingeniera de Software");

// Usamos los métodos de Empleado y Persona
console.log(ana.presentarse()); // Imprime: "¡Hola! Mi nombre es Ana y tengo 25 años."
console.log(ana.describirPuesto()); // Imprime: "Trabajo como Ingeniera de Software."
