//!regular expressions

//?Especifica el número exacto de coincidencias
//Modifica la expresión regular timRegex para hacer coincidir con la palabra Timber solo cuando esta tiene cuatro letras m.

console.clear();
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);
console.log('Result => ', result)


//?Comprueba todos o ninguno
//*Puedes especificar la posible existencia de un elemento con un signo de interrogación, ?. Esto comprueba cero o uno de los elementos precedentes. Puedes pensar que este símbolo dice que el elemento anterior es opcional.
//Cambia la expresión regular favRegex para que coincida tanto la versión del inglés americano (favorite) como la versión del inglés británico de la palabra (favourite).

console.clear();
let favWord = "favorite";
let favRegex = /favou?rite/; // Cambia esta línea
let result2 = favRegex.test(favWord);
console.log('Result2 => ', result2)


//?Lookahead positivo y negativo
//*Los lookaheads son patrones que le indican a JavaScript que busque por anticipado en tu cadena para verificar patrones más adelante. Esto puede ser útil cuando deseas buscar varios patrones sobre la misma cadena.
//*Un lookahead positivo buscará para asegurarse de que el elemento en el patrón de búsqueda este allí, pero en realidad no lo coincidirá. Un lookahead positivo se usa como (?=...) donde el ... es la parte requerida que no coincide.
//*Por otro lado, un lookahead negativo buscará para asegurarse de que el elemento en el patrón de búsqueda no este allí. Un lookahead negativo se usa como (?!...) donde el ... es el patrón que no quieres que esté allí. El resto del patrón se devuelve si la parte de lookahead negativo no está presente.
//Utiliza los lookaheads en el pwRegex para que coincida con las contraseñas que tengan más de 5 caracteres y dos dígitos consecutivos.

console.clear();
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/;
let result3= pwRegex.test(sampleWord);
console.log('Result3 => ', result3)


//?Comprueba agrupaciones mixtas de caracteres
//*Si deseas encontrar Penguin o Pumpkin en una cadena, puedes usar la siguiente expresión regular: /P(engu|umpk)in/g
//Corrige la expresión regular para que compruebe los nombres de Franklin Roosevelt o Eleanor Roosevelt de una manera sensible a mayúsculas y minúsculas y haciendo concesiones para los segundos nombres.
//Luego, corrige el código para que la expresión regular que has creado se compruebe con myString y devuelva true o false dependiendo de si la expresión regular coincide.

console.clear();
let myString = "Eleanor Roosevelt";
let myRegex = /(franklin (d.)?|eleanor) Roosevelt/i; // Cambia esta línea
let result4= myRegex.test(myString); // Cambia esta línea
// Después de pasar el desafío experimenta con myString y observa cómo funciona la agrupación
console.log('Result4 => ', result4)


//?Reutiliza patrones usando grupos de captura
//*Los grupos de captura se construyen encerrando entre paréntesis el patrón de expresión regular a capturar. En este caso, el objetivo es capturar una palabra formada por caracteres alfanuméricos, por lo que el grupo de captura será \w+ encerrado entre paréntesis: /(\w+)/.
//*La subcadena que coincide con el grupo se guarda en una "variable" temporal, a la que se puede acceder dentro de la misma expresión regular utilizando una barra invertida y el número del grupo de captura (por ejemplo, \1). Los grupos de captura se numeran automáticamente por la posición de sus paréntesis de apertura (de izquierda a derecha), empezando por el 1.

console.clear();
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Cambia esta línea
let result5 = reRegex.test(repeatNum);
console.log('Result5 => ', result5)


//? Usa grupos de captura para buscar y reemplazar
//*Puedes buscar y reemplazar texto en una cadena usando .replace() en una cadena. Las entradas para .replace() son primero el patrón de expresiones regulares que deseas buscar. El segundo parámetro es la cadena para reemplazar la coincidencia o una función para hacer algo.
//*También puedes acceder a grupos de captura en la cadena de reemplazo con signos de dólar. ($).
//Escribe una expresión regular fixRegex utilizando tres grupos de captura que buscarán cada palabra en la cadena one two three. Luego actualiza la variable replaceText para reemplazar one two three con la cadena three two one y asigna el resultado a la variable result. Asegúrate de utilizar grupos de captura en la cadena de reemplazo utilizando la sintaxis del signo de dólar ($).

console.clear();
let str = "one two three";
let fixRegex = /(one) (two) (three)/; // Cambia esta línea
let replaceText = "$3 $2 $1"; // Cambia esta línea //con el $ accedo al grupo de captura y los ordeno como quiera
let result6 = str.replace(fixRegex, replaceText);
console.log('Result6 => ', result6)


//? Elimina espacio en blanco del inicio y final
//Escribe una expresión regular y usa los métodos de cadena apropiados para eliminar espacios en blanco al principio y al final de las cadenas.
//Nota: El método String.prototype.trim() funcionará aquí, pero necesitarás completar este desafío usando expresiones regulares.

console.clear();
let hello = "   Hello, World!  ";
let wsRegex = /^(\W+)|(\s+)$/g; // Cambia esta línea
let result7= hello.replace(wsRegex, ""); // Cambia esta línea
console.log('Result7 => ', result7)