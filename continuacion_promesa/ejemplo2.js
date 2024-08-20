//Concatenación de varias promesas

function operacion1(numero) {
    return new Promise ((res) =>{
        setTimeout(() => {
            console.log("Proceso 1 se cumplió");
            res(numero)
        }, 3000);
    })
}



function operacion2(numero) {
    return new Promise ((res) =>{
        setTimeout(() => {
            console.log("Proceso 2 se cumplió");
            res(numero + 2)
        }, 4000);
    })
}

function operacion3(numero) {
    return new Promise ((res) =>{
        setTimeout(() => {
            console.log("Proceso 3 se cumplió");
            res(numero * 3)
        }, 1000);
    })
}

operacion1(5).then(//then del resultado de la ejecución de operacion1
    res => operacion2(res)
).then( //then del resultado de la ejecución de operacion2
    (res) => {
        return operacion3(res)
    }
).then(//then del resultado de la ejecución de operacion3
    function (resultado) {
        console.log("El resultado final es: " + resultado);
    }
)