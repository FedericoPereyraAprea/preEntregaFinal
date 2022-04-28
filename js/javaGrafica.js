//Inicio de Sesión 
let user = "javi";
let password = "gimenez";
let login;
do {
	let userInput = prompt("Ingresar usuario por favor");
	let passwordInput = prompt("Ingresar password por favor");
 	login = (userInput == user && passwordInput == password)? true : false;
} while (login == false);
alert("¡Bienvenido " + user + " a graficaB377!");

//Algunos productos
class Productos {
	constructor(nombre, precio, stock) {
		this.nombre = nombre;
		this.precio = precio;
		this.stock = stock;
	}
}
const producto1 = new Productos("Resma A4 Autor", 650, 87)
const producto2 = new Productos("Resma A3 Autor", 900, 64)
const producto3 = new Productos("Taza magica personalizada", 500, 30)
const producto4 = new Productos("Sello automatico", 450, 42)
console.log(producto1, producto2, producto3, producto4)

// Suma de productos
const sumar = (resmaA4, resmaA3, tazas, sellos) => resmaA4 + resmaA3 + tazas + sellos
let resmaA4 = prompt("¿cuantas Resmas A4 desea llevar?") * producto1.precio
let resmaA3 = prompt("¿cuantas Resmas A3 desea llevar?") * producto2.precio
let tazas = prompt("¿cuantas Tazas personalizadas desea llevar?") * producto3.precio
let sellos = prompt("¿cuantos Sellos automaticos desea llevar?") * producto4.precio
const subTotales = [resmaA4, resmaA3, tazas, sellos] 
console.log(subTotales)

// valor total de compra con envio incluido
const precioEnvio1 = 1.10
const precioEnvio2 = 1.15
let compraTotal = sumar(resmaA4, resmaA3, tazas, sellos)
function calcularEnvio(compraTotal, envio){
	return compraTotal * envio
}
if (compraTotal < 2500){
	console.log("Envios disponibles solo en compras mayores de 2.500. Total del pedido sin envio: " + compraTotal)
}
else if(compraTotal <= 10000){	
	console.log("el valor de la compra con envio incluido es de " + compraTotal * precioEnvio1)	
}
else if(compraTotal >= 10001){
	console.log("el valor de la compra con envio incluido es de " + compraTotal * precioEnvio2)
}

