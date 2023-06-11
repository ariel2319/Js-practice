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
cls();
function Dog(name) {
  this.name = name;
}
let beagle3 = new Dog("Snoopy");
// Cambia solo el código debajo de esta línea
console.log(Dog.prototype.isPrototypeOf(beagle3))

//todo Comprende la cadena "prototype"
//Debido a que prototype es un objeto, ¡un prototype puede tener su propio prototype! En este caso, el prototype de Dog.prototype es Object.prototype:
//El método hasOwnProperty se define en Object.prototype al cual se puede acceder con Dog.prototype, al que se puede acceder con beagle. Este es un ejemplo de la cadena prototype. En esta cadena prototype, Dog es el supertype de beagle mientras que beagle es el subtype. Object es un supertype de Dog y beagle. Object es un supertype de todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede utilizar el método hasOwnProperty.
cls()
function Dog(name) {
  this.name = name;
}
let beagle4 = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle4);  // produce true
// Arregla el código de abajo para que evalúe a true
Object.prototype.isPrototypeOf(Dog.prototype);

//todo Usa herencia para que no te repitas
//Hay un principio en la programación llamado No te repitas (Don't Repeat Yourself "DRY"). La razón por la que el código repetido es un problema es porque cualquier tipo de cambio requiere corregir código en múltiples lugares. Esto suele significar más trabajo para los programadores y más espacio para errores.
//El método describe se repite en dos lugares. El código se puede editar para seguir el principio DRY creando un supertype (o padre) llamado Animal:
cls()
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function () { //? acá creo el método que va a ser compartido con los objetos del tipo "animal"
    console.log("nom nom nom");
  }
};

//todo Hereda comportamientos de un supertipo (supertype)
//Object.create(obj) crea un objeto nuevo y establece obj como el prototype del nuevo objeto. Recuerda que prototype es como la "receta" para crear un objecto. Al establecer el prototype de animal como el prototype de Animal, estás dándole a la instancia animal la misma “receta" que a cualquier otra instancia de Animal.

let duck = Object.create(Animal.prototype); // Cambia esta línea
let beagle5 = Object.create(Animal.prototype); // Cambia esta línea
duck.eat()
console.log("le asigno el método EAT a la instancia duck y beagle5")


//todo Establece el prototipo de hijo para una instancia del padre
// establecer el prototipo prototype del subtipo (o hijo) —en este caso, Bird— para ser una instancia de Animal.
//Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype)

//? asigno el protoype "hijo" al padre, para que las instancias del mismo, tengan como herencia sus métodos y propiedades

let beagle6 = new Dog();
beagle6.eat()

//todo Resteblece una propiedad "constructor" heredada
//Cuando un objeto hereda el prototype de otro objeto, también hereda la propiedad del constructor del supertipo.
//Pero duck y todas las instancias de Bird deberían mostrar que fueron construidas por Bird y no Animal. Para ello, puedes establecer manualmente la propiedad del constructor de Bird al objeto Bird:

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Cambia solo el código debajo de esta línea
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck2 = new Bird();
let beagle7 = new Dog();

//todo Añade métodos después de la herencia
//Una función constructor que hereda su objeto prototype de una función constructor "supertype" puede seguir teniendo sus propios métodos además de los heredados.


//*Añade el código necesario para que el objeto Dog herede de Animal y el constructor prototype de Dog sea establecido en Dog. A continuación agrega el método bark() al objeto Dog, para que beagle pueda "comer" eat() y "ladrar" bark(). El método bark() debe imprimir Woof! por consola.
cls()

function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Cambia solo el código debajo de esta línea
Dog.prototype = Object.create(Animal.prototype); //?añado el protoype de Animal a Dog
Dog.prototype.constructor = Dog; //? mantengo el prototype de DOG

Dog.prototype.bark = function () {
  console.log('Woof!')
} //? le doy un nuevo método a DOG
// Cambia solo el código encima de esta línea
let beagle9 = new Dog();
beagle9.eat()
beagle9.bark()

//todo Sobrescribir métodos heredados

//Es posible sobreescribir un método heredado. Se hace de la misma manera: agregando un método a ChildObject.prototype usando el mismo nombre de método que el que se va a sobrescribir. Aquí hay un ejemplo de Bird sobrescribiendo el método eat() heredado de Animal:

