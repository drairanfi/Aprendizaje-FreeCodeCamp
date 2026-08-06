// Trabajar con funciones
//
// ¿Cuál es el propósito de las funciones y cómo funcionan?
// Las funciones son piezas reutilizables de código que realizan una tarea específica o calculan un valor. Piensa en las funciones como una máquina que toma una entrada, realiza algunas operaciones y luego produce una salida. Aquí tienes un ejemplo de cómo declarar una función:

function greetBasic() {
  console.log("Hello, Jessica!");
}
// In this example, we have declared a function called greet. Inside that function, we have a console.log that logs the message Hello, Jessica!. Si intentamos ejecutar este código, no veríamos aparecer el mensaje en la consola. Esto se debe a que necesitamos llamar a la función.
//
// Una llamada a función, o invocación, es cuando realmente usamos o ejecutamos la función. Para llamar a una función, necesitarás referenciar el nombre de la función seguido de un conjunto de paréntesis:

greetBasic(); // "Hello, Jessica!"
// Ahora el mensaje de Hello, Jessica! estará registrado en la consola. ¿Pero qué si quisiéramos que el mensaje dijera Hello, Nick! o Hello, Anna!? No queremos escribir una nueva función cada vez que saludamos a un usuario diferente. En su lugar, podemos crear una función reutilizable que use parámetros de función y argumentos.
//
// Los parámetros actúan como marcadores de posición para los valores que se pasarán a la función cuando se llame. Permiten que las funciones acepten entradas y trabajen con esa entrada. Los argumentos son los valores reales que se pasan a la función cuando se llama. Aquí tienes una versión actualizada de la función greet que usa parámetros y argumentos:

function greetPerson(name) {
  console.log("Hello, " + name + "!");
}

greetPerson("Alice"); // Hello, Alice!
greetPerson("Nick"); // Hello, Nick!
// El name sirve como el parámetro mientras que las cadenas Alice y Nick sirven como los argumentos. Ahora tenemos una función reutilizable que puede usarse docenas de veces en nuestro código con diferentes argumentos.
//
// Cuando una función termina su ejecución, siempre devolverá un valor. Por defecto, el valor de regreso será undefined. Aquí hay un ejemplo:

function doSomething() {
  console.log("Doing something...");
}

let returnedValue = doSomething();
console.log(returnedValue); // undefined
// Si necesitas que tu función devuelva un valor específico, entonces deberás usar la declaración return. Aquí tienes un ejemplo de uso de una declaración return para devolver la suma de dos valores:

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(3, 4)); // 7
// A menudo usarás la declaración return, porque puedes usar ese valor que fue salida de la función más adelante en tu código.
//
// Hasta ahora, hemos estado trabajando con funciones nombradas, pero también puedes crear lo que se llama una función anónima. Una función anónima es una función sin nombre que puede asignarse a una variable de esta manera:

const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7
// En este ejemplo, tenemos una variable const llamada sum y le estamos asignando una función anónima que devuelve la suma de num1 y num2. Luego podemos llamar a sum y pasar los números 3 y 4 para obtener el resultado de 7.
//
// Las funciones admiten parámetros predeterminados, lo que te permite establecer valores predeterminados para los parámetros. Estos valores predeterminados se usan si la función se llama sin un argumento para ese parámetro. Aquí tienes un ejemplo:

function greetDefault(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetDefault(); // Hello, Guest!
greetDefault("Anna"); // Hello, Anna!
// En este ejemplo, si no se proporciona un argumento para name, se establece por defecto como Guest.
//
// En resumen, las funciones te permiten escribir un código reutilizable y organizado. Pueden recibir entradas (parámetros), realizar acciones y devolver salidas.