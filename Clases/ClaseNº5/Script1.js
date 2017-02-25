var string = "Hola";//Esto es un string cadena de caracteres
var number = 20;//Esto es un integer un numero
var decimal = 20.10;//Esto es un decimal
var boolean = true;//Esto es un booleano true o flase
var objeto = { nombre: "Thomas", edad: 16, altura: 1.68, soymayordeedad: false, nadar: function () {console.log("estoy nadando") } };
var arreglo = [objeto, boolean, decimal, number, string];
document.write("<p>" + string + "</p>");
document.write("<br/>")
document.write("<p>" + number + "</p>");
document.write("<p>" + decimal + "</p>");
document.write("<p>" + boolean + "</p>");
document.write("<p>" + objeto.nombre + " " + objeto.edad + " " + objeto.altura + " " + objeto.soymayordeedad + " " + "</p>");
//document.write("<p>" + arreglo + "</p>");

document.write(arreglo[0].nombre);

document.write(arreglo[0].nombre + " " + arreglo[0].edad + " " + arreglo[0].altura + " " + arreglo[0].soymayordeedad);
document.write(arreglo[1] + arreglo[2] + arreglo[3] + arreglo[4]);