//! Functional Programming
let cls = function () { console.clear() }

//todo Aprende sobre programación Funcional
//es un estilo de programación donde las soluciones son simples, funciones aisladas, sin ningún efecto secundario fuera del ámbito de la función: INPUT -> PROCESS -> OUTPUT
//La programación funcional se refiere a:
//?Funciones aisladas: sin dependencia alguna del estado del programa, el cual incluye variables globales sujetas a cambios
//?Funciones puras: una misma entrada siempre da la misma salida
//?Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función son cuidadosamente controlados
//*En el editor de código, las funciones prepareTea y getTea ya están definidas. Llama a la función getTea para obtener 40 tazas de té para el equipo y guárdalas en la variable tea4TeamFCC.
cls()
// Función que retorna una cadena de texto representando una taza de té verde
const prepareTea = () => 'greenTea';

/*
Dada una función (representando el tipo de té) y el número de tazas necesarias, la siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4TeamFCC = getTea(40);
// Cambia solo el código encima de esta línea


//todo Comprende la terminología de la programación funcional

//?terminología => Callbacks son las funciones que se deslizan o pasan a otra función para decidir la invocación de esa función. Es posible que las hayas visto pasar a otros métodos, por ejemplo en filter, la función callback le dice a JavaScript los criterios para filtrar un arreglo.
//Las funciones que pueden ser asignadas a una variable, pasadas a otra función o devueltas desde otra función como cualquier otro valor normal, se llaman funciones de primera clase. En JavaScript, todas las funciones son funciones de primera clase.
//Las funciones que toman una función como argumento, o devuelven una función como valor de retorno, se denominan funciones higher order.
//Cuando las funciones se pasan o se devuelven desde otra función, las funciones que se pasaron o devolvieron se pueden llamar lambda
//*Prepara 27 tazas de té verde (green tea) y 13 tazas de té negro (black tea) y almacénalas en las variables tea4GreenTeamFCC y tea4BlackTeamFCC, respectivamente. Ten en cuenta que la función getTea ha sido modificada por lo que ahora recibe una función como primer argumento.
cls()
// Función que retorna una cadena de texto representando una taza de té verde
const prepareGreenTea = () => 'greenTea';
// Función que retorna una cadena de texto representando una taza de té negro
const prepareBlackTea = () => 'blackTea';
/*
Dada una función (representando el tipo de té) y el número de tazas necesarias, la siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4GreenTeamFCC = getTea2(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 13);
// Cambia solo el código encima de esta línea
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


//todo Comprende los peligros de usar el código imperativo
//De forma similar, un estilo imperativo en la programación es aquel que le da a la computadora un conjunto de sentencias para llevar a cabo una tarea. A menudo las sentencias cambian el estado del programa, como actualizar variables globales. 
//Por el contrario, la programación funcional es una forma de programación declarativa. Le dice al ordenador lo que quieres hacer llamando a un método o función.
cls()
// tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function (tabs) {
  this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
};

// Cuando unes dos ventanas en una
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Cuando abres una nueva pestaña al final
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
  return this;
};

// Cuando cierras una pestaña
Window.prototype.tabClose = function (index) {

  // Cambia solo el código debajo de esta línea
  const tabsBeforeIndex = this.tabs.splice(0, index); // Obtiene las pestañas antes de la pestaña
  const tabsAfterIndex = this.tabs.splice(1); // Obtiene las pestañas después de la pestaña
  //? modifico el índice a 1, xq en el primer splice "saqué" los elementos que seleccioné delarreglo "this.tabs", entonces en la posición 0 quedó el elemento a eliminar, por ende solo "saco" de la siguiente posición en adelante

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos
  // Cambia solo el código encima de esta línea

  return this;
};

// Vamos a crear tres ventanas del navegador
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

// Ahora completa la apertura de la pestaña, cierre, y otras operaciones
const finalTabs = socialWindow
  .tabOpen() // Abre una nueva pestaña para memes de gatos
  .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
console.log(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'])


//todo Evita mutaciones y efectos secundarios utilizando programación funcional
//Uno de los principios fundamentales de la programación funcional es no cambiar las cosas. Los cambios conducen a errores. Es más fácil evitar errores sabiendo que las funciones no cambian nada, incluyendo los argumentos de la función o cualquier variable global.
//Recuerda que en la programación funcional, cambiar o alterar cosas se denomina mutación, y el resultado es conocido como efecto secundario. Una función, idealmente, debe ser una función pura, lo que significa que no provoca ningún efecto secundario.
//* Completa el código de la función incrementer para que devuelva el valor de la variable global fixedValue incrementada en uno.
cls()
// La variable global
let fixedValue = 4;
function incrementer() {
  // Cambia solo el código debajo de esta línea
  return fixedValue + 1;
  // Cambia solo el código encima de esta línea
}


//todo Pasa argumentos para evitar la dependencia externa en una función
/* Otro principio de programación funcional es declarar siempre sus dependencias de forma explícita. Esto significa si una función depende de que una variable u objeto esté presente, después pasa esa variable u objeto directamente a la función como argumento.

Este principio tiene varias consecuencias positivas. La función es más fácil de probar, se sabe exactamente lo que necesita, y no dependerá de nada más en tu programa. */
//*Escribe la función incrementer para que reciba un argumento, y luego devuelva un resultado después de aumentar el valor en uno.
cls()
// La variable global
let fixedValue2 = 4;
// Cambia solo el código debajo de esta línea
function incrementer(num) {
  return num + 1
  // Cambia solo el código encima de esta línea
}


