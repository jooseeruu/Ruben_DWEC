// Definimos una clase llamada Familia
class Familia {
  /**
   * Crea una nueva instancia de la clase Familia.
   * @param {Array} miembros - Los miembros de la familia.
   * @param {Array} tareas - Las tareas que deben realizar los miembros de la familia.
   */
  constructor(miembros, tareas) {
    this.miembros = miembros;
    this.tareas = tareas;
  }

  /**
   * Este método asigna las tareas a los miembros de la familia de manera equitativa.
   * @param {Number} semanas - El número de semanas para las que se planificarán las tareas.
   */
  planificarTareas(semanas) {
    // Imprimimos el nombre de la familia
    console.log(`FAMILIA ${this.miembros[0].toUpperCase()}`);
    // Recorremos cada semana
    for (var i = 0; i < semanas; i++) {
      // Imprimimos el número de la semana
      console.log(`Semana ${i + 1}:`);
      // Recorremos cada tarea
      for (var j = 0; j < this.tareas.length; j++) {
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

// Creamos una nueva instancia de la clase Familia para la familia Sastre
var sastre = new Familia(
  ["sastre", "madre", "hijo", "hija"],
  ["poner lavadora", "limpiar cocina", "limpiar baño"]
);
// Llamamos al método planificarTareas para la familia Sastre
sastre.planificarTareas(52);

// Creamos una nueva instancia de la clase Familia para la familia Torrens
var torrens = new Familia(
  ["torrens", "madre", "hijo", "hija"],
  ["planchar", "limpiar baño"]
);
// Llamamos al método planificarTareas para la familia Torrens
torrens.planificarTareas(4);

// Creamos una nueva instancia de la clase Familia para la familia Moll
var moll = new Familia(
  ["moll", "madre", "hijo", "hija grande", "hija pequeña"],
  ["poner lavadora","limpiar cocina","limpiar comedor","planchar","limpiar baño"]
);
// Llamamos al método planificarTareas para la familia Moll
moll.planificarTareas(12);

