// Cómo comprobar si un objeto tiene una propiedad?
// En JavaScript, hay varias maneras de comprobar si un objeto tiene una propiedad específica. Entender estos métodos es importante para trabajar eficazmente con objetos, especialmente cuando estás manejando datos de fuentes externas o cuando necesitas asegurarte de que ciertas propiedades existen antes de usarlas.
//
// Exploraremos algunos enfoques comunes: el método hasOwnProperty(), el método Object.hasOwn(), el operador in y la comprobación contra undefined.
//
// Comencemos con el método hasOwnProperty(). Este método devuelve un booleano que indica si el objeto tiene la propiedad especificada como su propia propiedad. Aquí tienes un ejemplo:

const personPaso3HasOwn = {
  name: "Alice",
  age: 30
};

console.log(personPaso3HasOwn.hasOwnProperty("name")); // true
console.log(personPaso3HasOwn.hasOwnProperty("job")); // false
// En este ejemplo, tenemos un objeto llamado person con dos propiedades: name y age. Para comprobar si name es una propiedad en el objeto person, usamos el método hasOwnProperty(). Dado que name es una propiedad, devolverá true. Pero cuando usamos el método hasOwnProperty() para comprobar si job es una propiedad, devolverá false porque no existe en el objeto.

// Object.hasOwn() es la forma moderna y recomendada de verificar si un objeto tiene una propiedad propia (no heredada). Piénsalo como una versión mejorada y más segura de hasOwnProperty(). La sintaxis es Object.hasOwn(object, propertyName) — pasas el objeto como primer argumento y el nombre de la propiedad como segundo.
//
// Aquí tienes un ejemplo básico:

const personPaso3ObjectHasOwn = {
  name: "Alice",
  age: 30
};

console.log(Object.hasOwn(personPaso3ObjectHasOwn, "name")); // true
console.log(Object.hasOwn(personPaso3ObjectHasOwn, "job")); // false
// En este ejemplo, Object.hasOwn(person, "name") devuelve true porque name existe directamente en el objeto person. Object.hasOwn(person, "job") devuelve false porque job nunca se añadió al objeto.

// Una cosa muy importante para entender es que Object.hasOwn() solo verifica si la propiedad existe — no le importa el valor de la propiedad. Esto significa que aún devuelve true incluso cuando el valor es 0, false, null o undefined:

const userPaso3 = {
  username: "coder123",
  score: 0,
  isActive: false,
  nickname: null
};

// Object.hasOwn() reporta correctamente que todas estas propiedades existen
console.log(Object.hasOwn(userPaso3, "score"));    // true  (el valor es 0, pero la propiedad existe)
console.log(Object.hasOwn(userPaso3, "isActive")); // true  (el valor es false, pero la propiedad existe)
console.log(Object.hasOwn(userPaso3, "nickname")); // true  (el valor es null, pero la propiedad existe)
console.log(Object.hasOwn(userPaso3, "email"));   // false (la propiedad nunca se añadió)

// ¡Cuidado! Usar if() directamente da resultados incorrectos con valores falsy
if (userPaso3.score) {
  console.log("Has score"); // Esto NO se imprimirá aunque score exista!
}

// Seguro! Object.hasOwn() da el resultado correcto
if (Object.hasOwn(userPaso3, "score")) {
  console.log("Has score:", userPaso3.score); // Has score: 0
}
// Otra manera de comprobar la existencia de una propiedad en un objeto es usar el operador in. Al igual que hasOwnProperty(), el operador in devolverá true si la propiedad existe en el objeto. Aquí está cómo puedes usarlo:

const personPaso3In = {
  name: "Bob",
  age: 25
};
console.log("name" in personPaso3In);  // true
// En este ejemplo, "name" in person devuelve true porque name es una propiedad de person.

// El tercer método implica verificar si una propiedad es undefined. Este enfoque puede ser útil, pero tiene algunas limitaciones. Aquí tienes un ejemplo:

const carPaso3 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(carPaso3.brand !== undefined); // true
console.log(carPaso3.color !== undefined); // false
// En este código, comprobamos si car.brand y car.color no son undefined. Esto funciona porque acceder a una propiedad inexistente en un objeto devuelve undefined. Sin embargo, este método puede dar falsos negativos si una propiedad tiene explícitamente el valor undefined.

// En la práctica, la elección entre estos métodos a menudo depende de los requisitos específicos de tu código. Comprender las diferencias entre ellos te ayudará a tomar la decisión correcta en diferentes escenarios.