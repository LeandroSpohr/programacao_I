function soma() {
  var valor1 = document.getElementById("valor1").value;
  var valor2 = document.getElementById("valor2").value;

  var soma = +valor1 + +valor2;

  var resultado = document.getElementById("resultado");

  resultado.value = soma;

}

function jogar(value) {
  var qtdJogos = "JOGOS";
  var vitorias = "VITORIAS";
  var derrotas = "DERROTAS";
  var total = +localStorage.getItem(qtdJogos) + 1;
  localStorage.setItem(qtdJogos, total);

  var escolhaPC = Math.floor(Math.random() * (3 - 1) + 1);

  if (escolhaPC === value) {
    alert("empate");
  }
  total();
}

function total() {
  var qtdJogos = "JOGOS";

  var total = localStorage.getItem(qtdJogos);
  
  var inputTotal = document.getElementById("total");
  inputTotal.value = total;
}
