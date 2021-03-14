/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#siguiente-paso").onclick = function(event) {
  const cantidadIntegrantes = Number(
    document.querySelector("#cantidad-integrantes").value
  );
  borrarIntegrantesAnteriores();
  crearIntegrantes(cantidadIntegrantes);

  event.preventDefault(cantidadIntegrantes);
};

document.querySelector("#calcular").onclick = function(event) {
  const edades = obtenerEdadesIntegrantes();
  mostrarEdad("mayor-edad", calcularMayorEdad(edades));
  mostrarEdad("menor-edad", calcularMenorEdad(edades));
  mostrarEdad("promedio-edad", calcularPromedioEdades(edades));
  mostrarResultados();

  event.preventDefault();
};

document.querySelector("#resetear").onclick = resetear; //por que no anda con resetear()?

function crearIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
  } else {
    resetear();
  }
  for (let i = 0; i < cantidadIntegrantes; i++) {
    const div = document.createElement("div");
    div.className = "integrante";

    const label = document.createElement("label");
    label.textContent = "Edad del integrante " + (i + 1) + ": ";
    const input = document.createElement("input");
    input.type = "number";

    div.appendChild(label);
    div.appendChild(input);

    const integrante = document.querySelector("#integrantes");
    integrantes.appendChild(div);
  }
}

function obtenerEdadesIntegrantes() {
  const integrantes = document.querySelectorAll(".integrante input");
  const edades = [];
  for (let i = 0; i < integrantes.length; i++) {
    edades.push(Number(integrantes[i].value));
  }
  return edades;
}

function mostrarResultados() {
  document.querySelector("#analisis").className = "";
}

function mostrarEdad(tipo, edad) {
  document.querySelector(`#${tipo}`).textContent = edad;
}

function borrarIntegrantesAnteriores() {
  const integrante = document.querySelectorAll(".integrante");
  for (let i = 0; i < integrante.length; i++) {
    integrante[i].remove();
  }
}

function mostrarBotonCalculo() {
  document.querySelector("#calcular").className = "";
}

function ocultarBotonCalculo() {
  document.querySelector("#calcular").className = "oculto";
}

function ocultarResultados() {
  document.querySelector("#analisis").className = "oculto";
}

function resetear() {
  ocultarResultados();
  borrarIntegrantesAnteriores();
  ocultarBotonCalculo();
}
