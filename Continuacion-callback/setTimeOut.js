//Utilizo setTimeout con arrow function
setTimeout(() => {
    console.log("He ejecutado la funcion");
}, 5000);

//Tambien puedo pasar una función definida anteriormente

function saluda() {
    console.log("Hola a todos")
}

setTimeout(saluda, 3000);
  // Otra función de javascript que implmentamos es setInterval
function saludar() {
    console.log("Hola con setInterval")
}

setInterval(saludar, 3000);