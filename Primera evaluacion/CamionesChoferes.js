// Definimos los conductores y los camiones
let conductores = ["Juan", "Pep", "Toni"];
let camiones = ["Man", "Scania", "Volvo", "Iveco"];

// Creamos un objeto vacío para almacenar el horario
let horario = {};

// Recorremos las semanas del 1 al 99
for (let semana = 1; semana <= 99; semana++) {
  // Para cada semana, creamos un objeto vacío dentro del objeto 'horario'
  horario[semana] = {};

  // Recorremos la lista de conductores
  for (let i = 0; i < conductores.length; i++) {
    // Calculamos el índice del camión basado en la semana actual y el índice del conductor
    let camionIndex = (semana + i) % camiones.length;

    // Asignamos el camión al conductor en la semana correspondiente
    horario[semana][conductores[i]] = camiones[camionIndex];
  }
}

// Imprimimos el horario
console.log(horario);
