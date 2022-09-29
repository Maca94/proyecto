let nombreUsuario = prompt ("Ingrese su nombre");
alert ("Bienvenid@ "+ nombreUsuario + " a CIADYR!")

let edadMinima = 6
let edadJuvenil = 12
let edadMayor = 18
let edad = prompt ("Ingresa la edad del interesado");
if (edad >= edadMinima) {
    alert ("Usted puede practicar alguno de nuestros deportes")
}
else if (edad >= edadMinima && edad < edadJuvenil) {
    alert ("Categoria Infantil")
}
else if (edad < edadJuvenil && edad < edadMayor) {
    alert ("Categora Juvenil")
}
else if (edad <= edadMayor) {
    alert ("Categoria Mayores")
}
else {
    alert ("Te esperamos cuando cumplas 6 años")
}
