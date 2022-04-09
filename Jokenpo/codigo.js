function jogar(value) {
  const qtdJogos = "JOGOS"; // cria constante com a chave para o localstorage
  const vitorias = "VITORIAS"; // cria constante com a chave para o localstorage

  var jogadorEscolheuPedra = +value === 1; // se o value igual a 1 significa q a escolha foi Pedra
  var jogadorEscolheuPapel = +value === 2; // se o value igual a 2 significa q a escolha foi Papel
  var jogadorEscolheuTesoura = +value === 3; // se o value igual a 3 significa q a escolha foi Tesoura

  const escohas = ['Pedra', 'Papel', 'Tesoura']; // cria um array com as escolhas possíveis

  var valorTotal = +localStorage.getItem(qtdJogos) + 1;
  localStorage.setItem(qtdJogos, valorTotal);

  var escolhaPC = Math.floor(Math.random() * (3 - 1) + 1); // gera um valor aleatório de 1 a 3 para ser a escolha do PC
  var pcEscolheuPedra = +escolhaPC === 1; // se o value igual a 1 significa q a escolha foi Pedra
  var pcEscolheuPapel = +escolhaPC === 2; // se o value igual a 2 significa q a escolha foi Papel
  var pcEscolheuTesoura = +escolhaPC === 3; // se o value igual a 3 significa q a escolha foi Tesoura

  var labelJogador = document.getElementById("escolhajogador");
  labelJogador.innerHTML = 'Sua escolha: ' + escohas[+value - 1]; // pega o valor no array com o index (-1 por que o index começa em zero)

  var labelPC = document.getElementById("escolhapc");
  labelPC.innerHTML = 'Escolha Jogador: ' + escohas[+escolhaPC - 1];// pega o valor no array com o index (-1 por que o index começa em zero)

  if (jogadorEscolheuPedra && pcEscolheuPapel) { // testa caso de derrota ('&&' - significa 'E' então as duas condições devem ser verdadeiras)
    derrota();
    return // para a execução da função
  }
  
  if (jogadorEscolheuPapel && pcEscolheuTesoura) { // testa caso de derrota ('&&' - significa 'E' então as duas condições devem ser verdadeiras)
    derrota();
    return // para a execução da função
  }
  
  if (jogadorEscolheuTesoura && pcEscolheuPedra) { // testa caso de derrota ('&&' - significa 'E' então as duas condições devem ser verdadeiras)
    derrota();
    return // para a execução da função
  }

  if (+value !== +escolhaPC) { // verifica se não deu empate para dar a vitória
    var qtdVitoria = localStorage.getItem(vitorias);
    localStorage.setItem(vitorias, +qtdVitoria + 1);
    resultado('Vitória');
  } else {
    resultado('Empate');
  }
  atualiza();
}

function derrota() {
  const derrotas = "DERROTAS"; // cria constante com a chave para o localstorage

  var qtdDerrotas = localStorage.getItem(derrotas);
  localStorage.setItem(derrotas, +qtdDerrotas + 1);
  resultado('Derrota');
  atualiza();
}

function atualiza() {
  const qtdJogos = "JOGOS"; // cria constante com a chave para o localstorage
  const vitorias = "VITORIAS"; // cria constante com a chave para o localstorage
  const derrotas = "DERROTAS"; // cria constante com a chave para o localstorage

  var qtdTotal = localStorage.getItem(qtdJogos); // obtem o valor do total
  
  var labelTotal = document.getElementById("total");
  labelTotal.innerHTML = 'Partidas Jogadas: ' + +qtdTotal; // seta no label o valor do total

  var qtdDerrotas = localStorage.getItem(derrotas); // obtem o valor das derrotas

  var labelDerrotas = document.getElementById("derrotas");
  labelDerrotas.innerHTML = 'Derrotas: ' + +qtdDerrotas; // seta no label o valor das derrotas

  var qtdVitorias = localStorage.getItem(vitorias); // obtem o valor das vitorias

  var labelVitorias = document.getElementById("vitorias");
  labelVitorias.innerHTML = 'Vitorias: ' + +qtdVitorias; // seta no label o valor das vitorias
}

function resultado(mensagem) {
  var labelResultado = document.getElementById("resultado");
  labelResultado.innerHTML = mensagem; // seta o resultado
}
