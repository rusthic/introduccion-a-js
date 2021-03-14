# JavaScript

## Comentarios

`//` Comentario de una sola linea.

`/* ... */` Comentario multi-linea.

## Mostrar texto

`alert('texto a mostar.')` Muestra el texto en un pop-up.

`console.log('texo a imprimir.')` Imprime el texto en consola.

## Solicitar inputs

`prompt('mensaje a mostrar.')` Muestra un pop-up con un cuadro para input.

## Variables

### Declaracion:

`let identificador` Declara una variable de alcance local con ambito de bloque (bloque scope).

Una variable declarada con `let` sin un valor asignado tiene como valor `undefined`. Un intento de acceder a esta dispara una excepcion `ReferenceError`.

El valor `undefined` se comporta como `false` en contexto booleano, `NaN` en contexto numerico.

Cuando evaluas una variable `null` se comporta como `0` en contexto numerico y como `false` en contexto booleano.

### Ambito de variables:

Declarar una variable dentro de una funcion: variable local.

Declarar una variable fuera de una funcion: variable global.
