function soyCien() {
    return 100
}

function soyDoscientos() {
    return 200
}

function sumaDosFunciones(funcion1, funcion2) {
    const suma = funcion1() + funcion2()
    return suma // retornamos la suma de las dos funciones
}

console.log(sumaDosFunciones(soyCien, soyDoscientos)) // Devuelve 300