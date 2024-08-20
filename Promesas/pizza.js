// Ejercicio: Preparación Asíncrona de una Pizza

// Descripción:

// Crea un simulador para el proceso de preparación de una pizza utilizando programación asíncrona en JavaScript. Debes implementar tres funciones que representen diferentes etapas en la preparación de la pizza, y cada una de estas etapas debe simular un tiempo de procesamiento específico. Puedes utilizar promesas, async/await o callbacks para manejar la asincronía.

// Requisitos:

//     Función hacerMasa:
//         Simula el proceso de hacer la masa de la pizza.
//         Debe tardar 4 segundos (4000 milisegundos) en completarse.
//         Debe retornar una promesa que se resuelva cuando la masa esté lista.
function hacerMasa(numeroPizzas) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Masa lista para ${numeroPizzas} pizzas.`);
            resolve();
        }, 4000 * numeroPizzas);

    });
}
//     Función ponerToppings:
//         Simula el proceso de añadir toppings a la pizza.
//         Debe tardar 2 segundos (2000 milisegundos) en completarse.
//         Debe retornar una promesa que se resuelva cuando los toppings estén puestos.

function ponerToppings(numeroToppings) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Listos ${numeroToppings} toppings puestos en cada pizza.`);
            resolve();
        }, 2000 * numeroToppings);
    })
}


//     Función meterAlHorno:
//         Simula el proceso de meter la pizza al horno.
//         Debe tardar 5 segundos (5000 milisegundos) en completarse.
//         Debe retornar una promesa que se resuelva cuando la pizza esté horneada.

function meterAlHorno() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Pizza horneada.");
            resolve();
        }, 5000);
    })
}

hacerMasa (1).then (

    resolve => ponerToppings (3)
).then(
    resolve => meterAlHorno()
).then(
    () => console.log("Pizza lista para servir.")
)

// Objetivo del Ejercicio:

//     Implementa estas funciones usando promesas, async/await o callbacks.
//     Crea una función principal que coordine la ejecución de estas etapas en el orden correcto, asegurando que cada etapa se complete antes de pasar a la siguiente.

// -------------------------------------------------------------------------------------------------------
// Ejemplo de salida:

// Masa lista.
// Toppings puestos.
// Pizza horneada.
// Pizza lista para servir.

