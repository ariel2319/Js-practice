//! POO 2

function cls() { console.clear() }

//todo Utiliza propiedades "prototype" para reducir código duplicado

/* Dado que numLegs probablemente tendrán el mismo valor para todas las instancias de Bird, esencialmente tienes una variable duplicada numLegs dentro de cada instancia de Bird.

Esto puede que no sea un problema cuando sólo hay dos instancias, pero imagina si hay millones de instancias. Eso sería un montón de variables duplicadas.

Una mejor forma es utilizar el prototype de Bird. Las propiedades del prototype se comparten entre TODAS las instancias de Bird. A continuación se explica cómo añadir numLegs al prototipo Bird prototype: */

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
// Cambia solo el código encima de esta línea
let beagle2 = new Dog("Snoopy");
console.log(beagle2.numLegs)

//todo Itera sobre todas las propiedades
//Ahora has visto dos tipos de propiedades: propiedades directas y propiedades prototype. Las propiedades directas se definen directamente en la propia instancia del objeto. Y las propiedades prototype se definen en el prototype.
//A continuación, se explica cómo se agregan las propiedades directas de beagle al arreglo ownProps y las propiedades prototype al arreglo prototypeProps:
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Cambia solo el código debajo de esta línea
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property)
  } else {
    prototypeProps.push(property)
  }
}

//todo Entiende la propiedad constructor
/* Ten en cuenta que la propiedad constructor hace referencia a la función constructor que creo la instancia. La ventaja de la propiedad constructor es que es posible verificar esta propiedad para averiguar qué tipo de objeto es. Así es como se podría utilizar: */
function Dog(name) {
  this.name = name;
}
// Cambia solo el código debajo de esta línea
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true
  }
  return false
}

//todo Cambia el prototipo a un nuevo objeto
//Una forma más eficiente es establecer el prototype a un nuevo objeto que ya contenga las propiedades. De esta forma, las propiedades son añadidas todas a la vez:
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Cambia solo el código debajo de esta línea
  constructor: Dog,
  numLegs: 4,
  eat: function () { console.log('num num num') },
  describe: function () { console.log(`My name is ${this.name}`) }
};
let perrito = new Dog()
console.log(perrito.eat)
perrito.eat()

//todo Recuerda establecer la propiedad "constructor" al cambiar el prototipo
let aim = perrito.constructor === Dog
let aim3 = perrito.constructor === Object
let aim2 = perrito instanceof Dog;
console.log(aim, aim3, aim2)
//aim es false, xq la asignación de prototype le quita la propiedad de constructor
//aim3
//aim2 es true con la evaluación de instnaceof
//* pero al agregar la propiedad constructor al prototype solucionamos el problema


//todo  Entendiendo de dónde viene el prototipo de un objeto
//Así como las personas heredamos genes de nuestros padres, los objetos también heredan su prototype directamente de la función constructor que lo creó. Por ejemplo, aquí el constructor Dog crea el objeto beagle:
cls()
function Dogui(name) {
  this.name = name;
}
let beagle3 = new Dogui("Snoopy");
// Cambia solo el código debajo de esta línea
Dog.prototype.isPrototypeOf(beagle3);

//todo Comprende la cadena "prototype"
