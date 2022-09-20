//declarando variables

let nombre = "Macarena";
let edad = 28;
const DNI = 38512199;

edad = 29;

//operaciones

let numA = 10;
let numB = 15;

//let resultado = numA + numB;

//concatenar
//console.log(nombre + " tiene " + edad);

//prompt
//let nombreUsuario = prompt("Cuál es tu nombre?");
//let edadUsuario = prompt("Cuál es tu edad?");
//let oracion = nombreUsuario + " tiene "+ edadUsuario + " años."

//alert(oracion)

//ejercicio

//let nombreCompleto = prompt ("Ingresa tu nombre completo");
//let saludo = prompt ("¡Hola " + nombreCompleto + "!")
//console.log(saludo)

//clase 14
// let numero = 10;
// let texto = "Esto es texto";
// let numeroUsuario = prompt("Ingrese un numero");
// let resultado = numero + parseInt(numeroUsuario);
// alert(El resultado de la multiplicacion es "+ resultado");

//Condicionales

/* let edadMinima = 18;
let edadUsuario = prompt("Ingrese su edad");

 if(edadUsuario >= edadMinima){
   alert("Bienvenido, podes entrar")
 }
 else{
    alert("No podes entrar")
}
*/

/*
let edadMinima = 16;
let edadUsuario = prompt("Ingrese su edad");
let paisUsuario = prompt("Ingrese su pais")

if(edadUsuario >= edadMinima && paisUsuario == "Argentina"){
    alert("Bienvenido, podes votar")
}
else{
    alert("No podes votar")
}
*/

let limiteMenor = 10;
let limiteMayor = 50
let numero = prompt("Ingrese un numero random")

if (numero>limiteMenor && numero){
    alert("Adivinaste mi numero!")
}
else {
    alert("Fallaste!")
}

