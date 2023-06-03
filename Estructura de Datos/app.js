//! Estructura de DATOS

//todo Agrega elementos a un arreglo con push() y unshift()
//*La longitud de un arreglo, así como los tipos de datos que puede contener, no es fija. Los arreglos pueden ser definidos con la cantidad de elementos que se desee, y dichos elementos pueden ser agregados o removidos con el tiempo; en otras palabras, los arreglos son mutables. En este desafío, veremos dos métodos con los que podemos modificar un arreglo: Array.push() y Array.unshift().

//*Ambos métodos toman uno o más elementos como parámetros y los agregan al arreglo que hizo la llamada; el método push() agrega los elementos al final del arreglo, mientras que unshift() los agrega al inicio.

//Hemos definido una función, mixedNumbers, a la cual le estamos pasando un arreglo como argumento. Modifica la función utilizando push() y unshift() para agregar 'I', 2, 'three' al principio del arreglo y 7, 'VIII', 9 al final, de tal modo que el arreglo devuelto contenga las representaciones de los números del 1 al 9 en orden.

console.clear()
function mixedNumbers(arr) {
  // Cambia solo el código debajo de esta línea
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three')
  // Cambia solo el código encima de esta línea
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));


//todo Elimina elementos de un arreglo con pop() y shift()
//* La diferencia clave entre pop() y shift() y sus primos push() y unshift(), es que ninguno de los dos métodos toma parámetros, y cada uno sólo permite modificar un arreglo por un solo elemento a la vez.

//Hemos definido una función, popShift, el cual toma un arreglo como argumento y devuelve un nuevo arreglo. Modifica la función, usando pop() y shift(), para eliminar el primer y el último elemento del arreglo, y asignar los elementos eliminados a sus correspondientes variables, de modo que el arreglo que se devuelva contenga sus valores.

console.clear();
function popShift(arr) {
  let popped = arr.pop(); // Cambia esta línea
  let shifted = arr.shift(); // Cambia esta línea
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

//todo Elimina elementos usando splice()
//*splice() puede tomar hasta 3 parámetros, pero por ahora, nos centraremos sólo en los 2 primeros. Los primeros dos parámetros de splice() son enteros que representan índices, o posiciones, de elementos en el arreglo a la que splice() está siendo llamado. Y recuerda que los arreglos están indexados en cero, por lo que para indicar el primer elemento de un arreglo, usaríamos 0. El primer parámetro de splice() representa el índice del arreglo a partir del cual se empiezan a eliminar los elementos, mientras que el segundo parámetro indica el número de elementos a eliminar. 
//*splice() no sólo modifica el arreglo que llama, sino que también devuelve un nuevo arreglo que contiene el valor de los elementos eliminados

//Hemos inicializado un arreglo arr. Usa splice() para eliminar elementos de arr, de forma que sólo contenga elementos que sumen el valor de 10.

console.clear()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Cambia solo el código debajo de esta línea
arr.splice(1, 4)
// Cambia solo el código encima de esta línea
console.log(arr);

//todo Agrega elementos usando splice()
//Hemos definido una función, htmlColorNames, que toma un arreglo de colores HTML como argumento. Modifica la función usando splice() para eliminar los dos primeros elementos del arreglo y agrega 'DarkSalmon' y 'BlanchedAlmond' en sus respectivos lugares.

function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//todo Copia elementos de un arreglo usando slice()
