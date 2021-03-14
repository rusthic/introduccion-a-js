Resumen de contenidos de r/argentinaprograma introducción a JavaScript

# JavaScript

## Comentarios

`//` Comentario de una sola linea.

`/* ... */` Comentario multi-linea.

## Mostrar texto

`alert('texto a mostrar.')` Muestra el texto en un pop-up.

`console.log('texto a imprimir.')` Imprime el texto en consola.

## Solicitar inputs

`prompt('mensaje a mostrar.')` Muestra un pop-up con un cuadro para input.

## Variables

### Declaración:

`let identificador` Declara una variable de alcance local con ámbito de bloque (bloque scope).

Una variable declarada con `let` sin un valor asignado tiene como valor `undefined`. Un intento de acceder a esta dispara una excepción `ReferenceError`.

El valor `undefined` se comporta como `false` en contexto booleano, `NaN` en contexto numérico.

Cuando evalúas una variable `null` se comporta como `0` en contexto numérico y como `false` en contexto booleano.

### Ámbito de variables:

Declarar una variable dentro de una función: variable local.

Declarar una variable fuera de una función: variable global.

### Elevación de variables (hoisting)

Se puede hacer referencia a una variable declarada mas tarde, sin obtener una excepción. Las variables son elevadas o "izadas" a la parte superior de la función o declaración con valor `undefined` por mas que tengan valor asignado.

## Constantes

`const identificador` Declara una constante de solo lectura.

Las reglas de ámbito para las constantes son las mismas que las de ámbito de bloque de las variables `let`.

No puedes declarar una constante con el mismo nombre que una función o una variable en el mismo ámbito.

## Estructuras y tipos de datos

### Primitivos

-   Booleano: `true` o `false`
-   null: Palabra clave especial que denota un valor nulo.
-   undefined: Propiedad de alto nivel cuyo valor no esta definido.
-   Number: Número entero o con coma flotante.
-   BigInt: Número entero con precisión arbitraria: Ej: 989769879n.
-   String: Secuencia de caracteres que representa un valor de texto.
-   Symbol: Tipo de dato cuyas instancias son únicas e inmutables.

### Object

-   una estructura de datos que contiene datos e instrucciones para trabajar con los datos.

## Operadores

| Operador             | Explicación                                                              | Símbolo | Ejemplo          |
| -------------------- | ------------------------------------------------------------------------ | ------- | ---------------- |
| Suma / concatena     | Sumar numeros o juntar cadenas de texto                                  | +       | 2 + 1 "ho"+"la"  |
| Resta / Mult / Div   | Restar, multiplicar o dividir                                            | - \* /  | 9 - 4 \* 7       |
| Asignación           | Asigna un valor a una variable                                           | =       | asd = " "        |
| Identidad / Igualdad | Comprueba si dos valores son iguales entre si. Devuelve `true` o `false` | ===     | variable === 4   |
| Negación / Distinto  | Equivale al operador NOT. Cambia `true` por `false`                      | ! !=    | !variable / !==3 |
