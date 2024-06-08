// Obtener referencias a los elementos de la tabla y los campos de entrada
const casilla1_2_tabla1 = document.getElementById('tabla1-casilla1-2');
const casilla2_2_tabla1 = document.getElementById('tabla1-casilla2-2');
const casilla3_2_tabla1 = document.getElementById('tabla1-casilla3-2');
const casilla4_2_tabla1 = document.getElementById('tabla1-casilla4-2');
const boton1_9_tabla1 = document.getElementById('tabla1-boton1-9');

const casilla1_2_tabla2 = document.getElementById('tabla2-casilla1-2');
const casilla2_2_tabla2 = document.getElementById('tabla2-casilla2-2');
const casilla3_2_tabla2 = document.getElementById('tabla2-casilla3-2');
const casilla4_2_tabla2 = document.getElementById('tabla2-casilla4-2');
const casilla5_2_tabla2 = document.getElementById('tabla2-casilla5-2');
const casilla6_2_tabla2 = document.getElementById('tabla2-casilla6-2');
const boton1_9_tabla2 = document.getElementById('tabla2-boton1-9');

// Función para calcular la bonificación y actualizar las casillas de la tabla 1
function calcularBonificacionTabla1() {
    const valorCasilla1_2 = parseFloat(casilla1_2_tabla1.value) || 0;
    const valorCasilla2_2 = parseFloat(casilla2_2_tabla1.value) || 0;

    const bonificacion = (valorCasilla1_2 * valorCasilla2_2) - valorCasilla1_2;
    casilla3_2_tabla1.textContent = bonificacion.toFixed(2);

    const totalConBonificacion = valorCasilla1_2 + bonificacion;
    casilla4_2_tabla1.textContent = totalConBonificacion.toFixed(2);
}

// Función para calcular la bonificación y actualizar las casillas de la tabla 2
function calcularBonificacionTabla2() {
    const valorCasilla1_2 = parseFloat(casilla1_2_tabla2.value) || 0;
    const valorCasilla2_2 = parseFloat(casilla2_2_tabla2.value) || 0;
    const valorCasilla3_2 = parseFloat(casilla3_2_tabla2.value) || 0;
    const valorCasilla4_2 = parseFloat(casilla4_2_tabla2.value) || 0;

    const calculoFormula = (valorCasilla1_2 - valorCasilla2_2) - ((valorCasilla4_2 * valorCasilla3_2) + (valorCasilla4_2 * valorCasilla3_2) - 1);

    let resultadoTexto;
    if (calculoFormula > 0) {
        resultadoTexto = "Poner " + calculoFormula.toFixed(2) + " FP";
    } else if (calculoFormula === 0) {
        resultadoTexto = "Estas a la par";
    } else {
        resultadoTexto = "Te sobran " + Math.abs(calculoFormula).toFixed(2) + " FP";
    }

    casilla6_2_tabla2.textContent = resultadoTexto;
}

// Función para establecer el valor 1.9 en casilla2_2 de la tabla 1
function establecerValor1_9_tabla1() {
    casilla2_2_tabla1.value = 1.9;
    calcularBonificacionTabla1();
}

// Función para establecer el valor 1.9 en casilla3_2 de la tabla 2
function establecerValor1_9_tabla2() {
    casilla3_2_tabla2.value = 1.9;
    calcularBonificacionTabla2();
}

// Event listeners para los campos de entrada y botones
casilla1_2_tabla1.addEventListener('input', calcularBonificacionTabla1);
casilla2_2_tabla1.addEventListener('input', calcularBonificacionTabla1);
boton1_9_tabla1.addEventListener('click', establecerValor1_9_tabla1);

casilla1_2_tabla2.addEventListener('input', calcularBonificacionTabla2);
casilla2_2_tabla2.addEventListener('input', calcularBonificacionTabla2);
casilla3_2_tabla2.addEventListener('input', calcularBonificacionTabla2);
casilla4_2_tabla2.addEventListener('input', calcularBonificacionTabla2);
boton1_9_tabla2.addEventListener('click', establecerValor1_9_tabla2);

// Calcular los valores iniciales al cargar la página
calcularBonificacionTabla1();
calcularBonificacionTabla2();
