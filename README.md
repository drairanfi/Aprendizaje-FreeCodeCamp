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
    │   ├── paso48.js                # Repaso de números y operadores
    │   ├── paso49.js                # Comparaciones con null y undefined
    │   ├── paso50.js                # Sentencias switch vs if/else
    │   ├── paso51.js                # Repaso: null, undefined y switch
    │   ├── laboratorios/
    │   │   └── laboratorio1.js      # Máquina de adivinación (fortunas)
    │   └── talleres/
    │       ├── taller1.js           # App verificador de lógica
    │       └── taller2.js           # MathBot: práctica con Math.random()
    ├── funciones/                   # Funciones
    │   ├── paso1.js                 # Declaración, llamada, parámetros y return
    │   └── paso2.js                 # Funciones flecha (arrow functions)
    ├── variablesYCadenas/           # Strings y métodos
    │   ├── paso68.js                # .toUpperCase(), .toLowerCase()
    │   ├── paso69.js                # .trim(), .trimStart(), .trimEnd()
    │   ├── paso86.js                # .replace()
    │   ├── paso87.js                # .repeat()
    │   ├── paso99.js                # Repaso teórico
    │   └── talleres/
    │       ├── taller1.js           # Formateador de Cadenas
    │       └── taller2.js           # Transformador de Cadenas
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
| `src/lecciones/variablesYCadenas/paso99.js` | Repaso teórico |
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
| `src/lecciones/booleanosYNumeros/paso48.js` | Repaso: números, operadores, Math, métodos comunes |
| `src/lecciones/booleanosYNumeros/paso49.js` | Comparaciones con `null` y `undefined` |
| `src/lecciones/booleanosYNumeros/paso50.js` | Sentencias `switch` vs cadenas `if/else` |
| `src/lecciones/booleanosYNumeros/paso51.js` | Repaso: `null`, `undefined` y `switch` |
| `src/lecciones/booleanosYNumeros/laboratorios/laboratorio1.js` | Máquina de adivinación con fortunas aleatorias |
| `src/lecciones/booleanosYNumeros/talleres/taller1.js` | App verificador de lógica |
| `src/lecciones/booleanosYNumeros/talleres/taller2.js` | MathBot: práctica con Math.random() |

### funciones

| Archivo | Concepto |
|---|---|
| `src/lecciones/funciones/paso1.js` | Declaración, llamada, parámetros, `return`, funciones anónimas y parámetros por defecto |
| `src/lecciones/funciones/paso2.js` | Funciones flecha: sintaxis, parámetros, retorno implícito |

## Stack

- JavaScript (ES Modules)
- HTML5
- Sin frameworks ni bundlers

---

_En progreso. A medida que avance por el currículum, se agregan más lecciones._
