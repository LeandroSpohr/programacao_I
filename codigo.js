function soma() {
  var valor1 = document.getElementById("valor1").value;
  var valor2 = document.getElementById("valor2").value;

  var soma = +valor1 + +valor2;

  var resultado = document.getElementById("resultado");

  resultado.value = soma;

}