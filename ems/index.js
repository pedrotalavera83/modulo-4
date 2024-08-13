// Estamos importando la dependencia de picocolors usando la estructura de ESM

import pc from "picocolors"

//Paso 2 para utilizar código de otros archivos: Utilizar la sintaxis import {} from "archivo.js"

import {nombre, apellidos} from "./datos.js"
//No necesito el uso de {} cuando sólo exporto un elemento por defecto (uso "export default")
import PI from "./matematicas/constantes.js"
import {suma, resta} from "./matematicas/operaciones.js"

console.log(
    pc.green(`How are ${pc.italic(`you`)} doing?`)
)

console.log(
    pc.bgMagenta(nombre + " " + apellidos)
);
console.log(pc.green(PI));
console.log(pc.bgYellow(suma(3,5)));
console.log(resta(3,5));