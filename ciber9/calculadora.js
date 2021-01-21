// Variables que introducimos en la calculadora
let pantalla = document.getElementById('pantalla');
//querySelectorAll: Devuelve todos los elementos del documento que coinciden con un selector o selectores CSS especificados
const botones = document.querySelectorAll("#buttons a");

// Creamos un bucle for
for (const boton of botones) {
    /* Registra un evento a un objeto en específico:
    sintaxis: elemento.addEventListener(evento, funcion, usecapture (valor boolean))*/
    boton.addEventListener('click', function (usecapture) {
        usecapture.preventDefault();

        if (usecapture.target.dataset.key == 'equal') {
            pantalla.textContent = eval(pantalla.textContent);
            if (pantalla.textContent.length > 8) {
                pantalla.textContent = eval(pantalla.textContent).toFixed(8);
            }
        } else if (usecapture.target.dataset.key == 'clear') {
            pantalla.textContent = '';
        } else {
            pantalla.textContent = pantalla.textContent + usecapture.target.dataset.key;
        }
    });
}




















// Ejemplo 1
// function calculadora() {
//     let operador = (document.getElementById("signo").value);
//     let valor1 = parseInt(document.getElementById("valor1").value);
//     let valor2 = parseInt(document.getElementById("valor2").value);

//     let resultado;

//     if (operador == "+") {
//         resultado = (valor1 + valor2);

//     } else if (operador == "-") {
//         resultado = valor1 - valor2;

//     } else if (operador == "*") {
//         resultado = valor1 * valor2;

//     } else {
//         resultado = valor1 / valor2;
//     }
//     document.getElementById("respuesta").innerHTML = resultado;

// }