//todo  Refactoriza variables globales por fuera de funciones
//*Reescribe el código para que el arreglo global bookList no sea cambiado dentro de ninguna de las funciones. La función add debe agregar el bookName dado al final del arreglo pasado a esta y devolver un nuevo arreglo (lista). La función remove debe eliminar el bookName dado del arreglo pasado a esta.

//*Nota: ambas funciones deben devolver un arreglo y cualquier nuevo parámetro debe ser añadido antes del parámetro bookName.
cls()
// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(arr, bookName) {
  let aux = [...arr]; //? un arreglo auxiliar para no modificar el original
  aux.push(bookName);
  return aux;
  // Cambia el código encima de esta línea
}
// Cambia el código debajo de esta línea
function remove(arr, bookName) {
  const book_index = arr.indexOf(bookName);
  let aux = [...arr];
  if (book_index >= 0) {
    aux.splice(book_index, 1);
    return aux;
    // Cambia el código encima de esta línea
  }
}
add('pepito')
remove('pepito')

console.log(bookList)

//todo Usa el método "map" para extraer datos de un arreglo
/* 
El método map iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la función callback en cada elemento. Esto lo hace sin mutar el arreglo original.

Cuando se utiliza la función callback, se pasan tres argumentos. El primer argumento es el elemento actual que se está procesando. El segundo es el índice de ese elemento y el tercero es el arreglo al que se llamó el método map.

A continuación se muestra un ejemplo con el método map en el arreglo users para devolver un nuevo arreglo que contiene solo los nombres de los usuarios como elementos. Para que sea más fácil, el ejemplo solo utiliza el primer argumento del callback.
*/

//*El arreglo watchList contiene objetos con información sobre varias películas. Usa map en watchList para asignar un nuevo arreglo de objetos a la variable ratings. Cada película en el nuevo arreglo debe tener solo una tecla title con el nombre de la película, y una tecla rating con la calificación IMDB. El código en el editor utiliza actualmente un bucle for para hacer esto, por lo que debes reemplazar la funcionalidad del bucle con tu expresión map.
cls()
// La variable global
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Cambia solo el código debajo de esta línea
let ratings = [];
ratings = watchList.map(films => ({
  title: films["Title"],
  rating: films["imdbRating"]
}))
/* for (let i = 0; i < watchList.length; i++) {
  ratings.push({ title: watchList[i]["Title"], rating: watchList[i]["imdbRating"] });
}
 */
// Cambia solo el código encima de esta línea

console.log(JSON.stringify(ratings));


//todo Implementa map en un prototipo
// el método map devuelve un arreglo de la misma longitud que el arreglo dentro del que fue llamado.
/* 
En otras palabras, map es una función pura, y su salida depende únicamente de sus entradas. Además, toma otra función como argumento.
Puedes aprender mucho sobre el método map si implementas tu propia versión. Se recomienda utilizar un bucle for o Array.prototype.forEach().
*/
//* Escribe tu propio Array.prototype.myMap(), el cual debe comportarse exactamente como Array.prototype.map(). No debes utilizar el método incorporado map. Se puede acceder a la instancia de Array en el método myMap usando this.
cls()
Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
  for (let count = 0; count < this.length; count++) {
    newArray.push(callback(this[count], count, this))
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};

//todo Usa el método de "filter" para extraer datos de un arreglo
/* 
filter Llama a una función sobre cada elemento del arreglo y devuelve un nuevo arreglo, conteniendo solo los elementos para los cuales la función devolvió un valor de verdadero - Es decir, un valor que devuelve true si paso al constructor Boolean(). En otras palabras, filtra el arreglo, basándose en la función que se le pasa. Al igual que map, hace esto sin necesidad de modificar el arreglo original.

La función callback acepta tres argumentos. El primer argumento es el elemento actual que se está procesando. El segundo es el índice de ese elemento y el tercero es el arreglo sobre el que se llamó al método filter.

A continuación se muestra un ejemplo en el que se utiliza el método filter en el arreglo users para devolver un nuevo arreglo que contiene sólo a los usuarios menores de 30 años. Para que sea más fácil, el ejemplo solo utiliza el primer argumento de la función callback.
        const usersUnder30 = users.filter(user => user.age < 30);
*/
//* La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza una combinación de filter y map en watchList para asignar un nuevo arreglo de objetos con solo title y rating claves. El nuevo arreglo solo debe incluir objetos donde imdbRating es mayor o igual a 8.0. Ten en cuenta que los valores rating se guardan como cadenas en el objeto y puedes necesitar convertirlos en números para realizar operaciones matemáticas en ellos.


