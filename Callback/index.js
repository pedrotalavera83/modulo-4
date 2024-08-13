//Aquí declaro la función, la estoy definiendo
function suma(num1, num2){
    return num1 + num2;
}
function resta(num1, num2){
    return num1 - num2;
}
function multi(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
}
function poten(num1, num2){
    return Math.pow(num1,num2);
}
function hola(){
    return "Hola";
}
function hello(){
    return "Hello";
}

//Implementación de la función
console.log(suma(1,2)); //-> 3
console.log(suma); //-> imprime la DECLARACIÓN de la función

hola(); // -> Aquí se ejecuta la función
console.log(hola); //-> imprime la DECLARACIón de la función

function saludar(saludo){
    console.log(saludo()); //->
}

saludar(hola); //-> Aquí se ejecuta la función y se pasa como argumento la función hola
saludar(hello);


function operacion(num1, num2, oper){
    console.log(oper(num1, num2)); //
}

operacion(2, 3, suma); //-> 5
operacion(2, 3, resta); //-> -1
operacion(2, 3, multi); //-> 6
operacion(2, 3, div); //-> 0.666667
operacion(2, 3, poten); //-> 8