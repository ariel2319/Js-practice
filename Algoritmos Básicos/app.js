//! BASIC ALGORITHMS
const cls = () => console.clear();
const cl = (...params) => console.log(...params);

//todo Convierte Celsius a Fahrenheit
//La fórmula para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicado por 9/5, más 32.

//Se te da una variable celsius que representa una temperatura en Celsius. Utiliza la variable fahrenheit ya definida y asígnale la temperatura Fahrenheit equivalente a la temperatura Celsius dada. Utiliza la fórmula mencionada anteriormente para ayudarte a convertir la temperatura Celsius a Fahrenheit.
cls()
function convertCtoF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}
convertCtoF(30);

//todo Invierte una cadena
cls()
function reverseString(str) {
  str = str.split("").reverse().join();
  return str;
}
reverseString("hello la");

//todo Factoriza el número
//Devuelve el factorial del entero proporcionado.

cls()
function factorialize(num) {
  if (num == 0) {
    return 1
  }
  for (let i = num - 1; i > 0; i--) {
    num *= i
  }
  console.log(num)
  return num;
}

factorialize(5);

//todo Encuentra la palabra más larga en una cadena
cls();
function findLongestWordLength(str) {
  const text = str.split(" ");
  let wordLong = []

  for (let i = 0; i < text.length; i++) {
    const word = text[i]
    console.log(word)

    if (word.length > wordLong.length)
      wordLong = word
  }
  console.log(text, wordLong)
  return wordLong.length;
}

findLongestWordLength("hola bebes esto es");

//todo Devuelve los números mayores en los arreglos
cls()

function largestOfFour(arr) {
  let arrAux = [];
  let aux = 0;
  for (let i = 0; i < arr.length; i++) {
    aux = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (aux < arr[i][j]) {
        aux = arr[i][j]
        console.log(aux)
      }
    }
    arrAux.push(aux)
  }
  console.log(arrAux)
  return arrAux;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//todo Confirma el final

function confirmEnding(str, target) {
  let finishWord = str.slice(str.length - target.length, str.length)
  if (finishWord === target)
    return true

  return false
}

confirmEnding("Bastian", "nasd");

//todo Repite una cadena repite una cadena
//Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat().
cls();
function repeatStringNumTimes(str, num) {
  let aux = "";

  if (num < 0) return aux;

  for (let i = 0; i < num; i++) {
    aux += str;
    console.log(aux)
  }
  return aux
}

repeatStringNumTimes("abc", 3);

//todo Recorta una cadena
//Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.

cls();
function truncateString(str, num) {
  let aux;
  if (str.length > num) {
    aux = str.slice(0, num) + "..."
    //console.log(aux)
    return aux;
  }

  return aux;
}
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
//truncateString("A-tisket a-tasket A green and yellow basket", 8);

//todo Buscadores Guardianes
//Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa la prueba. la función debería devolver undefined.

cls()
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return num
    }
  }
  return undefined;
}

//findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; })

//todo Boo who (Booleano Quién)
//Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false. Booleanos primitivos son true y false.

function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);


//todo Haz que la primera letra de una palabra este en mayúscula
//Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas. Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.

function titleCase(str) {
  str = str.split(' ');

  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    let firstWord = word.charAt(0).toUpperCase();
    let restWord = word.slice(1).toLowerCase();
    console.log(firstWord, restWord)
    str[i] = firstWord + restWord;
  }
  return str.join(' ');
}

let test = titleCase("I'm a little tea pot");
console.log(test);


//todo Cortar y rebanar
//Tienes dos arreglos y un índice. Copia cada elemento del primer arreglo en el segundo arreglo, en orden. Comienza insertando elementos en el índice n del segundo arreglo.
//Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.
cls()
function frankenSplice(arr1, arr2, n) {
  let aux = [...arr2];
  aux.splice(n, 0, ...arr1)
  console.log(aux)
  return aux;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


//todo Rebote falsy
// Elimina todos los valores falsos de un arreglo. Devuelve un nuevo arreglo; no alteres el arreglo original. Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN. Sugerencia: Intenta convertir cada valor a booleano.

cls()
function bouncer(arr) {
  let aux = []
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i] === true) {
      aux.push(arr[i])
    }
    console.log(!!arr[i])
  }
  console.log(aux)
  return aux;
}

bouncer([7, "ate", "", false, 9]);

//todo Donde pertenezco
//Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) una vez que éste haya sido ordenado. El valor devuelto debe ser un número.

//Por ejemplo, getIndexToIns([1,2,3,4], 1.5) debe devolver 1 por que este valor es más grande que 1 (índice 0), pero menor que 2 (índice 1).

//De esta forma, getIndexToIns([20,3,5], 19) debe devolver 2 porque una vez ordenado el arreglo, éste se verá así [3,5,20] y 19 es menor que 20 (índice 2) y mayor que 5 (índice 1).

cls()
function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b
  })
  for (let count = 0; count < arr.length; count++) {
    console.log(count, arr[count], arr.length)
    if (arr[count] >= num) {
      console.log(count);
      return count
    }
  }
  return arr.length
}
getIndexToIns([10, 20, 40, 30, 50], 35);

//todo Mutaciones
//Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.
cls()
function mutation(arr) {
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase();
  let aux = 0;
  console.log(word1, word2);

  for (let i = 0; i < word1.length; i++) {

    for (let j = 0; j < word2.length; j++) {
      if (word1[i] == word2[j]) {
        aux++;
        j = word2.length;
      }
    }
  }
  console.log(aux, word2.length)
  if (aux != word2.length) return false

  return true;

}
console.log(mutation(["hello", "HeLol"]))