cls()
// La variable global
const watchList2 = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Cambia solo el código debajo de esta línea
cls()
let filteredList = watchList2.filter(films => (films["imdbRating"] >= 8));
filteredList = filteredList.map(filmis => ({
  title: filmis["Title"],
  rating: filmis["imdbRating"]
}))
// Cambia solo el código encima de esta línea
console.log(filteredList);


//todo Implementa el método filter en un prototipo
/* 
Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.filter(). No debes utilizar el método incorporado filter. Se puede acceder a la instancia Array en el método myFilter usando this.
*/

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};

//todo Devolver parte de un arreglo mediante el método slice
/*
El método slice devuelve una copia de ciertos elementos de un arreglo. Puede tomar dos argumentos, el primero da el índice de dónde comenzar el corte, el segundo es el índice de dónde terminar el corte (y no es inclusivo). Si no se proporcionan los argumentos, el valor predeterminado es comenzar desde el principio del arreglo hasta el final, la cual es una manera fácil de hacer una copia de todo el arreglo. El método slice no muta el arreglo original, pero devuelve uno nuevo.
  */
//*Utiliza el método slice en la función sliceArray para retornar parte del arreglo anim dados los índices beginSlice y endSlice. La función debe devolver un arreglo.
cls()
function sliceArray(anim, beginSlice, endSlice) {
  // Cambia solo el código debajo de esta línea
  let aux = anim.slice(beginSlice, endSlice)
  return aux
  // Cambia solo el código encima de esta línea
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3))


//todo Remueve elementos de un arreglo usando slice en lugar de splice
/*  
Como vimos en el último desafío, el método slice no muta el arreglo original, pero devuelve uno nuevo que puede ser guardado en una variable. Recuerda que el método slice recibe dos argumentos para indicar el comienzo y el final del segmento (el final es no inclusivo) y retorna estos elementos en un nuevo arreglo. Usar el método slice en lugar de splice ayuda a prevenir cualquier efecto colateral de mutar un arreglo.
*/
//*Reescribe la función nonMutatingSplice usando slice en lugar de splice. Debe limitar el arreglo proporcionado cities a una longitud de 3 y devolver un nuevo arreglo con solo los primeros tres elementos. No modifiques el arreglo original proporcionado en la función.


cls()
function nonMutatingSplice(cities) {
  // Cambia solo el código debajo de esta línea
  let aux = cities.slice(0, 3)
  return aux;
  // Cambia solo el código encima de esta línea
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities))


//todo Combina dos arreglos utilizando el método "concat"
/* 
Concatenation significa unir elementos de extremo a extremo. JavaScript ofrece el método concat para cadenas y arreglos, que funciona de la misma manera. Para arreglos, el método es llamado desde un arreglo, un segundo arrelgo es proporcionado como argumento de concat, este se añadirá al final del primer arreglo. Devuelve un nuevo arreglo, sin mutar ninguno de los arreglos originales. Aquí hay un ejemplo:
*/

//*Usa el método concat en la función nonMutatingConcat para concatenar attach al final de original. La función deber devolver el arreglo concatenado.
function nonMutatingConcat(original, attach) {
  // Cambia solo el código debajo de esta línea
  let aux = original.concat(attach)
  return aux
  // Cambia solo el código encima de esta línea
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second))

//todo Agrega elementos al final de un arreglo utilizando concat en lugar de push
//*Cambia la función nonMutatingPush de manera que utilice concat para unir newItem al final de original sin alterar los arreglos original o newItem. La función debe devolver un arreglo.
cls()
function nonMutatingPush(original, newItem) {
  // Cambia solo el código debajo de esta línea
  let aux = original.concat(newItem)
  return aux

  // Cambia solo el código encima de esta línea
}

const first2 = [1, 2, 3];
const second2 = [4, 5];
nonMutatingPush(first2, second2);

//todo Utiliza el método "reduce" para analizar datos
/* 
El método reduce permite formas más generales de procesamiento de arreglos y es posible mostrar que tanto filter como map pueden derivarse como aplicaciones especiales de reduce. El método reduce itera sobre cada elemento del arreglo y devuelve un solo valor (por ejemplo una cadena, número, objeto, arreglo). Esto se consigue mediante una función callback que se llama en cada iteración.
La función callback acepta cuatro argumentos. El primer argumento se conoce como acumulador, que recibe el valor retornado de la función callback de la iteración anterior, el segundo es el elemento actual que se está procesando, el tercero es el índice de ese elemento y el cuarto es el arreglo sobre el que se llama a la función reduce.
*/
//*La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza reduce para encontrar la calificación media en IMDB de las películas dirigidas por Christopher Nolan. Recuerda de desafíos anteriores filtrar (filter) los datos y mapear (map) sobre ellos para extraer lo que necesitas. Puede que necesites crear otras variables y devolver la calificación media con la función getRating. Ten en cuenta que los valores de calificación se guardan como cadenas en el objeto y necesitan ser convertidos en números antes de ser utilizados en cualquier operación matemática.
cls()
function getRating(watchList) {
  // Cambia solo el código debajo de esta línea
  let averageRating;


  // Cambia solo el código encima de esta línea
  return averageRating;
}

console.log(getRating(watchList));