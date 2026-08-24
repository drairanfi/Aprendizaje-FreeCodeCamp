# Aprendizaje FreeCodeCamp

Cuaderno de estudio personal siguiendo el currículum de [FreeCodeCamp](https://www.freecodecamp.org). Arranca desde el paso 68 del programa. Cada archivo en `src/lecciones/` cubre un paso con explicaciones en español y ejemplos de código.

## Cómo usar

1. Cloná el repo.
2. Abrí `index.html` en tu navegador.
3. Abrí DevTools (`F12` o `Cmd+Option+I`) y mirá la consola.

No necesita build steps ni dependencias. Es JavaScript vanilla con ES Modules.

## Estructura

```
src/
├── main.js                          # Entry point, importa todas las lecciones
└── lecciones/
    ├── booleanosYNumeros/           # Booleanos, números y operadores
    │   ├── paso1.js                 # Numbers: typeof, bases, especiales
    │   ├── paso2.js                 # Operadores aritméticos (+, -, *, /, %, **)
    │   ├── paso3.js                 # Coerción de tipos
    │   ├── paso5.js                 # Asociatividad y precedencia
    │   ├── paso6.js                 # Asignación compuesta (+=, -=, *=, /=)
    │   ├── paso7.js                 # Asignación compuesta (ejemplos extra)
    │   ├── paso9.js                 # Booleanos, igualdad (==, ===, !=, !==)
    │   ├── paso10.js                # Operadores de comparación (>, >=, <, <=)
    │   ├── paso24.js                # Operadores unarios (+, -, !, ~, void, typeof)
    │   ├── paso25.js                # Operadores bit a bit (&, |, ^, ~, <<, >>)
    │   ├── paso26.js                # Condicionales: if/else if/else, ternario
    │   ├── paso27.js                # Operadores lógicos (&&, ||, ??)
    │   ├── paso28.js                # Objeto Math: random, floor, ceil, etc.
    │   ├── paso45.js                # isNaN() y Number.isNaN()
    │   ├── paso46.js                # parseFloat() y parseInt()
    │   ├── paso47.js                # .toFixed()
    │   ├── paso49.js                # Comparaciones con null y undefined
    │   ├── paso50.js                # Sentencias switch vs if/else
    │   ├── laboratorios/
    │   │   └── laboratorio1.js      # Máquina de adivinación (fortunas)
    │   ├── revision/
    │   │   ├── revisionMatematicas.js   # Repaso de números y operadores
    │   │   └── revisionComparaciones.js # Repaso: null, undefined y switch
    │   └── talleres/
    │       ├── taller1.js           # App verificador de lógica
    │       └── taller2.js           # MathBot: práctica con Math.random()
    ├── funciones/                   # Funciones
    │   ├── paso1.js                 # Declaración, llamada, parámetros y return
    │   ├── paso2.js                 # Funciones flecha (arrow functions)
    │   ├── paso3.js                 # Alcance: global, local y de bloque
    │   ├── laboratorios/
    │   │   ├── laboratorio1.js      # Verificador de booleanos primitivos
    │   │   ├── laboratorio2.js      # Enmascarador de correo electrónico
    │   │   ├── laboratorio3.js      # Convertidor Celsius a Fahrenheit
    │   │   └── laboratorio4.js      # Asistente de conteo de cartas
    │   └── revision/
    │       └── revisionFunciones.js # Repaso: funciones, flecha y alcance
    ├── variablesYCadenas/           # Strings y métodos
    │   ├── paso68.js                # .toUpperCase(), .toLowerCase()
    │   ├── paso69.js                # .trim(), .trimStart(), .trimEnd()
    │   ├── paso86.js                # .replace()
    │   ├── paso87.js                # .repeat()
    │   ├── revision/
    │   │   └── revisionCadenas.js   # Repaso de cadenas
    │   └── talleres/
    │       ├── taller1.js           # Formateador de Cadenas
    │       └── taller2.js           # Transformador de Cadenas
    ├── arreglos/                    # Arreglos (arrays)
    │   ├── paso1.js                 # Arrays: características, índices, length
    │   ├── paso2.js                 # Acceso y actualización de elementos
    │   ├── paso3.js                 # push(), pop(), shift(), unshift()
    │   ├── paso4.js                 # Arreglos 1D vs 2D
    │   ├── paso5.js                 # Desestructuración de arreglos
    │   ├── paso6.js                 # Invertir una cadena: split(), reverse(), join()
    │   ├── paso29.js                # indexOf()
    │   ├── paso30.js                # splice()
    │   ├── paso31.js                # includes()
    │   ├── paso32.js                # Copias superficiales: concat(), slice(), spread
    │   ├── laboratorios/
    │   │   ├── laboratorio1.js      # Menú de almuerzos
    │   │   └── laboratorio2.js      # Laboratorio de arreglos
    │   ├── revision/
    │   │   └── revisionArreglos.js  # Repaso de arreglos
    │   └── talleres/
    │       └── taller1.js           # Lista de compras
    └── ...                          # Más temas a medida que avance
```

Cada tema es un subdirectorio dentro de `src/lecciones/`. Los talleres prácticos están dentro del subdirectorio `talleres/` de cada tema.

## Progreso

### variablesYCadenas

| Archivo | Concepto |
|---|---|
| `src/lecciones/variablesYCadenas/paso68.js` | `.toUpperCase()`, `.toLowerCase()` |
| `src/lecciones/variablesYCadenas/paso69.js` | `.trim()`, `.trimStart()`, `.trimEnd()` |
| `src/lecciones/variablesYCadenas/paso86.js` | `.replace()` |
| `src/lecciones/variablesYCadenas/paso87.js` | `.repeat()` |
| `src/lecciones/variablesYCadenas/revision/revisionCadenas.js` | Repaso de cadenas |
| `src/lecciones/variablesYCadenas/talleres/taller1.js` | Formateador de Cadenas |
| `src/lecciones/variablesYCadenas/talleres/taller2.js` | Transformador de Cadenas |

### booleanosYNumeros

| Archivo | Concepto |
|---|---|
| `src/lecciones/booleanosYNumeros/paso1.js` | Numbers en JS: typeof, bases numéricas, NaN, Infinity |
| `src/lecciones/booleanosYNumeros/paso2.js` | Operadores aritméticos (+, -, *, /, %, **) y precedencia |
| `src/lecciones/booleanosYNumeros/paso3.js` | Coerción de tipos con strings, booleanos, null, undefined |
| `src/lecciones/booleanosYNumeros/paso5.js` | Asociatividad y precedencia de operadores |
| `src/lecciones/booleanosYNumeros/paso6.js` | Asignación compuesta (+=, -=, *=, /=, etc.) |
| `src/lecciones/booleanosYNumeros/paso7.js` | Asignación compuesta — ejemplos extra |
| `src/lecciones/booleanosYNumeros/paso9.js` | Booleanos, igualdad (==, ===) y desigualdad (!=, !==) |
| `src/lecciones/booleanosYNumeros/paso10.js` | Operadores >, >=, <, <= |
| `src/lecciones/booleanosYNumeros/paso24.js` | Operadores unarios (+, -, !, ~, void, typeof) |
| `src/lecciones/booleanosYNumeros/paso25.js` | Operadores bit a bit (&, \|, ^, ~, <<, >>) |
| `src/lecciones/booleanosYNumeros/paso26.js` | Condicionales: if/else if/else, ternario, truthy/falsy |
| `src/lecciones/booleanosYNumeros/paso27.js` | Operadores lógicos: AND, OR, fusión nula |
| `src/lecciones/booleanosYNumeros/paso28.js` | Objeto Math: random, floor, ceil, round, sqrt, etc. |
| `src/lecciones/booleanosYNumeros/paso45.js` | `isNaN()`, `Number.isNaN()`, división por cero |
| `src/lecciones/booleanosYNumeros/paso46.js` | `parseFloat()`, `parseInt()`, coerción a número |
| `src/lecciones/booleanosYNumeros/paso47.js` | `.toFixed()`, redondeo, formato de moneda |
| `src/lecciones/booleanosYNumeros/paso49.js` | Comparaciones con `null` y `undefined` |
| `src/lecciones/booleanosYNumeros/paso50.js` | Sentencias `switch` vs cadenas `if/else` |
| `src/lecciones/booleanosYNumeros/revision/revisionMatematicas.js` | Repaso: números, operadores, Math, métodos comunes |
| `src/lecciones/booleanosYNumeros/revision/revisionComparaciones.js` | Repaso: `null`, `undefined` y `switch` |
| `src/lecciones/booleanosYNumeros/laboratorios/laboratorio1.js` | Máquina de adivinación con fortunas aleatorias |
| `src/lecciones/booleanosYNumeros/talleres/taller1.js` | App verificador de lógica |
| `src/lecciones/booleanosYNumeros/talleres/taller2.js` | MathBot: práctica con Math.random() |

### funciones

| Archivo | Concepto |
|---|---|
| `src/lecciones/funciones/paso1.js` | Declaración, llamada, parámetros, `return`, funciones anónimas y parámetros por defecto |
| `src/lecciones/funciones/paso2.js` | Funciones flecha: sintaxis, parámetros, retorno implícito |
| `src/lecciones/funciones/paso3.js` | Alcance: global, local y de bloque |
| `src/lecciones/funciones/revision/revisionFunciones.js` | Repaso: funciones, flecha y alcance |
| `src/lecciones/funciones/laboratorios/laboratorio1.js` | Verificador de booleanos primitivos (`booWho`) |
| `src/lecciones/funciones/laboratorios/laboratorio2.js` | Enmascarador de correo electrónico (`maskEmail`)
| `src/lecciones/funciones/laboratorios/laboratorio3.js` | Convertidor de Celsius a Fahrenheit (`convertCtoF`) |
| `src/lecciones/funciones/laboratorios/laboratorio4.js` | Asistente de conteo de cartas (`cardCounter`) |
| `src/lecciones/funciones/laboratorios/laboratorio5.js` | Calculadora de año bisiesto (`isLeapYear`) |
| `src/lecciones/funciones/laboratorios/laboratorio6.js` | Truncador de cadenas (`truncateString`) |
| `src/lecciones/funciones/laboratorios/laboratorio7.js` | Confirmador de final de cadena (`confirmEnding`) |

### arreglos

| Archivo | Concepto |
|---|---|
| `src/lecciones/arreglos/paso1.js` | Arrays: características, índices, `length`, arrays dinámicos |
| `src/lecciones/arreglos/paso2.js` | Acceso y actualización de elementos, índices inexistentes |
| `src/lecciones/arreglos/paso3.js` | `push()`, `pop()`, `shift()`, `unshift()` |
| `src/lecciones/arreglos/paso4.js` | Arreglos unidimensionales vs bidimensionales |
| `src/lecciones/arreglos/paso5.js` | Desestructuración de arreglos y sintaxis de resto |
| `src/lecciones/arreglos/paso6.js` | Invertir una cadena: `split()`, `reverse()`, `join()` |
| `src/lecciones/arreglos/paso29.js` | `indexOf()` |
| `src/lecciones/arreglos/paso30.js` | `splice()`: agregar, eliminar y reemplazar elementos |
| `src/lecciones/arreglos/paso31.js` | `includes()` |
| `src/lecciones/arreglos/paso32.js` | Copias superficiales: `concat()`, `slice()`, spread |
| `src/lecciones/arreglos/laboratorios/laboratorio1.js` | Menú de almuerzos |
| `src/lecciones/arreglos/laboratorios/laboratorio2.js` | Traductor de puntuaciones de golf (`golfScore`) |
| `src/lecciones/arreglos/revision/revisionArreglos.js` | Repaso de arreglos |
| `src/lecciones/arreglos/talleres/taller1.js` | Lista de compras |

## Stack

- JavaScript (ES Modules)
- HTML5
- Sin frameworks ni bundlers

---

_En progreso. A medida que avance por el currículum, se agregan más lecciones._
