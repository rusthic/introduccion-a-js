function calcularMayorSalario(salarios) {
    let mayorSalario = salarios[0];
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i] > mayorSalario) mayorSalario = salarios[i];
    }
    return mayorSalario;
}

function calcularMenorSalario(salarios) {
    let menorSalario = salarios[0];
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i] < menorSalario) menorSalario = salarios[i];
    }
    return menorSalario;
}

function calcularPromedioAnual(salarios) {
    let promedioAnual = 0;
    for (let i = 0; i < salarios.length; i++) {
        promedioAnual += salarios[i];
    }
    return promedioAnual / salarios.length;
}
