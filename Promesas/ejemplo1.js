const promesa = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    setTimeout(() => {
        number > 5
        ? resolve(number)
        : reject(new Error(number))
    }, 1000);
});

// Ejecución de la promesa
promesa
.then(
    //Función que se ejecuta si la promesa se cumple
    (number) => {
        console.log(number);
    }
)
    .catch(
        //Función que se ejecuta si la promesa falla
        (error) => {
            console.error(error);
        }
    )
    