// ¿Cuál es la diferencia entre funciones y métodos objeto?
// En JavaScript, las funciones y los métodos de objeto son formas de encapsular código reutilizable, pero tienen algunas diferencias clave en cómo se definen, utilizan y el contexto en el que operan. Comprender estas diferencias es crucial para escribir código JavaScript efectivo y organizado.
//
// Como aprendiste en módulos anteriores, las funciones son bloques de código reutilizables que realizan una tarea específica.

function greetPaso6(name) {
    return "Hello, " + name + "!";
}
console.log(greetPaso6("Alice")); // "Hello, Alice!"
// Los métodos de objeto, por otro lado, son funciones asociadas a un objeto. Se definen como propiedades de un objeto y pueden acceder y manipular los datos del objeto. Aquí tienes un ejemplo de un objeto con un método:

const personPaso6 = {
    name: "Bob",
    age: 30,
    sayHello: function() {
        return "Hello, my name is " + this.name;
    }
};

console.log(personPaso6.sayHello()); // "Hello, my name is Bob"
// En este ejemplo, sayHello es un método del objeto person. La palabra clave this permite que el método sayHello acceda a las propiedades del objeto llamado person. Aprenderás más sobre la palabra clave this en futuras lecciones.
//
// Una diferencia entre funciones y métodos es cómo se invocan. Las funciones se llaman por su nombre, mientras que los métodos se llaman usando la notación de punto en el objeto al que pertenecen. Por ejemplo, llamamos a la función greet como greet("Alice"), pero llamamos al método sayHello como person.sayHello().
//
// Otra diferencia importante es el contexto en el que operan. Las funciones regulares tienen su propio ámbito, pero no tienen una referencia integrada a ningún objeto en particular. Sin embargo, los métodos están vinculados a su objeto y pueden acceder a sus propiedades y otros métodos usando la palabra clave this.
//
// Un punto clave a destacar es que los métodos ayudan a organizar el código en objetos lógicos, mientras que las funciones se utilizan para un código más general y reutilizable.
//
// Comprender la diferencia entre funciones y métodos de objeto es importante a medida que avanzas en tu viaje con JavaScript. Aunque al principio pueden parecer similares, reconocer cuándo usar cada uno te ayudará a escribir código más organizado, eficiente y mejor.