var titulo = document.querySelector("h1");
titulo.textContent = "Thomasññ";
var pe = document.querySelector("p");
pe.textContent = "hola";


var t = 't';
var h='h';
var o = 'o';
var m = 'm';
var a = 'a';
var s = 's';
var minombre = t + h + o + m + a + s;
var elemento = document.querySelector("h1");
elemento.textContent = minombre;

var h1_1 = document.getElementById("h1-1");
var h1_2 = document.getElementById("h1-2");
h1_2.textContent = minombre;

var miapellido = "Ariza";

console.log(miapellido);
miapellido;


var miedad = "16";
var estatura = "1.68";
var grado = "10";
console.log(miedad);
console.log(estatura);
console.log(grado);
var miedadelement = document.getElementById("miedad");
miedadelement.textContent = miedad;
var estaturaelement = document.getElementById("estatura");
estaturaelement.textContent = estatura;
var gradoelement = document.getElementById("grado");
gradoelement.textContent = grado;

var cliente1 = "Esteban";
var cliente1direccion = "calle74";
var cliente1calificacion ="AA"

var cliente2 = "Felipe";
var cliente2direccion = "calle105";
var cliente2calificacion = "AAA"

var cliente3 = "Andrea";
var cliente3direccion = "calle345";
var cliente3calificacion = "A"

var cliente4 = "Juan";
var cliente4direccion = "calle32";
var cliente4calificacion = "AA"

var cliente1element = document.getElementById("cliente1");
cliente1element.textContent = cliente1 + " / Direccion: " + cliente1direccion + " / " + cliente1calificacion;

var cliente2element = document.getElementById("cliente2");
cliente2element.textContent = cliente2 + " / " + cliente2direccion + " / " + cliente2calificacion;

var cliente3element = document.getElementById("cliente3");
cliente3element.textContent = cliente3 + " / " + cliente3direccion + " / " + cliente3calificacion;

var cliente4element = document.getElementById("cliente4");
cliente4element.textContent = cliente4 + " / " + cliente4direccion + " / " + cliente4calificacion;

var producto1 = "pera";
var producto1cantidad = 22;
var producto1valor = 250;
var producto1total = producto1valor * producto1cantidad;
var producto1disponible = true;

var producto1nombreelement = document.getElementById("producto1nombre");
producto1nombreelement.textContent = producto1;

var producto1cantidadelement = document.getElementById("producto1preciocu");
producto1cantidadelement.textContent = producto1cantidad;

var producto1valorelement = document.getElementById("producto1cantidad");
producto1valorelement.textContent = producto1valor;

var producto1totalelement = document.getElementById("producto1preciototal");
producto1totalelement.textContent = producto1total;

var producto1disponibleelement = document.getElementById("producto1disponible");
producto1disponibleelement.textContent = producto1disponible;

var producto2 = "manzana";
var producto2cantidad = 76;
var producto2valor = 160;
var producto2total = producto2valor * producto2cantidad
var producto2disponible = false;

var producto2nombreelement = document.getElementById("producto2nombre");
producto2nombreelement.textContent = producto2;

var producto2cantidadelement = document.getElementById("producto2preciocu");
producto2cantidadelement.textContent = producto2cantidad;

var producto2valorelement = document.getElementById("producto2cantidad");
producto2valorelement.textContent = producto2valor;

var producto2totalelement = document.getElementById("producto2preciototal");
producto2totalelement.textContent = producto2total;

var producto2disponibleelement = document.getElementById("producto2disponible");
producto2disponibleelement.textContent = producto2disponible;


var producto3 = "mandarina";
var producto3cantidad = 87;
var producto3valor = 240;
var producto3total = producto3valor * producto3cantidad;
var producto3disponible = true;

var producto3nombreelement = document.getElementById("producto3nombre");
producto3nombreelement.textContent = producto3;

var producto3cantidadelement = document.getElementById("producto3preciocu");
producto3cantidadelement.textContent = producto3cantidad;

var producto3valorelement = document.getElementById("producto3cantidad");
producto3valorelement.textContent = producto3valor;

var producto3totalelement = document.getElementById("producto3preciototal");
producto3totalelement.textContent = producto3total;

var producto3disponibleelement = document.getElementById("producto3disponible");
producto3disponibleelement.textContent = producto3disponible;

var producto4 = "sandia";
var producto4cantidad = 45;
var producto4valor = 700;
var producto4total = producto4valor * producto4cantidad;
var producto4disponible = false;

var producto4nombreelement = document.getElementById("producto4nombre");
producto4nombreelement.textContent = producto4;

var producto4cantidadelement = document.getElementById("producto4preciocu");
producto4cantidadelement.textContent = producto4cantidad;

var producto4valorelement = document.getElementById("producto4cantidad");
producto4valorelement.textContent = producto4valor;

var producto4totalelement = document.getElementById("producto4preciototal");
producto4totalelement.textContent = producto4total;

var producto4disponibleelement = document.getElementById("producto4disponible");
producto4disponibleelement.textContent = producto4disponible;
//-------------------------------------------------------------------------------
var producto1 = {
    nombre: "pera",
    cantidad: 22,
    valor: 250,
    preciototal: 0,
    disponible : true,
}
var producto2 = {
    nombre: "manzana",
    cantidad: 76,
    valor: 160,
    preciototal: 0,
    disponible: false,
}
var producto3 = {
    nombre: "mandarina",
    cantidad: 87,
    valor: 240,
    preciototal: 0,
    disponible: true,
}
var producto4 = {
    nombre: "sandia",
    cantidad: 45,
    valor: 700,
    preciototal: 0,
    disponible: false,
}
var productos = [producto1, producto2, producto3, producto4]

for (var i = 0; i < 4; i++) {
    console.log(productos[i].nombre);
    console.log(productos[i].cantidad);
    console.log(productos[i].valor);
    console.log(productos[i].preciototal);
    console.log(productos[i].disponible);
}
