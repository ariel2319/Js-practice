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
  let aux = []
  if (num < 0) return aux;

  for (let i=0; i<num; i++){
    str = 
  }

}

repeatStringNumTimes("abc", 3);