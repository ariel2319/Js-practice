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
  console.log(tabsBeforeIndex)
  const tabsAfterIndex = this.tabs.splice(1); // Obtiene las pestañas después de la pestaña
  //? modifico el índice a 1, xq en el primer splice "saqué" los elementos que seleccioné delarreglo "this.tabs", entonces en la posición 0 quedó el elemento a eliminar, por ende solo "saco" de la siguiente posición en adelante


  console.log(tabsAfterIndex)
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