//Si tienes una instancia de let duck = new Bird(); y llamas a duck.eat(), así es como JavaScript busca el método en la cadena prototype de duck:

/* duck => ¿Está eat() definido aquí? No.
Bird => ¿Está eat() definido aquí? => Sí. Ejecútala y detén la búsqueda.
Animal => eat() también está definido, pero JavaScript dejó de buscar antes de llegar a este nivel.
Object => JavaScript dejó de buscar antes de llegar a este nivel. */
//*Sobrescribe el método fly() para Penguin de manera que devuelva la cadena de texto Alas, this is a flightless bird.
cls();
function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Cambia solo el código debajo de esta línea
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird."
} //? acá sobre escribo el método "fly" que definí un poco más arriba
// Cambia solo el código encima de esta línea

let penguin = new Penguin();
console.log(penguin.fly());


//todo Utiliza un "mixin" para añadir un comportamiento común entre objetos no relacionados
//Como ya has visto, el comportamiento se comparte mediante una herencia. Sin embargo, hay algunos casos en los que la herencia no es la mejor opción. La herencia no funciona bien con objetos que no están relacionados como Bird y Airplane. Ambos pueden volar pero un Bird no es un tipo de Airplane y viceversa.
//El flyMixin toma a cualquier objeto y le da el método fly.

cls();
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Cambia solo el código debajo de esta línea
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("go upi")
  }
}

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

//todo Utiliza closures para evitar que las propiedades de un objeto se puedan modificar desde fuera
//La forma más sencilla de hacer privada esta propiedad pública es creando una variable dentro de la función constructora. Esto cambia el alcance de esa variable para que esté dentro de la función constructora versus disponible globalmente. De este modo, la variable solo puede ser accesible y cambiable por métodos que también estén dentro de la función constructora.

/* function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); */

//Aquí getHatchedEggCount es un método privilegiado, porque tiene acceso a la variable privada hatchedEgg. Esto es posible porque hatchedEgg está declarada en el mismo contexto que getHatchedEggCount. En JavaScript, una función siempre tiene acceso al contexto en el que se creó. A esto se le llama closure.
//*Cambia como weight es declarada en la función Bird para que sea una variable privada. Después, crea un método getWeight que devuelva el valor 15 para weight.
cls()
function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  }
}


//todo Comprende las funciones que son invocadas inmediatamente (IIFE)

cls();
/* (function () {
  console.log("Chirp, chirp!");
})(); */
//Esta es una expresión de función anónima que se ejecuta de inmediato y produce Chirp, chirp! inmediatamente.
//Ten en cuenta que la función no tiene nombre y que no se almacena en un valor. Los dos paréntesis () al final de la expresión de la función hacen que se ejecute o invoque de forma inmediata. Este patrón se conoce como una expresión de función inmediatamente invocada o IIFE (por sus siglas en inglés)
//* Reescribe la función makeNest y elimina su llamada, por lo que es una expresión de función anónima inmediatamente invocada (IIFE).

/* function makeNest() {
  console.log("A cozy nest is ready");
}
makeNest(); */

(function () {
  console.log("A cozy nest is ready");
})();

//todo Utiliza una IIFE para crear un módulo
//Una expresión de función inmediatamente invocada (IIFE) se utiliza a menudo para agrupar la funcionalidad relacionada en un solo objeto o módulo. Por ejemplo, en el desafío siguiente se definen dos "mixins":
//Ten en cuenta que has invocado una IIFE que devuelve un objeto funModule. El objeto devuelto contiene todos los comportamientos de los mixins como propiedades del objeto. La ventaja del patrón del módulo es que todos los comportamientos de movimiento pueden ser empaquetados en un solo objeto que puede ser usado por otras partes del código. Así se debe utilizar:
//*Crea un módulo llamado funModule para envolver los dos mixins isCuteMixin y singMixin. funModule debe devolver un objeto.

cls()
let isCuteMixin = function (obj) {
  obj.isCute = function () {
    return true;
  };
};
let singMixin = function (obj) {
  obj.sing = function () {
    console.log("Singing to an awesome tune");
  };
};

let funModule = (function () {
  return {

    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      }
    },

    isCuteMixin: function (obj) {
      obj.isCute = function () {
        console.log("Singing to an awesome tune");
      }
    }
  }
})();