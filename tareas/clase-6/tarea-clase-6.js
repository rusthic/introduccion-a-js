/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#submit").onclick = function (event) {
    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value);
    borrarIntegrantes();
    crearIntegrantes(cantidadIntegrantes);
    mostrarBotonCalcular();

    event.preventDefault();
};

function borrarIntegrantes() {
    const integrantes = document.querySelectorAll(".integrante");
    for (let i = 0; i < integrantes.length; i++) {
        integrantes[i].remove();
    }
}

function crearIntegrantes(cantidadIntegrantes) {
    for (let i = 0; i < cantidadIntegrantes; i++) {
        agregarIntegrantes(i);
    }
}

function agregarIntegrantes(indice) {
    const div = document.createElement("div");
    div.className = "integrante";

    const label = document.createElement("label");
    label.textContent = "Edad del integrante nº " + (indice + 1);

    const input = document.createElement("input");
    input.type = "number";

    div.appendChild(label);
    div.appendChild(input);

    const integrantes = document.querySelector("#integrantes");
    integrantes.appendChild(div);
}

function mostrarBotonCalcular() {
    document.querySelector("#calcular").className = "";
}

function ocultarBotonCalcular() {
    document.querySelector("#calcular").className = "oculto";
}

document.querySelector("#calcular-edades").onclick = function (event) {
    //llamado a funciones de calculo de edades de integrantes
    event.preventDefault();
};

document.querySelector("#calcular").onclick = function (event) {
    const edades = obtenerEdadesIntegrantes();
    mostrarEdad("mayor-edad", obtenerMayorEdad(edades));
    mostrarEdad("menor-edad", obtenerMenorEdad(edades));
    mostrarEdad("promedio-edad", obtenerPromedioEdad(edades));
    mostrarResultados();

    event.preventDefault();
};

function obtenerEdadesIntegrantes() {
    const integrantes = document.querySelectorAll(".integrante input");
    const edades = [];
    for (let i = 0; i < integrantes.length; i++) {
        edades.push(Number(integrantes[i].value));
    }
    return edades;
}

function mostrarEdad(tipo, edad) {
    document.querySelector(`#${tipo}`).textContent = edad;
}

function mostrarResultados() {
    document.querySelector("#calculo-integrantes").className = "";
}

document.querySelector("#resetear").onclick = resetear;

function resetear() {
    eliminarIntegrantes();
    ocultarBotonCalcular();
    ocultarCalculos();
}

function eliminarIntegrantes() {
    const integrantesAnteriores = document.querySelectorAll(".integrante");
    for (let i = 0; i < integrantesAnteriores.length; i++) {
        integrantesAnteriores[i].remove();
    }
}

function ocultarCalculos() {
    document.querySelector("#calculo-integrantes").className = "oculto";
}