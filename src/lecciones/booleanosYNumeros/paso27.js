// ¿Cuáles son los operadores lógicos binarios, y cómo funcionan?
//
// Los operadores lógicos binarios te ayudan a evaluar dos expresiones y devuelven un resultado basado en su veracidad. Veamos los tres operadores lógicos binarios más comunes: AND lógico, OR lógico y el operador de fusión nula.
//
// The logical AND operator is represented by a double ampersand (&&). Verifica si ambos operandos son verdaderos y devuelve un resultado. Si ambos operandos son truthy, devuelve el segundo valor, es decir, el de la derecha:

const andResult = true && 'hello';

console.log(andResult); // hello
// En el ejemplo anterior, el texto hello se registra en la consola porque ambos operandos son true. Si cualquiera de los operandos es falsy, devuelve el valor falsy:

const andFalsyResult = 0 && 3;

console.log(andFalsyResult); // 0
// Dado que 0 es un valor falsy, el número 0 se registra en la consola. Y si ambos operandos son falsy, devuelve el primer valor falsy:

const andBothFalsy = false && 0;

console.log(andBothFalsy); // false
// Dado que false es un valor falsy, entonces false se registra en la consola. El operador AND lógico es útil cuando deseas verificar múltiples condiciones y asegurarte de que todas sean verdaderas antes de continuar. Aquí hay un ejemplo:

if (2 < 3 && 3 < 4) {
 console.log('The if block runs'); 
} else {
 console.log('The else block runs');
} 
// En la condición, dado que 2 es menor que 3 Y 3 es menor que 4, entonces la oración The if block runs se registrará en la consola.
//
// El operador lógico OR verifica si al menos uno de los operandos es verdadero. Si el primer operando es verdadero, devuelve ese valor:

const orResult = 'This is truthy' || false;

console.log(orResult); // This is truthy
// Si el primer operando es falsy pero el segundo es truthy, el segundo valor se registrará en la consola:

const orSecondTruthy = 0 || 'This is truthy';

console.log(orSecondTruthy); // This is truthy
// Es común usar el operador OR lógico dentro de sentencias if/else como esta:

let userInput;

if (userInput || 'Guest') {
 console.log('A user is present');
} else {
 console.log('No user detected');
}
// Como no asignamos un valor a la variable userInput, actualmente es undefined. La condición en la sentencia if revisa si la variable userInput o la cadena Guest son truthy. Dado que la cadena Guest es verdadera en un contexto booleano como este, la cadena A user is present se registrará en la consola.
//
// El operador de fusión nula es más sofisticado que el OR lógico y el AND lógico. Representado por un doble signo de interrogación (??), ayuda en escenarios donde quieres devolver un valor solo si el primero es null o undefined. Aquí tienes un ejemplo de cómo trabajar con el operador de fusión nula:

const nullishResult = null ?? 'default';

console.log(nullishResult); // default
// Since null is a nullish value, the string default would be logged to the console. El operador de fusión nula es increíblemente útil en situaciones donde null o undefined son los únicos valores que deben activar un valor de reserva o por defecto. Aquí hay un ejemplo de cómo manejar las configuraciones de preferencias de un usuario:

const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light
// En el ejemplo anterior, tenemos un objeto llamado userSettings que contiene las propiedades theme, volume y notifications. Estamos accediendo al theme utilizando la notación de punto como userSettings.theme. You will learn more about how to work with objects in a future lesson. Como el theme del usuario actualmente se establece en null, entonces la cadena light se registrará en la consola.
