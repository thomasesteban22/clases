var sumar = document.getElementById("sumar");
var resetear = document.getElementById("resetear");
var primero = document.getElementById("primero");
var segundo = document.getElementById("segundo");
var resultado = document.getElementById("resultado");
var restar = document.getElementById("restar");
var dividir = document.getElementById("dividir");
var multiplicar = document.getElementById("multiplicar")
function sumarElementos(a, b) {
    var total = a + b;
    return total;
}
sumar.onclick = function () {
    var valorinicial = parseInt(primero.value);
    var valorsecundario = parseInt(segundo.value);
    var resultadototal = sumarElementos(valorinicial, valorsecundario);  
    resultado.textContent = resultadototal;
}

resetear.onclick = function () {
    primero.value = "";
    segundo.value = "";
    resultado.textContent = "";
}
function restarElementos(a, b) {
    var total = a - b;
    return total;
}
function dividirElementos(a, b) {
    var total = a / b;
    return total;
}
function multiplicarElementos(a, b) {
    var total = a * b;
    return total;
}
restar.onclick = function () {
    var valoriniciarl = parseInt(primero.value);
    var valorsecundario = parseInt(segundo.value);
    var resultadototal = restarElementos(valoriniciarl, valorsecundario);
    resultado.textContent = resultadototal;
}
dividir.onclick = function () {
    var valorinicial = parseInt(primero.value);
    var valorsecundario = parseInt(segundo.value);
    var resultadototal = dividirElementos(valorinicial, valorsecundario);
    resultado.textContent = resultadototal;
}
multiplicar.onclick = function () {
    var valorinicial = parseInt(primero.value);
    var valorsecundario = parseInt(segundo.value);
    var resultadototal = multiplicarElementos(valorinicial, valorsecundario);
    resultado.textContent = resultadototal;
}


