// Definimos una clase llamada Familia
class Familia {
  constructor(miembros, tareas) {
    this.miembros = miembros;
    this.tareas = tareas;
  }

  // Este método asigna las tareas a los miembros de la familia
  planificarTareas(semanas) {
    // Recorremos cada semana
    for (let i = 0; i < semanas; i++) {
      // Imprimimos el número de la semana
      console.log(`Semana ${i + 1}:`);
      // Recorremos cada tarea
      for (let j = 0; j < this.tareas.length; j++) {
        // Imprimimos la tarea y el miembro de la familia que debe realizarla
        // Usamos (%) para asignar las tareas de manera equitativa
        console.log(
          `Tarea: ${this.tareas[j]}, Miembro: ${
            this.miembros[j % this.miembros.length]
          }`
        );
      }
    }
  }
}

let sastre = new Familia(
  ["padre", "madre", "hijo", "hija"],
  ["poner lavadora", "limpiar cocina", "limpiar baño"]
);
// Llamamos al método planificarTareas para la familia Sastre
sastre.planificarTareas(52);

let torrens = new Familia(
  ["padre", "madre", "hijo", "hija"],
  ["planchar", "limpiar baño"]
);

torrens.planificarTareas(4);

let moll = new Familia(
  ["padre", "madre", "hijo", "hija grande", "hija pequeña"],
  [
    "poner lavadora",
    "limpiar cocina",
    "limpiar comedor",
    "planchar",
    "limpiar baño",
  ]
);

moll.planificarTareas(12);
