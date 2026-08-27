¿Cómo puedes remover propiedades de un objeto?
Hay varias maneras de remover propiedades de un objeto, siendo el operador delete el método más directo y comúnmente usado.

Cuando usas delete, remueve la propiedad seleccionada del objeto. Aquí hay un ejemplo de cómo usar el operador delete:

const person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

delete person.job;

console.log(person.job); // undefined
En este ejemplo, comenzamos con un objeto person que tiene tres propiedades: name, age y job. Luego, usamos el operador delete para eliminar la propiedad job. Después de la eliminación, el objeto person ya no tiene la propiedad job.

Otra forma de eliminar propiedades es usando asignación declaratoria con parámetros rest. Este enfoque no elimina realmente la propiedad, pero crea un nuevo objeto sin las propiedades especificadas:

const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
};

const { job, city, ...remainingProperties } = person;

// { name: "Bob", age: 25 }
console.log(remainingProperties);
En este ejemplo, usamos la asignación por desestructuración para extraer job y city del objeto person, y recopilamos las propiedades restantes en un nuevo objeto llamado remainingProperties. Esto crea un nuevo objeto sin las propiedades job y city.

Entender cómo eliminar propiedades de objetos es una habilidad importante en la programación JavaScript. Te permite manipular objetos dinámicamente y limpiar datos innecesarios.