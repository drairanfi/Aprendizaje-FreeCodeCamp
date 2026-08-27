// ¿Cómo trabajas con el acceso a propiedades desde objetos y arreglos anidados en objetos?
// Al trabajar con JavaScript, a menudo te encontrarás con estructuras de datos complejas que involucran objetos anidados y arreglos dentro de objetos. Estas estructuras pueden representar datos ricos y jerárquicos, pero también requieren de un claro entendimiento de cómo acceder y manipular los datos dentro de ellas. Exploraremos cómo navegar por estas estructuras anidadas de manera efectiva.
//
// Acceder a propiedades desde objetos anidados implica usar la notación de puntos o la notación de corchetes, de manera similar a como se accede a propiedades de objetos simples. Sin embargo, necesitarás encadenar estos accesos para descender a la estructura anidada.
//
// Por ejemplo, consideremos un objeto anidado que representa a una persona con información de contacto:

const personPaso4Anidado = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};
// Para acceder al número de teléfono del trabajo de Alice, encadenarías los accesos a propiedades de esta manera:

const personPaso4Dot = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log(personPaso4Dot.contact.phone.work); // "098-765-4321"
// También puedes usar la notación de corchetes, que es particularmente útil cuando los nombres de propiedad incluyen espacios o caracteres especiales, o cuando estás usando variables para acceder a propiedades:

const personPaso4Corchetes = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log(personPaso4Corchetes['contact']['phone']['work']); // "098-765-4321"
// Ahora, echemos un vistazo a cómo podemos acceder a datos donde una de las propiedades del objeto tiene el valor de un arreglo. Aquí hay un objeto person modificado que incluye un arreglo de direcciones:

const personPaso4Arreglos = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};
// Aquí tienes un ejemplo de cómo acceder a la ciudad de la dirección de trabajo de Alice:

const personPaso4ArreglosAcceso = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};

console.log(personPaso4ArreglosAcceso.addresses[1].city); // "Workville"
// En este ejemplo, person.addresses se refiere al arreglo de direcciones. Para acceder a la segunda dirección en ese arreglo, usamos la notación de corchetes e índice 1. Luego usamos la notación de puntos para acceder a la city de ese objeto dirección.

// Comprender cómo acceder a propiedades en objetos y arreglos anidados es esencial al trabajar con estructuras de datos complejas. En futuros talleres y laboratorios, tendrás la oportunidad de practicar trabajando con este tipo de estructuras de datos.