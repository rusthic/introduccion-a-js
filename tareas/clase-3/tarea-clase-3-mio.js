// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

let miNombre = "Pepito";
let nombrePariente = "Potito";
let nombreUsuario = prompt("¿Como te llamas?");

if (nombreUsuario === miNombre) {
    console.log(`Hola, Tocayo! Yo tambien me llamo ${miNombre}.`);
} else if (nombreUsuario === nombrePariente) {
    console.log(`Hola ${nombreUsuario}, te llamas igual que mi pariente ${nombrePariente}`);
} else {
    console.log(`Hola ${nombreUsuario}`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

let miEdad = 35;
let edadUsuario = Number(prompt("¿Cuantos años tenes?"));

if (edadUsuario === miEdad) {
    console.log("Tenemos la misma edad.");
} else if (edadUsuario >= miEdad) {
    console.log("Tenes mas años que yo");
} else {
    console.log("Tenes menos años que yo");
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let tieneDNI = prompt("Tenes DNI?").toLowerCase();

if (tieneDNI === "si") {
    let edad = Number(prompt("Cuantos años tenes?"));
    if (edad >= 18) {
        console.log("Podes entrar");
    } else {
        console.log("No podes entrar siendo menor");
    }
} else if (tieneDNI === "no") {
    console.log("No podes entrar sin DNI");
} else {
    console.log("No entendi la respuesta");
}
