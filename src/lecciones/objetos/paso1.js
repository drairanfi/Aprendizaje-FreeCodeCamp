¿Qué es un objeto en JavaScript y cómo puedes acceder a las propiedades de un objeto?
En JavaScript, un objeto es una estructura de datos fundamental que te permite almacenar y organizar datos y funcionalidades relacionadas.

Puedes pensar en un objeto como un contenedor que guarda varias piezas de información, al igual que un archivo almacena diferentes carpetas y documentos.

Estas piezas de información se llaman propiedades y consisten en un nombre (o clave) y un valor.

const exampleObject = {
  propertyName: value,
}
Los objetos son increíblemente versátiles y forman la columna vertebral de JavaScript. De hecho, casi todo en JavaScript es un objeto o se puede tratar como uno. Esto incluye arreglos, funciones, e incluso tipos de datos primitivos como cadenas y números cuando se usan de cierta manera.

Esta naturaleza centrada en objetos de JavaScript es una de las razones por las que es un lenguaje tan flexible y poderoso. Vamos a ver cómo puedes crear un objeto:

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
En este ejemplo, hemos creado un objeto llamado person con tres propiedades: name, age, y city. Cada propiedad tiene un nombre y un valor, separados por un colon.

Ahora, exploremos cómo puedes acceder a estas propiedades. Hay dos formas principales de acceder a las propiedades del objeto en JavaScript: notación de punto y notación de corchetes.

La notación de punto es la forma más común y directa de acceder a las propiedades del objeto. Aquí está la sintaxis básica para la notación de punto:

objectName.propertyName
Así es como usarías la notación de punto con nuestro objeto person:

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person.name);  // Alice
console.log(person.age);   // 30
La notación de punto es concisa y fácil de leer, lo que la convierte en la opción preferida cuando conoces el nombre exacto del propiedad que quieres acceder y ese nombre es un identificador válido de JavaScript (lo que significa que no comienza con un número y no contiene caracteres especiales o espacios).

La notación de corchetes, en cambio, te permite acceder a las propiedades del objeto usando una cadena dentro de corchetes cuadrados. Así es como usarías la notación de corchetes:

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person["name"]); // Alice
console.log(person["age"]); //  30
La notación de corchetes es más flexible que la notación de punto porque te permite usar nombres de propiedades que no son identificadores válidos de JavaScript. Por ejemplo, si tuvieras un nombre de propiedad con espacios o que comienza con un número, necesitas usar la notación de corchetes:

const oddObject = {
  "1stProperty": "Hello",
  "property with spaces": "World"
};

console.log(oddObject["1stProperty"]);  // Hello
console.log(oddObject["property with spaces"]);  // World
Otra ventaja de la notación de corchetes es que te permite usar variables para acceder a las propiedades dinámicamente:

const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland"
};

let propertyName = "city";
console.log(person[propertyName]); // Wonderland
Esta flexibilidad hace que la notación de corchetes sea particularmente útil cuando no conoces el nombre exacto de la propiedad al momento de escribir el código, o cuando trabajas con nombres de propiedades que provienen de la entrada del usuario u otra fuente dinámica.

Vale la pena señalar que los objetos en JavaScript son increíblemente poderosos y versátiles. Pueden contener no solo valores simples como cadenas y números, sino también arreglos, u otros objetos.

Comprender los objetos y cómo trabajar con ellos es crucial en JavaScript porque se usan extensamente en todo el lenguaje y en muchas librerías y frameworks de JavaScript.

A medida que continúes aprendiendo y trabajando con JavaScript, descubrirás que dominar los objetos abre un mundo de posibilidades para crear aplicaciones complejas y poderosas.

