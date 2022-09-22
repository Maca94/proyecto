let nombreUsuario = prompt ("Ingrese su nombre");
alert ("Bienvenid@ "+ nombreUsuario + " a CIADYR!")

let edad = prompt ("Ingresa la edad del interesado")

if (edad>=6 && edad<=13) {
    alert("Categoria Infantil");    
}
else (edad>13 && edad<18) {
    alert("Categoria Juvenil");
}
else (edad >=18) {
    alert("Categoria Mayores");
}
else (edad <6){
    alert("Te esperamos cuando cumplas 6")
}

/*
while(entrada <= 6 ){
    switch (entrada) {
    case edad >= 6 && edad <=13:
    alert("Categoria Infantil");
    break;
    case edad >13 && edad <18:
    alert("Categoria Juvenil");
    break;
    case edad >=18:
    alert("Categoria Mayores")
    default:
    alert("Consultanos tus dudas")
    break;      
    }
    entrada = prompt("Ingrese la edad del interesado");
   }
*/

