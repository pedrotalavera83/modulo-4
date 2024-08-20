//Concatenación de varias promesas usando async/await

function operacion1(numero) {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("Proceso 1 se cumplió");
            res(numero);
        }, 3000);
    });
}

function operacion2(numero) {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("Proceso 2 se cumplió");
            res(numero + 2);
        }, 4000);
    });
}

function operacion3(numero) {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("Proceso 3 se cumplió");
            res(numero * 3);
        }, 1000);
    });
}

//Paso 1: Definir una función de tipo async que me va a permitir manipular procesos asíncronos
//En otras palabras, me permite usar "await" dentro de ella.

async function ejecutarOperaciones() {
    //Paso 2: Definir los bloques try/catch para capturar cualquier error que pueda ocurrir
    try {
        //Paso 3: Ejecutar los procesos asíncronos utilizando await
        //Usamos "await" para esperar el resultado de cada operación antes de pasar al siguiente paso.
        //Esto hace que el código se ejecute de manera secuencial, tal como si fuera síncrono.
        const resultado1 = await operacion1(5);
        const resultado2 = await operacion2(resultado1);
        const resultadoFinal = await operacion3(resultado2);
        console.log("El resultado final es: ", resultadoFinal);
    } catch (error) {
        console.error("Hubo un error:", error);
    }
}

//Paso 3: Llamar a la función principal
//ejecutarOperaciones()

(async function () {
    //Paso 2: Definir los bloques try/catch para capturar cualquier error que pueda ocurrir
    try {
        //Paso 3: Ejecutar los procesos asíncronos utilizando await
        //Usamos "await" para esperar el resultado de cada operación antes de pasar al siguiente paso.
        //Esto hace que el código se ejecute de manera secuencial, tal como si fuera síncrono.
        const resultado1 = await operacion1(5);
        const resultado2 = await operacion2(resultado1);
        const resultadoFinal = await operacion3(resultado2);
        console.log("El resultado final es: ", resultadoFinal);
    } catch (error) {
        console.error("Hubo un error:", error);
    }
})(); //Función ejecutada usando la expresión IIFE (Immediatly invoked function expression)
