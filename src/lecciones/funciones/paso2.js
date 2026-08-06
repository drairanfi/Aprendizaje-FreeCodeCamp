// ¿Qué son las funciones flecha y cómo funcionan?
// En la lección anterior, aprendiste cómo trabajar con funciones, que son fragmentos reutilizables de código que ayudan a que tu código sea más modular, fácil de mantener y más eficiente. Todos los ejemplos anteriores usaron la sintaxis regular de funciones, así:

function greetRegular(name) {
  console.log("Hello, " + name + "!");
}
// Pero otra forma de escribir funciones en JavaScript es crear una expresión de función flecha. Aquí tienes cómo puedes refactorizar el ejemplo anterior para usar la sintaxis de función flecha en su lugar:

const greetArrowParen = (name) => {
  console.log("Hello, " + name + "!");
};
// En este ejemplo revisado, estamos creando una variable const llamada greetings y asignándole una función anónima. Most of the syntax will look familiar to you except for the missing function keyword and the addition of the arrow (=>) between the name parameter and the function body. Si tu lista de parámetros solo tiene un parámetro, entonces puedes eliminar los paréntesis así:

const greetArrowNoParen = name => {
  console.log("Hello, " + name + "!");
};
// Si tu función flecha no tiene parámetros, entonces debes usar los paréntesis así:

const greetArrowNoArgs = () => {
  console.log("Hello");
};
// Al aprender por primera vez sobre funciones, tenías que envolver el cuerpo de la función en llaves. Pero si el cuerpo de tu función solo contiene una línea de código, puedes eliminar las llaves así:

const greetArrowOneLiner = name => console.log("Hello, " + name + "!");
// Es importante observar que eliminar los paréntesis y llaves para la sintaxis regular de función no funcionará. Obtendrás errores si intentas hacer algo como esto:
//
// // This will produce syntax errors 
// function greetSyntaxError name console.log("Hello, " + name + "!");
// Este tipo de funciones de una línea solo funcionan si estás usando la sintaxis de función flecha. Otro concepto clave es la sentenciareturn. Aquí tienes un ejemplo de uso de la sintaxis de función flecha para calcular el área:

const calcAreaWithVariable = (width, height) => {
  const areaValue = width * height;
  return areaValue;
};

console.log(calcAreaWithVariable(5, 3)); // 15
// Estamos creando una variable dentro de la función llamada area y luego devolvemos esa variable. Pero podríamos hacer nuestro código un poco más limpio y devolver el cálculo en sí mismo:

const calcAreaDirectReturn = (width, height) => {
  return width * height;
}; 

console.log(calcAreaDirectReturn(5, 3)); // 15
// Si intentaste eliminar las llaves y colocar el cálculo en la misma línea, recibirías un mensaje Uncaught SyntaxError: Unexpected token 'return':
//
// const calcAreaInvalidReturn = (width, height) => return width * height;
// La razón por la que obtienes este error es porque necesitas eliminar la sentenciareturn. Cuando eliminas esa sentencia return, el error desaparecerá y la función aún devolverá implícitamente el cálculo.

const calcAreaImplicitReturn = (width, height) => width * height;
// Entonces, ¿cuándo deberías usar la sintaxis de función flecha? Bueno, depende. Muchos desarrolladores la usan consistentemente en sus proyectos personales. Sin embargo, al trabajar en equipo, la elección generalmente depende de si la base de código existente usa funciones regulares o funciones flecha. In future lessons, we'll cover when to use arrow functions and when to avoid them.