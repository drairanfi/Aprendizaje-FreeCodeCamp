// ¿Cómo se accede y se actualizan elementos en un arreglo?
// En la lección anterior, se te presentó cómo trabajar con arreglos y acceder a diferentes elementos en los arreglos. Aquí tienes un recordatorio sobre cómo acceder al segundo elemento en un arreglo:

const fruitsPaso2 = ["apple", "banana", "cherry"];

console.log(fruitsPaso2[1]); // "banana"
// Dado que los arreglos están basados en cero, el primer elemento estará en el índice 0, el segundo elemento está en el índice 1, y así sucesivamente. Es importante notar que si intentas acceder a un índice que no existe en el arreglo, JavaScript devolverá undefined.

let fruitsPaso2Undef = ["apple", "banana", "cherry"];
console.log(fruitsPaso2Undef[3]); // undefined
// En este ejemplo, no hay un elemento en el índice 3 para el arreglo fruits. Por lo que el registro mostrará undefined. Ahora, veamos cómo actualizar elementos en un arreglo. Puedes actualizar un elemento asignando un nuevo valor a un índice específico.

let fruitsPaso2Update = ["apple", "banana", "cherry"];
fruitsPaso2Update[1] = "blueberry";
console.log(fruitsPaso2Update); // ["apple", "blueberry", "cherry"]
// En este ejemplo, reemplazamos banana con blueberry en el índice 1. Este método te permite cambiar cualquier elemento en el arreglo, siempre y cuando conozcas su índice. También puedes agregar nuevos elementos a un arreglo asignando un valor a un índice que aún no existe:

let fruitsPaso2Add = ["apple", "banana", "cherry"];
fruitsPaso2Add[3] = "date";
console.log(fruitsPaso2Add); // ["apple", "banana", "cherry", "date"]
// Sin embargo, ten cuidado al hacer esto. Si asignas un valor a un índice que es mucho más grande que la longitud actual del arreglo, crearás elementos indefinidos para los índices intermedios, lo que puede llevar a un comportamiento inesperado. A medida que continúes trabajando con JavaScript, encontrarás que estos métodos para acceder y actualizar elementos de un arreglo son fundamentales para muchas tareas de programación. Ya sea que estés construyendo una lista de tareas simple o procesando estructuras de datos complejas, estas habilidades serán invaluables.

