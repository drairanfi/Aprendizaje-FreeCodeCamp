// ¿Qué es el constructor Object() y cuándo debe usarlo?
// En JavaScript, un constructor es un tipo especial de función utilizada para crear e inicializar objetos. Se invoca con la palabra clave new y puede inicializar propiedades y métodos en el objeto recién creado.
//
// En esta lección, veremos cómo trabajar con el constructor Object(). El constructor Object() crea un nuevo objeto vacío. Aquí hay un ejemplo:

new Object()
// Cuando llamas a new Object(), retorna un nuevo objeto que puede utilizarse para almacenar valores.
//
// El constructor Object() puede utilizarse con o sin la palabra clave new. Cuando se llama como función sin new, se comporta de manera diferente dependiendo del tipo de valor que se le pase. Aquí tienes un ejemplo de cómo usar el constructor Object() sin la palabra clave new:

const numPaso7 = 42;
const numObjPaso7 = Object(num); // Crea un objeto envoltorio para el número

console.log(numObjPaso7);
console.log(typeof numObjPaso7); // "object"
// Como puedes ver en el segundo console.log, numObj es un objeto. Esto sucede porque usamos el constructor Object() para convertir esa entrada de número en un objeto.
//
// ¿Qué pasa si intentamos pasar null o undefined al constructor Object()?

const newObjPaso7 = new Object(undefined);
console.log(newObjPaso7); // {}
// Bueno, el resultado será un objeto vacío. Otro caso de uso para el constructor Object() es cuando trabajas con un valor de tipo desconocido y necesitas asegurarte de que sea un objeto. Veamos el siguiente ejemplo:

function toObjectPaso7(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}

console.log(toObjectPaso7(null)); // {}
console.log(toObjectPaso7(true)); // Boolean { true }
console.log(toObjectPaso7([1, 2, 3])); // [1, 2, 3]
// En este ejemplo, tenemos una función llamada toObject. La segunda condición verificará si el valor es de tipo objeto y retornará el valor si la condición es true. Esta condición verificará tanto objetos como matrices, ya que las matrices son tipos especiales de objetos.
//
// Si ninguna de las condiciones es verdadera, la función devuelve Object(value), que convierte la entrada en un objeto. Esto funciona para valores como números, cadenas y booleanos.
//
// La mayoría de las veces no estarás usando el constructor Object() para crear nuevos objetos porque usarás la sintaxis literal de objetos en su lugar (ej: const objectLiteral = { name: "Beau" }). Pero todavía es bueno entender los conceptos básicos de trabajar con el constructor Object.