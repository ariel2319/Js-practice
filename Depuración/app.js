//! DEPURACIÓN - DEBUGGING

//?Utiliza typeof para comprobar el tipo de una variable

let seven = 7;
let three = "3";
console.log(seven + three);
// Cambia solo el código debajo de esta línea
console.log(typeof (seven))
console.log(typeof (three))

//?Ten cuidado al reinicializar variables dentro de un bucle
//La siguiente función debe crear un arreglo bidimensional (matriz) con m filas (rows) y n columnas (columns) de ceros. Desafortunadamente, no está produciendo la salida esperada porque la variable row no está siendo reiniciada (devuelta a un arreglo vacío) en el bucle exterior. Corrige el código para que devuelva una matriz 3x2 de ceros correcta, que se parezca a [[0, 0], [0, 0], [0, 0]].

function zeroArray(m, n) {
  // Crea un arreglo de 2 dimensiones con m filas y n columnas de ceros
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Agrega la fila número m a newArray
    row = [];
    for (let j = 0; j < n; j++) {
      // Inserta n ceros a la fila actual para crear las columnas
      row.push(0);
    }
    // Inserta la fila actual, que ahora contiene n ceros, al arreglo
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
