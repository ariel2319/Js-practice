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
//*El siguiente método que cubriremos es slice(). En lugar de modificar un arreglo, slice() copia o extrae un número determinado de elementos a un nuevo arreglo, dejando intacto el arreglo al que se llama. slice() toma sólo 2 parámetros: el primero es el índice en el que se inicia la extracción, y el segundo es el índice en el que se detiene la extracción (la extracción se producirá hasta el índice, pero sin incluir el elemento en este índice)

//Hemos definido una función, forecast, que toma un arreglo como argumento. Modifica la función usando slice() para extraer información del arreglo de argumentos y devuelve un nuevo arreglo que contenga los elementos warm y sunny.

console.clear();
function forecast(arr) {
  // Cambia solo el código debajo de esta línea
  return arr.slice(2, 4)
}
// Cambia solo el código encima de esta línea
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


//todo Copia un arreglo con el operador de propagación
//* operador de propagación de ES6 nos permite copiar fácilmente todos los elementos de una arreglo, en orden, con una sintaxis simple y altamente legible. La sintaxis de propagación simplemente se ve así: ...

//Hemos definido una función, copyMachine que toma arr (un arreglo) y num (un número) como argumentos. Se supone que la función devuelve un nuevo arreglo compuesto por num copias de arr. Hemos hecho la mayor parte del trabajo por ti, pero aún no funciona del todo bien. Modifica la función usando sintaxis de propagación para que funcione correctamente (sugerencia: ¡otro método que ya hemos cubierto podría ser útil aquí!).

console.clear()
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr])
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));


//todo Combina arreglos con el operador de propagación
//*Otra gran ventaja del operador de propagación es la capacidad de combinar arreglos, o de insertar todos los elementos de un arreglo en otro, en cualquier índice. 
//Hemos definido una función spreadOut que devuelve la variable sentence. Modifica la función usando el operador de propagación para que devuelva el arreglo ['learning', 'to', 'code', 'is', 'fun'].

console.clear()
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Cambia esta línea
  return sentence;
}
console.log(spreadOut());

//todo Comprueba la presencia de un elemento con indexOf()
//indexOf() puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en un arreglo. Hemos definido una función, quickCheck, que toma un arreglo y un elemento como argumentos. Modifica la función usando indexOf() para que devuelva true si el elemento pasado existe en el arreglo, y false si no existe.

console.clear()
function quickCheck(arr, elem) {
  // Cambia solo el código debajo de esta línea
  if (arr.indexOf(elem) >= 0 && arr.indexOf(elem) < arr.length)
    return true

  return false
  // Cambia solo el código encima de esta línea
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


//todo Itera a través de todos los elementos de un arreglo utilizando bucles "for"
//Hemos definido una función, filteredArray, que toma arr, un arreglo anidado, y elem como argumentos, y devuelve un nuevo arreglo. elem representa un elemento que puede o no estar presente en uno o más de los arreglos anidados dentro de arr. Modifica la función, usando un bucle for, para que devuelva una versión filtrada del arreglo pasado de forma que cualquier arreglo anidado dentro de arr que contenga elem haya sido eliminado.

console.clear()
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) < 0 || arr[i].indexOf(elem) > arr.length) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

//todo Crea arreglos complejos multidimensionales
//Hemos definido una variable, myNestedArray, como un arreglo. Modifica myNestedArray, utilizando cualquier combinación de cadenas, números y booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad (recuerda que el arreglo más externo es el nivel 1). En algún lugar del tercer nivel, incluye la cadena deep, en el cuarto nivel, incluye la cadena deeper y en el quinto nivel, incluye la cadena deepest.

console.clear();
let myNestedArray = [
  // Cambia solo el código debajo de esta línea
  ['unshift', false, 1, 2, 3, 'complex', [
    'deep', [
      'deeper', [
        1, 'deepest'
      ]
    ]
  ], 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Cambia solo el código encima de esta línea
];

//todo Agrega pares clave-valor a objetos de JavaScript
//Se ha creado un objeto foods con tres entradas. Usando la sintaxis de tu elección, agrega tres entradas más: bananas con el valor de 13, grapes con el valor de 35, y strawberries con el valor de 27.

console.clear()
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
const grapes = 'grapes'
foods[grapes] = 35;
foods.strawberries = 27;

console.log(foods.apples);

//todo Usa la palabra clave "delete" para eliminar las propiedades de los objetos

let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Cambia solo el código debajo de esta línea
delete foods2.oranges;
delete foods2.plums;
delete foods2.strawberries;
// Cambia solo el código encima de esta línea

console.log(foods2);

//todo Evalúa si un objeto tiene una propiedad
//JavaScript nos proporciona dos maneras diferentes de hacerlo. Uno utiliza el método hasOwnProperty() y el otro utiliza la palabra clave in. Si tenemos un objeto users con una propiedad de Alan, podríamos comprobar su presencia de cualquiera de las siguientes maneras: users.hasOwnProperty('Alan'); 'Alan' in users;

console.clear();
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea<
  if ('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj) return true
  return false
  // Cambia solo el código encima de esta línea
}

console.log(isEveryoneHere(users));

//todo Itera a través de las claves de un objeto con una sentencia "for...in"
//We've defined a function countOnline which accepts one argument, allUsers. Use a for...in statement inside this function to loop through the allUsers object and return the number of users whose online property is set to true. An example of an object which could be passed to countOnline is shown below. Each user will have an online property set to either true or false.
console.clear()
const usersT = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  let count = 0;
  for (const usersTrue in allUsers) {
    console.log(allUsers[usersTrue].online)
    if (allUsers[usersTrue].online == true)
      count++;
  }
  return count
}
console.log(countOnline(usersT));

//todo Genera un arreglo de todas las claves de los objetos con Object.keys()
//Termina de escribir la función getArrayOfUsers para que devuelva un arreglo que contenga todas las propiedades del objeto que recibe como argumento.

console.clear()
let usersO = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Cambia solo el código debajo de esta línea
  const newArr = Object.keys(obj)
  return newArr
  // Cambia solo el código encima de esta línea
}

console.log(getArrayOfUsers(usersO));

//todo Modifica un arreglo almacenado en un objeto
//Echa un vistazo al objeto que hemos proporcionado en el editor de código. El objeto user contiene tres claves. La clave data contiene cinco claves, una de las cuales contiene un arreglo de friends. A partir de esto, puedes ver lo flexibles que son los objetos como estructuras de datos. Hemos empezado a escribir una función addFriend. Termina de escribirla para que tome un objeto user y agregue el nombre del argumento friend al arreglo almacenado en user.data.friends y devuelva ese arreglo.

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Cambia solo el código debajo de esta línea
  userObj.data.friends.push(friend)
  return userObj.data.friends
  // Cambia solo el código encima de esta línea
}

console.log(addFriend(user, 'Pete'));