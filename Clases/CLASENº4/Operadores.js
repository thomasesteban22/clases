var minombre = "thomas";
var miapellido = "ariza";
var nombreCompleto = minombre +" - " +miapellido;
console.log(nombreCompleto);


var videojuegos1 = 30;
var videojuegos2 = 650;
var videojuegos3 = "20";
var todosmisvideojuegos = videojuegos1 + videojuegos2 + videojuegos3;
console.log(todosmisvideojuegos);


var notas1 = 70;
var notas2 = 40;
var total = notas1 + notas2;
var perdidas = 20;
var totaltotal = total - perdidas;
console.log(totaltotal);


var valordia= 5000;
var diastrabajados = 10;
var ganancia = valordia * diastrabajados;
console.log(ganancia);


var totalAlAño = 75000000;
var diasTrabajados = 200;
var valordia = totalAlAño / diasTrabajados;
console.log(valordia);


var notaRequerida = 5;
var minota = 4.5;
var pase = notaRequerida === minota;
console.log(pase);


var soyMayorDeEdad = false;
console.log(soyMayorDeEdad);
soyMayorDeEdad = !soyMayorDeEdad;
console.log(soyMayorDeEdad);


var precioUnidad = 3000;
var precioPagado = 3000;
var cambio = precioUnidad !== precioPagado;
console.log(cambio);

var miNota2 = 4.9;
var notaRequerida2 = 5;
if (miNota2 === notaRequerida) {
    console.log("Si paso");
}
else {
    console.log("No paso");
}



var dinero2 = 6000;
var costo2 = 5000;
if (dinero2 >= costo2) {
    console.log("Si alcanza");
}
else {
    console.log("No le alcanza");
}

var miedad3 = 21;
var edadrequerida3 = 21;
if (miedad3 < edadrequerida3) {
    console.log("No entra");
}
else {
    console.log("Si entra");
}


var valor1 = 20;
var valor2 = 800000;
function multiplicarTotal(a, b){
    var total = a * b;
    return total;
}

var totalprecio2 = multiplicarTotal(valor1, valor2);
console.log(totalprecio2);


var antes = 2000000
var despues = 600000
function restarDespues(c, d) {
    var total = c - d;
    return total;
}
var valordespues = restarDespues(antes, despues);
console.log(valordespues);


var cantidadSamsung = 10;
var valorCuSamsung = 1300000;
var totalSamsungPrecio = multiplicarTotal(cantidadSamsung, valorCuSamsung);
console.log(totalSamsungPrecio);


var cantidadIphones = 30;
var valorCuIphone = 3000000;
var totalIphonePrecio = multiplicarTotal(cantidadIphones, valorCuIphone);
console.log(totalIphonePrecio);


var ahorros = 10000000;
var gastos = 2300000;
var DespuesDe = restarDespues(ahorros, gastos);
console.log(DespuesDe);