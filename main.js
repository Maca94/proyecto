let nombreUsuario = prompt ("Ingrese su nombre");
alert ("Bienvenid@ "+ nombreUsuario + " a CIADYR!");

let edadMinima = 6
let edadJuvenil = 12
let edadMayor = 18
let edad = prompt ("Ingresa la edad del interesado");
if (edad >= edadMinima) {
    alert ("Usted puede practicar alguno de nuestros deportes");
}
else {
    alert ("Te esperamos cuando cumplas 6 años");
}


if (edad >= edadMinima && edad < edadJuvenil){
    alert ("Perteneces a la Categoria Infantil");
}
else if (edad <= edadJuvenil && edad < edadMayor) {
    alert ("Perteneces a la Categoria Juvenil");
} 
else {
    alert ("Perteneces a la Categoria Mayores");
}

let valorCuota = 1500
let calculadora = prompt ("Ingrese el total de cuotas que desee abonar");

function multiplicar(valorCuota, calculadora) {
    return valorCuota * calculadora;
   }
   let resultado = multiplicar(valorCuota, calculadora);

   let totalCuota= alert ("El total a pagar es de " + resultado +" $ ");

// CONSULTAR

/*
if (totalCuota >= 7500) {
    alert ("Tenes un 10% de descuento en el total a abonar");
}
else if (totalCuota == 15000) {
    alert ("Tenes un 20% de descuento en el total a abonar");
}
else {
    alert ("Consulta por las promociones disponibles para tu pago");
}
*/

//PROBANDO CLASE 17
class Jugador{
    constructor (nombre, edad, categoria, contacto){
        this.nombre = nombre;
        this.edad = edad;
        this.categoria = categoria;
        this.contacto = contacto;
    }
 datos (){
     console.log ("Me llamo " + this.nombre + ", tengo " + this.edad + " años por que lo que soy categoria " + this.categoria + "y mi telefono es " + this.telefono )
 
 const Jugador1 = new Jugador ({nombre: "Matias", edad: 16, categoria: "Juvenil", contacto: 2215454445})
    
