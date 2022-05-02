const chaveProdutos = 'PRODUTOS'; // key para uso no localstorage

function cargaInicial() {
  var valores = [
    {
      url: 'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?k=20&m=1249496770&s=612x612&w=0&h=GR8ow3G0QWgkuhYPyEafoL5TMdAgzJvc7rxgOahqxO4=',
      titulo: 'Tênis 1',
      descricao: 'Tênis confortável para caminhada'
    },
    {
      url: 'https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428?k=20&m=956501428&s=612x612&w=0&h=UC4qdZa2iA0PJvv0RIBlJDyF80wxFyLPq4YWvZa30Sc=',
      titulo: 'Tênis 2',
      descricao: 'Tênis confortável para corrida'
    },
    {
      url: 'https://images.freeimages.com/images/small-previews/5af/sport-shoes-1417482.jpg',
      titulo: 'Tênis 3',
      descricao: 'Sapato esportivo'
    }
  ];

  valores = JSON.stringify(valores); // converte o array em string pra salvar no localstorage
  localStorage.setItem(chaveProdutos, valores); // salva o array como string no localstorage
}

function mostraValores() {
  var valores = localStorage.getItem(chaveProdutos); // pega os valores como string no localstorage
  valores = JSON.parse(valores); // converte a string em array

  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  valores.forEach((valor) => { // para cara registro no array executa o processo abaixo
    const divCard = document.createElement('div'); // cria uma div
    divCard.className = 'card col'; // insere a classe do bootstrap
    divCard.setAttribute('style', 'width: 18rem');

    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';

    const img = document.createElement('img');
    img.setAttribute('src', valor.url);
    img.setAttribute('style', 'max-height: 190px; width: fit-content; align-self: center;'); // seta alguns estilos direto na tag

    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerHTML = valor.titulo; // adiciona o conteudo entre a abertura e fechamento da tag

    const p = document.createElement('p');
    p.className = 'card-text';
    p.innerHTML = valor.descricao;

    divCard.appendChild(img); // insere a img dentro da divCard
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);

    const grid = document.getElementById('grid');
    grid.appendChild(divCard); // adiciona a divCard dentro do grid
  });
}

function cadastrar() {
  var titulo = document.getElementById('titulo').value;
  var descricao = document.getElementById('descricao').value;
  var url = document.getElementById('url').value;

  const produto = {
    titulo,
    descricao,
    url,
  }

  var valores = localStorage.getItem(chaveProdutos); // pega os valores como string no localstorage
  valores = JSON.parse(valores); // converte a string em array

  if (!valores) {
    valores = [];
  }

  valores.push(produto);

  valores = JSON.stringify(valores);
 
  localStorage.setItem(chaveProdutos, valores);
  alert('cadastrado com sucesso!')
}

// cargaInicial() // carrega valores iniciais no localstorage
// mostraValores() // renderiza os produtos no documento