// Función de operación1 usando callbacks

function operacion1(numero, callbacks) {
    setTimeout(() => {
        console.log("Proceso 1 cmplida");
        callbacks(numero)
    }, 1000);
}

function operacion2(numero, callbacks) {
    setTimeout(() => {
        console.log("Proceso 2 cmplida");
        callbacks(numero + 2)
    }, 2000);
}
function operacion3(numero, callbacks) {
    setTimeout(() => {
        console.log("Proceso 3 cmplida");
        callbacks(numero * 3)
    }, 1500);
}

//ejecucion de la funcion
operacion1(10, function(resultado1) {
    operacion2(resultado1, function(resultado2) {
        operacion3(resultado2, function (resultadoFinal){
            console.log("El resultado final es: " + resultadoFinal);
        })
    })
})
