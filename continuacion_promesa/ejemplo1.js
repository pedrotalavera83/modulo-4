//simulación de una solicitud para obtener datos de un usuario a un servicio externo un ID
const funcionResolve = (usuario) => { console.log("Los datos del usuario son: " + usuario["nombre"] + " " + usuario.edad);}
//Paso 1. Declarar la promesa
function buscarUsuario(ID) {
    //Declaro la promesa para realizar la petición al servicio externo
    return new Promise((resolve, reject) => {
        //Simular el tiempo de espera de la búsqueda del usuario en al servicio externo
        setTimeout(() => {
            //Lista la usuarios existentes
            const listaUsuarios = {
                1: {nombre: "Joel", edad: 22},
                2: {nombre: "Pedro", edad: 20},
                3: {nombre: "Luis", edad : 30},
                4: {nombre: "Lucia", edad: 28}
            }
            
            let usuario = listaUsuarios[ID] //Solicito el usuario por medio de su ID

            if(usuario){
                resolve(usuario)
            }else{
                reject(new Error("El usuario con el id " + ID + " no fue encontrado"))
            }

            
        }, 2000);
    })
}

//Paso 2. Ejecutamos nuestra promesa
//console.log(buscarUsuario(1)); //retorna una promesa

buscarUsuario(9).then(
    //Definición función que quiero que se ejecute como resolve
    funcionResolve
)
.catch(
    //Definición de la función que quiero que se ejectute cuando no existe el id en la base de datos
    (error) => {console.log(error);}
)