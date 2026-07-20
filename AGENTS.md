# AGENTS.md — Proyecto FreeCodeCamp

## Descripción del proyecto

Cuaderno de estudio personal del currículum de FreeCodeCamp. Cada archivo dentro de `src/lecciones/` representa un paso del programa, con explicaciones en español rioplatense y ejemplos de código ejecutables.

El proyecto NO es una app interactiva — es un conjunto de scripts que se importan desde `src/main.js` y se ejecutan en la consola del navegador al abrir `index.html`.

## Stack

- **JavaScript vanilla** (ES Modules, `type="module"`)
- **HTML5** — un solo `index.html` que carga `src/main.js`
- **Sin dependencias, bundlers, frameworks ni build steps**
- NO hay npm, package.json, ni test runners

## Arquitectura

```
index.html                  → <script type="module" src="./src/main.js">
src/
├── main.js                 → Entry point. Importa cada paso como módulo.
└── lecciones/
    ├── booleanosYNumeros/
    │   ├── paso{N}.js       → Una lección por archivo
    │   └── talleres/
    │       └── taller{N}.js
    └── variablesYCadenas/
        ├── paso{N}.js
        └── talleres/
            ├── taller1.js
            └── taller2.js
```

Cada archivo `paso{N}.js` es un módulo ES que se ejecuta por su sola importación. No exporta nada. Al importarse, corre su código y muestra resultados en la consola.

## Convenciones de código

### Comentarios

- **Todo el texto explicativo** debe ir como comentario (`//`), NUNCA como string suelto o código ejecutable.
- Usar comentarios de línea (`//`) no de bloque (`/* */`).
- El texto explicativo está en **español rioplatense** (voseo: "agarrá", "poné", "mirá").
- Inline comments después de un `console.log` llevan `//` y van pegados al código en la misma línea.

```js
// Ejemplo correcto
const num = 42;
console.log(typeof num); // number
```

### Nombres de variables

- **Cada paso debe tener nombres de variables ÚNICOS** para evitar `SyntaxError` al importar todo en el mismo scope (ES Modules comparten scope global entre módulos).
- Usar prefijos semánticos por operación: `strValue`, `anotherStr`, `andA`, `orA`, `bitwiseNum`, `voidResult`, `typeofValue`.
- NO re-usar `str`, `num`, `a`, `b`, `result`, `value` en más de un bloque dentro del mismo archivo.
- Usar `camelCase`.

### Estructura típica de un paso

```js
// Título del tema
//
// Párrafo explicativo comentado...

const variableUnica = 'valor';

console.log(variableUnica); // inline comment

// Más explicación comentada...

const otraVariableUnica = otroValor;
console.log(otraVariableUnica); // inline comment

// --- Conclusión ---
// Resumen del tema aprendido.
```

### Talleres (ejercicios prácticos)

Los talleres están en `talleres/` dentro de cada tema. Son scripts con un problema a resolver, NO tienen texto explicativo extenso. Usan `if/else`, variables, lógica condicional.

## Cómo agregar una lección nueva

1. Crear `src/lecciones/<tema>/paso{N}.js` siguiendo la estructura de ejemplo.
2. Agregar el `import` correspondiente en `src/main.js`.
3. Actualizar este `AGENTS.md` y el `README.md` con el nuevo archivo y concepto.
4. Verificar que no haya variables duplicadas entre pasos (cada variable debe ser única en todo el proyecto — los ES Modules comparten scope global).

## Errores comunes a evitar

- ❌ Texto explicativo sin `//` al inicio — JS lo interpreta como código y tira error.
- ❌ Variables con mismo nombre en distintos pasos — al importar todo, se pisan.
- ❌ Mezclar inglés y español en comentarios — mantener consistencia en español rioplatense.
- ❌ Olvidar agregar el `import` en `main.js`.
- ❌ Olvidar actualizar README.md y AGENTS.md con la nueva lección.

## Git

- Commits en español o inglés, lo que sea más claro. Preferir conventional commits.
- Un commit por lección nueva o grupo de cambios relacionados.
- NO incluir `.atl/` (ya está en `.gitignore`).
- NO subir `node_modules/` ni `.env`.

## Atajos útiles

- Para probar: abrir `index.html` en navegador → DevTools → Console.
- Para ver errores de sintaxis: la consola del navegador muestra el error y la línea.
- Para buscar variables duplicadas entre archivos: buscar `const ` o `let ` en todos los `.js`.
