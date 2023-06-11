//! POO

//todo Crea un método en un objeto - sayLegs -

//todo Haz el código más reutilizable con la palabra clave "this"

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();

//todo Define una función "Constructor"
//Las funciones Constructors crean nuevos objetos. Definen propiedades y comportamientos que pertenecerán al nuevo objeto. Piensa que son el modelo para la creación de nuevos objetos.
//Están definidos con un nombre en mayúscula para distinguirlos de otras funciones que no son constructors. -- Utilizan la palabra clave this para establecer propiedades del objeto que crearán. Dentro del constructor, this se refiere al nuevo objeto que creará. --Los Constructors definen propiedades y comportamientos en vez de devolverlos como un valor como lo harían otras funciones.

function Dog() {
  this.name = "pepo",
    this.color = "blue",
    this.numLegs = 5
}
//todo Utiliza un constructor para crear objetos
let hound = new Dog();

//todo Extender constructores para recibir argumentos
function Dogui(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dogui("hinchon", "green");

//todo Verifica el constructor de un objeto con "instanceof"
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Cambia solo el código debajo de esta línea
let myHouse = new House(5);

myHouse instanceof House; //true

//todo comprender las propiedades directas
/* function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety"); */
//name y numLegs se llaman propiedades directas, porque están definidas directamente en la instancia del objeto. Eso significa que duck y canary tienen su propia copia separada de estas propiedades. De hecho, cada instancia de Bird tendrá su propia copia de estas propiedades. El siguiente código añade todas las propiedades directas de duck al arreglo ownProps:

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Cambia solo el código debajo de esta línea
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property)
  }
}
