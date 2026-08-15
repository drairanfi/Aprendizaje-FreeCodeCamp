// Construye un Enmascarador de Correo Electrónico
// En este laboratorio, enmascararás la parte del nombre de usuario de una dirección de correo electrónico con asteriscos. Enmascaramiento es un término utilizado para ocultar o reemplazar información sensible con asteriscos u otros caracteres.

// Por ejemplo, si la dirección de correo electrónico fuera myEmail@email.com, entonces la dirección de correo enmascarada será m*****l@email.com.

// Objetivo: Cumplir con las historias de usuario a continuación y pasar todas las pruebas para completar el laboratorio.

// Historias de usuario:

// Crea una función llamada maskEmail que tome email como argumento.
// Dentro de la función, debes enmascarar el email y agregarle el nombre del dominio. Recuerda que puedes usar métodos como slice, repeat, indexOf o incluso replace para ayudarte.
// Fuera de la función, declara una variable llamada email para almacenar la dirección de correo electrónico que deseas enmascarar.
// Llama la función maskEmail con la variable email y muestra el resultado en la consola.
// maskEmail("apple.pie@example.com") debería devolver "a*******e@example.com".
// maskEmail("freecodecamp@example.com") debería devolver "f**********p@example.com".
// maskEmail("info@test.dev") debería devolver "i**o@test.dev".
// maskEmail("user@domain.org") debería devolver "u**r@domain.org".

function maskEmail(email) {
    const first = email.slice(0, 1);

    let rpla = email.slice(1, email.indexOf("@") - 1);
    let value = rpla.length;
    rpla = rpla.replaceAll(rpla, "*").repeat(value);

    const fijo = email.slice(email.indexOf("@") - 1);

    return first + rpla + fijo;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));

// conclusion: todo fue sin IA claramente la logica es mucho para algo sencillo. pdta: mejoraremos
